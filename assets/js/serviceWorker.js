const staticChinmayVivek = "chinmay-vivek-site-v1"
const assets = [
  "/",
  "/index.html",
  "/assets/css/style.css",
  "/assets/js/app.js",
  "/assets/img/portfolio/e-com-1.png",
  "/assets/img/portfolio/tulasi-sansthan.png",
  "/assets/img/portfolio/e-com-2.png",
  "/assets/img/portfolio/POS.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticChinmayVivek).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })