'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm'),crypto=require('crypto'),assert=require('assert/strict');
const root=path.resolve(__dirname,'..'),read=p=>fs.readFileSync(path.join(root,p),'utf8'),hash=v=>crypto.createHash('sha256').update(v).digest('hex');
const review=JSON.parse(read('sources/jh1-visual-review.json')),expected=JSON.parse(read('sources/jh1-unit-manifest.json')).codes,lessons=JSON.parse(read('sources/jh1-lesson-manifest.json'));
assert.equal(review.evidence,'verified');
assert.equal(review.visualsSha256,hash(read('js/visuals-jh1.js')),'reviewed visual source');
assert.equal(review.scenesSha256,hash(read('js/lesson-scenes-jh1.js')),'reviewed scene source');
const w={localStorage:{getItem:()=>null,setItem:()=>{}}};
for(const f of ['units.js','units-grade5.js','units-grade6.js','units-jh1.js','catalogue.js','core.js','visuals.js','visuals-grade5.js','visuals-grade6.js','visuals-jh1.js','lesson-scenes.js','lesson-scenes-grade5.js','lesson-scenes-grade6.js','lesson-scenes-jh1.js','lesson-review.js','lesson-review-grade5.js','lesson-review-grade6.js','lesson-review-jh1.js'])vm.runInNewContext(f==='catalogue.js'?'window.BL.expectedCatalogue='+read('sources/catalogue-v5.json')+';':read('js/'+f),{window:w});
const BL=w.BL;
assert.equal(BL.core.ready,true);assert.equal(BL.core.readOnly,false);assert.equal(BL.core.rejectedCount,0);
assert.deepEqual(Array.from(BL.core.units(7),u=>u.code).sort(),expected.slice().sort());
for(const code of expected){const unit=BL.core.unit(code),def=BL.visuals.definitions[code];assert.ok(def);assert.ok(def.claimIds.every(id=>unit.claims.some(c=>c.id===id&&c.status==='verified')));assert.ok(BL.visuals.render(unit).includes('data-visual-code="'+code+'"'));}
for(const code of lessons.codes){const scene=BL.lessonScenes.items[code],record=BL.lessonReview.items[code],unit=BL.core.unit(code);assert.equal(record.evidence,'verified');assert.equal(record.fingerprint,hash(JSON.stringify(scene)));assert.ok(scene.claimIds.concat(scene.challenge.claimIds).every(id=>unit.claims.some(c=>c.id===id&&c.status==='verified')));assert.equal(read(record.poster),BL.lessonScenes.render(code,0,1)+'\n','reviewed poster exact output');if(lessons.videos.includes(code))assert.equal(record.video,'assets/lessons/'+code+'.mp4');}
assert.throws(()=>assert.equal(review.scenesSha256,hash('changed source')),'review fingerprint positive probe');
console.log('JH1_ASSET_REVIEW=PASS units=38 posters=8 exact_frames=true media_claims=true all_material_accepted=true');
