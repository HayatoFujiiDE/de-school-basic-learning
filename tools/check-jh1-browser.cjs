'use strict';
// Real file:// UI checks use a fresh browser context and synthetic local state.
const fs = require('fs');
const path = require('path');
const assert = require('assert/strict');
const {pathToFileURL} = require('url');
const {chromium} = require('./dependencies.cjs')('playwright');
const root = process.env.BASIC_LEARNING_ROOT || path.resolve(__dirname, '..');
const output = path.join(root, 'output/jh1-browser');
const chrome = process.env.BASIC_LEARNING_CHROME || (process.platform === 'darwin' ? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' : undefined);
fs.mkdirSync(output, {recursive: true});

async function run() {
  const browser = await chromium.launch({headless: true, executablePath: chrome});
  try {
    const context = await browser.newContext({viewport: {width: 390, height: 900}, reducedMotion: 'reduce'});
    const errors = [], requests = [];
    await context.route(/^https?:/, route => {
      const host = new URL(route.request().url()).hostname;
      if (host !== 'fonts.googleapis.com' && host !== 'fonts.gstatic.com') requests.push(host);
      return route.abort();
    });
    const page = await context.newPage();
    page.on('pageerror', error => errors.push(error.name));
    await page.goto(pathToFileURL(path.join(root, 'index.html')).href);
    await page.waitForSelector('main[data-page="list"]');
    const codes = await page.evaluate(() => BL.core.units(7).map(unit => unit.code));
    const expected = JSON.parse(fs.readFileSync(path.join(root, 'sources/jh1-unit-manifest.json'), 'utf8')).codes;
    assert.deepEqual(codes.slice().sort(), expected.slice().sort(), 'all accepted junior-high units');
    assert.equal(codes.length, 38);
    let views = 0, controls = 0, steps = 0, transfers = 0, videos = 0, idChecks = 0;

    async function duplicateIds() {
      return page.evaluate(() => {
        const ids = Array.from(document.querySelectorAll('[id]')).map(element => element.id);
        return ids.filter((id, index) => ids.indexOf(id) !== index);
      });
    }
    async function uniqueIds() {
      assert.deepEqual(await duplicateIds(), [], 'duplicate DOM IDs');
      idChecks++;
    }
    async function go(code) {
      await page.evaluate(value => { location.hash = '#unit/' + value; }, code);
      await page.waitForFunction(value => {
        const main = document.querySelector('main');
        return location.hash === '#unit/' + value && main && main.dataset.page === 'unit' && main.dataset.unit === value && main.dataset.grade === '7';
      }, code);
    }

    // A positive control proves duplicate detection in the assembled page.
    await go(codes[0]);
    await page.evaluate(()=>{const e=document.createElement('span');e.id='main';e.dataset.duplicateProbe='true';document.body.appendChild(e);});
    assert.deepEqual(await duplicateIds(), ['main']);
    await assert.rejects(uniqueIds, /duplicate DOM IDs/);
    await page.locator('[data-duplicate-probe]').evaluate(e=>e.remove());
    await uniqueIds();

    for (const mode of ['es', 'js']) {
      await page.locator('[data-action="mode"][data-mode="' + mode + '"]').click();
      for (const code of codes) {
        await go(code);
        const visual = page.locator('#unit-visual [data-visual-code="' + code + '"]');
        const stage = visual.locator('[data-visual-stage]');
        assert.equal(await visual.count(), 1);
        assert.equal(await visual.locator('svg').count(), 1);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
        await uniqueIds();
        const clipped=await stage.locator('svg').evaluate(svg=>Array.from(svg.querySelectorAll('text')).filter(t=>{const b=t.getBBox(),v=svg.viewBox.baseVal;return b.x<v.x-1||b.y<v.y-1||b.x+b.width>v.x+v.width+1||b.y+b.height>v.y+v.height+1;}).map(t=>t.textContent));
        assert.deepEqual(clipped,[],code+' diagram text fits viewBox');
        views++;

        {
          const originalStage = await stage.innerHTML();
          const ranges = visual.locator('input[type="range"]');
          for (let index = 0; index < await ranges.count(); index++) {
            const range = ranges.nth(index), before = await stage.innerHTML();
            const value = await range.inputValue(), max = await range.getAttribute('max');
            await range.focus();
            await range.press(value === max ? 'ArrowLeft' : 'ArrowRight');
            assert.notEqual(await range.inputValue(), value);
            assert.notEqual(await stage.innerHTML(), before, code + ': keyboard changes visible diagram');
            controls++;
            await uniqueIds();
          }
          const choices = visual.locator('button[data-visual-field]');
          for (let index = 0; index < await choices.count(); index++) {
            const choice = choices.nth(index), before = await stage.innerHTML();
            const selected = await choice.getAttribute('aria-pressed') === 'true';
            await choice.click();
            assert.equal(await choice.getAttribute('aria-pressed'), 'true');
            if (selected) assert.equal(await stage.innerHTML(), before, 'same selection preserves diagram');
            else assert.notEqual(await stage.innerHTML(), before, code + ': new selection changes diagram');
            controls++;
            await uniqueIds();
          }
          await visual.locator('[data-visual-reset]').click();
          assert.equal(await stage.innerHTML(), originalStage, 'reset restores exact diagram');
          if (mode === 'es') {
            await visual.evaluate(element => element.scrollIntoView({block: 'start'}));
            await visual.screenshot({path: path.join(output, code + '-actual-mobile.png')});
          }
        }

        const panel = page.locator('[data-lesson-code="' + code + '"]');
        if (await panel.count()) {
          await page.locator('[data-action="lesson-jump"]').click();
          assert.equal(await panel.locator('[data-lesson-action="play"]').isDisabled(), true, 'reduced motion');
          await panel.locator('[data-lesson-action="reset"]').click();
          const stepCount=await page.evaluate(value=>BL.lessonScenes.items[value].steps.length,code);
          for (let index = 0; index < stepCount; index++) {
            if (index) await panel.locator('[data-lesson-action="next"]').click();
            assert.equal(await panel.locator('[data-lesson-step-count]').textContent(), (index + 1) + ' / ' + stepCount);
            assert.equal(await panel.locator('svg').count(), 1);
            steps++;
            await uniqueIds();
          }
          const progress = await page.evaluate(value => JSON.stringify(BL.core.state.progress[value] || null), code);
          await panel.locator('[data-lesson-action="try"]').click();
          const transfer = await page.evaluate(value => {
            const state = BL.lessonScenes.items[value].tryIt.state, container = document.getElementById('unit-visual');
            return {
              all: Object.keys(state).every(key => {
                const input = container.querySelector('input[data-visual-field="' + key + '"]');
                if (input) return Number(input.value) === state[key];
                const button = Array.from(container.querySelectorAll('button[data-visual-field]')).find(element => element.dataset.visualField === key && element.dataset.visualValue === state[key]);
                return button && button.getAttribute('aria-pressed') === 'true';
              }),
              saved: JSON.stringify(BL.core.state.progress[value] || null),
              focus: container.contains(document.activeElement)
            };
          }, code);
          assert.equal(transfer.all, true);
          assert.equal(transfer.saved, progress, 'exploring does not change learning record');
          assert.equal(transfer.focus, true);
          transfers++;

          const details = panel.locator('[data-lesson-video]');
          if (await details.count()) {
            const video = details.locator('video');
            assert.equal(await video.evaluate(element => element.controls && !element.autoplay && element.preload === 'none' && element.paused), true);
            await details.locator('summary').click();
            await video.evaluate(element => element.play());
            await page.waitForFunction(value => {
              const element = document.querySelector('[data-lesson-code="' + value + '"] video');
              return element && element.currentTime > 0.1 && element.videoWidth > 0;
            }, code);
            assert.equal(await video.evaluate(element => element.paused), false);
            await details.locator('summary').click();
            await page.waitForFunction(value => document.querySelector('[data-lesson-code="' + value + '"] video').paused, code);
            videos++;
          }
        }
      }
    }
    assert.equal(steps, 2*await page.evaluate(()=>Object.keys(BL.lessonScenes.items).filter(c=>c.startsWith('835021')).reduce((n,c)=>n+BL.lessonScenes.items[c].steps.length,0)), 'all new steps in both modes');
    assert.equal(transfers, 16, 'all eight handoffs in both modes');
    assert.equal(videos, 4, 'two videos in both modes');
    const signed=await page.evaluate(()=>{const u=BL.core.units(7).find(u=>u.questions.some(q=>q.type==='number'&&q.answer<0));return {code:u.code,index:u.questions.findIndex(q=>q.type==='number'&&q.answer<0),answer:u.questions.find(q=>q.type==='number'&&q.answer<0).answer};});
    await page.evaluate(code=>{location.hash='#practice/'+code;},signed.code);
    await page.waitForSelector('main[data-page="practice"][data-unit="'+signed.code+'"]');
    await page.locator('.question-dot[data-index="'+signed.index+'"]').click();
    const answer=page.locator('form[data-kind="practice"] input[name="answer"]');
    assert.equal(await answer.getAttribute('inputmode'),'text','mobile keyboard permits negative sign');
    await answer.fill(String(signed.answer).replace('-','−'));
    await page.locator('form[data-kind="practice"] button[type="submit"]').click();
    assert.equal(await page.evaluate(({code,index})=>BL.core.progress(code).correct>0&&BL.core.state.progress[code].answers[BL.core.unit(code).questions[index].id].correct,signed),true);
    await answer.fill('1/2');await page.locator('form[data-kind="practice"] button[type="submit"]').click();
    assert.equal(await answer.getAttribute('aria-invalid'),'true','expressions are not evaluated');
    assert.deepEqual(errors, []);
    assert.deepEqual(requests, []);
    console.log('JH1_INTEGRATED_UI=PASS modes=es,js width=390 units=38 views=' + views + ' keyboard_and_choice_controls=' + controls + ' lesson_steps=' + steps + ' try_transfers=' + transfers + ' video_plays=' + videos + ' id_checks=' + idChecks + ' duplicate_ids=0 duplicate_positive=1 errors=0 external_requests=0');
  } finally {
    await browser.close();
  }
}

run().catch(error => { console.error(error.stack); process.exitCode = 1; });
