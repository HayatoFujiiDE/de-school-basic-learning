'use strict';
// Independent persistence checks; every storage record is synthetic.
// The 38 junior-high units are schema fixtures, not approved mathematics content.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = process.env.BASIC_LEARNING_ROOT || path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const hash = text => crypto.createHash('sha256').update(text).digest('hex');
const clone = value => value === undefined ? undefined : JSON.parse(JSON.stringify(value));
const KEY = 'des.basic-learning.v1';
// Reviewed main e0f74ee; neither production registry nor the author answer ledger
// is an oracle for the following source identity and official unit-code set.
const pinned = {
  'js/units.js': 'd70590602a21f4ed45b7c335109b55f4c5e69aadd1d12082b804244510c6f46c',
  'js/units-grade5.js': '5eff34aaa8b21b42417878535c7ae768c924eba0455b23befd5f9c803b061792',
  'js/units-grade6.js': 'eca09cee26e8447dacee227324e3f6263f812484f736fdf77d4b4f00830c5ac3'
};
const jhCodes = [
  '8350213111100000', '8350213111200000', '8350213112100000', '8350213111000000',
  '8350213111300000', '8350215100000000', '8350215200000000', '8350213121200000',
  '8350213121100000', '8350213121300000', '8350213121400000', '8350213131100000',
  '8350213131200000', '8350213132100000', '8350215400000000', '8350213132200000',
  '8350213311100000', '8350213311300000', '8350213311200000', '8350213311400000',
  '8350213310000000', '8350213312200000', '8350213211200000', '8350213212200000',
  '8350213211100000', '8350213212100000', '8350215500000000', '8350213221100000',
  '8350213222100000', '8350215600000000', '8350213221200000', '8350213222200000',
  '8350213221000000', '8350213220000000', '8350213411200000', '8350213411100000',
  '8350213412100000', '8350213421100000'
];
let checks = 0;
function equal(actual, expected, why) { checks++; assert.deepEqual(clone(actual), clone(expected), why); }
function ok(value, why) { checks++; assert.ok(value, why); }
function run() {
  const context = {window: {}};
  const editions = {};
  for (const [index, file] of Object.keys(pinned).entries()) {
    const source = read(file);
    equal(hash(source), pinned[file], 'legacy source bytes unchanged: ' + file);
    vm.runInNewContext(source, context, {timeout: 1000});
    editions[String(index + 2)] = clone(context.window.BL.data);
  }
  const legacy = editions['4'];
  equal(legacy.version, '4', 'reviewed old edition stays version 4');
  equal(legacy.units.length, 66, 'all old 66 units are loaded');
  const grade4 = legacy.units.filter(unit => unit.code.startsWith('825024'));
  const grade5 = legacy.units.filter(unit => unit.code.startsWith('825025'));
  const grade6 = legacy.units.filter(unit => unit.code.startsWith('825026'));
  equal([grade4.length, grade5.length, grade6.length], [20, 24, 22], 'old grade counts');
  equal(legacy.units.reduce((n, unit) => n + unit.questions.length, 0), 513, 'old 513 questions');
  equal(new Set(jhCodes).size, 38, 'independent official primary-code set is unique');
  const synthetic7 = jhCodes.map((code, index) => {
    const unit = clone(legacy.units[index % legacy.units.length]);
    unit.code = code;
    unit.grade = 7;
    unit.curriculumGrade = 1;
    unit.coverageCodes = [code];
    unit.order = index + 1;
    unit.title = '保存移行確認用の合成教材';
    return unit;
  });
  const combined = {...clone(legacy), version: '5', grades: [4, 5, 6, 7], units: clone(legacy.units).concat(synthetic7)};
  const expectedCatalogue = {version: '5', codes: legacy.units.map(unit => unit.code).concat(jhCodes)};
  const oldCatalogue = {version: '4', codes: legacy.units.map(unit => unit.code)};
  const coreSource = read('js/core.js');
  const first = grade4[0], fifth = grade5[0], sixth = grade6[0], seventh = synthetic7[0];
  const gradeOfCode = code => code.startsWith('835021') ? 7 : Number(code.charAt(5));

  function boot(data, raw, options = {}) {
    const records = new Map([['unrelated.namespace', 'untouched']]);
    if (raw !== undefined) records.set(KEY, typeof raw === 'string' ? raw : JSON.stringify(raw));
    const initial = records.get(KEY);
    const calls = [];
    const fault = {read: Boolean(options.blockRead), write: Boolean(options.blockWrite)};
    const storage = {
      getItem(key) { calls.push(['read', key]); if (fault.read) throw Error('synthetic read failure'); return records.has(key) ? records.get(key) : null; },
      setItem(key, value) { calls.push(['write', key]); if (fault.write) throw Error('synthetic write failure'); records.set(key, value); },
      removeItem(key) { calls.push(['remove', key]); if (fault.write) throw Error('synthetic removal failure'); records.delete(key); }
    };
    const window = {BL: {data: clone(data)}, localStorage: storage};
    if (!options.omitCatalogue) window.BL.expectedCatalogue = clone(options.catalogue || expectedCatalogue);
    const sandbox = {window};
    if (!options.omitDocument) {
      const htmlVersion = options.htmlVersion === undefined ? '5' : options.htmlVersion;
      sandbox.document = {documentElement: {getAttribute(name) { return name === 'data-catalogue-version' ? htmlVersion : null; }}};
      window.document = sandbox.document;
    }
    vm.runInNewContext(options.source || coreSource, sandbox, {timeout: 1000});
    return {core: window.BL.core, records, calls, fault, initial, stored: () => records.get(KEY)};
  }
  function completeRecord(unit) {
    return {
      answers: Object.fromEntries(unit.questions.map(question => [question.id, {value: clone(question.answer), correct: false}])),
      buddy: Object.fromEntries(unit.buddy.map(prompt => [prompt.id, true]))
    };
  }
  function saved(version, units, grade, resume) {
    return {version, grade, mode: 'js', interest: 'craft', resume,
      progress: Object.fromEntries(units.map(unit => [unit.code, completeRecord(unit)]))};
  }
  const version2 = saved('2', grade4, 4, first.code);
  const version3 = saved('3', editions['3'].units, 5, fifth.code);
  const version4 = saved('4', legacy.units, 6, sixth.code);
  const version5 = saved('5', combined.units, 7, seventh.code);

  function noStorageChanges(session, why) {
    equal(session.stored(), session.initial, why + ': exact original storage string preserved');
    equal(session.calls.filter(call => call[0] !== 'read').length, 0, why + ': no write/removal attempted');
    equal(session.records.get('unrelated.namespace'), 'untouched', why + ': unrelated namespace preserved');
    ok(session.calls.every(call => call[1] === KEY), why + ': exact storage namespace');
  }
  function checkAllRecords(core, expected, why) {
    equal(Object.keys(core.state.progress).sort(), expected.map(unit => unit.code).sort(), why + ': exact progress codes');
    for (const unit of expected) {
      const record = core.state.progress[unit.code];
      equal(Object.keys(record.answers).sort(), unit.questions.map(question => question.id).sort(), why + ': all answer IDs ' + unit.code);
      for (const question of unit.questions) {
        equal(record.answers[question.id].value, question.answer, why + ': value ' + unit.code + '/' + question.id);
        equal(record.answers[question.id].correct, true, why + ': correctness recomputed ' + unit.code + '/' + question.id);
      }
      equal(Object.keys(record.buddy).sort(), unit.buddy.map(prompt => prompt.id).sort(), why + ': exact buddy IDs ' + unit.code);
      for (const prompt of unit.buddy) equal(record.buddy[prompt.id], true, why + ': buddy confirmation ' + unit.code);
      equal(core.progress(unit.code).percent, 100, why + ': complete progress ' + unit.code);
    }
  }
  function blockedMutations(session, why) {
    equal(session.core.readOnly, true, why + ': explicitly read only');
    equal(session.core.save(), false, why + ': direct save denied');
    equal(session.core.readOnly, true, why + ': save cannot clear permission state');
    const available = session.core.units()[0];
    if (available) {
      session.core.answer(available.code, available.questions[0].id, available.questions[0].answer);
      session.core.explain(available.code, available.buddy[0].id, true);
      equal(session.core.readOnly, true, why + ': answer/buddy cannot clear permission state');
    }
    session.core.state.grade = 4;
    session.core.state.mode = 'es';
    session.core.state.version = '5';
    equal(session.core.save(), false, why + ': normalized state cannot unlock persistence');
    equal(session.core.reset(), false, why + ': reset denied');
    noStorageChanges(session, why);
    session.core.load();
    equal(session.core.readOnly, true, why + ': reread retains reason');
    equal(session.core.save(), false, why + ': reread cannot authorize save');
    noStorageChanges(session, why + ' after reload');
  }

  const oldOptions = {catalogue: oldCatalogue, htmlVersion: '4'};
  const migrations = [
    {data: editions['3'], raw: version2, expected: grade4, selected: 4, options: {omitCatalogue: true, omitDocument: true}},
    {data: legacy, raw: version2, expected: grade4, selected: 4, options: oldOptions},
    {data: legacy, raw: version3, expected: editions['3'].units, selected: 5, options: oldOptions},
    {data: legacy, raw: version4, expected: legacy.units, selected: 6, options: oldOptions},
    {data: combined, raw: version2, expected: grade4, selected: 4},
    {data: combined, raw: version3, expected: editions['3'].units, selected: 5},
    {data: combined, raw: version4, expected: legacy.units, selected: 6},
    {data: combined, raw: version5, expected: combined.units, selected: 7}
  ];
  for (const item of migrations) {
    const session = boot(item.data, item.raw, item.options), core = session.core;
    const label = item.raw.version + '_to_' + item.data.version;
    equal(core.ready, true, label + ': complete catalogue ready');
    equal(core.readOnly, false, label + ': reviewed known version writable');
    equal(core.rejectedCount, 0, label + ': all schema fixtures accepted');
    equal(Array.from(core.grades()), [...new Set(item.data.units.map(unit => gradeOfCode(unit.code)))].sort(), label + ': grade registry');
    equal(core.state.version, item.data.version, label + ': target version');
    equal(core.state.grade, item.selected, label + ': selected grade');
    equal(core.state.resume, item.raw.resume, label + ': resume');
    equal(core.state.mode, 'js', label + ': mode retained');
    equal(core.state.interest, 'craft', label + ': interest retained');
    checkAllRecords(core, item.expected, label);
    noStorageChanges(session, label + ' load');
    ok(core.save(), label + ': explicit save succeeds');
    equal(JSON.parse(session.stored()).version, item.data.version, label + ': saved version');
    const second = boot(item.data, session.stored(), item.options);
    equal(second.core.state, core.state, label + ': reload idempotent');
    equal(second.core.readOnly, false, label + ': reload writable');
    noStorageChanges(second, label + ' second load');
  }
  const empty = boot(combined, undefined);
  equal(empty.core.ready, true, 'fresh catalogue ready');
  equal(empty.core.readOnly, false, 'missing storage API null is not corruption');
  equal(empty.core.state.grade, 4, 'fresh default grade4');
  equal(Object.keys(empty.core.state.progress).length, 0, 'fresh empty progress');
  noStorageChanges(empty, 'fresh load');
  ok(empty.core.save(), 'fresh install can save');

  for (const [rawVersion, allowed, validGrade] of [['2', grade4, 4], ['3', editions['3'].units, 5], ['4', legacy.units, 6]]) {
    const raw = saved(rawVersion, combined.units, 7, seventh.code);
    raw.progress.unknown = completeRecord(first);
    raw.progress.constructor = completeRecord(first);
    const session = boot(combined, raw);
    equal(session.core.state.grade, 4, rawVersion + ': forged new course selection rejected');
    equal(session.core.state.resume, null, rawVersion + ': forged new course resume rejected');
    checkAllRecords(session.core, allowed, rawVersion + ' forged records');
    ok(session.core.save(), rawVersion + ': valid migration remains writable');
    equal(Object.keys(JSON.parse(session.stored()).progress).sort(), allowed.map(unit => unit.code).sort(), rawVersion + ': only historical grades written');
    const valid = boot(combined, saved(rawVersion, allowed, validGrade, allowed[allowed.length - 1].code));
    equal(valid.core.state.grade, validGrade, rawVersion + ': valid historical selected grade retained');
  }

  const all = boot(combined, version5);
  for (const grade of [7, 4, 5, 6, 4, 7]) {
    all.core.state.grade = grade;
    ok(all.core.save(), 'view switch save ' + grade);
    equal(Object.keys(JSON.parse(all.stored()).progress).length, 104, 'view switch preserves all104 ' + grade);
  }
  checkAllRecords(boot(combined, all.stored()).core, combined.units, 'all-course roundtrip');
  equal(all.core.units('7').length, 0, 'grade filter exact numeric type');
  equal(all.core.units(1).length, 0, 'source grade1 is not runtime grade');
  equal(all.core.units(8).length, 0, 'unsupported runtime grade');
  equal(all.core.units(7).map(unit => unit.code), jhCodes, 'junior-high order is unit.order, not catalogue sorting');
  equal(all.core.gradeOf({code: seventh.code}), null, 'lookalike unit identity not trusted');
  equal(all.core.gradeOf(all.core.unit(seventh.code)), 7, '835021 maps to runtime7');
  equal(all.core.gradeLabel(7), '中学1年生', 'course label');
  equal(all.core.subject(7), '数学', 'course subject');
  equal(all.core.domains(7), [{id:'A',title:'数と式'},{id:'B',title:'図形'},{id:'C',title:'関数'},{id:'D',title:'データの活用'}], 'course domain names');
  for (const grade of [4, 5, 6]) {
    equal(all.core.gradeLabel(grade), '小学' + grade + '年生', 'old course label');
    equal(all.core.subject(grade), '算数', 'old course subject');
    equal(all.core.domains(grade).map(domain => domain.title), ['数と計算','図形','変化と関係','データの活用'], 'old domains');
  }
  for (const invalid of ['8350213111100000x', 'x8350213111100000', '8250273111100000', '8350263111100000', 'constructor', '__proto__']) equal(all.core.unit(invalid), null, 'exact authorized unit only');
  const reverseCatalogue = {...clone(expectedCatalogue), codes: expectedCatalogue.codes.slice().reverse()};
  const reversed = boot(combined, version5, {catalogue: reverseCatalogue});
  equal(reversed.core.ready, true, 'registry is an unordered exact set');
  equal(reversed.core.units().map(unit => unit.code), all.core.units().map(unit => unit.code), 'registry order cannot change lesson order');

  // Numeric input has one added spelling, not an expression language.
  const negative = {type:'number', answer:-2};
  for (const value of [-2, '-2', '−2', '－２', ' −２.０ ']) {
    equal(all.core.grade(negative, value), true, 'negative decimal spelling accepted');
    equal(all.core.validAnswer(negative, value), true, 'negative decimal spelling valid');
  }
  for (const value of ['x=-2','-1/2','1-3','2e0','Infinity','NaN','',' ','−−2','eval(2)','2π',null,{},[]]) {
    equal(all.core.grade(negative, value), false, 'expression or invalid value rejected');
    equal(all.core.validAnswer(negative, value), false, 'invalid value not persisted');
  }
  equal(all.core.grade({type:'number',answer:-0.5}, '−0.5'), true, 'finite negative decimal');
  equal(all.core.grade({type:'number',answer:0}, '−0'), true, 'signed zero equals zero');

  const number = first.questions.find(question => question.type === 'number');
  const tampered = clone(version4);
  tampered.progress[first.code].answers[number.id] = {value: number.answer + 1, correct: true};
  tampered.progress[first.code].answers.unknown = {value: 'synthetic-free-text', correct: true};
  tampered.progress[first.code].buddy.unknown = true;
  tampered.progress[first.code].freeText = 'synthetic-free-text';
  tampered.freeText = 'synthetic-free-text';
  const sanitized = boot(combined, tampered);
  equal(sanitized.core.state.progress[first.code].answers[number.id].correct, false, 'stored true cannot overrule actual answer');
  ok(sanitized.core.save(), 'known-version sanitization save');
  ok(!sanitized.stored().includes('synthetic-free-text'), 'free text never persisted');
  ok(!Object.hasOwn(JSON.parse(sanitized.stored()).progress[first.code].buddy, 'unknown'), 'unknown buddy ID excluded');

  const brokenCatalogues = [
    ['registry missing with DOM5', data => data, {omitCatalogue: true}],
    ['registry and DOM missing with data5', data => data, {omitCatalogue: true, omitDocument: true}],
    ['junior-high script missing', () => clone(legacy), {}],
    ['grade5 script missing with latest version', data => ({...data, units:data.units.filter(unit => !unit.code.startsWith('825025'))}), {}],
    ['one unit missing', data => ({...data, units:data.units.slice(1)}), {}],
    ['equal-count substitution', data => {data.units[103].code='8350219999999999';data.units[103].coverageCodes=[data.units[103].code];return data;}, {}],
    ['equal-count duplicate', data => {data.units[103]=clone(data.units[102]);return data;}, {}],
    ['official grade1 used as runtime grade', data => {data.units[103].grade=1;return data;}, {}],
    ['new course metadata omitted', data => {delete data.units[103].grade;return data;}, {}],
    ['extra unit', data => {data.units.push(clone(data.units[103]));return data;}, {}],
    ['registry version mismatch', data => data, {catalogue:{...clone(expectedCatalogue),version:'4'}}],
    ['HTML version mismatch', data => data, {htmlVersion:'4'}],
    ['duplicate expected code', data => data, {catalogue:{...clone(expectedCatalogue),codes:expectedCatalogue.codes.slice(0,103).concat(expectedCatalogue.codes[102])}}],
    ['unknown stage in data and registry', data => {data.units[103].code='8250273421100000';data.units[103].coverageCodes=[data.units[103].code];return data;}, {catalogue:{...clone(expectedCatalogue),codes:expectedCatalogue.codes.slice(0,103).concat('8250273421100000')}}]
  ];
  for (const [label, change, options] of brokenCatalogues) {
    const session = boot(change(clone(combined)), JSON.stringify(version5, null, 2), options);
    equal(session.core.ready, false, label + ': catalogue unavailable');
    blockedMutations(session, label);
  }
  let pendingCases = 0;
  for (const grade of [4, 5, 6, 7]) {
    for (const [reason, change] of [
      ['pending unit', unit => {unit.review.evidence='pending';}],
      ['pending claim', unit => {unit.claims[0].status='pending';}],
      ['invalid question', unit => {unit.questions[0].type='unsupported';}],
      ['wrong school-stage coverage', unit => {unit.coverageCodes=['8250213111100000'];}]
    ]) {
      pendingCases++;
      const data=clone(combined), unit=data.units.find(value => gradeOfCode(value.code)===grade);change(unit);
      const session=boot(data,JSON.stringify(version5,null,2));
      equal(session.core.ready,true,reason+': raw catalogue complete');
      equal(session.core.unit(unit.code),null,reason+': rejected material withheld');
      equal(session.core.units().length,103,reason+': verified remainder viewable');
      blockedMutations(session,reason+' grade'+grade);
    }
  }
  for (const version of ['1','6','future','',null,5]) {
    const session=boot(combined,JSON.stringify({...clone(version5),version},null,2));
    equal(session.core.ready,true,'unknown saved version leaves catalogue viewable');
    blockedMutations(session,'unsupported stored version '+String(version));
  }
  for (const [label,raw] of [
    ['invalid JSON','{bad'],['array root','[]'],['null root','null'],['empty string',''],
    ['size limit','x'.repeat(1000001)],['progress array',JSON.stringify({version:'5',progress:[]})],
    ['progress null',JSON.stringify({version:'5',progress:null})],['missing progress',JSON.stringify({version:'5'})],
    ['missing version',JSON.stringify({progress:{}})]
  ]) {
    const session=boot(combined,raw);
    equal(session.core.ready,true,label+': material viewable');
    blockedMutations(session,label);
  }
  const readFailed=boot(combined,JSON.stringify(version4,null,2),{blockRead:true});
  equal(readFailed.core.storageOK,false,'read failure reported');
  blockedMutations(readFailed,'read failure even when writes would succeed');
  readFailed.fault.read=false;readFailed.core.load();
  equal(readFailed.core.readOnly,false,'successful known-version reread can recover permission');
  checkAllRecords(readFailed.core,legacy.units,'read recovery old66');
  noStorageChanges(readFailed,'read recovery');
  const writeFailed=boot(combined,version4,{blockWrite:true});
  equal(writeFailed.core.readOnly,false,'known readable schema establishes permission');
  equal(writeFailed.core.save(),false,'write failure reported');
  equal(writeFailed.core.storageOK,false,'write failure visible');
  equal(writeFailed.calls.filter(call=>call[0]==='write').length,1,'one explicit call makes one attempt, no automatic retry');
  equal(writeFailed.stored(),writeFailed.initial,'write failure preserves original bytes');
  checkAllRecords(writeFailed.core,legacy.units,'write failure preserves memory old66');
  const reset=boot(combined,version5);
  ok(reset.core.reset(),'ordinary writable reset allowed');
  equal(reset.stored(),undefined,'ordinary reset removes own namespace');
  equal(reset.records.get('unrelated.namespace'),'untouched','reset preserves other namespace');

  // Positive controls must fail these same assertions, not merely produce logs.
  const forceSave=coreSource+'\nwindow.BL.core.save=function(){window.localStorage.setItem("'+KEY+'",JSON.stringify(window.BL.core.state));return true;};';
  const unsafeSave=boot(combined,{...clone(version5),version:'future'},{source:forceSave});
  checks++;assert.throws(()=>blockedMutations(unsafeSave,'positive unsafe save'),/direct save denied/);
  const forceReset=coreSource+'\nwindow.BL.core.reset=function(){window.localStorage.removeItem("'+KEY+'");return true;};';
  const unsafeReset=boot(combined,{...clone(version5),version:'future'},{source:forceReset});
  checks++;assert.throws(()=>blockedMutations(unsafeReset,'positive unsafe reset'),/reset denied/);
  const incomplete=clone(combined);incomplete.units.pop();
  const unsafeReady=boot(incomplete,version5,{source:coreSource+'\nwindow.BL.core.ready=true;'});
  checks++;assert.throws(()=>equal(unsafeReady.core.ready,false,'positive false-ready detection'),/false-ready detection/);
  const bypassHistory=coreSource.replace(/var legacyMaximum = [^;]+;/,'var legacyMaximum = null;');
  ok(bypassHistory!==coreSource,'historical-grade mutation matched implementation');
  const unsafeHistory=boot(combined,saved('4',combined.units,7,seventh.code),{source:bypassHistory});
  checks++;assert.throws(()=>equal(unsafeHistory.core.progress(seventh.code).percent,0,'positive forged junior-high rejection'),/forged junior-high rejection/);
  console.log('JH1_MIGRATION=PASS checks='+checks+' legacy_units=66 synthetic_jh1_units=38 legacy_questions=513 versions=2_to_3,2_to_4,3_to_4,4_to_4,2_to_5,3_to_5,4_to_5,5_to_5');
  console.log('JH1_PERSISTENCE_GUARDS=PASS catalogue_cases='+brokenCatalogues.length+' pending_or_invalid_cases='+pendingCases+' unsupported_versions=6 corrupt_cases=9 original_bytes_preserved=true stage_mapping=true numeric_language_unchanged=true positive_probes=4');
  console.log('JH1_MIGRATION_SCOPE=synthetic_storage_only_no_jh1_content_approval');
}
try {run();}
catch(error){console.error('JH1_MIGRATION=FAIL '+String(error.message).split('\n')[0].slice(0,240));process.exitCode=1;}
