const CACHE = 'glamkart-v1';
const ASSETS = [
  '/glamkart-site/',
  '/glamkart-site/index.html',
  '/glamkart-site/manifest.json'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match('/glamkart-site/index.html')))
  );
});
