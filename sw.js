// Mon Carnet Coran – cache local des fichiers de l'application.
// Les séances, erreurs et sauvegardes ne sont jamais envoyées vers ce service worker.
const CACHE='mon-carnet-coran-v21-gh-20261126';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(names=>Promise.all(names.filter(name=>name.startsWith('mon-carnet-coran-')&&name!==CACHE).map(name=>caches.delete(name)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET'||new URL(req.url).origin!==self.location.origin)return;
  event.respondWith(fetch(req).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(req,copy)).catch(()=>{});}
    return response;
  }).catch(()=>caches.match(req).then(saved=>saved||(req.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});
