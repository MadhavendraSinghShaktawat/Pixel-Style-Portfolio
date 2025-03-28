import React from 'react';
import './WindowControls.css';

const WindowControls = ({ onMinimize, onClose }) => {
  return (
    <div className="window-controls">
      <span className="control minimize" onClick={onMinimize}>_</span>
      <span className="control maximize">□</span>
      <span className="control close" onClick={onClose}>×</span>
    </div>
  );
};

export default WindowControls; 