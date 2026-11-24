#!/usr/bin/env node
// BrainX legacy-data migration (run by the owner, on their own computer, after the transition window).
//
// What it does (phase 4 of the migration plan in GOOGLE_PLAY_READINESS.md):
//   1. records/*      — records saved by old app versions carry userName/userId: replace them with a
//                       generated nickname ("tag") + avatar, drop userName/userId.
//   2. users/*, progress/* — legacy per-child documents that contain names: optionally back up to a
//                       local file you choose, then delete. New app versions store a nameless private
//                       copy under devices/{uid}/profiles instead.
//
// SAFE BY DEFAULT: without --apply it only prints what it would do.
//
// Setup (free): Firebase console → Project settings → Service accounts → Generate new private key.
// Keep that JSON OUTSIDE this repo (it is a full-access credential), then:
//   npm install
//   GOOGLE_APPLICATION_CREDENTIALS=/path/outside/repo/key.json node tools/migrate-legacy.mjs            # dry run
//   GOOGLE_APPLICATION_CREDENTIALS=... node tools/migrate-legacy.mjs --apply --backup ~/brainx-legacy.json
//   GOOGLE_APPLICATION_CREDENTIALS=... node tools/migrate-legacy.mjs --apply --no-backup
// Admin credentials bypass security rules — that is why this runs locally, never in the app.

import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const Cloud = require(path.join(ROOT, 'core/cloud.js'));

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const backupIdx = args.indexOf('--backup');
const BACKUP = backupIdx >= 0 ? args[backupIdx + 1] : null;
const NO_BACKUP = args.includes('--no-backup');

if (APPLY && !BACKUP && !NO_BACKUP) {
  console.error('With --apply, choose --backup <file outside the repo> or --no-backup.');
  process.exit(1);
}
if (BACKUP && path.resolve(BACKUP).startsWith(ROOT)) {
  console.error('Refusing to write a backup of children\'s data inside the repository folder.');
  process.exit(1);
}
if (!process.env.GOOGLE_APPLICATION_CREDENTIALS) {
  console.error('Set GOOGLE_APPLICATION_CREDENTIALS to your service-account key file (kept outside the repo).');
  process.exit(1);
}

const { initializeApp, applicationDefault } = await import('firebase-admin/app');
const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
initializeApp({ credential: applicationDefault(), projectId: 'brainx-a65b8' });
const db = getFirestore();

console.log(APPLY ? '⚠️  APPLY mode — changes will be written' : 'Dry run — nothing will be changed (add --apply)');

// 1) records: replace names with a generated nickname
const records = await db.collection('records').get();
const legacyRecords = records.docs.filter(d => !d.data().tag);
console.log(`records: ${records.size} total, ${legacyRecords.length} still carry a name`);
for (const d of legacyRecords) {
  const r = d.data();
  const update = {
    tag: Cloud.makeTag(r.userAvatar),
    avatar: r.userAvatar || '😎',
    userName: FieldValue.delete(),
    userId: FieldValue.delete(),
  };
  console.log(`  ${d.id}: "${r.userName}" → "${update.tag}"`);
  if (APPLY) await d.ref.update(update);
}

// 2) legacy users/progress
const users = await db.collection('users').get();
const progress = await db.collection('progress').get();
console.log(`legacy users: ${users.size}, legacy progress: ${progress.size}`);
if (APPLY) {
  if (BACKUP) {
    const dump = {
      exportedAt: new Date().toISOString(),
      users: users.docs.map(d => ({ id: d.id, ...d.data() })),
      progress: progress.docs.map(d => ({ id: d.id, ...d.data() })),
    };
    fs.writeFileSync(BACKUP, JSON.stringify(dump, null, 2), { mode: 0o600 });
    console.log(`  backup written to ${BACKUP} (contains children's names — delete it when no longer needed)`);
  }
  const all = [...users.docs, ...progress.docs];
  for (let i = 0; i < all.length; i += 400) {
    const batch = db.batch();
    all.slice(i, i + 400).forEach(d => batch.delete(d.ref));
    await batch.commit();
  }
  console.log(`  deleted ${all.length} legacy documents`);
}
console.log('done');
