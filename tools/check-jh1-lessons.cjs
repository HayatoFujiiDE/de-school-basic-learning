'use strict';
// Independent mathematical invariants, including continuous intermediate frames.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const source=process.env.BASIC_LEARNING_JH1_SCENES||path.join(root,'js/lesson-scenes-jh1.js'),file=fs.readFileSync(source,'utf8'),w={};
for(const f of ['lesson-scenes.js','lesson-scenes-grade5.js','lesson-scenes-grade6.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'js',f),'utf8'),{window:w});
const api=w.BL.lessonScenes,old=[];for(const c of Object.keys(api.items))for(let s=0;s<api.items[c].steps.length;s++)for(const p of [0,.5,1])old.push([c,s,p,api.render(c,s,p)]);
vm.runInNewContext(file,{window:w});
const codes=JSON.parse(fs.readFileSync(path.join(root,'sources/jh1-lesson-manifest.json'),'utf8')).codes;
assert.deepEqual(Array.from(w.BL.jh1Lessons.codes).sort(),codes.slice().sort());for(const [c,s,p,svg]of old)assert.equal(api.render(c,s,p),svg,'existing scenes unchanged');
let checks=0,frames=0;const eq=(a,b,m)=>{checks++;assert.deepEqual(a,b,m);},near=(a,b,m)=>{checks++;assert.ok(Math.abs(a-b)<.00003,m+' '+a+' vs '+b);};
function tags(svg,tag){return Array.from(svg.matchAll(new RegExp('<'+tag+'\\b([^>]*)>','g')),m=>Object.fromEntries(Array.from(m[1].matchAll(/([\w-]+)="([^"]*)"/g),a=>[a[1],a[2]])));}
function luminance(hex){assert.match(hex,/^#[0-9a-f]{6}$/i);const c=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return c[0]*.2126+c[1]*.7152+c[2]*.0722;}
function audit(code,step,p,svg){
 const rr=tags(svg,'rect'),cc=tags(svg,'circle'),ll=tags(svg,'line'),pp=tags(svg,'path');
 const get=(list,id)=>{const v=list.find(x=>x.id==='jh1-scene-'+id);assert.ok(v,id);return v;},has=(list,id)=>list.some(x=>x.id==='jh1-scene-'+id),prefix=(list,s)=>list.filter(v=>(v.id||'').startsWith('jh1-scene-'+s));
 const texts=Object.fromEntries(Array.from(svg.matchAll(/<text([^>]*)>([^<]*)<\/text>/g),m=>[(m[1].match(/id="([^"]+)"/)||[])[1],m[2]])),txt=k=>texts['jh1-scene-'+k];
 const ids=Array.from(svg.matchAll(/ id="([^"]+)"/g),m=>m[1]);eq(new Set(ids).size,ids.length,'unique identities');assert.ok(!/NaN|undefined|Infinity|<script|\bon[a-z]+=/.test(svg));assert.ok(txt('summary'));
 for(const r of rr){checks++;assert.ok(+r.x>=0&&+r.y>=0&&+r.width>=0&&+r.height>=0&&+r.x+ +r.width<=600.0001&&+r.y+ +r.height<=400.0001,'inside drawing');}
 if(code==='8350213111200000'){
  const a=get(ll,'number-axis');eq([+a.x1,+a.y1,+a.x2,+a.y2],[100,235,500,235]);eq(txt('add-rewrite'),'(−2) − (−3) = (−2) + 3');eq(has(cc,'add-start'),step>0);
  if(step>0){near(+get(cc,'add-start').cx,300-2*40,'fixed start');near(+get(cc,'add-start').cy,235,'on number line');}
  if(step>=2){const full=get(ll,'add-full-path'),trace=get(ll,'add-trace');eq([+full.x1,+full.x2],[220,340],'move by positive three');near(+trace.x1,220,'fixed trace origin');near(+trace.x2,220+120*(step===2?p:1),'partial trace follows complete path');near(+get(cc,'add-target').cx,340,'exact target');}
  if(step===3){near(+get(cc,'add-end').cx,340,'final value one');eq(txt('summary'),'(−2) − (−3) = 1');}
 }else if(code==='8350213112100000'){
  eq(prefix(rr,'multiply-row-').length,7);for(let i=0;i<7;i++){eq(txt('multiply-factor-'+i),String(3-i).replace('-','−'));eq(txt('multiply-product-'+i),String(-2*(3-i)).replace('-','−'));near(+get(rr,'multiply-row-'+i).y,57+39*i,'fixed table row');}
  eq(prefix(rr,'multiply-row-').filter(r=>r.fill==='#f4d9b5').length,1,'single focus');if(step===3)eq(txt('summary'),'(−2) × (−3) = 6');
 }else if(code==='8350213131200000'){
  const forms=[['2x + 3','7','左右が等しい'],['(2x + 3) − 3','7 − 3','2x = 4'],['2x ÷ 2','4 ÷ 2','x = 2'],['2 × 2 + 3','7','7 = 7']];eq([txt('equation-left'),txt('equation-right'),txt('equation-result')],forms[step]);
  if(step===1||step===2){const a=get(ll,'equation-left-guide'),b=get(ll,'equation-right-guide');near(+a.x2- +a.x1,215*p,'left operation');near(+b.x2- +b.x1,215*p,'same right operation');}
 }else if(code==='8350213311400000'){
  const pts=[[0,0]].concat(step>0?[[-2,4]]:[]).concat(step>1?[[1,-2],[2,-4]]:[]);eq(prefix(cc,'proportional-point-').length,pts.length);pts.forEach((q,i)=>{const c=get(cc,'proportional-point-'+i);near(+c.cx,300+20*q[0],'x location');near(+c.cy,190-20*q[1],'y location');near(q[1],-2*q[0],'equation');});
  if(step===1){const guide=get(ll,'proportional-y-guide');near(+guide.x1,260,'guide x');near(+guide.y2,190-80*p,'partial vertical guide');}
  if(step===3)eq(get(pp,'proportional-line').d,'M240 70 L360 310','y=-2x line endpoints');
 }else if(code==='8350213310000000'){
  const a=step===3?-6:6;
  if(step===0){for(let col=0;col<2;col++)for(let row=0;row<4;row++){const x=[1,2,3,6][row]*(col?1:-1);eq(txt('inverse-table-x-'+col+'-'+row),String(x).replace('-','−'));eq(txt('inverse-table-y-'+col+'-'+row),String(6/x).replace('-','−'));}eq(prefix(pp,'inverse-').length,0);}
  else{eq(has(pp,'inverse-positive'),true);eq(has(pp,'inverse-negative'),step>=2);for(const path of prefix(pp,'inverse-')){const values=path.d.match(/-?\d+(?:\.\d+)?/g).map(Number);let sign;for(let j=0;j<values.length;j+=2){const x=(values[j]-300)/10,y=(190-values[j+1])/10;checks++;assert.ok(Math.abs(x*y-a)<.00001,'every inverse vertex satisfies xy=a');assert.ok(x!==0&&y!==0,'no zero or asymptote vertex');if(sign===undefined)sign=Math.sign(x);eq(Math.sign(x),sign,'never bridge x=0');}if(path.id.endsWith('positive')||path.id.endsWith('negative'))eq(values.length,162,'81 vertices per branch');}
   for(let i=0;i<8;i++){const x=[-6,-3,-2,-1,1,2,3,6][i],q=get(cc,'inverse-point-'+i);near(+q.cx,300+10*x,'inverse point x');near(+q.cy,190-10*a/x,'inverse point y');}
  }
 }else if(code==='8350213211100000'){
  const a=get(cc,'construction-a'),b=get(cc,'construction-b');eq([+a.cx,+a.cy,+b.cx,+b.cy],[225,180,375,180]);
  if(step>0){const c=get(cc,'construction-circle-a');eq([+c.cx,+c.cy,+c.r],[225,180,125]);}if(step>1){const c=get(cc,'construction-circle-b');eq([+c.cx,+c.cy,+c.r],[375,180,125]);for(const k of ['c','d']){const q=get(cc,'construction-'+k);near(Math.hypot(+q.cx-225,+q.cy-180),125,'A to intersection');near(Math.hypot(+q.cx-375,+q.cy-180),125,'B to intersection');}}
  for(const ar of prefix(pp,'construction-trace-')){const v=ar.d.match(/-?\d+(?:\.\d+)?/g).map(Number),cx=ar.id.endsWith('-a')?225:375;eq(v.slice(2,5),[125,125,0],'compass keeps circular radius');near(Math.hypot(v[0]-cx,v[1]-180),125,'arc start radius');near(Math.hypot(v[7]-cx,v[8]-180),125,'arc end radius');}
  if(step===3){const l=get(ll,'construction-bisector');eq([+l.x1,+l.x2],[300,300]);near(300-225,375-300,'midpoint');}
 }else if(code==='8350213221200000'){
  const pieces=prefix(pp,'sector-piece-');eq(pieces.length,3,'whole unchanged');let angles=0;pieces.forEach((r,i)=>{const v=r.d.match(/-?\d+(?:\.\d+)?/g).map(Number);eq(v.slice(0,2),[300,180]);eq(v.slice(4,7),[115,115,0]);near(Math.hypot(v[2]-300,v[3]-180),115,'radial edge');near(Math.hypot(v[9]-300,v[10]-180),115,'radial edge');const u=[v[2]-300,180-v[3]],z=[v[9]-300,180-v[10]],theta=Math.atan2(u[0]*z[1]-u[1]*z[0],u[0]*z[0]+u[1]*z[1]);near(theta,2*Math.PI/3,'120 degree sector');angles+=theta;eq(r.fill,step>0&&i===0?'#f4d9b5':'#dce9df');});near(angles,2*Math.PI,'complete circle');
  if(step===2&&p>0){const v=get(pp,'sector-arc-trace').d.match(/-?\d+(?:\.\d+)?/g).map(Number);near(v[7],300+115*Math.cos(2*Math.PI*p/3),'partial arc x');near(v[8],180-115*Math.sin(2*Math.PI*p/3),'partial arc y');}
  if(step===3){eq(prefix(ll,'sector-radius-').length,2);for(const r of prefix(ll,'sector-radius-'))near(Math.hypot(+r.x2- +r.x1,+r.y2- +r.y1),115,'perimeter has both radii');eq(txt('summary'),'面積：9π × 1/3 = 3π cm²');}
 }else if(code==='8350213421100000'){
  const n=step===0?10:step===1?10+Math.floor(10*p):step===2?20+Math.floor(30*p):50+Math.floor(50*p),cells=prefix(rr,'trial-cell-'),expectedHeads=i=>i<10?[false,true,false,true,true,false,true,false,true,true][i]:i%2===1;
  eq(cells.length,100,'all one hundred trial slots');let heads=0;cells.forEach((r,i)=>{near(+r.x,60+i%20*24,'fixed cell x');near(+r.y,65+Math.floor(i/20)*30,'fixed cell y');eq([+r.width,+r.height],[20,24]);const h=expectedHeads(i);if(i<n&&h)heads++;eq(r.fill,i>=n?'#fffdf8':h?'#467060':'#f4d9b5','only actual observed cells filled');const a=luminance(r.fill),b=luminance(r.stroke);checks++;assert.ok((Math.max(a,b)+.05)/(Math.min(a,b)+.05)>3,'counted boundary remains distinct');});
  eq(txt('trial-count'),n+'回：表'+heads+'回・裏'+(n-heads)+'回');eq(txt('trial-ratio'),'表の割合 '+heads+'/'+n);eq(txt('summary'),'表と裏の回数を合わせると'+n+'回');
 }else throw Error('Unreviewed scene');frames++;
}
for(const c of codes){eq(api.items[c].steps.length,4);for(let s=0;s<4;s++)for(let i=0;i<=100;i++)audit(c,s,i/100,api.render(c,s,i/100));eq(api.render(c,4,1),'');eq(api.render(c,0,NaN),'');eq(api.render(c,0,-1),api.render(c,0,0));eq(api.render(c,0,2),api.render(c,0,1));}
const probes=[['8350213111200000',2,.5,s=>s.replace('x2="280"','x2="281"')],['8350213310000000',1,.5,s=>s.replace('M305 70','M306 70')],['8350213211100000',3,1,s=>s.replace('cx="300" cy="80"','cx="301" cy="80"')],['8350213221200000',3,1,s=>s.replace('A115 115','A114 115')],['8350213421100000',0,1,s=>s.replace(/(id="jh1-scene-trial-cell-1"[^>]*stroke=")[^"]+/,(_,p)=>p+'#467060')]];
for(const [c,s,p,mutate]of probes){const original=api.render(c,s,p),changed=mutate(original);assert.notEqual(changed,original,'mutation actually applied');assert.throws(()=>audit(c,s,p,changed),'independent assertion detects mutation');}
console.log('JH1_LESSON_MATH=PASS scenes=8 steps=32 frames='+frames+' assertions='+checks+' legacy_frames_unchanged='+old.length+' positive_probes=5 source_sha256='+crypto.createHash('sha256').update(file).digest('hex'));
