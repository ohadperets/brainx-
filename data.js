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
      {
        question: "מהו שם עצם?",
        options: ["מילה שמתארת פעולה", "מילה שמציינת דבר, אדם או מקום", "מילה שמחברת משפטים", "מילה שמתארת שם עצם"],
        correct: 1
      },
      {
        question: "איזו מילה היא שם עצם פרטי?",
        options: ["ילד", "עיר", "ירושלים", "ספר"],
        correct: 2
      },
      {
        question: "מהו הרבים של 'ילדה'?",
        options: ["ילדים", "ילדות", "ילדה", "ילדן"],
        correct: 1
      },
      {
        question: "מהו השורש של המילה 'כותב'?",
        options: ["כ.ו.ת", "כ.ת.ב", "כ.ו.ב", "ת.כ.ב"],
        correct: 1
      },
      {
        question: "איזה זמן הוא 'אלמד'?",
        options: ["עבר", "הווה", "עתיד", "ציווי"],
        correct: 2
      },
      {
        question: "מהו שם תואר?",
        options: ["מילה שמציינת מקום", "מילה שמתארת פעולה", "מילה שמתארת שם עצם", "מילה שמחברת משפטים"],
        correct: 2
      },
      {
        question: "'אהבה' היא דוגמה ל...",
        options: ["שם עצם פרטי", "שם עצם כללי", "שם עצם מופשט", "שם תואר"],
        correct: 2
      },
      {
        question: "מה צריך שם תואר להתאים ל?",
        options: ["רק למין", "רק למספר", "למין ולמספר", "לזמן הפועל"],
        correct: 2
      },
      {
        question: "מהו הגוף הנכון: 'אנחנו ___'?",
        options: ["למדתי", "למדת", "למדנו", "למדו"],
        correct: 2
      },
      {
        question: "איזו מילה היא שם עצם מופשט?",
        options: ["כיסא", "ירושלים", "חופש", "חתול"],
        correct: 2
      }
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
      { front: "מהו פועל?", back: "מילה שמתארת פעולה או מצב\nדוגמה: רץ, אוכל, חושב" }
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
      {
        question: "She ___ to school every day.",
        options: ["go", "goes", "going", "went"],
        correct: 1
      },
      {
        question: "They ___ play soccer yesterday.",
        options: ["don't", "doesn't", "didn't", "aren't"],
        correct: 2
      },
      {
        question: "___ you like pizza?",
        options: ["Does", "Do", "Did", "Are"],
        correct: 1
      },
      {
        question: "What is 'מחברת' in English?",
        options: ["pencil", "eraser", "notebook", "ruler"],
        correct: 2
      },
      {
        question: "The past of 'go' is:",
        options: ["goed", "gone", "went", "goes"],
        correct: 2
      },
      {
        question: "He ___ his homework last night.",
        options: ["do", "does", "did", "doing"],
        correct: 2
      },
      {
        question: "What is 'ספרייה' in English?",
        options: ["classroom", "library", "cafeteria", "playground"],
        correct: 1
      },
      {
        question: "I ___ eat breakfast every morning.",
        options: ["always", "yesterday", "last week", "tomorrow"],
        correct: 0
      },
      {
        question: "She doesn't ___ English.",
        options: ["speaks", "speaking", "speak", "spoke"],
        correct: 2
      },
      {
        question: "The past of 'eat' is:",
        options: ["eated", "ate", "eaten", "eating"],
        correct: 1
      }
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
      { front: "make → ?", back: "made (עבר)" }
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
      {
        question: "בשבר ¾, מהו המונה?",
        options: ["4", "3", "7", "1"],
        correct: 1
      },
      {
        question: "²⁄₅ + ¹⁄₅ = ?",
        options: ["³⁄₁₀", "³⁄₅", "²⁄₅", "¹⁄₅"],
        correct: 1
      },
      {
        question: "מהו שבר שקול ל-½?",
        options: ["¹⁄₃", "²⁄₃", "²⁄₄", "³⁄₅"],
        correct: 2
      },
      {
        question: "3.45 — מהי הספרה במקום העשיריות?",
        options: ["3", "4", "5", "0"],
        correct: 1
      },
      {
        question: "3.5 + 2.3 = ?",
        options: ["5.8", "5.2", "6.8", "5.35"],
        correct: 0
      },
      {
        question: "מהו ההיקף של ריבוע עם צלע 6?",
        options: ["12", "24", "36", "18"],
        correct: 1
      },
      {
        question: "מהו השטח של מלבן 5×4?",
        options: ["9", "18", "20", "25"],
        correct: 2
      },
      {
        question: "מהו השטח של משולש עם בסיס 10 וגובה 6?",
        options: ["60", "30", "16", "20"],
        correct: 1
      },
      {
        question: "½ כמספר עשרוני:",
        options: ["0.1", "0.2", "0.5", "0.12"],
        correct: 2
      },
      {
        question: "היקף מלבן עם אורך 7 ורוחב 3:",
        options: ["10", "21", "20", "14"],
        correct: 2
      }
    ],
    flashcards: [
      { front: "מהו שבר?", back: "חלק מתוך שלם\nכמו ¾ = 3 חלקים מתוך 4" },
      { front: "מהו מונה?", back: "המספר למעלה בשבר\nכמה חלקים לקחנו" },
      { front: "מהו מכנה?", back: "המספר למטה בשבר\nלכמה חלקים חילקנו" },
      { front: "²⁄₅ + ¹⁄₅ = ?", back: "³⁄₅\n(מחברים מונים, מכנה נשאר)" },
      { front: "½ = ? עשרוני", back: "0.5" },
      { front: "¼ = ? עשרוני", back: "0.25" },
      { front: "היקף ריבוע = ?", back: "צלע × 4" },
      { front: "שטח ריבוע = ?", back: "צלע × צלע" },
      { front: "שטח מלבן = ?", back: "אורך × רוחב" },
      { front: "שטח משולש = ?", back: "(בסיס × גובה) ÷ 2" },
      { front: "היקף מלבן = ?", back: "(אורך + רוחב) × 2" },
      { front: "מהם שברים שקולים?", back: "שברים ששווים אותו דבר\n½ = ²⁄₄ = ³⁄₆" }
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
    { id: 'first-lesson', icon: '📖', name: 'קורא מתחיל', desc: 'קרא שיעור אחד', check: p => p.hebrew.lessonsRead.length + p.english.lessonsRead.length + p.math.lessonsRead.length >= 1 },
    { id: 'all-lessons', icon: '📚', name: 'תולעת ספרים', desc: 'קרא את כל השיעורים', check: p => p.hebrew.lessonsRead.length + p.english.lessonsRead.length + p.math.lessonsRead.length >= 9 },
    { id: 'first-quiz', icon: '❓', name: 'סקרן', desc: 'סיים חידון אחד', check: p => p.hebrew.quizAttempts + p.english.quizAttempts + p.math.quizAttempts >= 1 },
    { id: 'quiz-master', icon: '🏆', name: 'אלוף החידונים', desc: 'קבל 100% בחידון', check: p => p.hebrew.quizBest === 100 || p.english.quizBest === 100 || p.math.quizBest === 100 },
    { id: 'flashcard-fan', icon: '🃏', name: 'מלך הכרטיסיות', desc: 'סיים כרטיסיות 5 פעמים', check: p => p.hebrew.flashcardsCompleted + p.english.flashcardsCompleted + p.math.flashcardsCompleted >= 5 },
    { id: 'star-10', icon: '⭐', name: '10 כוכבים', desc: 'צבור 10 כוכבים', check: p => p.stars >= 10 },
    { id: 'star-50', icon: '🌟', name: '50 כוכבים', desc: 'צבור 50 כוכבים', check: p => p.stars >= 50 },
    { id: 'star-100', icon: '💫', name: '100 כוכבים', desc: 'צבור 100 כוכבים', check: p => p.stars >= 100 },
    { id: 'streak-3', icon: '🔥', name: 'רצף שלושה', desc: '3 ימים ברצף', check: p => (p.streak || 0) >= 3 },
    { id: 'streak-7', icon: '🔥', name: 'שבוע ברצף!', desc: '7 ימים ברצף', check: p => (p.streak || 0) >= 7 },
    { id: 'gamer', icon: '🎮', name: 'גיימר', desc: 'שחק 3 משחקים', check: p => (p.gamesPlayed || 0) >= 3 },
    { id: 'dictation', icon: '📝', name: 'מכתיב מצטיין', desc: 'סיים הכתבה שבועית', check: p => (p.dictationsCompleted || 0) >= 1 }
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
      { word: 'משפחה', hint: 'אבא, אמא, אחים' }
    ],
    english: [
      { word: 'CLASSROOM', hint: 'Where you study at school' },
      { word: 'LIBRARY', hint: 'A place with many books' },
      { word: 'NOTEBOOK', hint: 'You write in it' },
      { word: 'PENCIL', hint: 'You write with it' },
      { word: 'TEACHER', hint: 'Someone who teaches you' },
      { word: 'HOMEWORK', hint: 'Work you do at home' },
      { word: 'BACKPACK', hint: 'You carry books in it' }
    ],
    math: [
      { word: 'שבר', hint: 'חלק מתוך שלם, כמו ½' },
      { word: 'מונה', hint: 'המספר למעלה בשבר' },
      { word: 'מכנה', hint: 'המספר למטה בשבר' },
      { word: 'היקף', hint: 'אורך סביב הצורה' },
      { word: 'שטח', hint: 'כמה מקום הצורה תופסת' },
      { word: 'ריבוע', hint: 'צורה עם 4 צלעות שוות' },
      { word: 'משולש', hint: 'צורה עם 3 צלעות' }
    ]
  },

  // ========== MEMORY PAIRS ==========
  memory: {
    hebrew: [
      ['ילד', 'ילדים'], ['ילדה', 'ילדות'], ['ספר', 'ספרים'], ['שם עצם', 'noun'],
      ['פועל', 'verb'], ['תואר', 'adjective']
    ],
    english: [
      ['go', 'went'], ['eat', 'ate'], ['see', 'saw'], ['have', 'had'],
      ['make', 'made'], ['come', 'came']
    ],
    math: [
      ['½', '0.5'], ['¼', '0.25'], ['¾', '0.75'], ['שטח ריבוע', 'צלע×צלע'],
      ['שטח מלבן', 'אורך×רוחב'], ['היקף ריבוע', 'צלע×4']
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
  ]
};
