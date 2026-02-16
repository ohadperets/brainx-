// ===== APP.JS — Peret School Application Logic (Full Featured) =====

// ===== STATE =====
let currentScreen = 'home';
let currentSubject = null;
let screenHistory = [];
let quizState = {};
let balloonPopState = {};
let hangmanState = {};
let memoryState = {};
let raceState = {};
let dictationState = {};
let dailyChallengeState = {};
let ttsEnabled = false;
let ttsSpeed = 1;
let currentUserId = null;

// ===== MULTI-USER MANAGEMENT =====
function generateUserId() {
  return 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

function getAllUsers() {
  try {
    const data = localStorage.getItem('brainx-users');
    return data ? JSON.parse(data) : [];
  } catch { return []; }
}

function saveAllUsers(users) {
  try { localStorage.setItem('brainx-users', JSON.stringify(users)); } catch {}
}

function getCurrentUserId() {
  try {
    return localStorage.getItem('brainx-currentUser');
  } catch { return null; }
}

function setCurrentUserId(userId) {
  try { localStorage.setItem('brainx-currentUser', userId); } catch {}
  currentUserId = userId;
}

function getUserById(userId) {
  const users = getAllUsers();
  return users.find(u => u.id === userId) || null;
}

function createUser(name, avatar, grade) {
  const users = getAllUsers();
  const newUser = {
    id: generateUserId(),
    name: name || 'תלמיד',
    avatar: avatar || '😎',
    grade: grade || 5,
    createdAt: Date.now()
  };
  users.push(newUser);
  saveAllUsers(users);
  return newUser;
}

function updateUser(userId, updates) {
  const users = getAllUsers();
  const index = users.findIndex(u => u.id === userId);
  if (index !== -1) {
    users[index] = { ...users[index], ...updates };
    saveAllUsers(users);
    return users[index];
  }
  return null;
}

function deleteUser(userId) {
  let users = getAllUsers();
  users = users.filter(u => u.id !== userId);
  saveAllUsers(users);
  // Clean up user-specific data
  try {
    localStorage.removeItem('brainx-progress-' + userId);
    localStorage.removeItem('brainx-settings-' + userId);
  } catch {}
  // If deleted user is current user, clear current user
  if (getCurrentUserId() === userId) {
    localStorage.removeItem('brainx-currentUser');
    currentUserId = null;
  }
}

function showUserSelectScreen() {
  const screen = document.getElementById('user-select-screen');
  const userList = document.getElementById('user-list');
  const users = getAllUsers();
  
  if (users.length === 0) {
    userList.innerHTML = '<div class="no-users-message">אין משתמשים עדיין. צור משתמש חדש!</div>';
  } else {
    userList.innerHTML = users.map(user => {
      const userProgress = loadProgressForUser(user.id);
      const gradeText = user.grade === 2 ? "כיתה ב׳" : "כיתה ה׳";
      return `
        <div class="user-item" onclick="selectUser('${user.id}')">
          <div class="user-item-avatar">${user.avatar}</div>
          <div class="user-item-info">
            <div class="user-item-name">${user.name}</div>
            <div class="user-item-stats">⭐ ${userProgress.stars} כוכבים | 🔥 ${userProgress.streak} ימים</div>
            <span class="user-item-grade">${gradeText}</span>
          </div>
          <button class="user-item-delete" onclick="event.stopPropagation(); confirmDeleteUser('${user.id}', '${user.name}')" title="מחק משתמש">🗑️</button>
        </div>
      `;
    }).join('');
  }
  
  screen.classList.remove('hidden');
}

function hideUserSelectScreen() {
  document.getElementById('user-select-screen').classList.add('hidden');
}

function selectUser(userId) {
  setCurrentUserId(userId);
  const user = getUserById(userId);
  if (user) {
    profile = { name: user.name, avatar: user.avatar, grade: user.grade || 5 };
    progress = loadProgress();
    settings = loadSettings();
    applyTheme(settings.theme);
    ttsEnabled = settings.ttsEnabled;
    ttsSpeed = settings.ttsSpeed;
    updateStreak();
    updateUIWithProfile();
    updateHomeProgress();
    updateHomeBadges();
    updateDailyChallengeCard();
    hideUserSelectScreen();
  }
}

function showNewUserForm() {
  hideUserSelectScreen();
  showProfileSetup(true); // true = new user mode
}

function showUserSwitch() {
  showUserSelectScreen();
}

function confirmDeleteUser(userId, userName) {
  if (confirm(`האם למחוק את המשתמש "${userName}"? כל ההתקדמות תימחק!`)) {
    deleteUser(userId);
    showUserSelectScreen(); // Refresh the list
  }
}

// ===== STORAGE =====
function getDefaultProgress() {
  return {
    stars: 0,
    streak: 0,
    lastActiveDate: null,
    gamesPlayed: 0,
    dictationsCompleted: 0,
    unlockedAchievements: [],
    dailyChallengeDate: null,
    dailyChallengeScore: null,
    hebrew: { quizBest: 0, quizAttempts: 0, flashcardsCompleted: 0, lessonsRead: [] },
    english: { quizBest: 0, quizAttempts: 0, flashcardsCompleted: 0, lessonsRead: [] },
    math: { quizBest: 0, quizAttempts: 0, flashcardsCompleted: 0, lessonsRead: [] }
  };
}

// Load progress for a specific user (for user list display)
function loadProgressForUser(userId) {
  try {
    const data = localStorage.getItem('brainx-progress-' + userId);
    if (data) {
      const p = JSON.parse(data);
      const def = getDefaultProgress();
      return { ...def, ...p,
        hebrew: { ...def.hebrew, ...p.hebrew },
        english: { ...def.english, ...p.english },
        math: { ...def.math, ...p.math }
      };
    }
    return getDefaultProgress();
  } catch {
    return getDefaultProgress();
  }
}

function loadProgress() {
  if (!currentUserId) return getDefaultProgress();
  return loadProgressForUser(currentUserId);
}

function saveProgress(p) {
  if (!currentUserId) return;
  try { localStorage.setItem('brainx-progress-' + currentUserId, JSON.stringify(p)); } catch {}
}

function loadProfile() {
  if (!currentUserId) return null;
  const user = getUserById(currentUserId);
  return user ? { name: user.name, avatar: user.avatar, grade: user.grade || 5 } : null;
}

function saveProfileData(prof) {
  if (!currentUserId) return;
  // Update user in users array
  updateUser(currentUserId, { name: prof.name, avatar: prof.avatar });
}

// Get content data based on user's grade
function getData() {
  const grade = profile?.grade || 5;
  return grade === 2 ? APP_DATA_GRADE2 : APP_DATA;
}

function loadSettingsForUser(userId) {
  try {
    const data = localStorage.getItem('brainx-settings-' + userId);
    return data ? JSON.parse(data) : { theme: 'default', ttsEnabled: false, ttsSpeed: 1 };
  } catch { return { theme: 'default', ttsEnabled: false, ttsSpeed: 1 }; }
}

function loadSettings() {
  if (!currentUserId) return { theme: 'default', ttsEnabled: false, ttsSpeed: 1 };
  return loadSettingsForUser(currentUserId);
}

function saveSettings(s) {
  if (!currentUserId) return;
  try { localStorage.setItem('brainx-settings-' + currentUserId, JSON.stringify(s)); } catch {}
}

// Initialize with default values, will be updated when user is selected
let progress = getDefaultProgress();
let profile = null;
let settings = { theme: 'default', ttsEnabled: false, ttsSpeed: 1 };

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
  // Check for existing user session
  const savedUserId = getCurrentUserId();
  const users = getAllUsers();
  
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      document.getElementById('app').classList.remove('hidden');
      
      // User flow: check if there's a remembered user
      if (savedUserId && getUserById(savedUserId)) {
        // User exists and was logged in - restore session
        selectUser(savedUserId);
      } else if (users.length > 0) {
        // There are users but none remembered - show user select
        showUserSelectScreen();
      } else {
        // No users at all - show profile setup for new user
        showProfileSetup(true);
      }
    }, 500);
  }, 2000);

  const tips = APP_DATA.tips;
  document.getElementById('daily-tip').textContent = tips[Math.floor(Math.random() * tips.length)];

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});

// ===== STREAK TRACKING =====
function updateStreak() {
  const today = new Date().toDateString();
  if (!progress.lastActiveDate) {
    progress.streak = 1;
    progress.lastActiveDate = today;
    saveProgress(progress);
    return;
  }
  if (progress.lastActiveDate === today) return;

  const last = new Date(progress.lastActiveDate);
  const now = new Date();
  const diffDays = Math.floor((now - last) / (1000 * 60 * 60 * 24));

  if (diffDays === 1) {
    progress.streak = (progress.streak || 0) + 1;
  } else if (diffDays > 1) {
    progress.streak = 1;
  }
  progress.lastActiveDate = today;
  saveProgress(progress);
}

// ===== PROFILE SYSTEM =====
let isCreatingNewUser = false;
let selectedGrade = 2;

function showProfileSetup(newUser = false) {
  isCreatingNewUser = newUser;
  selectedGrade = 2; // Default to grade 2
  const modal = document.getElementById('profile-setup');
  modal.classList.remove('hidden');
  
  // Update modal header and grade selector visibility based on mode
  const header = modal.querySelector('.modal-header');
  const gradeSelector = document.getElementById('grade-selector');
  
  if (newUser) {
    header.textContent = '👋 ברוכים הבאים!';
    if (gradeSelector) gradeSelector.style.display = 'flex';
  } else {
    header.textContent = '✏️ עריכת פרופיל';
    if (gradeSelector) gradeSelector.style.display = 'none';
  }
  
  // Reset grade selector
  document.querySelectorAll('.grade-option').forEach(g => {
    g.classList.toggle('selected', parseInt(g.dataset.grade) === selectedGrade);
  });

  const grid = document.getElementById('avatar-grid');
  grid.innerHTML = APP_DATA.avatars.map((a, i) =>
    `<button class="avatar-option ${i === 0 ? 'selected' : ''}" onclick="selectAvatar(this, '${a}')" data-avatar="${a}">${a}</button>`
  ).join('');
}

let selectedAvatar = '😎';

function selectGrade(el, grade) {
  document.querySelectorAll('.grade-option').forEach(g => g.classList.remove('selected'));
  el.classList.add('selected');
  selectedGrade = grade;
}

function selectAvatar(el, avatar) {
  document.querySelectorAll('.avatar-option').forEach(a => a.classList.remove('selected'));
  el.classList.add('selected');
  selectedAvatar = avatar;
}

function saveProfile() {
  const name = document.getElementById('profile-name-input').value.trim() || 'תלמיד';
  
  if (isCreatingNewUser) {
    // Create new user with grade
    const newUser = createUser(name, selectedAvatar, selectedGrade);
    selectUser(newUser.id);
  } else {
    // Update existing user
    profile = { name, avatar: selectedAvatar };
    saveProfileData(profile);
    updateUIWithProfile();
  }
  
  document.getElementById('profile-setup').classList.add('hidden');
  document.getElementById('profile-name-input').value = '';
  isCreatingNewUser = false;
}

function editProfile() {
  document.getElementById('profile-name-input').value = profile ? profile.name : '';
  if (profile) selectedAvatar = profile.avatar;
  showProfileSetup(false);
  setTimeout(() => {
    document.querySelectorAll('.avatar-option').forEach(a => {
      a.classList.toggle('selected', a.dataset.avatar === selectedAvatar);
    });
  }, 50);
}

function updateUIWithProfile() {
  if (!profile) return;
  document.getElementById('home-avatar').textContent = profile.avatar;
  document.getElementById('home-greeting').textContent = `שלום ${profile.name}!`;
  document.getElementById('streak-count').textContent = progress.streak || 0;
  const navIcon = document.getElementById('nav-profile-icon');
  if (navIcon) navIcon.textContent = profile.avatar;
}

// ===== THEME SYSTEM =====
function applyTheme(themeId) {
  document.body.className = document.body.className.replace(/theme-\S+/g, '').trim();
  const theme = APP_DATA.themes.find(t => t.id === themeId);
  if (theme && theme.class) {
    document.body.classList.add(theme.class);
  }
  const meta = document.getElementById('meta-theme');
  if (meta && theme) meta.content = theme.color;
  settings.theme = themeId;
  saveSettings(settings);
}

function renderThemeGrid() {
  const grid = document.getElementById('theme-grid');
  if (!grid) return;
  grid.innerHTML = APP_DATA.themes.map(t => `
    <button class="theme-option ${settings.theme === t.id ? 'selected' : ''}"
            onclick="applyTheme('${t.id}'); renderThemeGrid();"
            style="background: ${t.color}; color: white;">
      ${t.name}${settings.theme === t.id ? ' ✓' : ''}
    </button>
  `).join('');
}

// ===== TEXT-TO-SPEECH =====
function speak(text, lang) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang || 'he-IL';
  utter.rate = ttsSpeed;
  window.speechSynthesis.speak(utter);
}

function toggleTTS() {
  ttsEnabled = !ttsEnabled;
  settings.ttsEnabled = ttsEnabled;
  saveSettings(settings);
  const btn = document.getElementById('btn-tts');
  btn.querySelector('span').textContent = ttsEnabled ? '🔊' : '🔇';
}

function toggleTTSSetting() {
  ttsEnabled = document.getElementById('tts-toggle').checked;
  settings.ttsEnabled = ttsEnabled;
  saveSettings(settings);
  const btn = document.getElementById('btn-tts');
  if (btn) btn.querySelector('span').textContent = ttsEnabled ? '🔊' : '🔇';
}

function updateTTSSpeed() {
  ttsSpeed = parseFloat(document.getElementById('tts-speed').value);
  settings.ttsSpeed = ttsSpeed;
  saveSettings(settings);
}

function readLessonAloud() {
  const content = document.getElementById('lesson-content').textContent;
  const lang = currentSubject === 'english' ? 'en-US' : 'he-IL';
  speak(content, lang);
}

// ===== NAVIGATION =====
function goHome() {
  navigate('home');
}

function navigate(screen, subject) {
  if (currentScreen !== screen || (subject !== undefined && subject !== currentSubject)) {
    screenHistory.push({ screen: currentScreen, subject: currentSubject });
  }

  currentScreen = screen;
  if (subject !== undefined) currentSubject = subject;

  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));

  const headerTitle = document.getElementById('header-title');
  const btnBack = document.getElementById('btn-back');

  if (screen === 'home') {
    btnBack.classList.add('hidden');
    screenHistory = [];
  } else {
    btnBack.classList.remove('hidden');
  }

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  switch (screen) {
    case 'home':
      document.getElementById('screen-home').classList.add('active');
      headerTitle.textContent = 'BrainX';
      document.getElementById('nav-home').classList.add('active');
      updateHomeProgress();
      updateHomeBadges();
      updateDailyChallengeCard();
      updateUIWithProfile();
      break;

    case 'subject':
      document.getElementById('screen-subject').classList.add('active');
      headerTitle.textContent = getData()[currentSubject].name;
      { const navEl = document.getElementById(`nav-${currentSubject}`);
        if (navEl) navEl.classList.add('active'); }
      updateSubjectFeatures();
      break;

    case 'lessons':
      document.getElementById('screen-lessons').classList.add('active');
      headerTitle.textContent = '📚 שיעורים';
      renderLessons();
      break;

    case 'lesson-detail':
      document.getElementById('screen-lesson-detail').classList.add('active');
      headerTitle.textContent = '📖 שיעור';
      break;

    case 'quiz':
      document.getElementById('screen-quiz').classList.add('active');
      headerTitle.textContent = '❓ חידון';
      startQuiz();
      break;

    case 'balloon-pop':
      document.getElementById('screen-balloon-pop').classList.add('active');
      headerTitle.textContent = '🎈 פיצוץ בלונים';
      startBalloonPop();
      break;

    case 'games':
      document.getElementById('screen-games').classList.add('active');
      headerTitle.textContent = '🎮 משחקים';
      break;

    case 'game-hangman':
      document.getElementById('screen-game-hangman').classList.add('active');
      headerTitle.textContent = '🎯 תלייה';
      startHangman();
      break;

    case 'game-memory':
      document.getElementById('screen-game-memory').classList.add('active');
      headerTitle.textContent = '🧠 זיכרון';
      startMemory();
      break;

    case 'game-math-race':
      document.getElementById('screen-game-math-race').classList.add('active');
      headerTitle.textContent = '🏎️ מרוץ חשבון';
      initMathRace();
      break;

    case 'daily-challenge':
      document.getElementById('screen-daily-challenge').classList.add('active');
      headerTitle.textContent = 'אתגר יומי';
      startDailyChallenge();
      break;

    case 'dictation':
      document.getElementById('screen-dictation').classList.add('active');
      headerTitle.textContent = 'הכתבה שבועית';
      showDictationMenu();
      break;

    case 'dictation-typing':
      document.getElementById('screen-dictation-typing').classList.add('active');
      headerTitle.textContent = 'הכתבה';
      startDictation();
      break;

    case 'word-match':
      document.getElementById('screen-word-match').classList.add('active');
      headerTitle.textContent = 'חבר מילים';
      startWordMatch();
      break;

    case 'achievements':
      document.getElementById('screen-achievements').classList.add('active');
      headerTitle.textContent = 'הישגים';
      renderAchievements();
      break;

    case 'profile':
      document.getElementById('screen-profile').classList.add('active');
      headerTitle.textContent = 'הפרופיל שלי';
      document.getElementById('nav-profile').classList.add('active');
      renderProfileScreen();
      break;

    case 'progress':
      document.getElementById('screen-progress').classList.add('active');
      headerTitle.textContent = 'ההתקדמות שלי';
      renderProgress();
      break;

    case 'settings':
      document.getElementById('screen-settings').classList.add('active');
      headerTitle.textContent = 'הגדרות';
      renderSettings();
      break;

    case 'ai-generator':
      document.getElementById('screen-ai-generator').classList.add('active');
      headerTitle.textContent = '🤖 יוצר AI';
      renderAIGenerator();
      break;

    case 'ai-play':
      document.getElementById('screen-ai-play').classList.add('active');
      headerTitle.textContent = '🤖 ' + (aiCurrentTopic?.name || 'AI');
      renderAIPlay();
      break;

    case 'admin-login':
      document.getElementById('screen-admin-login').classList.add('active');
      headerTitle.textContent = 'כניסת מנהל';
      break;

    case 'admin-dashboard':
      document.getElementById('screen-admin-dashboard').classList.add('active');
      headerTitle.textContent = 'לוח ניהול';
      break;

    case 'admin-dictation':
      document.getElementById('screen-admin-dictation').classList.add('active');
      headerTitle.textContent = 'ניהול הכתבות';
      loadWeekWords();
      break;

    case 'admin-lessons':
      document.getElementById('screen-admin-lessons').classList.add('active');
      headerTitle.textContent = 'ניהול שיעורים';
      break;

    case 'admin-quiz':
      document.getElementById('screen-admin-quiz').classList.add('active');
      headerTitle.textContent = 'ניהול חידונים';
      break;
  }

  document.getElementById('main-content').scrollTop = 0;
}

function goBack() {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  if (raceState.timer) { clearInterval(raceState.timer); raceState.timer = null; }

  if (screenHistory.length > 0) {
    const prev = screenHistory.pop();
    currentScreen = prev.screen;
    currentSubject = prev.subject || currentSubject;
    const tempHistory = [...screenHistory];
    navigate(prev.screen, prev.subject || currentSubject);
    screenHistory = tempHistory;
  } else {
    navigate('home');
  }
}

// ===== SUBJECT FEATURES =====
function updateSubjectFeatures() {
  const grid = document.getElementById('subject-features');
  let html = `
    <button class="feature-card lessons-card" onclick="navigate('lessons')">
      <div class="feature-icon">📝</div>
      <div class="feature-name">שיעורים</div>
      <div class="feature-desc">חומר לימוד</div>
    </button>
    <button class="feature-card quiz-card" onclick="navigate('quiz')">
      <div class="feature-icon">❓</div>
      <div class="feature-name">חידון</div>
      <div class="feature-desc">בחן את עצמך</div>
    </button>
    <button class="feature-card balloon-card" onclick="navigate('balloon-pop')">
      <div class="feature-icon">🎈</div>
      <div class="feature-name">פיצוץ בלונים</div>
      <div class="feature-desc">לחץ על הבלון הנכון!</div>
    </button>
    <button class="feature-card games-card" onclick="navigate('games')">
      <div class="feature-icon">🎮</div>
      <div class="feature-name">משחקים</div>
      <div class="feature-desc">למד בכיף!</div>
    </button>`;

  if (currentSubject === 'english') {
    html += `
    <button class="feature-card" style="background:linear-gradient(135deg,#fff3e0,#ffe0b2)" onclick="navigate('dictation')">
      <div class="feature-icon">📝</div>
      <div class="feature-name">הכתבה שבועית</div>
      <div class="feature-desc">הכתבה וחיבור מילים</div>
    </button>`;
  }

  grid.innerHTML = html;
}

// ===== HOME PROGRESS =====
function updateHomeProgress() {
  ['hebrew', 'english', 'math'].forEach(subj => {
    const el = document.getElementById(`progress-${subj}`);
    if (!el) return;
    const p = progress[subj];
    const totalLessons = APP_DATA[subj].lessons.length;
    const readLessons = p.lessonsRead.length;
    if (readLessons > 0 || p.quizAttempts > 0) {
      el.textContent = `⭐ ${p.quizBest}% | 📝 ${readLessons}/${totalLessons}`;
    } else {
      el.textContent = '✨ התחל ללמוד!';
    }
  });
}

function updateHomeBadges() {
  const row = document.getElementById('home-badges');
  if (!row) return;
  const unlocked = progress.unlockedAchievements || [];
  if (unlocked.length === 0) {
    row.innerHTML = '<span style="color:#999;font-size:14px;">עדיין אין הישגים — המשך ללמוד!</span>';
    return;
  }
  const badges = APP_DATA.achievements.filter(a => unlocked.includes(a.id));
  row.innerHTML = badges.slice(0, 8).map(a => `<span class="badge-mini" title="${a.name}">${a.icon}</span>`).join('');
  if (badges.length > 8) row.innerHTML += `<span class="badge-mini">+${badges.length - 8}</span>`;
}

function updateDailyChallengeCard() {
  const sub = document.getElementById('dc-subtitle');
  if (!sub) return;
  const today = new Date().toDateString();
  if (progress.dailyChallengeDate === today && progress.dailyChallengeScore !== null) {
    sub.textContent = `✅ סיימת היום! ציון: ${progress.dailyChallengeScore}%`;
  } else {
    sub.textContent = 'לחץ כדי לשחק!';
  }
}

// ===== LESSONS =====
function renderLessons() {
  const container = document.getElementById('lessons-list');
  const lessons = getData()[currentSubject].lessons;
  const readList = progress[currentSubject].lessonsRead;

  container.innerHTML = lessons.map((lesson, i) => {
    const isRead = readList.includes(lesson.id);
    return `
      <button class="lesson-item" onclick="openLesson(${i})">
        <div class="lesson-num" style="${isRead ? 'background:#48bb78' : ''}">${isRead ? '✓' : i + 1}</div>
        <div>
          <div class="lesson-title">${lesson.title}</div>
          <div class="lesson-preview">${lesson.preview}</div>
        </div>
      </button>`;
  }).join('');
}

function openLesson(index) {
  const lesson = getData()[currentSubject].lessons[index];
  document.getElementById('lesson-content').innerHTML = lesson.content;

  if (!progress[currentSubject].lessonsRead.includes(lesson.id)) {
    progress[currentSubject].lessonsRead.push(lesson.id);
    progress.stars += 2;
    saveProgress(progress);
    checkAchievements();
  }

  navigate('lesson-detail');
  if (ttsEnabled) setTimeout(() => readLessonAloud(), 500);
}

// ===== QUIZ =====
function startQuiz() {
  const questions = [...getData()[currentSubject].quiz];
  shuffle(questions);

  quizState = { questions, current: 0, score: 0, answered: false };

  document.getElementById('quiz-container').classList.remove('hidden');
  document.getElementById('quiz-results').classList.add('hidden');
  renderQuestion();
}

function renderQuestion() {
  const q = quizState.questions[quizState.current];
  const total = quizState.questions.length;
  const current = quizState.current + 1;

  document.getElementById('quiz-progress-fill').style.width = `${(current / total) * 100}%`;
  document.getElementById('quiz-counter').textContent = `שאלה ${current} מתוך ${total}`;
  document.getElementById('quiz-question').textContent = q.question;

  document.getElementById('quiz-options').innerHTML = q.options.map((opt, i) =>
    `<button class="quiz-option" onclick="selectAnswer(${i})">${opt}</button>`
  ).join('');

  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('quiz-next').classList.add('hidden');
  quizState.answered = false;

  if (ttsEnabled) {
    const lang = currentSubject === 'english' ? 'en-US' : 'he-IL';
    speak(q.question, lang);
  }
}

function selectAnswer(index) {
  if (quizState.answered) return;
  quizState.answered = true;

  const q = quizState.questions[quizState.current];
  const options = document.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quiz-feedback');

  options.forEach(o => o.classList.add('disabled'));
  options[q.correct].classList.add('correct');

  if (index === q.correct) {
    quizState.score++;
    feedback.textContent = '🎉 נכון! כל הכבוד!';
    feedback.className = 'quiz-feedback correct';
  } else {
    options[index].classList.add('wrong');
    feedback.textContent = '😕 לא נכון. התשובה הנכונה מסומנת בירוק.';
    feedback.className = 'quiz-feedback wrong';
  }

  feedback.classList.remove('hidden');
  document.getElementById('quiz-next').classList.remove('hidden');

  if (quizState.current === quizState.questions.length - 1) {
    document.getElementById('quiz-next').textContent = 'סיום ←';
  } else {
    document.getElementById('quiz-next').textContent = 'הבא →';
  }
}

function nextQuestion() {
  quizState.current++;
  if (quizState.current >= quizState.questions.length) {
    showQuizResults();
  } else {
    renderQuestion();
  }
}

function showQuizResults() {
  document.getElementById('quiz-container').classList.add('hidden');
  document.getElementById('quiz-results').classList.remove('hidden');

  const score = quizState.score;
  const total = quizState.questions.length;
  const percent = Math.round((score / total) * 100);

  progress[currentSubject].quizAttempts++;
  if (percent > progress[currentSubject].quizBest) {
    progress[currentSubject].quizBest = percent;
  }
  progress.stars += score;
  saveProgress(progress);
  checkAchievements();

  let emoji, title;
  if (percent >= 90) { emoji = '🏆'; title = 'מדהים! מצוין!'; }
  else if (percent >= 70) { emoji = '🌟'; title = 'כל הכבוד! ממש טוב!'; }
  else if (percent >= 50) { emoji = '👍'; title = 'לא רע! המשך להתאמן!'; }
  else { emoji = '💪'; title = 'נסה שוב, אתה יכול!'; }

  document.getElementById('results-emoji').textContent = emoji;
  document.getElementById('results-title').textContent = title;
  document.getElementById('results-score').textContent = `${percent}%`;
  document.getElementById('results-details').innerHTML = `ענית נכון על ${score} מתוך ${total} שאלות<br>+${score} ⭐ כוכבים!`;

  if (percent >= 70) launchConfetti();
}

function restartQuiz() { startQuiz(); }

// ===== BALLOON POP GAME =====
const BALLOON_COLORS = [
  'linear-gradient(135deg, #ff6b6b, #ee5a5a)',
  'linear-gradient(135deg, #4ecdc4, #44a8a0)',
  'linear-gradient(135deg, #ffe66d, #ffd93d)',
  'linear-gradient(135deg, #95e1d3, #7bc8bb)',
  'linear-gradient(135deg, #ff8fab, #ff6b8a)',
  'linear-gradient(135deg, #a8e6cf, #8dd8b8)',
  'linear-gradient(135deg, #dda0dd, #cc8fcc)',
  'linear-gradient(135deg, #87ceeb, #6bb8d6)'
];

function getBalloonFlashcards() {
  // Check for AI-generated content first
  if (window._aiTempFlashcards) {
    return window._aiTempFlashcards;
  }
  return getData()[currentSubject]?.flashcards || [];
}

function startBalloonPop() {
  const cards = [...getBalloonFlashcards()];
  shuffle(cards);
  const totalQuestions = Math.min(10, cards.length);
  
  balloonPopState = {
    questions: cards.slice(0, totalQuestions),
    current: 0,
    score: 0,
    lives: 3,
    isProcessing: false,
    balloonInterval: null,
    allCards: cards
  };

  document.querySelector('.balloon-game').classList.remove('hidden');
  document.getElementById('balloon-done').classList.add('hidden');
  document.getElementById('balloon-total').textContent = totalQuestions;
  
  renderBalloonQuestion();
}

function renderBalloonQuestion() {
  const s = balloonPopState;
  const arena = document.getElementById('balloon-arena');
  arena.innerHTML = '';
  
  if (s.balloonInterval) {
    clearInterval(s.balloonInterval);
  }
  
  const question = s.questions[s.current];
  document.getElementById('balloon-question').textContent = question.front;
  document.getElementById('balloon-current').textContent = s.current + 1;
  document.getElementById('balloon-score').textContent = s.score;
  document.getElementById('balloon-lives').textContent = '❤️'.repeat(s.lives) + '🖤'.repeat(3 - s.lives);
  
  // Create answer options (correct + 3 wrong)
  const allCards = s.allCards || getBalloonFlashcards();
  const wrongAnswers = allCards
    .filter(c => c.back !== question.back)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map(c => c.back);
  
  const answers = [question.back, ...wrongAnswers];
  shuffle(answers);
  
  s.isProcessing = false;
  
  // Spawn balloons with delay
  let delay = 0;
  answers.forEach((answer, index) => {
    setTimeout(() => {
      if (balloonPopState.current === s.current) {
        spawnBalloon(answer, answer === question.back, index);
      }
    }, delay);
    delay += 500;
  });
}

function spawnBalloon(text, isCorrect, index) {
  const arena = document.getElementById('balloon-arena');
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.dataset.correct = isCorrect;
  
  // Random horizontal position
  const leftPos = 10 + (index * 22);
  balloon.style.left = leftPos + '%';
  
  // Random animation duration (4-7 seconds)
  const duration = 4 + Math.random() * 3;
  balloon.style.animationDuration = duration + 's';
  
  const color = BALLOON_COLORS[Math.floor(Math.random() * BALLOON_COLORS.length)];
  
  balloon.innerHTML = `
    <div class="balloon-body" style="background: ${color}">${text}</div>
    <div class="balloon-string"></div>
  `;
  
  balloon.onclick = () => popBalloon(balloon, isCorrect);
  
  arena.appendChild(balloon);
  
  // Remove balloon when animation ends (missed)
  balloon.addEventListener('animationend', () => {
    if (balloon.parentNode && isCorrect && !balloonPopState.isProcessing) {
      // Missed the correct balloon!
      balloonPopState.lives--;
      updateLives();
      if (balloonPopState.lives <= 0) {
        endBalloonPop();
      } else {
        nextBalloonQuestion();
      }
    }
  });
}

function popBalloon(balloon, isCorrect) {
  if (balloonPopState.isProcessing) return;
  balloonPopState.isProcessing = true;
  
  balloon.classList.add('popped');
  balloon.classList.add(isCorrect ? 'correct' : 'wrong');
  
  if (isCorrect) {
    balloonPopState.score += 10;
    document.getElementById('balloon-score').textContent = balloonPopState.score;
    
    // Pop all remaining balloons
    document.querySelectorAll('.balloon:not(.popped)').forEach(b => {
      b.classList.add('popped');
    });
    
    setTimeout(() => {
      nextBalloonQuestion();
    }, 500);
  } else {
    balloonPopState.lives--;
    updateLives();
    
    setTimeout(() => {
      if (balloonPopState.lives <= 0) {
        endBalloonPop();
      } else {
        balloonPopState.isProcessing = false;
      }
    }, 300);
  }
}

function updateLives() {
  const lives = balloonPopState.lives;
  document.getElementById('balloon-lives').textContent = '❤️'.repeat(Math.max(0, lives)) + '🖤'.repeat(3 - Math.max(0, lives));
}

function nextBalloonQuestion() {
  balloonPopState.current++;
  
  if (balloonPopState.current >= balloonPopState.questions.length) {
    endBalloonPop();
  } else {
    renderBalloonQuestion();
  }
}

function endBalloonPop() {
  document.querySelector('.balloon-game').classList.add('hidden');
  document.getElementById('balloon-done').classList.remove('hidden');
  
  // Clear AI temp flashcards
  window._aiTempFlashcards = null;
  
  const s = balloonPopState;
  const correct = Math.floor(s.score / 10);
  const total = s.questions.length;
  
  // Only update progress for regular subjects
  if (progress[currentSubject]) {
    progress[currentSubject].flashcardsCompleted++;
    progress.stars += correct;
    saveProgress(progress);
    checkAchievements();
  } else {
    // AI content - just add stars
    progress.stars += correct;
    saveProgress(progress);
  }
  
  const title = s.lives > 0 ? '🎉 כל הכבוד!' : '💪 נסה שוב!';
  document.getElementById('balloon-result-title').textContent = title;
  
  document.getElementById('balloon-summary').innerHTML = `
    🎯 ניקוד: ${s.score} נקודות<br>
    ✅ תשובות נכונות: ${correct} מתוך ${total}<br>
    +${correct} ⭐ כוכבים!
  `;
  
  if (correct > total / 2) launchConfetti();
}

function restartBalloonPop() { startBalloonPop(); }

// ===== HANGMAN GAME =====
function startHangman() {
  const words = getData().hangman[currentSubject];
  const choice = words[Math.floor(Math.random() * words.length)];
  const isHebrew = currentSubject !== 'english';

  hangmanState = {
    word: choice.word,
    hint: choice.hint,
    guessed: [],
    lives: 6,
    won: false,
    lost: false,
    isHebrew
  };

  document.getElementById('hangman-result').classList.add('hidden');
  renderHangman();
}

function renderHangman() {
  const s = hangmanState;

  // Display word
  const wordDisplay = s.word.split('').map(letter => {
    if (letter === ' ') return '  ';
    return s.guessed.includes(letter.toUpperCase()) || s.guessed.includes(letter) ? letter : '_';
  }).join(' ');

  document.getElementById('hangman-word').textContent = wordDisplay;
  document.getElementById('hangman-hint').textContent = '💡 רמז: ' + s.hint;
  document.getElementById('hangman-lives').innerHTML = '❤️'.repeat(s.lives) + '🖤'.repeat(6 - s.lives);

  // Hangman figure (simple ASCII)
  const figures = ['', '😵', '😵\n |', '😵\n/|', '😵\n/|\\', '😵\n/|\\\n/', '😵\n/|\\\n/ \\'];
  const wrongCount = 6 - s.lives;
  document.getElementById('hangman-display').textContent = wrongCount > 0 ? figures[wrongCount] : '😊';

  // Keyboard
  let letters;
  if (s.isHebrew) {
    letters = 'אבגדהוזחטיכלמנסעפצקרשת'.split('');
  } else {
    letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }

  document.getElementById('hangman-keyboard').innerHTML = letters.map(l => {
    const used = s.guessed.includes(l);
    const inWord = s.word.toUpperCase().includes(l) || s.word.includes(l);
    let cls = 'hangman-key';
    if (used) cls += inWord ? ' correct' : ' wrong';
    return `<button class="${cls}" ${used ? 'disabled' : ''} onclick="guessLetter('${l}')">${l}</button>`;
  }).join('');

  // Check win
  const revealed = s.word.split('').every(letter =>
    letter === ' ' || s.guessed.includes(letter.toUpperCase()) || s.guessed.includes(letter)
  );

  const result = document.getElementById('hangman-result');
  if (revealed && !s.won) {
    s.won = true;
    result.classList.remove('hidden');
    result.innerHTML = `<div class="results-emoji">🎉</div><h2>כל הכבוד! ניצחת!</h2>
      <p>המילה: ${s.word}</p>
      <button class="btn-primary" onclick="startHangman()">שחק שוב 🔄</button>
      <button class="btn-secondary" onclick="goBack()">חזרה</button>`;
    progress.stars += 3;
    progress.gamesPlayed = (progress.gamesPlayed || 0) + 1;
    saveProgress(progress);
    checkAchievements();
    launchConfetti();
  } else if (s.lives <= 0 && !s.lost) {
    s.lost = true;
    result.classList.remove('hidden');
    result.innerHTML = `<div class="results-emoji">😢</div><h2>הפסדת!</h2>
      <p>המילה הייתה: <strong>${s.word}</strong></p>
      <button class="btn-primary" onclick="startHangman()">נסה שוב 🔄</button>
      <button class="btn-secondary" onclick="goBack()">חזרה</button>`;
    progress.gamesPlayed = (progress.gamesPlayed || 0) + 1;
    saveProgress(progress);
    checkAchievements();
  }
}

function guessLetter(letter) {
  if (hangmanState.won || hangmanState.lost) return;
  if (hangmanState.guessed.includes(letter)) return;

  hangmanState.guessed.push(letter);
  const inWord = hangmanState.word.toUpperCase().includes(letter) || hangmanState.word.includes(letter);
  if (!inWord) hangmanState.lives--;
  renderHangman();
}

// ===== MEMORY GAME =====
function startMemory() {
  const pairs = getData().memory[currentSubject];
  let cards = [];
  pairs.forEach(([a, b], i) => {
    cards.push({ id: i * 2, pairId: i, text: a, flipped: false, matched: false });
    cards.push({ id: i * 2 + 1, pairId: i, text: b, flipped: false, matched: false });
  });
  shuffle(cards);

  memoryState = {
    cards,
    flippedCards: [],
    moves: 0,
    matchedPairs: 0,
    totalPairs: pairs.length,
    locked: false
  };

  document.getElementById('memory-moves').textContent = '0';
  document.getElementById('memory-pairs').textContent = '0';
  document.getElementById('memory-total').textContent = pairs.length;
  document.getElementById('memory-result').classList.add('hidden');
  renderMemoryGrid();
}

function renderMemoryGrid() {
  const grid = document.getElementById('memory-grid');
  grid.innerHTML = memoryState.cards.map((card, i) => {
    let cls = 'memory-card';
    if (card.flipped || card.matched) cls += ' flipped';
    if (card.matched) cls += ' matched';
    return `<button class="${cls}" onclick="flipMemoryCard(${i})" ${card.matched ? 'disabled' : ''}>
      <span class="memory-card-front">❓</span>
      <span class="memory-card-back">${card.text}</span>
    </button>`;
  }).join('');
}

function flipMemoryCard(index) {
  if (memoryState.locked) return;
  const card = memoryState.cards[index];
  if (card.flipped || card.matched) return;

  card.flipped = true;
  memoryState.flippedCards.push(index);
  renderMemoryGrid();

  if (memoryState.flippedCards.length === 2) {
    memoryState.locked = true;
    memoryState.moves++;
    document.getElementById('memory-moves').textContent = memoryState.moves;

    const [i1, i2] = memoryState.flippedCards;
    const c1 = memoryState.cards[i1];
    const c2 = memoryState.cards[i2];

    if (c1.pairId === c2.pairId) {
      c1.matched = true;
      c2.matched = true;
      memoryState.matchedPairs++;
      document.getElementById('memory-pairs').textContent = memoryState.matchedPairs;
      memoryState.flippedCards = [];
      memoryState.locked = false;
      renderMemoryGrid();

      if (memoryState.matchedPairs === memoryState.totalPairs) {
        setTimeout(() => {
          const result = document.getElementById('memory-result');
          result.classList.remove('hidden');
          result.innerHTML = `<div class="results-emoji">🎉</div><h2>מצאת את כל הזוגות!</h2>
            <p>ב-${memoryState.moves} מהלכים</p>
            <button class="btn-primary" onclick="startMemory()">שחק שוב 🔄</button>
            <button class="btn-secondary" onclick="goBack()">חזרה</button>`;
          progress.stars += Math.max(1, 6 - Math.floor(memoryState.moves / 3));
          progress.gamesPlayed = (progress.gamesPlayed || 0) + 1;
          saveProgress(progress);
          checkAchievements();
          launchConfetti();
        }, 500);
      }
    } else {
      setTimeout(() => {
        c1.flipped = false;
        c2.flipped = false;
        memoryState.flippedCards = [];
        memoryState.locked = false;
        renderMemoryGrid();
      }, 800);
    }
  }
}

// ===== MATH RACE GAME =====
function initMathRace() {
  if (raceState.timer) { clearInterval(raceState.timer); raceState.timer = null; }
  raceState = { score: 0, timeLeft: 30, timer: null, active: false };
  document.getElementById('race-score').textContent = '0';
  document.getElementById('race-timer').textContent = '30';
  document.getElementById('race-question').textContent = 'לחץ "התחל" כדי להתחיל!';
  document.getElementById('race-options').innerHTML = '';
  document.getElementById('race-result').classList.add('hidden');
  document.getElementById('race-start').classList.remove('hidden');
}

function startMathRace() {
  if (raceState.timer) clearInterval(raceState.timer);
  raceState = { score: 0, timeLeft: 30, timer: null, active: true };
  document.getElementById('race-start').classList.add('hidden');
  document.getElementById('race-result').classList.add('hidden');
  document.getElementById('race-score').textContent = '0';

  generateRaceQuestion();

  raceState.timer = setInterval(() => {
    raceState.timeLeft--;
    document.getElementById('race-timer').textContent = raceState.timeLeft;
    if (raceState.timeLeft <= 0) {
      clearInterval(raceState.timer);
      raceState.timer = null;
      raceState.active = false;
      endMathRace();
    }
  }, 1000);
}

function generateRaceQuestion() {
  const ops = ['+', '-', '×'];
  const op = ops[Math.floor(Math.random() * ops.length)];
  let a, b, answer;

  switch (op) {
    case '+':
      a = Math.floor(Math.random() * 100) + 10;
      b = Math.floor(Math.random() * 100) + 10;
      answer = a + b;
      break;
    case '-':
      a = Math.floor(Math.random() * 100) + 50;
      b = Math.floor(Math.random() * 50) + 1;
      answer = a - b;
      break;
    case '×':
      a = Math.floor(Math.random() * 12) + 2;
      b = Math.floor(Math.random() * 12) + 2;
      answer = a * b;
      break;
  }

  document.getElementById('race-question').textContent = `${a} ${op} ${b} = ?`;

  let options = [answer];
  while (options.length < 4) {
    const wrong = answer + (Math.floor(Math.random() * 21) - 10);
    if (wrong !== answer && !options.includes(wrong) && wrong >= 0) {
      options.push(wrong);
    }
  }
  shuffle(options);

  document.getElementById('race-options').innerHTML = options.map(opt =>
    `<button class="quiz-option" onclick="raceAnswer(${opt}, ${answer})">${opt}</button>`
  ).join('');
}

function raceAnswer(selected, correct) {
  if (!raceState.active) return;

  if (selected === correct) {
    raceState.score++;
    document.getElementById('race-score').textContent = raceState.score;
    document.getElementById('race-question').style.color = '#48bb78';
    setTimeout(() => {
      document.getElementById('race-question').style.color = '';
      generateRaceQuestion();
    }, 200);
  } else {
    document.getElementById('race-question').style.color = '#fc8181';
    setTimeout(() => { document.getElementById('race-question').style.color = ''; }, 300);
  }
}

function endMathRace() {
  const result = document.getElementById('race-result');
  result.classList.remove('hidden');
  document.getElementById('race-options').innerHTML = '';

  const stars = Math.min(raceState.score, 10);
  result.innerHTML = `<div class="results-emoji">${raceState.score >= 10 ? '🏆' : raceState.score >= 5 ? '🌟' : '💪'}</div>
    <h2>סיימת! ${raceState.score} תשובות נכונות!</h2>
    <p>+${stars} ⭐ כוכבים</p>
    <button class="btn-primary" onclick="startMathRace()">שחק שוב 🔄</button>
    <button class="btn-secondary" onclick="goBack()">חזרה</button>`;

  progress.stars += stars;
  progress.gamesPlayed = (progress.gamesPlayed || 0) + 1;
  saveProgress(progress);
  checkAchievements();
  if (raceState.score >= 10) launchConfetti();
}

// ===== DAILY CHALLENGE =====
function startDailyChallenge() {
  const container = document.getElementById('daily-challenge-container');
  const today = new Date().toDateString();

  if (progress.dailyChallengeDate === today && progress.dailyChallengeScore !== null) {
    container.innerHTML = `
      <div class="results-emoji">✅</div>
      <h2>כבר סיימת את האתגר היומי!</h2>
      <div class="results-score">${progress.dailyChallengeScore}%</div>
      <p>חזור מחר לאתגר חדש!</p>
      <button class="btn-secondary" onclick="goBack()">חזרה</button>`;
    return;
  }

  const seed = hashCode(today);
  const data = getData();
  const allQuestions = [
    ...data.hebrew.quiz.map(q => ({ ...q, subjectName: 'עברית' })),
    ...data.english.quiz.map(q => ({ ...q, subjectName: 'אנגלית' })),
    ...data.math.quiz.map(q => ({ ...q, subjectName: 'מתמטיקה' }))
  ];

  const selectedQs = [];
  const tempArr = [...allQuestions];
  for (let i = 0; i < 5 && tempArr.length > 0; i++) {
    const idx = Math.abs((seed + i * 7) % tempArr.length);
    selectedQs.push(tempArr.splice(idx, 1)[0]);
  }

  dailyChallengeState = { questions: selectedQs, current: 0, score: 0, answered: false };
  renderDailyChallengeQuestion(container);
}

function renderDailyChallengeQuestion(container) {
  if (!container) container = document.getElementById('daily-challenge-container');
  const s = dailyChallengeState;
  const q = s.questions[s.current];
  const total = s.questions.length;
  const current = s.current + 1;

  container.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${(current/total)*100}%"></div></div>
      <div class="quiz-counter">אתגר יומי — שאלה ${current} מתוך ${total} (${q.subjectName})</div>
    </div>
    <div class="quiz-question">${q.question}</div>
    <div class="quiz-options">${q.options.map((opt, i) =>
      `<button class="quiz-option" onclick="dailyChallengeAnswer(${i})">${opt}</button>`
    ).join('')}</div>
    <div id="dc-feedback" class="quiz-feedback hidden"></div>
    <button id="dc-next" class="btn-primary hidden" onclick="nextDailyChallenge()">הבא →</button>`;
}

function dailyChallengeAnswer(index) {
  if (dailyChallengeState.answered) return;
  dailyChallengeState.answered = true;

  const q = dailyChallengeState.questions[dailyChallengeState.current];
  const options = document.querySelectorAll('#daily-challenge-container .quiz-option');
  const feedback = document.getElementById('dc-feedback');

  options.forEach(o => o.classList.add('disabled'));
  options[q.correct].classList.add('correct');

  if (index === q.correct) {
    dailyChallengeState.score++;
    feedback.textContent = '🎉 נכון!';
    feedback.className = 'quiz-feedback correct';
  } else {
    options[index].classList.add('wrong');
    feedback.textContent = '😕 לא נכון.';
    feedback.className = 'quiz-feedback wrong';
  }
  feedback.classList.remove('hidden');

  const nextBtn = document.getElementById('dc-next');
  nextBtn.classList.remove('hidden');
  if (dailyChallengeState.current === dailyChallengeState.questions.length - 1) {
    nextBtn.textContent = 'סיום ←';
  }
}

function nextDailyChallenge() {
  dailyChallengeState.current++;
  dailyChallengeState.answered = false;

  if (dailyChallengeState.current >= dailyChallengeState.questions.length) {
    const score = dailyChallengeState.score;
    const total = dailyChallengeState.questions.length;
    const percent = Math.round((score / total) * 100);

    progress.dailyChallengeDate = new Date().toDateString();
    progress.dailyChallengeScore = percent;
    progress.stars += score * 2;
    saveProgress(progress);
    checkAchievements();

    const container = document.getElementById('daily-challenge-container');
    container.innerHTML = `
      <div class="results-emoji">${percent >= 80 ? '🏆' : percent >= 60 ? '🌟' : '💪'}</div>
      <h2>${percent >= 80 ? 'מצוין!' : percent >= 60 ? 'כל הכבוד!' : 'נסה שוב מחר!'}</h2>
      <div class="results-score">${percent}%</div>
      <p>${score} מתוך ${total} נכונות | +${score * 2} ⭐</p>
      <button class="btn-secondary" onclick="goBack()">חזרה</button>`;

    if (percent >= 60) launchConfetti();
  } else {
    renderDailyChallengeQuestion();
  }
}

// ===== DICTATION (English) =====
let selectedDictationWeek = 0;

function showDictationMenu() {
  const data = getMergedDictation();
  const selectEl = document.getElementById('dictation-week-select');
  
  // Populate week options
  selectEl.innerHTML = data.map((week, i) => {
    const dateRange = getWeekDateRange(i);
    return `<option value="${i}">שבוע ${i + 1} (${dateRange})</option>`;
  }).join('');
  
  selectedDictationWeek = 0;
  updateDictationWeekPreview();
}

function updateDictationWeekPreview() {
  const selectEl = document.getElementById('dictation-week-select');
  selectedDictationWeek = parseInt(selectEl.value);
  const data = getMergedDictation();
  const weekData = data[selectedDictationWeek];
  
  const weekTitle = document.getElementById('dictation-menu-week');
  if (weekTitle) {
    weekTitle.textContent = `${weekData.words.length} מילים`;
  }
}

function startDictation() {
  const data = getMergedDictation();
  const weekData = data[selectedDictationWeek];
  const words = [...weekData.words];
  shuffle(words);

  const weekDateRange = getWeekDateRange(selectedDictationWeek);
  dictationState = { words, current: 0, score: 0, weekTitle: weekDateRange, answered: false, tries: 0 };

  document.getElementById('dictation-week').textContent = `שבוע ${selectedDictationWeek + 1} (${weekDateRange})`;
  document.getElementById('dictation-results').classList.add('hidden');
  document.getElementById('dictation-feedback').classList.add('hidden');

  // Show word area, hide results
  const wordArea = document.querySelector('.dictation-word-area');
  if (wordArea) wordArea.style.display = '';
  const counter = document.querySelector('.dictation-progress');
  if (counter) counter.style.display = '';

  renderDictationWord();
}

function renderDictationWord() {
  const s = dictationState;
  const w = s.words[s.current];
  const total = s.words.length;
  const current = s.current + 1;

  document.getElementById('dictation-counter').textContent = `מילה ${current} מתוך ${total}`;
  document.getElementById('dictation-progress-fill').style.width = `${(current / total) * 100}%`;
  document.getElementById('dictation-prompt').textContent = w.hebrewHint;
  document.getElementById('dictation-input').value = '';
  document.getElementById('dictation-feedback').classList.add('hidden');
  dictationState.answered = false;
  dictationState.tries = 0;

  // Update button text
  const btn = document.querySelector('#screen-dictation-typing .btn-primary');
  if (btn) btn.textContent = 'בדוק ✓';

  setTimeout(() => {
    speak(w.word, 'en-US');
    document.getElementById('dictation-input').focus();
  }, 300);
}

function speakDictationWord() {
  const w = dictationState.words[dictationState.current];
  speak(w.word, 'en-US');
}

function checkDictation() {
  if (dictationState.answered) {
    // Move to next
    dictationState.current++;
    if (dictationState.current >= dictationState.words.length) {
      showDictationResults();
    } else {
      renderDictationWord();
    }
    return;
  }

  const w = dictationState.words[dictationState.current];
  const input = document.getElementById('dictation-input').value.trim().toLowerCase();
  const feedback = document.getElementById('dictation-feedback');

  if (input === w.word.toLowerCase()) {
    // Correct!
    dictationState.score++;
    dictationState.answered = true;
    feedback.textContent = `✅ נכון! ${w.word}`;
    feedback.className = 'quiz-feedback correct';
    feedback.classList.remove('hidden');

    const btn = document.querySelector('#screen-dictation-typing .btn-primary');
    if (dictationState.current < dictationState.words.length - 1) {
      btn.textContent = 'הבא →';
    } else {
      btn.textContent = 'סיום ←';
    }
  } else {
    // Wrong
    dictationState.tries++;
    
    if (dictationState.tries < 2) {
      // First try - give another chance
      feedback.textContent = '❌ לא נכון, נסה שוב!';
      feedback.className = 'quiz-feedback wrong';
      feedback.classList.remove('hidden');
      document.getElementById('dictation-input').value = '';
      document.getElementById('dictation-input').focus();
    } else {
      // Second try failed - show answer and move on
      dictationState.answered = true;
      feedback.textContent = `❌ התשובה הנכונה: ${w.word}`;
      feedback.className = 'quiz-feedback wrong';
      feedback.classList.remove('hidden');

      const btn = document.querySelector('#screen-dictation-typing .btn-primary');
      if (dictationState.current < dictationState.words.length - 1) {
        btn.textContent = 'הבא →';
      } else {
        btn.textContent = 'סיום ←';
      }
    }
  }
}

function showDictationResults() {
  const score = dictationState.score;
  const total = dictationState.words.length;
  const percent = Math.round((score / total) * 100);

  progress.stars += score * 2;
  progress.dictationsCompleted = (progress.dictationsCompleted || 0) + 1;
  saveProgress(progress);
  checkAchievements();

  // Hide word area
  const wordArea = document.querySelector('.dictation-word-area');
  if (wordArea) wordArea.style.display = 'none';
  const counter = document.querySelector('.dictation-progress');
  if (counter) counter.style.display = 'none';
  document.getElementById('dictation-feedback').classList.add('hidden');

  const results = document.getElementById('dictation-results');
  results.classList.remove('hidden');
  results.innerHTML = `
    <div class="results-emoji">${percent >= 80 ? '🏆' : percent >= 50 ? '🌟' : '💪'}</div>
    <h2>${percent >= 80 ? 'מצוין!' : percent >= 50 ? 'כל הכבוד!' : 'המשך לתרגל!'}</h2>
    <div class="results-score">${percent}%</div>
    <p>${score} מתוך ${total} מילים נכונות<br>+${score * 2} ⭐</p>
    <button class="btn-primary" onclick="startDictation()">נסה שוב 🔄</button>
    <button class="btn-secondary" onclick="goBack()">חזרה</button>`;

  if (percent >= 70) launchConfetti();
}

// Handle Enter key in dictation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && currentScreen === 'dictation') {
    checkDictation();
  }
});

// ===== WORD MATCHING GAME =====
let matchState = {};

function startWordMatch() {
  // Use words from selected dictation week
  const data = getMergedDictation();
  const weekData = data[selectedDictationWeek];
  const dictWords = weekData.words.map(w => ({ hebrew: w.hebrewHint, english: w.word }));
  
  // Take up to 10 words
  shuffle(dictWords);
  const words = dictWords.slice(0, 10);
  
  const hebrewWords = words.map(w => ({ text: w.hebrew, pairId: w.english }));
  const englishWords = words.map(w => ({ text: w.english, pairId: w.english }));
  shuffle(englishWords);

  matchState = {
    hebrewWords,
    englishWords,
    selected: null,
    matched: 0,
    total: words.length
  };

  document.getElementById('match-score').textContent = '0';
  document.getElementById('match-total').textContent = words.length;
  document.getElementById('match-result').classList.add('hidden');
  document.getElementById('match-lines').innerHTML = '';
  renderMatchWords();
}

function renderMatchWords() {
  const hebrewCol = document.getElementById('match-hebrew');
  const englishCol = document.getElementById('match-english');

  hebrewCol.innerHTML = matchState.hebrewWords.map((w, i) => {
    const matched = matchState.hebrewWords[i].matched;
    return `<div class="match-word hebrew ${matched ? 'matched' : ''}" 
                 data-type="hebrew" data-index="${i}" data-pair="${w.pairId}"
                 onclick="selectMatchWord(this)">${w.text}</div>`;
  }).join('');

  englishCol.innerHTML = matchState.englishWords.map((w, i) => {
    const matched = matchState.englishWords[i].matched;
    return `<div class="match-word english ${matched ? 'matched' : ''}" 
                 data-type="english" data-index="${i}" data-pair="${w.pairId}"
                 onclick="selectMatchWord(this)">${w.text}</div>`;
  }).join('');
}

function selectMatchWord(el) {
  const type = el.dataset.type;
  const index = parseInt(el.dataset.index);
  const pair = el.dataset.pair;

  // If already matched, ignore
  if (el.classList.contains('matched')) return;

  // If nothing selected or same type selected, select this one
  if (!matchState.selected || matchState.selected.type === type) {
    // Deselect previous
    document.querySelectorAll('.match-word.selected').forEach(w => w.classList.remove('selected'));
    el.classList.add('selected');
    matchState.selected = { type, index, pair, element: el };
    return;
  }

  // Different type selected - check if match
  const prev = matchState.selected;
  
  if (prev.pair === pair) {
    // Match!
    el.classList.add('matched');
    prev.element.classList.add('matched');
    prev.element.classList.remove('selected');
    
    // Mark as matched in state
    if (prev.type === 'hebrew') {
      matchState.hebrewWords[prev.index].matched = true;
      matchState.englishWords[index].matched = true;
    } else {
      matchState.englishWords[prev.index].matched = true;
      matchState.hebrewWords[index].matched = true;
    }

    matchState.matched++;
    document.getElementById('match-score').textContent = matchState.matched;
    matchState.selected = null;

    // Draw line
    drawMatchLine(prev.element, el);

    // Check if done
    if (matchState.matched === matchState.total) {
      setTimeout(showMatchResults, 500);
    }
  } else {
    // Wrong match
    el.classList.add('wrong');
    prev.element.classList.add('wrong');
    setTimeout(() => {
      el.classList.remove('wrong');
      prev.element.classList.remove('wrong', 'selected');
    }, 400);
    matchState.selected = null;
  }
}

function drawMatchLine(el1, el2) {
  const svg = document.getElementById('match-lines');
  const container = document.querySelector('.match-game-area');
  const rect = container.getBoundingClientRect();

  const r1 = el1.getBoundingClientRect();
  const r2 = el2.getBoundingClientRect();

  // Calculate positions relative to container
  const x1 = r1.left + r1.width / 2 - rect.left;
  const y1 = r1.top + r1.height / 2 - rect.top;
  const x2 = r2.left + r2.width / 2 - rect.left;
  const y2 = r2.top + r2.height / 2 - rect.top;

  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.classList.add('match-line');
  svg.appendChild(line);
}

function showMatchResults() {
  const result = document.getElementById('match-result');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="results-emoji">🎉</div>
    <h2>כל הכבוד! חיברת את כל המילים!</h2>
    <p>+10 ⭐ כוכבים</p>
    <button class="btn-primary" onclick="startWordMatch()">שחק שוב 🔄</button>
    <button class="btn-secondary" onclick="goBack()">חזרה</button>`;

  progress.stars += 10;
  progress.gamesPlayed = (progress.gamesPlayed || 0) + 1;
  saveProgress(progress);
  checkAchievements();
  launchConfetti();
}

// ===== ACHIEVEMENTS =====
function checkAchievements() {
  const unlocked = progress.unlockedAchievements || [];
  let newUnlocks = false;

  APP_DATA.achievements.forEach(ach => {
    if (!unlocked.includes(ach.id) && ach.check(progress)) {
      unlocked.push(ach.id);
      newUnlocks = true;
      showAchievementToast(ach);
    }
  });

  if (newUnlocks) {
    progress.unlockedAchievements = unlocked;
    saveProgress(progress);
  }
}

function showAchievementToast(ach) {
  const toast = document.createElement('div');
  toast.className = 'achievement-toast';
  toast.innerHTML = `<span class="toast-icon">${ach.icon}</span><div><strong>הישג חדש!</strong><br>${ach.name}</div>`;
  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

function renderAchievements() {
  const container = document.getElementById('achievements-container');
  const unlocked = progress.unlockedAchievements || [];

  container.innerHTML = APP_DATA.achievements.map(ach => {
    const isUnlocked = unlocked.includes(ach.id);
    return `<div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
      <div class="achievement-icon">${isUnlocked ? ach.icon : '🔒'}</div>
      <div class="achievement-info">
        <div class="achievement-name">${ach.name}</div>
        <div class="achievement-desc">${ach.desc}</div>
      </div>
      ${isUnlocked ? '<span class="achievement-check">✅</span>' : ''}
    </div>`;
  }).join('');
}

// ===== PROFILE SCREEN =====
function renderProfileScreen() {
  if (profile) {
    document.getElementById('profile-avatar').textContent = profile.avatar;
    document.getElementById('profile-name').textContent = profile.name;
  }
  document.getElementById('profile-stars').textContent = progress.stars;
  document.getElementById('profile-streak').textContent = progress.streak || 0;

  const stats = document.getElementById('profile-stats');
  const subjects = [
    { key: 'hebrew', name: 'עברית', icon: '📖' },
    { key: 'english', name: 'אנגלית', icon: '🔤' },
    { key: 'math', name: 'מתמטיקה', icon: '🔢' }
  ];

  stats.innerHTML = subjects.map(subj => {
    const p = progress[subj.key];
    const totalLessons = APP_DATA[subj.key].lessons.length;
    const readLessons = p.lessonsRead.length;
    const pct = totalLessons > 0 ? Math.round((readLessons / totalLessons) * 100) : 0;
    return `<div class="progress-subject-card">
      <div class="progress-subject-icon">${subj.icon}</div>
      <div class="progress-subject-info">
        <div class="progress-subject-name">${subj.name}</div>
        <div class="progress-bar-track"><div class="progress-bar-fill ${subj.key}" style="width:${pct}%"></div></div>
        <div class="progress-stats">📝 ${readLessons}/${totalLessons} | ❓ ${p.quizBest}% | 🃏 ${p.flashcardsCompleted}x</div>
      </div>
    </div>`;
  }).join('');

  const badges = document.getElementById('profile-badges');
  const unlocked = progress.unlockedAchievements || [];
  badges.innerHTML = APP_DATA.achievements.map(ach => {
    const has = unlocked.includes(ach.id);
    return `<div class="badge-item ${has ? '' : 'locked'}" title="${ach.name}: ${ach.desc}">
      <span>${has ? ach.icon : '🔒'}</span>
      <small>${ach.name}</small>
    </div>`;
  }).join('');
}

// ===== PROGRESS SCREEN =====
function renderProgress() {
  document.getElementById('total-stars').textContent = `⭐ ${progress.stars}`;

  const subjects = [
    { key: 'hebrew', name: 'עברית', icon: '📖', colorClass: 'hebrew' },
    { key: 'english', name: 'אנגלית', icon: '🔤', colorClass: 'english' },
    { key: 'math', name: 'מתמטיקה', icon: '🔢', colorClass: 'math' }
  ];

  const container = document.getElementById('progress-details');
  container.innerHTML = subjects.map(subj => {
    const p = progress[subj.key];
    const totalLessons = APP_DATA[subj.key].lessons.length;
    const readLessons = p.lessonsRead.length;
    const pct = totalLessons > 0 ? Math.round((readLessons / totalLessons) * 100) : 0;

    return `<div class="progress-subject-card">
      <div class="progress-subject-icon">${subj.icon}</div>
      <div class="progress-subject-info">
        <div class="progress-subject-name">${subj.name}</div>
        <div class="progress-bar-track"><div class="progress-bar-fill ${subj.colorClass}" style="width:${pct}%"></div></div>
        <div class="progress-stats">
          📝 שיעורים: ${readLessons}/${totalLessons} |
          ❓ חידון: ${p.quizBest}% (${p.quizAttempts} ניסיונות) |
          🃏 כרטיסיות: ${p.flashcardsCompleted} פעמים
        </div>
      </div>
    </div>`;
  }).join('');

  renderLeaderboard();
}

function renderLeaderboard() {
  const lb = document.getElementById('leaderboard');
  if (!lb) return;

  const playerName = profile ? profile.name : 'תלמיד';
  const playerAvatar = profile ? profile.avatar : '🌟';

  // Simulated leaderboard (seeded by date so it's consistent within a day)
  const seed = hashCode(new Date().toDateString());
  const fakeStudents = [
    { name: 'דני', avatar: '🦁', stars: Math.abs(seed % 80) + 60 },
    { name: 'מיכל', avatar: '🦊', stars: Math.abs((seed * 3) % 80) + 50 },
    { name: 'יוסי', avatar: '🐶', stars: Math.abs((seed * 7) % 80) + 40 },
    { name: 'נועה', avatar: '🦄', stars: Math.abs((seed * 11) % 80) + 30 },
    { name: 'אורי', avatar: '🐸', stars: Math.abs((seed * 13) % 60) + 20 }
  ];

  const allPlayers = [
    ...fakeStudents,
    { name: playerName, avatar: playerAvatar, stars: progress.stars, isMe: true }
  ];

  allPlayers.sort((a, b) => b.stars - a.stars);

  lb.innerHTML = allPlayers.map((p, i) => `
    <div class="leaderboard-row ${p.isMe ? 'me' : ''}">
      <span class="lb-rank">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : (i + 1)}</span>
      <span class="lb-avatar">${p.avatar}</span>
      <span class="lb-name">${p.name}${p.isMe ? ' (אני)' : ''}</span>
      <span class="lb-stars">⭐ ${p.stars}</span>
    </div>`).join('');
}

function resetProgress() {
  if (confirm('האם אתה בטוח שברצונך לאפס את כל ההתקדמות?')) {
    progress = getDefaultProgress();
    saveProgress(progress);
    if (currentScreen === 'progress') renderProgress();
    if (currentScreen === 'profile') renderProfileScreen();
    updateHomeProgress();
    updateHomeBadges();
  }
}

// ===== SETTINGS =====
function renderSettings() {
  renderThemeGrid();
  const ttsToggle = document.getElementById('tts-toggle');
  if (ttsToggle) ttsToggle.checked = ttsEnabled;
  const ttsSpeedEl = document.getElementById('tts-speed');
  if (ttsSpeedEl) ttsSpeedEl.value = ttsSpeed;
}

// ===== UTILITIES =====
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

function getWeekNumber() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60000);
  return Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
}

function getWeekDateRange(weekOffset = 0) {
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() + (weekOffset * 7));
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);
  
  const formatDate = (d) => d.getDate().toString().padStart(2, '0');
  const formatMonth = (d) => (d.getMonth() + 1).toString().padStart(2, '0');
  
  if (startOfWeek.getMonth() === endOfWeek.getMonth()) {
    return `${formatDate(startOfWeek)}-${formatDate(endOfWeek)}.${formatMonth(endOfWeek)}`;
  } else {
    return `${formatDate(startOfWeek)}.${formatMonth(startOfWeek)}-${formatDate(endOfWeek)}.${formatMonth(endOfWeek)}`;
  }
}

// ===== CONFETTI =====
function launchConfetti() {
  const colors = ['#667eea', '#764ba2', '#f6ad55', '#48bb78', '#fc8181', '#f6e05e', '#9f7aea'];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement('div');
    piece.classList.add('confetti-piece');
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = Math.random() * 1 + 's';
    piece.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
    piece.style.width = (Math.random() * 8 + 6) + 'px';
    piece.style.height = (Math.random() * 8 + 6) + 'px';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3500);
  }
}

// ===== ADMIN SYSTEM =====
const ADMIN_CREDENTIALS = { username: 'ohadp', password: 'Op0544756518' };
let isAdminLoggedIn = false;

function adminLogin() {
  const username = document.getElementById('admin-username').value.trim();
  const password = document.getElementById('admin-password').value;
  const errorEl = document.getElementById('admin-login-error');
  
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    isAdminLoggedIn = true;
    errorEl.classList.add('hidden');
    document.getElementById('admin-username').value = '';
    document.getElementById('admin-password').value = '';
    navigate('admin-dashboard');
  } else {
    errorEl.textContent = '❌ שם משתמש או סיסמה שגויים';
    errorEl.classList.remove('hidden');
  }
}

function adminLogout() {
  isAdminLoggedIn = false;
  navigate('home');
}

// ===== ADMIN DICTATION MANAGEMENT =====
function getCustomDictation() {
  const stored = localStorage.getItem('brainx-dictation');
  return stored ? JSON.parse(stored) : null;
}

function saveCustomDictation(data) {
  localStorage.setItem('brainx-dictation', JSON.stringify(data));
}

function getMergedDictation() {
  const custom = getCustomDictation();
  if (!custom) return getData().dictation;
  
  // Merge custom words with original data
  return getData().dictation.map((week, index) => {
    if (custom[index] && custom[index].words) {
      return { ...week, words: custom[index].words };
    }
    return week;
  });
}

function loadWeekWords() {
  const selectEl = document.getElementById('admin-week-select');
  const merged = getMergedDictation();
  
  // Populate select options with dates
  if (selectEl.options.length !== merged.length) {
    selectEl.innerHTML = merged.map((week, i) => {
      const dateRange = getWeekDateRange(i);
      return `<option value="${i}">שבוע ${i + 1} (${dateRange})</option>`;
    }).join('');
  }
  
  const weekIndex = parseInt(selectEl.value);
  const weekData = merged[weekIndex];
  
  const listEl = document.getElementById('admin-word-list');
  if (!weekData || !weekData.words.length) {
    listEl.innerHTML = '<p style="color:#999;text-align:center">אין מילים בשבוע זה</p>';
    return;
  }
  
  listEl.innerHTML = weekData.words.map((w, i) => `
    <div class="admin-word-item">
      <div class="word-text">
        <span class="english">${w.word}</span>
        <span class="hebrew">${w.hebrewHint}</span>
      </div>
      <button class="admin-word-delete" onclick="deleteWord(${weekIndex}, ${i})">✕</button>
    </div>
  `).join('');
}

function addDictationWord() {
  const weekIndex = parseInt(document.getElementById('admin-week-select').value);
  const english = document.getElementById('admin-word-english').value.trim();
  const hebrew = document.getElementById('admin-word-hebrew').value.trim();
  
  if (!english || !hebrew) {
    alert('נא למלא את שני השדות');
    return;
  }
  
  let custom = getCustomDictation();
  if (!custom) {
    // Initialize with current data
    custom = getData().dictation.map(week => ({
      week: week.week,
      words: [...week.words]
    }));
  }
  
  custom[weekIndex].words.push({ word: english, hebrewHint: hebrew });
  saveCustomDictation(custom);
  
  document.getElementById('admin-word-english').value = '';
  document.getElementById('admin-word-hebrew').value = '';
  loadWeekWords();
}

function deleteWord(weekIndex, wordIndex) {
  if (!confirm('למחוק מילה זו?')) return;
  
  let custom = getCustomDictation();
  if (!custom) {
    custom = getData().dictation.map(week => ({
      week: week.week,
      words: [...week.words]
    }));
  }
  
  custom[weekIndex].words.splice(wordIndex, 1);
  saveCustomDictation(custom);
  loadWeekWords();
}

// ===== AI CONTENT GENERATOR =====
let aiCurrentTopic = null;
let aiGeneratedTopics = [];

// Encoded Gemini key (decoded at runtime)
const _k = 'QUl6YVN5QVVCVmx4Y1cxaWViZWJ4QmJ1dDEzZHR2U1lfTDRZWnpR';

function getGeminiKey() {
  return atob(_k);
}

function getAITopics() {
  const saved = localStorage.getItem('brainx-ai-topics-' + currentUserId);
  return saved ? JSON.parse(saved) : [];
}

function saveAITopics(topics) {
  localStorage.setItem('brainx-ai-topics-' + currentUserId, JSON.stringify(topics));
}

function renderAIGenerator() {
  aiGeneratedTopics = getAITopics();
  renderAITopicsList();
}

function renderAITopicsList() {
  const container = document.getElementById('ai-generated-topics');
  const topics = getAITopics();
  
  if (topics.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--text-light);margin-top:20px">עדיין לא יצרת נושאים. נסה עכשיו!</p>';
    return;
  }
  
  container.innerHTML = '<h3 style="margin-bottom:12px">📚 הנושאים שלי</h3>' + topics.map((topic, i) => `
    <div class="ai-topic-item" onclick="playAITopic(${i})">
      <div class="ai-topic-info">
        <div class="ai-topic-icon">${topic.icon || '📘'}</div>
        <div>
          <div class="ai-topic-name">${topic.name}</div>
          <div class="ai-topic-meta">${topic.createdAt || ''}</div>
        </div>
      </div>
      <button class="ai-topic-delete" onclick="event.stopPropagation(); deleteAITopic(${i})">🗑️</button>
    </div>
  `).join('');
}

function deleteAITopic(index) {
  if (!confirm('למחוק נושא זה?')) return;
  const topics = getAITopics();
  topics.splice(index, 1);
  saveAITopics(topics);
  renderAITopicsList();
}

function playAITopic(index) {
  aiCurrentTopic = getAITopics()[index];
  navigate('ai-play');
}

function renderAIPlay() {
  if (!aiCurrentTopic) {
    navigate('ai-generator');
    return;
  }
  
  document.getElementById('ai-play-topic').textContent = '📚 ' + aiCurrentTopic.name;
  
  const features = document.getElementById('ai-play-features');
  let html = '';
  
  if (aiCurrentTopic.lessons?.length > 0) {
    html += `<button class="feature-card lessons-card" onclick="playAILesson()">
      <div class="feature-icon">📚</div>
      <div class="feature-name">שיעור</div>
      <div class="feature-desc">חומר לימוד</div>
    </button>`;
  }
  
  if (aiCurrentTopic.quiz?.length > 0) {
    html += `<button class="feature-card quiz-card" onclick="playAIQuiz()">
      <div class="feature-icon">❓</div>
      <div class="feature-name">חידון</div>
      <div class="feature-desc">${aiCurrentTopic.quiz.length} שאלות</div>
    </button>`;
  }
  
  if (aiCurrentTopic.flashcards?.length > 0) {
    html += `<button class="feature-card balloon-card" onclick="playAIBalloon()">
      <div class="feature-icon">🎈</div>
      <div class="feature-name">פיצוץ בלונים</div>
      <div class="feature-desc">${aiCurrentTopic.flashcards.length} שאלות</div>
    </button>`;
  }
  
  if (aiCurrentTopic.hangman?.length > 0) {
    html += `<button class="feature-card" style="background:linear-gradient(135deg,#fce4ec,#f8bbd0)" onclick="playAIHangman()">
      <div class="feature-icon">🎯</div>
      <div class="feature-name">תלייה</div>
      <div class="feature-desc">${aiCurrentTopic.hangman.length} מילים</div>
    </button>`;
  }
  
  if (aiCurrentTopic.memory?.length > 0) {
    html += `<button class="feature-card" style="background:linear-gradient(135deg,#e8f5e9,#c8e6c9)" onclick="playAIMemory()">
      <div class="feature-icon">🧠</div>
      <div class="feature-name">זיכרון</div>
      <div class="feature-desc">${aiCurrentTopic.memory.length} זוגות</div>
    </button>`;
  }
  
  features.innerHTML = html;
}

async function generateAIContent() {
  const prompt = document.getElementById('ai-prompt').value.trim();
  if (!prompt) {
    showAIError('נא להזין נושא ליצירה');
    return;
  }
  
  const lang = document.querySelector('input[name="ai-lang"]:checked').value;
  const genLessons = document.getElementById('ai-gen-lessons').checked;
  const genQuiz = document.getElementById('ai-gen-quiz').checked;
  const genBalloon = document.getElementById('ai-gen-balloon').checked;
  const genHangman = document.getElementById('ai-gen-hangman').checked;
  const genMemory = document.getElementById('ai-gen-memory').checked;
  
  if (!genLessons && !genQuiz && !genBalloon && !genHangman && !genMemory) {
    showAIError('נא לבחור לפחות סוג תוכן אחד');
    return;
  }
  
  // Show loading
  document.getElementById('ai-btn-text').classList.add('hidden');
  document.getElementById('ai-btn-loading').classList.remove('hidden');
  document.querySelector('.btn-ai-generate').disabled = true;
  hideAIMessages();
  
  const systemPrompt = `You are an educational content generator for a children's learning app.
Generate content in ${lang === 'he' ? 'Hebrew' : 'English'} about the topic: "${prompt}"
The content should be appropriate for grades 2-5 (ages 7-11).
Return ONLY valid JSON with this exact structure (include only requested sections):

{
  "name": "Topic name",
  "icon": "relevant emoji",
  ${genLessons ? `"lessons": [{"title": "Lesson title", "content": "HTML content with <h2>, <p>, <ul>, etc"}],` : ''}
  ${genQuiz ? `"quiz": [{"q": "Question?", "options": ["A","B","C","D"], "correct": 0}],` : ''}
  ${genBalloon ? `"flashcards": [{"front": "Question/Term", "back": "Answer/Definition"}],` : ''}
  ${genHangman ? `"hangman": [{"word": "WORD", "hint": "Hint text"}],` : ''}
  ${genMemory ? `"memory": [{"term": "Term1", "match": "Match1"}],` : ''}
}

Generate:
${genLessons ? '- 1-2 educational lessons with rich HTML content' : ''}
${genQuiz ? '- 5-8 multiple choice questions' : ''}
${genBalloon ? '- 8-12 flashcard pairs (question/answer)' : ''}
${genHangman ? '- 6-10 words with hints for hangman game' : ''}
${genMemory ? '- 6-8 matching pairs for memory game' : ''}`;

  try {
    const apiKey = getGeminiKey();
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: systemPrompt + '\n\nCreate educational content about: ' + prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 4000
        }
      })
    });
    
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.error?.message || 'API request failed');
    }
    
    const data = await response.json();
    const content = data.candidates[0].content.parts[0].text;
    
    // Parse JSON from response (handle markdown code blocks)
    let jsonStr = content;
    const jsonMatch = content.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (jsonMatch) {
      jsonStr = jsonMatch[1];
    }
    
    const generated = JSON.parse(jsonStr);
    generated.createdAt = new Date().toLocaleDateString('he-IL');
    generated.prompt = prompt;
    
    // Save to topics
    const topics = getAITopics();
    topics.unshift(generated);
    saveAITopics(topics);
    
    showAISuccess(`נוצר בהצלחה: ${generated.name}`);
    document.getElementById('ai-prompt').value = '';
    renderAITopicsList();
    
  } catch (error) {
    console.error('AI Error:', error);
    showAIError('שגיאה: ' + error.message);
  } finally {
    document.getElementById('ai-btn-text').classList.remove('hidden');
    document.getElementById('ai-btn-loading').classList.add('hidden');
    document.querySelector('.btn-ai-generate').disabled = false;
  }
}

function showAIError(msg) {
  const el = document.getElementById('ai-error');
  el.textContent = msg;
  el.classList.remove('hidden');
}

function showAISuccess(msg) {
  const el = document.getElementById('ai-success');
  el.textContent = msg;
  el.classList.remove('hidden');
}

function hideAIMessages() {
  document.getElementById('ai-error').classList.add('hidden');
  document.getElementById('ai-success').classList.add('hidden');
}

// AI Game Players - use existing game logic with AI data
function playAILesson() {
  if (!aiCurrentTopic?.lessons?.length) return;
  const lesson = aiCurrentTopic.lessons[0];
  navigate('lesson-detail');
  document.getElementById('lesson-title').textContent = lesson.title;
  document.getElementById('lesson-content').innerHTML = lesson.content;
}

function playAIQuiz() {
  if (!aiCurrentTopic?.quiz?.length) return;
  
  const questions = aiCurrentTopic.quiz.map(q => ({
    q: q.q,
    options: q.options,
    correct: q.correct
  }));
  
  quizState = { questions, current: 0, score: 0, answered: false };
  navigate('quiz');
  renderQuizQuestion();
}

function playAIBalloon() {
  if (!aiCurrentTopic?.flashcards?.length) return;
  
  // Temporarily override getData for balloon pop
  const originalFlashcards = getData()[currentSubject]?.flashcards;
  const tempSubject = currentSubject;
  
  // Create temp data
  window._aiTempFlashcards = aiCurrentTopic.flashcards;
  currentSubject = 'ai-temp';
  
  navigate('balloon-pop');
  
  // Restore after a tick
  setTimeout(() => { currentSubject = tempSubject; }, 100);
}

function playAIHangman() {
  if (!aiCurrentTopic?.hangman?.length) return;
  
  const words = aiCurrentTopic.hangman;
  const choice = words[Math.floor(Math.random() * words.length)];
  const isHebrew = /[\u0590-\u05FF]/.test(choice.word);
  
  hangmanState = {
    word: choice.word.toUpperCase(),
    hint: choice.hint,
    guessed: [],
    lives: 6,
    won: false,
    lost: false,
    isHebrew
  };
  
  navigate('game-hangman');
  document.getElementById('hangman-result').classList.add('hidden');
  renderHangman();
}

function playAIMemory() {
  if (!aiCurrentTopic?.memory?.length) return;
  
  const pairs = aiCurrentTopic.memory.slice(0, 6);
  const cards = [];
  pairs.forEach((pair, i) => {
    cards.push({ id: i * 2, pairId: i, text: pair.term, flipped: false, matched: false });
    cards.push({ id: i * 2 + 1, pairId: i, text: pair.match, flipped: false, matched: false });
  });
  shuffle(cards);
  
  memoryState = { cards, flipped: [], matches: 0, moves: 0, totalPairs: pairs.length };
  navigate('game-memory');
  renderMemoryGame();
}

