const staticCacheName = 'ChinmayVivek-static-v1.7';
const assets = [
    "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/js/app.js",
  "/assets/img/profile-img.webp",
  "/assets/img/portfolio/e-com-1.webp",
  "/assets/img/portfolio/tulasi-sansthan.jpg",
  "/assets/img/portfolio/e-com-2.webp",
  "/assets/img/portfolio/POS.webp"
];
// install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
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
