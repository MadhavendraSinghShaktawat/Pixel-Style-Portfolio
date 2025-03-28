import React, { useState, useEffect } from 'react';
import './StarBackground.css';

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    const starCount = 100;
    const starsArray = [];
    
    for (let i = 0; i < starCount; i++) {
      // Random position
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      
      // Random size
      const size = Math.random() * 3 + 1;
      
      // Random animation duration
      const duration = Math.random() * 3 + 2;
      
      starsArray.push({
        id: i,
        x,
        y,
        size,
        duration
      });
    }
    
    setStars(starsArray);
  }, []);

  return (
    <div className="stars-container">
      {stars.map(star => (
        <div 
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            '--duration': `${star.duration}s`
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground; 