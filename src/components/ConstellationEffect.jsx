import React, { useEffect, useRef } from 'react';
import './ConstellationEffect.css';

const ConstellationEffect = () => {
  const constellationRef = useRef(null);
  
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.className = 'constellation-canvas';
    document.body.appendChild(canvas);
    constellationRef.current = canvas;
    
    const ctx = canvas.getContext('2d');
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Add this near the beginning of your useEffect in ConstellationEffect.jsx
    canvas.style.background = 'transparent';
    ctx.globalCompositeOperation = 'source-over';
    
    // Create constellation points
    const constellations = [
      // Computer/laptop shape
      {
        points: [
          { x: 0.3, y: 0.2 },
          { x: 0.5, y: 0.2 },
          { x: 0.5, y: 0.3 },
          { x: 0.3, y: 0.3 },
          { x: 0.3, y: 0.2 },
          { x: 0.3, y: 0.3 },
          { x: 0.25, y: 0.35 },
          { x: 0.55, y: 0.35 },
          { x: 0.5, y: 0.3 }
        ],
        color: '#ba55d3',
        delay: 0
      },
      // Code bracket shape
      {
        points: [
          { x: 0.8, y: 0.15 },
          { x: 0.75, y: 0.2 },
          { x: 0.75, y: 0.3 },
          { x: 0.8, y: 0.35 },
          
          { x: 0.85, y: 0.15 },
          { x: 0.9, y: 0.2 },
          { x: 0.9, y: 0.3 },
          { x: 0.85, y: 0.35 }
        ],
        color: '#9932cc',
        delay: 2000
      },
      // Heart shape
      {
        points: [
          { x: 0.2, y: 0.7 },
          { x: 0.15, y: 0.65 },
          { x: 0.15, y: 0.6 },
          { x: 0.2, y: 0.55 },
          { x: 0.25, y: 0.6 },
          { x: 0.3, y: 0.55 },
          { x: 0.35, y: 0.6 },
          { x: 0.35, y: 0.65 },
          { x: 0.3, y: 0.7 },
          { x: 0.25, y: 0.75 },
          { x: 0.2, y: 0.7 }
        ],
        color: '#ff69b4',
        delay: 4000
      }
    ];
    
    // Draw constellations one by one with animation
    constellations.forEach((constellation, index) => {
      setTimeout(() => {
        let pointIndex = 0;
        
        const drawNextPoint = () => {
          if (pointIndex < constellation.points.length) {
            const point = constellation.points[pointIndex];
            const x = point.x * canvas.width;
            const y = point.y * canvas.height;
            
            // Draw star point
            ctx.fillStyle = constellation.color;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
            
            // Add glow
            ctx.shadowBlur = 10;
            ctx.shadowColor = constellation.color;
            ctx.beginPath();
            ctx.arc(x, y, 1, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
            
            // Draw line to next point
            if (pointIndex > 0) {
              const prevPoint = constellation.points[pointIndex - 1];
              const prevX = prevPoint.x * canvas.width;
              const prevY = prevPoint.y * canvas.height;
              
              ctx.strokeStyle = `${constellation.color}44`; // Semi-transparent
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(prevX, prevY);
              ctx.lineTo(x, y);
              ctx.stroke();
            }
            
            pointIndex++;
            setTimeout(drawNextPoint, 300);
          }
        };
        
        drawNextPoint();
      }, constellation.delay);
    });
    
    // Slowly fade constellations over time and redraw them
    setTimeout(() => {
      const fadeOutAndRedraw = () => {
        // Instead of fading out the entire canvas, only fade out the specific constellation paths
        // First, save the current canvas state
        ctx.save();
        
        // Clear only the areas where constellations are drawn
        constellations.forEach(constellation => {
          constellation.points.forEach((point, index) => {
            const x = point.x * canvas.width;
            const y = point.y * canvas.height;
            
            // Clear just the star points with a small radius
            ctx.clearRect(x - 6, y - 6, 12, 12);
            
            // If there's a previous point, clear the line between points
            if (index > 0) {
              const prevPoint = constellation.points[index - 1];
              const prevX = prevPoint.x * canvas.width;
              const prevY = prevPoint.y * canvas.height;
              
              // Clear a path between the points
              ctx.beginPath();
              ctx.moveTo(prevX, prevY);
              ctx.lineTo(x, y);
              ctx.lineWidth = 3;
              ctx.strokeStyle = 'rgba(5, 1, 17, 0.8)';
              ctx.stroke();
            }
          });
        });
        
        // Restore canvas state
        ctx.restore();
        
        // Rest of your redrawing code...
      };
      
      fadeOutAndRedraw();
    }, 10000); // Start fading after 10 seconds
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      if (constellationRef.current && constellationRef.current.parentNode) {
        constellationRef.current.parentNode.removeChild(constellationRef.current);
      }
    };
  }, []);
  
  return null;
};

export default ConstellationEffect; 