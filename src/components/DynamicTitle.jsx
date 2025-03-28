import React, { useState, useEffect } from 'react';
import './DynamicTitle.css';

const DynamicTitle = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = [
    "Madhavendra",
    "Developer",
    "Entrepreneur",
    "AI Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    // Change role every 3 seconds
    const interval = setInterval(() => {
      setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="title-box">
      <h1 className="main-title">IM MADHAVENDRA</h1>
      <div className="role-display">
        <span className="role">{roles[currentRoleIndex]}</span>
      </div>
    </div>
  );
};

export default DynamicTitle; 