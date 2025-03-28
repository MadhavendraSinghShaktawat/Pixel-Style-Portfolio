import React, { useRef, useEffect } from 'react';
import './WormholeEffect.css';

const WormholeEffect = () => {
  const wormholeRef = useRef(null);
  
  useEffect(() => {
    const wormhole = document.createElement('div');
    wormhole.className = 'wormhole';
    document.body.appendChild(wormhole);
    wormholeRef.current = wormhole;
    
    // Create inner rings
    for (let i = 0; i < 5; i++) {
      const ring = document.createElement('div');
      ring.className = 'wormhole-ring';
      ring.style.setProperty('--index', i);
      wormhole.appendChild(ring);
    }
    
    // Position in a corner initially
    const x = window.innerWidth * 0.9;
    const y = window.innerHeight * 0.8;
    wormhole.style.left = `${x}px`;
    wormhole.style.top = `${y}px`;
    
    // Follow mouse but with a delay and damping
    let targetX = x;
    let targetY = y;
    let currentX = x;
    let currentY = y;
    
    const handleMouseMove = (e) => {
      // Only move occasionally and slightly to create a subtle effect
      if (Math.random() < 0.05) {
        targetX = e.clientX + (Math.random() * 200 - 100);
        targetY = e.clientY + (Math.random() * 200 - 100);
        
        // Keep within bounds
        targetX = Math.max(50, Math.min(window.innerWidth - 50, targetX));
        targetY = Math.max(50, Math.min(window.innerHeight - 50, targetY));
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    function animateWormhole() {
      // Smooth movement with easing
      currentX += (targetX - currentX) * 0.01;
      currentY += (targetY - currentY) * 0.01;
      
      if (wormholeRef.current) {
        wormholeRef.current.style.left = `${currentX}px`;
        wormholeRef.current.style.top = `${currentY}px`;
      }
      
      requestAnimationFrame(animateWormhole);
    }
    
    animateWormhole();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (wormholeRef.current && wormholeRef.current.parentNode) {
        wormholeRef.current.parentNode.removeChild(wormholeRef.current);
      }
    };
  }, []);
  
  return null;
};

export default WormholeEffect; 