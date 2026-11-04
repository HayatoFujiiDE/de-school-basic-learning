'use strict';
// Real button events, disposable storage, and injected RNG faults only.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url'),{chromium}=require('./dependencies.cjs')('playwright');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const code='8350233411200000',other='8350233411100000',limit=4294967264;
const triples=[];for(let i=1;i<=6;i++)for(let j=i+1;j<=7;j++)for(let k=j+1;k<=8;k++)triples.push([i,j,k]);
assert.equal(triples.length,56);assert.equal(new Set(triples.map(a=>a.join(','))).size,56);
assert.equal(limit%56,0);assert.equal(limit/56,76695844);assert.equal(2**32-limit,32);
const contract=JSON.parse(fs.readFileSync(path.join(root,'sources/jh3-visual-contract.json'),'utf8'));
assert.deepEqual(contract.samplingAction.combinations,triples,'independent combinations');
for(let id=1;id<=8;id++)assert.equal(triples.filter(a=>a.includes(id)).length,21,'each item has equal inclusion probability');
async function run(){
 const browser=await chromium.launch({headless:true,executablePath:process.env.BASIC_LEARNING_CHROME||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
 try{
  const context=await browser.newContext({viewport:{width:390,height:900}}),page=await context.newPage();
  const errors=[],external=[];page.on('pageerror',e=>errors.push(e.name));
  await context.route(/^https?:/,r=>{if(!/^https:\/\/fonts\.(googleapis|gstatic)\.com\//.test(r.request().url()))external.push(new URL(r.request().url()).hostname);return r.abort();});
  await page.addInitScript(()=>{
   window.__storageWrites=0;window.__storageRemoves=0;
   const set=Storage.prototype.setItem,remove=Storage.prototype.removeItem;
   Storage.prototype.setItem=function(k,v){window.__storageWrites++;return set.call(this,k,v);};
   Storage.prototype.removeItem=function(k){window.__storageRemoves++;return remove.call(this,k);};
  });
  await page.goto(pathToFileURL(path.join(root,'index.html')).href+'#unit/'+code);
  await page.waitForSelector('main[data-page="unit"][data-unit="'+code+'"]');
  const button=()=>page.locator('button[data-jh3-sample]'),status=()=>page.locator('[data-jh3-sample-status]'),source=()=>page.locator('[data-jh3-sample-source]'),range=()=>page.locator('input[data-visual-field="sample"]');
  assert.equal(await button().count(),1);assert.equal(await button().innerText(),'無作為に3個選ぶ');
  assert.equal(await status().getAttribute('role'),'status');assert.equal(await status().getAttribute('aria-live'),'polite');
  assert.equal(await range().getAttribute('min'),'1');assert.equal(await range().getAttribute('max'),'56');
  const saved=()=>page.evaluate(()=>({raw:localStorage.getItem('des.basic-learning.v1'),writes:__storageWrites,removes:__storageRemoves,progress:JSON.stringify(BL.core.state.progress)}));
  const original=await saved();
  let cases=0;
  async function reset(){await page.locator('[data-visual-reset]').click();assert.equal(await range().inputValue(),'1');}
  async function mathematicalState(){return page.evaluate(code=>{
   const c=document.getElementById('unit-visual'),memory=document.createElement('div');memory.innerHTML=BL.visuals.render(BL.core.unit(code));
   return {value:c.querySelector('input[data-visual-field="sample"]').value,memoryValue:memory.querySelector('input[data-visual-field="sample"]').value,svg:c.querySelector('svg').outerHTML,selected:Array.from(c.querySelectorAll('[id^="jh3-visual-sampling-part-"]')).filter(e=>e.getAttribute('stroke')==='#ad672b').map(e=>Number(e.id.split('-').pop())),values:[0,1,2].map(i=>Number(c.querySelector('#jh3-visual-sampling-selected-'+i).textContent)),sum:c.querySelector('#jh3-visual-sampling-sum').textContent,mean:c.querySelector('#jh3-visual-sampling-mean').textContent};
  },code);}
  async function assertSample(value){const actual=await mathematicalState(),ids=triples[value-1],values=ids.map(i=>[2,4,4,6,8,8,10,12][i-1]),sum=values.reduce((a,b)=>a+b,0);assert.equal(actual.value,String(value));assert.equal(actual.memoryValue,String(value),'private visual memory agrees with visible input');assert.deepEqual(actual.selected,ids,'actual selected diagram IDs');assert.deepEqual(actual.values,values,'actual sample table values');assert.equal(actual.sum,'合計 '+sum+' mm');assert.equal(actual.mean,'平均 '+(sum%3?sum+'/3':sum/3)+' mm');return actual;}
  async function assertSuccess(){assert.equal(await source().innerText(),'無作為に選んだ標本');assert.ok((await status().innerText()).includes('無作為に選びました'),'fresh visible draw success');}
  async function stub(values,mode){
   await page.evaluate(({values,mode})=>{
    window.__rngCalls=0;window.__rngBytes=0;
    if(!window.__realRandom)window.__realRandom=crypto.getRandomValues.bind(crypto);
    Object.defineProperty(crypto,'getRandomValues',{configurable:true,writable:true,value:mode==='missing'?undefined:function(array){
     window.__rngCalls++;window.__rngBytes+=array.byteLength;
     if(!(array instanceof Uint32Array)||array.length!==1)throw Error('Wrong sampling buffer');
     if(mode==='throw')throw Error('synthetic RNG unavailable');
     if(mode==='exhausted'&&window.__rngCalls>8)throw Error('test rejects a ninth RNG request');
     array[0]=values[Math.min(window.__rngCalls-1,values.length-1)];return array;
    }});
   },{values,mode});
  }
  async function counts(){return page.evaluate(()=>({calls:__rngCalls,bytes:__rngBytes}));}
  async function stable(){assert.deepEqual(await saved(),original,'sampling must not change saved or in-memory progress');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);}
  // Real DOM mutations demonstrate that controls alone cannot satisfy this audit.
  await reset();await assertSample(1);
  await range().evaluate(e=>{e.value='2';});await assert.rejects(()=>assertSample(2),/private visual memory/);await range().evaluate(e=>{e.value='1';});
  await page.locator('#jh3-visual-sampling-selected-0').evaluate(e=>{e.textContent='99';});await assert.rejects(()=>assertSample(1),/actual sample table values/);await page.locator('#jh3-visual-sampling-selected-0').evaluate(e=>{e.textContent='2';});
  await page.locator('#jh3-visual-sampling-part-1').evaluate(e=>{e.setAttribute('stroke','#a8b3a2');});await assert.rejects(()=>assertSample(1),/actual selected diagram IDs/);await page.locator('#jh3-visual-sampling-part-1').evaluate(e=>{e.setAttribute('stroke','#ad672b');});await assertSample(1);await stable();
  // Native API must work in the actual file:// environment, without requiring a new result.
  await reset();await button().click();
  assert.ok(+await range().inputValue()>=1&&+await range().inputValue()<=56);
  await assertSample(+await range().inputValue());
  const nativeStatus=await status().innerText();assert.ok(nativeStatus.includes('無作為')&&nativeStatus.length>10,'native result is visibly described');
  assert.equal(await source().innerText(),'無作為に選んだ標本');
  assert.equal(await button().evaluate(b=>document.activeElement===b),true,'focus returns to freshly rendered button');
  await stable();cases++;
  // Boundary values and each of the 56 groups exercise the real click path.
  const values=[...Array.from({length:56},(_,i)=>i),limit-1];
  for(const value of values){
   await reset();await stub([value]);await button().click();
   assert.equal(await range().inputValue(),String(value%56+1),'accepted integer selects expected group');
   await assertSample(value%56+1);await assertSuccess();
   assert.deepEqual(await counts(),{calls:1,bytes:4});
   assert.equal(await button().evaluate(b=>document.activeElement===b),true);
   await stable();cases++;
  }
  await reset();await stub([limit,2**32-1,55]);await button().click();
  await assertSample(56);await assertSuccess();assert.deepEqual(await counts(),{calls:3,bytes:12});await stable();cases++;
  // Identical repeated group is a successful new draw, never an unbounded retry.
  await status().evaluate(e=>{e.textContent='検査用：抽出前';});await source().evaluate(e=>{e.textContent='決めて選ぶ例';});
  await stub([55]);await button().click();await assertSample(56);await assertSuccess();assert.deepEqual(await counts(),{calls:1,bytes:4});await stable();cases++;
  // Manual interaction/reset clears actual-draw provenance.
  await range().focus();await range().press('ArrowLeft');assert.equal(await range().inputValue(),'55');
  assert.equal(await source().innerText(),'決めて選ぶ例','manual provenance');assert.ok(!(await status().innerText()).includes('選びました'));
  await reset();assert.equal(await source().innerText(),'決めて選ぶ例','reset provenance');assert.ok(!(await status().innerText()).includes('選びました'));cases+=2;
  // Reset directly after an actual draw, without the manual input clearing its label first.
  await stub([55]);await button().click();await assertSample(56);await assertSuccess();await reset();await assertSample(1);assert.equal(await source().innerText(),'決めて選ぶ例');assert.equal(await status().innerText(),'');await stable();cases++;
  // All failure paths leave selected mathematical state and record unchanged.
  await stub([55]);await button().click();await assertSample(56);await assertSuccess();
  for(const mode of ['missing','throw','exhausted']){
   await stub([limit],mode);const before=await mathematicalState();await button().click();
   assert.deepEqual(await mathematicalState(),before,'failure preserves controls, memory, selected diagram and arithmetic');
   assert.deepEqual(await counts(),{calls:mode==='missing'?0:mode==='throw'?1:8,bytes:mode==='missing'?0:mode==='throw'?4:32});
   const notice=await status().innerText();assert.ok(notice.length>10&&!notice.includes('選びました'),'failure notice, not a success');
   await stable();cases++;
  }
  // Rejecting setState must not turn a draw into success or move focus.
  await stub([1]);const rejectedBefore=await mathematicalState();
  const guard=await page.evaluate(code=>{
   const original=BL.visuals.setState,range=document.querySelector('input[data-visual-field="sample"]'),button=document.querySelector('[data-jh3-sample]');
   const before=range.value;range.focus();BL.visuals.setState=()=>false;button.dispatchEvent(new MouseEvent('click',{bubbles:true}));BL.visuals.setState=original;
   return {before,after:range.value,focus:document.activeElement===range,status:document.querySelector('[data-jh3-sample-status]').textContent};
  },code);
  assert.equal(guard.before,guard.after);assert.equal(guard.focus,true);assert.ok(!guard.status.includes('選びました'));assert.deepEqual(await mathematicalState(),rejectedBefore);await stable();cases++;
  // Binding twice must still make exactly one RNG call per real click.
  await page.evaluate(code=>{const c=document.getElementById('unit-visual'),u=BL.core.unit(code);BL.visuals.bind(c,u);BL.visuals.bind(c,u);},code);
  await stub([1]);await button().click();assert.deepEqual(await counts(),{calls:1,bytes:4});await assertSample(2);await assertSuccess();await stable();cases++;
  // Reuse the same container with a different real unit to test listener cleanup.
  await stub([1]);
  const rebound=await page.evaluate(({code,other})=>{
   const c=document.getElementById('unit-visual'),u=BL.core.unit(other);
   c.innerHTML=BL.visuals.render(u);BL.visuals.bind(c,u);
   const probe=document.createElement('button');probe.setAttribute('data-jh3-sample','');c.appendChild(probe);probe.click();probe.remove();
   const calls=__rngCalls;const original=BL.core.unit(code);c.innerHTML=BL.visuals.render(original);BL.visuals.bind(c,original);
   return {calls,restored:!!c.querySelector('[data-jh3-sample]')};
  },{code,other});
  assert.deepEqual(rebound,{calls:0,restored:true});await stable();cases++;
  await page.evaluate(()=>{Object.defineProperty(crypto,'getRandomValues',{configurable:true,writable:true,value:__realRandom});});
  assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
  console.log('JH3_RANDOM_SAMPLING=PASS cases='+cases+' groups=56 each_item_groups=21 native_file_api=true rejected_values=32 max_attempts=8 same_sample=true state_preserved=true progress_unchanged=true focus=true duplicate_bind=false stale_listener=false math_surface_positive_probes=3 errors=0 external_requests=0');
 }finally{await browser.close();}
}
run().catch(error=>{console.error(error.stack);process.exitCode=1;});
