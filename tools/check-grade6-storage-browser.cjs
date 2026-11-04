'use strict';
// Fresh isolated browser storage only; never reads a real child's profile.
const fs=require('fs'),os=require('os'),path=require('path'),vm=require('vm'),assert=require('assert/strict');
const {pathToFileURL}=require('url');const {chromium}=require('./dependencies.cjs')('playwright');
const root=path.resolve(__dirname,'..');const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const w={};for(const f of ['units.js','units-grade5.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'js',f),'utf8'),{window:w});
const records=Object.fromEntries(w.BL.data.units.map(u=>[u.code,{answers:Object.fromEntries(u.questions.map(q=>[q.id,{value:q.answer,correct:false}])),buddy:Object.fromEntries(u.buddy.map(b=>[b.id,true]))}]));
const original=JSON.stringify({version:'3',grade:5,mode:'es',interest:'all',progress:records,resume:w.BL.data.units[20].code});
const scratch=fs.mkdtempSync(path.join(os.tmpdir(),'grade6-storage-browser-'));
const chrome=process.env.BASIC_LEARNING_CHROME||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
async function run(){const browser=await chromium.launch({headless:true,executablePath:chrome});let cases=0;try{
 const fixtures=[
  {name:'normal',normal:true},
  {name:'missing-grade6',remove:'units-grade6.js',missing:true},
  {name:'missing-registry',remove:'catalogue.js',missing:true},
  {name:'substituted-code',inject:'BL.data.units[44].code="8250263999999999";',missing:true},
  {name:'pending',inject:'BL.data.units[44].review.evidence="pending";'},
  {name:'future',raw:JSON.stringify({...JSON.parse(original),version:'99'})},
  {name:'corrupt-json',raw:'{broken'},
  {name:'corrupt-envelope',raw:JSON.stringify({version:'4',progress:[]})},
  {name:'read-failure',readFailure:true}
 ];
 for(const f of fixtures){
  let source=html.replace('<head>','<head><base href="'+pathToFileURL(root+path.sep).href+'">');
  if(f.remove)source=source.replace('  <script src="js/'+f.remove+'" defer></script>','');
  if(f.inject){
   // Defer order is important: this local script runs after data, before core.
   fs.writeFileSync(path.join(scratch,f.name+'.js'),f.inject);
   source=source.replace('  <script src="js/core.js" defer></script>','  <script src="'+pathToFileURL(path.join(scratch,f.name+'.js')).href+'" defer></script>\n  <script src="js/core.js" defer></script>');
  }
  const file=path.join(scratch,f.name+'.html');fs.writeFileSync(file,source);
  const context=await browser.newContext({viewport:{width:390,height:844}});const page=await context.newPage();let errors=0;page.on('pageerror',()=>errors++);
  await context.route('https://**/*',r=>r.abort());
  await page.addInitScript(({raw,readFailure})=>{
   localStorage.setItem('des.basic-learning.v1',raw);window.__writes=0;window.__removes=0;
   const set=Storage.prototype.setItem,remove=Storage.prototype.removeItem;
   Storage.prototype.setItem=function(k,v){window.__writes++;return set.call(this,k,v);};
   Storage.prototype.removeItem=function(k){window.__removes++;return remove.call(this,k);};
   if(readFailure)Storage.prototype.getItem=function(){throw new Error('synthetic read blocked');};
  },{raw:f.raw===undefined?original:f.raw,readFailure:Boolean(f.readFailure)});
  await page.goto(pathToFileURL(file).href+'#list/5');await page.waitForFunction(()=>Boolean(window.BL&&BL.core));
  const before=await page.evaluate(()=>({ready:BL.core.ready,readOnly:BL.core.readOnly,writes:window.__writes,removes:window.__removes}));
  if(f.normal){assert.equal(before.ready,true);assert.equal(before.readOnly,false);assert.equal(await page.locator('.unit-card').count(),24);assert.equal(await page.evaluate(()=>BL.core.units().filter(u=>BL.core.gradeOf(u)<6).every(u=>BL.core.progress(u.code).percent===100)),true);
   const retained=await page.evaluate(()=>{const c=BL.core;for(const u of c.units(6)){for(const q of u.questions)c.answer(u.code,q.id,q.answer);for(const b of u.buddy)c.explain(u.code,b.id,true);}document.querySelector('[data-action=grade][data-grade="6"]').hidden=true;c.state.grade=4;c.save();const record=JSON.parse(localStorage.getItem('des.basic-learning.v1'));return {units:c.units().length,records:Object.keys(record.progress).length,allComplete:c.units().every(u=>c.progress(u.code).percent===100)};});assert.deepEqual(retained,{units:66,records:66,allComplete:true},'hide grade entry without removing catalogue or records');}
  else{
   assert.equal(before.readOnly,true,f.name);assert.equal(before.writes,0,f.name);assert.equal(before.removes,0,f.name);
   if(f.missing){assert.equal(before.ready,false);assert.equal(await page.locator('h1').innerText(),'教材を開けませんでした');assert.equal(await page.locator('.unit-card').count(),0);}
   else{assert.equal(before.ready,true);assert.ok(await page.locator('.storage-warning').isVisible());assert.ok((await page.locator('.storage-warning').innerText()).includes('今回の回答は残りません'));}
   const after=await page.evaluate(()=>{const c=BL.core,u=c.units()[0];c.state.version='4';c.save();c.reset();c.answer(u.code,u.questions[0].id,u.questions[0].answer);return {readOnly:c.readOnly,writes:window.__writes,removes:window.__removes};});
   assert.deepEqual(after,{readOnly:true,writes:0,removes:0},f.name+' never writes/removes');
   if(!f.readFailure)assert.equal(await page.evaluate(()=>localStorage.getItem('des.basic-learning.v1')),f.raw===undefined?original:f.raw,f.name+' original byte string retained');
  }
  assert.equal(errors,0,f.name+' JavaScript errors');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,f.name+' mobile overflow');
  await context.close();cases++;
 }
 console.log('GRADE6_STORAGE_BROWSER=PASS cases='+cases+' old_records=44 missing_files_blocked=true pending_read_only=true future_and_corrupt_preserved=true failed_read_write_calls=0');
}finally{await browser.close();fs.rmSync(scratch,{recursive:true,force:true});}}
run().catch(error=>{console.error('GRADE6_STORAGE_BROWSER=FAIL '+error.message);process.exitCode=1;});
