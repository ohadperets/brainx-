// Firestore security-rules tests (Firebase Emulator Suite, no cloud project needed).
//
// Run (needs Java 11+ and Node 24.12+):
//   npm install
//   npx firebase emulators:exec --only firestore --project demo-brainx "node --test tests/"
//   RULES_FILE=firestore.final.rules npx firebase emulators:exec --only firestore --project demo-brainx "node --test tests/"
// CI: .github/workflows/firestore-rules-tests.yml runs both rule files on every push.
//
// The documents written here are built with core/cloud.js — the same code the app uses —
// so these tests prove the rules accept exactly what the app sends, and nothing else.

import { test, before, after, beforeEach, describe } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { initializeTestEnvironment, assertSucceeds, assertFails } from '@firebase/rules-unit-testing';
import {
  doc, getDoc, setDoc, deleteDoc, collection, collectionGroup, getDocs, serverTimestamp, setLogLevel, Timestamp,
} from 'firebase/firestore';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const Cloud = require(path.join(ROOT, 'core/cloud.js'));

const RULES_FILE = process.env.RULES_FILE || 'firestore.rules';
const FINAL = RULES_FILE.includes('final');
const PROJECT_ID = 'demo-brainx';

let env;

// ---------- identities ----------
const kid = (uid) => env.authenticatedContext(uid, { firebase: { sign_in_provider: 'anonymous' } }).firestore();
const admin = () => env.authenticatedContext('admin-uid', {
  email: 'admin@example.com', email_verified: true, firebase: { sign_in_provider: 'google.com' },
}).firestore();
const googleNotAdmin = () => env.authenticatedContext('google-stranger', {
  email: 'stranger@example.com', email_verified: true, firebase: { sign_in_provider: 'google.com' },
}).firestore();
// same uid as the admin, but anonymous provider → must NOT be treated as admin
const anonWithAdminUid = () => env.authenticatedContext('admin-uid', { firebase: { sign_in_provider: 'anonymous' } }).firestore();
const nobody = () => env.unauthenticatedContext().firestore();

// ---------- documents (built by the app's own code) ----------
const profileDoc = (overrides = {}, progressOverrides = {}) => Cloud.buildProfileDoc({
  user: { id: 'user_1', avatar: '🦊', grade: 3, publicTag: 'שועל 37', name: 'נועה' },
  progress: { stars: 12, streak: 3, xp: 140, gamesPlayed: 9, unlockedAchievements: ['first-lesson'],
              hebrew: { quizAttempts: 2 }, english: { quizAttempts: 1 }, math: { quizAttempts: 0 }, ...progressOverrides },
  serverTimestamp,
  ...overrides,
});
const recordDoc = (uid, { score = 50, grade = 3, ...rest } = {}) => ({
  ...Cloud.buildRecordDoc({ score, tag: 'שועל 37', avatar: '🦊', uid, grade, serverTimestamp }),
  ...rest,
});
const legacyRecord = (userName = 'נ.') => ({
  score: 40, userName, userAvatar: '🦊', userId: 'user_legacy', date: serverTimestamp(), grade: 6,
});
const legacyUser = () => ({
  userId: 'user_legacy', name: 'נועה', avatar: '🦊', grade: 5, deviceId: 'device_1', lastSeen: serverTimestamp(), createdAt: 1700000000000,
});

before(async () => {
  setLogLevel('error');
  env = await initializeTestEnvironment({
    projectId: PROJECT_ID,
    firestore: { rules: fs.readFileSync(path.join(ROOT, RULES_FILE), 'utf8') },
  });
});

after(async () => { if (env) await env.cleanup(); });

beforeEach(async () => {
  await env.clearFirestore();
  // seed data with rules disabled (what already exists in production)
  await env.withSecurityRulesDisabled(async (ctx) => {
    const db = ctx.firestore();
    await setDoc(doc(db, 'admins/admin-uid'), { note: 'created in console' });
    await setDoc(doc(db, 'devices/kid-b/profiles/user_b'), { ...profileDoc(), updatedAt: Timestamp.now() });
    await setDoc(doc(db, 'records/quiz-hebrew_g3'), { score: 50, tag: 'כלב 12', avatar: '🐶', ownerUid: 'kid-b', grade: 3, date: Timestamp.now() });
    await setDoc(doc(db, 'records/quiz-hebrew'), { score: 70, userName: 'דני', userAvatar: '🦁', userId: 'u', date: Timestamp.now() });
    await setDoc(doc(db, 'users/device_1_user_legacy'), { ...legacyUser(), lastSeen: Timestamp.now() });
    await setDoc(doc(db, 'progress/device_1_user_legacy'), { userId: 'user_legacy', userName: 'נועה', deviceId: 'device_1', stars: 5, streak: 1, achievements: [], gamesPlayed: 3, quizAttempts: {}, lastUpdated: Timestamp.now() });
  });
});

console.log(`Testing ${RULES_FILE} (${FINAL ? 'final' : 'transition'})`);

// =====================================================================
describe('app payload contract', () => {
  test('profile document never contains the real name', () => {
    const d = profileDoc();
    if ('name' in d || 'userName' in d) throw new Error('name leaked into profile doc');
    if (!d.tag || d.tag.includes('נועה')) throw new Error('tag must be generated, not the name');
  });
  test('production host list excludes staging channels', () => {
    if (!Cloud.isProductionHost('brainxiq.com')) throw new Error('prod host missing');
    if (Cloud.isProductionHost('brainx-a65b8--staging-abc123.web.app')) throw new Error('staging treated as production');
    if (Cloud.isProductionHost('ohadperets.github.io')) throw new Error('GitHub Pages treated as production');
  });
});

// =====================================================================
describe('private profiles: devices/{uid}/profiles/{id}', () => {
  test('owner can create, read, update and delete its own profile', async () => {
    const db = kid('kid-a');
    const ref = doc(db, 'devices/kid-a/profiles/user_1');
    await assertSucceeds(setDoc(ref, profileDoc()));
    await assertSucceeds(getDoc(ref));
    await assertSucceeds(setDoc(ref, profileDoc({}, { stars: 20 })));
    await assertSucceeds(deleteDoc(ref));
  });

  test('another device cannot read, write or delete someone else\'s profile', async () => {
    const db = kid('kid-a');
    const ref = doc(db, 'devices/kid-b/profiles/user_b');
    await assertFails(getDoc(ref));
    await assertFails(setDoc(ref, profileDoc()));
    await assertFails(deleteDoc(ref));
    await assertFails(getDocs(collection(db, 'devices/kid-b/profiles')));
  });

  test('unauthenticated users cannot touch profiles', async () => {
    const db = nobody();
    await assertFails(getDoc(doc(db, 'devices/kid-b/profiles/user_b')));
    await assertFails(setDoc(doc(db, 'devices/kid-b/profiles/x'), profileDoc()));
  });

  test('a real name (or any extra field) is rejected', async () => {
    const db = kid('kid-a');
    await assertFails(setDoc(doc(db, 'devices/kid-a/profiles/user_1'), { ...profileDoc(), name: 'נועה' }));
    await assertFails(setDoc(doc(db, 'devices/kid-a/profiles/user_1'), { ...profileDoc(), email: 'a@b.c' }));
  });

  test('invalid values are rejected', async () => {
    const db = kid('kid-a');
    const ref = doc(db, 'devices/kid-a/profiles/user_1');
    await assertFails(setDoc(ref, { ...profileDoc(), grade: 5 }));
    await assertFails(setDoc(ref, { ...profileDoc(), stars: -1 }));
    await assertFails(setDoc(ref, { ...profileDoc(), stars: 1.5 }));
    await assertFails(setDoc(ref, { ...profileDoc(), tag: 'x'.repeat(25) }));
    await assertFails(setDoc(ref, { ...profileDoc(), tag: '' }));
    await assertFails(setDoc(ref, { ...profileDoc(), achievements: 'all' }));
    await assertFails(setDoc(ref, { ...profileDoc(), quizAttempts: { hebrew: 1, english: 1, math: 1, history: 1 } }));
    await assertFails(setDoc(ref, { ...profileDoc(), updatedAt: Timestamp.fromDate(new Date('2020-01-01')) }));
    await assertFails(setDoc(doc(db, 'devices/kid-a/profiles/bad id with spaces'), profileDoc()));
  });

  test('a device cannot write into another device\'s subtree even with a valid document', async () => {
    await assertFails(setDoc(doc(kid('kid-a'), 'devices/kid-c/profiles/user_1'), profileDoc()));
  });
});

// =====================================================================
describe('admin access', () => {
  test('admin (Google + allowlist) can list every profile and legacy data', async () => {
    const db = admin();
    await assertSucceeds(getDocs(collectionGroup(db, 'profiles')));
    await assertSucceeds(getDoc(doc(db, 'devices/kid-b/profiles/user_b')));
    await assertSucceeds(getDocs(collection(db, 'users')));
    await assertSucceeds(getDocs(collection(db, 'progress')));
  });

  test('children and strangers cannot list profiles', async () => {
    await assertFails(getDocs(collectionGroup(kid('kid-a'), 'profiles')));
    await assertFails(getDocs(collectionGroup(googleNotAdmin(), 'profiles')));
    await assertFails(getDocs(collectionGroup(nobody(), 'profiles')));
  });

  test('admin uid signed in anonymously is NOT admin', async () => {
    await assertFails(getDocs(collectionGroup(anonWithAdminUid(), 'profiles')));
    await assertFails(getDocs(collection(anonWithAdminUid(), 'users')));
  });

  test('admin cannot modify or delete children\'s profiles', async () => {
    const db = admin();
    await assertFails(setDoc(doc(db, 'devices/kid-b/profiles/user_b'), profileDoc()));
    await assertFails(deleteDoc(doc(db, 'devices/kid-b/profiles/user_b')));
  });

  test('admin allowlist: readable only by its owner, writable by no client', async () => {
    await assertSucceeds(getDoc(doc(admin(), 'admins/admin-uid')));
    await assertFails(getDoc(doc(kid('kid-a'), 'admins/admin-uid')));
    await assertFails(setDoc(doc(kid('kid-a'), 'admins/kid-a'), { note: 'me' }));
    await assertFails(setDoc(doc(googleNotAdmin(), 'admins/google-stranger'), { note: 'me' }));
    await assertFails(setDoc(doc(admin(), 'admins/someone-else'), { note: 'x' }));
    await assertFails(deleteDoc(doc(admin(), 'admins/admin-uid')));
  });
});

// =====================================================================
describe('public records', () => {
  test('anyone can read records', async () => {
    await assertSucceeds(getDoc(doc(nobody(), 'records/quiz-hebrew_g3')));
    await assertSucceeds(getDoc(doc(kid('kid-a'), 'records/quiz-hebrew')));
  });

  test('a signed-in device can set a new record with the app\'s document', async () => {
    const db = kid('kid-a');
    await assertSucceeds(setDoc(doc(db, 'records/memory-math_g3'), recordDoc('kid-a', { score: 12 })));
    await assertSucceeds(setDoc(doc(db, 'records/quiz-hebrew_g3'), recordDoc('kid-a', { score: 90 })));   // higher than 50
  });

  test('records can only go up', async () => {
    await assertFails(setDoc(doc(kid('kid-a'), 'records/quiz-hebrew_g3'), recordDoc('kid-a', { score: 40 })));
    await assertFails(setDoc(doc(kid('kid-a'), 'records/quiz-hebrew_g3'), recordDoc('kid-a', { score: 50 })));
  });

  test('records reject spoofed owner, wrong grade, extra fields and bad types', async () => {
    const db = kid('kid-a');
    await assertFails(setDoc(doc(db, 'records/new-game_g3'), recordDoc('kid-b')));                           // ownerUid spoof
    await assertFails(setDoc(doc(db, 'records/new-game_g6'), recordDoc('kid-a', { grade: 3 })));             // suffix mismatch
    await assertFails(setDoc(doc(db, 'records/new-game'), recordDoc('kid-a')));                             // v2 needs _gN
    await assertFails(setDoc(doc(db, 'records/new-game_g3'), recordDoc('kid-a', { userName: 'נועה' })));   // name field
    await assertFails(setDoc(doc(db, 'records/new-game_g3'), recordDoc('kid-a', { score: '99' })));
    await assertFails(setDoc(doc(db, 'records/new-game_g3'), recordDoc('kid-a', { score: 9999999 })));
    await assertFails(setDoc(doc(db, 'records/New_Game_g3'), recordDoc('kid-a')));                          // id format
    await assertFails(setDoc(doc(db, 'records/new-game_g3'), { ...recordDoc('kid-a'), date: Timestamp.fromDate(new Date('2020-01-01')) }));
  });

  test('nobody can delete records', async () => {
    await assertFails(deleteDoc(doc(kid('kid-b'), 'records/quiz-hebrew_g3')));
    await assertFails(deleteDoc(doc(admin(), 'records/quiz-hebrew_g3')));
    await assertFails(deleteDoc(doc(nobody(), 'records/quiz-hebrew_g3')));
  });

  test('legacy (signed-out) record writes: initial only, and only during the transition', async () => {
    const db = nobody();
    const write = setDoc(doc(db, 'records/spelling-english_g6'), legacyRecord('נ.'));
    if (FINAL) await assertFails(write); else await assertSucceeds(write);
    await assertFails(setDoc(doc(db, 'records/spelling-english2_g6'), legacyRecord('נועה כהן')));   // full name never
  });
});

// =====================================================================
describe('legacy collections users/ and progress/', () => {
  test('children\'s legacy data is not publicly readable', async () => {
    await assertFails(getDoc(doc(nobody(), 'users/device_1_user_legacy')));
    await assertFails(getDocs(collection(nobody(), 'users')));
    await assertFails(getDocs(collection(kid('kid-a'), 'progress')));
    await assertFails(getDocs(collection(googleNotAdmin(), 'users')));
  });

  test('legacy data cannot be deleted from a client', async () => {
    await assertFails(deleteDoc(doc(nobody(), 'users/device_1_user_legacy')));
    await assertFails(deleteDoc(doc(admin(), 'progress/device_1_user_legacy')));
  });

  test('old app versions can still sync during the transition only', async () => {
    const write = setDoc(doc(nobody(), 'users/device_2_user_x'), legacyUser());
    if (FINAL) await assertFails(write); else await assertSucceeds(write);
  });

  test('legacy writes with junk fields are rejected', async () => {
    await assertFails(setDoc(doc(nobody(), 'users/device_3_user_y'), { ...legacyUser(), isAdmin: true }));
  });
});

// =====================================================================
describe('everything else is closed', () => {
  test('unknown collections are denied for everyone, including the admin', async () => {
    for (const db of [nobody(), kid('kid-a'), admin()]) {
      await assertFails(getDoc(doc(db, 'secrets/x')));
      await assertFails(setDoc(doc(db, 'secrets/x'), { a: 1 }));
    }
  });
});
