const CACHE_NAME = 'chinmayvivek-v1';
const STATIC_CACHE = 'static-cache-v1';
const DYNAMIC_CACHE = 'dynamic-cache-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/styles/css/main.min.css',
  '/assets/js/particles.js',
  '/assets/js/main.js',
  '/assets/img/hero-bg.jpg',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js',
  'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js',
  '/assets/img/icons/android-icon-192x192.png',
  '/assets/img/icons/android-icon-144x144.png',
  '/assets/img/icons/android-icon-96x96.png',
  '/assets/img/icons/android-icon-72x72.png',
  '/assets/img/icons/android-icon-48x48.png',
  '/assets/img/icons/android-icon-36x36.png'
];

// Cache size limit
const CACHE_SIZE_LIMIT = 50;

// Install event - cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(keys => {
        return Promise.all(
          keys.filter(key => {
            return key !== STATIC_CACHE && key !== DYNAMIC_CACHE;
          }).map(key => {
            console.log('Deleting old cache:', key);
            return caches.delete(key);
          })
        );
      }),
      self.clients.claim()
    ])
  );
});

// Helper function to limit cache size
async function trimCache(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  if (keys.length > maxItems) {
    await cache.delete(keys[0]);
    await trimCache(cacheName, maxItems);
  }
}

// Fetch event - network first with cache fallback strategy
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin) && !event.request.url.startsWith('https://cdn.')) {
    return;
  }

  // Handle static assets
  if (STATIC_ASSETS.includes(event.request.url) || event.request.url.includes('/assets/')) {
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
    return;
  }

  // Network first with cache fallback for other requests
  event.respondWith(
    fetch(event.request)
      .then(async response => {
        const cache = await caches.open(DYNAMIC_CACHE);
        cache.put(event.request, response.clone());
        await trimCache(DYNAMIC_CACHE, CACHE_SIZE_LIMIT);
        return response;
      })
      .catch(() => {
        return caches.match(event.request)
          .then(response => {
            if (response) {
              return response;
            }
            // Return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }
            return new Response('Offline content not available');
          });
      })
  );
});

// Handle service worker updates
self.addEventListener('message', event => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});


/// const dynamicCacheName = 'ChinmayVivek-dynamic-v1';
/// / activate event
/// elf.addEventListener('activate', evt => {
///  evt.waitUntil(
///    caches.keys().then(keys => {
///      return Promise.all(keys
///        .filter(key =>  key !== dynamicCacheName)
///        .map(key => caches.delete(key))
///      );
///    })
///  );
/// );
/// / fetch event
/// elf.addEventListener('fetch', evt => {
///  evt.respondWith(
///    caches.match(evt.request).then(cacheRes => {
///      return cacheRes || fetch(evt.request).then(fetchRes => {
///        return caches.open(dynamicCacheName).then(cache => {
///          cache.put(evt.request.url, fetchRes.clone());
///          return fetchRes;
///        })
///      });
///    })
///  );
/// );
