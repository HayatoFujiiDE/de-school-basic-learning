'use strict';
// Independent persistence contract. All records below are synthetic and stay in memory.
// Does not require, approve, or alter the grade-5 lesson manuscript.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = process.env.BASIC_LEARNING_ROOT || path.resolve(__dirname, '..');
const baseText = fs.readFileSync(path.join(root, 'js/units.js'), 'utf8');
const coreText = fs.readFileSync(path.join(root, 'js/core.js'), 'utf8');
const baseHash = 'd70590602a21f4ed45b7c335109b55f4c5e69aadd1d12082b804244510c6f46c';
const hash = text => crypto.createHash('sha256').update(text).digest('hex');
const clone = value => JSON.parse(JSON.stringify(value));
let checks = 0;
function equal(a,b,why) { checks++; assert.deepEqual(a,b,why); }
function ok(value,why) { checks++; assert.ok(value,why); }
equal(hash(baseText),baseHash,'original grade4 bytes must match independent baseline');
const originalContext = {window:{}};
vm.runInNewContext(baseText, originalContext, {timeout:1000});
const original = clone(originalContext.window.BL.data);
equal(original.version,'2','legacy persisted content version');
equal(original.units.length,20,'all original grade4 units retained in test');
// This copy is a schema fixture, not a newly authored or verified grade5 lesson.
const synthetic = clone(original.units[0]);
synthetic.code = '8250253120000000';
synthetic.grade = 5;
synthetic.coverageCodes = [synthetic.code];
synthetic.title = '移行確認用の合成教材';
const combined = {...clone(original),version:'3',grades:[4,5],units:clone(original.units).concat([synthetic])};
const key = 'des.basic-learning.v1';
function boot(data,raw,options={}) {
  const records = new Map([['unrelated.namespace','untouched']]);
  if(raw!==undefined)records.set(key,typeof raw==='string'?raw:JSON.stringify(raw));
  const calls = [];
  const storage = {
    getItem(k){calls.push(['read',k]);if(options.blockRead)throw Error('synthetic blocked read');return records.has(k)?records.get(k):null;},
    setItem(k,v){calls.push(['write',k]);if(options.blockWrite)throw Error('synthetic blocked write');records.set(k,v);},
    removeItem(k){calls.push(['remove',k]);if(options.blockWrite)throw Error('synthetic blocked removal');records.delete(k);}
  };
  const context={window:{BL:{data:clone(data)},localStorage:storage}};
  vm.runInNewContext(options.script||coreText,context,{timeout:1000});
  return {core:context.window.BL.core,stored:()=>records.get(key),calls,records};
}
function completeRecord(unit,storedCorrect=false) {
  return {answers:Object.fromEntries(unit.questions.map(q=>[q.id,{value:clone(q.answer),correct:storedCorrect}])),buddy:Object.fromEntries(unit.buddy.map(b=>[b.id,true]))};
}
const first=original.units[0],second=original.units[1];
const legacy={version:'2',mode:'js',interest:'craft',resume:second.code,progress:Object.fromEntries(original.units.map(u=>[u.code,completeRecord(u)]))};
const initial=boot(combined,legacy),core=initial.core;
equal(core.rejectedCount,0,'synthetic mixed-grade catalogue accepted');
equal(Array.from(core.grades()),[4,5],'available grade registry');
equal(core.units().length,21,'unfiltered API retains both grades');
equal(core.units(4).length,20,'grade4 filter');
equal(core.units(5).length,1,'grade5 filter');
equal(core.units(6).length,0,'unsupported grade filter');
equal(core.units('5').length,0,'grade selection is exact typed');
equal(core.gradeOf(core.unit(first.code)),4,'grade4 identity');
equal(core.gradeOf(core.unit(synthetic.code)),5,'grade5 identity');
equal(core.gradeOf({code:first.code}),null,'unvalidated lookalike object is not trusted');
equal(core.state.version,'3','migration produces version3 state');
equal(core.state.grade,4,'legacy learners initially see grade4');
equal(core.state.mode,'js','reading mode retained');
equal(core.state.interest,'craft','interest retained');
equal(core.state.resume,second.code,'valid grade4 resume retained');
equal(Object.keys(core.state.progress).sort(),original.units.map(u=>u.code).sort(),'all20 legacy progress records retained');
for(const u of original.units) {
  equal(core.progress(u.code).percent,100,u.code+' complete progress retained');
  equal(Object.keys(core.state.progress[u.code].answers).length,u.questions.length,u.code+' all answer IDs retained');
  equal(core.progress(u.code).explained,u.buddy.length,u.code+' buddy confirmations retained');
}
equal(core.progress(synthetic.code).percent,0,'new grade starts with no borrowed progress');
equal(initial.calls.filter(c=>c[0]==='write').length,0,'loading does not overwrite legacy storage');
ok(core.save(),'migrated state can be saved');
const migratedText=initial.stored();
equal(JSON.parse(migratedText).version,'3','first save upgrades own record');
equal(initial.records.get('unrelated.namespace'),'untouched','other app namespace untouched');
ok(initial.calls.every(c=>c[1]===key),'all storage calls use exact namespace');
const reloaded=boot(combined,migratedText);
equal(JSON.stringify(reloaded.core.state),JSON.stringify(core.state),'migration is idempotent across reload');

const tampered=clone(legacy),numberQuestion=first.questions.find(q=>q.type==='number');
tampered.progress[first.code].answers[numberQuestion.id]={value:numberQuestion.answer+1,correct:true};
const tamperedCore=boot(combined,tampered).core;
equal(tamperedCore.state.progress[first.code].answers[numberQuestion.id].correct,false,'stored true cannot override wrong answer');
equal(tamperedCore.progress(first.code).correct,first.questions.length-1,'only current correct answers count');
const polluted=clone(legacy);polluted.grade=5;polluted.resume=synthetic.code;
polluted.progress[synthetic.code]=completeRecord(synthetic,true);polluted.progress.constructor=completeRecord(first,true);
const cleaned=boot(combined,polluted).core;
equal(cleaned.state.grade,4,'legacy forged grade selection ignored');
equal(cleaned.state.resume,null,'legacy forged grade5 resume ignored');
equal(cleaned.progress(synthetic.code).percent,0,'legacy forged grade5 progress ignored');
equal(Object.keys(cleaned.state.progress).length,20,'no unknown legacy record admitted');

const working=reloaded.core;
working.state.grade=5;ok(working.save(),'grade5 selection save');
for(const q of synthetic.questions)ok(working.answer(synthetic.code,q.id,q.answer),'synthetic new-grade answer stored');
for(const b of synthetic.buddy)ok(working.explain(synthetic.code,b.id,true),'synthetic new-grade buddy confirmation');
equal(working.progress(synthetic.code).percent,100,'grade5 completion independent');
working.state.grade=4;ok(working.save(),'return to grade4');
for(const u of original.units)equal(working.progress(u.code).percent,100,u.code+' unaffected by grade5 work');
equal(working.progress(synthetic.code).percent,100,'grade5 retained while grade4 selected');
working.state.grade=5;working.save();
const both=boot(combined,reloaded.stored()).core;
equal(both.state.grade,5,'selected grade persisted');
equal(both.state.resume,synthetic.code,'new-grade resume persisted');
equal(Object.keys(both.state.progress).length,21,'all grades survive second reload');
for(const u of combined.units)equal(both.progress(u.code).percent,100,u.code+' cross-grade persistence');

for(const version of ['1','4','future',null]) {
  const raw={...clone(legacy),version};const run=boot(combined,raw);
  equal(Object.keys(run.core.state.progress).length,0,'only explicitly supported migration, version '+version);
  equal(run.stored(),JSON.stringify(raw),'unsupported stored version is not overwritten on load');
}
for(const raw of ['{bad','[]','null','x'.repeat(1000001),JSON.stringify({version:'3',progress:[]})]) {
  const run=boot(combined,raw);equal(Object.keys(run.core.state.progress).length,0,'malformed storage safely starts empty');
  equal(run.core.units().length,21,'storage failure does not hide lessons');
}
const blockedWrite=boot(combined,legacy,{blockWrite:true});
equal(blockedWrite.core.progress(first.code).percent,100,'migration visible even if write is blocked');
equal(blockedWrite.core.save(),false,'write failure explicitly reported');
equal(blockedWrite.core.storageOK,false,'write failure state');
equal(blockedWrite.core.progress(first.code).percent,100,'write failure retains in-memory evidence');
equal(blockedWrite.stored(),JSON.stringify(legacy),'write failure leaves original record intact');
const blockedAll=boot(combined,undefined,{blockRead:true,blockWrite:true});
equal(blockedAll.core.storageOK,false,'read failure explicitly reported');
blockedAll.core.answer(first.code,numberQuestion.id,numberQuestion.answer);
equal(blockedAll.core.progress(first.code).correct,1,'blocked storage still supports memory learning');
equal(blockedAll.core.storageOK,false,'write remains blocked');

const sanitizeRun=boot(combined,legacy);sanitizeRun.core.state.freeText='synthetic-not-for-storage';
sanitizeRun.core.state.progress[first.code].freeText='synthetic-not-for-storage';
sanitizeRun.core.state.progress[first.code].answers.unknown={value:'synthetic-not-for-storage',correct:true};
sanitizeRun.core.state.progress[first.code].buddy.unknown=true;
sanitizeRun.core.save();
ok(!sanitizeRun.stored().includes('synthetic-not-for-storage'),'free text and unknown answer fields excluded');
ok(!Object.hasOwn(JSON.parse(sanitizeRun.stored()).progress[first.code].buddy,'unknown'),'unknown buddy IDs excluded');
for(const alter of [u=>delete u.grade,u=>u.grade=4,u=>u.coverageCodes=[first.code],u=>u.review.evidence='pending']) {
  const data=clone(combined);alter(data.units[data.units.length-1]);const run=boot(data,legacy).core;
  equal(run.units(5).length,0,'invalid grade5 metadata/review is withheld');
  equal(run.units(4).length,20,'invalid new material does not remove grade4');
  equal(run.progress(first.code).percent,100,'invalid new material does not remove old progress');
}
const mutation=coreText.replace(/var legacyGrade4 = [^;]+;/,'var legacyGrade4 = false;');
ok(mutation!==coreText,'migration mutation probe matched real implementation');
const mutant=boot(combined,legacy,{script:mutation}).core;
assert.throws(()=>assert.equal(mutant.progress(first.code).percent,100));checks++;
console.log('GRADE_MIGRATION=PASS checks='+checks+' grade4_records=20 synthetic_grade5_records=1 versions=2_to_3 roundtrip=true storage_failures=true mutation_detected=true');
