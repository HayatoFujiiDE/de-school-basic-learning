'use strict';
// Independent measured-frame review. No rendering, network, install, or learner storage.
const fs=require('node:fs'),cp=require('node:child_process'),path=require('node:path'),assert=require('node:assert/strict'),vm=require('node:vm'),crypto=require('node:crypto');
const root=process.env.BASIC_LEARNING_ROOT||path.resolve(__dirname,'..');
const palette=[[190,211,231],[193,214,189],[241,203,160],[232,220,162]],W=210,H=200;
const rect=(x,y,w,h)=>[[x,y],[x+w,y],[x+w,y+h],[x,y+h]];
const fp=([x,y])=>[(208+54*x-190)/2,(432-54*y-140)/2];
const pp=([x,y])=>[(370+30.6*x-190)/2,(387-30.6*y-140)/2];
const models={
 '8350233121240000':[{color:0,vertices:rect(0,2,3,3).map(fp),area:9},{color:1,vertices:rect(0,0,3,2).map(fp),area:6},{color:2,vertices:rect(3,2,3,3).map(fp),area:9},{color:3,vertices:rect(3,0,3,2).map(fp),area:6}],
 '8350233231100000':[{color:0,vertices:[[0,0],[0,3],[-3,3],[-3,0]].map(pp),area:9},{color:1,vertices:[[0,0],[4,0],[4,-4],[0,-4]].map(pp),area:16},{color:2,vertices:[[4,0],[0,3],[3,7],[7,4]].map(pp),area:25}]
};
const area=ps=>Math.abs(ps.reduce((s,p,i)=>s+p[0]*ps[(i+1)%ps.length][1]-p[1]*ps[(i+1)%ps.length][0],0)/2);
function insideExpanded(x,y,vertices,pad=1.6){let signs=[];for(let i=0;i<vertices.length;i++){const a=vertices[i],b=vertices[(i+1)%vertices.length],dx=b[0]-a[0],dy=b[1]-a[1];const c=(dx*(y-a[1])-dy*(x-a[0]))/Math.hypot(dx,dy);if(Math.abs(c)>pad)signs.push(Math.sign(c));}return signs.every(s=>s===signs[0]);}
function components(buffer,offset){
 const grid=new Int8Array(W*H).fill(-1),best=palette.map(()=>null),stack=new Int32Array(W*H);
 for(let p=0;p<W*H;p++){let min=325,index=-1,o=offset+p*3;for(let c=0;c<4;c++){const d=(buffer[o]-palette[c][0])**2+(buffer[o+1]-palette[c][1])**2+(buffer[o+2]-palette[c][2])**2;if(d<min){min=d;index=c;}}grid[p]=index;}
 for(let pos=0;pos<W*H;pos++){
  const c=grid[pos];if(c<0)continue;let len=1;stack[0]=pos;grid[pos]=-1;const pts=[];let sx=0,sy=0,minX=W,maxX=0,minY=H,maxY=0;
  while(len){let p=stack[--len],x=p%W,y=(p/W)|0;pts.push([x,y]);sx+=x;sy+=y;minX=Math.min(x,minX);maxX=Math.max(x,maxX);minY=Math.min(y,minY);maxY=Math.max(y,maxY);for(const q of [x>0?p-1:-1,x+1<W?p+1:-1,y>0?p-W:-1,y+1<H?p+W:-1])if(q>=0&&grid[q]===c){grid[q]=-1;stack[len++]=q;}}
  if(!best[c]||pts.length>best[c].count)best[c]={count:pts.length,x:sx/pts.length,y:sy/pts.length,minX,maxX,minY,maxY,pts};
 }
 return best;
}
function verify(metric,model){assert.ok(metric&&metric.count,'painted region exists');const a=area(model.vertices);assert.ok(metric.count/a>=.82&&metric.count/a<=1.03,'region raster area matches mathematical area');const xs=model.vertices.map(p=>p[0]),ys=model.vertices.map(p=>p[1]);for(const[k,v]of [['minX',Math.min(...xs)],['maxX',Math.max(...xs)],['minY',Math.min(...ys)],['maxY',Math.max(...ys)]])assert.ok(k.startsWith('min') ? metric[k]>=v-1.6 && metric[k]<=v+4 : metric[k]>=v-4 && metric[k]<=v+1.6,'region bounds fixed '+k);const cx=xs.reduce((a,b)=>a+b)/4,cy=ys.reduce((a,b)=>a+b)/4;assert.ok(Math.abs(metric.x-cx)<2&&Math.abs(metric.y-cy)<2,'region center fixed');assert.ok(metric.pts.every(([x,y])=>insideExpanded(x+.5,y+.5,model.vertices)),'region pixels remain inside independent polygon');}
function geometryFrames(code){
 const r=cp.spawnSync('ffmpeg',['-nostdin','-v','error','-i',path.join(root,'assets/lessons',code+'.mp4'),'-vf','crop=420:400:190:140,scale=210:200:flags=area','-f','rawvideo','-pix_fmt','rgb24','-'],{maxBuffer:100*1024*1024});assert.ok(!r.error);assert.equal(r.status,0);const b=r.stdout;assert.equal(b.length,660*W*H*3);
 const stats=models[code].map(m=>({color:m.color,min:Infinity,max:0,expected:area(m.vertices)}));let last;
 for(let f=0;f<660;f++){let ms=components(b,f*W*H*3);for(let i=0;i<models[code].length;i++){let m=models[code][i],metric=ms[m.color];try{verify(metric,m);}catch(e){throw new Error(code+' frame'+f+' color'+m.color+' '+e.message);}stats[i].min=Math.min(stats[i].min,metric.count);stats[i].max=Math.max(stats[i].max,metric.count);}last=ms;}
 motionFrames(code,b);return {frames:660,stats,last};
}

const lines={
 '8350233121240000':[{start:150,a:[90,146],b:[90,11],rgb:[153,85,25]},{start:330,a:[9,146],b:[171,146],rgb:[70,112,96]}],
 '8350233231100000':[{start:150,a:[44.1,123.5],b:[44.1,77.6],rgb:[70,112,96]},{start:330,a:[151.2,123.5],b:[90,77.6],rgb:[153,85,25]}]
};
function scan(b,offset,l){let values=[],maxPerp=0;const dx=l.b[0]-l.a[0],dy=l.b[1]-l.a[1],length=Math.hypot(dx,dy);
 for(let y=0;y<200;y++)for(let x=0;x<210;x++){
  let p=offset+(y*210+x)*3,d=(b[p]-l.rgb[0])**2+(b[p+1]-l.rgb[1])**2+(b[p+2]-l.rgb[2])**2;if(d>30**2)continue;
  let perp=Math.abs(dx*(y+.5-l.a[1])-dy*(x+.5-l.a[0]))/length,along=((x+.5-l.a[0])*dx+(y+.5-l.a[1])*dy)/length;
  if(perp>3||along< -3||along>length+3)continue;values.push(along);maxPerp=Math.max(perp,maxPerp);
 }
 return {count:values.length,min:Math.min(...values),max:Math.max(...values),maxPerp};
}
// Active stroke tips are antialiased: compare pixels to the draw-start frame,
// not to an opaque paint color. Stage-static complete edges use nominal color.
function difference(b,off,base,l){let values=[],maxPerp=0,points=[];const dx=l.b[0]-l.a[0],dy=l.b[1]-l.a[1],length=Math.hypot(dx,dy);
 for(let y=0;y<200;y++)for(let x=0;x<210;x++){
  let perp=Math.abs(dx*(y+.5-l.a[1])-dy*(x+.5-l.a[0]))/length,along=((x+.5-l.a[0])*dx+(y+.5-l.a[1])*dy)/length;if(x<Math.min(l.a[0],l.b[0])-5||x>Math.max(l.a[0],l.b[0])+5||y<Math.min(l.a[1],l.b[1])-5||y>Math.max(l.a[1],l.b[1])+5)continue;
  let p=(y*210+x)*3,delta=[0,1,2].map(i=>b[off+p+i]-b[base+p+i]);if(Math.hypot(...delta)<=22)continue;
  let to=[0,1,2].map(i=>l.rgb[i]-b[base+p+i]);if(delta.reduce((s,d,i)=>s+d*to[i],0)/(Math.hypot(...delta)*Math.hypot(...to))<.65)continue;
  points.push({x,y,along,perp});
 }
 const lookup=new Map(points.map((p,i)=>[p.y*210+p.x,i])),visited=new Set();let best=[];for(let i=0;i<points.length;i++){if(visited.has(i))continue;let stack=[i],part=[];visited.add(i);while(stack.length){let k=stack.pop(),p=points[k];part.push(p);for(let yy=-1;yy<=1;yy++)for(let xx=-1;xx<=1;xx++){let n=lookup.get((p.y+yy)*210+p.x+xx);if(n!==undefined&&!visited.has(n)){visited.add(n);stack.push(n);}}}if(part.length>best.length)best=part;}values=best.map(p=>p.along);maxPerp=best.reduce((s,p)=>Math.max(s,p.perp),0);return{count:values.length,min:Math.min(...values),max:Math.max(...values),maxPerp,perp95:best.map(p=>p.perp).sort((a,b)=>a-b)[Math.floor(best.length*.95)]||0};
}

const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const fileHash=p=>hash(fs.readFileSync(path.join(root,p)));
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const sceneHash='8a798fefa9476548429b2e090dc2e7ec52e5a6590906f650b8c6c369d053176a';
const runnerHash='078641076d94b548d899b661be6395e4c68ad85cf944de65df66426414187979';
const expected={
 '8350233121240000':{sha256:'34da525fb9acf470b4683aec8ceb22e54b6223a2843c2b2f082b3a789598812c',transcript:[
 '辺の長さが正のとき、面積は縦と横の積で表せる。',
 '同じ文字の項をまとめる。面積の合計は変わらない。',
 '同じ長方形の面積を、二つの辺の積で表し直す。',
 '因数分解した式を展開すると、元の式に戻る。']},
 '8350233231100000':{sha256:'ef3aa97754c46967beb6d02caa6c72683e8edc4d4fdb9571d7da6fa0a39afb18',transcript:[
 '3、4、5の直角三角形。三辺の外側に正方形を作る。',
 '直角をはさむ二辺の正方形は、面積9と16。',
 '斜辺の正方形の面積25は、9と16の和に等しい。',
 'これは数値の例。成り立つ理由は、上の段階解説で。']}
};
function command(binary,args){const r=cp.spawnSync(binary,args,{encoding:'utf8',maxBuffer:1024*1024});assert.ok(!r.error,binary+' runs');assert.equal(r.status,0,binary+' returned nonzero');return r.stdout;}
function close(a,b,tolerance,label){assert.ok(Math.abs(a-b)<=tolerance,label);}
function checkMotion(m,l,f){
 const length=Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1]),tip=length*Math.min(1,Math.max(0,(f-l.start)/60));
 // At most two isolated matching pixels occur on compressed black/green borders
 // before drawing. First <3px of a segment are below reliable raster resolution.
 if(f<=l.start){assert.ok(m.count<=2,'highlight not present before its phase');return;}
 if(tip<3)return;
 assert.ok(m.count>0,'animated line is visible');close(m.min,0,3,'line starts at the fixed endpoint');close(m.max,tip,3.2,'line tip follows elapsed time');
 assert.ok((m.perp95===undefined?m.maxPerp:m.perp95)<=2.5,'highlight follows its independent geometric edge');
}
function motionFrames(code,buffer){
 for(let f=0;f<660;f++){
  for(const l of lines[code]){const m=f>l.start&&f<=l.start+60?difference(buffer,f*W*H*3,l.start*W*H*3,l):scan(buffer,f*W*H*3,l);try{checkMotion(m,l,f);}catch(e){throw new Error(JSON.stringify({code,frame:f,start:l.start,metric:m,reason:e.message}));}}
  if(code==='8350233231100000'){
   // Two interior legs of the right-angle marker, away from triangle edges.
   for(const [x,y]of [[95,120],[92,118]]){
    let dark=0;for(let yy=y;yy<=y+1;yy++)for(let xx=x;xx<=x+1;xx++){const p=(f*W*H+yy*W+xx)*3;if(Math.max(buffer[p],buffer[p+1],buffer[p+2])<150)dark++;}
    assert.ok(dark>=1,'right angle marker remains visible');
   }
  }
 }
 const l=lines[code][0],actualLater=difference(buffer,(l.start+40)*W*H*3,l.start*W*H*3,l);
 assert.throws(()=>checkMotion(actualLater,l,l.start+10),/elapsed time/,'actual later frame cannot stand in for an earlier drawing phase');
}
function sourceMath(){
 assert.equal(fileHash('tools/media-scenes-jh3.py'),sceneHash,'reviewed original scene source');
 assert.equal(fileHash('tools/render-media-jh3.py'),runnerHash,'reviewed local renderer');
 const source=read('tools/media-scenes-jh3.py'),runner=read('tools/render-media-jh3.py');
 for(const clip of Object.values(expected))for(const line of clip.transcript)assert.ok(source.includes("self.say('"+line+"')"),'exact reviewed caption');
 for(const guard of ["importlib.metadata.version('manim') != '0.20.1'",'sys.addaudithook(no_network)','config.notify_outdated_version = False','config.plugins = []',"'-map_metadata', '-1'"])assert.ok(runner.includes(guard),'reviewed renderer safeguard');
 // Independent polynomial coefficients, numeric substitution, and positive model.
 assert.deepEqual([1,2+3,2*3],[1,5,6]);assert.equal(3*3+2*3+3*3+6,(3+2)*(3+3));assert.equal((3+2)*(3+3),30);
 for(const x of [-5,-1,0,.5,3,7])assert.equal(x*x+5*x+6,(x+2)*(x+3));
 const triangle=[[0,0],[4,0],[0,3]];assert.equal(area(triangle),6);assert.equal(4*0+0*3,0);assert.equal(Math.hypot(4,-3),5);
 const squares=[[[0,0],[0,3],[-3,3],[-3,0]],[[0,0],[4,0],[4,-4],[0,-4]],[[4,0],[0,3],[3,7],[7,4]]];
 for(let k=0;k<3;k++){let ps=squares[k];assert.equal(area(ps),[9,16,25][k]);for(let i=0;i<4;i++){let a=ps[i],b=ps[(i+1)%4],c=ps[(i+2)%4];assert.equal((b[0]-a[0])**2+(b[1]-a[1])**2,[9,16,25][k]);assert.ok((b[0]-a[0])*(c[0]-b[0])+(b[1]-a[1])*(c[1]-b[1])===0,'adjacent square sides perpendicular');}}
 assert.equal(9+16,25);
 // Each square shares one complete triangle side, on the exterior half-plane.
 for(let k=0;k<3;k++){let ps=squares[k],a=ps[0],b=ps[1],cx=ps.reduce((s,p)=>s+p[0],0)/4,cy=ps.reduce((s,p)=>s+p[1],0)/4;const cross=p=>(b[0]-a[0])*(p[1]-a[1])-(b[1]-a[1])*(p[0]-a[0]);assert.ok(cross([cx,cy])*cross([4/3,1])<0,'square on exterior side');}
 function contrast(a,b){const lum=h=>{let v=[1,3,5].map(i=>parseInt(h.slice(i,i+2),16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);return .2126*v[0]+.7152*v[1]+.0722*v[2];};let x=lum(a),y=lum(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05);}
 for(const ink of ['#292c29','#467060','#995519'])assert.ok(contrast(ink,'#f7f5f0')>=4.5,'ordinary text contrast');
 for(const tile of ['#bed3e7','#c1d6bd','#f1cba0','#e8dca2'])assert.ok(contrast('#292c29',tile)>=4.5,'tile label contrast');
 assert.throws(()=>assert.ok(contrast('#ad672b','#f7f5f0')>=4.5,'old orange'),/old orange/);
}
function positiveProbes(results){
 const code='8350233121240000',m=results[code].last[0],model=models[code][0];
 assert.throws(()=>verify({...m,count:0},model),/region exists/,'missing region rejected');
 assert.throws(()=>verify({...m,count:m.count/2},model),/raster area/,'lost area rejected');
 const shifted={...m,x:m.x+5,minX:m.minX+5,maxX:m.maxX+5,pts:m.pts.map(([x,y])=>[x+5,y])};
 assert.throws(()=>verify(shifted,model),/bounds fixed|center fixed|independent polygon/,'translated region rejected');
 const wrong={...model,vertices:model.vertices.map(([x,y])=>[x*1.3,y])};assert.throws(()=>verify(m,wrong),/area|bounds|center|polygon/,'wrong rectangle model rejected');
 const l=lines[code][1],len=Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1]);
 assert.throws(()=>checkMotion({count:100,min:0,max:len-10,maxPerp:0},l,659),/elapsed time/,'delayed highlight rejected');
 assert.throws(()=>checkMotion({count:100,min:0,max:len,maxPerp:4},l,659),/geometric edge/,'off-edge highlight rejected');
 assert.throws(()=>checkMotion({count:100,min:0,max:len,maxPerp:0},l,100),/before its phase/,'early highlight rejected');
}
function main(){
 sourceMath();let bytes=0;const results={};
 for(const[code,clip]of Object.entries(expected)){
  const rel='assets/lessons/'+code+'.mp4',file=path.join(root,rel);assert.equal(fileHash(rel),clip.sha256,'reviewed media bytes');bytes+=fs.statSync(file).size;
  const meta=JSON.parse(command('ffprobe',['-v','error','-show_entries','format=duration:stream=codec_type,codec_name,width,height,pix_fmt,nb_frames,r_frame_rate','-of','json',file]));assert.equal(meta.streams.length,1,'silent video');const s=meta.streams[0];assert.deepEqual([s.codec_type,s.codec_name,s.width,s.height,s.pix_fmt,s.nb_frames,s.r_frame_rate],['video','h264',1280,720,'yuv420p','660','30/1']);assert.equal(Number(meta.format.duration),22);
  command('ffmpeg',['-nostdin','-v','error','-i',file,'-f','null','-']);results[code]=geometryFrames(code);
 }
 positiveProbes(results);
 if(process.argv.includes('--geometry-only')){console.log('JH3_MEDIA_PARTIAL=PASS clips=2 decoded=2 frames=1320 fixed_areas=true boundary_motion=true positive_probes=9 claims_pending=true publication_approval=false');return;}
 const manifest=JSON.parse(fs.readFileSync(process.env.BASIC_LEARNING_JH3_MEDIA_MANIFEST||path.join(root,'sources/media-jh3-manifest.json'),'utf8'));
 assert.equal(manifest.renderer.version,'0.20.1');assert.equal(manifest.renderer.sourceSha256,sceneHash);assert.equal(manifest.publicationApproval,false);
 assert.deepEqual(manifest.videos.map(v=>v.code),Object.keys(expected),'exact two clips');
 const w={};for(const name of ['units.js','units-grade5.js','units-grade6.js','units-jh1.js','units-jh2.js','units-jh3.js']){const source=name==='units-jh3.js'&&process.env.BASIC_LEARNING_JH3_UNITS?fs.readFileSync(process.env.BASIC_LEARNING_JH3_UNITS,'utf8'):read('js/'+name);vm.runInNewContext(source,{window:w},{timeout:1000});}
 for(const video of manifest.videos){const clip=expected[video.code];assert.equal(video.path,'assets/lessons/'+video.code+'.mp4');assert.equal(video.sha256,clip.sha256);assert.equal(video.evidence,'verified');assert.deepEqual(video.transcript,clip.transcript);assert.deepEqual(video.claimIds,['video']);const unit=w.BL.data.units.find(u=>u.code===video.code),claim=unit&&unit.claims.find(c=>c.id==='video');assert.ok(claim&&claim.status==='verified','reviewed video claim');assert.equal(video.claimTextSha256,hash(claim.text),'reviewed caption facts');}
 console.log('JH3_MEDIA=PASS clips=2 decoded=2 frames=1320 h264=1280x720 audio=none seconds=44 bytes='+bytes);
 console.log('JH3_MEDIA_GEOMETRY=PASS factor_frames=660 pythagoras_frames=660 colored_regions=7 fixed_area_model=true boundary_motion=true right_angle_marker=true positive_probes=9');
}
try{main();}catch(error){console.error('JH3_MEDIA=FAIL '+String(error.message).split('\n')[0].slice(0,220));process.exitCode=1;}
