import React, { useEffect } from 'react';
import './ShootingStars.css';

const ShootingStars = () => {
  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'shooting-stars-container';
    document.body.appendChild(container);
    
    // Create random shooting stars
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      
      // Random position and angle
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * window.innerHeight * 0.5; // Top half of screen
      const angle = Math.random() * 60 - 30; // Angle between -30 and 30 degrees
      
      // Random size and duration
      const size = Math.random() * 2 + 1;
      const duration = Math.random() * 1 + 0.5;
      
      // Set styles
      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
      star.style.width = `${Math.random() * 100 + 50}px`;
      star.style.height = `${size}px`;
      star.style.setProperty('--angle', `${angle}deg`);
      star.style.setProperty('--duration', `${duration}s`);
      
      container.appendChild(star);
      
      // Remove after animation completes
      setTimeout(() => {
        star.remove();
      }, duration * 1000);
    };
    
    // Create stars at random intervals
    const interval = setInterval(() => {
      if (Math.random() < 0.3) { // 30% chance to create a star
        createShootingStar();
      }
    }, 1000);
    
    return () => {
      clearInterval(interval);
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, []);
  
  return null;
};

export default ShootingStars; 