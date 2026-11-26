# BrainX — Google Play readiness

Living checklist for publishing BrainX (children's learning app, grades 3 and 6) on Google Play.
Last updated: 2026-11-24 · app version on `main`: v70 (live) · branch `security-hardening`: v71 (not deployed)

Status legend: ✅ done · 🟡 done in code, waiting for approval/deploy · ⏳ manual action (owner) · ❌ blocker

---

## 1. Release blockers

| # | Blocker | Status | Unblocked by |
|---|---|---|---|
| B1 | Firestore is fully open (`allow read, write: if true`) | ❌ | Migration phase 2 (publish `firestore.rules`) |
| B2 | Admin password is hardcoded in `app.js` on `main` and in the public git history | 🟡 v71 removes it | Phase 3 deploy + make repo private (M7) |
| B3 | Children's names are uploaded to Firestore (`users`, `progress`) | 🟡 v71 stops it | Phase 3 deploy + phase 4 cleanup |
| B4 | Privacy policy has placeholders (contact email, dates) | ⏳ | M9 |
| B5 | Contact email not configured (`CONTACT_EMAIL` in `app.js` is empty) | ⏳ | M9 |
| B6 | GitHub Pages publishes a second, unmanaged copy of the app | ⏳ | M6 |
| B7 | Android packaging (Trusted Web Activity) not created yet | ⏳ | Section 7 |
| B8 | Emulator rules tests must pass in CI on the release commit | ✅ green on `security-hardening` (fe79f7b), both rule files | re-check on the merge commit |

---

## 2. Completed

| Item | Version | Notes |
|---|---|---|
| Stored XSS fixed (cloud names rendered as HTML on every device; admin dashboard) | v69 | Escaped everywhere; smoke test checks a hostile name |
| Google Analytics removed | v70 | Static check in smoke test |
| Personal phone number / WhatsApp link removed | v70 | Static check in smoke test |
| Parent gate for contact + privacy policy | v70 | Arithmetic check before leaving the app |
| Privacy policy page (`privacy.html`) | v70, updated v71 | Describes v71 data model |
| Production deploy gated on smoke test | v69 | `.github/workflows/firebase-hosting.yml` |
| Staging preview channel | v69 | Push to `staging` or open a PR → preview link |
| Firebase Authentication (anonymous devices, Google admin) | 🟡 v71 | `index.html` Firebase module |
| Private per-device data `devices/{uid}/profiles/{id}` | 🟡 v71 | Owner-only read/write/delete; admin read |
| No real names in the cloud (generated nickname, e.g. "שועל 37") | 🟡 v71 | `core/cloud.js` `buildProfileDoc` has no name field; rules reject a `name` field |
| Records tied to the writer's uid, validated, only go up, no deletes | 🟡 v71 | `records/{gameId}_g3/_g6` |
| Admin authorization enforced server-side (Google provider + `admins/{uid}`) | 🟡 v71 | Separate Firebase app instance, so the device's anonymous session is untouched |
| Profile deletion also deletes the cloud copy | 🟡 v71 | `deleteProfileFromCloud` |
| Staging/GitHub Pages/localhost cannot touch production data | 🟡 v71 | Cloud is enabled only on `BrainXCloud.PRODUCTION_HOSTS` |
| Firestore emulator tests incl. negative authorization (both rule files) | ✅ CI green | `tests/firestore-rules.test.mjs` (27 tests), CI `firestore-rules-tests.yml` runs on every push |
| Legacy cleanup script (dry-run by default) | 🟡 v71 | `tools/migrate-legacy.mjs` |
| Zero extra cost | ✅ | Spark plan: Firestore + Anonymous/Google Auth + Hosting preview channels + GitHub Actions are free at this scale |

---

## 3. Migration plan (coordinated, no broken users)

Existing children's progress lives in each device's localStorage and is **never touched** by this
migration; only the cloud copies change. Every phase is reversible until phase 4.

| Phase | What | Who | Effect on existing users | Rollback |
|---|---|---|---|---|
| **0** | Merge-ready: CI green on `security-hardening` (smoke + emulator tests for both rule files) | Claude | none | — |
| **1** | Console: enable **Anonymous** and **Google** sign-in providers; add `brainxiq.com` to Auth → Settings → Authorized domains; create `admins/{your uid}` (uid shown by the app after a first sign-in attempt) | Owner | none (nothing uses them yet) | disable providers |
| **2** | Publish **`firestore.rules`** (transition) | Owner, with approval | v70 apps keep working: records (initial only) and legacy sync still accepted; nobody can read children's data anymore; v70 admin dashboard stops working (expected) | re-publish previous rules from console history |
| **3** | Deploy **app v71** (merge `security-hardening` → `main`) | Claude, after approval | Devices update on next open (network-first service worker); they sign in anonymously and write only nameless private copies; admin uses Google sign-in | revert merge commit + bump version |
| **wait** | ~14 days, so devices pick up v71 | — | — | — |
| **4** | Run `tools/migrate-legacy.mjs` (dry run, then `--apply`): names in old records → nicknames; delete legacy `users`/`progress` | Owner | none (new app no longer uses them) | restore from the optional local backup |
| **5** | Publish **`firestore.final.rules`** (no legacy writes, no signed-out record writes) | Owner, with approval | any device still on ≤v70 can no longer save records/sync (offline-only behaviour, no crash) | re-publish transition rules |

**Order matters:** phase 2 must precede phase 3's reliance on admin reads; phase 1 must precede phase 3
(v71 needs Anonymous Auth; without it the app still works offline, but cloud features stay off).

---

## 4. Manual console actions

| # | Action | Where | Phase |
|---|---|---|---|
| M1 | Enable **Anonymous** sign-in | Firebase → Authentication → Sign-in method | 1 |
| M2 | Enable **Google** sign-in (support email = your address) | same | 1 |
| M3 | Add `brainxiq.com` (and `www.brainxiq.com`) to **Authorized domains** | Authentication → Settings | 1 |
| M4 | Create document `admins/{uid}` (any field, e.g. `note: "owner"`) — the uid is shown in the app's admin login error the first time you sign in | Firestore → Data | 1 |
| M5 | Publish `firestore.rules`, later `firestore.final.rules` (copy file → Rules → Publish) | Firestore → Rules | 2 / 5 |
| M6 | Disable GitHub Pages | GitHub repo → Settings → Pages → Source: None | now |
| M7 | Make the repository private (hides the old password and phone number in history) | GitHub → Settings → General → Danger zone | now |
| M8 | Restrict the browser API key to `brainxiq.com/*` (+ the Android app later) | Google Cloud → APIs & Services → Credentials | now |
| M9 | Provide a contact email (privacy policy + `CONTACT_EMAIL`) and the legacy-cleanup date | tell Claude | before release |
| M10 | Service-account key for `tools/migrate-legacy.mjs`, stored **outside** the repo; delete it afterwards | Project settings → Service accounts | 4 |
| M11 | Optional: separate free Firebase project for staging if staging should have working cloud features | Firebase console | later |

---

## 5. Open issues (non-blocking)

| Issue | Severity | Plan |
|---|---|---|
| Scores are computed on the device; a determined user can submit a fake high score (within rule limits). | Medium | Accepted for now (no server code at zero cost); records hold no personal data. Could add per-game score caps in rules. |
| Clearing app data creates a new anonymous account; the old private copy is orphaned until deleted on request. | Low | Documented in the privacy policy; optional cleanup of profiles not updated for 12 months via the admin script. |
| Progress backup/restore across devices | Low | Future release (e.g. a parent-gated export/import code). |
| Some older screens are not fully restyled (dark theme) | Low | UI backlog |
| `actions/checkout@v4` / `setup-java@v4` deprecation warnings in CI | Low | Bump to v5 |
| Admin Google sign-in uses a popup; inside the Android app (TWA) popups may be blocked | Low | Admin signs in from a regular browser at brainxiq.com (admin isn't needed inside the app) |
| Cloud sync is debounced (2.5 s); progress made right before the app is closed may reach the cloud on the next open | Low | Local progress is unaffected; acceptable |

---

## 6. Draft declarations for Google Play Console (based on v71 implementation)

### Target audience and content
- **Target age groups:** 6–8 and 9–12 (grades 3 and 6). Not designed for teens/adults → app is in the **Families** program.
- **Ads:** none. **In-app purchases:** none. **Social/UGC:** none (no chat, no free text shared with others; the only shared item is a generated nickname + avatar + score).
- **Families policy items:** no ads SDKs; no analytics SDKs; no location; no precise identifiers; links outside the app behind a parent gate; Google sign-in only for the admin, never asked of children.

### Data safety form
| Data type (Play category) | Collected? | Shared? | Purpose | Optional? | Notes |
|---|---|---|---|---|---|
| Name | **No** (v71) | No | — | — | Profile name/nickname stays on the device only |
| User IDs (random Firebase anonymous ID; generated nickname) | Yes | No | App functionality | Required for cloud features | Not linked to a real identity |
| App activity → app interactions / in-app progress (stars, XP, streak, games played, achievements, quiz counts) | Yes | No | App functionality, analytics (admin's aggregate view) | Required | |
| Other user-generated content (high scores: nickname + avatar + score) | Yes | Visible to other users of the app | App functionality | Required | Public leaderboard, no personal data |
| Device or other IDs | No | — | — | — | No advertising/hardware IDs |
| Location, contacts, photos, audio, financial, health, messages, email | No | — | — | — | |
- **Data encrypted in transit:** Yes (HTTPS / Firebase).
- **Users can request deletion:** Yes — deleting a profile in the app deletes its cloud copy; otherwise by email (contact in privacy policy).
- **Data shared with third parties:** No (Firebase is a processor acting on our behalf).
- **Privacy policy URL:** `https://brainxiq.com/privacy.html` (after placeholders are filled).

> Until phase 4 runs, legacy `users`/`progress` documents still contain first names from older versions.
> Do not submit the Data safety form with "Name: No" before phase 4 is complete.

---

## 7. Android app (Capacitor 8) — branch `android-app`
| Item | Status |
|---|---|
| Capacitor 8.6.2 project `com.brainxiq.app`, one codebase (`tools/build-web.mjs` → `www/`) | ✅ |
| targetSdk / compileSdk 36 (Android 16), minSdk 24 | ✅ meets Play's 2026 target-API rule |
| Permissions: INTERNET, VIBRATE; `AD_ID` explicitly removed; no ads/analytics SDKs | ✅ Families |
| Edge-to-edge (Android 15+) safe areas | ✅ |
| Text-to-speech via native plugin (WebView has no speechSynthesis) | ✅ |
| Cloud features in the app (anonymous auth, private sync, records); admin website-only | ✅ |
| Icons + splash (BrainX brand) | ✅ |
| Cloud build: GitHub Actions → debug APK + private Firebase preview download link (7 days) | 🟡 first run in progress |
| Local build `npm run android:apk / android:aab` (outside Drive, `~/.brainx-build`) | 🟡 blocked on the corporate network (Gradle download from GitHub); works off that network |
| Release AAB signing (upload key outside repo) | ⏳ owner creates the key (ANDROID.md) |
| Play listing: Families declarations, Data safety (section 6), screenshots, content rating questionnaire | ⏳ |
| App storage is separate from browser storage (website progress doesn't carry into the app) | ℹ️ documented |
