'use strict';
// Independent manually solved answers and read text, bound to exact snapshots.
// These hashes are regression evidence, not an automated proof of fresh prose.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const json=p=>JSON.parse(read(p));
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const clone=x=>JSON.parse(JSON.stringify(x));
const fixture=JSON.parse(fs.readFileSync(process.env.BASIC_LEARNING_JH2_EXPECTATIONS||path.join(__dirname,'jh2-review-expectations.json'),'utf8'));
const contentHash=u=>{const x={...u};delete x.review;return hash(JSON.stringify(x));};
const sourceHash=s=>hash(s.replace(/"evidence":\s*"(?:pending|verified)"/g,'"evidence":"REVIEW_STATUS"'));
const sources=['units.js','units-grade5.js','units-grade6.js','units-jh1.js'].map(name=>read('js/'+name));
const scope={window:{}};
for(const [i,source]of sources.entries()){
 assert.equal(hash(source),fixture.legacySourceSha256[i],'legacy source bytes unchanged');
 vm.runInNewContext(source,scope,{timeout:1000});
}
const base=clone(scope.window.BL.data);
assert.equal(base.version,'5');assert.equal(base.units.length,104);
assert.equal(base.units.reduce((n,u)=>n+u.questions.length,0),817);
const addedSource=read('js/units-jh2.js');
assert.equal(sourceHash(addedSource),fixture.normalizedSourceSha256,'reviewed source wrapper/text changed beyond review status');
vm.runInNewContext(addedSource,scope,{timeout:1000});
const assembled=clone(scope.window.BL.data),expectedCodes=Object.keys(fixture.units);
assert.equal(expectedCodes.length,39,'independent review covers all 39 new units');
const motionCodes=new Set(['8350223111100000','8350223111300000','8350223121300000','8350223311000000','8350223211100000','8350223221000000','8350223411200000','8350223421200000']);
const videoCodes=new Set(['8350223121300000','8350223311000000']);
assert.equal(hash(fs.readFileSync(path.join(root,'sources/mext-20230901-middle-codes.xlsx'))),fixture.officialExcelSha256,'official Excel bytes');
function verify(data){
 assert.equal(data.version,'6');assert.deepEqual(data.grades,[4,5,6,7,8]);
 assert.equal(data.units.length,143,'complete assembled unit count');
 assert.deepEqual(data.units.slice(0,104),base.units,'old104 runtime units changed');
 assert.deepEqual(data.categories,base.categories,'old categories changed');
 assert.deepEqual(data.sources.slice(0,base.sources.length),base.sources,'old source records changed');
 assert.equal(hash(JSON.stringify({version:data.version,grade:data.grade,grades:data.grades,sources:data.sources,categories:data.categories})),fixture.metadataSha256,'reviewed metadata changed');
 const units=data.units.slice(104);
 assert.deepEqual(units.map(u=>u.code),expectedCodes,'reviewed course unit order');
 let questions=0,games=0,claims=0;
 for(const [i,u]of units.entries()){
  const expected=fixture.units[u.code];assert.equal(u.grade,8);assert.equal(u.order,i+1);
  assert.equal(u.questions.length,8);assert.equal(expected.questions.length,8);
  assert.equal(u.review.publication,'preview');assert.equal(u.review.humanApproval,null);
  assert.ok(['pending','verified'].includes(u.review.evidence));
  for(const [j,q]of u.questions.entries()){
   assert.equal(q.id,'q'+(j+1));assert.deepEqual(q.answer,expected.questions[j],'independent answer '+u.code+'/'+q.id);questions++;
  }
  assert.equal(u.game.id,'g1');assert.deepEqual(u.game.answer,expected.game,'independent answer '+u.code+'/game');games++;
  assert.equal(u.claims.length,expected.claims,'claim count '+u.code);claims+=u.claims.length;
  const ids=Array.from({length:18},(_,n)=>'c'+(n+1)).concat('visual');
  if(motionCodes.has(u.code))ids.push('motion');if(videoCodes.has(u.code))ids.push('video');
  assert.deepEqual(u.claims.map(c=>c.id),ids,'complete independent surface/visual/motion/video claim set '+u.code);
  assert.equal(contentHash(u),expected.contentSha256,'reviewed text changed '+u.code);
 }
 assert.equal(questions,312);assert.equal(games,39);assert.equal(claims,751);
 return{units,questions,games,claims};
}
const result=verify(assembled);
const review=JSON.parse(fs.readFileSync(process.env.BASIC_LEARNING_JH2_CONTENT_REVIEW||path.join(root,'sources/content-review-jh2.json'),'utf8'));
assert.equal(review.evidence,'verified');assert.equal(review.publicationApproval,false);
assert.equal(review.normalizedSourceSha256,fixture.normalizedSourceSha256);
assert.equal(review.sourceSnapshotSha256,hash(addedSource),'exact integrated source snapshot; status promotions require a reviewed record refresh');
assert.deepEqual(Object.keys(review.items),expectedCodes,'complete independent review records');
for(const code of expectedCodes){const item=review.items[code];assert.equal(item.evidence,'verified');assert.equal(item.contentSha256,fixture.units[code].contentSha256);assert.equal(item.claims,fixture.units[code].claims);}
const official=json('sources/jh2-math-codes.json');
assert.equal(official.sha256,fixture.officialExcelSha256);assert.equal(official.grade,2);
assert.deepEqual(official.rows.map(r=>({row:r.row,code:r.code,text:r.text})),fixture.officialRows,'independently extracted official 82 rows');
assert.equal(fixture.officialRows.length,82);
const officialCodes=new Set(fixture.officialRows.map(r=>r.code));
const terminals=fixture.officialRows.filter(r=>!fixture.officialRows.some(s=>r.code!==s.code&&s.code.startsWith(r.code.replace(/0+$/,''))));
assert.equal(terminals.length,48);assert.deepEqual(terminals.map(r=>r.code),fixture.terminalCodes);
const coverageSet=new Set();
for(const u of result.units){assert.ok(officialCodes.has(u.code));for(const code of u.coverageCodes){assert.ok(officialCodes.has(code),'unknown official coverage code');coverageSet.add(code);}}
for(const row of terminals)assert.ok(coverageSet.has(row.code),'uncovered terminal '+row.code);
const coverage=json('sources/jh2-coverage-map.json');
assert.equal(coverage.grade,8);assert.equal(coverage.curriculumGrade,2);assert.equal(coverage.sourceRows,82);assert.equal(coverage.unitCount,39);
assert.deepEqual(coverage.rows.map(r=>({row:r.row,code:r.curriculumCode,text:r.text})),fixture.officialRows,'coverage source text changed');
for(const row of coverage.rows){
 const actual=result.units.filter(u=>u.coverageCodes.includes(row.curriculumCode)).map(u=>u.code);
 assert.deepEqual(row.unitCodes,actual,'coverage projection disagrees '+row.curriculumCode);
 assert.equal(row.classification,actual.length?'mapped':'heading','incomplete coverage classification');
}
const registryContext={window:{BL:{}}};vm.runInNewContext(read('js/catalogue.js'),registryContext,{timeout:1000});
const registry=clone(registryContext.window.BL.expectedCatalogue);assert.equal(registry.version,'6');
assert.equal(new Set(registry.codes).size,143,'registry unique');
assert.deepEqual(registry.codes.slice().sort(),base.units.map(u=>u.code).concat(expectedCodes).sort(),'complete independent registry set');
const expectedIndex=[],knownSources=new Set(assembled.sources.map(s=>s.id));
for(const u of result.units){
 const claims=new Map();for(const claim of u.claims){assert.ok(!claims.has(claim.id),'duplicate claim ID');claims.set(claim.id,claim);assert.equal(claim.status,'verified');assert.ok(claim.sourceIds.length>0&&claim.sourceIds.every(id=>knownSources.has(id)),'unknown claim source');}
 for(const part of [...u.questions,u.game,...u.buddy,u.workedExample,u.misconception])assert.ok(part.claimIds.length>0&&part.claimIds.every(id=>claims.has(id)),'unbound display');
 const answerText=a=>Array.isArray(a)?a.join(' → '):String(a),qText=q=>q.prompt+' 正答：'+answerText(q.answer)+'。 '+q.explanation+' 考える手がかり：'+q.hint;
 const b=u.buddy[0];
 const surfaces=[u.explanations.es.short,u.explanations.es.detail,u.explanations.js.short,u.explanations.js.detail,...u.entries.map(e=>e.text),...u.questions.map(qText),qText(u.game),b.prompt+' '+b.followUp+' '+b.sample+' 確認項目：'+b.checkpoints.join(' / '),u.workedExample.prompt+' '+u.workedExample.steps.map(s=>s.text).join(' ')+' 結論：'+u.workedExample.answer,'「'+u.misconception.trap+'」は誤り。'+u.misconception.correction];
 surfaces.forEach((text,i)=>assert.equal(claims.get('c'+(i+1)).text,text,'display and claim diverge '+u.code+'/c'+(i+1)));
 const paths=['explanations.es.short','explanations.es.detail','explanations.js.short','explanations.js.detail',...u.entries.map((_,i)=>'entries.'+i+'.text'),...u.questions.map((_,i)=>'questions.'+i),'game','buddy.0','workedExample','misconception'];
 paths.forEach((p,i)=>expectedIndex.push({unitCode:u.code,path:p,claimId:'c'+(i+1)}));
 for(const claim of u.claims.filter(c=>!/^c\d+$/.test(c.id)))expectedIndex.push({unitCode:u.code,path:claim.id,claimId:claim.id});
}
assert.deepEqual(json('sources/jh2-claims-index.json').entries,expectedIndex,'claims index fully matches real surfaces');

// Restricted exact rational evaluator for the reviewer's independently written
// numeric derivations and, separately, the author's audit consistency check.
function gcd(a,b){a=a<0n?-a:a;b=b<0n?-b:b;while(b)[a,b]=[b,a%b];return a;}
function rat(n,d=1n){assert.ok(d!==0n,'zero denominator');if(d<0n){n=-n;d=-d;}const g=gcd(n,d);return[n/g,d/g];}
function decimal(value){let s=String(value),sign=s[0]==='-'?-1n:1n;s=s.replace(/^[+-]/,'');assert.ok(/^\d+(?:\.\d+)?$/.test(s),'plain decimal expected');const p=s.split('.');return rat(sign*BigInt(p.join('')),10n**BigInt((p[1]||'').length));}
function calculate(expression){
 const tokens=expression.match(/\d+(?:\.\d+)?|\.\d+|floor|gcd|lcm|abs|\*\*|[(),+*/%-]/g)||[];
 assert.equal(tokens.join(''),expression.replace(/\s/g,''),'unsupported arithmetic expression');let i=0;
 function atom(){
  if(['floor','gcd','lcm','abs'].includes(tokens[i])){
   const name=tokens[i++];assert.equal(tokens[i++],'(');const a=sum();
   if(name==='abs'||name==='floor'){assert.equal(tokens[i++],')');return name==='abs'?rat(a[0]<0n?-a[0]:a[0],a[1]):rat(a[0]>=0n?a[0]/a[1]:-((-a[0]+a[1]-1n)/a[1]));}
   assert.equal(tokens[i++],',');const b=sum();assert.equal(tokens[i++],')');assert.ok(a[1]===1n&&b[1]===1n&&a[0]>0n&&b[0]>0n,'positive integer gcd/lcm');return rat(name==='gcd'?gcd(a[0],b[0]):a[0]*b[0]/gcd(a[0],b[0]));
  }
  if(tokens[i]==='('){i++;const a=sum();assert.equal(tokens[i++],')');return a;}
  const token=tokens[i++];assert.ok(token&&/^(?:\d+(?:\.\d+)?|\.\d+)$/.test(token),'number expected');return decimal(token.startsWith('.')?'0'+token:token);
 }
 function power(){const a=atom();if(tokens[i]!=='**')return a;i++;const b=unary();assert.ok(b[1]===1n&&b[0]>=0n&&b[0]<=12n,'bounded nonnegative integer power');assert.ok(a[0]!==0n||b[0]!==0n,'zero to zero power is outside this audit');return rat(a[0]**b[0],a[1]**b[0]);}
 function unary(){if(tokens[i]==='-'){i++;const a=unary();return[-a[0],a[1]];}if(tokens[i]==='+'){i++;return unary();}return power();}
 function product(){let a=unary();while(['*','/','%'].includes(tokens[i])){const op=tokens[i++],b=unary();if(op==='%'){assert.ok(a[1]===1n&&b[1]===1n&&a[0]>=0n&&b[0]>0n,'nonnegative integer remainder');a=rat(a[0]%b[0]);}else a=op==='*'?rat(a[0]*b[0],a[1]*b[1]):rat(a[0]*b[1],a[1]*b[0]);}return a;}
 function sum(){let a=product();while(tokens[i]==='+'||tokens[i]==='-'){const op=tokens[i++],b=product();a=rat(a[0]*b[1]+(op==='+'?1n:-1n)*b[0]*a[1],a[1]*b[1]);}return a;}
 const answer=sum();assert.equal(i,tokens.length);return answer;
}
assert.deepEqual(calculate('-3**2'),[-9n,1n]);assert.deepEqual(calculate('(-3)**2'),[9n,1n]);assert.deepEqual(calculate('abs(-7)+floor(-3/2)+gcd(8,12)+lcm(2,3)+17%2'),[16n,1n]);
assert.throws(()=>calculate('1/0'),/zero denominator/);assert.throws(()=>calculate('Math.random()'),/unsupported/);
const numeric=new Map();for(const u of result.units)for(const q of [...u.questions,u.game])if(q.type==='number')numeric.set(u.code+'/'+q.id,q.answer);
const independentlyCalculated=new Set();
for(const[code,questions]of Object.entries(fixture.numericReasoning))for(const[id,expression]of Object.entries(questions)){
 const key=code+'/'+id;assert.ok(numeric.has(key)&&!independentlyCalculated.has(key),'independent numeric derivation exists exactly once');independentlyCalculated.add(key);
 assert.deepEqual(calculate(expression),decimal(numeric.get(key)),'independent rational derivation '+key);
}
assert.equal(independentlyCalculated.size,numeric.size,'all numeric answers independently recomputed');
const audit=json('sources/jh2-numeric-audit.json'),seenAudit=new Set();
assert.equal(audit.numericChecks,numeric.size);assert.equal(audit.results.length,numeric.size);
for(const entry of audit.results){
 const key=entry.unitCode+'/'+entry.questionId;assert.ok(numeric.has(key)&&!seenAudit.has(key),'author audit exact numeric set');seenAudit.add(key);
 const value=calculate(entry.expression);assert.deepEqual(value,rat(BigInt(entry.exactNumerator),BigInt(entry.exactDenominator)),'author rational audit consistency');assert.deepEqual(value,decimal(numeric.get(key)),'author expression matches independent answer');assert.equal(entry.answer,numeric.get(key));assert.equal(entry.result,'pass');
}
assert.deepEqual(review.counts,{units:39,questions:312,games:39,claims:result.claims,numericRecomputed:numeric.size,officialRows:82,terminalCodes:48,mappedRows:coverage.rows.filter(r=>r.classification==='mapped').length,headings:coverage.rows.filter(r=>r.classification==='heading').length});
const statuses=clone(assembled);statuses.units.slice(104).forEach(u=>u.review.evidence='verified');verify(statuses);
const wrong=clone(assembled);wrong.units[104].questions[0].answer='changed';assert.throws(()=>verify(wrong),/independent answer/);
const prose=clone(assembled);prose.units[104].explanations.es.short+='誤';assert.throws(()=>verify(prose),/reviewed text changed/);
const lost=clone(assembled);lost.units.pop();assert.throws(()=>verify(lost),/assembled unit count/);
assert.throws(()=>verify(base));
const missingJH1={window:{}};for(const source of sources.slice(0,3))vm.runInNewContext(source,missingJH1,{timeout:1000});
vm.runInNewContext(addedSource,missingJH1,{timeout:1000});
assert.equal(missingJH1.window.BL.data.version,'4','missing dependency cannot publish version6 data');
assert.throws(()=>verify(clone(missingJH1.window.BL.data)),'missing JH1 dependency must fail the complete-catalogue check');
const sameCount=clone(assembled);sameCount.units[104].code='8350229999999999';assert.throws(()=>verify(sameCount),/unit order/);
const changedBase=clone(assembled);changedBase.units[0].title+='誤';assert.throws(()=>verify(changedBase),/old104 runtime/);
assert.notEqual(sourceHash(addedSource+'\nwindow.unreviewed=true;'),fixture.normalizedSourceSha256,'source wrapper mutation detected');
console.log('JH2_INDEPENDENT_MATH=PASS units=39 questions='+result.questions+' games='+result.games+' claims='+result.claims+' numeric_recomputed='+numeric.size+' official_rows=82 terminal_coverage=48');
console.log('JH2_POSITIVE_PROBES=PASS wrong_answer changed_prose missing_unit missing_jh2_script missing_jh1_script same_count_substitution old104_runtime_mutation source_wrapper_mutation invalid_expression');
console.log('JH2_SOURCE_SHA256='+hash(addedSource));
console.log('JH2_EVIDENCE_LIMIT=math_and_text_review_not_operator_publication_approval');
