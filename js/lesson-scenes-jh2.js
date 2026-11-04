(function () {
  'use strict';
  var BL=window.BL;
  if(!BL||!BL.lessonScenes||BL.jh2Lessons)return;
  var own=function(o,k){return Object.prototype.hasOwnProperty.call(o,k);},green='#467060',pale='#dce9df',orange='#ad672b',sand='#f4d9b5',ink='#343c32',paper='#fffdf8',gray='#d6ddd2',items=Object.create(null),draws=Object.create(null);
  function e(v){return String(v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function n(v){return Number(v.toFixed(5));}
  function sign(v){return v<0?'−'+Math.abs(v):String(v===0?0:v);}
  function id(k){return k?' id="jh2-scene-'+k+'"':'';}
  function text(x,y,v,size,k){return '<text'+id(k)+' x="'+n(x)+'" y="'+n(y)+'" font-size="'+(size||28)+'" fill="'+ink+'" text-anchor="middle">'+e(v)+'</text>';}
  function line(x,y,xx,yy,color,k){return '<line'+id(k)+' x1="'+n(x)+'" y1="'+n(y)+'" x2="'+n(xx)+'" y2="'+n(yy)+'" stroke="'+(color||green)+'" stroke-width="2.5"/>';}
  function rect(x,y,w,h,fill,k,stroke){return '<rect'+id(k)+' x="'+n(x)+'" y="'+n(y)+'" width="'+n(w)+'" height="'+n(h)+'" fill="'+fill+'" stroke="'+(stroke||green)+'" stroke-width="2"/>';}
  function dot(x,y,r,fill,k){return '<circle'+id(k)+' cx="'+n(x)+'" cy="'+n(y)+'" r="'+r+'" fill="'+fill+'" stroke="'+green+'" stroke-width="2"/>';}
  function polygon(ps,fill,k){return '<polygon'+id(k)+' points="'+ps.map(function(p){return n(p[0])+','+n(p[1]);}).join(' ')+'" fill="'+fill+'" stroke="'+green+'" stroke-width="2.5"/>';}
  function path(d,fill,k,color){return '<path'+id(k)+' d="'+d+'" fill="'+(fill||'none')+'" stroke="'+(color||green)+'" stroke-width="2.5"/>';}
  function arc(cx,cy,r,a,b,k,color){return path('M'+n(cx+r*Math.cos(a))+' '+n(cy-r*Math.sin(a))+' A'+r+' '+r+' 0 '+(b-a>Math.PI?1:0)+' 0 '+n(cx+r*Math.cos(b))+' '+n(cy-r*Math.sin(b)),'none',k,color);}
  function footer(v){return text(300,378,v,28,'summary');}
  function def(title,prompt,steps,challenge,state,label){return {title:title,prompt:prompt,claimIds:['motion'],steps:steps.map(function(s){return {label:s[0],text:s[1],alt:s[2]};}),challenge:{prompt:challenge[0],options:challenge[1],answer:challenge[2],explanation:challenge[3],claimIds:['motion']},tryIt:{label:label,state:state}};}
  function add(suffix,item,draw){items['835022'+suffix]=item;draws['835022'+suffix]=draw;}
  add('3111100000',def('xの項とyの項を、分けて集める','(2x+3y)+(x−y)。同じ文字部分を持つ項を見つけよう。',[
    ['四つの項を見る','後ろの括弧の前は＋なので、項の符号をそのまま残して括弧を外す。2x、3y、x、−yの四つ。','四枚の固定した札に2x、3y、x、−y。札は式の項で、物体の個数や面積ではない。'],
    ['xの項をまとめる','2xとxは同類項。係数を足すと2+1=3なので、合わせて3x。','固定した2xとxの札を強調し、下に3xを表示する。'],
    ['yの項をまとめる','3yと−yも同類項。係数は3+(−1)=2なので、合わせて2y。','固定した3yと−yの札を強調し、下に2yを表示する。'],
    ['文字部分の違いを残す','xの項3xとyの項2yは、文字部分が違うので一つの項にはまとめない。答えは3x+2y。','元の四項を残し、3x+2yという結果を示す。']
  ],['3y+(−y)をまとめると？',['2y','4y','2'],'2y','同じyの係数3と−1を足して2。文字部分のyは残る。'],{a:2,b:1,op:'add'},'同じ式から、係数を変えてためす'),function(step,p){var b=text(300,40,'(2x+3y)+(x−y)',31),terms=['2x','3y','x','−y'];terms.forEach(function(v,i){var selected=step===1?i%2===0:step===2?i%2===1:step===3;b+=rect(62+i*122,95,110,88,selected?sand:pale,'poly-term-'+i)+text(117+i*122,150,v,32,'poly-term-value-'+i);if((step===1&&i%2===0)||(step===2&&i%2===1))b+=line(72+i*122,200,72+i*122+90*p,200,orange,'poly-guide-'+i);});b+=text(300,285,step===0?'文字部分が同じ項を探す':step===1?'2x+x = 3x':step===2?'3y−y = 2y':'3x + 2y',32,'poly-result');return b+footer(step===3?'xの項とyの項は別々に残す':'札の位置と、項の符号を保つ');});
  add('3111300000',def('奇数の和を、文字で説明する','いくつかの例だけでなく、どんな整数m,nでも通じる式を作ろう。',[
    ['二つの奇数を表す','m,nを整数とすると、奇数を2m+1、2n+1と表せる。mとnは同じ数でなくてよい。','整数m,nと、2m+1、2n+1の二つの式。'],
    ['二つを足す','(2m+1)+(2n+1)=2m+2n+2。これはm,nの値を決めなくても成り立つ。','二つの奇数の式を残し、和2m+2n+2を表示する。'],
    ['共通の2でくくる','2m+2n+2=2(m+n+1)。m+n+1も整数なので、和は整数の2倍となる。','和を2(m+n+1)に変形し、括弧内が整数であることを示す。'],
    ['結論と具体例を区別する','整数の2倍だから偶数。例えばm=1,n=2なら3+5=8だが、文字の説明はその例だけに限らない。','任意の整数に対する結論と、具体例3+5=8を分けて表示する。']
  ],['m,nが整数のとき、m+n+1は？',['整数','いつも奇数','いつも正の数'],'整数','整数どうしを足した結果も整数。奇数や正の数と決まるわけではない。'],{m:1,n:2},'整数を変えて、具体例を確かめる'),function(step,p){var b=text(300,40,'m、nは整数',29)+rect(60,80,220,75,pale,'odd-first')+rect(320,80,220,75,pale,'odd-second')+text(170,130,'2m+1',32)+text(430,130,'2n+1',32);if(step>0)b+=text(300,220,step===1?'2m+2n+2':'2(m+n+1)',34,'odd-general');if(step===2)b+=line(220,244,220+185*p,244,orange,'odd-integer-guide')+text(300,300,'m+n+1は整数',28);if(step===3)b+=text(300,300,'例：m=1、n=2 → 3+5=8',25);return b+footer(step===0?'異なる二つの整数でもよい':step===1?'例の数字を入れずに変形できる':'和は整数の2倍なので、偶数');});
  add('3121300000',def('一方の式を残して、加減法で解く','2x+y=7とx−y=2。二つの式を満たす組を求めよう。',[
    ['二つの条件を並べる','yと−yに注目する。二つの式を左右それぞれ加えると、この二項が打ち消し合う。','2x+y=7とx−y=2を並べ、どちらも元の条件として残す。'],
    ['加えた式と、元の一方を使う','加えると3x=9。同時に、元の式x−y=2も残す。3x=9だけを元の連立方程式と同じ条件だとはしない。','3x=9と、残した元の式x−y=2を同時に表示する。'],
    ['xからyを求める','3x=9よりx=3。残した式へ代入すると3−y=2なのでy=1。','x=3と3−y=2を表示し、y=1へつなぐ。'],
    ['両方の元の式を確かめる','2×3+1=7、3−1=2。両方の元の式を満たすので、解はx=3,y=1。','二つの元の式への代入を同時に示し、共通解(3,1)を確認する。']
  ],['3x=9を得た後、元の一方の式は？',['残して使う','どちらも捨てる','不等式に変える'],'残して使う','一方の元の式も残すことで、xからyを求め、二つの条件を保てる。'],{step:0},'同じ連立方程式を、段階ごとに確かめる'),function(step,p){var forms=[['2x+y=7','x−y=2'],['3x=9','x−y=2（元の式）'],['x=3','3−y=2 → y=1'],['2×3+1=7','3−1=2']],v=forms[step],b=rect(70,70,460,85,pale,'elimination-row-0')+rect(70,195,460,85,sand,'elimination-row-1')+text(300,125,v[0],33,'elimination-first')+text(300,250,v[1],31,'elimination-second');if(step===1)b+=line(90,175,90+420*p,175,orange,'elimination-guide');return b+footer(step===0?'二つの式を同時に満たす組':step===1?'加えた式と、元の一方の式':step===2?'残した式へx=3を代入':'解は x=3、y=1');});
  function graph(){var b='';for(var i=-6;i<=6;i+=2){b+=line(168,180-i*22,432,180-i*22,gray)+line(300+i*22,48,300+i*22,312,gray)+text(300+i*22,345,sign(i),21)+text(143,188-i*22,sign(i),21);}b+=line(150,180,452,180,ink,'graph-x-axis')+line(300,330,300,35,ink,'graph-y-axis')+text(477,190,'x',25)+text(324,32,'y',25);return b;}
  add('3311000000',def('切片と傾きから、一次関数を描く','y=2x+1。原点と目盛を固定して、切片から次の点へ進もう。',[
    ['切片の点を置く','x=0ならy=1なので、切片の点は(0,1)。y軸上に置く。','固定した座標軸の(0,1)に点がある。'],
    ['xを1増やす','切片の点から右へ1の補助線を引く。これは次の点のx座標を決める案内で、まだ関数の点ではない。','(0,1)から(1,1)への補助線をなぞる。補助線の端を関数上の点とは表示しない。'],
    ['yを2増やす','傾き2だから、xが1増えるとyは2増える。次の点は(1,3)。','右へ1の補助線を残し、上へ2をなぞって固定した点(1,3)につなぐ。'],
    ['二点を通る直線を見る','(0,1)と(1,3)を通る直線はy=2x+1。xが1増えるたびにyは2ずつ増える。','同尺度の軸上で、二点を通るy=2x+1の直線を表示する。']
  ],['切片の点(0,1)からxを1増やすと、次のyは？',['3','2','1'],'3','傾きが2なので、もとのy=1へ2を足して3。'],{a:'2',b:1},'同じ直線から、傾きと切片を変える'),function(step,p){var b=graph()+dot(300,158,7,green,'linear-intercept');if(step>=1)b+=line(300,158,322,158,gray,'linear-dx-full')+line(300,158,300+22*(step===1?p:1),158,orange,'linear-dx-trace');if(step>=2)b+=line(322,158,322,114,gray,'linear-dy-full')+line(322,158,322,158-44*(step===2?p:1),orange,'linear-dy-trace')+dot(322,114,7,orange,'linear-next');if(step===3)b+=line(223,312,355,48,green,'linear-line');return b+footer('y=2x+1：切片1、傾き2');});
  add('3211100000',def('平行の仮定から、等しい角へ','ℓとmは平行。横切る直線でできる角の位置を、一つずつ確かめよう。',[
    ['平行を仮定する','二直線ℓ,mが平行であることを、最初の条件として置く。図でそう見えるだけでは根拠にしない。','水平な二直線を固定し、ℓとmの平行を仮定と明記する。'],
    ['横切る直線と一つの角','横切る直線が作る上側の角を60°とする。円弧の開きと直線の角度も60°。','二つの平行線を横切る直線と、上の交点の60°の角。'],
    ['同位角を対応させる','二直線は平行なので、同じ位置にある同位角も60°。二つの角の位置を比べる。','両交点で右上にある同位角を同じ色の円弧で示す。'],
    ['対頂角から錯角へつなぐ','上の交点で対頂角も60°。この角と下の60°は錯角で、やはり等しい。','上の左下と下の右上にある錯角を強調し、対頂角との関係を示す。']
  ],['同位角が等しいと使うための条件は？',['二直線が平行','二直線が同じ長さ','図が左右対称'],'二直線が平行','平行という条件から同位角が等しいといえる。'],{angle:'60',pair:'alternate'},'同じ図から、角と位置を選び直す'),function(step,p){var a=Math.PI/3,top=240+120/Math.tan(a),b=text(300,35,'仮定：ℓ ∥ m',28)+line(65,130,535,130,ink,'parallel-base-0')+line(65,250,535,250,ink,'parallel-base-1')+text(85,110,'ℓ',26)+text(85,230,'m',26);if(step>=1)b+=line(240-55/Math.tan(a),305,240+175/Math.tan(a),75,green,'parallel-transversal')+arc(top,130,28,0,a,'parallel-angle-top',step===3?gray:orange);if(step>=2)b+=arc(240,250,28,0,a,'parallel-angle-bottom',orange);if(step===3)b+=arc(top,130,28,Math.PI,Math.PI+a,'parallel-angle-opposite',orange);if(step>=1&&p>0){var cx=step===2?240:top,cy=step===2?250:130,start=step===3?Math.PI:0;b+=arc(cx,cy,34,start,start+a*p,'parallel-angle-trace',orange);}return b+footer(step===0?'平行という条件から考える':step===1?'横切る直線の角は60°':step===2?'同位角は60°ずつ':'対頂角を使うと、錯角も60°');});
  var A=[300,70],B=[180,270],C=[420,270],D=[300,270];
  function tick(p,q,count,k){var dx=q[0]-p[0],dy=q[1]-p[1],len=Math.hypot(dx,dy),u=dx/len,v=dy/len,b='';for(var i=0;i<count;i++){var t=(i-(count-1)/2)*7,x=(p[0]+q[0])/2+t*u,y=(p[1]+q[1])/2+t*v;b+=line(x-6*v,y+6*u,x+6*v,y-6*u,orange,k+'-'+i);}return b;}
  add('3221000000',def('三辺の根拠から、対応する角へ','AB=AC、DはBCの中点。△ABDと△ACDが合同になる根拠をそろえよう。',[
    ['仮定を図へ写す','AB=AC、DはBCの中点が仮定。まずABとACに同じ印を付ける。','二等辺三角形ABCと底辺の中点D。ABとACに等しい印。'],
    ['中点から二辺をそろえる','DがBCの中点なのでBD=CD。仮定から分かった二つ目の辺の関係。','AB=ACの印を残し、BD=CDにも別の等しい印を付ける。'],
    ['共通の辺を使って合同へ','ADは二つの三角形に共通。三辺がそれぞれ等しいので、対応順をそろえて△ABD≅△ACD。','ADの共通を加え、三組の辺の対応が全てそろう。'],
    ['対応する角を結論にする','合同な図形の対応する角は等しい。Aの対応から∠BAD=∠CADといえる。','固定した合同な二つの三角形で、Aの両側の対応する角を強調する。']
  ],['AD=ADといえる根拠は？',['共通の辺','Dが中点だから','図で縦に見えるから'],'共通の辺','同じ線分ADが両方の三角形に含まれている。'],{step:0},'同じ証明の根拠を、自分でたどる'),function(step,p){var b=polygon([A,B,C],pale,'proof-triangle')+line(A[0],A[1],D[0],D[1],green,'proof-midline');[[A,'A'],[B,'B'],[C,'C'],[D,'D']].forEach(function(v){b+=text(v[0][0]+(v[1]==='D'?20:0),v[0][1]+(v[1]==='A'?-16:30),v[1],25);});b+=tick(A,B,1,'proof-ab')+tick(A,C,1,'proof-ac');if(step>=1)b+=tick(B,D,2,'proof-bd')+tick(D,C,2,'proof-dc');if(step>=2)b+=tick(A,D,3,'proof-ad');if(step===3){var t=Math.atan2(200,120);b+=arc(300,70,36,Math.PI+t,1.5*Math.PI,'proof-angle-0',orange)+arc(300,70,36,1.5*Math.PI,2*Math.PI-t,'proof-angle-1',orange);}return b+footer(step===0?'AB=AC は仮定':step===1?'Dが中点 → BD=CD':step===2?'三辺がそれぞれ等しいので合同':'対応する角：∠BAD=∠CAD');});
  var boxData=[2,4,4,6,8,8,10,12];
  add('3411200000',def('八つの値から、箱ひげ図を作る','架空の8値を小さい順に並べ、五つの位置へ対応させよう。',[
    ['全ての値を並べる','2、4、4、6、8、8、10、12。重なった値も一つずつ残し、8個の記録として数える。','8個の値が小さい順に並ぶ。元の記録は全段階で残す。'],
    ['中央値を求める','8個なので中央は4番目の6と5番目の8。その平均(6+8)/2=7が中央値。','中央の6と8を強調し、同じ数直線の7に中央値の線を置く。'],
    ['下半分・上半分の中央値','下半分2、4、4、6の中央値は4。上半分8、8、10、12の中央値は9。Q1=4、Q3=9。','第1四分位数4と第3四分位数9の位置を示す。中央の線7も残す。'],
    ['箱とひげを結ぶ','4から9までが箱、7が中の線。最小2と最大12へひげを伸ばす。四分位範囲は9−4=5。','全8値、箱4から9、中央値7、最小2と最大12のひげが対応する。']
  ],['第3四分位数は？',['9','8','10'],'9','上半分8、8、10、12の中央二つ8と10の平均なので9。'],{dataset:'even',step:0},'同じ記録から、段階を確かめる'),function(step,p){var b='';boxData.forEach(function(v,i){var active=step===1?(i===3||i===4):step===2?(i===1||i===2||i===5||i===6):false;b+=rect(60+i*60,35,53,52,active?sand:paper,'box-data-'+i)+text(86.5+i*60,70,v,25,'box-value-'+i);});b+=line(60,300,540,300,ink,'box-axis');for(var v=0;v<=16;v+=2)b+=line(60+30*v,295,60+30*v,305,gray)+text(60+30*v,335,v,21);if(step>=1)b+=line(270,165,270,235,orange,'box-median');if(step>=2)b+=line(180,175,180,225,green,'box-q1')+line(330,175,330,225,green,'box-q3');if(step===3)b=line(120,200,420,200,green,'box-whisker')+line(120,185,120,215,green,'box-min')+line(420,185,420,215,green,'box-max')+rect(180,175,150,50,pale,'box-body')+b;if(step===1||step===2)b+=line(60,115,60+473*p,115,orange,'box-reading-guide');return b+footer(step===0?'同じ値も含めて、記録は8個':step===1?'中央値：(6+8)÷2=7':step===2?'Q1=4、中央値7、Q3=9':'最小2、箱4〜9、最大12');});
  add('3421200000',def('二枚の硬貨の結果を、漏れなく並べる','区別した二枚の公平な硬貨。二つの結果は独立として考えよう。',[
    ['試行の条件を確かめる','二枚は区別する。それぞれ表裏が同様に確からしく、一枚の結果はもう一枚に影響しない。','1枚目と2枚目の硬貨を別々に示し、公平・独立という条件を置く。'],
    ['一枚目の二つの枝','一枚目は表または裏。二枚目の結果は、どちらの枝の先でもまだ分ける必要がある。','一枚目の表・裏の二つの枝だけを表示する。二枚全部の標本空間とは呼ばない。'],
    ['二枚目をそれぞれへ分ける','表の先も裏の先も、二枚目は表か裏。表表・表裏・裏表・裏裏の4通りがそろう。','固定した4枚の結果札を置き、二段目の枝をなぞる。全4通りは同様に確からしい。'],
    ['表が一枚の結果を選ぶ','表裏と裏表の2通り。全4通りのうち2通りなので、確率は2/4=1/2。','4結果を全て残し、表裏と裏表だけを強調する。']
  ],['表裏と裏表は同じ結果として数える？',['別々に数える','一つにまとめる','どちらも数えない'],'別々に数える','1枚目と2枚目を区別するため、表が出る硬貨が違う。'],{event:'one'},'同じ四つの結果から、条件を変える'),function(step,p){var b='';if(step===0){b=dot(170,175,58,pale,'coin-first')+dot(430,175,58,sand,'coin-second')+text(170,185,'1枚目',28)+text(430,185,'2枚目',28)+text(300,295,'公平で、独立とする',29);}else{b=dot(300,45,4,green,'coin-root');[170,430].forEach(function(x,i){b+=line(300,45,x,125,gray,'coin-first-branch-'+i)+dot(x,125,4,green,'coin-first-'+i)+text(x,105,i?'裏':'表',27);});if(step>=2)[95,225,375,505].forEach(function(x,i){var ox=i<2?170:430;b+=line(ox,125,x,225,gray,'coin-leaf-reference-'+i)+line(ox,125,ox+(x-ox)*(step===2?p:1),125+100*(step===2?p:1),green,'coin-leaf-trace-'+i)+text((x+ox)/2,177,i%2?'裏':'表',24)+rect(x-42,225,84,62,step===3&&(i===1||i===2)?sand:paper,'coin-outcome-'+i)+text(x,265,['表表','表裏','裏表','裏裏'][i],26);});}return b+footer(step===0?'二枚を区別して考える':step===1?'この先に、二枚目の枝が続く':step===2?'区別した結果は全部で4通り':'表が一枚：2/4 = 1/2');});
  var codes=Object.keys(items),originalRender=BL.lessonScenes.render;
  if(codes.some(function(code){return own(BL.lessonScenes.items,code);}))throw new Error('Duplicate junior high 2 lesson code');
  codes.forEach(function(code){BL.lessonScenes.items[code]=items[code];});
  BL.lessonScenes.render=function(code,step,phase){if(!own(draws,code))return originalRender(code,step,phase);if(!Number.isInteger(step)||step<0||step>3||typeof phase!=='number'||!Number.isFinite(phase))return '';return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" role="img" aria-label="'+e(items[code].steps[step].alt)+'" font-family="Noto Sans JP, sans-serif"><title>'+e(items[code].steps[step].alt)+'</title>'+draws[code](step,Math.max(0,Math.min(1,phase)))+'</svg>';};
  BL.jh2Lessons={codes:codes.slice()};
}());
