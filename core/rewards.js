// ===== CORE / REWARDS — XP, levels and unlocks =====
// Every finished round earns XP (see xpForRound). Total XP decides the level:
//   level L starts at 50·(L−1)·L XP  →  L2 = 100, L3 = 300, L4 = 600, L5 = 1000, L10 = 4500 …
// Levels unlock avatars and colour themes. Anything a child already uses stays usable.

const AVATAR_UNLOCKS = {
  '😎': 1, '🦊': 1, '🐱': 1, '🐶': 1, '🦁': 1, '🐼': 1,
  '🦄': 2, '🌟': 2,
  '🐯': 3,
  '🐸': 4,
  '🚀': 5, '⚡': 5,
  '🦉': 6,
  '🐙': 8,
  '👑': 10,
  '🦖': 12,
  '💎': 15,
  '🏆': 20,
};

const THEME_UNLOCKS = { default: 1, dark: 1, pink: 2, ocean: 3, forest: 5, sunset: 7, space: 10 };

function levelStartXp(level) { return 50 * (level - 1) * level; }

function levelInfo(xp) {
  xp = Math.max(0, Math.floor(xp || 0));
  let level = 1;
  while (xp >= levelStartXp(level + 1)) level++;
  const start = levelStartXp(level);
  const next = levelStartXp(level + 1);
  return { level, xp, start, next, into: xp - start, needed: next - start, pct: Math.round(((xp - start) / (next - start)) * 100) };
}

function currentLevel() {
  return levelInfo(typeof progress !== 'undefined' ? progress.xp : 0).level;
}

function isAvatarUnlocked(avatar, level = currentLevel()) {
  return (AVATAR_UNLOCKS[avatar] || 1) <= level || (typeof profile !== 'undefined' && profile?.avatar === avatar);
}

function isThemeUnlocked(themeId, level = currentLevel()) {
  return (THEME_UNLOCKS[themeId] || 1) <= level || (typeof settings !== 'undefined' && settings?.theme === themeId);
}

// What a level unlocks (for the level-up message)
function unlocksAtLevel(level) {
  const avatars = Object.keys(AVATAR_UNLOCKS).filter(a => AVATAR_UNLOCKS[a] === level);
  const themes = Object.keys(THEME_UNLOCKS).filter(t => THEME_UNLOCKS[t] === level)
    .map(id => (APP_DATA.themes.find(t => t.id === id) || { name: id }).name);
  return { avatars, themes };
}

// XP for one round: 5 per correct answer (or per 10% for games without a count),
// 5 per star, +20 for the first round of the day, doubled for the daily challenge.
function xpForRound({ correct = 0, total = 0, pct = 0, stars = 0, daily = false, firstToday = false }) {
  const base = total ? correct * 5 : Math.round(pct / 10) * 5;
  let xp = base + stars * 5 + (firstToday ? 20 : 0);
  if (daily) xp *= 2;
  return Math.max(0, Math.round(xp));
}

// Adds a round's XP to progress. Returns what happened, for the results card.
function awardRoundXp(round) {
  const today = new Date().toDateString();
  const firstToday = progress.lastXpDate !== today;
  const gained = xpForRound({ ...round, firstToday });
  const before = levelInfo(progress.xp).level;
  progress.xp = (progress.xp || 0) + gained;
  progress.lastXpDate = today;
  const info = levelInfo(progress.xp);
  const leveledUp = info.level > before;
  const unlocked = { avatars: [], themes: [] };
  if (leveledUp) {
    for (let l = before + 1; l <= info.level; l++) {
      const u = unlocksAtLevel(l);
      unlocked.avatars.push(...u.avatars);
      unlocked.themes.push(...u.themes);
    }
  }
  return { gained, firstToday, info, leveledUp, unlocked };
}

// One-time migration for children who played before XP existed:
// start them at a fair level based on the stars they already earned.
function migrateProgressSchema(p) {
  if (!p) return p;
  if ((p.schema || 1) < 2) {
    if (typeof p.xp !== 'number') p.xp = (p.stars || 0) * 10;
    p.schema = 2;
  }
  return p;
}
