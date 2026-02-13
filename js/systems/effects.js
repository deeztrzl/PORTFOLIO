/* ====================
   PIXEL PORTFOLIO - EFFECTS SYSTEM
   CRT & Visual Effects
   ==================== */

class EffectsSystem {
    constructor() {
        this.crtOverlay = document.getElementById('crt-overlay');
        this.crtToggle = document.getElementById('crt-toggle');
        this.isCRTActive = false;
        
        this.init();
    }
    
    init() {
        this.setupCRTToggle();
        this.setupHoverEffects();
        this.setupClickEffects();
        this.createCRTSVGFilters();
    }
    
    setupCRTToggle() {
        if (this.crtToggle) {
            this.crtToggle.addEventListener('click', () => {
                this.toggleCRT();
            });
        }
    }
    
    toggleCRT() {
        this.isCRTActive = !this.isCRTActive;
        
        if (this.isCRTActive) {
            if (this.crtOverlay) {
                this.crtOverlay.classList.add('active');
            }
            document.body.classList.add('crt-mode');
            if (this.crtToggle) {
                this.crtToggle.classList.add('active');
            }
            window.audioSystem?.playSoundEffect('select');
        } else {
            if (this.crtOverlay) {
                this.crtOverlay.classList.remove('active');
            }
            document.body.classList.remove('crt-mode');
            if (this.crtToggle) {
                this.crtToggle.classList.remove('active');
            }
            window.audioSystem?.playSoundEffect('back');
        }
    }
    
    setupHoverEffects() {
        // Add glow effect to buttons on hover
        document.querySelectorAll('.btn-arcade, .btn-social, .skill-item').forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.createParticles(element);
            });
        });
    }
    
    setupClickEffects() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-arcade') || 
                e.target.classList.contains('btn-social') ||
                e.target.classList.contains('fighter-card')) {
                this.createClickEffect(e.clientX, e.clientY);
            }
        });
    }
    
    createParticles(element) {
        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        
        // Create 5-8 particles
        const particleCount = Math.random() * 4 + 4;
        for (let i = 0; i < particleCount; i++) {
            this.createParticle(x, y);
        }
    }
    
    createParticle(x, y) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.width = '8px';
        particle.style.height = '8px';
        const bgColor = this.getRandomColor();
        particle.style.backgroundColor = bgColor;
        particle.style.borderRadius = '50%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '150';
        particle.style.boxShadow = `0 0 10px ${bgColor}`;
        
        document.body.appendChild(particle);
        
        // Animate particle
        const angle = Math.random() * Math.PI * 2;
        const velocity = 5 + Math.random() * 5;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let lifetime = 1;
        const interval = setInterval(() => {
            lifetime -= 0.05;
            x += vx;
            y += vy;
            
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.opacity = lifetime;
            
            if (lifetime <= 0) {
                clearInterval(interval);
                particle.remove();
            }
        }, 30);
    }
    
    createClickEffect(x, y) {
        const effect = document.createElement('div');
        effect.style.position = 'fixed';
        effect.style.left = x + 'px';
        effect.style.top = y + 'px';
        effect.style.width = '20px';
        effect.style.height = '20px';
        effect.style.border = '2px solid #00ffff';
        effect.style.borderRadius = '50%';
        effect.style.pointerEvents = 'none';
        effect.style.zIndex = '150';
        effect.style.transform = 'translate(-50%, -50%)';
        
        document.body.appendChild(effect);
        
        // Animate expansion
        let scale = 0.5;
        let opacity = 1;
        const interval = setInterval(() => {
            scale += 0.15;
            opacity -= 0.15;
            
            effect.style.transform = `translate(-50%, -50%) scale(${scale})`;
            effect.style.opacity = opacity;
            
            if (opacity <= 0) {
                clearInterval(interval);
                effect.remove();
            }
        }, 30);
    }
    
    getRandomColor() {
        const colors = ['#00ffff', '#ff00ff', '#00ff00', '#ffaa00'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    createCRTSVGFilters() {
        // Create SVG filters for chromatic aberration effect
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.style.display = 'none';
        svg.innerHTML = `
            <defs>
                <filter id="chromatic-0">
                    <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
                </filter>
                <filter id="chromatic-1">
                    <feColorMatrix type="matrix" values="1 0.1 0 0 0  0.1 1 0 0 0  0 0 1 0 0  0 0 0 1 0"/>
                </filter>
            </defs>
        `;
        document.body.appendChild(svg);
    }
    
    addScreenShake(intensity = 5, duration = 200) {
        const gameContainer = document.querySelector('.game-container');
        if (!gameContainer) return;
        
        const startTime = Date.now();
        
        const shake = () => {
            const elapsed = Date.now() - startTime;
            if (elapsed < duration) {
                const x = (Math.random() - 0.5) * intensity * 2;
                const y = (Math.random() - 0.5) * intensity * 2;
                gameContainer.style.transform = `translate(${x}px, ${y}px)`;
                requestAnimationFrame(shake);
            } else {
                gameContainer.style.transform = 'translate(0, 0)';
            }
        };
        
        shake();
    }
    
    addGlitchEffect(element) {
        if (!element) return;
        element.classList.add('transition-glitch');
        setTimeout(() => {
            element.classList.remove('transition-glitch');
        }, 300);
    }
    
    // Add scanline animation
    addScanlines() {
        if (!this.isCRTActive) {
            this.toggleCRT();
        }
    }
    
    // Screen flicker effect
    flickerScreen(times = 3, duration = 100) {
        const gameContainer = document.querySelector('.game-container');
        if (!gameContainer) return;
        
        let count = 0;
        
        const flicker = setInterval(() => {
            gameContainer.style.opacity = count % 2 === 0 ? 0.5 : 1;
            count++;
            
            if (count >= times * 2) {
                clearInterval(flicker);
                gameContainer.style.opacity = 1;
            }
        }, duration);
    }
}

// Make class available globally
window.EffectsSystem = EffectsSystem;
