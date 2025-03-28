import React, { useRef, useEffect, useState } from 'react';
import './SkillPlanets.css';

const SkillPlanets = ({ skills }) => {
  const containerRef = useRef(null);
  const [isRendered, setIsRendered] = useState(false);
  
  // Default skills if none provided
  const defaultSkills = [
    { name: 'HTML/CSS', level: 0.85, color: '#E44D26', shadow: '#F16529' },
    { name: 'JavaScript', level: 0.80, color: '#F0DB4F', shadow: '#323330' },
    { name: 'React', level: 0.75, color: '#61DAFB', shadow: '#282C34' },
    { name: 'Problem Solving', level: 0.90, color: '#9C27B0', shadow: '#6A0DAD' },
    { name: 'Web Development', level: 0.85, color: '#3498DB', shadow: '#2980B9' },
    { name: 'C++', level: 0.70, color: '#00599C', shadow: '#004482' },
    { name: 'Data Structures', level: 0.80, color: '#FF9800', shadow: '#F57C00' }
  ];
  
  const skillsToRender = skills || defaultSkills;
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Wait a bit for the DOM to stabilize
    const timeout = setTimeout(() => {
      const container = containerRef.current;
      if (!container) return;
      
      // Clear any existing planets
      container.innerHTML = '';
      
      // Create planets for each skill
      skillsToRender.forEach((skill, index) => {
        // Create planet container
        const planetSystem = document.createElement('div');
        planetSystem.className = 'planet-system';
        
        // Calculate orbit - adjust for better spacing
        const totalSkills = skillsToRender.length;
        const orbitSize = 40 + Math.round((index / (totalSkills - 1)) * 80);
        planetSystem.style.setProperty('--orbit-size', `${orbitSize}px`);
        planetSystem.style.setProperty('--orbit-speed', `${30 + index * 5}s`);
        planetSystem.style.setProperty('--orbit-delay', `${-index * 2}s`);
        
        // Calculate planet size based on skill level
        const planetSize = 20 + (skill.level * 25);
        
        // Create planet
        const planet = document.createElement('div');
        planet.className = 'skill-planet';
        planet.style.setProperty('--planet-size', `${planetSize}px`);
        planet.style.setProperty('--planet-color', skill.color);
        planet.style.setProperty('--planet-shadow', skill.shadow);
        
        // Create skill label
        const label = document.createElement('div');
        label.className = 'skill-label';
        label.textContent = skill.name;
        
        // Create skill level indicator (moon)
        if (skill.level > 0.6) {
          const moon = document.createElement('div');
          moon.className = 'skill-moon';
          const moonSize = 6 + (skill.level * 4);
          moon.style.setProperty('--moon-size', `${moonSize}px`);
          moon.style.setProperty('--moon-dist', `${planetSize + 10}px`);
          planet.appendChild(moon);
        }
        
        // Add hover effect for more information
        const infoBox = document.createElement('div');
        infoBox.className = 'skill-info';
        infoBox.innerHTML = `
          <div class="skill-name">${skill.name}</div>
          <div class="skill-level-bar">
            <div class="skill-level-fill" style="width: ${skill.level * 100}%"></div>
          </div>
          <div class="skill-level-text">${Math.round(skill.level * 100)}%</div>
        `;
        
        // Add elements to DOM
        planet.appendChild(label);
        planet.appendChild(infoBox);
        planetSystem.appendChild(planet);
        container.appendChild(planetSystem);
        
        // Add interaction
        planet.addEventListener('mouseenter', () => {
          planet.classList.add('hovered');
        });
        
        planet.addEventListener('mouseleave', () => {
          planet.classList.remove('hovered');
        });

        // Add touch support for mobile
        planet.addEventListener('touchstart', (e) => {
          e.preventDefault(); // Prevent default touch behavior
          
          // Remove 'hovered' class from all planets
          document.querySelectorAll('.skill-planet').forEach(p => {
            p.classList.remove('hovered');
          });
          
          // Add 'hovered' class to this planet
          planet.classList.add('hovered');
        });
      });
      
      setIsRendered(true);
      
      // Optimize for mobile devices
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

      if (isMobile) {
        // Reduce animation complexity on mobile
        document.querySelectorAll('.skill-planet').forEach(planet => {
          const speed = parseFloat(planet.style.getPropertyValue('--orbit-speed'));
          planet.style.setProperty('--orbit-speed', `${speed * 1.5}s`); // Slow down orbits
        });
        
        // Disable galaxy rotation on mobile for better performance
        container.style.animation = 'none';
        
        // Add visibility detection for Android
        if (/Android/i.test(navigator.userAgent)) {
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach(entry => {
                const planets = document.querySelectorAll('.planet-system');
                if (entry.isIntersecting) {
                  // Resume animations when visible
                  planets.forEach(planet => {
                    planet.style.animationPlayState = 'running';
                  });
                } else {
                  // Pause animations when not visible
                  planets.forEach(planet => {
                    planet.style.animationPlayState = 'paused';
                  });
                }
              });
            },
            { threshold: 0.1 }
          );
          
          observer.observe(container);
        }
      }
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [skillsToRender]);

  return (
    <div className="skill-planets-container">
      <h2 className="skill-planets-title">My Skills</h2>
      <div 
        className={`skill-planets-galaxy ${isRendered ? 'rendered' : ''}`} 
        ref={containerRef}
      ></div>
    </div>
  );
};

export default SkillPlanets; 