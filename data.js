// ===== DATA.JS — All content for Peret School =====
// Shared (grade-independent) data: tips, avatars, themes, achievements.
// Grade content lives in APP_DATA_GRADE3 and APP_DATA_GRADE6.
const APP_DATA = {
  tips: [
    "ידעת? קריאה של 20 דקות ביום משפרת את הציונים בכל המקצועות!",
    "טיפ: כשאתה לומד מילים חדשות, נסה להשתמש בהן במשפטים שלך.",
    "מדהים! תלמידים שעושים חידונים זוכרים 50% יותר מהחומר!",
    "טיפ: תנוחה ישרה עוזרת למוח לעבוד טוב יותר!",
    "ידעת? הפסקות קצרות בזמן לימוד עוזרות לזיכרון.",
    "טיפ: לפני מבחן, שינה טובה חשובה יותר מלימוד של כל הלילה!",
    "מדהים! כתיבה ביד עוזרת לזכור טוב יותר מהקלדה!",
    "טיפ: נסה ללמד מישהו אחר את מה שלמדת — זו הדרך הטובה ביותר לזכור!"
  ],

  // ========== AVATARS ==========
  avatars: ['😎','🦊','🐱','🐶','🦁','🐼','🦄','🌟','🚀','⚡','👑','💎'],

  // ========== THEMES ==========
  themes: [
    { id: 'default', name: 'ברירת מחדל', color: '#667eea', class: '' },
    { id: 'ocean', name: 'אוקיינוס', color: '#0ea5e9', class: 'theme-ocean' },
    { id: 'forest', name: 'יער', color: '#22c55e', class: 'theme-forest' },
    { id: 'sunset', name: 'שקיעה', color: '#f97316', class: 'theme-sunset' },
    { id: 'pink', name: 'ורוד', color: '#ec4899', class: 'theme-pink' },
    { id: 'dark', name: 'כהה', color: '#2d3748', class: 'theme-dark' }
  ],

  // ========== ACHIEVEMENTS ==========
  achievements: [
    // Lessons
    { id: 'first-lesson', icon: '📖', name: 'קורא מתחיל', desc: 'קרא שיעור אחד', check: p => p.hebrew.lessonsRead.length + p.english.lessonsRead.length + p.math.lessonsRead.length >= 1 },
    { id: 'all-lessons', icon: '📚', name: 'תולעת ספרים', desc: 'קרא את כל השיעורים', check: p => p.hebrew.lessonsRead.length + p.english.lessonsRead.length + p.math.lessonsRead.length >= 9 },
    // Quizzes
    { id: 'first-quiz', icon: '❓', name: 'סקרן', desc: 'סיים חידון אחד', check: p => p.hebrew.quizAttempts + p.english.quizAttempts + p.math.quizAttempts >= 1 },
    { id: 'quiz-5', icon: '📝', name: 'חוקר חידונים', desc: 'סיים 5 חידונים', check: p => p.hebrew.quizAttempts + p.english.quizAttempts + p.math.quizAttempts >= 5 },
    { id: 'quiz-master', icon: '🏆', name: 'אלוף החידונים', desc: 'קבל 100% בחידון', check: p => p.hebrew.quizBest === 100 || p.english.quizBest === 100 || p.math.quizBest === 100 },
    // Stars & Levels
    { id: 'star-10', icon: '⭐', name: '10 כוכבים', desc: 'צבור 10 כוכבים', check: p => p.stars >= 10 },
    { id: 'star-50', icon: '🌟', name: '50 כוכבים', desc: 'צבור 50 כוכבים', check: p => p.stars >= 50 },
    { id: 'star-100', icon: '💫', name: 'מאה כוכבים!', desc: 'צבור 100 כוכבים', check: p => p.stars >= 100 },
    { id: 'star-200', icon: '🌠', name: 'כוכב על', desc: 'צבור 200 כוכבים', check: p => p.stars >= 200 },
    { id: 'star-500', icon: '🌌', name: 'גלקסיה!', desc: 'צבור 500 כוכבים', check: p => p.stars >= 500 },
    // Streaks
    { id: 'streak-3', icon: '🔥', name: 'רצף שלושה', desc: '3 ימים ברצף', check: p => (p.streak || 0) >= 3 },
    { id: 'streak-7', icon: '🔥', name: 'שבוע ברצף!', desc: '7 ימים ברצף', check: p => (p.streak || 0) >= 7 },
    { id: 'streak-14', icon: '🔥', name: 'שבועיים!', desc: '14 ימים ברצף', check: p => (p.streak || 0) >= 14 },
    { id: 'streak-30', icon: '💥', name: 'מלך הרצף!', desc: '30 ימים ברצף', check: p => (p.streak || 0) >= 30 },
    // Games
    { id: 'gamer', icon: '🎮', name: 'גיימר', desc: 'שחק 3 משחקים', check: p => (p.gamesPlayed || 0) >= 3 },
    { id: 'gamer-pro', icon: '🏅', name: 'גיימר מקצועי', desc: 'שחק 10 משחקים', check: p => (p.gamesPlayed || 0) >= 10 },
    { id: 'gamer-master', icon: '👑', name: 'מלך המשחקים', desc: 'שחק 25 משחקים', check: p => (p.gamesPlayed || 0) >= 25 },
    // Balloon Pop
    { id: 'balloon-first', icon: '🎈', name: 'פוצץ בלונים', desc: 'סיים משחק בלונים', check: p => (p.balloonGames || 0) >= 1 },
    { id: 'balloon-10', icon: '🎉', name: 'מומחה לבלונים', desc: 'סיים 10 משחקי בלונים', check: p => (p.balloonGames || 0) >= 10 },
    // Memory
    { id: 'memory-first', icon: '🧠', name: 'זיכרון חד', desc: 'סיים משחק זיכרון', check: p => (p.memoryGames || 0) >= 1 },
    { id: 'memory-5', icon: '🧠', name: 'זכרון מצוין', desc: 'סיים 5 משחקי זיכרון', check: p => (p.memoryGames || 0) >= 5 },
    // Hangman
    { id: 'hangman-first', icon: '🎯', name: 'תליין מתחיל', desc: 'נצח במשחק תלייה', check: p => (p.hangmanWins || 0) >= 1 },
    { id: 'hangman-10', icon: '🎯', name: 'מנחש מילים', desc: 'נצח 10 פעמים בתלייה', check: p => (p.hangmanWins || 0) >= 10 },
    // Math Race
    { id: 'racer', icon: '🏗️', name: 'מרוצן', desc: 'סיים מרוץ חשבון', check: p => (p.mathRaces || 0) >= 1 },
    { id: 'racer-speed', icon: '🏁', name: 'מהיר כמו ברק', desc: 'סיים 5 מרוצי חשבון', check: p => (p.mathRaces || 0) >= 5 },
    // Dictation
    { id: 'dictation', icon: '📝', name: 'מכתיב מצטיין', desc: 'סיים הכתבה שבועית', check: p => (p.dictationsCompleted || 0) >= 1 },
    { id: 'dictation-5', icon: '✍️', name: 'אלוף ההכתבות', desc: 'סיים 5 הכתבות', check: p => (p.dictationsCompleted || 0) >= 5 }
  ],
};

// ===== GRADE 3 DATA (כיתה ג׳) =====
const APP_DATA_GRADE3 = {
  tips: [
    "ידעת? כל יום שאתה קורא, אתה לומד עוד מילים חדשות!",
    "טיפ: תרגל לוח כפל כל יום - זה יהפוך לקל!",
    "מדהים! ככל שתתרגל יותר, תהיה בטוח יותר בעצמך!",
    "טיפ: כתוב לך רשימת מילים קשות ותרגל אותן!",
    "ידעת? משחקים הם דרך מצוינת ללמוד בכיף!",
    "טיפ: קרא בקול רם - זה עוזר לזכור טוב יותר!",
    "מדהים! אם טעית זה בסדר, זה חלק מהלמידה!",
    "טיפ: לפני מבחן, ישן טוב זה הכי חשוב!"
  ],

  // ========== HEBREW (עברית) - כיתה ג׳ ==========
  hebrew: {
    name: "עברית",
    icon: "📖",
    lessons: [
      {
        id: "heb-g-1",
        title: "סימני פיסוק",
        preview: "נקודה, פסיק, סימן שאלה וקריאה",
        content: `
          <h2>📖 סימני פיסוק</h2>
          <p>סימני פיסוק עוזרים לנו להבין איך לקרוא משפט!</p>

          <h3>נקודה (.)</h3>
          <p>שמים בסוף משפט רגיל.</p>
          <div class="example">היום יום שלישי.</div>

          <h3>סימן שאלה (?)</h3>
          <p>שמים בסוף משפט ששואל שאלה.</p>
          <div class="example">מה השעה?</div>

          <h3>סימן קריאה (!)</h3>
          <p>שמים כשמישהו נרגש, כועס או שמח מאוד.</p>
          <div class="example">איזה יופי!</div>

          <h3>פסיק (,)</h3>
          <p>שמים כדי להפריד בין מילים ברשימה, או לעצור לרגע.</p>
          <div class="example">קניתי תפוח, בננה ותות.</div>
        `
      },
      {
        id: "heb-g-2",
        title: "משפחת מילים ושורש",
        preview: "מילים מאותה משפחה",
        content: `
          <h2>📖 משפחת מילים ושורש</h2>
          <p>ה<span class="highlight">שורש</span> הוא לרוב 3 אותיות שחוזרות במילים מאותה משפחה.</p>

          <h3>דוגמה - שורש כת"ב:</h3>
          <div class="example">
            כותב, כתיבה, מכתב, כתוב, נכתב
          </div>

          <h3>דוגמה - שורש למ"ד:</h3>
          <div class="example">
            לומד, למידה, תלמיד, מלומד, לימוד
          </div>

          <h3>למה זה חשוב?</h3>
          <p>מילים מאותו שורש קשורות במשמעות שלהן!</p>
        `
      },
      {
        id: "heb-g-3",
        title: "זמנים בפועל",
        preview: "עבר, הווה, עתיד",
        content: `
          <h2>📖 זמנים בפועל</h2>
          <p>לפעלים יש שלושה זמנים עיקריים:</p>

          <h3>עבר - כבר קרה:</h3>
          <div class="example">אני הלכתי לבית הספר.</div>

          <h3>הווה - קורה עכשיו:</h3>
          <div class="example">אני הולך לבית הספר.</div>

          <h3>עתיד - עוד יקרה:</h3>
          <div class="example">אני אלך לבית הספר.</div>

          <h3>שימו לב:</h3>
          <p>הפועל משתנה לפי הזמן, אבל השורש נשאר אותו דבר!</p>
        `
      }
    ],
    quiz: [
      { question: "מה שמים בסוף משפט שואל?", options: [".", "?", "!", ","], correct: 1 },
      { question: "מה שמים בסוף משפט נרגש?", options: [".", "?", "!", ","], correct: 2 },
      { question: "מה השורש של 'כותב'?", options: ["כתב", "כות", "תב", "ות"], correct: 0 },
      { question: "מה השורש של 'לומד'?", options: ["מד", "למד", "ולמ", "מדד"], correct: 1 },
      { question: "'אני הלכתי' - באיזה זמן?", options: ["הווה", "עבר", "עתיד", "אין זמן"], correct: 1 },
      { question: "'אני אלך' - באיזה זמן?", options: ["הווה", "עבר", "עתיד", "אין זמן"], correct: 2 },
      { question: "'אני הולך' - באיזה זמן?", options: ["הווה", "עבר", "עתיד", "אין זמן"], correct: 0 },
      { question: "מה שמים כדי להפריד מילים ברשימה?", options: [".", "?", "!", ","], correct: 3 },
      { question: "איזו מילה מהשורש כת״ב?", options: ["מכתב", "תלמיד", "לומד", "משחק"], correct: 0 },
      { question: "מה הרבים של 'ילד'?", options: ["ילדות", "ילדים", "ילד", "ילדן"], correct: 1 },
      { question: "מה הרבים של 'מורה' (זכר)?", options: ["מורים", "מורות", "מורה", "מורן"], correct: 0 },
      { question: "איזו מילה היא בזמן עתיד?", options: ["קראתי", "קורא", "אקרא", "קרא!"], correct: 2 },
      { question: "איזו מילה היא בזמן עבר?", options: ["אכתוב", "כותב", "כתבתי", "לכתוב"], correct: 2 },
      { question: "מה השורש של 'תלמיד'?", options: ["תלמ", "למד", "מיד", "לתל"], correct: 1 },
      { question: "מתי שמים סימן שאלה?", options: ["במשפט רגיל", "כששואלים", "כשנרגשים", "ברשימה"], correct: 1 },
      { question: "מה הרבים של 'שולחן'?", options: ["שולחנים", "שולחנות", "שולחנן", "שולחני"], correct: 0 },
      { question: "מה הרבים של 'כיסא'?", options: ["כיסאים", "כיסאות", "כיסא", "כיסאן"], correct: 1 },
      { question: "איזו מילה מהשורש למ״ד?", options: ["כתיבה", "לימוד", "משחק", "ריצה"], correct: 1 },
      { question: "'היא כותבת מכתב' - מה הפועל?", options: ["היא", "כותבת", "מכתב", "אין פועל"], correct: 1 },
      { question: "מה שמים בסוף משפט רגיל?", options: [".", "?", "!", ","], correct: 0 },
      { question: "'קניתי עט, מחברת ותיק' - מה תפקיד הפסיק?", options: ["לשאול", "להפריד ברשימה", "לסיים משפט", "להתרגש"], correct: 1 },
      { question: "מה הרבים של 'חלון'?", options: ["חלונים", "חלונות", "חלונן", "חלוני"], correct: 1 },
      { question: "איזו מילה היא בזמן הווה?", options: ["הלכתי", "הולך", "אלך", "לך!"], correct: 1 },
      { question: "מה השורש של 'משחק'?", options: ["שחק", "מש", "חק", "משח"], correct: 0 },
      { question: "'איזה כיף!' - איזה סימן פיסוק בסוף?", options: [".", "?", "!", ","], correct: 2 },
      { question: "מה הרבים של 'תלמיד'?", options: ["תלמידים", "תלמידות", "תלמיד", "תלמידן"], correct: 0 },
      { question: "איזו מילה מהשורש שח\"ק?", options: ["משחק", "לומד", "כותב", "הולך"], correct: 0 },
      { question: "'מחר אלמד לבחינה' - מה הזמן?", options: ["עבר", "הווה", "עתיד", "אין זמן"], correct: 2 },
      { question: "מה הרבים של 'עיפרון'?", options: ["עפרונות", "עיפרונים", "עיפרון", "עפרונן"], correct: 1 },
      { question: "'אתמול שיחקתי בחוץ' - מה הזמן?", options: ["עבר", "הווה", "עתיד", "אין זמן"], correct: 0 }
    ],
    flashcards: [
      { front: "מהו שורש?", back: "לרוב 3 אותיות שחוזרות במילים מאותה משפחה" },
      { front: "שורש כת״ב", back: "כותב, כתיבה, מכתב, נכתב" },
      { front: "שורש למ״ד", back: "לומד, למידה, תלמיד, לימוד" },
      { front: "נקודה (.)", back: "בסוף משפט רגיל" },
      { front: "סימן שאלה (?)", back: "בסוף משפט ששואל" },
      { front: "סימן קריאה (!)", back: "כשמישהו נרגש או שמח" },
      { front: "פסיק (,)", back: "מפריד בין מילים ברשימה" },
      { front: "זמן עבר", back: "כבר קרה - הלכתי, אכלתי" },
      { front: "זמן הווה", back: "קורה עכשיו - הולך, אוכל" },
      { front: "זמן עתיד", back: "עוד יקרה - אלך, אוכל" },
      { front: "ילד → ?", back: "ילדים" },
      { front: "מורה (זכר) → ?", back: "מורים" },
      { front: "שולחן → ?", back: "שולחנות" },
      { front: "חלון → ?", back: "חלונות" },
      { front: "עיפרון → ?", back: "עיפרונים" },
      { front: "שורש שח״ק", back: "משחק, שיחק, ישחק" },
      { front: "'אני הולך' - איזה זמן?", back: "הווה" },
      { front: "'אני אלך' - איזה זמן?", back: "עתיד" },
      { front: "'אני הלכתי' - איזה זמן?", back: "עבר" },
      { front: "כיסא → ?", back: "כיסאות" },
      { front: "תלמיד → ?", back: "תלמידים" },
      { front: "מה תפקיד סימני הפיסוק?", back: "עוזרים להבין איך לקרוא את המשפט" }
    ]
  },

  // ========== ENGLISH - כיתה ג׳ ==========
  english: {
    name: "אנגלית",
    icon: "🔤",
    lessons: [
      {
        id: "eng-g-1",
        title: "This is / These are",
        preview: "Simple sentences about things",
        content: `
          <h2>🔤 This is / These are</h2>
          <p>We use <span class="highlight">This is</span> for one thing, and <span class="highlight">These are</span> for many things!</p>

          <h3>One thing (singular):</h3>
          <div class="example">
            This is a cat.<br>
            This is my book.<br>
            This is a red apple.
          </div>

          <h3>Many things (plural):</h3>
          <div class="example">
            These are cats.<br>
            These are my books.<br>
            These are red apples.
          </div>

          <h3>Questions:</h3>
          <div class="example">
            Is this a dog? Yes, it is.<br>
            Are these your pencils? Yes, they are.
          </div>
        `
      },
      {
        id: "eng-g-2",
        title: "Days and Months",
        preview: "Sunday, Monday... January, February...",
        content: `
          <h2>📅 Days and Months</h2>

          <h3>Days of the week:</h3>
          <div class="example">
            Sunday, Monday, Tuesday, Wednesday,<br>
            Thursday, Friday, Saturday
          </div>

          <h3>Months of the year:</h3>
          <div class="example">
            January, February, March, April,<br>
            May, June, July, August,<br>
            September, October, November, December
          </div>

          <h3>Let's practice:</h3>
          <p>What day is it today? What month is it?</p>
        `
      },
      {
        id: "eng-g-3",
        title: "Family and Body Parts",
        preview: "Mother, father, brother... head, hand, foot...",
        content: `
          <h2>👪 Family and Body Parts</h2>

          <h3>Family:</h3>
          <div class="example">
            Mother = אמא<br>
            Father = אבא<br>
            Sister = אחות<br>
            Brother = אח<br>
            Grandmother = סבתא<br>
            Grandfather = סבא
          </div>

          <h3>Body parts:</h3>
          <div class="example">
            Head = ראש<br>
            Hand = יד<br>
            Foot = כף רגל<br>
            Eye = עין<br>
            Ear = אוזן<br>
            Nose = אף
          </div>
        `
      }
    ],
    quiz: [
      { question: "What do we say for one cat?", options: ["These are", "This is", "Those are", "They is"], correct: 1 },
      { question: "What do we say for two cats?", options: ["This is", "These are", "That is", "This are"], correct: 1 },
      { question: "What day comes after Monday?", options: ["Sunday", "Wednesday", "Tuesday", "Friday"], correct: 2 },
      { question: "What day comes before Friday?", options: ["Thursday", "Saturday", "Wednesday", "Sunday"], correct: 0 },
      { question: "What is the first month of the year?", options: ["February", "December", "January", "March"], correct: 2 },
      { question: "What is the last month of the year?", options: ["November", "December", "October", "January"], correct: 1 },
      { question: "What is 'אמא' in English?", options: ["Father", "Mother", "Sister", "Grandmother"], correct: 1 },
      { question: "What is 'אח' in English?", options: ["Sister", "Mother", "Brother", "Father"], correct: 2 },
      { question: "What is 'ראש' in English?", options: ["Hand", "Head", "Foot", "Eye"], correct: 1 },
      { question: "What is 'יד' in English?", options: ["Hand", "Foot", "Ear", "Nose"], correct: 0 },
      { question: "How many days are in a week?", options: ["5", "6", "7", "8"], correct: 2 },
      { question: "How many months are in a year?", options: ["10", "11", "12", "13"], correct: 2 },
      { question: "What is 'עין' in English?", options: ["Ear", "Nose", "Eye", "Head"], correct: 2 },
      { question: "What is 'אוזן' in English?", options: ["Ear", "Eye", "Nose", "Foot"], correct: 0 },
      { question: "What is 'סבא' in English?", options: ["Grandmother", "Grandfather", "Father", "Uncle"], correct: 1 },
      { question: "What is 'סבתא' in English?", options: ["Grandmother", "Grandfather", "Mother", "Aunt"], correct: 0 },
      { question: "\"____ is my dog.\" (one dog)", options: ["These", "This", "Those", "They"], correct: 1 },
      { question: "\"____ are my books.\" (many books)", options: ["This", "That", "These", "It"], correct: 2 },
      { question: "What comes after Wednesday?", options: ["Tuesday", "Thursday", "Friday", "Monday"], correct: 1 },
      { question: "What comes before Sunday?", options: ["Monday", "Saturday", "Friday", "Tuesday"], correct: 1 },
      { question: "What is the third month?", options: ["January", "February", "March", "April"], correct: 2 },
      { question: "What is 'אחות' in English?", options: ["Brother", "Sister", "Mother", "Aunt"], correct: 1 },
      { question: "What is 'כף רגל' in English?", options: ["Hand", "Head", "Foot", "Arm"], correct: 2 },
      { question: "What is 'אף' in English?", options: ["Nose", "Mouth", "Ear", "Eye"], correct: 0 },
      { question: "\"Is this a dog?\" - How do you answer yes?", options: ["Yes, it is.", "Yes, they are.", "No, it isn't.", "Yes, is."], correct: 0 },
      { question: "What month comes after June?", options: ["May", "July", "August", "September"], correct: 1 },
      { question: "What month comes before October?", options: ["September", "November", "August", "December"], correct: 0 },
      { question: "What is the weekend in English?", options: ["Monday, Tuesday", "Saturday, Sunday", "Friday, Monday", "Wednesday, Thursday"], correct: 1 },
      { question: "\"These are my ____.\" (many pencils)", options: ["pencil", "pencils", "a pencil", "the pencil"], correct: 1 },
      { question: "What is 'משפחה' in English?", options: ["Friend", "Family", "House", "Home"], correct: 1 }
    ],
    flashcards: [
      { front: "This is", back: "לדבר אחד" },
      { front: "These are", back: "להרבה דברים" },
      { front: "Sunday", back: "יום ראשון" },
      { front: "Monday", back: "יום שני" },
      { front: "Tuesday", back: "יום שלישי" },
      { front: "Wednesday", back: "יום רביעי" },
      { front: "Thursday", back: "יום חמישי" },
      { front: "Friday", back: "יום שישי" },
      { front: "Saturday", back: "שבת" },
      { front: "January", back: "ינואר" },
      { front: "February", back: "פברואר" },
      { front: "March", back: "מרץ" },
      { front: "April", back: "אפריל" },
      { front: "May", back: "מאי" },
      { front: "June", back: "יוני" },
      { front: "July", back: "יולי" },
      { front: "August", back: "אוגוסט" },
      { front: "September", back: "ספטמבר" },
      { front: "October", back: "אוקטובר" },
      { front: "November", back: "נובמבר" },
      { front: "December", back: "דצמבר" },
      { front: "Mother", back: "אמא 👩" },
      { front: "Father", back: "אבא 👨" },
      { front: "Sister", back: "אחות 👧" },
      { front: "Brother", back: "אח 👦" },
      { front: "Grandmother", back: "סבתא 👵" },
      { front: "Grandfather", back: "סבא 👴" },
      { front: "Head", back: "ראש 🧠" },
      { front: "Hand", back: "יד ✋" },
      { front: "Foot", back: "כף רגל 🦶" },
      { front: "Eye", back: "עין 👁️" },
      { front: "Ear", back: "אוזן 👂" },
      { front: "Nose", back: "אף 👃" }
    ]
  },

  // ========== MATH (מתמטיקה) - כיתה ג׳ ==========
  math: {
    name: "מתמטיקה",
    icon: "🔢",
    lessons: [
      {
        id: "math-g-1",
        title: "מספרים עד 1000",
        preview: "יחידות, עשרות ומאות",
        content: `
          <h2>🔢 מספרים עד 1000</h2>
          <p>מספר גדול בנוי מ<span class="highlight">יחידות, עשרות ומאות</span>!</p>

          <h3>דוגמה - המספר 342:</h3>
          <div class="example">
            3 מאות + 4 עשרות + 2 יחידות = 342
          </div>

          <h3>חיבור וחיסור מספרים גדולים:</h3>
          <div class="example">
            250 + 130 = 380<br>
            480 - 220 = 260
          </div>

          <h3>השוואת מספרים:</h3>
          <p>משווים קודם את המאות, אחר כך העשרות, ואז היחידות.</p>
          <div class="example">452 &gt; 425 &gt; 245</div>
        `
      },
      {
        id: "math-g-2",
        title: "כפל וחילוק בסיסי",
        preview: "לוח הכפל ותרגילי חילוק",
        content: `
          <h2>✖️ כפל וחילוק בסיסי</h2>
          <p><span class="highlight">כפל</span> הוא חיבור חוזר: 3 × 4 = 4+4+4 = 12</p>

          <h3>דוגמאות כפל:</h3>
          <div class="example">
            2 × 5 = 10<br>
            3 × 4 = 12<br>
            6 × 6 = 36
          </div>

          <h3>חילוק הוא הפעולה ההפוכה לכפל:</h3>
          <div class="example">
            12 ÷ 3 = 4 (כי 3 × 4 = 12)<br>
            20 ÷ 5 = 4 (כי 5 × 4 = 20)
          </div>

          <h3>טיפ:</h3>
          <p>אם אתה יודע את לוח הכפל, קל לך גם לחלק!</p>
        `
      },
      {
        id: "math-g-3",
        title: "היקף ושטח בסיסי",
        preview: "מדידת צורות",
        content: `
          <h2>📐 היקף ושטח בסיסי</h2>

          <h3>היקף = הדרך מסביב לצורה</h3>
          <div class="example">
            ריבוע עם צלע 5: היקף = 5+5+5+5 = 20
          </div>

          <h3>שטח ריבוע/מלבן = כמה משבצות בפנים</h3>
          <div class="example">
            מלבן 3×4: שטח = 3 × 4 = 12 משבצות
          </div>

          <h3>זכור:</h3>
          <p>היקף = חיבור הצלעות. שטח = כפל אורך ברוחב.</p>
        `
      }
    ],
    quiz: [
      { question: "3 × 4 = ?", options: ["7", "10", "12", "14"], correct: 2 },
      { question: "12 ÷ 3 = ?", options: ["3", "4", "5", "6"], correct: 1 },
      { question: "250 + 130 = ?", options: ["360", "370", "380", "390"], correct: 2 },
      { question: "480 - 220 = ?", options: ["250", "260", "270", "280"], correct: 1 },
      { question: "מה גדול יותר: 452 או 425?", options: ["452", "425", "שווים", "לא יודע"], correct: 0 },
      { question: "6 × 6 = ?", options: ["30", "32", "36", "42"], correct: 2 },
      { question: "20 ÷ 5 = ?", options: ["3", "4", "5", "6"], correct: 1 },
      { question: "מה ההיקף של ריבוע עם צלע 5?", options: ["10", "15", "20", "25"], correct: 2 },
      { question: "מה השטח של מלבן 3×4?", options: ["7", "10", "12", "14"], correct: 2 },
      { question: "7 × 3 = ?", options: ["18", "20", "21", "24"], correct: 2 },
      { question: "24 ÷ 4 = ?", options: ["4", "5", "6", "7"], correct: 2 },
      { question: "5 × 8 = ?", options: ["35", "38", "40", "45"], correct: 2 },
      { question: "45 ÷ 9 = ?", options: ["4", "5", "6", "7"], correct: 1 },
      { question: "9 × 9 = ?", options: ["72", "81", "90", "99"], correct: 1 },
      { question: "100 ÷ 10 = ?", options: ["1", "10", "100", "1000"], correct: 1 },
      { question: "מה ההיקף של ריבוע עם צלע 7?", options: ["21", "28", "35", "49"], correct: 1 },
      { question: "מה השטח של ריבוע עם צלע 6?", options: ["12", "24", "36", "42"], correct: 2 },
      { question: "8 × 7 = ?", options: ["48", "54", "56", "64"], correct: 2 },
      { question: "36 ÷ 6 = ?", options: ["5", "6", "7", "8"], correct: 1 },
      { question: "125 + 275 = ?", options: ["380", "390", "400", "410"], correct: 2 },
      { question: "600 - 250 = ?", options: ["340", "350", "360", "370"], correct: 1 },
      { question: "4 × 9 = ?", options: ["32", "34", "36", "38"], correct: 2 },
      { question: "56 ÷ 8 = ?", options: ["6", "7", "8", "9"], correct: 1 },
      { question: "6 × 8 = ?", options: ["42", "44", "46", "48"], correct: 3 },
      { question: "63 ÷ 7 = ?", options: ["7", "8", "9", "10"], correct: 2 },
      { question: "מה קטן יותר: 389 או 398?", options: ["389", "398", "שווים", "לא יודע"], correct: 0 },
      { question: "10 × 10 = ?", options: ["10", "100", "110", "1000"], correct: 1 },
      { question: "7 × 7 = ?", options: ["42", "47", "49", "56"], correct: 2 },
      { question: "72 ÷ 8 = ?", options: ["7", "8", "9", "10"], correct: 2 },
      { question: "מה השטח של מלבן 5×6?", options: ["11", "22", "30", "35"], correct: 2 },
      { question: "מה ההיקף של מלבן עם צלעות 4 ו-6?", options: ["10", "20", "24", "26"], correct: 1 },
      { question: "340 + 260 = ?", options: ["580", "590", "600", "610"], correct: 2 },
      { question: "8 × 8 = ?", options: ["56", "60", "64", "72"], correct: 2 },
      { question: "81 ÷ 9 = ?", options: ["7", "8", "9", "10"], correct: 2 },
      { question: "9 × 6 = ?", options: ["48", "52", "54", "56"], correct: 2 },
      { question: "64 ÷ 8 = ?", options: ["6", "7", "8", "9"], correct: 2 },
      { question: "כמה יחידות במאה?", options: ["10", "50", "100", "1000"], correct: 2 },
      { question: "כמה עשרות במאה?", options: ["1", "5", "10", "100"], correct: 2 },
      { question: "3 × 9 = ?", options: ["24", "27", "30", "36"], correct: 1 },
      { question: "42 ÷ 6 = ?", options: ["5", "6", "7", "8"], correct: 2 },
      { question: "5 × 5 = ?", options: ["20", "25", "30", "35"], correct: 1 },
      { question: "48 ÷ 6 = ?", options: ["6", "7", "8", "9"], correct: 2 },
      { question: "7 × 8 = ?", options: ["54", "56", "58", "64"], correct: 1 },
      { question: "90 ÷ 9 = ?", options: ["9", "10", "11", "12"], correct: 1 },
      { question: "425 - 125 = ?", options: ["280", "290", "300", "310"], correct: 2 },
      { question: "150 + 150 = ?", options: ["280", "290", "300", "310"], correct: 2 },
      { question: "6 × 9 = ?", options: ["48", "52", "54", "56"], correct: 2 },
      { question: "80 ÷ 10 = ?", options: ["6", "7", "8", "9"], correct: 2 },
      { question: "איזו צורה יש לה 4 זוויות ישרות ו-4 צלעות שוות?", options: ["משולש", "מלבן", "ריבוע", "עיגול"], correct: 2 },
      { question: "8 × 9 = ?", options: ["63", "70", "72", "81"], correct: 2 },
      { question: "99 ÷ 11 = ?", options: ["8", "9", "10", "11"], correct: 1 },
      { question: "מה ההיקף של משולש שווה צלעות עם צלע 6?", options: ["12", "18", "24", "36"], correct: 1 },
      { question: "12 × 5 = ?", options: ["50", "55", "60", "65"], correct: 2 },
      { question: "144 ÷ 12 = ?", options: ["10", "11", "12", "13"], correct: 2 },
      { question: "11 × 11 = ?", options: ["111", "121", "131", "141"], correct: 1 },
      { question: "132 ÷ 11 = ?", options: ["10", "11", "12", "13"], correct: 2 },
      { question: "700 - 350 = ?", options: ["340", "350", "360", "370"], correct: 1 },
      { question: "12 × 12 = ?", options: ["124", "134", "144", "154"], correct: 2 },
      { question: "121 ÷ 11 = ?", options: ["9", "10", "11", "12"], correct: 2 }
    ],
    flashcards: [
      { front: "3 × 4 = ?", back: "12" },
      { front: "12 ÷ 3 = ?", back: "4" },
      { front: "מה זה היקף?", back: "המרחק מסביב לצורה" },
      { front: "מה זה שטח?", back: "כמה משבצות יש בתוך הצורה" },
      { front: "6 × 6 = ?", back: "36" },
      { front: "36 ÷ 6 = ?", back: "6" },
      { front: "היקף ריבוע = ?", back: "צלע × 4" },
      { front: "שטח מלבן = ?", back: "אורך × רוחב" },
      { front: "9 × 9 = ?", back: "81" },
      { front: "81 ÷ 9 = ?", back: "9" },
      { front: "7 × 8 = ?", back: "56" },
      { front: "כמה עשרות במאה?", back: "10 עשרות" },
      { front: "12 × 12 = ?", back: "144" },
      { front: "8 × 8 = ?", back: "64" },
      { front: "כפל וחילוק קשורים איך?", back: "חילוק הוא ההפוך של כפל" },
      { front: "משולש שווה צלעות", back: "3 צלעות שוות באורכן" }
    ],

    multiplicationQuiz: [
      { question: "6 × 1 = ?", options: ["5", "6", "7", "8"], correct: 1 },
      { question: "6 × 2 = ?", options: ["10", "11", "12", "13"], correct: 2 },
      { question: "6 × 3 = ?", options: ["16", "17", "18", "19"], correct: 2 },
      { question: "6 × 4 = ?", options: ["22", "23", "24", "25"], correct: 2 },
      { question: "6 × 5 = ?", options: ["28", "29", "30", "31"], correct: 2 },
      { question: "6 × 6 = ?", options: ["34", "35", "36", "37"], correct: 2 },
      { question: "6 × 7 = ?", options: ["40", "41", "42", "43"], correct: 2 },
      { question: "6 × 8 = ?", options: ["46", "47", "48", "49"], correct: 2 },
      { question: "6 × 9 = ?", options: ["52", "53", "54", "55"], correct: 2 },
      { question: "6 × 10 = ?", options: ["58", "59", "60", "61"], correct: 2 },
      { question: "7 × 2 = ?", options: ["12", "13", "14", "15"], correct: 2 },
      { question: "7 × 3 = ?", options: ["19", "20", "21", "22"], correct: 2 },
      { question: "7 × 4 = ?", options: ["26", "27", "28", "29"], correct: 2 },
      { question: "7 × 5 = ?", options: ["33", "34", "35", "36"], correct: 2 },
      { question: "7 × 6 = ?", options: ["40", "41", "42", "43"], correct: 2 },
      { question: "7 × 7 = ?", options: ["47", "48", "49", "50"], correct: 2 },
      { question: "7 × 8 = ?", options: ["54", "55", "56", "57"], correct: 2 },
      { question: "7 × 9 = ?", options: ["61", "62", "63", "64"], correct: 2 },
      { question: "7 × 10 = ?", options: ["68", "69", "70", "71"], correct: 2 },
      { question: "8 × 2 = ?", options: ["14", "15", "16", "17"], correct: 2 },
      { question: "8 × 3 = ?", options: ["22", "23", "24", "25"], correct: 2 },
      { question: "8 × 4 = ?", options: ["30", "31", "32", "33"], correct: 2 },
      { question: "8 × 5 = ?", options: ["38", "39", "40", "41"], correct: 2 },
      { question: "8 × 6 = ?", options: ["46", "47", "48", "49"], correct: 2 },
      { question: "8 × 7 = ?", options: ["54", "55", "56", "57"], correct: 2 },
      { question: "8 × 8 = ?", options: ["62", "63", "64", "65"], correct: 2 },
      { question: "8 × 9 = ?", options: ["70", "71", "72", "73"], correct: 2 },
      { question: "9 × 2 = ?", options: ["16", "17", "18", "19"], correct: 2 },
      { question: "9 × 3 = ?", options: ["25", "26", "27", "28"], correct: 2 },
      { question: "9 × 4 = ?", options: ["34", "35", "36", "37"], correct: 2 },
      { question: "9 × 5 = ?", options: ["43", "44", "45", "46"], correct: 2 },
      { question: "9 × 6 = ?", options: ["52", "53", "54", "55"], correct: 2 },
      { question: "9 × 7 = ?", options: ["61", "62", "63", "64"], correct: 2 },
      { question: "9 × 8 = ?", options: ["70", "71", "72", "73"], correct: 2 },
      { question: "11 × 2 = ?", options: ["20", "21", "22", "23"], correct: 2 },
      { question: "11 × 3 = ?", options: ["31", "32", "33", "34"], correct: 2 },
      { question: "11 × 4 = ?", options: ["42", "43", "44", "45"], correct: 2 },
      { question: "12 × 2 = ?", options: ["22", "23", "24", "25"], correct: 2 },
      { question: "12 × 3 = ?", options: ["34", "35", "36", "37"], correct: 2 },
      { question: "12 × 4 = ?", options: ["46", "47", "48", "49"], correct: 2 },
      { question: "8 ÷ 2 = ?", options: ["3", "4", "5", "6"], correct: 1 },
      { question: "18 ÷ 6 = ?", options: ["2", "3", "4", "5"], correct: 1 },
      { question: "21 ÷ 7 = ?", options: ["2", "3", "4", "5"], correct: 1 },
      { question: "32 ÷ 8 = ?", options: ["3", "4", "5", "6"], correct: 1 },
      { question: "45 ÷ 9 = ?", options: ["4", "5", "6", "7"], correct: 1 },
      { question: "60 ÷ 6 = ?", options: ["8", "9", "10", "11"], correct: 2 },
      { question: "70 ÷ 7 = ?", options: ["8", "9", "10", "11"], correct: 2 },
      { question: "72 ÷ 8 = ?", options: ["8", "9", "10", "11"], correct: 1 },
      { question: "81 ÷ 9 = ?", options: ["8", "9", "10", "11"], correct: 1 },
      { question: "132 ÷ 11 = ?", options: ["10", "11", "12", "13"], correct: 1 },
      { question: "144 ÷ 12 = ?", options: ["10", "11", "12", "13"], correct: 2 },
      { question: "6 × 12 = ?", options: ["68", "70", "72", "74"], correct: 2 },
      { question: "9 × 9 = ?", options: ["79", "80", "81", "82"], correct: 2 },
      { question: "11 × 11 = ?", options: ["110", "111", "121", "122"], correct: 2 }
    ]
  },

  // ========== HANGMAN WORDS - כיתה ג׳ ==========
  hangman: {
    hebrew: [
      { word: 'סימן', hint: 'סימן פיסוק בסוף משפט' },
      { word: 'שורש', hint: 'האותיות שחוזרות במשפחת מילים' },
      { word: 'תלמיד', hint: 'מי שלומד בבית ספר' },
      { word: 'מורה', hint: 'מי שמלמד בכיתה' },
      { word: 'עתיד', hint: 'זמן שעוד יקרה' },
      { word: 'עבר', hint: 'זמן שכבר קרה' },
      { word: 'הווה', hint: 'זמן שקורה עכשיו' },
      { word: 'שולחן', hint: 'רהיט שכותבים עליו' },
      { word: 'כיסא', hint: 'יושבים עליו' },
      { word: 'חלון', hint: 'רואים דרכו החוצה' },
      { word: 'עיפרון', hint: 'כותבים איתו וניתן למחוק' },
      { word: 'מחברת', hint: 'כותבים בה שיעורים' },
      { word: 'תיק', hint: 'שמים בו את הספרים לבית הספר' },
      { word: 'חצר', hint: 'משחקים בה בהפסקה' },
      { word: 'ספרייה', hint: 'מקום עם המון ספרים' },
      { word: 'מבחן', hint: 'בודקים בו מה למדנו' }
    ],
    english: [
      { word: 'MONDAY', hint: 'The first school day of the week' },
      { word: 'FAMILY', hint: 'Mother, father, sisters and brothers' },
      { word: 'MOTHER', hint: 'אמא in English' },
      { word: 'BROTHER', hint: 'A male sibling' },
      { word: 'JANUARY', hint: 'The first month of the year' },
      { word: 'SCHOOL', hint: 'Where you learn' },
      { word: 'PENCIL', hint: 'You write with it' },
      { word: 'WINDOW', hint: 'You look outside through it' },
      { word: 'TEACHER', hint: 'The person who teaches the class' },
      { word: 'FRIDAY', hint: 'The day before the weekend' },
      { word: 'SUMMER', hint: 'The hottest season' },
      { word: 'WINTER', hint: 'The coldest season' },
      { word: 'HAND', hint: 'You write and wave with it' },
      { word: 'HEAD', hint: 'Your brain is inside it' },
      { word: 'GRANDMA', hint: 'Your mother\'s or father\'s mother' },
      { word: 'STUDENT', hint: 'A person who learns at school' }
    ],
    math: [
      { word: 'כפל', hint: 'חיבור חוזר, למשל 3×4' },
      { word: 'חילוק', hint: 'הפעולה ההפוכה לכפל' },
      { word: 'היקף', hint: 'המרחק מסביב לצורה' },
      { word: 'שטח', hint: 'כמה משבצות בתוך הצורה' },
      { word: 'מלבן', hint: 'צורה עם 4 זוויות ישרות, לא כל הצלעות שוות' },
      { word: 'ריבוע', hint: 'צורה עם 4 צלעות שוות ו-4 זוויות ישרות' },
      { word: 'משולש', hint: 'צורה עם 3 צלעות' },
      { word: 'יחידות', hint: 'הספרה הימנית ביותר במספר' },
      { word: 'עשרות', hint: 'הספרה השנייה מימין במספר' },
      { word: 'מאות', hint: 'הספרה השלישית מימין במספר' },
      { word: 'לוח הכפל', hint: 'טבלת תוצאות הכפל' },
      { word: 'שווה צלעות', hint: 'משולש עם כל הצלעות שוות' },
      { word: 'זוגי', hint: 'מספר שמתחלק ב-2 בלי שארית' },
      { word: 'אי זוגי', hint: 'מספר שלא מתחלק ב-2 בלי שארית' }
    ]
  },

  // ========== MEMORY PAIRS - כיתה ג׳ ==========
  memory: {
    hebrew: [
      ['עבר', 'הלכתי'], ['הווה', 'הולך'], ['עתיד', 'אלך'],
      ['ילד', 'ילדים'], ['שולחן', 'שולחנות'], ['חלון', 'חלונות'],
      ['כיסא', 'כיסאות'], ['עיפרון', 'עיפרונים'], ['תלמיד', 'תלמידים'],
      ['סימן שאלה', '?'], ['סימן קריאה', '!'], ['נקודה', '.'],
      ['שורש כת"ב', 'כותב'], ['שורש למ"ד', 'לומד']
    ],
    english: [
      ['mother', 'אמא'], ['father', 'אבא'], ['sister', 'אחות'],
      ['brother', 'אח'], ['head', 'ראש'], ['hand', 'יד'],
      ['foot', 'כף רגל'], ['eye', 'עין'], ['Monday', 'יום שני'],
      ['Friday', 'יום שישי'], ['January', 'ינואר'], ['December', 'דצמבר'],
      ['this is', 'לדבר אחד'], ['these are', 'להרבה דברים']
    ],
    math: [
      ['3×4', '12'], ['6×6', '36'], ['12÷3', '4'],
      ['20÷5', '4'], ['7×3', '21'], ['9×9', '81'],
      ['היקף ריבוע', 'צלע×4'], ['שטח מלבן', 'אורך×רוחב'],
      ['8×8', '64'], ['64÷8', '8'], ['5×8', '40'], ['40÷5', '8'],
      ['11×11', '121'], ['144÷12', '12']
    ]
  },

  // ========== DICTATION - כיתה ג׳ ==========
  dictation: [
    {
      week: 'שבוע 1 — משפחה וימים',
      words: [
        { word: 'mother', hebrewHint: 'אמא' },
        { word: 'father', hebrewHint: 'אבא' },
        { word: 'sister', hebrewHint: 'אחות' },
        { word: 'brother', hebrewHint: 'אח' },
        { word: 'Monday', hebrewHint: 'יום שני' },
        { word: 'Friday', hebrewHint: 'יום שישי' }
      ]
    },
    {
      week: 'שבוע 2 — בבית הספר',
      words: [
        { word: 'school', hebrewHint: 'בית ספר' },
        { word: 'teacher', hebrewHint: 'מורה' },
        { word: 'pencil', hebrewHint: 'עיפרון' },
        { word: 'book', hebrewHint: 'ספר' },
        { word: 'bag', hebrewHint: 'תיק' },
        { word: 'friend', hebrewHint: 'חבר' }
      ]
    },
    {
      week: 'שבוע 3 — גוף האדם',
      words: [
        { word: 'head', hebrewHint: 'ראש' },
        { word: 'hand', hebrewHint: 'יד' },
        { word: 'foot', hebrewHint: 'כף רגל' },
        { word: 'eye', hebrewHint: 'עין' },
        { word: 'ear', hebrewHint: 'אוזן' },
        { word: 'nose', hebrewHint: 'אף' }
      ]
    },
    {
      week: 'שבוע 4 — חודשים',
      words: [
        { word: 'January', hebrewHint: 'ינואר' },
        { word: 'June', hebrewHint: 'יוני' },
        { word: 'July', hebrewHint: 'יולי' },
        { word: 'August', hebrewHint: 'אוגוסט' },
        { word: 'December', hebrewHint: 'דצמבר' },
        { word: 'month', hebrewHint: 'חודש' }
      ]
    },
    {
      week: 'שבוע 5 — עונות ומזג אוויר',
      words: [
        { word: 'summer', hebrewHint: 'קיץ' },
        { word: 'winter', hebrewHint: 'חורף' },
        { word: 'spring', hebrewHint: 'אביב' },
        { word: 'autumn', hebrewHint: 'סתיו' },
        { word: 'hot', hebrewHint: 'חם' },
        { word: 'cold', hebrewHint: 'קר' }
      ]
    }
  ],

  // ========== TEST PREP DICTATION - כיתה ג׳ ==========
  testPrepDictation: [
    { word: 'dangerous', hebrewHint: 'מסוכן' },
    { word: 'only', hebrewHint: 'רק' },
    { word: 'come back', hebrewHint: 'לחזור' },
    { word: 'here', hebrewHint: 'כאן' },
    { word: 'are you ready', hebrewHint: 'האם אתה מוכן' },
    { word: 'drive', hebrewHint: 'לנהוג' },
    { word: "I'm ready", hebrewHint: 'אני מוכן' },
    { word: 'poor', hebrewHint: 'עני' },
    { word: 'teach', hebrewHint: 'ללמד' },
    { word: 'tonight', hebrewHint: 'הלילה' }
  ],

  // ========== WORD MATCHING - כיתה ג׳ ==========
  wordMatch: [
    { hebrew: 'אמא', english: 'mother' },
    { hebrew: 'אבא', english: 'father' },
    { hebrew: 'אחות', english: 'sister' },
    { hebrew: 'אח', english: 'brother' },
    { hebrew: 'ראש', english: 'head' },
    { hebrew: 'יד', english: 'hand' },
    { hebrew: 'עין', english: 'eye' },
    { hebrew: 'אוזן', english: 'ear' },
    { hebrew: 'בית ספר', english: 'school' },
    { hebrew: 'מורה', english: 'teacher' },
    { hebrew: 'עיפרון', english: 'pencil' },
    { hebrew: 'חבר', english: 'friend' },
    { hebrew: 'קיץ', english: 'summer' },
    { hebrew: 'חורף', english: 'winter' }
  ]
};

// ===== GRADE 6 DATA (כיתה ו׳) =====
const APP_DATA_GRADE6 = {
  tips: [
    "ידעת? תלמידי כיתה ו׳ שקוראים כל יום משפרים את אוצר המילים שלהם משמעותית!",
    "טיפ: כשאתה פותר בעיה מילולית, קודם תבין מה שואלים ואז תפתור!",
    "מדהים! ככל שתתרגל יותר לוח כפל ואחוזים, כך תהיה מהיר יותר במבחנים!",
    "טיפ: בזמן כתיבה, תכנן קודם מה תרצה לכתוב ואז תתחיל!",
    "ידעת? חזרה על חומר לפני השינה עוזרת לזכור אותו טוב יותר!",
    "טיפ: כשאתה לא מבין משהו, אל תתבייש לשאול שוב!",
    "מדהים! תלמידים שמתרגלים אנגלית כל יום מדברים בביטחון רב יותר!",
    "טיפ: לפני מבחן גדול, עשה תוכנית חזרה יומית - זה עוזר מאוד!"
  ],

  // ========== HEBREW (עברית) - כיתה ו׳ ==========
  hebrew: {
    name: "עברית",
    icon: "📖",
    lessons: [
      {
        id: "heb-vav-1",
        title: "משפט פשוט ומשפט מורכב",
        preview: "איך מחברים בין משפטים",
        content: `
          <h2>📖 משפט פשוט ומשפט מורכב</h2>
          <p><span class="highlight">משפט פשוט</span> מכיל רעיון אחד. <span class="highlight">משפט מורכב</span> מחבר בין שני רעיונות או יותר.</p>

          <h3>משפט פשוט:</h3>
          <div class="example">הילד קרא ספר.</div>

          <h3>משפט מורכב עם מילות קישור:</h3>
          <div class="example">
            הילד קרא ספר <strong>כי</strong> הוא אהב את הסיפור.<br>
            ירד גשם, <strong>אבל</strong> יצאנו לטייל.<br>
            למדתי הרבה, <strong>לכן</strong> הצלחתי במבחן.<br>
            <strong>אם</strong> תלמד קשה, תצליח.
          </div>

          <h3>מילות קישור נפוצות:</h3>
          <div class="example">כי, אבל, לכן, אם, כאשר, ש-, וגם, או</div>
        `
      },
      {
        id: "heb-vav-2",
        title: "בניינים בעברית",
        preview: "פָּעַל, פִּיעֵל, הִפְעִיל",
        content: `
          <h2>📖 בניינים בעברית</h2>
          <p>ה<span class="highlight">בניין</span> הוא התבנית שבה נבנה הפועל מהשורש.</p>

          <h3>בניין פָּעַל (הפעולה הפשוטה ביותר):</h3>
          <div class="example">כתב, למד, הלך, ישב</div>

          <h3>בניין פִּיעֵל (לרוב פעולה חזקה יותר):</h3>
          <div class="example">דיבר, סיפר, לימד, ביקש</div>

          <h3>בניין הִפְעִיל (לגרום למישהו לעשות):</h3>
          <div class="example">הכתיב (גרם לכתוב), הלביש (גרם ללבוש), הרגיש</div>

          <h3>איך מזהים?</h3>
          <p>שמים לב לתבנית האותיות ולתנועות סביב השורש.</p>
        `
      },
      {
        id: "heb-vav-3",
        title: "מילות קישור",
        preview: "כי, אבל, לכן, אם, כאשר",
        content: `
          <h2>📖 מילות קישור</h2>
          <p>מילות קישור מחברות בין חלקי משפט ומסבירות את הקשר ביניהם.</p>

          <h3>סיבה - "כי":</h3>
          <div class="example">לא יצאתי לשחק כי ירד גשם.</div>

          <h3>ניגוד - "אבל":</h3>
          <div class="example">רציתי לישון, אבל הייתי צריך ללמוד.</div>

          <h3>תוצאה - "לכן":</h3>
          <div class="example">לא הכנתי שיעורים, לכן קיבלתי הערה.</div>

          <h3>תנאי - "אם":</h3>
          <div class="example">אם ירד גשם, לא נצא לטיול.</div>

          <h3>זמן - "כאשר":</h3>
          <div class="example">כאשר הגעתי הביתה, אכלתי ארוחת ערב.</div>
        `
      }
    ],
    quiz: [
      { question: "מהו משפט מורכב?", options: ["משפט עם רעיון אחד", "משפט המחבר שני רעיונות", "משפט קצר", "משפט ללא פועל"], correct: 1 },
      { question: "איזו מילה מבטאת סיבה?", options: ["אבל", "כי", "לכן", "או"], correct: 1 },
      { question: "איזו מילה מבטאת ניגוד?", options: ["כי", "אם", "אבל", "כאשר"], correct: 2 },
      { question: "איזו מילה מבטאת תוצאה?", options: ["לכן", "אם", "כי", "אבל"], correct: 0 },
      { question: "איזו מילה מבטאת תנאי?", options: ["כי", "אם", "לכן", "אבל"], correct: 1 },
      { question: "'כתב' שייך לאיזה בניין?", options: ["פָּעַל", "פִּיעֵל", "הִפְעִיל", "אין בניין"], correct: 0 },
      { question: "'דיבר' שייך לאיזה בניין?", options: ["פָּעַל", "פִּיעֵל", "הִפְעִיל", "אין בניין"], correct: 1 },
      { question: "'הכתיב' שייך לאיזה בניין?", options: ["פָּעַל", "פִּיעֵל", "הִפְעִיל", "אין בניין"], correct: 2 },
      { question: "'לימד' שייך לאיזה בניין?", options: ["פָּעַל", "פִּיעֵל", "הִפְעִיל", "אין בניין"], correct: 1 },
      { question: "'הלביש' שייך לאיזה בניין?", options: ["פָּעַל", "פִּיעֵל", "הִפְעִיל", "אין בניין"], correct: 2 },
      { question: "מה משמעות בניין הפעיל?", options: ["פעולה פשוטה", "לגרום למישהו לעשות", "פעולה שכבר קרתה", "אין משמעות"], correct: 1 },
      { question: "'הלך' שייך לאיזה בניין?", options: ["פָּעַל", "פִּיעֵל", "הִפְעִיל", "אין בניין"], correct: 0 },
      { question: "'סיפר' שייך לאיזה בניין?", options: ["פָּעַל", "פִּיעֵל", "הִפְעִיל", "אין בניין"], correct: 1 },
      { question: "השלם: 'לא יצאתי ___ ירד גשם'", options: ["אבל", "כי", "לכן", "או"], correct: 1 },
      { question: "השלם: 'למדתי קשה, ___ הצלחתי'", options: ["כי", "אם", "לכן", "אבל"], correct: 2 },
      { question: "השלם: '___ תתאמן, תשתפר'", options: ["כי", "אם", "לכן", "אבל"], correct: 1 },
      { question: "מהו משפט פשוט?", options: ["משפט עם רעיון אחד", "משפט עם שני רעיונות", "משפט ארוך", "משפט עם מילת קישור"], correct: 0 },
      { question: "'הרגיש' שייך לאיזה בניין?", options: ["פָּעַל", "פִּיעֵל", "הִפְעִיל", "אין בניין"], correct: 2 },
      { question: "'ביקש' שייך לאיזה בניין?", options: ["פָּעַל", "פִּיעֵל", "הִפְעִיל", "אין בניין"], correct: 1 },
      { question: "'ישב' שייך לאיזה בניין?", options: ["פָּעַל", "פִּיעֵל", "הִפְעִיל", "אין בניין"], correct: 0 },
      { question: "איזו מילה מציינת זמן?", options: ["כי", "לכן", "כאשר", "אבל"], correct: 2 },
      { question: "'רציתי לישון, ___ הייתי צריך ללמוד'", options: ["כי", "אם", "אבל", "לכן"], correct: 2 },
      { question: "כמה בניינים למדנו בשיעור?", options: ["1", "2", "3", "4"], correct: 2 },
      { question: "מהי מטרת מילות הקישור?", options: ["לקצר משפטים", "לחבר בין חלקי משפט", "להאריך מילים", "אין מטרה"], correct: 1 },
      { question: "'כאשר הגעתי הביתה, אכלתי' - איזו מילת קישור?", options: ["כי", "כאשר", "אבל", "או"], correct: 1 },
      { question: "מה ההבדל בין פָּעַל להִפְעִיל?", options: ["אין הבדל", "הפעיל מבטא לגרום למישהו לעשות", "פעל מבטא לגרום למישהו לעשות", "פעל הוא רק עתיד"], correct: 1 },
      { question: "השלם משפט מורכב: 'הוא לא הגיע לבית הספר ___ הוא היה חולה'", options: ["אבל", "כי", "או", "לכן"], correct: 1 },
      { question: "'ולמד' שייך לאיזה בניין?", options: ["פָּעַל", "פִּיעֵל", "הִפְעִיל", "אין בניין"], correct: 0 },
      { question: "מהי מילת קישור המבטאת ברירה?", options: ["או", "כי", "לכן", "אם"], correct: 0 },
      { question: "'תיאר' שייך לאיזה בניין?", options: ["פָּעַל", "פִּיעֵל", "הִפְעִיל", "אין בניין"], correct: 1 }
    ],
    flashcards: [
      { front: "משפט פשוט", back: "מכיל רעיון אחד" },
      { front: "משפט מורכב", back: "מחבר בין שני רעיונות או יותר" },
      { front: "מילת קישור - סיבה", back: "כי" },
      { front: "מילת קישור - ניגוד", back: "אבל" },
      { front: "מילת קישור - תוצאה", back: "לכן" },
      { front: "מילת קישור - תנאי", back: "אם" },
      { front: "מילת קישור - זמן", back: "כאשר" },
      { front: "בניין פָּעַל", back: "כתב, למד, הלך, ישב" },
      { front: "בניין פִּיעֵל", back: "דיבר, סיפר, לימד, ביקש" },
      { front: "בניין הִפְעִיל", back: "הכתיב, הלביש, הרגיש" },
      { front: "מהו בניין?", back: "התבנית שבה נבנה הפועל מהשורש" },
      { front: "משמעות הִפְעִיל", back: "לגרום למישהו לעשות משהו" },
      { front: "דוגמה למשפט תנאי", back: "אם תלמד קשה, תצליח" },
      { front: "דוגמה למשפט סיבה", back: "לא יצאתי כי ירד גשם" },
      { front: "דוגמה למשפט תוצאה", back: "לא למדתי, לכן נכשלתי" },
      { front: "דוגמה למשפט ניגוד", back: "רציתי לישון, אבל למדתי" },
      { front: "'כתב' - איזה בניין?", back: "פָּעַל" },
      { front: "'הכתיב' - איזה בניין?", back: "הִפְעִיל" },
      { front: "'לימד' - איזה בניין?", back: "פִּיעֵל" },
      { front: "כמה מילות קישור למדנו?", back: "5: כי, אבל, לכן, אם, כאשר" }
    ]
  },

  // ========== ENGLISH - כיתה ו׳ ==========
  english: {
    name: "אנגלית",
    icon: "🔤",
    lessons: [
      {
        id: "eng-vav-1",
        title: "Past Simple - Irregular Verbs",
        preview: "went, saw, ate, took...",
        content: `
          <h2>🔤 Past Simple - Irregular Verbs</h2>
          <p>Some verbs don't add <span class="highlight">-ed</span> in the past — they change completely!</p>

          <h3>Common irregular verbs:</h3>
          <div class="example">
            go → went<br>
            see → saw<br>
            eat → ate<br>
            take → took<br>
            have → had<br>
            do → did<br>
            write → wrote<br>
            read → read<br>
            come → came<br>
            give → gave
          </div>

          <h3>Examples:</h3>
          <div class="example">
            Yesterday I went to the park.<br>
            She saw a movie last night.<br>
            We ate pizza for dinner.
          </div>
        `
      },
      {
        id: "eng-vav-2",
        title: "Future Simple - will",
        preview: "will + verb",
        content: `
          <h2>🔮 Future Simple - will</h2>
          <p>We use <span class="highlight">will</span> to talk about the future!</p>

          <h3>Positive:</h3>
          <div class="example">
            I will visit my grandparents tomorrow.<br>
            She will finish her homework soon.
          </div>

          <h3>Negative:</h3>
          <div class="example">
            I will not (won't) go to school on Saturday.<br>
            They won't be late.
          </div>

          <h3>Questions:</h3>
          <div class="example">
            Will you come to the party?<br>
            Will it rain tomorrow?
          </div>

          <h3>Remember:</h3>
          <p>will + not = <span class="highlight">won't</span></p>
        `
      },
      {
        id: "eng-vav-3",
        title: "Comparatives and Superlatives",
        preview: "bigger, biggest, more beautiful, most beautiful",
        content: `
          <h2>📏 Comparatives and Superlatives</h2>
          <p>We use these to compare things!</p>

          <h3>Short adjectives (+er / +est):</h3>
          <div class="example">
            tall → taller → tallest<br>
            big → bigger → biggest<br>
            fast → faster → fastest
          </div>

          <h3>Long adjectives (more / most):</h3>
          <div class="example">
            beautiful → more beautiful → most beautiful<br>
            interesting → more interesting → most interesting
          </div>

          <h3>Irregular:</h3>
          <div class="example">
            good → better → best<br>
            bad → worse → worst
          </div>

          <h3>Example sentences:</h3>
          <div class="example">
            An elephant is bigger than a mouse.<br>
            This is the most interesting book I read.
          </div>
        `
      }
    ],
    quiz: [
      { question: "What is the past tense of 'go'?", options: ["goed", "went", "gone", "going"], correct: 1 },
      { question: "What is the past tense of 'see'?", options: ["seed", "seen", "saw", "sees"], correct: 2 },
      { question: "What is the past tense of 'eat'?", options: ["eated", "ate", "eaten", "eats"], correct: 1 },
      { question: "What is the past tense of 'take'?", options: ["taked", "took", "taken", "takes"], correct: 1 },
      { question: "What is the past tense of 'have'?", options: ["haved", "has", "had", "having"], correct: 2 },
      { question: "What is the past tense of 'do'?", options: ["doed", "did", "done", "does"], correct: 1 },
      { question: "What is the past tense of 'write'?", options: ["writed", "wrote", "written", "writes"], correct: 1 },
      { question: "What is the past tense of 'come'?", options: ["comed", "came", "come", "coming"], correct: 1 },
      { question: "What is the past tense of 'give'?", options: ["gived", "gave", "given", "gives"], correct: 1 },
      { question: "\"Tomorrow I ___ visit my grandparents.\"", options: ["will", "went", "am", "was"], correct: 0 },
      { question: "What is the negative short form of 'will not'?", options: ["willn't", "won't", "wilnt", "not will"], correct: 1 },
      { question: "\"___ you come to the party?\"", options: ["Do", "Will", "Are", "Did"], correct: 1 },
      { question: "Comparative of 'tall'?", options: ["more tall", "taller", "tallest", "tallly"], correct: 1 },
      { question: "Superlative of 'tall'?", options: ["taller", "more tall", "tallest", "most tall"], correct: 2 },
      { question: "Comparative of 'beautiful'?", options: ["beautifuller", "more beautiful", "beautifullest", "most beautiful"], correct: 1 },
      { question: "Superlative of 'good'?", options: ["gooder", "goodest", "better", "best"], correct: 3 },
      { question: "Comparative of 'good'?", options: ["gooder", "better", "best", "more good"], correct: 1 },
      { question: "Superlative of 'bad'?", options: ["badder", "worse", "worst", "more bad"], correct: 2 },
      { question: "Comparative of 'big'?", options: ["bigger", "more big", "biggest", "bigly"], correct: 0 },
      { question: "\"An elephant is ___ than a mouse.\" (big)", options: ["big", "bigger", "biggest", "the bigger"], correct: 1 },
      { question: "\"This is the ___ book I read.\" (interesting)", options: ["more interesting", "interestinger", "most interesting", "interesting"], correct: 2 },
      { question: "What is the past tense of 'read'?", options: ["readed", "read", "reads", "reading"], correct: 1 },
      { question: "\"She ___ not be late tomorrow.\"", options: ["will", "was", "did", "does"], correct: 0 },
      { question: "Comparative of 'fast'?", options: ["faster", "more fast", "fastest", "fastly"], correct: 0 },
      { question: "\"Yesterday we ___ pizza.\" (eat)", options: ["eat", "eaten", "ate", "eating"], correct: 2 },
      { question: "\"They ___ won't be late.\"", options: ["they", "will", "was", "do"], correct: 1 },
      { question: "Superlative of 'fast'?", options: ["faster", "more fast", "fastest", "most fast"], correct: 2 },
      { question: "\"Last week I ___ a letter.\" (write)", options: ["write", "writed", "wrote", "written"], correct: 2 },
      { question: "Superlative of 'interesting'?", options: ["interestingest", "more interesting", "most interesting", "interestinger"], correct: 2 },
      { question: "\"He ___ to the park yesterday.\" (go)", options: ["go", "goes", "went", "going"], correct: 2 },
      { question: "\"Will it ___ tomorrow?\" (rain)", options: ["rains", "rained", "rain", "raining"], correct: 2 },
      { question: "Comparative of 'happy'?", options: ["happier", "more happy", "happiest", "happilyer"], correct: 0 },
      { question: "Superlative of 'happy'?", options: ["happier", "happiest", "most happy", "happilyest"], correct: 1 },
      { question: "\"She ___ me a present yesterday.\" (give)", options: ["give", "gived", "gave", "given"], correct: 2 },
      { question: "\"We ___ come to school tomorrow.\"", options: ["will", "went", "did", "was"], correct: 0 },
      { question: "What is the past tense of 'come'? (again)", options: ["came", "comed", "come", "coming"], correct: 0 },
      { question: "Comparative of 'small'?", options: ["smaller", "more small", "smallest", "smally"], correct: 0 },
      { question: "Superlative of 'small'?", options: ["smaller", "more small", "smallest", "most small"], correct: 2 },
      { question: "\"He is the ___ boy in the class.\" (tall)", options: ["taller", "tallest", "more tall", "tall"], correct: 1 },
      { question: "\"I ___ my homework yesterday.\" (do)", options: ["do", "does", "did", "doing"], correct: 2 },
      { question: "\"They ___ not go to the party.\" (future)", options: ["will", "went", "did", "do"], correct: 0 }
    ],
    flashcards: [
      { front: "go → ?", back: "went" },
      { front: "see → ?", back: "saw" },
      { front: "eat → ?", back: "ate" },
      { front: "take → ?", back: "took" },
      { front: "have → ?", back: "had" },
      { front: "do → ?", back: "did" },
      { front: "write → ?", back: "wrote" },
      { front: "read → ?", back: "read (same spelling)" },
      { front: "come → ?", back: "came" },
      { front: "give → ?", back: "gave" },
      { front: "will", back: "used for the future" },
      { front: "won't", back: "will + not" },
      { front: "tall → ?", back: "taller → tallest" },
      { front: "big → ?", back: "bigger → biggest" },
      { front: "fast → ?", back: "faster → fastest" },
      { front: "beautiful → ?", back: "more beautiful → most beautiful" },
      { front: "interesting → ?", back: "more interesting → most interesting" },
      { front: "good → ?", back: "better → best" },
      { front: "bad → ?", back: "worse → worst" },
      { front: "happy → ?", back: "happier → happiest" },
      { front: "small → ?", back: "smaller → smallest" },
      { front: "\"Will you come?\"", back: "שאלה על עתיד" },
      { front: "Short adjectives rule", back: "+er / +est (tall, taller, tallest)" },
      { front: "Long adjectives rule", back: "more / most (interesting)" }
    ]
  },

  // ========== MATH (מתמטיקה) - כיתה ו׳ ==========
  math: {
    name: "מתמטיקה",
    icon: "🔢",
    lessons: [
      {
        id: "math-vav-1",
        title: "אחוזים ויחס",
        preview: "מה זה אחוז ואיך מחשבים אותו",
        content: `
          <h2>💯 אחוזים ויחס</h2>
          <p><span class="highlight">אחוז</span> הוא חלק מתוך 100.</p>

          <h3>חישוב אחוז ממספר:</h3>
          <div class="example">
            20% מ-50: 50 × 20 ÷ 100 = 10<br>
            75% מ-80: 80 × 75 ÷ 100 = 60
          </div>

          <h3>המרה בין אחוז, שבר ועשרוני:</h3>
          <div class="example">
            50% = ½ = 0.5<br>
            25% = ¼ = 0.25<br>
            10% = ¹⁄₁₀ = 0.1
          </div>

          <h3>יחס:</h3>
          <p>יחס משווה בין שני גדלים. לדוגמה, יחס של 2:3 בין בנים לבנות.</p>
        `
      },
      {
        id: "math-vav-2",
        title: "פעולות עם שברים מעורבים",
        preview: "חיבור, חיסור, כפל וחילוק שברים",
        content: `
          <h2>➗ פעולות עם שברים מעורבים</h2>
          <p><span class="highlight">שבר מעורב</span> הוא שלם ושבר יחד, למשל 2¾.</p>

          <h3>המרת שבר מעורב לשבר פשוט:</h3>
          <div class="example">2¾ = (2×4+3)/4 = ¹¹⁄₄</div>

          <h3>חיבור וחיסור שברים:</h3>
          <div class="example">
            ½ + ⅓ = ³⁄₆ + ²⁄₆ = ⁵⁄₆<br>
            ⅔ - ¼ = ⁸⁄₁₂ - ³⁄₁₂ = ⁵⁄₁₂
          </div>

          <h3>כפל וחילוק שברים:</h3>
          <div class="example">
            ½ × ⅔ = ²⁄₆ = ⅓<br>
            ½ ÷ ¼ = ½ × ⁴⁄₁ = 2
          </div>
        `
      },
      {
        id: "math-vav-3",
        title: "מעגל - היקף ושטח",
        preview: "רדיוס, קוטר ופאי",
        content: `
          <h2>⭕ מעגל - היקף ושטח</h2>

          <h3>מושגים:</h3>
          <div class="example">
            רדיוס (r) - מרכז המעגל עד השפה<br>
            קוטר (d) - פעמיים הרדיוס: d = 2r<br>
            π (פאי) ≈ 3.14
          </div>

          <h3>היקף מעגל:</h3>
          <div class="example">היקף = 2 × π × r</div>

          <h3>שטח מעגל:</h3>
          <div class="example">שטח = π × r²</div>

          <h3>דוגמה:</h3>
          <p>מעגל עם רדיוס 5: היקף = 2 × 3.14 × 5 = 31.4, שטח = 3.14 × 25 = 78.5</p>
        `
      },
      {
        id: "math-vav-4",
        title: "נפח ושטח פנים",
        preview: "נפח תיבה וקובייה",
        content: `
          <h2>📦 נפח ושטח פנים</h2>

          <h3>נפח תיבה:</h3>
          <div class="example">נפח = אורך × רוחב × גובה</div>

          <h3>דוגמה:</h3>
          <div class="example">תיבה 3×4×5: נפח = 3×4×5 = 60</div>

          <h3>נפח קובייה (כל הצלעות שוות):</h3>
          <div class="example">נפח = צלע × צלע × צלע</div>

          <h3>שטח פנים של תיבה:</h3>
          <p>סכום שטחי כל 6 הפאות של התיבה.</p>
        `
      }
    ],
    quiz: [
      { question: "20% מ-50 = ?", options: ["5", "10", "15", "20"], correct: 1 },
      { question: "75% מ-80 = ?", options: ["50", "55", "60", "65"], correct: 2 },
      { question: "50% = ?", options: ["¼", "½", "¾", "1"], correct: 1 },
      { question: "25% = ?", options: ["⅕", "¼", "⅓", "½"], correct: 1 },
      { question: "2¾ כשבר פשוט = ?", options: ["⁹⁄₄", "¹⁰⁄₄", "¹¹⁄₄", "¹²⁄₄"], correct: 2 },
      { question: "½ + ⅓ = ?", options: ["²⁄₅", "⅚", "¾", "⅓"], correct: 1 },
      { question: "⅔ - ¼ = ?", options: ["⁵⁄₁₂", "⅓", "¹⁄₁₂", "⁷⁄₁₂"], correct: 0 },
      { question: "½ × ⅔ = ?", options: ["⅙", "⅓", "⅔", "¾"], correct: 1 },
      { question: "½ ÷ ¼ = ?", options: ["⅛", "1", "2", "4"], correct: 2 },
      { question: "מהו רדיוס?", options: ["פעמיים הקוטר", "מרכז המעגל עד השפה", "היקף המעגל", "שטח המעגל"], correct: 1 },
      { question: "מהו קוטר?", options: ["חצי מהרדיוס", "פעמיים הרדיוס", "שטח המעגל", "היקף המעגל"], correct: 1 },
      { question: "מה ערכו המקורב של π?", options: ["2.14", "3.14", "4.14", "1.14"], correct: 1 },
      { question: "היקף מעגל עם רדיוס 5 (π≈3.14) = ?", options: ["15.7", "31.4", "62.8", "78.5"], correct: 1 },
      { question: "שטח מעגל עם רדיוס 5 (π≈3.14) = ?", options: ["31.4", "62.8", "78.5", "157"], correct: 2 },
      { question: "נפח תיבה 3×4×5 = ?", options: ["12", "20", "60", "80"], correct: 2 },
      { question: "נפח קובייה עם צלע 4 = ?", options: ["16", "32", "48", "64"], correct: 3 },
      { question: "10% מ-200 = ?", options: ["10", "20", "30", "40"], correct: 1 },
      { question: "יחס 2:3 בין 10 בנים לכמה בנות?", options: ["10", "12", "15", "20"], correct: 2 },
      { question: "מהי הנוסחה להיקף מעגל?", options: ["π × r²", "2 × π × r", "π × d²", "r × r"], correct: 1 },
      { question: "מהי הנוסחה לשטח מעגל?", options: ["π × r²", "2 × π × r", "π × d", "r + r"], correct: 0 },
      { question: "40% = ?", options: ["²⁄₅", "⅗", "¼", "½"], correct: 0 },
      { question: "60% = ?", options: ["³⁄₅", "²⁄₅", "¾", "⅕"], correct: 0 },
      { question: "1¼ כשבר פשוט = ?", options: ["⁴⁄₄", "⁵⁄₄", "⁶⁄₄", "³⁄₄"], correct: 1 },
      { question: "3⅔ כשבר פשוט = ?", options: ["⁹⁄₃", "¹⁰⁄₃", "¹¹⁄₃", "¹²⁄₃"], correct: 2 },
      { question: "¼ + ¼ + ¼ = ?", options: ["¼", "½", "¾", "1"], correct: 2 },
      { question: "⅚ - ⅓ = ?", options: ["½", "⅓", "⅙", "⅔"], correct: 0 },
      { question: "⅓ × ³⁄₄ = ?", options: ["¼", "⅓", "³⁄₁₂", "⁴⁄₃"], correct: 2 },
      { question: "¾ ÷ ½ = ?", options: ["³⁄₈", "1½", "¾", "⅜"], correct: 1 },
      { question: "נפח תיבה 2×3×4 = ?", options: ["9", "18", "24", "28"], correct: 2 },
      { question: "מה שטח פנים של קובייה?", options: ["4 פאות", "5 פאות", "6 פאות", "8 פאות"], correct: 2 },
      { question: "היקף מעגל עם קוטר 10 (π≈3.14) = ?", options: ["15.7", "31.4", "62.8", "78.5"], correct: 1 },
      { question: "5% מ-300 = ?", options: ["5", "10", "15", "20"], correct: 2 },
      { question: "אם 30% מכיתה הם בנות, ובכיתה 30 תלמידים - כמה בנות?", options: ["6", "9", "10", "12"], correct: 1 },
      { question: "מה יחס האורכים בין ריבוע בעל צלע 4 לריבוע בעל צלע 8?", options: ["1:2", "1:4", "2:1", "1:8"], correct: 0 },
      { question: "2½ + 1¼ = ?", options: ["3¾", "3½", "4", "3¼"], correct: 0 },
      { question: "נפח קובייה עם צלע 5 = ?", options: ["25", "75", "100", "125"], correct: 3 },
      { question: "מהו π בקירוב לשתי ספרות אחרי הנקודה?", options: ["3.10", "3.14", "3.18", "3.41"], correct: 1 },
      { question: "80% = ?", options: ["⅘", "⅗", "¾", "½"], correct: 0 },
      { question: "שטח מעגל עם רדיוס 10 (π≈3.14) = ?", options: ["31.4", "62.8", "314", "628"], correct: 2 },
      { question: "⅛ × 4 = ?", options: ["¼", "½", "⅛", "1"], correct: 1 },
      { question: "מה ההבדל בין נפח לשטח פנים?", options: ["אין הבדל", "נפח מודד כמות מקום, שטח פנים מודד שטח חיצוני", "נפח הוא רק לקובייה", "שטח פנים הוא תלת מימדי"], correct: 1 }
    ],
    geometryQuiz: [
      { question: "כמה מעלות בזווית ישרה?", options: ["45°", "90°", "180°", "360°"], correct: 1 },
      { question: "מהו סכום הזוויות במשולש?", options: ["90°", "180°", "270°", "360°"], correct: 1 },
      { question: "מהו סכום הזוויות במחומש (5 צלעות)?", options: ["360°", "450°", "540°", "630°"], correct: 2 },
      { question: "מהו סכום הזוויות במשושה (6 צלעות)?", options: ["540°", "630°", "720°", "810°"], correct: 2 },
      { question: "כמה קודקודים יש למחומש?", options: ["4", "5", "6", "7"], correct: 1 },
      { question: "כמה אלכסונים יש למרובע?", options: ["1", "2", "3", "4"], correct: 1 },
      { question: "משולש עם כל הזוויות שוות (60° כל אחת) נקרא:", options: ["ישר זווית", "שווה שוקיים", "שווה צלעות", "קהה זווית"], correct: 2 },
      { question: "איזו צורה יש לה זוג אחד בלבד של צלעות מקבילות?", options: ["מקבילית", "טרפז", "מלבן", "מעוין"], correct: 1 },
      { question: "איזו צורה יש לה 2 זוגות צלעות מקבילות ושוות, אבל לא כל הזוויות ישרות?", options: ["מלבן", "מקבילית", "ריבוע", "טרפז"], correct: 1 },
      { question: "משולש עם זווית אחת גדולה מ-90° נקרא:", options: ["חד זוויות", "ישר זווית", "קהה זוויות", "שווה צלעות"], correct: 2 },
      { question: "מהי זווית משלימה לזווית של 30°? (ביחד = 90°)", options: ["50°", "60°", "70°", "80°"], correct: 1 },
      { question: "מהי זווית נוספת לזווית של 110°? (ביחד = 180°)", options: ["60°", "70°", "80°", "90°"], correct: 1 },
      { question: "כמה צירי סימטריה יש לריבוע?", options: ["1", "2", "4", "8"], correct: 2 },
      { question: "כמה צירי סימטריה יש למשולש שווה צלעות?", options: ["1", "2", "3", "4"], correct: 2 },
      { question: "כמה צירי סימטריה יש למעגל?", options: ["1", "4", "8", "אינסוף"], correct: 3 },
      { question: "מהי זווית חיצונית של משולש?", options: ["זווית בתוך המשולש", "זווית שנוצרת בהמשך צלע החוצה", "סכום הזוויות", "אין דבר כזה"], correct: 1 },
      { question: "מהי נוסחת שטח מקבילית?", options: ["בסיס×גובה", "אורך×רוחב÷2", "(בסיס1+בסיס2)×גובה", "צלע²"], correct: 0 },
      { question: "מהי נוסחת שטח טרפז?", options: ["בסיס×גובה", "(בסיס1+בסיס2)×גובה÷2", "אלכסון1×אלכסון2", "היקף÷4"], correct: 1 },
      { question: "מהי נוסחת שטח מעוין?", options: ["צלע²", "(אלכסון1×אלכסון2)÷2", "בסיס×גובה÷2", "היקף×2"], correct: 1 },
      { question: "כמה קודקודים יש לקובייה?", options: ["6", "8", "10", "12"], correct: 1 }
    ],
    flashcards: [
      { front: "מהו אחוז?", back: "חלק מתוך 100" },
      { front: "20% = ?", back: "⅕ או 0.2" },
      { front: "75% = ?", back: "¾ או 0.75" },
      { front: "מהו רדיוס?", back: "מרכז המעגל עד השפה" },
      { front: "מהו קוטר?", back: "פעמיים הרדיוס" },
      { front: "π (פאי) ≈ ?", back: "3.14" },
      { front: "היקף מעגל = ?", back: "2 × π × r" },
      { front: "שטח מעגל = ?", back: "π × r²" },
      { front: "נפח תיבה = ?", back: "אורך × רוחב × גובה" },
      { front: "נפח קובייה = ?", back: "צלע × צלע × צלע" },
      { front: "שבר מעורב", back: "שלם + שבר, למשל 2¾" },
      { front: "המרת שבר מעורב", back: "שלם×מכנה+מונה ÷ מכנה" },
      { front: "חיבור שברים שונים במכנה", back: "מרחיבים למכנה משותף" },
      { front: "כפל שברים", back: "מונה×מונה ÷ מכנה×מכנה" },
      { front: "חילוק שברים", back: "כופלים בהופכי של השני" },
      { front: "סכום זוויות במשולש", back: "180°" },
      { front: "סכום זוויות במחומש", back: "540°" },
      { front: "שטח מקבילית", back: "בסיס × גובה" },
      { front: "שטח טרפז", back: "(בסיס1+בסיס2) × גובה ÷ 2" },
      { front: "שטח מעוין", back: "(אלכסון1 × אלכסון2) ÷ 2" },
      { front: "50% ל-0.5 ל-½", back: "כולם אותו ערך" },
      { front: "מהו יחס?", back: "השוואה בין שני גדלים, למשל 2:3" },
      { front: "שטח פנים תיבה", back: "סכום שטחי 6 הפאות" },
      { front: "10% מ-N = ?", back: "N ÷ 10" },
      { front: "1% מ-N = ?", back: "N ÷ 100" }
    ]
  },

  // ========== MATH BIG EXAM PREP - הכנה למבחן הגדול (כיתה ו׳) ==========
  mathBigExam: {
    naturalNumbers: [
      { question: "35 + 15 × 3 = ?", options: ["150", "80", "65", "95"], correct: 1, hint: "קודם כפל: 15×3=45, אז 35+45=80" },
      { question: "120 - 40 ÷ 4 = ?", options: ["20", "110", "80", "30"], correct: 1, hint: "קודם חילוק: 40÷4=10, אז 120-10=110" },
      { question: "(20 + 10) × 4 = ?", options: ["50", "120", "70", "90"], correct: 1, hint: "קודם סוגריים: 30×4=120" },
      { question: "6 × (18 - 8) = ?", options: ["100", "60", "70", "48"], correct: 1, hint: "18-8=10, 6×10=60" },
      { question: "(15 + 25) × (12 - 4) = ?", options: ["320", "300", "280", "260"], correct: 0, hint: "40 × 8 = 320" },
      { question: "מה הערך של X? X + 125 = 300", options: ["425", "175", "185", "165"], correct: 1, hint: "X = 300-125" },
      { question: "מה הערך של X? X × 6 = 72", options: ["12", "78", "66", "432"], correct: 0, hint: "X = 72÷6" },
      { question: "מה הערך של X? 144 ÷ X = 12", options: ["1728", "12", "132", "156"], correct: 1, hint: "X = 144÷12" },
      { question: "בבית ספר 480 תלמידים, מחולקים ל-16 כיתות שוות. כמה תלמידים בכיתה?", options: ["20", "30", "35", "40"], correct: 1, hint: "480÷16" },
      { question: "עלות טיול היא 45 ש\"ח לתלמיד. כמה עולה ל-24 תלמידים?", options: ["1,080", "980", "1,180", "1,000"], correct: 0, hint: "45×24" },
      { question: "אומדן: 587 + 312 קרוב ל...", options: ["800", "900", "1,000", "700"], correct: 1, hint: "600+300=900" },
      { question: "אומדן: 79 × 21 קרוב ל...", options: ["1,400", "1,600", "1,800", "2,000"], correct: 1, hint: "80×20=1600" },
      { question: "חשב במחברת: 3,456 + 2,789 = ?", options: ["6,245", "6,145", "6,345", "6,235"], correct: 0, hint: "סדר בטור בזהירות" },
      { question: "חשב במחברת: 512 × 34 = ?", options: ["17,408", "16,408", "17,308", "18,408"], correct: 0, hint: "512×4=2048, 512×30=15360" },
      { question: "חשב במחברת: 8,190 ÷ 15 = ?", options: ["546", "536", "556", "526"], correct: 0, hint: "בצע חילוק ארוך" },
      { question: "חשב במחברת: 2,304 ÷ 12 = ?", options: ["182", "192", "202", "172"], correct: 1, hint: "בצע חילוק ארוך" },
      { question: "מהו מספר ראשוני מבין אלה?", options: ["21", "27", "29", "33"], correct: 2, hint: "29 מתחלק רק ב-1 ובעצמו" },
      { question: "מהו המספר הראשוני הקטן ביותר?", options: ["0", "1", "2", "3"], correct: 2, hint: "2 הוא הראשוני הקטן ביותר" },
      { question: "מהו המכפיל המשותף הקטן ביותר (כפ״ה) של 4 ו-6?", options: ["10", "12", "24", "8"], correct: 1, hint: "כפולות של 4: 4,8,12; כפולות של 6: 6,12" },
      { question: "מהו המחלק המשותף הגדול ביותר (מח״ג) של 12 ו-18?", options: ["2", "3", "6", "9"], correct: 2, hint: "מחלקים של 12: 1,2,3,4,6,12; של 18: 1,2,3,6,9,18" }
    ],
    fractions: [
      { question: "⅔ + ¼ = ?", options: ["¹¹⁄₁₂", "⁵⁄₆", "¾", "⅚"], correct: 0, hint: "⅔=⁸⁄₁₂, ¼=³⁄₁₂, סה\"כ ¹¹⁄₁₂" },
      { question: "⅚ - ⅓ = ?", options: ["½", "⅓", "⅙", "⅔"], correct: 0, hint: "⅓=²⁄₆, ⅚-²⁄₆=³⁄₆=½" },
      { question: "1½ + 2¼ = ?", options: ["3¾", "3½", "4", "3¼"], correct: 0, hint: "1½=1²⁄₄, 1²⁄₄+2¼=3¾" },
      { question: "3⅔ - 1⅓ = ?", options: ["2⅓", "2⅔", "2", "2½"], correct: 0, hint: "⅔-⅓=⅓, אז 2⅓" },
      { question: "½ × ⅔ × ¾ = ?", options: ["¼", "⅜", "⅙", "³⁄₂₄"], correct: 0, hint: "1×2×3=6, 2×3×4=24, ⁶⁄₂₄=¼" },
      { question: "²⁄₃ ÷ ⁴⁄₅ = ?", options: ["⁸⁄₁₅", "¹⁰⁄₁₂", "⁵⁄₆", "⁶⁄₁₀"], correct: 2, hint: "²⁄₃ × ⁵⁄₄ = ¹⁰⁄₁₂ = ⁵⁄₆" },
      { question: "מהו ⅗ מ-45?", options: ["9", "18", "27", "36"], correct: 2, hint: "45÷5=9, 9×3=27" },
      { question: "מהו ⅞ מ-64?", options: ["48", "52", "56", "60"], correct: 2, hint: "64÷8=8, 8×7=56" },
      { question: "השווה: ⅗ ○ ⁵⁄₈", options: ["<", ">", "="], correct: 0, hint: "מכנה משותף 40: ²⁴⁄₄₀ < ²⁵⁄₄₀" },
      { question: "צמצם: ¹⁸⁄₂₄ = ?", options: ["³⁄₄", "²⁄₃", "⁹⁄₁₂", "⁶⁄₈"], correct: 0, hint: "חלק ב-6" },
      { question: "מהו ⅔ מ-27?", options: ["9", "12", "18", "21"], correct: 2, hint: "27÷3=9, 9×2=18" },
      { question: "המר לשבר פשוט: 4⅕", options: ["¹⁹⁄₅", "²⁰⁄₅", "²¹⁄₅", "¹⁸⁄₅"], correct: 2, hint: "4×5+1=21" },
      { question: "המר למספר מעורב: ¹⁷⁄₅", options: ["3²⁄₅", "3¹⁄₅", "3³⁄₅", "2²⁄₅"], correct: 0, hint: "17÷5=3 שארית 2" },
      { question: "1⅓ × 2¼ = ?", options: ["2⅔", "3", "3½", "2¾"], correct: 1, hint: "⁴⁄₃ × ⁹⁄₄ = ³⁶⁄₁₂ = 3" },
      { question: "מהו ²⁄₉ מ-81?", options: ["9", "18", "27", "36"], correct: 1, hint: "81÷9=9, 9×2=18" },
      { question: "⁷⁄₈ - ½ = ?", options: ["¼", "⅜", "⅝", "⅛"], correct: 1, hint: "½=⁴⁄₈, ⁷⁄₈-⁴⁄₈=³⁄₈" },
      { question: "מהו הופכי של ⅗?", options: ["⁵⁄₃", "⅗", "³⁄₁₀", "⁶⁄₅"], correct: 0, hint: "הופכי מחליף מונה ומכנה" },
      { question: "⅘ ÷ 2 = ?", options: ["⅖", "⅘", "⁸⁄₅", "⅕"], correct: 0, hint: "⅘ × ½ = ⁴⁄₁₀ = ⅖" },
      { question: "מהו ⅚ בעשרוני?", options: ["0.75", "0.8", "0.833", "0.9"], correct: 2, hint: "5÷6≈0.833" },
      { question: "מהו ⅜ בעשרוני?", options: ["0.325", "0.375", "0.425", "0.35"], correct: 1, hint: "3÷8=0.375" }
    ],
    decimals: [
      { question: "3.45 + 2.7 = ?", options: ["5.15", "6.15", "5.52", "6.52"], correct: 1, hint: "יישר נקודות עשרוניות" },
      { question: "8.6 - 3.25 = ?", options: ["5.35", "5.45", "4.35", "5.25"], correct: 0, hint: "יישר נקודות עשרוניות" },
      { question: "2.5 × 4 = ?", options: ["8", "9", "10", "11"], correct: 2, hint: "2.5×4=10" },
      { question: "1.2 × 0.5 = ?", options: ["0.6", "0.06", "6", "60"], correct: 0, hint: "12×5=60, אז 0.6" },
      { question: "7.5 ÷ 3 = ?", options: ["2.0", "2.25", "2.5", "2.75"], correct: 2, hint: "7.5÷3=2.5" },
      { question: "0.75 × 100 = ?", options: ["0.75", "7.5", "75", "750"], correct: 2, hint: "כפל ב-100 מזיז את הנקודה 2 מקומות" },
      { question: "45 ÷ 100 = ?", options: ["0.045", "0.45", "4.5", "45"], correct: 1, hint: "חילוק ב-100 מזיז נקודה 2 מקומות שמאלה" },
      { question: "מהו 3.14 מעוגל למקום עשרוני אחד?", options: ["3.0", "3.1", "3.2", "3.4"], correct: 1, hint: "הספרה השנייה היא 4, מעגלים למטה" },
      { question: "מהו 5.67 מעוגל למספר שלם?", options: ["5", "6", "5.5", "5.7"], correct: 1, hint: "0.67 מעגל ל-1" },
      { question: "השווה: 0.5 ○ 0.45", options: ["<", ">", "="], correct: 1, hint: "0.5 = 0.50 > 0.45" },
      { question: "השווה: 0.7 ○ 0.70", options: ["<", ">", "="], correct: 2, hint: "אותו ערך" },
      { question: "0.25 כאחוז = ?", options: ["2.5%", "25%", "250%", "0.25%"], correct: 1, hint: "כפל ב-100" },
      { question: "1.5 כאחוז = ?", options: ["1.5%", "15%", "150%", "0.15%"], correct: 2, hint: "כפל ב-100" },
      { question: "מהו 12.5 ÷ 5 = ?", options: ["2.0", "2.5", "3.0", "2.25"], correct: 1, hint: "12.5÷5=2.5" },
      { question: "9.09 + 0.91 = ?", options: ["9.10", "10.0", "9.9", "10.1"], correct: 1, hint: "יישר עמודות" },
      { question: "6 - 2.35 = ?", options: ["3.65", "4.65", "3.55", "3.75"], correct: 0, hint: "6.00-2.35=3.65" },
      { question: "0.3 × 0.3 = ?", options: ["0.9", "0.09", "0.6", "9"], correct: 1, hint: "3×3=9, 2 ספרות אחרי הנקודה" },
      { question: "4.8 ÷ 0.4 = ?", options: ["1.2", "12", "120", "0.12"], correct: 1, hint: "48÷4=12" },
      { question: "מהו 2/5 בעשרוני?", options: ["0.2", "0.4", "0.25", "0.45"], correct: 1, hint: "2÷5=0.4" },
      { question: "מהו 1/8 בעשרוני?", options: ["0.8", "0.18", "0.125", "0.108"], correct: 2, hint: "1÷8=0.125" }
    ],
    geometry: [
      { question: "מהו ההיקף של מלבן עם צלעות 8 ו-5?", options: ["13", "26", "40", "80"], correct: 1, hint: "(8+5)×2" },
      { question: "מהו השטח של מלבן עם צלעות 8 ו-5?", options: ["13", "26", "40", "80"], correct: 2, hint: "8×5" },
      { question: "מהו שטח משולש עם בסיס 10 וגובה 6?", options: ["16", "30", "60", "40"], correct: 1, hint: "(10×6)÷2" },
      { question: "מהו שטח מעגל עם רדיוס 4 (π≈3.14)?", options: ["12.56", "25.12", "50.24", "100.48"], correct: 2, hint: "3.14×16" },
      { question: "מהו היקף מעגל עם רדיוס 4 (π≈3.14)?", options: ["12.56", "25.12", "50.24", "100.48"], correct: 1, hint: "2×3.14×4" },
      { question: "מהו נפח תיבה 4×5×6?", options: ["15", "60", "120", "240"], correct: 2, hint: "4×5×6" },
      { question: "מהו נפח קובייה עם צלע 6?", options: ["36", "72", "144", "216"], correct: 3, hint: "6×6×6" },
      { question: "כמה מעלות במשולש?", options: ["90°", "180°", "270°", "360°"], correct: 1, hint: "סכום זוויות במשולש" },
      { question: "כמה מעלות במרובע?", options: ["180°", "270°", "360°", "450°"], correct: 2, hint: "סכום זוויות במרובע" },
      { question: "מהו שטח טרפז עם בסיסים 6 ו-10 וגובה 4?", options: ["16", "32", "40", "64"], correct: 1, hint: "(6+10)×4÷2" },
      { question: "מהו שטח מקבילית עם בסיס 8 וגובה 5?", options: ["13", "20", "40", "80"], correct: 2, hint: "8×5" },
      { question: "מהו שטח מעוין עם אלכסונים 6 ו-8?", options: ["14", "24", "48", "12"], correct: 1, hint: "(6×8)÷2" },
      { question: "משולש עם זוויות 90°, 45°, 45° נקרא:", options: ["שווה צלעות", "ישר זווית שווה שוקיים", "קהה זוויות", "חד זוויות"], correct: 1, hint: "יש בו זווית ישרה ושתי זוויות שוות" },
      { question: "מהו היקף ריבוע עם שטח 36?", options: ["6", "12", "24", "36"], correct: 2, hint: "צלע=√36=6, היקף=6×4=24" },
      { question: "מהו צלע הריבוע אם שטחו 64?", options: ["6", "7", "8", "9"], correct: 2, hint: "√64=8" },
      { question: "מהו רדיוס מעגל אם קוטרו 14?", options: ["5", "6", "7", "8"], correct: 2, hint: "רדיוס=קוטר÷2" },
      { question: "מהו נפח תיבה 2×2×2?", options: ["4", "6", "8", "12"], correct: 2, hint: "2×2×2" },
      { question: "מהו שטח פנים של קובייה עם צלע 3?", options: ["18", "36", "54", "27"], correct: 2, hint: "6 פאות של 3×3=9, סה\"כ 54" },
      { question: "כמה זוגות צלעות מקבילות יש למקבילית?", options: ["0", "1", "2", "4"], correct: 2, hint: "2 זוגות" },
      { question: "מהו שטח משולש ישר זווית עם ניצבים 6 ו-8?", options: ["14", "24", "48", "10"], correct: 1, hint: "(6×8)÷2" }
    ]
  },

  // ========== READING COMPREHENSION (הבנת הנקרא) - כיתה ו׳ ==========
  readingComprehension: [
    {
      title: "המסע לירח",
      icon: "🚀",
      text: `בשנת 1969, שלושה אסטרונאוטים אמריקאים יצאו למסע היסטורי לירח. החללית אפולו 11 שוגרה מפלורידה, ולאחר כמה ימי טיסה במרחב, נחתה על פני הירח. ניל ארמסטרונג היה האדם הראשון שדרך על הירח, ואמר את המשפט המפורסם: "זהו צעד קטן לאדם, אך קפיצה ענקית לאנושות."

בעוד ארמסטרונג ובאז אולדרין הלכו על פני הירח ואספו דגימות סלעים, האסטרונאוט השלישי, מייקל קולינס, נשאר בחללית שהקיפה את הירח. המשימה ארכה כשמונה ימים בסך הכל, וכאשר האסטרונאוטים חזרו לכדור הארץ, הם נחתו באוקיינוס השקט וחיכו להם ספינות משטרה.

המסע לירח היה תוצאה של שנים רבות של מחקר, תכנון ועבודה קשה של אלפי מהנדסים ומדענים. הוא נחשב עד היום לאחד ההישגים הגדולים ביותר של האנושות בתחום החלל.`,
      questions: [
        { q: "באיזו שנה נחתו האסטרונאוטים על הירח?", options: ["1965", "1969", "1972", "1975"], answer: 1 },
        { q: "מי היה האדם הראשון שדרך על הירח?", options: ["באז אולדרין", "מייקל קולינס", "ניל ארמסטרונג", "אף אחד מהם"], answer: 2 },
        { q: "כמה אסטרונאוטים היו במשימה?", options: ["1", "2", "3", "4"], answer: 2 },
        { q: "איזו חללית שיגרה את האסטרונאוטים?", options: ["אפולו 10", "אפולו 11", "אפולו 12", "אפולו 13"], answer: 1 },
        { q: "מי נשאר בחללית ולא ירד לירח?", options: ["ניל ארמסטרונג", "באז אולדרין", "מייקל קולינס", "כולם ירדו"], answer: 2 },
        { q: "מהיכן שוגרה החללית?", options: ["טקסס", "קליפורניה", "פלורידה", "ניו יורק"], answer: 2 },
        { q: "כמה זמן ארכה המשימה בסך הכל?", options: ["3 ימים", "5 ימים", "8 ימים", "14 ימים"], answer: 2 },
        { q: "היכן נחתו האסטרונאוטים בחזרתם?", options: ["באוקיינוס האטלנטי", "באוקיינוס השקט", "בים התיכון", "בים סוער"], answer: 1 },
        { q: "מה עשו האסטרונאוטים על הירח?", options: ["שיחקו כדורגל", "אספו דגימות סלעים", "בנו בית", "צילמו סרט"], answer: 1 },
        { q: "מדוע המסע נחשב הישג גדול?", options: ["הוא היה קצר מאוד", "הוא לא דרש תכנון", "הוא היה תוצאה של שנים של מחקר ועבודה קשה", "הוא נעשה במקרה"], answer: 2 }
      ]
    },
    {
      title: "היער הגשום",
      icon: "🌳",
      text: `יערות גשם משתרעים על פני כחמישה אחוזים משטח כדור הארץ, אך הם מכילים יותר ממחצית מכל מיני הצומח והחי בעולם. יער האמזונס בדרום אמריקה הוא יער הגשם הגדול ביותר בעולם, ומכונה לעיתים "ריאות כדור הארץ" בגלל כמות החמצן העצומה שהוא מייצר.

בתוך יער הגשם חיים אלפי מיני בעלי חיים, בהם קופים, ינשופים, נמרים וציפורים צבעוניות רבות. הצמחייה הצפופה יוצרת שכבות שונות ביער - החל מהקרקע ועד לצמרות העצים הגבוהים ביותר, שיכולים להגיע לגובה של יותר מ-50 מטר.

לצערנו, יערות הגשם נמצאים בסכנה בגלל כריתת עצים בלתי מבוקרת לצורך חקלאות ופיתוח. מדענים מזהירים כי אם נמשיך לכרות את היערות בקצב הנוכחי, נאבד מינים רבים של בעלי חיים וצמחים שעדיין לא הספקנו אפילו לגלות.`,
      questions: [
        { q: "כמה אחוז משטח כדור הארץ מכוסה ביערות גשם?", options: ["1%", "5%", "10%", "25%"], answer: 1 },
        { q: "מהו יער הגשם הגדול ביותר בעולם?", options: ["יער הקונגו", "יער האמזונס", "יער בורנאו", "יער סיביר"], answer: 1 },
        { q: "מדוע יער האמזונס מכונה 'ריאות כדור הארץ'?", options: ["הוא צורת ריאה", "הוא מייצר הרבה חמצן", "הוא קטן מאוד", "הוא ליד הים"], answer: 1 },
        { q: "אילו בעלי חיים חיים ביער הגשם?", options: ["רק ציפורים", "קופים, ינשופים, נמרים וציפורים", "רק דגים", "רק חרקים"], answer: 1 },
        { q: "לאיזה גובה יכולים להגיע העצים הגבוהים ביותר?", options: ["10 מטר", "25 מטר", "50 מטר", "100 מטר"], answer: 2 },
        { q: "מדוע יערות הגשם בסכנה?", options: ["בגלל שיטפונות", "בגלל כריתת עצים בלתי מבוקרת", "בגלל קור", "בגלל בצורת"], answer: 1 },
        { q: "לצורך מה כורתים את היערות?", options: ["בניית כבישים בלבד", "חקלאות ופיתוח", "צריכת עצים ביתית", "אין סיבה"], answer: 1 },
        { q: "מה מזהירים מדענים?", options: ["שהיערות יגדלו", "שנאבד מינים רבים של בעלי חיים וצמחים", "שהחום יעלה בלבד", "אין אזהרה"], answer: 1 },
        { q: "כמה ממיני הצומח והחי בעולם נמצאים ביערות גשם?", options: ["רבע", "שליש", "יותר ממחצית", "עשירית"], answer: 2 },
        { q: "מה יוצר את השכבות השונות ביער?", options: ["הצמחייה הצפופה", "הנהרות", "האבנים", "מזג האוויר"], answer: 0 }
      ]
    },
    {
      title: "המצאת המדפסת התלת-ממדית",
      icon: "🖨️",
      text: `מדפסות תלת-ממדיות הן טכנולוגיה מהפכנית שמאפשרת להדפיס עצמים תלת-ממדיים ממש כמו שמדפסת רגילה מדפיסה דף נייר. במקום דיו, מדפסת תלת-ממדית משתמשת בחומרים כמו פלסטיק, מתכת, ואפילו שוקולד, כדי לבנות עצם שכבה אחר שכבה.

התהליך מתחיל בתכנון העצם במחשב, באמצעות תוכנה מיוחדת. לאחר מכן, המדפסת מקבלת את הקובץ ומתחילה להדפיס את העצם שכבה אחר שכבה, מלמטה למעלה, עד שהעצם המלא נוצר. תהליך זה יכול לקחת בין כמה דקות לכמה שעות, תלוי בגודל ובמורכבות העצם.

טכנולוגיה זו משנה תעשיות רבות - מרפואה, שם מדפיסים איברים מלאכותיים ותותבות מותאמות אישית, ועד לתעשיית הרכב והתעופה, שם מדפיסים חלקים מורכבים בעלות נמוכה יותר. חלק מהמומחים מאמינים שבעתיד נוכל אפילו להדפיס בתים שלמים!`,
      questions: [
        { q: "במה משתמשת מדפסת תלת-ממדית במקום דיו?", options: ["מים", "פלסטיק, מתכת ועוד", "צבע בלבד", "אוויר"], answer: 1 },
        { q: "איך נבנה העצם במדפסת תלת-ממדית?", options: ["בבת אחת", "שכבה אחר שכבה", "מהצדדים", "באקראי"], answer: 1 },
        { q: "היכן מתחיל תהליך ההדפסה?", options: ["בתוך המדפסת", "בתכנון במחשב", "בחנות", "בבית החרושת"], answer: 1 },
        { q: "כמה זמן יכול לקחת תהליך ההדפסה?", options: ["רק שניות", "כמה דקות עד כמה שעות", "תמיד שבוע שלם", "תמיד יום אחד"], answer: 1 },
        { q: "באיזה תחום משתמשים במדפסות תלת-ממדיות לתותבות?", options: ["חקלאות", "רפואה", "מוזיקה", "ספורט"], answer: 1 },
        { q: "אילו עוד תעשיות נעזרות בטכנולוגיה זו?", options: ["רק אוכל", "רכב ותעופה", "רק בגדים", "אין עוד תעשיות"], answer: 1 },
        { q: "מה חלק מהמומחים מאמינים שנוכל לעשות בעתיד?", options: ["להדפיס בתים שלמים", "להדפיס רק צעצועים", "להפסיק להשתמש בטכנולוגיה", "אין תחזיות"], answer: 0 },
        { q: "האם ניתן להדפיס שוקולד במדפסת תלת-ממדית?", options: ["לא, אף פעם", "כן, זה אחד החומרים", "רק בבתי חרושת", "רק בישראל"], answer: 1 },
        { q: "מדוע נחשבת הטכנולוגיה 'מהפכנית'?", options: ["היא זולה מאוד לתחזוקה", "היא משנה תעשיות רבות ומאפשרת ייצור מותאם אישית", "היא הומצאה לפני 100 שנה", "היא לא באמת שימושית"], answer: 1 },
        { q: "כיצד תיאר הטקסט את תהליך ההדפסה?", options: ["מלמעלה למטה", "מלמטה למעלה", "מהאמצע החוצה", "אקראי לגמרי"], answer: 1 }
      ]
    }
  ],

  // ========== MATH WORD PROBLEMS - כיתה ו׳ ==========
  mathWordProblems: [
    // אחוזים ויחס
    { question: "בכיתה 30 תלמידים, 40% מהם בנים. כמה בנים בכיתה?", options: ["10", "12", "15", "18"], correct: 1 },
    { question: "מחיר חולצה הוא 80 ש\"ח. יש הנחה של 25%. מה המחיר החדש?", options: ["55", "60", "65", "70"], correct: 1 },
    { question: "יש 25 ילדים במחנה, 20% מהם נרשמו לחוג ציור. כמה ילדים בחוג?", options: ["3", "4", "5", "6"], correct: 2 },
    { question: "מלאי חנות ירד ב-15% מ-200 פריטים. כמה פריטים נשארו?", options: ["150", "160", "170", "180"], correct: 2 },
    { question: "יחס הבנים לבנות בכיתה הוא 3:2. אם יש 12 בנים, כמה בנות יש?", options: ["6", "8", "10", "12"], correct: 1 },
    { question: "מתכון דורש יחס של 2:3 בין קמח לסוכר. אם יש 4 כוסות קמח, כמה כוסות סוכר צריך?", options: ["4", "5", "6", "7"], correct: 2 },
    // שברים ועשרוניים
    { question: "ילד קרא ⅗ מספר בן 200 עמודים. כמה עמודים קרא?", options: ["100", "120", "140", "160"], correct: 1 },
    { question: "בבריכה, ¾ מהמים התרוקנו. אם היו 400 ליטר, כמה נשארו?", options: ["100", "200", "300", "50"], correct: 0 },
    { question: "אמא קנתה 2.5 ק\"ג תפוחים ו-1.75 ק\"ג בננות. כמה פרי קנתה בסך הכל?", options: ["4.15", "4.25", "4.35", "4.5"], correct: 1 },
    { question: "מקל אורכו 3.6 מטר. חתכו ממנו 1.2 מטר. מה אורך המקל שנשאר?", options: ["2.2", "2.4", "2.6", "2.8"], correct: 1 },
    // מעגל ותלת-מימד
    { question: "מגרש עגול ברדיוס 7 מטר. מה היקפו (π≈3.14)?", options: ["21.98", "43.96", "153.86", "44.0"], correct: 1 },
    { question: "בריכה עגולה ברדיוס 3 מטר. מה שטחה (π≈3.14)?", options: ["9.42", "18.84", "28.26", "56.52"], correct: 2 },
    { question: "מיכל מים בצורת תיבה 2×3×4 מטר. מה נפחו?", options: ["9", "18", "24", "48"], correct: 2 },
    { question: "קופסת מתנה בצורת קובייה עם צלע 5 ס\"מ. מה נפחה?", options: ["25", "75", "100", "125"], correct: 3 },
    // בעיות מעורבות
    { question: "אוטובוס נסע 240 ק\"מ ב-4 שעות. מה המהירות הממוצעת שלו?", options: ["50", "60", "70", "80"], correct: 1 },
    { question: "מכונית נוסעת 90 קמ\"ש למשך שעתיים וחצי. כמה מרחק עברה?", options: ["200", "215", "225", "250"], correct: 2 },
    { question: "עובד מרוויח 45 ש\"ח לשעה. כמה ירוויח ב-8 שעות עבודה?", options: ["320", "340", "360", "380"], correct: 2 },
    { question: "בית ספר קיבל תרומה של 12,000 ש\"ח וחילק אותה שווה בשווה ל-8 כיתות. כמה קיבלה כל כיתה?", options: ["1,000", "1,200", "1,400", "1,500"], correct: 3 },
    { question: "אם 5 עפרונות עולים 12.5 ש\"ח, כמה עולה עיפרון אחד?", options: ["2", "2.5", "3", "3.5"], correct: 1 },
    { question: "משפחה נסעה 350 ק\"מ ועצרה לאחר 60% מהדרך. כמה ק\"מ עברה עד העצירה?", options: ["180", "200", "210", "220"], correct: 2 },
    { question: "חנות מכרה 80 מוצרים ביום ראשון ו-25% יותר ביום שני. כמה מכרה ביום שני?", options: ["90", "95", "100", "105"], correct: 2 },
    { question: "טנק דלק מחזיק 60 ליטר. אם נשארו 15%, כמה ליטר נשארו?", options: ["6", "9", "12", "15"], correct: 1 },
    { question: "מגדל בגובה 45 מטר מטיל צל של 30 מטר. מה היחס בין הגובה לצל?", options: ["2:3", "3:2", "1:2", "3:1"], correct: 1 },
    { question: "מתכון ל-4 מנות דורש 300 גרם קמח. כמה קמח צריך ל-6 מנות?", options: ["400", "450", "500", "550"], correct: 1 },
    { question: "ילד חסך 65% מ-200 ש\"ח שקיבל. כמה חסך?", options: ["100", "110", "120", "130"], correct: 3 },
    { question: "מכולת מוכרת ק\"ג תפוחים ב-8.50 ש\"ח. כמה עולים 3.5 ק\"ג?", options: ["27.75", "29.75", "31.25", "32.50"], correct: 1 },
    { question: "אורך מלבן פי 3 מרוחבו. אם הרוחב 6 ס\"מ, מה שטח המלבן?", options: ["36", "72", "108", "144"], correct: 2 },
    { question: "מיכל דלק מלא ב-45 ליטר. אחרי נסיעה נשארו 60%. כמה ליטר נשארו?", options: ["18", "22", "27", "30"], correct: 2 },
    { question: "בכיתה 24 תלמידים ביחס בנים-בנות 1:2. כמה בנות בכיתה?", options: ["8", "12", "16", "18"], correct: 2 },
    { question: "מגרש חנייה עגול ברדיוס 10 מטר. מה שטחו (π≈3.14)?", options: ["31.4", "62.8", "314", "628"], correct: 2 }
  ],

  // ========== HANGMAN (איש תלוי) - כיתה ו׳ ==========
  hangman: {
    hebrew: [
      { word: "משפט מורכב", hint: "משפט המחבר שני רעיונות" },
      { word: "בניין פיעל", hint: "בניין בעברית כמו כתב-כתב" },
      { word: "מילת קישור", hint: "כמו כי, אבל, לכן" },
      { word: "פסקה", hint: "קבוצת משפטים בטקסט" },
      { word: "נושא ונשוא", hint: "חלקי המשפט הבסיסיים" },
      { word: "שם תואר", hint: "מתאר שם עצם" },
      { word: "פועל עבר", hint: "זמן שכבר קרה" },
      { word: "תחילית וסיומת", hint: "תוספות למילה" },
      { word: "אות שורש", hint: "חלק קבוע במילה" },
      { word: "משקל", hint: "תבנית המילה" },
      { word: "מילה נרדפת", hint: "מילה בעלת משמעות דומה" },
      { word: "מילה מנוגדת", hint: "מילה בעלת משמעות הפוכה" },
      { word: "פיסוק", hint: "נקודה פסיק סימן שאלה" },
      { word: "תיאור", hint: "מתאר איך נעשית פעולה" },
      { word: "כתיב מלא", hint: "כתיב עם אימות קריאה" },
      { word: "הגדרה", hint: "הסבר משמעות מילה" },
      { word: "פתיחה וסיום", hint: "חלקי חיבור" },
      { word: "רעיון מרכזי", hint: "הנקודה החשובה בטקסט" },
      { word: "משל ונמשל", hint: "סיפור עם מוסר השכל" },
      { word: "דמות ראשית", hint: "הגיבור בסיפור" },
      { word: "עלילה", hint: "רצף האירועים בסיפור" },
      { word: "מטאפורה", hint: "השוואה בלי מילת השוואה" },
      { word: "חריזה", hint: "צלילים דומים בסוף שורות" },
      { word: "בית בשיר", hint: "קבוצת שורות בשיר" },
      { word: "ציטוט", hint: "העתקת דברי מישהו" }
    ],
    english: [
      { word: "past tense", hint: "an action that already happened" },
      { word: "future tense", hint: "an action that will happen" },
      { word: "irregular verb", hint: "a verb that doesn't follow the -ed rule" },
      { word: "comparative", hint: "used to compare two things, +er" },
      { word: "superlative", hint: "used for the best/most, +est" },
      { word: "adjective", hint: "describes a noun" },
      { word: "adverb", hint: "describes a verb" },
      { word: "preposition", hint: "in, on, at, under" },
      { word: "pronoun", hint: "he, she, it, they" },
      { word: "conjunction", hint: "and, but, or" },
      { word: "vocabulary", hint: "words you know" },
      { word: "paragraph", hint: "group of sentences" },
      { word: "punctuation", hint: "period, comma, question mark" },
      { word: "synonym", hint: "a word with a similar meaning" },
      { word: "antonym", hint: "a word with the opposite meaning" },
      { word: "sentence", hint: "a complete thought in words" },
      { word: "question", hint: "asks for information" },
      { word: "answer", hint: "a response to a question" },
      { word: "reading comprehension", hint: "understanding a text" },
      { word: "grammar", hint: "the rules of a language" },
      { word: "modal verb", hint: "can, could, should, must" },
      { word: "present perfect", hint: "have/has + past participle" },
      { word: "subject and verb", hint: "the basic parts of a sentence" },
      { word: "capital letter", hint: "used at the start of a sentence" }
    ],
    math: [
      { word: "percentage", hint: "a part out of 100" },
      { word: "ratio", hint: "compares two quantities" },
      { word: "mixed fraction", hint: "a whole number and a fraction" },
      { word: "circumference", hint: "the distance around a circle" },
      { word: "radius", hint: "from the center to the edge of a circle" },
      { word: "diameter", hint: "twice the radius" },
      { word: "volume", hint: "how much space a shape takes" },
      { word: "surface area", hint: "the total area of all faces" },
      { word: "estimation", hint: "an approximate calculation" },
      { word: "decimal", hint: "a number with a point, like 3.14" },
      { word: "prime number", hint: "divisible only by 1 and itself" },
      { word: "common denominator", hint: "shared bottom number in fractions" },
      { word: "equation", hint: "a math sentence with an equal sign" },
      { word: "trapezoid", hint: "a shape with one pair of parallel sides" },
      { word: "parallelogram", hint: "a shape with two pairs of parallel sides" },
      { word: "rhombus", hint: "a shape with four equal sides" },
      { word: "cube", hint: "a 3D shape with 6 equal square faces" },
      { word: "reciprocal", hint: "flip the numerator and denominator" },
      { word: "simplify", hint: "reduce a fraction to lowest terms" },
      { word: "order of operations", hint: "the sequence rules for calculations" }
    ]
  },

  // ========== MEMORY GAME (זיכרון) - כיתה ו׳ ==========
  memory: {
    hebrew: [
      ["כי", "מילת סיבה"],
      ["אבל", "מילת ניגוד"],
      ["לכן", "מילת תוצאה"],
      ["אם", "מילת תנאי"],
      ["כאשר", "מילת זמן"],
      ["פָּעַל", "בניין בסיסי"],
      ["פִּיעֵל", "בניין עם דגש"],
      ["הִפְעִיל", "בניין גורם"],
      ["משפט פשוט", "רעיון אחד"],
      ["משפט מורכב", "שני רעיונות"],
      ["שם עצם", "אדם, מקום, דבר"],
      ["שם תואר", "מתאר שם עצם"],
      ["פועל", "מבטא פעולה"],
      ["תואר הפועל", "מתאר איך נעשית פעולה"]
    ],
    english: [
      ["went", "past of go"],
      ["wrote", "past of write"],
      ["will", "future marker"],
      ["taller", "comparative of tall"],
      ["tallest", "superlative of tall"],
      ["more interesting", "comparative of long adjective"],
      ["most interesting", "superlative of long adjective"],
      ["better", "comparative of good"],
      ["best", "superlative of good"],
      ["have + past participle", "present perfect form"],
      ["can", "modal - ability"],
      ["must", "modal - obligation"],
      ["should", "modal - advice"],
      ["won't", "will + not"]
    ],
    math: [
      ["50%", "½"],
      ["25%", "¼"],
      ["π", "≈3.14"],
      ["היקף מעגל", "2×π×r"],
      ["שטח מעגל", "π×r²"],
      ["נפח תיבה", "אורך×רוחב×גובה"],
      ["נפח קובייה", "צלע³"],
      ["רדיוס", "מרכז עד השפה"],
      ["קוטר", "2×רדיוס"],
      ["שטח מקבילית", "בסיס×גובה"],
      ["שטח טרפז", "(בסיס1+בסיס2)×גובה÷2"],
      ["שטח מעוין", "(אלכסון1×אלכסון2)÷2"],
      ["יחס", "השוואה בין גדלים"],
      ["מספר ראשוני", "מתחלק ב-1 ובעצמו בלבד"]
    ]
  },

  // ========== DICTATION (הכתבה שבועית) - כיתה ו׳ ==========
  dictation: [
    { title: "מסעות וטבע", words: ["אסטרונאוט", "חללית", "יבשת", "אוקיינוס", "יער גשם", "מדען"] },
    { title: "טכנולוגיה", words: ["מדפסת תלת-ממדית", "המצאה", "טכנולוגיה", "תוכנה", "מהפכני", "עתידני"] },
    { title: "לשון וספרות", words: ["משפט מורכב", "מילת קישור", "בניין", "פסקה", "רעיון מרכזי", "עלילה"] },
    { title: "גיאומטריה", words: ["היקף", "שטח", "רדיוס", "קוטר", "נפח", "מעגל"] },
    { title: "היסטוריה", words: ["תגלית", "מסע", "אנושות", "הישג", "מחקר", "תכנון"] },
    { title: "סביבה", words: ["מיני צומח", "בעלי חיים", "כריתת עצים", "חמצן", "פיתוח", "סכנת הכחדה"] },
    { title: "כלכלה", words: ["תרומה", "מלאי", "הנחה", "רווח", "עלות", "תקציב"] },
    { title: "אנגלית ולשון", words: ["אוצר מילים", "דקדוק", "הבנת הנקרא", "תרגום", "משמעות", "הגייה"] }
  ],

  testPrepDictation: [
    { word: "מנוגד", sentence: "המילה 'קר' מנוגדת למילה 'חם'." },
    { word: "משמעות", sentence: "מהי המשמעות של המילה הזאת?" },
    { word: "הבנה", sentence: "יש לי הבנה טובה של הנושא." },
    { word: "תרגול", sentence: "תרגול קבוע משפר את הידע." },
    { word: "מבחן", sentence: "מחר יש לנו מבחן חשוב." },
    { word: "ציון", sentence: "קיבלתי ציון גבוה במבחן." },
    { word: "הכנה", sentence: "ההכנה למבחן ארכה שבוע." },
    { word: "חזרה", sentence: "עשיתי חזרה על כל החומר." },
    { word: "הישג", sentence: "זהו הישג גדול עבורי." },
    { word: "הצלחה", sentence: "אני מאחל לך הצלחה במבחן." }
  ],

  generalDictation: [
    "אסטרונאוט", "חללית", "יבשת", "אוקיינוס", "יער גשם", "מדען", "מדפסת תלת-ממדית", "המצאה",
    "טכנולוגיה", "תוכנה", "מהפכני", "עתידני", "משפט מורכב", "מילת קישור", "בניין", "פסקה",
    "רעיון מרכזי", "עלילה", "היקף", "שטח", "רדיוס", "קוטר", "נפח", "מעגל", "תגלית", "מסע",
    "אנושות", "הישג", "מחקר", "תכנון", "מיני צומח", "בעלי חיים", "כריתת עצים", "חמצן", "פיתוח",
    "סכנת הכחדה", "תרומה", "מלאי", "הנחה", "רווח", "עלות", "תקציב", "אוצר מילים", "דקדוק",
    "הבנת הנקרא", "תרגום", "משמעות", "הגייה", "מנוגד", "הבנה", "תרגול", "מבחן", "ציון", "הכנה",
    "חזרה", "הישג", "הצלחה", "יחס", "אחוז", "שבר מעורב", "עשרוני", "מספר ראשוני", "משוואה",
    "אומדן", "טרפז", "מקבילית", "מעוין", "קובייה", "תיבה", "משולש", "מרובע", "זווית", "סימטריה",
    "אלכסון", "קודקוד", "צלע", "גובה", "בסיס", "פרספקטיבה", "תיאור", "דמות", "סיפור", "שיר",
    "חריזה", "בית בשיר", "ציטוט", "השערה", "מסקנה", "ניסוי", "תצפית", "נתונים", "גרף", "טבלה",
    "ממוצע", "סטטיסטיקה", "הסתברות", "אירוע", "תוצאה", "אפשרות", "וודאות", "אי-ודאות", "חיזוי",
    "מגמה", "השוואה", "ניתוח", "מסקנה", "תובנה", "עיבוד מידע", "מקור מידע", "אמינות", "ביקורתיות"
  ],

  // ========== WORD MATCH (התאמת מילים) - כיתה ו׳ ==========
  wordMatch: [
    { hebrew: "אסטרונאוט", english: "astronaut" },
    { hebrew: "חללית", english: "spacecraft" },
    { hebrew: "יבשת", english: "continent" },
    { hebrew: "אוקיינוס", english: "ocean" },
    { hebrew: "מדען", english: "scientist" },
    { hebrew: "המצאה", english: "invention" },
    { hebrew: "טכנולוגיה", english: "technology" },
    { hebrew: "עבר", english: "past" },
    { hebrew: "עתיד", english: "future" },
    { hebrew: "השוואה", english: "comparison" },
    { hebrew: "אחוז", english: "percentage" },
    { hebrew: "יחס", english: "ratio" },
    { hebrew: "מעגל", english: "circle" },
    { hebrew: "רדיוס", english: "radius" },
    { hebrew: "קוטר", english: "diameter" },
    { hebrew: "נפח", english: "volume" },
    { hebrew: "שטח", english: "area" },
    { hebrew: "היקף", english: "perimeter" },
    { hebrew: "דקדוק", english: "grammar" },
    { hebrew: "אוצר מילים", english: "vocabulary" },
    { hebrew: "משפט", english: "sentence" },
    { hebrew: "פסקה", english: "paragraph" },
    { hebrew: "שאלה", english: "question" },
    { hebrew: "תשובה", english: "answer" },
    { hebrew: "מספר ראשוני", english: "prime number" },
    { hebrew: "שבר", english: "fraction" },
    { hebrew: "עשרוני", english: "decimal" }
  ],

  // ========== BIG EXAM (מבחן גדול) - כיתה ו׳ ==========
  bigExam: {
    title: 'הכנה למבחן הגדול - Unit 6',

    // --- VOCABULARY ---
    vocabulary: [
      { word: 'adventure', hebrew: 'הרפתקה' },
      { word: 'already', hebrew: 'כבר' },
      { word: 'brave', hebrew: 'אמיץ' },
      { word: 'climb', hebrew: 'לטפס' },
      { word: 'discover', hebrew: 'לגלות' },
      { word: 'explore', hebrew: 'לחקור' },
      { word: 'exhausted', hebrew: 'מותש' },
      { word: 'expedition', hebrew: 'משלחת' },
      { word: 'ever', hebrew: 'אי פעם' },
      { word: 'finally', hebrew: 'סוף סוף' },
      { word: 'journey', hebrew: 'מסע' },
      { word: 'just', hebrew: 'הרגע' },
      { word: 'map', hebrew: 'מפה' },
      { word: 'mountain', hebrew: 'הר' },
      { word: 'never', hebrew: 'אף פעם' },
      { word: 'peak', hebrew: 'פסגה' },
      { word: 'prepare', hebrew: 'להתכונן' },
      { word: 'reach', hebrew: 'להגיע' },
      { word: 'rescue', hebrew: 'להציל' },
      { word: 'rope', hebrew: 'חבל' },
      { word: 'since', hebrew: 'מאז' },
      { word: 'survive', hebrew: 'לשרוד' },
      { word: 'team', hebrew: 'צוות' },
      { word: 'tent', hebrew: 'אוהל' },
      { word: 'tired', hebrew: 'עייף' },
      { word: 'trail', hebrew: 'שביל' },
      { word: 'weather', hebrew: 'מזג אוויר' },
      { word: 'yet', hebrew: 'עדיין' },
      { word: 'for (time)', hebrew: 'במשך' },
      { word: 'guide', hebrew: 'מדריך' }
    ],

    // --- GRAMMAR: Present Perfect ---
    grammar: [
      // Positive
      { question: 'I ___ (climb) this mountain three times.', answer: 'have climbed', options: ['have climbed', 'has climbed', 'climbed', 'am climbing'], type: 'positive' },
      { question: 'She ___ (discover) a new trail.', answer: 'has discovered', options: ['have discovered', 'has discovered', 'discovers', 'is discovering'], type: 'positive' },
      { question: 'They ___ (already/reach) the peak.', answer: 'have already reached', options: ['have already reached', 'has already reached', 'already reached', 'are already reaching'], type: 'positive' },
      { question: 'We ___ (prepare) for the expedition since morning.', answer: 'have prepared', options: ['have prepared', 'has prepared', 'prepared', 'are preparing'], type: 'positive' },
      { question: 'The guide ___ (explore) this area many times.', answer: 'has explored', options: ['have explored', 'has explored', 'explores', 'is exploring'], type: 'positive' },
      { question: 'He ___ (just/finish) setting up the tent.', answer: 'has just finished', options: ['have just finished', 'has just finished', 'just finished', 'is just finishing'], type: 'positive' },
      { question: 'I ___ (never/see) such brave climbers.', answer: 'have never seen', options: ['have never seen', 'has never seen', 'never saw', 'am never seeing'], type: 'positive' },
      { question: 'The team ___ (survive) two storms already.', answer: 'has survived', options: ['have survived', 'has survived', 'survived', 'is surviving'], type: 'positive' },
      // Negative
      { question: 'We ___ (not/reach) the top yet.', answer: 'have not reached', options: ['have not reached', 'has not reached', 'did not reached', 'are not reaching'], type: 'negative' },
      { question: 'She ___ (not/climb) a mountain before.', answer: 'has not climbed', options: ['have not climbed', 'has not climbed', 'did not climbed', 'is not climbing'], type: 'negative' },
      { question: 'They ___ (not/finish) the journey yet.', answer: 'have not finished', options: ['have not finished', 'has not finished', 'did not finished', 'are not finishing'], type: 'negative' },
      { question: 'I ___ (not/be) to the mountains before.', answer: 'have not been', options: ['have not been', 'has not been', 'was not', 'am not being'], type: 'negative' },
      { question: 'He ___ (not/survive) such cold weather before.', answer: 'has not survived', options: ['have not survived', 'has not survived', 'did not survived', 'is not surviving'], type: 'negative' },
      { question: 'We ___ (not/discover) the trail yet.', answer: 'have not discovered', options: ['have not discovered', 'has not discovered', 'did not discovered', 'are not discovering'], type: 'negative' },
      // Yes/No Questions
      { question: '___ you ever climbed a mountain?', answer: 'Have', options: ['Have', 'Has', 'Did', 'Do'], type: 'question' },
      { question: '___ she reached the peak yet?', answer: 'Has', options: ['Has', 'Have', 'Did', 'Does'], type: 'question' },
      { question: '___ they prepared the ropes?', answer: 'Have', options: ['Have', 'Has', 'Did', 'Do'], type: 'question' },
      { question: '___ the guide ever seen such weather?', answer: 'Has', options: ['Has', 'Have', 'Did', 'Does'], type: 'question' },
      { question: '___ you finished packing the tent?', answer: 'Have', options: ['Have', 'Has', 'Did', 'Do'], type: 'question' },
      { question: 'How long ___ they been exploring the cave?', answer: 'have', options: ['have', 'has', 'did', 'do'], type: 'question' }
    ],

    // --- READING: Unseen passage ---
    reading: {
      title: 'The Mountain Rescue',
      text: `Sarah and her team have always loved adventure. For the past three years, they have explored mountains all over the world. This time, they have prepared for their biggest expedition yet - climbing the tallest peak in the region.\n\n"We have never faced weather like this," said Sarah, looking at the dark sky. The wind has already become stronger, and snow has started to fall.\n\nThe guide, who has climbed this mountain many times before, told the team to set up the tent quickly. "We have not reached the peak yet, but we must stay safe," he said.\n\nFor two exhausted days, the team waited inside the tent. They have eaten almost all their food, and the ropes have frozen in the cold. Just when they thought they could not survive another night, a rescue team arrived with a map and extra supplies.\n\n"You have been very brave," said the rescue leader. "Since you called for help this morning, we have been searching for you."\n\nThe team has finally reached safety. Although they have not reached the peak this time, Sarah knows they will try again. "We have learned so much from this journey," she said with a tired smile.`,
      questions: [
        { question: 'How long have Sarah and her team been exploring mountains?', options: ['One year', 'Two years', 'Three years', 'Four years'], answer: 'Three years' },
        { question: 'What have they prepared for?', options: ['A picnic', 'Their biggest expedition', 'A short walk', 'A race'], answer: 'Their biggest expedition' },
        { question: 'What has the guide done many times before?', options: ['Cooked dinner', 'Climbed this mountain', 'Written a book', 'Driven a car'], answer: 'Climbed this mountain' },
        { question: 'What has happened to the ropes?', options: ['They have frozen', 'They have broken', 'They have disappeared', 'They have burned'], answer: 'They have frozen' },
        { question: 'Who arrived to help the team?', options: ['A doctor', 'A rescue team', 'The police', 'Another climber'], answer: 'A rescue team' },
        { question: 'How long has the rescue team been searching for them?', options: ['Since yesterday', 'Since this morning', 'Since last week', 'Since last year'], answer: 'Since this morning' },
        { question: 'Have they reached the peak this time?', options: ['Yes, easily', 'No, not yet', 'Yes, after the storm', 'The story does not say'], answer: 'No, not yet' },
        { question: 'What has Sarah learned from the journey?', options: ['Nothing', 'So much', 'How to cook', 'How to drive'], answer: 'So much' }
      ]
    },

    // --- WRITING: for / since exercises ---
    writing: [
      { sentence: 'I have known him ___ five years.', answer: 'for', options: ['for', 'since'] },
      { sentence: 'She has lived here ___ 2018.', answer: 'since', options: ['for', 'since'] },
      { sentence: 'We have waited ___ two hours.', answer: 'for', options: ['for', 'since'] },
      { sentence: 'They have been climbing ___ this morning.', answer: 'since', options: ['for', 'since'] },
      { sentence: 'He has had this tent ___ a long time.', answer: 'for', options: ['for', 'since'] },
      { sentence: 'I have not seen snow ___ last winter.', answer: 'since', options: ['for', 'since'] },
      { sentence: 'The team has trained ___ three months.', answer: 'for', options: ['for', 'since'] },
      { sentence: 'She has been a guide ___ she was eighteen.', answer: 'since', options: ['for', 'since'] },
      { sentence: 'We have not eaten ___ six hours.', answer: 'for', options: ['for', 'since'] },
      { sentence: 'He has owned this rope ___ his first trip.', answer: 'since', options: ['for', 'since'] },
      { sentence: 'They have camped here ___ a week.', answer: 'for', options: ['for', 'since'] },
      { sentence: 'I have loved adventures ___ I was a child.', answer: 'since', options: ['for', 'since'] },
      { sentence: 'The storm has continued ___ three days.', answer: 'for', options: ['for', 'since'] },
      { sentence: 'She has not called ___ yesterday.', answer: 'since', options: ['for', 'since'] },
      { sentence: 'We have been friends ___ a very long time.', answer: 'for', options: ['for', 'since'] }
    ]
  }
};

// ===== GRADE 6 DICTATION WORD BANK (הכתבה לכיתה ו׳) =====
// Default seed list - editable dynamically from the admin panel (localStorage key: brainx-grade6-dictation)
const DEFAULT_GRADE6_DICTATION_WORDS = [
  { word: 'repeat', hebrewHint: 'לחזור' },
  { word: 'below', hebrewHint: 'מתחת / למטה' },
  { word: 'vocabulary', hebrewHint: 'אוצר מילים' },
  { word: 'spell', hebrewHint: 'לאיית' },
  { word: 'instructions', hebrewHint: 'הוראות' },
  { word: 'find out', hebrewHint: 'לגלות' },
  { word: 'raise', hebrewHint: 'להעלות, לגדל או העלאה' },
  { word: 'complete', hebrewHint: 'להשלים / שלם' },
  { word: 'dictionary', hebrewHint: 'מילון' },
  { word: 'opposite', hebrewHint: 'הפך / מנוגד' }
];


















