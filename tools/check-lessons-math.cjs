'use strict';
// Independent mathematical models; does not use the production drawers' helpers.
// The expectation ledger is written only after separate content review.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = process.env.BASIC_LEARNING_ROOT || path.resolve(__dirname, '..');
const sourcePath = process.env.BASIC_LEARNING_SCENES || path.join(root, 'js/lesson-scenes.js');
const fixturePath = process.env.BASIC_LEARNING_LESSON_REVIEW || path.join(root, 'sources/lesson-review.json');
const source = fs.readFileSync(sourcePath, 'utf8');
const fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));
const sandbox = {window: {}};
vm.runInNewContext(source, sandbox, {timeout: 1000});
const api = sandbox.window.BL.lessonScenes;
const unitsSandbox = {window: {}};
vm.runInNewContext(fs.readFileSync(path.join(root, 'js/units.js'), 'utf8'), unitsSandbox, {timeout: 1000});
const units = unitsSandbox.window.BL.data.units;
const sha = s => crypto.createHash('sha256').update(s).digest('hex');
let assertions = 0, frames = 0;
function ok(value, reason) { assertions++; assert.ok(value, reason); }
function equal(actual, expected, reason) { assertions++; assert.deepEqual(actual, expected, reason); }
function near(actual, expected, reason) { ok(Math.abs(actual - expected) < 0.002, `${reason}: ${actual} != ${expected}`); }
function elements(svg, tag) {
  return [...svg.matchAll(new RegExp('<' + tag + '\\b([^>]*)>', 'g'))].map(m => {
    const attrs = {};
    for (const a of m[1].matchAll(/([\w-]+)="([^"]*)"/g)) attrs[a[1]] = a[2];
    return attrs;
  });
}
function textElements(svg) {
  return [...svg.matchAll(/<text\b([^>]*)>([^<]*)<\/text>/g)].map(m => ({...elements('<text'+m[1]+'>', 'text')[0], value:m[2]}));
}
const n = (o, k) => Number(o[k]);
const green = '#467060', olive = '#887e4c', ink = '#343c32';
const models = {
  '8250243131100000': {steps:5, answer:'0を入れる', claim:'c16', kind:'division'},
  '8250243141300000': {steps:4, answer:'4こ', claim:'c15', extraClaims:['motion1'], kind:'decimal'},
  '8250243150000000': {steps:4, answer:'5のまま', claim:'c16', kind:'fraction'},
  '8250243240000000': {steps:4, answer:'6cm²', claim:'c18', kind:'area'},
  '8250243250000000': {steps:4, answer:'70°', claim:'c17', kind:'angle'},
  '8250243310000000': {steps:4, answer:'3本', claim:'c15', kind:'change'},
  '8250243320000000': {steps:4, answer:'A', claim:'c16', kind:'ratio'},
  '8250243411200000': {steps:4, answer:'3℃', claim:'c17', kind:'graph'}
};
equal(Object.keys(api.items).sort(), Object.keys(models).sort(), 'eight reviewed curriculum codes');
equal(fixture.reviewType, 'independent-agent-math-evidence', 'evidence is not human publication approval');
equal(fixture.humanPublicationApproval, false, 'no human approval is implied');
for (const [code, model] of Object.entries(models)) {
  const item = api.items[code], record = fixture.items[code];
  const expectedClaims = [model.claim].concat(model.extraClaims || []);
  equal(item.steps.length, model.steps, `${code}: all steps`);
  equal(Array.from(item.claimIds), expectedClaims, `${code}: claim reference`);
  equal(item.challenge.answer, model.answer, `${code}: independently derived challenge answer`);
  equal(Array.from(item.challenge.claimIds), expectedClaims, `${code}: challenge claim`);
  equal(item.challenge.options.filter(x=>x===model.answer).length, 1, `${code}: one correct option`);
  equal(sha(JSON.stringify(item)), record.itemSha256, `${code}: reviewed prose / alt / controls snapshot`);
  const unit = units.find(u => u.code === code);
  ok(unit, `${code}: actual curriculum unit exists`);
  for (const id of expectedClaims) {
    const claim = unit.claims.find(c=>c.id===id);
    ok(claim && claim.status === 'verified', `${code}/${id}: previously verified supporting claim`);
    equal(sha(claim.text), record.claimTextSha256[id], `${code}/${id}: exact reviewed supporting claim`);
  }
  for (let step=0; step<model.steps; step++) for (const phase of [0, 0.1, 0.25, 0.5, 0.75, 0.9, 1]) {
    const svg = api.render(code, step, phase), p = step===0 ? 1 : phase;
    const rects = elements(svg, 'rect'), lines = elements(svg, 'line'), texts = textElements(svg);
    const label = `${model.kind} step=${step} phase=${phase}`;
    frames++;
    ok(!/NaN|Infinity|undefined/.test(svg), `${label}: finite geometry`);
    equal(svg, api.render(code,step,phase), `${label}: deterministic render`);
    if (model.kind === 'division') {
      const hundreds=rects.filter(r=>n(r,'width')===36 && n(r,'height')===36);
      const ones=rects.filter(r=>n(r,'width')===16 && n(r,'height')===16);
      equal(hundreds.length,9,`${label}: nine hundred-value markers`);
      equal(ones.length,24,`${label}: twenty-four one-value markers`);
      equal(100*hundreds.length+ones.length,924,`${label}: conserved dividend`);
      if (step===4 && p===1) for(let group=0;group<3;group++) {
        const lo=25+group*190, hi=lo+170;
        const h=hundreds.filter(r=>n(r,'x')>=lo && n(r,'x')+36<=hi).length;
        const u=ones.filter(r=>n(r,'x')>=lo && n(r,'x')+16<=hi).length;
        equal([h,u],[3,8],`${label}: each group independently contains308`);
        equal(h*100+u,924/3,`${label}: exact quotient`);
      }
    } else if (model.kind === 'decimal') {
      const cells=rects.filter(r=>n(r,'width')===6 && n(r,'height')===6);
      equal(cells.length,500,`${label}: five hundred hundredths conserved`);
      if (step>=2) {
        equal(cells.filter(r=>r.fill===olive).length,246,`${label}: subtrahend246 hundredths`);
        equal(cells.filter(r=>r.fill===green).length,500-246,`${label}: difference254 hundredths`);
      }
      if(step===3 && p===1) {
        equal(cells.filter(r=>r.fill===green && n(r,'x')<250).length,200,`${label}: two whole units remain`);
        equal(cells.filter(r=>r.fill===green && n(r,'x')>=250 && n(r,'x')<400).length,50,`${label}: five tenths remain`);
        equal(cells.filter(r=>r.fill===green && n(r,'x')>=400).length,4,`${label}: four hundredths remain`);
      }
    } else if (model.kind === 'fraction') {
      const pieces=rects.filter(r=>n(r,'width')===65 && n(r,'height')===65);
      equal(pieces.length,6,`${label}: six equal fifths conserved`);
      if (step>=2) {
        equal(pieces.filter(r=>r.fill===olive).length,3,`${label}: three fifths removed`);
        equal(pieces.filter(r=>r.fill===green).length,3,`${label}: three fifths remain`);
      }
      if (step===0) {
        const xs=pieces.map(r=>n(r,'x')).sort((a,b)=>a-b);
        for(let i=1;i<5;i++) near(xs[i]-xs[i-1],65,`${label}: one whole is exactly five adjacent fifths`);
      }
      if(step===3 && p===1) equal(pieces.filter(r=>n(r,'y')<200).length,3,`${label}: three equal pieces in remaining row`);
    } else if (model.kind === 'area') {
      const cells=rects.filter(r=>n(r,'width')===38 && n(r,'height')===38);
      equal(cells.length,8*6,`${label}: 48 unit squares conserved`);
      const removed=cells.filter(r=>r.fill===olive);
      equal(removed.length,step===0||(step===1&&p<0.5)?0:3*2,`${label}: removed rectangle is3by2`);
      if(step>=2) {
        equal(cells.filter(r=>r.fill===green).length,8*6-3*2,`${label}: area difference42`);
        const xs=[...new Set(removed.map(r=>n(r,'x')))].sort((a,b)=>a-b);
        const ys=[...new Set(removed.map(r=>n(r,'y')))].sort((a,b)=>a-b);
        equal([xs.length,ys.length],[3,2],`${label}: removed piece keeps three columns and two rows`);
        near(xs[1]-xs[0],38,`${label}: no horizontal scaling`);
        near(xs[2]-xs[1],38,`${label}: no horizontal scaling2`);
        near(ys[1]-ys[0],38,`${label}: no vertical scaling`);
      }
    } else if (model.kind === 'angle') {
      const ray=lines.filter(l=>l.stroke===green && n(l,'stroke-width')===6);
      equal(ray.length,1,`${label}: one moving ray`);
      const deg=step===0?0:step===1?Math.round(180*p):step===2?Math.round(180+70*p):250;
      near(n(ray[0],'x1'),265,`${label}: fixed vertex x`);
      near(n(ray[0],'y1'),180,`${label}: fixed vertex y`);
      near(n(ray[0],'x2'),265+115*Math.cos(deg*Math.PI/180),`${label}: ray angle x`);
      near(n(ray[0],'y2'),180-115*Math.sin(deg*Math.PI/180),`${label}: counterclockwise ray angle y`);
      equal(texts.filter(t=>n(t,'x')===490 && n(t,'y')===125).map(t=>t.value),[deg+'°'],`${label}: angle label equals actual ray`);
      if(step===3)ok(svg.includes('110°')&&svg.includes('360°'),`${label}: complementary rotation360-250=110`);
    } else if (model.kind === 'change') {
      // The olive recoloring overlay denotes the same left edge, not a new rod.
      const bars=lines.filter(l=>n(l,'stroke-width')===8 && l.stroke===green);
      const overlays=lines.filter(l=>n(l,'stroke-width')===8 && l.stroke===olive);
      equal(overlays.length,step===3?1:0,`${label}: one intentional recoloring overlay only`);
      if(overlays.length)equal(['x1','y1','x2','y2'].map(k=>n(overlays[0],k)),[60,135,60,225],`${label}: overlay reuses left edge`);
      const amount=step===0?1:step===1?1+p:step===2?2+3*p:5;
      const length=bars.reduce((sum,l)=>sum+Math.hypot(n(l,'x2')-n(l,'x1'),n(l,'y2')-n(l,'y1')),0);
      near(length,90*(1+3*amount),`${label}: shared edges are counted once`);
      if(p===1) {
        equal(bars.length,1+3*amount,`${label}: exact count of completed unit bars`);
        const keys=bars.map(l=>[[n(l,'x1'),n(l,'y1')],[n(l,'x2'),n(l,'y2')]].sort().map(a=>a.join(',')).join(':'));
        equal(new Set(keys).size,bars.length,`${label}: no duplicate physical edge`);
      }
    } else if (model.kind === 'ratio') {
      const bars=rects.filter(r=>n(r,'height')===45);
      equal(bars.length,2,`${label}: two comparable quantities`);
      const values=step===0?[3,5]:step===1?[3+9*p,5+10*p]:[12,15];
      for(let i=0;i<2;i++) near(n(bars[i],'width'),25*values[i],`${label}: same25px per card, series${i}`);
      const countLabels=texts.filter(t=>/^\d+枚$/.test(t.value));
      if(step===1&&p>0&&p<1)equal(countLabels.length,0,`${label}: no invented rounded intermediate card count`);
      else equal(countLabels.map(t=>t.value),values.map(v=>v+'枚'),`${label}: displayed count matches bar width`);
      if(step>=2) {
        equal(lines.filter(l=>n(l,'stroke-width')===5).length,5,`${label}: A divided into4groups and B into3groups`);
        equal([12/3,15/5],[4,3],`${label}: independently computed factors`);
      }
    } else if (model.kind === 'graph') {
      const points=elements(svg,'circle').filter(c=>n(c,'r')===6);
      const observed=points.map(c=>[n(c,'cx'),(285-n(c,'cy'))/22+12]).sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
      equal(observed,[[165,14],[165,18],[400,17],[400,20]],`${label}: measured observations remain fixed`);
      const grid=lines.filter(l=>l.stroke==='#dce3d9').map(l=>n(l,'y1')).sort((a,b)=>a-b);
      equal(grid.length,10,`${label}: ten equally spaced tick lines`);
      for(let i=1;i<grid.length;i++)near(grid[i]-grid[i-1],22,`${label}: equal Celsius intervals`);
      const gaps=lines.filter(l=>l.stroke===ink && n(l,'stroke-width')===5);
      for(const gap of gaps) {
        const at10=n(gap,'x1')===177, at11=n(gap,'x1')===412;
        ok(at10||at11,`${label}: difference only at observed time`);
        near(Math.abs(n(gap,'y2')-n(gap,'y1'))/22,at10?18-14:20-17,`${label}: correct same-time gap`);
      }
      if(step===2&&p>=0.25&&p<=0.75)equal(gaps.length,0,`${label}: no inferred intermediate temperature gap`);
      if(step===3)equal(gaps.length,2,`${label}: both observed gaps shown`);
    }
  }
}
// Pin the whole reviewed source as well as the prose/claims; geometric mutations must be reviewed.
equal(sha(source), fixture.sourceSha256, 'exact independently reviewed scene implementation');
console.log(`LESSON_MATH_RESULT=PASS scenes=8 steps=33 frames=${frames} assertions=${assertions} source_sha256=${sha(source)}`);
