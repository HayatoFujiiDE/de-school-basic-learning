'use strict';
// All records are synthetic and all profiles are disposable.
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url'),{chromium}=require('./dependencies.cjs')('playwright');
const root=path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8').replace(/data-catalogue-version="[0-9]+"/,'data-catalogue-version="6"').replace(/^.*jh3.*\n/gm,'');
const w={};for(const f of ['units.js','units-grade5.js','units-grade6.js','units-jh1.js','units-jh2.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'js',f),'utf8'),{window:w});
const records=Object.fromEntries(w.BL.data.units.map(u=>[u.code,{answers:Object.fromEntries(u.questions.map(q=>[q.id,{value:q.answer,correct:false}])),buddy:Object.fromEntries(u.buddy.map(b=>[b.id,true]))}]));
const first=w.BL.data.units[0].code,added=w.BL.data.units[104].code;
const envelope=version=>JSON.stringify({version,grade:8,mode:'js',interest:'all',progress:records,resume:added});
const scratch=fs.mkdtempSync(path.join(os.tmpdir(),'jh2-storage-'));
const registryPath=path.join(scratch,'catalogue-v6.js');
fs.writeFileSync(registryPath,'window.BL=window.BL||{};BL.expectedCatalogue='+fs.readFileSync(path.join(root,'sources/catalogue-v6.json'),'utf8')+';');
const chrome=process.env.BASIC_LEARNING_CHROME||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
async function run(){
 const browser=await chromium.launch({headless:true,executablePath:chrome});let cases=0;
 try{
  const fixtures=[
   ...['2','3','4','5','6'].map(version=>({name:'version-'+version,normal:true,raw:envelope(version),retained:{2:20,3:44,4:66,5:104,6:143}[version]})),
   {name:'missing-jh2',remove:'units-jh2.js',missing:true},
   {name:'missing-registry',remove:'catalogue.js',missing:true},
   {name:'substituted',inject:'BL.data.units[104].code="8350223999999999";',missing:true},
   {name:'duplicate',inject:'BL.data.units[105].code=BL.data.units[104].code;',missing:true},
   {name:'wrong-grade',inject:'BL.data.units[104].grade=1;',missing:true},
   {name:'pending',inject:'BL.data.units[104].review.evidence="pending";'},
   {name:'invalid-coverage',inject:'BL.data.units[104].coverageCodes=["8250243110000000"];'},
   {name:'future',raw:envelope('7')},
   {name:'corrupt',raw:'{broken'},
   {name:'wrong-envelope',raw:JSON.stringify({version:'6',progress:[]})},
   {name:'read-failure',readFailure:true},
   {name:'write-failure',writeFailure:true}
  ];
  for(const f of fixtures){
   let source=html.replace('<head>','<head><base href="'+pathToFileURL(root+path.sep).href+'">');
   if(f.remove)source=source.replace('  <script src="js/'+f.remove+'" defer></script>','');
   source=source.replace('src="js/catalogue.js"','src="'+pathToFileURL(registryPath).href+'"');
   if(f.inject){const script=path.join(scratch,f.name+'.js');fs.writeFileSync(script,f.inject);source=source.replace('  <script src="js/core.js" defer></script>','  <script src="'+pathToFileURL(script).href+'" defer></script>\n  <script src="js/core.js" defer></script>');}
   const file=path.join(scratch,f.name+'.html');fs.writeFileSync(file,source);
   const context=await browser.newContext({viewport:{width:390,height:844}}),page=await context.newPage();let errors=0;page.on('pageerror',()=>errors++);
   await context.route(/^https?:/,r=>r.abort());
   const raw=f.raw===undefined?envelope('4'):f.raw;
   await page.addInitScript(({raw,readFailure,writeFailure})=>{
    localStorage.setItem('des.basic-learning.v1',raw);window.__writes=0;window.__removes=0;
    const set=Storage.prototype.setItem,remove=Storage.prototype.removeItem;
    Storage.prototype.setItem=function(k,v){window.__writes++;if(writeFailure)throw Error('synthetic write denial');return set.call(this,k,v);};
    Storage.prototype.removeItem=function(k){window.__removes++;return remove.call(this,k);};
    if(readFailure)Storage.prototype.getItem=function(){throw Error('synthetic read denial');};
   },{raw,readFailure:Boolean(f.readFailure),writeFailure:Boolean(f.writeFailure)});
   await page.goto(pathToFileURL(file).href+'#list/4');await page.waitForFunction(()=>Boolean(window.BL&&BL.core));
   const before=await page.evaluate(()=>({ready:BL.core.ready,readOnly:BL.core.readOnly,writes:__writes,removes:__removes,retained:BL.core.units().filter(u=>BL.core.progress(u.code).percent===100).length}));
   if(f.normal){
    assert.equal(before.ready,true);assert.equal(before.readOnly,false);assert.equal(before.retained,f.retained);
    assert.equal(await page.locator('.unit-card').count(),20);
    await page.locator('[data-action=grade][data-grade="8"]').click();
    await page.waitForSelector('main[data-page=list][data-grade="8"]');assert.equal(await page.locator('.unit-card').count(),39);
    assert.match(await page.locator('.list-hero .eyebrow').innerText(),/^中学2年生 \/ 数学$/);
    const retained=await page.evaluate(()=>{
     const c=BL.core;for(const u of c.units()){for(const q of u.questions)c.answer(u.code,q.id,q.answer);for(const b of u.buddy)c.explain(u.code,b.id,true);}
     document.querySelector('[data-action=grade][data-grade="8"]').hidden=true;c.state.grade=4;c.save();
     const saved=JSON.parse(localStorage.getItem('des.basic-learning.v1'));
     return {version:saved.version,units:c.units().length,records:Object.keys(saved.progress).length,allComplete:c.units().every(u=>c.progress(u.code).percent===100)};
    });assert.deepEqual(retained,{version:'6',units:143,records:143,allComplete:true});
    // Reload without reseeding by removing this page's initialization script via a
    // second page in the same disposable context (page scripts are not inherited).
    const again=await context.newPage();again.on('pageerror',()=>errors++);await again.goto(pathToFileURL(file).href+'#list/8');await again.waitForSelector('main[data-grade="8"]');
    assert.equal(await again.evaluate(()=>BL.core.units().every(u=>BL.core.progress(u.code).percent===100)),true,'all records survive a fresh document');await again.close();
   }else if(f.writeFailure){
    assert.equal(before.ready,true);assert.equal(before.readOnly,false);assert.ok(before.writes>0);assert.ok(await page.locator('.storage-warning').isVisible());
    const pending=await page.evaluate(code=>{const c=BL.core,u=c.unit(code);c.answer(code,u.questions[0].id,u.questions[0].answer);return {ok:c.storageOK,correct:c.progress(code).correct};},added);
    assert.deepEqual(pending,{ok:false,correct:1});assert.equal(await page.evaluate(()=>localStorage.getItem('des.basic-learning.v1')),raw);
   }else{
    assert.equal(before.readOnly,true,f.name);assert.equal(before.writes,0);assert.equal(before.removes,0);
    if(f.missing){assert.equal(before.ready,false);assert.equal(await page.locator('h1').innerText(),'教材を開けませんでした');assert.equal(await page.locator('.unit-card').count(),0);}
    else{assert.equal(before.ready,true);assert.ok(await page.locator('.storage-warning').isVisible());}
    const after=await page.evaluate(code=>{const c=BL.core,u=c.unit(code);c.state.version='6';c.save();c.reset();c.answer(code,u.questions[0].id,u.questions[0].answer);return {readOnly:c.readOnly,writes:__writes,removes:__removes};},first);
    assert.deepEqual(after,{readOnly:true,writes:0,removes:0});
    if(!f.readFailure)assert.equal(await page.evaluate(()=>localStorage.getItem('des.basic-learning.v1')),raw,'original bytes retained');
   }
   assert.equal(errors,0,f.name+' JS errors');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,f.name+' overflow');
   await context.close();cases++;
  }
  console.log('JH2_STORAGE_BROWSER=PASS cases='+cases+' versions=2,3,4,5,6 total_records=143 missing_blocked=true failed_read_write_calls=0 roundtrip=true');
 }finally{await browser.close();fs.rmSync(scratch,{recursive:true,force:true});}
}
run().catch(error=>{console.error('JH2_STORAGE_BROWSER=FAIL '+error.message);process.exitCode=1;});
