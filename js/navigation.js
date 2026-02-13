/* ====================
   PIXEL PORTFOLIO - NAVIGATION SYSTEM
   Screen & State Management
   ==================== */

// Project Data
const projectsData = {
    'motor-prediction': {
        title: 'Electric Motor Health Prediction System',
        date: 'Nov–Dec 2025',
        image: 'assets/images/projects/motor-prediction.png',
        details: [
            'Built a predictive maintenance system for single-phase electric motors using classical ML and fuzzy logic.',
            'Processed sensor data (vibration, temperature, current, voltage) with cleaning, feature engineering, scaling, and labeling.',
            'Trained and evaluated Random Forest and Gradient Boosting models using accuracy, F1-score, recall, MAE, and RMSE.',
            'Designed a fuzzy expert system with IF-THEN rules for fault diagnosis and maintenance decisions.',
            'Evaluated model performance and documented results for iterative improvement.'
        ]
    },
    'fashion-ecommerce': {
        title: 'Fashion E-Commerce Landing Website',
        date: 'Nov 2025',
        image: 'assets/images/projects/fashion-ecommerce.png',
        details: [
            'Developed a responsive women\'s fashion landing website using React and TypeScript.',
            'Implemented multi-category catalog, testimonials, and WhatsApp integration to boost engagement.',
            'Applied SEO optimization to improve visibility and page performance.',
            'Utilized Vite, React Query, and shadcn/ui for scalable UI architecture.'
        ]
    },
    'doc-analyzer': {
        title: 'AI Agent Document Analyzer',
        date: 'Nov 2025',
        image: 'assets/images/projects/doc-analyzer.png',
        details: [
            'Built multi-format document reader supporting TXT, PDF, and DOCX.',
            'Implemented TF-IDF summarization, keyword extraction, and document statistics engine.',
            'Designed five custom tools: reader, summarizer, keyword extractor, stats analyzer, and search.',
            'Developed NLP pipeline with stopword filtering, sentence scoring, and frequency-based ranking.',
            'Enabled multi-turn conversation with natural language commands in Indonesian.',
            'Implemented a robust CLI with color-styled outputs.',
            'Designed modular architecture for orchestration, intent detection, tool flow, and context.'
        ]
    },
    'identity-verification': {
        title: 'Identity Verification System (Internship)',
        date: 'Jul–Aug 2025',
        image: 'assets/images/projects/identity-verification.png',
        details: [
            'Developed a computer-vision-based verification system using OpenCV and YOLOv8n.',
            'Strengthened authentication workflows through automated detection pipelines.'
        ]
    },
    'hospital-sim': {
        title: 'Smart Hospital Simulation',
        date: 'Dec 2024–Jan 2025',
        image: 'assets/images/projects/hospital-sim.png',
        details: [
            'Designed a prototype of an intelligent hospital system using Arduino and sensors.',
            'Programmed sensor responses and integrated components into a working model.'
        ]
    },
    'typer-game': {
        title: 'Mechiu Typer Game',
        date: 'Sep 2024–Jan 2025',
        image: 'assets/images/projects/typer-game.png',
        details: [
            'Designed and built an educational typing game using Java and OOP principles.',
            'Developed interactive features that improve typing coordination.',
            'Collaborated on class-based architecture with inheritance and encapsulation.'
        ]
    }
};

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
        closeBtn.addEventListener('click', () => {
            this.closeModal();
        });
        
        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }
    
    openModal(projectId) {
        const projectData = projectsData[projectId];
        if (!projectData) return;
        
        const modal = document.getElementById('project-modal');
        document.getElementById('modal-title').textContent = projectData.title;
        document.getElementById('modal-date').textContent = projectData.date;
        
        const modalImage = document.getElementById('modal-image');
        modalImage.src = projectData.image;
        modalImage.onerror = () => {
            modalImage.classList.add('hidden');
        };
        
        const detailsList = document.getElementById('modal-details');
        detailsList.innerHTML = '';
        projectData.details.forEach(detail => {
            const li = document.createElement('li');
            li.textContent = detail;
            detailsList.appendChild(li);
        });
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        window.audioSystem?.playSoundEffect('select');
    }
    
    closeModal() {
        const modal = document.getElementById('project-modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        window.audioSystem?.playSoundEffect('back');
    }
    
    setupEventListeners() {
        // Project Card Click - Open Modal
        document.querySelectorAll('.project-card-mini').forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                const projectId = card.dataset.projectId;
                this.openModal(projectId);
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
