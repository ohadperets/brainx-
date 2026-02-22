// ===== DATA.JS — All content for Peret School =====
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

  // ========== HEBREW (עברית) ==========
  hebrew: {
    name: "עברית",
    icon: "📖",
    lessons: [
      {
        id: "heb-1",
        title: "שמות עצם",
        preview: "סוגי שמות עצם בעברית",
        content: `
          <h2>📖 שמות עצם</h2>
          <p><span class="highlight">שם עצם</span> הוא מילה שמציינת דבר, אדם, מקום, חיה או רעיון.</p>
          
          <h3>סוגים של שמות עצם:</h3>
          
          <p><strong>1. שם עצם פרטי</strong> — שם ספציפי של אדם, מקום או דבר. נכתב באות גדולה.</p>
          <div class="example">דוגמאות: דני, ירושלים, ישראל, כנרת</div>
          
          <p><strong>2. שם עצם כללי</strong> — שם כללי של סוג דבר.</p>
          <div class="example">דוגמאות: ילד, עיר, מדינה, אגם, ספר</div>
          
          <p><strong>3. שם עצם מופשט</strong> — שם של דבר שלא ניתן לראות או לגעת בו.</p>
          <div class="example">דוגמאות: אהבה, שמחה, חופש, ידידות, אומץ</div>
          
          <h3>זכר ונקבה:</h3>
          <p>בעברית, לכל שם עצם יש <span class="highlight">מין</span> — זכר או נקבה.</p>
          <div class="example">
            זכר: ילד, ספר, שולחן, כיסא<br>
            נקבה: ילדה, מחברת, שמלה, כיתה
          </div>
          
          <h3>יחיד ורבים:</h3>
          <p>שם עצם יכול להיות <span class="highlight">ביחיד</span> (אחד) או <span class="highlight">ברבים</span> (יותר מאחד).</p>
          <div class="example">
            ילד → ילדים<br>
            ילדה → ילדות<br>
            ספר → ספרים<br>
            מחברת → מחברות
          </div>
        `
      },
      {
        id: "heb-2",
        title: "שמות פועל",
        preview: "זמנים ובניינים בעברית",
        content: `
          <h2>📖 שמות פועל (פעלים)</h2>
          <p><span class="highlight">פועל</span> הוא מילה שמתארת פעולה או מצב.</p>
          
          <h3>שלושת הזמנים:</h3>
          
          <p><strong>1. עבר</strong> — פעולה שכבר קרתה</p>
          <div class="example">למדתי, אכלתי, רצתי, כתבתי</div>
          
          <p><strong>2. הווה</strong> — פעולה שקורית עכשיו</p>
          <div class="example">לומד, אוכל, רץ, כותב</div>
          
          <p><strong>3. עתיד</strong> — פעולה שתקרה בעתיד</p>
          <div class="example">אלמד, אוכל, ארוץ, אכתוב</div>
          
          <h3>שורש הפועל:</h3>
          <p>לכל פועל בעברית יש <span class="highlight">שורש</span> — בדרך כלל 3 אותיות.</p>
          <div class="example">
            כתב → כותב, כתבתי, אכתוב (השורש: כ.ת.ב)<br>
            למד → לומד, למדתי, אלמד (השורש: ל.מ.ד)<br>
            ספר → מספר, סיפרתי, אספר (השורש: ס.פ.ר)
          </div>
          
          <h3>גופים:</h3>
          <p>הפועל משתנה לפי <span class="highlight">הגוף</span> — מי עושה את הפעולה.</p>
          <div class="example">
            אני — למדתי<br>
            אתה — למדת<br>
            היא — למדה<br>
            אנחנו — למדנו<br>
            הם — למדו
          </div>
        `
      },
      {
        id: "heb-3",
        title: "שמות תואר",
        preview: "תיאור של שמות עצם",
        content: `
          <h2>📖 שמות תואר</h2>
          <p><span class="highlight">שם תואר</span> הוא מילה שמתארת שם עצם — איך הוא נראה, מרגיש או פועל.</p>
          
          <h3>דוגמאות:</h3>
          <div class="example">
            הילד <strong>הגבוה</strong><br>
            השמלה <strong>היפה</strong><br>
            הספר <strong>המעניין</strong><br>
            הכלב <strong>הגדול</strong>
          </div>
          
          <h3>התאמה לשם העצם:</h3>
          <p>שם התואר חייב להתאים לשם העצם <span class="highlight">במין ובמספר</span>.</p>
          <div class="example">
            ילד גדול → ילדה גדולה (מין)<br>
            ילד גדול → ילדים גדולים (מספר)<br>
            ילדה גדולה → ילדות גדולות (מין + מספר)
          </div>
          
          <h3>דרגות השוואה:</h3>
          <div class="example">
            גדול — יותר גדול — הכי גדול<br>
            יפה — יותר יפה — הכי יפה<br>
            חכם — יותר חכם — הכי חכם
          </div>
        `
      }
    ],
    quiz: [
      { question: "מהו שם עצם?", options: ["מילה שמתארת פעולה", "מילה שמציינת דבר, אדם או מקום", "מילה שמחברת משפטים", "מילה שמתארת שם עצם"], correct: 1 },
      { question: "איזו מילה היא שם עצם פרטי?", options: ["ילד", "עיר", "ירושלים", "ספר"], correct: 2 },
      { question: "מהו הרבים של 'ילדה'?", options: ["ילדים", "ילדות", "ילדה", "ילדן"], correct: 1 },
      { question: "מהו השורש של המילה 'כותב'?", options: ["כ.ו.ת", "כ.ת.ב", "כ.ו.ב", "ת.כ.ב"], correct: 1 },
      { question: "איזה זמן הוא 'אלמד'?", options: ["עבר", "הווה", "עתיד", "ציווי"], correct: 2 },
      { question: "מהו שם תואר?", options: ["מילה שמציינת מקום", "מילה שמתארת פעולה", "מילה שמתארת שם עצם", "מילה שמחברת משפטים"], correct: 2 },
      { question: "'אהבה' היא דוגמה ל...", options: ["שם עצם פרטי", "שם עצם כללי", "שם עצם מופשט", "שם תואר"], correct: 2 },
      { question: "מה צריך שם תואר להתאים ל?", options: ["רק למין", "רק למספר", "למין ולמספר", "לזמן הפועל"], correct: 2 },
      { question: "מהו הגוף הנכון: 'אנחנו ___'?", options: ["למדתי", "למדת", "למדנו", "למדו"], correct: 2 },
      { question: "איזו מילה היא שם עצם מופשט?", options: ["כיסא", "ירושלים", "חופש", "חתול"], correct: 2 },
      { question: "מהו הרבים של 'ספר'?", options: ["ספרות", "ספרים", "ספריה", "ספרן"], correct: 1 },
      { question: "איזה זמן הוא 'רצתי'?", options: ["עבר", "הווה", "עתיד", "ציווי"], correct: 0 },
      { question: "מהו השורש של 'לומד'?", options: ["ל.ו.מ", "ל.מ.ד", "מ.ל.ד", "ד.מ.ל"], correct: 1 },
      { question: "'הילד הגבוה' - 'גבוה' הוא:", options: ["שם עצם", "שם תואר", "פועל", "מילת קישור"], correct: 1 },
      { question: "מהו הרבים של 'מחברת'?", options: ["מחברים", "מחברות", "מחברתות", "מחברן"], correct: 1 },
      { question: "מהו הנקבה של 'גדול'?", options: ["גדולה", "גדולים", "גדולות", "גדלה"], correct: 0 },
      { question: "'הם ___' - מה הגוף הנכון?", options: ["אכלתי", "אכלת", "אכל", "אכלו"], correct: 3 },
      { question: "איזו מילה היא פועל?", options: ["ירושלים", "יפה", "רץ", "שולחן"], correct: 2 },
      { question: "מילת חיבור היא:", options: ["ו", "ילד", "יפה", "רץ"], correct: 0 },
      { question: "מהו השורש של 'שומר'?", options: ["ש.מ.ר", "ש.ו.מ", "מ.ר.ש", "ר.מ.ש"], correct: 0 },
      { question: "הזמן ההווה של 'אכלתי':", options: ["אוכל", "יאכל", "אכול", "אכלתי"], correct: 0 },
      { question: "מהו הרבים של 'עיפרון'?", options: ["עיפרונות", "עיפרונים", "עיפרנים", "עפרונים"], correct: 1 },
      { question: "'חכמה' - שם עצם מסוג:", options: ["פרטי", "כללי", "מופשט", "קונקרטי"], correct: 2 },
      { question: "הפועל 'יכתוב' הוא בזמן:", options: ["עבר", "הווה", "עתיד", "ציווי"], correct: 2 },
      { question: "נקבה של 'מורה':", options: ["מורה", "מורית", "מורָה", "מורות"], correct: 0 }
    ],
    flashcards: [
      { front: "מהו שם עצם?", back: "מילה שמציינת דבר, אדם, מקום, חיה או רעיון" },
      { front: "מהו שם עצם פרטי?", back: "שם ספציפי של אדם, מקום או דבר\nדוגמה: ירושלים, דני" },
      { front: "מהו שם עצם מופשט?", back: "שם של דבר שלא ניתן לראות או לגעת\nדוגמה: אהבה, חופש" },
      { front: "מהו שורש?", back: "3 אותיות בסיסיות של מילה בעברית\nדוגמה: כ.ת.ב → כותב, כתיבה" },
      { front: "מהם 3 הזמנים בעברית?", back: "עבר, הווה, עתיד" },
      { front: "הרבים של 'ילד'?", back: "ילדים" },
      { front: "הרבים של 'ילדה'?", back: "ילדות" },
      { front: "מהו שם תואר?", back: "מילה שמתארת שם עצם\nדוגמה: גדול, יפה, חכם" },
      { front: "דרגות השוואה של 'יפה'?", back: "יפה → יותר יפה → הכי יפה" },
      { front: "מהו פועל?", back: "מילה שמתארת פעולה או מצב\nדוגמה: רץ, אוכל, חושב" },
      { front: "שורש של 'מספר'?", back: "ס.פ.ר" },
      { front: "שורש של 'שומר'?", back: "ש.מ.ר" },
      { front: "שורש של 'הולך'?", back: "ה.ל.כ" },
      { front: "מה זה מילת קישור?", back: "מילה שמחברת בין משפטים\nדוגמה: ו, אבל, כי, לכן" },
      { front: "זכר של 'גדולה'?", back: "גדול" },
      { front: "נקבה של 'יפה'?", back: "יפה (נשאר אותו דבר!)" },
      { front: "זמן עבר של 'אני הולך'?", back: "הלכתי" },
      { front: "זמן עתיד של 'אני כותב'?", back: "אכתוב" },
      { front: "הרבים של 'עיר'?", back: "ערים" },
      { front: "הרבים של 'שולחן'?", back: "שולחנות" }
    ]
  },

  // ========== ENGLISH (אנגלית) ==========
  english: {
    name: "אנגלית",
    icon: "🔤",
    lessons: [
      {
        id: "eng-1",
        title: "Present Simple",
        preview: "פעלים בזמן הווה פשוט",
        content: `
          <h2>🔤 Present Simple — הווה פשוט</h2>
          <p>משתמשים ב-<span class="highlight">Present Simple</span> כדי לתאר דברים שקורים באופן קבוע, הרגלים, ועובדות.</p>
          
          <h3>מבנה:</h3>
          <div class="example">
            I/You/We/They + verb<br>
            He/She/It + verb + <strong>s</strong>
          </div>
          
          <h3>דוגמאות:</h3>
          <div class="example">
            I <strong>play</strong> soccer every day.<br>
            She <strong>plays</strong> the piano.<br>
            They <strong>eat</strong> breakfast at 7:00.<br>
            He <strong>goes</strong> to school by bus.
          </div>
          
          <h3>שלילה (Negative):</h3>
          <div class="example">
            I <strong>don't</strong> like spiders.<br>
            She <strong>doesn't</strong> eat meat.<br>
            We <strong>don't</strong> have homework.
          </div>
          
          <h3>שאלה (Question):</h3>
          <div class="example">
            <strong>Do</strong> you like pizza?<br>
            <strong>Does</strong> she speak English?<br>
            <strong>Do</strong> they play basketball?
          </div>
          
          <h3>מילות זמן:</h3>
          <div class="example">
            always, usually, often, sometimes, rarely, never<br>
            every day, every week, on Mondays
          </div>
        `
      },
      {
        id: "eng-2",
        title: "Past Simple",
        preview: "פעלים בזמן עבר פשוט",
        content: `
          <h2>🔤 Past Simple — עבר פשוט</h2>
          <p>משתמשים ב-<span class="highlight">Past Simple</span> כדי לתאר פעולות שקרו וגם נגמרו בעבר.</p>
          
          <h3>Regular Verbs (פעלים רגילים):</h3>
          <p>מוסיפים <span class="highlight">-ed</span> לפועל:</p>
          <div class="example">
            play → played<br>
            walk → walked<br>
            study → studied<br>
            stop → stopped
          </div>
          
          <h3>Irregular Verbs (פעלים לא רגילים):</h3>
          <div class="example">
            go → went<br>
            eat → ate<br>
            see → saw<br>
            have → had<br>
            make → made<br>
            come → came
          </div>
          
          <h3>שלילה:</h3>
          <div class="example">
            I <strong>didn't</strong> go to school yesterday.<br>
            She <strong>didn't</strong> eat lunch.<br>
            They <strong>didn't</strong> finish the test.
          </div>
          
          <h3>שאלה:</h3>
          <div class="example">
            <strong>Did</strong> you see the movie?<br>
            <strong>Did</strong> she come to the party?<br>
            <strong>Did</strong> they play well?
          </div>
        `
      },
      {
        id: "eng-3",
        title: "Vocabulary — School",
        preview: "אוצר מילים — בית הספר",
        content: `
          <h2>🔤 Vocabulary — School</h2>
          <p>מילים חשובות בנושא <span class="highlight">בית הספר</span>:</p>
          
          <h3>מקומות:</h3>
          <div class="example">
            classroom — כיתה<br>
            library — ספרייה<br>
            playground — מגרש משחקים<br>
            cafeteria — חדר אוכל<br>
            gym — חדר ספורט
          </div>
          
          <h3>ציוד:</h3>
          <div class="example">
            notebook — מחברת<br>
            pencil — עיפרון<br>
            eraser — מחק<br>
            ruler — סרגל<br>
            scissors — מספריים<br>
            backpack — תיק גב
          </div>
          
          <h3>מקצועות:</h3>
          <div class="example">
            math — מתמטיקה<br>
            science — מדע<br>
            history — היסטוריה<br>
            art — אמנות<br>
            music — מוזיקה<br>
            PE (physical education) — חינוך גופני
          </div>
          
          <h3>משפטים:</h3>
          <div class="example">
            My favorite subject is math.<br>
            I forgot my notebook at home.<br>
            Can I borrow your pencil?<br>
            The library is next to the gym.
          </div>
        `
      }
    ],
    quiz: [
      { question: "She ___ to school every day.", options: ["go", "goes", "going", "went"], correct: 1 },
      { question: "They ___ play soccer yesterday.", options: ["don't", "doesn't", "didn't", "aren't"], correct: 2 },
      { question: "___ you like pizza?", options: ["Does", "Do", "Did", "Are"], correct: 1 },
      { question: "What is 'מחברת' in English?", options: ["pencil", "eraser", "notebook", "ruler"], correct: 2 },
      { question: "The past of 'go' is:", options: ["goed", "gone", "went", "goes"], correct: 2 },
      { question: "He ___ his homework last night.", options: ["do", "does", "did", "doing"], correct: 2 },
      { question: "What is 'ספרייה' in English?", options: ["classroom", "library", "cafeteria", "playground"], correct: 1 },
      { question: "I ___ eat breakfast every morning.", options: ["always", "yesterday", "last week", "tomorrow"], correct: 0 },
      { question: "She doesn't ___ English.", options: ["speaks", "speaking", "speak", "spoke"], correct: 2 },
      { question: "The past of 'eat' is:", options: ["eated", "ate", "eaten", "eating"], correct: 1 },
      { question: "They ___ basketball now.", options: ["play", "plays", "playing", "are playing"], correct: 3 },
      { question: "What is 'מורה' in English?", options: ["student", "teacher", "principal", "parent"], correct: 1 },
      { question: "The past of 'see' is:", options: ["seed", "seen", "saw", "sees"], correct: 2 },
      { question: "___ she like music?", options: ["Do", "Does", "Did", "Is"], correct: 1 },
      { question: "We ___ to the park yesterday.", options: ["go", "goes", "went", "going"], correct: 2 },
      { question: "What is 'תלמיד' in English?", options: ["teacher", "student", "friend", "brother"], correct: 1 },
      { question: "He ___ a book now.", options: ["read", "reads", "reading", "is reading"], correct: 3 },
      { question: "The past of 'have' is:", options: ["haved", "has", "had", "having"], correct: 2 },
      { question: "I ___ like spiders.", options: ["doesn't", "don't", "didn't", "isn't"], correct: 1 },
      { question: "What is 'חבר' in English?", options: ["brother", "sister", "friend", "family"], correct: 2 },
      { question: "She ___ her room every day.", options: ["clean", "cleans", "cleaning", "cleaned"], correct: 1 },
      { question: "The past of 'make' is:", options: ["maked", "makes", "made", "making"], correct: 2 },
      { question: "What is 'בית' in English?", options: ["school", "house", "room", "door"], correct: 1 },
      { question: "___ they finish the test?", options: ["Do", "Does", "Did", "Are"], correct: 2 },
      { question: "I ___ TV every evening.", options: ["watch", "watches", "watching", "watched"], correct: 0 },
      { question: "The past of 'come' is:", options: ["comed", "comes", "came", "coming"], correct: 2 },
      { question: "What is 'כלב' in English?", options: ["cat", "dog", "bird", "fish"], correct: 1 },
      { question: "She ___ speak French.", options: ["don't", "doesn't", "didn't", "isn't"], correct: 1 },
      { question: "The past of 'write' is:", options: ["writed", "writes", "wrote", "writing"], correct: 2 },
      { question: "What is 'משפחה' in English?", options: ["friend", "family", "school", "home"], correct: 1 }
    ],
    flashcards: [
      { front: "classroom", back: "כיתה" },
      { front: "library", back: "ספרייה" },
      { front: "notebook", back: "מחברת" },
      { front: "pencil", back: "עיפרון" },
      { front: "eraser", back: "מחק" },
      { front: "ruler", back: "סרגל" },
      { front: "backpack", back: "תיק גב" },
      { front: "scissors", back: "מספריים" },
      { front: "playground", back: "מגרש משחקים" },
      { front: "cafeteria", back: "חדר אוכל" },
      { front: "go → ?", back: "went (עבר)" },
      { front: "eat → ?", back: "ate (עבר)" },
      { front: "see → ?", back: "saw (עבר)" },
      { front: "have → ?", back: "had (עבר)" },
      { front: "make → ?", back: "made (עבר)" },
      { front: "come → ?", back: "came (עבר)" },
      { front: "write → ?", back: "wrote (עבר)" },
      { front: "take → ?", back: "took (עבר)" },
      { front: "teacher", back: "מורה" },
      { front: "student", back: "תלמיד" },
      { front: "friend", back: "חבר" },
      { front: "family", back: "משפחה" },
      { front: "house", back: "בית" },
      { front: "dog", back: "כלב" },
      { front: "cat", back: "חתול" },
      { front: "run → ?", back: "ran (עבר)" },
      { front: "swim → ?", back: "swam (עבר)" },
      { front: "sing → ?", back: "sang (עבר)" },
      { front: "drink → ?", back: "drank (עבר)" },
      { front: "think → ?", back: "thought (עבר)" },
      { front: "buy → ?", back: "bought (עבר)" },
      { front: "bring → ?", back: "brought (עבר)" },
      { front: "know → ?", back: "knew (עבר)" },
      { front: "beautiful", back: "יפה" },
      { front: "important", back: "חשוב" },
      { front: "difficult", back: "קשה" },
      { front: "easy", back: "קל" },
      { front: "always", back: "תמיד" },
      { front: "never", back: "אף פעם" },
      { front: "sometimes", back: "לפעמים" }
    ]
  },

  // ========== MATH (מתמטיקה) ==========
  math: {
    name: "מתמטיקה",
    icon: "🔢",
    lessons: [
      {
        id: "math-1",
        title: "שברים",
        preview: "הבנת שברים, חיבור וחיסור",
        content: `
          <h2>🔢 שברים</h2>
          <p><span class="highlight">שבר</span> מתאר חלק מתוך שלם.</p>
          
          <h3>חלקי השבר:</h3>
          <div class="example">
            <strong>מונה</strong> (למעלה) — כמה חלקים לקחנו<br>
            <strong>מכנה</strong> (למטה) — לכמה חלקים שווים חילקנו
          </div>
          <div class="example">
            ¾ → המונה הוא 3, המכנה הוא 4<br>
            פירוש: לקחנו 3 חלקים מתוך 4
          </div>
          
          <h3>חיבור שברים עם אותו מכנה:</h3>
          <div class="example">
            ²⁄₅ + ¹⁄₅ = ³⁄₅<br>
            מחברים רק את המונים! המכנה נשאר.
          </div>
          
          <h3>חיסור שברים עם אותו מכנה:</h3>
          <div class="example">
            ⁴⁄₇ - ²⁄₇ = ²⁄₇<br>
            מחסירים רק את המונים! המכנה נשאר.
          </div>
          
          <h3>שברים שקולים:</h3>
          <p>שני שברים שווים באותו ערך:</p>
          <div class="example">
            ½ = ²⁄₄ = ³⁄₆ = ⁴⁄₈<br>
            כופלים או מחלקים את המונה והמכנה באותו מספר.
          </div>
          
          <h3>צמצום שברים:</h3>
          <div class="example">
            ⁴⁄₈ = ²⁄₄ = ½<br>
            מחלקים מונה ומכנה באותו מספר.
          </div>
        `
      },
      {
        id: "math-2",
        title: "מספרים עשרוניים",
        preview: "עשרוניים, חיבור וחיסור",
        content: `
          <h2>🔢 מספרים עשרוניים</h2>
          <p><span class="highlight">מספר עשרוני</span> הוא דרך אחרת לכתוב שבר שהמכנה שלו הוא 10, 100, 1000...</p>
          
          <h3>ערך המקום:</h3>
          <div class="example">
            3.45<br>
            3 = אחדות<br>
            4 = עשיריות (⁴⁄₁₀)<br>
            5 = מאיות (⁵⁄₁₀₀)
          </div>
          
          <h3>חיבור עשרוניים:</h3>
          <p>מיישרים את הנקודה העשרונית ומחברים:</p>
          <div class="example">
            &nbsp; 3.45<br>
            + 2.30<br>
            -----<br>
            &nbsp; 5.75
          </div>
          
          <h3>חיסור עשרוניים:</h3>
          <div class="example">
            &nbsp; 7.80<br>
            - 3.25<br>
            -----<br>
            &nbsp; 4.55
          </div>
          
          <h3>המרה משבר לעשרוני:</h3>
          <div class="example">
            ½ = 0.5<br>
            ¼ = 0.25<br>
            ¾ = 0.75<br>
            ¹⁄₁₀ = 0.1
          </div>
        `
      },
      {
        id: "math-3",
        title: "גאומטריה — שטח והיקף",
        preview: "חישוב שטח והיקף של צורות",
        content: `
          <h2>🔢 שטח והיקף</h2>
          
          <h3>מהו היקף?</h3>
          <p><span class="highlight">היקף</span> = סכום אורכי כל הצלעות (האורך סביב הצורה)</p>
          
          <h3>מהו שטח?</h3>
          <p><span class="highlight">שטח</span> = כמה מקום הצורה תופסת (נמדד ביחידות ריבועיות)</p>
          
          <h3>ריבוע:</h3>
          <div class="example">
            היקף = צלע × 4<br>
            שטח = צלע × צלע<br><br>
            דוגמה: צלע = 5 ס"מ<br>
            היקף = 5 × 4 = 20 ס"מ<br>
            שטח = 5 × 5 = 25 סמ"ר
          </div>
          
          <h3>מלבן:</h3>
          <div class="example">
            היקף = (אורך + רוחב) × 2<br>
            שטח = אורך × רוחב<br><br>
            דוגמה: אורך = 8, רוחב = 3<br>
            היקף = (8 + 3) × 2 = 22 ס"מ<br>
            שטח = 8 × 3 = 24 סמ"ר
          </div>
          
          <h3>משולש:</h3>
          <div class="example">
            היקף = צלע1 + צלע2 + צלע3<br>
            שטח = (בסיס × גובה) ÷ 2<br><br>
            דוגמה: בסיס = 6, גובה = 4<br>
            שטח = (6 × 4) ÷ 2 = 12 סמ"ר
          </div>
        `
      }
    ],
    quiz: [
      { question: "בשבר ¾, מהו המונה?", options: ["4", "3", "7", "1"], correct: 1 },
      { question: "²⁄₅ + ¹⁄₅ = ?", options: ["³⁄₁₀", "³⁄₅", "²⁄₅", "¹⁄₅"], correct: 1 },
      { question: "מהו שבר שקול ל-½?", options: ["¹⁄₃", "²⁄₃", "²⁄₄", "³⁄₅"], correct: 2 },
      { question: "3.45 — מהי הספרה במקום העשיריות?", options: ["3", "4", "5", "0"], correct: 1 },
      { question: "3.5 + 2.3 = ?", options: ["5.8", "5.2", "6.8", "5.35"], correct: 0 },
      { question: "מהו ההיקף של ריבוע עם צלע 6?", options: ["12", "24", "36", "18"], correct: 1 },
      { question: "מהו השטח של מלבן 5×4?", options: ["9", "18", "20", "25"], correct: 2 },
      { question: "מהו השטח של משולש עם בסיס 10 וגובה 6?", options: ["60", "30", "16", "20"], correct: 1 },
      { question: "½ כמספר עשרוני:", options: ["0.1", "0.2", "0.5", "0.12"], correct: 2 },
      { question: "היקף מלבן עם אורך 7 ורוחב 3:", options: ["10", "21", "20", "14"], correct: 2 },
      { question: "⁴⁄₈ - ²⁄₈ = ?", options: ["²⁄₈", "⁶⁄₈", "²⁄₄", "⁴⁄₈"], correct: 0 },
      { question: "בשבר ⁵⁄₆, מהו המכנה?", options: ["5", "6", "11", "1"], correct: 1 },
      { question: "7.8 - 3.2 = ?", options: ["4.6", "4.4", "5.6", "3.6"], correct: 0 },
      { question: "¼ כמספר עשרוני:", options: ["0.4", "0.25", "0.14", "0.5"], correct: 1 },
      { question: "שטח ריבוע עם צלע 8:", options: ["32", "16", "64", "24"], correct: 2 },
      { question: "היקף משולש שווה צלעות עם צלע 5:", options: ["10", "15", "25", "20"], correct: 1 },
      { question: "⅓ + ⅓ = ?", options: ["⅔", "⅙", "²⁄₆", "⅓"], correct: 0 },
      { question: "מה גדול יותר: 0.5 או 0.45?", options: ["0.5", "0.45", "שווים", "אי אפשר לדעת"], correct: 0 },
      { question: "12.4 + 3.6 = ?", options: ["15.0", "16.0", "15.10", "14.0"], correct: 1 },
      { question: "שטח מלבן 6×9:", options: ["15", "54", "30", "45"], correct: 1 },
      { question: "כמה שמיניות יש בשלם?", options: ["6", "7", "8", "10"], correct: 2 },
      { question: "¾ כמספר עשרוני:", options: ["0.75", "0.34", "0.43", "0.7"], correct: 0 },
      { question: "היקף ריבוע עם צלע 10:", options: ["20", "40", "100", "30"], correct: 1 },
      { question: "⁵⁄₁₀ שווה ל:", options: ["½", "⅓", "¼", "⅔"], correct: 0 },
      { question: "שטח משולש עם בסיס 8 וגובה 4:", options: ["32", "16", "12", "24"], correct: 1 },
      { question: "2.7 × 3 = ?", options: ["8.1", "7.1", "6.7", "9.1"], correct: 0 },
      { question: "מה צריך להוסיף ל-⅓ כדי לקבל 1?", options: ["⅓", "⅔", "½", "¼"], correct: 1 },
      { question: "איזה שבר קטן יותר?", options: ["½", "⅓", "¼", "⅕"], correct: 3 },
      { question: "15.0 - 7.5 = ?", options: ["7.5", "8.5", "6.5", "7.0"], correct: 0 },
      { question: "שטח ריבוע עם צלע 12:", options: ["48", "24", "144", "120"], correct: 2 }
    ],
    flashcards: [
      { front: "מהו שבר?", back: "חלק מתוך שלם\nכמו ¾ = 3 חלקים מתוך 4" },
      { front: "מהו מונה?", back: "המספר למעלה בשבר\nכמה חלקים לקחנו" },
      { front: "מהו מכנה?", back: "המספר למטה בשבר\nלכמה חלקים חילקנו" },
      { front: "²⁄₅ + ¹⁄₅ = ?", back: "³⁄₅\n(מחברים מונים, מכנה נשאר)" },
      { front: "½ = ? עשרוני", back: "0.5" },
      { front: "¼ = ? עשרוני", back: "0.25" },
      { front: "¾ = ? עשרוני", back: "0.75" },
      { front: "⅓ = ? עשרוני", back: "0.333..." },
      { front: "היקף ריבוע = ?", back: "צלע × 4" },
      { front: "שטח ריבוע = ?", back: "צלע × צלע" },
      { front: "שטח מלבן = ?", back: "אורך × רוחב" },
      { front: "שטח משולש = ?", back: "(בסיס × גובה) ÷ 2" },
      { front: "היקף מלבן = ?", back: "(אורך + רוחב) × 2" },
      { front: "מהם שברים שקולים?", back: "שברים ששווים אותו דבר\n½ = ²⁄₄ = ³⁄₆" },
      { front: "סדר פעולות חשבון:", back: "סוגריים, כפל/חילוק, חיבור/חיסור" },
      { front: "כמה רביעיות בשלם?", back: "4 רביעיות = 1 שלם" }
    ]
  },

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

  // ========== HANGMAN WORDS ==========
  hangman: {
    hebrew: [
      { word: 'ירושלים', hint: 'עיר הבירה של ישראל' },
      { word: 'מחברת', hint: 'כותבים בה בבית הספר' },
      { word: 'שמחה', hint: 'הרגשה טובה' },
      { word: 'ידידות', hint: 'קשר בין חברים' },
      { word: 'ספרייה', hint: 'מקום עם הרבה ספרים' },
      { word: 'חופש', hint: 'כשאין לימודים' },
      { word: 'משפחה', hint: 'אבא, אמא, אחים' },
      { word: 'תלמיד', hint: 'ילד שלומד בבית ספר' },
      { word: 'מורה', hint: 'מי שמלמד בכיתה' },
      { word: 'משפט', hint: 'אוסף מילים שיוצרות רעיון' },
      { word: 'פסיק', hint: 'סימן פיסוק שעוצר קצת' },
      { word: 'סיפור', hint: 'טקסט עם התחלה, אמצע וסוף' },
      { word: 'תהילים', hint: 'ספר מזמורים בתנ"ך' },
      { word: 'ברכה', hint: 'משהו טוב שאומרים למישהו' },
      { word: 'חברות', hint: 'יחסים טובים בין אנשים' }
    ],
    english: [
      { word: 'CLASSROOM', hint: 'Where you study at school' },
      { word: 'LIBRARY', hint: 'A place with many books' },
      { word: 'NOTEBOOK', hint: 'You write in it' },
      { word: 'PENCIL', hint: 'You write with it' },
      { word: 'TEACHER', hint: 'Someone who teaches you' },
      { word: 'HOMEWORK', hint: 'Work you do at home' },
      { word: 'BACKPACK', hint: 'You carry books in it' },
      { word: 'STUDENT', hint: 'A person who learns at school' },
      { word: 'DICTIONARY', hint: 'A book with word meanings' },
      { word: 'BEAUTIFUL', hint: 'Very pretty' },
      { word: 'DIFFERENT', hint: 'Not the same' },
      { word: 'IMPORTANT', hint: 'Something that matters a lot' },
      { word: 'YESTERDAY', hint: 'The day before today' },
      { word: 'TOMORROW', hint: 'The day after today' },
      { word: 'PLAYGROUND', hint: 'Where children play outside' }
    ],
    math: [
      { word: 'שבר', hint: 'חלק מתוך שלם, כמו ½' },
      { word: 'מונה', hint: 'המספר למעלה בשבר' },
      { word: 'מכנה', hint: 'המספר למטה בשבר' },
      { word: 'היקף', hint: 'אורך סביב הצורה' },
      { word: 'שטח', hint: 'כמה מקום הצורה תופסת' },
      { word: 'ריבוע', hint: 'צורה עם 4 צלעות שוות' },
      { word: 'משולש', hint: 'צורה עם 3 צלעות' },
      { word: 'מלבן', hint: 'צורה עם 4 צלעות, 2 ארוכות ו-2 קצרות' },
      { word: 'עיגול', hint: 'צורה עגולה בלי פינות' },
      { word: 'חצי', hint: 'שני חלקים שווים' },
      { word: 'רבע', hint: 'ארבעה חלקים שווים' },
      { word: 'כפל', hint: 'פעולה של לקחת מספר כמה פעמים' },
      { word: 'חילוק', hint: 'פעולה של לחלק לקבוצות שוות' },
      { word: 'זווית', hint: 'המפגש בין שני קווים' },
      { word: 'קוטר', hint: 'קו שעובר דרך מרכז העיגול' }
    ]
  },

  // ========== MEMORY PAIRS ==========
  memory: {
    hebrew: [
      ['ילד', 'ילדים'], ['ילדה', 'ילדות'], ['ספר', 'ספרים'], ['שם עצם', 'noun'],
      ['פועל', 'verb'], ['תואר', 'adjective'], ['מחברת', 'מחברות'], ['שיר', 'שירים'],
      ['בית', 'בתים'], ['מילה', 'מילים'], ['שאלה', 'שאלות'], ['תשובה', 'תשובות']
    ],
    english: [
      ['go', 'went'], ['eat', 'ate'], ['see', 'saw'], ['have', 'had'],
      ['make', 'made'], ['come', 'came'], ['take', 'took'], ['give', 'gave'],
      ['write', 'wrote'], ['read', 'read'], ['buy', 'bought'], ['think', 'thought']
    ],
    math: [
      ['½', '0.5'], ['¼', '0.25'], ['¾', '0.75'], ['שטח ריבוע', 'צלע×צלע'],
      ['שטח מלבן', 'אורך×רוחב'], ['היקף ריבוע', 'צלע×4'], ['היקף מלבן', '(אורך+רוחב)×2'],
      ['⅓', '0.33'], ['⅔', '0.67'], ['1', '100%'], ['½', '50%'], ['¼', '25%']
    ]
  },

  // ========== DICTATION (English) ==========
  dictation: [
    {
      week: 'שבוע 1 — בית הספר',
      words: [
        { word: 'classroom', hebrewHint: 'כיתה' },
        { word: 'notebook', hebrewHint: 'מחברת' },
        { word: 'pencil', hebrewHint: 'עיפרון' },
        { word: 'teacher', hebrewHint: 'מורה' },
        { word: 'library', hebrewHint: 'ספרייה' },
        { word: 'homework', hebrewHint: 'שיעורי בית' },
        { word: 'eraser', hebrewHint: 'מחק' },
        { word: 'backpack', hebrewHint: 'תיק גב' }
      ]
    },
    {
      week: 'שבוע 2 — פעולות',
      words: [
        { word: 'played', hebrewHint: 'שיחק (עבר)' },
        { word: 'studied', hebrewHint: 'למד (עבר)' },
        { word: 'walked', hebrewHint: 'הלך (עבר)' },
        { word: 'stopped', hebrewHint: 'עצר (עבר)' },
        { word: 'always', hebrewHint: 'תמיד' },
        { word: 'usually', hebrewHint: 'בדרך כלל' },
        { word: 'sometimes', hebrewHint: 'לפעמים' },
        { word: 'never', hebrewHint: 'אף פעם' }
      ]
    },
    {
      week: 'שבוע 3 — מקומות',
      words: [
        { word: 'playground', hebrewHint: 'מגרש משחקים' },
        { word: 'cafeteria', hebrewHint: 'חדר אוכל' },
        { word: 'gymnasium', hebrewHint: 'אולם ספורט' },
        { word: 'hospital', hebrewHint: 'בית חולים' },
        { word: 'restaurant', hebrewHint: 'מסעדה' },
        { word: 'supermarket', hebrewHint: 'סופרמרקט' },
        { word: 'airport', hebrewHint: 'שדה תעופה' },
        { word: 'museum', hebrewHint: 'מוזיאון' }
      ]
    },
    {
      week: 'שבוע 4 — תיאורים',
      words: [
        { word: 'beautiful', hebrewHint: 'יפה' },
        { word: 'different', hebrewHint: 'שונה' },
        { word: 'important', hebrewHint: 'חשוב' },
        { word: 'wonderful', hebrewHint: 'נפלא' },
        { word: 'dangerous', hebrewHint: 'מסוכן' },
        { word: 'excellent', hebrewHint: 'מצוין' },
        { word: 'impossible', hebrewHint: 'בלתי אפשרי' },
        { word: 'comfortable', hebrewHint: 'נוח' }
      ]
    }
  ],

  // ========== TEST PREP DICTATION (הכנה למבחן) ==========
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

  // ========== GENERAL DICTATION POOL (הכתבה כללי) ==========
  generalDictation: [
    // School
    { word: 'school', hebrewHint: 'בית ספר' },
    { word: 'teacher', hebrewHint: 'מורה' },
    { word: 'student', hebrewHint: 'תלמיד' },
    { word: 'homework', hebrewHint: 'שיעורי בית' },
    { word: 'pencil', hebrewHint: 'עיפרון' },
    { word: 'notebook', hebrewHint: 'מחברת' },
    { word: 'library', hebrewHint: 'ספרייה' },
    { word: 'classroom', hebrewHint: 'כיתה' },
    { word: 'question', hebrewHint: 'שאלה' },
    { word: 'answer', hebrewHint: 'תשובה' },
    // Family
    { word: 'family', hebrewHint: 'משפחה' },
    { word: 'mother', hebrewHint: 'אמא' },
    { word: 'father', hebrewHint: 'אבא' },
    { word: 'sister', hebrewHint: 'אחות' },
    { word: 'brother', hebrewHint: 'אח' },
    { word: 'cousin', hebrewHint: 'בן דוד' },
    { word: 'grandparents', hebrewHint: 'סבא וסבתא' },
    { word: 'baby', hebrewHint: 'תינוק' },
    { word: 'parents', hebrewHint: 'הורים' },
    { word: 'children', hebrewHint: 'ילדים' },
    // People
    { word: 'friend', hebrewHint: 'חבר' },
    { word: 'neighbor', hebrewHint: 'שכן' },
    { word: 'doctor', hebrewHint: 'רופא' },
    { word: 'police', hebrewHint: 'משטרה' },
    { word: 'farmer', hebrewHint: 'חקלאי' },
    { word: 'driver', hebrewHint: 'נהג' },
    { word: 'singer', hebrewHint: 'זמר' },
    { word: 'player', hebrewHint: 'שחקן' },
    { word: 'worker', hebrewHint: 'עובד' },
    { word: 'manager', hebrewHint: 'מנהל' },
    // Emotions
    { word: 'happy', hebrewHint: 'שמח' },
    { word: 'sad', hebrewHint: 'עצוב' },
    { word: 'angry', hebrewHint: 'כועס' },
    { word: 'excited', hebrewHint: 'נרגש' },
    { word: 'tired', hebrewHint: 'עייף' },
    { word: 'hungry', hebrewHint: 'רעב' },
    { word: 'thirsty', hebrewHint: 'צמא' },
    { word: 'funny', hebrewHint: 'מצחיק' },
    { word: 'friendly', hebrewHint: 'ידידותי' },
    { word: 'kind', hebrewHint: 'נחמד' },
    // Descriptions
    { word: 'big', hebrewHint: 'גדול' },
    { word: 'small', hebrewHint: 'קטן' },
    { word: 'tall', hebrewHint: 'גבוה' },
    { word: 'short', hebrewHint: 'נמוך' },
    { word: 'fast', hebrewHint: 'מהיר' },
    { word: 'slow', hebrewHint: 'איטי' },
    { word: 'clean', hebrewHint: 'נקי' },
    { word: 'dirty', hebrewHint: 'מלוכלך' },
    { word: 'strong', hebrewHint: 'חזק' },
    { word: 'weak', hebrewHint: 'חלש' },
    // Actions
    { word: 'run', hebrewHint: 'לרוץ' },
    { word: 'walk', hebrewHint: 'ללכת' },
    { word: 'jump', hebrewHint: 'לקפוץ' },
    { word: 'swim', hebrewHint: 'לשחות' },
    { word: 'read', hebrewHint: 'לקרוא' },
    { word: 'write', hebrewHint: 'לכתוב' },
    { word: 'speak', hebrewHint: 'לדבר' },
    { word: 'listen', hebrewHint: 'להקשיב' },
    { word: 'watch', hebrewHint: 'לצפות' },
    { word: 'play', hebrewHint: 'לשחק' },
    { word: 'eat', hebrewHint: 'לאכול' },
    { word: 'drink', hebrewHint: 'לשתות' },
    { word: 'cook', hebrewHint: 'לבשל' },
    { word: 'sleep', hebrewHint: 'לישון' },
    { word: 'wake', hebrewHint: 'להתעורר' },
    { word: 'open', hebrewHint: 'לפתוח' },
    { word: 'close', hebrewHint: 'לסגור' },
    { word: 'help', hebrewHint: 'לעזור' },
    { word: 'carry', hebrewHint: 'לשאת' },
    { word: 'bring', hebrewHint: 'להביא' },
    // Time
    { word: 'morning', hebrewHint: 'בוקר' },
    { word: 'afternoon', hebrewHint: 'צהריים' },
    { word: 'evening', hebrewHint: 'ערב' },
    { word: 'night', hebrewHint: 'לילה' },
    { word: 'today', hebrewHint: 'היום' },
    { word: 'tomorrow', hebrewHint: 'מחר' },
    { word: 'yesterday', hebrewHint: 'אתמול' },
    { word: 'weekend', hebrewHint: 'סוף שבוע' },
    { word: 'holiday', hebrewHint: 'חופשה' },
    { word: 'birthday', hebrewHint: 'יום הולדת' },
    // Places
    { word: 'house', hebrewHint: 'בית' },
    { word: 'kitchen', hebrewHint: 'מטבח' },
    { word: 'bedroom', hebrewHint: 'חדר שינה' },
    { word: 'garden', hebrewHint: 'גינה' },
    { word: 'street', hebrewHint: 'רחוב' },
    { word: 'city', hebrewHint: 'עיר' },
    { word: 'country', hebrewHint: 'מדינה' },
    { word: 'beach', hebrewHint: 'חוף' },
    { word: 'mountain', hebrewHint: 'הר' },
    { word: 'river', hebrewHint: 'נהר' },
    // Food
    { word: 'water', hebrewHint: 'מים' },
    { word: 'food', hebrewHint: 'אוכל' },
    { word: 'fruit', hebrewHint: 'פרי' },
    { word: 'bread', hebrewHint: 'לחם' },
    { word: 'milk', hebrewHint: 'חלב' },
    { word: 'apple', hebrewHint: 'תפוח' },
    { word: 'banana', hebrewHint: 'בננה' },
    { word: 'orange', hebrewHint: 'תפוז' },
    { word: 'chocolate', hebrewHint: 'שוקולד' },
    { word: 'sandwich', hebrewHint: 'כריך' }
  ],

  // ========== WORD MATCHING ==========
  wordMatch: [
    { hebrew: 'בית ספר', english: 'school' },
    { hebrew: 'מורה', english: 'teacher' },
    { hebrew: 'תלמיד', english: 'student' },
    { hebrew: 'ספר', english: 'book' },
    { hebrew: 'עיפרון', english: 'pencil' },
    { hebrew: 'מחברת', english: 'notebook' },
    { hebrew: 'כיתה', english: 'classroom' },
    { hebrew: 'שיעורי בית', english: 'homework' },
    { hebrew: 'מחק', english: 'eraser' },
    { hebrew: 'תיק גב', english: 'backpack' }
  ],

  // ========== BIG EXAM PREP (הכנה למבחן הגדול) - Unit 3 ==========
  bigExam: {
    title: 'הכנה למבחן הגדול - Unit 3',

    // --- VOCABULARY ---
    vocabulary: [
      { word: 'air', hebrew: 'אוויר' },
      { word: 'ask', hebrew: 'לשאול' },
      { word: 'at least', hebrew: 'לפחות' },
      { word: 'autumn', hebrew: 'סתיו' },
      { word: 'bee', hebrew: 'דבורה' },
      { word: 'bottle', hebrew: 'בקבוק' },
      { word: 'breathe', hebrew: 'לנשום' },
      { word: 'build', hebrew: 'לבנות' },
      { word: 'careful', hebrew: 'זהיר' },
      { word: 'change', hebrew: 'להשתנות' },
      { word: 'cook', hebrew: 'לבשל' },
      { word: 'cucumber', hebrew: 'מלפפון' },
      { word: 'cut down', hebrew: 'לכרות' },
      { word: 'environment', hebrew: 'סביבה' },
      { word: 'fix', hebrew: 'לתקן' },
      { word: 'grass', hebrew: 'דשא' },
      { word: 'honey', hebrew: 'דבש' },
      { word: 'invent', hebrew: 'להמציא' },
      { word: 'leaves', hebrew: 'עלים' },
      { word: 'minute', hebrew: 'דקה' },
      { word: 'pick up', hebrew: 'להרים' },
      { word: 'plant', hebrew: 'צמח / לשתול' },
      { word: 'remember', hebrew: 'לזכור' },
      { word: 'rule', hebrew: 'כללי' },
      { word: 'saw', hebrew: 'ראה' },
      { word: 'scary', hebrew: 'מפחיד' },
      { word: 'spring', hebrew: 'אביב' },
      { word: 'stay', hebrew: 'להישאר' },
      { word: 'storm', hebrew: 'סערה' },
      { word: 'strong', hebrew: 'חזק' },
      { word: 'throw away', hebrew: 'להשליך לפח' },
      { word: 'was', hebrew: 'היה' },
      { word: 'while', hebrew: 'בזמן ש-' },
      { word: 'wise', hebrew: 'חכם' }
    ],

    // --- GRAMMAR: Present Progressive ---
    grammar: [
      // Positive
      { question: 'The children ___ (play) in the park right now.', answer: 'are playing', options: ['is playing', 'are playing', 'plays', 'playing'], type: 'positive' },
      { question: 'She ___ (cook) dinner at the moment.', answer: 'is cooking', options: ['is cooking', 'are cooking', 'cooks', 'cooking'], type: 'positive' },
      { question: 'I ___ (build) a house from blocks.', answer: 'am building', options: ['am building', 'is building', 'are building', 'builds'], type: 'positive' },
      { question: 'The bee ___ (fly) near the flowers.', answer: 'is flying', options: ['is flying', 'are flying', 'flies', 'am flying'], type: 'positive' },
      { question: 'We ___ (breathe) fresh air outside.', answer: 'are breathing', options: ['is breathing', 'are breathing', 'breathes', 'am breathing'], type: 'positive' },
      { question: 'He ___ (fix) his bicycle now.', answer: 'is fixing', options: ['are fixing', 'is fixing', 'fixes', 'am fixing'], type: 'positive' },
      { question: 'The leaves ___ (change) color in autumn.', answer: 'are changing', options: ['is changing', 'are changing', 'changes', 'am changing'], type: 'positive' },
      { question: 'Mom ___ (cut) the cucumber for the salad.', answer: 'is cutting', options: ['is cutting', 'are cutting', 'cuts', 'am cutting'], type: 'positive' },
      // Negative
      { question: 'They ___ (not/play) football today.', answer: 'are not playing', options: ['is not playing', 'are not playing', 'not playing', 'don\'t playing'], type: 'negative' },
      { question: 'He ___ (not/cook) right now.', answer: 'is not cooking', options: ['is not cooking', 'are not cooking', 'not cooking', 'doesn\'t cooking'], type: 'negative' },
      { question: 'I ___ (not/stay) home today.', answer: 'am not staying', options: ['am not staying', 'is not staying', 'are not staying', 'don\'t staying'], type: 'negative' },
      { question: 'The storm ___ (not/come) this way.', answer: 'is not coming', options: ['are not coming', 'is not coming', 'not coming', 'doesn\'t coming'], type: 'negative' },
      { question: 'We ___ (not/throw away) the bottles.', answer: 'are not throwing away', options: ['is not throwing away', 'are not throwing away', 'not throwing away', 'don\'t throwing away'], type: 'negative' },
      { question: 'She ___ (not/pick up) the grass.', answer: 'is not picking up', options: ['is not picking up', 'are not picking up', 'not picking up', 'doesn\'t picking up'], type: 'negative' },
      // Yes/No Questions
      { question: '___ you building a new house?', answer: 'Are', options: ['Are', 'Is', 'Am', 'Do'], type: 'question' },
      { question: '___ she cooking dinner now?', answer: 'Is', options: ['Is', 'Are', 'Am', 'Does'], type: 'question' },
      { question: '___ the bees flying near the honey?', answer: 'Are', options: ['Are', 'Is', 'Am', 'Do'], type: 'question' },
      { question: '___ he remembering the rules?', answer: 'Is', options: ['Is', 'Are', 'Am', 'Does'], type: 'question' },
      { question: '___ they planting trees in spring?', answer: 'Are', options: ['Are', 'Is', 'Am', 'Do'], type: 'question' },
      { question: '___ it raining outside?', answer: 'Is', options: ['Is', 'Are', 'Am', 'Does'], type: 'question' }
    ],

    // --- READING: Unseen passage ---
    reading: {
      title: 'The Wise Bee',
      text: `It is a beautiful spring morning. The sun is shining and the birds are singing. A little bee is flying over the green grass. The bee is looking for flowers.\n\n"I need to find flowers," the bee says. "I want to make honey for my family."\n\nWhile the bee is flying, it sees a big storm coming. The sky is changing color. The wind is getting strong and scary.\n\n"I need to be careful," the bee thinks. "I must stay near the trees. I can breathe and wait at least a few minutes."\n\nThe bee finds a bottle near the grass and hides inside. After ten minutes, the storm goes away. The air is fresh and clean. The bee picks up and flies again.\n\n"I am wise," says the bee. "I did not throw away my chance. I was careful and now I can build my home and cook honey for everyone!"`,
      questions: [
        { question: 'What season is it in the story?', options: ['Autumn', 'Spring', 'Summer', 'Winter'], answer: 'Spring' },
        { question: 'What is the bee looking for?', options: ['Honey', 'Water', 'Flowers', 'Grass'], answer: 'Flowers' },
        { question: 'What does the bee see coming?', options: ['A bird', 'A storm', 'A boy', 'A bottle'], answer: 'A storm' },
        { question: 'Where does the bee hide?', options: ['Under a tree', 'In a flower', 'Inside a bottle', 'In the grass'], answer: 'Inside a bottle' },
        { question: 'How long does the storm last?', options: ['One minute', 'Five minutes', 'Ten minutes', 'One hour'], answer: 'Ten minutes' },
        { question: 'How is the air after the storm?', options: ['Hot and dry', 'Fresh and clean', 'Cold and scary', 'Strong and dark'], answer: 'Fresh and clean' },
        { question: 'What does the bee want to do at the end?', options: ['Sleep', 'Build home and cook honey', 'Fly away', 'Cut down trees'], answer: 'Build home and cook honey' },
        { question: 'The bee is ___', options: ['scary', 'strong', 'wise', 'sad'], answer: 'wise' }
      ]
    },

    // --- WRITING: a/an exercises ---
    writing: [
      { sentence: 'I see ___ bee in the garden.', answer: 'a', options: ['a', 'an'] },
      { sentence: 'She is eating ___ apple.', answer: 'an', options: ['a', 'an'] },
      { sentence: 'He has ___ bottle of water.', answer: 'a', options: ['a', 'an'] },
      { sentence: 'There is ___ old tree in the park.', answer: 'an', options: ['a', 'an'] },
      { sentence: 'We saw ___ scary storm yesterday.', answer: 'a', options: ['a', 'an'] },
      { sentence: 'She is ___ important person.', answer: 'an', options: ['a', 'an'] },
      { sentence: 'He found ___ cucumber in the garden.', answer: 'a', options: ['a', 'an'] },
      { sentence: 'It was ___ interesting rule.', answer: 'an', options: ['a', 'an'] },
      { sentence: 'I want ___ strong environment.', answer: 'a', options: ['a', 'an'] },
      { sentence: 'That is ___ easy question.', answer: 'an', options: ['a', 'an'] },
      { sentence: 'We need ___ wise teacher.', answer: 'a', options: ['a', 'an'] },
      { sentence: 'He is building ___ enormous house.', answer: 'an', options: ['a', 'an'] },
      { sentence: 'She picked up ___ orange leaf.', answer: 'an', options: ['a', 'an'] },
      { sentence: 'There is ___ plant in the classroom.', answer: 'a', options: ['a', 'an'] },
      { sentence: 'I ate ___ honey sandwich.', answer: 'a', options: ['a', 'an'] }
    ]
  }
};

// ===== GRADE 2 DATA (כיתה ב׳) =====
const APP_DATA_GRADE2 = {
  tips: [
    "ידעת? קריאה כל יום עוזרת לך להיות חכם יותר!",
    "טיפ: נסה לצייר את המילים החדשות שלמדת!",
    "מדהים! כשאתה משחק משחקים אתה גם לומד!",
    "טיפ: תמיד עדיף לשאול שאלות כשלא מבינים!",
    "ידעת? הפסקות קצרות עוזרות ללמוד טוב יותר!",
    "טיפ: לפני שתירדם, נסה לזכור מה למדת היום!",
    "מדהים! ציורים עוזרים לזכור דברים חדשים!"
  ],

  // ========== HEBREW (עברית) - כיתה ב׳ ==========
  hebrew: {
    name: "עברית",
    icon: "📖",
    lessons: [
      {
        id: "heb-b-1",
        title: "האותיות שלנו",
        preview: "חזרה על אותיות הא-ב",
        content: `
          <h2>📖 האותיות שלנו</h2>
          <p>בעברית יש לנו <span class="highlight">22 אותיות</span>!</p>
          
          <h3>אותיות ראשונות:</h3>
          <div class="example">א ב ג ד ה ו ז ח ט י</div>
          
          <h3>אותיות אמצעיות:</h3>
          <div class="example">כ ל מ נ ס ע פ צ</div>
          
          <h3>אותיות אחרונות:</h3>
          <div class="example">ק ר ש ת</div>
          
          <h3>אותיות סופיות:</h3>
          <p>יש אותיות שנראות אחרת בסוף מילה:</p>
          <div class="example">
            כ → ך<br>
            מ → ם<br>
            נ → ן<br>
            פ → ף<br>
            צ → ץ
          </div>
        `
      },
      {
        id: "heb-b-2",
        title: "קריאה במילים",
        preview: "איך קוראים מילים",
        content: `
          <h2>📖 קריאה במילים</h2>
          <p>בואו נלמד לקרוא מילים פשוטות!</p>
          
          <h3>מילים קצרות:</h3>
          <div class="example">בא, גם, דג, הר, זה, יד, כן, לא</div>
          
          <h3>מילים עם 3 אותיות:</h3>
          <div class="example">ספר, ילד, בית, שמש, כלב, חתול</div>
          
          <h3>בואו נתרגל:</h3>
          <p>נסו לקרוא את המשפט:</p>
          <div class="example">הילד קורא ספר טוב.</div>
          <div class="example">הכלב רץ בגן.</div>
          <div class="example">אני אוהב ללמוד!</div>
        `
      },
      {
        id: "heb-b-3",
        title: "יחיד ורבים",
        preview: "אחד או הרבה",
        content: `
          <h2>📖 יחיד ורבים</h2>
          <p><span class="highlight">יחיד</span> = אחד</p>
          <p><span class="highlight">רבים</span> = הרבה</p>
          
          <h3>דוגמאות:</h3>
          <div class="example">
            ילד אחד → ילדים הרבה<br>
            ילדה אחת → ילדות הרבה<br>
            ספר אחד → ספרים הרבה<br>
            תפוח אחד → תפוחים הרבה
          </div>
          
          <h3>כלל חשוב:</h3>
          <p>בנים (זכר) - מוסיפים <span class="highlight">ים</span></p>
          <p>בנות (נקבה) - מוסיפים <span class="highlight">ות</span></p>
        `
      }
    ],
    quiz: [
      { question: "כמה אותיות יש בעברית?", options: ["20", "22", "26", "24"], correct: 1 },
      { question: "מה הרבים של 'ספר'?", options: ["ספרות", "ספרים", "ספריה", "ספרן"], correct: 1 },
      { question: "איזו אות באה אחרי ב?", options: ["א", "ד", "ג", "ה"], correct: 2 },
      { question: "מה ההפך של 'יחיד'?", options: ["בודד", "רבים", "קטן", "גדול"], correct: 1 },
      { question: "איך נראית נ בסוף מילה?", options: ["ם", "ך", "ן", "ף"], correct: 2 },
      { question: "מה הרבים של 'ילדה'?", options: ["ילדים", "ילדות", "ילדה", "ילד"], correct: 1 },
      { question: "איזו אות באה אחרי ה?", options: ["ד", "ז", "ו", "ח"], correct: 2 },
      { question: "מה הרבים של 'כלב'?", options: ["כלבות", "כלבים", "כלבן", "כלב"], correct: 1 },
      { question: "איך נראית מ בסוף מילה?", options: ["ם", "ך", "ן", "ף"], correct: 0 },
      { question: "מה האות הראשונה בא-ב?", options: ["ב", "ג", "א", "ד"], correct: 2 },
      { question: "מה הרבים של 'עץ'?", options: ["עצים", "עצות", "עצן", "עץ"], correct: 0 },
      { question: "איזו אות באה לפני ת?", options: ["ר", "ש", "ק", "ס"], correct: 1 },
      { question: "מה הרבים של 'פרח'?", options: ["פרחות", "פרחים", "פרחן", "פרח"], correct: 1 },
      { question: "איך נראית פ בסוף מילה?", options: ["ם", "ך", "ן", "ף"], correct: 3 },
      { question: "מה הרבים של 'בית'?", options: ["ביתות", "בתים", "ביתים", "בית"], correct: 1 },
      { question: "איזו אות באה אחרי י?", options: ["ח", "ט", "כ", "ל"], correct: 2 },
      { question: "מה הרבים של 'חתולה'?", options: ["חתולים", "חתולות", "חתול", "חתולן"], correct: 1 },
      { question: "מה האות האחרונה בא-ב?", options: ["ש", "ר", "ת", "ק"], correct: 2 },
      { question: "איך נראית כ בסוף מילה?", options: ["ם", "ך", "ן", "ף"], correct: 1 },
      { question: "מה הרבים של 'שמש'?", options: ["שמשות", "שמשים", "שמש", "שמשן"], correct: 0 }
    ],
    flashcards: [
      { front: "א-ב-ג-ד-ה", back: "חמש האותיות הראשונות!" },
      { front: "ספר → ?", back: "ספרים" },
      { front: "כ בסוף מילה", back: "ך (כף סופית)" },
      { front: "מ בסוף מילה", back: "ם (מם סופית)" },
      { front: "ילד → ?", back: "ילדים" },
      { front: "ילדה → ?", back: "ילדות" },
      { front: "נ בסוף מילה", back: "ן (נון סופית)" },
      { front: "פ בסוף מילה", back: "ף (פא סופית)" },
      { front: "צ בסוף מילה", back: "ץ (צדי סופית)" },
      { front: "כלב → ?", back: "כלבים" },
      { front: "חתולה → ?", back: "חתולות" },
      { front: "בית → ?", back: "בתים" },
      { front: "כמה אותיות בעברית?", back: "22 אותיות" },
      { front: "פרח → ?", back: "פרחים" },
      { front: "עץ → ?", back: "עצים" },
      { front: "שמש → ?", back: "שמשות" },
      { front: "כוכב → ?", back: "כוכבים" },
      { front: "ציפור → ?", back: "ציפורים" },
      { front: "האות האחרונה?", back: "ת (תו)" },
      { front: "ו-ז-ח-ט-י", back: "האותיות אחרי ה!" }
    ]
  },

  // ========== ENGLISH - כיתה ב׳ ==========
  english: {
    name: "אנגלית",
    icon: "🔤",
    lessons: [
      {
        id: "eng-b-1",
        title: "The Alphabet",
        preview: "A B C D E F G...",
        content: `
          <h2>🔤 The Alphabet</h2>
          <p>The English alphabet has <span class="highlight">26 letters</span>!</p>
          
          <h3>First Letters:</h3>
          <div class="example">A B C D E F G H I J</div>
          
          <h3>Middle Letters:</h3>
          <div class="example">K L M N O P Q R</div>
          
          <h3>Last Letters:</h3>
          <div class="example">S T U V W X Y Z</div>
          
          <h3>Let's Sing! 🎵</h3>
          <div class="example">A B C D E F G,<br>H I J K L M N O P,<br>Q R S T U V,<br>W X Y and Z!</div>
        `
      },
      {
        id: "eng-b-2",
        title: "Colors",
        preview: "Red, Blue, Green...",
        content: `
          <h2>🎨 Colors</h2>
          <p>Let's learn colors in English!</p>
          
          <h3>Basic Colors:</h3>
          <div class="example">
            🔴 Red = אדום<br>
            🔵 Blue = כחול<br>
            🟢 Green = ירוק<br>
            🟡 Yellow = צהוב<br>
            🟠 Orange = כתום<br>
            🟣 Purple = סגול
          </div>
          
          <h3>More Colors:</h3>
          <div class="example">
            ⚫ Black = שחור<br>
            ⚪ White = לבן<br>
            🩷 Pink = ורוד<br>
            🤎 Brown = חום
          </div>
        `
      },
      {
        id: "eng-b-3",
        title: "Numbers 1-20",
        preview: "One, Two, Three...",
        content: `
          <h2>🔢 Numbers 1-20</h2>
          
          <h3>1-10:</h3>
          <div class="example">
            1 = One<br>
            2 = Two<br>
            3 = Three<br>
            4 = Four<br>
            5 = Five<br>
            6 = Six<br>
            7 = Seven<br>
            8 = Eight<br>
            9 = Nine<br>
            10 = Ten
          </div>
          
          <h3>11-20:</h3>
          <div class="example">
            11 = Eleven<br>
            12 = Twelve<br>
            13 = Thirteen<br>
            14 = Fourteen<br>
            15 = Fifteen<br>
            16 = Sixteen<br>
            17 = Seventeen<br>
            18 = Eighteen<br>
            19 = Nineteen<br>
            20 = Twenty
          </div>
        `
      }
    ],
    quiz: [
      { question: "What color is the sky?", options: ["Red", "Blue", "Green", "Yellow"], correct: 1 },
      { question: "How many letters in the alphabet?", options: ["22", "24", "26", "28"], correct: 2 },
      { question: "What comes after 'five'?", options: ["Four", "Seven", "Six", "Eight"], correct: 2 },
      { question: "What color is grass?", options: ["Blue", "Red", "Green", "Orange"], correct: 2 },
      { question: "What is 'שלוש' in English?", options: ["Two", "Three", "Four", "Five"], correct: 1 },
      { question: "What color is a banana?", options: ["Red", "Orange", "Yellow", "Green"], correct: 2 },
      { question: "What is 'כלב' in English?", options: ["Cat", "Dog", "Bird", "Fish"], correct: 1 },
      { question: "What number comes after 10?", options: ["Nine", "Ten", "Eleven", "Twelve"], correct: 2 },
      { question: "What is 'חתול' in English?", options: ["Dog", "Cat", "Mouse", "Bird"], correct: 1 },
      { question: "What color is an apple?", options: ["Blue", "Green", "Red", "Purple"], correct: 2 },
      { question: "What is 'אחת' in English?", options: ["Two", "Three", "One", "Four"], correct: 2 },
      { question: "What comes before 'three'?", options: ["One", "Two", "Four", "Five"], correct: 1 },
      { question: "What is 'שמש' in English?", options: ["Moon", "Star", "Sun", "Sky"], correct: 2 },
      { question: "What color is the sun?", options: ["Blue", "Yellow", "Green", "Purple"], correct: 1 },
      { question: "What is 'ספר' in English?", options: ["Pen", "Book", "Bag", "Chair"], correct: 1 },
      { question: "What number is 'ten'?", options: ["8", "9", "10", "11"], correct: 2 },
      { question: "What is 'בית' in English?", options: ["School", "House", "Park", "Store"], correct: 1 },
      { question: "What color is milk?", options: ["Blue", "Yellow", "White", "Green"], correct: 2 },
      { question: "What comes after 'seven'?", options: ["Six", "Nine", "Eight", "Ten"], correct: 2 },
      { question: "What is 'מים' in English?", options: ["Fire", "Air", "Water", "Earth"], correct: 2 }
    ],
    flashcards: [
      { front: "Red", back: "אדום 🔴" },
      { front: "Blue", back: "כחול 🔵" },
      { front: "Green", back: "ירוק 🟢" },
      { front: "Yellow", back: "צהוב 🟡" },
      { front: "One, Two, Three", back: "1, 2, 3" },
      { front: "Four, Five, Six", back: "4, 5, 6" },
      { front: "Seven, Eight, Nine", back: "7, 8, 9" },
      { front: "Ten", back: "10 עשר" },
      { front: "Dog", back: "כלב 🐕" },
      { front: "Cat", back: "חתול 🐈" },
      { front: "Sun", back: "שמש ☀️" },
      { front: "Book", back: "ספר 📚" },
      { front: "House", back: "בית 🏠" },
      { front: "Water", back: "מים 💧" },
      { front: "Orange (color)", back: "כתום 🟠" },
      { front: "Purple", back: "סגול 🟣" },
      { front: "Pink", back: "ורוד 🩷" },
      { front: "Black", back: "שחור ⚫" },
      { front: "White", back: "לבן ⚪" },
      { front: "Bird", back: "ציפור 🐦" },
      { front: "Fish", back: "דג 🐟" },
      { front: "Tree", back: "עץ 🌳" },
      { front: "Flower", back: "פרח 🌸" },
      { front: "Moon", back: "ירח 🌙" },
      { front: "Star", back: "כוכב ⭐" },
      { front: "Apple", back: "תפוח 🍎" },
      { front: "Banana", back: "בננה 🍌" },
      { front: "Happy", back: "שמח 😊" },
      { front: "Sad", back: "עצוב 😢" },
      { front: "Hello!", back: "שלום! 👋" }
    ]
  },

  // ========== MATH (מתמטיקה) - כיתה ב׳ ==========
  math: {
    name: "מתמטיקה",
    icon: "🔢",
    lessons: [
      {
        id: "math-b-1",
        title: "חיבור עד 20",
        preview: "5 + 3 = ?",
        content: `
          <h2>➕ חיבור עד 20</h2>
          <p><span class="highlight">חיבור</span> = לחבר דברים יחד!</p>
          
          <h3>דוגמאות:</h3>
          <div class="example">
            3 + 2 = 5<br>
            4 + 4 = 8<br>
            5 + 5 = 10<br>
            7 + 3 = 10
          </div>
          
          <h3>טריק מגניב:</h3>
          <p>כשמחברים לעשר, קל לחשב!</p>
          <div class="example">
            8 + 2 = 10<br>
            7 + 3 = 10<br>
            6 + 4 = 10<br>
            5 + 5 = 10
          </div>
          
          <h3>חיבור גדול יותר:</h3>
          <div class="example">
            10 + 5 = 15<br>
            10 + 8 = 18<br>
            11 + 5 = 16
          </div>
        `
      },
      {
        id: "math-b-2",
        title: "חיסור עד 20",
        preview: "10 - 4 = ?",
        content: `
          <h2>➖ חיסור עד 20</h2>
          <p><span class="highlight">חיסור</span> = להוריד, לקחת משהו.</p>
          
          <h3>דוגמאות:</h3>
          <div class="example">
            5 - 2 = 3<br>
            8 - 3 = 5<br>
            10 - 4 = 6<br>
            7 - 7 = 0
          </div>
          
          <h3>חיסור מ-10:</h3>
          <div class="example">
            10 - 1 = 9<br>
            10 - 5 = 5<br>
            10 - 8 = 2<br>
            10 - 10 = 0
          </div>
          
          <h3>חיסור גדול יותר:</h3>
          <div class="example">
            15 - 5 = 10<br>
            18 - 8 = 10<br>
            20 - 10 = 10
          </div>
        `
      },
      {
        id: "math-b-3",
        title: "צורות",
        preview: "עיגול, ריבוע, משולש",
        content: `
          <h2>🔷 צורות</h2>
          
          <h3>צורות בסיסיות:</h3>
          <div class="example">
            ⭕ <strong>עיגול</strong> - עגול, בלי פינות<br><br>
            🟥 <strong>ריבוע</strong> - 4 צלעות שוות, 4 פינות<br><br>
            🔺 <strong>משולש</strong> - 3 צלעות, 3 פינות<br><br>
            🟦 <strong>מלבן</strong> - 4 צלעות (2 ארוכות, 2 קצרות)
          </div>
          
          <h3>כמה פינות?</h3>
          <div class="example">
            עיגול = 0 פינות<br>
            משולש = 3 פינות<br>
            ריבוע = 4 פינות<br>
            מלבן = 4 פינות
          </div>
        `
      }
    ],
    quiz: [
      { question: "5 + 3 = ?", options: ["6", "7", "8", "9"], correct: 2 },
      { question: "10 - 4 = ?", options: ["5", "6", "7", "8"], correct: 1 },
      { question: "כמה פינות יש למשולש?", options: ["2", "3", "4", "5"], correct: 1 },
      { question: "7 + 7 = ?", options: ["12", "13", "14", "15"], correct: 2 },
      { question: "15 - 5 = ?", options: ["5", "10", "15", "20"], correct: 1 },
      { question: "כמה צלעות יש לריבוע?", options: ["3", "4", "5", "6"], correct: 1 },
      { question: "2 + 6 = ?", options: ["6", "7", "8", "9"], correct: 2 },
      { question: "9 - 5 = ?", options: ["3", "4", "5", "6"], correct: 1 },
      { question: "3 + 4 = ?", options: ["5", "6", "7", "8"], correct: 2 },
      { question: "12 - 2 = ?", options: ["8", "9", "10", "11"], correct: 2 },
      { question: "איזו צורה עגולה?", options: ["ריבוע", "משולש", "עיגול", "מלבן"], correct: 2 },
      { question: "6 + 6 = ?", options: ["10", "11", "12", "13"], correct: 2 },
      { question: "8 - 3 = ?", options: ["3", "4", "5", "6"], correct: 2 },
      { question: "כמה פינות יש לעיגול?", options: ["0", "1", "2", "3"], correct: 0 },
      { question: "4 + 5 = ?", options: ["7", "8", "9", "10"], correct: 2 },
      { question: "11 - 6 = ?", options: ["4", "5", "6", "7"], correct: 1 },
      { question: "כמה צלעות יש למשולש?", options: ["2", "3", "4", "5"], correct: 1 },
      { question: "9 + 2 = ?", options: ["10", "11", "12", "13"], correct: 1 },
      { question: "14 - 7 = ?", options: ["6", "7", "8", "9"], correct: 1 },
      { question: "כמה פינות יש למלבן?", options: ["2", "3", "4", "5"], correct: 2 }
    ],
    flashcards: [
      { front: "5 + 5 = ?", back: "10" },
      { front: "10 - 3 = ?", back: "7" },
      { front: "כמה פינות לעיגול?", back: "0 (אפס)" },
      { front: "כמה פינות לריבוע?", back: "4" },
      { front: "8 + 4 = ?", back: "12" },
      { front: "16 - 6 = ?", back: "10" },
      { front: "6 + 7 = ?", back: "13" },
      { front: "18 - 9 = ?", back: "9" },
      { front: "כמה צלעות למשולש?", back: "3" },
      { front: "20 - 10 = ?", back: "10" },
      { front: "9 + 9 = ?", back: "18" },
      { front: "איזו צורה עגולה?", back: "עיגול" },
      { front: "3 + 8 = ?", back: "11" },
      { front: "15 - 8 = ?", back: "7" }
    ]
  },

  // ========== AVATARS (same as grade 5) ==========
  avatars: ['😎','🦊','🐱','🐶','🦁','🐼','🦄','🌟','🚀','⚡','👑','💎'],

  // ========== THEMES (same as grade 5) ==========
  themes: [
    { id: 'default', name: 'ברירת מחדל', color: '#667eea', class: '' },
    { id: 'ocean', name: 'אוקיינוס', color: '#0ea5e9', class: 'theme-ocean' },
    { id: 'forest', name: 'יער', color: '#22c55e', class: 'theme-forest' },
    { id: 'sunset', name: 'שקיעה', color: '#f97316', class: 'theme-sunset' },
    { id: 'pink', name: 'ורוד', color: '#ec4899', class: 'theme-pink' },
    { id: 'dark', name: 'כהה', color: '#2d3748', class: 'theme-dark' }
  ],

  // ========== ACHIEVEMENTS (same as grade 5) ==========
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

  // ========== HANGMAN WORDS - כיתה ב׳ ==========
  hangman: {
    hebrew: [
      { word: 'ספר', hint: 'קוראים בו סיפורים' },
      { word: 'כלב', hint: 'חיית מחמד שנובחת' },
      { word: 'בית', hint: 'גרים בו' },
      { word: 'שמש', hint: 'מאירה ביום' },
      { word: 'ילד', hint: 'בן קטן' },
      { word: 'פרח', hint: 'צומח בגינה, יפה וצבעוני' },
      { word: 'עץ', hint: 'גבוה וירוק, יש לו ענפים' },
      { word: 'מים', hint: 'שותים אותם' },
      { word: 'תפוח', hint: 'פרי אדום או ירוק' },
      { word: 'ילדה', hint: 'בת קטנה' },
      { word: 'גינה', hint: 'מקום עם צמחים ופרחים' },
      { word: 'ירח', hint: 'נראה בלילה בשמיים' },
      { word: 'כוכב', hint: 'מנצנץ בלילה' },
      { word: 'אמא', hint: 'ההורה שהיא אישה' }
    ],
    english: [
      { word: 'CAT', hint: 'A pet that says meow' },
      { word: 'DOG', hint: 'A pet that barks' },
      { word: 'SUN', hint: 'Yellow and in the sky' },
      { word: 'RED', hint: 'The color of an apple' },
      { word: 'BOOK', hint: 'You read it' },
      { word: 'TREE', hint: 'Tall and green, has leaves' },
      { word: 'BALL', hint: 'Round, you play with it' },
      { word: 'FISH', hint: 'Lives in water' },
      { word: 'BIRD', hint: 'Has wings and can fly' },
      { word: 'BLUE', hint: 'Color of the sky' },
      { word: 'MILK', hint: 'White drink from cows' },
      { word: 'MOON', hint: 'Seen at night in the sky' },
      { word: 'STAR', hint: 'Shines at night' },
      { word: 'HAND', hint: 'You have two, with fingers' }
    ],
    math: [
      { word: 'עשר', hint: 'המספר 10' },
      { word: 'חמש', hint: 'המספר 5' },
      { word: 'עיגול', hint: 'צורה עגולה' },
      { word: 'ריבוע', hint: 'צורה עם 4 צלעות שוות' },
      { word: 'משולש', hint: 'צורה עם 3 פינות' },
      { word: 'חיבור', hint: 'לחבר מספרים יחד' },
      { word: 'חיסור', hint: 'להוריד מספרים' },
      { word: 'שלוש', hint: 'המספר 3' },
      { word: 'אחד', hint: 'המספר 1' },
      { word: 'שתיים', hint: 'המספר 2' },
      { word: 'ארבע', hint: 'המספר 4' },
      { word: 'שש', hint: 'המספר 6' },
      { word: 'שבע', hint: 'המספר 7' },
      { word: 'מלבן', hint: 'כמו ריבוע אבל ארוך יותר' }
    ]
  },

  // ========== MEMORY PAIRS - כיתה ב׳ ==========
  memory: {
    hebrew: [
      ['ילד', 'ילדים'], ['ילדה', 'ילדות'], ['ספר', 'ספרים'],
      ['כלב', 'כלבים'], ['חתול', 'חתולים'], ['בית', 'בתים'],
      ['פרח', 'פרחים'], ['עץ', 'עצים'], ['כוכב', 'כוכבים'],
      ['מילה', 'מילים'], ['שיר', 'שירים'], ['ציור', 'ציורים']
    ],
    english: [
      ['cat', 'חתול'], ['dog', 'כלב'], ['sun', 'שמש'],
      ['red', 'אדום'], ['blue', 'כחול'], ['one', 'אחד'],
      ['fish', 'דג'], ['bird', 'ציפור'], ['tree', 'עץ'],
      ['green', 'ירוק'], ['two', 'שתיים'], ['book', 'ספר']
    ],
    math: [
      ['5+5', '10'], ['3+3', '6'], ['10-5', '5'],
      ['2+2', '4'], ['4+4', '8'], ['10-3', '7'],
      ['1+1', '2'], ['6+4', '10'], ['9-4', '5'],
      ['7+2', '9'], ['8-3', '5'], ['2+3', '5']
    ]
  },

  // ========== DICTATION - כיתה ב׳ (פשוט יותר) ==========
  dictation: [
    {
      week: 'שבוע 1 — חיות',
      words: [
        { word: 'cat', hebrewHint: 'חתול' },
        { word: 'dog', hebrewHint: 'כלב' },
        { word: 'fish', hebrewHint: 'דג' },
        { word: 'bird', hebrewHint: 'ציפור' },
        { word: 'cow', hebrewHint: 'פרה' },
        { word: 'pig', hebrewHint: 'חזיר' }
      ]
    },
    {
      week: 'שבוע 2 — צבעים',
      words: [
        { word: 'red', hebrewHint: 'אדום' },
        { word: 'blue', hebrewHint: 'כחול' },
        { word: 'green', hebrewHint: 'ירוק' },
        { word: 'yellow', hebrewHint: 'צהוב' },
        { word: 'black', hebrewHint: 'שחור' },
        { word: 'white', hebrewHint: 'לבן' }
      ]
    },
    {
      week: 'שבוע 3 — מספרים',
      words: [
        { word: 'one', hebrewHint: 'אחד' },
        { word: 'two', hebrewHint: 'שתיים' },
        { word: 'three', hebrewHint: 'שלוש' },
        { word: 'four', hebrewHint: 'ארבע' },
        { word: 'five', hebrewHint: 'חמש' },
        { word: 'ten', hebrewHint: 'עשר' }
      ]
    },
    {
      week: 'שבוע 4 — משפחה',
      words: [
        { word: 'mom', hebrewHint: 'אמא' },
        { word: 'dad', hebrewHint: 'אבא' },
        { word: 'boy', hebrewHint: 'ילד' },
        { word: 'girl', hebrewHint: 'ילדה' },
        { word: 'baby', hebrewHint: 'תינוק' },
        { word: 'family', hebrewHint: 'משפחה' }
      ]
    }
  ],

  // ========== TEST PREP DICTATION (הכנה למבחן) - כיתה ב׳ ==========
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

  // ========== WORD MATCHING - כיתה ב׳ ==========
  wordMatch: [
    { hebrew: 'חתול', english: 'cat' },
    { hebrew: 'כלב', english: 'dog' },
    { hebrew: 'אדום', english: 'red' },
    { hebrew: 'כחול', english: 'blue' },
    { hebrew: 'ירוק', english: 'green' },
    { hebrew: 'אמא', english: 'mom' },
    { hebrew: 'אבא', english: 'dad' },
    { hebrew: 'ילד', english: 'boy' },
    { hebrew: 'ילדה', english: 'girl' },
    { hebrew: 'ספר', english: 'book' }
  ]
};
