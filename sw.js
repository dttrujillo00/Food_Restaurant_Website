let CACHE_NAME = 'Food_Taste';
let filesToCache = [
    '/',
    '/index.html',
    '/main.js',
    '/style.css',
    '/fonts/Poppins-Regular.ttf',
    '/images',
    '/images/',
    '/images/about.jpg',
    '/images/delivery.jpg',
    '/images/home.jpg',
    '/images/menu1.jpg',
    '/images/menu2.jpg',
    '/images/menu2192x192.png',
    '/images/menu2512x512.png',
    '/images/menu3.jpg',
    '/images/order.jpg',
    '/images/shipping.jpg'
];




self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        (async() => {
            try {
                caches.open(CACHE_NAME)
                .then( (cache) => cache.addAll(filesToCache))
                
            } catch (error) {
                console.log("error occured while caching...")
            }

        })()
    )
})

self.addEventListener('fetch', (e) => {
    console.log('[Servicio Worker] Recurso obtenido ' + e.request.url);

    e.respondWith(
        caches.match(e.request)
        .then( (r) => {
            return r || fetch(e.request).then( (response) => {
                return caches.open(CACHE_NAME).then( (cache) => {
                    cache.put(e.request, response.clone());
                    return response
                });
            });
        })
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys()
        .then( keyList => {
            return Promise.all(keyList.map( key => {
                if(key !== CACHE_NAME){
                    return caches.delete(key);
                }
            }))
        })
    )
})