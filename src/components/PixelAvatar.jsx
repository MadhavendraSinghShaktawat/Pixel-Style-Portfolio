import React, { useState, useEffect, useRef } from 'react';
import './PixelAvatar.css';

const PixelAvatar = () => {
  const [clickCount, setClickCount] = useState(0);
  const [isEasterEgg, setIsEasterEgg] = useState(false);
  const avatarRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Glitch effect
    const glitchInterval = setInterval(() => {
      if (avatarRef.current && Math.random() < 0.1) {
        avatarRef.current.style.filter = `hue-rotate(${Math.random() * 360}deg) brightness(1.2)`;
        setTimeout(() => {
          if (avatarRef.current) avatarRef.current.style.filter = 'none';
        }, 150);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount === 5) {
      // Easter egg after 5 clicks
      if (avatarRef.current) {
        avatarRef.current.style.animation = 'spin 2s ease-in-out';
      }
      
      setTimeout(() => {
        setIsEasterEgg(true);
        
        const easterEggText = document.createElement('div');
        easterEggText.textContent = "Easter Egg Found! +100 XP";
        easterEggText.className = "easter-egg-text";
        
        if (containerRef.current) {
          containerRef.current.appendChild(easterEggText);
        }
        
        setTimeout(() => {
          if (easterEggText.parentNode) easterEggText.parentNode.removeChild(easterEggText);
          setIsEasterEgg(false);
          setClickCount(0);
        }, 3000);
      }, 1000);
    }
  };

  return (
    <div ref={containerRef} className="avatar-container">
      <div className="avatar-frame">
        <div 
          ref={avatarRef}
          className="pixel-avatar" 
          onClick={handleClick}
          style={{ 
            backgroundImage: isEasterEgg 
              ? 'url("https://avatars.dicebear.com/api/pixel-art-neutral/easteregg.svg")'
              : 'url("/madhav-pixel-art.webp")'
          }}
        />
      </div>
      <div className="avatar-name">Madhavendra Singh</div>
    </div>
  );
};

export default PixelAvatar; 