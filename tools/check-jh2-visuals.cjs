'use strict';
// Independent mathematics and geometry; author answers/claims are never an oracle.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const file=process.env.BASIC_LEARNING_JH2_VISUALS||path.join(root,'js/visuals-jh2.js');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const w={localStorage:{getItem:()=>null,setItem:()=>{}}};
w.BL={expectedCatalogue:JSON.parse(read('sources/catalogue-v5.json'))};
for(const f of ['units.js','units-grade5.js','units-grade6.js','units-jh1.js','core.js','visuals.js','visuals-grade5.js','visuals-grade6.js','visuals-jh1.js'])vm.runInNewContext(read('js/'+f),{window:w});
assert.equal(w.BL.core.ready,true);
const old=w.BL.core.units().map(u=>[u,w.BL.visuals.render(u)]);
const source=fs.readFileSync(file,'utf8');vm.runInNewContext(source,{window:w});
const expected=JSON.parse(read('sources/jh2-unit-manifest.json')).codes,partial=process.argv.includes('--partial');
const loaded=Array.from(w.BL.jh2Visuals.codes);
if(!partial)assert.deepEqual(loaded.slice().sort(),expected.slice().sort());
assert(loaded.every(c=>expected.includes(c)));assert.equal(new Set(loaded).size,loaded.length);
for(const[u,html]of old)assert.equal(w.BL.visuals.render(u),html,'old 104 diagrams identical');
vm.runInNewContext(source,{window:w});assert.equal(w.BL.jh2Visuals.codes.length,loaded.length);
let checks=0,states=0;
const eq=(a,b,m)=>{checks++;assert.deepEqual(a,b,m||"mathematical equality");},ok=(v,m)=>{checks++;assert.ok(v,m||"mathematical condition");};
const near=(a,b,m,tol=.00003)=>{checks++;assert.ok(Number.isFinite(a)&&Math.abs(a-b)<tol,m+': '+a+' vs '+b);};
const decode=s=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'");
function tags(html,tag){return Array.from(html.matchAll(new RegExp('<'+tag+'\\b([^>]*)>','g')),m=>Object.fromEntries(Array.from(m[1].matchAll(/([\w-]+)="([^"]*)"/g),a=>[a[1],a[2]])));}
function texts(html){return Array.from(html.matchAll(/<text\b([^>]*)>([^<]*)<\/text>/g),m=>({...Object.fromEntries(Array.from(m[1].matchAll(/([\w-]+)="([^"]*)"/g),a=>[a[1],a[2]])),value:decode(m[2])}));}
const signed=n=>String(n===0?0:n).replace('-','−');
function coeff(n,s){return n===0?'0':n===1?s:n===-1?'−'+s:signed(n)+s;}
function fraction(a,b){let x=Math.abs(a),y=Math.abs(b);while(y){const r=x%y;x=y;y=r;}return signed(a/x)+(b/x===1?'':'/'+b/x);}
function points(poly){return poly.points.split(/\s+/).map(p=>p.split(',').map(Number));}
function distance(a,b){return Math.hypot(a[0]-b[0],a[1]-b[1]);}
function angle(a,b,c){const u=[a[0]-b[0],a[1]-b[1]],v=[c[0]-b[0],c[1]-b[1]];return Math.acos(Math.max(-1,Math.min(1,(u[0]*v[0]+u[1]*v[1])/(Math.hypot(...u)*Math.hypot(...v)))));}
function arcAudit(p,cx,cy,r,start,radians){const v=p.d.match(/-?\d+(?:\.\d+)?/g).map(Number);eq(v.length,9,'circular arc command');near(v[0],cx+r*Math.cos(start),'arc start x');near(v[1],cy-r*Math.sin(start),'arc start y');eq(v.slice(2,5),[r,r,0]);eq(v[5],radians>Math.PI?1:0);eq(v[6],0);near(v[7],cx+r*Math.cos(start+radians),'arc end x');near(v[8],cy-r*Math.sin(start+radians),'arc end y');}
function parallelogram(ps){eq(ps.length,4);near(ps[0][0]+ps[2][0],ps[1][0]+ps[3][0],'diagonal midpoint x');near(ps[0][1]+ps[2][1],ps[1][1]+ps[3][1],'diagonal midpoint y');for(let i=0;i<2;i++)near(distance(ps[i],ps[i+1]),distance(ps[(i+2)%4],ps[(i+3)%4]),'opposite equal sides');ok(Math.abs((ps[1][0]-ps[0][0])*(ps[3][1]-ps[0][1])-(ps[1][1]-ps[0][1])*(ps[3][0]-ps[0][0]))>1,'non-degenerate quadrilateral');}
function quartiles(data){const d=data.slice().sort((a,b)=>a-b),median=v=>v.length%2?v[(v.length-1)/2]:(v[v.length/2-1]+v[v.length/2])/2;return[d[0],median(d.slice(0,Math.floor(d.length/2))),median(d),median(d.slice(Math.ceil(d.length/2))),d[d.length-1]];}
function audit(code,s,html){
 const rr=tags(html,'rect'),cc=tags(html,'circle'),ll=tags(html,'line'),pp=tags(html,'polygon'),paths=tags(html,'path'),tt=texts(html);
 const get=(list,key)=>{const found=list.find(v=>v.id==='jh2-visual-'+key);ok(found,code+' visible '+key);return found;};
 const take=(list,key)=>list.filter(v=>(v.id||'').startsWith('jh2-visual-'+key));
 const txt=k=>get(tt,k).value;
 const match=/<p id="jh2-visual-summary"[^>]*>([^<]*)<\/p>/.exec(html);ok(match,'visible conclusion');
 const summary=decode(match[1]),contains=v=>ok(summary.includes(v),code+' expected '+v+' in '+summary);
 const height=Number((/viewBox="0 0 600 ([\d.]+)"/.exec(html)||[])[1]);ok(height>0,'valid canvas');
 const ids=Array.from(html.matchAll(/ id="([^"]+)"/g),m=>m[1]);eq(new Set(ids).size,ids.length,'unique identities');
 ok(!/NaN|Infinity|undefined|<script|\bon[a-z]+=|点数|ランキング|順位|評価|成績|レベル|集中力|得意|苦手|上手|成長|データがありません|学びのバディ/.test(html),'finite safe child content');
 for(const r of rr)ok(+r.width>=0&&+r.height>=0&&+r.x>=0&&+r.y>=0&&+r.x+ +r.width<=600.001&&+r.y+ +r.height<=height+.001,'rect inside drawing');
 for(const c of cc)ok(+c.r>0&&+c.cx- +c.r>=0&&+c.cy- +c.r>=0&&+c.cx+ +c.r<=600.001&&+c.cy+ +c.r<=height+.001,'circle inside drawing');
 function plotPoint(id,x,y){const p=get(cc,id);near(+p.cx,300+22*x,'fixed x coordinate');near(+p.cy,180-22*y,'fixed y coordinate');}
 function plotLine(id,a,b){const line=get(ll,id);ok(Math.hypot(+line.x2- +line.x1,+line.y2- +line.y1)>1,'graph line has nonzero visible length');for(const i of [1,2]){const x=(+line['x'+i]-300)/22,y=(180- +line['y'+i])/22;near(y,a*x+b,'each endpoint satisfies equation');ok(x>=-6.00003&&x<=6.00003&&y>=-6.00003&&y<=6.00003,'graph endpoint within fixed plot region');ok(Math.abs(Math.abs(x)-6)<.00003||Math.abs(Math.abs(y)-6)<.00003,'graph reaches plot boundary');}}
 function boxCheck(id,values,step){const q=quartiles(values);if(step>=1){const m=get(ll,id+'-median');near(+m.x1,60+30*q[2],'median on common scale');near(+m.x2,+m.x1,'vertical median');}if(step>=2)for(const [key,i]of[['q1',1],['q3',3]])near(+get(ll,id+'-'+key).x1,60+30*q[i],'quartile on common scale');if(step===3){const r=get(rr,id+'-body'),whisker=get(ll,id+'-whisker');near(+r.x,60+30*q[1],'box left quartile');near(+r.width,30*(q[3]-q[1]),'box width IQR');near(+whisker.x1,60+30*q[0],'min whisker');near(+whisker.x2,60+30*q[4],'max whisker');}return q;}
 const datasets={even:[2,4,4,6,8,8,10,12],odd:[1,2,3,4,5,6,7,8,9],same:[4,4,4,4,4,4,4,4]};
 const k=code.slice(6);
 if(k==='3110000000'){
  const ex={x:['2x',1],y:['3y',1],xy:['2xy',2],square:['x²',2],constant:['5',0],negative:['−x',1]}[s.term];eq(txt('term-result'),ex[0]);contains('次数'+ex[1]);
 }else if(k==='3111100000'){
  const sign=s.op==='add'?1:-1;eq(txt('poly-x'),coeff(s.a+sign*s.b,'x'));eq(txt('poly-y'),coeff(3-sign,'y'));eq(take(rr,'poly-term-').length,4);
 }else if(k==='3112100000'){
  const a=+s.a,b=+s.b;eq(take(rr,'monomial-factor-').length,2);if(s.op==='mul')contains('= '+coeff(a*b,'x³'));else{contains('= ('+fraction(a,b)+')x');contains('x≠0');}
 }else if(k==='3111400000'){
  contains('x = (y − ('+signed(s.b)+')) ÷ ('+signed(+s.a)+')');ok(+s.a!==0,'rearrangement never divides by zero');
 }else if(k==='3111200000'){
  if(s.form==='consecutive'){eq(take(rr,'quantity-part-').length,2);contains(s.n+'と'+(s.n+1));contains('差は1');}
  else if(s.form==='price'){eq(take(rr,'quantity-part-').length,s.n);contains(String(80*s.n+50)+'円');}
  else{const r=get(rr,'quantity-part-0');near(+r.width/ +r.height,s.n/3,'rectangle aspect');contains('= '+(2*s.n+6));}
 }else if(k==='3111300000'){
  const a=2*s.m+1,b=2*s.n+1;contains('和は'+signed(a+b));contains('2(m+n+1)');eq((a+b)%2===0,true,'arbitrary selected integers produce even sum');
 }else if(k==='3121100000'){
  plotPoint('equation-point',s.x,s.y);plotLine('equation-line',-1,5);contains('='+String(s.x+s.y));contains(s.x+s.y===5?'式を満たす':'5とは違う');
 }else if(k==='3121200000'){
  plotPoint('system-point',s.x,s.y);plotLine('system-line-0',-2,7);plotLine('system-line-1',1,-2);const a=2*s.x+s.y===7,b=s.x-s.y===2;contains(a&&b?'両方を満たす':a||b?'片方だけを満たす':'どちらも満たさない');
 }else if(k==='3121300000'){
  eq(txt('elimination-value'),['2x+y=7、x−y=2','加えた式3x=9、元の式x−y=2','x=3、3−y=2 → y=1','2×3+1=7、3−1=2'][s.step]);ok(html.includes('2x+y=7、x−y=2'),'original system stays available');eq(2*3+1,7);eq(3-1,2);
 }else if(k==='3122100000'){
  eq(txt('substitution-value'),['x+y=5、y=2x−1','x+(2x−1)=5','3x=6 → x=2、y=3','2+3=5、3=2×2−1'][s.step]);eq(2+3,5);eq(3,2*2-1);
 }else if(k==='3121000000'){
  const values={bracket:[3,2],decimal:[4,2],fraction:[4,1]},[x,y]=values[s.example];
  if(s.example==='bracket'){eq(2*(x+y),10);eq(x-y,1);}else if(s.example==='decimal'){eq(x/2+y,4);eq(x-y,2);}else{eq(x/2+y,3);eq(x-y,3);}
  if(s.step===3){const t=txt('systemwork-value');ok(t.includes(String(x))&&t.includes(String(y)),'correct substituted values');}
 }else if(k==='3122200000'){
  const r=take(rr,'ticket-');eq(r.length,6);eq(r.filter(v=>v.fill==='#f4d9b5').length,s.adult);contains('合計'+(200*s.adult+100*(6-s.adult))+'円');
 }else if(k==='3311100000'){
  contains(s.a===0?'定数関数':'一次関数');const rows=Array.from(html.matchAll(/<tr>(.*?)<\/tr>/g),m=>Array.from(m[1].matchAll(/<(?:td|th)>(.*?)<\/(?:td|th)>/g),v=>decode(v[1])));eq(rows.length,2);eq(rows[0],['x','-2','-1','0','1','2']);eq(rows[1],['y'].concat([-2,-1,0,1,2].map(x=>String(s.a*x+s.b))));
 }else if(k==='3312100000'){
  const a=+s.a;plotPoint('slope-start',-1,1-a);plotPoint('slope-end',-1+s.dx,1-a+a*s.dx);plotLine('slope-line',a,1);const dx=get(ll,'slope-dx'),dy=get(ll,'slope-dy');near(+dx.x2- +dx.x1,22*s.dx,'horizontal increase');near(+dy.y1- +dy.y2,22*a*s.dx,'vertical increase');contains('='+signed(a));
 }else if(k==='3311000000'){
  const a=+s.a;plotPoint('linear-intercept',0,s.b);plotPoint('linear-next',1,a+s.b);plotLine('linear-line',a,s.b);contains('傾き'+signed(a));
 }else if(k==='3312000000'){
  const data={rise:[[0,1],[2,5]],fall:[[0,3],[2,-1]],fraction:[[0,-1],[4,1]]}[s.example],a=(data[1][1]-data[0][1])/(data[1][0]-data[0][0]),b=data[0][1];data.forEach((v,i)=>plotPoint('derive-point-'+i,...v));if(s.step===2)plotLine('derive-line',a,b);else eq(take(ll,'derive-line').length,0);
 }else if(k==='3311300000'){
  const line=get(ll,'two-variable-line');if(s.kind==='vertical'){near(+line.x1,300+22*s.k,'constant x');near(+line.x2,+line.x1,'vertical line');contains('yはいろいろ');}else plotLine('two-variable-line',s.kind==='regular'?1:0,s.k);
 }else if(k==='3310000000'){
  plotLine('intersection-line-0',1,1);const a=s.system==='intersect'?-1:1,b=s.system==='intersect'?5:s.system==='parallel'?-1:1;plotLine('intersection-line-1',a,b);if(s.system==='intersect'){plotPoint('intersection-point',2,3);contains('(2,3)');}else{eq(take(cc,'intersection-point').length,0);contains(s.system==='parallel'?'共通解はない':'共通解は無数');}
 }else if(k==='3312200000'){
  for(const key of ['A','B']){const value=x=>key==='A'?100*x+200:150*x,p=get(cc,'price-point-'+key);near(+p.cx,90+s.n*84,'discrete fee x');near(+p.cy,285-value(s.n)/4,'discrete fee y');const line=get(ll,'price-line-'+key);for(const i of [1,2])near((285- +line['y'+i])*4,value((+line['x'+i]-90)/84),'fee guide endpoints');}contains(s.n+'回で'+(s.plan==='A'?100*s.n+200:150*s.n)+'円');
 }else if(k==='3231000000'){
  const a=+s.angle*Math.PI/180,l=get(ll,'vertical-line-1');near(Math.atan2(+l.y1- +l.y2,+l.x2- +l.x1),a,'actual line angle');arcAudit(get(paths,'vertical-arc-0'),300,180,37,0,a);arcAudit(get(paths,'vertical-arc-1'),300,180,37,Math.PI,a);arcAudit(get(paths,'vertical-arc-2'),300,180,53,a,Math.PI-a);contains((180- +s.angle)+'°');
 }else if(k==='3211100000'){
  const a=+s.angle*Math.PI/180,l=get(ll,'parallel-transversal'),top=240+120/Math.tan(a);near(Math.atan2(+l.y1- +l.y2,+l.x2- +l.x1),a,'transversal angle');for(const i of [0,1]){const base=get(ll,'parallel-base-'+i);near(+base.y1,+base.y2,'parallel bases horizontal');}arcAudit(get(paths,'parallel-arc-0'),top,130,28,s.pair==='alternate'?Math.PI:0,a);arcAudit(get(paths,'parallel-arc-1'),240,250,28,0,a);contains(s.angle+'°');
 }else if(k==='3211200000'){
  const ps=points(get(pp,'polygon-body'));eq(ps.length,s.n);let sum=0;for(let i=0;i<ps.length;i++){near(distance(ps[i],[300,180]),105,'regular polygon circumscribed radius');near(distance(ps[i],ps[(i+1)%s.n]),2*105*Math.sin(Math.PI/s.n),'regular side',.0001);sum+=angle(ps[(i+s.n-1)%s.n],ps[i],ps[(i+1)%s.n]);}near(sum,(s.n-2)*Math.PI,'polygon angle sum');if(s.view==='interior'){eq(take(ll,'polygon-diagonal-').length,s.n-3);contains(String((s.n-2)*180)+'°');}else{eq(take(paths,'polygon-exterior-').length,s.n);for(let i=0;i<s.n;i++){const before=ps[(i+s.n-1)%s.n],p=ps[i],a=Math.atan2(before[1]-p[1],p[0]-before[0]);arcAudit(get(paths,'polygon-exterior-'+i),p[0],p[1],18,a,2*Math.PI/s.n);}contains('360°');}
 }else if(k==='3212100000'){
  const ps=points(get(pp,'triangle-angle-body'));near(angle(ps[1],ps[0],ps[2]),+s.a*Math.PI/180,'left interior angle');near(angle(ps[0],ps[1],ps[2]),+s.b*Math.PI/180,'right interior angle');near(angle(ps[0],ps[2],ps[1]),(180- +s.a- +s.b)*Math.PI/180,'top angle');const line=get(ll,'triangle-angle-parallel');near(+line.y1,ps[2][1],'auxiliary through vertex');near(+line.y1,+line.y2,'parallel to base');contains(String(180- +s.a- +s.b)+'°');
 }else if(k==='3221100000'){
  const a=points(get(pp,'congruence-source')),b=points(get(pp,'congruence-target'));for(let i=0;i<3;i++){near(distance(a[i],a[(i+1)%3]),distance(b[i],b[(i+1)%3]),'corresponding sides congruent');near(angle(a[(i+1)%3],a[i],a[(i+2)%3]),angle(b[(i+1)%3],b[i],b[(i+2)%3]),'corresponding angles congruent');}eq(take(paths,'congruence-angle-').length,{sss:0,sas:2,asa:4}[s.condition]);contains({sss:'三辺',sas:'その間の角',asa:'その両端の角'}[s.condition]);
 }else if(k==='3221200000'||k==='3221000000'){
  const prefix=k==='3221200000'?'proofstructure':'proof',ps=points(get(pp,prefix+'-triangle')),mid=get(ll,prefix+'-midline'),d=[+mid.x2,+mid.y2];near(distance(ps[0],ps[1]),distance(ps[0],ps[2]),'assumed equal legs');near(distance(ps[1],d),distance(d,ps[2]),'D midpoint');near(d[1],ps[1][1],'D on base');near(+mid.x1,ps[0][0],'common segment begins at A');near(angle(ps[1],ps[0],d),angle(ps[2],ps[0],d),'corresponding half angles');eq(take(paths,prefix+'-arc-').length,s.step===3?2:0);contains(['仮定','ADは共通','△ABD≡△ACD','∠BAD=∠CAD'][s.step]);
 }else if(k==='3236000000'){
  const ps=points(get(pp,'converse-body'));if(s.example==='triangle'){near(distance(ps[0],ps[1]),distance(ps[0],ps[2]),'isosceles legs');near(angle(ps[0],ps[1],ps[2]),angle(ps[0],ps[2],ps[1]),'equal base angles');}else{near(distance(ps[0],ps[2]),distance(ps[1],ps[3]),'equal diagonals');if(s.direction==='converse'){ok(Math.abs(angle(ps[0],ps[1],ps[2])-Math.PI/2)>.01,'counterexample genuinely not rectangle');contains('逆は成り立たない');}else for(let i=0;i<4;i++)near(angle(ps[(i+3)%4],ps[i],ps[(i+1)%4]),Math.PI/2,'rectangle right angle');}
 }else if(k==='3222100000'){
  const ps=points(get(pp,'isosceles-body'));near(distance(ps[1],ps[2]),70*s.half,'base dimension');near(ps[1][1]-ps[0][1],35*s.height,'height dimension');near(distance(ps[0],ps[1]),distance(ps[0],ps[2]),'equal sides');near(angle(ps[0],ps[1],ps[2]),angle(ps[0],ps[2],ps[1]),'equal base angles');
 }else if(k==='3222000000'){
  const a=points(get(pp,'right-source')),b=points(get(pp,'right-target'));for(const ps of[a,b]){near(angle(ps[1],ps[0],ps[2]),Math.PI/2,'right-angle assumption true');near(distance(ps[0],ps[1]),120,'leg three units');near(distance(ps[0],ps[2]),160,'leg four units');near(distance(ps[1],ps[2]),200,'hypotenuse five units');}contains(s.condition==='leg'?'斜辺と他の一辺':'斜辺と一つの鋭角');
 }else if(k==='3220000000'||k==='3222200000'){
  const key=k==='3220000000'?'parallelogram':'condition',ps=points(get(pp,key+'-body'));parallelogram(ps);if(k==='3220000000'||s.condition==='diagonal'){const p=get(cc,key+'-midpoint');near(+p.cx,(ps[0][0]+ps[2][0])/2,'center x');near(+p.cy,(ps[0][1]+ps[2][1])/2,'center y');}if(k==='3222200000')contains({parallel:'2組の対辺がそれぞれ平行',equal:'2組の対辺がそれぞれ等しい',both:'1組の対辺が平行で、長さも等しい',diagonal:'対角線が互いの中点で交わる',angle:'2組の対角がそれぞれ等しい'}[s.condition]);
 }else if(k==='5100000000'){
  const ps=points(get(pp,'special-body'));parallelogram(ps);const d1=[ps[2][0]-ps[0][0],ps[2][1]-ps[0][1]],d2=[ps[3][0]-ps[1][0],ps[3][1]-ps[1][1]];if(s.shape==='rectangle'||s.shape==='square'){near(Math.hypot(...d1),Math.hypot(...d2),'rectangle equal diagonals');for(let i=0;i<4;i++)near(angle(ps[(i+3)%4],ps[i],ps[(i+1)%4]),Math.PI/2,'right angles');}if(s.shape==='rhombus'||s.shape==='square'){near(d1[0]*d2[0]+d1[1]*d2[1],0,'rhombus perpendicular diagonals');for(let i=1;i<4;i++)near(distance(ps[i],ps[(i+1)%4]),distance(ps[0],ps[1]),'all four equal');}
 }else if(k==='3411100000'){
  const values=datasets[s.dataset],q=quartiles(values),selection={q1:1,median:2,q3:3}[s.focus];eq(take(tt,'quartile-value-').map(x=>Number(x.value)),values);eq(txt('quartile-selected-value').split(' = ')[1],String(q[selection]));contains('Q1='+q[1]);contains('Q3='+q[3]);contains('四分位範囲'+(q[3]-q[1]));const cells=take(rr,'quartile-cell-'),half=Math.floor(values.length/2),part=s.focus==='q1'?[0,half]:s.focus==='q3'?[Math.ceil(values.length/2),values.length]:[0,values.length],len=part[1]-part[0],center=part[0]+Math.floor(len/2),indices=len%2?[center]:[center-1,center];eq(cells.flatMap((v,i)=>v.fill==='#f4d9b5'?[i]:[]),indices,'actual median entries highlighted');
 }else if(k==='3411200000'){
  const values=datasets[s.dataset],q=boxCheck('box',values,s.step);eq(take(tt,'box-data-value-').map(v=>+v.value),values);contains('中央値'+q[2]);if(s.dataset==='same')contains('箱の幅は0');
 }else if(k==='3412100000'){
  const data={spread:[datasets.even,[0,2,2,6,8,10,12,14]],same:[[0,4,4,6,8,8,10,14],[0,3,5,6,8,8,10,14]],shift:[datasets.even,datasets.even.map(v=>v+2)]}[s.pair],a=boxCheck('compare-box-A',data[0],3),b=boxCheck('compare-box-B',data[1],3);contains('中央値 A '+a[2]+' / B '+b[2]);if(s.pair==='same'){eq(a,b,'different original values have same five-number summary');ok(JSON.stringify(data[0])!==JSON.stringify(data[1]));}
 }else if(k==='3421100000'){
  if(s.sample==='die'){const cells=take(rr,'chance-outcome-');eq(cells.length,6);eq(cells.filter(c=>c.fill==='#f4d9b5').length,s.event==='first'?1:3);contains(s.event==='first'?'1/6':'1/2');}else{const bounds=[[0,Math.PI],[Math.PI,1.5*Math.PI],[1.5*Math.PI,2*Math.PI]];eq(take(paths,'chance-sector-').length,3);for(let i=0;i<3;i++){const p=get(paths,'chance-sector-'+i),v=p.d.match(/-?\d+(?:\.\d+)?/g).map(Number);ok(/^M[-.\d]+ [-.\d]+ L[-.\d]+ [-.\d]+ A[-.\d]+ [-.\d]+ 0 [01] [01] [-.\d]+ [-.\d]+ Z$/.test(p.d),'sector path commands and closed boundary');eq(v.length,11,'sector numeric fields');eq(v[7],bounds[i][1]-bounds[i][0]>Math.PI?1:0,'sector large-arc flag');eq(v[8],0,'sector sweep flag');eq(v.slice(0,2),[300,175]);near(v[2],300+105*Math.cos(bounds[i][0]),'sector start');near(v[3],175-105*Math.sin(bounds[i][0]),'sector start y');near(v[9],300+105*Math.cos(bounds[i][1]),'sector end');near(v[10],175-105*Math.sin(bounds[i][1]),'sector end y');eq(v.slice(4,7),[105,105,0]);eq(p.fill,(s.event==='first'?i===0:i===1)?'#f4d9b5':'#dce9df');}contains(s.event==='first'?'1/2':'1/4');}
 }else if(k==='3421200000'){
  const outcomes=[[true,true],[true,false],[false,true],[false,false]],selected=outcomes.map(v=>s.event==='one'?v.filter(Boolean).length===1:s.event==='both'?v.every(Boolean):v.some(Boolean)),cells=take(rr,'coin-outcome-');eq(cells.length,4);eq(cells.map(v=>v.fill==='#f4d9b5'),selected);eq(take(ll,'coin-branch-leaf-').length,4);contains(selected.filter(Boolean).length+'/4');
 }else if(k==='3422100000'){
  let count=0;for(let a=1;a<=6;a++)for(let b=1;b<=6;b++){const original=s.event==='sum7'?a+b===7:a===6||b===6,hit=s.complement==='yes'?!original:original,cell=get(rr,'dice-cell-'+((a-1)*6+b-1));eq(cell.fill==='#f4d9b5',hit,'equiprobable ordered outcome');count+=hit?1:0;}eq(take(rr,'dice-cell-').length,36);contains(count+'/36');
 }else if(k==='3422200000'){
  for(const [bag,red,total]of[['A',2,5],['B',3,10]]){const balls=take(cc,'bag-'+bag+'-');eq(balls.length,total);eq(balls.filter(v=>v.fill==='#b75b4e').length,red);for(let i=0;i<balls.length;i++)for(let j=i+1;j<balls.length;j++)ok(distance([+balls[i].cx,+balls[i].cy],[+balls[j].cx,+balls[j].cy])>= +balls[i].r+ +balls[j].r,'all balls separately countable');if(s.bag===bag)contains((s.color==='red'?red:total-red)+'/'+total);}
 }else{
  throw new Error('Independent mathematical audit not implemented: '+code);
 }
 return {rr,cc,ll,pp,paths,tt,summary};
}
const counts={3110000000:6,3111100000:50,3112100000:36,3111400000:20,3111200000:12,3111300000:25,3121100000:36,3121200000:25,3121300000:4,3122100000:4,3121000000:12,3122200000:4,3311100000:25,3312100000:12,3311000000:20,3312000000:9,3311300000:15,3310000000:3,3312200000:12};
Object.assign(counts,{3231000000:4,3211100000:6,3211200000:12,3212100000:9,3221100000:6,3221200000:4,3236000000:4,3221000000:4,3222100000:6,3222000000:4,3220000000:5,3222200000:15,5100000000:12,3411100000:9,3411200000:12,3412100000:3,3421100000:4,3421200000:3,3422100000:4,3422200000:4});
// Frozen independently from docs/jh2-visual-design.md; neither the renderer's
// defaults nor its advertised controls are the oracle for the state space.
const stateContract={
 '3110000000':[{term:'x'},{},{term:['x','y','xy','square','constant','negative']}],
 '3111100000':[{a:2,b:1,op:'add'},{a:[-2,2,1],b:[-2,2,1]},{op:['add','sub']}],
 '3112100000':[{a:'2',b:'3',op:'mul'},{},{a:['-3','-2','-1','1','2','3'],b:['1','2','3'],op:['mul','div']}],
 '3111400000':[{a:'2',b:1},{b:[-2,2,1]},{a:['-2','-1','1','2']}],
 '3111200000':[{n:3,form:'consecutive'},{n:[1,4,1]},{form:['consecutive','price','perimeter']}],
 '3111300000':[{m:1,n:2},{m:[-2,2,1],n:[-2,2,1]},{}],
 '3121100000':[{x:2,y:3},{x:[0,5,1],y:[0,5,1]},{}],
 '3121200000':[{x:3,y:1},{x:[0,4,1],y:[0,4,1]},{}],
 '3121300000':[{step:0},{step:[0,3,1]},{}],
 '3122100000':[{step:0},{step:[0,3,1]},{}],
 '3121000000':[{example:'bracket',step:0},{step:[0,3,1]},{example:['bracket','decimal','fraction']}],
 '3122200000':[{adult:3},{adult:[1,4,1]},{}],
 '3311100000':[{a:2,b:1},{a:[-2,2,1],b:[-2,2,1]},{}],
 '3312100000':[{a:'2',dx:1},{dx:[1,3,1]},{a:['-2','-1','1','2']}],
 '3311000000':[{a:'2',b:1},{b:[-2,2,1]},{a:['-2','-1','1','2']}],
 '3312000000':[{example:'rise',step:0},{step:[0,2,1]},{example:['rise','fall','fraction']}],
 '3311300000':[{kind:'regular',k:1},{k:[-2,2,1]},{kind:['regular','vertical','horizontal']}],
 '3310000000':[{system:'intersect'},{},{system:['intersect','parallel','same']}],
 '3312200000':[{n:3,plan:'A'},{n:[0,5,1]},{plan:['A','B']}],
 '3231000000':[{angle:'60'},{},{angle:['40','60','80','110']}],
 '3211100000':[{angle:'60',pair:'corresponding'},{},{angle:['40','60','80'],pair:['corresponding','alternate']}],
 '3211200000':[{n:5,view:'interior'},{n:[3,8,1]},{view:['interior','exterior']}],
 '3212100000':[{a:'50',b:'60'},{},{a:['40','50','60'],b:['50','60','70']}],
 '3221100000':[{condition:'sss',pose:'rotate'},{},{condition:['sss','sas','asa'],pose:['rotate','reflect']}],
 '3221200000':[{step:0},{step:[0,3,1]},{}],
 '3236000000':[{example:'triangle',direction:'original'},{},{example:['triangle','rectangle'],direction:['original','converse']}],
 '3221000000':[{step:0},{step:[0,3,1]},{}],
 '3222100000':[{half:3,height:4},{half:[2,4,1],height:[3,4,1]},{}],
 '3222000000':[{condition:'leg',pose:'same'},{},{condition:['leg','angle'],pose:['same','reflect']}],
 '3220000000':[{shear:1},{shear:[-2,2,1]},{}],
 '3222200000':[{condition:'parallel',shear:1},{shear:[0,2,1]},{condition:['parallel','equal','both','diagonal','angle']}],
 '5100000000':[{shape:'rectangle',feature:'diagonal'},{},{shape:['rectangle','rhombus','square','parallelogram'],feature:['diagonal','angle','side']}],
 '3411100000':[{dataset:'even',focus:'q1'},{},{dataset:['even','odd','same'],focus:['q1','median','q3']}],
 '3411200000':[{dataset:'even',step:0},{step:[0,3,1]},{dataset:['even','odd','same']}],
 '3412100000':[{pair:'spread'},{},{pair:['spread','same','shift']}],
 '3421100000':[{sample:'die',event:'first'},{},{sample:['die','spinner'],event:['first','even']}],
 '3421200000':[{event:'one'},{},{event:['one','both','atleast']}],
 '3422100000':[{event:'sum7',complement:'no'},{},{event:['sum7','atleast6'],complement:['no','yes']}],
 '3422200000':[{bag:'A',color:'red'},{},{bag:['A','B'],color:['red','blue']}]
};
function definitionStates(code,d){
 const contract=stateContract[code.slice(6)];ok(contract,'independent state contract exists');
 const [defaults,ranges,choices]=contract;
 eq({...d.defaults},defaults,'exact default keys, values and types');
 ok(Array.isArray(d.controls)&&Array.isArray(d.choices),'control metadata arrays');
 const controls=Array.from(d.controls);eq(controls.map(c=>c[0]).sort(),Object.keys(ranges).sort(),'exact range keys, no duplicates');
 for(const c of controls){eq(c.length,5,'range metadata tuple');ok(typeof c[1]==='string'&&c[1].length>0,'visible range label');eq(Array.from(c).slice(2),ranges[c[0]],'exact range bounds, steps and types');}
 const offered=Array.from(d.choices);eq(Array.from(new Set(offered.map(c=>c[0]))).sort(),Object.keys(choices).sort(),'exact choice keys');
 for(const c of offered)ok(c.length===3&&typeof c[0]==='string'&&typeof c[1]==='string'&&typeof c[2]==='string'&&c[2].length>0,'choice values and labels have exact types');
 for(const key of Object.keys(choices))eq(offered.filter(c=>c[0]===key).map(c=>c[1]).sort(),choices[key].slice().sort(),'exact finite choice values, no duplicates');
 let all=[{}];
 for(const key of Object.keys(defaults)){
  let values;if(Object.prototype.hasOwnProperty.call(ranges,key)){const[min,max,step]=ranges[key];values=Array.from({length:(max-min)/step+1},(_,i)=>min+i*step);}else values=choices[key].slice();
  ok(values.some(v=>typeof v===typeof defaults[key]&&v===defaults[key]),'default belongs to independent field domain');
  all=all.flatMap(s=>values.map(value=>({...s,[key]:value})));
 }
 return all;
}
for(const code of loaded){const d=w.BL.visuals.definitions[code],all=definitionStates(code,d);
 eq(all.length,counts[code.slice(6)],'independently counted state space');
 for(const state of all){try{audit(code,state,d.draw(state));}catch(e){e.message=code+' '+JSON.stringify(state)+' '+e.message;throw e;}states++;}
}
const probe='8350223111100000';if(loaded.includes(probe)){const d=w.BL.visuals.definitions[probe],s={a:2,b:1,op:'add'};assert.throws(()=>audit(probe,s,d.draw(s).replace('>3x</text>','>4x</text>')),'wrong mathematical label positive probe');}
if(!partial){eq(states,460);for(const[code,state,pattern,replacement]of[
 ['8350223311000000',{a:'2',b:1},/(id="jh2-visual-linear-next"[^>]*cx=")[^"]+/, '$1323'],
 ['8350223411200000',{dataset:'odd',step:3},/(id="jh2-visual-box-body"[^>]* width=")[^"]+/, '$1151'],
 ['8350223422100000',{event:'sum7',complement:'no'},/(id="jh2-visual-dice-cell-5"[^>]*fill=")[^"]+/, '$1#fffdf8']
 ]){const d=w.BL.visuals.definitions[code],html=d.draw(state),wrong=html.replace(pattern,replacement);assert.notEqual(wrong,html,'probe actually mutates visible mathematics');if(code==='8350223411200000'){const r=tags(wrong,'rect').find(r=>r.id==='jh2-visual-box-body');assert.equal(Number(r.width),151,'exact geometric attribute mutated');assert.equal(Number(r['stroke-width']),2,'stroke width unchanged');}assert.throws(()=>audit(code,state,wrong),code+' wrong coordinate/quartile/outcome rejected');}}
if(!partial){
 const code='8350223311000000',d=w.BL.visuals.definitions[code];
 const wrongDefault={...d,defaults:{...d.defaults,a:2}};
 assert.throws(()=>definitionStates(code,wrongDefault),/exact default/,'choice default type mutation detected');
 const wrongChoices={...d,choices:Array.from(d.choices,c=>Array.from(c).map((value,index)=>c[0]==='a'&&c[1]==='1'&&index===1?'0':value))};
 assert.throws(()=>definitionStates(code,wrongChoices),/exact finite choice/,'same-count forbidden zero coefficient detected');
 const html=d.draw({a:'2',b:1}),collapsed=html.replace(/<line id="jh2-visual-linear-line"[^>]*>/,tag=>{
  const x=/ x1="([^"]+)"/.exec(tag)[1],y=/ y1="([^"]+)"/.exec(tag)[1];
  return tag.replace(/ x2="[^"]+"/,' x2="'+x+'"').replace(/ y2="[^"]+"/,' y2="'+y+'"');
 });
 const collapsedLine=tags(collapsed,'line').find(l=>l.id==='jh2-visual-linear-line');
 assert.notEqual(collapsed,html);assert.equal(collapsedLine.x1,collapsedLine.x2);assert.equal(collapsedLine.y1,collapsedLine.y2);
 assert.throws(()=>audit(code,{a:'2',b:1},collapsed),/nonzero visible length/,'collapsed graph detected');
 const spinnerCode='8350223421100000',state={sample:'spinner',event:'even'},spinner=w.BL.visuals.definitions[spinnerCode].draw(state);
 const wrongSector=spinner.replace(/(id="jh2-visual-chance-sector-1" d="[^"]* A105 105 0 )0 0 /,(_,prefix)=>prefix+'1 0 ');
 assert.notEqual(wrongSector,spinner);const alteredPath=tags(wrongSector,'path').find(p=>p.id==='jh2-visual-chance-sector-1');
 assert.equal(Number(alteredPath.d.match(/-?\d+(?:\.\d+)?/g)[7]),1,'large-arc flag actually mutated');
 assert.throws(()=>audit(spinnerCode,state,wrongSector),/sector large-arc flag/,'wrong sector geometry detected');
}
console.log('JH2_VISUAL_MATH=PASS units='+loaded.length+' states='+states+' checks='+checks+' legacy_diagrams=104 positive_probes='+(partial?1:8)+' partial='+partial);
