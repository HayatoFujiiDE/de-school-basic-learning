'use strict';
const fs=require('fs'),vm=require('vm'),assert=require('assert'),crypto=require('crypto');
const path=process.argv[2]||require('path').join(process.env.BASIC_LEARNING_ROOT||require('path').resolve(__dirname,'..'),'js/visuals.js');
const source=fs.readFileSync(path,'utf8');
const ctx={BL:{core:{state:{mode:'es'},escape:s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}}};ctx.window=ctx;
vm.runInNewContext(source,ctx,{timeout:1000});
let checks=0,sliderStates=0;
function result(html){let m=html.match(/<p class="visual-result"[^>]*>(.*?)<\/p>/);return m?m[1]:null;}
function mathematicalCheck(kind,s,html){
 assert(!/NaN|Infinity|undefined/.test(html));let r=result(html),n=s.n;
 switch(kind){
 case 'large':assert.strictEqual(r,`${n}兆 = ${n*10**4}億 = ${n*10**8}万`);break;
 case 'round':assert.strictEqual(r,`${n} → ${Math.floor(n/1000+0.5)*1000}（千の位まで）`);break;
 case 'divide':case 'divide2':{let divisor=kind==='divide'?3:12,quotient=(n-n%divisor)/divisor,remainder=n-quotient*divisor;assert.strictEqual(r,`${n} ÷ ${divisor} = ${quotient}${remainder?' あまり '+remainder:''}`);assert.strictEqual((html.match(/class="group-box"/g)||[]).length,quotient);break;}
 case 'decimal':{const decimals=[Math.floor(n/1000),Math.floor(n/100)%10,Math.floor(n/10)%10,n%10];assert.strictEqual(r,`${(n/1000).toFixed(3)} = ${decimals[0]} + ${(decimals[1]/10).toFixed(1)} + ${(decimals[2]/100).toFixed(2)} + ${(decimals[3]/1000).toFixed(3)}`);break;}
 case 'decimalAdd':{const sign=s.op==='add'?1:-1;assert.strictEqual(r,`0.01のまとまりで見ると、125 ${sign===1?'+':'−'} ${n} = ${125+sign*n}`);assert(html.includes(`<div class="column-total">${((125+sign*n)/100).toFixed(2)}</div>`));break;}
 case 'decimalMultiply':assert.strictEqual(r,`0.4 × ${n} = ${(n*2/5).toFixed(1)}`);assert.strictEqual((html.match(/class="grid-first"/g)||[]).length,n);break;
 case 'fraction':{assert.strictEqual((html.match(/class="grid-first"/g)||[]).length,n);assert.strictEqual((html.match(/class="grid-empty"/g)||[]).length,12-n);let text=n+'/4';if(n===0)text+=' = 0';else if(n%4===0)text+=' = '+n/4;else if(n>4)text+=' = '+Math.floor(n/4)+' と '+n%4+'/4';assert.strictEqual(r,text);break;}
 case 'expression':assert.strictEqual(r,'= '+(s.op==='inside'?(3+2)*4:3+2*4));break;
 case 'distribute':assert.strictEqual((html.match(/class="grid-first"/g)||[]).length,n*4);assert.strictEqual((html.match(/class="grid-second"/g)||[]).length,n*3);assert.strictEqual(r,`${n} × (4 + 3) = ${n} × 4 + ${n} × 3 = ${n*4+n*3}`);break;
 case 'abacus':{let ds=['h','t','o','d'].map(k=>s[k]);assert.strictEqual(r,'表す数：'+(s.h*100+s.t*10+s.o+s.d/10).toFixed(1));assert.strictEqual((html.match(/class="bead engaged"/g)||[]).length,ds.reduce((a,d)=>a+Math.floor(d/5)+d%5,0));break;}
 case 'shapes':{let points=html.match(/<polygon points="([^"]+)"/)[1].split(' ').map(p=>p.split(',').map(Number));let edges=points.map((p,i)=>[points[(i+1)%4][0]-p[0],points[(i+1)%4][1]-p[1]]);const cross=(a,b)=>a[0]*b[1]-a[1]*b[0];assert(cross(edges[0],edges[2])===0);if(s.op!=='trapezoid')assert(cross(edges[1],edges[3])===0);else assert.notStrictEqual(cross(edges[1],edges[3]),0);if(s.op==='rhombus')assert(edges.map(v=>v[0]**2+v[1]**2).every(v=>v===27925));break;}
 case 'solid':assert(r.includes('面は6つ、辺は12本、頂点は8つ'));assert.strictEqual((html.match(/class="solid-selected"/g)||[]).length,2);break;
 case 'position':assert.strictEqual(r,`（横 ${s.x}、たて ${s.y}、高さ ${s.z}）`);assert(html.includes(`cx="${55+45*s.x+15*s.y}" cy="${250-25*s.y-35*s.z}"`));break;
 case 'area':assert.strictEqual((html.match(/class="grid-first"/g)||[]).length,s.x*s.y);assert.strictEqual(r,`${s.y} cm × ${s.x} cm = ${s.x*s.y} cm²`);break;
 case 'angle':{assert.strictEqual(r,n+'°'+(n===90?'：直角':n===180?'：半回転':n===360?'：1回転':''));let ray=html.match(/<line x1="200" y1="190" x2="([^"]+)" y2="([^"]+)" class="angle-arm"/);let dx=Number(ray[1])-200,dy=190-Number(ray[2]);assert(Math.abs(Math.hypot(dx,dy)-140)<1e-8);let angle=(Math.atan2(dy,dx)*180/Math.PI+360)%360;assert(Math.abs(angle-(n%360))<1e-8||Math.abs(angle-(n%360)-360)<1e-8);break;}
 case 'change':assert.strictEqual((html.match(/class="stick-square"/g)||[]).length,n);assert.strictEqual(r,`棒の数：1 + 3 × ${n} = ${4+3*(n-1)}本`);break;
 case 'ratio':assert.strictEqual(r,`${s.b*n} ÷ ${s.b} = ${n}倍`);assert(html.includes(`width="${s.b*16}"`));assert(html.includes(`width="${s.b*n*16}"`));break;
 case 'table':assert.strictEqual((html.match(/class="count-red"/g)||[]).length,n+2);assert.strictEqual((html.match(/class="count-blue"/g)||[]).length,3);assert(html.includes(`<td>${n+5}</td>`));break;
 case 'graph':{let lines=[...html.matchAll(/<polyline points="([^"]+)"/g)].map(m=>m[1].split(' ').map(p=>p.split(',').map(Number)));const values=[[15,18,n,22],[10,12,15,14]];lines.forEach((points,j)=>points.forEach(([x,y],i)=>{assert.strictEqual(x,55+100*i);assert.strictEqual((240-y)/6,values[j][i]);}));assert.strictEqual(r,`11時は、場所A ${n}°C・場所B 15°C`);break;}
 default:throw new Error('Unknown kind '+kind);
 }
 checks++;
}
for(const [code,def] of Object.entries(ctx.BL.visuals.definitions)){
 const unit={code};let html=ctx.BL.visuals.render(unit),stage={innerHTML:''},events={};
 const panel={querySelector:()=>stage,querySelectorAll:()=>[],addEventListener:(k,v)=>events[k]=v,contains:()=>true};ctx.BL.visuals.bind(panel,unit);
 const values={...def.defaults};mathematicalCheck(def.kind,values,html);
 const input=(field,value)=>{values[field]=value;events.input({target:{value:String(value),getAttribute:k=>k==='data-visual-field'?field:null}});};
 const click=attrs=>events.click({target:{closest:()=>({hasAttribute:k=>k in attrs,getAttribute:k=>attrs[k]??null})}});
 function enumerate(index){if(index===(def.controls||[]).length){mathematicalCheck(def.kind,values,stage.innerHTML||html);sliderStates++;return;}const c=def.controls[index];for(let v=c[2];v<=c[3];v+=c[4]){input(c[0],v);enumerate(index+1);}}
 if(def.controls)enumerate(0);
 if(def.choices)for(const c of def.choices){values[c[0]]=c[1];click({'data-visual-field':c[0],'data-visual-value':c[1]});mathematicalCheck(def.kind,values,stage.innerHTML);if(def.controls)enumerate(0);}
 if(def.kind==='abacus')for(const key of ['h','t','o','d']){while(values[key]>0){click({'data-abacus':key,'data-step':'-1'});values[key]--;}for(let d=0;d<10;d++){if(d){click({'data-abacus':key,'data-step':'1'});values[key]++;}mathematicalCheck(def.kind,values,stage.innerHTML||html);}}
}
console.log('VISUAL_INDEPENDENT_MATH=PASS modules='+Object.keys(ctx.BL.visuals.definitions).length+' assertions='+checks+' slider_combinations='+sliderStates);
console.log('VISUAL_SHA256='+crypto.createHash('sha256').update(source).digest('hex'));
