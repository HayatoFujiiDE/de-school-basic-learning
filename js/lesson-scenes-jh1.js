(function () {
  'use strict';
  var BL = window.BL;
  if (!BL || !BL.lessonScenes || BL.jh1Lessons) return;
  var own = function (o, k) { return Object.prototype.hasOwnProperty.call(o, k); };
  var green='#467060',pale='#dce9df',orange='#ad672b',sand='#f4d9b5',ink='#343c32',paper='#fffdf8',gray='#d6ddd2';
  function e(v){return String(v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function n(v){return Number(v.toFixed(5));}
  function sign(v){return v<0?'−'+Math.abs(v):String(v);}
  function id(k){return k?' id="jh1-scene-'+k+'"':'';}
  function text(x,y,v,size,k){return '<text'+id(k)+' x="'+n(x)+'" y="'+n(y)+'" font-size="'+(size||28)+'" fill="'+ink+'" text-anchor="middle">'+e(v)+'</text>';}
  function line(x,y,xx,yy,color,k){return '<line'+id(k)+' x1="'+n(x)+'" y1="'+n(y)+'" x2="'+n(xx)+'" y2="'+n(yy)+'" stroke="'+(color||green)+'" stroke-width="2.5"/>';}
  function rect(x,y,w,h,fill,k,stroke){return '<rect'+id(k)+' x="'+n(x)+'" y="'+n(y)+'" width="'+n(w)+'" height="'+n(h)+'" fill="'+fill+'" stroke="'+(stroke||green)+'" stroke-width="1.5"/>';}
  function dot(x,y,r,fill,k){return '<circle'+id(k)+' cx="'+n(x)+'" cy="'+n(y)+'" r="'+r+'" fill="'+fill+'" stroke="'+green+'" stroke-width="2"/>';}
  function path(d,fill,k,color){return '<path'+id(k)+' d="'+d+'" fill="'+(fill||'none')+'" stroke="'+(color||green)+'" stroke-width="2.5"/>';}
  function arc(cx,cy,r,a,b,k,color){return path('M'+n(cx+r*Math.cos(a))+' '+n(cy-r*Math.sin(a))+' A'+r+' '+r+' 0 '+(b-a>Math.PI?1:0)+' 0 '+n(cx+r*Math.cos(b))+' '+n(cy-r*Math.sin(b)),'none',k,color);}
  function footer(v){return text(300,378,v,28,'summary');}
  function def(title,prompt,steps,challenge,state,label){return {title:title,prompt:prompt,claimIds:['motion'],steps:steps.map(function(s){return {label:s[0],text:s[1],alt:s[2]};}),challenge:{prompt:challenge[0],options:challenge[1],answer:challenge[2],explanation:challenge[3],claimIds:['motion']},tryIt:{label:label,state:state}};}
  var items=Object.create(null),draws=Object.create(null);
  function add(suffix,item,draw){var code='835021'+suffix;items[code]=item;draws[code]=draw;}
  function numberLine(){var b=line(100,235,500,235,ink,'number-axis');for(var v=-5;v<=5;v++)b+=line(300+40*v,229,300+40*v,241,gray)+text(300+40*v,278,sign(v),23);return b;}
  add('3111200000',def('負の数を引くと、どちらへ進む？','(−2)−(−3)を、足し算に直して数直線で確かめよう。',[
    ['足し算に直す','負の数−3を引くことは、その反対の数+3を足すこと。先に(−2)+3へ直す。','(−2)−(−3)を(−2)+3に書き換えた式。数直線の原点は固定。'],
    ['−2から始める','0の左へ2の場所が−2。ここを、次の移動の出発点にする。','数直線の−2に出発点がある。0は中央に固定。'],
    ['右へ3をたどる','+3を足すので右へ3。薄い線が移動の全経路で、橙色の線が順にたどる部分。','−2から1への薄い経路を残し、その上を橙色の線でたどる。途中の線は全移動ではない。'],
    ['終点を読む','右へ3進んだ終点は1。(−2)−(−3)=(−2)+3=1。','出発点−2と終点1が固定した数直線にある。答え1を示す。']
  ],['(−2)−(−3)を直した足し算は？',['(−2)+3','(−2)+(−3)','2+3'],'(−2)+3','引く数−3の反対の数+3を足す。'],{a:-2,b:-3,op:'sub'},'同じ式から、数を変えてためす'),function(step,p){var b=numberLine()+text(300,55,'(−2) − (−3) = (−2) + 3',30,'add-rewrite');if(step>0)b+=dot(220,235,7,green,'add-start')+text(220,325,'出発 −2',25);if(step>=2){b+=line(220,175,340,175,gray,'add-full-path')+dot(340,235,7,'none','add-target');b+=line(220,175,220+120*(step===2?p:1),175,orange,'add-trace')+text(300,130,'右へ3',27);}if(step===3)b+=dot(340,235,8,orange,'add-end');return b+footer(step<3?'引く−3を、足す+3へ':'(−2) − (−3) = 1');});
  add('3112100000',def('積の表を、0の先へ続ける','(−2)にかける数を1ずつ減らすと、積はどう変わる？',[
    ['正の数をかけた所から','(−2)×3=−6、(−2)×2=−4、(−2)×1=−2。かける数を1減らすたびに積が2増える。','かける数3から−3までの表。正の数をかける最初の三行に注目する。'],
    ['同じ増え方を確かめる','積は−6、−4、−2、0と2ずつ増える。表の行は動かさず、順にたどる。','固定した表の−6から0までの値と、2ずつ増える規則。'],
    ['0の次へ進む','(−2)×0=0。その次も2増えるので、(−2)×(−1)=2。','0の行と、かける数−1で積2になる行を強調する。'],
    ['負の数どうしの積を読む','同じ規則を続けると、(−2)×(−2)=4、(−2)×(−3)=6となる。','表の最後の行で、負の数−2と−3の積が正の数6になる。']
  ],['(−2)×(−3)は？',['6','−6','−5'],'6','かける数を1ずつ減らすと、積が2ずつ増える表を続ける。'],{a:-2,b:'-3',op:'mul'},'同じ積から、かける数を変える'),function(step,p){var b=text(210,38,'かける数',25)+text(390,38,'積',25),focus=step===0?0:step===1?Math.min(3,Math.floor(3*p)):step===2?4:6;for(var i=0;i<7;i++){var k=3-i,y=57+i*39;b+=rect(145,y,310,36,i===focus?sand:paper,'multiply-row-'+i)+text(210,y+27,sign(k),25,'multiply-factor-'+i)+text(390,y+27,sign(-2*k),25,'multiply-product-'+i);}return b+footer(step===3?'(−2) × (−3) = 6':'かける数は−1ずつ、積は+2ずつ');});
  add('3131200000',def('両辺に、同じ操作をする','2x+3=7。等しい関係を保ちながら、xを求めよう。',[
    ['両辺が等しい式','左辺2x+3と右辺7は等しい。この関係を保ったまま式を変える。','2x+3=7の左右を分けて表示する。'],
    ['両辺から3を引く','左辺からも右辺からも3を引く。(2x+3)−3=7−3だから、2x=4。','両辺から3を引く操作と、整理した2x=4が同時にある。片側だけを変えない。'],
    ['両辺を2でわる','2x=4の両辺を2でわる。2x÷2=4÷2なので、x=2。','両辺を2でわる操作と、その結果x=2を表示する。'],
    ['もとの式へ戻す','x=2を代入すると2×2+3=7。左辺と右辺が同じ7になる。','2×2+3=7、続いて7=7と示し、答えを確かめる。']
  ],['左辺から3を引いたら、右辺は？',['3を引く','3を足す','そのまま'],'3を引く','左右に同じ操作をすると、等しい関係が保たれる。'],{step:0},'式の各段階を自分で確かめる'),function(step,p){var forms=[['2x + 3','7','左右が等しい'],['(2x + 3) − 3','7 − 3','2x = 4'],['2x ÷ 2','4 ÷ 2','x = 2'],['2 × 2 + 3','7','7 = 7']],v=forms[step],b=rect(30,85,245,110,pale,'equation-left-frame')+rect(325,85,245,110,pale,'equation-right-frame')+text(152.5,153,v[0],28,'equation-left')+text(300,153,'=',31)+text(447.5,153,v[1],28,'equation-right');if(step===1||step===2)b+=line(45,215,45+215*p,215,orange,'equation-left-guide')+line(340,215,340+215*p,215,orange,'equation-right-guide');b+=text(300,280,v[2],34,'equation-result');return b+footer(step===1?'両辺から3を引く':step===2?'両辺を2でわる':step===3?'代入して、両辺が同じと確かめる':'左辺 = 右辺');});
  function graph(max){var scale=120/max,b='';for(var i=-max;i<=max;i+=max/3){b+=line(180,190-i*scale,420,190-i*scale,gray)+line(300+i*scale,70,300+i*scale,310,gray);}b+=line(160,190,445,190,ink,'graph-x-axis')+line(300,325,300,55,ink,'graph-y-axis')+text(465,198,'x',25)+text(300,30,'y',25)+text(280,216,'0',22)+text(180,218,'−'+max,21)+text(420,218,max,21)+text(271,78,max,21)+text(267,318,'−'+max,21);return {body:b,point:function(x,y){return [300+x*scale,190-y*scale];}};}
  function graphPath(points,g,key,color){return path(points.map(function(p,i){var q=g.point(p[0],p[1]);return(i?' L':'M')+n(q[0])+' '+n(q[1]);}).join(''),'none',key,color);}
  add('3311400000',def('比例の式から、点を置いて直線へ','y=−2x。原点と、式に合う点を結びつけよう。',[
    ['原点を置く','x=0ならy=0。比例のグラフは原点(0,0)を通る。','同じ単位のx軸とy軸を固定し、原点を示す。'],
    ['負のxの点を置く','x=−2ならy=(−2)×(−2)=4。点(−2,4)を置く。','横−2、たて4の位置に固定した点と、そこへ進む補助線。'],
    ['正のxの点を置く','x=1ならy=−2、x=2ならy=−4。点(1,−2)、(2,−4)も同じ式に合う。','原点と、点(−2,4)、(1,−2)、(2,−4)が正しい座標にある。'],
    ['直線として見る','式y=−2xに合う点を続けると、原点を通る右下がりの直線になる。','固定した同尺度の軸に、y=−2xの直線と四つの点を表示する。']
  ],['x=2のときのyは？',['−4','4','−2'],'−4','y=−2xへx=2を入れると、(−2)×2=−4。'],{a:'-2',x:2},'同じ比例から、係数を変えてみる'),function(step,p){var g=graph(6),b=g.body;if(step===3)b+=graphPath([[-3,6],[3,-6]],g,'proportional-line');var points=[[0,0]].concat(step>0?[[-2,4]]:[]).concat(step>1?[[1,-2],[2,-4]]:[]);points.forEach(function(v,i){var q=g.point(v[0],v[1]);b+=dot(q[0],q[1],6,i?orange:green,'proportional-point-'+i);});if(step===1){var q=g.point(-2,4);b+=line(300,190,260,190,orange,'proportional-x-guide')+line(260,190,260,190+(q[1]-190)*p,orange,'proportional-y-guide');}return b+footer('y = −2x');});
  function inversePoints(a,negative){var out=[];for(var i=0;i<=80;i++){var x=Math.abs(a)/12+(12-Math.abs(a)/12)*i/80;if(negative)x=-x;out.push([x,a/x]);}return out;}
  add('3310000000',def('反比例の二つの枝を読む','y=6/xの点を、正の側と負の側に置こう。x=0は使えない。',[
    ['積が6になる点を読む','xとyの積が6になる。例えばx=1ならy=6、x=−1ならy=−6。','y=6/xの対応表。正のxと負のxを分け、八組のxとyを示す。'],
    ['正の側の枝を見る','xが正ならyも正。xが大きくなるにつれyが小さくなる曲線を見る。','第一象限にy=6/xの曲線を示す。原点や軸とは交わらない。'],
    ['負の側も続ける','xが負ならyも負。左の枝と右の枝を、x=0をまたぐ線で結ばない。','第一象限と第三象限に分かれた二つの枝。左右は接続しない。'],
    ['係数の符号を変える','式をy=−6/xへ切り替える。積が−6なので、xとyの符号は反対になる。','係数を離散的に−6へ切り替えた、第二象限と第四象限の曲線。']
  ],['y=6/xで、式に入れられないxは？',['0','1','−1'],'0','0でわることはできない。グラフもx=0を通る線で結ばない。'],{a:'6',x:'2'},'同じ反比例から、係数を選ぶ'),function(step,p){var a=step===3?-6:6,g=graph(12),b='';if(step===0){b=text(300,36,'対応するxとy',28);[-1,1].forEach(function(signum,col){var cx=160+280*col;b+=text(cx-45,80,'x',26)+text(cx+45,80,'y',26);[1,2,3,6].forEach(function(v,row){var x=signum*v,y=110+row*48;b+=rect(cx-100,y-3,200,43,paper,'inverse-table-row-'+col+'-'+row)+text(cx-45,y+27,sign(x),27,'inverse-table-x-'+col+'-'+row)+text(cx+45,y+27,sign(6/x),27,'inverse-table-y-'+col+'-'+row);});});}else{b=g.body+graphPath(inversePoints(a,false),g,'inverse-positive',step===1?gray:green);if(step>=2)b+=graphPath(inversePoints(a,true),g,'inverse-negative',step===2?gray:green);if((step===1||step===2)&&p>0)b+=graphPath(inversePoints(a,step===2).slice(0,Math.max(2,1+Math.floor(80*p))),g,'inverse-trace',green);[-6,-3,-2,-1,1,2,3,6].forEach(function(x,i){var q=g.point(x,a/x);b+=dot(q[0],q[1],4,orange,'inverse-point-'+i);});}return b+footer('y = '+sign(a)+'/x、xy = '+sign(a));});
  add('3211100000',def('同じ距離の二点から、垂直二等分線へ','線分ABを垂直に二等分する線を、円弧を使って作ろう。',[
    ['線分ABを置く','ABの長さは6cm。半分の3cmより大きい、半径5cmで円弧を描く。','水平な線分AB。長さ6cmで、AとBを固定する。'],
    ['Aから半径5cmの円弧','コンパスの開きを5cmに保って、Aを中心とする円弧を描く。','Aからの距離が5cmで一定の円弧をたどる。'],
    ['Bからも同じ半径','開きを変えず、Bからも半径5cmの円弧を描く。二つの交点C、Dを取る。','AとBから距離5cmの二交点C、D。円弧をたどる途中も半径は同じ。'],
    ['二つの交点を結ぶ','CとDを結ぶと、ABに垂直で、その中点を通る。これが垂直二等分線。','CとDを結ぶ直線がABの中点を通り、直角で交わる。']
  ],['Bから円弧を描くとき、半径は？',['5cmのまま','3cmにする','6cmにする'],'5cmのまま','AとBから同じ距離の点を使うので、コンパスの開きを変えない。'],{kind:'bisector',step:0},'同じ作図を、段階ごとにためす'),function(step,p){var b=line(225,180,375,180,ink,'construction-ab')+dot(225,180,5,green,'construction-a')+dot(375,180,5,green,'construction-b')+text(205,220,'A',26)+text(395,220,'B',26);if(step>=1){b+='<circle'+id('construction-circle-a')+' cx="225" cy="180" r="125" fill="none" stroke="'+gray+'" stroke-width="2"/>';if(step===1&&p>0)b+=arc(225,180,125,-Math.PI,-Math.PI+2*Math.PI*Math.min(p,0.999999),'construction-trace-a',green);else if(step>1)b+=arc(225,180,125,-Math.PI,Math.PI-0.000001,'construction-trace-a',green);}if(step>=2){b+='<circle'+id('construction-circle-b')+' cx="375" cy="180" r="125" fill="none" stroke="'+gray+'" stroke-width="2"/>';if(step===2&&p>0)b+=arc(375,180,125,-Math.PI,-Math.PI+2*Math.PI*Math.min(p,0.999999),'construction-trace-b',green);else if(step>2)b+=arc(375,180,125,-Math.PI,Math.PI-0.000001,'construction-trace-b',green);b+=dot(300,80,6,orange,'construction-c')+dot(300,280,6,orange,'construction-d')+text(330,80,'C',25)+text(330,288,'D',25);}if(step===3)b+=line(300,60,300,310,orange,'construction-bisector')+path('M300 168 L312 168 L312 180','none','construction-right-angle',orange);return b+footer(step<2?'AB=6cm、円弧の半径は5cm':'A、Bから同じ距離の二点を結ぶ');});
  function sector(cx,cy,r,start,end,key,fill){return path('M'+cx+' '+cy+' L'+n(cx+r*Math.cos(start))+' '+n(cy-r*Math.sin(start))+' A'+r+' '+r+' 0 0 0 '+n(cx+r*Math.cos(end))+' '+n(cy-r*Math.sin(end))+' Z',fill,key);}
  add('3221200000',def('円の3分の1から、扇形の長さと面積へ','半径3cm、中心角120°の扇形。円全体と比べて考えよう。',[
    ['半径3cmの円を見る','円全体の中心角は360°。三つの等しい120°の扇形で、円を作れる。','半径3cmの円を、同じ120°の扇形三つに分ける。'],
    ['120°は全体の1/3','120÷360=1/3。色の扇形は円全体の3分の1。','三つの区画を全て残し、そのうち一つを色で選ぶ。'],
    ['弧の長さを求める','円周2π×3=6πcmの1/3だから、弧の長さは2πcm。弧を順になぞって確かめる。','選んだ120°の円弧をなぞる。薄い全弧を残し、途中の線を全長とは呼ばない。'],
    ['面積と周を区別する','面積はπ×3²の1/3で3πcm²。周の長さには半径2本も含むので、2π+6cm。','三つの扇形のうち一つの面積3πcm²。周には弧と半径2本がある。']
  ],['この扇形の弧の長さは？',['2πcm','3πcm','6πcm'],'2πcm','円周6πcmの1/3なので2πcm。周の長さにはさらに半径2本を足す。'],{r:3,angle:'120'},'同じ扇形から、半径や角度を変える'),function(step,p){var b='';for(var i=0;i<3;i++)b+=sector(300,180,115,i*2*Math.PI/3,(i+1)*2*Math.PI/3,'sector-piece-'+i,step>0&&i===0?sand:pale);b+=text(300,35,'半径3cm',27);if(step===2&&p>0)b+=arc(300,180,115,0,2*Math.PI/3*p,'sector-arc-trace',orange);if(step===3)b+=line(300,180,415,180,orange,'sector-radius-0')+line(300,180,242.5,180-115*Math.sqrt(3)/2,orange,'sector-radius-1');b+=text(300,330,step<2?'120° ÷ 360° = 1/3':step===2?'弧：6π × 1/3 = 2π cm':'周：弧2π + 半径3 + 半径3',26);return b+footer(step===3?'面積：9π × 1/3 = 3π cm²':'円全体の3分の1');});
  var trialRecord='0101101011010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101';
  add('3421100000',def('回数を増やして、割合を読み直す','架空の記録Aを順に読む。表の回数だけでなく、読んだ回数全体との割合を見よう。',[
    ['10回の記録を読む','最初の10回は表6回、裏4回。表の割合は6/10=0.6。白い枠はまだ読んでいない。','100枠のうち最初の10枠だけに色があり、表6回と裏4回を区別する。'],
    ['20回まで順に読む','途中も、その時点までの表の回数と全体の回数で割合を計算する。20回まで読むと表11回、割合0.55。','10回から20回へ記録を一つずつ読み、実際に読んだ回数と表の回数に合わせて表示を更新する。'],
    ['50回まで読み進める','同じ記録を続けて読む。50回では表26回、割合26/50=0.52となる。','20回から50回へ、観測済みの枠だけ増える。表示する割合は各時点の実際の個数から計算する。'],
    ['100回でも、必ず半分とは限らない','100回では表51回、割合0.51。この記録は1/2に近いが、有限回で必ず1/2になるわけではない。','100回までの記録と表51回、裏49回、割合0.51。実験の普遍的な結果とは断定しない。']
  ],['有限回の表の割合は、必ず1/2になる？',['必ずとは限らない','必ず1/2になる','いつも1/2より大きい'],'必ずとは限らない','これは一つの架空の記録例。別の記録では割合の変わり方も違う。'],{series:'A',n:'20'},'二つの記録を、自分で比べる'),function(step,p){var count=step===0?10:step===1?10+Math.floor(10*p):step===2?20+Math.floor(30*p):50+Math.floor(50*p),heads=trialRecord.slice(0,count).split('').filter(function(v){return v==='1';}).length,b=text(300,35,'架空の記録例 A',27);for(var i=0;i<100;i++)b+=rect(60+i%20*24,65+Math.floor(i/20)*30,20,24,i>=count?paper:trialRecord[i]==='1'?green:sand,'trial-cell-'+i,i<count&&trialRecord[i]==='1'?paper:green);b+=text(300,270,count+'回：表'+heads+'回・裏'+(count-heads)+'回',27,'trial-count')+text(300,325,'表の割合 '+heads+'/'+count,28,'trial-ratio');return b+footer('表と裏の回数を合わせると'+count+'回');});
  var codes=Object.keys(items),originalRender=BL.lessonScenes.render;
  if(codes.some(function(code){return own(BL.lessonScenes.items,code);}))throw new Error('Duplicate junior high lesson code');
  codes.forEach(function(code){BL.lessonScenes.items[code]=items[code];});
  BL.lessonScenes.render=function(code,step,phase){if(!own(draws,code))return originalRender(code,step,phase);if(!Number.isInteger(step)||step<0||step>3||typeof phase!=='number'||!Number.isFinite(phase))return '';return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" role="img" aria-label="'+e(items[code].steps[step].alt)+'" font-family="Noto Sans JP, sans-serif"><title>'+e(items[code].steps[step].alt)+'</title>'+draws[code](step,Math.max(0,Math.min(1,phase)))+'</svg>';};
  BL.jh1Lessons={codes:codes.slice()};
}());
