/* ====================
   PIXEL PORTFOLIO - NAVIGATION SYSTEM
   Screen & State Management
   ==================== */

class NavigationSystem {
    constructor() {
        this.currentScreen = 'screen-intro';
        this.screenHistory = ['screen-intro'];
        this.activeModal = null;
        
        this.init();
    }
    
    init() {
        this.setupProjectModal();
        this.setupEventListeners();
        this.setupKeyboardShortcuts();
    }
    
    setupProjectModal() {
        const modal = document.getElementById('project-modal');
        const closeBtn = document.getElementById('modal-close');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal('project-modal'));
        }
        
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeModal('project-modal');
            });
        }
    }
    
    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        
        if (modalId === 'project-modal') {
            this.openProjectModal(modal);
        } else if (modalId === 'about-modal') {
            this.openGenericModal(modalId);
        } else if (modalId === 'contact-modal') {
            this.openGenericModal(modalId);
        }
    }

    openProjectModal(modal) {
        // Project modal will be opened with specific data
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.activeModal = 'project-modal';
        window.audioSystem?.playSoundEffect('select');
    }

    openGenericModal(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        this.activeModal = modalId;

        // Setup close button
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn && !closeBtn.dataset.listener) {
            closeBtn.addEventListener('click', () => this.closeModal(modalId));
            closeBtn.dataset.listener = 'true';
        }

        // Close on background click
        if (!modal.dataset.listener) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) this.closeModal(modalId);
            });
            modal.dataset.listener = 'true';
        }

        window.audioSystem?.playSoundEffect('select');
    }

    closeModal(modalId = this.activeModal) {
        if (!modalId) return;

        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
            this.activeModal = null;
        }

        window.audioSystem?.playSoundEffect('back');
    }
    
    openProjectModalWithData(projectId) {
        const projectData = window.projectsData[projectId];
        if (!projectData) {
            console.warn('Project not found:', projectId);
            return;
        }
        
        const modal = document.getElementById('project-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalDate = document.getElementById('modal-date');
        const modalImage = document.getElementById('modal-image');
        const detailsList = document.getElementById('modal-details');
        
        if (modalTitle) modalTitle.textContent = projectData.title;
        if (modalDate) modalDate.textContent = projectData.date;
        
        if (modalImage) {
            modalImage.src = projectData.image;
            modalImage.onerror = () => modalImage.classList.add('hidden');
        }
        
        if (detailsList) {
            detailsList.innerHTML = '';
            projectData.details.forEach(detail => {
                const li = document.createElement('li');
                li.textContent = detail;
                detailsList.appendChild(li);
            });
        }

        this.openProjectModal(modal);
    }
    
    setupEventListeners() {
        try {
            const gameContainer = document.getElementById('game-container');
            if (!gameContainer) return;

            gameContainer.addEventListener('click', (e) => {
                const target = e.target;

                // Modal buttons (ABOUT, CONTACT)
                if (target.classList.contains('modal-button') && target.dataset.modal) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.openGenericModal(target.dataset.modal);
                    return;
                }

                // Navigation buttons (PROJECTS, etc)
                if (target.classList.contains('nav-button') && target.dataset.screen) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.navigateTo(target.dataset.screen);
                    window.audioSystem?.playSoundEffect('select');
                    return;
                }

                // Back buttons
                if (target.classList.contains('btn-arcade') && 
                    (target.textContent.includes('BACK') || target.textContent.includes('HOME'))) {
                    e.preventDefault();
                    e.stopPropagation();
                    this.navigateTo('screen-intro');
                    window.audioSystem?.playSoundEffect('back');
                    return;
                }

                // Project cards
                if (target.closest('.project-card-mini')) {
                    const card = target.closest('.project-card-mini');
                    const projectId = card.dataset.projectId;
                    if (projectId) {
                        this.openProjectModalWithData(projectId);
                    }
                    return;
                }

                // Intro fighters
                if (target.closest('.intro-fighter')) {
                    const fighter = target.closest('.intro-fighter');
                    const fighterType = fighter.dataset.fighter;
                    if (fighterType) {
                        this.navigateTo(`profile-${fighterType}`);
                        window.audioSystem?.playSoundEffect('select');
                    }
                    return;
                }

                // Fighter cards (in fighter selection)
                if (target.closest('.fighter-card')) {
                    const card = target.closest('.fighter-card');
                    const fighterType = card.dataset.fighter;
                    if (fighterType) {
                        this.navigateTo(`profile-${fighterType}`);
                        window.audioSystem?.playSoundEffect('select');
                    }
                    return;
                }
            });

            // Specific button handlers
            const startBtn = document.getElementById('btn-start');
            if (startBtn) {
                startBtn.addEventListener('click', () => {
                    this.navigateTo('screen-fighters');
                    window.audioSystem?.playSoundEffect('confirm');
                });
            }

            const homeBtn = document.getElementById('btn-home');
            if (homeBtn) {
                homeBtn.addEventListener('click', () => {
                    this.navigateTo('screen-intro');
                    window.audioSystem?.playSoundEffect('back');
                });
            }

        } catch (error) {
            console.error('Error in setupEventListeners:', error);
        }
    }
    
    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (e.key !== 'Escape') return;

            e.preventDefault();

            // Check modals in priority order
            const modalChecks = [
                'project-modal',
                'about-modal',
                'contact-modal'
            ];

            for (const modalId of modalChecks) {
                const modal = document.getElementById(modalId);
                if (modal && modal.classList.contains('active')) {
                    this.closeModal(modalId);
                    return;
                }
            }

            // Otherwise go home
            if (this.currentScreen !== 'screen-intro') {
                this.navigateTo('screen-intro');
                window.audioSystem?.playSoundEffect('back');
            }
        });

        // Arrow keys for audio feedback
        document.addEventListener('keydown', (e) => {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                window.audioSystem?.playSoundEffect('select');
            }
        });
    }
    
    navigateTo(screenId) {
        const currentScreen = document.getElementById(this.currentScreen);
        if (currentScreen) {
            currentScreen.classList.remove('active');
        }
        
        const newScreen = document.getElementById(screenId);
        if (newScreen) {
            newScreen.classList.add('active');
            this.currentScreen = screenId;
            this.screenHistory.push(screenId);
            this.addTransitionEffect();
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
        }
    }
    
    getCurrentScreen() {
        return this.currentScreen;
    }
}

// Make class available globally
window.NavigationSystem = NavigationSystem;
