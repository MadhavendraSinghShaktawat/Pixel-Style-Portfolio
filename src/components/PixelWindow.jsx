import React, { useState, useRef, useEffect } from 'react';
import './PixelWindow.css';

const PixelWindow = ({ title, children, className }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const windowRef = useRef(null);
  const contentRef = useRef(null);

  // Add draggable functionality
  useEffect(() => {
    const windowElement = windowRef.current;
    const headerElement = windowElement?.querySelector('.window-header');
    
    let isDragging = false;
    let offsetX, offsetY;
    
    const handleMouseDown = (e) => {
      isDragging = true;
      const rect = windowElement.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      
      windowElement.style.transition = 'none';
      document.body.style.userSelect = 'none';
    };
    
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      const x = e.clientX - offsetX;
      const y = e.clientY - offsetY;
      
      windowElement.style.position = 'absolute';
      windowElement.style.left = `${x}px`;
      windowElement.style.top = `${y}px`;
      windowElement.style.margin = '0';
    };
    
    const handleMouseUp = () => {
      isDragging = false;
      document.body.style.userSelect = '';
      windowElement.style.transition = '';
    };
    
    if (headerElement && windowElement) {
      headerElement.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    
    return () => {
      if (headerElement) {
        headerElement.removeEventListener('mousedown', handleMouseDown);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const handleClose = () => {
    if (windowRef.current) {
      windowRef.current.style.animation = 'windowClose 0.3s forwards';
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }
  };

  const handleMinimize = () => {
    if (contentRef.current) {
      if (isMinimized) {
        windowRef.current.style.animation = 'windowExpand 0.3s forwards';
        setTimeout(() => {
          contentRef.current.style.display = 'block';
          setIsMinimized(false);
        }, 150);
      } else {
        windowRef.current.style.animation = 'windowMinimize 0.3s forwards';
        contentRef.current.style.display = 'none';
        setIsMinimized(true);
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      ref={windowRef} 
      className={`pixel-window ${className || ''}`}
    >
      <div className="window-header">
        <div className="window-icon">
          <div className="icon-pixel"></div>
        </div>
        <div className="window-title">{title}</div>
        <div className="window-controls">
          <span className="control minimize" onClick={handleMinimize}>_</span>
          <span className="control maximize">□</span>
          <span className="control close" onClick={handleClose}>×</span>
        </div>
      </div>
      
      <div ref={contentRef} className="window-content">
        {children}
      </div>
    </div>
  );
};

export default PixelWindow; 