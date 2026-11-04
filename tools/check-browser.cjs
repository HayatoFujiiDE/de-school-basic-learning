'use strict';
const fs=require('fs');
const path=require('path');
const {pathToFileURL}=require('url');
const assert=require('assert/strict');
const {chromium}=require('./dependencies.cjs')('playwright');
const root=path.resolve(__dirname,'..');
const output=path.join(root,'output/playwright');
fs.mkdirSync(output,{recursive:true});
const url=pathToFileURL(path.join(root,'index.html')).href;
const chrome=process.env.BASIC_LEARNING_CHROME || (process.platform==='darwin'?'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome':undefined);
const banned='点数|ランキング|順位|評価|成績|レベル|集中力|得意|苦手|上手|成長|データがありません|学びのバディ';
let visited=0,answered=0,dialogues=0,visuals=0;
const gradeFor=code=>/^835021[0-9A-Z]{10}$/.test(code)?7:Number(code[5]);
async function metrics(page){return page.evaluate(pattern=>{
  const bad=new RegExp(pattern,'g');
  const attrs=Array.from(document.querySelectorAll('[aria-label],[title],[placeholder]')).map(e=>[e.getAttribute('aria-label'),e.getAttribute('title'),e.getAttribute('placeholder')].join(' ')).join(' ');
  const copy=document.body.innerText+' '+attrs;
  return {length:document.body.innerText.length,forbidden:(copy.match(bad)||[]).length,overflow:document.documentElement.scrollWidth>innerWidth,heading:document.querySelectorAll('main h1').length};
},banned);}
async function audit(page,context){const m=await metrics(page);assert.ok(m.length>80,context+': nonempty visible UI');assert.equal(m.forbidden,0,context+': forbidden copy');assert.equal(m.overflow,false,context+': horizontal overflow');assert.equal(m.heading,1,context+': one visible main heading');visited++;}
async function waitRoute(page,hash){if(hash==='#list')hash='#list/'+await page.evaluate(()=>BL.core.state.grade);const match=/^#(unit|practice|result|buddy)\/([0-9A-Z]{16})$/.exec(hash);const expectedPage=match?match[1]:/^#list\/[4567]$/.test(hash)?'list':hash==='#paused'?'paused':'missing';const expectedCode=match?match[2]:'';const expectedGrade=match?String(gradeFor(match[2])):/^#list\/[4567]$/.test(hash)?hash.slice(-1):null;await page.waitForFunction(({hash,expectedPage,expectedCode,expectedGrade})=>{const main=document.querySelector('main');return location.hash===hash && main && main.dataset.page===expectedPage && main.dataset.unit===expectedCode && (!expectedGrade || main.dataset.grade===expectedGrade);},{hash,expectedPage,expectedCode,expectedGrade});}
async function navigate(page,hash){await page.evaluate(h=>{location.hash=h;},hash);await waitRoute(page,hash);}
async function moveRange(range){
  const start=Number(await range.inputValue()),min=Number(await range.getAttribute('min')),max=Number(await range.getAttribute('max'));
  assert.ok(min<max&&start>=min&&start<=max,'valid range bounds before input');
  await range.focus();await range.press(start<max?'ArrowRight':'ArrowLeft');
  const after=Number(await range.inputValue());assert.ok(after!==start&&after>=min&&after<=max,'keyboard changes a valid value');
}
async function submit(page,q,kind,wrong){
  const form=page.locator('form[data-kind="'+kind+'"]');
  if(q.type==='number')await form.locator('input[name=answer]').fill(String(wrong?q.answer+1:q.answer));
  else if(q.type==='choice'){
    let index=q.options.indexOf(q.answer);if(wrong)index=(index+1)%q.options.length;
    await form.locator('input[value="'+index+'"]').check();
  }else{
    const target=wrong?q.answer.slice().reverse():q.answer;
    for(let i=0;i<target.length;i++){
      let values=await form.locator('.order-item-text').allTextContents();
      let at=values.indexOf(target[i]);
      while(at>i){await form.locator('[data-action=order][data-direction=up][data-index="'+at+'"]').click();at--;}
    }
  }
  await form.locator('button[type=submit]').click();
  assert.ok(await page.locator('#answer-feedback').isVisible(),kind+' feedback visible');
}
async function run(){
  const browser=await chromium.launch({headless:true,executablePath:chrome});
  try{
    const context=await browser.newContext({viewport:{width:1440,height:1000}});
    const unexpected=[];const errors=[];context.on('page',p=>p.on('pageerror',error=>errors.push(error.name)));
    await context.route('https://**/*',route=>{const host=new URL(route.request().url()).hostname;if(host!=='fonts.googleapis.com'&&host!=='fonts.gstatic.com')unexpected.push(host);return route.abort();});
    await context.route('http://**/*',route=>{unexpected.push(new URL(route.request().url()).hostname);return route.abort();});
    const page=await context.newPage();
    await page.goto(url+'#list');
    const units=await page.evaluate(()=>BL.core.units().map(u=>({code:u.code,questions:u.questions,game:u.game,buddy:u.buddy,entries:u.entries,workedExample:u.workedExample})));
    const expected5=JSON.parse(fs.readFileSync(path.join(root,'sources/grade5-unit-manifest.json'),'utf8')).codes;
    const expected6=JSON.parse(fs.readFileSync(path.join(root,'sources/grade6-unit-manifest.json'),'utf8')).codes;
    const expected7=JSON.parse(fs.readFileSync(path.join(root,'sources/jh1-unit-manifest.json'),'utf8')).codes;
    const expected4=Object.keys(JSON.parse(fs.readFileSync(path.join(root,'tools/math-review-expectations.json'),'utf8')).units);
    assert.deepEqual(units.map(u=>u.code).sort(),expected4.concat(expected5,expected6,expected7).sort(),'exact material set loaded');
    // A changed hash alone must not identify an old list as the new grade.
    await navigate(page,'#list/5');
    const readinessProbe=await page.evaluate(()=>{document.querySelector('[data-action=grade][data-grade="4"]').click();const m=document.querySelector('main');return {oldReady:location.hash==='#list/4'&&m.dataset.page==='list'&&m.dataset.unit==='',newReady:m.dataset.grade==='4',rendered:m.dataset.grade};});
    assert.deepEqual(readinessProbe,{oldReady:true,newReady:false,rendered:'5'},'old wait accepts stale grade positive probe');
    await waitRoute(page,'#list/4');assert.equal(await page.locator('main').getAttribute('data-grade'),'4');
    // Prove the same visible-DOM detectors can fail before using negative findings.
    await page.evaluate(()=>{const probe=document.createElement('div');probe.id='positive-probe';probe.textContent='ランキング';probe.style.width=(innerWidth+200)+'px';document.body.appendChild(probe);});
    const positive=await metrics(page);assert.ok(positive.forbidden>0&&positive.overflow,'forbidden/overflow positive probes');
    await page.locator('#positive-probe').evaluate(e=>e.remove());
    const errorProbe=page.waitForEvent('pageerror');await page.evaluate(()=>{setTimeout(()=>{throw Error('checker positive probe');},0);});await errorProbe;assert.equal(errors.length,1);errors.length=0;
    await navigate(page,'#unit/8250263111200000');
    const upperRange=page.locator('input[data-visual-field]').first(),upperStage=page.locator('[data-visual-stage]');
    assert.equal(await upperRange.inputValue(),await upperRange.getAttribute('max'));
    const upperBefore=await upperStage.innerHTML();await upperRange.focus();await upperRange.press('ArrowRight');
    assert.equal(await upperStage.innerHTML(),upperBefore,'old unconditional Right cannot change an upper-bound value');
    await moveRange(upperRange);assert.notEqual(await upperStage.innerHTML(),upperBefore,'boundary-aware input changes real diagram');
    await page.locator('[data-visual-reset]').click();
    for(const width of [1440,1024,390]){
      await page.setViewportSize({width,height:1000});
      for(const mode of ['es','js']){
        await page.locator('[data-action=mode][data-mode='+mode+']').click();
        await navigate(page,'#list');await audit(page,'list '+width+' '+mode);
        for(const grade of [4,5,6,7]) {
          await page.locator('[data-action=grade][data-grade="'+grade+'"]').click();await waitRoute(page,'#list/'+grade);
          assert.deepEqual((await page.locator('.unit-card').evaluateAll(nodes=>nodes.map(n=>n.dataset.unit))).sort(),({4:expected4,5:expected5,6:expected6,7:expected7}[grade]).slice().sort(),'exact visible grade '+grade);
          assert.equal(await page.locator('[data-action=grade][data-grade="'+grade+'"]').getAttribute('aria-pressed'),'true');
          await audit(page,'grade '+grade+' '+width+' '+mode);
        }
        for(const unit of units){
          for(const route of ['unit','practice','result','buddy']){
            await navigate(page,'#'+route+'/'+unit.code);await audit(page,route+' '+unit.code+' '+width+' '+mode);
            assert.equal(await page.locator('[data-action=grade][data-grade="'+gradeFor(unit.code)+'"]').getAttribute('aria-pressed'),'true','deep link synchronizes grade');
            if(route==='unit'&&(gradeFor(unit.code)>=5)&&width===390&&mode==='es'){await page.locator('#unit-visual').scrollIntoViewIfNeeded();await page.locator('#unit-visual').screenshot({path:path.join(output,unit.code+'-visual.png')});}
          }
        }
        await page.locator('[data-action=pause]').click();await waitRoute(page,'#paused');await audit(page,'paused '+width+' '+mode);
      }
      await navigate(page,'#list');
      await page.screenshot({path:path.join(output,'list-'+width+'.png'),fullPage:true});
      await navigate(page,'#unit/8250243250000000');
      await page.screenshot({path:path.join(output,'angle-'+width+'.png'),fullPage:true});
      console.log('VIEWPORT='+width+' MODES=es,js ALL_ROUTES=PASS');
    }
    // Browser history records the selected grade, and skip links keep the unit route.
    await navigate(page,'#list/4');
    await page.locator('[data-action=grade][data-grade="5"]').click();await waitRoute(page,'#list/5');
    await page.goBack();await waitRoute(page,'#list/4');assert.equal(await page.evaluate(()=>BL.core.state.grade),4);
    await page.goForward();await waitRoute(page,'#list/5');assert.equal(await page.evaluate(()=>BL.core.state.grade),5);
    await page.locator('[data-action=grade][data-grade="6"]').click();await waitRoute(page,'#list/6');
    await page.goBack();await waitRoute(page,'#list/5');assert.equal(await page.evaluate(()=>BL.core.state.grade),5);
    await page.goForward();await waitRoute(page,'#list/6');assert.equal(await page.evaluate(()=>BL.core.state.grade),6);
    await navigate(page,'#unit/'+expected6[0]);const skipHash=await page.evaluate(()=>location.hash);
    await page.locator('.skip-link').focus();await page.locator('.skip-link').press('Enter');
    assert.equal(await page.evaluate(()=>location.hash),skipHash,'keyboard skip preserves unit');
    assert.equal(await page.evaluate(()=>document.activeElement.id),'main','skip focuses main content');
await page.setViewportSize({width:1024,height:1000});
    await page.locator('[data-action=mode][data-mode=es]').click();
    for(const unit of units){
      await navigate(page,'#unit/'+unit.code);
      const before=await page.evaluate(code=>BL.core.progress(code).percent,unit.code);
      await submit(page,unit.game,'game',false);
      assert.equal(await page.evaluate(code=>BL.core.progress(code).percent,unit.code),before,'game does not inflate progress');
      const short=await page.locator('#explanation-copy').textContent();
      await page.locator('[data-action=length][data-length=detail]').click();
      assert.notEqual(await page.locator('#explanation-copy').textContent(),short,'detail changes explanation');
      for(const entry of unit.entries){const selector=await page.evaluate(id=>'[data-action=interest][data-interest="'+CSS.escape(id)+'"]',entry.category);await page.locator(selector).click();assert.equal(await page.locator('#example-title').textContent(),entry.title,'interest visibly changes example');}
      for(let i=1;i<unit.workedExample.steps.length;i++)await page.locator('[data-action=worked-next]').click();
      assert.equal(await page.locator('.worked-answer').textContent(),unit.workedExample.answer,'all worked steps lead to answer');
      await page.locator('[data-action=worked-reset]').click();assert.equal(await page.locator('.worked-steps li').count(),1);
      // Every manipulative must visibly react through a real control, then restore.
      const stage=page.locator('[data-visual-stage]');const initial=await stage.innerHTML();
      const range=page.locator('input[data-visual-field]').first();
      if(await range.count())await moveRange(range);
      else if(await page.locator('[data-abacus]').count())await page.locator('[data-abacus]').first().click();
      else {
        const selected=page.locator('button[data-visual-field][aria-pressed="true"]').first();
        await selected.click();assert.equal(await stage.innerHTML(),initial,'same selection stays stable');
        await page.locator('button[data-visual-field][aria-pressed="false"]').first().click();
      }
      assert.notEqual(await stage.innerHTML(),initial,'visual reacts '+unit.code);visuals++;
      await page.locator('[data-visual-reset]').click();assert.equal(await stage.innerHTML(),initial,'visual resets '+unit.code);
      await navigate(page,'#practice/'+unit.code);
      for(let index=0;index<unit.questions.length;index++){
        const question=unit.questions[index];await page.locator('.question-nav [data-action=question][data-index="'+index+'"]').click();
        if(index===0){await submit(page,question,'practice',true);assert.equal(await page.evaluate(({code,qid})=>BL.core.state.progress[code].answers[qid].correct,{code:unit.code,qid:question.id}),false);}
        await submit(page,question,'practice',false);answered++;
        if(question.hint){await page.locator('[data-action=hint]').click();assert.equal(await page.locator('.hint-copy').textContent(),question.hint);}
      }
      assert.equal(await page.evaluate(code=>BL.core.progress(code).percent,unit.code),80,'practice-only 80');
      await navigate(page,'#result/'+unit.code);await audit(page,'answered result '+unit.code);
      await navigate(page,'#buddy/'+unit.code);
      for(let index=0;index<unit.buddy.length;index++){
        if(unit.buddy.length>1)await page.locator('[data-action=buddy-item][data-index="'+index+'"]').click();
        await page.locator('#buddy-answer').fill(unit.buddy[index].sample);
        await page.locator('form[data-kind=buddy] button[type=submit]').click();
        assert.equal(await page.locator('[data-action=buddy-confirm]').isDisabled(),true,'self-confirm requires checkpoints');
        const checkpoints=page.locator('input[data-checkpoint]');for(let n=0;n<await checkpoints.count();n++)await checkpoints.nth(n).check();
        await page.locator('[data-action=buddy-confirm]').click();dialogues++;
      }
      assert.equal(await page.evaluate(code=>BL.core.progress(code).percent,unit.code),100,'both components 100');
      await page.locator('[data-action=buddy-revoke]').click();assert.ok(await page.evaluate(code=>BL.core.progress(code).percent<100,unit.code),'self-confirm reversible');
      await page.locator('[data-action=buddy-confirm]').click();
      await audit(page,'completed buddy '+unit.code);
    }
    for(const grade of [4,5,6,4,6,5]){await page.locator('[data-action=grade][data-grade="'+grade+'"]').click();await waitRoute(page,'#list/'+grade);await page.reload();assert.equal(await page.evaluate(()=>BL.core.state.grade),grade);assert.equal(await page.evaluate(()=>BL.core.units().every(u=>BL.core.progress(u.code).percent===100)),true,'grade switch preserves all progress');}
    await navigate(page,'#buddy/'+units[units.length-1].code);
    await page.reload();assert.equal(await page.evaluate(()=>BL.core.units().every(u=>BL.core.progress(u.code).percent===100)),true,'reload all progress');
    assert.equal(await page.locator('#buddy-answer').inputValue(),'','conversation text not reloaded');
    // Untrusted user prose stays text and is never persisted or executed.
    await page.locator('#buddy-answer').fill('<img src=x onerror="window.injected=true">');await page.locator('form[data-kind=buddy] button[type=submit]').click();
    assert.equal(await page.locator('.message.own img').count(),0);assert.equal(await page.evaluate(()=>Boolean(window.injected)),false);
    assert.equal(await page.evaluate(()=>localStorage.getItem('des.basic-learning.v1').includes('<img')),false);
    const resumeHash=await page.evaluate(()=>location.hash);await page.locator('[data-action=pause]').click();await waitRoute(page,'#paused');await page.locator('.resume-card a').first().click();await waitRoute(page,resumeHash);assert.equal(await page.locator('.message.own').count(),1,'pause/resume retains submitted text');
    await navigate(page,'#unit/not-a-code');await audit(page,'invalid route');
    const blocked=await context.newPage();await blocked.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw Error('blocked storage');}});});await blocked.goto(url+'#list');assert.ok(await blocked.locator('.storage-warning').isVisible());await audit(blocked,'blocked storage');await blocked.close();
    const corrupt=await context.newPage();await corrupt.addInitScript(()=>localStorage.setItem('des.basic-learning.v1','{bad'));await corrupt.goto(url+'#list');assert.equal(await corrupt.locator('.unit-card').count(),expected4.length);await audit(corrupt,'corrupt storage');await corrupt.close();
    assert.equal(unexpected.length,0,'no unexpected remote requests');assert.equal(errors.length,0,'no application JS errors');
    const report={viewports:[1440,1024,390],modes:['es','js'],checkedViews:visited,practiceAnswers:answered,buddyDialogues:dialogues,interactiveVisuals:visuals,jsErrors:errors.length,unexpectedRequests:unexpected.length,offline:true};
    fs.writeFileSync(path.join(root,'output/browser-check.json'),JSON.stringify(report,null,2)+'\n');
    console.log('BROWSER_CHECK='+JSON.stringify(report));
  }finally{await browser.close();}
}
run().catch(error=>{console.error('BROWSER_CHECK=FAIL '+error.message);process.exitCode=1;});
