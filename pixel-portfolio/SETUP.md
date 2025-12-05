# 🎮 PIXEL PORTFOLIO - SETUP & DEPLOYMENT GUIDE

## Quick Start (5 Minutes)

### 1. Open in Browser
Simply open `index.html` in any modern web browser. That's it! No installation needed.

```
File → Open File → Select index.html
```

### 2. Test Locally
- Press ENTER or click "PRESS ENTER TO START"
- Select a fighter by clicking on one of the four cards
- Use the bottom menu to navigate
- Click the speaker icon 🔊 to test sound (after user interaction)
- Click the TV icon 📺 to enable CRT effect

## 📂 File Organization

```
pixel-portfolio/
├── index.html                 # Main file - OPEN THIS
├── README.md                  # Documentation
├── SETUP.md                   # This file
├── audio-generator.html       # Tool to create BGM
│
├── css/
│   ├── style.css             # Main styles (40KB)
│   ├── animations.css        # All animations
│   └── crt-effect.css        # CRT overlay effects
│
├── js/
│   ├── audio.js              # Sound system
│   ├── sprites.js            # Character sprites
│   ├── navigation.js         # Screen navigation
│   └── effects.js            # Visual effects
│
└── assets/
    ├── audio/
    │   └── arcade-bgm.mp3    # (Optional) Background music
    ├── sprites/              # Placeholder for sprite assets
    └── fonts/                # Placeholder for fonts
```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended - FREE)

1. **Create GitHub Account**
   - Go to github.com and sign up

2. **Create Repository**
   - Click "+" → New repository
   - Name: `portfolio` or `rifki-portfolio`
   - Choose Public
   - Click Create

3. **Upload Files**
   - Click "Upload files"
   - Drag all files from pixel-portfolio folder
   - Commit changes

4. **Enable GitHub Pages**
   - Settings → Pages
   - Source: main branch
   - Save
   - Your site will be at: `https://yourusername.github.io/portfolio`

### Option 2: Netlify (FREE with Git)

1. **Connect Repository**
   - Go to netlify.com
   - Sign up with GitHub
   - Select your portfolio repository
   - Click Deploy

2. **Auto Deployment**
   - Every push to GitHub auto-deploys
   - Get a custom domain name

### Option 3: Vercel (FREE)

1. **Import from Git**
   - vercel.com → Import Project
   - Select your GitHub repository
   - Deploy

2. **Features**
   - Automatic deployments
   - Custom domains
   - SSL certificate included

### Option 4: Web Host (Paid)

1. **Upload to Any Web Host**
   - FTP upload to hosting provider
   - Point domain to hosting
   - Done!

## 📝 Customization

### Add Your Contact Info

Edit `index.html` - Find Contact section:

```html
<div class="form-group">
    <label>EMAIL:</label>
    <p class="contact-info">rdestrizal@gmail.com</p>  <!-- CHANGE THIS -->
</div>

<a href="https://linkedin.com/in/rifkidestrizal" target="_blank">  <!-- CHANGE THIS -->
    💼 LINKEDIN
</a>
```

### Change Colors

Edit `css/style.css` - Find `:root`:

```css
:root {
    --color-black: #000000;        /* Main background */
    --color-navy: #0a1a2f;         /* Panels background */
    --color-white: #ffffff;        /* Text color */
    --color-accent: #ff00ff;       /* Magenta highlights */
    --color-secondary: #00ffff;    /* Cyan highlights */
    --color-warning: #ffaa00;      /* Orange */
    --color-success: #00ff00;      /* Green */
}
```

### Add Background Music

1. **Option A: Generate BGM**
   - Open `audio-generator.html` in browser
   - Click "Generate Arcade BGM"
   - Download the WAV file
   - Convert to MP3 using online converter (freemake.com)
   - Save as `assets/audio/arcade-bgm.mp3`

2. **Option B: Find Free Music**
   - Visit opengameart.org
   - Download retro game music
   - Convert to MP3 if needed
   - Save as `assets/audio/arcade-bgm.mp3`

3. **Option C: Use Online Music**
   - Edit `index.html` - Find `<audio>` tag:
   ```html
   <audio id="game-audio" loop>
       <source src="assets/audio/arcade-bgm.mp3" type="audio/mpeg">
   </audio>
   ```
   - Replace with URL to online audio file

### Modify Project List

Edit `index.html` - Find Projects section:

```html
<div class="project-cartridge">
    <div class="cartridge-label">CATEGORY</div>
    <h3>Your Project Name</h3>
    <p>Your project description here</p>
    <div class="cartridge-tags">
        <span class="tag">Technology</span>
        <span class="tag">Stack</span>
    </div>
</div>
```

### Change Fighter Stats

Edit `index.html` - Find profile sections:

```html
<div class="stat">
    <span class="stat-label">YOUR STAT</span>
    <div class="stat-bar-fill" style="width: 85%;">85%</div>
</div>
```

## 🎨 Advanced Customization

### Add New Fighter Class

1. **Add HTML Section** in `index.html`:

```html
<!-- New Fighter Profile -->
<section id="profile-myskill" class="screen profile-screen">
    <div class="profile-container">
        <div class="profile-header">
            <div class="profile-sprite myskill-sprite-large"></div>
            <div class="profile-info">
                <h2 class="profile-title">RIFKI — MY NEW SKILL</h2>
                <p class="profile-subtitle">Subtitle here</p>
            </div>
        </div>
        <!-- Stats, skills, projects... -->
    </div>
</section>
```

2. **Add Fighter Card** in fighters grid:

```html
<div class="fighter-card" data-fighter="myskill">
    <div class="fighter-sprite myskill-sprite"></div>
    <h3 class="fighter-name">MY SKILL</h3>
    <p class="fighter-desc">Description</p>
</div>
```

3. **Update JavaScript** in `js/sprites.js`:

```javascript
this.sprites = {
    'myskill': {
        emoji: '✨',  // Change emoji
        name: 'My Skill',
        animation: 'spriteFloat'
    },
    // ... existing sprites
};
```

### Create Custom Font

1. Download pixel font from dafont.com (search "pixel")
2. Save to `assets/fonts/`
3. Add to `css/style.css`:

```css
@font-face {
    font-family: 'MyPixelFont';
    src: url('../assets/fonts/myfont.ttf') format('truetype');
}

body {
    font-family: 'MyPixelFont', cursive;
}
```

### Add Sprite Graphics

1. Create 16x16 or 32x32 pixel sprites
2. Save as PNG in `assets/sprites/`
3. Replace emoji sprites with images:

```html
<div class="fighter-sprite ai-sprite" style="
    background-image: url('assets/sprites/ai-engineer.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
"></div>
```

## 🔍 SEO Optimization

Add to `index.html` `<head>`:

```html
<meta name="description" content="Rifki Destrizal's retro pixel-art arcade portfolio. AI Engineer, Designer, Speaker.">
<meta name="keywords" content="portfolio, AI, design, engineering, arcade, pixel-art">
<meta name="author" content="Rifki Destrizal">
<meta property="og:title" content="Rifki Destrizal - Pixel Portfolio Arcade">
<meta property="og:description" content="A retro 2D arcade-style personal portfolio">
<meta property="og:type" content="website">
```

## 🐛 Troubleshooting

### Audio Not Playing
- ✅ Check browser console (F12)
- ✅ Ensure audio file exists at `assets/audio/arcade-bgm.mp3`
- ✅ Browsers require user interaction before audio plays
- ✅ Try clicking sound button after page loads

### Styles Look Broken
- ✅ Clear browser cache (Ctrl+Shift+Del)
- ✅ Hard refresh (Ctrl+Shift+R)
- ✅ Check all CSS files are in `css/` folder

### Navigation Not Working
- ✅ Check browser console for JS errors
- ✅ Ensure all JS files are in `js/` folder
- ✅ Try different browser

### Mobile Display Issues
- ✅ Check viewport meta tag exists
- ✅ Use device preview in browser DevTools
- ✅ Test on actual mobile device

## 📊 Performance Optimization

### Reduce File Size
1. Minify CSS and JavaScript
   - Use minifier.org
   - Save as `.min.css` and `.min.js`
   - Update references in HTML

2. Optimize Images
   - Use WebP format if available
   - Compress PNG/JPG files
   - Use smaller sprite sizes

3. Lazy Load Resources
   - Only load sprites when visible
   - Defer JavaScript loading

### Improve Speed
```html
<!-- Add to <head> for faster loading -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="//fonts.googleapis.com">

<!-- Defer non-critical JS -->
<script src="js/effects.js" defer></script>
```

## 🔐 Security Best Practices

### Protect Email
Use email obfuscation:
```html
<!-- Instead of plain email -->
<p>Contact: <span class="email-obfuscated">rdestrizal@gmail.com</span></p>

<script>
const encoded = 'cmRlc3RyaXphbEBnbWFpbC5jb20=';
document.querySelector('.email-obfuscated').href = 
    'mailto:' + atob(encoded);
</script>
```

### Use HTTPS
- GitHub Pages: automatic ✅
- Netlify: automatic ✅
- Vercel: automatic ✅
- Other: Use Let's Encrypt (free)

## 📱 Mobile Testing

### Test Locally on Mobile
1. Get your IP address (ipconfig on Windows)
2. Share on same WiFi
3. Open `http://192.168.x.x:8000` on mobile
4. Test touch interactions

### Browser DevTools
- Press F12
- Click device toolbar icon
- Test different screen sizes

## 🚀 Going Live Checklist

- [ ] All links working
- [ ] Contact info updated
- [ ] Images optimized
- [ ] Mobile responsive tested
- [ ] Audio/sound working
- [ ] No console errors
- [ ] SEO metadata added
- [ ] Domain registered
- [ ] HTTPS enabled
- [ ] Analytics added (optional)

## 📈 Add Google Analytics

Add to `index.html` `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your Google Analytics ID.

## 💰 Free Hosting Services Comparison

| Service | Best For | Price | Setup |
|---------|----------|-------|-------|
| GitHub Pages | Simplicity | FREE | 5 min |
| Netlify | Performance | FREE | 10 min |
| Vercel | Speed | FREE | 10 min |
| Firebase | Scale | FREE tier | 15 min |
| Heroku | Backend | FREE tier | 20 min |

## 🎓 Next Steps

1. Deploy to GitHub Pages or Netlify
2. Share link with friends/recruiters
3. Get feedback
4. Iterate and improve
5. Add more projects
6. Customize colors/theme
7. Add animations
8. Optimize for SEO

## 📞 Support Resources

- **CSS Help**: developer.mozilla.org/CSS
- **JavaScript**: developer.mozilla.org/JavaScript
- **Web Audio**: developer.mozilla.org/Web/API/Web_Audio_API
- **Deployment**: docs.github.com/pages

---

**Happy Deploying! 🚀✨**

For questions or issues, refer to README.md or check the source code comments.
