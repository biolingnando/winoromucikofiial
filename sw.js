// KODE SERVICE WORKER WINORO MUSIC (100% OFFLINE)
const CACHE_NAME = 'winoro-offline-v4';
const ASSETS = [
    './',
    './index.html',
    'https://cdn.tailwindcss.com',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://i.ibb.co.com/1GybrRmh/Gemini-Generated-Image-hpi0l3hpi0l3hpi0.png'
];

// Proses Instalasi & Menyimpan Data
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Menyimpan data aplikasi offline...');
            return cache.addAll(ASSETS);
        })
        .then(() => self.skipWaiting())
    );
});

// Proses Aktivasi & Pembersihan Cache Lama
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map(key => {
                if (key !== CACHE_NAME) {
                    console.log('Menghapus data offline lama...');
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

// Proses Pengambilan Data (Sistem Anti Layar Putih)
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            // Jika ada sinyal, ambil dari internet dan perbarui cache
            return cachedResponse || fetch(event.request).then(response => {
                const responseClone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
                return response;
            }).catch(() => {
                // JIKA TIDAK ADA SINYAL INTERNET SAMA SEKALI
                // Paksa buka index.html dari penyimpanan HP (Offline Mode)
                if (event.request.mode === 'navigate') {
                    return caches.match('./index.html');
                }
            });
        })
    );
});
