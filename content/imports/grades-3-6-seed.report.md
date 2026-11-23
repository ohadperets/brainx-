# Import report — BrainX Grades 3 and 6 seed content

Date: 2026-11-23  
Source questions: 74  
Review file: content/imports/grades-3-6-seed.review.json

| Result | Count |
|---|---|
| Imported as draft (new) | 72 |
| Re-imported (already present) | 0 |
| Skipped (duplicates) | 1 |
| Rejected | 1 |

## Placement
- Grade 6 · english → english.quiz: 20
- Grade 6 · math → math.quiz: 7
- Grade 6 · math → math.geometryQuiz: 4
- Grade 6 · math → mathWordProblems: 1
- Grade 6 · hebrew → hebrew.quiz: 8
- Grade 3 · math → math.quiz: 11
- Grade 3 · hebrew → hebrew.quiz: 9
- Grade 3 · english → english.quiz: 12

## Skipped
- `bx-3-math-0041` — duplicate of existing GRADE3.math.quiz[17]

## Rejected
- `bx-3-hebrew-0059` — review: Ambiguous: the distractor 'קראה הילדה ספר.' is also grammatical (verb-first literary Hebrew), so two options are correct.

## Edited in review
- `bx-6-math-0021` — specific worked explanation
- `bx-6-math-0022` — specific worked explanation
- `bx-6-math-0023` — specific worked explanation
- `bx-6-math-0024` — specific worked explanation
- `bx-6-math-0025` — worked explanation; routed to existing geometry quiz
- `bx-6-math-0026` — worked explanation; routed to existing geometry quiz
- `bx-6-math-0027` — worked explanation; routed to existing geometry quiz
- `bx-6-math-0028` — worked explanation; routed to existing geometry quiz
- `bx-6-math-0029` — specific worked explanation
- `bx-6-math-0030` — specific worked explanation
- `bx-6-math-0031` — specific worked explanation
- `bx-6-math-0032` — fixed wording (removed stray '= ?'); worked explanation; routed to word problems
- `bx-6-hebrew-0033` — specific explanation
- `bx-6-hebrew-0034` — specific explanation
- `bx-6-hebrew-0035` — specific explanation
- `bx-6-hebrew-0036` — specific explanation
- `bx-6-hebrew-0037` — specific explanation
- `bx-6-hebrew-0038` — specific explanation
- `bx-6-hebrew-0039` — specific explanation
- `bx-6-hebrew-0040` — specific explanation
- `bx-3-math-0042` — specific worked explanation
- `bx-3-math-0043` — specific worked explanation
- `bx-3-math-0044` — specific worked explanation
- `bx-3-math-0045` — specific worked explanation
- `bx-3-math-0046` — specific worked explanation
- `bx-3-math-0047` — specific worked explanation
- `bx-3-math-0048` — specific worked explanation
- `bx-3-math-0049` — specific worked explanation
- `bx-3-math-0050` — specific worked explanation
- `bx-3-math-0051` — added units to options; worked explanation
- `bx-3-math-0052` — specific worked explanation
- `bx-3-hebrew-0053` — specific explanation
- `bx-3-hebrew-0054` — specific explanation
- `bx-3-hebrew-0055` — specific explanation
- `bx-3-hebrew-0056` — specific explanation
- `bx-3-hebrew-0057` — specific explanation
- `bx-3-hebrew-0058` — specific explanation
- `bx-3-hebrew-0060` — specific explanation
- `bx-3-hebrew-0061` — specific explanation
- `bx-3-hebrew-0062` — specific explanation
- `bx-3-english-0063` — specific explanation
- `bx-3-english-0064` — specific explanation
- `bx-3-english-0065` — specific explanation
- `bx-3-english-0066` — specific explanation
- `bx-3-english-0067` — specific explanation
- `bx-3-english-0068` — specific explanation
- `bx-3-english-0069` — specific explanation
- `bx-3-english-0070` — specific explanation
- `bx-3-english-0071` — specific explanation
- `bx-3-english-0072` — specific explanation
- `bx-3-english-0073` — specific explanation
- `bx-3-english-0074` — specific explanation

## Next step
All imported items are **drafts**. Review them in the app: Admin → ❓ ניהול חידונים. Then publish with
`node tools/import-content.mjs --publish <ids>` (or `--publish "pack:BrainX Grades 3 and 6 seed content"`) and deploy.
