(function () {
  'use strict';
  var BL = window.BL;
  if (!BL || !BL.visuals || !BL.visuals.definitions || BL.grade5Visuals) return;
  var ink = '#343c32', green = '#467060', pale = '#dce9df', orange = '#ad672b', sand = '#f4d9b5', white = '#fffdf8';
  var own = function (o, k) { return Object.prototype.hasOwnProperty.call(o, k); };
  var e = function (v) { return BL.core.escape(String(v)); };
  function num(n) { return Number(n.toFixed(4)); }
  function text(x, y, v, size, anchor) { return '<text x="' + num(x) + '" y="' + num(y) + '" font-size="' + (size || 27) + '" text-anchor="' + (anchor || 'middle') + '" fill="' + ink + '">' + e(v) + '</text>'; }
  function line(x1, y1, x2, y2, color, width, dash) { return '<line x1="' + num(x1) + '" y1="' + num(y1) + '" x2="' + num(x2) + '" y2="' + num(y2) + '" stroke="' + (color || green) + '" stroke-width="' + (width || 2) + '"' + (dash ? ' stroke-dasharray="6 5"' : '') + '/>'; }
  function rect(x, y, w, h, fill, stroke) { return '<rect x="' + num(x) + '" y="' + num(y) + '" width="' + num(w) + '" height="' + num(h) + '" fill="' + (fill || white) + '" stroke="' + (stroke || green) + '" stroke-width="1.5"/>'; }
  function circle(x, y, r, fill, stroke) { return '<circle cx="' + num(x) + '" cy="' + num(y) + '" r="' + num(r) + '" fill="' + (fill || pale) + '" stroke="' + (stroke || green) + '" stroke-width="2"/>'; }
  function polygon(points, fill, stroke) { return '<polygon points="' + points.map(function (p) { return num(p[0]) + ',' + num(p[1]); }).join(' ') + '" fill="' + (fill || pale) + '" stroke="' + (stroke || green) + '" stroke-width="2.5"/>'; }
  function figure(body, title, result, height, extra) { return '<div class="grade5-figure"><svg viewBox="0 0 600 ' + (height || 360) + '" role="img" aria-label="' + e(title) + '"><title>' + e(title) + '</title>' + body + '</svg><p class="visual-result" aria-live="polite">' + e(result) + '</p>' + (extra || '') + '</div>'; }
  function gcd(a, b) { while (b) { var r = a % b; a = b; b = r; } return a; }
  function fraction(a, b) { if (a === 0) return '0'; var g = gcd(a, b); return b / g === 1 ? String(a / g) : a / g + '/' + b / g; }
  function table(caption, rows) { return '<table class="visual-table"><caption>' + e(caption) + '</caption>' + rows.map(function (row) { return '<tr>' + row.map(function (v, i) { return '<' + (i ? 'td' : 'th') + '>' + e(v) + '</' + (i ? 'td' : 'th') + '>'; }).join('') + '</tr>'; }).join('') + '</table>'; }
  function band(x, y, width, height, parts, filled, fill) { var b = ''; for (var i = 0; i < parts; i++) b += rect(x + i * width / parts, y, width / parts, height, i < filled ? (fill || pale) : white); return b; }
  function regular(n, cx, cy, radius) { var points = []; for (var i = 0; i < n; i++) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; points.push([cx + radius * Math.cos(a), cy + radius * Math.sin(a)]); } return points; }
  function definition(title, note, defaults, controls, choices, draw) { return {kind: 'grade5', title: title, note: note, claimIds: ['visual'], defaults: defaults, controls: controls || [], choices: choices || [], draw: draw}; }
  var items = Object.create(null);

  items['8250253120000000'] = definition('10倍と10分の1で、位をたどる', '同じ数字がどの位を表すかを見る。小数点をそろえた表で比べよう。', {n: 234, scale: '10'}, [['n', 'もとの0.01の個数', 1, 999, 1]], [['scale', '10', '10倍'], ['scale', '0.1', '10分の1']], function (s) {
    var before = s.n / 100, after = before * Number(s.scale), b = '', values = [before, after];
    ['十', '一', '0.1', '0.01', '0.001'].forEach(function (v, i) { b += text(150 + i * 90, 55, v, 24); });
    values.forEach(function (v, row) { var digits = String(Math.round(v * 1000)).padStart(5, '0'); b += text(40, 125 + row * 110, row ? 'あと' : 'もと', 24); for (var i = 0; i < 5; i++) b += rect(110 + i * 90, 80 + row * 110, 80, 65, row ? sand : pale) + text(150 + i * 90, 124 + row * 110, digits[i], 34); });
    b += text(300, 315, s.scale === '10' ? '一つ左の位へ' : '一つ右の位へ', 29);
    return figure(b, '同じ数字の位が一つずつ変わる表', num(before) + (s.scale === '10' ? ' × 10 = ' : ' ÷ 10 = ') + num(after));
  });

  items['8250253111100000'] = definition('2こずつ組にする', '2こずつの組を作る。1こ残るかどうかで、偶数と奇数を分けられる。0も2で割り切れる偶数。', {n: 13}, [['n', '全部の個数', 0, 20, 1]], [], function (s) {
    var b = '', pairs = Math.floor(s.n / 2); for (var i = 0; i < Math.ceil(s.n / 2); i++) { var x = 60 + i % 5 * 105, y = 65 + Math.floor(i / 5) * 120; b += rect(x - 12, y - 25, 85, 75, i < pairs ? pale : sand); b += circle(x + 8, y + 12, 15, green); if (i * 2 + 1 < s.n) b += circle(x + 50, y + 12, 15, green); }
    if (s.n === 0) b += text(300, 145, '0こ。残りも0こ。', 31);
    return figure(b, s.n + 'こを2こずつの組に分けた図', s.n + ' = 2 × ' + pairs + (s.n % 2 ? ' + 1 → 奇数' : ' → 偶数'), 310);
  });

  items['8250253111200000'] = definition('倍数と約数を見つける', '1から36までの数。一つ目の数の倍数・約数、二つの数に共通する公倍数・公約数を切り替えて見よう。', {n: 8, m: 12, mode: 'commonMultiples'}, [['n', '一つ目の整数', 2, 12, 1], ['m', '二つ目の整数（共通を見るとき）', 2, 12, 1]], [['mode', 'multiples', '一つ目の倍数'], ['mode', 'divisors', '一つ目の約数'], ['mode', 'commonMultiples', '公倍数'], ['mode', 'commonDivisors', '公約数']], function (s) {
    var b = '', chosen = [], common = s.mode === 'commonMultiples' || s.mode === 'commonDivisors', multiples = s.mode === 'multiples' || s.mode === 'commonMultiples';
    for (var i = 1; i <= 36; i++) { var first = multiples ? i % s.n === 0 : s.n % i === 0, second = multiples ? i % s.m === 0 : s.m % i === 0, yes = first && (!common || second); if (yes) chosen.push(i); var x = 58 + (i - 1) % 6 * 82, y = 22 + Math.floor((i - 1) / 6) * 48; b += rect(x, y, 74, 42, yes ? sand : white) + text(x + 37, y + 30, i, 25); }
    var name = (common ? '公' : '') + (multiples ? '倍数' : '約数'), subject = s.n + (common ? 'と' + s.m : '') + 'の';
    return figure(b, subject + name + 'を1から36の範囲で色分け', subject + (multiples ? '36までの' : '') + name + '：' + (chosen.length ? chosen.join('、') : 'この範囲にはない'), 330);
  });

  items['8250253131100000'] = definition('小数のかけ算を広さで見る', '横2.4、たてを変えた長方形。1の正方形を10×10に分けると、小さな1マスは0.01。', {n: 15}, [['n', 'たての0.1の個数', 5, 20, 1]], [], function (s) {
    var b = ''; for (var y = 0; y < 20; y++) for (var x = 0; x < 24; x++) b += rect(180 + x * 10, 50 + y * 10, 10, 10, y < s.n ? pale : white, '#bdcabb');
    for (var k = 0; k <= 20; k += 10) b += line(180, 50 + k * 10, 420, 50 + k * 10, green, 2);
    b += rect(180, 50, 240, s.n * 10, 'none', orange) + text(300, 292, '2.4', 30) + text(125, 70 + s.n * 5, s.n / 10, 29) + text(300, 335, '色のマス ' + 24 * s.n + 'こ × 0.01', 25);
    return figure(b, '横24列、色のたて' + s.n + '行。1マスは0.01', '2.4 × ' + s.n / 10 + ' = ' + num(24 * s.n / 100));
  });

  items['8250253131200000'] = definition('いくつ分か、同じ幅で区切る', '4.8の中に、選んだ小数がいくつ入る？ 両方を10倍しても、まとまりの個数は変わらない。', {divisor: '12'}, [], [['divisor', '6', '0.6で分ける'], ['divisor', '12', '1.2で分ける'], ['divisor', '16', '1.6で分ける'], ['divisor', '24', '2.4で分ける']], function (s) {
    var d = Number(s.divisor), q = 48 / d, b = ''; for (var i = 0; i < 48; i++) b += rect(60 + i * 10, 100, 10, 70, Math.floor(i / d) % 2 ? sand : pale, '#9cae9c');
    for (var j = 0; j <= q; j++) b += line(60 + j * d * 10, 92, 60 + j * d * 10, 182, green, 3);
    b += text(300, 60, '全体 4.8', 29) + text(300, 220, '1つ分 ' + d / 10 + ' が ' + q + 'こ', 29) + text(300, 285, '48 ÷ ' + d + ' でも ' + q + 'こ', 29);
    return figure(b, '0.1の区間48こを、' + d + 'こずつに分ける', '4.8 ÷ ' + d / 10 + ' = ' + q, 330);
  });

  items['8250253141200000'] = definition('わり算・分数・小数をつなぐ', '1を同じ大きさに分けた一つ分をならべる。帯の長さは、分数でも小数でも表せる。', {n: 3, d: '4'}, [['n', '分子', 1, 6, 1]], [['d', '2', '2等分'], ['d', '4', '4等分'], ['d', '5', '5等分'], ['d', '8', '8等分'], ['d', '10', '10等分']], function (s) {
    var d = Number(s.d), b = '', unit = 160; for (var i = 0; i < 3 * d; i++) b += rect(60 + i * unit / d, 95, unit / d, 75, i < s.n ? pale : white);
    for (var k = 0; k <= 3; k++) b += text(60 + k * unit, 210, k, 28) + line(60 + k * unit, 175, 60 + k * unit, 185, ink);
    b += text(300, 55, '1区間は 1/' + d, 28) + text(300, 280, s.n + 'こ分の長さ', 28);
    return figure(b, '1の幅をそろえ、1/' + d + 'を' + s.n + 'こ並べた帯', s.n + ' ÷ ' + d + ' = ' + s.n + '/' + d + ' = ' + num(s.n / d), 320);
  });

  items['8250253140000000'] = definition('同じ長さを、細かく分け直す', '同じ大きさの1を使う。分子と分母を同じ数倍しても、色の長さは変わらない。', {n: 1}, [['n', '6等分をさらに分ける数', 1, 4, 1]], [], function (s) {
    var d = 6 * s.n, b = text(300, 45, '帯全体が1', 27) + band(60, 90, 480, 60, d, 3 * s.n, pale) + text(300, 192, '1/2 = ' + 3 * s.n + '/' + d, 30) + band(60, 225, 480, 60, d, 2 * s.n, sand) + text(300, 328, '1/3 = ' + 2 * s.n + '/' + d, 30);
    return figure(b, '1/2と1/3を同じ' + d + '等分の帯で表す', '同じ分母にそろえる。逆にまとめると約分できる。');
  });

  items['8250253150000000'] = definition('分け方をそろえて、たす・ひく', 'どの帯も同じ大きさの1。分母を6にそろえて、1/6の個数を考えよう。', {n: 2, mode: 'add'}, [['n', '右の分数に含む1/6の個数', 1, 3, 1]], [['mode', 'add', 'たす'], ['mode', 'subtract', 'ひく']], function (s) {
    var result = s.mode === 'add' ? 3 + s.n : 3 - s.n, op = s.mode === 'add' ? '＋' : '−';
    var b = band(150, 35, 360, 55, 6, 3, pale) + text(92, 73, '1/2', 28) + band(150, 125, 360, 55, 6, s.n, sand) + text(92, 163, fraction(s.n, 6), 28) + text(48, 130, op, 34) + line(145, 202, 515, 202, ink) + band(150, 230, 360, 55, 6, result, pale) + text(92, 268, fraction(result, 6), 28);
    return figure(b, '1/6を3こと' + s.n + 'こ、' + (s.mode === 'add' ? '合わせる' : 'ひく'), '3/6 ' + op + ' ' + s.n + '/6 = ' + result + '/6' + (fraction(result, 6) !== result + '/6' ? ' = ' + fraction(result, 6) : ''), 330);
  });

  items['8250253160000000'] = definition('一つの式で、個数と代金をつなぐ', '1冊120円のノートと、送料80円。ノートの冊数を変えても、送料は1回分。', {n: 3}, [['n', 'ノートの冊数', 1, 8, 1]], [], function (s) {
    var b = ''; for (var i = 0; i < s.n; i++) b += rect(55 + i * 54, 80, 54, 80, pale) + text(82 + i * 54, 130, '120', 21);
    b += rect(55 + s.n * 54, 80, 36, 80, sand) + text(73 + s.n * 54, 130, '80', 20) + text(300, 220, '1冊120円 × ' + s.n + '冊 ＋ 送料80円', 26);
    return figure(b, 'ノート' + s.n + '冊分と送料1回分を並べた帯。幅は代金に比例する', '120 × ' + s.n + ' + 80 = ' + (120 * s.n + 80) + '円', 275, table('冊数を変えたとき', [['冊数', 1, 2, 3, s.n], ['代金（円）', 200, 320, 440, 120 * s.n + 80]]));
  });

  items['8250253211100000'] = definition('向きを変えて、同じ形を比べる', '辺の長さ3、4、5の直角三角形。回したり裏返したりしても、形と大きさは変わらない。', {turn: 0, flip: 'no'}, [['turn', '90°ずつ回す回数', 0, 3, 1]], [['flip', 'no', 'そのまま'], ['flip', 'yes', '裏返す']], function (s) {
    var base = [[-60, 45], [60, 45], [-60, -45]], first = base.map(function (p) { return [150 + p[0], 165 + p[1]]; });
    var angle = s.turn * Math.PI / 2, second = base.map(function (p) { var x = p[0] * (s.flip === 'yes' ? -1 : 1), y = p[1]; return [440 + x * Math.cos(angle) - y * Math.sin(angle), 165 + x * Math.sin(angle) + y * Math.cos(angle)]; });
    var b = polygon(first, pale) + polygon(second, sand) + text(150, 250, '4', 27) + text(65, 170, '3', 27) + text(168, 150, '5', 27);
    first.forEach(function (p, i) { b += text(p[0] + (i === 1 ? 20 : -18), p[1] + (i < 2 ? 27 : -15), ['A', 'B', 'C'][i], 23); });
    second.forEach(function (p, i) { var dx = p[0] - 440, dy = p[1] - 165; b += text(440 + dx * 1.36, 173 + dy * 1.36, ['A′', 'B′', 'C′'][i], 23); });
    return figure(b, '辺3、4、5の三角形と、それを' + (s.flip === 'yes' ? '裏返してから' : '') + s.turn * 90 + '度回した三角形', 'AとA′、BとB′、CとC′が対応する。2つは合同。', 300);
  });

  items['8250253211200000'] = definition('三角形に分けて、角を集める', '一つの頂点から対角線を引く。できる三角形の個数と、内角の和を結びつけよう。', {n: 5}, [['n', '頂点の数', 3, 8, 1]], [], function (s) {
    var p = regular(s.n, 300, 160, 125), b = ''; for (var i = 1; i < s.n - 1; i++) b += polygon([p[0], p[i], p[i + 1]], i % 2 ? pale : sand);
    b += circle(p[0][0], p[0][1], 6, orange) + text(300, 325, '三角形 ' + (s.n - 2) + 'こ', 28);
    return figure(b, s.n + '角形を一つの頂点から' + (s.n - 2) + 'この三角形に分ける', '180° × (' + s.n + ' − 2) = ' + 180 * (s.n - 2) + '°');
  });

  items['8250253211300000'] = definition('円の中心から、等しく分ける', '円を同じ角度ずつに分け、となりの点を結ぶと正多角形になる。', {n: 6}, [['n', '正多角形の辺の数', 3, 10, 1]], [], function (s) {
    var p = regular(s.n, 300, 160, 125), b = circle(300, 160, 125, white, '#a4b4a1') + polygon(p, pale);
    p.forEach(function (v) { b += line(300, 160, v[0], v[1], '#9b8f5e', 2) + circle(v[0], v[1], 5, green); });
    b += circle(300, 160, 5, orange) + text(300, 325, s.n + '等分', 28);
    return figure(b, '円周上の等間隔の' + s.n + '点を結んだ正' + s.n + '角形', '中心の角：360° ÷ ' + s.n + ' = ' + (360 % s.n === 0 ? 360 / s.n : '約' + num(Math.round(360 / s.n * 100) / 100)) + '°');
  });

  items['8250253211400000'] = definition('円周と直径の長さを比べる', '円周率を3.14として計算する。直径を変えると、円周も同じ割合で変わる。', {n: 6}, [['n', '直径（cm）', 2, 10, 1]], [], function (s) {
    var d = s.n * 12, length = d * 3.14, b = circle(300, 110, d / 2, pale) + line(300 - d / 2, 110, 300 + d / 2, 110, orange, 3) + text(300, 205, '直径 ' + s.n + ' cm', 28);
    b += line(300 - length / 2, 265, 300 + length / 2, 265, green, 9) + text(300, 320, '円周をまっすぐにした長さ（約）', 24);
    return figure(b, '同じ縮尺で描いた直径と円周の長さ。円周率3.14として表示', s.n + ' × 3.14 = 約' + num(s.n * 3.14) + ' cm');
  });

  items['8250253231100000'] = definition('底辺と高さで、広さを決める', '高さは底辺に垂直な長さ。ななめの辺の長さとは区別する。', {b: 6, h: 4, shape: 'triangle'}, [['b', '底辺（cm）', 2, 8, 1], ['h', '高さ（cm）', 2, 6, 1]], [['shape', 'triangle', '三角形'], ['shape', 'parallelogram', '平行四辺形']], function (s) {
    var x = 90, y = 305, w = s.b * 42, h = s.h * 42, shift = 50;
    var p = s.shape === 'triangle' ? [[x, y], [x + w, y], [x + shift, y - h]] : [[x, y], [x + w, y], [x + w + shift, y - h], [x + shift, y - h]];
    var b = rect(x, y - h, w, h, 'none', '#c7d1c3') + polygon(p, pale) + line(x + shift, y - h, x + shift, y, orange, 3, true) + line(x + shift, y - 14, x + shift + 14, y - 14, orange) + line(x + shift + 14, y - 14, x + shift + 14, y, orange);
    b += text(x + w / 2, 347, s.b + ' cm', 28) + text(525, y - h / 2, s.h + ' cm', 27) + text(525, y - h / 2 + 33, '高さ', 23);
    return figure(b, '底辺' + s.b + 'cm、高さ' + s.h + 'cmの' + (s.shape === 'triangle' ? '三角形' : '平行四辺形'), s.b + ' × ' + s.h + (s.shape === 'triangle' ? ' ÷ 2' : '') + ' = ' + s.b * s.h / (s.shape === 'triangle' ? 2 : 1) + ' cm²', 380);
  });

  items['8250253232100000'] = definition('台形とひし形の面積', '台形では上底と下底を足す。ひし形では二つの対角線を使う。どちらも最後に2でわる。', {a: 4, b: 4, shape: 'trapezoid'}, [['a', '上底／横の対角線（cm）', 2, 6, 1], ['b', '高さ／たての対角線（cm）', 2, 6, 1]], [['shape', 'trapezoid', '台形'], ['shape', 'rhombus', 'ひし形']], function (s) {
    var p, b = '', result;
    if (s.shape === 'trapezoid') { var top = s.a * 35, bottom = (s.a + 4) * 35, h = s.b * 35; p = [[300 - bottom / 2, 285], [300 + bottom / 2, 285], [300 + top / 2, 285 - h], [300 - top / 2, 285 - h]]; b = polygon(p, pale) + line(300, 285 - h, 300, 285, orange, 3, true) + text(300, 265 - h, s.a + ' cm', 26) + text(300, 330, (s.a + 4) + ' cm', 26) + text(535, 285 - h / 2, s.b + ' cm', 26); result = '(' + s.a + ' + ' + (s.a + 4) + ') × ' + s.b + ' ÷ 2 = ' + (s.a * 2 + 4) * s.b / 2 + ' cm²'; }
    else { var dx = s.a * 25, dy = s.b * 25; p = [[300 - dx, 170], [300, 170 - dy], [300 + dx, 170], [300, 170 + dy]]; b = polygon(p, sand) + line(300 - dx, 170, 300 + dx, 170, green, 3, true) + line(300, 170 - dy, 300, 170 + dy, orange, 3, true) + text(300, 350, s.a + ' cm（横）', 26) + text(530, 170, s.b + ' cm', 26); result = s.a + ' × ' + s.b + ' ÷ 2 = ' + s.a * s.b / 2 + ' cm²'; }
    return figure(b, s.shape === 'trapezoid' ? '上底' + s.a + 'cm、下底' + (s.a + 4) + 'cm、高さ' + s.b + 'cmの台形' : '対角線' + s.a + 'cmと' + s.b + 'cmのひし形', result, 385);
  });

  items['8250253220000000'] = definition('二つの底面と、その間を見る', '角柱と円柱には、平行で合同な二つの底面がある。角柱の側面は長方形。', {n: 4, shape: 'prism'}, [['n', '角柱の底面の辺の数', 3, 6, 1]], [['shape', 'prism', '角柱'], ['shape', 'cylinder', '円柱']], function (s) {
    var b = '', result;
    if (s.shape === 'prism') { var front = regular(s.n, 255, 215, 92), back = front.map(function (p) { return [p[0] + 90, p[1] - 105]; }); b += polygon(back, sand); front.forEach(function (p, i) { b += line(p[0], p[1], back[i][0], back[i][1], green, 3, i > s.n / 2); }); b += polygon(front, pale); result = s.n + '角柱：面 ' + (s.n + 2) + '、辺 ' + s.n * 3 + '、頂点 ' + s.n * 2; }
    else { b += '<ellipse cx="300" cy="270" rx="105" ry="32" fill="' + pale + '" stroke="' + green + '" stroke-width="3"/>' + rect(195, 75, 210, 195, pale, 'none') + line(195, 75, 195, 270, green, 3) + line(405, 75, 405, 270, green, 3) + '<path d="M195 270 A105 32 0 0 0 405 270" fill="none" stroke="' + green + '" stroke-width="3"/><ellipse cx="300" cy="75" rx="105" ry="32" fill="' + sand + '" stroke="' + green + '" stroke-width="3"/>'; result = '円の底面が2つ。その間を一つの曲面がつなぐ。'; }
    return figure(b, s.shape === 'prism' ? s.n + '角柱の見取り図。二つの底面を色分け' : '円柱の見取り図。底面は合同な二つの円', result, 340);
  });

  items['8250253240000000'] = definition('1cm³を、段にして積む', '1辺1cmの立方体をすき間なく並べる。一段の個数に、段の数をかけよう。', {x: 4, y: 3, z: 2}, [['x', '横（cm）', 1, 5, 1], ['y', '奥行き（cm）', 1, 4, 1], ['z', '高さ（cm）', 1, 4, 1]], [], function (s) {
    function p(x, y, z) { return [180 + 38 * x + 22 * y, 285 + 7 * x - 18 * y - 38 * z]; }
    var a = p(0, 0, 0), b = p(s.x, 0, 0), c = p(s.x, s.y, 0), at = p(0, 0, s.z), bt = p(s.x, 0, s.z), ct = p(s.x, s.y, s.z), dt = p(0, s.y, s.z);
    var body = polygon([a, b, bt, at], pale) + polygon([b, c, ct, bt], sand) + polygon([at, bt, ct, dt], '#eef2e8');
    for (var x = 1; x < s.x; x++) { var l = p(x, 0, 0), u = p(x, 0, s.z), t = p(x, s.y, s.z); body += line(l[0], l[1], u[0], u[1]) + line(u[0], u[1], t[0], t[1]); }
    for (var y = 1; y < s.y; y++) { var f = p(0, y, s.z), g = p(s.x, y, s.z), h = p(s.x, y, 0); body += line(f[0], f[1], g[0], g[1]) + line(g[0], g[1], h[0], h[1]); }
    for (var z = 1; z < s.z; z++) { var fz = p(0, 0, z), gz = p(s.x, 0, z), hz = p(s.x, s.y, z); body += line(fz[0], fz[1], gz[0], gz[1]) + line(gz[0], gz[1], hz[0], hz[1]); }
    body += text((a[0] + b[0]) / 2, b[1] + 36, s.x + ' cm', 25) + text(c[0] + 45, (c[1] + ct[1]) / 2, s.z + ' cm', 25) + text((bt[0] + ct[0]) / 2 + 25, (bt[1] + ct[1]) / 2 - 50, s.y + ' cm', 24);
    return figure(body, '横' + s.x + '、奥行き' + s.y + '、高さ' + s.z + 'の直方体。見える面を1cmずつに区切る', '一段 ' + s.x * s.y + 'こ × ' + s.z + '段 = ' + s.x * s.y * s.z + ' cm³', 380);
  });

  items['8250253310000000'] = definition('同じ割合で増える水の量', 'はじめは0L。毎分同じ量の水を入れる。時間が2倍、3倍なら、水の量も2倍、3倍になる。', {n: 4, rate: 3}, [['n', '時間（分）', 0, 6, 1], ['rate', '1分あたり（L）', 1, 5, 1]], [], function (s) {
    var b = line(80, 290, 535, 290, ink) + line(80, 290, 80, 30, ink); for (var i = 0; i <= 6; i++) b += text(80 + i * 72, 325, i, 23); for (var j = 0; j <= 30; j += 10) b += text(58, 299 - j * 8, j, 22) + line(80, 290 - j * 8, 512, 290 - j * 8, '#cbd4c6');
    b += line(80, 290, 512, 290 - 6 * s.rate * 8, green, 4) + circle(80 + s.n * 72, 290 - s.n * s.rate * 8, 8, orange) + text(545, 326, '分', 23) + text(60, 24, 'L', 23);
    return figure(b, '横は時間0から6分、縦は水の量0から30L。原点を通る比例のグラフ', s.rate + ' × ' + s.n + ' = ' + s.rate * s.n + ' L', 350, table('時間と水の量', [['時間（分）', 0, 1, 2, 3, s.n], ['水の量（L）', 0, s.rate, s.rate * 2, s.rate * 3, s.rate * s.n]]));
  });

  items['8250253321100000'] = definition('1m²あたりの人数で比べる', '架空の二つの場所。同じ1m²のマスを使い、人数を面積でわって比べる。', {n: 20}, [['n', '場所Bの人数', 4, 24, 1]], [], function (s) {
    var b = ''; [{count: 12, cells: 3, y: 70, label: 'A：12人・3m²'}, {count: s.n, cells: 4, y: 245, label: 'B：' + s.n + '人・4m²'}].forEach(function (row) {
      b += text(300, row.y - 25, row.label, 27); for (var j = 0; j < row.cells; j++) b += rect(100 + j * 100, row.y, 100, 100, white);
      for (var i = 0; i < row.count; i++) { var cell = i % row.cells, slot = Math.floor(i / row.cells); b += circle(125 + cell * 100 + slot % 2 * 45, row.y + 18 + Math.floor(slot / 2) * 27, 9, row.cells === 3 ? green : orange); }
    });
    var density = s.n / 4;
    return figure(b, '同じ広さのマスでA3m²に12人、B4m²に' + s.n + '人', 'A：4人/m²　B：' + density + '人/m²。' + (density === 4 ? '混み方は同じ。' : density > 4 ? 'Bの方が混んでいる。' : 'Aの方が混んでいる。'), 375);
  });

  items['8250253320000000'] = definition('速さ・時間・道のりをつなぐ', '同じ速さで進む。上は道のり、下は時間。対応する場所をそろえて読もう。', {speed: 40, n: 3}, [['speed', '速さ（km/時）', 10, 80, 10], ['n', '時間（時間）', 1, 4, 1]], [], function (s) {
    var b = text(300, 42, '道のり（km）', 27) + text(300, 295, '時間（時間）', 27) + line(60, 105, 540, 105, green, 4) + line(60, 215, 540, 215, ink, 3);
    for (var i = 0; i <= 4; i++) b += line(60 + i * 120, 98, 60 + i * 120, 222, '#bbc8b7', 2, true) + text(60 + i * 120, 82, i * s.speed, 26) + text(60 + i * 120, 258, i, 26);
    b += circle(60 + s.n * 120, 105, 9, orange) + circle(60 + s.n * 120, 215, 9, orange);
    return figure(b, '1時間と' + s.speed + 'kmを対応させた二つの数直線', s.speed + ' km/時 × ' + s.n + '時間 = ' + s.speed * s.n + ' km', 330);
  });

  items['8250253331100000'] = definition('もとにする20こを、1と見る', 'もとの20こを固定する。色のついた個数が変わると、割合はどう変わる？', {n: 8}, [['n', '色をつける個数', 0, 20, 1]], [], function (s) {
    var b = ''; for (var i = 0; i < 20; i++) b += circle(150 + i % 5 * 75, 50 + Math.floor(i / 5) * 52, 18, i < s.n ? green : white);
    b += rect(60, 265, 480, 35, white) + rect(60, 265, 480 * s.n / 20, 35, pale) + text(60, 338, '0', 24) + text(540, 338, '1', 24) + text(300, 338, s.n + '/20', 26);
    return figure(b, '20このうち' + s.n + 'こを色分け。同じ割合を帯で表す', s.n + ' ÷ 20 = ' + num(s.n / 20) + '（' + s.n * 5 + '%）');
  });

  items['8250253331200000'] = definition('100こで、百分率を読む', '全体を100こに分ける。1こ分は1%、10こ分は1割、1こ分は1分。', {n: 40}, [['n', '百分率（%）', 0, 100, 5]], [], function (s) {
    var b = ''; for (var i = 0; i < 100; i++) b += rect(160 + i % 10 * 28, 20 + Math.floor(i / 10) * 28, 28, 28, i < s.n ? pale : white);
    return figure(b, '100マスのうち' + s.n + 'マスに色をつける', s.n + '% = ' + num(s.n / 100) + ' = ' + Math.floor(s.n / 10) + '割' + (s.n % 10 ? s.n % 10 + '分' : ''), 330);
  });

  items['8250253420000000'] = definition('全部を変えずに、ならす', '三つの量の合計を、同じ数ずつに分ける。ならす前と後で合計は変わらない。', {n: 6, mode: 'before'}, [['n', '3つ目の個数', 0, 12, 3]], [['mode', 'before', 'もとの量'], ['mode', 'after', 'ならした量']], function (s) {
    var mean = (6 + s.n) / 3, values = s.mode === 'before' ? [2, 4, s.n] : [mean, mean, mean], b = '';
    values.forEach(function (v, i) { for (var j = 0; j < v; j++) b += rect(120 + i * 150, 290 - (j + 1) * 20, 60, 20, i === 2 ? sand : pale); b += text(150 + i * 150, 325, v, 29); });
    b += line(80, 290 - mean * 20, 520, 290 - mean * 20, orange, 2, true) + text(300, 25, '点線は平均 ' + mean, 25);
    return figure(b, values.join('、') + 'この量。合計は' + (6 + s.n) + 'で、点線は平均' + mean, '(2 + 4 + ' + s.n + ') ÷ 3 = ' + mean);
  });

  items['8250253410000000'] = definition('同じ割合を、円と帯で見る', '架空の100この内訳。全体を1として、AとBの割合を同じ色で比べよう。', {n: 40}, [['n', 'Aの割合（%）', 10, 80, 10]], [], function (s) {
    var cx = 300, cy = 130, r = 100, a = -Math.PI / 2 + 2 * Math.PI * s.n / 100, endX = cx + r * Math.cos(a), endY = cy + r * Math.sin(a);
    var b = circle(cx, cy, r, sand, orange) + '<path d="M300 130 L300 30 A100 100 0 ' + (s.n > 50 ? '1' : '0') + ' 1 ' + num(endX) + ' ' + num(endY) + ' Z" fill="' + pale + '" stroke="' + green + '" stroke-width="2"/>';
    b += rect(60, 275, 480 * s.n / 100, 44, pale) + rect(60 + 480 * s.n / 100, 275, 480 * (100 - s.n) / 100, 44, sand, orange);
    for (var i = 0; i <= 100; i++) b += line(60 + i * 4.8, 275, 60 + i * 4.8, i % 10 === 0 ? 288 : 281, '#68735f', 1);
    b += text(170, 360, 'A ' + s.n + '%', 27) + text(430, 360, 'B ' + (100 - s.n) + '%', 27);
    return figure(b, '円グラフと帯グラフ。A' + s.n + '%、B' + (100 - s.n) + '%', 'A ' + s.n + '% + B ' + (100 - s.n) + '% = 100%', 390);
  });

  var codes = Object.keys(items);
  if (codes.some(function (code) { return own(BL.visuals.definitions, code); })) throw new Error('Duplicate grade 5 visual code');
  codes.forEach(function (code) { BL.visuals.definitions[code] = items[code]; });
  BL.grade5Visuals = {codes: codes.slice()};
}());
