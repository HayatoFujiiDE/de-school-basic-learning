'use strict';
const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const {pathToFileURL}=require('url');
const {chromium}=require('./dependencies.cjs')('playwright');
const root=path.resolve(__dirname,'..'),out=path.join(root,'output/lessons');fs.mkdirSync(out,{recursive:true});
const app=pathToFileURL(path.join(root,'index.html')).href;
const chrome=process.env.BASIC_LEARNING_CHROME||(process.platform==='darwin'?'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome':undefined);
const banned='点数|ランキング|順位|評価|成績|レベル|集中力|得意|苦手|上手|成長|データがありません|学びのバディ';
const action=name=>'[data-lesson-action="'+name+'"]';
let views=0,predictions=0,played=0;
async function go(page,code){await page.evaluate(code=>{location.hash='#unit/'+code;},code);await page.waitForFunction(code=>{const m=document.querySelector('main');return m&&m.dataset.page==='unit'&&m.dataset.unit===code;},code);}
async function audit(page,code){
 const m=await page.evaluate(pattern=>{const p=document.querySelector('[data-lesson-code]');const svg=p&&p.querySelector('svg');return {visible:!!p&&!!svg,overflow:document.documentElement.scrollWidth>innerWidth,bad:new RegExp(pattern).test(p?p.textContent:''),textOutside:svg?Array.from(svg.querySelectorAll('text')).filter(t=>{let b=t.getBBox();let v=svg.viewBox.baseVal;return b.x<v.x-1||b.y<v.y-1||b.x+b.width>v.width+1||b.y+b.height>v.height+1;}).map(t=>t.textContent):[]};},banned);
 assert.ok(m.visible,code+' diagram visible');assert.equal(m.overflow,false,code+' overflow');assert.equal(m.bad,false,code+' forbidden');assert.deepEqual(m.textOutside,[],code+' SVG labels inside viewBox');views++;
}
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:chrome});
 try{
 const context=await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
 const errors=[],requests=[];context.on('page',p=>p.on('pageerror',e=>errors.push(e.message)));
 await context.route(/^https?:/,r=>{if(!/^https:\/\/fonts\.(googleapis|gstatic)\.com\//.test(r.request().url()))requests.push(r.request().url());return r.abort();});
 const page=await context.newPage();await page.goto(app);await page.waitForSelector('main[data-page=list]');
 const items=await page.evaluate(()=>JSON.parse(JSON.stringify(BL.lessonScenes.items)));
 const codes=Object.keys(items);const added=JSON.parse(fs.readFileSync(path.join(root,'sources/grade5-lesson-manifest.json'),'utf8'));const grade6=JSON.parse(fs.readFileSync(path.join(root,'sources/grade6-lesson-manifest.json'),'utf8'));const jh1=JSON.parse(fs.readFileSync(path.join(root,'sources/jh1-lesson-manifest.json'),'utf8'));const legacy=Object.keys(JSON.parse(fs.readFileSync(path.join(root,'sources/lesson-review.json'),'utf8')).items);assert.deepEqual(codes.slice().sort(),legacy.concat(added.codes,grade6.codes,jh1.codes).sort(),'all expected lessons loaded');
 for(const width of [1440,1024,390]){
  await page.setViewportSize({width,height:1000});
  for(const mode of ['es','js']){
   await page.locator('[data-action=mode][data-mode='+mode+']').click();
   for(const code of codes){
    await go(page,code);await page.locator(action('reset')).click();
    assert.equal(await page.locator(action('play')).isDisabled(),true,'reduced motion disables sequential playback');
    for(let step=0;step<items[code].steps.length;step++){
      if(step)await page.locator(action('next')).click();
      assert.equal(await page.locator('[data-lesson-step-text]').textContent(),items[code].steps[step].text);
      await audit(page,code);
    }
    assert.equal(await page.locator(action('next')).isDisabled(),true);
    await page.locator(action('previous')).click();assert.ok((await page.locator('[data-lesson-step-count]').textContent()).startsWith(String(items[code].steps.length-1)));
    await page.locator(action('reset')).click();assert.equal(await page.locator(action('previous')).isDisabled(),true);
    if(width===390&&mode==='es'){
      // Put the tall card inside the viewport before clipping: offscreen fixed skip links must not enter captures.
      await page.locator('[data-action=lesson-jump]').click();
      assert.ok((await page.locator('[data-lesson-code]').boundingBox()).y>=0,'capture starts inside the viewport');
      await page.locator('[data-lesson-code]').screenshot({path:path.join(out,code+'-mobile.png')});
    }
   }
  }
  console.log('LESSON_VIEWPORT='+width+' MODES=es,js ALL_STEPS=PASS');
 }
 await page.setViewportSize({width:1440,height:1000});
 for(const code of codes){
  await go(page,code);const challenge=items[code].challenge;const correct=challenge.options.indexOf(challenge.answer),wrong=(correct+1)%challenge.options.length;
  const before=await page.evaluate(code=>BL.core.progress(code).percent,code);
  const form=page.locator('[data-lesson-prediction]');
  await form.locator('input[value="'+wrong+'"]').check();await form.locator('button[type=submit]').click();
  const first=await page.locator('[data-lesson-feedback]').textContent();assert.ok(first.length>0);
  await form.locator('input[value="'+correct+'"]').check();await form.locator('button[type=submit]').click();
  const second=await page.locator('[data-lesson-feedback]').textContent();assert.notEqual(first,second);assert.ok(second.includes(challenge.explanation));predictions++;
  await page.locator(action('try')).click();
  const transfer=await page.evaluate(({code,state})=>{const container=document.getElementById('unit-visual'),u=BL.core.unit(code);const old=container.innerHTML;const bad=BL.visuals.setState(container,u,{unknown:1});const unchanged=old===container.innerHTML;return {bad,unchanged,focus:container.contains(document.activeElement),progress:BL.core.progress(code).percent,valid:BL.visuals.setState(container,u,state)};},{code,state:items[code].tryIt.state});
  assert.deepEqual(transfer,{bad:false,unchanged:true,focus:true,progress:before,valid:true});
 }
 // Guard probes act on synthetic copies in this isolated page only.
 const guards=await page.evaluate(()=>{
  const code='8250243250000000',unit=BL.core.unit(code),record=BL.lessonReview.items[code],original=record.evidence;
  record.evidence='pending';const pending=BL.lessons.render(unit)==='';record.evidence=original;
  const draw=BL.lessonScenes.render;BL.lessonScenes.render=()=>'<svg xmlns="http://www.w3.org/2000/svg"><script>window.pwned=true</script></svg>';const badSvg=BL.lessons.render(unit)==='';BL.lessonScenes.render=draw;
  const old=record.video;record.video='https://example.invalid/a.mp4';const badUrl=!BL.lessons.render(unit).includes('<video');record.video=old;
  return {pending,badSvg,badUrl,unexecuted:!window.pwned};
 });assert.deepEqual(guards,{pending:true,badSvg:true,badUrl:true,unexecuted:true});
 // Real animation and local media playback in normal-motion context, with a controlled clock for SVG.
 const motion=await context.newPage();await motion.emulateMedia({reducedMotion:'no-preference'});await motion.clock.install();await motion.goto(app);await motion.waitForSelector('main[data-page=list]');
 for(const code of codes){
  await go(motion,code);await motion.locator(action('reset')).click();
  const before=await motion.locator('[data-lesson-stage]').innerHTML();
  await motion.locator(action('play')).click();await motion.clock.runFor(2600);
  const moving=await motion.locator('[data-lesson-stage]').innerHTML();assert.notEqual(moving,before,code+' geometry animates');
  assert.equal(await motion.evaluate(()=>document.activeElement.getAttribute('data-lesson-action')),'play','playback preserves focus');
  await motion.locator(action('play')).click();const frozen=await motion.locator('[data-lesson-stage]').innerHTML();await motion.clock.runFor(600);assert.equal(await motion.locator('[data-lesson-stage]').innerHTML(),frozen,'pause stops geometry');
 }
 await go(motion,'8250243250000000');await motion.locator(action('reset')).click();await motion.locator(action('play')).click();await motion.clock.runFor(16000);assert.equal(await motion.locator(action('play')).getAttribute('aria-pressed'),'false','stops at end');assert.equal(await motion.locator('[data-lesson-step-count]').textContent(),'4 / 4');
 await motion.locator(action('reset')).click();await motion.locator(action('play')).click();await motion.clock.runFor(500);
 await motion.evaluate(()=>{Object.defineProperty(document,'hidden',{configurable:true,get:()=>true});document.dispatchEvent(new Event('visibilitychange'));});
 assert.equal(await motion.locator(action('play')).getAttribute('aria-pressed'),'false','visibility stops');await motion.evaluate(()=>delete document.hidden);
 await motion.locator(action('play')).click();await motion.evaluate(()=>{location.hash='#list/5';});await motion.waitForSelector('main[data-page=list]');await motion.clock.runFor(5000);assert.equal(await motion.locator('[data-lesson-stage]').count(),0,'navigation cleans up');await motion.close();
 const videos=await context.newPage();await videos.emulateMedia({reducedMotion:'no-preference'});await videos.goto(app);await videos.waitForSelector('main[data-page=list]');
 for(const code of ['8250243150000000','8250243240000000','8250243250000000','8250243310000000'].concat(added.videos,grade6.videos)){
  await go(videos,code);const video=videos.locator('video');
  const initial=await video.evaluate(v=>({paused:v.paused,autoplay:v.autoplay,preload:v.preload,controls:v.controls,inline:v.playsInline}));
  assert.deepEqual(initial,{paused:true,autoplay:false,preload:'none',controls:true,inline:true});
  await videos.locator('[data-lesson-video] summary').click();await video.evaluate(v=>{v.muted=true;return v.play();});
  await videos.waitForFunction(()=>{const v=document.querySelector('video');return v.currentTime>.1&&v.readyState>=2;});
  assert.equal(await video.evaluate(v=>v.videoWidth),1280);played++;
  await videos.locator('[data-lesson-video] summary').click();await videos.waitForFunction(()=>document.querySelector('video').paused);
 }
 assert.equal(errors.length,0,JSON.stringify(errors));assert.equal(requests.length,0,'unexpected network');
 const result={lessons:codes.length,steps:codes.reduce((n,c)=>n+items[c].steps.length,0),checkedViews:views,predictions,localVideosPlayed:played,viewports:[1440,1024,390],modes:['es','js'],errors:errors.length,unexpectedRequests:requests.length,offline:true};
 fs.writeFileSync(path.join(out,'check.json'),JSON.stringify(result,null,2)+'\n');console.log('LESSON_BROWSER_CHECK='+JSON.stringify(result));
 await context.close();
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});
