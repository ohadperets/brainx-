// ===== SERVICE WORKER — Offline Support =====

importScripts('/version.js');
const CACHE_NAME = `brainx-v${APP_VERSION}`;
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/theme.css',
  '/app.js',
  '/version.js',
  '/core/timers.js',
  '/core/feedback.js',
  '/core/game-kit.js',
  '/core/rewards.js',
  '/data.js',
  '/content-imports.js',
  '/manifest.json',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg',
  '/icons/icon-192.png',
  '/icons/apple-touch-icon.png'
];

// Install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch
// - The app's own pages/code/data (same origin: HTML, JS, CSS, JSON): NETWORK FIRST, so a new
//   release is used on the first open; falls back to the cache when offline.
// - Everything else (icons, fonts, images): CACHE FIRST.
function isAppShell(url, request) {
  if (url.origin !== self.location.origin) return false;
  if (request.mode === 'navigate') return true;
  return /\.(html|js|css|json)$/.test(url.pathname) || url.pathname === '/';
}

// Google Fonts (CSS + font files) are cross-origin; cache them so the font works offline.
function isFont(url) {
  return url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
}

function putInCache(request, response) {
  const cacheable = response && response.status === 200 &&
    (response.type === 'basic' || (response.type === 'cors' && isFont(new URL(request.url))));
  if (cacheable) {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
  }
  return response;
}

self.addEventListener('fetch', event => {
  // Only handle GET requests with http/https
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;
  const url = new URL(event.request.url);

  if (isAppShell(url, event.request)) {
    event.respondWith(
      // cache: 'no-cache' revalidates with the server (304 if unchanged), bypassing the 1h HTTP cache
      // (fetch by URL: a 'navigate' request can't be re-issued with options)
      fetch(url.href, { cache: 'no-cache', credentials: 'same-origin' })
        .then(res => putInCache(event.request, res))
        .catch(() => caches.match(event.request).then(cached =>
          cached || (event.request.mode === 'navigate' ? caches.match('/index.html') : undefined)))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached =>
      cached || fetch(event.request).then(res => putInCache(event.request, res)))
  );
});
