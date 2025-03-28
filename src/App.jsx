import React from 'react';
import './App.css';
import SpaceBackground from './components/SpaceBackground';
import CursorTrail from './components/CursorTrail';
import ShootingStars from './components/ShootingStars';
import FloatingPixels from './components/FloatingPixels';
import WormholeEffect from './components/WormholeEffect';
import ConstellationEffect from './components/ConstellationEffect';
import PerformanceToggle from './components/PerformanceToggle';
import MainWindow from './components/MainWindow';
import InfoWindow from './components/InfoWindow';
import SkillsSection from './components/SkillsSection';

function App() {
  return (
    <div className="app-container">
      {/* Background Layer */}
      <div className="background-layer">
        <SpaceBackground />
        <FloatingPixels />
        <ConstellationEffect />
        <WormholeEffect />
      </div>
      
      {/* Content Layer */}
      <div className="content-layer">
        <MainWindow />
        <SkillsSection />
        <InfoWindow />
        <div className="corner-decoration"></div>
      </div>
    </div>
  );
}

export default App; 