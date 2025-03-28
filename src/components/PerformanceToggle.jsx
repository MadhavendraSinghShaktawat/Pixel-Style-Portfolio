import React, { useState, useEffect } from 'react';
import './PerformanceToggle.css';

const PerformanceToggle = () => {
  const [isHighPerformance, setIsHighPerformance] = useState(
    localStorage.getItem('portfolioPerformanceMode') !== 'low'
  );
  
  useEffect(() => {
    // Apply performance mode setting
    document.body.classList.toggle('low-performance-mode', !isHighPerformance);
    localStorage.setItem('portfolioPerformanceMode', isHighPerformance ? 'high' : 'low');
  }, [isHighPerformance]);
  
  return (
    <div className="performance-toggle">
      <button 
        className={`toggle-button ${isHighPerformance ? 'high' : 'low'}`}
        onClick={() => setIsHighPerformance(!isHighPerformance)}
        aria-label={isHighPerformance ? "Switch to low performance mode" : "Switch to high performance mode"}
      >
        <span className="toggle-icon">
          {isHighPerformance ? '🚀' : '🔋'}
        </span>
        <span className="toggle-text">
          {isHighPerformance ? 'High FX' : 'Low FX'}
        </span>
      </button>
    </div>
  );
};

export default PerformanceToggle; 