/* ====================
   PIXEL PORTFOLIO - SPRITES SYSTEM
   Animated Pixel Art Characters
   ==================== */

class SpritesSystem {
    constructor() {
        this.sprites = {
            'ai-engineer': {
                emoji: '🤖',
                name: 'AI Engineer',
                animation: 'spriteFloat',
                image: 'assets/images/ai engineer.png'
            },
            'mechatronics': {
                emoji: '⚙️',
                name: 'Mechatronics',
                animation: 'spriteFloat',
                image: 'assets/images/mechanics.png'
            },
            'speaker': {
                emoji: '🎤',
                name: 'MC / Speaker',
                animation: 'spriteFloat',
                image: 'assets/images/mc.png'
            },
            'designer': {
                emoji: '🎨',
                name: 'Designer',
                animation: 'spriteFloat',
                image: 'assets/images/designer.png'
            }
        };
        
        this.defaultImage = 'assets/images/general.png';
        
        this.init();
    }
    
    init() {
        this.renderSprites();
        this.setupPortraitHover();
    }
    
    setupPortraitHover() {
        const portraitImage = document.querySelector('.portrait-image');
        if (!portraitImage) return;
        
        const introFighters = document.querySelectorAll('.intro-fighter');
        if (!introFighters || introFighters.length === 0) return;
        
        introFighters.forEach(fighter => {
            const fighterType = fighter.dataset.fighter;
            
            fighter.addEventListener('mouseenter', () => {
                const sprite = this.sprites[fighterType];
                if (sprite && sprite.image) {
                    portraitImage.style.transition = 'opacity 0.3s ease';
                    portraitImage.style.opacity = '0.7';
                    setTimeout(() => {
                        portraitImage.src = sprite.image;
                        portraitImage.style.opacity = '1';
                    }, 150);
                }
            });
            
            fighter.addEventListener('mouseleave', () => {
                portraitImage.style.transition = 'opacity 0.3s ease';
                portraitImage.style.opacity = '0.7';
                setTimeout(() => {
                    portraitImage.src = this.defaultImage;
                    portraitImage.style.opacity = '1';
                }, 150);
            });
        });
    }
    
    renderSprites() {
        // Fighter Card Sprites
        const fighterCards = document.querySelectorAll('.fighter-sprite');
        if (fighterCards && fighterCards.length > 0) {
            fighterCards.forEach((card) => {
                const fighterCard = card.closest('.fighter-card');
                if (fighterCard) {
                    const fighterType = fighterCard.dataset.fighter;
                    const sprite = this.sprites[fighterType];
                    
                    if (sprite) {
                        card.textContent = sprite.emoji;
                        card.classList.add(sprite.animation);
                    }
                }
            });
        }
        
        // Profile Sprites
        Object.keys(this.sprites).forEach(spriteType => {
            const largeSprite = document.querySelector(`.${spriteType}-sprite-large`);
            if (largeSprite) {
                largeSprite.textContent = this.sprites[spriteType].emoji;
                largeSprite.classList.add(this.sprites[spriteType].animation);
            }
        });
    }
    
    animateSprite(element, animationName) {
        if (!element) return;
        element.classList.remove('spriteFloat', 'spriteWalk', 'spriteAttack');
        element.classList.add(animationName);
    }
    
    playAttackAnimation(element) {
        if (!element) return;
        element.classList.add('sprite-attack');
        setTimeout(() => {
            element.classList.remove('sprite-attack');
        }, 600);
    }
}

// Make class available globally
window.SpritesSystem = SpritesSystem;
