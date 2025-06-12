class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
        this.currentVolume = 0.3;
        this.playlist = [
            { name: 'Mirrors', file: 'musicas/mirrors.mp3' },
            { name: 'Tantos Mares', file: 'musicas/Tantos Mares.mp3' },
            { name: 'When I Was Your Man', file: 'musicas/When I Was Your Man.mp3' },
            { name: 'Would Ya', file: 'musicas/Would Ya.mp3' },
            { name: 'Just Wanna Be With You', file: 'musicas/Just Wanna Be With You.mp3' }
        ];
        this.currentTrackIndex = 0;
        this.init();
    }

    init() {
        this.createPlayer();
        this.setupAudio();
        this.setupEventListeners();
        this.updateMusicInfo();
    }

    createPlayer() {
        const buttonStyle = `
            width: 40px; 
            height: 40px; 
            border-radius: 50%; 
            border: none; 
            background-color: #4caf50; 
            color: white; 
            font-size: 18px; 
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease;
        `;
        
        const playerHTML = `
            <div class="music-player" style="font-family: sans-serif; max-width: 350px; background:#f9f9f9; border-radius: 10px; padding: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <div class="player-content" style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <button id="prevBtn" style="${buttonStyle}" title="Música Anterior">⏮</button>
                    <button class="play-pause-btn" id="playPauseBtn" style="${buttonStyle}" title="Play / Pause">
                        <span id="playIcon">▶</span>
                    </button>
                    <button id="nextBtn" style="${buttonStyle}" title="Próxima Música">⏭</button>

                    <div class="music-info" style="flex-grow: 1; padding-left: 15px;">
                        <div class="music-title" id="musicTitle" style="font-weight: bold; font-size: 16px;">Título da Música</div>
                        <div class="music-artist" id="musicStatus" style="font-size: 12px; color: #666;">Faixa X de Y</div>
                    </div>
                </div>
                <div class="volume-control" style="display: flex; align-items: center; gap: 8px;">
                    <span class="volume-icon" style="font-size: 20px;">🔊</span>
                    <input type="range" class="volume-slider" id="volumeSlider" min="0" max="1" step="0.1" value="0.7" style="flex-grow: 1;">
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', playerHTML);

        // Opcional: hover efeito nos botões
        ['prevBtn', 'playPauseBtn', 'nextBtn'].forEach(id => {
            const btn = document.getElementById(id);
            btn.addEventListener('mouseenter', () => btn.style.backgroundColor = '#45a049');
            btn.addEventListener('mouseleave', () => btn.style.backgroundColor = '#4caf50');
        });
    }

    setupAudio() {
        this.audio.src = this.playlist[this.currentTrackIndex].file;
        this.audio.volume = this.currentVolume;
        this.audio.play().then(() => {
            this.isPlaying = true;
            this.updatePlayButton();
        }).catch(() => {
            console.log('Autoplay bloqueado — clique no botão ▶');
        });

        this.audio.addEventListener('ended', () => this.playNext());
    }

    setupEventListeners() {
        const playPauseBtn = document.getElementById('playPauseBtn');
        const volumeSlider = document.getElementById('volumeSlider');
        const nextBtn = document.getElementById('nextBtn');
        const prevBtn = document.getElementById('prevBtn');

        playPauseBtn.addEventListener('click', () => this.togglePlay());
        volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
        nextBtn.addEventListener('click', () => this.playNext());
        prevBtn.addEventListener('click', () => this.playPrevious());
    }

    togglePlay() {
        if (this.isPlaying) {
            this.audio.pause();
            this.isPlaying = false;
        } else {
            this.audio.play();
            this.isPlaying = true;
        }
        this.updatePlayButton();
    }

    setVolume(volume) {
        this.currentVolume = parseFloat(volume);
        this.audio.volume = this.currentVolume;
    }

    updatePlayButton() {
        const playIcon = document.getElementById('playIcon');
        playIcon.textContent = this.isPlaying ? '⏸' : '▶';
    }

    playNext() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
        this.changeTrack();
    }

    playPrevious() {
        this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
        this.changeTrack();
    }

    changeTrack() {
        this.audio.src = this.playlist[this.currentTrackIndex].file;
        this.audio.play();
        this.isPlaying = true;
        this.updatePlayButton();
        this.updateMusicInfo();
    }

    updateMusicInfo() {
        const musicTitle = document.getElementById('musicTitle');
        const musicStatus = document.getElementById('musicStatus');
        musicTitle.textContent = this.playlist[this.currentTrackIndex].name;
        musicStatus.textContent = `Música ${this.currentTrackIndex + 1} de ${this.playlist.length}`;
    }
}

// Inicializa o player quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new MusicPlayer();
});
