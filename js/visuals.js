(function () {
  'use strict';
  var BL = window.BL;
  var memories = Object.create(null);
  var definitions = {
    '8250243110000000': {kind:'large',title:'まとまりを変えて見る',note:'同じ大きさを、万・億・兆のまとまりで見てみよう。',defaults:{n:3},controls:[['n','兆のまとまり',1,9,1]]},
    '8250243120000000': {kind:'round',title:'数直線で四捨五入',note:'千の位までの概数にする。1500を境に、近い千のまとまりを確かめよう。',defaults:{n:1420},controls:[['n','もとの数',1000,2000,10]]},
    '8250243131100000': {kind:'divide',title:'同じ数ずつ分ける',note:'一つの箱に3個ずつ。箱の数と、残る個数を動かして確かめよう。',defaults:{n:26},controls:[['n','全部の個数',3,60,1]]},
    '8250243130000000': {kind:'divide2',title:'12個のまとまりで分ける',note:'一つの箱に12個ずつ。箱がいくつできるか、残りはいくつか。',defaults:{n:158},controls:[['n','全部の個数',120,240,1]]},
    '8250243141200000': {kind:'decimal',title:'小数の位を分けて見る',note:'1を10こに分けた一つが0.1。さらに10こずつに分けていこう。',defaults:{n:1234},controls:[['n','0.001の個数',1,1999,1]]},
    '8250243141300000': {kind:'decimalAdd',title:'同じ位をそろえる',note:'1.25と、下のつまみで作った小数。小数点の位置をそろえて計算しよう。',defaults:{n:70,op:'add'},controls:[['n','0.01の個数',0,99,1]],choices:[['op','add','たす'],['op','subtract','ひく']]},
    '8250243141400000': {kind:'decimalMultiply',title:'0.4のまとまり',note:'かけ算でまとめる見方と、わり算で分ける見方を行き来してみよう。',defaults:{n:3},controls:[['n','まとまりの数',1,6,1]]},
    '8250243150000000': {kind:'fraction',title:'4分の1をならべる',note:'同じ大きさの1を、4つに等しく分ける。4分の1を足すと、どうなる？',defaults:{n:5},controls:[['n','4分の1の個数',0,12,1]]},
    '8250243160000000': {kind:'expression',title:'かっこの場所を変える',note:'同じ数でも、先に計算する場所で結果が変わる。色のついた部分から見よう。',defaults:{op:'outside'},choices:[['op','outside','3 + 2 × 4'],['op','inside','(3 + 2) × 4']]},
    '8250243170000000': {kind:'distribute',title:'長方形を分けて計算',note:'横を二つに分けても、全部のマスの数は変わらない。',defaults:{n:3},controls:[['n','たてのマス',1,6,1]]},
    '8250243180000000': {kind:'abacus',title:'そろばんの珠を動かす',note:'梁に寄った珠を数える。上の珠は5、下の珠は一つ1の役目をする。位が変わると大きさも変わる。',defaults:{h:0,t:0,o:0,d:2,c:4}},
    '8250243210000000': {kind:'shapes',title:'四角形の形を変える',note:'平行な辺を見つけよう。長方形も平行四辺形の仲間。',defaults:{op:'rectangle'},choices:[['op','rectangle','長方形'],['op','parallelogram','平行四辺形'],['op','rhombus','ひし形'],['op','trapezoid','台形']]},
    '8250243220000000': {kind:'solid',title:'箱の面と辺をたどる',note:'同じ色の面は向かい合う面。ボタンで別の組を見てみよう。',defaults:{op:'front'},choices:[['op','front','前と後ろ'],['op','side','左と右'],['op','top','上と下']]},
    '8250243230000000': {kind:'position',title:'三つの数で場所を決める',note:'横・たて・高さの順に数を使う。格子の一つ分を1として動かそう。',defaults:{x:2,y:3,z:1},controls:[['x','横',0,5,1],['y','たて',0,5,1],['z','高さ',0,3,1]]},
    '8250243240000000': {kind:'area',title:'1 cm²のマスをならべる',note:'一つのマスは、たても横も1 cm。たてと横を変えると面積はどう変わる？',defaults:{x:5,y:3},controls:[['x','横の長さ（cm）',1,8,1],['y','たての長さ（cm）',1,6,1]]},
    '8250243250000000': {kind:'angle',title:'角を動かしてはかる',note:'右向きの辺が0°の線。そこから反時計回りに動いた大きさを読もう。',defaults:{n:60},controls:[['n','角の大きさ（度）',0,360,10]]},
    '8250243310000000': {kind:'change',title:'正方形をつなげる',note:'一辺に棒を1本使う。正方形を横につなぐと、となりと一辺を共有する。',defaults:{n:3},controls:[['n','正方形の個数',1,6,1]]},
    '8250243320000000': {kind:'ratio',title:'もとにする数をそろえる',note:'赤いテープは青いテープの何倍？ 同じ1目盛りで長さを比べよう。',defaults:{n:3,b:2},controls:[['n','赤いテープの倍',1,5,1],['b','青いテープの長さ（cm）',1,4,1]]},
    '8250243411100000': {kind:'table',title:'二つの見方で分ける',note:'色と形の両方で分ける。赤い丸を増やすと、表のどこが変わる？',defaults:{n:3},controls:[['n','赤い丸の個数',0,6,1]]},
    '8250243411200000': {kind:'graph',title:'二つの折れ線を比べる',note:'架空の場所A・Bの気温。横は1時間ごと、たては5°Cごとの同じ間隔で見る。',defaults:{n:20},controls:[['n','場所Aの11時の気温（°C）',5,30,1]]}
  };
  function esc(value) { return BL.core.escape(value); }
  function node(name, attrs, body) { return '<' + name + ' ' + attrs + '>' + (body || '') + '</' + name + '>'; }
  function label(x,y,value,attrs) { return node('text','x="'+x+'" y="'+y+'" '+(attrs||''),esc(value)); }
  function line(x1,y1,x2,y2,attrs) { return '<line x1="'+x1+'" y1="'+y1+'" x2="'+x2+'" y2="'+y2+'" '+(attrs||'')+'/>'; }
  function rect(x,y,w,h,attrs) { return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" '+(attrs||'')+'/>'; }
  function svg(body,height,title) { return '<svg viewBox="0 0 400 '+height+'" role="img" aria-label="'+esc(title)+'">'+body+'</svg>'; }
  function out(text) { return '<p class="visual-result" aria-live="polite">'+esc(text)+'</p>'; }
  function grid(width,height,split) {
    var size = Math.min(35,310/width), body='';
    for(var y=0;y<height;y++) for(var x=0;x<width;x++) body+=rect(40+x*size,30+y*size,size,size,'class="'+(split!==undefined && x>=split?'grid-second':'grid-first')+'"');
    body+=label(40+width*size/2,55+height*size,width+' cm','text-anchor="middle"');
    body+=label(25,35+height*size/2,height+' cm','text-anchor="end"');
    return svg(body,height*size+80,'横'+width+'、たて'+height+'のマス目');
  }
  function stage(def,s) {
    var body='',i,j,n=s.n,answer,a,b;
    if(def.kind==='large') {
      return '<div class="place-cards">'+['兆','億','万','一'].map(function(v,index){return '<div><small>'+v+'のまとまり</small><strong>'+(index===0?n:'0000')+'</strong></div>';}).join('')+'</div>'+out(n+'兆 = '+(n*10000)+'億 = '+(n*100000000)+'万');
    }
    if(def.kind==='round') {
      body=line(35,100,365,100,'class="axis"');
      for(i=0;i<=10;i++) body+=line(35+33*i,94,35+33*i,106,'class="axis"');
      body+=label(35,132,'1000','text-anchor="middle"')+label(200,132,'1500','text-anchor="middle"')+label(365,132,'2000','text-anchor="middle"');
      body+='<circle cx="'+(35+(n-1000)*.33)+'" cy="100" r="7" class="point"/>'+label(35+(n-1000)*.33,75,n,'text-anchor="middle"');
      return svg(body,155,'1000から2000の数直線。動かした数は'+n)+out(n+' → '+(n<1500?1000:2000)+'（千の位まで）');
    }
    if(def.kind==='divide' || def.kind==='divide2') {
      a=def.kind==='divide'?3:12;b=Math.floor(n/a);
      for(i=0;i<b;i++) {var gx=18+(i%5)*76,gy=20+Math.floor(i/5)*48;body+=rect(gx,gy,64,36,'rx="5" class="group-box"')+label(gx+32,gy+24,a+'個','text-anchor="middle"');}
      var yy=35+Math.ceil(b/5)*48;body+=label(20,yy,'残り：'+n%a+'個');
      return svg(body,yy+20,b+'箱、それぞれ'+a+'個、残り'+n%a+'個')+out(n+' ÷ '+a+' = '+b+(n%a?' あまり '+n%a:''))+'<p class="visual-note">'+n+' = '+a+' × '+b+' + '+n%a+'</p>';
    }
    if(def.kind==='decimal') {
      var digits=('0000'+n).slice(-4).split(''), names=['一の位','十分の一の位','百分の一の位','千分の一の位'];
      body='<div class="place-cards">'+digits.map(function(v,index){return '<div><small>'+names[index]+'</small><strong>'+v+'</strong></div>';}).join('')+'</div>';
      return body+out((n/1000).toFixed(3)+' = '+digits[0]+' + '+(Number(digits[1])/10).toFixed(1)+' + '+(Number(digits[2])/100).toFixed(2)+' + '+(Number(digits[3])/1000).toFixed(3));
    }
    if(def.kind==='decimalAdd') {
      a=s.op==='add'?'+':'−';b=s.op==='add'?125+n:125-n;
      return '<div class="column-sum" aria-label="小数点をそろえた計算"><div>1.25</div><div><span>'+a+'</span>'+(n/100).toFixed(2)+'</div><div class="column-total">'+(b/100).toFixed(2)+'</div></div>'+out('0.01のまとまりで見ると、125 '+a+' '+n+' = '+b);
    }
    if(def.kind==='decimalMultiply') {
      for(i=0;i<n;i++){body+=rect(30+i*57,35,49,55,'rx="4" class="grid-first"')+label(54+i*57,69,'0.4','text-anchor="middle"');}
      a=(4*n/10).toFixed(1);
      return svg(body,115,'0.4を'+n+'こ並べた図')+out('0.4 × '+n+' = '+a)+'<p class="visual-note">'+a+' ÷ '+n+' = 0.4</p>';
    }
    if(def.kind==='fraction') {
      for(i=0;i<3;i++) {for(j=0;j<4;j++) body+=rect(25+i*125+j*27,35,27,65,'class="'+(i*4+j<n?'grid-first':'grid-empty')+'"');body+=label(79+i*125,125,'1','text-anchor="middle"');}
      a=Math.floor(n/4);b=n%4;answer=n+'/4';
      if(n===0)answer+=' = 0';else if(b===0)answer+=' = '+a;else if(a>0)answer+=' = '+a+' と '+b+'/4';
      return svg(body,145,'1を4つに等分した図を三つ。'+n+'つの4分の1に色がある')+out(answer);
    }
    if(def.kind==='expression') {
      var inside=s.op==='inside';
      return '<div class="expression-model">'+(inside?'<mark>(3 + 2)</mark> × 4':'3 + <mark>2 × 4</mark>')+'</div><div class="expression-arrow">↓</div><div class="expression-model">'+(inside?'5 × 4':'3 + 8')+'</div>'+out('= '+(inside?20:11));
    }
    if(def.kind==='distribute') {
      return grid(7,n,4)+out(n+' × (4 + 3) = '+n+' × 4 + '+n+' × 3 = '+(n*7))+'<p class="visual-note">色で分けた横のマスは4こ分と3こ分。</p>';
    }
    if(def.kind==='abacus') {
      var rods=['h','t','o','d','c'], rodNames=['100','10','1','0.1','0.01'];
      body=rect(20,20,360,235,'rx="12" class="abacus-frame"')+line(25,105,375,105,'class="beam"');
      rods.forEach(function(key,index){var x=60+index*70, digit=s[key];body+=line(x,35,x,240,'class="rod"');body+='<ellipse cx="'+x+'" cy="'+(digit>=5?87:55)+'" rx="26" ry="11" class="bead '+(digit>=5?'engaged':'')+'"/>';for(var k=0;k<4;k++){var engaged=k<digit%5;body+='<ellipse cx="'+x+'" cy="'+(engaged?125+k*24:160+k*24)+'" rx="26" ry="11" class="bead '+(engaged?'engaged':'')+'"/>';}body+=label(x,285,rodNames[index]+'の位','text-anchor="middle"');});
      return svg(body,300,'そろばん。各桁の数は'+rods.map(function(k){return s[k];}).join('、'))+out('表す数：'+((s.h*10000+s.t*1000+s.o*100+s.d*10+s.c)/100).toFixed(2));
    }
    if(def.kind==='shapes') {
      var points={rectangle:'80,55 320,55 320,205 80,205',parallelogram:'120,55 350,55 280,205 50,205',rhombus:'200,25 330,130 200,235 70,130',trapezoid:'125,55 280,55 335,205 55,205'};
      body='<polygon points="'+points[s.op]+'" class="shape"/>';
      if(s.op==='rectangle')body+='<path d="M80 75h20v-20 M300 55v20h20 M320 185h-20v20 M100 205v-20h-20" class="right-angle"/>';
      var desc={rectangle:'向かい合う辺が2組とも平行。四つの角はすべて直角。',parallelogram:'向かい合う辺が2組とも平行。',rhombus:'四つの辺の長さがすべて等しい。向かい合う辺が2組とも平行。',trapezoid:'この図では、上と下の辺が平行。'};
      return svg(body,260,'選んだ四角形：'+s.op)+out(desc[s.op]);
    }
    if(def.kind==='solid') {
      var front='75,110 265,110 265,245 75,245',back='140,50 330,50 330,185 140,185',top='75,110 140,50 330,50 265,110',bottom='75,245 140,185 330,185 265,245',left='75,110 140,50 140,185 75,245',right='265,110 330,50 330,185 265,245';
      var selected={front:[front,back],side:[left,right],top:[top,bottom]}[s.op];
      body=selected.map(function(p){return '<polygon points="'+p+'" class="solid-selected"/>';}).join('');
      body+='<path d="M75 110H265V245H75Z M75 110L140 50H330V185L265 245 M265 110L330 50" class="axis"/><path d="M140 50V185H330 M140 185L75 245" class="axis hidden-edge"/>';
      body+=label(170,275,'直方体','text-anchor="middle"');
      return svg(body,295,'直方体の向かい合う2面に色がついた図。見えない辺は破線')+out('向かい合う面は平行。面は6つ、辺は12本、頂点は8つ。');
    }
    if(def.kind==='position') {
      function point(x,y,z){return [55+x*45+y*15,250-y*25-z*35];}
      for(i=0;i<=5;i++){a=point(i,0,0);b=point(i,5,0);body+=line(a[0],a[1],b[0],b[1],'class="grid-line"');a=point(0,i,0);b=point(5,i,0);body+=line(a[0],a[1],b[0],b[1],'class="grid-line"');}
      a=point(s.x,s.y,0);b=point(s.x,s.y,s.z);body+=line(a[0],a[1],b[0],b[1],'class="coordinate-height"');body+='<circle cx="'+b[0]+'" cy="'+b[1]+'" r="7" class="point"/>';
      body+=line(55,250,55,135,'class="axis"')+label(55,125,'高さ','text-anchor="middle"')+label(297,273,'横')+label(140,112,'たて')+label(45,275,'0');
      return svg(body,300,'横'+s.x+'、たて'+s.y+'、高さ'+s.z+'の位置')+out('（横 '+s.x+'、たて '+s.y+'、高さ '+s.z+'）');
    }
    if(def.kind==='area') return grid(s.x,s.y)+out(s.y+' cm × '+s.x+' cm = '+(s.x*s.y)+' cm²');
    if(def.kind==='angle') {
      var rad=n*Math.PI/180,cx=200,cy=190,r=140;
      body='<circle cx="200" cy="190" r="140" class="protractor"/>';
      for(i=0;i<360;i+=10){a=i*Math.PI/180;body+=line(cx+Math.cos(a)*(r-7),cy-Math.sin(a)*(r-7),cx+Math.cos(a)*r,cy-Math.sin(a)*r,'class="tick"');if(i%30===0)body+=label(cx+Math.cos(a)*(r+23),cy-Math.sin(a)*(r+23)+5,i+'°','text-anchor="middle"');}
      body+=line(cx,cy,cx+r,cy,'class="angle-base"')+line(cx,cy,cx+r*Math.cos(rad),cy-r*Math.sin(rad),'class="angle-arm"')+'<circle cx="200" cy="190" r="5" class="point"/>';
      if(n>0 && n<360)body+='<path d="M245 190 A45 45 0 '+(n>180?1:0)+' 0 '+(200+45*Math.cos(rad))+' '+(190-45*Math.sin(rad))+'" class="angle-arc"/>';
      if(n===360)body+='<circle cx="200" cy="190" r="45" class="angle-arc"/><path d="M245 190l-5 10m5-10l5 10" class="angle-arc"/>'+label(200,255,'1回転','text-anchor="middle"');
      return svg(body,385,'右向きから反時計回りに'+n+'度の角')+out(n+'°'+(n===90?'：直角':n===180?'：半回転':n===360?'：1回転':''));
    }
    if(def.kind==='change') {
      for(i=0;i<n;i++)body+=rect(20+i*58,40,58,58,'class="stick-square"');
      return svg(body,120,'正方形'+n+'こを一辺ずつ共有して横につないだ図')+out('棒の数：1 + 3 × '+n+' = '+(1+3*n)+'本')+'<table class="visual-table"><caption>正方形と棒の数</caption><tr><th>正方形</th><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>棒</th><td>4</td><td>7</td><td>10</td><td>13</td></tr></table>';
    }
    if(def.kind==='ratio') {
      var scale=16;
      body=label(22,28,'青：もとにする長さ')+rect(22,40,s.b*scale,35,'class="tape-base"')+label(22,108,'赤：比べる長さ')+rect(22,120,s.b*n*scale,35,'class="tape-target"');
      for(i=1;i<n;i++)body+=line(22+s.b*i*scale,120,22+s.b*i*scale,155,'class="tape-divider"');
      for(i=0;i<=s.b*n;i++)body+=line(22+i*scale,165,22+i*scale,171,'class="tick"');
      body+=label(22,192,'0')+label(22+s.b*n*scale,192,(s.b*n)+' cm','text-anchor="end"');
      return svg(body,210,'青'+s.b+'cm、赤'+s.b*n+'cm。同じ目盛りのテープ')+out((s.b*n)+' ÷ '+s.b+' = '+n+'倍');
    }
    if(def.kind==='table') {
      for(i=0;i<n;i++)body+='<circle cx="'+(30+i*42)+'" cy="30" r="13" class="count-red"/>';
      for(i=0;i<2;i++)body+=rect(20+i*42,60,26,26,'class="count-red"');
      for(i=0;i<2;i++)body+='<circle cx="'+(30+i*42)+'" cy="115" r="13" class="count-blue"/>';
      body+=rect(20,145,26,26,'class="count-blue"');
      return svg(body,190,'赤い丸'+n+'こ、赤い四角2こ、青い丸2こ、青い四角1こ')+'<table class="visual-table"><caption>色と形で分けた個数</caption><thead><tr><th scope="col">色 / 形</th><th scope="col">丸</th><th scope="col">四角</th><th scope="col">合計</th></tr></thead><tbody><tr><th scope="row">赤</th><td>'+n+'</td><td>2</td><td>'+(n+2)+'</td></tr><tr><th scope="row">青</th><td>2</td><td>1</td><td>3</td></tr><tr><th scope="row">合計</th><td>'+(n+2)+'</td><td>3</td><td>'+(n+5)+'</td></tr></tbody></table>';
    }
    if(def.kind==='graph') {
      var series=[[15,18,n,22],[10,12,15,14]];
      for(i=0;i<=30;i+=5){var yy=240-i*6;body+=line(45,yy,365,yy,'class="grid-line"')+label(35,yy+5,i,'text-anchor="end"');}
      for(i=0;i<4;i++)body+=label(55+i*100,265,(9+i)+'時','text-anchor="middle"');
      body+=label(15,30,'°C');
      series.forEach(function(values,index){body+='<polyline points="'+values.map(function(v,k){return (55+k*100)+','+(240-v*6);}).join(' ')+'" class="series series-'+index+'"/>';values.forEach(function(v,k){body+='<circle cx="'+(55+k*100)+'" cy="'+(240-v*6)+'" r="4" class="series-dot-'+index+'"/>';});});
      body+=label(55,298,'実線：場所A')+label(220,298,'破線：場所B');
      return svg(body,320,'気温の折れ線グラフ。場所Aは15、18、'+n+'、22度。場所Bは10、12、15、14度')+'<table class="visual-table"><caption>グラフの数値（°C）</caption><tr><th>時刻</th><td>9時</td><td>10時</td><td>11時</td><td>12時</td></tr><tr><th>場所A</th><td>15</td><td>18</td><td>'+n+'</td><td>22</td></tr><tr><th>場所B</th><td>10</td><td>12</td><td>15</td><td>14</td></tr></table>'+out('11時は、場所A '+n+'°C・場所B 15°C');
    }
    return '';
  }
  function stateFor(unit) {
    if(!memories[unit.code])memories[unit.code]=Object.assign({},definitions[unit.code].defaults);
    return memories[unit.code];
  }
  function render(unit) {
    var def=definitions[unit.code];if(!def)return '';
    var s=stateFor(unit),controls='';
    (def.controls||[]).forEach(function(c){controls+='<label class="visual-control">'+esc(c[1])+' <output data-value="'+c[0]+'">'+s[c[0]]+'</output><input type="range" data-visual-field="'+c[0]+'" min="'+c[2]+'" max="'+c[3]+'" step="'+c[4]+'" value="'+s[c[0]]+'" aria-label="'+esc(c[1])+'"></label>';});
    if(def.choices)controls+='<div class="visual-choices">'+def.choices.map(function(c){return '<button type="button" data-visual-field="'+c[0]+'" data-visual-value="'+c[1]+'" aria-pressed="'+(s[c[0]]===c[1])+'">'+esc(c[2])+'</button>';}).join('')+'</div>';
    if(def.kind==='abacus')controls+='<div class="abacus-controls">'+['h','t','o','d','c'].map(function(key,index){return '<div><span>'+['100','10','1','0.1','0.01'][index]+'の位</span><button type="button" data-abacus="'+key+'" data-step="1" aria-label="'+['100','10','1','0.1','0.01'][index]+'の位の数を1増やす">＋</button><button type="button" data-abacus="'+key+'" data-step="-1" aria-label="'+['100','10','1','0.1','0.01'][index]+'の位の数を1減らす">−</button></div>';}).join('')+'</div>';
    return '<div class="visual-panel panel"><p class="panel-kicker">'+(BL.core.state.mode==='es'?'さわって、たしかめる例':'動かせる例')+'</p><h2 class="panel-title">'+esc(def.title)+'</h2><p class="visual-note">'+esc(def.note)+'</p><div data-visual-stage>'+stage(def,s)+'</div><div class="visual-controls">'+controls+'</div><button type="button" class="quiet-button" data-visual-reset>図をもとに戻す</button><p class="subtle-note">下の説明や練習では、別の数も使います。</p></div>';
  }
  function bind(container,unit) {
    var def=definitions[unit.code];if(!def || !container)return;
    function update(){var s=stateFor(unit);container.querySelector('[data-visual-stage]').innerHTML=stage(def,s);Array.prototype.forEach.call(container.querySelectorAll('[data-value]'),function(el){el.textContent=s[el.getAttribute('data-value')];});Array.prototype.forEach.call(container.querySelectorAll('button[data-visual-field]'),function(el){el.setAttribute('aria-pressed',String(s[el.getAttribute('data-visual-field')]===el.getAttribute('data-visual-value')));});}
    container.addEventListener('input',function(event){var field=event.target.getAttribute('data-visual-field');var control=(def.controls||[]).filter(function(c){return c[0]===field;})[0];if(!control)return;var value=Number(event.target.value);if(!Number.isFinite(value)||value<control[2]||value>control[3])return;stateFor(unit)[field]=value;update();});
    container.addEventListener('click',function(event){var el=event.target.closest('button');if(!el || !container.contains(el))return;
      if(el.hasAttribute('data-visual-reset')){memories[unit.code]=Object.assign({},def.defaults);Array.prototype.forEach.call(container.querySelectorAll('input[data-visual-field]'),function(input){input.value=stateFor(unit)[input.getAttribute('data-visual-field')];});update();return;}
      if(el.hasAttribute('data-abacus')){var key=el.getAttribute('data-abacus'),step=Number(el.getAttribute('data-step'));if(['h','t','o','d','c'].indexOf(key)!==-1&&(step===1||step===-1)){stateFor(unit)[key]=Math.max(0,Math.min(9,stateFor(unit)[key]+step));update();}return;}
      var field=el.getAttribute('data-visual-field'),value=el.getAttribute('data-visual-value');if((def.choices||[]).some(function(c){return c[0]===field&&c[1]===value;})){stateFor(unit)[field]=value;update();}
    });
  }
  BL.visuals={render:render,bind:bind,definitions:definitions};
}());
