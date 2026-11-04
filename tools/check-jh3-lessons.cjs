"use strict";
// Independent arithmetic and geometry of every intermediate frame.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..'),source=process.env.BASIC_LEARNING_JH3_SCENES||path.join(root,'js/lesson-scenes-jh3.js');
const w={};for(const f of ['lesson-scenes.js','lesson-scenes-grade5.js','lesson-scenes-grade6.js','lesson-scenes-jh1.js','lesson-scenes-jh2.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'js',f),'utf8'),{window:w});
const api=w.BL.lessonScenes,old=[];for(const code of Object.keys(api.items))for(let step=0;step<api.items[code].steps.length;step++)for(const phase of [0,.5,1])old.push([code,step,phase,api.render(code,step,phase)]);
const input=fs.readFileSync(source,'utf8');vm.runInNewContext(input,{window:w});
const codes=JSON.parse(fs.readFileSync(path.join(root,'sources/jh3-lesson-manifest.json'),'utf8')).codes;
assert.deepEqual(Array.from(w.BL.jh3Lessons.codes).sort(),codes.slice().sort());assert.equal(old.length,435);
for(const[c,s,p,svg]of old)assert.equal(api.render(c,s,p),svg,'old 36 scenes unchanged');
let checks=0,frames=0;const copy=x=>JSON.parse(JSON.stringify(x));
const eq=(a,b,m)=>{checks++;assert.deepEqual(copy(a),copy(b),m||'mathematical equality');},ok=(a,m)=>{checks++;assert.ok(a,m||'mathematical invariant');},near=(a,b,m,t=.0001)=>{checks++;assert.ok(Number.isFinite(a)&&Math.abs(a-b)<=t,(m||'coordinate')+': '+a+' vs '+b);};
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
function audit(code,step,phase,svg){
 const all=elements(svg),prefix='jh3-scene-',get=k=>{const v=all.filter(e=>e.id===prefix+k);eq(v.length,1,'one visible '+k);return v[0];},many=k=>all.filter(e=>(e.id||'').startsWith(prefix+k)),has=k=>all.some(e=>e.id===prefix+k);
 const texts=Object.fromEntries(Array.from(svg.matchAll(/<text\b([^>]*)>([^<]*)<\/text>/g),m=>[(m[1].match(/id="([^"]+)"/)||[])[1],decode(m[2])])),txt=k=>{ok(Object.hasOwn(texts,prefix+k),'text '+k);return texts[prefix+k];};
 const ids=all.filter(e=>e.id).map(e=>e.id);eq(new Set(ids).size,ids.length,'unique frame IDs');ok(txt('summary'));
 ok(!/NaN|Infinity|undefined|<script|\bon[a-z]+=|点数|ランキング|順位|評価|成績|レベル|集中力|得意|苦手|上手|成長|データがありません|学びのバディ/.test(svg));
 for(const r of all.filter(e=>e.tag==='rect'))ok(+r.x>=0&&+r.y>=0&&+r.width>=0&&+r.height>=0&&+r.x+ +r.width<=600.001&&+r.y+ +r.height<=400.001,'rectangle within frame');
 const suffix=code.slice(6);
 if(suffix==='3121240000'){
  const rs=[0,1,2,3].map(i=>get('factor-part-'+i));eq(rs.length,4);[9,6,9,6].forEach((v,i)=>near(+rs[i].width* +rs[i].height,v*1024,'factor rectangle area'));disjointRectangles(rs);near(rs.reduce((v,r)=>v+ +r.width* +r.height,0),30*1024,'complete factor rectangle');
  ['x²','2x','3x','6'].forEach((v,i)=>eq(txt('factor-term-'+i),v));eq(has('factor-sum'),step===1);eq(has('factor-product'),step===2);eq(has('factor-result'),step===3);
  if(step===1)eq(txt('factor-sum'),'2+3=5');if(step===2)eq(txt('factor-product'),'2×3=6');if(step===3)eq(txt('factor-result'),'(x+2)(x+3)');
  const traces=all.filter(e=>e.tag==='line');eq(traces.length,step===0?0:1);if(traces.length)near(+traces[0].x2- +traces[0].x1,(step===3?160:130)*phase,'factor highlight progress');
  for(const x of[-3,0,1,2])eq(x*x+5*x+6,(x+2)*(x+3));
 }else if(suffix==='3112200000'){
  const d=10**step,lo=Math.floor(Math.SQRT2*d),hi=lo+1;ok(lo*lo<2*d*d&&hi*hi>2*d*d,'exact integer squares bracket root');eq(+txt('approx-low'),lo/d);eq(+txt('approx-high'),hi/d);
  near(+get('approx-root').cx,100+400*(Math.SQRT2-1),'root overview stays fixed');near(+get('approx-detail-root').cx,100+400*(Math.SQRT2*d-lo),'root in independently scaled zoom');
  near(+get('approx-interval-trace').x2,100+400*phase,'zoom trace progress');
  eq(normal(txt('approx-left-square')),lo/d+'²='+lo*lo/(d*d));eq(normal(txt('approx-right-square')),hi/d+'²='+hi*hi/(d*d));
 }else if(suffix==='3132100000'){
  eq(many('complete-row-').length,step+1);for(let i=0;i<=step;i++){const r=get('complete-row-'+i);eq([+r.x,+r.y,+r.width,+r.height],[80,28+i*64,440,52]);}
  const textValues=all.filter(e=>e.tag==='text').length;ok(textValues>=step+1);['x²+4x−5=0','x²+4x=5','(x+2)²=9','x=1 または −5'].slice(0,step+1).forEach(t=>ok(svg.includes('>'+t+'</text>'),'equivalent equation displayed'));
  eq(many('complete-root-').length,step===3?2:0);if(step===3){pointsNear([point(get('complete-root-0')),point(get('complete-root-1'))],[[332,318],[140,318]],'both complete-square roots');for(const x of[1,-5])eq(x*x+4*x-5,0);}
  const trace=all.filter(e=>e.tag==='line'&&e.stroke==='#ad672b');eq(trace.length,1);near(+trace[0].x2- +trace[0].x1,400*phase,'equation highlight progress');
 }else if(suffix==='3311000000'){
  const P=(x,y)=>[300+65*x,180-7*y];eq(many('parabola-point-').length,step===0?0:13);
  if(step===0){const rs=[...many('parabola-table-x-'),...many('parabola-table-y-')];eq(rs.length,10);disjointRectangles(rs);[-2,-1,0,1,2].forEach((x,i)=>{const r=get('parabola-table-y-'+i);eq([+r.x,+r.y,+r.width,+r.height],[58+100*i,175,84,70]);ok(svg.includes('>'+x*x+'</text>'),'squared table values');});}
  else pointsNear(many('parabola-point-').map(point),Array.from({length:13},(_,i)=>{const x=-3+i/2;return P(x,x*x);}), 'parabola points');
  eq(has('parabola-curve'),step>=2);if(step>=2)quadraticCurve(get('parabola-curve'),1,P,-3,step===2?-3+6*phase:3);
  eq(many('parabola-secant-').length,step===3?2:0);if(step===3)for(const[i,x]of[[0,1],[1,2]]){const l=get('parabola-secant-'+i);pointsNear([[+l.x1,+l.y1],[+l.x2,+l.y2]],[P(x,x*x),P(x+1,(x+1)**2)],'secant with different increments');eq((x+1)**2-x*x,[3,5][i]);}
 }else if(suffix==='3212000000'){
  if(step<=1){const a=polygon(get('solid-unit')),b=polygon(get('solid-double'));near(area(a),3600);near(area(b),14400);near(area(b)/area(a),4,'face ratio differs from volume ratio');eq(has('solid-face'),step===1);if(step===1){const r=get('solid-face');eq([+r.width,+r.height],[120,120]);}}
  else{const rs=many('solid-cell-');eq(rs.length,8);rs.forEach(r=>eq([+r.width,+r.height],[80,80]));disjointRectangles(rs);eq(many('solid-layer-').length,2);eq(txt('solid-count'),step===2?'一層4個が二層：4+4=8個':'体積は 2³=8');}
 }else if(suffix==='3221100000'){
  const P=a=>[300+105*Math.cos(a),175-105*Math.sin(a)],theta=2*Math.PI/3,A=point(get('circle-A')),B=point(get('circle-B'));
  pointsNear([A,B],[P(0),P(theta)],'fixed arc endpoints');arc(get('circle-arc'),300,175,105,0,theta);eq(has('circle-center-angle'),step>=1);eq(has('circle-P'),step>=2);
  if(step>=1)arc(get('circle-center-angle'),300,175,34,0,theta);
  if(step>=2){const pp=point(get('circle-P')),a=(240+(step===3?60*phase:0))*Math.PI/180;pointsNear([pp],[P(a)],'P moves only outside selected arc');near(angle(A,pp,B),Math.PI/3,'actual inscribed angle stays sixty');near(distance(pp,[300,175]),105);}
 }else if(suffix==='3231100000'){
  if(step<=1){const tri=polygon(get('pythagoras-triangle'));pointsNear(tri,[[260,155],[335,155],[260,255]],'right triangle 3 4 5');near(angle(tri[1],tri[0],tri[2]),Math.PI/2);get('pythagoras-right');eq(has('pythagoras-square-a'),step===1);
   if(step===1){const rs=['a','b','c'].map(k=>polygon(get('pythagoras-square-'+k)));rs.forEach((ps,i)=>squareAudit(ps,[9,16,25][i]*625,'external square'));for(const ps of rs)near(area(intersection(ps,tri)),0,'external square excludes triangle');for(let i=0;i<3;i++)for(let j=i+1;j<3;j++)near(area(intersection(rs[i],rs[j])),0,'side squares disjoint');}
  }else{
   const z=220/7,remainders=[],highlighted=[];
   for(let g=0;g<2;g++){
    const ox=g?335:45,r=get('pythagoras-outer-'+g);eq([+r.x,+r.y,+r.width,+r.height],[ox,65,220,220]);
    const ts=Array.from({length:4},(_,i)=>polygon(get('pythagoras-proof-'+g+'-triangle-'+i)));
    const fills=Array.from({length:4},(_,i)=>get('pythagoras-proof-'+g+'-triangle-'+i).fill);highlighted.push(fills.map((fill,i)=>fill==='#f1dfc9'?i:-1).filter(i=>i>=0));eq(highlighted[g].length,step===2?1:0,'only corresponding triangles are highlighted in the comparison phase');fills.forEach(fill=>ok(fill==='#f1dfc9'||fill==='#dce9df'));
    ts.forEach(ps=>{near(area(ps),6*z*z,'each removed triangle area',.02);const ds=ps.map((p,i)=>distance(p,ps[(i+1)%3])).sort((a,b)=>a-b);[3,4,5].forEach((v,i)=>near(ds[i],v*z,'all removed triangles congruent'));ps.forEach(p=>ok(p[0]>=ox-.001&&p[0]<=ox+220.001&&p[1]>=64.999&&p[1]<=285.001,'triangle inside common outer'));});
    for(let i=0;i<4;i++)for(let j=i+1;j<4;j++)near(area(intersection(ts[i],ts[j])),0,'four triangles disjoint',.02);
    const rests=g?['a','b'].map(k=>{const e=get('pythagoras-remaining-'+k);return [[+e.x,+e.y],[+e.x+ +e.width,+e.y],[+e.x+ +e.width,+e.y+ +e.height],[+e.x,+e.y+ +e.height]];}):[polygon(get('pythagoras-remaining-c'))];
    for(const k of(g?['a','b']:['c']))eq(get('pythagoras-remaining-'+k).fill,step===3?'#f1dfc9':'#fffdf8','remaining area is the final focus');
    rests.forEach((ps,i)=>{squareAudit(ps,(g?[9,16][i]:25)*z*z,'remaining square');for(const t of ts)near(area(intersection(t,ps)),0,'remaining squares disjoint from removed triangles',.03);});
    const rest=rests.reduce((s,ps)=>s+area(ps),0);remainders.push(rest);near(rest+ts.reduce((s,ps)=>s+area(ps),0),48400,'complete outer partition',.05);
   }eq(highlighted[0],highlighted[1],'same triangle is compared across both layouts');near(remainders[0],remainders[1],'equal remaining areas',.03);if(step===3)eq(txt('summary'),'c² = (a+b)²−4×ab/2 = a²+b²');
  }
 }else if(suffix==='3412200000'){
  const pop=many('estimate-population-cell-');eq(pop.length,80);pop.forEach((r,i)=>{eq(r.fill,'#fffdf8','unknown population remains unknown');eq([+r.x,+r.y,+r.width,+r.height],[65+i%10*17,80+Math.floor(i/10)*17,14,14]);});disjointRectangles(pop);
  const rs=many('estimate-sample-');eq(rs.length,step>=1?20:0);if(step>=1){rs.forEach((r,i)=>{eq(r.fill,i<6?'#f1dfc9':'#fffdf8','six observed sample hits');eq([+r.x,+r.y,+r.width,+r.height],[365+i%5*30,100+Math.floor(i/5)*30,24,24]);});disjointRectangles(rs);eq(txt('estimate-fraction'),'該当6個');}
  eq(has('estimate-result'),step===2);if(step===2)eq(txt('estimate-result'),'80×6/20=24 → 約24個');eq(many('estimate-alternative-').length,step===3?3:0);if(step===3)[5,6,7].forEach((h,i)=>eq(txt('estimate-alternative-'+i),h+'/20 → 約'+4*h+'個'));
 }else throw Error('Unreviewed scene '+code);
}
for(const code of codes){eq(api.items[code].steps.length,4);for(let step=0;step<4;step++)for(let p=0;p<=100;p++){try{audit(code,step,p/100,api.render(code,step,p/100));}catch(e){e.message=code+' step='+step+' phase='+p+' '+e.message;throw e;}frames++;}
 for(const bad of[-1,4,.5,null,'0'])eq(api.render(code,bad,.5),'');for(const bad of[NaN,Infinity,null,'1'])eq(api.render(code,0,bad),'');eq(api.render(code,0,-1),api.render(code,0,0));eq(api.render(code,0,2),api.render(code,0,1));}
const mutations=[
 ['8350233121240000',0,s=>s.replace(/(id="jh3-scene-factor-part-0"[^>]* width=")[^"]+/,(_,a)=>a+'100'),/factor rectangle area/],
 ['8350233112200000',2,s=>s.replace(/(id="jh3-scene-approx-detail-root" cx=")[^"]+/,(_,a)=>a+'110'),/independently scaled zoom/],
 ['8350233311000000',2,s=>s.replace(/(id="jh3-scene-parabola-curve" d="M[^Q]+ Q[^ ]+ )[^ ]+/,(_,a)=>a+'185'),/lies on parabola/],
 ['8350233412200000',1,s=>s.replace(/(id="jh3-scene-estimate-population-cell-0"[^>]* fill=")[^"]+/,(_,a)=>a+'#f1dfc9'),/unknown population/],
 ['8350233231100000',3,s=>s.replace(/(id="jh3-scene-pythagoras-proof-0-triangle-0"[^>]* fill=")[^"]+/,(_,a)=>a+'#f1dfc9'),/comparison phase/]
];
for(const[c,s,mutate,pattern]of mutations){const before=api.render(c,s,1),after=mutate(before);assert.notEqual(after,before,'positive probe actually changes frame');assert.throws(()=>audit(c,s,1,after),pattern);}
eq(frames,3232);vm.runInNewContext(input,{window:w});eq(w.BL.jh3Lessons.codes.length,8);
console.log('JH3_LESSON_MATH=PASS scenes=8 steps=32 frames='+frames+' checks='+checks+' legacy_frames='+old.length+' positive_probes='+mutations.length+' source_sha256='+crypto.createHash('sha256').update(input).digest('hex'));
