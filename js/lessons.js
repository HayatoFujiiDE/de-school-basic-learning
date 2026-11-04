(function () {
  'use strict';
  var BL = window.BL = window.BL || {};
  var own = function (object, key) { return Boolean(object) && Object.prototype.hasOwnProperty.call(object, key); };
  var codes = ['8250243131100000', '8250243141300000', '8250243150000000', '8250243240000000', '8250243250000000', '8250243310000000', '8250243320000000', '8250243411200000', '8250253131100000', '8250253131200000', '8250253150000000', '8250253231100000', '8250253331100000', '8250253420000000', '8250263112100000', '8250263110000000', '8250263211200000', '8250263320000000', '8250263230000000', '8250263311300000'];
  var videoCodes = ['8250243150000000', '8250243240000000', '8250243250000000', '8250243310000000', '8250253150000000', '8250253420000000', '8250263112100000', '8250263320000000'];
  var sessions = Object.create(null);
  var active = null;
  var duration = 1500;
  var holdDuration = 1800;
  var forbidden = /点数|ランキング|順位|評価|成績|レベル|集中力|得意|苦手|上手|成長|データがありません|学びのバディ/;
  var elementNames = ['svg', 'g', 'path', 'rect', 'line', 'polyline', 'polygon', 'circle', 'ellipse', 'text', 'tspan', 'title', 'desc', 'defs', 'clipPath'];
  var attributeNames = ['xmlns', 'viewBox', 'width', 'height', 'x', 'y', 'x1', 'x2', 'y1', 'y2', 'cx', 'cy', 'r', 'rx', 'ry', 'd', 'points', 'transform', 'fill', 'fill-opacity', 'stroke', 'stroke-width', 'stroke-opacity', 'stroke-dasharray', 'stroke-dashoffset', 'stroke-linecap', 'stroke-linejoin', 'opacity', 'font-family', 'font-size', 'font-weight', 'text-anchor', 'dominant-baseline', 'alignment-baseline', 'dy', 'dx', 'role', 'aria-label', 'aria-hidden', 'id', 'clip-path', 'clipPathUnits', 'preserveAspectRatio', 'vector-effect'];
  var e = function (value) { return BL.core.escape(String(value == null ? '' : value)); };
  var text = function (value) { return typeof value === 'string' && value.trim().length > 0 && !forbidden.test(value); };

  function material(unit) {
    var scenes = BL.lessonScenes;
    var review = BL.lessonReview;
    if (!unit || codes.indexOf(unit.code) === -1 || !BL.core || BL.core.unit(unit.code) !== unit) return null;
    if (!scenes || !scenes.items || typeof scenes.render !== 'function' || !own(scenes.items, unit.code)) return null;
    if (!review || review.version !== '1' || !own(review.items, unit.code) || !review.items[unit.code] || review.items[unit.code].evidence !== 'verified') return null;
    var scene = scenes.items[unit.code];
    if (!scene || !text(scene.title) || !text(scene.prompt) || !Array.isArray(scene.steps) || scene.steps.length < 4 || scene.steps.length > 5) return null;
    var claims = unit.claims.map(function (claim) { return claim.id; });
    var validClaims = function (ids) { return Array.isArray(ids) && ids.length > 0 && ids.every(function (id) { return typeof id === 'string' && claims.indexOf(id) !== -1; }); };
    if (!validClaims(scene.claimIds) || !scene.steps.every(function (step) { return step && text(step.label) && text(step.text) && text(step.alt); })) return null;
    var challenge = scene.challenge;
    if (!challenge || !text(challenge.prompt) || !text(challenge.explanation) || !validClaims(challenge.claimIds) || !Array.isArray(challenge.options) || challenge.options.length < 2 || challenge.options.length > 5) return null;
    if (!challenge.options.every(text) || new Set(challenge.options).size !== challenge.options.length || challenge.options.indexOf(challenge.answer) === -1) return null;
    if (!scene.tryIt || !text(scene.tryIt.label) || !scene.tryIt.state || typeof scene.tryIt.state !== 'object' || Array.isArray(scene.tryIt.state)) return null;
    return { scene: scene, review: review.items[unit.code] };
  }

  function sessionFor(unit, scene) {
    if (!own(sessions, unit.code)) sessions[unit.code] = { step: 0, phase: 1, answer: '', checked: false };
    var session = sessions[unit.code];
    if (!Number.isInteger(session.step) || session.step < 0 || session.step >= scene.steps.length) session.step = 0;
    if (!Number.isFinite(session.phase) || session.phase < 0 || session.phase > 1) session.phase = 1;
    if (scene.challenge.options.indexOf(session.answer) === -1) { session.answer = ''; session.checked = false; }
    return session;
  }

  // Authored SVG is still treated as an input boundary: no active content,
  // external references, inline styles or event attributes enter the document.
  function frame(unit, scene, step, phase) {
    try {
      var source = BL.lessonScenes.render(unit.code, step, phase);
      if (typeof source !== 'string' || source.length > 250000 || /<!DOCTYPE|<!ENTITY/i.test(source)) return '';
      var doc = new DOMParser().parseFromString(source, 'image/svg+xml');
      if (doc.querySelector('parsererror')) return '';
      var svg = doc.documentElement;
      if (svg.localName !== 'svg' || (svg.namespaceURI && svg.namespaceURI !== 'http://www.w3.org/2000/svg')) return '';
      var elements = [svg].concat(Array.prototype.slice.call(svg.querySelectorAll('*')));
      var safe = elements.every(function (element) {
        if (elementNames.indexOf(element.localName) === -1 || (element.namespaceURI && element.namespaceURI !== 'http://www.w3.org/2000/svg')) return false;
        return Array.prototype.every.call(element.attributes, function (attribute) {
          if (attributeNames.indexOf(attribute.name) === -1) return false;
          if (attribute.name === 'xmlns') return attribute.value === 'http://www.w3.org/2000/svg';
          if (attribute.name === 'clip-path') return /^url\(#[A-Za-z][A-Za-z0-9_-]*\)$/.test(attribute.value);
          if (attribute.name === 'id') return /^[A-Za-z][A-Za-z0-9_-]*$/.test(attribute.value);
          return !/url\s*\(|[\\]/i.test(attribute.value);
        });
      });
      if (!safe || forbidden.test(svg.textContent)) return '';
      svg.setAttribute('role', 'img');
      svg.setAttribute('aria-label', scene.steps[step].alt);
      svg.setAttribute('focusable', 'false');
      return new XMLSerializer().serializeToString(svg);
    } catch (error) { return ''; }
  }

  function videoMarkup(unit, review) {
    var video = 'assets/lessons/' + unit.code + '.mp4';
    var poster = 'assets/lessons/' + unit.code + '.svg';
    if (videoCodes.indexOf(unit.code) === -1 || review.video !== video || review.poster !== poster) return '';
    return '<details class="lesson-video" data-lesson-video><summary><span>短い動画で見る</span><span class="lesson-audio-label">音声なし</span></summary><div class="lesson-video-body"><p>図の動きを、動画でも見られます。自分で再生・停止できます。</p><video controls playsinline preload="none" poster="' + e(poster) + '" aria-label="' + e(unit.title + 'の短い動画。音声なし') + '"><source src="' + e(video) + '" type="video/mp4"><p>このブラウザでは動画を開けません。上の図と「説明をまとめて読む」で確かめられます。</p></video><p class="subtle-note">内容は上の図と同じです。文字の説明は「説明をまとめて読む」にあります。</p></div></details>';
  }

  function feedback(scene, session) {
    if (!session.checked) return '';
    return '<strong>' + (session.answer === scene.challenge.answer ? 'そのとおり。' : '図の流れも見て、考えてみよう。') + '</strong><p>' + e(scene.challenge.explanation) + '</p>';
  }

  function render(unit) {
    var data = material(unit);
    if (!data) return '';
    var scene = data.scene;
    var session = sessionFor(unit, scene);
    var firstFrame = frame(unit, scene, session.step, session.phase);
    if (!firstFrame) return '';
    var step = scene.steps[session.step];
    return '<section class="lesson-panel panel" data-lesson-code="' + e(unit.code) + '" aria-labelledby="lesson-heading"><p class="panel-kicker">考え方を、動きで見る</p><h2 class="panel-title" id="lesson-heading">' + e(scene.title) + '</h2><p class="lesson-intro">' + e(scene.prompt) + '</p><form class="lesson-prediction" data-lesson-prediction novalidate><p class="lesson-small-heading">先に、予想してみよう</p><fieldset><legend>' + e(scene.challenge.prompt) + '</legend><div class="lesson-options">' + scene.challenge.options.map(function (option, index) {
      return '<label class="lesson-option"><input type="radio" name="lesson-prediction" value="' + index + '"' + (session.answer === option ? ' checked' : '') + '><span>' + e(option) + '</span></label>';
    }).join('') + '</div></fieldset><button type="submit" class="quiet-button">予想をたしかめる</button><div class="lesson-feedback" data-lesson-feedback role="status" aria-live="polite">' + feedback(scene, session) + '</div><p class="subtle-note">この予想は達成率には入りません。図はいつでも動かせます。</p></form><div class="lesson-diagram" data-lesson-stage>' + firstFrame + '</div><div class="lesson-caption"><div class="lesson-caption-head"><h3 data-lesson-step-label>' + e(step.label) + '</h3><span class="lesson-step-count" data-lesson-step-count>' + (session.step + 1) + ' / ' + scene.steps.length + '</span></div><p data-lesson-step-text>' + e(step.text) + '</p></div><div class="lesson-controls" role="group" aria-label="図の進め方"><button type="button" class="quiet-button" data-lesson-action="previous"' + (session.step === 0 ? ' disabled' : '') + '>前へ</button><button type="button" class="button green" data-lesson-action="play" aria-pressed="false">動きを見る</button><button type="button" class="quiet-button" data-lesson-action="next"' + (session.step === scene.steps.length - 1 ? ' disabled' : '') + '>次へ</button><button type="button" class="text-link" data-lesson-action="reset">はじめから</button></div><p class="lesson-motion-note" data-lesson-motion-note>「動きを見る」で順に進みます。「前へ」「次へ」で一つずつ確かめられます。</p><p class="sr-only" data-lesson-status role="status" aria-live="polite" aria-atomic="true"></p><details class="lesson-transcript"><summary>説明をまとめて読む</summary><ol>' + scene.steps.map(function (entry) { return '<li><h3>' + e(entry.label) + '</h3><p>' + e(entry.text) + '</p></li>'; }).join('') + '</ol></details><div class="lesson-try"><p>今度は、自分で図を動かして確かめよう。</p><button type="button" class="button secondary" data-lesson-action="try">' + e(scene.tryIt.label) + '<span aria-hidden="true"> ↑</span></button></div>' + videoMarkup(unit, data.review) + '</section>';
  }

  function pauseVideo(player) {
    var video = player && player.container.querySelector('video');
    if (video) video.pause();
  }

  function setStatus(player, message) {
    var status = player.container.querySelector('[data-lesson-status]');
    if (status) status.textContent = message;
  }

  function controls(player) {
    var session = player.session;
    var play = player.container.querySelector('[data-lesson-action="play"]');
    play.textContent = player.playing ? '止める' : session.step === player.scene.steps.length - 1 && session.phase === 1 ? 'もう一度動かす' : '動きを見る';
    play.setAttribute('aria-pressed', String(player.playing));
    play.disabled = player.reduced.matches;
    player.container.querySelector('[data-lesson-action="previous"]').disabled = session.step === 0;
    player.container.querySelector('[data-lesson-action="next"]').disabled = session.step === player.scene.steps.length - 1;
    player.container.querySelector('[data-lesson-motion-note]').textContent = player.reduced.matches ? '動きを減らす設定に合わせています。「前へ」「次へ」で図を一つずつ見られます。' : '「動きを見る」で順に進みます。「前へ」「次へ」で一つずつ確かめられます。';
  }

  function stop(player) {
    if (!player) return;
    player.playing = false;
    if (player.raf !== null) window.cancelAnimationFrame(player.raf);
    player.raf = null;
    player.start = null;
    player.holdUntil = null;
    if (!player.disposed) controls(player);
  }

  function draw(player, caption) {
    var content = frame(player.unit, player.scene, player.session.step, player.session.phase);
    if (!content) { stop(player); return false; }
    player.container.querySelector('[data-lesson-stage]').innerHTML = content;
    if (caption) {
      var step = player.scene.steps[player.session.step];
      player.container.querySelector('[data-lesson-step-label]').textContent = step.label;
      player.container.querySelector('[data-lesson-step-text]').textContent = step.text;
      player.container.querySelector('[data-lesson-step-count]').textContent = (player.session.step + 1) + ' / ' + player.scene.steps.length;
      setStatus(player, step.label + '。' + step.text);
      controls(player);
    }
    return true;
  }

  function tick(player, time) {
    player.raf = null;
    if (player.disposed || active !== player || !player.playing || document.hidden || !player.container.isConnected) { stop(player); return; }
    if (player.session.phase === 1) {
      if (player.holdUntil === null) player.holdUntil = time + holdDuration;
      if (time >= player.holdUntil) {
        if (player.session.step === player.scene.steps.length - 1) { stop(player); setStatus(player, '最後まで見ました。「前へ」で戻れます。'); return; }
        player.session.step += 1;
        player.session.phase = 0;
        player.start = time;
        player.holdUntil = null;
        if (!draw(player, true)) return;
      }
    } else {
      if (player.start === null) player.start = time - player.session.phase * duration;
      player.session.phase = Math.min(1, (time - player.start) / duration);
      if (!draw(player, false)) return;
      if (player.session.phase === 1) { player.start = null; player.holdUntil = time + holdDuration; }
    }
    player.raf = window.requestAnimationFrame(function (next) { tick(player, next); });
  }

  function bind(container, unit) {
    var data = material(unit);
    if (!container || !data || !container.querySelector('[data-lesson-code="' + unit.code + '"]')) return;
    if (active && active.container === container && active.unit === unit) return;
    destroy();
    var player = { container: container, unit: unit, scene: data.scene, session: sessionFor(unit, data.scene), reduced: window.matchMedia('(prefers-reduced-motion: reduce)'), playing: false, raf: null, start: null, holdUntil: null, disposed: false };
    active = player;
    controls(player);
    player.onClick = function (event) {
      var button = event.target.closest('[data-lesson-action]');
      if (!button || !container.contains(button) || button.disabled) return;
      var action = button.getAttribute('data-lesson-action');
      if (action === 'play') {
        if (player.playing) { stop(player); setStatus(player, '図を止めました。'); return; }
        if (player.reduced.matches || document.hidden) return;
        pauseVideo(player);
        if (player.session.step === player.scene.steps.length - 1 && player.session.phase === 1) { player.session.step = 0; player.session.phase = 1; draw(player, true); }
        player.playing = true;
        player.start = null;
        player.holdUntil = null;
        controls(player);
        player.raf = window.requestAnimationFrame(function (time) { tick(player, time); });
      } else if (action === 'previous' || action === 'next' || action === 'reset') {
        stop(player);
        pauseVideo(player);
        player.session.step = action === 'reset' ? 0 : Math.max(0, Math.min(player.scene.steps.length - 1, player.session.step + (action === 'next' ? 1 : -1)));
        player.session.phase = 1;
        draw(player, true);
      } else if (action === 'try') {
        stop(player);
        pauseVideo(player);
        var target = document.getElementById('unit-visual');
        var applied = target && BL.visuals && typeof BL.visuals.setState === 'function' && BL.visuals.setState(target, unit, player.scene.tryIt.state);
        if (applied) setStatus(player, '動かせる図を開きました。数や形を変えてみよう。');
      }
    };
    player.onChange = function (event) {
      if (!event.target.matches('input[name="lesson-prediction"]')) return;
      var index = Number(event.target.value);
      if (!Number.isInteger(index) || index < 0 || index >= player.scene.challenge.options.length) return;
      player.session.answer = player.scene.challenge.options[index];
      player.session.checked = false;
      container.querySelector('[data-lesson-feedback]').textContent = '';
    };
    player.onSubmit = function (event) {
      if (!event.target.matches('[data-lesson-prediction]')) return;
      event.preventDefault();
      var field = event.target.querySelector('input[name="lesson-prediction"]:checked');
      var index = field ? Number(field.value) : -1;
      var response = container.querySelector('[data-lesson-feedback]');
      if (!Number.isInteger(index) || index < 0 || index >= player.scene.challenge.options.length) { response.textContent = '予想をひとつ選んでください。'; return; }
      player.session.answer = player.scene.challenge.options[index];
      player.session.checked = true;
      response.innerHTML = feedback(player.scene, player.session);
    };
    player.onVisibility = function () { if (document.hidden) { stop(player); pauseVideo(player); } };
    player.onReduced = function () { if (player.reduced.matches) { stop(player); player.session.phase = 1; draw(player, false); } controls(player); };
    player.onToggle = function (event) { if (event.target.matches('[data-lesson-video]') && !event.target.open) pauseVideo(player); };
    player.onVideoPlay = function () { stop(player); };
    container.addEventListener('click', player.onClick);
    container.addEventListener('change', player.onChange);
    container.addEventListener('submit', player.onSubmit);
    container.addEventListener('toggle', player.onToggle, true);
    container.addEventListener('play', player.onVideoPlay, true);
    document.addEventListener('visibilitychange', player.onVisibility);
    player.reduced.addEventListener('change', player.onReduced);
  }

  function destroy() {
    if (!active) return;
    var player = active;
    stop(player);
    pauseVideo(player);
    player.disposed = true;
    player.container.removeEventListener('click', player.onClick);
    player.container.removeEventListener('change', player.onChange);
    player.container.removeEventListener('submit', player.onSubmit);
    player.container.removeEventListener('toggle', player.onToggle, true);
    player.container.removeEventListener('play', player.onVideoPlay, true);
    document.removeEventListener('visibilitychange', player.onVisibility);
    player.reduced.removeEventListener('change', player.onReduced);
    active = null;
  }

  BL.lessons = { render: render, bind: bind, destroy: destroy };
}());
