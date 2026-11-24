// ===== CORE / CLOUD — what BrainX stores in Firestore, in one place =====
// Pure functions (no Firebase imports) so the browser app AND the Firestore emulator tests
// (tests/firestore-rules.test.mjs) build exactly the same documents.
//
// Data model (v2):
//   devices/{uid}/profiles/{profileId}   private: only that anonymous device (uid) and the admin
//                                        no real name — a generated nickname ("tag") instead
//   records/{gameId}_g{3|6}              public high score: tag + avatar + score, owner uid
//   admins/{uid}                         created by hand in the Firebase console (admin allowlist)
// Legacy (pre-v71, read-only for the admin during the transition): users/*, progress/*

const BrainXCloud = (() => {
  // Only these hosts may read/write the PRODUCTION database. Staging preview channels
  // (brainx-a65b8--staging-xxxx.web.app), GitHub Pages, localhost etc. run without cloud
  // features unless a separate staging Firebase project is configured.
  const PRODUCTION_HOSTS = ['brainxiq.com', 'www.brainxiq.com', 'brainx-a65b8.web.app', 'brainx-a65b8.firebaseapp.com'];

  function isProductionHost(hostname) {
    return PRODUCTION_HOSTS.includes(String(hostname || '').toLowerCase());
  }

  // The Android app (Capacitor) serves the bundled files from https://localhost.
  // Only a real native app counts — a plain localhost browser tab does not.
  function isNativeApp(win = (typeof window !== 'undefined' ? window : null)) {
    try { return !!(win && win.Capacitor && win.Capacitor.isNativePlatform && win.Capacitor.isNativePlatform()); }
    catch (e) { return false; }
  }

  // Cloud features (production database) run on the production website and in the store app.
  function cloudAllowed(hostname, win) {
    return isProductionHost(hostname) || isNativeApp(win);
  }

  // Generated public nickname: animal/thing from the avatar + a number, e.g. "שועל 37".
  const AVATAR_WORDS = {
    '😎': 'מגניב', '🦊': 'שועל', '🐱': 'חתול', '🐶': 'כלב', '🦁': 'אריה', '🐼': 'פנדה',
    '🦄': 'חד־קרן', '🌟': 'כוכב', '🐯': 'נמר', '🐸': 'צפרדע', '🚀': 'טיל', '⚡': 'ברק',
    '🦉': 'ינשוף', '🐙': 'תמנון', '👑': 'כתר', '🦖': 'דינו', '💎': 'יהלום', '🏆': 'גביע',
  };
  function makeTag(avatar, random = Math.random) {
    const word = AVATAR_WORDS[avatar] || 'שחקן';
    return `${word} ${10 + Math.floor(random() * 90)}`;
  }

  const clampInt = (n, max = 10000000) => Math.max(0, Math.min(max, Math.floor(Number(n) || 0)));
  const grade36 = g => (Number(g) === 3 || Number(g) === 2 ? 3 : 6);

  // Private per-profile document. NOTE: no name field on purpose.
  function buildProfileDoc({ user, progress, serverTimestamp }) {
    const p = progress || {};
    return {
      tag: String(user.publicTag || makeTag(user.avatar)).slice(0, 24),
      avatar: String(user.avatar || '😎').slice(0, 16),
      grade: grade36(user.grade),
      stars: clampInt(p.stars),
      streak: clampInt(p.streak),
      xp: clampInt(p.xp),
      gamesPlayed: clampInt(p.gamesPlayed),
      achievements: (Array.isArray(p.unlockedAchievements) ? p.unlockedAchievements : [])
        .filter(a => typeof a === 'string' && a.length <= 40).slice(0, 200),
      quizAttempts: {
        hebrew: clampInt(p.hebrew?.quizAttempts),
        english: clampInt(p.english?.quizAttempts),
        math: clampInt(p.math?.quizAttempts),
      },
      schema: 2,
      updatedAt: serverTimestamp(),
    };
  }

  function recordDocId(gameId, grade) {
    return `${gameId}_g${grade36(grade)}`;
  }

  // Public high-score document.
  function buildRecordDoc({ score, tag, avatar, uid, grade, serverTimestamp }) {
    return {
      score: Math.round(Number(score) || 0),
      tag: String(tag || 'שחקן').slice(0, 24),
      avatar: String(avatar || '😎').slice(0, 16),
      ownerUid: String(uid),
      grade: grade36(grade),
      date: serverTimestamp(),
    };
  }

  // How a record holder is shown: generated tag; legacy records fall back to a first initial.
  function displayName(record) {
    if (record && record.tag) return String(record.tag);
    const first = String(record?.userName || '').trim().charAt(0);
    return first ? `${first}.` : 'אנונימי';
  }

  return { PRODUCTION_HOSTS, isProductionHost, isNativeApp, cloudAllowed, makeTag, buildProfileDoc, recordDocId, buildRecordDoc, displayName, AVATAR_WORDS };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = BrainXCloud;
