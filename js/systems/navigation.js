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
        this.setupModal();
    }
    
    setupModal() {
        const modal = document.getElementById('project-modal');
        const closeBtn = document.getElementById('modal-close');
        
        // Close button
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeModal();
            });
        }
        
        // Close on background click
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        }
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
    
    openModal(projectId) {
        const projectData = projectsData[projectId];
        if (!projectData) return;
        
        const modal = document.getElementById('project-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDate = document.getElementById('modal-date');
        const modalImage = document.getElementById('modal-image');
        const detailsList = document.getElementById('modal-details');
        
        if (modalTitle) modalTitle.textContent = projectData.title;
        if (modalDate) modalDate.textContent = projectData.date;
        
        if (modalImage) {
            modalImage.src = projectData.image;
            modalImage.onerror = () => {
                modalImage.classList.add('hidden');
            };
        }
        
        if (detailsList) {
            detailsList.innerHTML = '';
            projectData.details.forEach(detail => {
                const li = document.createElement('li');
                li.textContent = detail;
                detailsList.appendChild(li);
            });
        }
        
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        window.audioSystem?.playSoundEffect('select');
    }
    
    closeModal() {
        const modal = document.getElementById('project-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        window.audioSystem?.playSoundEffect('back');
    }
    
    setupEventListeners() {
        try {
            // Project Card Click - Open Modal
            const projectCards = document.querySelectorAll('.project-card-mini');
            if (projectCards && projectCards.length > 0) {
                projectCards.forEach(card => {
                    card.addEventListener('click', (e) => {
                        e.stopPropagation();
                        const projectId = card.dataset.projectId;
                        this.openModal(projectId);
                    });
                });
            }
        
            // Intro Fighter Selection (on landing page)
            const introFighters = document.querySelectorAll('.intro-fighter');
            if (introFighters && introFighters.length > 0) {
                introFighters.forEach(fighter => {
                    fighter.addEventListener('click', () => {
                        const fighterType = fighter.dataset.fighter;
                        this.navigateTo(`profile-${fighterType}`);
                        window.audioSystem?.playSoundEffect('select');
                    });
                });
            }
            
            // Start Button
            const startBtn = document.getElementById('btn-start');
            if (startBtn) {
                startBtn.addEventListener('click', () => {
                    this.navigateTo('screen-fighters');
                    window.audioSystem?.playSoundEffect('confirm');
                });
            }
            
            // Fighter Selection
            const fighterCards = document.querySelectorAll('.fighter-card');
            if (fighterCards && fighterCards.length > 0) {
                fighterCards.forEach(card => {
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
            }
            
            // Back Buttons - Use Event Delegation for dynamically generated buttons
            const gameContainer = document.getElementById('game-container');
            if (gameContainer) {
                gameContainer.addEventListener('click', (e) => {
                    if (e.target.classList.contains('btn-arcade') && 
                        (e.target.textContent.includes('BACK') || e.target.textContent.includes('HOME'))) {
                        e.preventDefault();
                        e.stopPropagation();
                        this.navigateTo('screen-intro');
                        window.audioSystem?.playSoundEffect('back');
                    }
                });
            }
            
            // Home Button
            const homeBtn = document.getElementById('btn-home');
            if (homeBtn) {
                homeBtn.addEventListener('click', () => {
                    this.navigateTo('screen-intro');
                    window.audioSystem?.playSoundEffect('back');
                });
            }
            
            // Menu Buttons
            const menuBtns = document.querySelectorAll('.menu-btn');
            if (menuBtns && menuBtns.length > 0) {
                menuBtns.forEach(btn => {
                    btn.addEventListener('click', () => {
                        const screenId = btn.dataset.screen;
                        if (screenId) {
                            this.navigateTo(screenId);
                            window.audioSystem?.playSoundEffect('select');
                        }
                    });
                });
            }
        } catch (error) {
            console.error('Error in setupEventListeners:', error);
        }
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'Escape':
                    // Check if modal is open
                    const modal = document.getElementById('project-modal');
                    if (modal && modal.classList.contains('active')) {
                        // Close modal
                        this.closeModal();
                    } else if (this.currentScreen !== 'screen-intro') {
                        // Go back to home if not already there
                        this.navigateTo('screen-intro');
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

// Make class available globally
window.NavigationSystem = NavigationSystem;
