import React from 'react';
import PixelWindow from './PixelWindow';
import './InfoWindow.css';

const InfoWindow = () => {
  return (
    <PixelWindow title="about.txt" className="info-window">
      <div className="info-content">
        <div className="info-section">
          <h2 className="section-title">Education:</h2>
          <ul className="info-list">
            <li>• Studying: B.Tech CSE - Lovely Professional University (2022-2026)</li>
          </ul>
        </div>
        
        <div className="info-section">
          <h2 className="section-title">Main Skills:</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-name">Web Development</div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Problem Solving</div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Fast Learning</div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-name">Teamwork</div>
              <div className="skill-bar">
                <div className="skill-fill" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="info-section">
          <h2 className="section-title">Projects:</h2>
          <div className="projects-list">
            <div className="project-card">
              <div className="project-title">Web Portfolio</div>
              <div className="project-tech">React / CSS / JavaScript</div>
            </div>
            <div className="project-card">
              <div className="project-title">Game Development</div>
              <div className="project-tech">C++ / Unity</div>
            </div>
            <div className="project-card">
              <div className="project-title">Data Visualization</div>
              <div className="project-tech">Python / D3.js</div>
            </div>
          </div>
        </div>
        
        <div className="cta-container">
          <button className="pixel-button large">Let's Connect!</button>
        </div>
      </div>
    </PixelWindow>
  );
};

export default InfoWindow; 