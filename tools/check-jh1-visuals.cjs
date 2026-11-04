'use strict';
// Independently computed mathematical and geometric expectations. Never imports
// the author's arithmetic helpers, claim ledger, or teaching-text answers.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const file=process.env.BASIC_LEARNING_JH1_VISUALS||path.join(root,'js/visuals-jh1.js');
const read=p=>fs.readFileSync(path.join(root,p),'utf8'),w={localStorage:{getItem:()=>null,setItem:()=>{}}};
w.BL={expectedCatalogue:JSON.parse(read('sources/catalogue-v4.json'))};
for(const f of ['units.js','units-grade5.js','units-grade6.js','core.js','visuals.js','visuals-grade5.js','visuals-grade6.js'])vm.runInNewContext(read('js/'+f),{window:w});
assert.equal(w.BL.core.ready,true);
const old=w.BL.core.units().map(u=>[u,w.BL.visuals.render(u)]);
const source=fs.readFileSync(file,'utf8');vm.runInNewContext(source,{window:w});
const expected=JSON.parse(read('sources/jh1-unit-manifest.json')).codes;
const partial=process.argv.includes('--partial');
const loaded=Array.from(w.BL.jh1Visuals.codes);
if(!partial)assert.deepEqual(loaded.slice().sort(),expected.slice().sort(),'all 38 independent official keys');
assert(loaded.every(c=>expected.includes(c)));assert.equal(new Set(loaded).size,loaded.length);
for(const [u,html]of old)assert.equal(w.BL.visuals.render(u),html,'old66 diagrams byte identical');
vm.runInNewContext(source,{window:w});assert.equal(w.BL.jh1Visuals.codes.length,loaded.length,'duplicate load is inert');
let checks=0,states=0;
const eq=(a,b,m)=>{checks++;assert.deepEqual(a,b,m);};
const ok=(v,m)=>{checks++;assert.ok(v,m);};
const near=(a,b,m,tol=.00002)=>{checks++;assert.ok(Number.isFinite(a)&&Math.abs(a-b)<=tol,m+': '+a+' vs '+b);};
const decode=s=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'");
function tags(html,tag){return Array.from(html.matchAll(new RegExp('<'+tag+'\\b([^>]*)>','g')),m=>Object.fromEntries(Array.from(m[1].matchAll(/([\w-]+)="([^"]*)"/g),a=>[a[1],a[2]])));}
function textTags(html){return Array.from(html.matchAll(/<text\b([^>]*)>([^<]*)<\/text>/g),m=>({...Object.fromEntries(Array.from(m[1].matchAll(/([\w-]+)="([^"]*)"/g),a=>[a[1],a[2]])),value:decode(m[2])}));}
function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){const r=a%b;a=b;b=r;}return a||1;}
const signed=n=>String(n).replace('-','−');
function fraction(a,b){if(b<0){a=-a;b=-b;}const g=gcd(a,b);return signed(a/g)+(b/g===1?'':'/'+b/g);}
function pi(a,b=1){const g=gcd(a,b);a/=g;b/=g;return (a===1?'':signed(a))+'π'+(b===1?'':'/'+b);}
function noOverlap(rects){for(let i=0;i<rects.length;i++)for(let j=i+1;j<rects.length;j++){const a=rects[i],b=rects[j];ok(Math.min(+a.x+ +a.width,+b.x+ +b.width)-Math.max(+a.x,+b.x)<=.00002||Math.min(+a.y+ +a.height,+b.y+ +b.height)-Math.max(+a.y,+b.y)<=.00002,'counted rectangles remain separate');}}
function points(poly){return poly.points.trim().split(/\s+/).map(v=>v.split(',').map(Number));}
function area(p){return Math.abs(p.reduce((a,v,i)=>{const q=p[(i+1)%p.length];return a+v[0]*q[1]-v[1]*q[0];},0)/2);}
function sectorCheck(p,cx,cy,r,degrees,start=0){
 const a=p.d.match(/-?\d+(?:\.\d+)?/g).map(Number);eq(a.length,11,'sector uses a real circular arc');
 near(a[0],cx,'sector center x');near(a[1],cy,'sector center y');near(a[4],r,'circular radius x');near(a[5],r,'circular radius y');
 eq(a[7],degrees>180?1:0,'large-arc flag');eq(a[8],0,'counterclockwise arc');
 for(const [i,t]of [[2,start],[9,start+degrees*Math.PI/180]]){near(a[i],cx+r*Math.cos(t),'sector boundary x');near(a[i+1],cy-r*Math.sin(t),'sector boundary y');}
}
function audit(code,s,html){
 const rr=tags(html,'rect'),cc=tags(html,'circle'),ll=tags(html,'line'),pp=tags(html,'polygon'),paths=tags(html,'path'),tt=textTags(html);
 const get=(list,id)=>{const v=list.find(x=>x.id==='jh1-visual-'+id);ok(v,'visible '+id);return v;};
 const take=(list,prefix)=>list.filter(v=>(v.id||'').startsWith('jh1-visual-'+prefix));
 const summary=/<p id="jh1-visual-summary"[^>]*>([^<]*)<\/p>/.exec(html);ok(summary,'visible conclusion');
 const output=decode(summary[1]),contains=x=>ok(output.includes(x),code+' expected '+x+' in '+output);
 const box=/viewBox="0 0 600 ([\d.]+)"/.exec(html);ok(box,'drawing viewBox');const height=+box[1];
 const ids=Array.from(html.matchAll(/ id="([^"]+)"/g),m=>m[1]);eq(new Set(ids).size,ids.length,'unique drawing IDs');
 ok(!/NaN|Infinity|undefined|<script|\bon[a-z]+=|点数|ランキング|順位|評価|成績|レベル|集中力|得意|苦手|上手|成長|データがありません|学びのバディ/.test(html),'finite safe child content');
 for(const r of rr)ok(+r.width>=0&&+r.height>=0&&+r.x>=0&&+r.y>=0&&+r.x+ +r.width<=600.001&&+r.y+ +r.height<=height+.001,'rectangle inside canvas '+r.id);
 for(const c of cc)ok(+c.r>0&&+c.cx- +c.r>=0&&+c.cy- +c.r>=0&&+c.cx+ +c.r<=600.001&&+c.cy+ +c.r<=height+.001,'circle inside canvas '+c.id);
 const k=code.slice(6);
 if(k==='3111100000'){
  near(+get(cc,'absolute-point').cx,300+s.x*40,'fixed origin and scale');const d=get(ll,'absolute-distance');near(Math.abs(+d.x2- +d.x1),Math.abs(s.x)*40,'absolute distance');contains('数は '+signed(s.x)+'、絶対値は '+Math.abs(s.x));
 }else if(k==='3111200000'){
  const move=s.op==='add'?s.b:-s.b,value=s.a+move;near(+get(cc,'add-result').cx,300+30*value,'sum endpoint');
  for(const [key,start,delta]of [['add-first',0,s.a],['add-move',s.a,move]]){
   const segment=take(ll,key).find(l=>l.id==='jh1-visual-'+key),heads=take(pp,key+'-head');
   if(delta===0){eq(heads.length,0,'zero movement has no arrowhead');if(segment)near(+segment.x1,+segment.x2,'zero distance');}
   else{ok(segment,'nonzero directed displacement');near(+segment.x1,300+start*30,'arrow starts at exact value');near(+segment.x2,300+(start+delta)*30,'arrow ends at exact value');eq(heads.length,1,'one direction head');}
  }
  contains('= '+signed(value));
 }else if(k==='3112100000'){
  const d=+s.b;eq(take(rr,'multiply-cell-').length,7,'seven multiplication rows');
  for(let v=-3;v<=3;v++)eq(get(tt,'multiply-product-'+v).value,signed(v*d),'table multiplication independently recomputed');
  noOverlap(take(rr,'multiply-cell-'));contains('= '+(s.op==='mul'?signed(s.a*d):fraction(s.a,d)));ok(d!==0,'no zero divisor');
 }else if(k==='3111000000'){
  const cases={square:['(−3)²','(−3) × (−3)','9'],sign:['−3²','−(3 × 3)','−9'],mixed:['2 + 3 × (−4)','2 + (−12)','−10']};eq(get(tt,'calculation-value').value,cases[s.example][s.step],'selected calculation step');contains('= '+cases[s.example][2]);
 }else if(k==='3111300000'){
  const values=[18,20,22,24];eq(take(rr,'baseline-bar-').length,4,'four observations');
  values.forEach((v,i)=>{near(+get(rr,'baseline-bar-'+i).height,v*7,'bar absolute scale');eq(get(tt,'baseline-difference-'+i).value,(v-s.base<0?'−':'+')+Math.abs(v-s.base),'difference from selected base');});
  near(+get(ll,'baseline-reference').y1,250-s.base*7,'reference height');contains('差の平均('+signed(21-s.base)+') = 21');noOverlap(take(rr,'baseline-bar-'));
 }else if(k==='5100000000'){
  const leaves=take(tt,'factor-leaf-'),expectedFactors={12:[2,2,3],18:[2,3,3],24:[2,2,2,3],30:[2,3,5]};eq(leaves.map(v=>+v.value).sort((a,b)=>a-b),expectedFactors[s.n],'complete prime multiset');eq(leaves.reduce((a,v)=>a*Number(v.value),1),+s.n,'leaf product');
  for(const node of take(tt,'factor-node-')){const branches=ll.filter(l=>Math.abs(+l.x1- +node.x)<.0001&&Math.abs(+l.y1-(+node.y+12))<.0001);eq(branches.length,2,'each composite splits in two');const children=branches.map(l=>tt.find(t=>Math.abs(+t.x- +l.x2)<.0001&&Math.abs(+t.y-(+l.y2+27))<.0001));ok(children.every(Boolean),'branch endpoints reach labels');eq(children.reduce((a,c)=>a*Number(c.value),1),+node.value,'each parent is product of its two children');}contains(s.n+' = ');
 }else if(k==='5200000000'){
  const values={subtract:['−2',1],divide:['3/2',2],exact:['2',0],add:['5',0]},scopes={natural:0,integer:1,rational:2},names={natural:'自然数',integer:'整数',rational:'分数で表せる数'};contains('= '+values[s.example][0]);contains(names[s.scope]+(values[s.example][1]<=scopes[s.scope]?'に入る。':'に入らない。'));
  const a=get(rr,'number-natural'),b=get(rr,'number-integer'),c=get(rr,'number-rational');for(const [inner,outer]of [[a,b],[b,c]])ok(+inner.x>+outer.x&&+inner.y>+outer.y&&+inner.x+ +inner.width<+outer.x+ +outer.width&&+inner.y+ +inner.height<+outer.y+ +outer.height,'proper subset nesting');
 }else if(k==='3121200000'){
  const cells=take(rr,s.form==='quotient'?'notation-part-':'notation-factor-');eq(cells.length,s.a,'correct number of symbolic parts');noOverlap(cells);
  if(s.form==='quotient'){cells.forEach(r=>near(+r.width,480/s.a,'equal symbolic shares'));contains('= '+(s.a===1?'x':'x/'+s.a));}
  else contains('= '+(s.a===1?'x':s.form==='power'?'x^'+s.a:s.a+'x'));
 }else if(k==='3121100000'){
  const value=s.formula==='linear'?2*s.x+1:s.x*s.x;eq(get(tt,'substitution-value').value,'= '+signed(value),'substitution arithmetic');contains('値は '+signed(value));
 }else if(k==='3121300000'){
  for(const [row,value]of [[0,s.a],[1,s.b]])eq(take(rr,'term-'+row+'-').length,Math.abs(value),'signed term count');
  eq(take(rr,'term-constant-').length,2,'two constant cards');noOverlap(rr);contains('= '+signed(s.a+s.b)+'x+1');
 }else if(k==='3121400000'){
  const valid=v=>s.relation==='le'?v<=5:s.relation==='lt'?v<5:v===5;eq(take(cc,'condition-value-').length,9,'integer domain includes zero');for(let i=0;i<=8;i++){const p=get(cc,'condition-value-'+i);near(+p.cx,60+60*i,'integer location');eq(p.fill==='#467060',valid(i),'boundary inclusion');near(+p.r,i===s.n?12:8,'selected integer');}contains(s.n*80+'円');contains(valid(s.n)?'条件を満たす。':'条件を満たさない。');
 }else if(k==='3131100000'){
  const value=2*s.x+3;eq(get(tt,'equation-left').value,signed(value),'left expression');near(+get(cc,'equation-left-point').cx,90+(value+1)*25,'left coordinate');near(+get(cc,'equation-right-point').cx,290,'right seven on same scale');contains(value===7?' = 7。解は2。':' ≠ 7。');
 }else if(k==='3131200000'){
  const formulas=['2x + 3 = 7','2x = 4','x = 2','7 = 7'];eq(get(tt,'equality-formula').value,formulas[s.step],'equivalent equality step');eq(output,formulas[s.step],'current stage summary');eq(2*2+3,7,'solution independently substituted');
 }else if(k==='3132100000'){
  const examples={bracket:['2(x + 1) = 8','2x + 2 = 8','2x = 6','x = 3'],decimal:['0.5x + 1 = 3','5x + 10 = 30','5x = 20','x = 4'],fraction:['x/3 + 1 = 3','x + 3 = 9','x = 6','6/3 + 1 = 3']};eq(get(tt,'equation-process-value').value,examples[s.example][s.step],'all terms receive operation');contains('x='+({bracket:3,decimal:4,fraction:6}[s.example]));
 }else if(k==='5400000000'){
  const lengths=[2,s.b,2*s.m,s.b*s.m];lengths.forEach((v,i)=>near(+get(rr,'proportion-bar-'+i).width,v*20,'common scale ratio bar'));noOverlap(rr);near(lengths[0]/lengths[1],lengths[2]/lengths[3],'same ratio');contains('x = '+2*s.m);
 }else if(k==='3132200000'){
  eq(take(rr,'price-item-').length,s.n,'one card per item');noOverlap(rr);contains('= '+(100*s.n+50)+' → x='+s.n+'個');
 }else if(k==='3311100000'){
  eq(take(cc,'function-input-').length,5,'five inputs');eq(take(cc,'function-output-').length,9,'nine candidate outputs');
  for(let x=-2;x<=2;x++){
   const values=s.rule==='double'?[2*x]:s.rule==='square'?[x*x]:x===0?[0]:[x,-x],links=take(ll,'function-link-'+(x+2)+'-');eq(links.length,values.length,'one or two outputs per input');
   links.forEach((l,i)=>{near(+l.x1,200,'input column');near(+l.y1,65+(x+2)*55,'input coordinate');near(+l.x2,400,'output column');near(+l.y2,60+(4-values[i])*32,'exact output connection');eq(l.stroke==='#ad672b',x===s.x,'highlighted input');});
  }
  contains(s.rule==='two'?'対応全体は関数でない。':'これは関数。');
 }else if(k==='3311300000'){
  const p=get(cc,'coordinate-point');near(+p.cx,300+48*s.x,'x coordinate');near(+p.cy,190-48*s.y,'y coordinate');const gx=get(ll,'coordinate-x-guide'),gy=get(ll,'coordinate-y-guide');near(+gx.y1,190,'horizontal move from origin');near(+gx.x2,+p.cx,'horizontal then vertical');near(+gy.x1,+p.cx,'vertical guide x');near(+gy.y2,+p.cy,'vertical guide endpoint');eq(output,'('+signed(s.x)+', '+signed(s.y)+')','ordered coordinate pair');
 }else if(k==='3311200000'){
  const a=+s.a;contains('y = '+signed(a*s.x));contains(s.x===0?'x=0では割り算で係数を求めない。':'y/x = '+signed(a));
  const rows=Array.from(html.matchAll(/<tr>(.*?)<\/tr>/g),m=>Array.from(m[1].matchAll(/<(?:th|td)>([^<]*)<\/(?:th|td)>/g),c=>decode(c[1])));eq(rows,[['x',...[-3,-2,-1,0,1,2,3].map(String)],['y',...[-3,-2,-1,0,1,2,3].map(x=>String(x*a))]],'entire proportion table');
 }else if(k==='3311400000'){
  const a=+s.a,p=get(cc,'proportional-point');near((+p.cx-300)/24,s.x,'selected graph x');near((190- +p.cy)/24,a*s.x,'selected graph y');
  const ends=get(paths,'proportional-line').d.match(/-?\d+(?:\.\d+)?/g).map(Number);eq(ends.length,4,'one continuous straight line');const bound=6/Math.max(1,Math.abs(a));
  for(let i=0;i<2;i++){near((ends[2*i]-300)/24,(i?1:-1)*bound,'line reaches visible border');near((190-ends[2*i+1])/24,a*(i?1:-1)*bound,'line follows y=ax');}contains('y='+signed(a)+'x');
 }else if(k==='3310000000'){
  const a=+s.a,x=+s.x,p=get(cc,'inverse-point');ok(x!==0,'0 absent from inverse domain');near((+p.cx-300)/12,x,'inverse selected x');near((190- +p.cy)/12,a/x,'inverse selected y');
  for(const branch of ['positive','negative']){
   const d=get(paths,'inverse-'+branch).d,coords=d.match(/-?\d+(?:\.\d+)?/g).map(Number);eq(coords.length,162,'81 samples on each separate branch');
   for(let i=0;i<coords.length;i+=2){const xx=(coords[i]-300)/12,yy=(190-coords[i+1])/12;ok(branch==='positive'?xx>0:xx<0,'branch never crosses zero');near(xx*yy,a,'every sampled curve point has constant product',.00003);ok(Math.abs(xx)<=12.000001&&Math.abs(yy)<=12.000001,'curve clipped to graph area');}
  }
  eq(take(paths,'inverse-').length,2,'no joining segment between branches');contains('xy='+signed(a));
 }else if(k==='3312200000'){
  const cells=take(rr,s.model==='mass'?'model-item-':'model-share-');eq(cells.length,s.n,'items or groups counted exactly');noOverlap(cells);
  if(s.model==='mass')contains('= '+20*s.n+'g');else{cells.forEach(r=>near(+r.width,480/s.n,'equal shares'));contains('1組'+60/s.n+'個');eq(60%s.n,0,'whole objects divided without fractions in these examples');}
 }else if(k==='3211200000'||k==='3212200000'){
  const original=[[-3,-1],[-1,-1],[-2,1]],convert=p=>[(p[0]-300)/48,(190-p[1])/48];
  const transform=kind=>original.map(([x,y])=>kind==='right2'?[x+2,y]:kind==='right3'||kind==='shift'?[x+3,y]:kind==='up2'?[x,y+2]:kind==='flipv'||kind==='reflect'?[-x,y]:kind==='fliph'?[x,-y]:kind==='turn90'?[-y,x]:[-x,-y]);
  const key=k==='3211200000'?'transform':'relation',a=points(get(pp,key+'-source')).map(convert),b=points(get(pp,key+'-target')).map(convert);eq(a,original,'reference triangle unchanged');
  const wanted=transform(k==='3211200000'?s.transform:s.target);b.forEach((v,i)=>v.forEach((x,j)=>near(x,wanted[i][j],'rigid transformation coordinate')));near(area(a),area(b),'transformation preserves area');
  for(let i=0;i<3;i++)near(Math.hypot(...a[i].map((x,j)=>x-a[(i+1)%3][j])),Math.hypot(...b[i].map((x,j)=>x-b[(i+1)%3][j])),'edge length preserved');
  if(k==='3212200000'){const coords=get(paths,'relation-candidate').d.match(/-?\d+(?:\.\d+)?/g).map(Number),wantedGuess=transform(s.guess);eq(coords.length,8,'closed candidate triangle');for(let i=0;i<4;i++){const p=convert(coords.slice(2*i,2*i+2));p.forEach((v,j)=>near(v,wantedGuess[i%3][j],'guessed transformation'));}contains(s.target===s.guess?'三つの対応点が重なる。':'対応する点の位置が違う。');}
 }else if(k==='3211100000'){
  const a=get(cc,'construction-a'),b=get(cc,'construction-b');eq([+a.cx,+a.cy,+b.cx,+b.cy],[225,180,375,180],'fixed endpoints');
  if(s.step>=1){const c=get(cc,'construction-circle-a');eq([+c.cx,+c.cy,+c.r],[225,180,125],'first compass setting');}
  if(s.step>=2){const c=get(cc,'construction-circle-b');eq([+c.cx,+c.cy,+c.r],[375,180,125],'same compass radius');for(let i=0;i<2;i++){const p=get(cc,'construction-cross-'+i);near(+p.cx,300,'perpendicular midpoint x');near(+p.cy,i?280:80,'two circle intersections');near(Math.hypot(+p.cx-225,+p.cy-180),125,'distance to A');near(Math.hypot(+p.cx-375,+p.cy-180),125,'distance to B');}}
  if(s.step===3){const l=get(ll,'construction-bisector');near(+l.x1,300,'bisector through midpoint');near(+l.x2,300,'vertical line perpendicular to horizontal AB');}
  if(s.kind!=='bisector'){const arc=get(paths,'construction-p-arc'),radius=s.kind==='on'?75:125,pY=s.kind==='on'?180:80;ok(arc.d.includes(' A'+radius+' '+radius+' '),'P-centered compass setting visible');for(const q of [a,b])near(Math.hypot(+q.cx-300,+q.cy-pY),radius,'A and B chosen at equal distance from P');}
 }else if(k==='3212100000'){
  const theta=+s.angle*Math.PI/180,O=[200,285],A=[360,285],B=[200+160*Math.cos(theta),285-160*Math.sin(theta)],C=[A[0]+B[0]-O[0],A[1]+B[1]-O[1]];
  if(s.step>=1){for(const [id,p]of [['bisect-a',A],['bisect-b',B]]){const v=get(cc,id);near(+v.cx,p[0],'equal-radius point x');near(+v.cy,p[1],'equal-radius point y');near(Math.hypot(+v.cx-O[0],+v.cy-O[1]),160,'equal origin radius');}}
  if(s.step>=2){const c=get(cc,'bisect-cross');near(+c.cx,C[0],'compass crossing x');near(+c.cy,C[1],'compass crossing y');for(const p of [A,B])near(Math.hypot(+c.cx-p[0],+c.cy-p[1]),160,'equal compass distance to A or B');}
  if(s.step===3){const l=get(ll,'angle-bisector');near(Math.atan2(+l.y1- +l.y2,+l.x2- +l.x1),theta/2,'bisector makes half the angle');}
  contains('= '+Number(s.angle)/2+'°');
 }else if(k==='5500000000'){
  const p=get(cc,'tangent-point'),r=get(ll,'tangent-radius'),l=get(ll,'tangent-line'),angle=s.turn*Math.PI/4;
  near(+p.cx,300+90*Math.cos(angle),'contact x');near(+p.cy,180-90*Math.sin(angle),'contact y');near(Math.hypot(+p.cx-300,+p.cy-180),90,'point lies on circle');
  near((+l.x1+ +l.x2)/2,+p.cx,'tangent through contact x');near((+l.y1+ +l.y2)/2,+p.cy,'tangent through contact y');near((+r.x2- +r.x1)*(+l.x2- +l.x1)+(+r.y2- +r.y1)*(+l.y2- +l.y1),0,'radius perpendicular to tangent',.003);contains('90°');
 }else if(k==='3221100000'){
  const vertices=[[0,0,0],[2,0,0],[2,2,0],[0,2,0],[0,0,2],[2,0,2],[2,2,2],[0,2,2]],edges=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]],highlight={parallel:[0,4],meet:[0,1],skew:[0,10],perpendicular:[8]}[s.pair];
  eq(take(ll,'space-edge-').length,12,'all twelve cube edges');edges.forEach(([a,b],i)=>{const edge=get(ll,'space-edge-'+i);for(const [v,j]of [[vertices[a],1],[vertices[b],2]]){near(+edge['x'+j],170+(v[0]+.48*v[1])*70,'3D edge projection x');near(+edge['y'+j],285-(v[2]+.28*v[1])*70,'3D edge projection y');}eq(edge.stroke==='#ad672b',highlight.includes(i),'selected spatial relation');});
  const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
  if(s.pair==='skew'){const ab=[2,0,0],cg=[0,0,2],ac=[2,2,0];ok(cross(ab,cg).reduce((sum,v,i)=>sum+v*ac[i],0)!==0,'noncoplanar lines really are skew');contains('ねじれの位置');}
  if(s.pair==='perpendicular'){eq(take(pp,'space-base-plane').length,1,'base plane visible');contains('AEは面ABCDと垂直');}
 }else if(k==='3222100000'){
  const p=points(get(pp,'rotation-profile')),theta=s.turn*Math.PI/2,x=300+100*Math.cos(theta),dy=27*Math.sin(theta);
  if(s.shape==='semicircle'){eq(p.length,43,'half-circle sample and closure');for(let i=0;i<=40;i++){near(p[i+1][0],300+110*Math.sin(i*Math.PI/40)*Math.cos(theta),'rotated semicircle horizontal projection');near(p[i+1][1],180-110*Math.cos(i*Math.PI/40),'rotated semicircle vertical coordinate');}near(+get(cc,'rotation-sphere-outline').r,110,'sphere radius unchanged');}
  else{const wanted=s.shape==='rectangle'?[[300,95],[x,95+dy],[x,275+dy],[300,275]]:[[300,95],[x,275+dy],[300,275]];eq(p.length,wanted.length,'profile vertex count');p.forEach((v,i)=>v.forEach((a,j)=>near(a,wanted[i][j],'rotating profile projection')));}
  contains(s.turn*90+'°');contains({rectangle:'円柱',triangle:'円錐',semicircle:'球'}[s.shape]);
 }else if(k==='5600000000'){
  if(s.view==='net'){const sides=take(rr,'box-net-side-'),bases=take(rr,'box-net-base-');eq(sides.length,4,'four lateral faces');eq(bases.length,2,'two bases');eq(sides.map(r=>+r.width/28),[2,3,2,3],'alternating connected widths');sides.forEach(r=>near(+r.height/28,4,'same prism height'));bases.forEach(r=>{near(+r.width/28,2,'base width');near(+r.height/28,3,'base depth');});noOverlap(rr);near(rr.reduce((sum,r)=>sum+Number(r.width)*Number(r.height),0)/(28*28),52,'net surface area');contains('表面積52');}
  else if(s.view==='solid'){eq(take(ll,'box-solid-edge-').length,12,'complete box wireframe');contains('2×3、2×4、3×4が2枚ずつ');}
  else{const r=get(rr,'box-view-face');near(+r.width/60,2,'projected width');near(+r.height/60,s.view==='front'?4:3,'front/top dimension');}
 }else if(k==='3221200000'){
  const theta=+s.angle,r=s.r;near(+get(cc,'sector-circle').r,r*30,'whole circle scale');
  if(theta===360)near(+get(cc,'sector-piece').r,r*30,'full-circle special case');else sectorCheck(get(paths,'sector-piece'),300,180,r*30,theta);
  contains('弧長'+pi(2*r*theta,360)+'cm');contains('面積'+pi(r*r*theta,360)+'cm²');contains('周の長さ'+(theta===360?pi(2*r):pi(2*r*theta,360)+'+'+2*r)+'cm');
 }else if(k==='3222200000'){
  if(s.shape==='box'){const sides=take(rr,'prism-net-side-'),bases=take(rr,'prism-net-base-');eq(sides.map(r=>+r.width/20),[2,3,2,3],'net perimeter');sides.forEach(r=>near(+r.height/20,s.h,'net height'));eq(bases.length,2,'both prism bases');near(rr.reduce((sum,r)=>sum+Number(r.width)*Number(r.height),0)/400,12+10*s.h,'rectangular net area');noOverlap(rr);contains('体積'+6*s.h+'、表面積'+(12+10*s.h));}
  else{const side=get(rr,'cylinder-net-side'),bases=take(cc,'cylinder-net-base-');eq(bases.length,2,'both circular bases');near(+side.width,80*Math.PI,'net width equals circumference');near(+side.height,20*s.h,'net height');bases.forEach(c=>near(+c.r,40,'net base radius'));near(+bases[0].cy+40,+side.y,'top base touches side');near(+bases[1].cy-40,+side.y+ +side.height,'bottom base touches side');contains('体積'+pi(4*s.h)+'、表面積'+pi(8+4*s.h));}
 }else if(k==='3221000000'){
  const k=s.scale;
  if(s.shape==='cone'){const h=get(ll,'cone-height'),base=tags(html,'ellipse').find(e=>e.id==='jh1-visual-cone-base');ok(base,'cone base');near(+base.rx,24*k,'radius in projection');near(Math.abs(+h.y2- +h.y1),32*k,'perpendicular height');sectorCheck(get(paths,'cone-net-side'),430,180,40*k,216,-Math.PI*.6);near(40*k*216*Math.PI/180,2*Math.PI*24*k,'net arc matches base circumference');contains('母線'+5*k);contains('体積'+pi(12*k*k*k)+'、表面積'+pi(24*k*k));}
  else{const base=get(rr,'pyramid-net-base'),sides=take(pp,'pyramid-net-side-');eq(sides.length,4,'four lateral triangles');near(+base.width,24*k,'square base width');near(+base.height,24*k,'square base depth');for(const side of sides)near(area(points(side)),24*k*20*k/2,'each lateral triangle area');near((+base.width* +base.height+sides.reduce((a,p)=>a+area(points(p)),0))/16,96*k*k,'entire pyramid surface area');contains('側面の三角形の高さ'+5*k);contains('体積'+48*k*k*k+'、表面積'+96*k*k);}
 }else if(k==='3220000000'){
  near(+get(cc,'sphere-outline').r,28*s.r,'sphere radius');near(+get(cc,'sphere-flat-circle').r,28*s.r,'same radius comparison circle');contains('直径'+2*s.r);contains('表面積'+pi(4*s.r*s.r)+'、体積'+pi(4*s.r*s.r*s.r,3));ok(html.includes('円の面積は'+pi(s.r*s.r)),'plane circle is a separate area');
 }else if(k==='3411200000'){
  const values=[1,2,2,3,4,4,5,6,7,8,9,10],width=+s.width,start=+s.start,bins=take(rr,'histogram-bin-'),expected=[];for(let lo=start;lo<=10;lo+=width)expected.push(values.filter(v=>v>=lo&&v<lo+width).length);eq(bins.length,expected.length,'complete half-open bins');bins.forEach((r,i)=>{near(+r.x,60+(start+i*width)*34,'bin begins at exact boundary');near(+r.width,width*34,'same numeric horizontal scale');near(+r.height,expected[i]*28,'frequency height');eq(get(tt,'histogram-count-'+i).value,String(expected[i]),'frequency label');});eq(expected.reduce((a,b)=>a+b,0),12,'all observations counted once');noOverlap(bins);contains('度数：'+expected.join('、')+'（合計12）');
 }else if(k==='3411100000'){
  const counts=s.group==='A'?[2,3,5]:[8,6,6],total=counts.reduce((a,b)=>a+b,0),expected=counts.map((v,i)=>s.view==='relative'?v/total:s.view==='cumulative'?counts.slice(0,i+1).reduce((a,b)=>a+b,0):v),limit=s.view==='relative'?1:20;
  eq(take(rr,'relative-bin-').length,3,'three classes');for(let i=0;i<3;i++){near(+get(rr,'relative-bin-'+i).height,expected[i]/limit*200,'correct count or relative scale');eq(get(tt,'relative-value-'+i).value,String(expected[i]),'shown frequency');}noOverlap(rr);contains('：'+expected.join('、'));if(s.view==='relative')near(expected.reduce((a,b)=>a+b,0),1,'relative frequencies sum to one');if(s.view==='cumulative')eq(expected[2],total,'last cumulative is total');
 }else if(k==='3412100000'){
  const groups={A:[4,4,5,5,6,6],B:[0,2,4,6,8,10]};for(const group of ['A','B']){const dots=take(cc,'distribution-'+group+'-');eq(dots.length,6,'each observation has a separate dot');dots.forEach((d,i)=>near((+d.cx-80)/44,groups[group][i],'common data scale'));for(let i=0;i<dots.length;i++)for(let j=i+1;j<dots.length;j++)ok(Math.hypot(+dots[i].cx- +dots[j].cx,+dots[i].cy- +dots[j].cy)>=20,'repeated data visibly stacked');}
  const data=groups[s.group],value=s.measure==='mean'?data.reduce((a,b)=>a+b,0)/data.length:s.measure==='median'?(data[2]+data[3])/2:data[5]-data[0];contains('は'+value+'。');
 }else if(k==='3421100000'){
  const count=+s.n,expected={A:{10:6,20:11,50:26,100:51},B:{10:3,20:9,50:24,100:48}}[s.series][count],cells=take(rr,'trial-cell-');eq(cells.length,100,'100 total trial slots');eq(cells.filter(r=>r.fill==='#467060').length,expected,'heads match independent prefix counts');eq(cells.filter(r=>r.fill==='#f4d9b5').length,count-expected,'tails match observed trials');eq(cells.filter(r=>r.fill==='#fffdf8').length,100-count,'unread slots stay blank');noOverlap(cells);near(+get(rr,'trial-head-bar').width,480*expected/count,'observed relative frequency');near(+get(rr,'trial-tail-bar').width,480*(count-expected)/count,'complement');contains('表'+expected+'回・裏'+(count-expected)+'回');contains('= '+expected/count);
 }else throw Error('No independent geometry review for '+code);
 states++;
}
function combinations(def){let rows=[{...def.defaults}];for(const c of def.controls){const values=[];for(let x=c[2];x<=c[3];x+=c[4])values.push(x);rows=rows.flatMap(s=>values.map(x=>({...s,[c[0]]:x})));}for(const key of new Set(def.choices.map(c=>c[0])))rows=rows.flatMap(s=>def.choices.filter(c=>c[0]===key).map(c=>({...s,[key]:c[1]})));return rows;}
for(const code of loaded){const d=w.BL.visuals.definitions[code];ok(d&&typeof d.draw==='function','drawable definition');for(const s of combinations(d))audit(code,s,d.draw(s));}
if(!partial){
 eq(states,795,'frozen finite state space');
 const d=w.BL.visuals.definitions[expected[0]],html=d.draw(d.defaults);
 assert.throws(()=>audit(expected[0],d.defaults,html.replace(/(id="jh1-visual-absolute-point"[^>]*cx=")[^"]+/,(_,a)=>a+'310')),'changed position detected');
 const add=w.BL.visuals.definitions['8350213111200000'],zero={a:0,b:0,op:'sub'};
 assert.throws(()=>audit('8350213111200000',zero,add.draw(zero).replace('</svg>','<polygon id="jh1-visual-add-first-head" points="300,125 291,120 291,130"/></svg>')),'zero displacement false arrow detected');
 const factor=w.BL.visuals.definitions['8350215100000000'];
 assert.throws(()=>audit('8350215100000000',factor.defaults,factor.draw(factor.defaults).replace(/(<text[^>]*id="jh1-visual-factor-leaf-0"[^>]*>)[^<]+/,(_,a)=>a+'7')),'wrong prime leaf detected');
 const inverse=w.BL.visuals.definitions['8350213310000000'];
 assert.throws(()=>audit('8350213310000000',inverse.defaults,inverse.draw(inverse.defaults).replace(/(id="jh1-visual-inverse-point"[^>]*cy=")[^"]+/,(_,a)=>a+'150')),'changed inverse product detected');
 console.log('JH1_VISUAL_MATH=PASS modules=38 states='+states+' assertions='+checks+' legacy_diagrams_unchanged=66 positive_probes=4 source_sha256='+crypto.createHash('sha256').update(source).digest('hex'));
}
else console.log('JH1_VISUAL_PARTIAL=PASS modules='+loaded.length+' states='+states+' assertions='+checks+' full_review=false');
