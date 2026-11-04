'use strict';
// Frozen preimplementation domains and independent geometry, not author answers.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8'),copy=x=>JSON.parse(JSON.stringify(x));
const contract=JSON.parse(read('sources/jh3-visual-contract.json'));
const expected=JSON.parse(read('sources/jh3-unit-manifest.json')).codes;
assert.equal(contract.units.length,47);assert.equal(contract.totalStates,441);
assert.deepEqual(contract.units.map(u=>u.code),expected);
const scope={window:{BL:{expectedCatalogue:JSON.parse(read('sources/catalogue-v6.json'))},localStorage:{getItem:()=>null,setItem:()=>{}}}};
for(const file of ['units.js','units-grade5.js','units-grade6.js','units-jh1.js','units-jh2.js','core.js','visuals.js','visuals-grade5.js','visuals-grade6.js','visuals-jh1.js','visuals-jh2.js'])vm.runInNewContext(read('js/'+file),scope);
const BL=scope.window.BL;assert.equal(BL.core.ready,true);assert.equal(BL.core.units().length,143);
const old=BL.core.units().map(u=>[u,BL.visuals.render(u)]);
const input=fs.readFileSync(process.env.BASIC_LEARNING_JH3_VISUALS||path.join(root,'js/visuals-jh3.js'),'utf8');
vm.runInNewContext(input,scope);
const partial=process.argv.includes('--partial'),loaded=Array.from(BL.jh3Visuals.codes);
if(!partial)assert.deepEqual(loaded,expected);
assert.ok(loaded.length>0&&loaded.every(c=>expected.includes(c)));assert.equal(new Set(loaded).size,loaded.length);
for(const[u,html]of old)assert.equal(BL.visuals.render(u),html,'old143 diagrams unchanged');
vm.runInNewContext(input,scope);assert.deepEqual(Array.from(BL.jh3Visuals.codes),loaded,'idempotent module registration');
let checks=0,states=0;
const eq=(a,b,label)=>{checks++;assert.deepEqual(copy(a),copy(b),label||'independent equality');};
const ok=(value,label)=>{checks++;assert.ok(value,label||'mathematical invariant');};
const near=(a,b,label,tolerance=.0001)=>{checks++;assert.ok(Number.isFinite(a)&&Math.abs(a-b)<=tolerance,(label||'coordinate')+': '+a+' vs '+b);};
const decode=s=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&');
const normal=s=>decode(String(s)).replace(/[\s　]/g,'').replace(/[−－]/g,'-').replace(/＋/g,'+').replace(/＝/g,'=').replace(/×/g,'*');
function elements(html){return Array.from(html.matchAll(/<([A-Za-z][\w:-]*)\b([^<>]*)>/g),m=>({tag:m[1],...Object.fromEntries(Array.from(m[2].matchAll(/([\w-]+)="([^"]*)"/g),a=>[a[1],a[2]]))}));}
function point(el){return [+el.cx,+el.cy];}
function polygon(el){return el.points.trim().split(/\s+/).map(p=>p.split(',').map(Number));}
function area(ps){return Math.abs(ps.reduce((n,p,i)=>n+p[0]*ps[(i+1)%ps.length][1]-ps[(i+1)%ps.length][0]*p[1],0))/2;}
function distance(a,b){return Math.hypot(a[0]-b[0],a[1]-b[1]);}
function signedArea(ps){return ps.reduce((n,p,i)=>n+p[0]*ps[(i+1)%ps.length][1]-ps[(i+1)%ps.length][0]*p[1],0)/2;}
function intersection(subject,clip){
 let result=subject.map(p=>p.slice());const sign=Math.sign(signedArea(clip));
 for(let i=0;i<clip.length;i++){
  const a=clip[i],b=clip[(i+1)%clip.length],cross=p=>sign*((b[0]-a[0])*(p[1]-a[1])-(b[1]-a[1])*(p[0]-a[0]));
  const input=result;result=[];if(!input.length)break;
  for(let j=0;j<input.length;j++){
   const p=input[j],q=input[(j+1)%input.length],cp=cross(p),cq=cross(q),pi=cp>=-1e-8,qi=cq>=-1e-8;
   if(pi)result.push(p);
   if(pi!==qi){const t=cp/(cp-cq);result.push([p[0]+t*(q[0]-p[0]),p[1]+t*(q[1]-p[1])]);}
  }
 }
 return result;
}
function disjointRectangles(rects){
 for(let i=0;i<rects.length;i++)for(let j=i+1;j<rects.length;j++){
  const a=rects[i],b=rects[j];
  const w=Math.min(+a.x+ +a.width,+b.x+ +b.width)-Math.max(+a.x,+b.x),h=Math.min(+a.y+ +a.height,+b.y+ +b.height)-Math.max(+a.y,+b.y);
  ok(w<=.0001||h<=.0001,'counted rectangle interiors are disjoint');
 }
}
function angle(a,b,c){const u=[a[0]-b[0],a[1]-b[1]],v=[c[0]-b[0],c[1]-b[1]];return Math.acos(Math.max(-1,Math.min(1,(u[0]*v[0]+u[1]*v[1])/(Math.hypot(...u)*Math.hypot(...v)))));}
function pointsNear(actual,wanted,label){eq(actual.length,wanted.length,label+' size');actual.forEach((p,i)=>{near(p[0],wanted[i][0],label+' x');near(p[1],wanted[i][1],label+' y');});}
function arc(el,cx,cy,r,start,extent){
 ok(/^M[-.\d]+ [-.\d]+ A[-.\d]+ [-.\d]+ 0 [01] [01] [-.\d]+ [-.\d]+$/.test(el.d),'exact arc commands');
 const v=el.d.match(/-?\d+(?:\.\d+)?/g).map(Number);
 eq(v.length,9);near(v[0],cx+r*Math.cos(start));near(v[1],cy-r*Math.sin(start));eq(v.slice(2,5),[r,r,0]);eq(v[5],extent>Math.PI?1:0,'large arc');eq(v[6],0,'counterclockwise arc');near(v[7],cx+r*Math.cos(start+extent));near(v[8],cy-r*Math.sin(start+extent));
}
function quadraticCurve(el,coefficient,transform,start=-3,end=3){
 ok(/^M[-.\d]+ [-.\d]+ Q[-.\d]+ [-.\d]+ [-.\d]+ [-.\d]+$/.test(el.d),'single exact quadratic Bezier');
 const a=el.d.match(/-?\d+(?:\.\d+)?/g).map(Number);eq(a.length,6);
 for(let i=0;i<=20;i++){const t=i/20,x=(1-t)**2*a[0]+2*(1-t)*t*a[2]+t*t*a[4],y=(1-t)**2*a[1]+2*(1-t)*t*a[3]+t*t*a[5],value=start+(end-start)*t,wanted=transform(value,coefficient*value*value);near(x,wanted[0],'curve x');near(y,wanted[1],'every point lies on parabola');}
}
function squareAudit(ps,expectedArea,label){
 eq(ps.length,4,label+' four vertices');near(area(ps),expectedArea,label+' area',.02);
 const lengths=ps.map((p,i)=>distance(p,ps[(i+1)%4]));for(const length of lengths)near(length*length,expectedArea,label+' equal side',.02);
 for(let i=0;i<4;i++)near(angle(ps[(i+3)%4],ps[i],ps[(i+1)%4]),Math.PI/2,label+' right angle');
}
function domain(unit,def){
 eq(copy(def.defaults),unit.defaults,'frozen defaults and types '+unit.code);
 const ranges=(def.controls||[]).map(c=>({key:c[0],min:c[2],max:c[3],step:c[4]}));
 const wanted=Object.entries(unit.state).filter(([,v])=>v.control==='range').map(([key,v])=>({key,min:v.min,max:v.max,step:v.step}));
 eq(ranges,wanted,'frozen numeric fields '+unit.code);
 const choices=(def.choices||[]).map(c=>[c[0],c[1]]);
 const expectedChoices=Object.entries(unit.state).filter(([,v])=>v.control==='choice').flatMap(([key,v])=>v.values.map(value=>[key,value]));
 eq(choices,expectedChoices,'frozen choice fields '+unit.code);
 let all=[{}];
 for(const[key,field]of Object.entries(unit.state)){
  ok(field.values.every(v=>typeof v===field.type),'frozen domain types');
  all=all.flatMap(s=>field.values.map(value=>({...s,[key]:value})));
 }
 eq(all.length,unit.stateCount,'frozen Cartesian size');return all;
}
function audit(unit,s,html){
 const all=elements(html),prefix='jh3-visual-';
 const get=key=>{const found=all.filter(e=>e.id===prefix+key);eq(found.length,1,'one visible '+key);return found[0];};
 const has=key=>all.some(e=>e.id===prefix+key);
 const many=key=>all.filter(e=>(e.id||'').startsWith(prefix+key));
 const txt=key=>{get(key);const match=new RegExp('<([A-Za-z][\\w:-]*)\\b[^>]* id="'+prefix+key+'"[^>]*>([\\s\\S]*?)</\\1>').exec(html);ok(match,'visible text '+key);return decode(match[2].replace(/<[^>]*>/g,''));};
 const summary=txt('summary'),contains=v=>ok(normal(summary).includes(normal(v)),unit.code+' conclusion includes '+v);
 const svg=all.filter(e=>e.tag==='svg');eq(svg.length,1,'one diagram per unit');
 const bounds=svg[0].viewBox.split(/\s+/).map(Number);eq(bounds.slice(0,3),[0,0,600]);ok(bounds[3]>0&&bounds[3]<=700,'bounded canvas');
 const ids=all.filter(e=>e.id).map(e=>e.id);eq(ids.length,new Set(ids).size,'unique IDs');
 ok(!/NaN|Infinity|undefined|<script|\bon[a-z]+=|点数|ランキング|順位|評価|成績|レベル|集中力|得意|苦手|上手|成長|データがありません|学びのバディ/.test(html),'safe finite child content');
 for(const e of all){
  if(e.tag==='rect')ok(+e.width>=0&&+e.height>=0&&+e.x>=-.001&&+e.y>=-.001&&+e.x+ +e.width<=600.001&&+e.y+ +e.height<=bounds[3]+.001,'rectangle within canvas');
  if(e.tag==='circle')ok(+e.r>0&&+e.cx- +e.r>=-.001&&+e.cy- +e.r>=-.001&&+e.cx+ +e.r<=600.001&&+e.cy+ +e.r<=bounds[3]+.001,'circle within canvas');
 }
 // Each branch is independently derived from the stated mathematical problem.
 switch(unit.order){
 case 1:{
  const x=+s.x,mul=s.operation==='multiply',value=mul?2*x*(x+3):3*x+2;
  ok(normal(txt('distribution-value')).endsWith(String(value)),'numeric substitution');
  eq(normal(txt('distribution-equation')),mul?'2x(x+3)=2x²+6x':'(6x²+4x)÷2x=3x+2');
  if(mul&&x>0){const rs=[get('distribution-part-0'),get('distribution-part-1')];near(+rs[0].width* +rs[0].height,2*x*x*576);near(+rs[1].width* +rs[1].height,6*x*576);disjointRectangles(rs);}
  else eq(many('distribution-part-').length,0,'signed quantities have no area tiles');
  if(!mul)ok(x!==0,'divisor is nonzero');break;
 }
 case 2:{
  const areas=[s.x*s.x,2*s.x,3*s.x,6],parts=areas.map((a,i)=>get('expand-part-'+i));
  parts.forEach((r,i)=>near(+r.width* +r.height,areas[i]*36*36,'expanded part area'));
  disjointRectangles(parts);const outer=get('expand-outline');near(+outer.width,36*(s.x+2));near(+outer.height,36*(s.x+3));
  near(parts.reduce((n,r)=>n+ +r.width* +r.height,0),+outer.width* +outer.height,'area partition complete');break;
 }
 case 3:{
  const areas=[s.a*s.a,s.a*s.b,s.a*s.b,s.b*s.b],parts=areas.map((a,i)=>get('square-sum-part-'+i));
  parts.forEach((r,i)=>near(+r.width* +r.height,areas[i]*1600,'sum-square area'));disjointRectangles(parts);
  const outer=get('square-sum-outline');near(+outer.width,40*(s.a+s.b));near(+outer.height,+outer.width);
  near(parts.reduce((n,r)=>n+ +r.width* +r.height,0),+outer.width* +outer.height);break;
 }
 case 4:{
  const b=s.b,full=get('square-difference-full');eq([+full.x,+full.y,+full.width,+full.height],[170,65,200,200]);
  eq(has('square-difference-bottom'),s.step>=1);eq(has('square-difference-right'),s.step>=1);
  eq(has('square-difference-overlap'),s.step>=2);eq(has('square-difference-result'),s.step===3);
  if(s.step>=1){const bottom=get('square-difference-bottom'),right=get('square-difference-right');eq([+bottom.width,+bottom.height],[200,40*b]);eq([+right.width,+right.height],[40*b,200]);}
  if(s.step>=2){const shared=get('square-difference-overlap');eq([+shared.x,+shared.y,+shared.width,+shared.height],[370-40*b,265-40*b,40*b,40*b]);}
  if(s.step===3){const result=get('square-difference-result');eq([+result.width,+result.height],[40*(5-b),40*(5-b)]);eq(25-10*b+b*b,(5-b)**2);}
  break;
 }
 case 5:{
  const parts=[get('difference-piece-0'),get('difference-piece-1')],areas=[5*(5-s.b),s.b*(5-s.b)];
  parts.forEach((r,i)=>near(+r.width* +r.height,900*areas[i],'difference pieces preserve area'));disjointRectangles(parts);
  near(areas.reduce((a,b)=>a+b),25-s.b*s.b);eq(normal(txt('difference-result')),'25-'+s.b*s.b+'='+(25-s.b*s.b));break;
 }
 case 6:{
  const k=+s.k;eq(normal(txt('common-term-0')),k+'x²');eq(normal(txt('common-term-1')),2*k+'x');
  if(s.step===2)eq(normal(txt('common-product')),k+'x(x+2)');
  for(const x of[-3,0,2])eq(k*x*x+2*k*x,k*x*(x+2),'factoring preserves x=0 too');break;
 }
 case 7:{
  const [a,b]={plus:[2,3],mixed:[-2,3],minus:[-2,-3]}[s.example];
  const pair=n=>'x'+(n<0?'-':'+')+Math.abs(n),expanded='x²'+(a+b<0?'-':'+')+Math.abs(a+b)+'x'+(a*b<0?'-':'+')+Math.abs(a*b);
  const output=[expanded,'和：'+a+'+('+b+')='+(a+b),'積：'+a+'*('+b+')='+(a*b),'因数分解：('+pair(a)+')('+pair(b)+')'][s.step];
  eq(normal(summary),normal(output),'sum/product factorization step');
  if(s.example==='plus'){const parts=[0,1,2,3].map(i=>get('factor-term-'+i));[9,6,9,6].forEach((area,i)=>near(+parts[i].width* +parts[i].height,area*1024));disjointRectangles(parts);}
  else ok(many('factor-term-').every(t=>t.tag==='text'),'negative factors use symbolic representation');
  for(const x of[-3,0,2])eq(x*x+(a+b)*x+a*b,(x+a)*(x+b));break;
 }
 case 8:{
  const examples={'square-plus':['x²+6x+9','x²+2・x・3+3²','(x+3)²'],'square-minus':['x²-6x+9','x²-2・x・3+3²','(x-3)²'],difference:['x²-9','x²-3²','(x+3)(x-3)']};
  eq(normal(txt('identity-source')),examples[s.example][0]);eq(normal(txt('identity-result')),examples[s.example][s.step]);
  for(const x of[-3,0,2]){const first=s.example==='difference'?x*x-9:x*x+(s.example==='square-plus'?6:-6)*x+9;const second=s.example==='difference'?(x+3)*(x-3):(x+(s.example==='square-plus'?3:-3))**2;eq(first,second);}break;
 }
 case 9:{
  const a=(s.n+1)**2,b=s.n*s.n;eq(normal(txt('consecutive-first')),'(n+1)²='+a);eq(normal(txt('consecutive-second')),'n²='+b);eq(normal(txt('consecutive-difference')),a+'-'+b+'='+(2*s.n+1));eq(a-b,2*s.n+1);break;
 }
 case 10:{
  const a=+s.a,r=Math.sqrt(a);eq(has('root-zero'),a===0);eq(has('root-area'),a>0);
  if(a>0){const square=get('root-area');near(+square.width,45*r);near(+square.height,45*r);near(+square.width* +square.height,2025*a,'area corresponds to radicand',.005);
   pointsNear([point(get('root-positive')),point(get('root-negative'))],[[300+55*r,265],[300-55*r,265]],'two actual square roots');
   eq(get('root-negative').fill,s.focus==='roots'?'#ad672b':'#fffdf8','principal root excludes negative root highlight');
  }else{eq(many('root-positive').length+many('root-negative').length,0);eq(point(get('root-zero')),[300,265]);}
  contains(s.focus==='principal'?'√'+a:a===0?'0の平方根は0':a+'の平方根');break;
 }
 case 11:{
  const values={zero:0,negative:-3,fraction:1/3,root4:2,root2:Math.SQRT2,pi:Math.PI};
  const p=get('number-range-point');near(+p.cx,300+55*values[s.number]);near(+p.cy,210);
  contains(['root2','pi'].includes(s.number)?'無理数':'有理数');break;
 }
 case 12:{
  const data={simplify:['√12','2√3',Math.sqrt(12)],multiply:['√3*√12','6',6],divide:['√12÷√3','2',2],'square-positive':['√(3²)','3',3],'square-negative':['√((-3)²)','3',3],zero:['√0','0',0]}[s.example];
  eq(normal(txt('radical-source')),data[0]);eq(normal(txt('radical-result')),'='+data[1]);
  const l=get('radical-length');near(+l.x1,100);near(+l.y1,240);near(+l.y2,240);near(+l.x2- +l.x1,60*data[2],'nonnegative radical magnitude');break;
 }
 case 13:{
  const n=+s.n;ok(n>0);const first=get('rationalize-length-0'),second=get('rationalize-length-1');
  const length=e=>e.tag==='line'?distance([+e.x1,+e.y1],[+e.x2,+e.y2]):+e.width;
  near(length(first),180/Math.sqrt(n),'original reciprocal magnitude');near(length(second),180*Math.sqrt(n)/n,'same reciprocal after rationalizing');
  near(length(first),length(second),'multiplying by one preserves length');break;
 }
 case 14:{
  const steps={sum:['√8+√18','2√2+3√2','5√2'],difference:['√18-√8','3√2-2√2','√2'],square:['(√3+1)²','3+2√3+1','4+2√3'],conjugate:['(√5+2)(√5-2)','5-4','1']}[s.example];
  eq(normal(txt('radical-combine-term-0')),steps[0]);eq(normal(txt('radical-combine-term-1')),steps[1]);eq(normal(txt('radical-combine-result')),steps[s.step]);
  const values={sum:[Math.sqrt(8)+Math.sqrt(18),5*Math.SQRT2],difference:[Math.sqrt(18)-Math.sqrt(8),Math.SQRT2],square:[(Math.sqrt(3)+1)**2,4+2*Math.sqrt(3)],conjugate:[(Math.sqrt(5)+2)*(Math.sqrt(5)-2),1]}[s.example];near(values[0],values[1],'radical arithmetic identity');break;
 }
 case 15:{
  const den=10**s.precision,low=Math.floor(Math.SQRT2*den),high=low+1;
  ok(low*low<2*den*den&&high*high>2*den*den,'exact integer bracket');
  near(+get('approx-overview-root').cx,70+460*(Math.SQRT2-1),'root stays on overview scale');
  near(+get('approx-detail-root').cx,100+400*(den*Math.SQRT2-low),'root on labelled zoom scale');contains('√2');break;
 }
 case 16:{
  const q={round123:[12.25,12.35,'12.3cm'],round246:[24.55,24.65,'24.6cm'],scientific2300:[2295,2305,'2.30*10³'],scientific45000:[44950,45050,'4.50*10⁴']}[s.example];
  eq(normal(txt('precision-expression')),q[2]);eq(point(get('precision-low')),[140,180]);eq(point(get('precision-high')),[460,180]);
  eq(get('precision-low').fill,'#467060','included rounding boundary');eq(get('precision-high').fill,'#fffdf8','excluded rounding boundary');contains(q[0]+'以上');contains(q[1]+'未満');break;
 }
 case 17:{
  const q={two:[-5,6,[2,3]],repeated:[-4,4,[2]],zero:[-3,0,[0,3]]}[s.equation],value=s.x*s.x+q[0]*s.x+q[1];
  eq(normal(txt('quadratic-lhs')),'x='+s.x+'の左辺：'+value);eq(normal(txt('quadratic-roots')),'解：'+q[2].join('、'));eq(point(get('quadratic-candidate')),[110+76*(s.x+1),220]);
  eq(get('quadratic-candidate').fill,value===0?'#467060':'#ad672b');q[2].forEach(x=>eq(x*x+q[0]*x+q[1],0));contains(value===0?'このxは解':'等式にならない');break;
 }
 case 18:{
  const q={two:{roots:[2,3],coeff:[-5,6],factors:['x-2','x-3']},zero:{roots:[0,3],coeff:[-3,0],factors:['x','x-3']},repeated:{roots:[2],coeff:[-4,4],factors:['x-2','x-2']}}[s.equation];
  for(let i=0;i<2;i++)eq(normal(txt('zero-product-factor-'+i)),q.factors[i]+'=0');
  const drawn=many('zero-product-root-');eq(drawn.length,s.step>=2?q.roots.length:0,'distinct solutions only');
  if(s.step>=2)pointsNear(drawn.map(point),q.roots.map(x=>[70+(x+1)*92,240]),'zero-product solutions');
  q.roots.forEach(x=>eq(x*x+q.coeff[0]*x+q.coeff[1],0));break;
 }
 case 19:{
  const q={basic:[2,18,0,[-3,3]],negative:[-2,-18,0,[-3,3]],shift:[1,9,2,[-5,1]],zero:[3,0,0,[0]],irrational:[1,2,0,[-Math.SQRT2,Math.SQRT2]]}[s.equation];
  const drawn=many('square-equation-root-');eq(drawn.length,s.step>=2?q[3].length:0);
  if(s.step>=2)pointsNear(drawn.map(point),q[3].map(x=>[70+46*(x+6),240]),'square-equation solutions');
  for(const x of q[3])near(q[0]*(x+q[2])**2,q[1],'substitution into original equation');break;
 }
 case 20:{
  const steps=['x²+4x-5=0','x²+4x=5','(x+2)²=9','x+2=±3→x=1、-5'];eq(normal(summary),steps[s.step]);
  const drawn=many('complete-root-');eq(drawn.length,s.step===3?2:0);
  if(s.step===3)pointsNear(drawn.map(point),[-5,1].map(x=>[70+46*(x+6),240]),'both roots after completing square');
  for(const x of[-5,1])eq(x*x+4*x-5,0);break;
 }
 case 21:{
  const [a,b,c]={irrational:[1,1,-1],rational:[2,-5,2],repeated:[1,-4,4]}[s.example],D=b*b-4*a*c;
  eq(normal(txt('formula-a')),'a='+a);eq(normal(txt('formula-b')),'b='+b);eq(normal(txt('formula-c')),'c='+c);eq(normal(txt('formula-discriminant')),'b²-4ac='+D);eq(+txt('formula-denominator'),2*a);
  const roots=D===0?[-b/(2*a)]:[(-b-Math.sqrt(D))/(2*a),(-b+Math.sqrt(D))/(2*a)];roots.forEach(x=>near(a*x*x+b*x+c,0));
  if(s.step===3)eq(normal(txt('formula-result')),{irrational:'x=(-1±√5)/2',rational:'x=2、1/2',repeated:'x=2'}[s.example]);break;
 }
 case 22:{
  const r=get('application-rectangle');eq([+r.width,+r.height],[100,160]);near(+r.width* +r.height/(20*20),40,'positive rectangle area');
  for(const x of[-8,5])eq(x*(x+3),40);ok(5>0&&-8<0);
  eq(has('application-negative'),s.step>=2);if(s.step>=2){ok(txt('application-negative').includes('長さに使えない'));eq(normal(txt('application-positive')),'x=5');}
  if(s.step===3)contains('横5cm、縦8cm');break;
 }
 case 23:{
  const a=+s.a;ok(a!==0);[-2,-1,0,1,2].forEach((x,i)=>eq(+normal(txt('quadratic-table-value-'+i)),a*x*x,'table entry'));
  pointsNear([point(get('quadratic-table-selected'))],[[300+65*s.x,180-7*a*s.x*s.x]],'selected function point');
  contains('y='+a*s.x*s.x);contains(s.x===0?'x=0ではx²で割らない':'y/x²='+a);break;
 }
 case 24:{
  const a=+s.a;ok(a!==0);eq(has('parabola-curve'),s.view==='curve');
  if(s.view==='curve')quadraticCurve(get('parabola-curve'),a,(x,y)=>[300+65*x,180-7*y]);
  const dots=many('parabola-point-');eq(dots.length,13);pointsNear(dots.map(point),Array.from({length:13},(_,i)=>{const x=-3+i/2;return[300+65*x,180-7*a*x*x];}),'symmetric parabola points');
  contains(a>0?'上に開く':'下に開く');break;
 }
 case 25:{
  const a=+s.a,[lo,hi]={cross:[-2,3],first:[1,2],second:[2,3],negative:[-3,-1],symmetric:[-2,2]}[s.interval],ys=[a*lo*lo,a*hi*hi];if(lo<=0&&hi>=0)ys.push(0);
  const min=Math.min(...ys),max=Math.max(...ys),P=(x,y)=>[300+65*x,180-7*y];
  quadraticCurve(get('range-curve'),a,P);pointsNear([point(get('range-start')),point(get('range-end'))],[P(lo,a*lo*lo),P(hi,a*hi*hi)],'closed interval endpoints');
  const line=get('range-secant');pointsNear([[+line.x1,+line.y1],[+line.x2,+line.y2]],[P(lo,a*lo*lo),P(hi,a*hi*hi)],'secant endpoints');
  eq(+normal(txt('range-min')),min);eq(+normal(txt('range-max')),max);ok(+get('range-min').y>325&&+get('range-max').y>325,'range values have a dedicated area below coordinate axes');ok(html.includes('yの最小')&&html.includes('最大'),'range labels identify y values');near((a*hi*hi-a*lo*lo)/(hi-lo),a*(lo+hi));contains('変化の割合は'+a*(lo+hi));break;
 }
 case 26:{
  if(s.model==='square'){const outer=get('squared-model-body'),cells=many('squared-model-cell-');eq(cells.length,s.n*s.n);eq([+outer.width,+outer.height],[50*s.n,50*s.n]);cells.forEach(r=>eq([+r.width,+r.height],[50,50]));disjointRectangles(cells);}
  else pointsNear([point(get('squared-model-point'))],[[70+50*s.n*s.n,220]],'model distance on labelled number line');
  contains(String(s.n*s.n));break;
 }
 case 27:{
  const P=(x,y)=>[100+120*x,290-24*y];quadraticCurve(get('motion-quadratic'),1,P,0,3);
  const l=get('motion-linear');pointsNear([[+l.x1,+l.y1],[+l.x2,+l.y2]],[P(0,0),P(3,6)],'linear comparison');
  pointsNear([point(get('motion-point-A')),point(get('motion-point-B'))],[P(s.t,s.t*s.t),P(s.t,2*s.t)],'same time two positions');
  contains('Aは'+s.t*s.t);contains('Bは'+2*s.t);break;
 }
 case 28:{
  for(let i=0;i<3;i++){
   const l=get('step-segment-'+i),p=100*(i+1),y=300-.7*p;
   eq([+l.x1,+l.y1,+l.x2,+l.y2],[80+140*i,y,220+140*i,y]);eq(point(get('step-open-'+i)),[80+140*i,y]);eq(point(get('step-closed-'+i)),[220+140*i,y]);
   eq(get('step-open-'+i).fill,'#fffdf8');eq(get('step-closed-'+i).fill,'#467060');
  }
  const price=100*Math.ceil(s.weight/2);eq(point(get('step-selected')),[80+70*s.weight,300-.7*price]);contains(price+'円');break;
 }
 case 29:{
  const source=[[-5/3,-1],[7/3,-1],[-2/3,2]],k=+s.k;
  const pose=([x,y])=>s.pose==='rotate'?[-y,x]:s.pose==='reflect'?[-x,y]:[x,y];
  const first=polygon(get('similar-source')),second=polygon(get('similar-target'));
  pointsNear(first,source.map(([x,y])=>[145+30*x,185-30*y]),'source triangle');
  pointsNear(second,source.map(p=>{const[x,y]=pose(p);return[435+30*k*x,185-30*k*y];}),'corresponding target');
  ok(k>0&&area(first)>1&&area(second)>1,'positive nondegenerate similarity');near(area(second)/area(first),k*k,'area ratio');
  for(let i=0;i<3;i++)near(distance(second[i],second[(i+1)%3])/distance(first[i],first[(i+1)%3]),k,'every corresponding side');break;
 }
 case 30:{
  const a=polygon(get('similar-condition-source')),b=polygon(get('similar-condition-target'));
  const source=[[0,0],[3,0],[0,4]],target=[[0,0],[4.5,0],s.condition==='insufficient'?[3,3*Math.sqrt(3)]:[0,6]];
  pointsNear(a,source.map(([x,y])=>[80+35*x,275-35*y]),'similarity condition source');
  pointsNear(b,target.map(([x,y])=>[360+35*x,275-35*y]),'similarity condition target');
  near(angle(a[1],a[0],a[2]),Math.PI/2,'included source angle');near(angle(b[1],b[0],b[2]),s.condition==='insufficient'?Math.PI/3:Math.PI/2,'actual included target angle');
  near(distance(b[0],b[1])/distance(a[0],a[1]),1.5);near(distance(b[0],b[2])/distance(a[0],a[2]),1.5);
  eq(many('similar-condition-side-').length,0,'unequal corresponding sides never use equal-length tick marks');
  const lengths=s.condition==='aa'?[]:s.condition==='sss'?[3,4.5,4,6,5,7.5]:[3,4.5,4,6];eq(many('similar-condition-length-').length,lengths.length);lengths.forEach((value,i)=>eq(+txt('similar-condition-length-'+i),value,'actual side length, not equality mark'));
  if(['sas','insufficient'].includes(s.condition)){eq(txt('similar-condition-angle-value-0'),'90°');eq(txt('similar-condition-angle-value-1'),s.condition==='sas'?'90°':'60°');}
  if(s.condition==='insufficient')ok(Math.abs(distance(b[1],b[2])/distance(a[1],a[2])-1.5)>.1,'two ratios alone do not imply similarity');break;
 }
 case 31:{
  const P=([x,y])=>[150+70*x,285-70*y],A=[0,0],B=[4,0],C=[0,3],H=[36/25,48/25];
  pointsNear(polygon(get('altitude-main')),[A,B,C].map(P),'original right triangle');
  pointsNear([point(get('altitude-foot'))],[P(H)],'altitude foot');
  near((H[0]-A[0])*(C[0]-B[0])+(H[1]-A[1])*(C[1]-B[1]),0,'altitude perpendicular to hypotenuse');
  near(distance(B,H),16/5);near(distance(C,H),9/5);near(distance(A,H),12/5);contains('△ABC∽△HBA∽△HAC');break;
 }
 case 32:{
  const t={'1/3':1/3,'1/2':1/2,'2/3':2/3}[s.fraction],P=([x,y])=>[300+55*x,285-55*y];
  const A=[0,3],B=[-3,0],C=[3,0],D=[-3*t,3-3*t],E=[3*t,3-3*t];
  pointsNear(polygon(get('parallel-ratio-triangle')),[A,B,C].map(P),'parallel outer triangle');
  pointsNear([point(get('parallel-ratio-D')),point(get('parallel-ratio-E'))],[D,E].map(P),'internal division points');
  near(distance(D,E)/distance(B,C),t);near(distance(A,D)/distance(A,B),t);near(distance(A,D)/distance(D,B),t/(1-t));
  const line=get('parallel-ratio-inner');near(+line.y1,+line.y2,'parallel line');break;
 }
 case 35:{
  const pole=get('shadow-pole'),tower=get('shadow-tower'),r1=get('shadow-pole-ray'),r2=get('shadow-tower-ray');
  near(Math.abs(+pole.y2- +pole.y1),50,'pole height');near(Math.abs(+tower.y2- +tower.y1),50*s.shadow,'inferred tower height');
  near((+r1.y2- +r1.y1)/(+r1.x2- +r1.x1),2,'light ray slope');near((+r2.y2- +r2.y1)/(+r2.x2- +r2.x1),2,'same direction light ray');contains(String(2*s.shadow));break;
 }
 case 33:{
  const k=+s.k,source=get('area-ratio-source'),target=get('area-ratio-target'),measure=e=>e.tag==='rect'?+e.width* +e.height:area(polygon(e));
  near(measure(target)/measure(source),k*k,'area ratio is the square of positive scale');
  const base=s.shape==='square'?4:3;near(measure(source),base*625,'same linear scale 25');near(measure(target),base*k*k*625);
  eq(normal(txt('area-ratio-base')),'面積'+base);eq(normal(txt('area-ratio-height')),'面積'+base*k*k);break;
 }
 case 34:{
  const k=s.k;
  if(s.view==='volume'){
   const cells=many('solid-ratio-cell-');eq(cells.length,k*k*k,'all unit cubes represented by separated layers');
   cells.forEach(r=>eq([+r.width,+r.height],[22,22]));disjointRectangles(cells);
   eq(many('solid-ratio-layer-').length,k);for(let z=0;z<k;z++){const r=get('solid-ratio-layer-'+z);eq([+r.x,+r.y,+r.width,+r.height],[70+175*z,335,22*k,22*k]);}
   const src=polygon(get('solid-ratio-source')),dst=polygon(get('solid-ratio-target'));near(area(dst)/area(src),k*k,'projected front is a face, not volume');contains(k+'³倍');
  }else{
   const cells=many('solid-ratio-face-').filter(e=>e.id.includes('-cell-'));eq(cells.length,6*k*k,'six faces each contain k squared unit faces');cells.forEach(r=>eq([+r.width,+r.height],[22,22]));disjointRectangles(cells);
   for(let f=0;f<6;f++){const r=get('solid-ratio-face-'+f);eq([+r.width,+r.height],[22*k,22*k]);}contains(k+'²倍');
  }break;
 }
 case 36:{
  const theta=+s.arc*Math.PI/180,f={'quarter':.25,half:.5,'three-quarter':.75}[s.position],pAngle=theta+(2*Math.PI-theta)*f;
  const P=a=>[300+105*Math.cos(a),175-105*Math.sin(a)],A=point(get('circle-A')),B=point(get('circle-B')),Pp=point(get('circle-P'));
  pointsNear([A,B,Pp],[P(0),P(theta),P(pAngle)],'same selected arc points');
  const circle=get('circle-main');eq([+circle.cx,+circle.cy,+circle.r],[300,175,105]);
  arc(get('circle-arc'),300,175,105,0,theta);arc(get('circle-center-angle'),300,175,34,0,theta);
  near(angle(A,Pp,B),theta/2,'actual inscribed angle');contains(String(+s.arc/2)+'°');break;
 }
 case 38:{
  const P=([x,y])=>[300+x,185-y],A=[-105,0],B=[105,0],Pp=[0,105],Q=s.example==='equal'?[105/Math.sqrt(2),105/Math.sqrt(2)]:[90,90];
  const actual=['A','B','P','Q'].map(k=>point(get('circle-converse-'+k)));pointsNear(actual,[A,B,Pp,Q].map(P),'converse configuration');
  ok(Pp[1]>0&&Q[1]>0,'P and Q are on the same open side');near(angle(A,Pp,B),Math.PI/2);
  if(s.example==='equal'){near(angle(A,Q,B),Math.PI/2);near(distance(Q,[0,0]),105);}
  else{ok(Math.abs(angle(A,Q,B)-Math.PI/2)>.01);ok(Math.abs(distance(Q,[0,0])-105)>1);}break;
 }
 case 37:{
  const theta=s.example==='center-ray'?2*Math.PI/3:Math.PI,pa=s.example==='center-ray'?Math.PI:3*Math.PI/2,P=a=>[300+105*Math.cos(a),175-105*Math.sin(a)],O=[300,175];
  const A=point(get('circle-proof-A')),B=point(get('circle-proof-B')),Pp=point(get('circle-proof-P'));
  pointsNear([A,B,Pp],[P(0),P(theta),P(pa)],'proof circle positions');arc(get('circle-proof-arc'),300,175,105,0,theta);
  near(distance(O,A),105);near(distance(O,B),105);near(distance(O,Pp),105);near(angle(A,Pp,B),theta/2,'radius proof inscribed angle');
  eq(has('circle-proof-OP'),s.step>=1);eq(has('circle-proof-radius'),s.step>=2);eq(has('circle-proof-center-angle'),s.step===3);
  if(s.step>=2){pointsNear(polygon(get('circle-proof-radius')),[O,B,Pp],'radius triangle');if(s.example==='center-ray')near(distance(B,Pp),105,'all three radius triangle sides equal');}
  if(s.step===3){arc(get('circle-proof-center-angle'),300,175,34,0,theta);get('circle-proof-inscribed-angle');contains(s.example==='center-ray'?'円周角60°':'円周角は90°');}break;
 }
 case 39:{
  const d=+s.distance,O=[210,185],P=[210+45*d,185],M=[210+22.5*d,185],qx=4/d,qy=2*Math.sqrt(d*d-4)/d;
  eq([+get('tangent-circle').cx,+get('tangent-circle').cy,+get('tangent-circle').r],[210,185,90]);eq(point(get('tangent-P')),P);ok(d>2,'P outside circle');
  eq(has('tangent-auxiliary'),s.step>=1);eq(has('tangent-Q-upper'),s.step>=2);eq(has('tangent-upper'),s.step===3);
  if(s.step>=1){const c=get('tangent-auxiliary');eq([+c.cx,+c.cy,+c.r],[M[0],M[1],22.5*d]);}
  if(s.step>=2)for(const[name,sign]of[['upper',-1],['lower',1]]){const Q=point(get('tangent-Q-'+name));pointsNear([Q],[[210+45*qx,185+sign*45*qy]],'actual circle intersection');near(distance(O,Q),90);near(distance(M,Q),22.5*d);near(angle(O,Q,P),Math.PI/2,'radius perpendicular to tangent');near(distance(P,Q),45*Math.sqrt(d*d-4));
   if(s.step===3){const l=get('tangent-'+name);pointsNear([[+l.x1,+l.y1],[+l.x2,+l.y2]],[P,Q],'tangent endpoints');}}
  break;
 }
 case 40:{
  const a=s.a,b=s.b,c2=a*a+b*b;
  if(s.view==='squares'){
   const scale=Math.min(400/(a+2*b),240/(2*a+b)),ox=300-scale*a/2,oy=175+scale*b/2,P=([x,y])=>[ox+scale*x,oy-scale*y];
   const shapes=[[[0,0],[a,0],[a,-a],[0,-a]],[[0,0],[0,b],[-b,b],[-b,0]],[[a,0],[0,b],[b,a+b],[a+b,a]]];
   shapes.forEach((ps,i)=>{const actual=polygon(get('pythagoras-square-'+['a','b','c'][i]));pointsNear(actual,ps.map(P),'external side square');squareAudit(actual,[a*a,b*b,c2][i]*scale*scale,'actual side square');});
   pointsNear(polygon(get('pythagoras-triangle')),[[0,0],[a,0],[0,b]].map(P),'right triangle');
  }else{
   const L=a+b,z=220/L,remaining=[];
   for(let g=0;g<2;g++){
    const ox=g?335:45,outer=get('pythagoras-layout-'+g);eq([+outer.x,+outer.y,+outer.width,+outer.height],[ox,65,220,220]);
    const triangles=Array.from({length:4},(_,i)=>polygon(get('pythagoras-proof-'+g+'-triangle-'+i)));
    triangles.forEach(ps=>{near(area(ps),a*b*z*z/2,'each triangle retains area',.02);const lengths=ps.map((p,i)=>distance(p,ps[(i+1)%3])).sort((x,y)=>x-y);[Math.min(a,b),Math.max(a,b),Math.sqrt(c2)].forEach((v,i)=>near(lengths[i],v*z,'congruent triangle sides'));ps.forEach(p=>ok(p[0]>=ox-.001&&p[0]<=ox+220.001&&p[1]>=64.999&&p[1]<=285.001,'triangle inside common outer square'));});
    for(let i=0;i<4;i++)for(let j=i+1;j<4;j++)near(area(intersection(triangles[i],triangles[j])),0,'triangle interiors do not overlap',.02);
    const rests=g?[get('pythagoras-square-a'),get('pythagoras-square-b')].map(r=>[[+r.x,+r.y],[+r.x+ +r.width,+r.y],[+r.x+ +r.width,+r.y+ +r.height],[+r.x,+r.y+ +r.height]]):[polygon(get('pythagoras-square-c'))];
    rests.forEach((ps,i)=>{squareAudit(ps,(g?[a*a,b*b][i]:c2)*z*z,'remaining square');for(const t of triangles)near(area(intersection(t,ps)),0,'remaining square separated from removed triangles',.03);});
    const rest=rests.reduce((v,ps)=>v+area(ps),0);remaining.push(rest);near(rest+triangles.reduce((v,ps)=>v+area(ps),0),220*220,'complete area partition',.05);
   }near(remaining[0],remaining[1],'equal remainders prove square sum',.03);
  }contains(a+'²+'+b+'² = '+c2);break;
 }
 case 41:{
  const [a,b,c]={'345':[3,4,5],'346':[3,4,6],'51213':[5,12,13],'234':[2,3,4]}[s.triple],ps=polygon(get('converse-triangle')),z=230/c;
  ok(a>0&&a+b>c&&c>=a&&c>=b,'valid positive triangle with longest side c');near(distance(ps[0],ps[1]),c*z);near(distance(ps[0],ps[2]),b*z);near(distance(ps[1],ps[2]),a*z);
  const isRight=a*a+b*b===c*c;eq(has('converse-right'),isRight,'right marker only when theorem applies');near(Math.cos(angle(ps[0],ps[2],ps[1])),(a*a+b*b-c*c)/(2*a*b),'actual angle follows side lengths');break;
 }
 case 42:{
  const e=get('plane-application-body');eq(has('plane-application-auxiliary'),s.step>=1);eq(has('plane-application-right'),s.step>=1);
  if(s.example==='rectangle'){eq([+e.x,+e.y,+e.width,+e.height],[100,70,150,200]);near(Math.hypot(+e.width,+e.height)/25,10);if(s.step>=1){const l=get('plane-application-auxiliary');eq([+l.x1,+l.y1,+l.x2,+l.y2],[100,270,250,70]);}}
  else if(s.example==='points'){eq(point(e),[245,260]);const points=all.filter(e=>e.tag==='circle'&&+e.r===5);pointsNear(points.map(point),[[245,260],[350,120]],'coordinate points with 35 px unit');near(distance(...points.map(point))/35,5);}
  else{eq([+e.cx,+e.cy,+e.r],[300,165,100]);near(Math.sqrt(10000-3600)/20,4,'half chord');if(s.step>=1){const l=get('plane-application-auxiliary');eq([+l.x1,+l.y1,+l.x2,+l.y2],[300,165,300,225]);}}
  if(s.step===2)contains(s.example==='rectangle'?'10':s.example==='points'?'5':'8');break;
 }
 case 43:{
  const ps=polygon(get('space-section'));
  if(s.solid==='cuboid'){const w=s.step===0?2:Math.sqrt(13),h=s.step===0?3:6;pointsNear(ps,[[355,270],[355+30*w,270],[355+30*w,270-30*h]],'true metric cuboid section');near(distance(ps[0],ps[2])/30,s.step===0?Math.sqrt(13):7);near(angle(ps[0],ps[1],ps[2]),Math.PI/2);}
  else{pointsNear(ps,[[355,270],[445,270],[355,150]],'true metric right cone section');near(distance(ps[1],ps[2])/30,5);near(angle(ps[1],ps[0],ps[2]),Math.PI/2);if(s.step===2)contains('高さは√(5²−3²)=4');}get('space-right');break;
 }
 case 44:{
  const marked=[1,4,7,10],sample=[1,6,11];eq(many('survey-part-').length,12);
  for(let i=1;i<=12;i++){const seen=s.method==='all'||sample.includes(i),r=get('survey-part-'+i);eq(r.fill,seen?(marked.includes(i)?'#f1dfc9':'#dce9df'):'#fffdf8','only surveyed marks disclosed');}
  contains(s.method==='all'?'印は4個':'印は1個');if(s.method==='sample')contains('全体の確定値ではない');break;
 }
 case 45:{
  const combinations=[];for(let a=1;a<=6;a++)for(let b=a+1;b<=7;b++)for(let c=b+1;c<=8;c++)combinations.push([a,b,c]);
  eq(combinations.length,56);const selected=combinations[s.sample-1],values=[2,4,4,6,8,8,10,12],sum=selected.reduce((v,i)=>v+values[i-1],0);
  for(let i=1;i<=8;i++){const e=get('sampling-part-'+i);eq(e.stroke,selected.includes(i)?'#ad672b':'#a8b3a2','sample membership exactly follows selected three indices');}
  selected.forEach((v,i)=>eq(+txt('sampling-selected-'+i),values[v-1]));eq(normal(txt('sampling-sum')),'合計'+sum+'mm');eq(normal(txt('sampling-mean')),'平均'+(sum%3?sum+'/3':sum/3)+'mm');
  contains('選んだ番号：'+selected.join('、'));eq(txt('sampling-source'),'決めて選ぶ例');get('sampling-random');break;
 }
 case 46:{
  const h=+s.hits;eq(many('estimate-population-').length,80);many('estimate-population-').forEach(r=>eq(r.fill,'#fffdf8','unknown population is not falsely revealed'));eq(many('estimate-sample-').length,20);
  for(let i=0;i<20;i++)eq(get('estimate-sample-'+i).fill,i<h?'#f1dfc9':'#dce9df');eq(normal(txt('estimate-fraction')),h+'/20');eq(has('estimate-result'),s.step>=2);
  if(s.step>=2)eq(normal(txt('estimate-result')),'推定：約'+4*h+'個');eq(many('estimate-alternative-').length,s.step===3?3:0);if(s.step===3)[20,24,28].forEach((v,i)=>eq(txt('estimate-alternative-'+i),'約'+v+'個'));break;
 }
 case 47:{
  const marked=[1,2,3,4,5,6,7,8,9,10,13,14],selected=s.method==='random-example'?[1,5,9,13,17,21]:[1,2,3,4,5,6],hits=selected.filter(i=>marked.includes(i)).length;
  eq(many('sampling-review-part-').length,24);for(let i=1;i<=24;i++){const e=get('sampling-review-part-'+i),seen=s.reveal==='population'||selected.includes(i);eq(e.fill,seen?(marked.includes(i)?'#f1dfc9':'#dce9df'):'#fffdf8');eq(e.stroke,selected.includes(i)?'#ad672b':'#a8b3a2');}
  eq(normal(txt('sampling-review-estimate')),'標本：'+hits+'/6→推定約'+4*hits+'個');if(s.reveal==='population')contains('本当の該当数は12個');break;
 }
 default:throw Error('Mathematical audit missing for '+unit.code);
 }
 return {get,has,many,txt,summary};
}
for(const unit of contract.units.filter(u=>loaded.includes(u.code))){
 const def=BL.visuals.definitions[unit.code];ok(def&&typeof def.draw==='function');
 for(const state of domain(unit,def)){try{audit(unit,state,def.draw(state));}catch(e){e.message=unit.code+' '+JSON.stringify(state)+' '+e.message;throw e;}states++;}
}
if(!partial)eq(states,441);
let probes=0;
const first=contract.units[0],original=BL.visuals.definitions[first.code];
const badDefault={...original,defaults:{...copy(original.defaults),x:2}};
assert.throws(()=>domain(first,badDefault),/frozen defaults/);probes++;
const badChoice={...original,choices:copy(original.choices)};badChoice.choices[0][1]='0';
assert.throws(()=>domain(first,badChoice),/frozen choice/);probes++;
function rejectDrawing(order,state,change,pattern){
 const unit=contract.units.find(u=>u.order===order);if(!loaded.includes(unit.code))return;
 const before=BL.visuals.definitions[unit.code].draw(state),after=change(before);
 assert.notEqual(after,before,'positive probe changed actual markup');assert.throws(()=>audit(unit,state,after),pattern);probes++;
}
rejectDrawing(2,{x:2},html=>{
 const after=html.replace(/(<rect id="jh3-visual-expand-part-0"[^>]* width=")([^"]+)(")/,(_,a,b,c)=>a+(+b+12)+c);
 const old=elements(html).find(e=>e.id==='jh3-visual-expand-part-0'),changed=elements(after).find(e=>e.id===old.id);
 assert.equal(+changed.width,+old.width+12);assert.equal(changed['stroke-width'],old['stroke-width']);return after;
},/expanded part area/);
rejectDrawing(10,{a:'2',focus:'roots'},html=>html.replace(/(id="jh3-visual-root-positive" cx=")([^"]+)/,(_,a,b)=>a+(+b+5)),/square roots/);
rejectDrawing(24,{a:'1',view:'curve'},html=>html.replace(/(id="jh3-visual-parabola-curve" d="M[^Q]+Q)([-.\d]+) ([-.\d]+)/,(_,a,x,y)=>a+x+' '+(+y+10)),/lies on parabola/);
rejectDrawing(36,{arc:'240',position:'half'},html=>html.replace(/(id="jh3-visual-circle-arc" d="[^"]+ A105 105 0 )1 0 /,(_,a)=>a+'0 0 '),/large arc/);
rejectDrawing(25,{a:'1',interval:'cross'},html=>html.replace(/(id="jh3-visual-range-min"[^>]* y=")[^"]+/,(_,a)=>a+'180'),/dedicated area/);
rejectDrawing(30,{condition:'sss'},html=>html.replace('</svg>','<line id="jh3-visual-similar-condition-side-0" x1="120" y1="270" x2="120" y2="280" stroke="#ad672b"/></svg>'),/equal-length tick marks/);
const fixture=[[0,0],[10,0],[0,10]],apart=[[20,20],[30,20],[20,30]];
near(area(intersection(fixture,fixture)),50,'intersection positive fixture');near(area(intersection(fixture,apart)),0,'intersection disjoint fixture');
console.log('JH3_VISUAL_MATH=PASS units='+loaded.length+' states='+states+' checks='+checks+' legacy_diagrams=143 positive_probes='+probes+' partial='+partial+' source_sha256='+crypto.createHash('sha256').update(input).digest('hex'));
