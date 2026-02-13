/* ====================
   PIXEL PORTFOLIO - NAVIGATION SYSTEM
   Screen & State Management
   ==================== */

class NavigationSystem {
    constructor() {
        this.currentScreen = 'screen-intro';
        this.screenHistory = ['screen-intro'];
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupKeyboardShortcuts();
    }
    
    setupEventListeners() {
        // Project Card Expansion
        document.querySelectorAll('.project-card-mini').forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                const isExpanded = card.classList.contains('expanded');
                
                // Close other expanded cards
                document.querySelectorAll('.project-card-mini.expanded').forEach(openCard => {
                    if (openCard !== card) {
                        openCard.classList.remove('expanded');
                        const bullets = openCard.querySelector('.project-bullets');
                        bullets.style.display = 'none';
                    }
                });
                
                // Toggle current card
                const bullets = card.querySelector('.project-bullets');
                if (isExpanded) {
                    card.classList.remove('expanded');
                    bullets.style.display = 'none';
                    window.audioSystem?.playSoundEffect('back');
                } else {
                    card.classList.add('expanded');
                    bullets.style.display = 'flex';
                    window.audioSystem?.playSoundEffect('select');
                }
            });
        });
        
        // Start Button
        document.getElementById('btn-start').addEventListener('click', () => {
            this.navigateTo('screen-fighters');
            window.audioSystem?.playSoundEffect('confirm');
        });
        
        // Fighter Selection
        document.querySelectorAll('.fighter-card').forEach(card => {
            card.addEventListener('click', () => {
                const fighterType = card.dataset.fighter;
                this.navigateTo(`profile-${fighterType}`);
                window.audioSystem?.playSoundEffect('select');
            });
            
            // Hover effect
            card.addEventListener('mouseenter', () => {
                window.audioSystem?.playSoundEffect('select');
            });
        });
        
        // Back Buttons
        document.getElementById('btn-back-fighters').addEventListener('click', () => {
            this.goBack();
        });
        
        document.getElementById('btn-back-ai').addEventListener('click', () => {
            this.navigateTo('screen-fighters');
        });
        
        document.getElementById('btn-back-mech').addEventListener('click', () => {
            this.navigateTo('screen-fighters');
        });
        
        document.getElementById('btn-back-speaker').addEventListener('click', () => {
            this.navigateTo('screen-fighters');
        });
        
        document.getElementById('btn-back-designer').addEventListener('click', () => {
            this.navigateTo('screen-fighters');
        });
        
        document.getElementById('btn-back-about').addEventListener('click', () => {
            this.navigateTo('screen-fighters');
        });
        
        document.getElementById('btn-back-projects').addEventListener('click', () => {
            this.navigateTo('screen-fighters');
        });
        
        document.getElementById('btn-back-contact').addEventListener('click', () => {
            this.navigateTo('screen-fighters');
        });
        
        // Home Button
        document.getElementById('btn-home').addEventListener('click', () => {
            this.navigateTo('screen-intro');
            window.audioSystem?.playSoundEffect('back');
        });
        
        // Menu Buttons
        document.querySelectorAll('.menu-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const screenId = btn.dataset.screen;
                if (screenId) {
                    this.navigateTo(screenId);
                    window.audioSystem?.playSoundEffect('select');
                }
            });
        });
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'Enter':
                    // On intro screen, start the game
                    if (this.currentScreen === 'screen-intro') {
                        this.navigateTo('screen-fighters');
                        window.audioSystem?.playSoundEffect('confirm');
                    }
                    break;
                case 'Escape':
                    // Go back to fighters screen
                    if (this.currentScreen !== 'screen-intro') {
                        this.navigateTo('screen-fighters');
                        window.audioSystem?.playSoundEffect('back');
                    }
                    break;
                case 'ArrowUp':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'ArrowRight':
                    // Future: Could implement arrow key navigation between fighters
                    window.audioSystem?.playSoundEffect('select');
                    break;
            }
        });
    }
    
    navigateTo(screenId) {
        // Hide current screen
        const currentScreen = document.getElementById(this.currentScreen);
        if (currentScreen) {
            currentScreen.classList.remove('active');
        }
        
        // Show new screen
        const newScreen = document.getElementById(screenId);
        if (newScreen) {
            newScreen.classList.add('active');
            this.currentScreen = screenId;
            this.screenHistory.push(screenId);
            
            // Add transition effect
            this.addTransitionEffect();
            
            // Scroll to top
            window.scrollTo(0, 0);
        }
    }
    
    goBack() {
        if (this.screenHistory.length > 1) {
            this.screenHistory.pop();
            const previousScreen = this.screenHistory[this.screenHistory.length - 1];
            
            const currentScreen = document.getElementById(this.currentScreen);
            if (currentScreen) {
                currentScreen.classList.remove('active');
            }
            
            const prevScreen = document.getElementById(previousScreen);
            if (prevScreen) {
                prevScreen.classList.add('active');
                this.currentScreen = previousScreen;
                this.addTransitionEffect();
            }
        }
        
        window.audioSystem?.playSoundEffect('back');
    }
    
    addTransitionEffect() {
        const screen = document.getElementById(this.currentScreen);
        if (screen) {
            screen.style.animation = 'none';
            setTimeout(() => {
                screen.style.animation = '';
            }, 10);
            
            // Close expanded project cards when navigating
            screen.querySelectorAll('.project-card-mini.expanded').forEach(card => {
                card.classList.remove('expanded');
                const bullets = card.querySelector('.project-bullets');
                if (bullets) {
                    bullets.style.display = 'none';
                }
            });
        }
    }
    
    getCurrentScreen() {
        return this.currentScreen;
    }
}

// Initialize Navigation System
document.addEventListener('DOMContentLoaded', () => {
    window.navigationSystem = new NavigationSystem();
});
