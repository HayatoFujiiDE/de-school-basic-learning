'use strict';
// Independently reconstructed mathematics for every intermediate scene frame.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..'),source=process.env.BASIC_LEARNING_JH2_SCENES||path.join(root,'js/lesson-scenes-jh2.js');
const w={};for(const f of ['lesson-scenes.js','lesson-scenes-grade5.js','lesson-scenes-grade6.js','lesson-scenes-jh1.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'js',f),'utf8'),{window:w});
const api=w.BL.lessonScenes,old=[];for(const c of Object.keys(api.items))for(let s=0;s<api.items[c].steps.length;s++)for(const p of[0,.5,1])old.push([c,s,p,api.render(c,s,p)]);
const input=fs.readFileSync(source,'utf8');vm.runInNewContext(input,{window:w});
const codes=JSON.parse(fs.readFileSync(path.join(root,'sources/jh2-lesson-manifest.json'),'utf8')).codes;
assert.deepEqual(Array.from(w.BL.jh2Lessons.codes).sort(),codes.slice().sort());for(const[c,s,p,svg]of old)assert.equal(api.render(c,s,p),svg,'old 28 scenes unchanged');
let checks=0,frames=0;const eq=(a,b,m)=>{checks++;assert.deepEqual(a,b,m||'mathematical equality');},ok=(a,m)=>{checks++;assert.ok(a,m||'mathematical invariant');},near=(a,b,m)=>{checks++;assert.ok(Number.isFinite(a)&&Math.abs(a-b)<.00003,(m||'coordinate')+': '+a+' vs '+b);};
function tags(svg,tag){return Array.from(svg.matchAll(new RegExp('<'+tag+'\\b([^>]*)>','g')),m=>Object.fromEntries(Array.from(m[1].matchAll(/([\w-]+)="([^"]*)"/g),a=>[a[1],a[2]])));}
function arc(p,x,y,r,start,end){const v=p.d.match(/-?\d+(?:\.\d+)?/g).map(Number);eq(v.length,9);near(v[0],x+r*Math.cos(start));near(v[1],y-r*Math.sin(start));eq(v.slice(2,5),[r,r,0]);eq(v[5],end-start>Math.PI?1:0);eq(v[6],0);near(v[7],x+r*Math.cos(end));near(v[8],y-r*Math.sin(end));}
function audit(code,step,phase,svg){
 const rr=tags(svg,'rect'),cc=tags(svg,'circle'),ll=tags(svg,'line'),pp=tags(svg,'polygon'),paths=tags(svg,'path');
 const get=(list,key)=>{const v=list.find(x=>x.id==='jh2-scene-'+key);ok(v,'visible '+key);return v;},prefix=(list,key)=>list.filter(v=>(v.id||'').startsWith('jh2-scene-'+key));
 const texts=Object.fromEntries(Array.from(svg.matchAll(/<text([^>]*)>([^<]*)<\/text>/g),m=>[(m[1].match(/id="([^"]+)"/)||[])[1],m[2]])),txt=k=>texts['jh2-scene-'+k];
 ok(txt('summary'));ok(!/NaN|Infinity|undefined|<script|\bon[a-z]+=|点数|ランキング|順位|評価|成績|レベル|集中力|得意|苦手|上手|成長|データがありません|学びのバディ/.test(svg));
 const ids=Array.from(svg.matchAll(/ id="([^"]+)"/g),m=>m[1]);eq(new Set(ids).size,ids.length);
 for(const r of rr)ok(+r.x>=0&&+r.y>=0&&+r.width>=0&&+r.height>=0&&+r.x+ +r.width<=600.001&&+r.y+ +r.height<=400.001,'rect within frame');
 for(const c of cc)ok(+c.r>0&&+c.cx- +c.r>=0&&+c.cy- +c.r>=0&&+c.cx+ +c.r<=600.001&&+c.cy+ +c.r<=400.001,'circle within frame');
 for(let i=0;i<rr.length;i++)for(let j=i+1;j<rr.length;j++){const a=rr[i],b=rr[j];ok(Math.min(+a.x+ +a.width,+b.x+ +b.width)<=Math.max(+a.x,+b.x)||Math.min(+a.y+ +a.height,+b.y+ +b.height)<=Math.max(+a.y,+b.y),'counted rectangles are individually visible');}
 const k=code.slice(6);
 if(k==='3111100000'){
  eq(prefix(rr,'poly-term-').length,4);['2x','3y','x','−y'].forEach((v,i)=>{eq(txt('poly-term-value-'+i),v);const r=get(rr,'poly-term-'+i);eq([+r.x,+r.y,+r.width,+r.height],[62+122*i,95,110,88]);eq(r.fill,((step===1&&i%2===0)||(step===2&&i%2===1)||step===3)?'#f4d9b5':'#dce9df');});eq(txt('poly-result'),['文字部分が同じ項を探す','2x+x = 3x','3y−y = 2y','3x + 2y'][step]);for(const l of prefix(ll,'poly-guide-'))near(+l.x2- +l.x1,90*phase,'guide does not move terms');
 }else if(k==='3111300000'){
  eq(prefix(rr,'odd-').length,2);if(step>0)eq(txt('odd-general'),step===1?'2m+2n+2':'2(m+n+1)');for(let m=-5;m<=5;m++)for(let n=-5;n<=5;n++){eq((2*m+1)+(2*n+1),2*(m+n+1));eq(((2*m+1)+(2*n+1))%2===0,true);}if(step===2)near(+get(ll,'odd-integer-guide').x2- +get(ll,'odd-integer-guide').x1,185*phase);
 }else if(k==='3121300000'){
  const a=['2x+y=7','3x=9','x=3','2×3+1=7'],b=['x−y=2','x−y=2（元の式）','3−y=2 → y=1','3−1=2'];eq(txt('elimination-first'),a[step]);eq(txt('elimination-second'),b[step]);eq(2*3+1,7);eq(3-1,2);eq(3*3,9);if(step===1)near(+get(ll,'elimination-guide').x2,90+420*phase);
 }else if(k==='3311000000'){
  const p=get(cc,'linear-intercept');eq([+p.cx,+p.cy],[300,158]);eq(+get(ll,'graph-x-axis').y1,180);eq(+get(ll,'graph-y-axis').x1,300);
  eq(prefix(cc,'linear-next').length,step>=2?1:0);if(step>=1){const l=get(ll,'linear-dx-trace');near(+l.x2,300+22*(step===1?phase:1));near(+l.y2,158);const full=get(ll,'linear-dx-full');eq([+full.x1,+full.x2,+full.y1,+full.y2],[300,322,158,158]);}
  if(step>=2){const q=get(cc,'linear-next'),l=get(ll,'linear-dy-trace');eq([+q.cx,+q.cy],[322,114]);near(+l.y2,158-44*(step===2?phase:1));near(+l.x1,322);near(+l.x2,322);}
  if(step===3){const l=get(ll,'linear-line');for(const i of[1,2]){const x=(+l['x'+i]-300)/22,y=(180- +l['y'+i])/22;near(y,2*x+1,'point on linear graph');}}
 }else if(k==='3211100000'){
  const angle=Math.PI/3,top=240+120/Math.tan(angle);for(const i of[0,1]){const l=get(ll,'parallel-base-'+i);eq(+l.y1,+l.y2);eq(+l.y1,130+120*i);}
  eq(prefix(ll,'parallel-transversal').length,step>=1?1:0);if(step>=1){const l=get(ll,'parallel-transversal');near(Math.atan2(+l.y1- +l.y2,+l.x2- +l.x1),angle);arc(get(paths,'parallel-angle-top'),top,130,28,0,angle);}
  if(step>=2)arc(get(paths,'parallel-angle-bottom'),240,250,28,0,angle);if(step===3)arc(get(paths,'parallel-angle-opposite'),top,130,28,Math.PI,Math.PI+angle);
  if(step>=1&&phase>0){const start=step===3?Math.PI:0;arc(get(paths,'parallel-angle-trace'),step===2?240:top,step===2?250:130,34,start,start+angle*phase);}
 }else if(k==='3221000000'){
  const ps=get(pp,'proof-triangle').points.split(' ').map(p=>p.split(',').map(Number));eq(ps,[[300,70],[180,270],[420,270]]);const l=get(ll,'proof-midline');eq([+l.x1,+l.y1,+l.x2,+l.y2],[300,70,300,270]);near(Math.hypot(120,200),Math.hypot(-120,200));eq(prefix(ll,'proof-ab-').length,1);eq(prefix(ll,'proof-ac-').length,1);eq(prefix(ll,'proof-bd-').length,step>=1?2:0);eq(prefix(ll,'proof-dc-').length,step>=1?2:0);eq(prefix(ll,'proof-ad-').length,step>=2?3:0);if(step===3){const half=Math.atan2(120,200);arc(get(paths,'proof-angle-0'),300,70,36,1.5*Math.PI-half,1.5*Math.PI);arc(get(paths,'proof-angle-1'),300,70,36,1.5*Math.PI,1.5*Math.PI+half);}
 }else if(k==='3411200000'){
  const values=[2,4,4,6,8,8,10,12];eq(prefix(rr,'box-data-').length,8);values.forEach((v,i)=>{eq(+txt('box-value-'+i),v);const r=get(rr,'box-data-'+i);eq([+r.x,+r.y],[60+i*60,35]);eq(r.fill,(step===1&&(i===3||i===4))||(step===2&&[1,2,5,6].includes(i))?'#f4d9b5':'#fffdf8');});
  const median=(values[3]+values[4])/2,q1=(values[1]+values[2])/2,q3=(values[5]+values[6])/2;if(step>=1)eq(+get(ll,'box-median').x1,60+30*median);if(step>=2){eq(+get(ll,'box-q1').x1,60+30*q1);eq(+get(ll,'box-q3').x1,60+30*q3);}if(step===3){const r=get(rr,'box-body'),l=get(ll,'box-whisker');eq([+r.x,+r.width],[60+30*q1,30*(q3-q1)]);eq([+l.x1,+l.x2],[60+30*values[0],60+30*values[7]]);}
 }else if(k==='3421200000'){
  eq(prefix(rr,'coin-outcome-').length,step>=2?4:0);eq(prefix(ll,'coin-first-branch-').length,step>=1?2:0);if(step>=2){const results=['表表','表裏','裏表','裏裏'];results.forEach(v=>ok(svg.includes('>'+v+'</text>')));for(let i=0;i<4;i++){const r=get(rr,'coin-outcome-'+i),l=get(ll,'coin-leaf-trace-'+i),x=[95,225,375,505][i],start=i<2?170:430;eq([+r.x,+r.y,+r.width,+r.height],[x-42,225,84,62]);eq(r.fill,step===3&&(i===1||i===2)?'#f4d9b5':'#fffdf8');near(+l.x2,start+(x-start)*(step===2?phase:1));near(+l.y2,125+100*(step===2?phase:1));}if(step===3)eq(prefix(rr,'coin-outcome-').filter(r=>r.fill==='#f4d9b5').length,2);}
 }else throw Error('Unreviewed scene '+code);
}
for(const code of codes){eq(api.items[code].steps.length,4);for(let step=0;step<4;step++)for(let p=0;p<=100;p++){audit(code,step,p/100,api.render(code,step,p/100));frames++;}
 for(const bad of[-1,4,.5,null,'0'])eq(api.render(code,bad,.5),'');for(const bad of[NaN,Infinity,null,'1'])eq(api.render(code,0,bad),'');eq(api.render(code,0,-1),api.render(code,0,0));eq(api.render(code,0,2),api.render(code,0,1));}
const mutations=[['8350223311000000',2,/(id="jh2-scene-linear-next"[^>]* cx=")[^"]+/,'$1323'],['8350223411200000',3,/(id="jh2-scene-box-body"[^>]* width=")[^"]+/,'$1151'],['8350223111100000',1,'>3x</text>','>4x</text>']];
for(const[c,s,re,replacement]of mutations){let svg=api.render(c,s,1);if(c==='8350223111100000')svg=svg.replace('2x+x = 3x','2x+x = 4x');else svg=svg.replace(re,replacement);assert.notEqual(svg,api.render(c,s,1));assert.throws(()=>audit(c,s,1,svg),'wrong visible mathematics detected');}
eq(frames,3232);vm.runInNewContext(input,{window:w});eq(w.BL.jh2Lessons.codes.length,8);
console.log('JH2_LESSON_MATH=PASS scenes=8 steps=32 frames='+frames+' checks='+checks+' legacy_frames='+old.length+' positive_probes=3 source_sha256='+crypto.createHash('sha256').update(input).digest('hex'));
