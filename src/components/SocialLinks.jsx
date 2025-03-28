import React from 'react';
import './SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links-container">
      <a href="#" className="social-link github-link">
        <span className="github-icon"></span>
        <span className="link-name">GitHub</span>
      </a>
      
      <a href="#" className="social-link linkedin-link">
        <span className="linkedin-icon"></span>
        <span className="link-name">LinkedIn</span>
      </a>
      
      <a href="#" className="social-link email-link">
        <span className="email-icon"></span>
        <span className="link-name">Email</span>
      </a>
    </div>
  );
};

export default SocialLinks; 