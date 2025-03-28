import React from 'react';
import PixelWindow from './PixelWindow';
import SkillPlanets from './SkillPlanets';
import './SkillsSection.css';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML/CSS', level: 0.85, color: '#E44D26', shadow: '#F16529' },
    { name: 'JavaScript', level: 0.80, color: '#F0DB4F', shadow: '#323330' },
    { name: 'React', level: 0.75, color: '#61DAFB', shadow: '#282C34' },
    { name: 'Problem Solving', level: 0.90, color: '#9C27B0', shadow: '#6A0DAD' },
    { name: 'Web Development', level: 0.85, color: '#3498DB', shadow: '#2980B9' },
    { name: 'C++', level: 0.70, color: '#00599C', shadow: '#004482' },
    { name: 'Data Structures', level: 0.80, color: '#FF9800', shadow: '#F57C00' }
  ];

  return (
    <PixelWindow title="skills.exe" className="skills-window">
      <div className="skills-section-content">
        <h1 className="skills-title">My Technical Skills</h1>
        <p className="skills-subtitle">Hover over the planets to see proficiency levels</p>
        
        <SkillPlanets skills={skills} />
        
        <div className="skill-categories">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5 & CSS3</li>
              <li>JavaScript ES6+</li>
              <li>React.js</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Programming</h3>
            <ul>
              <li>C/C++</li>
              <li>Python</li>
              <li>Data Structures</li>
              <li>Algorithms</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Other</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </div>
    </PixelWindow>
  );
};

export default SkillsSection; 