'use strict';
const fs=require('fs'),path=require('path'),assert=require('assert/strict'),crypto=require('crypto'),cp=require('child_process');
const root=path.resolve(__dirname,'..');
const manifest=JSON.parse(fs.readFileSync(path.join(root,'sources/media-manifest.json'),'utf8'));
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex');
const vm=require('vm'),context={window:{localStorage:{getItem:()=>null,setItem:()=>{}}}};
for(const file of ['units.js','core.js','lesson-scenes.js','lesson-review.js'])vm.runInNewContext(fs.readFileSync(path.join(root,'js',file),'utf8'),context);
const BL=context.window.BL;
assert.equal(Object.keys(BL.lessonScenes.items).length,8);
for(const code of Object.keys(BL.lessonScenes.items)){
 const item=BL.lessonScenes.items[code],record=BL.lessonReview.items[code];
 assert.equal(record.evidence,'verified');
 assert.equal(record.fingerprint,crypto.createHash('sha256').update(JSON.stringify(item)).digest('hex'),'reviewed lesson fingerprint');
 assert.equal(record.poster,'assets/lessons/'+code+'.svg');
 assert.equal(fs.readFileSync(path.join(root,record.poster),'utf8'),BL.lessonScenes.render(code,0,1)+'\n','exact reviewed SVG poster');
}
console.log('LESSON_POSTERS=PASS originals=8 exact_reviewed_svg=true');
assert.equal(manifest.videos.length,4);
assert.equal(manifest.renderer.version,'0.20.1');
assert.equal(hash('tools/media-scenes.py'),manifest.renderer.sourceSha256,'reviewed video source changed');
let duration=0,bytes=0;
for(const item of manifest.videos){
 assert.match(item.code,/^825024[0-9A-Z]{10}$/);
 assert.equal(item.path,'assets/lessons/'+item.code+'.mp4');
 assert.equal(hash(item.path),item.sha256,'reviewed video changed');
 assert.equal(item.evidence,'verified');
 assert.ok(item.transcript.length>=4 && item.claimIds.length>0);
 const absolute=path.join(root,item.path);
 const meta=JSON.parse(cp.execFileSync('ffprobe',['-v','error','-show_entries','format=duration,size:stream=codec_type,codec_name,width,height,pix_fmt','-of','json',absolute],{encoding:'utf8'}));
 assert.equal(meta.streams.length,1,'silent video only');
 const s=meta.streams[0];assert.equal(s.codec_type,'video');assert.equal(s.codec_name,'h264');assert.equal(s.width,1280);assert.equal(s.height,720);assert.equal(s.pix_fmt,'yuv420p');
 assert.ok(Number(meta.format.duration)>=15 && Number(meta.format.duration)<=40,'short focused clip');
 cp.execFileSync('ffmpeg',['-nostdin','-v','error','-i',absolute,'-f','null','-'],{stdio:['ignore','ignore','pipe']});
 duration+=Number(meta.format.duration);bytes+=Number(meta.format.size);
}
const scene=fs.readFileSync(path.join(root,'tools/media-scenes.py'),'utf8');
assert.ok(scene.includes('separated(label, cut, name)')&&scene.includes('"angle-axis"'),'rendered bounds guards');
const runner=fs.readFileSync(path.join(root,'tools/render-media.py'),'utf8');
assert.ok(runner.includes('sys.addaudithook(no_network)')&&runner.includes('config.notify_outdated_version = False')&&runner.includes('config.plugins = []'));
assert.throws(()=>assert.equal(manifest.videos[0].sha256,hash('README.md')),'hash guard positive probe');
console.log('MEDIA_CHECK=PASS clips=4 codec=h264 dimensions=1280x720 audio=none decoded=4 seconds='+duration.toFixed(1)+' bytes='+bytes);
