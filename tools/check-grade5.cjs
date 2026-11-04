'use strict';
// Independent human-read mathematics expectations, including all displayed prose.
// Fingerprints are a regression gate, not an automated proof of new mathematics.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert'),crypto=require('crypto');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const fixture=JSON.parse(fs.readFileSync(process.env.BASIC_LEARNING_GRADE5_EXPECTATIONS||path.join(__dirname,'grade5-review-expectations.json'),'utf8'));
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const json=p=>JSON.parse(read(p));
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const clone=x=>JSON.parse(JSON.stringify(x));
const contentHash=u=>{const x={...u};delete x.review;return hash(JSON.stringify(x));};
const baseSource=read('js/units.js'),addedSource=read('js/units-grade5.js');
const scope={window:{}};vm.createContext(scope);vm.runInContext(baseSource,scope,{timeout:1000});
const base=clone(scope.window.BL.data);
vm.runInContext(addedSource,scope,{timeout:1000});const assembled=clone(scope.window.BL.data);
assert.strictEqual(hash(baseSource),fixture.grade4UnitsSha256,'grade4 base bytes changed');
assert.strictEqual(hash(fs.readFileSync(path.join(root,'sources/mext-20230901-codes.xlsx'))),fixture.officialExcelSha256,'official Excel changed');
const expectedCodes=Object.keys(fixture.units);
assert.strictEqual(expectedCodes.length,24,'independent review must cover all 24 units');
function verify(data){
 assert.strictEqual(data.version,'3');assert.deepStrictEqual(data.grades,[4,5]);
 assert.strictEqual(data.units.length,base.units.length+24,'assembled unit count');
 assert.deepStrictEqual(data.units.slice(0,base.units.length),base.units,'grade4 runtime units changed');
 assert.deepStrictEqual(data.categories,base.categories,'grade4 categories changed');
 assert.deepStrictEqual(data.sources.slice(0,base.sources.length),base.sources,'grade4 sources changed');
 assert.strictEqual(hash(JSON.stringify({version:data.version,grade:data.grade,grades:data.grades,sources:data.sources,categories:data.categories})),fixture.metadataSha256,'reviewed metadata changed');
 const units=data.units.slice(base.units.length);
 assert.deepStrictEqual(units.map(u=>u.code),expectedCodes,'expected grade5 code set/order');
 let questions=0,games=0,claims=0;
 for(const [i,u]of units.entries()){
  const e=fixture.units[u.code];assert.strictEqual(u.grade,5);assert.strictEqual(u.order,i+1);
  assert.strictEqual(u.questions.length,e.questions.length,'question count '+u.code);
  for(const [j,q]of u.questions.entries()){
   assert.strictEqual(q.id,'q'+(j+1));assert.deepStrictEqual(q.answer,e.questions[j],'independent answer '+u.code+'/'+q.id);questions++;
  }
  assert.deepStrictEqual(u.game.answer,e.game,'independent answer '+u.code+'/game');games++;
  assert.strictEqual(u.claims.length,e.claims,'claim count '+u.code);claims+=u.claims.length;
  assert.strictEqual(contentHash(u),e.contentSha256,'reviewed text changed '+u.code);
 }
 return {units,questions,games,claims};
}
const result=verify(assembled);
const rows=json('sources/grade5-math-codes.json');
assert.strictEqual(rows.sha256,fixture.officialExcelSha256);assert.strictEqual(rows.grade,5);
assert.deepStrictEqual(rows.rows,fixture.officialRows,'independently extracted official 118 rows');
const official=new Set(fixture.officialRows.map(r=>r.code));
const leaves=fixture.officialRows.filter(r=>!fixture.officialRows.some(s=>s.code!==r.code&&s.code.startsWith(r.code.replace(/0+$/,''))));
assert.strictEqual(leaves.length,62);assert.deepStrictEqual(leaves.map(r=>r.code),fixture.terminalCodes);
for(const u of result.units){assert(official.has(u.code));for(const c of u.coverageCodes)assert(official.has(c),'unknown curriculum code');}
const covered=new Set(result.units.flatMap(u=>u.coverageCodes));for(const l of leaves)assert(covered.has(l.code),'terminal requirement not mapped '+l.code);
const manifest=json('sources/grade5-unit-manifest.json');assert.strictEqual(manifest.grade,5);assert.strictEqual(manifest.officialRows,118);
assert.strictEqual(manifest.grade4UnitsSha256,fixture.grade4UnitsSha256);assert.deepStrictEqual(manifest.codes,expectedCodes);
const coverage=json('sources/grade5-coverage-map.json');assert.strictEqual(coverage.grade,5);assert.strictEqual(coverage.unitCount,24);assert.strictEqual(coverage.sourceRows,118);
assert.deepStrictEqual(coverage.rows.map(r=>({row:r.row,code:r.curriculumCode,text:r.text})),fixture.officialRows,'coverage official rows changed');
for(const r of coverage.rows){
 const actual=result.units.filter(u=>u.coverageCodes.includes(r.curriculumCode)).map(u=>u.code);
 assert.deepStrictEqual(r.unitCodes,actual,'coverage references disagree '+r.curriculumCode);
 assert.strictEqual(r.classification,actual.length?'mapped':'heading','unreviewed coverage classification');
 if(leaves.some(l=>l.code===r.curriculumCode))assert(actual.length>0,'terminal requirement without content');
}
const expectedIndex=[];
for(const u of result.units){
 const answerText=a=>Array.isArray(a)?a.join(' → '):String(a);
 const questionText=q=>q.prompt+' 正答：'+answerText(q.answer)+'。 '+q.explanation+' 考える手がかり：'+q.hint;
 const b=u.buddy[0];
 const displayClaims=[u.explanations.es.short,u.explanations.es.detail,u.explanations.js.short,u.explanations.js.detail,...u.entries.map(e=>e.text),...u.questions.map(questionText),questionText(u.game),b.prompt+' '+b.followUp+' '+b.sample+' 確認項目：'+b.checkpoints.join(' / '),u.workedExample.prompt+' '+u.workedExample.steps.map(s=>s.text).join(' ')+' 結論：'+u.workedExample.answer,'「'+u.misconception.trap+'」は誤り。'+u.misconception.correction];
 for(const [i,text]of displayClaims.entries())assert.strictEqual(u.claims.find(c=>c.id==='c'+(i+1)).text,text,'claim and displayed material diverge '+u.code+'/c'+(i+1));

 const paths=['explanations.es.short','explanations.es.detail','explanations.js.short','explanations.js.detail',...u.entries.map((_,i)=>'entries.'+i+'.text'),...u.questions.map((_,i)=>'questions.'+i),'game','buddy.0','workedExample','misconception'];
 for(const [i,p]of paths.entries())expectedIndex.push({unitCode:u.code,path:p,claimId:'c'+(i+1)});
 for(const c of u.claims.filter(c=>!/^c\d+$/.test(c.id)))expectedIndex.push({unitCode:u.code,path:c.id,claimId:c.id});
}
assert.deepStrictEqual(json('sources/grade5-claims-index.json').entries,expectedIndex,'claim index does not match reviewed content paths');
// A small exact rational parser verifies the author's numerical audit separately.
function gcd(a,b){a=a<0n?-a:a;b=b<0n?-b:b;while(b){[a,b]=[b,a%b];}return a;}
function rat(n,d=1n){assert(d!==0n,'zero denominator');if(d<0n){n=-n;d=-d;}const g=gcd(n,d);return[n/g,d/g];}
function decimal(s){const sign=s[0]==='-'?-1n:1n;s=s.replace(/^[+-]/,'');const p=s.split('.');const d=10n**BigInt((p[1]||'').length);return rat(sign*BigInt((p[0]||'0')+(p[1]||'')),d);}
function calculate(expression){
 const tokens=expression.match(/\d+(?:\.\d+)?|\.\d+|floor|gcd|lcm|[(),+*/%-]/g)||[];
 assert.strictEqual(tokens.join(''),expression.replace(/\s/g,''),'unsupported arithmetic audit');let i=0;
 function atom(){if(['floor','gcd','lcm'].includes(tokens[i])){const name=tokens[i++];assert.strictEqual(tokens[i++],'(');const a=sum();if(name==='floor'){assert.strictEqual(tokens[i++],')');return rat(a[0]>=0n?a[0]/a[1]:-((-a[0]+a[1]-1n)/a[1]));}assert.strictEqual(tokens[i++],',');const b=sum();assert.strictEqual(tokens[i++],')');assert(a[1]===1n&&b[1]===1n&&a[0]>0n&&b[0]>0n,'positive integer gcd/lcm');return rat(name==='gcd'?gcd(a[0],b[0]):a[0]*b[0]/gcd(a[0],b[0]));}if(tokens[i]==='-'){i++;const a=atom();return[-a[0],a[1]];}if(tokens[i]==='+'){i++;return atom();}if(tokens[i]==='('){i++;const a=sum();assert.strictEqual(tokens[i++],')');return a;}const t=tokens[i++];assert(t&&/^\d|^\./.test(t),'number expected');return decimal(t);}
 function product(){let a=atom();while(['*','/','%'].includes(tokens[i])){const op=tokens[i++],b=atom();if(op==='%'){assert(a[1]===1n&&b[1]===1n&&a[0]>=0n&&b[0]>0n,'positive integer remainder');a=rat(a[0]%b[0]);}else a=op==='*'?rat(a[0]*b[0],a[1]*b[1]):rat(a[0]*b[1],a[1]*b[0]);}return a;}
 function sum(){let a=product();while(tokens[i]==='+'||tokens[i]==='-'){const op=tokens[i++],b=product();a=rat(a[0]*b[1]+(op==='+'?1n:-1n)*b[0]*a[1],a[1]*b[1]);}return a;}
 const a=sum();assert.strictEqual(i,tokens.length);return a;
}
assert.deepStrictEqual(calculate('(1/2+1/3)*6'),[5n,1n]);assert.deepStrictEqual(calculate('floor(23/2)+gcd(8,12)+lcm(6,10)+17%2'),[46n,1n]);assert.throws(()=>calculate('1/0'),/zero denominator/);assert.throws(()=>calculate('Math.random()'),/unsupported/);
const audit=json('sources/grade5-answer-audit.json'),numeric=new Map();
for(const u of result.units)for(const q of [...u.questions,u.game])if(q.type==='number')numeric.set(u.code+'/'+q.id,q.answer);
assert.strictEqual(audit.numericChecks,numeric.size);assert.strictEqual(audit.results.length,numeric.size);const seenAudit=new Set();
for(const a of audit.results){const key=a.unitCode+'/'+a.questionId;assert(numeric.has(key)&&!seenAudit.has(key),'missing/duplicate numeric audit');seenAudit.add(key);const v=calculate(a.expression);assert.deepStrictEqual(v,rat(BigInt(a.exactNumerator),BigInt(a.exactDenominator)),'author rational audit disagrees');assert.deepStrictEqual(v,decimal(String(numeric.get(key))),'audit expression not answer');assert.strictEqual(a.answer,numeric.get(key));assert.strictEqual(a.result,'pass');}
const statuses=clone(assembled);statuses.units.slice(base.units.length).forEach(u=>u.review.evidence='verified');verify(statuses);
const wrong=clone(assembled);wrong.units[base.units.length].questions[0].answer='changed';assert.throws(()=>verify(wrong),/independent answer/);
const prose=clone(assembled);prose.units[base.units.length].explanations.es.short+='誤';assert.throws(()=>verify(prose),/reviewed text changed/);
const lost=clone(assembled);lost.units.pop();assert.throws(()=>verify(lost),/assembled unit count/);
assert.throws(()=>verify(base)); // Actual state when the grade5 script was not loaded.
const baseChanged=clone(assembled);baseChanged.units[0].title+='誤';assert.throws(()=>verify(baseChanged),/grade4 runtime units changed/);
console.log('GRADE5_INDEPENDENT_MATH=PASS units=24 questions='+result.questions+' games='+result.games+' claims='+result.claims+' numeric_recomputed='+numeric.size+' official_rows=118 terminal_coverage=62');
console.log('GRADE5_POSITIVE_PROBES=PASS wrong_answer changed_prose missing_unit missing_grade5_script grade4_runtime_mutation invalid_expression');
console.log('GRADE5_SOURCE_SHA256='+hash(addedSource));
console.log('GRADE5_EVIDENCE_LIMIT=math_and_text_review_not_operator_publication_approval');
