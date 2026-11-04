(function () {
  'use strict';

  var app = document.getElementById('app');
  var core = window.BL && window.BL.core;
  if (!core) {
    app.innerHTML = '<main class="no-script"><h1>教材を開けませんでした</h1><p>ファイルをひとつのフォルダにそろえて、もう一度開いてください。</p></main>';
    return;
  }
  core.load();

  var domains = [{ id: 'A', title: '数と計算' }, { id: 'B', title: '図形' }, { id: 'C', title: '変化と関係' }, { id: 'D', title: 'データの活用' }];
  var memory = { games: Object.create(null), drafts: Object.create(null), indices: Object.create(null), feedback: Object.create(null), lengths: Object.create(null), buddy: Object.create(null), buddyIndex: Object.create(null), steps: Object.create(null), hints: Object.create(null) };
  var lastRoute = '#list';
  var has = function (object, key) { return Object.prototype.hasOwnProperty.call(object, key); };
  var e = function (value) { return core.escape(String(value == null ? '' : value)); };
  var t = function (es, js) { return core.state.mode === 'es' ? es : js; };
  var categories = function () { return (window.BL.data.categories || []).filter(function (category) { return category && typeof category.id === 'string' && typeof category.label === 'string'; }); };
  var allUnits = function () { return core.units(core.state.grade); };
  var categoryLabel = function (id) { var item = categories().filter(function (category) { return category.id === id; })[0]; return item ? item.label : 'おまかせ'; };
  var domainLabel = function (id) { var item = domains.filter(function (domain) { return domain.id === id; })[0]; return item ? item.title : '算数'; };
  var progress = function (code) { return core.progress(code); };
  var clampPercent = function (value) { return Math.max(0, Math.min(100, Number(value) || 0)); };

  function announce(text) {
    var region = document.getElementById('announcer');
    region.textContent = '';
    window.setTimeout(function () { region.textContent = text; }, 30);
  }

  function route() {
    var hash = window.location.hash || '#list';
    if (hash === '#list' || hash === '#main') return { page: 'list', unit: null, grade: core.state.grade };
    var gradeRoute = /^#list\/(4|5)$/.exec(hash);
    if (gradeRoute && core.grades().indexOf(Number(gradeRoute[1])) !== -1) return { page: 'list', unit: null, grade: Number(gradeRoute[1]) };
    if (hash === '#paused') return { page: 'paused', unit: null };
    var match = /^#(unit|practice|result|buddy)\/(82502[45][0-9A-Z]{10})$/.exec(hash);
    if (!match) return { page: 'missing', unit: null };
    var unit = core.unit(match[2]);
    return unit ? { page: match[1], unit: unit } : { page: 'missing', unit: null };
  }

  function go(hash) {
    if (window.location.hash === hash) render(true);
    else window.location.hash = hash;
  }

  function brand() {
    return '<svg class="brand-mark" viewBox="0 0 36 36" aria-hidden="true"><path d="M2 2h14v14H2z" fill="#e5e7d8"/><path d="M20 2h14v14H20z" fill="#9aa98b"/><path d="M2 20h14v14H2z" fill="#9aa98b"/><path d="M20 20h14v14H20z" fill="#e5e7d8"/></svg>';
  }

  function sidebar(page) {
    return '<aside class="sidebar"><div><a class="brand" href="#list/' + core.state.grade + '">' + brand() + '<span>基礎学習</span></a><p class="sidebar-caption">ためす・考える・はなす</p></div><div class="side-nav"><a href="#list/' + core.state.grade + '" class="nav-link main-nav' + (page === 'list' ? ' active' : '') + '"' + (page === 'list' ? ' aria-current="page"' : '') + '><span class="nav-symbol" aria-hidden="true">＋</span>単元をえらぶ</a><p class="side-label">小学' + core.state.grade + '年生・算数</p>' + domains.map(function (domain) {
      return '<button type="button" class="nav-link" data-action="domain" data-domain="' + domain.id + '"><span class="nav-symbol" aria-hidden="true">' + domain.id + '</span>' + domain.title + '</button>';
    }).join('') + '</div><div class="sidebar-bottom"><span class="tiny-rule"></span><p>ひとつずつ、自分のペースで。</p><p>いつでも休んで、<br>続きから始められます。</p></div></aside>';
  }

  function gradeTabs() {
    return '<nav class="grade-tabs" aria-label="学年を選ぶ">' + core.grades().map(function (grade) { return '<button type="button" class="grade-tab" data-action="grade" data-grade="' + grade + '" aria-pressed="' + (core.state.grade === grade) + '">小学' + grade + '年生</button>'; }).join('') + '</nav>';
  }

  function topbar(page) {
    return '<header class="topbar"><div class="preview-label"><span class="preview-chip">制作プレビュー</span><span>人による公開前の確認待ち</span></div><div class="top-actions"><div class="mode-group" role="group" aria-label="表示を選ぶ"><button type="button" class="mode-button" data-action="mode" data-mode="es" aria-pressed="' + (core.state.mode === 'es') + '">小学生向け</button><button type="button" class="mode-button" data-action="mode" data-mode="js" aria-pressed="' + (core.state.mode === 'js') + '">中学生向け</button></div>' + (page !== 'paused' ? '<button type="button" class="quiet-button" data-action="pause"><span class="pause-icon" aria-hidden="true"></span>' + t('きょうはここまで', '今日はここまで') + '</button>' : '') + '</div></header>';
  }

  function footer() {
    return '<footer class="page-footer"><span>小学' + core.state.grade + '年生の算数 · 学習指導要領につながる教材</span><span>回答はこのブラウザに保存</span></footer>';
  }

  function progressBar(p, label) {
    var percentage = clampPercent(p.percent);
    return '<div class="card-progress"><div class="progress-label"><span>' + e(label || '達成率') + '</span><strong>' + percentage + '%</strong></div><div class="progress-track" role="progressbar" aria-label="' + e(label || '達成率') + '" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + percentage + '"><div class="progress-fill" style="width:' + percentage + '%"></div></div></div>';
  }

  function interestPanel(compact) {
    return '<section class="interest-panel' + (compact ? ' compact' : '') + '" aria-labelledby="interest-heading"><div class="interest-heading"><h2 id="interest-heading">' + t('どんな例で考える？', '関心に近い例を選ぶ') + '</h2><p>例の入口が変わります。すべての単元を選べます。</p></div><div class="interest-options" role="group" aria-label="例の入口"><button type="button" class="interest-button" data-action="interest" data-interest="all" aria-pressed="' + (core.state.interest === 'all') + '">おまかせ</button>' + categories().map(function (category) {
      return '<button type="button" class="interest-button" data-action="interest" data-interest="' + e(category.id) + '" aria-pressed="' + (core.state.interest === category.id) + '">' + e(category.label) + '</button>';
    }).join('') + '</div></section>';
  }

  function listPage() {
    var units = allUnits();
    var started = units.filter(function (unit) { var item = core.state.progress[unit.code]; return item && Object.keys(item.answers).length > 0; }).length;
    return '<section class="list-hero"><div><p class="eyebrow">小学' + core.state.grade + '年生 / 算数</p><h1 class="page-title">' + t('算数を、ためしてみよう。', 'ためして、考える算数。') + '</h1><p class="page-lead">' + t('気になる単元から、ひとつずつ。<br>クイズでためして、自分の言葉で確かめよう。', 'クイズ・練習・対話で、考え方を確かめます。<br>どの単元からでも、自分のペースで。') + '</p><div class="summary-strip"><div class="summary-item"><strong>' + units.length + '</strong><span>つの単元</span></div><span class="summary-divider" aria-hidden="true"></span><div class="summary-item"><strong>' + started + '</strong><span>つに取り組み中</span></div></div></div><div class="hero-art" aria-hidden="true"><div class="art-grid">' + Array(9).fill('<span class="tile"></span>').join('') + '</div><span class="art-dot"></span></div></section>' + interestPanel(false) + (units.length ? domains.map(function (domain) {
      var group = units.filter(function (unit) { return unit.domain === domain.id; });
      if (!group.length) return '';
      return '<section class="domain-section" id="domain-' + domain.id + '" aria-labelledby="heading-' + domain.id + '"><div class="section-heading"><span class="domain-symbol" aria-hidden="true">' + domain.id + '</span><h2 id="heading-' + domain.id + '">' + domain.title + '</h2><span class="section-meta">' + group.length + 'つの単元</span></div><div class="unit-grid">' + group.map(function (unit) {
        var p = progress(unit.code);
        return '<a class="unit-card" href="#unit/' + e(unit.code) + '" data-unit="' + e(unit.code) + '"><div class="card-topline"><span>' + domain.title + '</span><span class="card-status">' + (p.percent === 100 ? 'ひと通り確かめた' : p.percent > 0 ? '続きから' : 'はじめる') + '<span class="card-arrow" aria-hidden="true"> ↗</span></span></div><h3>' + e(unit.title) + '</h3><p class="card-goal">' + e(unit.goal) + '</p>' + progressBar(p, '達成率') + '</a>';
      }).join('') + '</div></section>';
    }).join('') : '<p class="empty-state">教材を確かめているところです。もう少し待っていてね。</p>') + footer();
  }

  function breadcrumb(unit, label) {
    return '<nav class="breadcrumb" aria-label="現在の場所"><a href="#list/' + core.state.grade + '">単元一覧</a><span aria-hidden="true">/</span>' + (label ? '<a href="#unit/' + e(unit.code) + '">' + e(unit.title) + '</a><span aria-hidden="true">/</span><span>' + e(label) + '</span>' : '<span>' + e(unit.title) + '</span>') + '</nav>';
  }

  function unitHeading(unit) {
    return '<div class="unit-header"><div><p class="eyebrow">小学' + core.state.grade + '年生 / ' + e(domainLabel(unit.domain)) + '</p><h1 class="page-title">' + e(unit.title) + '</h1><p class="page-lead">' + e(unit.goal) + '</p></div><div class="compact-progress">' + progressBar(progress(unit.code), 'この単元の達成率') + '</div></div>';
  }

  function savedAnswer(unit, q) {
    var record = core.state.progress[unit.code];
    return record && has(record.answers, q.id) ? record.answers[q.id] : null;
  }

  function questionKey(unit, q, kind) { return kind + ':' + unit.code + ':' + q.id; }

  function draft(unit, q, kind) {
    var key = questionKey(unit, q, kind);
    if (!has(memory.drafts, key)) {
      var saved = kind === 'practice' ? savedAnswer(unit, q) : null;
      memory.drafts[key] = saved ? (Array.isArray(saved.value) ? saved.value.slice() : saved.value) : q.type === 'order' ? q.items.slice() : '';
    }
    return memory.drafts[key];
  }

  function questionForm(unit, q, kind, feedback) {
    var value = draft(unit, q, kind);
    var fieldId = kind + '-answer';
    var html = '<form class="question-form" data-kind="' + kind + '" data-question="' + e(q.id) + '" novalidate><fieldset><legend class="sr-only">' + e(q.prompt) + '</legend>';
    if (q.type === 'number') {
      html += '<label class="sr-only" for="' + fieldId + '">答え</label><div class="answer-row"><input class="number-input" id="' + fieldId + '" name="answer" type="text" inputmode="decimal" autocomplete="off" maxlength="30" value="' + e(value) + '" aria-label="答え"' + (feedback && feedback.invalid ? ' aria-invalid="true" aria-describedby="answer-feedback"' : '') + '>' + (q.suffix ? '<span class="input-suffix">' + e(q.suffix) + '</span>' : '') + '</div>';
    } else if (q.type === 'choice') {
      html += '<div class="choice-list">' + q.options.map(function (option, index) {
        return '<label class="choice-option"><input name="answer" type="radio" value="' + index + '"' + (value === option ? ' checked' : '') + '><span>' + e(option) + '</span></label>';
      }).join('') + '</div>';
    } else if (q.type === 'order') {
      html += '<p class="question-help">「上へ」「下へ」で並べかえてください。</p><ol class="order-list">' + value.map(function (item, index) {
        return '<li class="order-item"><span class="order-item-text">' + e(item) + '</span><div class="order-actions"><button type="button" class="order-button" data-action="order" data-direction="up" data-index="' + index + '" aria-label="' + e(item) + 'を上へ"' + (index === 0 ? ' disabled' : '') + '>上へ</button><button type="button" class="order-button" data-action="order" data-direction="down" data-index="' + index + '" aria-label="' + e(item) + 'を下へ"' + (index === value.length - 1 ? ' disabled' : '') + '>下へ</button></div></li>';
      }).join('') + '</ol>';
    }
    html += '</fieldset><div class="button-row"><button class="button' + (kind === 'game' ? ' green' : '') + '" type="submit">' + (feedback && !feedback.invalid ? 'もう一度たしかめる' : '答えをたしかめる') + '</button></div></form>';
    if (feedback) html += '<div id="answer-feedback" class="feedback' + (feedback.correct ? '' : ' retry') + '" role="status" tabindex="-1"><strong>' + e(feedback.invalid ? feedback.message : feedback.correct ? t('そのとおり。', '答えが合っています。') : t('もう一度、考えてみよう。', '考え方をもう一度確かめよう。')) + '</strong>' + (!feedback.invalid ? '<p>' + e(q.explanation) + '</p>' : '') + '</div>';
    return html;
  }

  function unitPage(unit) {
    var lessonHTML = window.BL.lessons ? window.BL.lessons.render(unit) : '';
    var gameState = memory.games[unit.code];
    var length = memory.lengths[unit.code] || 'short';
    var selected = unit.entries.filter(function (entry) { return entry.category === core.state.interest; })[0];
    var entry = selected || unit.entries[0];
    var body = '<section class="panel game-panel" aria-labelledby="game-title"><div class="section-line"><div><p class="panel-kicker">まずは、ためしてみる</p><h2 id="game-title" class="panel-title">小さなクイズ</h2></div><span class="small-tag">おためし</span></div><p class="question-prompt">' + e(unit.game.prompt) + '</p>' + questionForm(unit, unit.game, 'game', gameState) + '<p class="subtle-note">ここはおためし。達成率には入りません。</p></section>';
    {
      body += '<section id="unit-visual"></section>';
      body += interestPanel(true);
      if (entry) body += '<section class="panel" aria-labelledby="example-title"><p class="panel-kicker">' + e(categoryLabel(entry.category)) + 'から考える</p><h2 class="example-title" id="example-title">' + e(entry.title) + '</h2><p class="body-copy">' + e(entry.text) + '</p>' + (core.state.interest !== 'all' && !selected ? '<p class="subtle-note">「' + e(categoryLabel(core.state.interest)) + '」の例は準備中です。今は「' + e(categoryLabel(entry.category)) + '」の例を見られます。</p>' : '') + '</section>';
      body += '<section class="panel" aria-labelledby="explanation-title"><div class="section-line with-tabs"><div><p class="panel-kicker">考え方を確かめる</p><h2 id="explanation-title" class="panel-title">' + t('どう考える？', '考え方') + '</h2></div><div class="length-tabs" role="group" aria-label="説明の長さ"><button class="length-tab" type="button" data-action="length" data-length="short" aria-pressed="' + (length === 'short') + '">短く</button><button class="length-tab" type="button" data-action="length" data-length="detail" aria-pressed="' + (length === 'detail') + '">くわしく</button></div></div><p class="body-copy" id="explanation-copy">' + e(core.text(unit, length)) + '</p><div class="button-row"><a class="button" href="#practice/' + e(unit.code) + '">' + t('練習してみる', '練習へ進む') + '<span aria-hidden="true">→</span></a></div><p class="subtle-note">' + unit.questions.length + 'つの問い。途中で休んでも、続きから。</p></section>';
      body += '<div id="unit-lesson">' + lessonHTML + '</div>';
      if (unit.workedExample) body += workedExample(unit);
      if (unit.misconception) body += '<details class="panel misconception"><summary>ここを確かめる</summary><p class="misconception-trap">' + e(unit.misconception.trap) + '</p><p class="body-copy">' + e(unit.misconception.correction) + '</p></details>';
    }
    return breadcrumb(unit) + unitHeading(unit) + (lessonHTML ? '<div class="lesson-jump"><button type="button" class="quiet-button" data-action="lesson-jump">動く解説へ <span aria-hidden="true">↓</span></button></div>' : '') + '<div class="unit-layout"><div class="learning-column">' + body + '</div><aside class="lesson-aside"><h2>この単元の進め方</h2><ul class="flow-list"><li><span class="flow-dot"></span>クイズでためす</li><li><span class="flow-dot"></span>例と説明を見る</li><li><span class="flow-dot"></span>練習で確かめる</li><li><span class="flow-dot"></span>自分の言葉で話す</li></ul><div class="aside-separator"></div><p>短い説明と、くわしい説明。<br>そのときに合わせて選べます。</p><a class="text-link" href="#result/' + e(unit.code) + '">今の達成率を見る</a></aside></div>' + footer();
  }

  function workedExample(unit) {
    var example = unit.workedExample;
    var count = Math.min(example.steps.length, memory.steps[unit.code] || 1);
    return '<section class="panel worked-example" aria-labelledby="worked-title"><p class="panel-kicker">ひとつずつ考える</p><h2 id="worked-title" class="panel-title">' + e(example.title) + '</h2><p class="worked-prompt">' + e(example.prompt) + '</p><ol class="worked-steps">' + example.steps.slice(0, count).map(function (step) { return '<li><p>' + e(step.text) + '</p></li>'; }).join('') + '</ol>' + (count >= example.steps.length ? '<p class="worked-answer">' + e(example.answer) + '</p>' : '') + '<div class="button-row">' + (count < example.steps.length ? '<button class="button secondary" type="button" data-action="worked-next">次の考え方を見る →</button>' : '') + '<button type="button" class="text-link" data-action="worked-reset">はじめから見る</button></div><p class="subtle-note">' + count + ' / ' + example.steps.length + ' の考え方を表示</p></section>';
  }

  function questionIndex(unit) {
    if (!has(memory.indices, unit.code)) {
      var first = unit.questions.findIndex(function (q) { return !savedAnswer(unit, q); });
      memory.indices[unit.code] = first === -1 ? 0 : first;
    }
    return Math.max(0, Math.min(unit.questions.length - 1, memory.indices[unit.code]));
  }

  function practicePage(unit) {
    var index = questionIndex(unit);
    var q = unit.questions[index];
    if (!q) return '<p class="empty-state">練習を準備しているところです。もう少し待っていてね。</p>';
    var feedback = memory.feedback[questionKey(unit, q, 'practice')];
    var saved = savedAnswer(unit, q);
    if (!feedback && saved) feedback = { correct: saved.correct };
    return '<div class="practice-main">' + breadcrumb(unit, '練習') + '<div class="practice-top"><h1 class="page-title">' + t('練習してみよう', '練習で確かめる') + '</h1><span class="step-label">' + (index + 1) + ' / ' + unit.questions.length + '</span></div><p class="page-lead">' + e(unit.title) + '</p><nav class="question-nav" aria-label="問いを選ぶ">' + unit.questions.map(function (question, questionNumber) {
      return '<button type="button" class="question-dot' + (savedAnswer(unit, question) ? ' answered' : '') + '" data-action="question" data-index="' + questionNumber + '" aria-label="問い' + (questionNumber + 1) + (savedAnswer(unit, question) ? '、回答あり' : '') + '"' + (questionNumber === index ? ' aria-current="step"' : '') + '>' + (questionNumber + 1) + '</button>';
    }).join('') + '</nav><section class="panel practice-panel"><p class="panel-kicker">問い ' + (index + 1) + '</p><h2 class="question-prompt">' + e(q.prompt) + '</h2>' + (q.hint ? '<button type="button" class="text-link" data-action="hint" aria-expanded="' + Boolean(memory.hints[questionKey(unit, q, 'practice')]) + '">考えるヒント' + (memory.hints[questionKey(unit, q, 'practice')] ? 'を閉じる' : 'を見る') + '</button>' + (memory.hints[questionKey(unit, q, 'practice')] ? '<p class="hint-copy">' + e(q.hint) + '</p>' : '') : '') + questionForm(unit, q, 'practice', feedback) + '</section><nav class="practice-navigation" aria-label="練習の移動"><button type="button" class="quiet-button" data-action="question" data-index="' + (index - 1) + '"' + (index === 0 ? ' disabled' : '') + '>← 前の問い</button>' + (index < unit.questions.length - 1 ? '<button type="button" class="button secondary" data-action="question" data-index="' + (index + 1) + '">次の問いへ <span aria-hidden="true">→</span></button>' : '<a class="button" href="#result/' + e(unit.code) + '">ここまでを確かめる →</a>') + '</nav><div class="button-row"><a class="text-link" href="#unit/' + e(unit.code) + '">例と説明に戻る</a><a class="text-link" href="#result/' + e(unit.code) + '">ここまでを見る</a></div>' + footer() + '</div>';
  }

  function resultPage(unit) {
    var p = progress(unit.code);
    return '<div class="practice-main">' + breadcrumb(unit, 'ここまで') + '<section class="result-hero"><p class="eyebrow">' + e(unit.title) + '</p><h1 class="page-title">' + t('ここまでを、確かめよう。', '取り組みを確かめる') + '</h1><div class="result-ring" style="--progress:' + clampPercent(p.percent) + '%"><div class="result-ring-inner"><div class="result-number">' + clampPercent(p.percent) + '<small>%</small></div><span>この単元の達成率</span></div></div></section><div class="result-grid"><section class="result-component"><h2>練習で確かめる</h2><div class="component-count">' + p.correct + '<small> / ' + p.total + ' 問</small></div><p>答えが合っている問い。<br>もう一度、取り組めます。</p></section><section class="result-component"><h2>自分の言葉で話す</h2><div class="component-count">' + p.explained + '<small> / ' + p.buddyTotal + ' つ</small></div><p>自分で「説明できた」と確認したもの。</p></section></div><p class="result-breakdown">達成率は、練習80%と「説明できた」の自己確認20%を合わせたものです。</p><div class="button-row center-actions"><a class="button" href="#buddy/' + e(unit.code) + '">バディと話してみる →</a><a class="button secondary" href="#practice/' + e(unit.code) + '">もう一度練習する</a></div><section class="panel" style="margin-top:30px"><h2 class="panel-title">練習のふり返り</h2><ul class="review-list">' + unit.questions.map(function (q, index) {
      var answer = savedAnswer(unit, q);
      return '<li><span class="review-label">' + (answer ? answer.correct ? '確かめた' : 'もう一度' : 'これから') + '</span><span class="review-title">' + e(q.prompt) + '</span><button class="quiet-button" type="button" data-action="review-question" data-index="' + index + '">開く</button></li>';
    }).join('') + '</ul></section><div class="button-row"><a class="text-link" href="#list/' + core.state.grade + '">単元一覧へ戻る</a></div>' + footer() + '</div>';
  }

  function buddyItem(unit) {
    var index = memory.buddyIndex[unit.code] || 0;
    return unit.buddy[Math.max(0, Math.min(unit.buddy.length - 1, index))];
  }

  function buddyState(unit, item) {
    var key = unit.code + ':' + item.id;
    if (!has(memory.buddy, key)) memory.buddy[key] = { text: '', sent: false, checks: [], error: '' };
    return memory.buddy[key];
  }

  function buddyConfirmed(unit, item) {
    var record = core.state.progress[unit.code];
    return Boolean(record && record.buddy && has(record.buddy, item.id) && record.buddy[item.id]);
  }

  function buddyMessage(text) {
    return '<div class="message"><span class="buddy-avatar" role="img" aria-label="バディ"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5h14v11H9l-4 3V5Z" stroke="currentColor" stroke-width="1.5"/><path d="M9 9v2m6-2v2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></span><div class="message-content"><p class="speaker">バディ · あらかじめ用意した問いかけ</p><div class="message-bubble">' + e(text) + '</div></div></div>';
  }

  function buddyPage(unit) {
    var item = buddyItem(unit);
    if (!item) return '<p class="empty-state">問いかけを準備しているところです。もう少し待っていてね。</p>';
    var state = buddyState(unit, item);
    var confirmed = buddyConfirmed(unit, item);
    var checked = item.checkpoints.length > 0 && item.checkpoints.every(function (_, index) { return state.checks[index] === true; });
    var body = '<div class="practice-main">' + breadcrumb(unit, 'バディと話す') + '<p class="eyebrow">' + e(unit.title) + '</p><h1 class="page-title">' + t('自分の言葉で、話してみよう。', '考え方を言葉にする') + '</h1><p class="page-lead">' + t('どう考えたかを書いて、問いかけと一緒に確かめよう。', '考え方を書いたあと、確認項目に沿って自分で振り返ります。') + '</p><div class="buddy-intro">これは用意された問いかけです。AIにはつながっていません。<br>「説明できた」は自分で確認します。書いた文は保存・送信されません。</div>';
    if (unit.buddy.length > 1) body += '<div class="buddy-tabs" role="group" aria-label="話すテーマ">' + unit.buddy.map(function (entry, index) { return '<button type="button" data-action="buddy-item" data-index="' + index + '" aria-pressed="' + (entry.id === item.id) + '">問いかけ ' + (index + 1) + '</button>'; }).join('') + '</div>';
    body += buddyMessage(item.prompt);
    if (!state.sent) {
      body += '<form class="buddy-composer" data-kind="buddy" novalidate><label for="buddy-answer">' + t('どう考えた？', 'あなたの考え方') + '</label><textarea id="buddy-answer" class="buddy-text" name="buddy-answer" maxlength="1600" placeholder="式や図を思いうかべながら、短い言葉でも。"' + (state.error ? ' aria-invalid="true" aria-describedby="buddy-error"' : '') + '>' + e(state.text) + '</textarea><div class="composer-bottom"><p class="composer-note">このページを閉じると、書いた文は消えます。<br>名前などは書かなくて大丈夫。</p><button type="submit" class="button">続きを話す →</button></div>' + (state.error ? '<p id="buddy-error" class="feedback retry" role="status">' + e(state.error) + '</p>' : '') + '</form>';
    } else {
      body += '<div class="message own"><div class="message-content"><p class="speaker">あなたの言葉 · この画面の中だけ</p><div class="message-bubble">' + e(state.text) + '</div></div></div>' + buddyMessage(item.followUp) + '<section class="panel check-panel"><h2>自分の説明を確かめる</h2><p class="panel-description">書いた文を読み返して、確かめたものにチェック。</p><div class="checklist">' + item.checkpoints.map(function (checkpoint, index) {
        return '<label class="checkpoint"><input type="checkbox" data-checkpoint="' + index + '"' + (state.checks[index] ? ' checked' : '') + '><span>' + e(checkpoint) + '</span></label>';
      }).join('') + '</div><details class="sample-detail"><summary>説明の例を見る</summary><p>' + e(item.sample) + '</p></details><div class="button-row"><button type="button" class="button" data-action="buddy-confirm"' + (!checked || confirmed ? ' disabled' : '') + '>自分で「説明できた」と確認</button><button type="button" class="quiet-button" data-action="buddy-retry">書き直す</button></div><p class="subtle-note">チェックは自分のふり返りです。書いた文を自動で確かめる機能はありません。</p></section>';
    }
    if (confirmed) body += '<div class="confirmation" role="status">自分で「説明できた」と確認しました。<br>いつでも取り消して、もう一度確かめられます。<div class="button-row"><button type="button" class="quiet-button" data-action="buddy-revoke">確認を取り消す</button></div></div>';
    body += '<div class="button-row"><a class="button secondary" href="#result/' + e(unit.code) + '">今の達成率を見る</a><a class="text-link" href="#unit/' + e(unit.code) + '">説明に戻る</a></div>' + footer() + '</div>';
    return body;
  }

  function pausedPage() {
    var unit = core.state.resume ? core.unit(core.state.resume) : null;
    return '<section class="paused-screen"><div class="paused-art" aria-hidden="true"><span class="pause-icon"></span></div><p class="eyebrow">ひと休み</p><h1 class="page-title">' + t('きょうは、ここまで。', '今日は、ここまで。') + '</h1><p class="page-lead">' + (core.storageOK ? '取り組んだところは、このブラウザに残っています。' : 'このページを開いている間は、続きから始められます。') + '<br>またやってみたくなったら、いつでも。</p>' + (unit ? '<div class="resume-card"><p>続きからできる単元</p><h2>' + e(unit.title) + '</h2><a class="button" href="' + e(/^#(unit|practice|result|buddy)\/82502[45][0-9A-Z]{10}$/.test(lastRoute) && lastRoute.slice(lastRoute.lastIndexOf('/') + 1) === unit.code ? lastRoute : '#unit/' + unit.code) + '">' + t('つづきをする', '続きをする') + ' →</a></div>' : '') + '<div class="button-row"><a class="text-link" href="#list/' + core.state.grade + '">単元一覧を見る</a></div></section>';
  }

  function render(focusMain) {
    if (window.BL.lessons) window.BL.lessons.destroy();
    var current = route();
    if (current.page === 'list') {
      core.state.grade = current.grade;
      // Canonicalize old bookmarks without adding an extra history entry.
      if (window.location.hash !== '#list/' + current.grade) window.history.replaceState(null, '', '#list/' + current.grade);
      core.save();
    }
    document.documentElement.setAttribute('data-mode', core.state.mode);
    if (current.unit) {
      core.state.grade = core.gradeOf(current.unit);
      core.state.resume = current.unit.code;
      core.save();
    }
    var content = current.page === 'list' ? listPage() : current.page === 'unit' ? unitPage(current.unit) : current.page === 'practice' ? practicePage(current.unit) : current.page === 'result' ? resultPage(current.unit) : current.page === 'buddy' ? buddyPage(current.unit) : current.page === 'paused' ? pausedPage() : '<section class="route-error"><h1>この単元を開けませんでした</h1><p>単元一覧から、もう一度選んでみてください。</p><a class="button" href="#list/' + core.state.grade + '">単元一覧へ</a></section>';
    app.innerHTML = '<div class="app-shell">' + sidebar(current.page) + '<div class="workspace">' + topbar(current.page) + gradeTabs() + (!core.storageOK ? '<div class="storage-warning" role="status">このブラウザでは保存できません。今は取り組めますが、ページを閉じると回答が消えます。</div>' : '') + '<main id="main" class="main" tabindex="-1" data-page="' + e(current.page) + '" data-grade="' + core.state.grade + '" data-unit="' + e(current.unit ? current.unit.code : '') + '">' + content + '</main></div></div>';
    if (current.page === 'unit' && window.BL.visuals) {
      var visual = document.getElementById('unit-visual');
      if (visual) { visual.innerHTML = window.BL.visuals.render(current.unit); window.BL.visuals.bind(visual, current.unit); }
    }
    if (current.page === 'unit' && window.BL.lessons) {
      var lesson = document.getElementById('unit-lesson');
      if (lesson) window.BL.lessons.bind(lesson, current.unit);
    }
    document.title = (current.unit ? current.unit.title + ' — ' : '') + '基礎学習';
    if (focusMain) {
      document.getElementById('main').focus({ preventScroll: true });
      window.scrollTo(0, 0);
    }
  }

  function focusSelector(selector) {
    var node = app.querySelector(selector);
    if (node) { if (!node.matches('button,input,textarea,a,[tabindex]')) node.setAttribute('tabindex', '-1'); node.focus({ preventScroll: true }); }
  }

  function formQuestion(form, current) {
    if (!current.unit) return null;
    var kind = form.getAttribute('data-kind');
    if (kind === 'game' && form.getAttribute('data-question') === current.unit.game.id) return current.unit.game;
    if (kind === 'practice') return current.unit.questions.filter(function (q) { return q.id === form.getAttribute('data-question'); })[0] || null;
    return null;
  }

  function readAnswer(form, q, unit, kind) {
    if (q.type === 'number') return form.querySelector('input[name="answer"]').value;
    if (q.type === 'choice') {
      var chosen = form.querySelector('input[name="answer"]:checked');
      var index = chosen ? Number(chosen.value) : -1;
      return Number.isInteger(index) && index >= 0 && index < q.options.length ? q.options[index] : '';
    }
    return draft(unit, q, kind).slice();
  }

  app.addEventListener('input', function (event) {
    var current = route();
    var form = event.target.closest('form');
    if (!form || !current.unit) return;
    var kind = form.getAttribute('data-kind');
    if (kind === 'buddy') {
      buddyState(current.unit, buddyItem(current.unit)).text = event.target.value.slice(0, 1600);
      return;
    }
    var q = formQuestion(form, current);
    if (q) memory.drafts[questionKey(current.unit, q, kind)] = readAnswer(form, q, current.unit, kind);
  });

  app.addEventListener('change', function (event) {
    var current = route();
    if (current.page !== 'buddy' || !event.target.hasAttribute('data-checkpoint')) return;
    var item = buddyItem(current.unit);
    var state = buddyState(current.unit, item);
    var index = Number(event.target.getAttribute('data-checkpoint'));
    if (!Number.isInteger(index) || index < 0 || index >= item.checkpoints.length) return;
    state.checks[index] = event.target.checked;
    var confirmButton = app.querySelector('[data-action="buddy-confirm"]');
    if (confirmButton) confirmButton.disabled = buddyConfirmed(current.unit, item) || !item.checkpoints.every(function (_, i) { return state.checks[i] === true; });
  });

  app.addEventListener('submit', function (event) {
    var form = event.target;
    if (!form.matches('form[data-kind]')) return;
    event.preventDefault();
    var current = route();
    if (!current.unit) return;
    var kind = form.getAttribute('data-kind');
    if (kind === 'buddy') {
      var item = buddyItem(current.unit);
      var state = buddyState(current.unit, item);
      state.text = form.querySelector('textarea').value.trim().slice(0, 1600);
      if (!state.text) { state.error = '考えたことを、ひと言書いてみよう。'; render(false); focusSelector('#buddy-answer'); return; }
      state.sent = true;
      state.error = '';
      render(false);
      announce('続きの問いかけと、確かめる項目を表示しました。');
      focusSelector('.check-panel');
      return;
    }
    var q = formQuestion(form, current);
    if (!q) return;
    var value = readAnswer(form, q, current.unit, kind);
    memory.drafts[questionKey(current.unit, q, kind)] = value;
    var empty = typeof value === 'string' && !value.trim();
    var invalid = !core.validAnswer(q, value);
    var feedback = invalid ? { invalid: true, message: q.type === 'choice' ? '答えをひとつ選んでください。' : q.type === 'number' ? (empty ? '答えを数字で書いてください。' : '数字で書いてください。小数は「.」を使えます。') : 'すべての項目を並べてください。' } : { correct: core.grade(q, value) };
    if (kind === 'game') memory.games[current.unit.code] = feedback;
    else {
      memory.feedback[questionKey(current.unit, q, kind)] = feedback;
      if (!invalid) core.answer(current.unit.code, q.id, value);
    }
    render(false);
    focusSelector('#answer-feedback');
    if (kind === 'game' && !invalid) announce('クイズを確かめました。この下に例と説明が続きます。');
  });

  app.addEventListener('click', function (event) {
    var button = event.target.closest('[data-action]');
    if (!button || !app.contains(button) || button.disabled) return;
    var action = button.getAttribute('data-action');
    var current = route();
    if (action === 'grade') {
      var grade = Number(button.getAttribute('data-grade'));
      if (core.grades().indexOf(grade) === -1) return;
      core.state.grade = grade;
      core.save();
      go('#list/' + core.state.grade);
      announce('小学' + grade + '年生の単元を表示しました。');
    } else if (action === 'mode') {
      var mode = button.getAttribute('data-mode');
      if (mode !== 'es' && mode !== 'js') return;
      core.state.mode = mode;
      core.save();
      render(false);
      focusSelector('[data-action="mode"][data-mode="' + mode + '"]');
      announce(mode === 'es' ? '小学生向けの表示にしました。' : '中学生向けの表示にしました。');
    } else if (action === 'interest') {
      var interest = button.getAttribute('data-interest');
      if (interest !== 'all' && !categories().some(function (category) { return category.id === interest; })) return;
      core.state.interest = interest;
      core.save();
      render(false);
      var choices = app.querySelectorAll('[data-action="interest"]');
      Array.prototype.some.call(choices, function (choice) { if (choice.getAttribute('data-interest') === interest) { choice.focus({ preventScroll: true }); return true; } return false; });
      announce(categoryLabel(interest) + 'の入口を選びました。どの単元も選べます。');
    } else if (action === 'pause') {
      lastRoute = window.location.hash || '#list';
      core.save();
      go('#paused');
    } else if (action === 'domain') {
      var domain = button.getAttribute('data-domain');
      if (!domains.some(function (item) { return item.id === domain; })) return;
      if (current.page !== 'list') {
        go('#list/' + core.state.grade);
        window.setTimeout(function () { var heading = document.getElementById('heading-' + domain); if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus(); heading.scrollIntoView({ block: 'start' }); } }, 50);
      } else {
        var heading = document.getElementById('heading-' + domain);
        if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus(); heading.scrollIntoView({ block: 'start' }); }
      }
    } else if (current.unit && action === 'lesson-jump') {
      var lessonHeading = document.getElementById('lesson-heading');
      if (lessonHeading) { focusSelector('#lesson-heading'); document.getElementById('unit-lesson').scrollIntoView({ block: 'start', behavior: 'auto' }); }
    } else if (current.unit && (action === 'worked-next' || action === 'worked-reset')) {
      if (!current.unit.workedExample) return;
      memory.steps[current.unit.code] = action === 'worked-reset' ? 1 : Math.min(current.unit.workedExample.steps.length, (memory.steps[current.unit.code] || 1) + 1);
      render(false);
      focusSelector(action === 'worked-next' && memory.steps[current.unit.code] < current.unit.workedExample.steps.length ? '[data-action="worked-next"]' : '[data-action="worked-reset"]');
      announce('考え方を' + memory.steps[current.unit.code] + 'つ表示しました。');
    } else if (current.unit && action === 'hint') {
      var hintQuestion = current.unit.questions[questionIndex(current.unit)];
      var hintKey = questionKey(current.unit, hintQuestion, 'practice');
      memory.hints[hintKey] = !memory.hints[hintKey];
      render(false);
      focusSelector('[data-action="hint"]');
    } else if (current.unit && action === 'length') {
      var length = button.getAttribute('data-length');
      if (length !== 'short' && length !== 'detail') return;
      memory.lengths[current.unit.code] = length;
      render(false);
      focusSelector('[data-action="length"][data-length="' + length + '"]');
      announce(length === 'short' ? '短い説明にしました。' : 'くわしい説明にしました。');
    } else if (current.unit && (action === 'question' || action === 'review-question')) {
      var next = Number(button.getAttribute('data-index'));
      if (!Number.isInteger(next) || next < 0 || next >= current.unit.questions.length) return;
      memory.indices[current.unit.code] = next;
      if (action === 'review-question') go('#practice/' + current.unit.code);
      else { render(false); focusSelector('.question-prompt'); announce('問い' + (next + 1) + 'を表示しました。'); }
    } else if (current.unit && action === 'order') {
      var form = button.closest('form');
      var q = formQuestion(form, current);
      if (!q || q.type !== 'order') return;
      var index = Number(button.getAttribute('data-index'));
      var direction = button.getAttribute('data-direction');
      if (!Number.isInteger(index) || (direction !== 'up' && direction !== 'down')) return;
      var kind = form.getAttribute('data-kind');
      var items = draft(current.unit, q, kind).slice();
      var target = index + (direction === 'up' ? -1 : 1);
      if (index < 0 || index >= items.length || target < 0 || target >= items.length) return;
      var moving = items[index];
      items[index] = items[target];
      items[target] = moving;
      memory.drafts[questionKey(current.unit, q, kind)] = items;
      render(false);
      focusSelector('[data-action="order"][data-index="' + target + '"][data-direction="' + direction + '"]:not(:disabled)');
      if (document.activeElement === document.body) focusSelector('[data-action="order"][data-index="' + target + '"]:not(:disabled)');
      announce(moving + 'を' + (direction === 'up' ? '上' : '下') + 'へ動かしました。');
    } else if (current.unit && action === 'buddy-item') {
      var buddyIndex = Number(button.getAttribute('data-index'));
      if (!Number.isInteger(buddyIndex) || buddyIndex < 0 || buddyIndex >= current.unit.buddy.length) return;
      memory.buddyIndex[current.unit.code] = buddyIndex;
      render(false);
      focusSelector('[data-action="buddy-item"][data-index="' + buddyIndex + '"]');
    } else if (current.unit && action.indexOf('buddy-') === 0) {
      var buddy = buddyItem(current.unit);
      var state = buddyState(current.unit, buddy);
      if (action === 'buddy-confirm') {
        if (!state.sent || !buddy.checkpoints.length || !buddy.checkpoints.every(function (_, i) { return state.checks[i] === true; })) return;
        core.explain(current.unit.code, buddy.id, true);
        render(false);
        announce('自分で「説明できた」と確認しました。');
        focusSelector('[data-action="buddy-revoke"]');
      } else if (action === 'buddy-revoke') {
        core.explain(current.unit.code, buddy.id, false);
        render(false);
        announce('自己確認を取り消しました。');
        focusSelector('[data-action="buddy-confirm"]');
      } else if (action === 'buddy-retry') {
        state.sent = false;
        state.checks = [];
        state.error = '';
        if (buddyConfirmed(current.unit, buddy)) core.explain(current.unit.code, buddy.id, false);
        render(false);
        focusSelector('#buddy-answer');
      }
    }
  });

  document.querySelector('.skip-link').addEventListener('click', function (event) {
    event.preventDefault();
    var main = document.getElementById('main');
    if (main) { main.focus(); main.scrollIntoView({block: 'start', behavior: 'auto'}); }
  });

  window.addEventListener('hashchange', function () { render(true); });
  render(false);
}());
