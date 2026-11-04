(function () {
  'use strict';
  var BL = window.BL;
  if (!BL || !BL.lessonScenes || BL.grade6Lessons) return;
  var own = function (o, k) { return Object.prototype.hasOwnProperty.call(o, k); };
  var green = '#467060', pale = '#dce9df', orange = '#ad672b', sand = '#f4d9b5', ink = '#343c32', paper = '#fffdf8';
  function e(v) { return String(v).replace(/[&<>"']/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]; }); }
  function n(v) { return Number(v.toFixed(5)); }
  function text(x, y, v, size, id) { return '<text' + (id ? ' id="' + id + '"' : '') + ' x="' + n(x) + '" y="' + n(y) + '" font-size="' + (size || 28) + '" fill="' + ink + '" text-anchor="middle">' + e(v) + '</text>'; }
  function rect(x, y, w, h, fill, id, stroke) { return '<rect id="' + id + '" x="' + n(x) + '" y="' + n(y) + '" width="' + n(w) + '" height="' + n(h) + '" fill="' + fill + '" stroke="' + (stroke || green) + '" stroke-width="1.5"/>'; }
  function line(x1, y1, x2, y2, color, id) { return '<line' + (id ? ' id="' + id + '"' : '') + ' x1="' + n(x1) + '" y1="' + n(y1) + '" x2="' + n(x2) + '" y2="' + n(y2) + '" stroke="' + (color || green) + '" stroke-width="2.5"/>'; }
  function dot(x, y, r, fill, id) { return '<circle id="' + id + '" cx="' + n(x) + '" cy="' + n(y) + '" r="' + r + '" fill="' + fill + '" stroke="' + green + '" stroke-width="2"/>'; }
  function poly(points, fill, id) { return '<polygon id="' + id + '" points="' + points.map(function (p) { return p.join(','); }).join(' ') + '" fill="' + fill + '" stroke="' + green + '" stroke-width="2.5"/>'; }
  function sector(cx, cy, r, a, b, fill, id, stroke) { return '<path id="' + id + '" d="M' + n(cx) + ' ' + n(cy) + ' L' + n(cx + r * Math.cos(a)) + ' ' + n(cy + r * Math.sin(a)) + ' A' + r + ' ' + r + ' 0 0 1 ' + n(cx + r * Math.cos(b)) + ' ' + n(cy + r * Math.sin(b)) + ' Z" fill="' + fill + '" stroke="' + (stroke || green) + '" stroke-width="1.3"/>'; }
  function footer(v) { return text(300, 378, v, 30, 'output-summary'); }
  function def(title, prompt, steps, challenge, state, tryLabel) { return {title: title, prompt: prompt, claimIds: ['motion'], steps: steps.map(function (s) { return {label: s[0], text: s[1], alt: s[2]}; }), challenge: {prompt: challenge[0], options: challenge[1], answer: challenge[2], explanation: challenge[3], claimIds: ['motion']}, tryIt: {label: tryLabel, state: state}}; }
  var items = Object.create(null), draws = Object.create(null);
  items['8250263112100000'] = def('2/3の、その3/4を取る', '2/3×3/4。同じ全体1の長方形で、二つの分け方を重ねよう。', [
    ['全体1を12等分する', '横に3列、たてに4行で12区画。左の2列は全体の2/3で、8区画ある。', '同じ大きさの12区画。左の2列8区画に色があり、2/3を示す。'],
    ['そのうち3/4を選ぶ', '左の2列のうち、上から3行分を取る。重なる部分は2列×3行。', '左2列と上3行の指定を色分けし、重なる6区画を濃い色で示す。'],
    ['1/12が6こ', '重なる区画は6こ。一つの区画は、もとの全体1の1/12。', '12区画の枠を残し、重なる6区画だけを色で示す。'],
    ['半分と確かめる', '6/12は1/2。全体12区画のうち6区画だから、2/3×3/4＝1/2。', '全体12区画と色の6区画を比べ、6/12＝1/2を表示する。']
  ], ['重なる1/12の区画は何こ？', ['6こ', '5こ', '12こ'], '6こ', '横2列×たて3行で6こ。一つは全体の1/12。'], {n: 3}, '同じ2/3×3/4から、自分でためす');
  draws['8250263112100000'] = function (step, p) {
    var b = text(300, 35, '太い枠の全体が1', 27);
    for (var y = 0; y < 4; y++) for (var x = 0; x < 3; x++) { var fill = step === 0 ? (x < 2 ? pale : paper) : step === 1 ? (x < 2 && y < 3 ? green : x < 2 ? pale : y < 3 ? sand : paper) : x < 2 && y < 3 ? green : paper; b += rect(135 + x * 110, 65 + y * 55, 110, 55, fill, 'mul-cell-' + x + '-' + y, fill === green ? paper : green); }
    b += rect(135, 65, 330, 220, 'none', 'mul-whole', ink);
    if (step === 1) b += line(120, 65, 120, 65 + 165 * p, orange, 'mul-guide');
    if (step >= 2) b += text(300, 330, '色6こ・全部12こ', 28);
    return b + footer(step === 0 ? '2/3は、12区画のうち8区画' : step === 1 ? '2列 × 3行 = 6区画' : '2/3 × 3/4 = 6/12 = 1/2');
  };
  items['8250263110000000'] = def('2/3を1つ分として、いくつ分か数える', '3/4÷2/3。二つの分数を、同じ1/12の区画で見よう。', [
    ['同じ1/12にそろえる', '3/4は9/12、2/3は8/12。どちらの帯も、もとの全体1は同じ長さ。', '上は9区画、下は8区画に色がある。各区画は同じ大きさの1/12。'],
    ['8区画で1つ分を囲む', '上の9区画のうち8区画で、2/3が1つ分できる。残りは1区画。', '上の色9区画のうち、最初の8区画をひとまとまりとして囲む。9番目の1区画が残る。'],
    ['残りを、新しい1つ分で読む', '除数の8区画を1つ分とすると、残り1区画はその1/8。もとの全体の1/12とは区別する。', '同じ8区画のまとまりと残り1区画を示し、1つ分の1/8と説明する。'],
    ['1と1/8を分数にする', '9÷8＝9/8。3/4÷2/3＝9/8で、逆数をかける3/4×3/2と同じになる。', '上の9区画は除数8区画の9/8倍。3/4÷2/3＝9/8を示す。']
  ], ['残り1区画は、除数8区画の何分の一？', ['1/8', '1/12', '1/9'], '1/8', 'いま1つ分と見るのは除数の8区画。その1区画なので1/8。'], {divisor: '8'}, '同じ3/4÷2/3から、自分でためす');
  draws['8250263110000000'] = function (step, p) {
    var b = text(300, 40, 'もとの全体1は、どちらも同じ', 27);
    b += rect(60, 90, 480, 55, paper, 'div-whole-top') + rect(60, 230, 480, 55, paper, 'div-whole-bottom');
    for (var i = 0; i < 9; i++) b += rect(60 + i * 40, 90, 40, 55, step > 0 && i === 8 ? sand : pale, 'div-part-' + i);
    for (var j = 0; j < 8; j++) b += rect(60 + j * 40, 230, 40, 55, sand, 'div-unit-' + j);
    if (step > 0) b += line(60, 163, 60 + 320 * (step === 1 ? p : 1), 163, orange, 'div-bracket');
    b += text(300, 203, step < 2 ? '3/4 = 9/12' : '残り1区画は、除数の1/8', 27) + text(300, 327, '除数 2/3 = 8/12', 28);
    return b + footer(step < 2 ? '9区画の中に、8区画はいくつ分？' : '3/4 ÷ 2/3 = 9/8 = 1と1/8');
  };
  items['8250263211200000'] = def('軸の反対側へ、同じ距離を取る', '線対称な三角形を作図しよう。対応する点はどこにある？', [
    ['軸と、もとの三角形を見る', '1マスは1cm。Aは軸から3cm、BとCは軸から1cmの場所にある。', 'たての対称軸の左に三角形ABC。Aは軸から3マス、BとCは1マス離れている。'],
    ['Aの対応点を取る', 'Aから軸へ垂直に進む。軸の反対側にも同じ3cmを取る。', 'Aから軸まで、さらに反対側へ同じ長さの横線が伸び、Aの対応点を示す。'],
    ['BとCも同じように取る', 'BとCからも軸へ垂直に進み、反対側へ1cmずつ取る。', 'BとCの対応点を軸の右1マスに示す。各対応点を結ぶ横線を描く。'],
    ['対応点を結ぶ', '三つの対応点を結ぶ。対応する点の線分は軸と垂直で、その真ん中を軸が通る。', '軸の左右に合同な三角形。三組の対応点は軸から同じ距離で、線分の中点が軸上にある。']
  ], ['Aが軸から3cmなら、対応点は軸から何cm？', ['3cm', '6cm', '1cm'], '3cm', '軸の両側で距離をそろえる。Aから対応点までの全体は6cmになる。'], {axis: 'vertical', point: 'A'}, '同じ三角形で、対応する点をためす');
  draws['8250263211200000'] = function (step, p) {
    var source = [[180, 160], [260, 80], [260, 160]], target = [[420, 160], [340, 80], [340, 160]], b = '';
    for (var i = 0; i < 9; i++) b += line(140 + i * 40, 40, 140 + i * 40, 280, '#dce2d7');
    for (var row = 0; row < 7; row++) b += line(140, 40 + row * 40, 460, 40 + row * 40, '#dce2d7');
    b += line(300, 35, 300, 290, orange, 'sym-axis') + poly(source, pale, 'sym-source');
    if (step === 3) b += poly(target, sand, 'sym-target');
    source.forEach(function (v, i) { b += dot(v[0], v[1], 5, green, 'sym-source-' + i); b += text(v[0] - 20, i === 1 ? v[1] - 17 : v[1] + 27, ['A', 'B', 'C'][i], 23); });
    if (step > 0) { var visible = step === 1 ? 1 : 3; for (var j = 0; j < visible; j++) { var q = (step === 1 && j === 0) || (step === 2 && j > 0) ? p : 1; b += line(source[j][0], source[j][1], source[j][0] + (target[j][0] - source[j][0]) * q, source[j][1], '#75806e', 'sym-guide-' + j) + dot(target[j][0], target[j][1], 5, orange, 'sym-target-' + j) + text(target[j][0] + 20, j === 1 ? target[j][1] - 17 : target[j][1] + 27, ['A′', 'B′', 'C′'][j], 23); } }
    b += text(300, 325, '対称の軸', 27);
    return b + footer(step < 2 ? 'Aと対応点は、軸から3cmずつ' : 'BとCの対応点は、軸から1cmずつ');
  };
  items['8250263320000000'] = def('20こを、2:3で分ける', '比の2と3を足すと5。まず一つのまとまりを求めよう。', [
    ['全部で20こ', '20こを、同じ個数の5列に並べる。全部の個数は変えない。', '丸20こを5列4行に並べる。まだ分ける先は決めていない。'],
    ['5まとまりに分ける', '比2:3は、全部で2＋3＝5まとまり。20÷5＝4こずつ。', '5列を枠で囲む。どの列も4こで、全部20こ。'],
    ['2まとまりと3まとまりを選ぶ', 'Aに2列、Bに3列を対応させる。1列は同じ4こ。', '左2列8こを緑、右3列12こを別の色で示す。丸の位置と数は変わらない。'],
    ['二つを合わせて確かめる', 'Aは4×2＝8こ、Bは4×3＝12こ。8＋12＝20こに戻る。', 'A8こ、B12このまとまり。比は2:3、合計20こを確認する。']
  ], ['1まとまりは何こ？', ['4こ', '5こ', '10こ'], '4こ', '比の合計は2＋3＝5。全体20を5でわる。'], {a: 2, total: 20}, '同じ20こを2:3から、自分でためす');
  draws['8250263320000000'] = function (step, p) {
    var b = text(300, 40, '全体20こ', 29);
    for (var col = 0; col < 5; col++) { if (step > 0) b += rect(62 + col * 95, 65, 86, 190, 'none', 'ratio-group-' + col, step === 1 ? '#8a987c' : green); for (var row = 0; row < 4; row++) b += dot(105 + col * 95, 95 + row * 44, 14, step >= 2 && col >= 2 ? orange : green, 'ratio-dot-' + col + '-' + row); }
    if (step === 1) b += line(62, 275, 62 + 466 * p, 275, orange, 'ratio-guide');
    b += text(300, 320, step < 2 ? '2 + 3 = 5まとまり' : 'A：2まとまり　B：3まとまり', 27);
    return b + footer(step < 2 ? '20 ÷ 5 = 4こずつ' : '4 × 2 = 8、4 × 3 = 12');
  };
  items['8250263230000000'] = def('円を分け、面積の式につなぐ', '半径3cmの円。円弧を保ったまま細かく分けて考えよう。', [
    ['半径3cmを確かめる', '中心から円周までが半径。半径3cmの円を使う。', '中心から円周への半径を示す円。半径は3cm。'],
    ['16個の等しい扇形に分ける', '円を16等分する。一つ一つは正確な円弧を持ち、合わせれば元の円になる。', '同じ半径と角度の16扇形。中心からの切断線が伸び、全体の面積は変わらない。'],
    ['並べ替えた形を見る', '同じ16片を交互に並べた図へ切り替える。まだ曲線が残るので、完全な長方形ではない。', '同じ16扇形を交互に並べた形。円弧は残り、片の面積と合計は変わらない。'],
    ['細かくすると、長方形に近づく', 'さらに細かくすると、横は円周の半分、縦は半径に近づく。円周率3.14として、3×3×3.14＝28.26cm²。', '扇形を並べた近似的な形と、半径×半径×円周率の式。16分割の幅や高さが厳密な長方形と同じとは示さない。']
  ], ['円を細かく分けて並べ替えると、面積は？', ['変わらない', '半分になる', '2倍になる'], '変わらない', '片を増やしたり減らしたりせず並べ替えるので、合計の面積は同じ。'], {r: 3, sectors: '16'}, '同じ半径3cmで、分け方をためす');
  draws['8250263230000000'] = function (step, p) {
    var r = 90, theta = Math.PI / 8, half = theta / 2, w = r * Math.sin(half), h = r * Math.cos(half), start = (600 - 17 * w) / 2 + w, b = '';
    for (var i = 0; i < 16; i++) { var cx = step < 2 ? 300 : start + i * w, cy = step < 2 ? 170 : 130 + (i % 2 ? h : 0), a = step < 2 ? i * theta : (i % 2 ? Math.PI * 1.5 : Math.PI / 2) - half; b += sector(cx, cy, r, a, a + theta, step < 2 ? pale : i % 2 ? sand : pale, 'circle-piece-' + i, step < 2 ? pale : green); }
    if (step < 2) { b += '<circle cx="300" cy="170" r="90" fill="none" stroke="' + green + '" stroke-width="2"/>'; if (step === 1) for (var j = 0; j < 16; j++) b += line(300, 170, 300 + 90 * p * Math.cos(j * theta), 170 + 90 * p * Math.sin(j * theta), green, 'circle-cut-' + j); else b += line(300, 170, 390, 170, orange, 'circle-radius'); b += text(300, 320, '半径3 cm', 28); }
    else b += text(300, 45, '上側の曲線は円周の半分', 27) + text(300, 300, '細かくすると、長方形に近づく', 26);
    return b + footer(step < 2 ? '片を合わせた面積は、元の円と同じ' : '3 × 3 × 3.14 = 28.26 cm²');
  };
  items['8250263311300000'] = def('横と縦を変えても、面積12を保つ', '横×縦が12になる長方形。片方を変えると、もう片方はどうなる？', [
    ['3cmと4cmから始める', '横3cm、縦4cmなら面積は12cm²。横と縦の積を12に保つ。', '横3cm、縦4cmの長方形。面積12cm²。'],
    ['横を2倍にする', '横を6cmにすると、縦は2cm。横が2倍になったので、縦は1/2になる。', '長方形が横へ広がり縦が縮む。途中も横×縦は12で、最後は6cmと2cm。'],
    ['横を1/3にする', '横を6cmから2cmにすると、縦は2cmから6cmへ。横が1/3なら縦は3倍。', '長方形が横に縮み縦へ伸びる。途中も面積12を保ち、最後は2cmと6cm。'],
    ['かけた答えを確かめる', '3×4、6×2、2×6はどれも12。このように、二つの量の積が一定になる関係が反比例。', '横2cm、縦6cmの長方形と、3×4＝6×2＝2×6＝12の式。']
  ], ['横が2倍で面積が同じなら、縦は？', ['1/2になる', '2倍になる', '変わらない'], '1/2になる', '横が2倍なら縦を半分にすると、かけた答えは変わらない。'], {x: '3'}, '最初の3×4から、自分でためす');
  draws['8250263311300000'] = function (step, p) {
    var x = step === 0 ? 3 : step === 1 ? 3 + 3 * p : step === 2 ? 6 - 4 * p : 2, y = 12 / x, b = text(300, 35, '面積12 cm²を保つ', 28);
    b += rect(300 - x * 17.5, 185 - y * 17.5, x * 35, y * 35, pale, 'inverse-material');
    b += text(300, 330, (step === 1 || step === 2) && p < 1 ? '横と縦を変えているところ' : '横' + n(x) + ' cm・縦' + n(y) + ' cm', 27);
    return b + footer((step === 1 || step === 2) && p < 1 ? '横 × 縦 = 12' : step === 0 ? '3 × 4 = 12' : step === 1 ? '6 × 2 = 12' : step === 2 ? '2 × 6 = 12' : '3 × 4 = 6 × 2 = 2 × 6 = 12');
  };
  var codes = Object.keys(items), originalRender = BL.lessonScenes.render;
  if (codes.some(function (code) { return own(BL.lessonScenes.items, code); })) throw new Error('Duplicate grade 6 lesson code');
  codes.forEach(function (code) { BL.lessonScenes.items[code] = items[code]; });
  BL.lessonScenes.render = function (code, step, phase) {
    if (!own(draws, code)) return originalRender(code, step, phase);
    if (!Number.isInteger(step) || step < 0 || step > 3 || typeof phase !== 'number' || !Number.isFinite(phase)) return '';
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" role="img" aria-label="' + e(items[code].steps[step].alt) + '" font-family="Noto Sans JP, sans-serif"><title>' + e(items[code].steps[step].alt) + '</title>' + draws[code](step, Math.max(0, Math.min(1, phase))) + '</svg>';
  };
  BL.grade6Lessons = {codes: codes.slice()};
}());
