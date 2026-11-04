'use strict';
// Independent arithmetic/geometry checks, written separately from the drawers.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const source=process.env.BASIC_LEARNING_GRADE5_VISUALS||path.join(root,'js/visuals-grade5.js');
const w={localStorage:{getItem:()=>null,setItem:()=>{}}};
for(const f of ['units.js','core.js','visuals.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'js',f),'utf8'),{window:w});
vm.runInNewContext(fs.readFileSync(source,'utf8'),{window:w});
const expected=JSON.parse(fs.readFileSync(path.join(root,'sources/grade5-unit-manifest.json'),'utf8')).codes;
assert.deepEqual(Array.from(w.BL.grade5Visuals.codes).sort(),expected.slice().sort());
let states=0,checks=0;
function eq(a,b,m){checks++;assert.deepEqual(a,b,m);}
function near(a,b,m){checks++;assert.ok(Math.abs(a-b)<.01,m+': '+a+' != '+b);}
function elements(svg,tag){return Array.from(svg.matchAll(new RegExp('<'+tag+'\\b([^>]*)>','g')),m=>Object.fromEntries(Array.from(m[1].matchAll(/([\w-]+)="([^"]*)"/g),x=>[x[1],x[2]])));}
function texts(svg){return Array.from(svg.matchAll(/<text\b([^>]*)>([^<]*)<\/text>/g),m=>Object.assign(elements('<text'+m[1]+'>','text')[0],{text:m[2]}));}
const R=(v)=>Number(v.toFixed(4)),green='#467060',pale='#dce9df',sand='#f4d9b5';
function polygonArea(points){let a=0;for(let i=0;i<points.length;i++){let p=points[i],q=points[(i+1)%points.length];a+=p[0]*q[1]-q[0]*p[1];}return Math.abs(a)/2;}
function points(p){return p.points.trim().split(/\s+/).map(p=>p.split(',').map(Number));}
function validate(code,s,html){
 const short=code.slice(6),rect=elements(html,'rect'),circles=elements(html,'circle'),poly=elements(html,'polygon'),lines=elements(html,'line'),txt=texts(html);
 const result=/<p class="visual-result"[^>]*>([^<]*)<\/p>/.exec(html);assert.ok(result,code+' result');
 const out=result[1],match=v=>{checks++;assert.ok(out.includes(String(v)),code+' result '+v);};
 for(const r of rect){checks++;assert.ok(Number(r.width)>=0&&Number(r.height)>=0,code+' nonnegative areas');}
 for(const t of txt){checks++;assert.ok(Number.isFinite(Number(t.x))&&Number.isFinite(Number(t.y)),code+' finite labels');}
 const filled=color=>rect.filter(r=>r.fill===color);
 if(short==='3120000000'){
  const values=[s.n/100,s.scale==='10'?s.n/10:s.n/1000];
  values.forEach((v,i)=>eq(txt.filter(t=>Number(t.y)===124+110*i).map(t=>t.text).join(''),String(Math.round(v*1000)).padStart(5,'0'),'place digit values'));
  match(R(values[1]));
 }else if(short==='3111100000'){eq(circles.length,s.n,'one object per item');eq(rect.length,Math.ceil(s.n/2),'pair boxes');match(s.n%2?'奇数':'偶数');}
 else if(short==='3111200000'){const nums=Array.from({length:36},(_,i)=>i+1).filter(n=>s.mode==='multiples'?n%s.n===0:s.mode==='divisors'?s.n%n===0:s.mode==='commonMultiples'?n%s.n===0&&n%s.m===0:s.n%n===0&&s.m%n===0);eq(filled(sand).length,nums.length,'selected divisor/multiple count');match(nums.length?nums.join('、'):'この範囲にはない');}
 else if(short==='3131100000'){eq(filled(pale).length,24*s.n,'hundredth cells');near(filled(pale).reduce((a,r)=>a+Number(r.width)*Number(r.height),0)/10000,24*s.n/100,'product drawn area');match(R(24*s.n/100));}
 else if(short==='3131200000'){eq(rect.length,48,'tenths conserved');eq(lines.length,48/Number(s.divisor)+1,'equal group boundaries');match('= '+48/Number(s.divisor));lines.forEach((l,i)=>near(Number(l.x1),60+i*Number(s.divisor)*10,'group width'));}
 else if(short==='3141200000'){eq(filled(pale).length,s.n,'fraction numerator');near(filled(pale).reduce((a,r)=>a+Number(r.width),0)/160,s.n/Number(s.d),'fraction length');match(R(s.n/Number(s.d)));}
 else if(short==='3140000000'){eq(rect.length,12*s.n,'equal denominators');near(filled(pale).reduce((a,r)=>a+Number(r.width),0),240,'half unchanged');near(filled(sand).reduce((a,r)=>a+Number(r.width),0),160,'third unchanged');}
 else if(short==='3150000000'){const value=s.mode==='add'?3+s.n:3-s.n;eq(rect.length,18,'same whole six cells');eq(rect.filter(r=>Number(r.y)===230&&r.fill===pale).length,value,'sum/difference sixths');match('= '+value+'/6');}
 else if(short==='3160000000'){eq(filled(pale).length,s.n,'notebooks');near(Number(filled(sand)[0].width)/Number(filled(pale)[0].width),80/120,'cost scale');match(120*s.n+80);}
 else if(short==='3211100000'){
  const a=points(poly[0]),b=points(poly[1]);near(polygonArea(a),5400,'triangle area');near(polygonArea(b),5400,'rigid transform area');
  for(let i=0;i<3;i++){let j=(i+1)%3;near(Math.hypot(a[i][0]-a[j][0],a[i][1]-a[j][1]),Math.hypot(b[i][0]-b[j][0],b[i][1]-b[j][1]),'corresponding sides');}
 }else if(short==='3211200000'){eq(poly.length,s.n-2,'triangulation');match(180*(s.n-2));}
 else if(short==='3211300000'){const p=points(poly[0]);eq(p.length,s.n,'regular polygon sides');const lengths=p.map((v,i)=>Math.hypot(v[0]-p[(i+1)%p.length][0],v[1]-p[(i+1)%p.length][1]));lengths.forEach(v=>near(v,lengths[0],'equal sides'));p.forEach(v=>near(Math.hypot(v[0]-300,v[1]-160),125,'equal radii'));}
 else if(short==='3211400000'){near(Number(circles[0].r)*2,s.n*12,'diameter scale');near(Number(lines[1].x2)-Number(lines[1].x1),s.n*12*3.14,'circumference same scale');match(R(s.n*3.14));}
 else if(short==='3231100000'){near(polygonArea(points(poly[0]))/(42*42),s.b*s.h/(s.shape==='triangle'?2:1),'area formula geometry');match(s.b*s.h/(s.shape==='triangle'?2:1));}
 else if(short==='3232100000'){const scale=s.shape==='trapezoid'?35:50;const area=s.shape==='trapezoid'?(2*s.a+4)*s.b/2:s.a*s.b/2;near(polygonArea(points(poly[0]))/(scale*scale),area,'trapezoid/rhombus polygon area');match(area);}
 else if(short==='3220000000'){if(s.shape==='prism'){eq(poly.length,2,'two bases');eq(points(poly[0]).length,s.n,'n-sided base');near(polygonArea(points(poly[0])),polygonArea(points(poly[1])),'congruent bases');match('面 '+(s.n+2));match('辺 '+3*s.n);match('頂点 '+2*s.n);}else eq(elements(html,'ellipse').length,2,'two cylinder base circles in projection');}
 else if(short==='3240000000'){eq(poly.length,3,'three visible grid faces');eq(lines.length,2*((s.x-1)+(s.y-1)+(s.z-1)),'unit grid divisions');match(s.x*s.y+'こ × '+s.z+'段 = '+s.x*s.y*s.z);}
 else if(short==='3310000000'){near(Number(circles[0].cx),80+72*s.n,'time coordinate');near(Number(circles[0].cy),290-8*s.n*s.rate,'volume coordinate');match(s.n*s.rate+' L');}
 else if(short==='3321100000'){eq(circles.length,12+s.n,'all people represented');eq(rect.length,7,'areas share unit square');rect.forEach(r=>near(Number(r.width),Number(r.height),'one square metre drawn as square'));match('B：'+s.n/4+'人/m²');match(s.n===16?'混み方は同じ。':s.n>16?'Bの方':'Aの方');}
 else if(short==='3320000000'){eq(circles.length,2,'paired number lines');near(Number(circles[0].cx),60+120*s.n,'paired time distance position');near(Number(circles[1].cx),Number(circles[0].cx),'aligned quantities');match(s.speed*s.n+' km');}
 else if(short==='3331100000'){eq(circles.filter(c=>c.fill===green).length,s.n,'part count');eq(circles.length,20,'base count');near(Number(filled(pale)[0].width)/480,s.n/20,'ratio tape');match(R(s.n/20));match(s.n*5+'%');}
 else if(short==='3331200000'){eq(rect.length,100,'percent whole');eq(filled(pale).length,s.n,'percentage cells');match(R(s.n/100));match(Math.floor(s.n/10)+'割');}
 else if(short==='3420000000'){const avg=(6+s.n)/3;eq(rect.length,6+s.n,'total conserved when levelling');const counts=[120,270,420].map(x=>rect.filter(r=>Number(r.x)===x).length);eq(counts,s.mode==='before'?[2,4,s.n]:[avg,avg,avg],'mean bars');near(Number(lines[0].y1),290-avg*20,'mean line');match('= '+avg);}
 else if(short==='3410000000'){near(Number(rect[0].width)/480,s.n/100,'band percentage');near(Number(rect[1].width)/480,(100-s.n)/100,'complement');const arc=elements(html,'path')[0].d.match(/A100 100 0 ([01]) 1 ([\d.-]+) ([\d.-]+) Z/);assert.ok(arc);eq(Number(arc[1]),s.n>50?1:0,'correct major/minor sector');const angle=-Math.PI/2+2*Math.PI*s.n/100;near(Number(arc[2]),300+100*Math.cos(angle),'sector end x');near(Number(arc[3]),130+100*Math.sin(angle),'sector end y');}
 else throw Error('No independent model '+code);
 states++;
}
function combinations(def){let rows=[{}];for(const c of def.controls){let values=[];for(let v=c[2];v<=c[3];v+=c[4])values.push(v);rows=rows.flatMap(r=>values.map(v=>Object.assign({},r,{[c[0]]:v})));}const fields=[...new Set(def.choices.map(c=>c[0]))];for(const f of fields)rows=rows.flatMap(r=>def.choices.filter(c=>c[0]===f).map(c=>Object.assign({},r,{[f]:c[1]})));return rows.map(r=>Object.assign({},def.defaults,r));}
for(const code of expected){const d=w.BL.visuals.definitions[code];assert.ok(d&&d.draw);for(const state of combinations(d))validate(code,state,d.draw(state));}
const probe=w.BL.visuals.definitions['8250253131100000'];assert.throws(()=>validate('8250253131100000',probe.defaults,probe.draw(probe.defaults).replace('2.4 × 1.5 = 3.6','2.4 × 1.5 = 3.7')),'wrong product positive probe');
const mean=w.BL.visuals.definitions['8250253420000000'];assert.throws(()=>validate('8250253420000000',mean.defaults,mean.draw(mean.defaults).replace(/<rect\b[^>]*\/>/,'')),'missing object positive probe');
console.log('GRADE5_VISUAL_MATH=PASS modules='+expected.length+' states='+states+' assertions='+checks+' positive_probes=2 source_sha256='+crypto.createHash('sha256').update(fs.readFileSync(source)).digest('hex'));
