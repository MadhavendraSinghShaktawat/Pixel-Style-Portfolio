import React from 'react';
import PixelWindow from './PixelWindow';
import PixelAvatar from './PixelAvatar';
import DynamicTitle from './DynamicTitle';
import Terminal from './Terminal';
import SocialLinks from './SocialLinks';
import './MainWindow.css';

const MainWindow = () => {
  return (
    <PixelWindow title="portfolio.exe" className="main-window">
      <div className="hero-content">
        <div className="left-column">
          <PixelAvatar />
          <SocialLinks />
        </div>
        
        <div className="right-column">
          <div className="intro-section">
            <DynamicTitle />
          </div>
          
          <div className="terminal-section">
            <Terminal />
          </div>
        </div>
      </div>
    </PixelWindow>
  );
};

export default MainWindow; 