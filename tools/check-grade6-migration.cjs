'use strict';
// Independent persistence contract. Only synthetic storage is read or written.
// Grade-6 fixtures below are schema copies, not authored or approved lessons.
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
const pinned = {
  'js/units.js': 'd70590602a21f4ed45b7c335109b55f4c5e69aadd1d12082b804244510c6f46c',
  'js/units-grade5.js': '5eff34aaa8b21b42417878535c7ae768c924eba0455b23befd5f9c803b061792'
};
let checks = 0;
function equal(actual, expected, why) { checks++; assert.deepEqual(clone(actual), clone(expected), why); }
function ok(value, why) { checks++; assert.ok(value, why); }

function run() {
  const context = {window: {}};
  for (const file of Object.keys(pinned)) {
    const source = read(file);
    equal(hash(source), pinned[file], 'reviewed legacy source bytes unchanged: ' + file);
    vm.runInNewContext(source, context, {timeout: 1000});
  }
  const legacy = clone(context.window.BL.data);
  equal(legacy.version, '3', 'grade-5 source remains version 3');
  equal(legacy.units.length, 44, 'all 44 reviewed legacy units loaded');
  const grade4 = legacy.units.filter(unit => unit.code[5] === '4');
  const grade5 = legacy.units.filter(unit => unit.code[5] === '5');
  equal([grade4.length, grade5.length], [20, 24], 'legacy grade counts');
  const synthetic6 = Array.from({length: 22}, (_, index) => {
    const unit = clone(legacy.units[index % legacy.units.length]);
    unit.code = '825026' + String(index + 1).padStart(10, '0');
    unit.grade = 6;
    unit.coverageCodes = [unit.code];
    unit.order = index + 1;
    unit.title = '保存移行確認用の合成教材';
    return unit;
  });
  const combined = {...clone(legacy), version: '4', grades: [4, 5, 6], units: clone(legacy.units).concat(synthetic6)};
  const expectedCatalogue = {version: '4', codes: combined.units.map(unit => unit.code)};
  const coreSource = read('js/core.js');
  const first = grade4[0], fifth = grade5[0], sixth = synthetic6[0];

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
      const htmlVersion = options.htmlVersion === undefined ? '4' : options.htmlVersion;
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
  const version3 = saved('3', legacy.units, 5, fifth.code);
  const version4 = saved('4', combined.units, 6, sixth.code);

  function noStorageChanges(session, why) {
    equal(session.stored(), session.initial, why + ': original storage string preserved');
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
        equal(record.answers[question.id].value, question.answer, why + ': answer value ' + unit.code + '/' + question.id);
        equal(record.answers[question.id].correct, true, why + ': correctness recalculated ' + unit.code + '/' + question.id);
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
    // Exercise actual public mutation paths, even if the UI would suppress them.
    const available = session.core.units()[0];
    if (available) {
      session.core.answer(available.code, available.questions[0].id, available.questions[0].answer);
      session.core.explain(available.code, available.buddy[0].id, true);
      equal(session.core.readOnly, true, why + ': answer/buddy cannot clear permission state');
    }
    session.core.state.grade = 4;
    session.core.state.mode = 'es';
    session.core.state.version = '4';
    equal(session.core.save(), false, why + ': normalized state cannot unlock persistence');
    equal(session.core.reset(), false, why + ': reset denied');
    noStorageChanges(session, why);
    session.core.load();
    equal(session.core.readOnly, true, why + ': reread retains reason');
    equal(session.core.save(), false, why + ': reread cannot authorize save');
    noStorageChanges(session, why + ' after reload');
  }

  // Each supported migration is explicit. The old 2 -> 3 path remains supported.
  for (const item of [
    {data: legacy, raw: version2, target: '3', grades: [4, 5], expected: grade4, selected: 4, options: {omitCatalogue: true, omitDocument: true}},
    {data: combined, raw: version2, target: '4', grades: [4, 5, 6], expected: grade4, selected: 4, options: {}},
    {data: combined, raw: version3, target: '4', grades: [4, 5, 6], expected: legacy.units, selected: 5, options: {}},
    {data: combined, raw: version4, target: '4', grades: [4, 5, 6], expected: combined.units, selected: 6, options: {}}
  ]) {
    const session = boot(item.data, item.raw, item.options), core = session.core;
    const label = item.raw.version + '_to_' + item.target;
    equal(core.ready, true, label + ': complete catalogue ready');
    equal(core.readOnly, false, label + ': reviewed known version writable');
    equal(core.rejectedCount, 0, label + ': all schema fixtures accepted');
    equal(Array.from(core.grades()), item.grades, label + ': grade registry');
    equal(core.state.version, item.target, label + ': target version');
    equal(core.state.grade, item.selected, label + ': selected grade');
    equal(core.state.resume, item.raw.resume, label + ': resume');
    equal(core.state.mode, 'js', label + ': mode retained');
    equal(core.state.interest, 'craft', label + ': interest retained');
    checkAllRecords(core, item.expected, label);
    noStorageChanges(session, label + ' load');
    ok(core.save(), label + ': explicit save succeeds');
    equal(JSON.parse(session.stored()).version, item.target, label + ': saved version');
    const second = boot(item.data, session.stored(), item.options);
    equal(second.core.state, core.state, label + ': reload idempotent');
    equal(second.core.readOnly, false, label + ': reload writable');
    noStorageChanges(second, label + ' second load');
  }

  const empty = boot(combined, undefined);
  equal(empty.core.ready, true, 'fresh install catalogue ready');
  equal(empty.core.readOnly, false, 'missing storage is not a corrupt record');
  equal(empty.core.state.grade, 4, 'fresh default grade4');
  equal(Object.keys(empty.core.state.progress).length, 0, 'fresh empty progress');
  noStorageChanges(empty, 'fresh load');
  ok(empty.core.save(), 'fresh install can save');

  for (const [rawVersion, allowed, validGrade] of [['2', grade4, 4], ['3', legacy.units, 5]]) {
    const raw = saved(rawVersion, combined.units, 6, sixth.code);
    raw.progress.unknown = completeRecord(first);
    raw.progress.constructor = completeRecord(first);
    const session = boot(combined, raw);
    equal(session.core.state.grade, 4, rawVersion + ': forged next-grade selection rejected');
    equal(session.core.state.resume, null, rawVersion + ': forged next-grade resume rejected');
    checkAllRecords(session.core, allowed, rawVersion + ' forged records');
    ok(session.core.save(), rawVersion + ': valid migration remains writable');
    equal(Object.keys(JSON.parse(session.stored()).progress).sort(), allowed.map(unit => unit.code).sort(), rawVersion + ': only historical grades written');
    const valid = boot(combined, saved(rawVersion, allowed, validGrade, allowed[allowed.length - 1].code));
    equal(valid.core.state.grade, validGrade, rawVersion + ': valid historical selected grade retained');
  }

  // The grade selector is a view. Switching it must never filter stored progress.
  const all = boot(combined, version4);
  for (const grade of [4, 5, 6, 4, 6, 5]) {
    all.core.state.grade = grade;
    ok(all.core.save(), 'grade switch save ' + grade);
    equal(Object.keys(JSON.parse(all.stored()).progress).length, 66, 'grade switch stores all66 ' + grade);
  }
  checkAllRecords(boot(combined, all.stored()).core, combined.units, 'all-grade roundtrip');
  equal(all.core.units('6').length, 0, 'grade filter exact numeric type');
  equal(all.core.units(7).length, 0, 'unsupported grade filter');
  equal(all.core.gradeOf({code: sixth.code}), null, 'lookalike unit identity not trusted');

  const number = first.questions.find(question => question.type === 'number');
  const tampered = clone(version3);
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
    ['registry missing with DOM4', data => data, {omitCatalogue: true}],
    ['registry and DOM missing with data4', data => data, {omitCatalogue: true, omitDocument: true}],
    ['grade6 script missing', () => clone(legacy), {}],
    ['grade5 script missing but latest version present', data => ({...data, units: data.units.filter(unit => unit.code[5] !== '5')}), {}],
    ['one unit missing', data => ({...data, units: data.units.slice(1)}), {}],
    ['equal-count code substitution', data => {data.units[65].code = '8250269999999999'; data.units[65].coverageCodes = [data.units[65].code]; return data;}, {}],
    ['equal-count duplicate code', data => {data.units[65] = clone(data.units[64]); return data;}, {}],
    ['grade contradicts code', data => {data.units[65].grade = 5; return data;}, {}],
    ['new-grade metadata omitted', data => {delete data.units[65].grade; return data;}, {}],
    ['extra unit', data => {data.units.push(clone(data.units[65])); return data;}, {}],
    ['catalogue version mismatch', data => data, {catalogue: {...clone(expectedCatalogue), version: '3'}}],
    ['duplicate expected code', data => data, {catalogue: {...clone(expectedCatalogue), codes: expectedCatalogue.codes.slice(0, 65).concat(expectedCatalogue.codes[64])}}]
  ];
  for (const [label, change, options] of brokenCatalogues) {
    const session = boot(change(clone(combined)), JSON.stringify(version4, null, 2), options);
    equal(session.core.ready, false, label + ': catalogue unavailable');
    blockedMutations(session, label);
  }

  // A complete raw catalogue with an unreviewed/invalid unit stays viewable but read only.
  for (const grade of [4, 5, 6]) {
    for (const [reason, change] of [
      ['pending unit', unit => {unit.review.evidence = 'pending';}],
      ['pending claim', unit => {unit.claims[0].status = 'pending';}],
      ['invalid question', unit => {unit.questions[0].type = 'unsupported';}],
      ['mismatched coverage grade', unit => {unit.coverageCodes = ['8250270000000001'];}]
    ]) {
      const data = clone(combined), unit = data.units.find(value => Number(value.code[5]) === grade); change(unit);
      const session = boot(data, JSON.stringify(version4, null, 2));
      equal(session.core.ready, true, reason + ': raw catalogue is complete');
      equal(session.core.unit(unit.code), null, reason + ': rejected material withheld');
      equal(session.core.units().length, 65, reason + ': other verified material remains available');
      blockedMutations(session, reason + ' grade' + grade);
    }
  }

  for (const version of ['1', '5', 'future', '', null, 4]) {
    const session = boot(combined, JSON.stringify({...clone(version4), version}, null, 2));
    equal(session.core.ready, true, 'unknown stored version leaves catalogue available');
    blockedMutations(session, 'unsupported stored version ' + String(version));
  }
  for (const [label, raw] of [
    ['invalid JSON', '{bad'], ['array root', '[]'], ['null root', 'null'], ['empty string', ''],
    ['over size limit', 'x'.repeat(1000001)], ['wrong progress shape', JSON.stringify({version: '4', progress: []})],
    ['null progress', JSON.stringify({version: '4', progress: null})],
    ['missing progress', JSON.stringify({version: '4'})], ['missing version', JSON.stringify({progress: {}})]
  ]) {
    const session = boot(combined, raw);
    equal(session.core.ready, true, label + ': material remains available');
    blockedMutations(session, label);
  }
  const readFailed = boot(combined, JSON.stringify(version3, null, 2), {blockRead: true});
  equal(readFailed.core.storageOK, false, 'read failure reported');
  blockedMutations(readFailed, 'read failure even though writes would succeed');
  // A genuine successful reread may recover; a save alone may never infer recovery.
  readFailed.fault.read = false;
  readFailed.core.load();
  equal(readFailed.core.readOnly, false, 'successful known-version reread may restore persistence');
  checkAllRecords(readFailed.core, legacy.units, 'read recovery preserves original44');
  noStorageChanges(readFailed, 'successful read recovery');

  const writeFailed = boot(combined, version3, {blockWrite: true});
  equal(writeFailed.core.readOnly, false, 'read and known schema establish writable permission');
  equal(writeFailed.core.save(), false, 'write failure reported');
  equal(writeFailed.core.storageOK, false, 'write failure visible');
  equal(writeFailed.stored(), writeFailed.initial, 'failed write retains original string');
  checkAllRecords(writeFailed.core, legacy.units, 'write failure keeps in-memory progress');
  const reset = boot(combined, version4);
  ok(reset.core.reset(), 'explicit reset permitted only in ordinary writable state');
  equal(reset.stored(), undefined, 'ordinary reset removes only own namespace');
  equal(reset.records.get('unrelated.namespace'), 'untouched', 'ordinary reset preserves unrelated namespace');

  // Positive controls disable the actual permission boundary after normal core boot.
  // They prove the preservation assertions detect destructive writes/removals.
  const forceSave = coreSource + '\nwindow.BL.core.save = function () { window.localStorage.setItem("' + KEY + '", JSON.stringify(window.BL.core.state)); return true; };';
  const unsafeSave = boot(combined, {...clone(version4), version: 'future'}, {source: forceSave});
  checks++; assert.throws(() => blockedMutations(unsafeSave, 'positive unsafe save'), /direct save denied/);
  const forceReset = coreSource + '\nwindow.BL.core.reset = function () { window.localStorage.removeItem("' + KEY + '"); return true; };';
  const unsafeReset = boot(combined, {...clone(version4), version: 'future'}, {source: forceReset});
  checks++; assert.throws(() => blockedMutations(unsafeReset, 'positive unsafe reset'), /reset denied/);
  const incomplete = clone(combined); incomplete.units.pop();
  const forceReady = coreSource + '\nwindow.BL.core.ready = true;';
  const unsafeReady = boot(incomplete, version4, {source: forceReady});
  checks++; assert.throws(() => equal(unsafeReady.core.ready, false, 'positive false-ready detection'), /false-ready detection/);

  console.log('GRADE6_MIGRATION=PASS checks=' + checks + ' legacy_units=44 synthetic_grade6_units=22 versions=2_to_3,2_to_4,3_to_4,4_to_4');
  console.log('GRADE6_PERSISTENCE_GUARDS=PASS catalogue_cases=' + brokenCatalogues.length + ' pending_or_invalid_cases=12 unsupported_versions=6 corrupt_cases=9 original_bytes_preserved=true read_failure_recovery=true positive_probes=3');
  console.log('GRADE6_MIGRATION_SCOPE=synthetic_storage_only_no_grade6_content_approval');
}
try { run(); }
catch (error) { console.error('GRADE6_MIGRATION=FAIL ' + String(error.message).split('\n')[0].slice(0, 240)); process.exitCode = 1; }
