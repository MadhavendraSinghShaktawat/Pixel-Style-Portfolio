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

function App() {
  return (
    <>
      {/* Background layer */}
      <div className="background-layer">
        <SpaceBackground />
        <FloatingPixels />
        <WormholeEffect />
        <ShootingStars />
        <ConstellationEffect />
      </div>
      
      {/* Content layer */}
      <div className="App">
        <CursorTrail />
        <PerformanceToggle />
        <MainWindow />
        <InfoWindow />
        <div className="corner-decoration"></div>
      </div>
    </>
  );
}

export default App; 