'use strict';
// Authoring only: create local SVG posters and manifest after independent review.
const fs=require('fs'),path=require('path'),vm=require('vm'),crypto=require('crypto'),assert=require('assert/strict');
const root=path.resolve(__dirname,'..');
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const context={window:{localStorage:{getItem:()=>null,setItem:()=>{}}}};
for(const file of ['units.js','core.js','lesson-scenes.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'js',file),'utf8'),context);
const BL=context.window.BL;
const review=JSON.parse(fs.readFileSync(path.join(root,'sources/lesson-review.json'),'utf8'));
assert.equal(review.sourceSha256,hash(fs.readFileSync(path.join(root,'js/lesson-scenes.js'))),'scene source must match independent review');
const media=JSON.parse(fs.readFileSync(path.join(root,'sources/media-manifest.json'),'utf8'));
const items={};
fs.mkdirSync(path.join(root,'assets/lessons'),{recursive:true});
for(const code of Object.keys(BL.lessonScenes.items)){
 const record=review.items[code];assert.equal(record.evidence,'verified',code+' independent evidence');
 const svg=BL.lessonScenes.render(code,0,1);
 const poster='assets/lessons/'+code+'.svg';fs.writeFileSync(path.join(root,poster),svg+'\n');
 items[code]={evidence:'verified',fingerprint:hash(JSON.stringify(BL.lessonScenes.items[code])),poster};
 const video=media.videos.find(item=>item.code===code);
 if(video){assert.equal(video.evidence,'verified',code+' independent video review');items[code].video=video.path;}
}
fs.writeFileSync(path.join(root,'js/lesson-review.js'),'/* Independent review: sources/lesson-review.json and sources/media-manifest.json. */\nwindow.BL = window.BL || {};\nwindow.BL.lessonReview = '+JSON.stringify({version:'1',items},null,2)+';\n');
console.log('LESSON_ASSETS=PASS posters='+Object.keys(items).length+' videos='+media.videos.length);
