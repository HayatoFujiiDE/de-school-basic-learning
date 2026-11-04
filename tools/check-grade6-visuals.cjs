'use strict';
// Independent reviewer models: no mathematics helpers from the renderer are used.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const source=process.env.BASIC_LEARNING_GRADE6_VISUALS||path.join(root,'js/visuals-grade6.js');
const read=f=>fs.readFileSync(path.join(root,f),'utf8');const w={localStorage:{getItem:()=>null,setItem:()=>{}}};
for(const f of ['units.js','units-grade5.js','core.js','visuals.js','visuals-grade5.js'])vm.runInNewContext(read('js/'+f),{window:w});
const old=w.BL.core.units().map(u=>[u,w.BL.visuals.render(u)]);
const file=fs.readFileSync(source,'utf8');vm.runInNewContext(file,{window:w});
const suffixes=['3111100000','3111200000','3112100000','3110000000','3111300000','3120000000','3211200000','3210000000','3321100000','3320000000','3211100000','3230000000','3220000000','3240000000','3311100000','3311200000','3311300000','3411100000','3411200000','3411300000','3421100000','3420000000'];
assert.deepEqual(Array.from(w.BL.grade6Visuals.codes).sort(),suffixes.map(s=>'825026'+s).sort());
for(const [u,html] of old)assert.equal(w.BL.visuals.render(u),html,'original 44 diagrams unchanged');
vm.runInNewContext(file,{window:w});assert.equal(w.BL.grade6Visuals.codes.length,22,'double load no duplicate');
let checks=0,states=0;
function eq(a,b,m){checks++;assert.deepEqual(a,b,m);}
function near(a,b,m){checks++;assert.ok(Math.abs(a-b)<.0001,m+': '+a+' vs '+b);}
function gcd(a,b){return b?gcd(b,a%b):a;}
function fraction(a,b){const g=gcd(a,b);return b/g===1?String(a/g):a/g+'/'+(b/g);}
function tags(s,tag){return Array.from(s.matchAll(new RegExp('<'+tag+'\\b([^>]*)>','g')),m=>Object.fromEntries(Array.from(m[1].matchAll(/([\w-]+)="([^"]*)"/g),x=>[x[1],x[2]])));}
function pts(poly){return poly.points.trim().split(/\s+/).map(p=>p.split(',').map(Number));}
function area(points){return Math.abs(points.reduce((a,p,i)=>{const q=points[(i+1)%points.length];return a+p[0]*q[1]-p[1]*q[0];},0)/2);}
// SVG coordinates round to 5 decimals. Area error has squared-pixel units:
// a perimeter-based bound replaces a length tolerance, without hiding geometry errors.
function equalArea(a,b,why){const perimeter=p=>p.reduce((sum,v,i)=>{const q=p[(i+1)%p.length];return sum+Math.abs(v[0]-q[0])+Math.abs(v[1]-q[1]);},0);const bound=1e-5*Math.max(perimeter(a),perimeter(b))+(a.length+b.length)*1e-10;checks++;assert.ok(Math.abs(area(a)-area(b))<=bound,why);}
function noRectOverlap(rects){for(let i=0;i<rects.length;i++)for(let j=i+1;j<rects.length;j++){let a=rects[i],b=rects[j];checks++;assert.ok(Math.min(+a.x+ +a.width,+b.x+ +b.width)-Math.max(+a.x,+b.x)<.0001||Math.min(+a.y+ +a.height,+b.y+ +b.height)-Math.max(+a.y,+b.y)<.0001,'distinct quantity cells');}}
function audit(code,s,html){
 const rr=tags(html,'rect'),cc=tags(html,'circle'),pp=tags(html,'polygon'),tt=tags(html,'text'),paths=tags(html,'path');
 const rects=id=>rr.filter(r=>r.id&&r.id.startsWith(id)),circles=id=>cc.filter(r=>r.id&&r.id.startsWith(id)),get=(list,id)=>{const r=list.find(x=>x.id===id);assert.ok(r,id);return r;};
 const summary=/<p id="visual-output-summary"[^>]*>([^<]*)<\/p>/.exec(html);assert.ok(summary,'conclusion visible');
 const output=summary[1].replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
 const ends=value=>{checks++;assert.ok(output.includes(value),'independent answer '+code+' expected '+value);};
 const view=/<svg viewBox="0 0 600 ([\d.]+)"/.exec(html);assert.ok(view);const height=+view[1];
 for(const r of rr){checks++;assert.ok(+r.width>=0&&+r.height>=0&&+r.x>=0&&+r.y>=0&&+r.x+ +r.width<=600.001&&+r.y+ +r.height<=height+.001,'rectangle bounds '+r.id);}
 for(const c of cc){checks++;assert.ok(+c.cx- +c.r>=0&&+c.cx+ +c.r<=600&&+c.cy- +c.r>=0&&+c.cy+ +c.r<=height,'circle bounds '+c.id);}
 assert.ok(!/NaN|Infinity|undefined|<script|\bon[a-z]+=|点数|ランキング|順位|評価|成績|レベル|集中力|得意|苦手|上手|成長|データがありません|学びのバディ/.test(html),'safe finite child display');
 const k=code.slice(6),pale='#dce9df',orange='#ad672b';
 if(k==='3111100000'){
  const cells=rects('fim-'),d=+s.d;eq(cells.length,Math.max(d,s.a)*s.n,'fraction repeated cells');eq(cells.filter(r=>r.fill===pale).length,s.a*s.n,'numerator repetitions');cells.forEach(r=>{near(+r.width,240/d,'common unit');near(+r.height,45,'equal cell height');});noRectOverlap(cells);ends('= '+fraction(s.a*s.n,d));
 }else if(k==='3111200000'){
  const cells=rects('fid-');eq(cells.length,4*s.n,'refined whole');eq(cells.filter(r=>r.fill!== '#fffdf8').length,s.a*s.n,'unchanged dividend');cells.forEach(r=>near(+r.width,480/(4*s.n),'equal subunits'));noRectOverlap(cells);ends('= '+fraction(s.a,4*s.n));
 }else if(k==='3112100000'){
  const cells=rr.filter(r=>/^ffm-\d-\d$/.test(r.id||'')),whole=get(rr,'ffm-whole');eq(cells.length,15,'space includes fifth row beyond one');eq(cells.filter(r=>r.fill===pale).length,2*s.n,'intersection count');cells.forEach(r=>near(+r.width* +r.height/(+whole.width* +whole.height),1/12,'same whole'));noRectOverlap(cells);ends('= '+fraction(2*s.n,12));
 }else if(k==='3110000000'){
  const a=rects('ffd-whole-'),b=rects('ffd-divisor-');eq(a.length,12,'whole twelfths');eq(b.length,12,'divisor same whole');eq(a.filter(r=>r.fill===pale).length,9,'dividend');eq(b.filter(r=>r.fill!== '#fffdf8').length,+s.divisor,'divisor');a.concat(b).forEach(r=>near(+r.width,40,'same twelfth'));noRectOverlap(a.concat(b));ends('= '+fraction(9,+s.divisor));
 }else if(k==='3111300000'){
  const a=rects('law-');eq(a.length,15,'fifteenths');eq(a.filter(r=>r.fill!== '#fffdf8').length,10,'distribution preserves two thirds');eq(a.filter(r=>r.fill===pale).length,s.form==='split'?2*s.p:10,'first addend');noRectOverlap(a);ends('= 2/3');
 }else if(k==='3120000000'){
  const r=get(rr,'expression-rectangle');near(+r.width/45,s.x,'length x');near(+r.height/45,3,'height three');ends(s.measure==='area'?String(3*s.x)+' cm²':String(2*(s.x+3))+' cm');
 }else if(k==='3211200000'){
  const a=pts(get(pp,'reflection-original')),b=pts(get(pp,'reflection-image'));equalArea(a,b,'reflection area');a.forEach((p,i)=>{near(b[i][0],s.axis==='vertical'?600-p[0]:p[0],'mirror x');near(b[i][1],s.axis==='horizontal'?400-p[1]:p[1],'mirror y');});const p=[[-3,1],[-1,3],[-1,1]][['A','B','C'].indexOf(s.point)];ends(Math.abs(p[s.axis==='vertical'?0:1])+' cm');
 }else if(k==='3210000000'){
  const a=pts(get(pp,'rotation-reference')),b=pts(get(pp,'rotation-material'));equalArea(a,b,'rigid rotation area');const t=s.turn*Math.PI/6;a.forEach((p,i)=>{const x=p[0]-300,y=200-p[1];near(b[i][0],300+x*Math.cos(t)-y*Math.sin(t),'rotation x');near(b[i][1],200-x*Math.sin(t)-y*Math.cos(t),'rotation y');});ends(s.turn*30+'°');
 }else if(k==='3321100000'){
  const a=rects('ratio-a-'),b=rects('ratio-b-');eq(a.length,s.a,'ratio first quantity');eq(b.length,s.b,'ratio second');a.concat(b).forEach(r=>near(+r.width,70,'ratio common unit'));noRectOverlap(a.concat(b));ends('= '+fraction(s.a,s.b));
 }else if(k==='3320000000'){
  const dots=circles('share-dot-');eq(dots.length,s.total,'total');eq(dots.filter(d=>d.fill==='#467060').length,s.a*s.total/5,'first share');eq(dots.filter(d=>d.fill===orange).length,(5-s.a)*s.total/5,'second share');eq(rects('share-group-').length,5,'five equal groups');for(let i=0;i<dots.length;i++)for(let j=i+1;j<dots.length;j++){checks++;assert.ok(Math.hypot(+dots[i].cx- +dots[j].cx,+dots[i].cy- +dots[j].cy)>=+dots[i].r+ +dots[j].r,'twenty visible pieces');}ends('A '+s.a*s.total/5+'こ、B '+(5-s.a)*s.total/5+'こ');
 }else if(k==='3211100000'){
  const f={half:.5,same:1,double:2,triple:3}[s.factor],a=get(rr,'scale-original'),b=get(rr,'scale-image');near(+b.width/+a.width,f,'horizontal factor');near(+b.height/+a.height,f,'vertical factor');ends(f+'倍');
 }else if(k==='3230000000'){
  eq(paths.length,+s.sectors,'exact sector count');for(const p of paths){const v=p.d.match(/-?\d+(?:\.\d+)?/g).map(Number);const arc=/ A([\d.]+) ([\d.]+)/.exec(p.d);assert.ok(arc);near(+arc[1],s.r*26,'circular arc radius');near(+arc[2],s.r*26,'circle arc second radius');near(Math.hypot(v[2]-v[0],v[3]-v[1]),s.r*26,'radial edge');near(v[0],300,'common circle center x');near(v[1],165,'common circle center y');const a=[v[2]-v[0],v[3]-v[1]],b=[v[9]-v[0],v[10]-v[1]],angle=Math.atan2(a[0]*b[1]-a[1]*b[0],a[0]*b[0]+a[1]*b[1]);near(angle,2*Math.PI/(+s.sectors),'equal exact angular partitions');}ends(String(Math.round(s.r*s.r*314)/100)+' cm²');
 }else if(k==='3220000000'){
  const cells=rects('estimate-cell-');eq(cells.length,20,'known test outline area');noRectOverlap(cells);if(s.show!=='outer'){const r=get(rr,'estimate-inner');near(+r.width* +r.height/3600,16,'inscribed rectangle');}if(s.show!=='inner'){const r=get(rr,'estimate-outer');near(+r.width* +r.height/3600,24,'enclosing rectangle');}ends(16*s.scale*s.scale+' m² 以上、'+24*s.scale*s.scale+' m² 以下');
 }else if(k==='3240000000'){
  if(s.shape==='prism'){const bottom=pts(get(pp,'volume-bottom')),top=pts(get(pp,'volume-top'));equalArea(bottom,top,'congruent parallel bases');bottom.forEach((p,i)=>{near(p[0],top[i][0],'parallel bases x');near(p[1]-top[i][1],s.h*35,'prism height');});}else{const ell=tags(html,'ellipse');eq(ell.length,2,'cylinder bases');near(+ell[0].rx,+ell[1].rx,'same radius');near(+ell[0].cy- +ell[1].cy,s.h*35,'cylinder height');}ends((s.shape==='prism'?12*s.h:Math.round(1256*s.h)/100)+' cm³');
 }else if(k==='3311100000'){
  eq(rects('proportion-length-').filter(r=>r.fill===pale).length,s.n,'length count');ends(s.n+' m → '+s.rate*s.n+' g');
 }else if(k==='3311200000'){
  const p=get(cc,'proportion-point');near((+p.cx-80)/70,s.n,'graph x');near((290- +p.cy)/8,s.rate*s.n,'graph y');ends('= '+s.rate*s.n);
 }else if(k==='3311300000'){
  const r=get(rr,'inverse-rectangle'),x=+s.x;near(+r.width/20,x,'inverse x');near(+r.height/20,12/x,'inverse y');near(+r.width* +r.height/400,12,'inverse invariant area');eq(circles('inverse-point-').length,6,'six positive sample points');for(const p of circles('inverse-point-'))near((+p.cx-330)/20*(320- +p.cy)/20,12,'inverse graph product');ends('x = '+x+'、y = '+12/x);
 }else if(k==='3411100000'){
  const sets={odd:[2,4,4,6,9],even:[2,4,4,6,8,12],outlier:[2,4,4,6,24]},v=sets[s.data],dots=circles('data-dot-');eq(dots.length,v.length,'each observation has a dot');dots.forEach((p,i)=>near((+p.cx-60)/20,v[i],'dot exact numeric location'));const seen=new Set(dots.map(p=>p.cx+','+p.cy));eq(seen.size,v.length,'duplicate values visibly stacked');const sum=v.reduce((a,b)=>a+b,0),middle=v.length%2?v[(v.length-1)/2]:(v[v.length/2-1]+v[v.length/2])/2;ends('= '+(s.measure==='mean'?sum/v.length:s.measure==='median'?middle:4));
 }else if(k==='3411200000'){
  const freq=[2,3,3,2,1,1],bins=rects('frequency-bin-');eq(bins.length,6,'six half-open intervals');bins.forEach((r,i)=>{near(+r.x,60+i*64,'adjacent histogram bins');near(+r.width,64,'equal width');near(+r.height/35,freq[i],'frequency');});ends('（'+freq[s.bin]+'個）');ends(s.bin*2+'以上'+(s.bin+1)*2+'未満');
 }else if(k==='3411300000'){
  const v=[8,8,9,9,10,10,12,12,13,13,14,14],bars=rects('survey-plant-');eq(bars.length,12,'all data retained');bars.forEach((r,i)=>near(+r.height/15,v[i],'individual height'));eq(bars.filter(r=>r.fill===pale).length,s.sample==='all'?12:6,'selected sample');ends('平均 '+({all:11,front:9,back:13}[s.sample])+' cm');
 }else if(k==='3421100000'||k==='3420000000'){
  const ordered=k==='3421100000',prefix=ordered?'permutation-':'combination-',all=rr.concat(tt).filter(x=>(x.id||'').startsWith(prefix));const pairs=[];for(let i=0;i<s.n;i++)for(let j=0;j<s.n;j++)if(ordered?i!==j:i<j)pairs.push('ABCDE'[i]+'ABCDE'[j]);eq(all.map(x=>x.id.slice(prefix.length)).sort(),pairs.sort(),'complete unique enumeration');ends('= '+pairs.length+(ordered?'通り':'組'));
 }else throw Error('unreviewed code '+code);
 states++;
}
function combinations(def){let rows=[{...def.defaults}];for(const c of def.controls){const values=[];for(let v=c[2];v<=c[3];v+=c[4]||1)values.push(v);rows=rows.flatMap(s=>values.map(v=>({...s,[c[0]]:v})));}const keys=[...new Set(def.choices.map(c=>c[0]))];for(const key of keys)rows=rows.flatMap(s=>def.choices.filter(c=>c[0]===key).map(c=>({...s,[key]:c[1]})));return rows;}
for(const suffix of suffixes){const code='825026'+suffix,d=w.BL.visuals.definitions[code];assert.ok(d&&d.draw);for(const s of combinations(d))audit(code,s,d.draw(s));}
const product=w.BL.visuals.definitions['8250263112100000'];assert.throws(()=>audit('8250263112100000',product.defaults,product.draw(product.defaults).replace('= 1/2',' = 2/3')),'wrong answer detected');
const share=w.BL.visuals.definitions['8250263320000000'];assert.throws(()=>audit('8250263320000000',share.defaults,share.draw(share.defaults).replace(/<circle id="share-dot-0-0"[^>]*\/>/,'')),'missing counted piece detected');
assert.throws(()=>equalArea([[0,0],[80,0],[0,80]],[[0,0],[80,0],[0,80.1]],'changed area must fail'),'area quantization bound does not hide changed area');
console.log('GRADE6_VISUAL_MATH=PASS modules=22 states='+states+' assertions='+checks+' legacy_diagrams_unchanged=44 positive_probes=3 source_sha256='+crypto.createHash('sha256').update(file).digest('hex'));
