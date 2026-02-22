/**
 * BrainX Backend API
 * Firebase Cloud Functions with Express
 */

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

// Initialize Firebase Admin
admin.initializeApp();
const db = admin.firestore();

// Create Express app
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// ============= CONTENT API =============

/**
 * GET /api/data/:grade
 * Returns lesson data for a specific grade
 */
app.get('/api/data/:grade', async (req, res) => {
  try {
    const grade = parseInt(req.params.grade);
    if (isNaN(grade) || grade < 1 || grade > 6) {
      return res.status(400).json({ error: 'Invalid grade. Must be 1-6.' });
    }

    const doc = await db.collection('content').doc(`grade${grade}`).get();
    
    if (!doc.exists) {
      return res.status(404).json({ error: `Content for grade ${grade} not found` });
    }

    res.json(doc.data());
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * GET /api/tips
 * Returns daily tips
 */
app.get('/api/tips', async (req, res) => {
  try {
    const doc = await db.collection('content').doc('tips').get();
    
    if (!doc.exists) {
      return res.json({ tips: [] });
    }

    res.json(doc.data());
  } catch (error) {
    console.error('Error fetching tips:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ============= USER API =============

/**
 * POST /api/users/sync
 * Sync user data to cloud
 */
app.post('/api/users/sync', async (req, res) => {
  try {
    const { deviceId, userId, name, avatar, grade, createdAt } = req.body;

    if (!deviceId || !userId) {
      return res.status(400).json({ error: 'deviceId and userId are required' });
    }

    const docId = `${deviceId}_${userId}`;
    await db.collection('users').doc(docId).set({
      userId,
      name: name || 'Unknown',
      avatar: avatar || '👤',
      grade: grade || 5,
      deviceId,
      createdAt: createdAt || new Date().toISOString(),
      lastSeen: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    res.json({ success: true, docId });
  } catch (error) {
    console.error('Error syncing user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * GET /api/users/:deviceId
 * Get all users for a device
 */
app.get('/api/users/:deviceId', async (req, res) => {
  try {
    const { deviceId } = req.params;
    
    const snapshot = await db.collection('users')
      .where('deviceId', '==', deviceId)
      .get();

    const users = [];
    snapshot.forEach(doc => users.push({ id: doc.id, ...doc.data() }));

    res.json({ users });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ============= PROGRESS API =============

/**
 * POST /api/progress/sync
 * Sync user progress to cloud
 */
app.post('/api/progress/sync', async (req, res) => {
  try {
    const { 
      deviceId, 
      userId, 
      userName,
      stars, 
      streak, 
      achievements, 
      gamesPlayed,
      quizAttempts,
      subjectProgress
    } = req.body;

    if (!deviceId || !userId) {
      return res.status(400).json({ error: 'deviceId and userId are required' });
    }

    const docId = `${deviceId}_${userId}`;
    await db.collection('progress').doc(docId).set({
      userId,
      userName: userName || 'Unknown',
      deviceId,
      stars: stars || 0,
      streak: streak || 0,
      achievements: achievements || [],
      gamesPlayed: gamesPlayed || 0,
      quizAttempts: quizAttempts || { hebrew: 0, english: 0, math: 0 },
      subjectProgress: subjectProgress || {},
      lastUpdated: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    res.json({ success: true, docId });
  } catch (error) {
    console.error('Error syncing progress:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * GET /api/progress/:deviceId/:userId
 * Get progress for a specific user
 */
app.get('/api/progress/:deviceId/:userId', async (req, res) => {
  try {
    const { deviceId, userId } = req.params;
    const docId = `${deviceId}_${userId}`;
    
    const doc = await db.collection('progress').doc(docId).get();

    if (!doc.exists) {
      return res.json({ progress: null });
    }

    res.json({ progress: doc.data() });
  } catch (error) {
    console.error('Error fetching progress:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ============= LEADERBOARD API =============

/**
 * GET /api/leaderboard
 * Get top players by stars
 */
app.get('/api/leaderboard', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    
    const snapshot = await db.collection('progress')
      .orderBy('stars', 'desc')
      .limit(limit)
      .get();

    const leaderboard = [];
    snapshot.forEach(doc => {
      const data = doc.data();
      leaderboard.push({
        userId: data.userId,
        userName: data.userName,
        stars: data.stars || 0,
        streak: data.streak || 0,
        gamesPlayed: data.gamesPlayed || 0
      });
    });

    res.json({ leaderboard });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ============= ADMIN API =============

/**
 * GET /api/admin/analytics
 * Get analytics data for admin dashboard
 */
app.get('/api/admin/analytics', async (req, res) => {
  try {
    // Fetch all users
    const usersSnapshot = await db.collection('users').get();
    const users = {};
    usersSnapshot.forEach(doc => {
      users[doc.id] = doc.data();
    });

    // Fetch all progress
    const progressSnapshot = await db.collection('progress').get();
    const progressList = [];
    let totalStars = 0;
    let totalGames = 0;
    let totalQuizzes = 0;

    progressSnapshot.forEach(doc => {
      const data = doc.data();
      progressList.push(data);
      totalStars += data.stars || 0;
      totalGames += data.gamesPlayed || 0;
      totalQuizzes += (data.quizAttempts?.hebrew || 0) + 
                     (data.quizAttempts?.english || 0) + 
                     (data.quizAttempts?.math || 0);
    });

    // Sort by stars descending
    progressList.sort((a, b) => (b.stars || 0) - (a.stars || 0));

    res.json({
      stats: {
        totalUsers: progressList.length,
        totalStars,
        totalGames,
        totalQuizzes
      },
      users,
      progressList
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ============= DAILY CHALLENGE API =============

/**
 * GET /api/daily-challenge
 * Get today's daily challenge
 */
app.get('/api/daily-challenge', async (req, res) => {
  try {
    const today = new Date().toISOString().split('T')[0];
    const grade = parseInt(req.query.grade) || 5;
    
    // Generate consistent questions for today
    const doc = await db.collection('content').doc(`grade${grade}`).get();
    
    if (!doc.exists) {
      return res.status(404).json({ error: 'Content not found' });
    }

    const data = doc.data();
    const subjects = ['hebrew', 'english', 'math'];
    const questions = [];

    // Use date as seed for consistent random selection
    const seed = today.split('-').reduce((a, b) => a + parseInt(b), 0);
    
    subjects.forEach((subject, subjectIndex) => {
      if (data[subject]?.quizzes) {
        const allQuizzes = data[subject].quizzes;
        // Pick based on seed
        const quizIndex = (seed + subjectIndex) % allQuizzes.length;
        if (allQuizzes[quizIndex]?.questions) {
          const qIndex = (seed + subjectIndex) % allQuizzes[quizIndex].questions.length;
          questions.push({
            ...allQuizzes[quizIndex].questions[qIndex],
            subject
          });
        }
      }
    });

    res.json({ 
      date: today, 
      questions,
      grade 
    });
  } catch (error) {
    console.error('Error fetching daily challenge:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * POST /api/daily-challenge/submit
 * Submit daily challenge results
 */
app.post('/api/daily-challenge/submit', async (req, res) => {
  try {
    const { deviceId, userId, date, score, totalQuestions } = req.body;

    if (!deviceId || !userId || !date) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const docId = `${deviceId}_${userId}_${date}`;
    await db.collection('dailyChallenges').doc(docId).set({
      deviceId,
      userId,
      date,
      score: score || 0,
      totalQuestions: totalQuestions || 3,
      completedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Error submitting daily challenge:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Export the Express app as a Firebase Function
exports.api = functions.https.onRequest(app);
