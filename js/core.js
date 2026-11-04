(function () {
  'use strict';
  var BL = window.BL = window.BL || {};
  var KEY = 'des.basic-learning.v1';
  var own = function (object, key) { return Object.prototype.hasOwnProperty.call(object, key); };
  var dictionary = function () { return Object.create(null); };
  var isObject = function (value) { return value !== null && typeof value === 'object' && !Array.isArray(value); };
  var text = function (value) { return typeof value === 'string' && value.trim().length > 0; };
  var unique = function (items) { return new Set(items).size === items.length; };
  var forbidden = /点数|ランキング|順位|評価|成績|レベル|集中力|得意|苦手|上手|成長|データがありません|学びのバディ/;
  var inputData = isObject(BL.data) ? BL.data : {};
  var data = {version: text(inputData.version) ? inputData.version : '1', units: Array.isArray(inputData.units) ? inputData.units : [], categories: Array.isArray(inputData.categories) ? inputData.categories : [], sources: Array.isArray(inputData.sources) ? inputData.sources : []};
  var unitMap = dictionary();
  var accepted = [];
  var core = {storageOK: true, rejectedCount: 0};

  function validQuestion(question, claims) {
    if (!isObject(question) || !text(question.id) || !text(question.prompt) || !text(question.explanation)) return false;
    if (!Array.isArray(question.claimIds) || !question.claimIds.length || !question.claimIds.every(function (id) { return own(claims, id); })) return false;
    if (question.type === 'number') return typeof question.answer === 'number' && Number.isFinite(question.answer);
    if (question.type === 'choice') return Array.isArray(question.options) && question.options.length >= 2 && question.options.every(text) && unique(question.options) && question.options.indexOf(question.answer) !== -1;
    if (question.type === 'order') return Array.isArray(question.items) && question.items.length >= 2 && question.items.every(text) && unique(question.items) && Array.isArray(question.answer) && unique(question.answer) && question.items.length === question.answer.length && question.answer.every(function (item) { return question.items.indexOf(item) !== -1; });
    return false;
  }

  function validUnit(unit) {
    if (!isObject(unit) || !/^82502[456][0-9A-Z]{10}$/.test(unit.code) || !text(unit.title) || !text(unit.goal) || ['A', 'B', 'C', 'D'].indexOf(unit.domain) === -1 || !Number.isFinite(unit.order)) return false;
    if ((unit.grade === undefined && unit.code.charAt(5) !== '4') || (unit.grade !== undefined && unit.grade !== Number(unit.code.charAt(5)))) return false;
    if (!unit.review || unit.review.evidence !== 'verified' || unit.review.publication !== 'preview') return false;
    if (!Array.isArray(unit.coverageCodes) || !unit.coverageCodes.length || !unit.coverageCodes.every(function (code) { return /^82502[456][0-9A-Z]{10}$/.test(code) && code.charAt(5) === unit.code.charAt(5); })) return false;
    if (!unit.explanations || !['es', 'js'].every(function (mode) { return unit.explanations[mode] && text(unit.explanations[mode].short) && text(unit.explanations[mode].detail); })) return false;
    if (!Array.isArray(unit.claims) || !unit.claims.length) return false;
    var claims = dictionary();
    var validClaims = unit.claims.every(function (claim) {
      if (!claim || !text(claim.id) || own(claims, claim.id) || !text(claim.text) || claim.status !== 'verified' || !Array.isArray(claim.sourceIds) || !claim.sourceIds.length) return false;
      claims[claim.id] = true;
      return claim.sourceIds.every(function (id) { return data.sources.some(function (source) { return source.id === id; }); });
    });
    if (!validClaims || !unit['adapt-rules'] || !Array.isArray(unit['adapt-rules'].allowed) || !unit['adapt-rules'].allowed.length || !Array.isArray(unit['adapt-rules'].forbidden) || !unit['adapt-rules'].forbidden.length) return false;
    if (!Array.isArray(unit.entries) || unit.entries.length < 2 || !unit.entries.every(function (entry) {
      return text(entry.title) && text(entry.text) && Array.isArray(entry.activityIds) && entry.activityIds.length > 0 && data.categories.some(function (category) { return category.id === entry.category; });
    })) return false;
    if (!Array.isArray(unit.questions) || unit.questions.length < 5 || unit.questions.length > 10 || !unique(unit.questions.map(function (q) { return q.id; })) || !unit.questions.every(function (q) { return validQuestion(q, claims); })) return false;
    if (!validQuestion(unit.game, claims)) return false;
    if (!Array.isArray(unit.buddy) || !unit.buddy.length || unit.buddy.length > 2 || !unique(unit.buddy.map(function (b) { return b.id; })) || !unit.buddy.every(function (b) {
      return text(b.id) && text(b.prompt) && text(b.followUp) && text(b.sample) && Array.isArray(b.checkpoints) && b.checkpoints.length > 0 && b.checkpoints.every(text) && Array.isArray(b.claimIds) && b.claimIds.length > 0 && b.claimIds.every(function (id) { return own(claims, id); });
    })) return false;
    var example = unit.workedExample, misconception = unit.misconception;
    if (!example || !text(example.title) || !text(example.prompt) || !text(example.answer) || !Array.isArray(example.steps) || example.steps.length < 3 || !example.steps.every(function (step) { return step && text(step.text); })) return false;
    if (!misconception || !text(misconception.trap) || !text(misconception.correction)) return false;
    if (![example, misconception].every(function (part) { return Array.isArray(part.claimIds) && part.claimIds.length > 0 && part.claimIds.every(function (id) { return own(claims, id); }); })) return false;
    return !forbidden.test(JSON.stringify([unit.title, unit.goal, unit.explanations, unit.entries, unit.questions, unit.game, unit.buddy, example, misconception]));
  }

  // Exact schema and review gating run before any material can be rendered.
  (Array.isArray(data.units) ? data.units : []).forEach(function (unit) {
    if (!validUnit(unit) || own(unitMap, unit.code)) { core.rejectedCount += 1; return; }
    accepted.push(unit);
    unitMap[unit.code] = unit;
  });
  accepted.sort(function (a, b) { return Number(a.code.charAt(5)) - Number(b.code.charAt(5)) || a.order - b.order; });
  core.gradeOf = function (unit) { return unit && own(unitMap, unit.code) && unitMap[unit.code] === unit ? Number(unit.code.charAt(5)) : null; };
  core.grades = function () { return [4, 5, 6].filter(function (grade) { return accepted.some(function (unit) { return core.gradeOf(unit) === grade; }); }); };
  core.units = function (grade) { return grade === undefined ? accepted.slice() : accepted.filter(function (unit) { return core.gradeOf(unit) === grade; }); };
  core.unit = function (code) { return typeof code === 'string' && own(unitMap, code) ? unitMap[code] : null; };
  core.escape = function (value) {
    return String(value === null || value === undefined ? '' : value).replace(/[&<>"']/g, function (character) {
      return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character];
    });
  };

  // The independent catalogue declaration detects missing scripts, duplicate or
  // substituted codes before saving can project away any existing record.
  var expectedCatalogue = BL.expectedCatalogue;
  var requiredVersion = typeof document !== 'undefined' && document.documentElement ? document.documentElement.getAttribute('data-catalogue-version') : null;
  var requireCatalogue = Boolean(expectedCatalogue) || requiredVersion === '4' || data.version === '4';
  core.ready = true;
  if (requireCatalogue) {
    var expectedCodes = expectedCatalogue && expectedCatalogue.codes;
    var actualCodes = data.units.map(function (unit) { return unit && unit.code; });
    core.ready = Boolean(expectedCatalogue && expectedCatalogue.version === '4' && data.version === '4' && (!requiredVersion || requiredVersion === '4') && Array.isArray(expectedCodes) && expectedCodes.length === 66 && unique(expectedCodes) && expectedCodes.every(function (code) { return typeof code === 'string' && /^82502[456][0-9A-Z]{10}$/.test(code); }) && actualCodes.length === expectedCodes.length && unique(actualCodes) && actualCodes.every(function (code) { return expectedCodes.indexOf(code) !== -1; }) && data.units.every(function (unit) { return unit && ((unit.grade === undefined && unit.code.charAt(5) === '4') || unit.grade === Number(unit.code.charAt(5))); }));
  }
  var catalogueReadOnly = !core.ready || core.rejectedCount > 0;
  core.readOnly = catalogueReadOnly;
  function supportedVersion(version) {
    return version === data.version || (version === '2' && (data.version === '3' || data.version === '4')) || (version === '3' && data.version === '4');
  }

  function numeric(value) {
    if (typeof value !== 'string' && typeof value !== 'number') return null;
    var input = String(value).trim().replace(/[０-９．＋－]/g, function (character) { return String.fromCharCode(character.charCodeAt(0) - 65248); });
    // Full input must be a decimal number. Blank, exponent, infinity and expressions are rejected.
    if (!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(input) || input.length > 40) return null;
    var result = Number(input);
    return Number.isFinite(result) ? result : null;
  }
  core.grade = function (question, value) {
    if (!question) return false;
    if (question.type === 'number') { var result = numeric(value); return result !== null && result === question.answer; }
    if (question.type === 'choice') return typeof value === 'string' && Array.isArray(question.options) && question.options.indexOf(value) !== -1 && value === question.answer;
    if (question.type === 'order') return Array.isArray(value) && value.length === question.answer.length && value.every(function (part, index) { return typeof part === 'string' && part === question.answer[index]; });
    return false;
  };

  function cleanValue(question, value) {
    if (question.type === 'number') return numeric(value);
    if (question.type === 'choice') return typeof value === 'string' && question.options.indexOf(value) !== -1 ? value : null;
    if (question.type === 'order') return Array.isArray(value) && value.length === question.items.length && unique(value) && value.every(function (item) { return question.items.indexOf(item) !== -1; }) ? value.slice() : null;
    return null;
  }
  core.validAnswer = function (question, value) { return Boolean(question) && cleanValue(question, value) !== null; };
  function defaults() { return {version: data.version, grade: 4, mode: 'es', interest: 'all', progress: dictionary(), resume: null}; }
  function sanitize(raw) {
    var state = defaults();
    if (!isObject(raw)) return state;
    if (core.grades().indexOf(raw.grade) !== -1) state.grade = raw.grade;
    if (raw.mode === 'js' || raw.mode === 'es') state.mode = raw.mode;
    if (raw.interest === 'all' || data.categories.some(function (category) { return category.id === raw.interest; })) state.interest = raw.interest;
    if (core.unit(raw.resume)) state.resume = raw.resume;
    // Version 2 contained only the byte-identical grade-4 material. Migrate that
    // reviewed grade only. Version 3 may similarly carry grades 4 and 5 into 4.
    var legacyGrade4 = (data.version === '3' || data.version === '4') && raw.version === '2';
    var legacyGrade45 = data.version === '4' && raw.version === '3';
    if (legacyGrade4) {
      state.grade = 4;
      if (state.resume && core.gradeOf(core.unit(state.resume)) !== 4) state.resume = null;
    }
    if (legacyGrade45) {
      if (state.grade === 6) state.grade = 4;
      if (state.resume && core.gradeOf(core.unit(state.resume)) === 6) state.resume = null;
    }
    if (!supportedVersion(raw.version) || !isObject(raw.progress)) return state;
    accepted.forEach(function (unit) {
      if (legacyGrade4 && core.gradeOf(unit) !== 4) return;
      if (legacyGrade45 && core.gradeOf(unit) === 6) return;
      if (!own(raw.progress, unit.code) || !isObject(raw.progress[unit.code])) return;
      var stored = raw.progress[unit.code];
      var record = {answers: dictionary(), buddy: dictionary()};
      unit.questions.forEach(function (question) {
        if (!isObject(stored.answers) || !own(stored.answers, question.id) || !isObject(stored.answers[question.id])) return;
        var value = cleanValue(question, stored.answers[question.id].value);
        if (value !== null) record.answers[question.id] = {value: value, correct: core.grade(question, value)};
      });
      unit.buddy.forEach(function (prompt) {
        record.buddy[prompt.id] = isObject(stored.buddy) && own(stored.buddy, prompt.id) && stored.buddy[prompt.id] === true;
      });
      state.progress[unit.code] = record;
    });
    return state;
  }
  core.load = function () {
    var stored = null, parsed = null;
    core.readOnly = catalogueReadOnly;
    core.storageOK = !core.readOnly;
    try { stored = window.localStorage.getItem(KEY); }
    catch (error) { core.readOnly = true; core.storageOK = false; }
    if (stored !== null) {
      try {
        if (typeof stored !== 'string' || stored.length > 1000000) throw new Error('Unreadable saved work');
        parsed = JSON.parse(stored);
        if (!isObject(parsed) || !isObject(parsed.progress) || !supportedVersion(parsed.version)) { core.readOnly = true; core.storageOK = false; }
      } catch (error) { core.readOnly = true; core.storageOK = false; }
    }
    core.state = sanitize(parsed);
    return core.state;
  };
  core.save = function () {
    if (core.readOnly) { core.storageOK = false; return false; }
    // Re-project only recognized fields; conversation text can never enter this record.
    core.state = sanitize(core.state);
    try { window.localStorage.setItem(KEY, JSON.stringify(core.state)); core.storageOK = true; }
    catch (error) { core.storageOK = false; }
    return core.storageOK;
  };
  function recordFor(code) {
    if (!own(core.state.progress, code)) core.state.progress[code] = {answers: dictionary(), buddy: dictionary()};
    return core.state.progress[code];
  }
  core.answer = function (code, questionId, input) {
    var unit = core.unit(code);
    if (!unit) return false;
    var question = unit.questions.filter(function (q) { return q.id === questionId; })[0];
    if (!question) return false;
    var value = cleanValue(question, input);
    if (value === null) return false;
    var correct = core.grade(question, value);
    recordFor(code).answers[questionId] = {value: value, correct: correct};
    core.state.resume = code;
    core.save();
    return correct;
  };
  core.explain = function (code, promptId, confirmed) {
    var unit = core.unit(code);
    if (!unit || typeof confirmed !== 'boolean' || !unit.buddy.some(function (b) { return b.id === promptId; })) return false;
    recordFor(code).buddy[promptId] = confirmed;
    core.state.resume = code;
    return core.save();
  };
  core.progress = function (code) {
    var unit = core.unit(code);
    if (!unit) return {percent: 0, correct: 0, total: 0, explained: 0, buddyTotal: 0};
    var record = own(core.state.progress, code) ? core.state.progress[code] : {answers: {}, buddy: {}};
    var correct = unit.questions.filter(function (q) { return own(record.answers, q.id) && core.grade(q, record.answers[q.id].value); }).length;
    var explained = unit.buddy.filter(function (b) { return own(record.buddy, b.id) && record.buddy[b.id] === true; }).length;
    // Integer rational arithmetic avoids e.g. 99.999999 on full completion.
    var percent = Math.floor((80 * correct * unit.buddy.length + 20 * explained * unit.questions.length) / (unit.questions.length * unit.buddy.length));
    return {percent: percent, correct: correct, total: unit.questions.length, explained: explained, buddyTotal: unit.buddy.length};
  };
  core.text = function (unit, length) { return unit.explanations[core.state.mode][length === 'detail' ? 'detail' : 'short']; };
  core.reset = function () {
    if (core.readOnly) { core.storageOK = false; return false; }
    core.state = defaults();
    try { window.localStorage.removeItem(KEY); core.storageOK = true; }
    catch (error) { core.storageOK = false; }
    return core.storageOK;
  };
  BL.core = core;
  core.load();
}());
