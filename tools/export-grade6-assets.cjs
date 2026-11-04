'use strict';
const fs=require('fs'),path=require('path'),vm=require('vm'),crypto=require('crypto'),assert=require('assert/strict');
const root=path.resolve(__dirname,'..');
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const read=x=>fs.readFileSync(path.join(root,x),'utf8');
const review=JSON.parse(read('sources/grade6-visual-review.json'));
assert.equal(review.evidence,'verified','independent visual review required');
assert.equal(review.scenesSha256,hash(read('js/lesson-scenes-grade6.js')),'reviewed scene source');
assert.equal(review.visualsSha256,hash(read('js/visuals-grade6.js')),'reviewed interactive source');
const media=JSON.parse(read('sources/media-grade6-manifest.json'));
const sandbox={window:{}};['units.js','units-grade5.js','units-grade6.js','lesson-scenes.js','lesson-scenes-grade5.js','lesson-scenes-grade6.js'].forEach(f=>vm.runInNewContext(read('js/'+f),sandbox));
const BL=sandbox.window.BL,items={};
const expected=JSON.parse(read('sources/grade6-lesson-manifest.json')).codes;
assert.deepEqual(Array.from(BL.grade6Lessons.codes).sort(),expected.slice().sort());
for(const code of expected){
 const scene=BL.lessonScenes.items[code],unit=BL.data.units.find(u=>u.code===code);
 assert.ok(scene.claimIds.every(id=>unit.claims.some(c=>c.id===id&&c.status==='verified')));
 const poster='assets/lessons/'+code+'.svg';
 fs.writeFileSync(path.join(root,poster),BL.lessonScenes.render(code,0,1)+'\n');
 items[code]={evidence:'verified',fingerprint:hash(JSON.stringify(scene)),poster};
 const video=media.videos.find(v=>v.code===code);
 if(video){assert.equal(video.evidence,'verified');items[code].video=video.path;}
}
const source='/* Independent review: sources/grade6-visual-review.json; media-grade6-manifest.json. */\n(function () {\n  "use strict";\n  var BL = window.BL;\n  if (!BL || !BL.lessonReview || BL.lessonReview.version !== "1") throw new Error("Base lesson review required");\n  var items = '+JSON.stringify(items,null,2)+';\n  Object.keys(items).forEach(function (code) {\n    if (Object.prototype.hasOwnProperty.call(BL.lessonReview.items, code)) throw new Error("Duplicate review code");\n    BL.lessonReview.items[code] = items[code];\n  });\n}());\n';
fs.writeFileSync(path.join(root,'js/lesson-review-grade6.js'),source);
console.log('GRADE6_ASSETS=PASS posters=6 videos=2');
