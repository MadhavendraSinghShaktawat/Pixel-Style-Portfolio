import React from 'react';
import './StatBar.css';

const StatBar = ({ label, fillPercentage, icons, count }) => {
  return (
    <div className="stat-item">
      <div className="stat-label">{label}</div>
      <div className="stat-bar">
        <div className="stat-fill" style={{ width: `${fillPercentage}%` }}></div>
      </div>
      {icons && (
        <div className="stat-icons">
          {icons.map((icon, index) => (
            <span key={index}>{icon}</span>
          ))}
        </div>
      )}
      {count && <div className="stat-count">{count}</div>}
    </div>
  );
};

export default StatBar; 