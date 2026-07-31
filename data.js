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
      { question: "נקבה של 'מורה':", options: ["מורה", "מורית", "מורָה", "מורות"], correct: 0 },
      // More Hebrew quiz questions
      { question: "מהו הרבים של 'כוכב'?", options: ["כוכבות", "כוכבים", "כוכבן", "כוכביות"], correct: 1 },
      { question: "איזו מילה היא מילת קישור?", options: ["ילד", "רץ", "כי", "יפה"], correct: 2 },
      { question: "מהו השורש של 'מדברת'?", options: ["ד.ב.ר", "מ.ד.ב", "ב.ר.ד", "ד.ר.ב"], correct: 0 },
      { question: "מהו הרבים של 'עט'?", options: ["עטים", "עטות", "עטן", "עיטים"], correct: 0 },
      { question: "'היא שרה שיר יפה' — מהו הפועל?", options: ["היא", "שרה", "שיר", "יפה"], correct: 1 },
      { question: "מהו ההפך של 'גדול'?", options: ["רחב", "קטן", "ארוך", "נמוך"], correct: 1 },
      { question: "'הכלב הנאמן' — 'נאמן' הוא:", options: ["שם עצם", "פועל", "שם תואר", "מילת יחס"], correct: 2 },
      { question: "מהו השורש של 'מבשלת'?", options: ["ב.ש.ל", "מ.ב.ש", "ש.ל.ב", "ב.ל.ש"], correct: 0 },
      { question: "הזמן העתיד של 'אני שר':", options: ["שרתי", "אשיר", "שרים", "שרו"], correct: 1 },
      { question: "מהו הרבים של 'דלת'?", options: ["דלתים", "דלתות", "דלתן", "דלתיות"], correct: 1 },
      { question: "'בגלל' היא מילת:", options: ["חיבור", "סיבה", "ניגוד", "זמן"], correct: 1 },
      { question: "מהו השורש של 'מצייר'?", options: ["צ.י.ר", "מ.צ.י", "י.צ.ר", "צ.ר.י"], correct: 0 },
      { question: "הרבים של 'חלון':", options: ["חלונים", "חלונות", "חלנות", "חלוניות"], correct: 1 },
      { question: "איזו מילה היא שם עצם כללי?", options: ["תל אביב", "ספר", "דני", "כנרת"], correct: 1 },
      { question: "'אם' היא מילת:", options: ["חיבור", "סיבה", "תנאי", "ניגוד"], correct: 2 },
      { question: "מהו ההפך של 'חזק'?", options: ["גבוה", "חלש", "קשה", "איטי"], correct: 1 },
      { question: "הנקבה של 'חכם':", options: ["חכמית", "חכמה", "חוכמה", "חכמנית"], correct: 1 },
      { question: "'אבל' היא מילת:", options: ["חיבור", "סיבה", "ניגוד", "תנאי"], correct: 2 },
      { question: "מהו השורש של 'חושב'?", options: ["ח.ש.ב", "ח.ו.ש", "ש.ב.ח", "ב.ח.ש"], correct: 0 },
      { question: "הזמן ההווה של 'רצנו':", options: ["רצתי", "רצים", "ירוצו", "רוצים"], correct: 1 },
      { question: "הרבים של 'תמונה':", options: ["תמונים", "תמונות", "תמונן", "תמוניות"], correct: 1 },
      { question: "'לכן' היא מילת:", options: ["זמן", "מסקנה", "ניגוד", "תנאי"], correct: 1 },
      { question: "מהו הגוף הנכון: 'את ___'?", options: ["שרתי", "שרת", "שר", "שרנו"], correct: 1 },
      { question: "מהו שם עצם קיבוצי?", options: ["ילד", "עדר", "שולחן", "ירושלים"], correct: 1 }
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
      { front: "הרבים של 'שולחן'?", back: "שולחנות" },
      // More Hebrew flashcards
      { front: "מהי מילת יחס?", back: "מילה שמראה מקום או כיוון\nדוגמה: על, מתחת, ליד, בין" },
      { front: "מהי מילת קישור?", back: "מילה שמחברת משפטים או פסוקיות\nדוגמה: ו, אבל, כי, לכן, אם" },
      { front: "שורש של 'מדבר'?", back: "ד.ב.ר" },
      { front: "שורש של 'בוחר'?", back: "ב.ח.ר" },
      { front: "שורש של 'חושב'?", back: "ח.ש.ב" },
      { front: "הרבים של 'דלת'?", back: "דלתות" },
      { front: "הרבים של 'חלון'?", back: "חלונות" },
      { front: "הרבים של 'כוכב'?", back: "כוכבים" },
      { front: "מה ההפך של 'גבוה'?", back: "נמוך" },
      { front: "מה ההפך של 'חכם'?", back: "טיפש" },
      { front: "מה ההפך של 'מהר'?", back: "לאט" },
      { front: "מה זה 'אבל'?", back: "מילת ניגוד\nמחברת בין שני דברים מנוגדים" },
      { front: "מה זה 'כי'?", back: "מילת סיבה\nמסבירה למה משהו קרה" },
      { front: "מה זה 'לכן'?", back: "מילת מסקנה\nמראה תוצאה" },
      { front: "מה זה 'אם'?", back: "מילת תנאי\nמתארת מצב שתלוי במשהו" },
      { front: "מהו משפט פשוט?", back: "משפט עם נושא ונשוא אחד\nדוגמה: הילד רץ" },
      { front: "מהו משפט מורכב?", back: "משפט עם שני פסוקיות מחוברות\nדוגמה: הילד רץ כי הוא איחר" },
      { front: "זמן עבר של 'אני שר'?", back: "שרתי" },
      { front: "זמן עתיד של 'אני רץ'?", back: "ארוץ" }
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
      { question: "What is 'משפחה' in English?", options: ["friend", "family", "school", "home"], correct: 1 },
      // New quiz questions for 5th grade
      { question: "The past of 'begin' is:", options: ["beginned", "began", "begun", "begins"], correct: 1 },
      { question: "The past of 'catch' is:", options: ["catched", "caught", "catches", "catching"], correct: 1 },
      { question: "She ___ (study) for the test now.", options: ["study", "studies", "is studying", "studied"], correct: 2 },
      { question: "They ___ (not/watch) TV at the moment.", options: ["don't watch", "aren't watching", "not watching", "doesn't watch"], correct: 1 },
      { question: "___ he sleeping right now?", options: ["Does", "Is", "Do", "Are"], correct: 1 },
      { question: "What is 'סביבה' in English?", options: ["weather", "environment", "nature", "garden"], correct: 1 },
      { question: "The opposite of 'dangerous' is:", options: ["scary", "safe", "careful", "strong"], correct: 1 },
      { question: "I ___ my keys yesterday.", options: ["lose", "lost", "losed", "losing"], correct: 1 },
      { question: "We ___ (fly) to London next week.", options: ["fly", "flies", "are flying", "flied"], correct: 2 },
      { question: "The past of 'forget' is:", options: ["forgetted", "forgot", "forgeted", "forgetting"], correct: 1 },
      { question: "What is 'להמציא' in English?", options: ["invent", "discover", "create", "build"], correct: 0 },
      { question: "She ___ her homework every day.", options: ["do", "does", "doing", "did"], correct: 1 },
      { question: "The children ___ (play) outside right now.", options: ["play", "plays", "are playing", "is playing"], correct: 2 },
      { question: "What is 'מפחיד' in English?", options: ["scary", "scared", "scare", "scaring"], correct: 0 },
      { question: "The past of 'teach' is:", options: ["teached", "taught", "teaches", "teaching"], correct: 1 },
      { question: "I ___ (not/understand) this question.", options: ["don't understand", "doesn't understand", "not understand", "am not understand"], correct: 0 },
      { question: "What is 'לזכור' in English?", options: ["forget", "remind", "remember", "think"], correct: 2 },
      { question: "He ___ (sit) on the chair now.", options: ["sit", "sits", "is sitting", "sitting"], correct: 2 },
      { question: "The past of 'win' is:", options: ["winned", "won", "wins", "winning"], correct: 1 },
      // More English quiz questions
      { question: "The past of 'bring' is:", options: ["bringed", "brought", "brings", "bringing"], correct: 1 },
      { question: "The past of 'think' is:", options: ["thinked", "thinks", "thought", "thinking"], correct: 2 },
      { question: "The past of 'buy' is:", options: ["buyed", "bought", "buys", "buying"], correct: 1 },
      { question: "The past of 'run' is:", options: ["runned", "ran", "runs", "running"], correct: 1 },
      { question: "The past of 'swim' is:", options: ["swimmed", "swam", "swims", "swimming"], correct: 1 },
      { question: "The past of 'sing' is:", options: ["singed", "sang", "sings", "singing"], correct: 1 },
      { question: "The past of 'drink' is:", options: ["drinked", "drank", "drinks", "drinking"], correct: 1 },
      { question: "The past of 'know' is:", options: ["knowed", "knew", "knows", "knowing"], correct: 1 },
      { question: "What is 'יפה' in English?", options: ["ugly", "beautiful", "smart", "tall"], correct: 1 },
      { question: "What is 'חשוב' in English?", options: ["difficult", "different", "important", "interesting"], correct: 2 },
      { question: "She ___ (not/like) chocolate.", options: ["don't like", "doesn't like", "not likes", "isn't like"], correct: 1 },
      { question: "___ they playing football now?", options: ["Do", "Does", "Are", "Is"], correct: 2 },
      { question: "We ___ (visit) our grandma every Friday.", options: ["visits", "visit", "visiting", "visited"], correct: 1 },
      { question: "The opposite of 'hot' is:", options: ["warm", "cold", "cool", "wet"], correct: 1 },
      { question: "The opposite of 'big' is:", options: ["tall", "short", "small", "thin"], correct: 2 },
      { question: "The opposite of 'happy' is:", options: ["angry", "sad", "tired", "scared"], correct: 1 },
      { question: "What is 'לנסוע' in English?", options: ["travel", "walk", "run", "fly"], correct: 0 },
      { question: "What is 'לעזור' in English?", options: ["ask", "help", "give", "tell"], correct: 1 },
      { question: "He ___ breakfast at 7 every day.", options: ["eat", "eats", "eating", "ate"], correct: 1 },
      { question: "They ___ TV right now.", options: ["watch", "watches", "are watching", "watched"], correct: 2 },
      { question: "She ___ (go) to the market yesterday.", options: ["go", "goes", "went", "is going"], correct: 2 },
      { question: "What is 'מזג אוויר' in English?", options: ["water", "weather", "winter", "wind"], correct: 1 },
      { question: "What is 'אביב' in English?", options: ["winter", "summer", "spring", "autumn"], correct: 2 },
      { question: "What is 'סתיו' in English?", options: ["winter", "summer", "spring", "autumn"], correct: 3 },
      { question: "I ___ (not/go) to school yesterday.", options: ["don't go", "doesn't go", "didn't go", "wasn't go"], correct: 2 },
      { question: "___ she eat lunch yet?", options: ["Do", "Does", "Did", "Is"], correct: 2 },
      { question: "The plural of 'child' is:", options: ["childs", "childes", "children", "childrens"], correct: 2 },
      { question: "The plural of 'tooth' is:", options: ["tooths", "toothes", "teeth", "teeths"], correct: 2 },
      { question: "The plural of 'mouse' is:", options: ["mouses", "mices", "mice", "mousies"], correct: 2 },
      { question: "What is 'שכן' in English?", options: ["friend", "neighbor", "relative", "stranger"], correct: 1 },
      { question: "What is 'מפתח' in English?", options: ["lock", "door", "key", "window"], correct: 2 },
      { question: "He is ___ than his brother.", options: ["tall", "taller", "tallest", "more tall"], correct: 1 },
      { question: "She is the ___ student in class.", options: ["smart", "smarter", "smartest", "more smart"], correct: 2 },
      { question: "This book is ___ than that one.", options: ["interesting", "more interesting", "most interesting", "interestinger"], correct: 1 },
      { question: "The past of 'sleep' is:", options: ["sleeped", "slept", "sleeps", "sleeping"], correct: 1 },
      { question: "The past of 'feel' is:", options: ["feeled", "felt", "feels", "feeling"], correct: 1 },
      { question: "The past of 'build' is:", options: ["builded", "built", "builds", "building"], correct: 1 },
      { question: "The past of 'pay' is:", options: ["payed", "paid", "pays", "paying"], correct: 1 },
      { question: "The past of 'stand' is:", options: ["standed", "stood", "stands", "standing"], correct: 1 },
      { question: "What is 'לשאול' in English?", options: ["tell", "say", "ask", "answer"], correct: 2 },
      { question: "What is 'לענות' in English?", options: ["ask", "answer", "question", "talk"], correct: 1 },
      { question: "The opposite of 'easy' is:", options: ["hard", "simple", "light", "fast"], correct: 0 },
      { question: "The opposite of 'fast' is:", options: ["quick", "slow", "weak", "heavy"], correct: 1 },
      { question: "The opposite of 'old' is:", options: ["new", "young", "small", "tall"], correct: 1 },
      { question: "I ___ already ___ my homework.", options: ["have/done", "has/done", "am/doing", "was/done"], correct: 0 },
      { question: "There ___ a lot of students in the class.", options: ["is", "are", "was", "am"], correct: 1 },
      { question: "There ___ a book on the table.", options: ["are", "is", "am", "were"], correct: 1 }
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
      { front: "sometimes", back: "לפעמים" },
      // New flashcards for 5th grade
      { front: "begin → ?", back: "began (עבר)" },
      { front: "catch → ?", back: "caught (עבר)" },
      { front: "choose → ?", back: "chose (עבר)" },
      { front: "fall → ?", back: "fell (עבר)" },
      { front: "find → ?", back: "found (עבר)" },
      { front: "forget → ?", back: "forgot (עבר)" },
      { front: "grow → ?", back: "grew (עבר)" },
      { front: "keep → ?", back: "kept (עבר)" },
      { front: "leave → ?", back: "left (עבר)" },
      { front: "lose → ?", back: "lost (עבר)" },
      { front: "meet → ?", back: "met (עבר)" },
      { front: "send → ?", back: "sent (עבר)" },
      { front: "spend → ?", back: "spent (עבר)" },
      { front: "teach → ?", back: "taught (עבר)" },
      { front: "tell → ?", back: "told (עבר)" },
      { front: "win → ?", back: "won (עבר)" },
      { front: "environment", back: "סביבה" },
      { front: "dangerous", back: "מסוכן" },
      { front: "remember", back: "לזכור" },
      { front: "invent", back: "להמציא" },
      { front: "scary", back: "מפחיד" },
      { front: "wise", back: "חכם" },
      { front: "breathe", back: "לנשום" },
      { front: "change", back: "לשנות" },
      { front: "Present Progressive", back: "am/is/are + verb+ing\nלתיאור פעולה שקורית עכשיו" },
      { front: "I am + verb+ing", back: "אני עושה עכשיו\nI am eating = אני אוכל עכשיו" },
      // More English flashcards
      { front: "sleep → ?", back: "slept (עבר)" },
      { front: "feel → ?", back: "felt (עבר)" },
      { front: "build → ?", back: "built (עבר)" },
      { front: "pay → ?", back: "paid (עבר)" },
      { front: "stand → ?", back: "stood (עבר)" },
      { front: "fly → ?", back: "flew (עבר)" },
      { front: "hide → ?", back: "hid (עבר)" },
      { front: "hold → ?", back: "held (עבר)" },
      { front: "draw → ?", back: "drew (עבר)" },
      { front: "break → ?", back: "broke (עבר)" },
      { front: "weather", back: "מזג אוויר" },
      { front: "spring", back: "אביב" },
      { front: "autumn", back: "סתיו" },
      { front: "neighbor", back: "שכן" },
      { front: "key", back: "מפתח" },
      { front: "travel", back: "לנסוע" },
      { front: "help", back: "לעזור" },
      { front: "ask", back: "לשאול" },
      { front: "answer", back: "לענות" },
      { front: "children (plural of)", back: "child → children" },
      { front: "teeth (plural of)", back: "tooth → teeth" },
      { front: "mice (plural of)", back: "mouse → mice" },
      { front: "taller (comparative)", back: "tall → taller → tallest" },
      { front: "more interesting", back: "מעניין יותר\n(מילים ארוכות: more + adj)" },
      { front: "the smartest", back: "הכי חכם\n(superlative: the + adj+est)" },
      { front: "already", back: "כבר" },
      { front: "still", back: "עדיין" },
      { front: "enough", back: "מספיק" },
      { front: "quickly", back: "מהר (adverb)" },
      { front: "slowly", back: "לאט (adverb)" },
      { front: "carefully", back: "בזהירות (adverb)" },
      { front: "Simple Past", back: "זמן עבר פשוט\nI ate, She went, They played" },
      { front: "Present Simple", back: "הווה פשוט — הרגלים\nI eat, She goes, They play" },
      { front: "there is / there are", back: "יש\nthere is = יחיד\nthere are = רבים" },
      { front: "excited", back: "נרגש" },
      { front: "worried", back: "מודאג" },
      { front: "proud", back: "גאה" },
      { front: "surprised", back: "מופתע" },
      { front: "curious", back: "סקרן" }
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
      },
      {
        id: "math-4",
        title: "גאומטריה — צורות וזוויות",
        preview: "צורות, זוויות וסוגי משולשים",
        content: `
          <h2>📐 גאומטריה — צורות וזוויות</h2>
          
          <h3>סוגי זוויות:</h3>
          <p><span class="highlight">זווית</span> נוצרת כשנפגשות שתי קרניים בנקודה משותפת (קודקוד).</p>
          <div class="example">
            <strong>זווית חדה</strong> — קטנה מ-90°<br>
            <strong>זווית ישרה</strong> — בדיוק 90° (פינה של ריבוע)<br>
            <strong>זווית קהה</strong> — גדולה מ-90° וקטנה מ-180°<br>
            <strong>זווית שטוחה</strong> — בדיוק 180° (קו ישר)
          </div>
          
          <h3>סוגי משולשים לפי צלעות:</h3>
          <div class="example">
            <strong>משולש שווה צלעות</strong> — 3 צלעות שוות, 3 זוויות שוות (60°)<br>
            <strong>משולש שווה שוקיים</strong> — 2 צלעות שוות, 2 זוויות שוות<br>
            <strong>משולש שונה צלעות</strong> — כל הצלעות שונות
          </div>
          
          <h3>סוגי משולשים לפי זוויות:</h3>
          <div class="example">
            <strong>משולש חד זוויות</strong> — כל הזוויות חדות (קטנות מ-90°)<br>
            <strong>משולש ישר זווית</strong> — יש לו זווית ישרה אחת (90°)<br>
            <strong>משולש קהה זוויות</strong> — יש לו זווית קהה אחת (גדולה מ-90°)
          </div>
          
          <h3>מרובעים מיוחדים:</h3>
          <div class="example">
            <strong>ריבוע</strong> — 4 צלעות שוות, 4 זוויות ישרות<br>
            <strong>מלבן</strong> — 2 זוגות צלעות שוות, 4 זוויות ישרות<br>
            <strong>מעוין</strong> — 4 צלעות שוות (לא חייב זוויות ישרות)<br>
            <strong>מקבילית</strong> — 2 זוגות צלעות מקבילות<br>
            <strong>טרפז</strong> — זוג אחד של צלעות מקבילות
          </div>
          
          <h3>סכום זוויות:</h3>
          <div class="example">
            סכום הזוויות במשולש = 180°<br>
            סכום הזוויות במרובע = 360°<br><br>
            דוגמה: במשולש שתי זוויות הן 50° ו-60°<br>
            הזווית השלישית = 180° - 50° - 60° = 70°
          </div>
          
          <h3>קווים מקבילים ומאונכים:</h3>
          <div class="example">
            <strong>קווים מקבילים</strong> — לעולם לא נפגשים (║)<br>
            <strong>קווים מאונכים</strong> — נפגשים בזווית ישרה (⊥)
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
      { question: "שטח ריבוע עם צלע 12:", options: ["48", "24", "144", "120"], correct: 2 },
      // New math quiz questions for 5th grade
      { question: "⅖ + ⅗ = ?", options: ["⁵⁄₁₀", "1", "⁴⁄₅", "⅗"], correct: 1 },
      { question: "0.75 + 0.25 = ?", options: ["0.100", "1", "1.00", "0.90"], correct: 1 },
      { question: "מהו ⅓ מ-18?", options: ["3", "6", "9", "12"], correct: 1 },
      { question: "מהו ¼ מ-24?", options: ["4", "6", "8", "12"], correct: 1 },
      { question: "השווה: ⅔ ○ ¾", options: ["⅔ > ¾", "⅔ < ¾", "⅔ = ¾", "אי אפשר לדעת"], correct: 1 },
      { question: "צמצם את השבר ⁶⁄₁₂:", options: ["⅓", "½", "¼", "⅔"], correct: 1 },
      { question: "הרחב ²⁄₃ למכנה 12:", options: ["⁴⁄₁₂", "⁶⁄₁₂", "⁸⁄₁₂", "¹⁰⁄₁₂"], correct: 2 },
      { question: "0.6 + 0.15 = ?", options: ["0.21", "0.75", "0.65", "6.15"], correct: 1 },
      { question: "כמה עשיריות יש ב-0.7?", options: ["7", "70", "0.7", "0.07"], correct: 0 },
      { question: "כמה מאיות יש ב-0.35?", options: ["3", "5", "35", "350"], correct: 2 },
      { question: "מהו ⅕ כמספר עשרוני?", options: ["0.1", "0.2", "0.5", "0.15"], correct: 1 },
      { question: "סדר פעולות: 10 + 2 × 5 = ?", options: ["60", "20", "25", "17"], correct: 1 },
      { question: "סדר פעולות: (10 + 2) × 5 = ?", options: ["17", "20", "60", "25"], correct: 2 },
      { question: "⁷⁄₁₀ - ³⁄₁₀ = ?", options: ["⁴⁄₂₀", "⁴⁄₁₀", "¹⁰⁄₁₀", "⁴⁄₀"], correct: 1 },
      { question: "2 - 0.5 = ?", options: ["1.5", "1.05", "0.5", "2.5"], correct: 0 },
      { question: "שטח מעוין עם אלכסונים 6 ו-8:", options: ["14", "24", "48", "96"], correct: 1 },
      { question: "מהו 50% מ-80?", options: ["40", "30", "50", "25"], correct: 0 },
      { question: "מהו 25% מ-100?", options: ["50", "75", "25", "10"], correct: 2 },
      // More math quiz questions
      { question: "⅓ + ⅙ = ?", options: ["²⁄₉", "½", "²⁄₆", "⅙"], correct: 1 },
      { question: "¾ - ¼ = ?", options: ["²⁄₄", "½", "¼", "⅓"], correct: 1 },
      { question: "0.3 × 4 = ?", options: ["1.2", "0.12", "12", "0.7"], correct: 0 },
      { question: "6.5 ÷ 5 = ?", options: ["1.3", "1.5", "1.1", "1.03"], correct: 0 },
      { question: "מהו ⅕ מ-35?", options: ["5", "7", "10", "15"], correct: 1 },
      { question: "מהו ⅔ מ-21?", options: ["7", "14", "9", "12"], correct: 1 },
      { question: "מהו 10% מ-250?", options: ["10", "25", "50", "2.5"], correct: 1 },
      { question: "מהו 75% מ-40?", options: ["10", "20", "30", "35"], correct: 2 },
      { question: "⁵⁄₈ + ³⁄₈ = ?", options: ["⁸⁄₁₆", "1", "⁸⁄₈", "⅝"], correct: 1 },
      { question: "⁷⁄₉ - ⁴⁄₉ = ?", options: ["³⁄₉", "⅓", "³⁄₉ = ⅓", "כל התשובות נכונות"], correct: 3 },
      { question: "סדר פעולות: 18 ÷ 3 + 4 × 2 = ?", options: ["14", "20", "12", "16"], correct: 0 },
      { question: "סדר פעולות: 5 × (3 + 7) = ?", options: ["22", "50", "45", "30"], correct: 1 },
      { question: "היקף משולש עם צלעות 7, 8, 9:", options: ["24", "63", "56", "18"], correct: 0 },
      { question: "שטח ריבוע עם צלע 15:", options: ["30", "60", "225", "150"], correct: 2 },
      { question: "שטח משולש עם בסיס 12 וגובה 10:", options: ["120", "60", "22", "80"], correct: 1 },
      { question: "היקף מלבן 12×5:", options: ["17", "34", "60", "24"], correct: 1 },
      { question: "מהו ⅜ כמספר עשרוני?", options: ["0.3", "0.38", "0.375", "0.35"], correct: 2 },
      { question: "4.25 + 3.75 = ?", options: ["7.00", "8.00", "7.10", "8.10"], correct: 1 },
      { question: "10.5 - 4.75 = ?", options: ["6.25", "5.75", "6.75", "5.25"], correct: 1 },
      { question: "0.5 × 0.5 = ?", options: ["0.25", "0.10", "1.0", "2.5"], correct: 0 },
      { question: "מהו 20% מ-50?", options: ["5", "10", "15", "20"], correct: 1 },
      { question: "⅔ + ⅙ = ?", options: ["³⁄₆", "⁵⁄₆", "⁸⁄₆", "⅚"], correct: 1 },
      { question: "½ × ⅓ = ?", options: ["⅙", "⅔", "⅕", "²⁄₃"], correct: 0 },
      { question: "כמה עשיריות יש ב-3?", options: ["3", "30", "300", "0.3"], correct: 1 },
      { question: "8.4 ÷ 4 = ?", options: ["2.1", "2.4", "2.01", "2.04"], correct: 0 },
      { question: "שטח מלבן 15×8:", options: ["46", "120", "23", "60"], correct: 1 }
    ],

    // ========== GEOMETRY QUIZ (גאומטריה) ==========
    geometryQuiz: [
      { question: "כמה מעלות בזווית ישרה?", options: ["45°", "90°", "180°", "360°"], correct: 1 },
      { question: "זווית של 120° היא:", options: ["חדה", "ישרה", "קהה", "שטוחה"], correct: 2 },
      { question: "זווית של 35° היא:", options: ["חדה", "ישרה", "קהה", "שטוחה"], correct: 0 },
      { question: "מהו סכום הזוויות במשולש?", options: ["90°", "180°", "270°", "360°"], correct: 1 },
      { question: "מהו סכום הזוויות במרובע?", options: ["180°", "270°", "360°", "540°"], correct: 2 },
      { question: "במשולש שתי זוויות הן 70° ו-60°. מהי הזווית השלישית?", options: ["50°", "60°", "70°", "80°"], correct: 0 },
      { question: "למשולש שווה צלעות כל זווית שווה:", options: ["45°", "60°", "90°", "120°"], correct: 1 },
      { question: "כמה צלעות שוות יש במשולש שווה שוקיים?", options: ["0", "1", "2", "3"], correct: 2 },
      { question: "איזו צורה היא מרובע עם 4 צלעות שוות ו-4 זוויות ישרות?", options: ["מלבן", "מעוין", "ריבוע", "טרפז"], correct: 2 },
      { question: "איזו צורה היא מרובע עם 4 זוויות ישרות אבל הצלעות לא חייבות להיות שוות?", options: ["ריבוע", "מלבן", "מעוין", "מקבילית"], correct: 1 },
      { question: "כמה זוגות צלעות מקבילות יש לטרפז?", options: ["0", "1", "2", "4"], correct: 1 },
      { question: "קווים מקבילים הם קווים ש:", options: ["נפגשים בנקודה", "לעולם לא נפגשים", "יוצרים זווית חדה", "חוצים זה את זה"], correct: 1 },
      { question: "קווים מאונכים נפגשים בזווית של:", options: ["45°", "60°", "90°", "180°"], correct: 2 },
      { question: "משולש עם זווית של 90° נקרא:", options: ["חד זוויות", "ישר זווית", "קהה זוויות", "שווה צלעות"], correct: 1 },
      { question: "משולש שכל הזוויות שלו קטנות מ-90° נקרא:", options: ["חד זוויות", "ישר זווית", "קהה זוויות", "שטוח"], correct: 0 },
      { question: "מהו ההיקף של משולש עם צלעות 3, 4, 5?", options: ["7", "10", "12", "15"], correct: 2 },
      { question: "לאיזו צורה יש 4 צלעות שוות אבל הזוויות לא חייבות להיות ישרות?", options: ["ריבוע", "מלבן", "מעוין", "טרפז"], correct: 2 },
      { question: "זווית שטוחה שווה ל:", options: ["90°", "120°", "180°", "360°"], correct: 2 },
      { question: "במרובע שלוש זוויות הן 90°. מהי הרביעית?", options: ["60°", "90°", "120°", "180°"], correct: 1 },
      { question: "איזה משולש הוא גם שווה צלעות וגם חד זוויות?", options: ["כל משולש שווה צלעות", "אף אחד", "רק ישר זווית", "רק קהה"], correct: 0 }
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
      { front: "כמה רביעיות בשלם?", back: "4 רביעיות = 1 שלם" },
      { front: "סוגי זוויות:", back: "חדה < 90°\nישרה = 90°\nקהה > 90°\nשטוחה = 180°" },
      { front: "סכום זוויות במשולש:", back: "180°" },
      { front: "סכום זוויות במרובע:", back: "360°" },
      { front: "משולש שווה צלעות:", back: "3 צלעות שוות\n3 זוויות של 60°" },
      { front: "משולש שווה שוקיים:", back: "2 צלעות שוות\n2 זוויות שוות" },
      { front: "מהו מעוין?", back: "מרובע עם 4 צלעות שוות\n(הזוויות לא חייבות להיות ישרות)" },
      { front: "קווים מקבילים:", back: "קווים שלעולם לא נפגשים (║)" },
      { front: "קווים מאונכים:", back: "קווים שנפגשים בזווית ישרה 90° (⊥)" },
      // New math flashcards for 5th grade
      { front: "⅕ = ? עשרוני", back: "0.2" },
      { front: "⅖ = ? עשרוני", back: "0.4" },
      { front: "⅗ = ? עשרוני", back: "0.6" },
      { front: "⅘ = ? עשרוני", back: "0.8" },
      { front: "50% = ?", back: "½ או 0.5" },
      { front: "25% = ?", back: "¼ או 0.25" },
      { front: "75% = ?", back: "¾ או 0.75" },
      { front: "10% = ?", back: "0.1 או ¹⁄₁₀" },
      { front: "מהו צמצום שבר?", back: "חילוק מונה ומכנה באותו מספר\n⁶⁄₁₂ ÷ 6 = ½" },
      { front: "מהו הרחבת שבר?", back: "כפל מונה ומכנה באותו מספר\n½ × 3 = ³⁄₆" },
      { front: "סדר פעולות חשבון:", back: "1. סוגריים\n2. כפל וחילוק\n3. חיבור וחיסור" },
      { front: "מהו אלכסון?", back: "קו מפינה לפינה בצורה\nחוצה את הצורה" },
      { front: "מהו טרפז?", back: "מרובע עם זוג אחד\nשל צלעות מקבילות" },
      { front: "מהו מקבילית?", back: "מרובע עם 2 זוגות\nצלעות מקבילות" },
      { front: "איך מוצאים חלק מכמות?", back: "מחלקים במכנה\nכופלים במונה\n⅓ מ-18: 18÷3×1=6" },
      { front: "השוואת שברים:", back: "הרחב למכנה משותף\n⅔ = ⁸⁄₁₂, ¾ = ⁹⁄₁₂\n⅔ < ¾" },
      // More math flashcards
      { front: "⅜ = ? עשרוני", back: "0.375" },
      { front: "⅝ = ? עשרוני", back: "0.625" },
      { front: "⅞ = ? עשרוני", back: "0.875" },
      { front: "20% = ?", back: "⅕ או 0.2" },
      { front: "33% ≈ ?", back: "≈ ⅓ או 0.33" },
      { front: "כיצד מחשבים אחוז?", back: "מספר × אחוז ÷ 100\n20% מ-50: 50×20÷100=10" },
      { front: "½ × ⅓ = ?", back: "⅙\n(כופלים מונה×מונה, מכנה×מכנה)" },
      { front: "כפל שברים:", back: "מונה × מונה\nמכנה × מכנה\n⅔ × ¼ = ²⁄₁₂ = ⅙" },
      { front: "חיבור שברים עם מכנה שונה:", back: "הרחב למכנה משותף\n½ + ⅓ = ³⁄₆ + ²⁄₆ = ⁵⁄₆" },
      { front: "שטח עיגול = ?", back: "π × r²\n(פאי כפול רדיוס בריבוע)" },
      { front: "היקף עיגול = ?", back: "2 × π × r\n(2 כפול פאי כפול רדיוס)" },
      { front: "מהו π (פאי)?", back: "≈ 3.14\nיחס בין היקף העיגול לקוטרו" },
      { front: "נפח תיבה = ?", back: "אורך × רוחב × גובה" },
      { front: "מהו ממוצע?", back: "סכום כל המספרים\nחלקי מספר הפריטים\nממוצע של 4,8,6: (4+8+6)÷3=6" },
      { front: "שטח טרפז = ?", back: "(בסיס1 + בסיס2) × גובה ÷ 2" },
      { front: "מהי מקבילית?", back: "מרובע עם 2 זוגות צלעות מקבילות\nהצלעות הנגדיות שוות" },
      { front: "מספר ראשוני:", back: "מספר שמתחלק רק ב-1 ובעצמו\n2, 3, 5, 7, 11, 13, 17, 19..." },
      { front: "כלל חלוקה ב-3:", back: "אם סכום הספרות מתחלק ב-3\n123: 1+2+3=6 → מתחלק!" },
      { front: "כלל חלוקה ב-9:", back: "אם סכום הספרות מתחלק ב-9\n234: 2+3+4=9 → מתחלק!" },
      { front: "כלל חלוקה ב-4:", back: "אם 2 הספרות האחרונות מתחלקות ב-4\n316: 16÷4=4 → מתחלק!" },
      { front: "מהו מספר מעורב?", back: "שלם + שבר\n2¾ = שניים ושלושה רבעים" },
      { front: "המרה מעורב לשבר:", back: "שלם×מכנה+מונה / מכנה\n2¾ = (2×4+3)/4 = ¹¹⁄₄" }
    ]
  },

  // ========== MATH BIG EXAM PREP - הכנה למבחן הגדול ==========
  mathBigExam: {
    // מספרים טבעיים - Natural Numbers
    naturalNumbers: [
      // סדר פעולות
      { question: "25 + 18 × 2 = ?", options: ["86", "61", "56", "81"], correct: 1, hint: "קודם כפל, אחר כך חיבור" },
      { question: "100 - 30 ÷ 5 = ?", options: ["14", "94", "70", "34"], correct: 1, hint: "קודם חילוק, אחר כך חיסור" },
      { question: "(15 + 5) × 3 = ?", options: ["30", "60", "45", "75"], correct: 1, hint: "קודם סוגריים" },
      { question: "48 ÷ 6 + 7 × 2 = ?", options: ["30", "22", "18", "26"], correct: 1, hint: "כפל וחילוק משמאל לימין, אז חיבור" },
      { question: "5 × (12 - 4) = ?", options: ["56", "40", "36", "48"], correct: 1, hint: "קודם סוגריים" },
      { question: "36 ÷ 4 × 3 = ?", options: ["3", "27", "108", "12"], correct: 1, hint: "משמאל לימין כשיש רק כפל/חילוק" },
      { question: "80 - 5 × 10 + 20 = ?", options: ["770", "50", "30", "60"], correct: 1, hint: "קודם כפל: 5×10=50, אז 80-50+20=50" },
      { question: "(8 + 12) × (15 - 10) = ?", options: ["100", "80", "120", "50"], correct: 0, hint: "סוגריים: 20 × 5 = 100" },
      { question: "90 ÷ 9 + 6 × 5 = ?", options: ["40", "35", "50", "45"], correct: 0, hint: "10 + 30 = 40" },
      { question: "מהו סדר הפעולות הנכון?", options: ["חיבור, חיסור, כפל, חילוק", "סוגריים, כפל/חילוק, חיבור/חיסור", "כפל, חילוק, סוגריים", "חיבור, סוגריים, כפל"], correct: 1, hint: "קודם סוגריים!" },
      // משוואות
      { question: "מה הערך של X?\nX + 15 = 32", options: ["47", "17", "22", "12"], correct: 1, hint: "X = 32 - 15" },
      { question: "מה הערך של X?\nX × 4 = 36", options: ["9", "32", "40", "144"], correct: 0, hint: "X = 36 ÷ 4" },
      { question: "מה הערך של X?\n56 ÷ X = 8", options: ["448", "7", "48", "64"], correct: 1, hint: "X = 56 ÷ 8" },
      { question: "מה הערך של X?\nX - 28 = 45", options: ["17", "73", "63", "83"], correct: 1, hint: "X = 45 + 28" },
      { question: "מה הערך של X?\n3 × X = 27", options: ["30", "24", "9", "81"], correct: 2, hint: "X = 27 ÷ 3" },
      { question: "מה הערך של X?\nX + 156 = 243", options: ["399", "87", "97", "77"], correct: 1, hint: "X = 243 - 156" },
      { question: "מה הערך של X?\nX × 7 = 84", options: ["12", "77", "91", "14"], correct: 0, hint: "X = 84 ÷ 7" },
      { question: "מה הערך של X?\n450 - X = 178", options: ["628", "272", "282", "262"], correct: 1, hint: "X = 450 - 178" },
      // בעיות מילוליות
      { question: "בספרייה יש 245 ספרים. הוסיפו 78 ספרים. כמה ספרים יש עכשיו?", options: ["323", "167", "313", "333"], correct: 0, hint: "חיבור" },
      { question: "בכיתה 32 תלמידים. 8 נעדרים. כמה נוכחים?", options: ["40", "24", "28", "20"], correct: 1, hint: "חיסור" },
      { question: "בחנות 6 מדפים, בכל מדף 15 ספרים. כמה ספרים בסך הכל?", options: ["21", "90", "80", "96"], correct: 1, hint: "כפל" },
      { question: "חילקו 72 ממתקים ל-9 ילדים שווה בשווה. כמה קיבל כל ילד?", options: ["8", "81", "63", "9"], correct: 0, hint: "חילוק" },
      { question: "בבית ספר 12 כיתות, בכל כיתה 28 תלמידים. כמה תלמידים בבית הספר?", options: ["336", "326", "346", "316"], correct: 0, hint: "12 × 28 - עבוד במחברת!" },
      { question: "קנו 5 חבילות עם 24 עפרונות בכל חבילה. כמה עפרונות קנו?", options: ["120", "110", "130", "29"], correct: 0, hint: "5 × 24" },
      // אומדן
      { question: "אומדן: 398 + 207 קרוב ל...", options: ["500", "600", "700", "400"], correct: 1, hint: "400 + 200 = 600" },
      { question: "אומדן: 812 - 297 קרוב ל...", options: ["400", "500", "600", "300"], correct: 1, hint: "800 - 300 = 500" },
      { question: "אומדן: 49 × 8 קרוב ל...", options: ["400", "320", "500", "560"], correct: 0, hint: "50 × 8 = 400" },
      { question: "אומדן: 198 + 305 + 94 קרוב ל...", options: ["500", "700", "600", "400"], correct: 2, hint: "200 + 300 + 100 = 600" },
      { question: "אומדן: 21 × 19 קרוב ל...", options: ["200", "400", "300", "500"], correct: 1, hint: "20 × 20 = 400" },
      // חישובים ארוכים - חיבור (מומלץ מחברת!)
      { question: "חשב במחברת:\n347 + 286 = ?", options: ["633", "623", "643", "533"], correct: 0, hint: "סדר בטור - יחידות, עשרות, מאות" },
      { question: "חשב במחברת:\n529 + 384 = ?", options: ["813", "913", "903", "923"], correct: 1, hint: "סדר בטור עם נשיאה" },
      { question: "חשב במחברת:\n456 + 278 = ?", options: ["724", "734", "634", "744"], correct: 1, hint: "4+2=6 מאות, 5+7=12 עשרות..." },
      { question: "חשב במחברת:\n1,245 + 867 = ?", options: ["2,112", "2,012", "2,102", "2,122"], correct: 0, hint: "התחל מהיחידות" },
      { question: "חשב במחברת:\n678 + 455 = ?", options: ["1,133", "1,123", "1,143", "1,033"], correct: 0, hint: "שים לב לנשיאה!" },
      { question: "חשב במחברת:\n2,456 + 1,789 = ?", options: ["4,245", "4,145", "4,345", "4,235"], correct: 0, hint: "סדר בטור בזהירות" },
      { question: "חשב במחברת:\n893 + 567 + 241 = ?", options: ["1,701", "1,601", "1,711", "1,801"], correct: 0, hint: "אפשר לחבר שניים ואז את השלישי" },
      // חישובים ארוכים - כפל (מומלץ מחברת!)
      { question: "חשב במחברת:\n46 × 7 = ?", options: ["322", "312", "332", "302"], correct: 0, hint: "6×7=42, 4×7=28, +4=32" },
      { question: "חשב במחברת:\n58 × 9 = ?", options: ["522", "512", "532", "502"], correct: 0, hint: "8×9=72, 5×9=45, +7=52" },
      { question: "חשב במחברת:\n34 × 26 = ?", options: ["884", "784", "894", "874"], correct: 0, hint: "34×6=204, 34×20=680" },
      { question: "חשב במחברת:\n47 × 35 = ?", options: ["1,645", "1,545", "1,655", "1,745"], correct: 0, hint: "47×5=235, 47×30=1410" },
      { question: "חשב במחברת:\n125 × 8 = ?", options: ["1,000", "900", "1,100", "800"], correct: 0, hint: "125×8 - שמונה פעם 125" },
      { question: "חשב במחברת:\n63 × 42 = ?", options: ["2,646", "2,546", "2,746", "2,556"], correct: 0, hint: "63×2=126, 63×40=2520" },
      { question: "חשב במחברת:\n245 × 6 = ?", options: ["1,470", "1,370", "1,570", "1,460"], correct: 0, hint: "5×6=30, 4×6+3=27, 2×6+2=14" },
      { question: "חשב במחברת:\n156 × 23 = ?", options: ["3,588", "3,488", "3,688", "3,598"], correct: 0, hint: "156×3=468, 156×20=3120" }
    ],
    // שברים פשוטים - Simple Fractions
    fractions: [
      { question: "²⁄₇ + ³⁄₇ = ?", options: ["⁵⁄₁₄", "⁵⁄₇", "⁶⁄₇", "¹⁄₇"], correct: 1, hint: "מכנים זהים - מחברים מונים" },
      { question: "⁵⁄₈ - ²⁄₈ = ?", options: ["³⁄₁₆", "³⁄₈", "⁷⁄₈", "³⁄₀"], correct: 1, hint: "מכנים זהים - מחסרים מונים" },
      { question: "½ + ¼ = ?", options: ["²⁄₆", "¾", "³⁄₆", "½"], correct: 1, hint: "½ = ²⁄₄, אז ²⁄₄ + ¼ = ¾" },
      { question: "⁵⁄₆ - ⅓ = ?", options: ["²⁄₃", "½", "⁴⁄₆", "⅓"], correct: 1, hint: "⅓ = ²⁄₆, אז ⁵⁄₆ - ²⁄₆ = ³⁄₆ = ½" },
      { question: "⅔ + ⅙ = ?", options: ["³⁄₉", "⁵⁄₆", "³⁄₆", "⁴⁄₆"], correct: 1, hint: "⅔ = ⁴⁄₆, אז ⁴⁄₆ + ⅙ = ⁵⁄₆" },
      { question: "⁷⁄₁₀ - ²⁄₅ = ?", options: ["⁵⁄₁₀", "³⁄₁₀", "⁵⁄₅", "⁹⁄₁₀"], correct: 1, hint: "²⁄₅ = ⁴⁄₁₀, אז ⁷⁄₁₀ - ⁴⁄₁₀ = ³⁄₁₀" },
      { question: "השווה: ³⁄₄ ○ ²⁄₃", options: ["<", ">", "="], correct: 1, hint: "³⁄₄ = ⁹⁄₁₂, ²⁄₃ = ⁸⁄₁₂" },
      { question: "השווה: ⁵⁄₈ ○ ⁷⁄₁₂", options: ["<", ">", "="], correct: 1, hint: "מכנה משותף 24: ¹⁵⁄₂₄ > ¹⁴⁄₂₄" },
      { question: "השווה: ²⁄₅ ○ ³⁄₁₀", options: ["<", ">", "="], correct: 1, hint: "²⁄₅ = ⁴⁄₁₀ > ³⁄₁₀" },
      { question: "מהו ⅓ מ-18?", options: ["6", "9", "3", "15"], correct: 0, hint: "18 ÷ 3 = 6" },
      { question: "מהו ¼ מ-24?", options: ["4", "8", "6", "12"], correct: 2, hint: "24 ÷ 4 = 6" },
      { question: "מהו ²⁄₅ מ-30?", options: ["6", "15", "12", "10"], correct: 2, hint: "30 ÷ 5 = 6, 6 × 2 = 12" },
      { question: "מהו ³⁄₄ מ-20?", options: ["5", "10", "15", "12"], correct: 2, hint: "20 ÷ 4 = 5, 5 × 3 = 15" },
      { question: "צמצם: ⁶⁄₁₂ = ?", options: ["³⁄₆", "²⁄₄", "½", "כל התשובות נכונות"], correct: 3, hint: "כולם שווים ל-½" },
      { question: "צמצם: ⁸⁄₁₂ = ?", options: ["⁴⁄₆", "²⁄₃", "כל התשובות נכונות", "⁶⁄₁₀"], correct: 2, hint: "⁸⁄₁₂ = ⁴⁄₆ = ²⁄₃" },
      { question: "הרחב ²⁄₃ למכנה 12:", options: ["⁴⁄₁₂", "⁶⁄₁₂", "⁸⁄₁₂", "¹⁰⁄₁₂"], correct: 2, hint: "3 × 4 = 12, אז 2 × 4 = 8" },
      { question: "הרחב ³⁄₅ למכנה 20:", options: ["⁶⁄₂₀", "⁹⁄₂₀", "¹²⁄₂₀", "¹⁵⁄₂₀"], correct: 2, hint: "5 × 4 = 20, אז 3 × 4 = 12" },
      { question: "סדר מהקטן לגדול: ½, ¼, ¾", options: ["¼, ½, ¾", "½, ¼, ¾", "¾, ½, ¼", "¼, ¾, ½"], correct: 0, hint: "¼ < ½ < ¾" },
      { question: "איזה שבר הכי קרוב ל-1?", options: ["⁷⁄₈", "⅔", "¾", "⁵⁄₆"], correct: 0, hint: "⁷⁄₈ חסר רק ⅛ ל-1" },
      { question: "⅗ + ⅖ = ?", options: ["⁵⁄₁₀", "1", "⅘", "⁶⁄₅"], correct: 1, hint: "⁵⁄₅ = 1" }
    ],
    // מספרים עשרוניים - Decimals
    decimals: [
      { question: "0.3 + 0.5 = ?", options: ["0.8", "0.35", "8", "0.08"], correct: 0, hint: "3 עשיריות + 5 עשיריות" },
      { question: "0.75 - 0.25 = ?", options: ["0.5", "0.50", "½", "כל התשובות נכונות"], correct: 3, hint: "75 מאיות - 25 מאיות = 50 מאיות" },
      { question: "1.5 + 0.8 = ?", options: ["1.13", "2.3", "9.5", "0.23"], correct: 1, hint: "15 עשיריות + 8 עשיריות = 23 עשיריות" },
      { question: "2.4 - 0.9 = ?", options: ["1.5", "2.5", "1.3", "3.3"], correct: 0, hint: "24 עשיריות - 9 עשיריות = 15 עשיריות" },
      { question: "0.25 + 0.75 = ?", options: ["0.100", "1", "1.00", "התשובות ב' וג' נכונות"], correct: 3, hint: "25 מאיות + 75 מאיות = 100 מאיות = 1" },
      { question: "3.06 - 1.04 = ?", options: ["2.2", "2.02", "4.1", "2.1"], correct: 1, hint: "306 מאיות - 104 מאיות = 202 מאיות" },
      { question: "כמה עשיריות ב-0.7?", options: ["7", "70", "0.7", "0.07"], correct: 0, hint: "0.7 = 7 עשיריות" },
      { question: "כמה מאיות ב-0.35?", options: ["3", "5", "35", "350"], correct: 2, hint: "0.35 = 35 מאיות" },
      { question: "מהו 0.4 בשבר?", options: ["⁴⁄₁₀", "²⁄₅", "כל התשובות נכונות", "⁴⁄₁₀₀"], correct: 2, hint: "0.4 = ⁴⁄₁₀ = ²⁄₅" },
      { question: "מהו ¾ כמספר עשרוני?", options: ["0.34", "0.75", "3.4", "7.5"], correct: 1, hint: "¾ = 75 מאיות" },
      { question: "סדר מהקטן לגדול: 0.5, 0.05, 0.55", options: ["0.5, 0.05, 0.55", "0.05, 0.5, 0.55", "0.55, 0.5, 0.05", "0.05, 0.55, 0.5"], correct: 1, hint: "5 מאיות < 5 עשיריות < 55 מאיות" },
      { question: "השווה: 0.8 ○ 0.80", options: ["<", ">", "="], correct: 2, hint: "8 עשיריות = 80 מאיות" },
      { question: "השווה: 0.6 ○ 0.59", options: ["<", ">", "="], correct: 1, hint: "60 מאיות > 59 מאיות" },
      { question: "מה המספר העשרוני: 4 שלמים ו-3 עשיריות?", options: ["4.03", "4.3", "43", "0.43"], correct: 1, hint: "4 + 0.3 = 4.3" },
      { question: "מה המספר: 2 שלמים, 0 עשיריות, 7 מאיות?", options: ["2.7", "2.07", "2.70", "27"], correct: 1, hint: "2 + 0 עשיריות + 7 מאיות" },
      { question: "איזה גדול יותר: 0.9 או 0.85?", options: ["0.85", "0.9", "שווים", "אי אפשר לדעת"], correct: 1, hint: "90 מאיות > 85 מאיות" },
      { question: "1 - 0.3 = ?", options: ["0.3", "0.7", "0.97", "0.03"], correct: 1, hint: "10 עשיריות - 3 עשיריות = 7 עשיריות" },
      { question: "2 - 0.45 = ?", options: ["1.55", "1.45", "0.155", "2.45"], correct: 0, hint: "200 מאיות - 45 מאיות = 155 מאיות" },
      { question: "0.1 + 0.01 = ?", options: ["0.2", "0.11", "0.02", "1.1"], correct: 1, hint: "10 מאיות + 1 מאית = 11 מאיות" },
      { question: "כמה זה 0.50 + 0.50?", options: ["0.100", "1", "1.00", "התשובות ב' וג' נכונות"], correct: 3, hint: "½ + ½ = 1" }
    ],
    // גאומטריה - Geometry
    geometry: [
      { question: "מהו היקף ריבוע עם צלע 8 ס\"מ?", options: ["16 ס\"מ", "32 ס\"מ", "64 ס\"מ", "24 ס\"מ"], correct: 1, hint: "היקף = צלע × 4" },
      { question: "מהו שטח ריבוע עם צלע 5 ס\"מ?", options: ["20 סמ\"ר", "10 סמ\"ר", "25 סמ\"ר", "15 סמ\"ר"], correct: 2, hint: "שטח = צלע × צלע" },
      { question: "מהו היקף מלבן 6×4 ס\"מ?", options: ["10 ס\"מ", "24 ס\"מ", "20 ס\"מ", "48 ס\"מ"], correct: 2, hint: "היקף = (אורך + רוחב) × 2" },
      { question: "מהו שטח מלבן 7×3 ס\"מ?", options: ["10 סמ\"ר", "20 סמ\"ר", "21 סמ\"ר", "42 סמ\"ר"], correct: 2, hint: "שטח = אורך × רוחב" },
      { question: "שטח של צורה מורכבת משני ריבועים נוגעים עם צלע 4: ?", options: ["16 סמ\"ר", "32 סמ\"ר", "64 סמ\"ר", "8 סמ\"ר"], correct: 1, hint: "2 × (4×4) = 32" },
      { question: "כמה אלכסונים יש למלבן?", options: ["1", "2", "4", "0"], correct: 1, hint: "שני אלכסונים שחוצים זה את זה" },
      { question: "כמה אלכסונים יש למשושה?", options: ["6", "9", "3", "12"], correct: 1, hint: "n(n-3)/2 = 6×3/2 = 9" },
      { question: "באיזה מרובע האלכסונים מאונכים ושווים?", options: ["מלבן", "מעוין", "ריבוע", "טרפז"], correct: 2, hint: "רק בריבוע שניהם" },
      { question: "מה נכון לגבי מעוין?", options: ["4 צלעות שוות", "האלכסונים מאונכים", "האלכסונים חוצים זה את זה", "כל התשובות נכונות"], correct: 3, hint: "למעוין כל התכונות האלה" },
      { question: "מלבן הוא גם:", options: ["ריבוע תמיד", "מקבילית", "מעוין תמיד", "משולש"], correct: 1, hint: "מלבן הוא מקרה פרטי של מקבילית" },
      { question: "מה מיוחד במקבילית?", options: ["צלעות נגדיות שוות ומקבילות", "4 זוויות ישרות", "4 צלעות שוות", "אלכסונים שווים"], correct: 0, hint: "הגדרת מקבילית" },
      { question: "איפה הגובה במשולש?", options: ["מקודקוד לצלע הנגדית בניצב", "הצלע הארוכה", "אמצע המשולש", "האלכסון"], correct: 0, hint: "גובה יוצא מקודקוד ומאונך לצלע" },
      { question: "שטח משולש עם בסיס 8 וגובה 6:", options: ["48 סמ\"ר", "24 סמ\"ר", "14 סמ\"ר", "28 סמ\"ר"], correct: 1, hint: "(בסיס × גובה) ÷ 2" },
      { question: "למשולש בסיס 10 ס\"מ ושטח 30 סמ\"ר. מהו הגובה?", options: ["3 ס\"מ", "6 ס\"מ", "20 ס\"מ", "300 ס\"מ"], correct: 1, hint: "שטח = (ב×ג)÷2, אז 30 = (10×ג)÷2, ג=6" },
      { question: "מהו היקף משולש שווה צלעות עם צלע 9 ס\"מ?", options: ["18 ס\"מ", "27 ס\"מ", "81 ס\"מ", "36 ס\"מ"], correct: 1, hint: "היקף = 3 × צלע" },
      { question: "כמה גבהים יש למשולש?", options: ["1", "2", "3", "תלוי במשולש"], correct: 2, hint: "לכל משולש 3 גבהים, אחד מכל קודקוד" },
      { question: "איזה מרובע יש לו רק זוג אחד של צלעות מקבילות?", options: ["מלבן", "מקבילית", "טרפז", "מעוין"], correct: 2, hint: "הגדרת טרפז" },
      { question: "סכום הזוויות במרובע:", options: ["180°", "270°", "360°", "540°"], correct: 2, hint: "תמיד 360 מעלות" },
      { question: "שטח צורה מורכבת: מלבן 8×4 ועליו משולש עם בסיס 8 וגובה 3:", options: ["32 סמ\"ר", "12 סמ\"ר", "44 סמ\"ר", "56 סמ\"ר"], correct: 2, hint: "מלבן: 32, משולש: 12, סה\"כ 44" },
      { question: "ריבוע הוא גם:", options: ["מלבן, מעוין, מקבילית", "רק מעוין", "רק מלבן", "משולש"], correct: 0, hint: "ריבוע הוא הכל!" }
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

  // ========== הבנת הנקרא (Reading Comprehension) ==========
  readingComprehension: [
    {
      id: 'passage-1',
      title: 'הכפר שנעלם מהמפה',
      icon: '🏘️',
      text: `לפני יותר ממאה שנים היה בצפון הארץ כפר קטן ששכן בין הרים ירוקים ונחל זורם. תושבי הכפר התפרנסו מחקלאות וגידלו זיתים, חיטה וירקות. החיים היו פשוטים, אך הקהילה הייתה חזקה והאנשים עזרו זה לזה.\n\nבמרכז הכפר עמדה באר עתיקה שממנה שאבו מים. הבאר לא הייתה רק מקור מים, אלא גם מקום מפגש. אנשים היו מגיעים לשם לשוחח, להחליף סיפורים ולשמוע חדשות.\n\nעם השנים השתנו דרכי המסחר והתחבורה. כבישים חדשים נסללו במקומות אחרים, והכפר הקטן הפך למבודד יותר ויותר. צעירים רבים עברו לערים הגדולות כדי למצוא עבודה.\n\nבסופו של דבר ננטש הכפר כמעט לחלוטין. היום נותרו רק כמה בתים הרוסים ובאר האבן הישנה, שמזכירים את החיים שהיו שם פעם.`,
      questions: [
        { q: 'במה עסקו רוב תושבי הכפר?', options: ['מסחר', 'חקלאות', 'דיג', 'בנייה'], answer: 1 },
        { q: 'מה היה במרכז הכפר?', options: ['בית ספר', 'מגדל שמירה', 'באר מים', 'שוק'], answer: 2 },
        { q: 'למה הבאר הייתה מקום חשוב?', options: ['רק לשתייה', 'מקום מפגש ושיחות', 'מקום למשחקים', 'מקום למסחר'], answer: 1 },
        { q: 'מה השתנה עם השנים?', options: ['מזג האוויר', 'דרכי התחבורה והמסחר', 'גודל הנחל', 'גודל הבאר'], answer: 1 },
        { q: 'למה צעירים עזבו את הכפר?', options: ['בגלל מזג האוויר', 'כדי למצוא עבודה בערים', 'בגלל מחסור במים', 'בגלל מחלות'], answer: 1 },
        { q: 'מה קרה לכפר בסוף?', options: ['גדל מאוד', 'הפך לעיר', 'ננטש כמעט לחלוטין', 'נהרס ברעידת אדמה'], answer: 2 },
        { q: 'מה נשאר היום מהכפר?', options: ['רק שדות', 'בתים הרוסים ובאר ישנה', 'רק הבאר', 'רק הנחל'], answer: 1 },
        { q: 'מה ניתן ללמוד מהסיפור?', options: ['שהכפרים תמיד גדלים', 'שהשינויים בתחבורה משפיעים על יישובים', 'שחקלאות אינה חשובה', 'שכל הכפרים נעלמים'], answer: 1 },
        { q: 'מה מאפיין את חיי התושבים בתחילת הסיפור?', options: ['חיים מורכבים', 'חיים פשוטים וקהילה חזקה', 'חיים קשים מאוד', 'חיים בעיר'], answer: 1 },
        { q: 'למה הבאר עדיין חשובה היום?', options: ['כי משתמשים בה', 'כי היא מזכירה את העבר', 'כי היא גדולה מאוד', 'כי היא חדשה'], answer: 1 }
      ]
    },
    {
      id: 'passage-2',
      title: 'הסקרנות ששינתה את העולם',
      icon: '💡',
      text: `רבים מההמצאות החשובות בעולם התחילו משאלה פשוטה. מדענים וממציאים שאלו את עצמם שוב ושוב: “למה זה קורה?” או “איך אפשר לעשות זאת אחרת?”\n\nלדוגמה, אלכסנדר גרהם בל התעניין מאוד בצלילים ובדרך שבה הם עוברים ממקום למקום. הסקרנות הזו הובילה אותו לפתח את הטלפון הראשון, שאפשר לאנשים לדבר למרחקים גדולים.\n\nגם תומס אדיסון, שהמציא את הנורה החשמלית המעשית, ניסה מאות ניסויים לפני שהצליח. הוא האמין שכל ניסיון כושל מקרב אותו לפתרון הנכון.\n\nהסיפורים הללו מלמדים אותנו שסקרנות והתמדה הן תכונות חשובות מאוד. פעמים רבות ההצלחה מגיעה רק אחרי ניסיונות רבים.`,
      questions: [
        { q: 'מה משותף להרבה המצאות גדולות?', options: ['הן יקרות', 'הן התחילו משאלה פשוטה', 'הן נעשו במקרה', 'הן נעשו במפעלים'], answer: 1 },
        { q: 'במה התעניין אלכסנדר גרהם בל?', options: ['אור', 'צלילים', 'מים', 'מתכות'], answer: 1 },
        { q: 'מה המציא בל?', options: ['רדיו', 'טלוויזיה', 'טלפון', 'מחשב'], answer: 2 },
        { q: 'מי פיתח את הנורה החשמלית המעשית?', options: ['אדיסון', 'בל', 'איינשטיין', 'ניוטון'], answer: 0 },
        { q: 'כמה ניסויים אדיסון ניסה?', options: ['מעט', 'עשרות', 'מאות', 'אלפים'], answer: 2 },
        { q: 'איך אדיסון התייחס לכישלון?', options: ['הפסיק לעבוד', 'ראה בו צעד ללמידה', 'כעס', 'התעלם ממנו'], answer: 1 },
        { q: 'מהי אחת התכונות החשובות לממציאים לפי הטקסט?', options: ['מזל', 'התמדה', 'כוח פיזי', 'כסף'], answer: 1 },
        { q: 'מה מאפשר הטלפון?', options: ['לראות תמונות', 'לדבר למרחקים', 'לכתוב ספרים', 'לשמוע מוזיקה'], answer: 1 },
        { q: 'מהי המסקנה המרכזית מהקטע?', options: ['המצאות קורות מהר', 'צריך להיות סקרן ולהתמיד', 'רק מדענים יכולים להמציא', 'המצאות אינן חשובות'], answer: 1 },
        { q: 'מה מניע ממציאים רבים?', options: ['פחד', 'סקרנות', 'כסף בלבד', 'פרסום'], answer: 1 }
      ]
    },
    {
      id: 'passage-3',
      title: 'כוחו של הרגל קטן',
      icon: '🌱',
      text: `הרגלים קטנים יכולים להשפיע מאוד על חיינו. לעיתים שינוי קטן בהתנהגות יומיומית יכול להוביל לשיפור גדול לאורך זמן.\n\nלדוגמה, תלמיד שמקדיש עשר דקות ביום לקריאה יכול לקרוא עשרות ספרים בשנה. בהתחלה זה אולי נראה מעט, אך עם הזמן הידע שלו גדל והבנת הקריאה משתפרת.\n\nאותו דבר נכון גם בתחומים אחרים. ספורטאי שמתאמן מעט בכל יום משפר בהדרגה את כוחו ואת כושרו הגופני.\n\nהסוד הוא התמדה. הרגל קטן שנשמר לאורך זמן יכול להפוך להצלחה גדולה.`,
      questions: [
        { q: 'על מה מדבר הקטע בעיקר?', options: ['על ספורט', 'על הרגלים קטנים והשפעתם', 'על ספרים', 'על בית ספר'], answer: 1 },
        { q: 'כמה זמן ביום מוקדש בדוגמה לקריאה?', options: ['חצי שעה', 'עשר דקות', 'שעה', 'חמש דקות'], answer: 1 },
        { q: 'מה יכול לקרות תלמיד שקורא כל יום?', options: ['ישתעמם', 'יקרא הרבה ספרים', 'יפסיק לקרוא', 'לא ילמד כלום'], answer: 1 },
        { q: 'מה משתפר אצל הקורא לאורך זמן?', options: ['מהירות הריצה', 'הבנת הקריאה', 'כוח פיזי', 'ציור'], answer: 1 },
        { q: 'מה קורה לספורטאי שמתאמן מעט בכל יום?', options: ['נחלש', 'משתפר בהדרגה', 'מתעייף מיד', 'מפסיק להתאמן'], answer: 1 },
        { q: 'מהו הסוד להצלחה לפי הקטע?', options: ['מזל', 'כסף', 'התמדה', 'כוח'], answer: 2 },
        { q: 'מה משותף לקריאה ולאימון בספורט?', options: ['שניהם דורשים התמדה', 'שניהם קשים מאוד', 'שניהם קורים בבית ספר', 'שניהם קצרים'], answer: 0 },
        { q: 'מה המסר המרכזי של הקטע?', options: ['צריך לעבוד הרבה ביום אחד', 'שינוי קטן יכול ליצור השפעה גדולה', 'צריך להפסיק הרגלים', 'הצלחה מגיעה מיד'], answer: 1 },
        { q: 'מה קורה להרגל קטן שנשמר לאורך זמן?', options: ['נעלם', 'הופך להצלחה גדולה', 'נשאר קטן', 'מפסיק לעבוד'], answer: 1 },
        { q: 'למה חשוב לשמור על הרגלים טובים?', options: ['כי הם קלים', 'כי הם משפיעים על החיים לאורך זמן', 'כי כולם עושים זאת', 'כי המורים מבקשים'], answer: 1 }
      ]
    }
  ],

  // ========== MATH WORD PROBLEMS (בעיות מילוליות) ==========
  mathWordProblems: [
    // חיבור וחיסור (1-20)
    { q: 'לרועי היו 145 גולות והוא קיבל עוד 78. כמה יש לו עכשיו?', answer: 223, options: [223, 215, 230, 213] },
    { q: 'בספריה היו 620 ספרים. 195 הושאלו. כמה נשארו?', answer: 425, options: [425, 435, 415, 445] },
    { q: 'אוטובוס נסע 230 ק״מ ביום ראשון ו-175 ביום שני. כמה בסך הכל?', answer: 405, options: [405, 395, 415, 385] },
    { q: 'בכיתה א׳ יש 28 תלמידים ובכיתה ב׳ 31. כמה יחד?', answer: 59, options: [59, 57, 61, 53] },
    { q: 'בחנות היו 950 תפוחים. מכרו 376. כמה נשארו?', answer: 574, options: [574, 584, 564, 576] },
    { q: 'למיכל היו 85 מדבקות והיא קנתה עוד 47. כמה עכשיו?', answer: 132, options: [132, 128, 142, 122] },
    { q: 'בעיר אחת גרים 4,350 אנשים ובעיר שנייה 3,780. כמה יחד?', answer: 8130, options: [8130, 8030, 8230, 7130] },
    { q: 'בכד היו 500 מ״ל מים. שתו 175 מ״ל. כמה נשאר?', answer: 325, options: [325, 335, 315, 375] },
    { q: 'טיול של 640 ק״מ. ביום הראשון נסעו 285 ק״מ. כמה נשאר?', answer: 355, options: [355, 365, 345, 375] },
    { q: 'דנה קראה 42 עמודים ביום ראשון ו-38 ביום שני. כמה יחד?', answer: 80, options: [80, 76, 84, 78] },
    { q: 'בקופה היו 1,200 ש״ח. הוציאו 350. כמה נשאר?', answer: 850, options: [850, 860, 750, 950] },
    { q: 'בסלסלה היו 78 תפוזים. אכלו 26. כמה נשאר?', answer: 52, options: [52, 54, 48, 56] },
    { q: 'במגרש היו 315 אנשים. הגיעו עוד 120. כמה עכשיו?', answer: 435, options: [435, 445, 425, 415] },
    { q: 'במפעל ייצרו 740 צעצועים. 215 נשלחו לחנות. כמה נשארו?', answer: 525, options: [525, 535, 515, 545] },
    { q: 'בחנות היו 86 כדורים ונמכרו 29. כמה נשארו?', answer: 57, options: [57, 55, 67, 47] },
    { q: 'בקופסה 150 עוגיות. נאכלו 64. כמה נשארו?', answer: 86, options: [86, 96, 84, 76] },
    { q: 'רוני הלך 3,200 צעדים בבוקר ועוד 2,450 בערב. כמה יחד?', answer: 5650, options: [5650, 5550, 5750, 5450] },
    { q: 'בכיתה 34 תלמידים. 7 נעדרו. כמה הגיעו?', answer: 27, options: [27, 29, 25, 31] },
    { q: 'היו 680 עפרונות. נלקחו 240. כמה נשארו?', answer: 440, options: [440, 450, 420, 460] },
    { q: 'בעיר יש 12,400 תושבים. עזבו 950. כמה נשארו?', answer: 11450, options: [11450, 11350, 11550, 11250] },
    // כפל (21-40)
    { q: 'בכל קופסה 9 עפרונות. כמה ב-11 קופסאות?', answer: 99, options: [99, 90, 108, 88] },
    { q: 'בכל יום קוראים 14 עמודים. כמה ב-8 ימים?', answer: 112, options: [112, 104, 120, 98] },
    { q: 'בכיתה יש 7 שולחנות ובכל שולחן 4 תלמידים. כמה תלמידים?', answer: 28, options: [28, 24, 32, 30] },
    { q: 'בכל שקית 6 תפוחים. כמה ב-15 שקיות?', answer: 90, options: [90, 80, 96, 84] },
    { q: 'מחיר מחברת 7 שקלים. כמה עולות 9 מחברות?', answer: 63, options: [63, 56, 72, 54] },
    { q: 'בכל שבוע דנה מתאמנת 3 פעמים. כמה פעמים ב-12 שבועות?', answer: 36, options: [36, 33, 39, 42] },
    { q: 'בכל ארגז 24 בקבוקים. כמה ב-10 ארגזים?', answer: 240, options: [240, 250, 230, 200] },
    { q: 'לכל אופניים 2 גלגלים. כמה גלגלים ב-18 אופניים?', answer: 36, options: [36, 34, 38, 40] },
    { q: 'בכל שורה 12 עצים. כמה עצים ב-14 שורות?', answer: 168, options: [168, 156, 172, 148] },
    { q: 'בכל יום רועי חוסך 5 שקלים. כמה ב-30 ימים?', answer: 150, options: [150, 140, 160, 135] },
    { q: 'בכיתה 25 תלמידים. כמה תלמידים ב-6 כיתות?', answer: 150, options: [150, 145, 155, 130] },
    { q: 'בכל קופסה 48 עוגיות. כמה ב-4 קופסאות?', answer: 192, options: [192, 186, 196, 200] },
    { q: 'מחיר כרטיס 32 שקלים. כמה ל-6 כרטיסים?', answer: 192, options: [192, 188, 196, 180] },
    { q: 'בכל מדף 35 ספרים. כמה ב-8 מדפים?', answer: 280, options: [280, 270, 290, 275] },
    { q: 'בכל שעה עובדות 60 דקות. כמה דקות ב-9 שעות?', answer: 540, options: [540, 520, 560, 480] },
    { q: 'בכל שבוע 7 ימים. כמה ימים ב-8 שבועות?', answer: 56, options: [56, 54, 58, 48] },
    { q: 'לכל פרח 5 עלים. כמה עלים ב-13 פרחים?', answer: 65, options: [65, 60, 70, 55] },
    { q: 'בכל סל 18 תפוזים. כמה ב-7 סלים?', answer: 126, options: [126, 120, 132, 118] },
    { q: 'בכל ארגז 32 כדורים. כמה ב-5 ארגזים?', answer: 160, options: [160, 155, 165, 150] },
    { q: 'בכל קופסה 16 שוקולדים. כמה ב-9 קופסאות?', answer: 144, options: [144, 140, 148, 136] },
    // חילוק (41-60)
    { q: '84 סוכריות מחלקים ל-7 ילדים. כמה כל אחד?', answer: 12, options: [12, 14, 10, 11] },
    { q: '96 תפוחים ל-12 ארגזים. כמה בכל ארגז?', answer: 8, options: [8, 9, 7, 6] },
    { q: '150 שקלים ל-5 ילדים. כמה כל אחד?', answer: 30, options: [30, 25, 35, 28] },
    { q: '144 עוגיות ל-12 צלחות. כמה בכל צלחת?', answer: 12, options: [12, 14, 10, 16] },
    { q: '72 תלמידים ל-8 קבוצות. כמה בכל קבוצה?', answer: 9, options: [9, 8, 10, 7] },
    { q: '120 כדורים ל-10 קופסאות. כמה בכל קופסה?', answer: 12, options: [12, 10, 14, 15] },
    { q: '200 שקלים ל-4 חברים. כמה כל אחד?', answer: 50, options: [50, 40, 60, 45] },
    { q: '81 ספרים ל-9 מדפים. כמה בכל מדף?', answer: 9, options: [9, 8, 10, 7] },
    { q: '60 דקות ל-5 חלקים. כמה בכל חלק?', answer: 12, options: [12, 10, 15, 11] },
    { q: '108 סוכריות ל-6 ילדים. כמה כל אחד?', answer: 18, options: [18, 16, 20, 15] },
    { q: '160 תפוחים ל-8 סלים. כמה בכל סל?', answer: 20, options: [20, 18, 22, 16] },
    { q: '180 תלמידים ל-9 כיתות. כמה בכל כיתה?', answer: 20, options: [20, 18, 22, 15] },
    { q: '96 כדורים ל-3 קופסאות. כמה בכל קופסה?', answer: 32, options: [32, 30, 34, 28] },
    { q: '144 שקלים ל-12 ילדים. כמה כל אחד?', answer: 12, options: [12, 14, 10, 11] },
    { q: '70 תפוזים ל-7 סלים. כמה בכל סל?', answer: 10, options: [10, 12, 8, 9] },
    { q: '132 עוגיות ל-11 ילדים. כמה כל אחד?', answer: 12, options: [12, 11, 14, 10] },
    { q: '90 דקות ל-3 חלקים. כמה בכל חלק?', answer: 30, options: [30, 25, 35, 20] },
    { q: '48 עפרונות ל-6 תלמידים. כמה לכל אחד?', answer: 8, options: [8, 7, 9, 6] },
    { q: '200 תלמידים ל-10 אוטובוסים. כמה בכל אוטובוס?', answer: 20, options: [20, 25, 15, 22] },
    { q: '84 כדורים ל-12 ילדים. כמה לכל ילד?', answer: 7, options: [7, 8, 6, 9] },
    // בעיות משולבות (61-80)
    { q: 'בכל קופסה 8 תפוחים. כמה תפוחים ב-14 קופסאות?', answer: 112, options: [112, 104, 120, 96] },
    { q: '240 תלמידים יוצאים לטיול. בכל אוטובוס 40 מקומות. כמה אוטובוסים צריך?', answer: 6, options: [6, 5, 7, 8] },
    { q: 'מחיר מחברת 6 שקלים. כמה עולות 12 מחברות?', answer: 72, options: [72, 66, 78, 60] },
    { q: 'יעל קראה 18 עמודים ביום במשך 5 ימים. כמה עמודים?', answer: 90, options: [90, 85, 95, 80] },
    { q: 'בחווה 12 פרות. כמה רגליים יש?', answer: 48, options: [48, 44, 52, 36] },
    { q: 'בכיתה 24 תלמידים. 6 תלמידים בכל קבוצה. כמה קבוצות?', answer: 4, options: [4, 5, 3, 6] },
    { q: 'מיכל קנתה 3 חולצות ב-40 שקלים כל אחת. כמה שילמה?', answer: 120, options: [120, 130, 110, 100] },
    { q: 'סרט נמשך שעתיים ו-30 דקות. כמה דקות?', answer: 150, options: [150, 140, 160, 130] },
    { q: 'כל יום רועי הולך 3 ק״מ. כמה ב-8 ימים?', answer: 24, options: [24, 22, 26, 21] },
    { q: '48 עוגיות נאפו וחולקו ל-6 ילדים. כמה כל אחד?', answer: 8, options: [8, 7, 9, 6] },
    { q: 'מחיר כרטיס 45 שקלים. כמה ל-4 אנשים?', answer: 180, options: [180, 170, 190, 160] },
    { q: '9 ארגזים עם 25 תפוחים בכל אחד. כמה תפוחים?', answer: 225, options: [225, 220, 230, 215] },
    { q: '120 עוגיות נאכלו ב-5 ימים במידה שווה. כמה ביום?', answer: 24, options: [24, 22, 26, 20] },
    { q: 'בכיתה 28 תלמידים. כמה תלמידים ב-7 כיתות?', answer: 196, options: [196, 184, 200, 192] },
    { q: '300 ק״מ חולקו ל-5 ימים. כמה ביום?', answer: 60, options: [60, 50, 70, 55] },
    { q: 'לכל כלב 4 רגליים. כמה רגליים ל-15 כלבים?', answer: 60, options: [60, 56, 64, 48] },
    { q: 'מחיר ספר 38 שקלים. כמה ל-3 ספרים?', answer: 114, options: [114, 112, 116, 108] },
    { q: '80 תפוחים חולקו ל-10 ילדים. כמה לכל ילד?', answer: 8, options: [8, 10, 7, 6] },
    { q: '150 תלמידים יוצאים ל-5 קבוצות שוות. כמה בכל קבוצה?', answer: 30, options: [30, 25, 35, 28] },
    { q: 'בכל שעה 60 דקות. כמה דקות ב-4 שעות?', answer: 240, options: [240, 230, 250, 200] },
    // היגיון (81-100)
    { q: 'מספר כפול שווה 50. מה המספר?', answer: 25, options: [25, 20, 30, 15] },
    { q: 'מספר ועוד 35 שווה 70. מה המספר?', answer: 35, options: [35, 30, 40, 25] },
    { q: 'מספר כפול ועוד 10 שווה 30. מה המספר?', answer: 10, options: [10, 15, 8, 12] },
    { q: 'מספר ועוד 15 שווה 40. מה המספר?', answer: 25, options: [25, 20, 30, 15] },
    { q: 'מספר כפול ועוד 8 שווה 24. מה המספר?', answer: 8, options: [8, 10, 6, 12] },
    { q: 'סכום שני מספרים הוא 30 והם שווים. מה כל אחד?', answer: 15, options: [15, 10, 20, 12] },
    { q: 'סכום שני מספרים הוא 50 ואחד מהם 20. מה השני?', answer: 30, options: [30, 25, 35, 20] },
    { q: 'מספר גדול פי 3 מ-8. מה המספר?', answer: 24, options: [24, 21, 27, 18] },
    { q: 'מספר קטן פי 2 מ-40. מה המספר?', answer: 20, options: [20, 25, 15, 30] },
    { q: 'מספר ועוד חצי ממנו שווה 30. מה המספר?', answer: 20, options: [20, 15, 25, 10] },
    { q: '3 מספרים שווים שסכומם 27. מה כל אחד?', answer: 9, options: [9, 8, 10, 7] },
    { q: 'מספר ועוד 12 שווה כפול ממנו. מה המספר?', answer: 12, options: [12, 10, 14, 8] },
    { q: 'מספר כפול פחות 6 שווה 20. מה המספר?', answer: 13, options: [13, 10, 15, 12] },
    { q: 'מספר ועוד 8 שווה 3 כפול ממנו. מה המספר?', answer: 4, options: [4, 3, 5, 6] },
    { q: 'מספר כפול פחות 4 שווה 16. מה המספר?', answer: 10, options: [10, 8, 12, 6] },
    { q: 'מספר ועוד 20 שווה 50. מה המספר?', answer: 30, options: [30, 25, 35, 20] },
    { q: 'מספר כפול שווה 18. מה המספר?', answer: 9, options: [9, 8, 10, 6] },
    { q: 'מספר ועוד 7 שווה 25. מה המספר?', answer: 18, options: [18, 17, 19, 15] },
    { q: 'מספר כפול ועוד 5 שווה 25. מה המספר?', answer: 10, options: [10, 8, 12, 15] },
    { q: 'מספר ועוד 10 שווה 2 כפול ממנו. מה המספר?', answer: 10, options: [10, 8, 12, 5] },
    // בעיות מילוליות מורכבות (101-120)
    { q: 'במגרש 8 סלים של תפוחים, בכל סל 24 תפוחים. אכלו 36. כמה נשארו?', answer: 156, options: [156, 160, 148, 164] },
    { q: 'בבית ספר 12 כיתות עם 28 תלמידים. 35 לא הגיעו לטיול. כמה יצאו?', answer: 301, options: [301, 311, 291, 336] },
    { q: 'טיול של 420 ק״מ. יום ראשון 135, יום שני 160. כמה נשאר?', answer: 125, options: [125, 135, 115, 145] },
    { q: 'בחנות 15 מדפים עם 18 מכוניות. נמכרו 120. כמה נשארו?', answer: 150, options: [150, 160, 140, 170] },
    { q: '240 כריכים ל-30 ילדים שווה. כמה כל ילד?', answer: 8, options: [8, 7, 9, 10] },
    { q: 'יואב חוסך 15 ש״ח בשבוע למשחק ב-180 ש״ח. אחרי כמה שבועות?', answer: 12, options: [12, 10, 15, 8] },
    { q: 'בגן חיות 14 כלובים עם 9 ציפורים. כמה ציפורים?', answer: 126, options: [126, 120, 130, 118] },
    { q: 'ספר עם 360 עמודים, קוראים 30 ביום. אחרי כמה ימים?', answer: 12, options: [12, 10, 14, 11] },
    { q: '18 פרות נותנות 12 ליטר חלב כל אחת. כמה ליטר ביום?', answer: 216, options: [216, 200, 220, 208] },
    { q: '215 תלמידים, 50 מקומות באוטובוס. כמה אוטובוסים?', answer: 5, options: [5, 4, 6, 3] },
    { q: '420 ספרים ל-14 מדפים שווה. כמה בכל מדף?', answer: 30, options: [30, 28, 32, 35] },
    { q: 'מסלול של 5 ק״מ, דניאל רץ 4 פעמים. כמה ק״מ?', answer: 20, options: [20, 18, 22, 25] },
    { q: '8 קופסאות עם 12 טושים, חולקו ל-24 תלמידים. כמה לכל אחד?', answer: 4, options: [4, 3, 5, 6] },
    { q: 'מפעל מייצר 125 צעצועים ביום. כמה ב-8 ימים?', answer: 1000, options: [1000, 900, 1100, 950] },
    { q: 'בפארק 16 שורות של 14 עצים. כמה עצים?', answer: 224, options: [224, 220, 228, 214] },
    { q: '6 כרטיסים ב-38 ש״ח כל אחד. כמה שילמו?', answer: 228, options: [228, 218, 238, 222] },
    { q: 'בריכה - 45 אנשים בשעה. כמה ב-6 שעות?', answer: 270, options: [270, 260, 280, 250] },
    { q: '480 תלמידים ל-קבוצות של 24. כמה קבוצות?', answer: 20, options: [20, 18, 22, 24] },
    { q: '360 לחמניות בשקיות של 12. כמה שקיות?', answer: 30, options: [30, 28, 32, 25] },
    { q: '18 מגשים עם 25 עוגיות, אכלו 210. כמה נשארו?', answer: 240, options: [240, 250, 230, 220] }
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
      { word: 'חברות', hint: 'יחסים טובים בין אנשים' },
      // More Hebrew hangman words
      { word: 'הרפתקאה', hint: 'נסיעה מרגשת של גילוי חדש' },
      { word: 'כדורסל', hint: 'עושים בו כדורגל' },
      { word: 'פרפר', hint: 'חרק עם כנפיים' },
      { word: 'אוצר', hint: 'מילים של משפה / מילון של מילים' },
      { word: 'תעודה', hint: 'מסמך שמוכיח זהות' },
      { word: 'השראה', hint: 'עוררת רגשות לפעולה' },
      { word: 'מדבר', hint: 'מקום יבש וחם עם אוויר נקי' },
      { word: 'חולצה', hint: 'בגד שלובשים מלבד לגוף' },
      { word: 'מחשב', hint: 'מכונה אלקטרונית לעבודה' },
      { word: 'פסולת', hint: 'מונח מתוך אבן' },
      { word: 'מכתבה', hint: 'שליחה על נייר' },
      { word: 'תרגיל', hint: 'פעולה שעושים במתמטיקה' },
      { word: 'המצאה', hint: 'מציאת דבר שחיפשת' },
      { word: 'מוזיאון', hint: 'מקום שמציגים בו דברים מהעבר' }
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
      { word: 'PLAYGROUND', hint: 'Where children play outside' },
      // New words for 5th grade
      { word: 'ENVIRONMENT', hint: 'The world around us - nature' },
      { word: 'ADVENTURE', hint: 'An exciting experience or journey' },
      { word: 'CELEBRATE', hint: 'To have a party for a special day' },
      { word: 'DANGEROUS', hint: 'Not safe, could hurt you' },
      { word: 'EXCELLENT', hint: 'Very very good' },
      { word: 'FANTASTIC', hint: 'Amazing, wonderful' },
      { word: 'GOVERNMENT', hint: 'The people who run a country' },
      { word: 'HELICOPTER', hint: 'A flying machine with spinning blades' },
      { word: 'IMPOSSIBLE', hint: 'Cannot be done' },
      { word: 'VEGETABLE', hint: 'Healthy food like carrots and cucumbers' },
      { word: 'KNOWLEDGE', hint: 'Things you know and learn' },
      { word: 'MICROWAVE', hint: 'A machine that heats food quickly' },
      { word: 'NEWSPAPER', hint: 'Paper with daily news' },
      { word: 'SURPRISED', hint: 'Shocked, did not expect it' },
      { word: 'WONDERFUL', hint: 'Full of wonder, amazing' },
      // More English hangman words
      { word: 'CHOCOLATE', hint: 'A sweet brown treat' },
      { word: 'BUTTERFLY', hint: 'A colorful insect with wings' },
      { word: 'CROCODILE', hint: 'A big reptile with sharp teeth' },
      { word: 'DINOSAUR', hint: 'A huge animal from long ago' },
      { word: 'EDUCATION', hint: 'Learning and studying' },
      { word: 'FURNITURE', hint: 'Tables, chairs, beds...' },
      { word: 'GEOGRAPHY', hint: 'The study of places and maps' },
      { word: 'HAPPINESS', hint: 'The feeling of being happy' },
      { word: 'INVENTION', hint: 'Something new that was created' },
      { word: 'JELLYFISH', hint: 'A sea creature that can sting' },
      { word: 'KANGAROO', hint: 'An Australian animal that hops' },
      { word: 'LIGHTNING', hint: 'A flash of light in a storm' },
      { word: 'MOUNTAINS', hint: 'Very tall land formations' },
      { word: 'NEIGHBOUR', hint: 'A person who lives near you' },
      { word: 'OPERATION', hint: 'A medical procedure or math action' }
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
      { word: 'קוטר', hint: 'קו שעובר דרך מרכז העיגול' },
      // New math words for 5th grade
      { word: 'עשרוני', hint: 'מספר עם נקודה כמו 3.5' },
      { word: 'עשירית', hint: 'חלק אחד מתוך עשרה - 0.1' },
      { word: 'מאית', hint: 'חלק אחד מתוך מאה - 0.01' },
      { word: 'מקבילית', hint: 'מרובע עם 2 זוגות צלעות מקבילות' },
      { word: 'טרפז', hint: 'מרובע עם זוג אחד של צלעות מקבילות' },
      { word: 'מעוין', hint: 'מרובע עם 4 צלעות שוות' },
      { word: 'אלכסון', hint: 'קו מפינה לפינה בצורה' },
      { word: 'מאונך', hint: 'קו שעומד בזווית ישרה' },
      { word: 'מקביל', hint: 'קווים שלא נפגשים לעולם' },
      { word: 'גובה', hint: 'האורך מלמטה עד למעלה' },
      { word: 'בסיס', hint: 'הצלע התחתונה של צורה' },
      { word: 'אחוז', hint: 'חלקים מתוך מאה - %' },
      { word: 'שקול', hint: 'שברים ששווים אותו דבר' },
      { word: 'צמצום', hint: 'להקטין שבר לצורה פשוטה' },
      { word: 'הרחבה', hint: 'להגדיל מונה ומכנה באותו מספר' }
    ]
  },

  // ========== MEMORY PAIRS ==========
  memory: {
    hebrew: [
      ['ילד', 'ילדים'], ['ילדה', 'ילדות'], ['ספר', 'ספרים'], ['שם עצם', 'noun'],
      ['פועל', 'verb'], ['תואר', 'adjective'], ['מחברת', 'מחברות'], ['שיר', 'שירים'],
      ['בית', 'בתים'], ['מילה', 'מילים'], ['שאלה', 'שאלות'], ['תשובה', 'תשובות'],
      // More Hebrew memory pairs
      ['דלת', 'דלתות'], ['חלון', 'חלונות'], ['כוכב', 'כוכבים'], ['תמונה', 'תמונות'],
      ['עבר', 'עבר past'], ['הווה', 'הווה present'], ['עתיד', 'עתיד future'],
      ['סיבה', 'כי'], ['ניגוד', 'אבל'], ['תנאי', 'אם'],
      ['גדול', 'קטן'], ['חזק', 'חלש'], ['מהר', 'איטי'], ['חכם', 'טיפש']
    ],
    english: [
      ['go', 'went'], ['eat', 'ate'], ['see', 'saw'], ['have', 'had'],
      ['make', 'made'], ['come', 'came'], ['take', 'took'], ['give', 'gave'],
      ['write', 'wrote'], ['read', 'read'], ['buy', 'bought'], ['think', 'thought'],
      // New pairs for 5th grade
      ['begin', 'began'], ['break', 'broke'], ['catch', 'caught'], ['choose', 'chose'],
      ['draw', 'drew'], ['fall', 'fell'], ['find', 'found'], ['fly', 'flew'],
      ['forget', 'forgot'], ['grow', 'grew'], ['hide', 'hid'], ['hold', 'held'],
      ['keep', 'kept'], ['leave', 'left'], ['lose', 'lost'], ['meet', 'met'],
      ['send', 'sent'], ['sit', 'sat'], ['sleep', 'slept'], ['spend', 'spent'],
      ['stand', 'stood'], ['teach', 'taught'], ['tell', 'told'], ['win', 'won'],
      // More English memory pairs
      ['sleep', 'slept'], ['feel', 'felt'], ['build', 'built'], ['pay', 'paid'],
      ['run', 'ran'], ['swim', 'swam'], ['sing', 'sang'], ['drink', 'drank'],
      ['bring', 'brought'], ['know', 'knew'], ['drive', 'drove'], ['ride', 'rode'],
      ['speak', 'spoke'], ['wake', 'woke'], ['wear', 'wore'], ['throw', 'threw'],
      ['hot', 'cold'], ['big', 'small'], ['happy', 'sad'], ['fast', 'slow'],
      ['old', 'young'], ['easy', 'difficult'], ['light', 'dark'], ['open', 'close']
    ],
    math: [
      ['½', '0.5'], ['¼', '0.25'], ['¾', '0.75'], ['שטח ריבוע', 'צלע×צלע'],
      ['שטח מלבן', 'אורך×רוחב'], ['היקף ריבוע', 'צלע×4'], ['היקף מלבן', '(אורך+רוחב)×2'],
      ['⅓', '0.33'], ['⅔', '0.67'], ['1', '100%'], ['½', '50%'], ['¼', '25%'],
      // New math pairs for 5th grade
      ['⅕', '0.2'], ['⅖', '0.4'], ['⅗', '0.6'], ['⅘', '0.8'],
      ['שטח משולש', '(בסיס×גובה)÷2'], ['90°', 'זווית ישרה'], ['180°', 'זווית שטוחה'],
      ['מונה', 'למעלה בשבר'], ['מכנה', 'למטה בשבר'], ['75%', '¾'],
      ['10%', '0.1'], ['סכום זוויות משולש', '180°'], ['סכום זוויות מרובע', '360°'],
            ['⅛', '0.125'], ['⅜', '0.375'], ['⅝', '0.625'], ['⅞', '0.875'],
      // More math memory pairs
      ['20%', '⅕'], ['33%', '≈⅓'], ['1%', '0.01'], ['5%', '0.05'],
      ['שטח טרפז', '(בסיס1+בסיס2)×ג÷2'], ['היקף עיגול', '2×π×r'],
      ['שטח עיגול', 'π×r²'], ['נפח תיבה', 'אורך×רוחב×גובה'],
      ['רדיוס', 'חצי קוטר'], ['קוטר', '2×רדיוס'],
      ['מיליון', '1,000,000'], ['מיליארד', '1,000,000,000'],
      ['ראשוני', 'מתחלק רק ב-1 ובעצמו'], ['זוגי', 'מתחלק ב-2 בלי שארית']
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
    },
    {
      week: 'שבוע 5 — טבע',
      words: [
        { word: 'mountain', hebrewHint: 'הר' },
        { word: 'ocean', hebrewHint: 'אוקיינוס' },
        { word: 'forest', hebrewHint: 'יער' },
        { word: 'desert', hebrewHint: 'מדבר' },
        { word: 'island', hebrewHint: 'אי' },
        { word: 'weather', hebrewHint: 'מזג אוויר' },
        { word: 'rainbow', hebrewHint: 'קשת' },
        { word: 'volcano', hebrewHint: 'הר געש' }
      ]
    },
    {
      week: 'שבוע 6 — בעלי חיים',
      words: [
        { word: 'butterfly', hebrewHint: 'פרפר' },
        { word: 'dolphin', hebrewHint: 'דולפין' },
        { word: 'elephant', hebrewHint: 'פיל' },
        { word: 'giraffe', hebrewHint: 'ג׳ירפה' },
        { word: 'penguin', hebrewHint: 'פינגווין' },
        { word: 'crocodile', hebrewHint: 'תנין' },
        { word: 'parrot', hebrewHint: 'תוכי' },
        { word: 'squirrel', hebrewHint: 'סנאי' }
      ]
    },
    {
      week: 'שבוע 7 — רגשות ותחושות',
      words: [
        { word: 'excited', hebrewHint: 'נרגש' },
        { word: 'nervous', hebrewHint: 'עצבני' },
        { word: 'surprised', hebrewHint: 'מופתע' },
        { word: 'confused', hebrewHint: 'מבולבל' },
        { word: 'jealous', hebrewHint: 'קנאי' },
        { word: 'proud', hebrewHint: 'גאה' },
        { word: 'lonely', hebrewHint: 'בודד' },
        { word: 'grateful', hebrewHint: 'אסיר תודה' }
      ]
    },
    {
      week: 'שבוע 8 — מקצועות',
      words: [
        { word: 'scientist', hebrewHint: 'מדען' },
        { word: 'engineer', hebrewHint: 'מהנדס' },
        { word: 'musician', hebrewHint: 'מוזיקאי' },
        { word: 'journalist', hebrewHint: 'עיתונאי' },
        { word: 'astronaut', hebrewHint: 'אסטרונאוט' },
        { word: 'architect', hebrewHint: 'אדריכל' },
        { word: 'photographer', hebrewHint: 'צלם' },
        { word: 'veterinarian', hebrewHint: 'וטרינר' }
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
    { word: 'sandwich', hebrewHint: 'כריך' },
    // Weather
    { word: 'sunny', hebrewHint: 'שמשי' },
    { word: 'cloudy', hebrewHint: 'מעונן' },
    { word: 'rainy', hebrewHint: 'גשום' },
    { word: 'windy', hebrewHint: 'סוער' },
    { word: 'snowy', hebrewHint: 'מושלג' },
    { word: 'storm', hebrewHint: 'סערה' },
    { word: 'temperature', hebrewHint: 'טמפרטורה' },
    { word: 'thunder', hebrewHint: 'רעם' },
    { word: 'lightning', hebrewHint: 'ברק' },
    { word: 'rainbow', hebrewHint: 'קשת' },
    // Body parts
    { word: 'shoulder', hebrewHint: 'כתף' },
    { word: 'stomach', hebrewHint: 'בטן' },
    { word: 'elbow', hebrewHint: 'מרפק' },
    { word: 'knee', hebrewHint: 'ברך' },
    { word: 'finger', hebrewHint: 'אצבע' },
    { word: 'ankle', hebrewHint: 'קרסול' },
    { word: 'forehead', hebrewHint: 'מצח' },
    { word: 'throat', hebrewHint: 'גרון' },
    { word: 'muscle', hebrewHint: 'שריר' },
    { word: 'brain', hebrewHint: 'מוח' },
    // Animals
    { word: 'elephant', hebrewHint: 'פיל' },
    { word: 'giraffe', hebrewHint: 'ג׳ירפה' },
    { word: 'dolphin', hebrewHint: 'דולפין' },
    { word: 'penguin', hebrewHint: 'פינגווין' },
    { word: 'butterfly', hebrewHint: 'פרפר' },
    { word: 'squirrel', hebrewHint: 'סנאי' },
    { word: 'octopus', hebrewHint: 'תמנון' },
    { word: 'parrot', hebrewHint: 'תוכי' },
    { word: 'turtle', hebrewHint: 'צב' },
    { word: 'whale', hebrewHint: 'לוויתן' },
    // Clothes
    { word: 'jacket', hebrewHint: 'ז׳קט' },
    { word: 'sweater', hebrewHint: 'סוודר' },
    { word: 'boots', hebrewHint: 'מגפיים' },
    { word: 'gloves', hebrewHint: 'כפפות' },
    { word: 'scarf', hebrewHint: 'צעיף' },
    { word: 'umbrella', hebrewHint: 'מטריה' },
    { word: 'uniform', hebrewHint: 'מדים' },
    { word: 'pocket', hebrewHint: 'כיס' },
    { word: 'button', hebrewHint: 'כפתור' },
    { word: 'zipper', hebrewHint: 'רוכסן' },
    // Transport
    { word: 'airplane', hebrewHint: 'מטוס' },
    { word: 'bicycle', hebrewHint: 'אופניים' },
    { word: 'helicopter', hebrewHint: 'מסוק' },
    { word: 'motorcycle', hebrewHint: 'אופנוע' },
    { word: 'submarine', hebrewHint: 'צוללת' },
    { word: 'ambulance', hebrewHint: 'אמבולנס' },
    { word: 'passenger', hebrewHint: 'נוסע' },
    { word: 'traffic', hebrewHint: 'תנועה' },
    { word: 'engine', hebrewHint: 'מנוע' },
    { word: 'station', hebrewHint: 'תחנה' },
    // Science
    { word: 'planet', hebrewHint: 'כוכב לכת' },
    { word: 'gravity', hebrewHint: 'כוח משיכה' },
    { word: 'experiment', hebrewHint: 'ניסוי' },
    { word: 'discover', hebrewHint: 'לגלות' },
    { word: 'microscope', hebrewHint: 'מיקרוסקופ' },
    { word: 'oxygen', hebrewHint: 'חמצן' },
    { word: 'material', hebrewHint: 'חומר' },
    { word: 'temperature', hebrewHint: 'טמפרטורה' },
    { word: 'energy', hebrewHint: 'אנרגיה' },
    { word: 'electricity', hebrewHint: 'חשמל' }
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
    { hebrew: 'תיק גב', english: 'backpack' },
    { hebrew: 'משפחה', english: 'family' },
    { hebrew: 'חבר', english: 'friend' },
    { hebrew: 'שמח', english: 'happy' },
    { hebrew: 'עצוב', english: 'sad' },
    { hebrew: 'גדול', english: 'big' },
    { hebrew: 'קטן', english: 'small' },
    { hebrew: 'מהיר', english: 'fast' },
    { hebrew: 'איטי', english: 'slow' },
    { hebrew: 'יפה', english: 'beautiful' },
    { hebrew: 'חזק', english: 'strong' },
    { hebrew: 'פיל', english: 'elephant' },
    { hebrew: 'דולפין', english: 'dolphin' },
    { hebrew: 'פרפר', english: 'butterfly' },
    { hebrew: 'מטוס', english: 'airplane' },
    { hebrew: 'אופניים', english: 'bicycle' },
    { hebrew: 'מטבח', english: 'kitchen' },
    { hebrew: 'גינה', english: 'garden' },
    { hebrew: 'חוף', english: 'beach' },
    { hebrew: 'הר', english: 'mountain' },
    { hebrew: 'נהר', english: 'river' }
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
      { question: "כמה פינות יש למלבן?", options: ["2", "3", "4", "5"], correct: 2 },
      // 40 more questions
      { question: "1 + 1 = ?", options: ["1", "2", "3", "4"], correct: 1 },
      { question: "3 + 3 = ?", options: ["5", "6", "7", "8"], correct: 1 },
      { question: "2 + 5 = ?", options: ["6", "7", "8", "9"], correct: 1 },
      { question: "4 + 6 = ?", options: ["8", "9", "10", "11"], correct: 2 },
      { question: "8 + 2 = ?", options: ["9", "10", "11", "12"], correct: 1 },
      { question: "6 + 5 = ?", options: ["10", "11", "12", "13"], correct: 1 },
      { question: "7 + 4 = ?", options: ["10", "11", "12", "13"], correct: 1 },
      { question: "9 + 3 = ?", options: ["11", "12", "13", "14"], correct: 1 },
      { question: "8 + 8 = ?", options: ["14", "15", "16", "17"], correct: 2 },
      { question: "5 + 7 = ?", options: ["11", "12", "13", "14"], correct: 1 },
      { question: "10 + 10 = ?", options: ["15", "18", "20", "25"], correct: 2 },
      { question: "6 + 3 = ?", options: ["7", "8", "9", "10"], correct: 2 },
      { question: "4 + 8 = ?", options: ["10", "11", "12", "13"], correct: 2 },
      { question: "7 + 6 = ?", options: ["12", "13", "14", "15"], correct: 1 },
      { question: "10 - 1 = ?", options: ["8", "9", "10", "11"], correct: 1 },
      { question: "10 - 5 = ?", options: ["3", "4", "5", "6"], correct: 2 },
      { question: "12 - 6 = ?", options: ["4", "5", "6", "7"], correct: 2 },
      { question: "13 - 3 = ?", options: ["9", "10", "11", "12"], correct: 1 },
      { question: "16 - 8 = ?", options: ["6", "7", "8", "9"], correct: 2 },
      { question: "20 - 5 = ?", options: ["10", "13", "15", "17"], correct: 2 },
      { question: "18 - 9 = ?", options: ["7", "8", "9", "10"], correct: 2 },
      { question: "17 - 7 = ?", options: ["8", "9", "10", "11"], correct: 2 },
      { question: "11 - 4 = ?", options: ["5", "6", "7", "8"], correct: 2 },
      { question: "19 - 10 = ?", options: ["7", "8", "9", "10"], correct: 2 },
      { question: "20 - 0 = ?", options: ["0", "10", "15", "20"], correct: 3 },
      { question: "8 + 0 = ?", options: ["0", "4", "8", "10"], correct: 2 },
      { question: "0 + 7 = ?", options: ["0", "3", "7", "10"], correct: 2 },
      { question: "6 - 6 = ?", options: ["0", "1", "6", "12"], correct: 0 },
      { question: "10 + 3 = ?", options: ["11", "12", "13", "14"], correct: 2 },
      { question: "15 - 10 = ?", options: ["3", "4", "5", "6"], correct: 2 },
      { question: "2 + 9 = ?", options: ["9", "10", "11", "12"], correct: 2 },
      { question: "13 - 5 = ?", options: ["6", "7", "8", "9"], correct: 2 },
      { question: "איזו צורה עם 3 צלעות?", options: ["עיגול", "ריבוע", "משולש", "מלבן"], correct: 2 },
      { question: "מה גדול יותר: 8 או 5?", options: ["5", "8", "שווים", "לא יודע"], correct: 1 },
      { question: "מה קטן יותר: 3 או 7?", options: ["3", "7", "שווים", "לא יודע"], correct: 0 },
      { question: "1 + 2 + 3 = ?", options: ["4", "5", "6", "7"], correct: 2 },
      { question: "10 - 2 - 3 = ?", options: ["3", "4", "5", "6"], correct: 2 },
      { question: "8 + 5 = ?", options: ["12", "13", "14", "15"], correct: 1 },
      { question: "20 - 12 = ?", options: ["6", "7", "8", "9"], correct: 2 },
      { question: "איזו צורה דומה לקופסה?", options: ["עיגול", "משולש", "מלבן", "קו"], correct: 2 }
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
    ],

    multiplicationQuiz: [
      { question: "2 × 1 = ?", options: ["1", "2", "3", "4"], correct: 1 },
      { question: "2 × 2 = ?", options: ["2", "3", "4", "5"], correct: 2 },
      { question: "2 × 3 = ?", options: ["4", "5", "6", "7"], correct: 2 },
      { question: "2 × 4 = ?", options: ["6", "7", "8", "9"], correct: 2 },
      { question: "2 × 5 = ?", options: ["8", "9", "10", "11"], correct: 2 },
      { question: "2 × 6 = ?", options: ["10", "11", "12", "13"], correct: 2 },
      { question: "2 × 7 = ?", options: ["12", "13", "14", "15"], correct: 2 },
      { question: "2 × 8 = ?", options: ["14", "15", "16", "17"], correct: 2 },
      { question: "2 × 9 = ?", options: ["16", "17", "18", "19"], correct: 2 },
      { question: "2 × 10 = ?", options: ["18", "19", "20", "21"], correct: 2 },
      { question: "3 × 1 = ?", options: ["1", "2", "3", "4"], correct: 2 },
      { question: "3 × 2 = ?", options: ["4", "5", "6", "7"], correct: 2 },
      { question: "3 × 3 = ?", options: ["6", "7", "8", "9"], correct: 3 },
      { question: "3 × 4 = ?", options: ["10", "11", "12", "13"], correct: 2 },
      { question: "3 × 5 = ?", options: ["12", "13", "14", "15"], correct: 3 },
      { question: "3 × 6 = ?", options: ["15", "16", "17", "18"], correct: 3 },
      { question: "3 × 7 = ?", options: ["18", "19", "20", "21"], correct: 3 },
      { question: "3 × 8 = ?", options: ["21", "22", "23", "24"], correct: 3 },
      { question: "3 × 9 = ?", options: ["24", "25", "26", "27"], correct: 3 },
      { question: "3 × 10 = ?", options: ["27", "28", "29", "30"], correct: 3 },
      { question: "4 × 1 = ?", options: ["2", "3", "4", "5"], correct: 2 },
      { question: "4 × 2 = ?", options: ["6", "7", "8", "9"], correct: 2 },
      { question: "4 × 3 = ?", options: ["10", "11", "12", "13"], correct: 2 },
      { question: "4 × 4 = ?", options: ["14", "15", "16", "17"], correct: 2 },
      { question: "4 × 5 = ?", options: ["16", "18", "20", "22"], correct: 2 },
      { question: "5 × 1 = ?", options: ["3", "4", "5", "6"], correct: 2 },
      { question: "5 × 2 = ?", options: ["8", "9", "10", "11"], correct: 2 },
      { question: "5 × 3 = ?", options: ["12", "13", "14", "15"], correct: 3 },
      { question: "5 × 4 = ?", options: ["16", "18", "20", "22"], correct: 2 },
      { question: "5 × 5 = ?", options: ["20", "22", "25", "30"], correct: 2 },
      { question: "5 × 6 = ?", options: ["25", "28", "30", "35"], correct: 2 },
      { question: "5 × 7 = ?", options: ["30", "33", "35", "40"], correct: 2 },
      { question: "5 × 8 = ?", options: ["35", "38", "40", "45"], correct: 2 },
      { question: "5 × 9 = ?", options: ["40", "42", "45", "50"], correct: 2 },
      { question: "5 × 10 = ?", options: ["40", "45", "50", "55"], correct: 2 },
      { question: "10 × 1 = ?", options: ["5", "10", "15", "20"], correct: 1 },
      { question: "10 × 2 = ?", options: ["15", "20", "25", "30"], correct: 1 },
      { question: "10 × 3 = ?", options: ["20", "25", "30", "35"], correct: 2 },
      { question: "10 × 4 = ?", options: ["30", "35", "40", "45"], correct: 2 },
      { question: "10 × 5 = ?", options: ["40", "45", "50", "55"], correct: 2 },
      { question: "4 × 6 = ?", options: ["20", "22", "24", "26"], correct: 2 },
      { question: "4 × 7 = ?", options: ["24", "26", "28", "30"], correct: 2 },
      { question: "4 × 8 = ?", options: ["28", "30", "32", "34"], correct: 2 },
      { question: "4 × 9 = ?", options: ["32", "34", "36", "38"], correct: 2 },
      { question: "4 × 10 = ?", options: ["36", "38", "40", "42"], correct: 2 },
      { question: "10 × 10 = ?", options: ["80", "90", "100", "110"], correct: 2 },
      { question: "1 × 1 = ?", options: ["0", "1", "2", "3"], correct: 1 },
      { question: "1 × 5 = ?", options: ["3", "4", "5", "6"], correct: 2 },
      { question: "1 × 10 = ?", options: ["5", "10", "15", "20"], correct: 1 },
      { question: "2 × 2 × 2 = ?", options: ["4", "6", "8", "10"], correct: 2 }
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


















