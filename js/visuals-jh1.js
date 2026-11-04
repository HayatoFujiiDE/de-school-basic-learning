(function () {
  'use strict';
  var BL = window.BL;
  if (!BL || !BL.visuals || BL.jh1Visuals) return;
  var own = function (o, k) { return Object.prototype.hasOwnProperty.call(o, k); };
  var green = '#467060', pale = '#dce9df', orange = '#ad672b', sand = '#f4d9b5', ink = '#343c32', paper = '#fffdf8', gray = '#d6ddd2';
  var items = Object.create(null);
  function e(v) { return BL.core.escape(String(v)); }
  function n(v) { return Number(v.toFixed(5)); }
  function sign(v) { return v < 0 ? '−' + Math.abs(v) : String(v); }
  function term(v) { return (v < 0 ? '−' : '+') + Math.abs(v); }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var q = a % b; a = b; b = q; } return a || 1; }
  function fraction(a, b) { if (b < 0) { a = -a; b = -b; } var g = gcd(a, b); return b / g === 1 ? sign(a / g) : sign(a / g) + '/' + b / g; }
  function pi(a, b) { var g = gcd(a, b || 1), k = a / g, d = (b || 1) / g; return (k === 1 ? '' : sign(k)) + 'π' + (d === 1 ? '' : '/' + d); }
  function id(v) { return v ? ' id="jh1-visual-' + v + '"' : ''; }
  function text(x, y, value, size, key, anchor) { return '<text' + id(key) + ' x="' + n(x) + '" y="' + n(y) + '" font-size="' + (size || 28) + '" text-anchor="' + (anchor || 'middle') + '">' + e(value) + '</text>'; }
  function line(x, y, xx, yy, color, key, dash) { return '<line' + id(key) + ' x1="' + n(x) + '" y1="' + n(y) + '" x2="' + n(xx) + '" y2="' + n(yy) + '" stroke="' + (color || green) + '" stroke-width="2.5"' + (dash ? ' stroke-dasharray="5 5"' : '') + '/>'; }
  function rect(x, y, w, h, fill, key, stroke) { return '<rect' + id(key) + ' x="' + n(x) + '" y="' + n(y) + '" width="' + n(w) + '" height="' + n(h) + '" fill="' + (fill || paper) + '" stroke="' + (stroke || green) + '" stroke-width="2"/>'; }
  function dot(x, y, radius, fill, key) { return '<circle' + id(key) + ' cx="' + n(x) + '" cy="' + n(y) + '" r="' + radius + '" fill="' + (fill || green) + '" stroke="' + green + '" stroke-width="2"/>'; }
  function polygon(points, fill, key) { return '<polygon' + id(key) + ' points="' + points.map(function (p) { return n(p[0]) + ',' + n(p[1]); }).join(' ') + '" fill="' + fill + '" stroke="' + green + '" stroke-width="2.5"/>'; }
  function path(d, fill, key, color) { return '<path' + id(key) + ' d="' + d + '" fill="' + (fill || 'none') + '" stroke="' + (color || green) + '" stroke-width="2.5"/>'; }
  function arrow(x, y, xx, yy, color, key) { if (x === xx && y === yy) return dot(x, y, 4, color, key + '-zero') + text(x, y - 17, '0', 22, key + '-zero-label'); var a = Math.atan2(yy - y, xx - x), dx = 9 * Math.cos(a), dy = 9 * Math.sin(a); return line(x, y, xx, yy, color, key) + polygon([[xx, yy], [xx - dx + dy / 2, yy - dy - dx / 2], [xx - dx - dy / 2, yy - dy + dx / 2]], color, key + '-head'); }
  function figure(body, alt, result, height, extra) { return '<div class="jh1-figure"><svg viewBox="0 0 600 ' + (height || 360) + '" role="img" aria-label="' + e(alt) + '"><title>' + e(alt) + '</title>' + body + '</svg><p id="jh1-visual-summary" class="visual-result" aria-live="polite">' + e(result) + '</p>' + (extra || '') + '</div>'; }
  function table(caption, rows) { return '<table class="visual-table"><caption>' + e(caption) + '</caption>' + rows.map(function (r) { return '<tr>' + r.map(function (v, i) { var tag = i ? 'td' : 'th'; return '<' + tag + '>' + e(v) + '</' + tag + '>'; }).join('') + '</tr>'; }).join('') + '</table>'; }
  function equations(values, selected) { return values.map(function (v, i) { return '<p class="jh1-equation" aria-current="' + (i === selected) + '">' + e(v) + '</p>'; }).join(''); }
  function choices(key, values, labels) { return values.map(function (v, i) { return [key, String(v), labels ? labels[i] : sign(v)]; }); }
  function add(code, title, note, defaults, controls, options, draw) { items['835021' + code] = {kind: 'jh1', title: title, note: note, claimIds: ['visual'], defaults: defaults, controls: controls || [], choices: options || [], draw: draw}; }
  function numberLine(maximum, y) { var b = line(60, y, 540, y, ink, 'number-axis'), step = maximum > 6 ? 2 : 1; for (var k = -maximum; k <= maximum; k += step) { var x = 300 + k * 240 / maximum; b += line(x, y - 6, x, y + 6, gray) + text(x, y + 37, sign(k), 23); } return b; }
  function pointOn(v, maximum, y, color, key) { return dot(300 + v * 240 / maximum, y, 7, color, key); }

  add('3111100000', '位置と、0からの距離を分けて見る', '右ほど大きい数。絶対値は、0からどれだけ離れているかを表す。', {x: -3}, [['x', '数直線に置く数', -6, 6, 1]], [], function (s) {
    var x = 300 + s.x * 40, b = numberLine(6, 220) + pointOn(s.x, 6, 220, orange, 'absolute-point') + text(x, 155, sign(s.x), 34, 'absolute-coordinate');
    b += line(300, 110, x, 110, orange, 'absolute-distance') + text(300, 65, '0からの距離 ' + Math.abs(s.x), 29);
    return figure(b, '数' + sign(s.x) + 'は0から' + Math.abs(s.x) + '離れている', '数は ' + sign(s.x) + '、絶対値は ' + Math.abs(s.x), 300);
  });
  add('3111200000', '引く数を、反対の数の足し算へ', '0の場所は固定。はじめの数へ進み、足す数の向きと大きさだけ移動する。', {a: -2, b: -3, op: 'sub'}, [['a', 'はじめの数', -4, 4, 1], ['b', '足す・引く数', -4, 4, 1]], choices('op', ['add', 'sub'], ['たし算', 'ひき算']), function (s) {
    var move = s.op === 'add' ? s.b : -s.b, answer = s.a + move, b = numberLine(8, 245);
    b += arrow(300, 125, 300 + s.a * 30, 125, green, 'add-first') + arrow(300 + s.a * 30, 190, 300 + answer * 30, 190, orange, 'add-move') + pointOn(answer, 8, 245, orange, 'add-result');
    b += text(300, 60, '(' + sign(s.a) + ') + (' + sign(move) + ')', 32);
    return figure(b, '0から' + sign(s.a) + 'へ、その後' + sign(move) + 'だけ移動', '(' + sign(s.a) + ') ' + (s.op === 'add' ? '+' : '−') + ' (' + sign(s.b) + ') = ' + sign(answer), 315);
  });
  add('3112100000', '積の並びから、符号を確かめる', 'かける数が1変わると、積は同じ数ずつ変わる。わり算の除数に0は選べない。', {a: -2, b: '-3', op: 'mul'}, [['a', '計算する数', -4, 4, 1]], choices('b', [-3, -2, -1, 1, 2, 3]).concat(choices('op', ['mul', 'div'], ['かけ算', 'わり算'])), function (s) {
    var d = Number(s.b), b = text(300, 45, '同じ数 ' + sign(d) + ' をかけた表', 27);
    for (var k = -3; k <= 3; k++) { var x = 60 + (k + 3) * 80; b += rect(x - 35, 85, 70, 125, k === s.a ? sand : paper, 'multiply-cell-' + k) + text(x, 130, sign(k), 26) + text(x, 185, sign(k * d), 28, 'multiply-product-' + k); }
    b += text(300, 270, '上：かける数　下：積', 26);
    return figure(b, 'かける数を−3から3へ変えた積の表', '(' + sign(s.a) + ') ' + (s.op === 'mul' ? '×' : '÷') + ' (' + sign(d) + ') = ' + (s.op === 'mul' ? sign(s.a * d) : fraction(s.a, d)), 310);
  });
  var calculation = {square: ['(−3)²', '(−3) × (−3)', '9'], sign: ['−3²', '−(3 × 3)', '−9'], mixed: ['2 + 3 × (−4)', '2 + (−12)', '−10']};
  add('3111000000', '先に計算するまとまりを選ぶ', '累乗、かけ算・わり算、たし算・ひき算の順。括弧があれば、その中を先に考える。', {example: 'square', step: 0}, [['step', '確かめる段階', 0, 2, 1]], choices('example', ['square', 'sign', 'mixed'], ['(−3)²', '−3²', '四則が混じる式']), function (s) {
    var values = calculation[s.example], b = rect(60, 80, 480, 95, pale, 'calculation-frame') + text(300, 140, values[s.step], 36, 'calculation-value');
    return figure(b, '選んだ途中式を大きく表示', values[0] + ' = ' + values[2], 220, equations(values, s.step));
  });
  add('3111300000', '基準を変えても、平均は同じ', '架空の4つの測定値は18、20、22、24。基準との差を使って平均を求める。', {base: 20, index: 0}, [['base', '基準の値', 18, 22, 2], ['index', '確かめる値（左から0〜3）', 0, 3, 1]], [], function (s) {
    var values = [18, 20, 22, 24], b = ''; values.forEach(function (v, i) { var x = 110 + i * 125; b += rect(x - 40, 250 - v * 7, 80, v * 7, i === s.index ? sand : pale, 'baseline-bar-' + i) + text(x, 285, v, 28) + text(x, 45, term(v - s.base), 27, 'baseline-difference-' + i); });
    b += line(60, 250 - s.base * 7, 540, 250 - s.base * 7, orange, 'baseline-reference', true);
    return figure(b, '線は基準' + s.base + '、上の数は基準との差', '基準' + s.base + ' + 差の平均(' + sign(21 - s.base) + ') = 21', 320);
  });
  function factorTree(value, first) { if (value === 2 || value === 3 || value === 5) return {value: value}; var f = first || 2; while (value % f) f++; return {value: value, children: [factorTree(f), factorTree(value / f)]}; }
  add('5100000000', '分ける順を変えて、素因数を比べる', '枝の先まで分ける。親の数は子の数の積で、最後は素数だけになる。', {n: '24', route: 'small'}, [], choices('n', [12, 18, 24, 30]).concat(choices('route', ['small', 'other'], ['2から分ける', '別の因数から分ける'])), function (s) {
    var v = Number(s.n), first = s.route === 'small' ? 2 : {12: 3, 18: 3, 24: 3, 30: 5}[v], root = factorTree(v, first), leaves = [], all = [];
    function place(node, depth) { node.y = 45 + depth * 80; if (!node.children) { node.index = leaves.length; leaves.push(node); } else node.children.forEach(function (child) { place(child, depth + 1); }); all.push(node); }
    place(root, 0); function x(node) { if (!node.children) return 60 + (node.index + 0.5) * 480 / leaves.length; return (x(node.children[0]) + x(node.children[1])) / 2; }
    var b = ''; all.forEach(function (node) { if (node.children) node.children.forEach(function (child) { b += line(x(node), node.y + 12, x(child), child.y - 27, gray); }); });
    all.forEach(function (node, i) { b += text(x(node), node.y, node.value, 28, node.children ? 'factor-node-' + i : 'factor-leaf-' + node.index); });
    return figure(b, '数を二つの因数に分け、素数の葉まで進める木', v + ' = ' + leaves.map(function (leaf) { return leaf.value; }).join(' × '), 330);
  });
  var numberExamples = {subtract: ['3 − 5', '−2', 'integer'], divide: ['3 ÷ 2', '3/2', 'rational'], exact: ['4 ÷ 2', '2', 'natural'], add: ['2 + 3', '5', 'natural']};
  add('5200000000', '計算の答えが入る数の範囲', '自然数は1、2、3、…。整数は0と負の整数も含む。分数で表せる数まで広げて比べる。', {example: 'subtract', scope: 'integer'}, [], choices('example', ['subtract', 'divide', 'exact', 'add'], ['3−5', '3÷2', '4÷2', '2+3']).concat(choices('scope', ['natural', 'integer', 'rational'], ['自然数', '整数', '分数で表せる数'])), function (s) {
    var v = numberExamples[s.example], order = ['natural', 'integer', 'rational'], included = order.indexOf(v[2]) <= order.indexOf(s.scope), b = rect(50, 35, 500, 255, paper, 'number-rational') + rect(85, 100, 430, 165, pale, 'number-integer') + rect(120, 165, 360, 75, sand, 'number-natural');
    var bounds = {natural: [120, 165, 360, 75], integer: [85, 100, 430, 165], rational: [50, 35, 500, 255]}[s.scope], names = {natural: '自然数', integer: '整数', rational: '分数で表せる数'};
    b += rect(bounds[0], bounds[1], bounds[2], bounds[3], 'none', 'number-selected-scope', orange) + text(300, 77, '分数で表せる数', 26) + text(300, 142, '整数', 26) + text(300, 211, '自然数', 27);
    return figure(b, '自然数は整数に、整数は分数で表せる数に含まれる', v[0] + ' = ' + v[1] + '。' + names[s.scope] + 'に' + (included ? '入る。' : '入らない。'), 325);
  });
  add('3121200000', '文字と数のまとまりを式にする', '札は式に使う文字を表す。札の間の＋や×を見て、式のまとまりを確かめよう。', {a: 3, form: 'product'}, [['a', '数・因子の個数', 1, 4, 1]], choices('form', ['product', 'power', 'quotient'], ['a×x', 'xの累乗', 'x÷a']), function (s) {
    var b = '', result;
    if (s.form === 'quotient') { for (var i = 0; i < s.a; i++) b += rect(60 + i * 480 / s.a, 100, 480 / s.a, 95, i === 0 ? sand : paper, 'notation-part-' + i); b += text(300, 70, '全体がx', 28); result = 'x ÷ ' + s.a + ' = ' + (s.a === 1 ? 'x' : 'x/' + s.a); }
    else { for (var j = 0; j < s.a; j++) { b += rect(70 + j * 125, 95, 90, 95, pale, 'notation-factor-' + j) + text(115 + j * 125, 154, 'x', 35); if (j) b += text(52.5 + j * 125, 154, s.form === 'power' ? '×' : '+', 26); } result = s.form === 'power' ? Array(s.a).fill('x').join(' × ') + ' = ' + (s.a === 1 ? 'x' : 'x^' + s.a) : s.a + ' × x = ' + (s.a === 1 ? 'x' : s.a + 'x'); }
    b += text(300, 270, s.form === 'power' ? '札の文字をかけ合わせる' : s.form === 'product' ? '同じ文字を足し合わせる' : '同じ量ずつ分けた一つ分', 27);
    return figure(b, '文字を含む計算のまとまり', result, 320);
  });
  add('3121100000', '文字に数を入れ、式の値を求める', '負の数を入れるときは括弧を使う。同じ文字には同じ数を入れる。', {x: -2, formula: 'linear'}, [['x', 'xに入れる数', -4, 4, 1]], choices('formula', ['linear', 'square'], ['2x+1', 'x²']), function (s) {
    var value = s.formula === 'linear' ? 2 * s.x + 1 : s.x * s.x, substitution = s.formula === 'linear' ? '2 × (' + sign(s.x) + ') + 1' : '(' + sign(s.x) + ') × (' + sign(s.x) + ')';
    return figure(text(300, 70, 'x = ' + sign(s.x), 32) + rect(55, 110, 490, 85, pale, 'substitution-card') + text(300, 164, substitution, 32) + text(300, 275, '= ' + sign(value), 36, 'substitution-value'), '文字への代入と計算結果', (s.formula === 'linear' ? '2x + 1' : 'x²') + ' の値は ' + sign(value), 320);
  });
  add('3121300000', '文字の項と定数の項を分ける', '±xの札は符号付きの項。文字の係数どうし、定数どうしを計算する。', {a: 3, b: -2}, [['a', '前のxの係数', -3, 3, 1], ['b', '後ろのxの係数', -3, 3, 1]], [], function (s) {
    var b = ''; [s.a, s.b].forEach(function (v, row) { if (v === 0) b += text(190, 105 + row * 100, '0x', 30); for (var i = 0; i < Math.abs(v); i++) b += rect(60 + i * 105, 60 + row * 100, 90, 70, v < 0 ? sand : pale, 'term-' + row + '-' + i) + text(105 + i * 105, 105 + row * 100, v < 0 ? '−x' : '+x', 30); });
    b += rect(430, 60, 100, 70, pale, 'term-constant-0') + text(480, 105, '+2', 30) + rect(430, 160, 100, 70, sand, 'term-constant-1') + text(480, 205, '−1', 30);
    return figure(b, '二つのxの係数と定数2、−1を種類ごとに示す', '(' + sign(s.a) + 'x+2) + (' + sign(s.b) + 'x−1) = ' + sign(s.a + s.b) + 'x+1', 285);
  });
  add('3121400000', '境界の数を含むか、確かめる', '1個80円、使える金額400円の架空の場面。個数nは整数で考える。', {n: 5, relation: 'le'}, [['n', '個数n', 0, 8, 1]], choices('relation', ['le', 'lt', 'equal'], ['400円以下', '400円未満', '400円と同じ']), function (s) {
    var symbol = s.relation === 'le' ? '≤' : s.relation === 'lt' ? '<' : '=', b = line(60, 190, 540, 190, ink);
    for (var k = 0; k <= 8; k++) { var yes = s.relation === 'le' ? k <= 5 : s.relation === 'lt' ? k < 5 : k === 5; b += dot(60 + k * 60, 190, k === s.n ? 12 : 8, yes ? green : paper, 'condition-value-' + k) + text(60 + k * 60, 240, k, 25); }
    b += text(300, 75, '80n ' + symbol + ' 400', 34) + text(300, 300, 'n ' + symbol + ' 5', 31);
    return figure(b, '0から8の整数で条件を満たす点を色分け', 'n=' + s.n + ' は ' + s.n * 80 + '円。条件を' + ((s.relation === 'le' ? s.n <= 5 : s.relation === 'lt' ? s.n < 5 : s.n === 5) ? '満たす。' : '満たさない。'));
  });
  add('3131100000', '左右を同じ値にするxを探す', '方程式2x+3=7に数を入れる。二つの値が一致するとき、その数が解になる。', {x: 1}, [['x', 'xに入れる数', -2, 6, 1]], [], function (s) {
    var left = 2 * s.x + 3, b = text(170, 80, '左：2x+3', 28) + text(430, 80, '右：7', 28) + text(170, 145, sign(left), 38, 'equation-left') + text(430, 145, '7', 38, 'equation-right');
    b += line(60, 245, 540, 245, ink) + dot(90 + (left + 1) * 25, 245, 8, green, 'equation-left-point') + dot(290, 215, 8, orange, 'equation-right-point') + line(290, 215, 290, 245, orange, 'equation-right-guide', true) + line(290, 239, 290, 251, ink) + text(290, 295, '7', 25) + text(90, 295, '−1', 25) + text(490, 295, '15', 25);
    return figure(b, '左辺の値と右辺7を同じ数直線で比べる', 'x=' + sign(s.x) + '：' + sign(left) + (left === 7 ? ' = 7。解は2。' : ' ≠ 7。'), 330);
  });
  var equalSteps = ['2x + 3 = 7', '2x = 4（両辺から3を引く）', 'x = 2（両辺を2でわる）', '2 × 2 + 3 = 7（代入して確認）'];
  add('3131200000', '両辺に、同じ操作をする', '等号の左右を一緒に変える。xの値を変えずに、見通しのよい式へ直す。', {step: 0}, [['step', '確かめる段階', 0, 3, 1]], [], function (s) {
    var formulas = ['2x + 3 = 7', '2x = 4', 'x = 2', '7 = 7'];
    return figure(rect(65, 85, 470, 110, pale, 'equality-card') + text(300, 155, formulas[s.step], 40, 'equality-formula'), '同じ解を保つ式の変形', formulas[s.step], 245, equations(equalSteps, s.step));
  });
  var equationCases = {bracket: ['2(x + 1) = 8', '2x + 2 = 8', '2x = 6', 'x = 3'], decimal: ['0.5x + 1 = 3', '5x + 10 = 30', '5x = 20', 'x = 4'], fraction: ['x/3 + 1 = 3', 'x + 3 = 9', 'x = 6', '6/3 + 1 = 3']};
  add('3132100000', '全ての項に、同じ操作を届ける', '括弧を開く、小数や分母をなくす操作を見比べる。一つの項だけを変えない。', {example: 'bracket', step: 0}, [['step', '確かめる段階', 0, 3, 1]], choices('example', ['bracket', 'decimal', 'fraction'], ['括弧のある式', '小数のある式', '分数のある式']), function (s) {
    var values = equationCases[s.example]; return figure(rect(50, 90, 500, 100, pale, 'equation-process-card') + text(300, 153, values[s.step], 34, 'equation-process-value'), '選んだ同値変形を示す', s.example === 'bracket' ? '解は x=3' : s.example === 'decimal' ? '解は x=4' : '解は x=6', 230, equations(values, s.step));
  });
  add('5400000000', '二つの比を、同じ倍率でそろえる', '一つ目の比2:bの両方を同じ倍率にすると、比の値は変わらない。', {b: 3, m: 2}, [['b', '比の後ろの数b', 1, 5, 1], ['m', '両方を何倍にするか', 1, 4, 1]], [], function (s) {
    var b = ''; [2, s.b, 2 * s.m, s.b * s.m].forEach(function (v, row) { b += rect(100, 35 + row * 65, v * 20, 38, row < 2 ? pale : sand, 'proportion-bar-' + row) + text(550, 64 + row * 65, v, 27); });
    return figure(b, '上の二本と下の二本は同じ比。長さの一目盛は共通', '2:' + s.b + ' = ' + 2 * s.m + ':' + s.b * s.m + '。x = ' + 2 * s.m, 320);
  });
  add('3132200000', '式の答えを、場面に戻して確かめる', '架空の品は1個100円。個数によらず固定料金50円を加える。', {n: 3}, [['n', '品の個数', 1, 6, 1]], [], function (s) {
    var b = ''; for (var i = 0; i < s.n; i++) b += rect(55 + i * 82, 75, 70, 80, pale, 'price-item-' + i) + text(90 + i * 82, 126, '100', 25);
    b += rect(200, 210, 200, 65, sand, 'price-fixed') + text(300, 252, '固定50円', 27);
    return figure(b, '100円の品' + s.n + '個と固定料金50円', '100x + 50 = ' + (100 * s.n + 50) + ' → x=' + s.n + '個', 320);
  });

  function graph(maximum) {
    var scale = 144 / maximum, b = '', step = maximum <= 3 ? 1 : maximum / 3;
    for (var k = -maximum; k <= maximum + 0.001; k += step) { var x = 300 + k * scale, y = 190 - k * scale; b += line(x, 46, x, 334, gray) + line(156, y, 444, y, gray) + text(x, 371, sign(n(k)), 22) + text(127, y + 8, sign(n(k)), 22); }
    b += line(156, 190, 444, 190, ink, 'axis-x') + line(300, 46, 300, 334, ink, 'axis-y') + text(470, 343, 'x', 26) + text(300, 25, 'y', 26);
    return {body: b, point: function (x, y) { return [300 + x * scale, 190 - y * scale]; }, scale: scale};
  }
  function curvePoints(a, negative) { var limit = Math.abs(a) / 12, points = []; for (var i = 0; i <= 80; i++) { var x = limit + (12 - limit) * i / 80; if (negative) x = -x; points.push([x, a / x]); } return points; }
  function plotPath(points, g, key, color) { return path(points.map(function (p, i) { var q = g.point(p[0], p[1]); return (i ? ' L' : 'M') + n(q[0]) + ' ' + n(q[1]); }).join(''), 'none', key, color); }
  add('3311100000', '一つの入力から、出力はいくつ決まる？', '入力は−2から2。違う入力が同じ出力になることはある。一つの入力に二つの出力がないかを確かめる。', {rule: 'double', x: 1}, [['x', '注目する入力x', -2, 2, 1]], choices('rule', ['double', 'square', 'two'], ['2倍する', '2乗する', 'その数か反対の数']), function (s) {
    var b = text(160, 30, '入力x', 26) + text(450, 30, '出力y', 26);
    for (var x = -2; x <= 2; x++) { var values = s.rule === 'double' ? [2 * x] : s.rule === 'square' ? [x * x] : x === 0 ? [0] : [x, -x]; var y = 65 + (x + 2) * 55; values.forEach(function (v, index) { b += line(200, y, 400, 60 + (4 - v) * 32, x === s.x ? orange : gray, 'function-link-' + (x + 2) + '-' + index); }); b += dot(200, y, 6, x === s.x ? orange : green, 'function-input-' + (x + 2)) + text(160, y + 8, sign(x), 25); }
    for (var v = -4; v <= 4; v++) b += dot(400, 60 + (4 - v) * 32, 5, green, 'function-output-' + (v + 4)) + text(445, 68 + (4 - v) * 32, sign(v), 23);
    return figure(b, '入力と出力を結ぶ対応。橙色は注目した入力からの線', s.rule === 'two' ? 'x=1にy=1と−1が対応するので、この対応全体は関数でない。' : 'どの入力にも出力が一つ。これは関数。', 355);
  });
  add('3311300000', '横、たての順に点を置く', 'x座標は横、y座標はたて。二つの軸が交わる場所は(0,0)。', {x: 2, y: -1}, [['x', 'x座標', -3, 3, 1], ['y', 'y座標', -3, 3, 1]], [], function (s) {
    var g = graph(3), p = g.point(s.x, s.y), b = g.body + line(300, 190, p[0], 190, orange, 'coordinate-x-guide', true) + line(p[0], 190, p[0], p[1], orange, 'coordinate-y-guide', true) + dot(p[0], p[1], 8, orange, 'coordinate-point');
    return figure(b, '点の座標は横' + sign(s.x) + '、たて' + sign(s.y), '(' + sign(s.x) + ', ' + sign(s.y) + ')', 400);
  });
  var coefficients = [-3, -2, -1, 1, 2, 3];
  add('3311200000', '比例の係数と、表を対応させる', 'xに同じ数aをかけるとyになる。x=0ではy=0。y÷xを考えるのはxが0以外のとき。', {a: '-2', x: 2}, [['x', 'xの値', -3, 3, 1]], choices('a', coefficients, coefficients.map(function (a) { return 'a=' + sign(a); })), function (s) {
    var a = Number(s.a), xs = [-3, -2, -1, 0, 1, 2, 3];
    return figure(rect(80, 70, 440, 100, pale, 'proportional-rule') + text(300, 135, 'y = (' + sign(a) + ') × x', 34) + text(300, 235, 'x=' + sign(s.x) + ' → y=' + sign(a * s.x), 31, 'proportional-values'), '同じ係数を全てのxにかける', 'y = ' + sign(a * s.x) + (s.x === 0 ? '。x=0では割り算で係数を求めない。' : '、y/x = ' + sign(a)), 280, table('比例の対応表', [['x'].concat(xs), ['y'].concat(xs.map(function (x) { return a * x; }))]));
  });
  add('3311400000', '点と原点を、比例の直線でつなぐ', 'どの点もy=axを満たす。両軸の目盛は固定して、aの符号で直線の向きが変わる様子を見る。', {a: '-2', x: 2}, [['x', '注目するx', -2, 2, 1]], choices('a', coefficients, coefficients.map(function (a) { return 'a=' + sign(a); })), function (s) {
    var a = Number(s.a), g = graph(6), end = 6 / Math.max(1, Math.abs(a)), p = g.point(s.x, a * s.x), b = g.body + plotPath([[-end, -a * end], [end, a * end]], g, 'proportional-line') + dot(p[0], p[1], 8, orange, 'proportional-point');
    return figure(b, '原点を通りy=' + sign(a) + 'xを満たす直線', 'y=' + sign(a) + 'x、選んだ点(' + sign(s.x) + ', ' + sign(a * s.x) + ')', 400);
  });
  add('3310000000', '0をはさんだ二つの枝を見る', 'y=a/x。x=0は式に入れられない。左と右の枝を0をまたぐ直線で結ばない。', {a: '6', x: '2'}, [], choices('a', [-12, -6, 6, 12], ['a=−12', 'a=−6', 'a=6', 'a=12']).concat(choices('x', [-6, -3, -2, -1, 1, 2, 3, 6], ['x=−6', 'x=−3', 'x=−2', 'x=−1', 'x=1', 'x=2', 'x=3', 'x=6'])), function (s) {
    var a = Number(s.a), x = Number(s.x), y = a / x, g = graph(12), p = g.point(x, y), b = g.body + plotPath(curvePoints(a, false), g, 'inverse-positive') + plotPath(curvePoints(a, true), g, 'inverse-negative') + dot(p[0], p[1], 7, orange, 'inverse-point');
    return figure(b, '0を通らない反比例の二つの枝', 'x=' + sign(x) + '、y=' + sign(y) + '、xy=' + sign(a), 400);
  });
  add('3312200000', '場面に合わせて式を選ぶ', '枚数と重さでは同じ重さの品を使う。分配では全部の個数60を保つ。', {model: 'mass', n: 3}, [['n', '品の数・分ける組の数', 1, 6, 1]], choices('model', ['mass', 'share'], ['枚数と重さ', '60個を等分']), function (s) {
    var b = '', result;
    if (s.model === 'mass') { for (var i = 0; i < s.n; i++) b += rect(60 + i * 80, 80, 70, 105, pale, 'model-item-' + i) + text(95 + i * 80, 143, '20g', 24); result = s.n + '枚 × 20g = ' + 20 * s.n + 'g（0枚なら0g）'; }
    else { for (var j = 0; j < s.n; j++) b += rect(60 + j * 480 / s.n, 90, 480 / s.n, 90, j % 2 ? sand : pale, 'model-share-' + j) + text(60 + (j + 0.5) * 480 / s.n, 145, 60 / s.n, 27); b += text(300, 60, '全体60個', 28); result = '60 ÷ ' + s.n + ' = 1組' + 60 / s.n + '個'; }
    return figure(b, '場面の量をまとまりで示す', result, 250);
  });
  var originalTriangle = [[-3, -1], [-1, -1], [-2, 1]];
  function transformed(kind) { return originalTriangle.map(function (p) { if (kind === 'right2') return [p[0] + 2, p[1]]; if (kind === 'right3' || kind === 'shift') return [p[0] + 3, p[1]]; if (kind === 'up2') return [p[0], p[1] + 2]; if (kind === 'flipv' || kind === 'reflect') return [-p[0], p[1]]; if (kind === 'fliph') return [p[0], -p[1]]; if (kind === 'turn90') return [-p[1], p[0]]; return [-p[0], -p[1]]; }); }
  var transformationNames = {right2: '右へ2', right3: '右へ3', up2: '上へ2', flipv: 'y軸で対称移動', fliph: 'x軸で対称移動', turn90: '原点の周りに反時計回り90°', turn180: '原点の周りに180°'};
  add('3211200000', '全ての点を、同じ規則で移す', 'うすい輪郭はもとの三角形。移動した後も、対応する辺の長さと面積は変わらない。', {transform: 'right2'}, [], choices('transform', Object.keys(transformationNames), Object.keys(transformationNames).map(function (key) { return transformationNames[key]; })), function (s) {
    var g = graph(3), result = transformed(s.transform), b = g.body + polygon(originalTriangle.map(function (p) { return g.point(p[0], p[1]); }), 'none', 'transform-source') + polygon(result.map(function (p) { return g.point(p[0], p[1]); }), sand, 'transform-target');
    return figure(b, transformationNames[s.transform] + 'へ移した合同な三角形', transformationNames[s.transform] + '。対応する辺と面積は同じ。', 400);
  });
  add('3212200000', '二つの図形を結ぶ移動を探す', '色の三角形が移動先。橙色の輪郭は選んだ移動の結果で、重なるかを確かめる。', {target: 'shift', guess: 'shift'}, [], choices('target', ['shift', 'reflect', 'rotate'], ['移動先A', '移動先B', '移動先C']).concat(choices('guess', ['shift', 'reflect', 'rotate'], ['右へ3', 'y軸で対称移動', '原点で180°'])), function (s) {
    var g = graph(3), b = g.body + polygon(originalTriangle.map(function (p) { return g.point(p[0], p[1]); }), 'none', 'relation-source') + polygon(transformed(s.target).map(function (p) { return g.point(p[0], p[1]); }), pale, 'relation-target');
    var points = transformed(s.guess).map(function (p) { return g.point(p[0], p[1]); }); b += path(points.concat([points[0]]).map(function (p, i) { return (i ? ' L' : 'M') + n(p[0]) + ' ' + n(p[1]); }).join(''), 'none', 'relation-candidate', orange);
    return figure(b, 'もとの輪郭、移動先、選んだ移動の結果を示す', s.target === s.guess ? '三つの対応点が重なる。この移動で移せる。' : '対応する点の位置が違う。別の移動をためそう。', 400);
  });
  function compassCircle(x, y, r, key) { return '<circle' + id(key) + ' cx="' + n(x) + '" cy="' + n(y) + '" r="' + n(r) + '" fill="none" stroke="' + green + '" stroke-width="2"/>'; }
  add('3211100000', '同じ半径の円弧から、垂線を作る', 'Pから垂線を作るときは、Pから等距離のA、Bを先に取る。その後、AとBから同じ距離の二交点を結ぶ。', {kind: 'bisector', step: 0}, [['step', '作図の段階', 0, 3, 1]], choices('kind', ['bisector', 'on', 'off'], ['垂直二等分線', '線上の点から', '線外の点から']), function (s) {
    var b = line(100, 180, 500, 180, ink, 'construction-base') + dot(225, 180, 5, green, 'construction-a') + dot(375, 180, 5, green, 'construction-b') + text(205, 220, 'A', 26) + text(395, 220, 'B', 26);
    if (s.kind === 'on') b += arc(300, 180, 75, 0, Math.PI, 'construction-p-arc', gray);
    else if (s.kind === 'off') b += arc(300, 80, 125, -Math.PI, 0, 'construction-p-arc', gray);
    if (s.step >= 1) b += compassCircle(225, 180, 125, 'construction-circle-a');
    if (s.step >= 2) b += compassCircle(375, 180, 125, 'construction-circle-b') + dot(300, 80, 6, orange, 'construction-cross-0') + dot(300, 280, 6, orange, 'construction-cross-1') + text(330, 80, s.kind === 'off' ? 'P' : 'C', 25) + text(330, 290, 'D', 25);
    if (s.step >= 3) b += line(300, 60, 300, 305, orange, 'construction-bisector') + line(300, 180, 312, 180, orange) + line(312, 180, 312, 168, orange) + line(312, 168, 300, 168, orange);
    if (s.kind === 'on') b += dot(300, 180, 5, orange, 'construction-p') + text(322, 158, 'P', 25); else if (s.kind === 'off' && s.step < 2) b += dot(300, 80, 6, orange, 'construction-p') + text(330, 80, 'P', 25);
    return figure(b, '同じ半径の二つの円弧と、交点を結ぶ線', s.step === 3 ? (s.kind === 'bisector' ? 'ABを垂直に二等分する線。' : 'Pを通り、もとの直線と垂直な線。') : '段階' + (s.step + 1) + '：AとBからの等しい距離を使う。', 345);
  });
  function arc(cx, cy, radius, a, b, key, color) { return path('M' + n(cx + radius * Math.cos(a)) + ' ' + n(cy - radius * Math.sin(a)) + ' A' + n(radius) + ' ' + n(radius) + ' 0 ' + (b - a > Math.PI ? 1 : 0) + ' 0 ' + n(cx + radius * Math.cos(b)) + ' ' + n(cy - radius * Math.sin(b)), 'none', key, color); }
  add('3212100000', '同じ半径を使って、角を二等分する', '頂点から同じ距離のA、Bを取る。AとBからも同じ半径の円弧を描く。', {angle: '90', step: 0}, [['step', '作図の段階', 0, 3, 1]], choices('angle', [60, 90, 120], ['60°の角', '90°の角', '120°の角']), function (s) {
    var theta = Number(s.angle) * Math.PI / 180, r = 160, ox = 200, oy = 285, a = [ox + r, oy], q = [ox + r * Math.cos(theta), oy - r * Math.sin(theta)], c = [a[0] + q[0] - ox, a[1] + q[1] - oy];
    var b = line(ox, oy, ox + 200, oy, ink, 'bisect-ray-0') + line(ox, oy, ox + 200 * Math.cos(theta), oy - 200 * Math.sin(theta), ink, 'bisect-ray-1') + text(180, 320, 'O', 25);
    if (s.step >= 1) b += arc(ox, oy, r, 0, theta, 'bisect-origin-arc') + dot(a[0], a[1], 5, green, 'bisect-a') + dot(q[0], q[1], 5, green, 'bisect-b');
    if (s.step >= 2) b += arc(a[0], a[1], r, theta - 0.23, theta + 0.23, 'bisect-arc-a') + arc(q[0], q[1], r, -0.23, 0.23, 'bisect-arc-b') + dot(c[0], c[1], 6, orange, 'bisect-cross');
    if (s.step === 3) b += line(ox, oy, c[0], c[1], orange, 'angle-bisector');
    return figure(b, '同じ半径の円弧を使って角の半分の方向を作る', s.angle + '° ÷ 2 = ' + Number(s.angle) / 2 + '°', 355);
  });
  add('5500000000', '半径と接線の向きを比べる', '接点を通る接線は、その接点への半径と垂直。円を横切る線とは区別しよう。', {turn: 0}, [['turn', '接点の位置（45°ずつ）', 0, 7, 1]], [], function (s) {
    var a = s.turn * Math.PI / 4, p = [300 + 90 * Math.cos(a), 180 - 90 * Math.sin(a)], u = [Math.cos(a), -Math.sin(a)], v = [-Math.sin(a), -Math.cos(a)];
    var b = compassCircle(300, 180, 90, 'tangent-circle') + line(300, 180, p[0], p[1], green, 'tangent-radius') + line(p[0] - 90 * v[0], p[1] - 90 * v[1], p[0] + 90 * v[0], p[1] + 90 * v[1], orange, 'tangent-line') + dot(p[0], p[1], 6, orange, 'tangent-point') + dot(300, 180, 4, green, 'tangent-center');
    b += path('M' + n(p[0] - 14 * u[0]) + ' ' + n(p[1] - 14 * u[1]) + ' L' + n(p[0] - 14 * u[0] + 14 * v[0]) + ' ' + n(p[1] - 14 * u[1] + 14 * v[1]) + ' L' + n(p[0] + 14 * v[0]) + ' ' + n(p[1] + 14 * v[1]), 'none', 'tangent-right-angle', orange);
    return figure(b, '接点を動かしても半径と接線は垂直', '接点の向き' + s.turn * 45 + '°。半径と接線のなす角は90°。', 340);
  });
  var cubePoints = [[0,0,0],[2,0,0],[2,2,0],[0,2,0],[0,0,2],[2,0,2],[2,2,2],[0,2,2]], cubeEdges = [[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];
  function project(p, ox, oy, scale) { return [ox + (p[0] + 0.48 * p[1]) * scale, oy - (p[2] + 0.28 * p[1]) * scale]; }
  add('3221100000', '空間の直線と平面を見分ける', 'これは立方体の見取り図。紙の上の見かけの角度だけで、空間の関係を決めない。', {pair: 'parallel'}, [], choices('pair', ['parallel','meet','skew','perpendicular'], ['平行な2辺','交わる2辺','ねじれの位置','辺と面が垂直']), function (s) {
    var ps = cubePoints.map(function (p) { return project(p, 170, 285, 70); }), selected = {parallel: [0,4], meet: [0,1], skew: [0,10], perpendicular: [8]}[s.pair], b = s.pair === 'perpendicular' ? polygon([ps[0],ps[1],ps[2],ps[3]], pale, 'space-base-plane') : '';
    cubeEdges.forEach(function (edge, i) { b += line(ps[edge[0]][0], ps[edge[0]][1], ps[edge[1]][0], ps[edge[1]][1], selected.indexOf(i) >= 0 ? orange : gray, 'space-edge-' + i); });
    ps.forEach(function (p, i) { b += dot(p[0], p[1], 4, green, 'space-vertex-' + i) + text(p[0] + (i === 0 || i === 3 || i === 4 || i === 7 ? -17 : 17), p[1] + (i < 4 ? 29 : -13), 'ABCDEFGH'[i], 24); });
    return figure(b, '立方体の選んだ辺や面を橙色と淡い色で示す', {parallel:'ABとEFは平行。',meet:'ABとBCはBで垂直に交わる。',skew:'ABとCGは交わらず、平行でもない。ねじれの位置。',perpendicular:'AEは面ABCDと垂直。'}[s.pair], 335);
  });
  function ellipse(cx, cy, rx, ry, fill, key, stroke) { return '<ellipse' + id(key) + ' cx="' + n(cx) + '" cy="' + n(cy) + '" rx="' + n(rx) + '" ry="' + n(ry) + '" fill="' + fill + '" stroke="' + (stroke || green) + '" stroke-width="2.5"/>'; }
  add('3222100000', '平面図形を軸の周りに回す', '淡い輪郭は1回転してできる立体。橙色は今の平面図形の位置を、見取り図として表す。', {shape: 'rectangle', turn: 4}, [['turn','回す角度（90°ずつ）',1,4,1]], choices('shape',['rectangle','triangle','semicircle'],['長方形','直角三角形','半円']), function (s) {
    var a=s.turn*Math.PI/2, b=line(300,55,300,305,gray,'rotation-axis',true), x=300+100*Math.cos(a), depth=27*Math.sin(a);
    if(s.shape==='rectangle') { b+=rect(200,95,200,180,'none','rotation-cylinder-outline',gray)+ellipse(300,95,100,27,'none','rotation-top',gray)+ellipse(300,275,100,27,'none','rotation-bottom',gray); b+=polygon([[300,95],[x,95+depth],[x,275+depth],[300,275]],sand,'rotation-profile'); }
    else if(s.shape==='triangle') { b+=path('M200 275 L300 95 L400 275','none','rotation-cone-outline',gray)+ellipse(300,275,100,27,'none','rotation-cone-base',gray)+polygon([[300,95],[x,275+depth],[300,275]],sand,'rotation-profile'); }
    else { b+=compassCircle(300,180,110,'rotation-sphere-outline'); var points=[[300,70]]; for(var i=0;i<=40;i++){var t=i*Math.PI/40;points.push([300+110*Math.sin(t)*Math.cos(a),180-110*Math.cos(t)]);} points.push([300,70]);b+=polygon(points,sand,'rotation-profile'); }
    return figure(b,'淡い立体の輪郭と、回した平面図形の投影',s.turn*90+'°回した位置。1回転で'+{rectangle:'円柱',triangle:'円錐',semicircle:'球'}[s.shape]+'になる。',345);
  });
  function boxDrawing(width,depth,height,ox,oy,unit,key) { var model=[[0,0,0],[width,0,0],[width,depth,0],[0,depth,0],[0,0,height],[width,0,height],[width,depth,height],[0,depth,height]], ps=model.map(function(p){return project(p,ox,oy,unit);}), b='';cubeEdges.forEach(function(edge,i){b+=line(ps[edge[0]][0],ps[edge[0]][1],ps[edge[1]][0],ps[edge[1]][1],green,key+'-edge-'+i);});return b; }
  add('5600000000','同じ立体を、別の方向から見る','幅2、奥行き3、高さ4の直方体。展開図では六つの面のつながりを確かめる。',{view:'solid'},[],choices('view',['solid','net','front','top'],['見取り図','展開図','正面から','上から']),function(s){
    var b=''; if(s.view==='solid') b=boxDrawing(2,3,4,190,290,48,'box-solid')+text(300,335,'幅2・奥行き3・高さ4',26);
    else if(s.view==='net'){ var widths=[2,3,2,3],x=160; widths.forEach(function(w,i){b+=rect(x,115,w*28,112,i%2?pale:sand,'box-net-side-'+i)+text(x+w*14,178,w+'×4',23);x+=w*28;});b+=rect(160,31,56,84,paper,'box-net-base-0')+rect(160,227,56,84,paper,'box-net-base-1')+text(188,78,'2×3',22)+text(188,276,'2×3',22); }
    else { var h=s.view==='front'?4:3;b=rect(240,60,120,h*60,pale,'box-view-face')+text(300,335,'横2 × たて'+h,28); }
    return figure(b,'同じ直方体の'+{solid:'見取り図',net:'展開図',front:'正面図',top:'上面図'}[s.view],s.view==='net'?'6+6+8+12+8+12 = 表面積52':s.view==='front'?'正面は2×4の長方形。':s.view==='top'?'上からは2×3の長方形。':'六つの面は、2×3、2×4、3×4が2枚ずつ。',365);
  });
  function sector(cx,cy,r,theta,key,fill,start){var a=start||0,t=theta*Math.PI/180;if(theta===360)return '<circle'+id(key)+' cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="'+fill+'" stroke="'+green+'" stroke-width="2.5"/>';return path('M'+cx+' '+cy+' L'+n(cx+r*Math.cos(a))+' '+n(cy-r*Math.sin(a))+' A'+r+' '+r+' 0 '+(theta>180?1:0)+' 0 '+n(cx+r*Math.cos(a+t))+' '+n(cy-r*Math.sin(a+t))+' Z',fill,key);}
  add('3221200000','円全体の何分のいくつかで考える','円の中心角は360°。弧の長さと面積は、中心角の割合に合わせて変わる。',{r:3,angle:'120'},[['r','半径（cm）',1,4,1]],choices('angle',[60,90,120,180,270,360],['60°','90°','120°','180°','270°','360°']),function(s){var t=Number(s.angle),r=s.r,b=compassCircle(300,180,r*30,'sector-circle')+sector(300,180,r*30,t,'sector-piece',pale)+line(300,180,300+r*30,180,orange,'sector-radius')+text(300,35,'中心角'+t+'°',28)+text(300,345,'半径'+r+'cm',27);return figure(b,'円全体と選んだ中心角の扇形','弧長'+pi(2*r*t,360)+'cm、面積'+pi(r*r*t,360)+'cm²。周の長さ'+(t===360?pi(2*r):pi(2*r*t,360)+'+'+2*r)+'cm。',375);});
  add('3222200000','柱の底面と側面を開いて見る','見取り図の右に展開図を示す。二つの底面と、底面の周りを囲む側面がある。',{shape:'box',h:3},[['h','高さ',1,4,1]],choices('shape',['box','cylinder'],['直方体','円柱']),function(s){var b=text(145,35,'見取り図',25)+text(430,35,'展開図',25),result;
    if(s.shape==='box'){b+=boxDrawing(2,3,s.h,65,285,40,'prism');var x=315;[2,3,2,3].forEach(function(w,i){b+=rect(x,170,w*20,s.h*20,pale,'prism-net-side-'+i);x+=w*20;});b+=rect(315,110,40,60,sand,'prism-net-base-0')+rect(315,170+s.h*20,40,60,sand,'prism-net-base-1');result='底面2×3、高さ'+s.h+'。体積'+6*s.h+'、表面積'+(12+10*s.h)+'。';}
    else{b+=line(90,285,90,285-s.h*40,green,'cylinder-side-0')+line(190,285,190,285-s.h*40,green,'cylinder-side-1')+ellipse(140,285,50,15,pale,'cylinder-bottom')+ellipse(140,285-s.h*40,50,15,pale,'cylinder-top');b+=rect(430-40*Math.PI,170,80*Math.PI,s.h*20,pale,'cylinder-net-side')+dot(430,130,40,sand,'cylinder-net-base-0')+dot(430,210+s.h*20,40,sand,'cylinder-net-base-1');result='半径2、高さ'+s.h+'。体積'+pi(4*s.h)+'、表面積'+pi(8+4*s.h)+'。';}
    return figure(b,'左は柱体の見取り図、右は同じ柱体の展開図',result,365, '<p class="jh1-data">'+(s.shape==='box'?'側面の横の合計：2+3+2+3=10。':'側面の横：円周4π。二つの底面は半径2の円。')+'</p>');
  });
  add('3221000000','高さと、側面の高さを分ける','立体の高さは底面に垂直な長さ。側面を広げた図と合わせて、体積と表面積を読む。',{shape:'cone',scale:3},[['scale','長さの倍率',1,3,1]],choices('shape',['cone','pyramid'],['円錐','正四角錐']),function(s){var k=s.scale,b=text(150,35,'見取り図',25)+text(430,35,'側面を広げる',25),result;
    if(s.shape==='cone'){var r=24*k,h=32*k;b+=path('M'+(150-r)+' 260 L150 '+(260-h)+' L'+(150+r)+' 260','none','cone-profile')+ellipse(150,260,r,r*.28,'none','cone-base')+line(150,260,150,260-h,orange,'cone-height',true)+sector(430,180,40*k,216,'cone-net-side',pale,-Math.PI*.6);b+=text(150,315,'r='+3*k+'、h='+4*k,25);result='母線'+5*k+'、側面の中心角216°。体積'+pi(12*k*k*k)+'、表面積'+pi(24*k*k)+'。';}
    else{var q=6*k*4,fh=5*k*4,cx=430,cy=185; b+=rect(cx-q/2,cy-q/2,q,q,sand,'pyramid-net-base');[[[cx-q/2,cy-q/2],[cx+q/2,cy-q/2],[cx,cy-q/2-fh]],[[cx+q/2,cy-q/2],[cx+q/2,cy+q/2],[cx+q/2+fh,cy]],[[cx+q/2,cy+q/2],[cx-q/2,cy+q/2],[cx,cy+q/2+fh]],[[cx-q/2,cy+q/2],[cx-q/2,cy-q/2],[cx-q/2-fh,cy]]].forEach(function(points,i){b+=polygon(points,pale,'pyramid-net-side-'+i);});var base=[[-3,-3,0],[3,-3,0],[3,3,0],[-3,3,0]].map(function(p){return project(p,150,250,8*k);}),apex=[150,250-32*k];b+=polygon(base,'none','pyramid-base');base.forEach(function(p,i){b+=line(p[0],p[1],apex[0],apex[1],green,'pyramid-edge-'+i);});b+=line(150,250,apex[0],apex[1],orange,'pyramid-height',true)+line(apex[0],apex[1],(base[0][0]+base[1][0])/2,(base[0][1]+base[1][1])/2,green,'pyramid-face-height');b+=text(150,330,'底辺'+6*k+'、高さ'+4*k,23);result='側面の三角形の高さ'+5*k+'。体積'+48*k*k*k+'、表面積'+96*k*k+'。';}
    return figure(b,'立体の高さと側面の長さを区別する見取り図と展開図',result,365);
  });
  add('3220000000','球の表面と、平面の円を比べる','球の表面全体と、同じ半径の平面の円は別の面積。球の見取り図の円形を、そのまま表面積としない。',{r:2},[['r','半径',1,4,1]],[],function(s){var r=s.r*28,b=compassCircle(165,180,r,'sphere-outline')+ellipse(165,180,r,r*.28,'none','sphere-equator')+line(165,180,165+r,180,orange,'sphere-radius')+dot(165,180,3,green)+dot(435,180,r,pale,'sphere-flat-circle')+line(435,180,435+r,180,orange,'sphere-flat-radius')+text(165,335,'球の表面全体',24)+text(435,335,'平面の円',24);return figure(b,'同じ半径の球と平面の円','半径'+s.r+'、直径'+2*s.r+'。球の表面積'+pi(4*s.r*s.r)+'、体積'+pi(4*s.r*s.r*s.r,3)+'。',365,'<p class="jh1-data">同じ半径の平面の円の面積は'+pi(s.r*s.r)+'。球の表面積はその4倍。</p>');});
  var histogramData=[1,2,2,3,4,4,5,6,7,8,9,10];
  add('3411200000','階級の幅と始点を変えて読む','架空の12個の値。同じ値でも、まとめる区切りを変えると柱の形が変わる。各階級は下端以上、上端未満。',{width:'2',start:'0'},[],choices('width',[2,4],['階級の幅2','階級の幅4']).concat(choices('start',[0,1],['始点0','始点1'])),function(s){var w=Number(s.width),start=Number(s.start),counts=[],b=line(60,275,502,275,ink,'histogram-x-axis')+line(60,275,60,60,ink,'histogram-y-axis')+text(565,315,'値',24)+text(45,35,'個数',24);for(var lo=start;lo<=10;lo+=w){var count=histogramData.filter(function(v){return v>=lo&&v<lo+w;}).length,i=counts.length;counts.push(count);b+=rect(60+34*lo,275-count*28,w*34,count*28,pale,'histogram-bin-'+i)+text(60+(lo+w/2)*34,261-count*28,count,25,'histogram-count-'+i)+text(60+lo*34,310,lo,22);}b+=text(60+(start+counts.length*w)*34,310,start+counts.length*w,22);for(var tick=0;tick<=6;tick+=2)b+=text(38,282-tick*28,tick,21);return figure(b,'同じ12個の値を選んだ階級で数えた柱状の図','幅'+w+'・始点'+start+'の度数：'+counts.join('、')+'（合計12）',350,'<p class="jh1-data">値：'+histogramData.join('、')+'</p>');});
  add('3411100000','個数と割合を切り替えて比べる','架空の二つの集まり。全体の個数が違うときは、割合でも比べる。累積度数はその階級までの個数の合計。',{group:'A',view:'relative'},[],choices('group',['A','B'],['集まりA（10個）','集まりB（20個）']).concat(choices('view',['frequency','relative','cumulative'],['度数','相対度数','累積度数'])),function(s){var raw=s.group==='A'?[2,3,5]:[8,6,6],total=s.group==='A'?10:20,acc=0,values=raw.map(function(v){acc+=v;return s.view==='relative'?v/total:s.view==='cumulative'?acc:v;}),limit=s.view==='relative'?1:20,b=line(100,280,460,280,ink,'relative-x-axis')+line(100,280,100,60,ink,'relative-y-axis')+text(80,35,s.view==='relative'?'割合':'個数',24);values.forEach(function(v,i){b+=rect(100+i*120,280-v/limit*200,120,v/limit*200,pale,'relative-bin-'+i)+text(160+i*120,265-v/limit*200,v,27,'relative-value-'+i)+text(160+i*120,320,2*i+'以上'+(2*i+2)+'未満',20);});[0,.5,1].forEach(function(t){b+=text(73,287-t*200,t*limit,21);});return figure(b,'集まり'+s.group+'の'+s.view+'を共通尺度で示す',s.group+'・'+{frequency:'度数',relative:'相対度数',cumulative:'累積度数'}[s.view]+'：'+values.join('、'),365);});
  add('3412100000','中心と散らばりを一緒に見る','架空の二つの記録を同じ目盛に置く。平均や中央値が同じでも、散らばりまで同じとは限らない。',{group:'A',measure:'range'},[],choices('group',['A','B'],['集まりA','集まりB']).concat(choices('measure',['mean','median','range'],['平均','中央値','範囲'])),function(s){var groups={A:[4,4,5,5,6,6],B:[0,2,4,6,8,10]},b='';Object.keys(groups).forEach(function(key,row){var y=130+row*140,seen={};b+=line(80,y,520,y,gray,'distribution-axis-'+key)+text(45,y,key,25);groups[key].forEach(function(v,i){var stack=seen[v]||0;seen[v]=stack+1;b+=dot(80+v*44,y-18-stack*25,10,key===s.group?orange:green,'distribution-'+key+'-'+i);});for(var t=0;t<=10;t+=2)b+=text(80+t*44,y+35,t,22);});var value=s.measure==='range'?(s.group==='A'?2:10):5;return figure(b,'AとBの全12個の値を共通の目盛で示す',s.group+'の'+{mean:'平均',median:'中央値',range:'範囲'}[s.measure]+'は'+value+'。',340,'<p class="jh1-data">A：4、4、5、5、6、6<br>B：0、2、4、6、8、10</p>');});
  var trialRecords={A:'0101101011010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101',B:'0001001001010110101101010101010101010101010101010100101010101010101010101010010101010101010101010101'};
  add('3421100000','試行回数と、表の割合を追う','これは架空の記録例。緑が表、淡い橙が裏、白はまだ読んでいない枠。割合は有限回で必ず1/2になるとは限らない。',{series:'A',n:'20'},[],choices('series',['A','B'],['記録A','記録B']).concat(choices('n',[10,20,50,100],['10回まで','20回まで','50回まで','100回まで'])),function(s){var record=trialRecords[s.series],count=Number(s.n),heads=record.slice(0,count).split('').filter(function(c){return c==='1';}).length,b=text(300,35,'架空の記録例 '+s.series,26);for(var i=0;i<100;i++)b+=rect(60+i%20*24,65+Math.floor(i/20)*30,20,24,i>=count?paper:record[i]==='1'?green:sand,'trial-cell-'+i,i<count&&record[i]==='1'?paper:green);b+=rect(60,255,480*heads/count,35,green,'trial-head-bar')+rect(60+480*heads/count,255,480*(count-heads)/count,35,sand,'trial-tail-bar')+text(60,330,'0',23)+text(540,330,'1',23);return figure(b,'記録'+s.series+'の最初の'+count+'回だけを二色で示す',count+'回中、表'+heads+'回・裏'+(count-heads)+'回。表の割合'+heads+'/'+count+' = '+heads/count,355);});

  var codes = Object.keys(items);
  if (codes.some(function (code) { return own(BL.visuals.definitions, code); })) throw new Error('Duplicate junior high visual code');
  codes.forEach(function (code) { BL.visuals.definitions[code] = items[code]; });
  BL.jh1Visuals = {codes: codes.slice()};
}());
