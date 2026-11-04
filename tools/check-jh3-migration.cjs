'use strict';
// Independent storage contract. New-course material and all records are synthetic.
// Passing this gate does not approve new mathematical prose or publication.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = process.env.BASIC_LEARNING_ROOT || path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const copy = value => value === undefined ? undefined : JSON.parse(JSON.stringify(value));
const KEY = 'des.basic-learning.v1';
// Independently recorded from main bda548c before any junior-high year-3 edits.
const pinned = {
  'js/units.js': 'd70590602a21f4ed45b7c335109b55f4c5e69aadd1d12082b804244510c6f46c',
  'js/units-grade5.js': '5eff34aaa8b21b42417878535c7ae768c924eba0455b23befd5f9c803b061792',
  'js/units-grade6.js': 'eca09cee26e8447dacee227324e3f6263f812484f736fdf77d4b4f00830c5ac3',
  'js/units-jh1.js': 'fc50d79208551fd6c0434cb256eae21607b7c42300c446023e67f0ef9ee626d3',
  'js/units-jh2.js': '38bb767360c0a69d06d0e15ecb99ca8fe2c7aff190b9a80a8f8d727bfe2a5db6'
};
// Independently matched against the 92 official 835023 rows. Runtime does not
// derive the expected set from the product registry or the author's answer ledger.
const codes9 = [
  '8350233121100000', '8350233121200000', '8350233121210000',
  '8350233121220000', '8350233121230000', '8350233144000000',
  '8350233121240000', '8350233122100000', '8350233122200000',
  '8350233111100000', '8350233142000000', '8350233111200000',
  '8350233111000000', '8350233112100000', '8350233112200000',
  '8350235100000000', '8350233131100000', '8350233131200000',
  '8350233131000000', '8350233132100000', '8350233131300000',
  '8350233132200000', '8350233311100000', '8350233311000000',
  '8350233312100000', '8350233311200000', '8350233312200000',
  '8350233311300000', '8350233210000000', '8350233211100000',
  '8350233212100000', '8350233212200000', '8350233211000000',
  '8350233212000000', '8350233212300000', '8350233221100000',
  '8350233222100000', '8350235400000000', '8350233222200000',
  '8350233231100000', '8350233232100000', '8350233232200000',
  '8350233230000000', '8350233411100000', '8350233411200000',
  '8350233412200000', '8350233412100000'
];
const versions = ['2', '3', '4', '5', '6', '7'];
const counts = {'2':20, '3':44, '4':66, '5':104, '6':143, '7':190};
let checks = 0;
function equal(actual, expected, label) { checks++; assert.deepEqual(copy(actual), copy(expected), label); }
function ok(value, label) { checks++; assert.ok(value, label); }
function rejects(fn, pattern) { checks++; assert.throws(fn, pattern); }
function gradeOf(code) {
  if (/^82502[456][0-9A-Z]{10}$/.test(code)) return Number(code[5]);
  return {'835021':7, '835022':8, '835023':9}[code.slice(0, 6)] || null;
}
function run() {
  const scope = {window: {}}, editions = {};
  for (const [index, file] of Object.keys(pinned).entries()) {
    const source = read(file);
    equal(hash(source), pinned[file], 'old source bytes: ' + file);
    vm.runInNewContext(source, scope, {timeout: 1000});
    editions[String(index + 2)] = copy(scope.window.BL.data);
  }
  const legacy = editions['6'];
  equal(legacy.version, '6', 'reviewed old edition');
  equal(legacy.units.length, 143, 'old143 count');
  equal(legacy.units.reduce((n, u) => n + u.questions.length, 0), 1129, 'old1129 questions');
  equal([4,5,6,7,8].map(g => legacy.units.filter(u => gradeOf(u.code) === g).length), [20,24,22,38,39], 'legacy course sizes');
  equal(new Set(codes9).size, 47, 'independent new-code uniqueness');
  const synthetic = codes9.map((code, i) => ({...copy(legacy.units[i % 143]), code, grade: 9, curriculumGrade: 3, coverageCodes: [code], order: i + 1, title: '保存移行確認用の合成教材'}));
  editions['7'] = {...copy(legacy), version: '7', grades: [4,5,6,7,8,9], units: copy(legacy.units).concat(synthetic)};
  const combined = editions['7'];
  const catalogue = version => ({version, codes: editions[version].units.map(u => u.code)});
  const expected = catalogue('7');
  for (const version of versions) equal(editions[version].units.length, counts[version], 'historical count ' + version);
  function validateRegistry(registry) {
    equal(registry.version, '7', 'registry version7');
    equal(new Set(registry.codes).size, 190, 'registry190 unique');
    equal(registry.codes.slice().sort(), expected.codes.slice().sort(), 'independent complete registry');
  }
  const registryScope = {window: {}};
  vm.runInNewContext(read('js/catalogue.js'), registryScope, {timeout: 1000});
  validateRegistry(copy(registryScope.window.BL.expectedCatalogue));
  const frozen = JSON.parse(read('sources/catalogue-v6.json'));
  equal(frozen.version, '6', 'frozen registry version6');
  equal(frozen.codes.slice().sort(), catalogue('6').codes.slice().sort(), 'frozen old143 registry');
  const coreSource = read('js/core.js'), first = legacy.units[0], ninth = synthetic[0];

  function boot(data, raw, options = {}) {
    const records = new Map([['unrelated.namespace', 'untouched']]), calls = [];
    if (raw !== undefined) records.set(KEY, typeof raw === 'string' ? raw : JSON.stringify(raw));
    const initial = records.get(KEY), fault = {read: Boolean(options.readFailure), write: Boolean(options.writeFailure)};
    const storage = {
      getItem(key) { calls.push(['read',key]); if (fault.read) throw Error('synthetic read denial'); return records.has(key) ? records.get(key) : null; },
      setItem(key, value) { calls.push(['write',key]); if (fault.write) throw Error('synthetic write denial'); records.set(key, value); },
      removeItem(key) { calls.push(['remove',key]); if (fault.write) throw Error('synthetic removal denial'); records.delete(key); }
    };
    const window = {BL:{data:copy(data)}, localStorage:storage}, context = {window};
    if (!options.omitCatalogue) window.BL.expectedCatalogue = copy(options.catalogue || expected);
    if (!options.omitDocument) context.document = {documentElement:{getAttribute:name => name === 'data-catalogue-version' ? (options.htmlVersion === undefined ? '7' : options.htmlVersion) : null}};
    vm.runInNewContext(options.source || coreSource, context, {timeout: 1000});
    equal(window.BL.data, data, 'core does not mutate raw material');
    return {core:window.BL.core, records, calls, initial, fault, stored:() => records.get(KEY)};
  }
  function fullRecord(unit) {
    return {answers:Object.fromEntries(unit.questions.map(q => [q.id,{value:copy(q.answer),correct:false}])), buddy:Object.fromEntries(unit.buddy.map(b => [b.id,true]))};
  }
  function saved(version, units, grade, resume) {
    return {version,grade,mode:'js',interest:'craft',resume,progress:Object.fromEntries(units.map(u => [u.code,fullRecord(u)]))};
  }
  const envelopes = {};
  for (const version of versions) {
    const units = editions[version].units, last = units[units.length - 1];
    envelopes[version] = saved(version, units, gradeOf(last.code), last.code);
  }
  function noWrites(session, label) {
    equal(session.stored(), session.initial, label + ': original bytes retained');
    equal(session.calls.filter(c => c[0] !== 'read').length, 0, label + ': no write/remove attempt');
    equal(session.records.get('unrelated.namespace'), 'untouched', label + ': other namespace retained');
    ok(session.calls.every(c => c[1] === KEY), label + ': exact storage key');
  }
  function allRecords(core, units, label) {
    equal(Object.keys(core.state.progress).sort(), units.map(u => u.code).sort(), label + ': exact record set');
    for (const unit of units) {
      const record = core.state.progress[unit.code];
      equal(Object.keys(record.answers).sort(), unit.questions.map(q => q.id).sort(), label + ': answer IDs ' + unit.code);
      for (const q of unit.questions) {
        equal(record.answers[q.id].value, q.answer, label + ': answer ' + unit.code + '/' + q.id);
        equal(record.answers[q.id].correct, true, label + ': recomputed correctness ' + unit.code + '/' + q.id);
      }
      equal(Object.keys(record.buddy).sort(), unit.buddy.map(b => b.id).sort(), label + ': buddy IDs');
      for (const b of unit.buddy) equal(record.buddy[b.id], true, label + ': buddy confirmation');
      equal(core.progress(unit.code).percent, 100, label + ': completed unit');
    }
  }
  function blocked(session, label) {
    equal(session.core.readOnly, true, label + ': permission readOnly');
    equal(session.core.save(), false, label + ': direct save denied');
    const unit = session.core.units()[0];
    if (unit) {
      session.core.answer(unit.code, unit.questions[0].id, unit.questions[0].answer);
      session.core.explain(unit.code, unit.buddy[0].id, true);
    }
    session.core.state.version = '7'; session.core.state.grade = 4; session.core.state.readOnly = false;
    equal(session.core.save(), false, label + ': state cannot unlock saving');
    equal(session.core.reset(), false, label + ': reset denied');
    noWrites(session, label);
    session.core.load();
    equal(session.core.readOnly, true, label + ': reread retains protection');
    equal(session.core.save(), false, label + ': reread cannot authorize write');
    noWrites(session, label + ' after reread');
  }
  let migrations = 0;
  for (const target of versions) for (const source of versions.filter(v => Number(v) <= Number(target))) {
    const options = Number(target) < 4 ? {omitCatalogue:true,omitDocument:true} : {catalogue:catalogue(target),htmlVersion:target};
    const session = boot(editions[target], envelopes[source], options), c = session.core, label = source + '_to_' + target;
    equal(c.ready, true, label + ': ready'); equal(c.readOnly, false, label + ': writable'); equal(c.rejectedCount, 0, label + ': all accepted');
    equal(c.state.version, target, label + ': target version'); equal(c.state.grade, envelopes[source].grade, label + ': grade retained');
    equal(c.state.resume, envelopes[source].resume, label + ': resume retained');
    equal(c.state.mode, 'js', label + ': mode retained'); equal(c.state.interest, 'craft', label + ': interest retained');
    allRecords(c, editions[source].units, label); noWrites(session, label + ' load');
    ok(c.save(), label + ': explicit save'); equal(JSON.parse(session.stored()).version, target, label + ': saved version');
    const again = boot(editions[target], session.stored(), options);
    equal(again.core.state, c.state, label + ': exact reload'); equal(again.core.readOnly, false, label + ': reload writable'); noWrites(again, label + ' reload');
    migrations++;
  }
  equal(migrations, 21, 'all same-version and forward paths');
  const empty = boot(combined, undefined);
  equal(empty.core.ready, true, 'fresh complete catalogue'); equal(empty.core.readOnly, false, 'API null means no existing storage');
  equal(empty.core.state.grade, 4, 'fresh default grade4'); equal(Object.keys(empty.core.state.progress).length, 0, 'fresh no records');
  noWrites(empty, 'fresh load'); ok(empty.core.save(), 'fresh save');
  for (const version of versions.slice(0, -1)) {
    const raw = saved(version, combined.units, 9, ninth.code);
    raw.progress.unknown = fullRecord(first); raw.progress.constructor = fullRecord(first);
    Object.defineProperty(raw.progress, '__proto__', {value:fullRecord(first),enumerable:true});
    const session = boot(combined, raw);
    equal(session.core.state.grade, 4, version + ': forged grade9 rejected'); equal(session.core.state.resume, null, version + ': forged resume rejected');
    allRecords(session.core, editions[version].units, version + ': historical records only');
    ok(session.core.save(), version + ': supported envelope writable');
    equal(Object.keys(JSON.parse(session.stored()).progress).sort(), editions[version].units.map(u => u.code).sort(), version + ': later-course records excluded');
  }
  const all = boot(combined, envelopes['7']);
  equal(all.core.grades(), [4,5,6,7,8,9], 'complete runtime courses');
  for (const grade of [9,4,8,7,5,6,4,9]) {
    all.core.state.grade = grade; ok(all.core.save(), 'course switch saves');
    equal(Object.keys(JSON.parse(all.stored()).progress).length, 190, 'course switch preserves190');
  }
  allRecords(boot(combined, all.stored()).core, combined.units, 'all190 roundtrip including hidden-entry rollback');
  for (const g of ['9',1,2,3,10]) equal(all.core.units(g).length, 0, 'invalid runtime grade');
  equal(all.core.units(9).map(u => u.code), codes9, 'teaching order independent of registry order');
  equal(all.core.gradeOf({code:ninth.code}), null, 'lookalike identity rejected');
  equal(all.core.gradeOf(all.core.unit(ninth.code)), 9, 'official prefix maps runtime9');
  for (const grade of [7,8,9]) {
    equal(all.core.gradeLabel(grade), '中学' + (grade - 6) + '年生', 'junior-high label'); equal(all.core.subject(grade), '数学', 'junior-high subject');
    equal(all.core.domains(grade), [{id:'A',title:'数と式'},{id:'C',title:'関数'},{id:'B',title:'図形'},{id:'D',title:'データの活用'}], 'ACBD course order');
  }
  for (const grade of [4,5,6]) {
    equal(all.core.gradeLabel(grade), '小学' + grade + '年生', 'old elementary label'); equal(all.core.subject(grade), '算数', 'old subject');
    equal(all.core.domains(grade).map(d => d.id), ['A','B','C','D'], 'old domain order');
  }
  const reversed = boot(combined, envelopes['7'], {catalogue:{...copy(expected),codes:expected.codes.slice().reverse()}});
  equal(reversed.core.ready, true, 'registry is an unordered exact set'); equal(reversed.core.units().map(u => u.code), all.core.units().map(u => u.code), 'registry order does not change teaching order');
  for (const code of [ninth.code+'x','x'+ninth.code,'8350243110000000','8250293110000000','constructor','__proto__']) equal(all.core.unit(code), null, 'exact authorized unit identity');
  const negative = {type:'number',answer:-2};
  for (const value of [-2,'-2','−2','－２',' −２.０ ']) equal(all.core.grade(negative,value), true, 'existing finite negative notation');
  for (const value of ['x=-2','-1/2','1-3','2e0','Infinity','NaN','',' ','−−2','eval(2)','2π','√4','±2',null,{},[]]) {
    equal(all.core.grade(negative,value), false, 'expression rejected'); equal(all.core.validAnswer(negative,value), false, 'invalid value not saved');
  }
  equal(all.core.grade({type:'number',answer:-.5},'−0.5'), true, 'finite negative decimal');
  equal(all.core.grade({type:'number',answer:0},'−0'), true, 'negative zero');
  const tampered = copy(envelopes['6']), question = first.questions.find(q => q.type === 'number');
  tampered.progress[first.code].answers[question.id] = {value:question.answer+1,correct:true};
  tampered.progress[first.code].answers.unknown = {value:'synthetic-free-text',correct:true};
  tampered.progress[first.code].buddy.unknown = true; tampered.freeText = 'synthetic-free-text';
  const sanitized = boot(combined, tampered);
  equal(sanitized.core.state.progress[first.code].answers[question.id].correct, false, 'stored correctness cannot overrule answer');
  ok(sanitized.core.save(), 'known-version answer sanitization'); ok(!sanitized.stored().includes('synthetic-free-text'), 'no free-text persistence');
  ok(!Object.hasOwn(JSON.parse(sanitized.stored()).progress[first.code].buddy,'unknown'), 'unknown buddy removed');

  const broken = [
    ['registry missing', d=>d, {omitCatalogue:true}], ['registry and DOM missing', d=>d, {omitCatalogue:true,omitDocument:true}],
    ['new script missing', ()=>copy(legacy), {}], ['old script missing', d=>({...d,units:d.units.filter(u=>gradeOf(u.code)!==5)}), {}],
    ['one unit missing', d=>({...d,units:d.units.slice(1)}), {}],
    ['equal-count substitution', d=>{d.units[189].code='8350239999999999';d.units[189].coverageCodes=[d.units[189].code];return d;}, {}],
    ['equal-count duplicate', d=>{d.units[189]=copy(d.units[188]);return d;}, {}],
    ['source grade used as runtime', d=>{d.units[189].grade=3;return d;}, {}],
    ['new grade omitted', d=>{delete d.units[189].grade;return d;}, {}],
    ['extra unit', d=>{d.units.push(copy(d.units[189]));return d;}, {}],
    ['registry version mismatch', d=>d, {catalogue:{...copy(expected),version:'6'}}],
    ['HTML version mismatch', d=>d, {htmlVersion:'6'}],
    ['duplicate expected code', d=>d, {catalogue:{...copy(expected),codes:expected.codes.slice(0,189).concat(expected.codes[188])}}],
    ['unknown school stage in both sets', d=>{d.units[189].code='8350243422200000';d.units[189].grade=10;d.units[189].coverageCodes=[d.units[189].code];return d;}, {catalogue:{...copy(expected),codes:expected.codes.slice(0,189).concat('8350243422200000')}}]
  ];
  for (const [label,change,options] of broken) {
    const session = boot(change(copy(combined)), JSON.stringify(envelopes['7'],null,2), options);
    equal(session.core.ready, false, label + ': unavailable'); blocked(session, label);
  }
  for (const version of ['4','5','6']) {
    const data = copy(editions[version]); data.units[data.units.length-1] = copy(ninth);
    const session = boot(data, envelopes[version], {catalogue:{version,codes:data.units.map(u=>u.code)},htmlVersion:version});
    equal(session.core.ready, false, 'old-version course ceiling '+version); blocked(session, 'old-version course ceiling '+version);
  }
  let pendingCases = 0;
  for (const grade of [4,5,6,7,8,9]) for (const [label,change] of [
    ['pending unit',u=>{u.review.evidence='pending';}], ['pending claim',u=>{u.claims[0].status='pending';}],
    ['invalid question',u=>{u.questions[0].type='unsupported';}],
    ['foreign coverage',u=>{u.coverageCodes=[gradeOf(u.code)===4 ? '8250253110000000' : '8250243110000000'];}]
  ]) {
    const data = copy(combined), unit = data.units.find(u=>gradeOf(u.code)===grade); change(unit);
    const session = boot(data, JSON.stringify(envelopes['7'],null,2));
    equal(session.core.ready, true, label + ': complete raw catalogue'); equal(session.core.unit(unit.code), null, label + ': withheld');
    equal(session.core.units().length, 189, label + ': verified remainder viewable'); blocked(session, label+' course'+grade); pendingCases++;
  }
  for (const version of ['1','8','future','',null,7]) {
    const session = boot(combined, JSON.stringify({...copy(envelopes['7']),version},null,2));
    equal(session.core.ready, true, 'unsupported envelope leaves catalogue viewable'); blocked(session, 'unsupported saved version');
  }
  const oldView = boot(legacy, JSON.stringify(envelopes['7'],null,2), {catalogue:frozen,htmlVersion:'6'});
  equal(oldView.core.ready, true, 'old v6 view remains valid'); blocked(oldView, 'v7 saved work opened with old v6 data');
  const corrupt = [['invalid JSON','{bad'],['array root','[]'],['null root','null'],['empty',''],['size limit','x'.repeat(1000001)],['progress array',JSON.stringify({version:'7',progress:[]})],['progress null',JSON.stringify({version:'7',progress:null})],['missing progress',JSON.stringify({version:'7'})],['missing version',JSON.stringify({progress:{}})]];
  for (const [label,raw] of corrupt) { const session=boot(combined,raw); equal(session.core.ready,true,label+': catalogue viewable'); blocked(session,label); }
  const failedRead = boot(combined, JSON.stringify(envelopes['6'],null,2), {readFailure:true}); blocked(failedRead, 'failed read despite writable storage');
  failedRead.fault.read=false; failedRead.core.load(); equal(failedRead.core.readOnly,false,'successful explicit reread can recover'); allRecords(failedRead.core,legacy.units,'recovered143'); noWrites(failedRead,'reread does not itself save');
  const failedWrite = boot(combined, envelopes['6'], {writeFailure:true}); equal(failedWrite.core.readOnly,false,'readable supported envelope'); equal(failedWrite.core.save(),false,'write failure signaled'); equal(failedWrite.core.storageOK,false,'write failure visible'); equal(failedWrite.calls.filter(c=>c[0]==='write').length,1,'no automatic write retry'); equal(failedWrite.stored(),failedWrite.initial,'failed write retains old bytes'); allRecords(failedWrite.core,legacy.units,'failed-write memory');
  const reset = boot(combined, envelopes['7']); ok(reset.core.reset(),'writable reset permitted'); equal(reset.stored(),undefined,'reset removes own namespace'); equal(reset.records.get('unrelated.namespace'),'untouched','reset preserves other namespace');

  const unsafeSave = boot(combined,{...copy(envelopes['7']),version:'future'},{source:coreSource+'\nwindow.BL.core.save=function(){window.localStorage.setItem("'+KEY+'",JSON.stringify(window.BL.core.state));return true;};'});
  rejects(()=>blocked(unsafeSave,'positive unsafe save'),/direct save denied/);
  const unsafeReset = boot(combined,{...copy(envelopes['7']),version:'future'},{source:coreSource+'\nwindow.BL.core.reset=function(){window.localStorage.removeItem("'+KEY+'");return true;};'});
  rejects(()=>blocked(unsafeReset,'positive unsafe reset'),/reset denied/);
  const incomplete=copy(combined); incomplete.units.pop(); const unsafeReady=boot(incomplete,envelopes['7'],{source:coreSource+'\nwindow.BL.core.ready=true;'});
  rejects(()=>equal(unsafeReady.core.ready,false,'positive false-ready'),/false-ready/);
  const noHistory = coreSource.replace(/var legacyMaximum = [^;]+;/,'var legacyMaximum = null;'); ok(noHistory!==coreSource,'historical-boundary mutation matched source');
  const unsafeHistory=boot(combined,saved('6',combined.units,9,ninth.code),{source:noHistory}); rejects(()=>equal(unsafeHistory.core.progress(ninth.code).percent,0,'positive forged year3'),/forged year3/);
  const badRegistry=copy(expected); badRegistry.codes[189]='8350239999999999'; rejects(()=>validateRegistry(badRegistry),/independent complete registry/);
  const noCeiling=coreSource.replace(/var catalogueMaximumGrade = [^;]+;/,"var catalogueMaximumGrade = {'4':9,'5':9,'6':9,'7':9};"); ok(noCeiling!==coreSource,'version-ceiling mutation matched source');
  const forgedOld=copy(legacy); forgedOld.units[142]=copy(ninth);
  const unsafeCeiling=boot(forgedOld,envelopes['6'],{catalogue:{version:'6',codes:forgedOld.units.map(u=>u.code)},htmlVersion:'6',source:noCeiling});
  rejects(()=>equal(unsafeCeiling.core.ready,false,'positive old-version ceiling'),/old-version ceiling/);
  console.log('JH3_MIGRATION=PASS checks='+checks+' legacy_units=143 legacy_questions=1129 synthetic_jh3_units=47 total_units=190 version_paths='+migrations);
  console.log('JH3_PERSISTENCE_GUARDS=PASS catalogue_cases='+(broken.length+3)+' pending_or_invalid_cases='+pendingCases+' unsupported_versions=6 corrupt_cases='+corrupt.length+' original_bytes_preserved=true version_ceiling=true old_v6_isolated=true positive_probes=6');
  console.log('JH3_MIGRATION_SCOPE=synthetic_storage_only_no_content_or_publication_approval');
}
try { run(); } catch (error) { console.error('JH3_MIGRATION=FAIL '+String(error.message).split('\n')[0].slice(0,240)); process.exitCode=1; }
