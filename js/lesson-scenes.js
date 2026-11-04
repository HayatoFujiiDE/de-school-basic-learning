(function () {
  'use strict';
  var BL = window.BL = window.BL || {};
  var ink = '#343c32', green = '#467060', pale = '#e0ece4', olive = '#887e4c', sand = '#f2ecd8', paper = '#fffdf8', muted = '#697164';
  function esc(value) { return String(value).replace(/[&<>"']/g, function (c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
  function num(n) { return Number(n.toFixed(3)); }
  function mix(a,b,p) { return a+(b-a)*p; }
  function text(x,y,value,size,color,anchor) { return '<text x="'+num(x)+'" y="'+num(y)+'" font-size="'+(size||28)+'" fill="'+(color||ink)+'" text-anchor="'+(anchor||'middle')+'">'+esc(value)+'</text>'; }
  function rect(x,y,w,h,fill,stroke,opacity) { return '<rect x="'+num(x)+'" y="'+num(y)+'" width="'+num(w)+'" height="'+num(h)+'" rx="2" fill="'+(fill||'none')+'" stroke="'+(stroke||'none')+'" opacity="'+(opacity===undefined?1:num(opacity))+'"/>'; }
  function line(x1,y1,x2,y2,color,width,dash) { return '<line x1="'+num(x1)+'" y1="'+num(y1)+'" x2="'+num(x2)+'" y2="'+num(y2)+'" stroke="'+(color||ink)+'" stroke-width="'+(width||3)+'" stroke-linecap="round"'+(dash?' stroke-dasharray="'+dash+'"':'')+'/>'; }
  function circle(x,y,r,fill) { return '<circle cx="'+num(x)+'" cy="'+num(y)+'" r="'+r+'" fill="'+fill+'"/>'; }
  function footer(value) { return text(300,365,value,32,green); }
  function moving(a,b,p,w,h,fill,stroke) { return rect(mix(a[0],b[0],p),mix(a[1],b[1],p),w,h,fill,stroke); }
  function definition(title,prompt,claim,steps,challenge,tryIt) {
    return {title:title,prompt:prompt,claimIds:[claim],steps:steps.map(function(s){return {label:s[0],text:s[1],alt:s[2]};}),challenge:{prompt:challenge[0],options:challenge[1],answer:challenge[2],explanation:challenge[3],claimIds:[claim]},tryIt:tryIt};
  }
  var items = {
    '8250243131100000': definition('0を飛ばさずに、3つに分ける','924÷3。百・十・一のまとまりをどう分ける？','c16',[
      ['まとまりを見る','924は、100が9こ、10が2こ、1が4こ。全部を3つへ同じように分ける。','100の正方形9こ、10の棒2本、1の小さな正方形4こ。合わせて924。'],
      ['百を分ける','100を9こ分けると、3つそれぞれに100が3こずつ入る。','3つの箱へ100が3こずつ移動する。まだ分けていない10が2本と1が4こ。'],
      ['十の位は0','10が2こでは、3つに10を1こずつ配れない。商の十の位には0を残す。','各箱の十の位は0。2本の10の棒が手元に残り、商の百の位3と十の位0を表示。'],
      ['一に分け直す','10を2こ、1を20こに分け直す。元からあった4こと合わせて24こ。','2本の10の棒が20この1に開き、元の4こと合わせて24この1になる。量は変わらない。'],
      ['一を分ける','24こを3つに分けると8こずつ。1つ分は300＋0＋8＝308。','24この1が3つの箱へ8こずつ移動する。各箱は100が3こ、十の位0、一が8こで308。']
    ],['商の十の位はどうなる？',['0を入れる','位を飛ばす','2を入れる'],'0を入れる','2十を3つへ1十ずつは配れないので、十の位は0。残りは一に分け直せる。'],{label:'別の数を3こずつに分けてためす',state:{n:26}}),
    '8250243141300000': definition('5を分け直して、2.46をひく','5−2.46。同じ広さのまま、1を0.1、0.01に分け直そう。','c15',[
      ['5を並べる','1の正方形を5こ用意する。小さな1マスは0.01で、1の中に100こある。','同じ1の正方形5こ。それぞれ10行10列の0.01のマスからなる。全体は5.00。'],
      ['まとまりをほどく','最後の1を分け直す。4と0.9と0.10にしても、合わせて5.00のまま。','4この1、9本の0.1、10この0.01へ、同じ500マスが移動する。'],
      ['2.46を取り分ける','1を2こ、0.1を4こ、0.01を6こ取り分ける。ひく量は2＋0.4＋0.06。','2この1、4本の0.1、6この0.01が下の取り分ける場所へ移動する。上には2、0.5、0.04が残る。'],
      ['残った量を読む','残りは1が2こ、0.1が5こ、0.01が4こ。2＋0.5＋0.04＝2.54。','残った2この1、5本の0.1、4この0.01を上へそろえる。取り分けた2.46は下に残り、両方合わせると5.00。']
    ],['最後に残る0.01は何こ？',['4こ','6こ','10こ'],'4こ','1を分け直してできた0.01は10こ。そのうち6こをひくので4こ残る。'],{label:'別の数のひき算をためす',state:{n:46,op:'subtract'}}),
    '8250243150000000': definition('1を5つに分けて、ひく','1と1/5から3/5をひく。分ける大きさをそろえよう。','c16',[
      ['1と1/5を見る','長い帯が1。短い1/5は、長い帯を5等分した1つ分と同じ大きさ。','1を表す長い帯と、その5分の1の幅の短い帯が並ぶ。'],
      ['1/5を6こにする','1を5/5に分け直す。もとの1/5を合わせると、1/5が6こ。','長い帯が同じ幅の5枚に開く。元の短い帯を合わせて6枚。すべて1/5。'],
      ['3こをひく','同じ1/5を3こ取り分ける。分け方は5等分のまま変わらない。','6枚の1/5のうち右の3枚が下へ動き、残る3枚と分かれる。'],
      ['残りを確かめる','1/5が3こで3/5。取り分けた3/5と合わせれば6/5に戻る。','上に残る3枚の1/5と、下に取り分けた3枚の1/5。どちらも同じ幅で、残り3/5。']
    ],['分母の5は、ひいたあとどうなる？',['5のまま','2になる','10になる'],'5のまま','ひくのは1/5という同じまとまりの個数。1を5等分した大きさは変わらない。'],{label:'別の分け方・4分の1でためす',state:{n:6}}),
    '8250243240000000': definition('欠けたところを、ひいて求める','8cm×6cmの長方形から、3cm×2cmの角を切り取る。','c18',[
      ['全体の広さ','1マスは1cm²。横8こ、たて6こで48cm²。','横8列、たて6行の48マスの長方形。各マスは1cm²。'],
      ['切り取る場所','右上の横3こ、たて2こを選ぶ。切り取る広さは6cm²。','48マスのうち右上の3列2行、6マスだけが別の色で示される。'],
      ['6マスを移す','選んだ6マスを、形を変えずに外へ取り分ける。','右上の3列2行の6マスが右へ平行移動する。元の位置は空白になり、42マスが残る。'],
      ['残った広さ','全体48cm²から切り取った6cm²をひいて、42cm²。','欠けた長方形の42マスと、離れた6マス。48−6＝42cm²という式が図に対応する。']
    ],['切り取る部分は何cm²？',['5cm²','6cm²','12cm²'],'6cm²','横3マス×たて2マス＝6マス。1マスは1cm²だから6cm²。'],{label:'元の8×6の長方形をためす',state:{x:8,y:6}}),
    '8250243250000000': definition('半回転から、もう70°','右向きから反時計回りに250°。どこまで回せばよい？','c17',[
      ['0°から始める','右向きの辺を出発点にする。反時計回りに回す。','右向きの辺と0°の位置。90°は上、180°は左、270°は下にある。'],
      ['180°回す','まず半回転する。動いた辺は左向きになる。','辺が右から上を通って左へ回り、180°の半回転の弧を描く。'],
      ['さらに70°回す','同じ回転方向へ、180°からさらに70°進む。','左向きの180°から辺がさらに反時計回りに70°動き、250°になる。追加分の弧を別の色で表す。'],
      ['250°を確かめる','180°＋70°＝250°。残りの小さい角110°と合わせると1回転。','180°の弧と70°の弧が合わさり250°。右向きまで残る小さい弧は110°で、合計360°。']
    ],['180°から250°まで、あと何度？',['70°','110°','250°'],'70°','250−180＝70。同じ回転方向へ70°進む。'],{label:'同じ250°を動かしてためす',state:{n:250}}),
    '8250243310000000': definition('共有する1辺を、数え直す','棒で正方形を横に5こつなぐ。新しく必要な棒は？','c15',[
      ['はじめの4本','最初の正方形を作るには、4本の棒が必要。','1つの正方形を囲む4本の棒。'],
      ['つぎは3本','2こ目は1辺を共有する。上・下・右の3本だけ足す。','1こ目の右辺を共有し、その右に3本の棒が順に伸びて2こ目の正方形ができる。合計7本。'],
      ['5こまでつなぐ','残りも1こにつき3本ずつ足す。5こでは4＋3×4＝16本。','正方形3、4、5こ目が3本ずつ追加される。境界の辺は重ねず1本として描く。'],
      ['別のまとまりで見る','左端の1本と、各正方形の3本に分けてもよい。1＋3×5＝16本。','左端の縦棒1本を別の色にし、各正方形の上・下・右の3本を5組として示す。全16本は同じ。']
    ],['2こ目で新しく足す棒は何本？',['3本','4本','7本'],'3本','1辺は最初の正方形と共有するので、残る3辺に棒を足す。'],{label:'同じ5こから数を変えてためす',state:{n:5}}),
    '8250243320000000': definition('もとの量を1つ分にして比べる','Aは3枚から12枚、Bは5枚から15枚。何倍になった？','c16',[
      ['もとの量を見る','Aのもとは3枚、Bのもとは5枚。同じ1マスはどちらも1枚。','同じ縮尺の帯でA3枚、B5枚を示す。1区間はどちらも1枚。'],
      ['増えた後を見る','Aは12枚、Bは15枚。Bの方が枚数は多いけれど、倍も大きいかな？','Aの帯が3枚から12枚へ、Bの帯が5枚から15枚へ伸びる。どちらも同じ1枚の幅。'],
      ['もとのまとまりに分ける','Aは3枚のまとまりが4つ、Bは5枚のまとまりが3つ。','A12枚の帯を3枚ずつ4組、B15枚の帯を5枚ずつ3組に区切る。'],
      ['倍で比べる','12÷3＝4倍、15÷5＝3倍。倍で比べるとAの方が大きい。','Aは4つ分、Bは3つ分。A4倍とB3倍を並べる。もとのまとまりの大きさはA3枚とB5枚のまま。']
    ],['もとの何倍かが大きいのは？',['A','B','同じ'],'A','Aは12÷3＝4倍、Bは15÷5＝3倍。増えた枚数の比較とは分けて考える。'],{label:'Aと同じ4倍を別の単位でためす',state:{n:4,b:3}}),
    '8250243411200000': definition('同じ時刻の差をたどる','架空の気温。10時と11時で、AとBの差はどう変わった？','c17',[
      ['2本の線を見る','10時はA18℃・B14℃、11時はA20℃・B17℃。同じ目盛りで表す。','10時と11時の2本の折れ線。Aは18から20℃、Bは14から17℃。横軸は1時間、縦軸は1℃ずつ同じ間隔。'],
      ['10時を比べる','同じ10時の2点を結ぶ。差は18−14＝4℃。','10時のA18℃とB14℃を縦の線で結ぶ。間は1℃の4区間。'],
      ['11時を比べる','同じ11時の2点を結ぶ。差は20−17＝3℃。','11時のA20℃とB17℃を縦の線で結ぶ。間は1℃の3区間。10時から11時への移動中は差を示さない。'],
      ['差の変化を見る','差は4℃から3℃へ、1℃小さくなった。AもBも上がっているが、Bの上がり方が大きい。','10時の差4℃、11時の差3℃を同時に示す。差は1℃小さくなり、Aの上昇2℃よりBの上昇3℃が大きい。']
    ],['11時のAとBの差は？',['3℃','4℃','1℃'],'3℃','同じ11時の20℃と17℃を比べるので、20−17＝3℃。'],{label:'別の気温記録で差をためす',state:{n:20}})
  };
  function division(step,p) {
    var body='',i,g,from,to,prior=Math.max(0,step-1);
    function hpos(k,s) { return s===0?[55+(k%3)*44,90+Math.floor(k/3)*44]:[45+Math.floor(k/3)*190+(k%3)*44,116]; }
    function upos(k,s) {
      if(s===0)return k<20?[280+(k%10)*22,110+Math.floor(k/10)*55]:[310+(k-20)*35,245];
      if(s<3)return k<20?[55+(k%10)*18,260+Math.floor(k/10)*25]:[440+(k-20)*25,270];
      if(s===3)return [70+(k%12)*37,260+Math.floor(k/12)*26];
      return [52+Math.floor(k/8)*190+(k%4)*30,187+Math.floor((k%8)/4)*25];
    }
    if(step>0)for(g=0;g<3;g++){
      body+=rect(25+g*190,75,170,163,paper,'#ced9cf',step===1?p:1);
      body+=text(110+g*190,102,'100 × 3',26,green);
      if(step>=2)body+='<g opacity="'+num(step===2?p:1)+'">'+text(110+g*190,177,'十の位 0',23,olive)+'</g>';
    }
    for(i=0;i<9;i++){from=hpos(i,prior);to=hpos(i,step);body+=moving(from,to,p,36,36,green,'#fffdf8');}
    for(i=0;i<24;i++){from=upos(i,prior);to=upos(i,step);body+=moving(from,to,p,16,16,i<20?olive:green,paper);}
    if(step===0)body+=text(120,275,'100 × 9',29,green)+text(385,85,'10 × 2',29,olive)+text(380,305,'1 × 4',29,green);
    if(step===1 || step===2)body+=text(140,248,'10が2こ',24,olive)+text(478,250,'1が4こ',24,green);
    if(step===3)body+=text(300,245,'1が20こ ＋ 4こ',27,ink);
    if(step===4)body+=text(300,290,'どの箱にも、1が8こ',29,green);
    body+=footer(step===4&&p<1?'3つへ、同じ数ずつ': ['924 = 900 + 20 + 4','100は、3こずつ','商の十の位は 0','20 + 4 = 24','300 + 0 + 8 = 308'][step]);
    return body;
  }
  function decimal(step,p) {
    var body='',i,old=Math.max(0,step-1);
    function category(k) { return k<400?0:k<490?1:2; }
    function removed(k) { return k<200 || (k>=400 && k<440) || (k>=490 && k<496); }
    function pos(k,s) {
      if(s===0)return [35+Math.floor(k/100)*110+(k%10)*6,110+Math.floor((k%100)/10)*6];
      var c=category(k),j;
      if(c===0){j=Math.floor(k/100);return [40+(j%2)*82+(k%10)*6,(s===3&&!removed(k)?130:95+Math.floor(j/2)*84)+(Math.floor((k%100)/10))*6+(s>=2&&removed(k)?164:0)];}
      if(c===1){j=Math.floor((k-400)/10);return [280+((k-400)%10)*6,(s===3&&!removed(k)?130+(j-4)*16:95+j*16)+(s>=2&&removed(k)?164:0)];}
      j=k-490;return [435+(j%5)*19,(s===3&&!removed(k)?140:105+Math.floor(j/5)*25)+(s>=2&&removed(k)?154:0)];
    }
    if(step>0)body+=text(110,65,'1',31,green)+text(310,65,'0.1',31,green)+text(480,65,'0.01',31,green);
    if(step>=2)body+=rect(25,250,540,80,sand,'#d9cfad')+text(555,345,'取り分けた 2.46',24,olive,'end');
    for(i=0;i<500;i++){
      var a=pos(i,old),b=pos(i,step),color=step>=2&&removed(i)?olive:green;
      body+=moving(a,b,p,6,6,color,paper);
    }
    if(step===0){for(i=0;i<5;i++)body+=text(65+i*110,205,'1',30,green);body+=text(300,280,'小さな1マス = 0.01',26,muted);}
    if(step===1)body+=text(300,285,'4 ＋ 0.9 ＋ 0.10',31,green);
    if(step===3)body+=text(300,235,'残りは 2 ＋ 0.5 ＋ 0.04',28,ink);
    body+=footer(['5.00','合わせて 5.00 のまま','5.00 − 2.46','2.54'][step]);
    return body;
  }
  function fraction(step,p) {
    var body='',i,old=Math.max(0,step-1);
    function pos(k,s){
      if(s===0)return k<5?[55+k*65,135]:[455,135];
      if(s===1)return [55+k*80,135];
      if(s===2)return [55+k*80,k>=3?240:135];
      return k<3?[120+k*80,125]:[120+(k-3)*80,240];
    }
    for(i=0;i<6;i++){
      var a=pos(i,old),b=pos(i,step),x=mix(a[0],b[0],p),y=mix(a[1],b[1],p);
      body+=rect(x,y,65,65,step>=2&&i>=3?olive:green,paper);
      if(step>0)body+=text(x+32.5,y+91,'1/5',24,step>=2&&i>=3?olive:green);
    }
    if(step===0)body+=line(55,115,380,115,green,3)+text(217,95,'1',34,green)+text(487,95,'1/5',34,green);
    if(step===1)body+=text(300,95,'同じ1/5が、6こ',31,green);
    if(step>=2)body+=text(12,120,'残る',24,green,'start')+text(12,270,'ひく',24,olive,'start');
    body+=footer(['1 と 1/5','5/5 + 1/5 = 6/5','6/5 − 3/5','残りは 3/5'][step]);
    return body;
  }
  function area(step,p) {
    var body='',x,y,size=38,shift=step<2?0:step===2?145*p:145;
    for(y=0;y<6;y++)for(x=0;x<8;x++){
      var cut=x>=5&&y<2,fill=cut&&step>0?olive:green;
      if(cut&&step===1)fill=p<0.5?green:olive;
      body+=rect(60+x*size+(cut?shift:0),80+y*size,size,size,fill,paper);
    }
    body+=text(212,55,'8 cm',30,ink)+text(28,205,'6',30,ink)+text(28,235,'cm',22,ink);
    if(step>0)body+=text(307+shift,65,'3 cm',27,olive);
    if(step>=2)body+=text(500,190,'2 cm',27,olive)+text(493,235,'6 cm²',29,olive);
    if(step===3)body+='<g opacity="'+num(p)+'">'+text(190,205,'42 cm²',38,paper)+'</g>';
    body+=footer(['8 × 6 = 48 cm²','3 × 2 = 6 cm²','48 − 6','48 − 6 = 42 cm²'][step]);
    return body;
  }
  function angle(step,p) {
    var body='',cx=265,cy=180,r=115,i;
    function point(deg,radius){var rad=deg*Math.PI/180;return [cx+radius*Math.cos(rad),cy-radius*Math.sin(rad)];}
    function arc(start,end,radius,color,width,dash){
      if(end<=start)return '';
      var a=point(start,radius),b=point(end,radius);
      return '<path d="M'+num(a[0])+' '+num(a[1])+' A'+radius+' '+radius+' 0 '+(end-start>180?1:0)+' 0 '+num(b[0])+' '+num(b[1])+'" fill="none" stroke="'+color+'" stroke-width="'+width+'"'+(dash?' stroke-dasharray="6 5"':'')+'/>';
    }
    body+='<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="none" stroke="#d7dfd5" stroke-width="2"/>';
    for(i=0;i<360;i+=10){var a=point(i,r-5),b=point(i,r);body+=line(a[0],a[1],b[0],b[1],muted,1);}
    [0,90,180,270].forEach(function(v){var a=point(v,r+30);body+=text(a[0],a[1]+8,v+'°',25,muted);});
    var degrees=step===0?0:step===1?180*p:step===2?180+70*p:250;
    degrees=Math.round(degrees);
    var end=point(degrees,r);
    body+=line(cx,cy,cx+r,cy,muted,4)+arc(0,Math.min(degrees,180),68,green,9)+arc(180,degrees,84,olive,9);
    if(step===3){body+=arc(250,250+110*p,100,muted,3,true);if(p===1)body+=text(420,282,'110°',28,muted);}
    body+=line(cx,cy,end[0],end[1],green,6)+circle(cx,cy,5,ink);
    body+=text(490,125,Math.round(degrees)+'°',38,green);
    if(step>=2)body+=text(490,175,'180°',28,green)+text(490,215,'＋ '+(step===2?degrees-180:70)+'°',28,olive);
    body+=footer(step===2&&p<1?'180°から、さらに回す':['右から、反時計回りへ','半回転は 180°','180° ＋ 70°','250° ＋ 110° = 360°'][step]);
    return body;
  }
  function change(step,p) {
    var body='',size=90,x0=60,y0=135,count=step===0?1:step===1?1+p:step===2?2+3*p:5;
    function segment(x1,y1,x2,y2,portion,color){if(portion<=0)return '';return line(x1,y1,mix(x1,x2,Math.min(1,portion)),mix(y1,y2,Math.min(1,portion)),color,8);}
    body+=line(x0,y0,x0,y0+size,green,8);
    if(step===3)body+='<g opacity="'+num(p)+'">'+line(x0,y0,x0,y0+size,olive,8)+'</g>';
    for(var i=0;i<5;i++){
      var amount=Math.max(0,Math.min(1,count-i));
      body+=segment(x0+i*size,y0,x0+(i+1)*size,y0,amount*3,green);
      body+=segment(x0+(i+1)*size,y0,x0+(i+1)*size,y0+size,amount*3-1,green);
      body+=segment(x0+(i+1)*size,y0+size,x0+i*size,y0+size,amount*3-2,green);
      if(amount===1)body+=text(x0+(i+0.5)*size,277,step===3?'3本':String(i+1)+'こ',26,green);
    }
    if(step===1)body+=line(150,120,150,240,olive,5,'5 6')+text(300,85,'この1辺は共有する',29,olive);
    if(step===3)body+=text(38,105,'1本',27,olive)+text(300,85,'左の1本 ＋ 3本ずつ',30,green);
    body+=footer((step===1||step===2)&&p<1?'3本ずつ、付け足す':['最初は 4本','4 + 3 = 7本','4 + 3 × 4 = 16本','1 + 3 × 5 = 16本'][step]);
    return body;
  }
  function ratio(step,p) {
    var body='',scale=25,x=110,a=step===0?3:step===1?mix(3,12,p):12,b=step===0?5:step===1?mix(5,15,p):15;
    body+=text(50,140,'A',33,green)+text(50,245,'B',33,olive);
    body+=rect(x,105,a*scale,45,green)+rect(x,210,b*scale,45,olive);
    for(var i=1;i<15;i++){
      if(i<a)body+=line(x+i*scale,105,x+i*scale,150,paper,1);
      if(i<b)body+=line(x+i*scale,210,x+i*scale,255,paper,1);
    }
    if(step!==1||p===0||p===1)body+=text(x+a*scale+12,138,Math.round(a)+'枚',28,green,'start')+text(x+b*scale+12,243,Math.round(b)+'枚',28,olive,'start');
    body+=text(300,70,'同じ1マスが1枚',27,muted);
    if(step>=2){
      body+='<g opacity="'+num(step===2?p:1)+'">';
      for(i=1;i<4;i++)body+=line(x+i*3*scale,98,x+i*3*scale,157,paper,5);
      for(i=1;i<3;i++)body+=line(x+i*5*scale,203,x+i*5*scale,262,paper,5);
      body+=text(300,185,'3枚ずつ、4つ分',28,green)+text(300,290,'5枚ずつ、3つ分',28,olive)+'</g>';
    }
    if(step===3)body+=line(x,95,mix(x,x+12*scale,p),95,green,4)+line(x,200,mix(x,x+15*scale,p),200,olive,4);
    body+=footer(step===3&&p<1?'もとのまとまりを数える':step===1&&p<1?'Aは12枚へ、Bは15枚へ':['もと：Aは3枚、Bは5枚','Aは12枚、Bは15枚','12 ÷ 3 = 4　　15 ÷ 5 = 3','Aは4倍　　Bは3倍'][step]);
    return body;
  }
  function graph(step,p) {
    var body='',x1=165,x2=400;
    function yy(value){return 285-(value-12)*22;}
    for(var t=12;t<=21;t++){
      body+=line(110,yy(t),460,yy(t),'#dce3d9',1);
      if(t%2===0)body+=text(85,yy(t)+7,t,24,muted);
    }
    body+=text(85,55,'℃',25,muted)+text(x1,320,'10時',28,ink)+text(x2,320,'11時',28,ink);
    body+=line(x1,yy(18),x2,yy(20),green,5)+line(x1,yy(14),x2,yy(17),olive,5,'9 7');
    [[x1,18,green],[x2,20,green],[x1,14,olive],[x2,17,olive]].forEach(function(a){body+=circle(a[0],yy(a[1]),6,a[2])+text(a[0]-25,yy(a[1])-12,a[1],26,a[2]);});
    body+=text(495,95,'A',29,green)+text(495,155,'B',29,olive);
    function gap(x,lo,hi,label){return line(x,yy(lo),x,yy(hi),ink,5)+line(x-9,yy(lo),x+9,yy(lo),ink,3)+line(x-9,yy(hi),x+9,yy(hi),ink,3)+text(x+12,(yy(lo)+yy(hi))/2+8,label,28,ink,'start');}
    if(step===1){body+='<g opacity="'+num(p)+'">'+gap(x1+12,14,18,'4℃')+'</g>';}
    if(step===2){
      // Move only the time cursor between observations; do not invent intermediate temperature values.
      body+=line(mix(x1,x2,p),65,mix(x1,x2,p),292,muted,2,'4 7');
      if(p<0.25)body+='<g opacity="'+num(1-p*4)+'">'+gap(x1+12,14,18,'4℃')+'</g>';
      if(p>0.75)body+='<g opacity="'+num((p-0.75)*4)+'">'+gap(x2+12,17,20,'3℃')+'</g>';
    }
    if(step===3){body+=gap(x2+12,17,20,'3℃')+'<g opacity="'+num(p)+'">'+gap(x1+12,14,18,'4℃')+'</g>';}
    body+=footer(['同じ時刻の2点を見る','10時：18 − 14 = 4℃','11時：20 − 17 = 3℃','差は 4℃ → 3℃'][step]);
    return body;
  }
  var drawers = {'8250243131100000':division,'8250243141300000':decimal,'8250243150000000':fraction,'8250243240000000':area,'8250243250000000':angle,'8250243310000000':change,'8250243320000000':ratio,'8250243411200000':graph};
  function render(code,step,phase) {
    if(typeof code!=='string'||!Object.prototype.hasOwnProperty.call(items,code))return '';
    if(typeof step!=='number'||step%1!==0||step<0||step>=items[code].steps.length)return '';
    if(typeof phase!=='number'||!Number.isFinite(phase))return '';
    var p=Math.max(0,Math.min(1,phase));if(step===0)p=1;
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" role="img" aria-label="'+esc(items[code].steps[step].alt)+'" font-family="Noto Sans JP, sans-serif"><title>'+esc(items[code].steps[step].label)+'</title><rect width="600" height="400" rx="12" fill="'+paper+'"/>'+drawers[code](step,p)+'</svg>';
  }
  BL.lessonScenes={items:items,render:render};
}());
