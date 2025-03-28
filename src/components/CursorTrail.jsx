import React, { useEffect } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
  useEffect(() => {
    const trail = [];
    const trailLength = 10;
    let mouseX = 0;
    let mouseY = 0;
    
    for (let i = 0; i < trailLength; i++) {
      const dot = document.createElement('div');
      dot.className = 'cursor-trail-dot';
      document.body.appendChild(dot);
      trail.push(dot);
    }
    
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    function animate() {
      let x = mouseX;
      let y = mouseY;
      
      trail.forEach((dot, index) => {
        const nextDot = trail[index + 1] || trail[0];
        
        // Make the movement slightly delayed for each dot
        const dotX = parseFloat(nextDot.style.left) || x;
        const dotY = parseFloat(nextDot.style.top) || y;
        
        // Set the position with easing
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        
        // Size and opacity decrease as the index increases
        const scale = 1 - (index / trailLength) * 0.5;
        const opacity = 1 - (index / trailLength) * 0.7;
        
        dot.style.transform = `scale(${scale})`;
        dot.style.opacity = opacity;
        
        // Pass the position to the next dot
        x = dotX;
        y = dotY;
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();
    
    return () => {
      trail.forEach(dot => {
        if (dot.parentNode) {
          dot.parentNode.removeChild(dot);
        }
      });
    };
  }, []);
  
  return null;
};

export default CursorTrail; 