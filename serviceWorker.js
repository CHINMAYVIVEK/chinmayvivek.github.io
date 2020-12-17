const staticCacheName = 'ChinmayVivek-static-v1';
const assets = [
  
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/js/app.js",
  "/assets/vendor/bootstrap/css/bootstrap.min.css",
  "/assets/vendor/icofont/icofont.min.css",
  "/assets/vendor/boxicons/css/boxicons.min.css",
  "/assets/vendor/venobox/venobox.css",
  "/assets/vendor/owl.carousel/assets/owl.carousel.min.css",
  "/assets/vendor/aos/aos.css",
  "/assets/img/hero-bg.jpg",
  "/assets/img/profile-img.jpg",
  "/assets/img/portfolio/e-com-1.png",
  "/assets/img/portfolio/tulasi-sansthan.png",
  "/assets/img/portfolio/e-com-2.png",
  "/assets/img/portfolio/POS.png",
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


const dynamicCacheName = 'ChinmayVivek-dynamic-v1';
// activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key =>  key !== dynamicCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});
// fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).then(fetchRes => {
        return caches.open(dynamicCacheName).then(cache => {
          cache.put(evt.request.url, fetchRes.clone());
          return fetchRes;
        })
      });
    })
  );
});