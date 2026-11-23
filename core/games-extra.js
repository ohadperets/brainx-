// ===== NEW GAMES (v67) =====
// Built on the shared engine: AutoAdvance / T (core/timers.js), finishGame (core/game-kit.js),
// playSound (core/feedback.js). Content comes from each grade's own data or is generated.

const randInt = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pickOne = arr => arr[Math.floor(Math.random() * arr.length)];

function escapeHtmlText(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ---------------------------------------------------------------------
// 1. "מה חסר?" — number patterns (math, both grades, fully generated)
// ---------------------------------------------------------------------
function makePattern(grade) {
  const len = 5;
  const kinds = grade === 3 ? ['add', 'add', 'sub'] : ['add', 'sub', 'neg', 'mul', 'square'];
  const kind = pickOne(kinds);
  let seq, step;
  if (kind === 'add') {
    step = grade === 3 ? randInt(2, 10) : randInt(3, 25);
    const start = randInt(1, grade === 3 ? 20 : 60);
    seq = Array.from({ length: len }, (_, i) => start + i * step);
  } else if (kind === 'sub') {
    step = grade === 3 ? randInt(2, 10) : randInt(3, 20);
    const start = step * (len - 1) + randInt(0, grade === 3 ? 20 : 80);
    seq = Array.from({ length: len }, (_, i) => start - i * step);
  } else if (kind === 'neg') {
    step = randInt(3, 9);
    const start = randInt(5, 15);
    seq = Array.from({ length: len }, (_, i) => start - i * step);   // crosses zero
  } else if (kind === 'mul') {
    const factor = pickOne([2, 3]);
    const start = randInt(1, 4);
    step = factor;
    seq = Array.from({ length: len }, (_, i) => start * factor ** i);
  } else {
    const offset = randInt(1, 6);
    step = 2;
    seq = Array.from({ length: len }, (_, i) => (offset + i) ** 2);
  }
  const gap = randInt(1, len - 1);
  const answer = seq[gap];
  const d = Math.max(1, Math.abs(seq[1] - seq[0]));
  const candidates = [answer + 1, answer - 1, answer + 2, answer - 2, answer + d, answer - d, answer + 2 * d, answer - 2 * d, answer + 10, answer - 10]
    .filter(n => n !== answer && (grade !== 3 || n >= 0));
  const distractors = shuffle([...new Set(candidates)]).slice(0, 3);
  const options = shuffle([answer, ...distractors]).map(String);
  return { seq, gap, answer, kind, options, correct: options.indexOf(String(answer)) };
}

let patternsState = {};

function startPatterns() {
  const grade = normalizeGrade(profile?.grade);
  patternsState = { questions: Array.from({ length: 10 }, () => makePattern(grade)), current: 0, score: 0, answered: false };
  renderPattern();
}

function renderPattern() {
  const s = patternsState;
  if (s.current >= s.questions.length) return endPatterns();
  const q = s.questions[s.current];
  s.answered = false;
  document.getElementById('pat-counter').textContent = `שאלה ${s.current + 1} מתוך ${s.questions.length}`;
  document.getElementById('pat-progress-fill').style.width = `${(s.current / s.questions.length) * 100}%`;
  document.getElementById('pat-sequence').innerHTML = q.seq.map((n, i) =>
    i === q.gap ? '<span class="pattern-chip pattern-gap" id="pat-gap">?</span>' : `<span class="pattern-chip">${n}</span>`).join('');
  document.getElementById('pat-options').innerHTML = q.options.map((o, i) =>
    `<button class="quiz-option" dir="ltr" onclick="answerPattern(${i})">${o}</button>`).join('');
  document.getElementById('pat-feedback').classList.add('hidden');
}

function answerPattern(i) {
  const s = patternsState;
  if (s.answered) return;
  s.answered = true;
  const q = s.questions[s.current];
  const buttons = document.querySelectorAll('#pat-options .quiz-option');
  buttons.forEach(b => b.classList.add('disabled'));
  if (buttons[q.correct]) buttons[q.correct].classList.add('correct');
  const gapEl = document.getElementById('pat-gap');
  if (gapEl) { gapEl.textContent = q.answer; gapEl.classList.add('filled'); }
  const fb = document.getElementById('pat-feedback');
  if (i === q.correct) {
    s.score++;
    playSound('correct');
    showPointsPopup(10);
  } else {
    if (buttons[i]) buttons[i].classList.add('wrong');
    playSound('wrong');
    fb.className = 'quiz-feedback wrong';
    fb.textContent = `💡 ${patternExplanation(q)}`;
  }
  AutoAdvance.schedule(i === q.correct ? 1100 : 2600, () => { s.current++; renderPattern(); });
}

function patternExplanation(q) {
  const d = q.seq[1] - q.seq[0];
  if (q.kind === 'mul') return `כל מספר גדול פי ${q.seq[1] / q.seq[0]} מהקודם.`;
  if (q.kind === 'square') return 'אלה מספרים ריבועיים: 1×1, 2×2, 3×3 …';
  return d > 0 ? `בכל צעד מוסיפים ${d}.` : `בכל צעד מחסירים ${-d}.`;
}

function endPatterns() {
  const s = patternsState;
  progress.gamesPlayed = (progress.gamesPlayed || 0) + 1;
  saveProgress(progress);
  finishGame({ gameId: 'patterns', title: 'מה חסר?', correct: s.score, total: s.questions.length,
               score: s.score * 10, scoreLabel: 'נקודות', replay: startPatterns });
}

// ---------------------------------------------------------------------
// 2. "סדר את המשפט" — sentence builder (Hebrew & English)
// ---------------------------------------------------------------------
// Sentences come from the grade's quiz content: fill-in-the-blank items are completed with
// their answer; questions are rebuilt as-is. Grade 3: 4–6 words, grade 6: 4–9 words.
function sentenceSource(subject) {
  const grade = normalizeGrade(profile?.grade);
  const max = grade === 3 ? 6 : 9;
  const items = (getData()[subject]?.quiz || []).map(q => {
    let t = String(q.question || '');
    if (/_{2,}/.test(t)) t = t.replace(/_{2,}/, q.options[q.correct]);
    return t.replace(/\s+/g, ' ').trim();
  });
  const sameScript = t => subject === 'english' ? !/[֐-׿]/.test(t) : !/[A-Za-z]/.test(t);
  const ok = [...new Set(items)].filter(t => {
    const words = t.split(' ');
    return words.length >= 4 && words.length <= max && !/[=×÷+<>()"“”]|\d|\n|_/.test(t) && sameScript(t);
  });
  // variety: at most two sentences that start with the same three words
  const perPrefix = {};
  return ok.filter(t => {
    const key = t.split(' ').slice(0, 3).join(' ');
    perPrefix[key] = (perPrefix[key] || 0) + 1;
    return perPrefix[key] <= 2;
  });
}

let sentenceState = {};

function startSentence() {
  const pool = shuffle([...sentenceSource(currentSubject)]);
  sentenceState = { sentences: pool.slice(0, 6), current: 0, score: 0, picked: [], words: [], checked: false };
  renderSentence();
}

function renderSentence() {
  const s = sentenceState;
  if (s.current >= s.sentences.length) return endSentence();
  const words = s.sentences[s.current].split(' ').map((w, i) => ({ w, i }));
  // shuffle until the order differs from the original
  let mixed = shuffle([...words]);
  for (let tries = 0; tries < 5 && mixed.every((x, i) => x.i === i); tries++) mixed = shuffle([...words]);
  s.words = mixed;
  s.picked = [];
  s.checked = false;
  document.getElementById('sent-counter').textContent = `משפט ${s.current + 1} מתוך ${s.sentences.length}`;
  document.getElementById('sent-progress-fill').style.width = `${(s.current / s.sentences.length) * 100}%`;
  document.getElementById('sent-feedback').classList.add('hidden');
  drawSentence();
}

function drawSentence() {
  const s = sentenceState;
  const dir = currentSubject === 'english' ? 'ltr' : 'rtl';
  const answer = document.getElementById('sent-answer');
  const pool = document.getElementById('sent-pool');
  answer.dir = dir; pool.dir = dir;
  answer.innerHTML = s.picked.length
    ? s.picked.map((k, pos) => `<button class="word-chip in-answer" onclick="sentenceUnpick(${pos})">${escapeHtmlText(s.words[k].w)}</button>`).join('')
    : '<span class="sentence-placeholder">לחצו על המילים לפי הסדר</span>';
  pool.innerHTML = s.words.map((x, k) => s.picked.includes(k)
    ? `<span class="word-chip used" aria-hidden="true">${escapeHtmlText(x.w)}</span>`
    : `<button class="word-chip" onclick="sentencePick(${k})">${escapeHtmlText(x.w)}</button>`).join('');
  const check = document.getElementById('sent-check');
  check.disabled = s.picked.length !== s.words.length || s.checked;
}

function sentencePick(k) {
  const s = sentenceState;
  if (s.checked || s.picked.includes(k)) return;
  s.picked.push(k);
  playSound('tap');
  drawSentence();
}

function sentenceUnpick(pos) {
  const s = sentenceState;
  if (s.checked) return;
  s.picked.splice(pos, 1);
  drawSentence();
}

function sentenceReset() {
  if (sentenceState.checked) return;
  sentenceState.picked = [];
  drawSentence();
}

function sentenceCheck() {
  const s = sentenceState;
  if (s.checked || s.picked.length !== s.words.length) return;
  s.checked = true;
  const built = s.picked.map(k => s.words[k].w).join(' ');
  const target = s.sentences[s.current];
  const ok = built === target;
  const fb = document.getElementById('sent-feedback');
  document.getElementById('sent-answer').classList.add(ok ? 'is-correct' : 'is-wrong');
  if (ok) {
    s.score++;
    playSound('correct');
    showPointsPopup(10);
    fb.className = 'quiz-feedback correct';
    fb.textContent = '✅ נכון!';
  } else {
    playSound('wrong');
    fb.className = 'quiz-feedback wrong';
    fb.dir = currentSubject === 'english' ? 'ltr' : 'rtl';
    fb.textContent = `המשפט הנכון: ${target}`;
  }
  drawSentence();
  AutoAdvance.schedule(ok ? 1300 : 3200, () => {
    document.getElementById('sent-answer').classList.remove('is-correct', 'is-wrong');
    s.current++;
    renderSentence();
  });
}

function endSentence() {
  const s = sentenceState;
  progress.gamesPlayed = (progress.gamesPlayed || 0) + 1;
  saveProgress(progress);
  finishGame({ gameId: 'sentence-' + currentSubject, title: 'סדר את המשפט', correct: s.score, total: s.sentences.length,
               score: s.score * 10, scoreLabel: 'נקודות', replay: startSentence });
}

// ---------------------------------------------------------------------
// 3. "מהיר ומדויק" — lightning round (mixed subjects, 45 seconds)
// ---------------------------------------------------------------------
if (typeof TIMED_TARGETS !== 'undefined') TIMED_TARGETS.lightning = { 3: 12, 6: 16 };

let lightningState = {};

function lightningPool() {
  const data = getData();
  const grade = normalizeGrade(profile?.grade);
  const items = [
    ...(data.hebrew?.quiz || []).map(q => ({ ...q, subject: 'hebrew' })),
    ...(data.english?.quiz || []).map(q => ({ ...q, subject: 'english' })),
    ...generateMathQuestions(grade, 20).map(q => ({ ...q, subject: 'math' })),
  ].filter(q => q.question && Array.isArray(q.options) && q.options[q.correct] !== undefined);
  return shuffle(items);
}

function initLightning() {
  lightningState = { active: false, timeLeft: 45, correct: 0, wrong: 0, streak: 0, pool: [], index: 0, locked: false };
  document.getElementById('lt-time').textContent = '45';
  document.getElementById('lt-correct').textContent = '0';
  document.getElementById('lt-streak').textContent = '0';
  document.getElementById('lt-start').classList.remove('hidden');
  document.getElementById('lt-play').classList.add('hidden');
}

function startLightning() {
  initLightning();
  const s = lightningState;
  s.pool = lightningPool();
  s.active = true;
  document.getElementById('lt-start').classList.add('hidden');
  document.getElementById('lt-play').classList.remove('hidden');
  renderLightning();
  s.timer = T.every(() => {
    s.timeLeft--;
    document.getElementById('lt-time').textContent = s.timeLeft;
    if (s.timeLeft <= 0) endLightning();
  }, 1000);
}

function renderLightning() {
  const s = lightningState;
  if (s.index >= s.pool.length) { s.pool = lightningPool(); s.index = 0; }
  const q = s.pool[s.index];
  s.locked = false;
  const qEl = document.getElementById('lt-question');
  qEl.textContent = q.question;
  qEl.dir = textDir(q.question, q.subject === 'math' ? 'ltr' : 'rtl');
  document.getElementById('lt-options').innerHTML = q.options.map((o, i) =>
    `<button class="quiz-option" dir="auto" onclick="answerLightning(${i})">${escapeHtmlText(o)}</button>`).join('');
}

function answerLightning(i) {
  const s = lightningState;
  if (!s.active || s.locked) return;
  s.locked = true;
  const q = s.pool[s.index];
  const buttons = document.querySelectorAll('#lt-options .quiz-option');
  if (i === q.correct) {
    s.correct++; s.streak++;
    if (buttons[i]) buttons[i].classList.add('correct');
    playSound('correct');
    if (s.streak % 3 === 0) {
      s.timeLeft += 2;
      document.getElementById('lt-time').textContent = s.timeLeft;
      showPointsPopup(2);   // shows "+2" (seconds)
    }
  } else {
    s.wrong++; s.streak = 0;
    if (buttons[i]) buttons[i].classList.add('wrong');
    if (buttons[q.correct]) buttons[q.correct].classList.add('correct');
    playSound('wrong');
  }
  document.getElementById('lt-correct').textContent = s.correct;
  document.getElementById('lt-streak').textContent = s.streak;
  s.index++;
  T.after(() => { if (s.active) renderLightning(); }, i === q.correct ? 350 : 900);
}

function endLightning() {
  const s = lightningState;
  if (!s.active) return;
  s.active = false;
  if (s.timer) T.clear(s.timer);
  document.getElementById('lt-options').innerHTML = '';
  progress.gamesPlayed = (progress.gamesPlayed || 0) + 1;
  saveProgress(progress);
  finishGame({ gameId: 'lightning', title: 'מהיר ומדויק', pct: timedPct('lightning', s.correct),
               summary: `${s.correct} נכונות, ${s.wrong} שגיאות`, score: s.correct, scoreLabel: 'תשובות נכונות',
               replay: startLightning });
}
