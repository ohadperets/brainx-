/**
 * Migration Script - Upload data.js content to Firestore
 * Run once: node scripts/migrate-data.js
 */

const admin = require('firebase-admin');
const path = require('path');

// Initialize Firebase Admin with service account
const serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// Import data from data.js
// We need to read data.js and extract the data objects
const fs = require('fs');

// Read data.js and eval to get the objects (temporary for migration)
const dataJsContent = fs.readFileSync(path.join(__dirname, '../public/data.js'), 'utf8');

// Create a sandbox to safely evaluate data.js
const vm = require('vm');
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(dataJsContent, sandbox);

const APP_DATA = sandbox.APP_DATA;
const APP_DATA_GRADE2 = sandbox.APP_DATA_GRADE2;

async function migrateData() {
  console.log('Starting data migration...');

  try {
    // Upload Grade 5 data
    console.log('Uploading Grade 5 data...');
    await db.collection('content').doc('grade5').set({
      grade: 5,
      tips: APP_DATA.tips,
      hebrew: APP_DATA.hebrew,
      english: APP_DATA.english,
      math: APP_DATA.math,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log('✅ Grade 5 data uploaded');

    // Upload Grade 2 data
    console.log('Uploading Grade 2 data...');
    await db.collection('content').doc('grade2').set({
      grade: 2,
      tips: APP_DATA_GRADE2.tips,
      hebrew: APP_DATA_GRADE2.hebrew,
      english: APP_DATA_GRADE2.english,
      math: APP_DATA_GRADE2.math,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log('✅ Grade 2 data uploaded');

    // Upload tips separately for quick access
    console.log('Uploading tips...');
    await db.collection('content').doc('tips').set({
      grade5: APP_DATA.tips,
      grade2: APP_DATA_GRADE2.tips,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });
    console.log('✅ Tips uploaded');

    console.log('');
    console.log('🎉 Migration completed successfully!');

  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }

  process.exit(0);
}

migrateData();
