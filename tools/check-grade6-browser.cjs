'use strict';
// Real file:// UI checks use a fresh browser context and synthetic local state.
const fs = require('fs');
const path = require('path');
const assert = require('assert/strict');
const {pathToFileURL} = require('url');
const {chromium} = require('./dependencies.cjs')('playwright');
const root = process.env.BASIC_LEARNING_ROOT || path.resolve(__dirname, '..');
const output = path.join(root, 'output/grade6-browser');
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
    const codes = await page.evaluate(() => BL.core.units(6).map(unit => unit.code));
    const expected = JSON.parse(fs.readFileSync(path.join(root, 'sources/grade6-unit-manifest.json'), 'utf8')).codes;
    assert.deepEqual(codes.slice().sort(), expected.slice().sort(), 'all accepted grade 6 units');
    assert.equal(codes.length, 22);
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
        return location.hash === '#unit/' + value && main && main.dataset.page === 'unit' && main.dataset.unit === value && main.dataset.grade === '6';
      }, code);
    }

    // Restore the old identifier in the actual combined DOM: this gate must go red.
    const firstLesson = await page.evaluate(() => BL.grade6Lessons.codes[0]);
    await go(firstLesson);
    assert.equal(await page.locator('#output-summary').count(), 1);
    await page.locator('#visual-output-summary').evaluate(element => { element.id = 'output-summary'; });
    assert.equal(await page.locator('#output-summary').count(), 2, 'old ID reproduces two matches');
    assert.deepEqual(await duplicateIds(), ['output-summary']);
    await assert.rejects(uniqueIds, /duplicate DOM IDs/);
    await page.locator('#unit-visual .visual-result').evaluate(element => { element.id = 'visual-output-summary'; });
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
          for (let index = 0; index < 4; index++) {
            if (index) await panel.locator('[data-lesson-action="next"]').click();
            assert.equal(await panel.locator('[data-lesson-step-count]').textContent(), (index + 1) + ' / 4');
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
    assert.equal(steps, 48, 'all six lessons in both modes');
    assert.equal(transfers, 12, 'all six handoffs in both modes');
    assert.equal(videos, 4, 'two videos in both modes');
    assert.deepEqual(errors, []);
    assert.deepEqual(requests, []);
    console.log('GRADE6_INTEGRATED_UI=PASS modes=es,js width=390 units=22 views=' + views + ' keyboard_and_choice_controls=' + controls + ' lesson_steps=' + steps + ' try_transfers=' + transfers + ' video_plays=' + videos + ' id_checks=' + idChecks + ' duplicate_ids=0 old_id_positive=1 errors=0 external_requests=0');
  } finally {
    await browser.close();
  }
}

run().catch(error => { console.error(error.stack); process.exitCode = 1; });
