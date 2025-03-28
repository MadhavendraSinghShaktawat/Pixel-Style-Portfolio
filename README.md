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

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
```

## How to Update Your README.md

### Option 1: Replace the Entire File

1. Open your README.md file in your code editor
2. Delete all existing content
3. Paste the entire content provided above
4. Save the file

### Option 2: Use Git Commands

```bash
# From your project directory
cat > README.md << 'EOF'
# Interactive Portfolio with Space Theme

A stunning space-themed portfolio built with React, Vite and TypeScript featuring:

- 🌌 Interactive space background with planets, stars, and nebulas
- ⭐ Dynamic constellations that form pixel art patterns
- 💫 Shooting stars and comets with realistic physics
- 🕹️ Pixel art UI with retro window aesthetics
- ✨ Interactive elements that respond to user mouse movements
- 🚀 Optimized performance with a toggle for low-end devices

