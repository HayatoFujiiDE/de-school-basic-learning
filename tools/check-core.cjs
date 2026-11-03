'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const assert = require('assert/strict');
const script = fs.readFileSync(path.join(__dirname, '../js/core.js'), 'utf8');
let checks = 0;
function check(condition, message) { checks++; assert.ok(condition, message); }
function fixture() {
  const q = {id:'n',type:'number',prompt:'12 ÷ 3 は？',answer:4,explanation:'3 × 4 = 12。',claimIds:['c']};
  return {version:'1',grade:4,categories:[{id:'craft',label:'ものづくり'}],sources:[{id:'s',url:'https://www.mext.go.jp/a_menu/other/data_00001.htm'}],units:[{
    code:'8250243100000000',title:'数の確かめ',goal:'計算を確かめる',domain:'A',order:1,coverageCodes:['8250243100000000'],
    explanations:{es:{short:'3 × 4 = 12。',detail:'12 ÷ 3 = 4。3 × 4 = 12。'},js:{short:'3 × 4 = 12。',detail:'12 ÷ 3 = 4。3 × 4 = 12。'}},
    entries:[{category:'craft',title:'箱',text:'3 × 4 = 12。',activityIds:['craft-cardboard']},{category:'craft',title:'紙',text:'12 ÷ 3 = 4。',activityIds:['craft-lego']}],
    claims:[{id:'c',text:'3 × 4 = 12。',status:'verified',sourceIds:['s']}],
    'adapt-rules':{allowed:['言いかえ'],forbidden:['数を変えない']},review:{evidence:'verified',publication:'preview',humanApproval:null},
    questions:[q,Object.assign({},q,{id:'n2',answer:0}),Object.assign({},q,{id:'n3',answer:0.3}),{id:'c',type:'choice',prompt:'選ぶ',options:['12','13'],answer:'12',explanation:'3 × 4 = 12。',claimIds:['c']},{id:'o',type:'order',prompt:'小さい順',items:['12','3','4'],answer:['3','4','12'],explanation:'3 < 4 < 12。',claimIds:['c']}],
    game:Object.assign({},q,{id:'g'}),buddy:[{id:'b',prompt:'説明する',followUp:'確かめる',checkpoints:['3 × 4 = 12。'],sample:'3 × 4 = 12。',claimIds:['c']}]
  }]};
}
function boot(data, raw, blocked) {
  let saved = raw;
  const storage = {getItem: () => { if(blocked) throw Error('blocked'); return saved; },setItem: (key,value) => { if(blocked) throw Error('blocked'); saved = value; },removeItem: () => { if(blocked) throw Error('blocked'); saved = null; }};
  const window = {BL:{data},localStorage:storage};
  vm.runInNewContext(script, {window});
  return {core:window.BL.core, saved: () => saved};
}
const data = fixture();
const run = boot(data);
const core = run.core;
const unit = data.units[0];
const code = unit.code;
check(core.units().length === 1, 'positive probe accepted unit');
check(core.progress(code).percent === 0, 'starts at zero');
check(core.unit('__proto__') === null && core.unit('constructor') === null, 'exact own key only');
check(core.grade(unit.questions[0], '４') && core.grade(unit.questions[0], ' 4.00 '), 'normalized exact decimal');
['',' ','4abc','4e0','0x4','Infinity','4+0',[],null,true].forEach(value => check(!core.grade(unit.questions[0],value), 'reject invalid numeric input'));
check(!core.grade(unit.questions[1],'') && core.grade(unit.questions[1],'0'), 'zero is not blank');
check(!core.grade(unit.questions[2],'0.30000000000000004'), 'no broad floating tolerance');
check(core.grade(unit.questions[3],'12') && !core.grade(unit.questions[3],'112'), 'choice exact match');
check(core.grade(unit.questions[4],['3','4','12']) && !core.grade(unit.questions[4],['3','4','4']), 'order permutation and order');
unit.questions.forEach(question => core.answer(code,question.id,question.answer));
check(core.progress(code).percent === 80, 'all practice alone 80');
core.explain(code,'b',true);
check(core.progress(code).percent === 100, 'practice plus explanation 100');
core.explain(code,'b',false);
check(core.progress(code).percent === 80, 'explanation can be revoked');
core.answer(code,'n',5);
check(core.progress(code).percent === 64, 'latest wrong answer replaces correct');
check(core.answer(code,'n','') === false && core.progress(code).percent === 64, 'invalid answer does not overwrite');
core.state.privateText = 'ephemeral-test';
core.save();
check(!run.saved().includes('ephemeral-test'), 'unknown fields never persisted');
check(boot(data,run.saved()).core.progress(code).percent === 64, 'reload restores valid evidence');
const tampered = JSON.parse(run.saved());
tampered.progress[code].answers.n.correct = true;
check(boot(data,JSON.stringify(tampered)).core.progress(code).percent === 64, 'stored correctness is recomputed');
tampered.version = 'old';
check(boot(data,JSON.stringify(tampered)).core.progress(code).percent === 0, 'new content version invalidates progress');
check(boot(data,'{broken').core.progress(code).percent === 0, 'corrupt storage gracefully starts clean');
const blocked = boot(data,null,true).core;
check(!blocked.storageOK, 'blocked read visible');
blocked.answer(code,'n',4);
check(blocked.progress(code).percent === 16 && !blocked.storageOK, 'blocked storage still supports memory learning');
core.reset();
check(core.progress(code).percent === 0 && run.saved() === null, 'reset only own record');
check(core.escape('<img src=x onerror="bad">&\'') === '&lt;img src=x onerror=&quot;bad&quot;&gt;&amp;&#39;', 'escape every HTML delimiter');
const invalidators = [u => u.review.evidence = 'pending',u => u.claims[0].status = 'unverified',u => u.questions[0].claimIds = ['missing'],u => u.questions[0].answer = Infinity,u => u.entries = [],u => u.title = 'ランキング',u => u.code = '8250243100000000extra',u => u.buddy[0].checkpoints = []];
invalidators.forEach(change => {const d=fixture();change(d.units[0]);const gate=boot(d).core;check(gate.units().length===0 && gate.rejectedCount===1,'invalid material is withheld');});
const duplicates=fixture();duplicates.units.push(duplicates.units[0]);check(boot(duplicates).core.rejectedCount===1,'duplicate code withheld');
console.log('CORE_CHECKS=' + checks + ' PASS');
