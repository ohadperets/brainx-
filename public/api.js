/**
 * BrainX API Service
 * Handles communication with the backend
 */

const API = {
  baseUrl: '/api',
  
  // Cache for offline support
  cache: new Map(),
  
  /**
   * Generic fetch wrapper with error handling and caching
   */
  async fetch(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const cacheKey = `${options.method || 'GET'}_${url}`;
    
    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers
        },
        ...options
      });
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Cache successful GET responses
      if (!options.method || options.method === 'GET') {
        this.cache.set(cacheKey, data);
        localStorage.setItem(`api_cache_${cacheKey}`, JSON.stringify(data));
      }
      
      return data;
    } catch (error) {
      console.error(`API Error (${endpoint}):`, error);
      
      // Try to return cached data for GET requests
      if (!options.method || options.method === 'GET') {
        const cached = this.cache.get(cacheKey) || 
                      JSON.parse(localStorage.getItem(`api_cache_${cacheKey}`) || 'null');
        if (cached) {
          console.log('Returning cached data for:', endpoint);
          return cached;
        }
      }
      
      throw error;
    }
  },
  
  // ============= CONTENT API =============
  
  /**
   * Get lesson data for a grade
   */
  async getData(grade) {
    return this.fetch(`/data/${grade}`);
  },
  
  /**
   * Get daily tips
   */
  async getTips() {
    return this.fetch('/tips');
  },
  
  // ============= USER API =============
  
  /**
   * Sync user to cloud
   */
  async syncUser(userData) {
    return this.fetch('/users/sync', {
      method: 'POST',
      body: JSON.stringify(userData)
    });
  },
  
  /**
   * Get users for a device
   */
  async getUsers(deviceId) {
    return this.fetch(`/users/${deviceId}`);
  },
  
  // ============= PROGRESS API =============
  
  /**
   * Sync progress to cloud
   */
  async syncProgress(progressData) {
    return this.fetch('/progress/sync', {
      method: 'POST',
      body: JSON.stringify(progressData)
    });
  },
  
  /**
   * Get progress for a user
   */
  async getProgress(deviceId, userId) {
    return this.fetch(`/progress/${deviceId}/${userId}`);
  },
  
  // ============= LEADERBOARD API =============
  
  /**
   * Get leaderboard
   */
  async getLeaderboard(limit = 10) {
    return this.fetch(`/leaderboard?limit=${limit}`);
  },
  
  // ============= ADMIN API =============
  
  /**
   * Get analytics data
   */
  async getAnalytics() {
    return this.fetch('/admin/analytics');
  },
  
  // ============= DAILY CHALLENGE API =============
  
  /**
   * Get today's daily challenge
   */
  async getDailyChallenge(grade) {
    return this.fetch(`/daily-challenge?grade=${grade}`);
  },
  
  /**
   * Submit daily challenge results
   */
  async submitDailyChallenge(data) {
    return this.fetch('/daily-challenge/submit', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
};

// Export for use in app.js
window.API = API;
