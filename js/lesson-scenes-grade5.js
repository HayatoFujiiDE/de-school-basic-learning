(function () {
  'use strict';
  var BL = window.BL;
  if (!BL || !BL.lessonScenes || BL.grade5Lessons) return;
  var own = function (o, k) { return Object.prototype.hasOwnProperty.call(o, k); };
  var ink = '#343c32', green = '#467060', pale = '#dce9df', orange = '#ad672b', sand = '#f4d9b5', white = '#fffdf8';
  function esc(v) { return String(v).replace(/[&<>"']/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]; }); }
  function num(n) { return Number(n.toFixed(4)); }
  function mix(a, b, p) { return a + (b - a) * p; }
  function text(x, y, v, size, color) { return '<text x="' + num(x) + '" y="' + num(y) + '" font-size="' + (size || 29) + '" fill="' + (color || ink) + '" text-anchor="middle">' + esc(v) + '</text>'; }
  function rect(x, y, w, h, fill, id, opacity, stroke) { return '<rect' + (id ? ' id="' + id + '"' : '') + ' x="' + num(x) + '" y="' + num(y) + '" width="' + num(w) + '" height="' + num(h) + '" fill="' + (fill || white) + '" stroke="' + (stroke || green) + '" stroke-width="1.5" opacity="' + (opacity === undefined ? 1 : num(opacity)) + '"/>'; }
  function line(x1, y1, x2, y2, color, width, opacity) { return '<line x1="' + num(x1) + '" y1="' + num(y1) + '" x2="' + num(x2) + '" y2="' + num(y2) + '" stroke="' + (color || green) + '" stroke-width="' + (width || 2) + '" opacity="' + (opacity === undefined ? 1 : num(opacity)) + '"/>'; }
  function circle(x, y, r, fill, id) { return '<circle id="' + id + '" cx="' + num(x) + '" cy="' + num(y) + '" r="' + r + '" fill="' + fill + '" stroke="' + green + '" stroke-width="2"/>'; }
  function polygon(points, fill, id, opacity) { return '<polygon id="' + id + '" points="' + points.map(function (v) { return num(v[0]) + ',' + num(v[1]); }).join(' ') + '" fill="' + fill + '" stroke="' + green + '" stroke-width="2.5" opacity="' + (opacity === undefined ? 1 : num(opacity)) + '"/>'; }
  function footer(v) { return text(300, 375, v, 31, green); }
  function definition(title, prompt, steps, challenge, state, tryLabel) { return {title: title, prompt: prompt, claimIds: ['motion'], steps: steps.map(function (s) { return {label: s[0], text: s[1], alt: s[2]}; }), challenge: {prompt: challenge[0], options: challenge[1], answer: challenge[2], explanation: challenge[3], claimIds: ['motion']}, tryIt: {label: tryLabel, state: state}}; }
  var items = Object.create(null), drawers = Object.create(null);

  items['8250253131100000'] = definition('1.5倍を、1倍と0.5倍に分ける', '2.4×1.5。2.4を一つ分にして、あと半分を合わせよう。', [
    ['一つ分は2.4', '細い一区間は0.1。24こ分の長さで2.4を表す。これが1倍分。', '0.1の区間24こが、横一列に並ぶ。全体は2.4。'],
    ['半分の量を用意する', '0.5倍は半分。2.4の半分は1.2なので、0.1を12こ分用意する。', '24区間の帯の下に、その半分の長さの12区間の帯が現れる。上は2.4、下は1.2。'],
    ['1倍と0.5倍を合わせる', '半分の帯を、もとの帯の後ろにつなぐ。長さは2.4＋1.2になる。', '下の12区間が形を変えずに右上へ動き、24区間の右へつながる。'],
    ['36こ分の0.1を読む', '24こ＋12こ＝36こ。0.1が36こで3.6だから、2.4×1.5＝3.6。', '横一列に36区間。前24区間は2.4、後ろ12区間は1.2で、全体3.6。']
  ], ['2.4の0.5倍はどれ？', ['1.2', '2.4', '4.8'], '1.2', '0.5倍は半分。2.4を2つに等しく分けると1.2。'], {n: 15}, '同じ2.4×1.5を、広さの図でためす');
  drawers['8250253131100000'] = function (step, phase) {
    var b = step < 2 ? text(300, 43, '一区間は0.1', 27) : '', i;
    for (i = 0; i < 24; i++) b += rect(48 + i * 14, 100, 14, 60, pale, 'mul-base-' + i);
    if (step > 0) for (i = 0; i < 12; i++) { var p = step === 2 ? phase : step > 2 ? 1 : 0; b += rect(mix(48 + i * 14, 384 + i * 14, Math.min(1, p * 2)), mix(220, 100, Math.max(0, p * 2 - 1)), 14, 60, sand, 'mul-half-' + i, step === 1 ? phase : 1); }
    if (step < 2) b += text(216, 195, '2.4（1倍分）', 28);
    if (step === 1) b += text(132, 320, '1.2（0.5倍分）', 27);
    if (step >= 2) b += text(216, 78, '2.4', 29) + text(468, 78, '1.2', 29);
    return b + footer(step === 0 ? '2.4 × 1 = 2.4' : step === 1 ? '2.4 × 0.5 = 1.2' : '2.4 + 1.2 = 3.6');
  };

  items['8250253131200000'] = definition('両方を10倍して、まとまりを見る', '4.8÷1.2。小数でも、いくつ分かを数えればよい。', [
    ['全体4.8を見る', '細い一区間は0.1。48区間で4.8になる。', '0.1の区間48こが、横一列に並ぶ。全体は4.8。'],
    ['1.2ずつ区切る', '0.1を12こ集めると1.2。48区間を12区間ずつに区切る。', '48区間に12区間おきの境界線が伸びて、四つの同じまとまりになる。'],
    ['両方を10倍して考える', '4.8を10倍すると48、1.2を10倍すると12。両方が同じ倍率なので、いくつ分かは変わらない。', '帯の区切りを動かさずに、4.8÷1.2と48÷12を上下に対応させる。'],
    ['四つ分を確かめる', '48÷12＝4。もとの帯にも1.2が4こ入るから、4.8÷1.2＝4。', '同じ幅の四つのまとまりに1、2、3、4と番号が付き、商4を示す。']
  ], ['4.8と1.2を両方10倍すると、商は？', ['変わらない', '10倍になる', '10分の1になる'], '変わらない', '全体と1つ分の両方が同じ10倍なので、1つ分が入る個数は変わらない。'], {divisor: '12'}, '同じ4.8÷1.2から、分け方を変える');
  drawers['8250253131200000'] = function (step, phase) {
    var b = text(300, 50, step < 2 ? '全体4.8・一区間0.1' : '帯の区切りは同じ', 28);
    for (var i = 0; i < 48; i++) b += rect(60 + i * 10, 110, 10, 70, step ? (Math.floor(i / 12) % 2 ? sand : pale) : pale, 'div-cell-' + i);
    if (step > 0) for (var j = 0; j <= 4; j++) b += line(60 + j * 120, 100, 60 + j * 120, 100 + 95 * (step === 1 ? phase : 1), orange, 3);
    if (step === 1) b += text(300, 250, '1.2ずつ、4つのまとまり', 29);
    if (step === 2) b += text(300, 240, '4.8 ÷ 1.2', 31) + '<g opacity="' + num(phase) + '">' + text(300, 300, '↓ 両方を10倍 ↓', 26) + '</g>';
    if (step === 3) for (var k = 0; k < 4; k++) b += text(120 + k * 120, 235, k + 1, 29);
    return b + footer(step === 0 ? '4.8の中に、1.2はいくつ？' : step === 1 ? '1.2 × 4 = 4.8' : step === 2 ? '48 ÷ 12 = 4' : '4.8 ÷ 1.2 = 4');
  };

  items['8250253150000000'] = definition('同じ1/6にそろえて、合わせる', '1/2＋1/3。どちらも同じ大きさの1から分けよう。', [
    ['同じ1から分ける', '上は1を2等分した1こ分。下は1を3等分した1こ分。同じ長さの1を使う。', '同じ長さの1を表す帯が上下に二つ。上は半分、下は3分の1だけに色がある。'],
    ['6等分へ分け直す', '上の1/2は3/6、下の1/3は2/6。区切りを増やしても、色の長さは変わらない。', '同じ二つの帯に6等分の線が加わる。色の部分は上が3区間、下が2区間になる。'],
    ['1/6を合わせる', '下の2こ分を、上の3こ分の後ろへ移す。どの一つ分も同じ1/6。', '下の2枚の1/6が形を変えずに右上へ移り、上の3枚に続く。色の面積は5枚分のまま。'],
    ['5/6を読む', '1/6が3こ＋2こで5こ。1/2＋1/3＝3/6＋2/6＝5/6。', '同じ1を6等分した帯のうち、5区間に色がある。最初の3枚と後ろの2枚は別の色。']
  ], ['通分した1/3はどれ？', ['2/6', '1/6', '3/6'], '2/6', '分子も分母も2倍する。1/3＝2/6で、長さは変わらない。'], {n: 2, mode: 'add'}, '同じ1/2＋1/3を自分でためす');
  drawers['8250253150000000'] = function (step, phase) {
    var b = text(300, 38, 'どちらの帯全体も1', 27), i;
    b += rect(60, 85, 480, 55, white, 'fraction-whole-top') + rect(60, 220, 480, 55, white, 'fraction-whole-bottom');
    for (i = 0; i < 3; i++) b += rect(60 + i * 80, 85, 80, 55, pale, 'fraction-a-' + i, 1, step ? green : pale);
    for (i = 0; i < 2; i++) { var p = step === 2 ? phase : step > 2 ? 1 : 0; b += rect(mix(60 + i * 80, 300 + i * 80, Math.min(1, p * 2)), mix(220, 85, Math.max(0, p * 2 - 1)), 80, 55, sand, 'fraction-b-' + i, 1, step ? orange : sand); }
    if (step === 0) { b += line(300, 85, 300, 140) + line(220, 220, 220, 275) + line(380, 220, 380, 275); }
    else for (i = 1; i < 6; i++) { var h = step === 1 ? 55 * phase : 55; b += line(60 + i * 80, 85, 60 + i * 80, 85 + h) + line(60 + i * 80, 220, 60 + i * 80, 220 + h); }
    if (step < 2) b += text(300, 180, step ? '3/6' : '1/2', 30) + text(300, 320, step ? '2/6' : '1/3', 30);
    else b += text(300, 325, '色の部分の長さは変わらない', 25);
    return b + footer(step < 2 ? '分け方をそろえる' : '3/6 + 2/6 = 5/6');
  };

  items['8250253231100000'] = definition('同じ三角形を合わせて、半分に戻す', '底辺6cm、高さ4cm。長方形の広さを使って考えよう。', [
    ['底辺と高さを読む', '底辺6cm、高さ4cmの直角三角形を考える。高さは底辺と垂直。', '底辺6cm、高さ4cmの直角三角形。底辺と高さは垂直。'],
    ['同じ三角形をもう1つ用意する', '半回転した合同な三角形をもう1つ用意し、横へずらして合わせる。二つで底辺6cm、高さ4cmの長方形になる。', '半回転した合同な三角形が、形を保って右から左へ動く。元の三角形と合わせて長方形になる。'],
    ['長方形の面積を求める', '二つ分の面積は6×4＝24cm²。これはもとの三角形2こ分。', '二つの合同な三角形からなる長方形を中央へ移す。横6cm、縦4cm、全体24cm²。'],
    ['一つ分に戻す', '一つ分は24÷2＝12cm²。三角形の面積は、底辺×高さ÷2。', '足した三角形を薄くして、元の三角形だけを示す。長方形の半分で12cm²。']
  ], ['6×4で求めた24cm²は何こ分？', ['同じ三角形2こ分', '三角形1こ分', '三角形4こ分'], '同じ三角形2こ分', '同じ三角形を二つ合わせた長方形なので、元の面積は2でわる。'], {b: 6, h: 4, shape: 'triangle'}, '同じ底辺6cm・高さ4cmをためす');
  drawers['8250253231100000'] = function (step, phase) {
    var dx = step === 2 ? 130 * phase : step > 2 ? 130 : 0, first = [[50 + dx, 260], [290 + dx, 260], [50 + dx, 100]], b = '';
    b += polygon(first, pale, 'area-original');
    if (step > 0) { var p = step === 1 ? phase : 1, cx = mix(450, 170, p) + dx, cy = 180; var second = [[120, -80], [-120, -80], [120, 80]].map(function (v) { return [cx + v[0], cy + v[1]]; }); b += polygon(second, sand, 'area-copy', step === 3 ? 1 - phase : 1); }
    b += text(170 + dx, 310, '6 cm', 29) + text(25 + dx, 184, '4', 28) + text(25 + dx, 216, 'cm', 23);
    if (step > 1) b += rect(50 + dx, 100, 240, 160, 'none', 'area-whole-outline', 1, '#8b9a82');
    b += text(300, 42, step === 1 ? '同じ三角形をもう1つ' : step === 2 ? '二つで長方形' : '底辺と垂直な高さを使う', 27);
    return b + footer(step < 2 ? '底辺 6 cm・高さ 4 cm' : step === 2 ? '6 × 4 = 24 cm²（2こ分）' : '24 ÷ 2 = 12 cm²');
  };

  items['8250253331100000'] = definition('20このうち8こを、10のまとまりで見る', '割合は、比べる量÷もとにする量。20このうち8こを確かめよう。', [
    ['全体の20こを確かめる', '全部で20こ。そのうち色のついた8こを比べる量にする。', '同じ大きさの丸20こ。8こが緑で、12こは白。'],
    ['2こずつ組にする', '2こずつにすると、全部で10組。色のついた8こは4組になる。', '20この丸が数を変えずに移動し、2こずつの10列になる。緑は左の4組。'],
    ['全体を10等分して読む', '10組のうち4組だから4/10。もとの20こを1と見ると0.4。', '2こずつの組を枠で囲み、10等分した帯も示す。色は4区間で4/10。'],
    ['わり算と結びつける', '8÷20＝0.4。百分率なら40%。もとの20こは、どの段階でも同じ。', '20このうち緑8こ、10組のうち緑4組、帯の4/10が対応する。割合0.4と40%を示す。']
  ], ['割合を求める式はどれ？', ['8÷20', '20÷8', '20−8'], '8÷20', '比べる量8を、もとにする量20でわる。'], {n: 8}, '同じ20このうち8こからためす');
  drawers['8250253331100000'] = function (step, phase) {
    var b = text(300, 40, '全体20こ・色は8こ', 29), p = step === 1 ? phase : step > 1 ? 1 : 0;
    if (step > 1) for (var k = 0; k < 10; k++) b += rect(63 + k * 48, 75, 42, 105, 'none', 'ratio-pair-' + k, step === 2 ? phase : 1, '#aab8a2');
    for (var i = 0; i < 20; i++) { var x = mix(111 + Math.floor(i / 2) * 42, 84 + Math.floor(i / 2) * 48, p), y = mix(100 + i % 2 * 100, 100 + i % 2 * 55, p); b += circle(x, y, 14, i < 8 ? green : white, 'ratio-dot-' + i); }
    if (step > 1) { b += '<g opacity="' + num(step === 2 ? phase : 1) + '">'; for (var j = 0; j < 10; j++) b += rect(60 + j * 48, 250, 48, 45, j < 4 ? pale : white, 'ratio-tenth-' + j); b += text(300, 333, '10等分のうち4つ分', 26) + '</g>'; }
    return b + footer(step === 0 ? '8こ ÷ 20こ' : step === 1 ? '20こ → 10組、8こ → 4組' : '8 ÷ 20 = 0.4 = 40%');
  };

  items['8250253420000000'] = definition('12こを動かして、同じ4こずつにする', '2、4、6をならす。合計を変えずに、同じ量にしよう。', [
    ['もとの量を見る', '三つの量は2、4、6。合わせて12こある。', '同じ大きさの四角が三列に2こ、4こ、6こ。全部で12こ。'],
    ['多いところから移す', '6この列から2こを、2この列へ移す。合計12こは変わらない。', '右の列の上2こが、左の列へ弧を描いて動く。どの途中でも四角は全部で12こ。'],
    ['同じ量を確かめる', '三つとも4こになった。このならした大きさを平均という。', '三列が4こ、4こ、4こになり、同じ高さを示す横線が伸びる。'],
    ['合計を個数でわる', '12こを3つへ同じように分けて4こずつ。平均＝合計÷個数。', '三列の4こずつと、2＋4＋6＝12、12÷3＝4という式を対応させる。']
  ], ['ならす前と後で変わらないものは？', ['合計12こ', 'それぞれの個数', '一番高い列の高さ'], '合計12こ', '物を足したり減らしたりせず移すので、合計12こは同じ。'], {n: 6, mode: 'before'}, '同じ2・4・6をならしてためす');
  drawers['8250253420000000'] = function (step, phase) {
    var b = text(300, 40, '合計12こは変わらない', 28), p = step === 1 ? phase : step > 1 ? 1 : 0;
    [2, 4, 6].forEach(function (count, col) { for (var j = 0; j < count; j++) { var x = 125 + col * 150, y = 290 - (j + 1) * 30; if (col === 2 && j >= 4) { x = mix(425, 125, p); y = mix(y, 290 - (j - 1) * 30, p) - 70 * Math.sin(Math.PI * p); } b += rect(x, y, 50, 30, col === 2 && j >= 4 ? sand : pale, 'average-block-' + col + '-' + j); } });
    if (step > 1) b += line(100, 170, 100 + 400 * (step === 2 ? phase : 1), 170, orange, 3);
    [step === 0 ? 2 : step === 1 && phase < 1 ? '移動中' : 4, 4, step === 0 ? 6 : step === 1 && phase < 1 ? '移動中' : 4].forEach(function (v, i) { b += text(150 + i * 150, 330, v, 27); });
    return b + footer(step < 2 ? '2 + 4 + 6 = 12' : '12 ÷ 3 = 4');
  };

  var codes = Object.keys(items), originalRender = BL.lessonScenes.render;
  if (codes.some(function (code) { return own(BL.lessonScenes.items, code); })) throw new Error('Duplicate grade 5 lesson code');
  codes.forEach(function (code) { BL.lessonScenes.items[code] = items[code]; });
  BL.lessonScenes.render = function (code, step, phase) {
    if (!own(drawers, code)) return originalRender(code, step, phase);
    if (!Number.isInteger(step) || step < 0 || step >= items[code].steps.length) return '';
    if (typeof phase !== 'number' || !Number.isFinite(phase)) return '';
    phase = Math.max(0, Math.min(1, phase));
    return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" role="img" aria-label="' + esc(items[code].steps[step].alt) + '" font-family="Noto Sans JP, sans-serif"><title>' + esc(items[code].steps[step].alt) + '</title>' + drawers[code](step, phase) + '</svg>';
  };
  BL.grade5Lessons = {codes: codes.slice()};
}());
