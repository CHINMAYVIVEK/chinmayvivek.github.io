const staticChinmayVivek = "chinmay-vivek-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/assets/img/portfolio/portfolio-1.jpg",
  "/assets/img/portfolio/portfolio-2.jpg",
  "/assets/img/portfolio/portfolio-3.jpg",
  "/assets/img/portfolio/portfolio-4.jpg",
  "/assets/img/portfolio/portfolio-5.jpg",
  "/assets/img/portfolio/portfolio-6.jpg",
  "/assets/img/portfolio/portfolio-7.jpg",
  "/assets/img/portfolio/portfolio-8.jpg",
  "/assets/img/portfolio/portfolio-9.jpg",
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