
const NOME_CACHE_ATUAL = 'cache 1';
const RUNTIME = 'runtime';

console.log("versão do sw1" + NOME_CACHE_ATUAL);

if ('serviceWorker' in navigator) {
 console.log("entrou no sw aqui oh oh oh ");
}

// A list of local resources we always want to be cached.
const CONTEUDO_DO_CACHE = [
  './', // Alias for index.html
  'styles.css'
 // 'app.js'
];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  
  console.log("entrou no install");
  event.waitUntil(
    caches.open(NOME_CACHE_ATUAL)
      .then(cache => cache.addAll(CONTEUDO_DO_CACHE))
      .then(self.skipWaiting())
  );
});

//LIMPAR CACHE NO ACTIVATE, testar esse
self.addEventListener("activate", function(event) {
   event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          console.log("entrou na limpeza de cache");
          if (NOME_CACHE_ATUAL !== cacheName &&  cacheName.startsWith("precache")) {
            console.log("entrou na limpeza de cache 2");
            return caches.delete(cacheName);
                      
          }
        })
      );
    })
  );
});


// Serve from Cache
self.addEventListener("fetch", event => {
  console.log("entrou no fetch2");
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        console.log("fetch online");
        return response || fetch(event.request);
      })
      .catch(() => {
        console.log("fletch offline");
        return caches.match('offline.html');
      })
  )
});
