importScripts('./ngsw-worker.js');

(function () {
    'use strict';

    self.addEventListener('offline', () => function() {
        console.log("seb offline");
    })

    // Add custom notification click handler
    self.addEventListener('notificationclick', (event) => {
        console.log('Custom notification click handler');
        console.log('Notification details:', event.notification);

        // Handle notification click - open URL if provided
        if (clients.openWindow && event.notification.data.url) {
            event.waitUntil(clients.openWindow(event.notification.data.url));
            console.log('Opening URL:', event.notification.data.url);
        }
    });

    // Add custom background sync handler
    self.addEventListener('sync', (event) => {
        console.log('Custom background sync handler');

        if (event.tag === 'background-sync') {
            event.waitUntil(doBackgroundSync());
        }
    });

    function doBackgroundSync() {
        // Implement your background sync logic here
        return fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => console.log('Background sync completed:', data))
            .catch(error => console.error('Background sync failed:', error));
    }

    self.addEventListener('fetch', function (event) {
        event.responseWith(
            fetch(event.request).catch(function() {
                return chaches.match(event.request)
            })
        )
    });

    // // INSTALL: Cache basic app shell
    // self.addEventListener('install', (event) => {
    //     console.log('[Service Worker] Installing...');
    //     event.waitUntil(
    //         caches.open(CACHE_NAME).then(cache => {
    //             console.log('[Service Worker] Pre-caching app shell');
    //             return cache.addAll(ASSETS_TO_CACHE);
    //         })
    //     );
    // });

    // // ACTIVATE: Clean up old caches
    // self.addEventListener('activate', (event) => {
    //     console.log('[Service Worker] Activating...');
    //     event.waitUntil(
    //         caches.keys().then(keys =>
    //             Promise.all(keys.filter(k => k !== CACHE_NAME && k !== API_CACHE)
    //                 .map(k => caches.delete(k)))
    //         )
    //     );
    // });

    // // FETCH: Intercept network requests
    // self.addEventListener('fetch', (event) => {
    //     const request = event.request;

    //     // Example: Intercept API requests
    //     if (request.url.includes('/')) {
    //         event.respondWith(
    //             fetch(request)
    //                 .then(response => {
    //                     // Clone and cache the response
    //                     const cloned = response.clone();
    //                     caches.open(API_CACHE).then(cache => cache.put(request, cloned));
    //                     return response;
    //                 })
    //                 .catch(() => {
    //                     // Return cached response when offline
    //                     return caches.match(request);
    //                 })
    //         );
    //         return;
    //     }
    // })();
})