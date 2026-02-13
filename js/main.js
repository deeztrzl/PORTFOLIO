/* ====================
   PIXEL PORTFOLIO - MAIN ENTRY POINT
   Initializes all systems in proper order
   ==================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Audio System
    if (window.AudioSystem) {
        window.audioSystem = new AudioSystem();
    }
    
    // Initialize Effects System
    if (window.EffectsSystem) {
        window.effectsSystem = new EffectsSystem();
    }
    
    // Initialize Sprites System
    if (window.SpritesSystem) {
        window.spritesSystem = new SpritesSystem();
    }
    
    // Initialize Navigation System (depends on projectsData & audioSystem)
    if (window.NavigationSystem) {
        window.navigationSystem = new NavigationSystem();
    }
    
    console.log('Pixel Portfolio initialized successfully');
});
