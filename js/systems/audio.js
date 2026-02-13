/* ====================
   PIXEL PORTFOLIO - AUDIO SYSTEM
   8-bit Arcade Music & Sound Effects
   ==================== */

class AudioSystem {
    constructor() {
        this.audioElement = document.getElementById('game-audio');
        this.isMuted = false;
        this.soundToggle = document.getElementById('sound-toggle');
        
        // Initialize sound system
        this.init();
    }
    
    init() {
        if (this.soundToggle) {
            this.soundToggle.addEventListener('click', () => this.toggleSound());
        }
        
        // Setup audio element
        if (this.audioElement) {
            this.audioElement.volume = 0.3;
            // Try to autoplay (browser may block until user interaction)
            this.audioElement.play().catch(() => {
                console.log('Autoplay blocked by browser - user interaction required');
            });
        }
    }
    
    toggleSound() {
        this.isMuted = !this.isMuted;
        
        if (this.isMuted) {
            if (this.audioElement) {
                this.audioElement.pause();
            }
            if (this.soundToggle) {
                this.soundToggle.textContent = '🔇';
                this.soundToggle.classList.remove('active');
            }
        } else {
            // Note: This requires user permission in most browsers
            if (this.audioElement) {
                this.audioElement.play().catch(() => {
                    console.log('Audio playback requires user interaction');
                });
            }
            if (this.soundToggle) {
                this.soundToggle.textContent = '🔊';
                this.soundToggle.classList.add('active');
            }
        }
    }
    
    playSoundEffect(soundName) {
        if (this.isMuted) return;
        
        // Create simple 8-bit sound effects using Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            switch(soundName) {
                case 'select':
                    this.playSelectSound(audioContext);
                    break;
                case 'confirm':
                    this.playConfirmSound(audioContext);
                    break;
                case 'back':
                    this.playBackSound(audioContext);
                    break;
                case 'power-on':
                    this.playPowerOnSound(audioContext);
                    break;
            }
        } catch (error) {
            console.log('Audio context error:', error);
        }
    }
    
    playSelectSound(ctx) {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.setValueAtTime(600, now + 0.1);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.setValueAtTime(0, now + 0.1);
        
        osc.start(now);
        osc.stop(now + 0.1);
    }
    
    playConfirmSound(ctx) {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.setValueAtTime(800, now + 0.1);
        osc.frequency.setValueAtTime(1000, now + 0.2);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.setValueAtTime(0, now + 0.3);
        
        osc.start(now);
        osc.stop(now + 0.3);
    }
    
    playBackSound(ctx) {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.frequency.setValueAtTime(400, now);
        osc.frequency.setValueAtTime(300, now + 0.1);
        gain.gain.setValueAtTime(0.3, now);
        gain.gain.setValueAtTime(0, now + 0.1);
        
        osc.start(now);
        osc.stop(now + 0.1);
    }
    
    playPowerOnSound(ctx) {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.5);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.setValueAtTime(0, now + 0.5);
        
        osc.start(now);
        osc.stop(now + 0.5);
    }
}

// Make class available globally
window.AudioSystem = AudioSystem;
