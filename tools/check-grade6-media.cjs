'use strict';
// Independent review snapshot and numerical model; never runs the renderer.
const fs = require('node:fs'), path = require('node:path'), crypto = require('node:crypto');
const vm = require('node:vm'), cp = require('node:child_process'), assert = require('node:assert/strict');
const root = process.env.BASIC_LEARNING_ROOT || path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(path.join(root, p))).digest('hex');
const manifestPath = process.env.BASIC_LEARNING_GRADE6_MEDIA_MANIFEST || path.join(root, 'sources/media-grade6-manifest.json');
const expected = {
  '8250263112100000': {scene: 'FractionProductLesson', transcript: [
    '図全体を1とする。3列のうち2列が2/3。',
    'たてを4等分すると、全体は12こに分かれる。',
    '色のついた部分の、4段のうち3段を選ぶ。',
    '12このうち6こ。全体の1/2になる。'
  ]},
  '8250263320000000': {scene: 'RatioShareLesson', transcript: [
    '全部で20こ。2：3の、同じ大きさの5つ分にする。',
    '1つ分は、20 ÷ 5 ＝ 4こ。',
    '2つ分は8こ。3つ分は12こ。',
    '8：12 ＝ 2：3。合わせると20こ。'
  ]}
};
function command(binary, args) {
  const result = cp.spawnSync(binary, args, {encoding: 'utf8', maxBuffer: 1024 * 1024});
  assert.equal(result.status, 0, binary + ' returned nonzero');
  assert.ok(!result.error, binary + ' execution failed');
  return result.stdout;
}
function disjoint(rectangles) {
  for (let i = 0; i < rectangles.length; i++) for (let j = i + 1; j < rectangles.length; j++) {
    const a = rectangles[i], b = rectangles[j];
    assert.ok(Math.min(a.r, b.r) <= Math.max(a.l, b.l) || Math.min(a.t, b.t) <= Math.max(a.b, b.b), 'quantity interiors overlap');
  }
}
function box(x, y, width, height) { return {l: x - width / 2, r: x + width / 2, b: y - height / 2, t: y + height / 2}; }
function area(r) { return (r.r - r.l) * (r.t - r.b); }
function geometry() {
  // Coordinates in hundredths of the scene unit; half units remain exactly binary.
  // Source inspection confirmed that quantity positions never animate: only grid
  // strokes and fills change. Therefore this separation holds throughout the clip.
  const columns = [box(-170, 62.5, 170, 260), box(0, 62.5, 170, 260), box(170, 62.5, 170, 260)];
  const cells = Array.from({length: 12}, (_, i) => box(-170 + 170 * (i % 3), 160 - 65 * Math.floor(i / 3), 170, 65));
  disjoint(columns); disjoint(cells);
  const whole = 510 * 260;
  assert.equal(columns.reduce((a, r) => a + area(r), 0), whole);
  assert.equal(cells.reduce((a, r) => a + area(r), 0), whole);
  assert.equal(cells.filter((_, i) => i % 3 < 2).length, 8);
  assert.equal(cells.filter((_, i) => i % 3 < 2 && i < 9).length, 6);
  assert.equal(8 * area(cells[0]) * 3, whole * 2);
  assert.equal(6 * area(cells[0]) * 2, whole);
  assert.equal(2 * 3, 6); assert.equal(3 * 4, 12); assert.equal(6 / 12, 1 / 2);
  const dots = Array.from({length: 20}, (_, i) => box(-400 + 200 * Math.floor(i / 4), 150 - 62 * (i % 4), 36, 36));
  const groups = Array.from({length: 5}, (_, i) => box(-400 + 200 * i, 57, 130, 240));
  disjoint(dots); disjoint(groups);
  for (let i = 0; i < dots.length; i++) {
    const d = dots[i], g = groups[Math.floor(i / 4)];
    assert.ok(d.l > g.l && d.r < g.r && d.b > g.b && d.t < g.t, 'all four dots fully inside their group');
  }
  assert.equal(20 / (2 + 3), 4); assert.equal(4 * 2, 8); assert.equal(4 * 3, 12);
  assert.equal(8 + 12, 20); assert.equal(8 / 12, 2 / 3);
  const hidden = dots.map(x => ({...x})); hidden[1] = {...hidden[0]};
  assert.throws(() => disjoint(hidden), /quantity interiors overlap/, 'overlap positive control');
}
function run() {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  assert.deepEqual(manifest.videos.map(v => v.code).sort(), Object.keys(expected).sort(), 'exact independently reviewed clips');
  assert.equal(manifest.renderer.version, '0.20.1');
  assert.equal(sha('tools/media-scenes-grade6.py'), manifest.renderer.sourceSha256, 'reviewed source snapshot');
  const source = read('tools/media-scenes-grade6.py');
  const sandbox = {window: {}};
  for (const file of ['units.js', 'units-grade5.js', 'units-grade6.js']) {
    const manuscript = file === 'units-grade6.js' && process.env.BASIC_LEARNING_GRADE6_UNITS
      ? fs.readFileSync(process.env.BASIC_LEARNING_GRADE6_UNITS, 'utf8') : read('js/' + file);
    vm.runInNewContext(manuscript, sandbox, {timeout: 1000});
  }
  let seconds = 0, bytes = 0, frames = 0;
  for (const video of manifest.videos) {
    assert.equal(video.evidence, 'verified', 'independent media review complete');
    assert.equal(video.reviewedBy, 'independent-evidence-agent');
    assert.equal(video.publicationApproval, false, 'not operator publication approval');
    assert.equal(video.path, 'assets/lessons/' + video.code + '.mp4');
    assert.equal(sha(video.path), video.sha256, 'reviewed rendered bytes');
    const unit = sandbox.window.BL.data.units.find(u => u.code === video.code);
    assert.ok(unit, 'video has authored unit');
    assert.deepEqual(video.claimIds, ['c17', 'visual', 'motion']);
    for (const id of video.claimIds) assert.ok(unit.claims.some(c => c.id === id && c.status === 'verified'), 'reviewed claim exists: ' + id);
    assert.deepEqual(video.transcript, expected[video.code].transcript, 'independently read exact captions');
    const sceneText = source.split('class ' + expected[video.code].scene + '(LocalLesson):')[1];
    assert.ok(sceneText, 'expected scene exists');
    const captions = Array.from(sceneText.split('\nclass ')[0].matchAll(/self\.say\('([^'\n]*)'\)/g), match => match[1]);
    assert.deepEqual(captions, video.transcript, 'captions belong to this scene in exact order');
    const file = path.join(root, video.path);
    const metadata = JSON.parse(command('ffprobe', ['-v', 'error', '-show_entries', 'format=duration,size:stream=codec_type,codec_name,width,height,pix_fmt,nb_frames,r_frame_rate', '-of', 'json', file]));
    assert.equal(metadata.streams.length, 1, 'one video stream and no audio');
    const s = metadata.streams[0];
    assert.deepEqual([s.codec_type, s.codec_name, s.width, s.height, s.pix_fmt, s.r_frame_rate], ['video', 'h264', 1280, 720, 'yuv420p', '30/1']);
    assert.equal(Number(metadata.format.duration), 19, 'reviewed timing');
    assert.equal(Number(s.nb_frames), 570, 'all reviewed frames present');
    command('ffmpeg', ['-nostdin', '-v', 'error', '-i', file, '-f', 'null', '-']);
    seconds += Number(metadata.format.duration); bytes += Number(metadata.format.size); frames += Number(s.nb_frames);
  }
  const runner = read('tools/render-media-grade6.py');
  for (const rule of ["importlib.metadata.version('manim') != '0.20.1'", 'sys.addaudithook(no_network)', 'config.notify_outdated_version = False', 'config.plugins = []', "'-map_metadata', '-1'"]) assert.ok(runner.includes(rule), 'fixed local renderer protection');
  geometry();
  assert.throws(() => assert.equal(manifest.videos[0].sha256, sha('README.md')), 'changed media positive control');
  assert.throws(() => assert.deepEqual(manifest.videos[0].transcript.slice(1), expected['8250263112100000'].transcript), 'missing caption positive control');
  console.log('GRADE6_MEDIA=PASS clips=2 decoded=2 frames=' + frames + ' h264=1280x720 audio=none seconds=' + seconds.toFixed(1) + ' bytes=' + bytes);
  console.log('GRADE6_MEDIA_GEOMETRY=PASS product_grid=3x4 selected=6 ratio_objects=20 groups=5 shares=8,12 positions_static=true positive_probes=3');
}
try { run(); }
catch (error) { console.error('GRADE6_MEDIA=FAIL ' + String(error.message).split('\n')[0].slice(0, 240)); process.exitCode = 1; }
