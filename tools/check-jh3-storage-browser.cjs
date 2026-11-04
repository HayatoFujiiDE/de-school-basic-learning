'use strict';
// All records are synthetic and all profiles are disposable.
const fs=require('node:fs'),os=require('node:os'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const {pathToFileURL}=require('node:url'),{chromium}=require('./dependencies.cjs')('playwright');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const w={};for(const f of ['units.js','units-grade5.js','units-grade6.js','units-jh1.js','units-jh2.js','units-jh3.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'js',f),'utf8'),{window:w});
const records=Object.fromEntries(w.BL.data.units.map(u=>[u.code,{answers:Object.fromEntries(u.questions.map(q=>[q.id,{value:q.answer,correct:false}])),buddy:Object.fromEntries(u.buddy.map(b=>[b.id,true]))}]));
assert.equal(w.BL.data.units.length,190,'storage fixture uses the complete version7 catalogue');
const first=w.BL.data.units[0].code,added=w.BL.data.units[143].code;
assert.equal(added.slice(0,6),'835023','changed record belongs to the new course');
const envelope=version=>JSON.stringify({version,grade:9,mode:'js',interest:'all',progress:records,resume:added});
const scratch=fs.mkdtempSync(path.join(os.tmpdir(),'jh3-storage-'));
const chrome=process.env.BASIC_LEARNING_CHROME||'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
async function run(){
 const browser=await chromium.launch({headless:true,executablePath:chrome});let cases=0,positiveProbes=0;
 try{
  const fixtures=[
   ...['2','3','4','5','6','7'].map(version=>({name:'version-'+version,normal:true,raw:envelope(version),retained:{2:20,3:44,4:66,5:104,6:143,7:190}[version]})),
   {name:'version7-noop-write',normal:true,raw:envelope('7'),retained:190,noOpWrite:true},
   {name:'missing-jh3',remove:'units-jh3.js',missing:true},
   {name:'missing-registry',remove:'catalogue.js',missing:true},
   {name:'substituted',inject:'BL.data.units[143].code="8350233999999999";',missing:true},
   {name:'duplicate',inject:'BL.data.units[144].code=BL.data.units[143].code;',missing:true},
   {name:'wrong-grade',inject:'BL.data.units[143].grade=1;',missing:true},
   {name:'pending',inject:'BL.data.units[143].review.evidence="pending";'},
   {name:'invalid-coverage',inject:'BL.data.units[143].coverageCodes=["8250243110000000"];'},
   {name:'future',raw:envelope('8')},
   {name:'corrupt',raw:'{broken'},
   {name:'wrong-envelope',raw:JSON.stringify({version:'7',progress:[]})},
   {name:'read-failure',readFailure:true},
   {name:'write-failure',writeFailure:true}
  ];
  for(const f of fixtures){
   let source=html.replace('<head>','<head><base href="'+pathToFileURL(root+path.sep).href+'">');
   if(f.remove)source=source.replace('  <script src="js/'+f.remove+'" defer></script>','');
   if(f.inject){const script=path.join(scratch,f.name+'.js');fs.writeFileSync(script,f.inject);source=source.replace('  <script src="js/core.js" defer></script>','  <script src="'+pathToFileURL(script).href+'" defer></script>\n  <script src="js/core.js" defer></script>');}
   const file=path.join(scratch,f.name+'.html');fs.writeFileSync(file,source);
   const context=await browser.newContext({viewport:{width:390,height:844}}),page=await context.newPage();let errors=0;page.on('pageerror',()=>errors++);
   await context.route(/^https?:/,r=>r.abort());
   const raw=f.raw===undefined?envelope('4'):f.raw;
   await page.addInitScript(({raw,readFailure,writeFailure,noOpWrite})=>{
    localStorage.setItem('des.basic-learning.v1',raw);window.__writes=0;window.__removes=0;window.__clears=0;
    const get=Storage.prototype.getItem,set=Storage.prototype.setItem,remove=Storage.prototype.removeItem,clear=Storage.prototype.clear;
    // A retained native getter observes real bytes even when the public API is denied.
    window.__readSaved=()=>get.call(localStorage,'des.basic-learning.v1');
    Storage.prototype.setItem=function(k,v){window.__writes++;if(writeFailure)throw Error('synthetic write denial');if(noOpWrite)return;return set.call(this,k,v);};
    Storage.prototype.removeItem=function(k){window.__removes++;return remove.call(this,k);};
    Storage.prototype.clear=function(){window.__clears++;return clear.call(this);};
    if(readFailure)Storage.prototype.getItem=function(){throw Error('synthetic read denial');};
   },{raw,readFailure:Boolean(f.readFailure),writeFailure:Boolean(f.writeFailure),noOpWrite:Boolean(f.noOpWrite)});
   await page.goto(pathToFileURL(file).href+'#list/4');await page.waitForFunction(()=>Boolean(window.BL&&BL.core));
   const before=await page.evaluate(()=>({ready:BL.core.ready,readOnly:BL.core.readOnly,writes:__writes,removes:__removes,clears:__clears,retained:BL.core.units().filter(u=>BL.core.progress(u.code).percent===100).length}));
   if(f.normal){
    async function normalRoundtrip(){
     assert.equal(before.ready,true);assert.equal(before.readOnly,false);assert.equal(before.retained,f.retained);
     assert.equal(await page.locator('.unit-card').count(),20);
     await page.locator('[data-action=grade][data-grade="9"]').click();
     await page.waitForSelector('main[data-page=list][data-grade="9"]');assert.equal(await page.locator('.unit-card').count(),47);
     assert.match(await page.locator('.list-hero .eyebrow').innerText(),/^中学3年生 \/ 数学$/);
     const changeVersion7=JSON.parse(raw).version==='7';
     const saved=await page.evaluate(({code,changeVersion7,seed})=>{
      const c=BL.core;
      for(const u of c.units()){for(const q of u.questions)c.answer(u.code,q.id,q.answer);for(const b of u.buddy)c.explain(u.code,b.id,true);}
      const completeBefore=c.units().every(u=>c.progress(u.code).percent===100);
      let change=null;
      if(changeVersion7){
       const u=c.unit(code),q=u.questions.find(q=>q.type==='number'),b=u.buddy[0];
       if(!q||!b)throw Error('Changed-record fixture requires a numeric question and self-confirmation');
       // This valid, different answer and false confirmation cannot already exist in the seed.
       const value=q.answer+1;
       if(!Number.isFinite(value)||value===q.answer)throw Error('Changed-record fixture needs a distinct finite value');
       if(!c.validAnswer(q,value))throw Error('Changed numeric answer must remain valid input');
       c.answer(code,q.id,value);c.explain(code,b.id,false);
       change={code,question:q.id,buddy:b.id,value};
      }
      document.querySelector('[data-action=grade][data-grade="9"]').hidden=true;c.state.grade=4;c.save();
      const stored=JSON.parse(window.__readSaved()),record=change?stored.progress[code]:null;
      return {version:stored.version,units:c.units().length,records:Object.keys(stored.progress).length,completeBefore,grade:stored.grade,rawChanged:window.__readSaved()!==seed,change,
       value:change&&record.answers[change.question].value,correct:change&&record.answers[change.question].correct,confirmed:change&&record.buddy[change.buddy]};
     },{code:added,changeVersion7,seed:raw});
     assert.deepEqual({version:saved.version,units:saved.units,records:saved.records,completeBefore:saved.completeBefore},{version:'7',units:190,records:190,completeBefore:true});
     // A new page shares actual file storage but not the first page's init script or mocks.
     const again=await context.newPage();again.on('pageerror',()=>errors++);
     let restored;
     try{
      await again.goto(pathToFileURL(file).href+'#list/9');await again.waitForSelector('main[data-page="list"][data-grade="9"]');
      restored=await again.evaluate(change=>{
       const c=BL.core;
       if(!change)return {allComplete:c.units().every(u=>c.progress(u.code).percent===100)};
       const r=c.state.progress[change.code];
       return {value:r.answers[change.question].value,correct:r.answers[change.question].correct,confirmed:r.buddy[change.buddy]};
      },saved.change);
     }finally{await again.close();}
     if(changeVersion7){
      assert.equal(saved.value,saved.change.value,'changed numeric answer is persisted in real bytes');
      assert.equal(saved.correct,false,'different answer is recomputed');
      assert.equal(saved.confirmed,false,'revoked self-confirmation is persisted');
      assert.equal(saved.rawChanged,true,'version7 save must differ from its seed');
      assert.deepEqual(restored,{value:saved.change.value,correct:false,confirmed:false},'changed answer and confirmation survive a fresh document');
     }else assert.deepEqual(restored,{allComplete:true},'all migrated records survive a fresh document');
     assert.equal(saved.grade,4,'saved grade follows the local state before reopening');
    }
    if(f.noOpWrite){await assert.rejects(normalRoundtrip,{code:'ERR_ASSERTION',message:/changed numeric answer is persisted in real bytes/});positiveProbes++;}
    else await normalRoundtrip();
   }else if(f.writeFailure){
    assert.equal(before.ready,true);assert.equal(before.readOnly,false);assert.ok(before.writes>0);assert.ok(await page.locator('.storage-warning').isVisible());
    const pending=await page.evaluate(code=>{const c=BL.core,u=c.unit(code);c.answer(code,u.questions[0].id,u.questions[0].answer);return {ok:c.storageOK,correct:c.progress(code).correct};},added);
    assert.deepEqual(pending,{ok:false,correct:1});assert.equal(await page.evaluate(seed=>window.__readSaved()===seed,raw),true);
   }else{
    assert.equal(before.readOnly,true,f.name);assert.equal(before.writes,0);assert.equal(before.removes,0);assert.equal(before.clears,0);
    if(f.missing){assert.equal(before.ready,false);assert.equal(await page.locator('h1').innerText(),'教材を開けませんでした');assert.equal(await page.locator('.unit-card').count(),0);}
    else{assert.equal(before.ready,true);assert.ok(await page.locator('.storage-warning').isVisible());}
    const after=await page.evaluate(code=>{const c=BL.core,u=c.unit(code);c.state.version='7';c.save();c.reset();c.answer(code,u.questions[0].id,u.questions[0].answer);return {readOnly:c.readOnly,writes:__writes,removes:__removes,clears:__clears};},first);
    assert.deepEqual(after,{readOnly:true,writes:0,removes:0,clears:0});
    assert.equal(await page.evaluate(seed=>window.__readSaved()===seed,raw),true,'original bytes retained even when public reads fail');
   }
   assert.equal(await page.evaluate(()=>__removes),0,f.name+' no removal');assert.equal(await page.evaluate(()=>__clears),0,f.name+' no storage clear');
   assert.equal(errors,0,f.name+' JS errors');assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,f.name+' overflow');
   await context.close();cases++;
  }
  assert.equal(positiveProbes,1);
  console.log('JH3_STORAGE_BROWSER=PASS cases='+cases+' versions=2,3,4,5,6,7 total_records=190 missing_blocked=true read_failure_write_remove_clear_calls=0 readonly_original_bytes_preserved=true changed_v7_roundtrip=true noop_save_rejected=true positive_probes='+positiveProbes);
 }finally{await browser.close();fs.rmSync(scratch,{recursive:true,force:true});}
}
run().catch(error=>{console.error('JH3_STORAGE_BROWSER=FAIL '+error.message);process.exitCode=1;});
