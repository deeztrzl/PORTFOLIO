/* ====================
   PIXEL PORTFOLIO - SPRITES SYSTEM
   Animated Pixel Art Characters
   ==================== */

class SpriteManager {
    constructor() {
        this.sprites = {
            'ai-engineer': {
                emoji: '🤖',
                name: 'AI Engineer',
                animation: 'spriteFloat'
            },
            'mechatronics': {
                emoji: '⚙️',
                name: 'Mechatronics',
                animation: 'spriteFloat'
            },
            'speaker': {
                emoji: '🎤',
                name: 'MC / Speaker',
                animation: 'spriteFloat'
            },
            'designer': {
                emoji: '🎨',
                name: 'Designer',
                animation: 'spriteFloat'
            }
        };
        
        this.init();
    }
    
    init() {
        this.renderSprites();
    }
    
    renderSprites() {
        // Fighter Card Sprites
        const fighterCards = document.querySelectorAll('.fighter-sprite');
        fighterCards.forEach((card) => {
            const fighterType = card.closest('.fighter-card').dataset.fighter;
            const sprite = this.sprites[fighterType];
            
            if (sprite) {
                card.textContent = sprite.emoji;
                card.classList.add(sprite.animation);
            }
        });
        
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
        element.classList.remove('spriteFloat', 'spriteWalk', 'spriteAttack');
        element.classList.add(animationName);
    }
    
    playAttackAnimation(element) {
        element.classList.add('sprite-attack');
        setTimeout(() => {
            element.classList.remove('sprite-attack');
        }, 600);
    }
}

// Initialize Sprite Manager
document.addEventListener('DOMContentLoaded', () => {
    window.spriteManager = new SpriteManager();
});
