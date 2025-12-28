// Este código obliga al navegador a eliminar el Service Worker previo
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) => {
      for (let name of names) caches.delete(name);
    }).then(() => self.clients.claim())
  );
});