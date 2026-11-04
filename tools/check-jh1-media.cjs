'use strict';
// Independently reviewed source, mathematics and rendered frame measurements.
// Never invokes Manim or uses real learner storage.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const vm=require('node:vm'),cp=require('node:child_process'),assert=require('node:assert/strict');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex');
const manifestPath=process.env.BASIC_LEARNING_JH1_MEDIA_MANIFEST||path.join(root,'sources/media-jh1-manifest.json');
const sourceHash='e0b1ebd9ba98769caed708ca7794131e0a0e9e672fc0b74750e0d029f511cc14';
const runnerHash='5d8a8f2ab38d5876ba792586d975afc9a3fe7d4ed75f4416000c9ae9b522cf00';
const expected={
  '8350213111200000':{scene:'SignedSubtractionLesson',seconds:20,frames:600,sha256:'752d7f4c94c0db9a787f0eef729f9177b023a42f1e0956c818f6287d456c8aaf',transcript:[
    'ひき算は、ひく数の符号を変えて足す。',
    '原点は動かさず、-2から右へ3目盛進む。',
    '着いたところは1。(-2)＋3は1になる。',
    '負の数をひくことを、正の数を足すことに直した。'
  ]},
  '8350213131200000':{scene:'EquationBalanceLesson',seconds:23,frames:690,sha256:'2cc56f53a8de837312f0656fe8562b79d4d1b965caaf774542361ee1043eece5',transcript:[
    '2x＋3＝7。左右が等しくなるxを求める。',
    '両辺から3をひくと、2x＝4になる。',
    '両辺を0でない2でわると、x＝2。',
    '代入すると2×2＋3＝7。もとの式でも確かめる。'
  ]}
};
function command(binary,args,binaryOutput=false){
  const result=cp.spawnSync(binary,args,{encoding:binaryOutput?undefined:'utf8',maxBuffer:200*1024*1024});
  assert.equal(result.status,0,binary+' returned nonzero');
  assert.ok(!result.error,binary+' execution failed');
  return result.stdout;
}
function box(x,y,w,h){return{l:x-w/2,r:x+w/2,b:y-h/2,t:y+h/2};}
function disjoint(rectangles){
  for(let i=0;i<rectangles.length;i++)for(let j=i+1;j<rectangles.length;j++){
    const a=rectangles[i],b=rectangles[j];
    assert.ok(Math.min(a.r,b.r)<=Math.max(a.l,b.l)||Math.min(a.t,b.t)<=Math.max(a.b,b.b),'symbol-card interiors overlap');
  }
}
function geometry(){
  assert.equal(-2-(-3),1);assert.equal(-2+3,1);
  const xs=[-450,-350],left=[-230,-150,-70],right=[110,185,260,335,410,485,560];
  const card=x=>box(x,50,65,70);
  disjoint(xs.concat(left,right).map(card));
  assert.equal(xs.length,2);assert.equal(left.length,3);assert.equal(right.length,7);
  const remaining=right.slice(0,4);disjoint(xs.concat(remaining).map(card));
  assert.equal(left.length-3,0);assert.equal(right.length-3,4);
  const groups=[box(147.5,50,150,100),box(297.5,50,150,100)];
  disjoint(groups);
  remaining.map(card).forEach((c,i)=>{const g=groups[Math.floor(i/2)];assert.ok(c.l>g.l&&c.r<g.r&&c.b>g.b&&c.t<g.t,'two unit cards fit each group');});
  assert.equal(4/2,2);assert.equal(2*2+3,7);assert.equal((7-3)/2,2);
  disjoint([-170,110,190].map(card));
  const overlap=xs.concat(left,right).map(card);overlap[1]={...overlap[0]};
  assert.throws(()=>disjoint(overlap),/interiors overlap/);
}
function signedFrames(file){
  const buffer=command('ffmpeg',['-nostdin','-v','error','-i',file,'-vf','crop=1280:60:0:330','-f','rawvideo','-pix_fmt','rgb24','-'],true);
  const frameBytes=1280*60*3;assert.equal(buffer.length,600*frameBytes,'all signed frames decoded');
  const centers=[];
  for(let offset=0;offset<buffer.length;offset+=frameBytes){
    let total=0,count=0;
    for(let j=0;j<frameBytes;j+=3){const r=buffer[offset+j],g=buffer[offset+j+1],b=buffer[offset+j+2];
      if(b-r>45&&g-r>18&&b-g>18&&b<180){total+=(j/3)%1280;count++;}}
    assert.ok(count>100,'blue position point remains visible in every frame');centers.push(total/count);
  }
  const expectedPosition=(frame,displacement=3)=>478+81*displacement*Math.max(0,Math.min(1,(frame/30-5)/3));
  function matches(displacement){centers.forEach((x,i)=>assert.ok(Math.abs(x-expectedPosition(i,displacement))<2,'rendered point follows fixed-origin number-line model'));}
  matches(3);
  assert.throws(()=>matches(4),/fixed-origin/,'incorrect displacement positive control');
  for(let i=1;i<centers.length;i++)assert.ok(centers[i]>=centers[i-1]-.7,'no backward movement during rightward translation');
  return Math.max(...centers.map((x,i)=>Math.abs(x-expectedPosition(i))));
}
function equationFrames(file){
  const buffer=command('ffmpeg',['-nostdin','-v','error','-i',file,'-vf','crop=1280:70:0:280','-f','rawvideo','-pix_fmt','rgb24','-'],true);
  const frameBytes=1280*70*3;assert.equal(buffer.length,690*frameBytes,'all equation frames decoded');
  // Both vertical borders identify the actual card. One horizontal strip alone
  // would falsely count an adjacent card near a former position after the cut.
  const centers=[235,325,433,505,577,739,806.5,874,941.5,1009,1076.5,1144,487,811];
  function present(frame,x){
    const counts=[0,0];
    for(let side=0;side<2;side++)for(let y=20;y<=45;y++)for(let xx=Math.round(x+(side?1:-1)*29.25)-1;xx<=Math.round(x+(side?1:-1)*29.25)+1;xx++){
      const p=frame*frameBytes+(y*1280+xx)*3;
      if(buffer[p]<150&&buffer[p+1]<150&&buffer[p+2]<150)counts[side]++;
    }
    return counts.every(n=>n>25);
  }
  const visible=[];
  for(let frame=0;frame<690;frame++){
    const actual=centers.map((x,i)=>present(frame,x)?i:null).filter(i=>i!==null);
    const expectedIndices=frame<300?[0,1,2,3,4,5,6,7,8,9,10,11]:frame<540?[0,1,5,6,7,8]:[5,12,13];
    assert.deepEqual(actual,expectedIndices,'actual symbolic cards in frame '+frame);
    visible.push(actual.length);
  }
  assert.throws(()=>assert.equal(visible[300],12,'removed cards must be absent'),/removed cards/,'stale quantity positive control');
  return visible;
}
function renderedReview(){
  assert.equal(sha('tools/media-scenes-jh1.py'),sourceHash,'independent reviewed scene source');
  assert.equal(sha('tools/render-media-jh1.py'),runnerHash,'reviewed local-only renderer');
  const source=read('tools/media-scenes-jh1.py'),runner=read('tools/render-media-jh1.py');
  for(const rule of ["importlib.metadata.version('manim') != '0.20.1'",'sys.addaudithook(no_network)','config.notify_outdated_version = False','config.plugins = []',"'-map_metadata', '-1'"])assert.ok(runner.includes(rule),'local renderer protection');
  let seconds=0,bytes=0,frames=0;
  for(const [code,review] of Object.entries(expected)){
    const relative='assets/lessons/'+code+'.mp4',file=path.join(root,relative);
    assert.equal(sha(relative),review.sha256,'reviewed actual media bytes');
    const scene=source.split('class '+review.scene+'(LocalLesson):')[1];assert.ok(scene,'expected scene');
    const captions=Array.from(scene.split('\nclass ')[0].matchAll(/self\.say\('([^'\n]*)'\)/g),m=>m[1]);
    assert.deepEqual(captions,review.transcript,'caption exact order');
    const metadata=JSON.parse(command('ffprobe',['-v','error','-show_entries','format=duration,size:stream=codec_type,codec_name,width,height,pix_fmt,nb_frames,r_frame_rate','-of','json',file]));
    assert.equal(metadata.streams.length,1,'single video, no audio');
    const s=metadata.streams[0];
    assert.deepEqual([s.codec_type,s.codec_name,s.width,s.height,s.pix_fmt,s.r_frame_rate],['video','h264',1280,720,'yuv420p','30/1']);
    assert.equal(Number(metadata.format.duration),review.seconds,'exact reviewed duration');
    assert.equal(Number(s.nb_frames),review.frames,'exact reviewed frame count');
    seconds+=review.seconds;frames+=review.frames;bytes+=Number(metadata.format.size);
  }
  geometry();
  const maximumDeviation=signedFrames(path.join(root,'assets/lessons/8350213111200000.mp4'));
  equationFrames(path.join(root,'assets/lessons/8350213131200000.mp4'));
  assert.throws(()=>assert.equal('0'.repeat(64),expected['8350213111200000'].sha256),'changed media digest positive control');
  assert.throws(()=>assert.deepEqual(expected['8350213111200000'].transcript.slice(1),expected['8350213111200000'].transcript),'missing caption positive control');
  return{seconds,frames,bytes,maximumDeviation};
}
function run(){
  const result=renderedReview();
  // Limited diagnostic mode never reports the full content-and-media PASS.
  if(process.argv.includes('--rendered-only')){
    console.log('JH1_MEDIA_RENDERED_ONLY=PASS frames='+result.frames+' signed_point_max_error_px='+result.maximumDeviation.toFixed(3)+' symbolic_cards=12,6,3 content_claims_review=NOT_RUN');return;
  }
  const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
  assert.equal(manifest.renderer.version,'0.20.1');assert.equal(manifest.renderer.sourceSha256,sourceHash);
  assert.deepEqual(manifest.videos.map(v=>v.code).sort(),Object.keys(expected).sort(),'exact reviewed video set');
  const sandbox={window:{}};
  for(const name of ['units.js','units-grade5.js','units-grade6.js','units-jh1.js']){
    const source=name==='units-jh1.js'&&process.env.BASIC_LEARNING_JH1_UNITS?fs.readFileSync(process.env.BASIC_LEARNING_JH1_UNITS,'utf8'):read('js/'+name);
    vm.runInNewContext(source,sandbox,{timeout:1000});
  }
  for(const video of manifest.videos){
    const e=expected[video.code];
    assert.equal(video.evidence,'verified');assert.equal(video.reviewedBy,'independent-evidence-agent');
    assert.equal(video.publicationApproval,false,'review is not operator publication approval');
    assert.equal(video.path,'assets/lessons/'+video.code+'.mp4');assert.equal(video.sha256,e.sha256);
    assert.deepEqual(video.transcript,e.transcript);assert.deepEqual(video.claimIds,['video']);
    const unit=sandbox.window.BL.data.units.find(u=>u.code===video.code);assert.ok(unit,'authored corresponding unit');
    const claim=unit.claims.find(c=>c.id==='video');assert.ok(claim&&claim.status==='verified','independently reviewed video claim');
    assert.equal(crypto.createHash('sha256').update(claim.text).digest('hex'),video.claimTextSha256,'reviewed video claim text');
  }
  console.log('JH1_MEDIA=PASS clips=2 decoded=2 frames='+result.frames+' h264=1280x720 audio=none seconds='+result.seconds+' bytes='+result.bytes);
  console.log('JH1_MEDIA_GEOMETRY=PASS fixed_origin=true signed_point_frames=600 signed_point_max_error_px='+result.maximumDeviation.toFixed(3)+' equation_card_frames=690 card_counts=12,6,3 positive_probes=5');
}
try{run();}catch(error){console.error('JH1_MEDIA=FAIL '+String(error.message).split('\n')[0].slice(0,240));process.exitCode=1;}
