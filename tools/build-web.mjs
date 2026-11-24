#!/usr/bin/env node
// Copies the website's files into www/ — the folder Capacitor bundles into the Android app.
// One codebase: the same files Firebase Hosting serves; nothing is rewritten.
//
//   node tools/build-web.mjs        (run from the repo root; used by scripts/build-android.sh)

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'www');

// Everything the app needs at runtime (keep in sync with sw.js ASSETS + extra pages).
const FILES = [
  'index.html', 'privacy.html', 'manifest.json',
  'styles.css', 'theme.css',
  'version.js', 'data.js', 'content-imports.js', 'app.js',
];
const DIRS = ['core', 'icons'];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

let count = 0;
for (const f of FILES) {
  fs.copyFileSync(path.join(ROOT, f), path.join(OUT, f));
  count++;
}
for (const d of DIRS) {
  fs.cpSync(path.join(ROOT, d), path.join(OUT, d), { recursive: true });
  count += fs.readdirSync(path.join(ROOT, d)).length;
}

// sanity: every local <script src> / <link href> in index.html must exist in www/
const html = fs.readFileSync(path.join(OUT, 'index.html'), 'utf8');
const refs = [...html.matchAll(/(?:src|href)="([^"#?:]+\.(?:js|css|json|png|svg))"/g)].map(m => m[1]);
const missing = refs.filter(r => !fs.existsSync(path.join(OUT, r)));
if (missing.length) {
  console.error('build-web: missing files referenced by index.html:', missing.join(', '));
  process.exit(1);
}
console.log(`build-web: ${count} files → www/ (${refs.length} references checked)`);
