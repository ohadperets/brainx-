// ===== CORE / GAME KIT — one way to end a game =====
// Every game calls finishGame({...}) when a round ends. It:
//   1. turns the result into 0–3 stars (same rule everywhere),
//   2. adds those stars to the child's total, saves progress, checks achievements/streak,
//   3. saves the personal best + global record (each game keeps its own score units, so
//      existing high scores and Firebase records stay comparable),
//   4. plays the star/win sounds + confetti,
//   5. shows the shared results card (overlay) with Play again / Home / Details.
// The game's own detailed results (e.g. the list of mistakes) stay underneath the card.

// Accuracy → stars. Used by every game.
function starsFor(pct) {
  if (pct >= 90) return 3;
  if (pct >= 75) return 2;
  if (pct >= 50) return 1;
  return 0;
}

// Target number of correct answers for timed games, per grade (what counts as 100%).
const TIMED_TARGETS = {
  race: { 3: 8, 6: 10 },        // 30 seconds
  'speed-math': { 3: 14, 6: 20 }, // 60 seconds
};
function timedPct(kind, correct) {
  const grade = typeof normalizeGrade === 'function' ? normalizeGrade(profile?.grade) : 6;
  const target = (TIMED_TARGETS[kind] || {})[grade] || 10;
  return Math.min(100, Math.round((correct / target) * 100));
}

const RESULT_TITLES = [
  { emoji: '💪', title: 'כמעט! נסו שוב' },
  { emoji: '👍', title: 'יפה מאוד!' },
  { emoji: '🌟', title: 'כל הכבוד!' },
  { emoji: '🏆', title: 'מושלם!' },
];

let lastFinishedGame = null;

/**
 * @param {object} o
 * @param {string}  [o.gameId]   high-score / record id (omit for games without records)
 * @param {string}  [o.title]    game name shown on the card
 * @param {number}  [o.correct]  correct answers
 * @param {number}  [o.total]    questions in the round
 * @param {number}  [o.pct]      accuracy override (timed games, memory)
 * @param {number}  [o.stars]    stars override (0–3)
 * @param {number}  [o.score]    value saved as high score / record (game's own units)
 * @param {string}  [o.scoreLabel] e.g. 'נקודות', 'מהלכים'
 * @param {string}  [o.summary]  one line under the title (e.g. "המילה: dog")
 * @param {Function}[o.replay]   starts a new round of the same game
 */
function finishGame(o = {}) {
  const total = o.total || 0;
  const correct = o.correct || 0;
  const pct = o.pct != null ? Math.round(o.pct) : (total ? Math.round((correct / total) * 100) : 0);
  const stars = Math.max(0, Math.min(3, o.stars != null ? o.stars : starsFor(pct)));

  let best = null;
  let isRecord = false;
  if (typeof currentUserId !== 'undefined' && currentUserId) {
    progress.stars = (progress.stars || 0) + stars;
    progress.lastResult = { gameId: o.gameId || null, stars, pct, at: Date.now() };
    saveProgress(progress);
    try { checkAchievements(); } catch (e) { /* achievements are optional */ }
    try { updateStreak(); } catch (e) { /* streak is optional */ }
    if (o.gameId && o.score != null) {
      best = (getHighScores()[o.gameId] || {}).score ?? null;
      isRecord = saveHighScore(o.gameId, o.score);
    }
  }

  lastFinishedGame = o;
  showResultsCard({ ...o, pct, stars, best, isRecord, correct, total });

  // sounds: one sparkle per star, then a win jingle + confetti for 2–3 stars
  for (let i = 0; i < stars; i++) T.after(() => playSound('star'), 350 + i * 260);
  if (stars >= 2) {
    T.after(() => playSound('win'), 350 + stars * 260);
    if (!prefersReducedMotion()) launchConfetti();
  }
  return { pct, stars, isRecord };
}

function prefersReducedMotion() {
  try { return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches; }
  catch (e) { return false; }
}

function escapeText(str) {
  return String(str ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function showResultsCard(r) {
  closeResultsCard();
  const t = RESULT_TITLES[r.stars];
  const starsHtml = [0, 1, 2].map(i =>
    `<span class="rc-star ${i < r.stars ? 'on' : ''}" style="animation-delay:${350 + i * 260}ms">★</span>`).join('');
  const accuracy = r.total ? `${r.correct} מתוך ${r.total} · ${r.pct}%` : `${r.pct}%`;
  let bestLine = '';
  if (r.isRecord) bestLine = '<div class="rc-best rc-best-new">🏆 שיא אישי חדש!</div>';
  else if (r.best != null) bestLine = `<div class="rc-best">השיא שלך: ${escapeText(r.best)}</div>`;

  const overlay = document.createElement('div');
  overlay.id = 'results-overlay';
  overlay.className = 'results-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-labelledby', 'rc-title');
  overlay.innerHTML = `
    <div class="results-card">
      ${r.title ? `<div class="rc-game">${escapeText(r.title)}</div>` : ''}
      <div class="rc-emoji">${t.emoji}</div>
      <h2 id="rc-title" class="rc-title">${t.title}</h2>
      ${r.summary ? `<div class="rc-summary">${escapeText(r.summary)}</div>` : ''}
      <div class="rc-stars" aria-label="${r.stars} מתוך 3 כוכבים">${starsHtml}</div>
      <div class="rc-stats">
        <div class="rc-stat"><div class="rc-stat-value" dir="ltr">${escapeText(accuracy)}</div><div class="rc-stat-label">דיוק</div></div>
        ${r.score != null ? `<div class="rc-stat"><div class="rc-stat-value">${escapeText(r.score)}</div><div class="rc-stat-label">${escapeText(r.scoreLabel || 'ניקוד')}</div></div>` : ''}
        <div class="rc-stat"><div class="rc-stat-value">+${r.stars} ⭐</div><div class="rc-stat-label">כוכבים</div></div>
      </div>
      ${bestLine}
      <div class="rc-actions">
        ${typeof r.replay === 'function' ? '<button class="results-btn results-btn-primary" data-action="replay">🔄 שחק שוב</button>' : ''}
        <button class="results-btn" data-action="close">📋 לפרטים</button>
        <button class="results-btn" data-action="home">🏠 לבית</button>
      </div>
    </div>`;
  overlay.addEventListener('click', e => {
    const action = e.target.closest && e.target.closest('[data-action]')?.dataset.action;
    if (!action) return;
    closeResultsCard();
    if (action === 'replay' && typeof r.replay === 'function') r.replay();
    if (action === 'home') navigate('home');
  });
  document.body.appendChild(overlay);
  const primary = overlay.querySelector('[data-action="replay"]') || overlay.querySelector('[data-action="close"]');
  if (primary && primary.focus) T.after(() => primary.focus(), 50);
}

function closeResultsCard() {
  const el = document.getElementById('results-overlay');
  if (el && el.remove) el.remove();
}
