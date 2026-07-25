<!-- ... existing code ... -->
    <!-- MODAL PENGATURAN (SETTINGS) -->
    <div id="settings-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center p-4">
        <div class="bg-[#0a0a0f]/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] w-full max-w-md p-6 shadow-2xl overflow-y-auto max-h-[90dvh] custom-scrollbar relative">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-black text-white"><i class="fas fa-sliders-h mr-2 dynamic-text-accent"></i> Pengaturan</h3>
                <button id="close-settings" class="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors focus:outline-none"><i class="fas fa-times"></i></button>
            </div>

            <!-- PANEL STATUS PWA OFFLINE (BARU) -->
            <div class="mb-5 bg-white/5 p-4 rounded-2xl border border-white/5">
                <p class="text-xs text-gray-400 mb-3 uppercase tracking-widest font-bold"><i class="fas fa-wifi text-emerald-400 mr-2"></i> Sistem Offline (PWA)</p>
                <div id="sw-status-panel" class="flex flex-col gap-3">
                    <div class="flex items-center gap-3 text-sm text-yellow-400 font-semibold bg-yellow-400/10 p-3 rounded-xl border border-yellow-400/20">
                        <i class="fas fa-exclamation-triangle"></i> Status: Butuh file sw.js
                    </div>
                    <button id="download-sw-btn" class="w-full text-center cursor-pointer bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-3.5 rounded-xl transition-colors border border-white/10 uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg focus:outline-none">
                        <i class="fas fa-download dynamic-text-accent"></i> Download File sw.js
                    </button>
                    <p class="text-[10px] text-gray-400 text-center leading-relaxed mt-1">Wajib diupload ke Vercel bersama index.html Anda agar aplikasi menyala total saat offline.</p>
                </div>
            </div>
            
            <div class="mb-5 bg-white/5 p-4 rounded-2xl border border-white/5">
                <p class="text-xs text-gray-400 mb-3 uppercase tracking-widest font-bold"><i class="fas fa-bolt text-yellow-400 mr-2"></i> Audio Booster</p>
<!-- ... existing code ... -->
```

```javascript:WINORO MUSIC PLAYER:index.html
<!-- ... existing code ... -->
        // Audio Elemen & Web Audio API Engine
        const audioPlayer = new Audio();
        let songs = []; 
        let currentSongIndex = 0; 
        let isPlaying = false; 

        // --- SISTEM OFFLINE (SERVICE WORKER) ---
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./sw.js').then(reg => {
                    console.log('SW Berhasil Terpasang');
                    const statusPanel = document.getElementById('sw-status-panel');
                    if(statusPanel) {
                        statusPanel.innerHTML = `
                            <div class="flex items-center gap-3 text-sm text-emerald-400 font-semibold bg-emerald-400/10 p-3.5 rounded-xl border border-emerald-400/20 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
                                <i class="fas fa-shield-alt text-lg"></i> <span>Sistem Offline 100% Aktif!</span>
                            </div>
                            <p class="text-[10px] text-gray-400 text-center mt-2">Aplikasi sudah bisa dibuka walau tanpa kuota/internet.</p>
                        `;
                    }
                }).catch(err => console.log('SW belum terpasang di Vercel', err));
            });
        }

        // --- PWA Install Logic ---
        let deferredPrompt = null;
<!-- ... existing code ... -->
