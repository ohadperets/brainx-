#!/usr/bin/env node
// BrainX smoke test — loads the whole app in a Node VM with a stubbed DOM, then
// opens every route (for grade 3 and grade 6, every subject) and checks that
// nothing throws and that no screen timers are left running after leaving.
//
// Usage: node tools/smoke.mjs            (exit code 1 on failure)
// No dependencies. This is not a visual test — it catches crashes and wiring bugs.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');

// ---------- minimal DOM ----------
function makeElement(id = '') {
  const el = {
    id, tagName: 'DIV', value: '', textContent: '', innerHTML: '', className: '',
    style: {}, dataset: {}, children: [], childNodes: [], disabled: false, checked: false,
    scrollTop: 0, offsetWidth: 300, offsetHeight: 300, clientWidth: 300, clientHeight: 300,
    parentNode: null, parentElement: null, nextSibling: null, firstChild: null,
    classList: {
      _s: new Set(),
      add(...c) { c.forEach(x => this._s.add(x)); }, remove(...c) { c.forEach(x => this._s.delete(x)); },
      toggle(c, f) { const on = f === undefined ? !this._s.has(c) : f; on ? this._s.add(c) : this._s.delete(c); return on; },
      contains(c) { return this._s.has(c); },
    },
    appendChild(c) { this.children.push(c); if (c) c.parentNode = this; return c; },
    insertBefore(c) { this.children.push(c); return c; },
    removeChild(c) { return c; }, remove() {}, replaceWith() {},
    setAttribute(k, v) { this['attr_' + k] = v; }, getAttribute(k) { return this['attr_' + k] ?? null; },
    removeAttribute() {}, hasAttribute() { return false; },
    addEventListener() {}, removeEventListener() {}, dispatchEvent() { return true; },
    querySelector: () => makeElement(), querySelectorAll: () => [],
    getElementsByClassName: () => [], getElementsByTagName: () => [],
    closest: () => null, matches: () => false, contains: () => false,
    getBoundingClientRect: () => ({ left: 0, top: 0, right: 100, bottom: 40, width: 100, height: 40, x: 0, y: 0 }),
    focus() {}, blur() {}, click() {}, select() {}, scrollIntoView() {}, scrollTo() {},
    animate: () => ({ onfinish: null, cancel() {} }),
    cloneNode() { return makeElement(); },
  };
  return el;
}

function makeContext() {
  const els = new Map();
  const getEl = id => { if (!els.has(id)) els.set(id, makeElement(id)); return els.get(id); };
  const store = new Map();
  const timers = { set: 0 };
  const document = {
    getElementById: getEl,
    querySelector: () => makeElement(), querySelectorAll: () => [],
    getElementsByClassName: () => [], getElementsByTagName: () => [],
    createElement: tag => Object.assign(makeElement(), { tagName: String(tag).toUpperCase() }),
    createTextNode: t => ({ textContent: t }),
    addEventListener() {}, removeEventListener() {},
    body: makeElement('body'), documentElement: makeElement('html'), head: makeElement('head'),
    readyState: 'complete', hidden: false,
  };
  const historyStack = [];
  const ctx = {
    console: { log() {}, info() {}, warn() {}, error: (...a) => ctx.__errors.push(a.join(' ')) },
    __errors: [],
    document,
    localStorage: {
      getItem: k => (store.has(k) ? store.get(k) : null),
      setItem: (k, v) => store.set(k, String(v)), removeItem: k => store.delete(k),
      clear: () => store.clear(), key: i => [...store.keys()][i] ?? null, get length() { return store.size; },
    },
    sessionStorage: { getItem: () => null, setItem() {}, removeItem() {} },
    location: { pathname: '/', hash: '', href: 'http://localhost/', search: '', reload() {} },
    history: {
      pushState: (s) => historyStack.push(s), replaceState() {}, back() {}, go() {},
      get length() { return historyStack.length; },
    },
    navigator: { onLine: true, userAgent: 'node', vibrate: () => true },
    speechSynthesis: { speak() {}, cancel() {}, getVoices: () => [], addEventListener() {}, onvoiceschanged: null },
    SpeechSynthesisUtterance: function (t) { this.text = t; },
    AudioContext: function () {
      const node = () => ({ connect() { return node(); }, disconnect() {}, start() {}, stop() {},
        frequency: { value: 0, setValueAtTime() {}, exponentialRampToValueAtTime() {}, linearRampToValueAtTime() {} },
        gain: { value: 0, setValueAtTime() {}, exponentialRampToValueAtTime() {}, linearRampToValueAtTime() {} },
        type: 'sine', Q: { value: 0 } });
      return { state: 'running', currentTime: 0, destination: {}, resume() {},
        createOscillator: node, createGain: node, createBiquadFilter: node };
    },
    // timers never fire in the smoke test; we only count what is left registered
    setTimeout: () => ++timers.set, clearTimeout() {}, setInterval: () => ++timers.set, clearInterval() {},
    requestAnimationFrame: () => 0, cancelAnimationFrame() {},
    alert() {}, confirm: () => true, prompt: () => null,
    fetch: () => Promise.reject(new Error('offline')),
    innerWidth: 400, innerHeight: 800, scrollTo() {},
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    matchMedia: () => ({ matches: false, addEventListener() {}, addListener() {} }),
    addEventListener() {}, removeEventListener() {},
    Date, Math, JSON, Promise, Array, Object, String, Number, Set, Map, URL, Intl, RegExp, Error,
    parseInt, parseFloat, isNaN, encodeURIComponent, decodeURIComponent,
  };
  ctx.window = ctx;
  ctx.self = ctx;
  ctx.globalThis = ctx;
  vm.createContext(ctx);
  return { ctx, store };
}

// ---------- load the app ----------
const SCRIPTS = ['version.js', 'core/timers.js', 'core/feedback.js', 'core/game-kit.js', 'core/rewards.js', 'data.js', 'content-imports.js', 'app.js'];
const failures = [];

function load(ctx) {
  for (const f of SCRIPTS) {
    if (!fs.existsSync(path.join(ROOT, f))) continue;
    vm.runInContext(read(f), ctx, { filename: f });
  }
}

// routes = every `case '...':` inside navigate()
const appSrc = read('app.js');
const navStart = appSrc.indexOf('function navigate(');
const navEnd = appSrc.indexOf('\nfunction goBack(');
const routes = [...new Set([...appSrc.slice(navStart, navEnd).matchAll(/case '([^']+)':/g)].map(m => m[1]))];
// routes that need extra context to make sense in isolation
const SKIP = new Set(['lesson-detail', 'dictation-session', 'grade6-word-match', 'word-match-session']);

function run(grade) {
  const { ctx, store } = makeContext();
  // a legacy user saved by an older version (grade 5 → should become 6)
  const legacy = JSON.parse(read('tools/fixtures/legacy-users.json'));
  store.set('brainx-users', JSON.stringify(legacy.users.map(u => ({ ...u, grade: grade === 6 ? 5 : 2 }))));
  store.set('brainx-currentUser', legacy.users[0].id);
  store.set('brainx-progress-' + legacy.users[0].id, JSON.stringify(legacy.progress));
  try { load(ctx); } catch (e) { failures.push(`[g${grade}] load: ${e.message}`); return; }

  const exec = code => vm.runInContext(code, ctx);
  try {
    exec(`selectUser(${JSON.stringify(legacy.users[0].id)})`);
  } catch (e) { failures.push(`[g${grade}] selectUser: ${e.message}`); return; }
  const g = exec('normalizeGrade(profile.grade)');
  if (g !== grade) failures.push(`[g${grade}] legacy grade migrated to ${g}, expected ${grade}`);

  let opened = 0;
  for (const subject of ['hebrew', 'english', 'math']) {
    for (const route of routes) {
      if (SKIP.has(route)) continue;
      if (route.startsWith('admin')) { exec('isAdminLoggedIn = true'); }
      try {
        exec(`navigate(${JSON.stringify(route)}, ${JSON.stringify(subject)})`);
        opened++;
      } catch (e) {
        failures.push(`[g${grade}/${subject}] navigate('${route}'): ${e.message}`);
      }
      try {
        exec(`navigate('home')`);
        const left = exec('T.pending()');
        if (left) failures.push(`[g${grade}/${subject}] ${left} timer(s) still running after leaving '${route}'`);
      } catch (e) {
        failures.push(`[g${grade}/${subject}] back home from '${route}': ${e.message}`);
      }
    }
  }

  // flows that prepare their own state and then open a screen must record history
  // (so Back returns to the menu they came from)
  const flows = [
    ['dictation', 'startTestPrepDictation', 'dictation-session', 'english'],
    ['dictation-general', 'startGeneralDictation', 'dictation-session', 'english'],
    ['dictation-general', 'startGeneralWordMatch', 'word-match-session', 'english'],
    ['grade6-dictation', 'startGrade6WordMatch', 'grade6-word-match', 'english'],
  ];
  for (const [menu, fn, expected, subject] of flows) {
    // grade 3 has no grade-6 dictation and no general dictation list (those buttons are hidden)
    if (grade !== 6 && (menu.startsWith('grade6') || menu === 'dictation-general')) continue;
    try {
      exec(`navigate('home'); navigate(${JSON.stringify(menu)}, ${JSON.stringify(subject)}); ${fn}();`);
      const [screen, back] = exec('[currentScreen, (screenHistory[screenHistory.length - 1] || {}).screen]');
      if (screen !== expected) failures.push(`[g${grade}] ${fn}() opened '${screen}', expected '${expected}'`);
      if (back !== menu) failures.push(`[g${grade}] ${fn}(): Back would go to '${back}', expected '${menu}'`);
    } catch (e) { failures.push(`[g${grade}] ${fn}(): ${e.message}`); }
  }
  exec(`navigate('home')`);

  // every migrated game must end on the shared results card and award 0–3 stars
  const endings = [
    // [route, subject, end call, grades]
    ['quiz', 'hebrew', 'showQuizResults()', [3, 6]],
    ['balloon-pop', 'english', 'endBalloonPop()', [3, 6]],
    ['game-race', 'english', 'endRace()', [3, 6]],
    ['game-scramble', 'hebrew', 'endScramble()', [3, 6]],
    ['game-speed-math', 'math', 'endSpeedMath()', [3, 6]],
    ['game-fill-blank', 'hebrew', 'endFillBlank()', [3, 6]],
    ['game-true-false', 'math', 'endTrueFalse()', [3, 6]],
    ['game-match-drag', 'english', 'endMatchDrag()', [3, 6]],
    ['game-spelling', 'english', 'endSpelling()', [6]],
    ['game-word-problems', 'math', 'endWordProblems()', [6]],
    ['geometry-quiz', 'math', 'showGeoResults()', [6]],
    ['multiplication-quiz', 'math', 'showMulResults()', [3]],
    ['big-exam-grammar', 'english', 'showGrammarResults()', [6]],
    ['math-big-natural', 'math', 'showMathNaturalResults()', [6]],
  ];
  let endingsChecked = 0;
  for (const [route, subject, endCall, grades] of endings) {
    if (!grades.includes(grade)) continue;
    endingsChecked++;
    try {
      const r = exec(`(() => {
        navigate('home'); navigate(${JSON.stringify(route)}, ${JSON.stringify(subject)});
        lastFinishedGame = null;
        const before = progress.stars;
        ${endCall};
        return [!!lastFinishedGame, progress.stars - before, !!document.getElementById('results-overlay')];
      })()`);
      if (!r[0]) failures.push(`[g${grade}] ${endCall} did not call finishGame()`);
      if (r[1] < 0 || r[1] > 3 || Number.isNaN(r[1])) failures.push(`[g${grade}] ${endCall} awarded ${r[1]} stars (expected 0–3)`);
    } catch (e) { failures.push(`[g${grade}] ${endCall}: ${e.message}`); }
  }
  exec(`navigate('home')`);

  // star rule
  try {
    const got = exec('[starsFor(0), starsFor(49), starsFor(50), starsFor(74), starsFor(75), starsFor(89), starsFor(90), starsFor(100)].join(",")');
    if (got !== '0,0,1,1,2,2,3,3') failures.push(`[g${grade}] starsFor thresholds wrong: ${got}`);
  } catch (e) { failures.push(`[g${grade}] starsFor: ${e.message}`); }

  // sound settings: defaults load for legacy users and mute persists
  try {
    const r = exec(`(() => { const a = settings.sound; toggleSound(); const b = loadSettings().sound; toggleSound(); return [a, b, loadSettings().sound]; })()`);
    if (r.join(',') !== 'true,false,true') failures.push(`[g${grade}] mute toggle/persist wrong: ${r}`);
  } catch (e) { failures.push(`[g${grade}] sound settings: ${e.message}`); }

  // ---- R3: levels, XP, migration, registry, generated content ----
  try {
    const curve = exec('[1,2,3,4,5,10].map(l => levelStartXp(l)).join(",")');
    if (curve !== '0,100,300,600,1000,4500') failures.push(`[g${grade}] level curve wrong: ${curve}`);
    const lv = exec('[levelInfo(0).level, levelInfo(99).level, levelInfo(100).level, levelInfo(1370).level].join(",")');
    if (lv !== '1,1,2,5') failures.push(`[g${grade}] levelInfo wrong: ${lv}`);
    // legacy fixture: 137 stars, no xp → 1370 XP (level 5); migrating twice changes nothing
    const mig = exec(`(() => { const p = migrateProgressSchema({ stars: 137 }); const once = p.xp; migrateProgressSchema(p); return [once, p.xp, p.schema]; })()`);
    if (mig.join(',') !== '1370,1370,2') failures.push(`[g${grade}] migration wrong: ${mig}`);
    if (exec('progress.xp') < 1370) failures.push(`[g${grade}] legacy user did not get migrated XP: ${exec('progress.xp')}`);
    const daily = exec('[xpForRound({correct: 4, total: 5, stars: 2}), xpForRound({correct: 4, total: 5, stars: 2, daily: true})].join(",")');
    if (daily !== '30,60') failures.push(`[g${grade}] daily XP not doubled: ${daily}`);
    const xpGain = exec(`(() => { const b = progress.xp; navigate('quiz', 'hebrew'); quizState.score = quizState.questions.length; showQuizResults(); return progress.xp - b; })()`);
    if (!(xpGain > 0)) failures.push(`[g${grade}] finishing a game gave ${xpGain} XP`);
    exec(`navigate('home')`);
  } catch (e) { failures.push(`[g${grade}] rewards: ${e.message}`); }

  try {
    const missing = exec(`GAME_REGISTRY.filter(g => !${JSON.stringify(routes)}.includes(g.route)).map(g => g.route)`);
    if (missing.length) failures.push(`[g${grade}] registry routes without a screen: ${missing}`);
    const counts = exec(`ALL_SUBJECTS.map(s => s + ':' + availableGames(s).length).join(' ')`);
    for (const s of ['hebrew', 'english', 'math']) {
      exec(`navigate('home')`);
      for (const g of exec(`availableGames(${JSON.stringify(s)}).map(g => g.route)`)) {
        try { exec(`navigate(${JSON.stringify(g)}, ${JSON.stringify(s)})`); }
        catch (e) { failures.push(`[g${grade}/${s}] available game '${g}' failed to open: ${e.message}`); }
      }
    }
    exec(`navigate('home')`);
    console.log(`grade ${grade}: games per subject — ${counts}`);
  } catch (e) { failures.push(`[g${grade}] registry: ${e.message}`); }

  try {
    const bad = exec(`(() => { let bad = 0; for (let i = 0; i < 500; i++) for (const s of ALL_SUBJECTS) for (const st of generateTrueFalseFromQuiz(s)) { if (typeof st.isTrue !== 'boolean' || !st.statement) bad++; } return bad; })()`);
    if (bad) failures.push(`[g${grade}] ${bad} malformed generated true/false statements`);
    const fb = exec(`ALL_SUBJECTS.map(s => getFillBlankSource(s).filter(q => !(q.options && q.options[q.answer] !== undefined)).length).join(',')`);
    if (fb !== '0,0,0') failures.push(`[g${grade}] fill-blank items whose answer is not among the options: ${fb}`);
  } catch (e) { failures.push(`[g${grade}] generators: ${e.message}`); }

  // auto-advance: Next must advance exactly once even with a pending timer
  try {
    const r = exec(`(() => { let n = 0; AutoAdvance.schedule(2000, () => n++); AutoAdvance.next(); AutoAdvance.next(); return [n, T.pending()]; })()`);
    if (r[0] !== 1 || r[1] !== 0) failures.push(`[g${grade}] AutoAdvance advanced ${r[0]}x, ${r[1]} timer(s) left`);
  } catch (e) { failures.push(`[g${grade}] AutoAdvance: ${e.message}`); }

  // saved progress from the legacy fixture must survive
  try {
    const stars = exec('progress.stars');
    if (stars < legacy.progress.stars) failures.push(`[g${grade}] legacy stars lost: ${stars}`);
  } catch (e) { failures.push(`[g${grade}] progress: ${e.message}`); }

  if (ctx.__errors.length) ctx.__errors.slice(0, 5).forEach(e => failures.push(`[g${grade}] console.error: ${e}`));
  console.log(`grade ${grade}: opened ${opened} route×subject combinations (${routes.length} routes), ended ${endingsChecked} games`);
}

run(3);
run(6);

if (failures.length) {
  console.log(`\n❌ ${failures.length} problem(s):`);
  failures.slice(0, 60).forEach(f => console.log(' - ' + f));
  process.exit(1);
}
console.log('\n✅ smoke test passed');
