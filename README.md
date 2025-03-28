# Interactive Portfolio with Space Theme

A stunning space-themed portfolio built with React, Vite and TypeScript featuring:

- 🌌 Interactive space background with planets, stars, and nebulas
- ⭐ Dynamic constellations that form pixel art patterns
- 💫 Shooting stars and comets with realistic physics
- 🕹️ Pixel art UI with retro window aesthetics
- ✨ Interactive elements that respond to user mouse movements
- 🚀 Optimized performance with a toggle for low-end devices

## Features

### Dynamic Space Background
- Interactive canvas-based space simulation
- Parallax effect tied to mouse movements
- Click anywhere to create particle explosions
- Twinkling stars with realistic glow effects
- Rotating planets with moons and rings
- Colorful nebulas and passing comets

### Interactive Skill Planets
- Skills visualized as orbiting planets in a galaxy
- Planet size indicates skill proficiency level
- Hover/tap to reveal detailed skill information
- Skill moons represent mastery levels
- Interactive 3D-like rotation and scaling effects
- Mobile-optimized touch interactions

### Pixel Art UI Elements
- Retro-styled windows with functional controls
- Dynamic typewriter text effects
- Pixel-perfect avatar with interactive features
- Terminal simulation with realistic commands
- Skill tags with hover animations
- Draggable windows with realistic physics

### Performance Optimizations
- Optimized canvas rendering 
- Toggle between high and low performance modes
- Mobile-friendly responsive design
- Adaptive effects based on device capabilities
- **Android optimization with background pausing**

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pixel-portfolio.git

# Navigate to project directory
cd pixel-portfolio

# Install dependencies
npm install
# or
yarn
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
```

### Build

```bash
# Build for production
npm run build
# or
yarn build

# Preview the production build
npm run preview
# or
yarn preview
```

## Project Structure
pixel-portfolio/
├── public/ # Static assets
├── src/
│ ├── components/
│ │ ├── SpaceBackground.jsx # Interactive space background
│ │ ├── ConstellationEffect.jsx # Star constellations
│ │ ├── ShootingStars.jsx # Shooting stars animation
│ │ ├── FloatingPixels.jsx # Floating pixel elements
│ │ ├── WormholeEffect.jsx # Wormhole/portal effect
│ │ ├── CursorTrail.jsx # Interactive cursor trail
│ │ ├── PerformanceToggle.jsx # Performance mode toggle
│ │ ├── MainWindow.jsx # Main content window
│ │ ├── InfoWindow.jsx # Information window
│ │ ├── PixelAvatar.jsx # Pixel art avatar
│ │ ├── DynamicTitle.jsx # Rotating title text
│ │ ├── SkillTags.jsx # Skill tag display
│ │ ├── Terminal.jsx # Terminal simulation
│ │ ├── SocialLinks.jsx # Social media links
│ │ └── ... # Other UI components
│ ├── App.jsx # Main application component
│ ├── main.jsx # Application entry point
│ └── App.css # Global styles
├── index.html # HTML template
├── vite.config.js # Vite configuration
├── tsconfig.json # TypeScript configuration
└── package.json # Project dependencies and scripts




## Customization

### Changing the Theme Colors
Edit the CSS variables in `src/App.css`:

```css
:root {
  --main-purple: #6a0dad;
  --main-dark: #0a0a0a;
  --accent-pink: #ff69b4;
  --text-light: #f0f0f0;
  --window-border: #8a57b1;
  --pixel-size: clamp(2px, 0.4vw, 4px);
}
```

### Adding Your Personal Information
Update the `MainWindow.jsx` and `InfoWindow.jsx` components with your:
- Name and professional roles
- Education details
- Skills and expertise
- Work history or projects
- Social media links

### Modifying the Space Background
Adjust the space elements in `SpaceBackground.jsx`:
- Change colors of planets and stars
- Add more celestial objects
- Adjust sizes and animation speeds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers with good canvas support

## Performance Considerations

The space background uses canvas for rendering, which can be intensive on some devices. On lower-end devices:

1. Use the Performance Toggle to switch to low-performance mode
2. Consider disabling some effects by modifying the CSS class `.low-performance-mode`
3. On mobile, some effects are automatically simplified

### Android-Specific Optimizations

For Android devices, the portfolio implements special performance optimizations:

1. **Background Visibility Detection**: The space background pauses rendering when not visible to the user
2. **IntersectionObserver Implementation**: Using modern browser APIs to detect when elements are in viewport
3. **Animation Frame Pausing**: Canvas animation frames are paused when scrolled out of view
4. **Reduced Animation Complexity**: Automatically reduces particle count and effect complexity on Android
5. **Battery-Aware Rendering**: Adjusts animation quality based on device battery status (when available)

To implement these optimizations in your components:

```jsx
// Example implementation in SpaceBackground.jsx
useEffect(() => {
  // Detect Android
  const isAndroid = /Android/i.test(navigator.userAgent);
  
  if (isAndroid) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Resume animations when visible
            resumeAnimations();
          } else {
            // Pause animations when not visible
            pauseAnimations();
          }
        });
      },
      { threshold: 0.1 } // 10% visibility threshold
    );
    
    // Observe the canvas element
    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }
    
    return () => {
      if (canvasRef.current) {
        observer.unobserve(canvasRef.current);
      }
    };
  }
}, []);
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Font: Press Start 2P, VT323 from Google Fonts
- Inspiration from retro computing interfaces and pixel art
- Canvas rendering techniques for space simulation
- React and Vite for the modern development experience

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

