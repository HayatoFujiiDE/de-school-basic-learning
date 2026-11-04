'use strict';
// Independent source review + full rendered-frame measurement. No rendering,
// installation, network access, or learner storage is performed by this check.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const crypto=require('node:crypto'),cp=require('node:child_process'),assert=require('node:assert/strict');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const fileHash=p=>hash(fs.readFileSync(path.join(root,p)));
const sceneHash='cf631e21271155206a55fe0735f9d8fac2414c7ddbd0146332be20a0dc5b6db2';
const runnerHash='8198cf5956a113d3a93de80fdcab8178f7c4e6d5cd86f61e7c74594ab11587c6';
const expected={
 '8350223121300000':{scene:'EliminationLesson',sha256:'63fec154c08d84ac0f4b9363e2e9bc2df3c35944660e275ade5de2fc420e84c7',transcript:[
  '二つの式を、同時に満たすxとyを求める。',
  '左辺どうし、右辺どうしを足すと、yが消える。',
  '3x＝9からx＝3。②へ代入するとy＝1。',
  '元の二つの式へ戻し、両方で等しいと確かめる。'
 ]},
 '8350223311000000':{scene:'LinearGraphLesson',sha256:'59800591a62bb573bcb0edd12ce910f6cab1c67c811b28aed8620bdb4b3c59ed',transcript:[
  'y＝2x＋1。x＝0のときy＝1、ここが切片。',
  '傾きは2。xを1増やすと、yは2増える。',
  '次の点は(1,3)。式へ入れても同じ値になる。',
  '二つの点を通る直線。目盛と原点は動かさない。'
 ]}
};
function command(binary,args,binaryOutput=false){
 const result=cp.spawnSync(binary,args,{encoding:binaryOutput?undefined:'utf8',maxBuffer:100*1024*1024});
 assert.ok(!result.error,binary+' could not execute');assert.equal(result.status,0,binary+' returned nonzero');return result.stdout;
}
function decode(code,filter,w,h){const buffer=command('ffmpeg',['-nostdin','-v','error','-i',path.join(root,'assets/lessons',code+'.mp4'),'-vf',filter,'-f','rawvideo','-pix_fmt','rgb24','-'],true);assert.equal(buffer.length,660*w*h*3,'all660 frames in measurement');return buffer;}
function scan(buffer,frame,w,h,test,region){
 let count=0,sx=0,sy=0,minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;const pixels=[];
 for(let y=region[1];y<region[3];y++)for(let x=region[0];x<region[2];x++){
  const p=(frame*w*h+y*w+x)*3;
  if(test(buffer[p],buffer[p+1],buffer[p+2])){count++;sx+=x;sy+=y;minX=Math.min(minX,x);maxX=Math.max(maxX,x);minY=Math.min(minY,y);maxY=Math.max(maxY,y);pixels.push([x,y]);}
 }
 return{count,x:count?sx/count:null,y:count?sy/count:null,minX,maxX,minY,maxY,pixels};
}
function close(actual,expected,tolerance,label){assert.ok(Math.abs(actual-expected)<=tolerance,label);}
function eliminationFrames(){
 const original=decode('8350223121300000','crop=500:160:140:150,scale=250:80:flags=area',250,80),masks=[],counts=[];
 for(let frame=0;frame<660;frame++){
  const mask=new Set(),count=[0,0];
  for(let y=0;y<80;y++)for(let x=0;x<250;x++){const p=(frame*20000+y*250+x)*3;if(Math.max(original[p],original[p+1],original[p+2])<130){mask.add(y*250+x);count[y<40?0:1]++;}}
  masks.push(mask);counts.push(count);
 }
 function present(count){assert.ok(count[0]>320&&count[1]>240,'both original equations remain visible');}
 let differenceMax=0;
 for(let f=0;f<660;f++){
  present(counts[f]);let difference=0;for(const p of masks[f])if(!masks[0].has(p))difference++;for(const p of masks[0])if(!masks[f].has(p))difference++;
  differenceMax=Math.max(differenceMax,difference);assert.ok(difference<=25,'original equations keep the same glyphs and positions');
 }
 assert.throws(()=>present([counts[0][0],0]),/both original/,'removed-original positive control');
 const result=decode('8350223121300000','crop=360:180:720:175,scale=180:90:flags=area',180,90);
 const green=(r,g,b)=>g-r>20&&g-b>7&&r<150&&g<170&&b<150;
 for(let frame=0;frame<660;frame++){
  const summed=scan(result,frame,180,90,green,[0,0,180,45]).count;
  const solved=scan(result,frame,180,90,green,[0,45,180,90]).count;
  if(frame<210)assert.equal(summed,0,'no sum before the adding animation completes');else assert.ok(summed>120,'3x=9 remains visible after addition');
  if(frame<330)assert.equal(solved,0,'x result follows the sum');else assert.ok(solved>90,'x=3 remains visible after solving');
 }
 return{frames:660,originalMaskDifferenceMax:differenceMax};
}
function graphFrames(){
 // World frame is 1280x720 with 90px per unit. Crop is downsampled by2.
 // Independent axis model: origin(397,400.5), one mathematical unit40.5px.
 // In the sampled crop: origin(66,120.25), P(66,100), Q(86.25,59.5).
 const buffer=decode('8350223311000000','crop=300:380:265:160,scale=150:190:flags=area',150,190);
 const blue=(r,g,b)=>b-r>35&&b-g>20&&g-r>12&&b<180;
 const orange=(r,g,b)=>r-g>30&&g-b>30&&r<210&&g<170;
 const green=(r,g,b)=>g-r>20&&g-b>7&&r<150&&g<170&&b<150;
 const graphPoints=[];let maxLineResidual=0;
 function point(metric,x,y,label){assert.ok(metric.count>=25,label+' stays visible');close(metric.x,x,2,label+' x');close(metric.y,y,2,label+' y');}
 function onLine(pixels,slope){for(const[x,y]of pixels)assert.ok(Math.abs(y+slope*x-(100+66*slope))<=5,'graph pixels satisfy independently specified line');}
 function visibleEndpoint(actual,expected){
  if(Math.abs(actual-expected)<=3)return;
  // A green segment can blend with either existing blue dot. Its visible
  // endpoint must then reach the independently computed entry into that dot.
  // Radius: .09 world units * 90px/world unit / 2 + raster/stroke support.
  const radius=5.1,tipY=232-2*expected;
  const dot=[[66,100],[86.25,59.5]].find(([x,y])=>Math.hypot(expected-x,tipY-y)<=radius);
  assert.ok(dot,'line endpoint follows the planned segment outside markers');
  const entry=dot[0]-radius/Math.sqrt(5);
  assert.ok(actual>=entry-1.5&&actual<=expected+3,'line reaches the marker boundary');
 }
 for(let f=0;f<660;f++){
  const origin=scan(buffer,f,150,190,(r,g,b)=>Math.max(r,g,b)<100,[62,116,71,125]);point(origin,66,120.25,'fixed origin');
  const first=scan(buffer,f,150,190,blue,[58,92,74,109]);point(first,66,100,'intercept point');
  const second=scan(buffer,f,150,190,blue,[78,51,95,68]);
  if(f<240)assert.equal(second.count,0,'second point not claimed before the rise finishes');else point(second,86.25,59.5,'second point');
  const leg=scan(buffer,f,150,190,orange,[55,48,98,110]);
  if(f<150)assert.equal(leg.count,0,'slope movement begins after intercept explanation');
  if(f>=158&&f<180){assert.ok(leg.count>0,'horizontal move visible');close(leg.maxX,66+20.25*(f-150)/30,2.5,'horizontal tip moves one unit');}
  if(f>=180&&f<240){assert.ok(leg.count>0,'vertical move visible');close(leg.minY,100-40.5*(f-180)/60,2.5,'vertical tip moves two units');}
  if(f>=240){assert.ok(leg.count>75,'completed rise and run remain visible');assert.ok(leg.minY>=63&&leg.minY<=67,'endpoint under point marker');}
  for(const[x,y]of leg.pixels)assert.ok((Math.abs(y-100)<=2&&x>=65&&x<=88)||(Math.abs(x-86.25)<=2&&y>=58&&y<=102),'orange pixels stay on the rise/run legs');
  const line=scan(buffer,f,150,190,green,[15,10,115,187]);
  if(f<=480)assert.equal(line.count,0,'graph drawing follows the two-point check');
  else{
   assert.ok(line.count>0,'line drawing visible');onLine(line.pixels,2);
   visibleEndpoint(line.maxX,25.5+81*Math.min(1,(f-480)/90));
   for(const[x,y]of line.pixels)maxLineResidual=Math.max(maxLineResidual,Math.abs(y+2*x-232));
   if(f>=570){assert.ok(line.count>190,'complete line visible');close(line.minX,25.5,2,'lower segment endpoint');close(line.maxX,106.5,2,'upper segment endpoint');}
  }
  if(f===659)graphPoints.push(...line.pixels);
 }
 assert.throws(()=>onLine(graphPoints,3),/specified line/,'wrong-slope positive control');
 assert.throws(()=>point({count:70,x:66,y:100},66,120.25,'wrong intercept'),/wrong intercept y/,'wrong-intercept positive control');
 assert.throws(()=>visibleEndpoint(46,50),/outside markers/,'delayed endpoint outside a marker positive control');
 assert.throws(()=>visibleEndpoint(60,66.9),/marker boundary/,'excessively short endpoint inside a marker positive control');
 return{frames:660,maxLineResidualAtHalfResolution:maxLineResidual};
}
function sourceMath(){
 // Eliminate y, retaining the second equation. Recover the first by subtraction.
 assert.deepEqual([2+1,1-1,7+2],[3,0,9]);assert.deepEqual([3-1,0-(-1),9-2],[2,1,7]);
 assert.equal(9/3,3);assert.equal(3-2,1);assert.equal(2*3+1,7);assert.equal(3-1,2);
 for(const[x,y]of [[-2,-3],[0,1],[1,3],[2,5]])assert.equal(y,2*x+1);
 assert.equal((3-1)/(1-0),2);assert.equal(2*0+1,1);
 assert.equal(fileHash('tools/media-scenes-jh2.py'),sceneHash,'reviewed scene source');
 assert.equal(fileHash('tools/render-media-jh2.py'),runnerHash,'reviewed local renderer');
 const source=read('tools/media-scenes-jh2.py'),runner=read('tools/render-media-jh2.py');
 for(const clip of Object.values(expected))for(const line of clip.transcript)assert.ok(source.includes('self.say(\''+line+'\')'),'exact reviewed caption');
 for(const guard of ["importlib.metadata.version('manim') != '0.20.1'",'sys.addaudithook(no_network)','config.notify_outdated_version = False','config.plugins = []',"'-map_metadata', '-1'"])assert.ok(runner.includes(guard),'existing renderer safeguard');
 function contrast(a,b){const L=h=>{const rgb=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return .2126*rgb[0]+.7152*rgb[1]+.0722*rgb[2];};const x=L(a),y=L(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
 for(const ink of ['#292c29','#467060','#995519','#2f557d'])assert.ok(contrast(ink,'#f7f5f0')>=4.5,'authored ordinary text contrast');
 assert.throws(()=>assert.ok(contrast('#ad672b','#f7f5f0')>=4.5,'old orange contrast'),/old orange/,'old-color positive control');
}
function run(){
 sourceMath();let bytes=0;
 for(const[code,clip]of Object.entries(expected)){
  const relative='assets/lessons/'+code+'.mp4',file=path.join(root,relative);
  assert.equal(fileHash(relative),clip.sha256,'reviewed video bytes');bytes+=fs.statSync(file).size;
  const meta=JSON.parse(command('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_type,codec_name,width,height,pix_fmt,nb_frames,r_frame_rate','-of','json',file]));
  assert.equal(meta.streams.length,1,'silent single video stream');const s=meta.streams[0];
  assert.deepEqual([s.codec_type,s.codec_name,s.width,s.height,s.pix_fmt,s.nb_frames,s.r_frame_rate],['video','h264',1280,720,'yuv420p','660','30/1']);assert.equal(Number(meta.format.duration),22);
  command('ffmpeg',['-nostdin','-v','error','-i',file,'-f','null','-']);
 }
 const elimination=eliminationFrames(),graph=graphFrames();
 if(process.argv.includes('--geometry-only')){
  console.log('JH2_MEDIA_PARTIAL=PASS clips=2 frames=1320 original_equations_retained=true graph_model=true source_and_math_only=true claims_pending=true');return;
 }
 const manifest=JSON.parse(fs.readFileSync(process.env.BASIC_LEARNING_JH2_MEDIA_MANIFEST||path.join(root,'sources/media-jh2-manifest.json'),'utf8'));
 assert.equal(manifest.renderer.version,'0.20.1');assert.equal(manifest.renderer.sourceSha256,sceneHash);
 assert.deepEqual(manifest.videos.map(v=>v.code),Object.keys(expected),'exact reviewed two clips');
 const w={};for(const name of ['units.js','units-grade5.js','units-grade6.js','units-jh1.js','units-jh2.js']){
  const source=name==='units-jh2.js'&&process.env.BASIC_LEARNING_JH2_UNITS?fs.readFileSync(process.env.BASIC_LEARNING_JH2_UNITS,'utf8'):read('js/'+name);vm.runInNewContext(source,{window:w},{timeout:1000});
 }
 for(const video of manifest.videos){
  const clip=expected[video.code];assert.equal(video.path,'assets/lessons/'+video.code+'.mp4');assert.equal(video.sha256,clip.sha256);assert.equal(video.evidence,'verified');assert.deepEqual(video.transcript,clip.transcript);assert.deepEqual(video.claimIds,['video']);
  const unit=w.BL.data.units.find(u=>u.code===video.code);assert.ok(unit,'video unit exists');const claim=unit.claims.find(c=>c.id==='video');assert.ok(claim&&claim.status==='verified','reviewed video claim exists');assert.equal(video.claimTextSha256,hash(claim.text),'reviewed video claim text');
 }
 assert.equal(manifest.publicationApproval,false,'independent media review does not grant publication');
 console.log('JH2_MEDIA=PASS clips=2 decoded=2 frames=1320 h264=1280x720 audio=none seconds=44 bytes='+bytes);
 console.log('JH2_MEDIA_GEOMETRY=PASS elimination_frames='+elimination.frames+' original_mask_difference_max='+elimination.originalMaskDifferenceMax+' graph_frames='+graph.frames+' graph_residual_half_px='+graph.maxLineResidualAtHalfResolution+' positive_probes=6');
}
try{run();}catch(error){console.error('JH2_MEDIA=FAIL '+String(error.message).split('\n')[0].slice(0,220));process.exitCode=1;}
