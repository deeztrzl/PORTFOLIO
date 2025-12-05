# Image Integration Guide

## Portrait Image Setup

The home page has been updated to display a portrait image in the intro section.

### File Location
Save the portrait image to:
```
assets/images/rifki-portrait.png
```

### Image Requirements
- **Format**: PNG (recommended for pixel art), JPG, or WebP
- **Dimensions**: Recommended width of 200-300px for best results
- **Aspect Ratio**: Portrait orientation (height > width)
- **Style**: Pixel art or retro game aesthetic to match the portfolio theme

### Responsive Sizes
The portrait image scales responsively:
- **Desktop (1024px+)**: 140px width
- **Tablet (768px)**: 100px width  
- **Mobile (480px)**: 80px width
- **Small Mobile (<480px)**: 80px width

### Styling
The image includes:
- **Border**: 4px white border matching the pixel aesthetic
- **Glow Effect**: Magenta box-shadow (0 0 20px rgba(255, 0, 255, 0.5))
- **Animation**: Pulsing glow animation (2s loop)
- **Rendering**: Pixel-perfect rendering (`image-rendering: pixelated`)

### HTML Structure
```html
<div class="intro-art">
    <img src="assets/images/rifki-portrait.png" alt="Rifki Destrizal" class="portrait-image">
</div>
```

### CSS Classes Applied
- `.portrait-image` - Main styling for the image (width, border, shadow, animation)
- `.intro-art` - Container (flex layout for centering)

## How to Add the Image

1. **Save the portrait image** as `rifki-portrait.png` in the `assets/images/` folder
2. **The HTML and CSS are already updated** - no additional code changes needed
3. **Test on different screen sizes** to verify the image displays correctly

## Alternative Images

To use a different image:
1. Replace `assets/images/rifki-portrait.png` with your image file
2. Optionally update the filename in `index.html` (line 36):
   ```html
   <img src="assets/images/your-image-name.png" alt="Rifki Destrizal" class="portrait-image">
   ```

## Troubleshooting

**Image not displaying?**
- Verify the file is in the correct location: `assets/images/rifki-portrait.png`
- Check browser console for 404 errors
- Ensure filename matches exactly (case-sensitive on servers)

**Image looks blurry?**
- Use PNG or WebP format for pixel art (JPG compresses and blurs pixels)
- Ensure the image has `image-rendering: pixelated` applied (already in CSS)

**Image size too large/small?**
- Adjust `.portrait-image` width in `css/style.css`
- Current: 140px desktop, 100px tablet, 80px mobile
- The height adjusts automatically (height: auto)
