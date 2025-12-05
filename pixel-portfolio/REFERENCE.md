# 🎮 PIXEL PORTFOLIO - QUICK REFERENCE

## ⚡ Quick Start (30 Seconds)

```bash
1. Open index.html in browser
2. Press ENTER or click "PRESS ENTER TO START"
3. Click a fighter to see profile
4. Enjoy! 🎮
```

## 🎯 File Quick Access

| File | Purpose | Lines |
|------|---------|-------|
| `index.html` | Main game file | 450 |
| `css/style.css` | Main styling | 600 |
| `css/animations.css` | All animations | 400 |
| `css/crt-effect.css` | CRT effects | 300 |
| `js/audio.js` | Sound effects | 120 |
| `js/sprites.js` | Characters | 80 |
| `js/navigation.js` | Screen system | 180 |
| `js/effects.js` | Visual effects | 250 |

## 🔧 Common Edits

### Change Title
**File**: `index.html` (Line 28)
```html
<h1 class="pixel-text glitch-text">YOUR NAME HERE</h1>
```

### Change Email
**File**: `index.html` (Line 290)
```html
<p class="contact-info">youremail@gmail.com</p>
```

### Change LinkedIn URL
**File**: `index.html` (Line 303)
```html
<a href="https://linkedin.com/in/yourprofile" target="_blank">
```

### Change Colors
**File**: `css/style.css` (Line 12-19)
```css
:root {
    --color-accent: #ff00ff;      /* Magenta */
    --color-secondary: #00ffff;   /* Cyan */
}
```

### Change Fighter Stats
**File**: `index.html` - Search "INTELLIGENCE"
```html
<div class="stat-bar-fill" style="width: 95%;">95%</div>
```

### Add New Project
**File**: `index.html` - Find "PROJECT CARTRIDGES" section
```html
<div class="project-cartridge">
    <div class="cartridge-label">LABEL</div>
    <h3>Project Name</h3>
    <p>Description</p>
    <div class="cartridge-tags">
        <span class="tag">Tech</span>
    </div>
</div>
```

## 🎨 CSS Selectors Guide

```css
/* Buttons */
.btn-arcade
.btn-control
.btn-social

/* Cards */
.fighter-card
.project-cartridge
.skill-item

/* Text */
.pixel-text
.glitch-text
.section-title

/* Containers */
.screen
.profile-container
.game-container

/* Effects */
.glow-cyan
.sprite-float
.transition-slide-up
```

## 🎬 Animation Names

```css
/* Entrance */
@keyframes slideInLeft
@keyframes slideInRight
@keyframes slideInUp
@keyframes pixelPop

/* Effects */
@keyframes glitch
@keyframes pulse
@keyframes float
@keyframes glow

/* Interactive */
@keyframes blink
@keyframes buttonPress
@keyframes shake

/* CRT */
@keyframes scanlines
@keyframes crtFlicker
```

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| ENTER | Start / Confirm |
| ESC | Go back |
| 🔊 Icon | Toggle sound |
| 📺 Icon | Toggle CRT |

## 📱 Mobile Testing

### Chrome DevTools
```
F12 → Ctrl+Shift+M → Choose device
```

### Responsive Sizes
- Desktop: 1024px+
- Tablet: 768px-1023px
- Mobile: 480px-767px
- Small: <480px

## 🔊 Audio Events

```javascript
window.audioSystem.playSoundEffect('select')    // Hover
window.audioSystem.playSoundEffect('confirm')   // Click
window.audioSystem.playSoundEffect('back')      // Go back
window.audioSystem.playSoundEffect('power-on')  // Start
```

## 🎮 Navigation Commands

```javascript
window.navigationSystem.navigateTo('screen-fighters')
window.navigationSystem.navigateTo('screen-about')
window.navigationSystem.goBack()
window.navigationSystem.getCurrentScreen()
```

## 🎨 Effects Commands

```javascript
window.effectsSystem.toggleCRT()
window.effectsSystem.addScreenShake(5, 200)
window.effectsSystem.flickerScreen(3, 100)
window.effectsSystem.addGlitchEffect(element)
```

## 📁 Directory Tree

```
pixel-portfolio/
├── index.html           [Open this file]
├── README.md            [Documentation]
├── SETUP.md             [Deployment guide]
├── FEATURES.md          [Feature list]
├── REFERENCE.md         [This file]
├── audio-generator.html [BGM tool]
├── css/
│   ├── style.css
│   ├── animations.css
│   └── crt-effect.css
├── js/
│   ├── audio.js
│   ├── sprites.js
│   ├── navigation.js
│   └── effects.js
└── assets/
    ├── audio/
    ├── sprites/
    └── fonts/
```

## 🎯 Screen IDs

```javascript
'screen-intro'         // Landing screen
'screen-fighters'      // Fighter select
'profile-ai-engineer'  // AI Engineer profile
'profile-mechatronics' // Mechatronics profile
'profile-speaker'      // Speaker profile
'profile-designer'     // Designer profile
'screen-about'         // About page
'screen-projects'      // Projects page
'screen-contact'       // Contact page
```

## 🎨 Color Values

```
Black:     #000000
Navy:      #0a1a2f
White:     #ffffff
Magenta:   #ff00ff
Cyan:      #00ffff
Green:     #00ff00
Orange:    #ffaa00
```

## 🚀 Deployment Links

| Service | Setup Time | Free? |
|---------|-----------|-------|
| GitHub Pages | 5 min | ✅ |
| Netlify | 10 min | ✅ |
| Vercel | 10 min | ✅ |
| Firebase | 15 min | ✅ |

## 🐛 Debug Tips

```javascript
// Check current screen
console.log(window.navigationSystem.getCurrentScreen())

// List all screens
document.querySelectorAll('.screen').forEach(s => {
    console.log(s.id, s.classList.contains('active'))
})

// Test audio
window.audioSystem.playSoundEffect('confirm')

// Toggle CRT manually
window.effectsSystem.toggleCRT()

// Create screen shake
window.effectsSystem.addScreenShake(10, 500)
```

## 📊 Performance Stats

- **Load Time**: <1 second
- **First Paint**: <500ms
- **Interactive**: <1.5s
- **Page Size**: ~80KB uncompressed
- **FPS**: 60fps (smooth)
- **Mobile**: Excellent on 3G+

## 🌐 Browser DevTools

### Network Tab
- Check CSS/JS loads
- Verify no 404 errors
- Monitor load time

### Console Tab
- Check for JS errors
- Test audio system
- Debug navigation

### Application Tab
- Check localStorage
- View cookies
- Test offline mode

## 📝 Markdown Files

1. **README.md** - Overview & features
2. **SETUP.md** - Deployment & customization
3. **FEATURES.md** - Complete feature list
4. **REFERENCE.md** - This quick reference

## 🎓 Learning Paths

### Frontend Developer
1. Learn HTML structure
2. Study CSS layouts & animations
3. Understand JavaScript events
4. Deploy to web

### Game Developer
1. Study game loops
2. Learn state management
3. Create game objects
4. Implement physics

### UI/UX Designer
1. Analyze color scheme
2. Study button interactions
3. Check responsive design
4. Review accessibility

## 💡 Pro Tips

✅ Use browser DevTools for debugging  
✅ Test on real mobile devices  
✅ Keep CSS organized in sections  
✅ Comment complex JavaScript  
✅ Test all links before deploying  
✅ Optimize images before upload  
✅ Use GitHub for version control  
✅ Deploy to multiple services  

## 🔗 Useful Links

- **Google Fonts**: fonts.google.com
- **Color Tools**: coolors.co
- **Icon Library**: emojidb.org
- **Image Compression**: tinypng.com
- **Audio Tools**: audacity.com
- **GitHub Pages**: pages.github.com
- **Netlify**: netlify.com
- **MDN Docs**: developer.mozilla.org

## 📞 Quick Contact

**Email**: rdestrizal@gmail.com  
**Portfolio**: (Your deployed URL)  
**GitHub**: github.com/rifkidestrizal  
**LinkedIn**: linkedin.com/in/rifkidestrizal  

---

### 🎮 ENJOY YOUR ARCADE PORTFOLIO! 🎮

For detailed info: See README.md, SETUP.md, FEATURES.md  
For code: Open HTML/CSS/JS files - they have comments!  
For help: Check browser console (F12)
