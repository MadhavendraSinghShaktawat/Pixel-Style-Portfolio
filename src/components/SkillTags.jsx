import React from 'react';
import './SkillTags.css';

const SkillTags = () => {
  const skills = [
    'HTML/CSS', 'JavaScript', 'C++', 'Problem Solving', 
    'Web Development', 'React', 'Data Structures'
  ];
  
  return (
    <div className="skill-tags">
      {skills.map((skill, index) => (
        <span 
          key={skill} 
          className="skill-tag"
          style={{ animationDelay: `${index * 200 + 3000}ms` }}
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillTags; 