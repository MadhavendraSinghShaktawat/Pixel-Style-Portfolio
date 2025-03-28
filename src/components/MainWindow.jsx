import React, { useState, useEffect } from 'react';
import PixelWindow from './PixelWindow';
import PixelAvatar from './PixelAvatar';
import SkillTags from './SkillTags';
import Terminal from './Terminal';
import SocialLinks from './SocialLinks';
import './MainWindow.css';

const MainWindow = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "Developer",
    "Entrepreneur",
    "AI Enthusiast",
    "Problem Solver"
  ];

  const [offset, setOffset] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth / 2 - e.clientX) / 50;
      const y = (window.innerHeight / 2 - e.clientY) / 50;
      setOffset({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const titleBoxStyle = {
    backgroundColor: '#2d1a41',
    border: '3px solid #ff69b4',
    borderRadius: '8px',
    padding: '20px',
    width: '100%',
    marginBottom: '20px',
    boxShadow: '0 0 20px rgba(255, 105, 180, 0.5)',
    textAlign: 'center',
  };

  const mainTitleStyle = {
    color: '#ff86c8',
    fontFamily: "'Press Start 2P', cursive",
    fontSize: '2rem',
    textShadow: '3px 3px 0 rgba(0, 0, 0, 0.8)',
    margin: '0 0 15px 0',
    letterSpacing: '1px',
  };

  const roleDisplayStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  };

  const slashStyle = {
    color: '#e2a9f3',
    fontFamily: "'Press Start 2P', cursive",
    fontSize: '1.5rem',
  };

  const roleStyle = {
    color: '#01ff70',
    fontFamily: "'Press Start 2P', cursive",
    fontSize: '1.5rem',
    textShadow: '2px 2px 0 rgba(0, 0, 0, 0.8)',
    position: 'relative',
  };

  return (
    <PixelWindow 
      title="portfolio.exe" 
      className="main-window"
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        backgroundColor: '#2d1a41',
        borderBottom: '3px solid #ff69b4',
        padding: '15px',
        textAlign: 'center',
        zIndex: '50'
      }}>
        <h1 style={{
          color: '#ff86c8',
          fontFamily: "'Press Start 2P', cursive",
          fontSize: 'clamp(1rem, 5vw, 1.6rem)',
          margin: '0',
          textShadow: '2px 2px 0 rgba(0, 0, 0, 0.8)',
        }}>
          IM {roles[currentRoleIndex]}
        </h1>
      </div>
      <div className="hero-content" style={{ paddingTop: '70px' }}>
        <div className="left-column">
          <PixelAvatar />
          <SocialLinks />
        </div>
        
        <div className="right-column">
          <div className="intro-section">
            {/* <div style={titleBoxStyle}>
              <h1 style={mainTitleStyle}>I'M MADHAVENDRA</h1>
              <div style={roleDisplayStyle}>
                <span style={roleStyle}>{roles[currentRoleIndex]}</span>
              </div>
            </div> */}
            <SkillTags />
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