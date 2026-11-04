'use strict';
// Independently checks units, equal partitions, mirror construction and continuous area.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const source=process.env.BASIC_LEARNING_GRADE6_SCENES||path.join(root,'js/lesson-scenes-grade6.js');
const w={};for(const f of ['lesson-scenes.js','lesson-scenes-grade5.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'js',f),'utf8'),{window:w});
const api=w.BL.lessonScenes,old=[];for(const c of Object.keys(api.items))for(let s=0;s<api.items[c].steps.length;s++)for(const p of [0,.5,1])old.push([c,s,p,api.render(c,s,p)]);
const file=fs.readFileSync(source,'utf8');vm.runInNewContext(file,{window:w});
const expected=['8250263112100000','8250263110000000','8250263211200000','8250263320000000','8250263230000000','8250263311300000'];
assert.deepEqual(Array.from(w.BL.grade6Lessons.codes).sort(),expected.slice().sort());for(const [c,s,p,svg]of old)assert.equal(api.render(c,s,p),svg,'old 14 scenes unchanged');
let checks=0,frames=0;const cache=new Set();
const eq=(a,b,m)=>{checks++;assert.deepEqual(a,b,m);};const near=(a,b,m)=>{checks++;assert.ok(Math.abs(a-b)<=.00002,m+' '+a+' vs '+b);};
function tags(svg,tag){return Array.from(svg.matchAll(new RegExp('<'+tag+'\\b([^>]*)>','g')),m=>Object.fromEntries(Array.from(m[1].matchAll(/([\w-]+)="([^"]*)"/g),a=>[a[1],a[2]])));}
function luminance(hex){assert.match(hex,/^#[0-9a-f]{6}$/i);const c=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722;}
function boundaryContrast(r){const a=luminance(r.fill),b=luminance(r.stroke);checks++;assert.ok((Math.max(a,b)+.05)/(Math.min(a,b)+.05)>=3,'counted cell boundary must remain distinct');}
function noOverlap(a){for(let i=0;i<a.length;i++)for(let j=i+1;j<a.length;j++){const p=a[i],q=a[j];checks++;assert.ok(Math.min(+p.x+ +p.width,+q.x+ +q.width)-Math.max(+p.x,+q.x)<=.00001||Math.min(+p.y+ +p.height,+q.y+ +q.height)-Math.max(+p.y,+q.y)<=.00001,'visible separate parts');}}
function signed(p){return p.reduce((sum,v,i)=>{const q=p[(i+1)%p.length];return sum+v[0]*q[1]-q[0]*v[1];},0)/2;}
function intersection(subject,clip){let out=subject;const sign=Math.sign(signed(clip));for(let i=0;i<clip.length;i++){const a=clip[i],b=clip[(i+1)%clip.length],input=out;out=[];const cross=p=>sign*((b[0]-a[0])*(p[1]-a[1])-(b[1]-a[1])*(p[0]-a[0]));for(let j=0;j<input.length;j++){const p=input[j],q=input[(j+1)%input.length],u=cross(p),v=cross(q);if(u>=-1e-8)out.push(p);if((u>=0)!==(v>=0)){const t=u/(u-v);out.push([p[0]+t*(q[0]-p[0]),p[1]+t*(q[1]-p[1])]);}}}return out;}
function sectorInfo(p){const v=p.d.match(/-?\d+(?:\.\d+)?/g).map(Number);assert.equal(v.length,11,'M/L/A/Z circle arc');const a=[v[2]-v[0],v[3]-v[1]],b=[v[9]-v[0],v[10]-v[1]],theta=Math.atan2(a[0]*b[1]-a[1]*b[0],a[0]*b[0]+a[1]*b[1]);return {cx:v[0],cy:v[1],r:v[4],ry:v[5],a:Math.atan2(a[1],a[0]),theta};}
function audit(code,st,phase,svg){
 const rr=tags(svg,'rect'),cc=tags(svg,'circle'),pp=tags(svg,'polygon'),ll=tags(svg,'line'),paths=tags(svg,'path');
 const take=(list,prefix)=>list.filter(v=>(v.id||'').startsWith(prefix)),get=(list,id)=>{const v=list.find(x=>x.id===id);assert.ok(v,id);return v;};
 const summary=/<text[^>]*id="output-summary"[^>]*>([^<]*)<\/text>/.exec(svg);assert.ok(summary,'visible formula');
 const ids=Array.from(svg.matchAll(/ id="([^"]+)"/g),m=>m[1]);eq(new Set(ids).size,ids.length,'unique stable identities');assert.ok(!/NaN|undefined|Infinity|<script|\bon[a-z]+=/.test(svg));
 for(const r of rr){checks++;assert.ok(+r.x>=0&&+r.y>=0&&+r.width>=0&&+r.height>=0&&+r.x+ +r.width<=600.0001&&+r.y+ +r.height<=400.0001,'inside drawing');}
 if(code==='8250263112100000'){
  const cells=rr.filter(r=>/^mul-cell-\d-\d$/.test(r.id||''));eq(cells.length,12,'whole has twelve equal cells');cells.forEach(r=>{near(+r.width,110,'third width');near(+r.height,55,'quarter height');boundaryContrast(r);});noOverlap(cells);
  eq(cells.filter(r=>r.fill==='#467060').length,st===0?0:6,'six intersection cells');if(st===0)eq(cells.filter(r=>r.fill==='#dce9df').length,8,'two thirds before selection');
  const whole=get(rr,'mul-whole');near(+whole.width* +whole.height,12*110*55,'one unchanged whole');if(st>=2)assert.ok(summary[1].includes('6/12 = 1/2'));
 }else if(code==='8250263110000000'){
  const parts=take(rr,'div-part-'),unit=take(rr,'div-unit-');eq(parts.length,9,'nine twelfths');eq(unit.length,8,'eight twelfths as new one');parts.concat(unit).forEach(r=>{near(+r.width,40,'same twelfth width');near(+r.height,55,'same twelfth height');});noOverlap(parts.concat(unit));near(+get(rr,'div-whole-top').width,+get(rr,'div-whole-bottom').width,'same original whole');if(st>=2)assert.ok(summary[1].includes('9/8 = 1と1/8'));
 }else if(code==='8250263211200000'){
  const grid=ll.filter(l=>l.stroke==='#dce2d7');eq(grid.filter(l=>l.x1===l.x2).map(l=>+l.x1),[140,180,220,260,300,340,380,420,460],'one cm columns');eq(grid.filter(l=>l.y1===l.y2).map(l=>+l.y1),[40,80,120,160,200,240,280],'one cm rows');
  const a=get(pp,'sym-source').points.split(' ').map(p=>p.split(',').map(Number));eq(a,[[180,160],[260,80],[260,160]],'original triangle remains fixed');eq(take(cc,'sym-source-').length,3,'three original points');const targets=take(cc,'sym-target-');eq(targets.length,st===0?0:st===1?1:3,'progressive construction');targets.forEach(t=>{const i=+t.id.slice(-1);near(+t.cx,600-a[i][0],'reflection x');near(+t.cy,a[i][1],'reflection y');});
  take(ll,'sym-guide-').forEach(l=>{const i=+l.id.slice(-1);near(+l.y1,+l.y2,'perpendicular to vertical axis');near(+l.x1,a[i][0],'guide from original point');checks++;assert.ok(+l.x2>=+l.x1&&+l.x2<=600-a[i][0],'guide remains on corresponding segment');});if(st===3){const b=get(pp,'sym-target').points.split(' ').map(p=>p.split(',').map(Number));near(Math.abs(signed(a)),Math.abs(signed(b)),'congruent reflected area');}
 }else if(code==='8250263320000000'){
  const dots=take(cc,'ratio-dot-');eq(dots.length,20,'twenty constant observations');eq(dots.filter(c=>c.fill==='#ad672b').length,st>=2?12:0,'second share');dots.forEach((d,i)=>{near(+d.cx,105+Math.floor(i/4)*95,'fixed column');near(+d.cy,95+i%4*44,'fixed row');near(+d.r,14,'same dot size');});for(let i=0;i<20;i++)for(let j=i+1;j<20;j++){checks++;assert.ok(Math.hypot(+dots[i].cx- +dots[j].cx,+dots[i].cy- +dots[j].cy)>=28,'no lost overlapping dot');}eq(take(rr,'ratio-group-').length,st?5:0,'five equal groups');
 }else if(code==='8250263230000000'){
  const pieces=take(paths,'circle-piece-');eq(pieces.length,16,'all sixteen original pieces');const geometry=pieces.map(sectorInfo);const theta=Math.PI/8,r=90,half=theta/2,dx=r*Math.sin(half),dy=r*Math.cos(half),left=(600-17*dx)/2+dx;
  geometry.forEach((s,i)=>{eq(pieces[i].id,'circle-piece-'+i,'sector identity');near(s.r,90,'radius preserved');near(s.ry,90,'circular not elliptic');near(s.theta,theta,'equal angular partition');near(s.cx,st<2?300:left+i*dx,'sector horizontal placement');near(s.cy,st<2?170:130+(i%2?dy:0),'sector vertical placement');});
  const key=JSON.stringify(geometry);if(!cache.has(key)){
   const poly=geometry.map(s=>[[s.cx,s.cy],...Array.from({length:65},(_,i)=>[s.cx+s.r*Math.cos(s.a+s.theta*i/64),s.cy+s.r*Math.sin(s.a+s.theta*i/64)])]);
   for(const p of poly)for(const v of p){checks++;assert.ok(v[0]>=0&&v[0]<=600&&v[1]>=50&&v[1]<=270,'circle pieces stay away from text');}
   for(let i=0;i<16;i++)for(let j=i+1;j<16;j++){const clipped=intersection(poly[i],poly[j]);checks++;assert.ok(clipped.length<3||Math.abs(signed(clipped))<.01,'sector interiors do not overlap');}cache.add(key);
  }
  // Angles parsed from rounded endpoints: error bound from 2 endpoint coordinates / radius.
  const total=geometry.reduce((sum,s)=>sum+s.r*s.r*s.theta/2,0);checks++;assert.ok(Math.abs(total-Math.PI*r*r)<.05,'same exact circular-sector area sum');
  if(st>=2)assert.ok(summary[1].includes('28.26 cm²'));
 }else if(code==='8250263311300000'){
  const r=get(rr,'inverse-material'),x=st===0?3:st===1?3+3*phase:st===2?6-4*phase:2,y=12/x;
  near(+r.width,x*35,'continuous x');near(+r.height,y*35,'continuous y');near(+r.x+ +r.width/2,300,'fixed center x');near(+r.y+ +r.height/2,185,'fixed center y');
  const error=(+r.width+ +r.height)*.000005+.000000000025;checks++;assert.ok(Math.abs(+r.width* +r.height-12*35*35)<=error+.00000001,'area exactly twelve within serialized-coordinate error');
  if((st===1||st===2)&&phase<1)eq(summary[1],'横 × 縦 = 12','moving formula matches invariant, not endpoint');
 }else throw Error('unreviewed scene');
 frames++;
}
for(const code of expected){eq(api.items[code].steps.length,4,'four stages');for(let st=0;st<4;st++)for(let i=0;i<=100;i++)audit(code,st,i/100,api.render(code,st,i/100));eq(api.render(code,4,1),'','invalid step withheld');eq(api.render(code,0,NaN),'','nonfinite phase withheld');}
assert.throws(()=>audit(expected[0],3,1,api.render(expected[0],3,1).replace(/<rect id="mul-cell-0-0"[^>]*\/>/,'')),'missing part detected');
assert.throws(()=>audit(expected[5],1,.5,api.render(expected[5],1,.5).replace(/(id="inverse-material"[^>]*height=")[^"]+/, (m,p)=>p+'100')),'changed area detected');
assert.throws(()=>audit(expected[4],2,1,api.render(expected[4],2,1).replace('A90 90','A80 90')),'changed circle piece detected');
assert.throws(()=>audit(expected[0],3,1,api.render(expected[0],3,1).replace(/(<rect id="mul-cell-0-0"[^>]*stroke=")[^"]+/, (m,p)=>p+'#467060')),'same-color boundary detected');
assert.throws(()=>audit(expected[2],0,1,api.render(expected[2],0,1).replace(/<line x1="140" y1="40" x2="460" y2="40"[^>]*\/>/,'')),'missing grid row detected');
console.log('GRADE6_LESSON_MATH=PASS scenes=6 steps=24 frames='+frames+' assertions='+checks+' legacy_frames_unchanged='+old.length+' positive_probes=5 source_sha256='+crypto.createHash('sha256').update(file).digest('hex'));
