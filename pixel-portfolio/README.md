# 🎮 RIFKI DESTRIZAL - PIXEL PORTFOLIO ARCADE

A retro 2D pixel-art arcade-style personal portfolio website inspired by classic fighting game select screens.

## 🎯 Features

### 🕹️ **Core Gameplay**
- **Landing Screen** - Classic arcade intro with blinking "PRESS ENTER TO START" button
- **Fighter Select** - Choose your professional persona (AI Engineer, Mechatronics, MC/Speaker, Designer)
- **Fighter Profiles** - Detailed character pages with stats, skills, and projects
- **Navigation Menu** - Quick access to About, Projects, and Contact sections

### 🎨 **Visual Theme**
- Retro 2D pixel-art aesthetic
- Navy (#0a1a2f) and black (#000000) color scheme
- White text with pixel-style fonts (Press Start 2P)
- Responsive design - works on desktop and mobile
- Glitch text effects and arcade transitions

### 🔧 **Interactive Features**
- **Sound System** - 8-bit sound effects with mute toggle
- **CRT Effect** - Toggle scanlines overlay for authentic retro monitor look
- **Particle Effects** - Click particles and hover effects
- **Smooth Transitions** - Arcade-style screen fading and animations
- **Keyboard Shortcuts** - Enter to start, Escape to go back

### 📱 **Fighter Classes**

#### 🤖 AI Engineer
- Skills: ML, NLP, Computer Vision, Python
- Special Move: Neural Burst
- Projects: AI Agent Document Analyzer, Smart Hospital Simulation

#### ⚙️ Mechatronics Engineer
- Skills: Electronics, Arduino, Sensors, Control Systems
- Special Move: Mechanical Surge
- Projects: Automatic Canopy System, Smart Hospital Simulation

#### 🎤 MC / Public Speaker
- Achievements: 2nd Runner Up Putra UPI 2024, Top 7 Putra Bumi Siliwangi 2025
- Skills: Public Speaking, Hosting, Leadership
- Special Move: Sonic Boom

#### 🎨 Designer
- Skills: UI/UX, Figma, WCAG 2.1, Prototyping
- Special Move: Pixel Slash
- Projects: JMO UI/UX Redesign, Social Media Content

## 📁 Project Structure

```
pixel-portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet
│   ├── animations.css     # Animation keyframes
│   └── crt-effect.css     # CRT overlay effects
├── js/
│   ├── audio.js           # Audio system & sound effects
│   ├── sprites.js         # Sprite management
│   ├── navigation.js      # Screen navigation
│   └── effects.js         # Visual effects system
└── assets/
    ├── sprites/           # Placeholder for sprite assets
    ├── audio/             # Placeholder for audio files
    └── fonts/             # Custom font files
```

## 🚀 Getting Started

### Installation

1. Clone or download this repository
2. Open `index.html` in a modern web browser
3. No build process or dependencies needed!

### Usage

- **Start Game**: Press ENTER or click "PRESS ENTER TO START"
- **Select Fighter**: Click on any fighter card to view detailed profile
- **Navigate**: Use bottom menu bar or keyboard shortcuts
- **Toggle Sound**: Click the speaker icon (top-right)
- **Toggle CRT**: Click the TV icon (top-right) for scanlines effect

## 🎮 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| ENTER | Start game / Confirm |
| ESC | Go back |
| Arrow Keys | (Future: navigate between fighters) |

## 🔊 Audio System

The portfolio includes:
- **Web Audio API** - Generates 8-bit sound effects programmatically
- **Sound Effects**:
  - Power On - Game startup sound
  - Select - Fighter hover/selection
  - Confirm - Action confirmation
  - Back - Navigation back
- **Mute Toggle** - Click speaker icon to toggle audio

## 🎨 Customization Guide

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --color-black: #000000;
    --color-navy: #0a1a2f;
    --color-white: #ffffff;
    --color-accent: #ff00ff;
    --color-secondary: #00ffff;
}
```

### Add New Fighters
1. Add new section in `index.html` with ID `profile-{fighter-name}`
2. Update fighter cards in fighters grid
3. Add navigation in `js/navigation.js`

### Modify Fighter Stats
Edit the stat bars in each profile section:
```html
<div class="stat">
    <span class="stat-label">STAT NAME</span>
    <div class="stat-bar-fill" style="width: 85%;">85%</div>
</div>
```

### Add Projects
Update the Projects section with new project cartridges:
```html
<div class="project-cartridge">
    <div class="cartridge-label">CATEGORY</div>
    <h3>Project Name</h3>
    <p>Description</p>
    <div class="cartridge-tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
    </div>
</div>
```

## 🎵 Adding Background Music

To add arcade background music:

1. Place an MP3 file in `assets/audio/arcade-bgm.mp3`
2. The audio element in HTML will automatically play it when sound is enabled

**Recommended**: Use free retro game music from:
- OpenGameArt.org
- FreePD.com
- YouTube Audio Library

## 📱 Mobile Optimization

The portfolio is fully responsive:
- Breakpoint at 768px (tablets)
- Breakpoint at 480px (mobile)
- Touch-friendly button sizes
- Optimized menu layout for small screens

## 🌟 Advanced Features

### CRT Effect
Toggle "📺" button to enable:
- Horizontal scanlines
- Vignette effect
- Phosphor glow
- Screen flicker simulation
- Interlaced display effect

### Particle Effects
- Hover particles on interactive elements
- Click expansion circles
- Colored glow feedback

### Screen Shake
Triggered on certain actions for arcade feel

### Glitch Effects
Text and elements have glitch animations on transitions

## 🛠️ Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 File Sizes

- HTML: ~25KB
- CSS: ~40KB (all styles combined)
- JavaScript: ~15KB (all scripts combined)
- **Total**: ~80KB (uncompressed)

## 🎓 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling, animations, gradients
- **Vanilla JavaScript** - No frameworks needed
- **Web Audio API** - Sound effect generation
- **Responsive Design** - Mobile-first approach

## 🔧 Troubleshooting

### Audio Not Playing
- Check browser console for errors
- Ensure audio permission is granted
- Try clicking the speaker button after page loads
- Some browsers require user interaction first

### Animations Stuttering
- Disable CRT effect if performance issues occur
- Close unnecessary browser tabs
- Check GPU acceleration settings

### Mobile Display Issues
- Clear browser cache
- Use latest browser version
- Check viewport meta tag in HTML

## 📧 Contact

**Email**: rdestrizal@gmail.com  
**LinkedIn**: linkedin.com/in/rifkidestrizal  
**GitHub**: github.com/rifkidestrizal

## 📄 License

This portfolio is personal work. Feel free to use as inspiration for your own portfolio!

## 🎮 Credits

- **Font**: Press Start 2P by Cody "CodeMan38" Boisclair
- **Inspiration**: Classic arcade fighting games (Street Fighter, Mortal Kombat)
- **Sound Design**: 8-bit audio synthesis via Web Audio API

---

**Version**: 1.0.0  
**Last Updated**: December 5, 2025

**Enjoy your retro arcade portfolio experience! 🎮✨**
