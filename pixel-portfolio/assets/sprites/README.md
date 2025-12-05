# Sprite Assets

This directory is for pixel art sprites and character graphics.

## Current Setup

The portfolio currently uses **emoji sprites** for maximum compatibility.

Fighter sprites are defined in `js/sprites.js`:
- 🤖 AI Engineer
- ⚙️ Mechatronics Engineer
- 🎤 MC / Speaker
- 🎨 Designer

## Adding Custom Pixel Art Sprites

### Step 1: Create Sprites
Create 32x32 pixel PNG images:
- `ai-engineer.png`
- `mechatronics.png`
- `speaker.png`
- `designer.png`

### Step 2: Place in Directory
Save all PNG files to this `sprites/` directory

### Step 3: Update HTML
Edit `index.html` - Replace emoji with images:

```html
<!-- Old -->
<div class="fighter-sprite ai-sprite">🤖</div>

<!-- New -->
<div class="fighter-sprite ai-sprite" 
     style="background-image: url('assets/sprites/ai-engineer.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;">
</div>
```

## Sprite Recommendations

### Design Tips
- **Size**: 32x32 or 64x64 pixels (power of 2)
- **Style**: Pixel art, 2-8 colors per sprite
- **Format**: PNG with transparency
- **Animation**: Static or 2-frame simple animation

### Tools to Create
- **Aseprite**: Professional pixel art editor
- **Piskel**: Free online sprite editor
- **Lospec**: Free pixel art tool
- **GIMP**: Free general image editor

### Palette Suggestion
Use the portfolio color scheme:
- #000000 Black (shadows)
- #0a1a2f Navy (base)
- #ffffff White (highlights)
- #00ffff Cyan (accent 1)
- #ff00ff Magenta (accent 2)

## Animation Support

Current system supports:
- Static sprites ✅
- Hover animations ✅
- Click animations ✅
- Float effect ✅

To add sprite animation:
```css
@keyframes spriteWalk {
    0% { background-position: 0 0; }
    50% { background-position: -32px 0; }
    100% { background-position: 0 0; }
}

.sprite-walk {
    animation: spriteWalk 0.5s steps(2) infinite;
}
```

## Free Sprite Resources

- **OpenGameArt.org**: CC licensed sprites
- **itch.io**: Game assets library
- **Pixelart.com**: Free pixel art
- **GraphicsGale**: Sprite animation tool

## License

Ensure any sprites you use are:
- ✅ Created by you
- ✅ Licensed for commercial use (CC0, MIT, etc.)
- ✅ Properly attributed if required

---

**Note**: Current emoji-based system works great! Only add custom sprites if you want a unique look.
