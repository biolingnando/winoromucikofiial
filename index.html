<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WINORO MUSIC PLAYER</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        :root {
            /* Tema Default (Midnight Purple) */
            --bg-1: #0f0c29;
            --bg-2: #302b63;
            --bg-3: #24243e;
            --card-bg: rgba(255, 255, 255, 0.05);
            --accent: #a855f7; /* Purple 500 */
            --text-main: #ffffff;
            --text-muted: #9ca3af;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(-45deg, var(--bg-1), var(--bg-2), var(--bg-3), var(--bg-1));
            background-size: 400% 400%;
            animation: gradientBG 15s ease infinite;
            color: var(--text-main);
        }

        @keyframes gradientBG {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        /* Elemen dengan warna dinamis */
        .dynamic-accent { color: var(--accent) !important; }
        .dynamic-bg-accent { background-color: var(--accent) !important; }
        .dynamic-border-accent { border-color: var(--accent) !important; }
        .dynamic-card { background: var(--card-bg) !important; }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.1); border-radius: 10px; }
        ::-webkit-scrollbar-thumb { background: var(--accent); border-radius: 10px; opacity: 0.5; }
        ::-webkit-scrollbar-thumb:hover { background: var(--text-main); }

        .vinyl-record {
            background: repeating-radial-gradient(#111 0%, #000 5%, #111 10%);
            box-shadow: 0 0 20px rgba(0,0,0,0.8) inset, 0 10px 25px rgba(0,0,0,0.5);
        }
        .spin { animation: spin 4s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }

        /* Range Slider */
        input[type=range] { -webkit-appearance: none; background: transparent; }
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none; height: 12px; width: 12px; border-radius: 50%;
            background: var(--accent); cursor: pointer; margin-top: -4px;
            box-shadow: 0 0 10px var(--accent); transition: transform 0.1s;
        }
        input[type=range]::-webkit-slider-thumb:hover { transform: scale(1.3); }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%; height: 4px; cursor: pointer;
            background: rgba(255, 255, 255, 0.2); border-radius: 2px;
        }

        /* Animations for Modals/Toast */
        .fade-in { animation: fadeIn 0.3s ease forwards; }
        .fade-out { animation: fadeOut 0.3s ease forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeOut { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-10px); } }
    </style>
</head>
<body class="flex items-center justify-center min-h-screen p-4 sm:p-8">

    <!-- Main App Card -->
    <div class="dynamic-card backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] p-8 w-full max-w-md min-h-[550px] sm:min-h-[600px] flex flex-col gap-8 relative overflow-hidden transition-all duration-500">
        
        <!-- Header & Hamburger Menu -->
        <div class="flex justify-between items-center relative z-20">
            <div>
                <h1 class="text-xl font-bold tracking-tight">WINORO <span class="dynamic-accent font-light">MUSIC</span></h1>
                <p class="text-[10px] opacity-70 mt-1 font-medium tracking-wide uppercase" style="color: var(--text-muted)">Offline Player</p>
            </div>
            
            <div class="relative">
                <!-- Tombol Garis 3 -->
                <button id="menu-btn" class="w-10 h-10 rounded-full flex justify-center items-center hover:bg-white/10 transition-colors border border-transparent hover:border-white/20 focus:outline-none">
                    <i class="fas fa-bars text-lg dynamic-accent"></i>
                </button>

                <!-- Dropdown Menu -->
                <div id="dropdown-menu" class="hidden absolute right-0 mt-3 w-56 bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden z-50">
                    <input type="file" id="file-input" class="hidden" webkitdirectory directory multiple>
                    <label for="file-input" class="cursor-pointer flex items-center gap-3 px-5 py-3.5 hover:bg-white/10 transition-colors text-sm font-semibold border-b border-white/10">
                        <i class="fas fa-folder-plus dynamic-accent w-5 text-base"></i> Pilih Folder Lagu
                    </label>
                    <button id="menu-playlist-btn" class="w-full text-left flex items-center gap-3 px-5 py-3.5 hover:bg-white/10 transition-colors text-sm font-semibold border-b border-white/10 focus:outline-none">
                        <i class="fas fa-list-ul dynamic-accent w-5 text-base"></i> Buka Daftar Musik
                    </button>
                    <button id="menu-settings-btn" class="w-full text-left flex items-center gap-3 px-5 py-3.5 hover:bg-white/10 transition-colors text-sm font-semibold focus:outline-none">
                        <i class="fas fa-cog dynamic-accent w-5 text-base"></i> Pengaturan Tema
                    </button>
                </div>
            </div>
        </div>

        <!-- Vinyl Record Visualization -->
        <div class="flex justify-center items-center py-4 relative z-10">
            <div id="disk-cover" class="w-52 h-52 sm:w-56 sm:h-56 rounded-full flex justify-center items-center transition-all duration-300 vinyl-record relative">
                <div class="w-16 h-16 rounded-full dynamic-bg-accent border-2 border-[#333] shadow-[0_0_15px_rgba(0,0,0,0.8)_inset] flex justify-center items-center transition-colors duration-500">
                    <div class="w-3.5 h-3.5 bg-[#111] rounded-full border border-black/50 shadow-[0_0_3px_rgba(255,255,255,0.4)_inset]"></div>
                </div>
                <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none transform -rotate-45"></div>
            </div>
        </div>

        <!-- Song Info & Player Controls -->
        <div class="flex flex-col gap-6 relative z-10 mt-2">
            <div class="text-center px-3">
                <h2 id="song-title" class="text-2xl sm:text-3xl font-black truncate drop-shadow-xl tracking-tight leading-tight">Belum ada lagu</h2>
                <p id="song-artist" class="text-[12px] sm:text-[13px] mt-2 font-bold tracking-widest uppercase opacity-80" style="color: var(--text-muted)">Pilih folder musik Anda</p>
            </div>

            <!-- Progress Bar -->
            <div class="flex flex-col gap-2 mt-2">
                <input type="range" id="progress-bar" value="0" min="0" max="100" class="w-full">
                <div class="flex justify-between text-[11px] font-medium tracking-wider" style="color: var(--text-muted)">
                    <span id="current-time">00:00</span>
                    <span id="duration-time">00:00</span>
                </div>
            </div>

            <!-- Main Controls -->
            <div class="flex justify-center items-center gap-8 mt-2">
                <button id="prev-btn" class="hover:text-white transition-all transform hover:scale-110 text-xl focus:outline-none" style="color: var(--text-muted)">
                    <i class="fas fa-backward-step"></i>
                </button>
                
                <button id="play-btn" class="w-16 h-16 dynamic-bg-accent text-white rounded-full flex justify-center items-center text-2xl transition-all transform hover:scale-105 shadow-lg focus:outline-none disabled:opacity-50">
                    <i class="fas fa-play ml-1"></i>
                </button>
                
                <button id="next-btn" class="hover:text-white transition-all transform hover:scale-110 text-xl focus:outline-none" style="color: var(--text-muted)">
                    <i class="fas fa-forward-step"></i>
                </button>
            </div>
        </div>

        <!-- Drawer Overlay (Dim Background) -->
        <div id="drawer-overlay" class="absolute inset-0 bg-black/60 z-30 opacity-0 pointer-events-none transition-opacity duration-500"></div>

        <!-- Playlist Drawer (Bottom Up) -->
        <div id="playlist-drawer" class="absolute inset-x-0 bottom-0 h-[85%] bg-gray-900/80 backdrop-blur-3xl rounded-t-[2.5rem] border-t border-white/10 transform translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] z-40 flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
            
            <!-- Drag Handle / Header -->
            <div id="close-drawer-btn" class="flex flex-col items-center pt-5 pb-3 cursor-pointer group">
                <div class="w-12 h-1.5 bg-white/20 group-hover:bg-white/50 rounded-full transition-colors"></div>
            </div>
            
            <div class="px-6 pb-4 pt-1 flex justify-between items-center border-b border-white/10">
                <h3 class="text-sm font-bold uppercase tracking-widest text-white"><i class="fas fa-stream mr-2 dynamic-accent"></i>Daftar Musik</h3>
                <span id="playlist-count" class="text-xs font-bold bg-white/10 px-3 py-1.5 rounded-full border border-white/10 dynamic-accent">0 Track</span>
            </div>
            
            <!-- Scrollable Playlist -->
            <div class="flex-1 overflow-y-auto p-4 custom-scrollbar">
                <ul id="playlist" class="space-y-2 pb-8">
                    <li class="text-sm text-center mt-12 font-light opacity-50">Tidak ada lagu. Tambahkan dari folder.</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Settings Modal -->
    <div id="settings-modal" class="hidden fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm bg-black/50">
        <div class="bg-gray-900 border border-white/10 rounded-3xl w-full max-w-md p-6 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div class="flex justify-between items-center mb-6">
                <h3 class="text-lg font-bold text-white"><i class="fas fa-palette mr-2 dynamic-accent"></i> Pengaturan Tampilan</h3>
                <button id="close-settings" class="text-gray-400 hover:text-white text-xl focus:outline-none"><i class="fas fa-times"></i></button>
            </div>
            
            <p class="text-xs text-gray-400 mb-4 uppercase tracking-wider font-semibold">Pilih Tema</p>
            <div id="themes-grid" class="grid grid-cols-5 gap-3 mb-6">
                <!-- Generated via JS -->
            </div>

            <!-- Custom Theme Section -->
            <div id="custom-theme-section" class="hidden border-t border-white/10 pt-4 mt-2">
                <p class="text-xs text-gray-400 mb-4 uppercase tracking-wider font-semibold">Tema Kustom</p>
                <div class="space-y-4">
                    <div class="flex justify-between items-center">
                        <label class="text-sm text-gray-300">Warna Aksen / Piringan</label>
                        <input type="color" id="cust-accent" class="w-8 h-8 rounded cursor-pointer bg-transparent border-0 p-0">
                    </div>
                    <div class="flex justify-between items-center">
                        <label class="text-sm text-gray-300">Warna Background 1</label>
                        <input type="color" id="cust-bg1" class="w-8 h-8 rounded cursor-pointer bg-transparent border-0 p-0">
                    </div>
                    <div class="flex justify-between items-center">
                        <label class="text-sm text-gray-300">Warna Background 2</label>
                        <input type="color" id="cust-bg2" class="w-8 h-8 rounded cursor-pointer bg-transparent border-0 p-0">
                    </div>
                    <button id="apply-custom-btn" class="w-full mt-2 bg-white/10 hover:bg-white/20 text-white text-sm font-bold py-2 rounded-xl transition-colors">Terapkan Kustom</button>
                </div>
            </div>
            
            <div class="mt-8 border-t border-white/10 pt-4 text-center">
                <button id="clear-db-btn" class="text-xs text-red-400 hover:text-red-300 font-medium px-4 py-2 bg-red-500/10 rounded-full hover:bg-red-500/20 transition-colors">
                    <i class="fas fa-trash-alt mr-1"></i> Hapus Semua Lagu Tersimpan
                </button>
            </div>
        </div>
    </div>

    <!-- Toast Notification -->
    <div id="toast" class="hidden fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-2xl border border-white/10 text-sm font-medium z-[200]">
        <!-- Pesan akan diisi lewat JS -->
    </div>

    <script>
        // DOM Elements
        const fileInput = document.getElementById('file-input');
        const playlistEl = document.getElementById('playlist');
        const songTitleEl = document.getElementById('song-title');
        const songArtistEl = document.getElementById('song-artist');
        const playBtn = document.getElementById('play-btn');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const progressBar = document.getElementById('progress-bar');
        const currentTimeEl = document.getElementById('current-time');
        const durationTimeEl = document.getElementById('duration-time');
        const diskCover = document.getElementById('disk-cover');
        const playlistCount = document.getElementById('playlist-count');
        const toast = document.getElementById('toast');
        
        // Menu Elements
        const menuBtn = document.getElementById('menu-btn');
        const dropdownMenu = document.getElementById('dropdown-menu');
        const menuPlaylistBtn = document.getElementById('menu-playlist-btn');
        const menuSettingsBtn = document.getElementById('menu-settings-btn');
        const settingsModal = document.getElementById('settings-modal');
        const closeSettingsBtn = document.getElementById('close-settings');
        
        // Drawer Elements
        const playlistDrawer = document.getElementById('playlist-drawer');
        const drawerOverlay = document.getElementById('drawer-overlay');
        const closeDrawerBtn = document.getElementById('close-drawer-btn');

        // State Variables
        const audioPlayer = new Audio();
        let songs = []; 
        let currentSongIndex = 0; 
        let isPlaying = false; 

        // --- UI Utilities ---
        function showToast(message) {
            toast.innerHTML = `<i class="fas fa-info-circle mr-2 dynamic-accent"></i> ${message}`;
            toast.classList.remove('hidden', 'fade-out');
            toast.classList.add('fade-in');
            setTimeout(() => {
                toast.classList.remove('fade-in');
                toast.classList.add('fade-out');
                setTimeout(() => toast.classList.add('hidden'), 300);
            }, 3000);
        }

        // Toggle Menu
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownMenu.classList.toggle('hidden');
        });
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
                dropdownMenu.classList.add('hidden');
            }
        });

        // Menu Actions
        menuPlaylistBtn.addEventListener('click', () => {
            dropdownMenu.classList.add('hidden');
            // Buka Laci (Drawer)
            playlistDrawer.classList.remove('translate-y-full');
            drawerOverlay.classList.remove('opacity-0', 'pointer-events-none');
            drawerOverlay.classList.add('opacity-100', 'pointer-events-auto');
        });

        // Fungsi Tutup Laci
        function closeDrawer() {
            playlistDrawer.classList.add('translate-y-full');
            drawerOverlay.classList.remove('opacity-100', 'pointer-events-auto');
            drawerOverlay.classList.add('opacity-0', 'pointer-events-none');
        }

        closeDrawerBtn.addEventListener('click', closeDrawer);
        drawerOverlay.addEventListener('click', closeDrawer);

        menuSettingsBtn.addEventListener('click', () => {
            dropdownMenu.classList.add('hidden');
            settingsModal.classList.remove('hidden');
        });
        closeSettingsBtn.addEventListener('click', () => {
            settingsModal.classList.add('hidden');
        });

        // --- Themes System ---
        const themes = [
            { id: 1, name: 'Default', bg1: '#0f0c29', bg2: '#302b63', bg3: '#24243e', card: 'rgba(255,255,255,0.05)', accent: '#a855f7', text: '#ffffff', icon: 'M' },
            { id: 2, name: 'Ocean', bg1: '#020024', bg2: '#090979', bg3: '#00d4ff', card: 'rgba(0,0,0,0.3)', accent: '#00d4ff', text: '#ffffff', icon: 'O' },
            { id: 3, name: 'Forest', bg1: '#134e5e', bg2: '#71b280', bg3: '#134e5e', card: 'rgba(255,255,255,0.1)', accent: '#a7f3d0', text: '#ffffff', icon: 'F' },
            { id: 4, name: 'Crimson', bg1: '#4a0000', bg2: '#800000', bg3: '#2d0000', card: 'rgba(0,0,0,0.4)', accent: '#ef4444', text: '#fca5a5', icon: 'C' },
            { id: 5, name: 'Sunset', bg1: '#ff4e50', bg2: '#f9d423', bg3: '#ff4e50', card: 'rgba(255,255,255,0.15)', accent: '#111827', text: '#111827', icon: 'S' },
            { id: 6, name: 'Obsidian', bg1: '#000000', bg2: '#1a1a1a', bg3: '#0a0a0a', card: 'rgba(255,255,255,0.03)', accent: '#d1d5db', text: '#ffffff', icon: 'B' },
            { id: 7, name: 'Cyberpunk', bg1: '#21094e', bg2: '#511281', bg3: '#21094e', card: 'rgba(0,0,0,0.5)', accent: '#00ffcc', text: '#ff0055', icon: 'P' },
            { id: 8, name: 'Coffee', bg1: '#3e2723', bg2: '#4e342e', bg3: '#1b0000', card: 'rgba(255,255,255,0.05)', accent: '#ffb300', text: '#fff8e1', icon: 'K' },
            { id: 9, name: 'Frost', bg1: '#e0eafc', bg2: '#cfdef3', bg3: '#e0eafc', card: 'rgba(255,255,255,0.4)', accent: '#3b82f6', text: '#1e3a8a', icon: 'I' },
            { id: 10, name: 'Custom', isCustom: true, icon: '+' }
        ];

        function applyTheme(theme) {
            const root = document.documentElement;
            root.style.setProperty('--bg-1', theme.bg1);
            root.style.setProperty('--bg-2', theme.bg2);
            root.style.setProperty('--bg-3', theme.bg3);
            root.style.setProperty('--card-bg', theme.card || 'rgba(255,255,255,0.05)');
            root.style.setProperty('--accent', theme.accent);
            root.style.setProperty('--text-main', theme.text);
            
            // Adjust muted text based on background lightness
            const isLight = theme.id === 5 || theme.id === 9;
            root.style.setProperty('--text-muted', isLight ? 'rgba(0,0,0,0.6)' : 'rgba(255,255,255,0.6)');
            
            localStorage.setItem('winoro_theme', JSON.stringify(theme));
        }

        // Render Themes Grid
        const themesGrid = document.getElementById('themes-grid');
        const customSection = document.getElementById('custom-theme-section');
        
        themes.forEach(t => {
            const btn = document.createElement('button');
            btn.className = `w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center font-bold text-sm shadow-md hover:scale-110 transition-transform ${t.isCustom ? 'bg-gray-800 text-white' : ''}`;
            if (!t.isCustom) {
                btn.style.background = `linear-gradient(45deg, ${t.bg1}, ${t.bg2})`;
                btn.style.color = t.text;
            }
            btn.innerText = t.icon;
            btn.title = t.name;
            
            btn.addEventListener('click', () => {
                if (t.isCustom) {
                    customSection.classList.remove('hidden');
                } else {
                    customSection.classList.add('hidden');
                    applyTheme(t);
                    showToast(`Tema ${t.name} diterapkan!`);
                }
            });
            themesGrid.appendChild(btn);
        });

        // Custom Theme Handler
        document.getElementById('apply-custom-btn').addEventListener('click', () => {
            const cAccent = document.getElementById('cust-accent').value;
            const cBg1 = document.getElementById('cust-bg1').value;
            const cBg2 = document.getElementById('cust-bg2').value;
            
            const customTheme = {
                id: 'custom', bg1: cBg1, bg2: cBg2, bg3: '#000000', card: 'rgba(255,255,255,0.1)', accent: cAccent, text: '#ffffff'
            };
            applyTheme(customTheme);
            showToast("Tema Kustom diterapkan!");
        });

        // Load saved theme
        const savedTheme = localStorage.getItem('winoro_theme');
        if (savedTheme) {
            applyTheme(JSON.parse(savedTheme));
        }

        // --- IndexedDB System (Penyimpanan Permanen Offline) ---
        const dbName = "WinoroMusicDB";
        let db;

        const requestDB = indexedDB.open(dbName, 1);
        requestDB.onupgradeneeded = (e) => {
            db = e.target.result;
            if(!db.objectStoreNames.contains("songs")) {
                db.createObjectStore("songs", { keyPath: "id", autoIncrement: true });
            }
        };
        requestDB.onsuccess = (e) => {
            db = e.target.result;
            loadSongsFromDB(false); // Muat lagu yang tersimpan saat halaman dibuka
        };
        requestDB.onerror = () => showToast("Error mengakses penyimpanan offline.");

        function saveFolderToDB(files) {
            showToast("Memproses file audio... Mohon tunggu.");
            const transaction = db.transaction(["songs"], "readwrite");
            const store = transaction.objectStore("songs");
            store.clear(); // Bersihkan daftar lama (opsional, bisa dihapus jika ingin menggabung)

            let count = 0;
            for (let i = 0; i < files.length; i++) {
                const file = files[i];
                if (file.type.startsWith('audio/') || file.name.match(/\.(mp3|wav|m4a|flac|ogg)$/i)) {
                    // Ekstraksi Artis dan Judul
                    let fileName = file.name.replace(/\.[^/.]+$/, "");
                    let title = fileName;
                    let artist = "Unknown Artist";
                    if(fileName.includes(" - ")) {
                        const parts = fileName.split(" - ");
                        artist = parts[0].trim();
                        title = parts.slice(1).join(" - ").trim();
                    }
                    
                    store.add({
                        fileBlob: file, // Menyimpan file asli sebagai Blob secara aman
                        title: title,
                        artist: artist
                    });
                    count++;
                }
            }

            transaction.oncomplete = () => {
                if(count > 0) {
                    showToast(`${count} Lagu berhasil disimpan. Siap diputar!`);
                    loadSongsFromDB(true); // true = Otomatis buka laci setelah import
                } else {
                    showToast("Gagal: Tidak ada file musik audio (mp3/wav) di folder tersebut.");
                }
            };
        }

        function loadSongsFromDB(autoOpenDrawer = false) {
            if(!db) return;
            const transaction = db.transaction(["songs"], "readonly");
            const store = transaction.objectStore("songs");
            const request = store.getAll();

            request.onsuccess = () => {
                songs = [];
                request.result.forEach(record => {
                    // Membuat URL sementara dari Blob yang tersimpan di IndexedDB
                    const fileUrl = URL.createObjectURL(record.fileBlob);
                    songs.push({
                        title: record.title,
                        artist: record.artist,
                        url: fileUrl
                    });
                });

                if (songs.length > 0) {
                    playlistCount.innerText = `${songs.length} Track`;
                    renderPlaylist();
                    loadSong(0); // Load lagu pertama tanpa langsung memutar

                    // FIX BUG: Otomatis memunculkan laci daftar putar setelah import sukses
                    if(autoOpenDrawer) {
                        setTimeout(() => {
                            playlistDrawer.classList.remove('translate-y-full');
                            drawerOverlay.classList.remove('opacity-0', 'pointer-events-none');
                            drawerOverlay.classList.add('opacity-100', 'pointer-events-auto');
                        }, 500); // Jeda 0.5 detik agar animasi mulus
                    }

                } else {
                    playlistCount.innerText = `0 Track`;
                    playlistEl.innerHTML = `<li class="text-sm text-center mt-12 font-light opacity-50">Tidak ada lagu tersimpan.</li>`;
                    songTitleEl.innerText = "Belum ada lagu";
                    songArtistEl.innerText = "Pilih folder musik Anda";
                }
            };
        }

        // Hapus Database
        document.getElementById('clear-db-btn').addEventListener('click', () => {
            const tx = db.transaction(["songs"], "readwrite");
            tx.objectStore("songs").clear();
            tx.oncomplete = () => {
                showToast("Semua lagu telah dihapus dari memori.");
                songs = [];
                audioPlayer.pause();
                isPlaying = false;
                playBtn.innerHTML = '<i class="fas fa-play ml-1"></i>';
                diskCover.classList.remove('spin');
                loadSongsFromDB();
                settingsModal.classList.add('hidden');
            };
        });

        // Event Input File (Import Folder)
        fileInput.addEventListener('change', (event) => {
            const files = event.target.files; 
            if (files.length === 0) return;
            dropdownMenu.classList.add('hidden'); // tutup menu
            saveFolderToDB(files);
        });

        // --- Audio Player Logic ---
        function formatTime(seconds) {
            if (isNaN(seconds)) return "00:00";
            const min = Math.floor(seconds / 60);
            const sec = Math.floor(seconds % 60);
            return `${min < 10 ? '0' : ''}${min}:${sec < 10 ? '0' : ''}${sec}`;
        }

        function renderPlaylist() {
            playlistEl.innerHTML = ''; 
            songs.forEach((song, index) => {
                const li = document.createElement('li');
                const isActive = index === currentSongIndex;
                
                li.className = `p-3.5 rounded-2xl cursor-pointer text-sm transition-all duration-300 flex items-center gap-4 group backdrop-blur-sm
                    ${isActive ? 'bg-white/10 dynamic-border-accent shadow-lg border-l-4' : 'bg-transparent hover:bg-white/5 border-l-4 border-transparent'}`;
                
                li.innerHTML = `
                    <div class="flex-shrink-0 w-8 text-center">
                        ${isActive && isPlaying 
                            ? `<div class="flex items-end justify-center gap-[3px] h-5">
                                 <div class="w-1.5 dynamic-bg-accent h-full animate-[bounce_1s_infinite]"></div>
                                 <div class="w-1.5 dynamic-bg-accent h-2/3 animate-[bounce_1.2s_infinite]"></div>
                                 <div class="w-1.5 dynamic-bg-accent h-1/2 animate-[bounce_0.8s_infinite]"></div>
                               </div>` 
                            : `<span class="text-sm font-bold ${isActive ? 'dynamic-accent' : 'opacity-50 group-hover:opacity-100'}">${index + 1}</span>`
                        }
                    </div>
                    <div class="flex flex-col flex-1 min-w-0">
                        <span class="truncate font-bold ${isActive ? 'text-white text-base' : 'opacity-80 group-hover:opacity-100 text-sm'}">${song.title}</span>
                        <span class="truncate text-[11px] mt-0.5 ${isActive ? 'dynamic-accent font-medium' : 'opacity-50'}">${song.artist}</span>
                    </div>
                `;

                li.addEventListener('click', () => {
                    loadSong(index);
                    playSong();
                });
                playlistEl.appendChild(li);
            });
            
            const activeItem = playlistEl.children[currentSongIndex];
            if(activeItem) activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        function loadSong(index) {
            currentSongIndex = index;
            const song = songs[index];
            audioPlayer.src = song.url;
            songTitleEl.innerText = song.title;
            songArtistEl.innerText = song.artist;
            renderPlaylist(); 
        }

        function playSong() {
            if (songs.length === 0) return showToast("Tambahkan lagu terlebih dahulu!");
            isPlaying = true;
            audioPlayer.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            diskCover.classList.add('spin'); 
            renderPlaylist(); 
        }

        function pauseSong() {
            isPlaying = false;
            audioPlayer.pause();
            playBtn.innerHTML = '<i class="fas fa-play ml-1"></i>';
            diskCover.classList.remove('spin'); 
            renderPlaylist();
        }

        playBtn.addEventListener('click', () => {
            if (isPlaying) pauseSong();
            else playSong();
        });

        function prevSong() {
            if (songs.length === 0) return;
            currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
            loadSong(currentSongIndex);
            playSong();
        }

        function nextSong() {
            if (songs.length === 0) return;
            currentSongIndex = (currentSongIndex + 1) % songs.length;
            loadSong(currentSongIndex);
            playSong();
        }

        prevBtn.addEventListener('click', prevSong);
        nextBtn.addEventListener('click', nextSong);
        audioPlayer.addEventListener('ended', nextSong);

        audioPlayer.addEventListener('timeupdate', () => {
            const currentTime = audioPlayer.currentTime;
            const duration = audioPlayer.duration;
            if (duration) {
                progressBar.value = (currentTime / duration) * 100;
                currentTimeEl.innerText = formatTime(currentTime);
                durationTimeEl.innerText = formatTime(duration);
            }
        });

        audioPlayer.addEventListener('loadedmetadata', () => {
             durationTimeEl.innerText = formatTime(audioPlayer.duration);
        });

        progressBar.addEventListener('input', (e) => {
            if(audioPlayer.duration) {
                audioPlayer.currentTime = (e.target.value / 100) * audioPlayer.duration;
            }
        });
    </script>
</body>
</html>
