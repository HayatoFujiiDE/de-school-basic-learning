(function () {
  'use strict';
  var BL = window.BL;
  if (!BL || !BL.visuals || BL.grade6Visuals) return;
  var green = '#467060', pale = '#dce9df', orange = '#ad672b', sand = '#f4d9b5', ink = '#343c32', paper = '#fffdf8';
  var own = function (o, k) { return Object.prototype.hasOwnProperty.call(o, k); };
  function e(v) { return BL.core.escape(String(v)); }
  function n(v) { return Number(v.toFixed(5)); }
  function gcd(a, b) { while (b) { var r = a % b; a = b; b = r; } return a; }
  function frac(a, b) { var g = gcd(a, b); return b / g === 1 ? String(a / g) : a / g + '/' + b / g; }
  function text(x, y, v, size, anchor, id) { return '<text' + (id ? ' id="' + id + '"' : '') + ' x="' + n(x) + '" y="' + n(y) + '" font-size="' + (size || 27) + '" text-anchor="' + (anchor || 'middle') + '">' + e(v) + '</text>'; }
  function rect(x, y, w, h, fill, id, stroke) { return '<rect' + (id ? ' id="' + id + '"' : '') + ' x="' + n(x) + '" y="' + n(y) + '" width="' + n(w) + '" height="' + n(h) + '" fill="' + (fill || paper) + '" stroke="' + (stroke || green) + '" stroke-width="1.5"/>'; }
  function line(x1, y1, x2, y2, color, dash) { return '<line x1="' + n(x1) + '" y1="' + n(y1) + '" x2="' + n(x2) + '" y2="' + n(y2) + '" stroke="' + (color || green) + '" stroke-width="2"' + (dash ? ' stroke-dasharray="5 5"' : '') + '/>'; }
  function dot(x, y, r, fill, id) { return '<circle' + (id ? ' id="' + id + '"' : '') + ' cx="' + n(x) + '" cy="' + n(y) + '" r="' + r + '" fill="' + (fill || green) + '" stroke="' + green + '" stroke-width="2"/>'; }
  function poly(p, fill, id) { return '<polygon id="' + id + '" points="' + p.map(function (v) { return n(v[0]) + ',' + n(v[1]); }).join(' ') + '" fill="' + fill + '" stroke="' + green + '" stroke-width="2.5"/>'; }
  function sector(cx, cy, r, a, b, fill, id) { return '<path id="' + id + '" d="M' + n(cx) + ' ' + n(cy) + ' L' + n(cx + r * Math.cos(a)) + ' ' + n(cy + r * Math.sin(a)) + ' A' + r + ' ' + r + ' 0 0 1 ' + n(cx + r * Math.cos(b)) + ' ' + n(cy + r * Math.sin(b)) + ' Z" fill="' + fill + '" stroke="' + green + '" stroke-width="1.3"/>'; }
  function figure(body, alt, result, height, extra) { return '<div class="grade6-figure"><svg viewBox="0 0 600 ' + (height || 360) + '" role="img" aria-label="' + e(alt) + '"><title>' + e(alt) + '</title>' + body + '</svg><p id="visual-output-summary" class="visual-result" aria-live="polite">' + e(result) + '</p>' + (extra || '') + '</div>'; }
  function table(caption, rows) { return '<table class="visual-table"><caption>' + e(caption) + '</caption>' + rows.map(function (r) { return '<tr>' + r.map(function (v, i) { var tag = i ? 'td' : 'th'; return '<' + tag + '>' + e(v) + '</' + tag + '>'; }).join('') + '</tr>'; }).join('') + '</table>'; }
  function def(title, note, defaults, controls, choices, draw) { return {kind: 'grade6', title: title, note: note, claimIds: ['visual'], defaults: defaults, controls: controls || [], choices: choices || [], draw: draw}; }
  var items = Object.create(null);

  items['8250263111100000'] = def('同じ分数を、何こ分か集める', 'どの行も、同じ長さの1を使う。色の区画が全部で何こになるか数えよう。', {a: 2, d: '3', n: 3}, [['a', '分子', 1, 4, 1], ['n', '集める個数', 1, 4, 1]], [['d', '3', '3等分'], ['d', '4', '4等分'], ['d', '6', '6等分']], function (s) {
    var d = Number(s.d), b = text(300, 30, '太い区切りまでが1（各行で同じ）', 24);
    for (var j = 0; j < s.n; j++) { for (var i = 0; i < Math.max(d, s.a); i++) b += rect(100 + i * 240 / d, 55 + j * 70, 240 / d, 45, i < s.a ? pale : paper, 'fim-' + j + '-' + i); b += line(340, 50 + j * 70, 340, 105 + j * 70, orange); }
    return figure(b, s.a + '/' + d + 'の帯が' + s.n + '行。同じ大きさの区画が' + s.a * s.n + 'こ', s.a + '/' + d + ' × ' + s.n + ' = ' + frac(s.a * s.n, d), 365);
  });
  items['8250263111200000'] = def('一つの分数を、同じ量ずつ分ける', '全体の1を細かく分け直す。色のついた量を、同じ区画数の組に分けよう。', {a: 3, n: 2}, [['a', '4分の1の個数', 1, 3, 1], ['n', '分ける組の数', 1, 6, 1]], [], function (s) {
    var b = text(300, 50, '帯全体が1', 27), d = 4 * s.n; for (var i = 0; i < d; i++) b += rect(60 + i * 480 / d, 95, 480 / d, 80, i < s.a * s.n ? (Math.floor(i / s.a) % 2 ? sand : pale) : paper, 'fid-' + i);
    for (var k = 0; k <= s.n; k++) b += line(60 + k * s.a * 480 / d, 90, 60 + k * s.a * 480 / d, 190, orange);
    b += text(300, 250, '1組は ' + s.a + '/' + d, 31);
    return figure(b, '全体を' + d + '等分し、色の' + s.a * s.n + '区画を' + s.n + '組に分ける', s.a + '/4 ÷ ' + s.n + ' = ' + frac(s.a, d), 310);
  });
  items['8250263112100000'] = def('分数の「そのうち」を広さで見る', '横の2/3と、たてのn/4が重なる広さ。太い枠の3列×4行が全体の1。', {n: 3}, [['n', 'かける1/4の個数', 1, 5, 1]], [], function (s) {
    var b = ''; for (var y = 0; y < 5; y++) for (var x = 0; x < 3; x++) b += rect(180 + x * 80, 35 + y * 52, 80, 52, x < 2 && y < s.n ? pale : paper, 'ffm-' + x + '-' + y);
    b += rect(180, 35, 240, 208, 'none', 'ffm-whole', orange) + text(300, 335, '横2/3 × たて' + s.n + '/4', 28);
    return figure(b, '全体1は3列4行。重なる色の部分は1/12が' + 2 * s.n + 'こ', '2/3 × ' + s.n + '/4 = ' + 2 * s.n + '/12 = ' + frac(2 * s.n, 12), 365);
  });
  items['8250263110000000'] = def('分ける量を、新しい1つ分にする', '帯全体は1。3/4の中に、選んだ分数がいくつ分あるかを考えよう。', {divisor: '8'}, [], [['divisor', '3', '1/4でわる'], ['divisor', '4', '1/3でわる'], ['divisor', '6', '1/2でわる'], ['divisor', '8', '2/3でわる'], ['divisor', '9', '3/4でわる'], ['divisor', '12', '1でわる']], function (s) {
    var d = Number(s.divisor), b = text(300, 45, 'もとの1を12等分', 27);
    for (var i = 0; i < 12; i++) b += rect(60 + i * 40, 80, 40, 65, i < 9 ? pale : paper, 'ffd-whole-' + i) + rect(60 + i * 40, 210, 40, 65, i < d ? sand : paper, 'ffd-divisor-' + i);
    b += text(300, 185, '3/4 = 9/12', 28) + text(300, 315, '1つ分は ' + frac(d, 12) + ' = ' + d + '/12', 28);
    return figure(b, '上は9区画、下の1つ分は' + d + '区画。同じ幅の1/12で比べる', '9 ÷ ' + d + ' = ' + frac(9, d) + '（除数を1つ分として）', 350);
  });
  items['8250263111300000'] = def('分けて計算しても、広さは同じ', '同じ長方形を二つに分ける。かっこの中を先にまとめる計算と比べよう。', {p: 2, form: 'split'}, [['p', '左側の1/5の個数', 1, 4, 1]], [['form', 'split', '二つに分ける'], ['form', 'whole', '一つにまとめる']], function (s) {
    var b = ''; for (var y = 0; y < 3; y++) for (var x = 0; x < 5; x++) b += rect(125 + x * 70, 55 + y * 65, 70, 65, y < 2 ? (s.form === 'split' && x >= s.p ? sand : pale) : paper, 'law-' + x + '-' + y);
    b += text(300, 310, s.form === 'split' ? 2 * s.p + '/15 ＋ ' + 2 * (5 - s.p) + '/15' : '色の区画は10/15', 29);
    return figure(b, '15区画のうち10区画。分ける場所を変えても色の合計は同じ', '2/3 × (' + s.p + '/5 + ' + (5 - s.p) + '/5) = 2/3');
  });
  items['8250263120000000'] = def('文字に数を入れて確かめる', '横をx cm、たてを3cmとする。面積と周りの長さでは、式も単位も変わる。', {x: 4, measure: 'area'}, [['x', '横の長さx（cm）', 1, 7, 1]], [['measure', 'area', '面積'], ['measure', 'perimeter', '周りの長さ']], function (s) {
    var w = s.x * 45, b = rect(300 - w / 2, 85, w, 135, pale, 'expression-rectangle') + text(300, 270, 'x = ' + s.x + ' cm', 29) + text(535, 160, '3 cm', 27);
    return figure(b, '横' + s.x + 'cm、たて3cmの長方形', s.measure === 'area' ? 'y = 3 × x → ' + 3 * s.x + ' cm²' : 'y = 2 × (x + 3) → ' + 2 * (s.x + 3) + ' cm', 315);
  });
  var triangle = [[-3, 1], [-1, 3], [-1, 1]];
  function plane(p) { return [300 + p[0] * 40, 200 - p[1] * 40]; }
  function grid() { var b = ''; for (var i = -4; i <= 4; i++) b += line(140 + (i + 4) * 40, 40, 140 + (i + 4) * 40, 360, '#dce2d7') + line(140, 40 + (i + 4) * 40, 460, 40 + (i + 4) * 40, '#dce2d7'); return b; }
  items['8250263211200000'] = def('軸までの距離を、両側でそろえる', '1マスは1cm。対応する点を結ぶ線は軸と垂直で、軸がその真ん中を通る。', {axis: 'vertical', point: 'A'}, [], [['axis', 'vertical', 'たての軸'], ['axis', 'horizontal', '横の軸'], ['point', 'A', '点A'], ['point', 'B', '点B'], ['point', 'C', '点C']], function (s) {
    var reflected = triangle.map(function (p) { return s.axis === 'vertical' ? [-p[0], p[1]] : [p[0], -p[1]]; }), b = grid();
    b += s.axis === 'vertical' ? line(300, 25, 300, 375, orange) : line(120, 200, 480, 200, orange);
    b += poly(triangle.map(plane), pale, 'reflection-original') + poly(reflected.map(plane), sand, 'reflection-image');
    var index = ['A', 'B', 'C'].indexOf(s.point), a = plane(triangle[index]), z = plane(reflected[index]); b += line(a[0], a[1], z[0], z[1], ink, true);
    triangle.forEach(function (p, i) { var a = plane(p), r = plane(reflected[i]); b += text(a[0] - 16, a[1] - 13, ['A', 'B', 'C'][i], 22) + text(r[0] + 18, r[1] + 26, ['A′', 'B′', 'C′'][i], 22); });
    var distance = Math.abs(triangle[index][s.axis === 'vertical' ? 0 : 1]);
    return figure(b, s.point + 'と対応点は軸の両側で同じ距離', s.point + 'も対応点も、軸まで ' + distance + ' cm', 400);
  });
  items['8250263210000000'] = def('中心の周りに、半回転する', 'うすい輪郭はもとの場所。三角形1枚が点対称なのではなく、もとの形と180°回した形の対応を見る。', {turn: 6}, [['turn', '30°ずつ回す回数', 0, 6, 1]], [], function (s) {
    var theta = s.turn * Math.PI / 6, rotated = triangle.map(function (p) { return [p[0] * Math.cos(theta) - p[1] * Math.sin(theta), p[0] * Math.sin(theta) + p[1] * Math.cos(theta)]; });
    var b = grid() + poly(triangle.map(plane), 'none', 'rotation-reference') + poly(rotated.map(plane), sand, 'rotation-material') + dot(300, 200, 5, orange, 'rotation-center') + text(320, 230, 'O', 24);
    if (s.turn === 6) triangle.forEach(function (p, i) { var a = plane(p), z = plane(rotated[i]); b += line(a[0], a[1], z[0], z[1], '#8b9585', true); });
    return figure(b, '中心Oからの距離と辺の長さを保って' + s.turn * 30 + '度回す', s.turn * 30 + '°' + (s.turn === 6 ? '：対応する点の真ん中がO' : '。180°まで回してみよう。'), 400);
  });
  items['8250263321100000'] = def('比を、同じ一つ分で読む', '上と下で、一区画の長さをそろえる。a:bの比の値は、a÷bで表せる。', {a: 2, b: 3}, [['a', '上のまとまりa', 1, 6, 1], ['b', '下のまとまりb', 1, 6, 1]], [], function (s) {
    var b = ''; for (var i = 0; i < s.a; i++) b += rect(75 + i * 70, 55, 70, 65, pale, 'ratio-a-' + i); for (var j = 0; j < s.b; j++) b += rect(75 + j * 70, 195, 70, 65, sand, 'ratio-b-' + j);
    b += text(300, 155, 'a = ' + s.a, 28) + text(300, 310, 'b = ' + s.b, 28);
    return figure(b, '同じ長さの区画が上に' + s.a + 'こ、下に' + s.b + 'こ', s.a + ':' + s.b + ' の比の値 = ' + frac(s.a, s.b));
  });
  items['8250263320000000'] = def('全体を、比のまとまりで分ける', '二つの比を合わせて5まとまり。1まとまりの個数を先に求めよう。', {a: 2, total: 20}, [['a', 'Aのまとまりの数', 1, 4, 1], ['total', '全体の個数', 5, 40, 5]], [], function (s) {
    var each = s.total / 5, b = ''; for (var col = 0; col < 5; col++) { b += rect(65 + col * 95, 30, 85, 250, 'none', 'share-group-' + col); for (var row = 0; row < each; row++) b += dot(107.5 + col * 95, 50 + row * 30, 11, col < s.a ? green : orange, 'share-dot-' + col + '-' + row); }
    b += text(300, 330, '1まとまり ' + s.total + ' ÷ 5 = ' + each + 'こ', 27);
    return figure(b, s.total + 'こを5列の同じ個数に分け、Aに' + s.a + '列、Bに' + (5 - s.a) + '列', s.a + ':' + (5 - s.a) + ' → A ' + s.a * each + 'こ、B ' + (5 - s.a) * each + 'こ');
  });
  items['8250263211100000'] = def('すべての辺を、同じ倍率にする', '同じcmの縮尺で二つの長方形を比べる。横もたても同じ倍率で変えよう。', {factor: 'half'}, [], [['factor', 'half', '1/2倍'], ['factor', 'same', '1倍'], ['factor', 'double', '2倍'], ['factor', 'triple', '3倍']], function (s) {
    var f = {half: 0.5, same: 1, double: 2, triple: 3}[s.factor], b = rect(60, 160, 80, 60, pale, 'scale-original') + rect(300, 220 - 60 * f, 80 * f, 60 * f, sand, 'scale-image');
    b += text(100, 265, '4 cm', 27) + text(100, 125, 'たて3 cm', 24) + text(420, 265, '横' + 4 * f + ' cm', 27) + text(420, 320, 'たて' + 3 * f + ' cm', 27);
    return figure(b, '4cmと3cmの長方形を両軸とも' + f + '倍', '対応する辺は' + f + '倍。角はどちらも90°。');
  });
  items['8250263230000000'] = def('半径と、円の面積をつなぐ', '円周率を3.14として計算する。扇形を細かくしても、円全体の面積は変わらない。', {r: 3, sectors: '16'}, [['r', '半径（cm）', 1, 5, 1]], [['sectors', '8', '8等分'], ['sectors', '16', '16等分'], ['sectors', '32', '32等分']], function (s) {
    var count = Number(s.sectors), r = s.r * 26, b = ''; for (var i = 0; i < count; i++) b += sector(300, 165, r, i * Math.PI * 2 / count, (i + 1) * Math.PI * 2 / count, i % 2 ? sand : pale, 'circle-sector-' + i);
    b += line(300, 165, 300 + r, 165, orange) + text(300, 335, '半径 ' + s.r + ' cm・' + count + '等分', 28);
    return figure(b, '半径' + s.r + 'cmの円を' + count + '個の等面積扇形に分ける', s.r + ' × ' + s.r + ' × 3.14 = ' + n(s.r * s.r * 3.14) + ' cm²');
  });
  items['8250263220000000'] = def('内と外の長方形で見積もる', '架空の花だん。形の中に入る長方形と、形を囲む長方形を比べる。', {scale: 1, show: 'both'}, [['scale', '1マスの一辺（m）', 1, 3, 1]], [['show', 'inner', '内の長方形'], ['show', 'outer', '外の長方形'], ['show', 'both', '両方']], function (s) {
    var b = ''; for (var y = 0; y < 4; y++) for (var x = 0; x < 6; x++) if ((y === 1 || y === 2) || (x >= 1 && x <= 4)) b += rect(120 + x * 60, 50 + y * 60, 60, 60, pale, 'estimate-cell-' + x + '-' + y);
    if (s.show !== 'outer') b += rect(180, 50, 240, 240, 'none', 'estimate-inner', orange); if (s.show !== 'inner') b += rect(120, 50, 360, 240, 'none', 'estimate-outer', ink);
    b += text(300, 335, '1マスは ' + s.scale + ' m × ' + s.scale + ' m', 26);
    return figure(b, '花だんの内側4列4行、外側6列4行の長方形', 16 * s.scale * s.scale + ' m² 以上、' + 24 * s.scale * s.scale + ' m² 以下');
  });
  items['8250263240000000'] = def('底面積を、高さ分だけ積む', '底面の形が違っても、体積は底面積×高さ。円周率は3.14を使う。', {shape: 'prism', h: 3}, [['h', '高さ（cm）', 1, 5, 1]], [['shape', 'prism', '角柱'], ['shape', 'cylinder', '円柱']], function (s) {
    var top = 290 - s.h * 35, b = '', base;
    if (s.shape === 'prism') { b += poly([[150, 290], [350, 290], [420, 235], [220, 235]], sand, 'volume-bottom') + poly([[150, 290], [350, 290], [350, top], [150, top]], pale, 'volume-front') + poly([[350, 290], [420, 235], [420, top - 55], [350, top]], sand, 'volume-side') + poly([[150, top], [350, top], [420, top - 55], [220, top - 55]], pale, 'volume-top'); base = 12; }
    else { b += '<ellipse id="volume-bottom" cx="300" cy="290" rx="100" ry="30" fill="' + sand + '" stroke="' + green + '"/>' + rect(200, top, 200, s.h * 35, pale, 'volume-side') + '<ellipse id="volume-top" cx="300" cy="' + top + '" rx="100" ry="30" fill="' + sand + '" stroke="' + green + '"/>'; base = 12.56; }
    b += text(510, (top + 290) / 2, s.h + ' cm', 27) + text(300, 350, s.shape === 'prism' ? '底面 3 × 4 = 12 cm²' : '底面の半径2 cm → 12.56 cm²', 26);
    return figure(b, s.shape === 'prism' ? '底面3cmと4cm、高さ' + s.h + 'cmの角柱の見取り図' : '底面の半径2cm、高さ' + s.h + 'cmの円柱の見取り図', base + ' × ' + s.h + ' = ' + n(base * s.h) + ' cm³', 390);
  });
  items['8250263311100000'] = def('比例の表から、式を読む', '均一なひも。長さ0mなら重さ0g。1m当たりの重さを一定にして調べる。', {rate: 60, n: 4}, [['rate', '1m当たりの重さ（g）', 20, 100, 20], ['n', '長さx（m）', 0, 6, 1]], [], function (s) {
    var b = text(300, 50, '1区間は1m', 27); for (var i = 0; i < 6; i++) b += rect(60 + i * 80, 100, 80, 65, i < s.n ? pale : paper, 'proportion-length-' + i); b += text(300, 225, 'y = ' + s.rate + ' × x', 31);
    return figure(b, '同じ重さの1mのひもを' + s.n + '区間分選ぶ', s.n + ' m → ' + s.rate * s.n + ' g', 280, table('長さと重さ', [['x（m）', 0, 1, 2, s.n], ['y（g）', 0, s.rate, s.rate * 2, s.rate * s.n]]));
  });
  items['8250263311200000'] = def('グラフの一点から、二つの量を読む', '横がx、たてがy。同じ目盛のまま、比例する関係y=k×xを比べよう。', {rate: 3, n: 4}, [['rate', '比例する一定の数k', 1, 5, 1], ['n', '横の値x', 0, 6, 1]], [], function (s) {
    var b = line(80, 290, 525, 290, ink) + line(80, 290, 80, 35, ink); for (var i = 0; i <= 6; i++) b += text(80 + i * 70, 325, i, 23); for (var j = 0; j <= 30; j += 10) b += line(80, 290 - j * 8, 500, 290 - j * 8, '#d2dbcc') + text(55, 299 - j * 8, j, 23);
    b += line(80, 290, 500, 290 - 6 * s.rate * 8) + line(80 + s.n * 70, 290, 80 + s.n * 70, 290 - s.n * s.rate * 8, orange, true) + line(80, 290 - s.n * s.rate * 8, 80 + s.n * 70, 290 - s.n * s.rate * 8, orange, true) + dot(80 + s.n * 70, 290 - s.n * s.rate * 8, 7, orange, 'proportion-point') + text(540, 325, 'x', 25) + text(55, 25, 'y', 25);
    return figure(b, '原点を通る比例のグラフ。選んだ点はx' + s.n + '、y' + s.n * s.rate, 'y = ' + s.rate + ' × ' + s.n + ' = ' + s.rate * s.n);
  });
  items['8250263311300000'] = def('かけた答えを、同じに保つ', '左は面積12cm²の長方形。右は対応するxとyの点。xもyも0より大きい。', {x: '3'}, [], [['x', '1', '横1'], ['x', '2', '横2'], ['x', '3', '横3'], ['x', '4', '横4'], ['x', '6', '横6'], ['x', '12', '横12']], function (s) {
    var x = Number(s.x), y = 12 / x, b = rect(160 - x * 10, 200 - y * 10, x * 20, y * 20, pale, 'inverse-rectangle') + text(160, 350, x + ' × ' + y + ' = 12', 27);
    b += line(330, 320, 585, 320, ink) + line(330, 320, 330, 65, ink); [1, 2, 3, 4, 6, 12].forEach(function (v) { b += dot(330 + v * 20, 320 - 12 / v * 20, v === x ? 7 : 4, v === x ? orange : green, 'inverse-point-' + v); });
    b += text(330, 350, '0', 22) + text(570, 350, '12', 22) + text(305, 87, '12', 22) + text(585, 305, 'x', 24) + text(330, 45, 'y', 24) + text(475, 390, 'xとyの対応', 24);
    return figure(b, '横' + x + 'cm、たて' + y + 'cmの長方形と、積が12になる六つの点', 'x = ' + x + '、y = ' + y + '。x × y = 12', 415);
  });
  var sets = {odd: [2, 4, 4, 6, 9], even: [2, 4, 4, 6, 8, 12], outlier: [2, 4, 4, 6, 24]};
  items['8250263411100000'] = def('代表値を、全部の値と見比べる', '架空の数値を使う。同じ値が二つあれば点も二つ。中央値は小さい順の真ん中を見る。', {data: 'odd', measure: 'median'}, [], [['data', 'odd', '5個の値'], ['data', 'even', '6個の値'], ['data', 'outlier', '一つ大きな値'], ['measure', 'mean', '平均'], ['measure', 'median', '中央値'], ['measure', 'mode', '最頻値']], function (s) {
    var values = sets[s.data], sum = values.reduce(function (a, b) { return a + b; }, 0), mid = Math.floor(values.length / 2), median = values.length % 2 ? values[mid] : (values[mid - 1] + values[mid]) / 2, result = s.measure === 'mean' ? sum / values.length : s.measure === 'median' ? median : 4, counts = {}, b = line(60, 235, 550, 235, ink);
    values.forEach(function (v, i) { counts[v] = (counts[v] || 0) + 1; b += dot(60 + v * 20, 210 - (counts[v] - 1) * 30, 10, green, 'data-dot-' + i); });
    for (var k = 0; k <= 24; k += 4) b += text(60 + k * 20, 275, k, 24);
    b += line(60 + result * 20, 105, 60 + result * 20, 235, orange, true) + text(300, 50, values.join('、'), 29) + text(300, 330, s.measure === 'median' && values.length % 2 === 0 ? '真ん中の4と6を平均する' : '点は全部で' + values.length + '個', 26);
    return figure(b, '全ての数値を点で示し、選んだ代表値に線を引く', (s.measure === 'mean' ? '平均' : s.measure === 'median' ? '中央値' : '最頻値') + ' = ' + result);
  });
  var sample = [0, 1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 10];
  items['8250263411200000'] = def('区間ごとの個数を、柱にする', '各区間は、左の数以上・右の数未満。柱を一つ選び、そこに入る値を確かめよう。', {bin: 0}, [['bin', '確かめる区間（左から0〜5）', 0, 5, 1]], [], function (s) {
    var w = 2, count = 6, frequencies = [], b = line(60, 280, 555, 280, ink) + line(60, 280, 60, 40, ink) + text(60, 28, '個数', 24) + text(550, 325, '値', 24);
    for (var i = 0; i < count; i++) { var f = sample.filter(function (v) { return v >= i * w && v < (i + 1) * w; }).length; frequencies.push(f); b += rect(60 + i * w * 32, 280 - f * 35, w * 32, f * 35, i === s.bin ? sand : pale, 'frequency-bin-' + i) + text(60 + (i + 0.5) * w * 32, 265 - f * 35, f, 26); }
    for (var k = 0; k <= count; k++) b += text(60 + k * w * 32, 325, k * w, 24);
    var selected = sample.filter(function (v) { return v >= s.bin * 2 && v < (s.bin + 1) * 2; });
    return figure(b, '幅2で分けた度数は' + frequencies.join('、') + '、合計12', s.bin * 2 + '以上' + (s.bin + 1) * 2 + '未満：' + selected.join('、') + '（' + selected.length + '個）', 355, '<p class="subtle-note">使った12個の値：' + sample.join('、') + '</p>');
  });
  items['8250263411300000'] = def('どの範囲の資料かを確かめる', '架空の豆12株の高さ。取り出す場所を変えたとき、この12株全体との違いを見よう。', {sample: 'all'}, [], [['sample', 'all', '全12株'], ['sample', 'front', '前列6株'], ['sample', 'back', '後列6株']], function (s) {
    var values = [8, 8, 9, 9, 10, 10, 12, 12, 13, 13, 14, 14], selected = s.sample === 'front' ? values.slice(0, 6) : s.sample === 'back' ? values.slice(6) : values, mean = selected.reduce(function (a, b) { return a + b; }, 0) / selected.length, b = '';
    values.forEach(function (v, i) { var yes = s.sample === 'all' || (s.sample === 'front' ? i < 6 : i >= 6); b += rect(60 + i * 40, 290 - v * 15, 32, v * 15, yes ? pale : paper, 'survey-plant-' + i); });
    b += line(50, 290 - mean * 15, 545, 290 - mean * 15, orange, true) + text(175, 335, '前列6株', 26) + text(415, 335, '後列6株', 26) + text(300, 35, '線は選んだ範囲の平均', 26);
    return figure(b, '全12株の棒を残し、選んだ' + selected.length + '株を色で示す', (s.sample === 'all' ? '全12株' : s.sample === 'front' ? '前列6株' : '後列6株') + 'の平均 ' + mean + ' cm。全12株では11 cm。', 360, '<p class="subtle-note">前列（cm）：8、8、9、9、10、10<br>後列（cm）：12、12、13、13、14、14</p>');
  });
  items['8250263421100000'] = def('順番を区別して、もれなく並べる', 'Aから順に一つ目を決め、残りから二つ目を選ぶ。同じものは2回使わない。', {n: 3, view: 'tree'}, [['n', '使う種類の数', 3, 4, 1]], [['view', 'tree', '枝で見る'], ['view', 'list', '一覧で見る']], function (s) {
    var letters = ['A', 'B', 'C', 'D'].slice(0, s.n), pairs = [], b = ''; letters.forEach(function (a) { letters.forEach(function (z) { if (a !== z) pairs.push(a + z); }); });
    if (s.view === 'tree') { letters.forEach(function (a, i) { var x = 60 + (i + 0.5) * 480 / s.n; b += text(x, 65, a, 29); var children = pairs.filter(function (p) { return p[0] === a; }); children.forEach(function (p, j) { var end = 60 + (i * (s.n - 1) + j + 0.5) * 480 / pairs.length; b += line(x, 85, end, 215) + text(end, 250, p, 24, 'middle', 'permutation-' + p); }); }); }
    else pairs.forEach(function (p, i) { var x = 90 + i % 4 * 135, y = 60 + Math.floor(i / 4) * 85; b += rect(x - 38, y - 25, 76, 58, pale, 'permutation-' + p) + text(x, y + 15, p, 28); });
    return figure(b, '異なる二つを順番付きで選んだ全' + pairs.length + '通り', s.n + ' × ' + (s.n - 1) + ' = ' + pairs.length + '通り。ABとBAは別。', 330);
  });
  items['8250263420000000'] = def('順番を区別せず、二つを選ぶ', 'ABとBAは同じ組。表の半分だけを使えば、重複を除いて数えられる。', {n: 4, view: 'table'}, [['n', '使う種類の数', 3, 5, 1]], [['view', 'table', '表で見る'], ['view', 'cards', '組を並べる']], function (s) {
    var letters = ['A', 'B', 'C', 'D', 'E'].slice(0, s.n), pairs = [], b = ''; letters.forEach(function (a, i) { letters.forEach(function (z, j) { if (i < j) pairs.push(a + z); }); });
    if (s.view === 'table') { letters.forEach(function (v, i) { b += text(190 + i * 55, 40, v, 25) + text(140, 86 + i * 55, v, 25); }); letters.forEach(function (a, i) { letters.forEach(function (z, j) { b += rect(165 + j * 55, 55 + i * 55, 50, 50, i < j ? pale : paper, i < j ? 'combination-' + a + z : 'excluded-' + i + '-' + j); if (i < j) b += text(190 + j * 55, 88 + i * 55, a + z, 21); }); }); }
    else pairs.forEach(function (p, i) { var x = 85 + i % 5 * 107, y = 100 + Math.floor(i / 5) * 120; b += rect(x - 38, y - 35, 76, 70, pale, 'combination-' + p) + text(x, y + 10, p, 28); });
    return figure(b, '異なる二つを順番なしで選んだ' + pairs.length + '組', s.n + ' × ' + (s.n - 1) + ' ÷ 2 = ' + pairs.length + '組');
  });
  var codes = Object.keys(items);
  if (codes.some(function (code) { return own(BL.visuals.definitions, code); })) throw new Error('Duplicate grade 6 visual code');
  codes.forEach(function (code) { BL.visuals.definitions[code] = items[code]; });
  BL.grade6Visuals = {codes: codes.slice()};
}());
