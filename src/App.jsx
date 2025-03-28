import React from 'react';
import './App.css';
import StarBackground from './components/StarBackground';
import ParticlesBackground from './components/ParticlesBackground';
import MainWindow from './components/MainWindow';
import InfoWindow from './components/InfoWindow';

function App() {
  return (
    <div className="App">
      <StarBackground />
      <ParticlesBackground />
      <MainWindow />
      <InfoWindow />
      <div className="corner-decoration"></div>
    </div>
  );
}

export default App; 