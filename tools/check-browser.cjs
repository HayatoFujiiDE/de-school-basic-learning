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
async function metrics(page){return page.evaluate(pattern=>{
  const bad=new RegExp(pattern,'g');
  const attrs=Array.from(document.querySelectorAll('[aria-label],[title],[placeholder]')).map(e=>[e.getAttribute('aria-label'),e.getAttribute('title'),e.getAttribute('placeholder')].join(' ')).join(' ');
  const copy=document.body.innerText+' '+attrs;
  return {length:document.body.innerText.length,forbidden:(copy.match(bad)||[]).length,overflow:document.documentElement.scrollWidth>innerWidth,heading:document.querySelectorAll('main h1').length};
},banned);}
async function audit(page,context){const m=await metrics(page);assert.ok(m.length>80,context+': nonempty visible UI');assert.equal(m.forbidden,0,context+': forbidden copy');assert.equal(m.overflow,false,context+': horizontal overflow');assert.equal(m.heading,1,context+': one visible main heading');visited++;}
async function waitRoute(page,hash){const match=/^#(unit|practice|result|buddy)\/(825024[0-9A-Z]{10})$/.exec(hash);const expectedPage=match?match[1]:hash==='#list'?'list':hash==='#paused'?'paused':'missing';const expectedCode=match?match[2]:'';await page.waitForFunction(({hash,expectedPage,expectedCode})=>{const main=document.querySelector('main');return location.hash===hash && main && main.dataset.page===expectedPage && main.dataset.unit===expectedCode;},{hash,expectedPage,expectedCode});}
async function navigate(page,hash){await page.evaluate(h=>{location.hash=h;},hash);await waitRoute(page,hash);}
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
    assert.ok(units.length>=16,'material loaded');
    // Prove the same visible-DOM detectors can fail before using negative findings.
    await page.evaluate(()=>{const probe=document.createElement('div');probe.id='positive-probe';probe.textContent='ランキング';probe.style.width=(innerWidth+200)+'px';document.body.appendChild(probe);});
    const positive=await metrics(page);assert.ok(positive.forbidden>0&&positive.overflow,'forbidden/overflow positive probes');
    await page.locator('#positive-probe').evaluate(e=>e.remove());
    const errorProbe=page.waitForEvent('pageerror');await page.evaluate(()=>{setTimeout(()=>{throw Error('checker positive probe');},0);});await errorProbe;assert.equal(errors.length,1);errors.length=0;
    for(const width of [1440,1024,390]){
      await page.setViewportSize({width,height:1000});
      for(const mode of ['es','js']){
        await page.locator('[data-action=mode][data-mode='+mode+']').click();
        await navigate(page,'#list');await audit(page,'list '+width+' '+mode);
        assert.equal(await page.locator('.unit-card').count(),units.length,'all units remain visible');
        for(const unit of units){
          for(const route of ['unit','practice','result','buddy']){
            await navigate(page,'#'+route+'/'+unit.code);await audit(page,route+' '+unit.code+' '+width+' '+mode);
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
      if(await range.count()){await range.focus();await range.press('ArrowRight');}
      else if(await page.locator('[data-abacus]').count())await page.locator('[data-abacus]').first().click();
      else await page.locator('button[data-visual-field]').nth(1).click();
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
    await page.reload();assert.equal(await page.evaluate(()=>BL.core.units().every(u=>BL.core.progress(u.code).percent===100)),true,'reload all progress');
    assert.equal(await page.locator('#buddy-answer').inputValue(),'','conversation text not reloaded');
    // Untrusted user prose stays text and is never persisted or executed.
    await page.locator('#buddy-answer').fill('<img src=x onerror="window.injected=true">');await page.locator('form[data-kind=buddy] button[type=submit]').click();
    assert.equal(await page.locator('.message.own img').count(),0);assert.equal(await page.evaluate(()=>Boolean(window.injected)),false);
    assert.equal(await page.evaluate(()=>localStorage.getItem('des.basic-learning.v1').includes('<img')),false);
    const resumeHash=await page.evaluate(()=>location.hash);await page.locator('[data-action=pause]').click();await waitRoute(page,'#paused');await page.locator('.resume-card a').first().click();await waitRoute(page,resumeHash);assert.equal(await page.locator('.message.own').count(),1,'pause/resume retains submitted text');
    await navigate(page,'#unit/not-a-code');await audit(page,'invalid route');
    const blocked=await context.newPage();await blocked.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw Error('blocked storage');}});});await blocked.goto(url+'#list');assert.ok(await blocked.locator('.storage-warning').isVisible());await audit(blocked,'blocked storage');await blocked.close();
    const corrupt=await context.newPage();await corrupt.addInitScript(()=>localStorage.setItem('des.basic-learning.v1','{bad'));await corrupt.goto(url+'#list');assert.equal(await corrupt.locator('.unit-card').count(),units.length);await audit(corrupt,'corrupt storage');await corrupt.close();
    assert.equal(unexpected.length,0,'no unexpected remote requests');assert.equal(errors.length,0,'no application JS errors');
    const report={viewports:[1440,1024,390],modes:['es','js'],checkedViews:visited,practiceAnswers:answered,buddyDialogues:dialogues,interactiveVisuals:visuals,jsErrors:errors.length,unexpectedRequests:unexpected.length,offline:true};
    fs.writeFileSync(path.join(root,'output/browser-check.json'),JSON.stringify(report,null,2)+'\n');
    console.log('BROWSER_CHECK='+JSON.stringify(report));
  }finally{await browser.close();}
}
run().catch(error=>{console.error('BROWSER_CHECK=FAIL '+error.message);process.exitCode=1;});
