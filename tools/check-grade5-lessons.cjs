'use strict';
// Authored by a separate reviewer: quantity, area, scale, and motion visibility.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const source=process.env.BASIC_LEARNING_GRADE5_SCENES||path.join(root,'js/lesson-scenes-grade5.js');
const sandbox={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'js/lesson-scenes.js'),'utf8'),sandbox);
const api=sandbox.window.BL.lessonScenes,old={};for(const c of Object.keys(api.items))for(let st=0;st<api.items[c].steps.length;st++)for(const ph of [0,.5,1])old[c+'/'+st+'/'+ph]=api.render(c,st,ph);
vm.runInNewContext(fs.readFileSync(source,'utf8'),sandbox);
const expected=['8250253131100000','8250253131200000','8250253150000000','8250253231100000','8250253331100000','8250253420000000'];
assert.deepEqual(Array.from(sandbox.window.BL.grade5Lessons.codes).sort(),expected.slice().sort());
for(const key of Object.keys(old)){const[c,st,ph]=key.split('/');assert.equal(api.render(c,Number(st),Number(ph)),old[key],'grade4 frame unchanged');}
let frames=0,checks=0;
function equal(a,b,m){checks++;assert.deepEqual(a,b,m);}
function near(a,b,m){checks++;assert.ok(Math.abs(a-b)<.08,m+': '+a+' != '+b);}
function tags(svg,tag){return Array.from(svg.matchAll(new RegExp('<'+tag+'\\b([^>]*)>','g')),m=>Object.fromEntries(Array.from(m[1].matchAll(/([\w-]+)="([^"]*)"/g),a=>[a[1],a[2]])));}
function numeric(r){return {id:r.id,x:Number(r.x),y:Number(r.y),w:Number(r.width),h:Number(r.height)};}
function disjoint(rects,reason){for(let i=0;i<rects.length;i++)for(let j=i+1;j<rects.length;j++){const a=rects[i],b=rects[j];checks++;assert.ok(Math.min(a.x+a.w,b.x+b.w)-Math.max(a.x,b.x)<=.001||Math.min(a.y+a.h,b.y+b.h)-Math.max(a.y,b.y)<=.001,reason+' '+a.id+'/'+b.id);}}
function points(p){return p.points.split(/\s+/).map(v=>v.split(',').map(Number));}
function signed(p){return p.reduce((a,v,i)=>{let w=p[(i+1)%p.length];return a+v[0]*w[1]-w[0]*v[1];},0)/2;}
function intersection(subject,clip){let out=subject,sign=Math.sign(signed(clip));for(let i=0;i<clip.length;i++){const a=clip[i],b=clip[(i+1)%clip.length],input=out;out=[];const cross=p=>sign*((b[0]-a[0])*(p[1]-a[1])-(b[1]-a[1])*(p[0]-a[0]));for(let j=0;j<input.length;j++){let p=input[j],q=input[(j+1)%input.length],u=cross(p),v=cross(q);if(u>=-1e-7)out.push(p);if((u>=0)!==(v>=0)){const t=u/(u-v);out.push([p[0]+t*(q[0]-p[0]),p[1]+t*(q[1]-p[1])]);}}}return out;}
function audit(code,st,ph,svg){
 const rects=tags(svg,'rect'),circles=tags(svg,'circle'),polys=tags(svg,'polygon');const find=id=>rects.filter(r=>r.id&&r.id.startsWith(id)).map(numeric);
 for(const r of rects){checks++;assert.ok(Number(r.width)>=0&&Number(r.height)>=0,'nonnegative region');}
 if(code==='8250253131100000'){
  const base=find('mul-base-'),half=find('mul-half-');equal(base.length,24,'24 tenths');equal(half.length,st?12:0,'12 additional tenths');
  base.concat(half).forEach(r=>{near(r.w,14,'same tenth width');near(r.h,60,'same height');});disjoint(base.concat(half),'multiplication counts visible');
  if(st===3)near(Math.max(...base.concat(half).map(r=>r.x+r.w))-Math.min(...base.map(r=>r.x)),36*14,'result length');
 }else if(code==='8250253131200000'){
  const cells=find('div-cell-');equal(cells.length,48,'48 tenths');cells.forEach((r,i)=>{near(r.x,60+i*10,'fixed position');near(r.w,10,'equal tenths');});
  if(st>0)equal(tags(svg,'line').length,5,'four group boundaries');
 }else if(code==='8250253150000000'){
  const a=find('fraction-a-'),b=find('fraction-b-');equal(a.length,3,'half is three sixths');equal(b.length,2,'third is two sixths');
  a.concat(b).forEach(r=>{near(r.w,80,'sixth unchanged');near(r.h,55,'height unchanged');});disjoint(a.concat(b),'five fraction pieces visible');
  if(st===3)near(Math.max(...a.concat(b).map(r=>r.x+r.w))-60,400,'five sixths length');
 }else if(code==='8250253231100000'){
  const a=polys.find(p=>p.id==='area-original'),b=polys.find(p=>p.id==='area-copy');near(Math.abs(signed(points(a))),19200,'original triangle area');
  if(st>0){near(Math.abs(signed(points(b))),19200,'congruent copy area');const overlap=intersection(points(a),points(b));near(overlap.length?Math.abs(signed(overlap)):0,0,'two triangles remain distinct');}
  // Diagrams stay outside the heading and bottom dimension-label regions.
  for(const p of polys)for(const xy of points(p)){checks++;assert.ok(xy[1]>=80&&xy[1]<=270,code+' diagram layout region');}
 }else if(code==='8250253331100000'){
  const dots=circles.filter(c=>c.id.startsWith('ratio-dot-'));equal(dots.length,20,'base remains twenty');equal(dots.filter(c=>c.fill==='#467060').length,8,'part remains eight');
  for(let i=0;i<20;i++)for(let j=i+1;j<20;j++){checks++;assert.ok(Math.hypot(Number(dots[i].cx)-Number(dots[j].cx),Number(dots[i].cy)-Number(dots[j].cy))>=28-.001,'twenty circles remain visible');}
  if(st>1){const tape=find('ratio-tenth-');equal(tape.length,10,'ten equal groups');tape.forEach(r=>near(r.w,48,'tenth tape'));equal(rects.filter(r=>r.id&&r.id.startsWith('ratio-tenth-')&&r.fill==='#dce9df').length,4,'four tenths');}
 }else if(code==='8250253420000000'){
  const blocks=find('average-block-');equal(blocks.length,12,'total twelve');blocks.forEach(r=>{near(r.w,50,'unit width');near(r.h,30,'unit height');checks++;assert.ok(r.y>=60&&r.y+r.h<=290,'mean motion outside labels');});disjoint(blocks,'twelve mean blocks visible');
  if(st>1)equal([125,275,425].map(x=>blocks.filter(r=>Math.abs(r.x-x)<.001).length),[4,4,4],'mean four per group');
 }
 frames++;
}
for(const code of expected){equal(api.items[code].steps.length,4,'four meaningful steps');for(let st=0;st<4;st++)for(let n=0;n<=100;n++)audit(code,st,n/100,api.render(code,st,n/100));assert.equal(api.render(code,4,1),'');assert.equal(api.render(code,0,NaN),'');}
assert.throws(()=>audit('8250253420000000',0,1,api.render('8250253420000000',0,1).replace(/<rect id="average-block-0-0"[^>]*\/>/,'')),'missing quantity positive probe');
assert.throws(()=>audit('8250253150000000',0,1,api.render('8250253150000000',0,1).replace('width="80"','width="90"')),'unequal fraction positive probe');
function alter(svg,id,changes){return svg.replace(new RegExp('<(rect|circle) id="'+id+'"[^>]*>'),tag=>{for(const [key,value] of Object.entries(changes))tag=tag.replace(new RegExp(' '+key+'="[^"]*"'),' '+key+'="'+value+'"');return tag;});}
assert.throws(()=>audit('8250253131100000',2,.75,alter(api.render('8250253131100000',2,.75),'mul-half-0',{x:300,y:130})),'original multiplication path positive probe');
assert.throws(()=>audit('8250253150000000',2,.75,alter(api.render('8250253150000000',2,.75),'fraction-b-0',{x:240,y:118.75})),'original fraction path positive probe');
const ratioFrame=api.render('8250253331100000',1,.5),firstDot=tags(ratioFrame,'circle')[0];
assert.throws(()=>audit('8250253331100000',1,.5,alter(ratioFrame,'ratio-dot-1',{cx:firstDot.cx,cy:firstDot.cy})),'overlapping ratio circles positive probe');
console.log('GRADE5_LESSON_MATH=PASS scenes=6 steps=24 frames='+frames+' assertions='+checks+' legacy_frames_unchanged='+Object.keys(old).length+' positive_probes=5 source_sha256='+crypto.createHash('sha256').update(fs.readFileSync(source)).digest('hex'));
