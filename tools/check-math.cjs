'use strict';
// Independently recomputed answers; fingerprints bind all reviewed material except status.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert'),crypto=require('crypto');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const source=fs.readFileSync(process.argv[2]||path.join(root,'js/units.js'),'utf8');
const fixture=JSON.parse(fs.readFileSync(process.env.BASIC_LEARNING_EXPECTATIONS||path.join(__dirname,'math-review-expectations.json'),'utf8'));
const context={};context.window=context;vm.runInNewContext(source,context,{timeout:1000});
const data=JSON.parse(JSON.stringify(context.BL.data));
function hash(value){return crypto.createHash('sha256').update(value).digest('hex');}
function contentHash(unit){const copy={...unit};delete copy.review;return hash(JSON.stringify(copy));}
function verify(units){
 assert.strictEqual(units.length,Object.keys(fixture.units).length,'unit count changed; independent review required');
 let questions=0,games=0;const seen=new Set();
 for(const u of units){
  assert(!seen.has(u.code),'duplicate unit code');seen.add(u.code);
  const expected=fixture.units[u.code];assert(expected,'unit not independently reviewed: '+u.code);
  assert.strictEqual(u.questions.length,expected.questions.length,u.code+' question count');
  u.questions.forEach((q,i)=>{assert.strictEqual(q.id,'q'+(i+1));assert.deepStrictEqual(q.answer,expected.questions[i],u.code+'/'+q.id+' independently recomputed answer');questions++;});
  assert.deepStrictEqual(u.game.answer,expected.game,u.code+'/game independently recomputed answer');games++;
  assert.strictEqual(contentHash(u),expected.contentSha256,u.code+' reviewed content changed; fresh review required');
 }
 return {units:seen.size,questions,games};
}
assert.strictEqual(hash(JSON.stringify({version:data.version,grade:data.grade,sources:data.sources,categories:data.categories})),fixture.metadataSha256,'reviewed source metadata changed');
const verdict=verify(data.units);
const statusOnly=JSON.parse(JSON.stringify(data.units));statusOnly.forEach(u=>u.review.evidence='verified');verify(statusOnly);
const wrongAnswer=JSON.parse(JSON.stringify(data.units));wrongAnswer[0].questions[0].answer+=1;
assert.throws(()=>verify(wrongAnswer),/independently recomputed answer/);
const wrongText=JSON.parse(JSON.stringify(data.units));wrongText[0].explanations.es.short+='誤';
assert.throws(()=>verify(wrongText),/reviewed content changed/);
console.log('INDEPENDENT_MATH=PASS units='+verdict.units+' questions='+verdict.questions+' games='+verdict.games+' reviewed_text_fingerprints='+verdict.units);
console.log('MATH_POSITIVE_PROBES=PASS wrong_answer_and_changed_text_rejected');
console.log('UNITS_FILE_SHA256='+hash(source));
console.log('UNITS_REVIEW_INDEPENDENT_SHA256='+hash(JSON.stringify(data.units.map(u=>{const x={...u};delete x.review;return x;}))));
