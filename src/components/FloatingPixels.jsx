import React, { useEffect } from 'react';
import './FloatingPixels.css';

const FloatingPixels = () => {
  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'floating-pixels-container';
    document.body.appendChild(container);
    
    // Pixel shapes
    const shapes = [
      'square', 'triangle', 'circle', 'diamond', 'cross'
    ];
    
    // Colors matching your theme
    const colors = [
      '#6a0dad', '#9932cc', '#ff69b4', '#ba55d3', '#7b68ee'
    ];
    
    // Create the floating pixels
    const pixelCount = window.innerWidth < 600 ? 15 : 30;
    
    for (let i = 0; i < pixelCount; i++) {
      const pixel = document.createElement('div');
      pixel.className = `floating-pixel ${shapes[Math.floor(Math.random() * shapes.length)]}`;
      
      // Random position, size, and rotation
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 15 + 5;
      const rotation = Math.random() * 360;
      
      // Random color
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      // Random animation durations
      const floatDuration = Math.random() * 20 + 10;
      const rotateDuration = Math.random() * 40 + 20;
      const pulseDuration = Math.random() * 4 + 2;
      
      // Apply initial styles
      pixel.style.left = `${x}vw`;
      pixel.style.top = `${y}vh`;
      pixel.style.width = `${size}px`;
      pixel.style.height = `${size}px`;
      pixel.style.backgroundColor = color;
      pixel.style.transform = `rotate(${rotation}deg)`;
      
      // Apply animation properties
      pixel.style.setProperty('--float-duration', `${floatDuration}s`);
      pixel.style.setProperty('--rotate-duration', `${rotateDuration}s`);
      pixel.style.setProperty('--pulse-duration', `${pulseDuration}s`);
      
      container.appendChild(pixel);
    }
    
    return () => {
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
    };
  }, []);
  
  return null;
};

export default FloatingPixels; 