import React, { useRef, useEffect } from 'react';
import './SpaceBackground.css';

const SpaceBackground = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = 0;
    let mouseY = 0;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Track mouse position
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
    
    // Create stars
    const stars = [];
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.3 + 0.1,
        color: `rgba(${155 + Math.random() * 100}, ${155 + Math.random() * 100}, ${205 + Math.random() * 50}, ${Math.random() * 0.5 + 0.5})`,
        pulse: Math.random() * 0.1,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }
    
    // Create planets
    const planets = [
      {
        x: canvas.width * 0.1,
        y: canvas.height * 0.15,
        radius: 30,
        color: '#ff69b4',
        shadow: '#ff00ff',
        moons: 1,
        rings: true,
        speed: 0.0005,
        angle: 0
      },
      {
        x: canvas.width * 0.85,
        y: canvas.height * 0.8,
        radius: 40,
        color: '#6a0dad',
        shadow: '#9932cc',
        moons: 2,
        rings: false,
        speed: 0.0003,
        angle: Math.PI
      },
      {
        x: canvas.width * 0.75,
        y: canvas.height * 0.2,
        radius: 20,
        color: '#00aaff',
        shadow: '#0077ff',
        moons: 0,
        rings: true,
        speed: 0.0007,
        angle: Math.PI / 2
      }
    ];
    
    // Create nebulas
    const nebulas = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.7,
        radius: 150,
        colors: ['rgba(106, 13, 173, 0.05)', 'rgba(255, 105, 180, 0.07)']
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.3,
        radius: 200,
        colors: ['rgba(0, 150, 255, 0.03)', 'rgba(138, 43, 226, 0.05)']
      }
    ];
    
    // Create comets
    const comets = [];
    const cometCount = 3;
    
    for (let i = 0; i < cometCount; i++) {
      comets.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 2 + 1,
        size: Math.random() * 2 + 1,
        active: false,
        countdown: Math.floor(Math.random() * 500) + 100
      });
    }
    
    // Android optimization
    const isAndroid = /Android/i.test(navigator.userAgent);
    let isVisible = true;
    
    function animate() {
      // Only run animation if visible
      if (isVisible) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw nebulas
        nebulas.forEach(nebula => {
          const gradient = ctx.createRadialGradient(
            nebula.x, nebula.y, 0,
            nebula.x, nebula.y, nebula.radius
          );
          
          gradient.addColorStop(0, nebula.colors[0]);
          gradient.addColorStop(1, nebula.colors[1]);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(nebula.x, nebula.y, nebula.radius, 0, Math.PI * 2);
          ctx.fill();
        });
        
        // Interactive effect - stars move slightly based on mouse position
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
        
        // Draw and update stars
        stars.forEach(star => {
          // Calculate distance from mouse for parallax effect
          const dx = mouseX - centerX;
          const dy = mouseY - centerY;
          const distanceRatio = Math.sqrt(star.x * star.x + star.y * star.y) / maxDistance;
          
          // Apply parallax effect
          const parallaxX = dx * distanceRatio * 0.01 * star.speed;
          const parallaxY = dy * distanceRatio * 0.01 * star.speed;
          
          // Calculate pulsing size
          const pulsingSize = star.size + Math.sin(Date.now() * star.pulseSpeed + star.pulseOffset) * star.pulse;
          
          // Draw star
          ctx.fillStyle = star.color;
          ctx.beginPath();
          ctx.arc(star.x + parallaxX, star.y + parallaxY, pulsingSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Add a subtle glow effect
          ctx.shadowBlur = pulsingSize * 3;
          ctx.shadowColor = star.color;
          
          // Randomly make some stars twinkle
          if (Math.random() < 0.001) {
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(star.x + parallaxX, star.y + parallaxY, pulsingSize * 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
          
          ctx.shadowBlur = 0;
          
          // Move stars slightly for subtle animation
          star.x += (Math.random() - 0.5) * 0.2;
          star.y += (Math.random() - 0.5) * 0.2;
          
          // Wrap around screen
          if (star.x < 0) star.x = canvas.width;
          if (star.x > canvas.width) star.x = 0;
          if (star.y < 0) star.y = canvas.height;
          if (star.y > canvas.height) star.y = 0;
        });
        
        // Draw and update planets
        planets.forEach(planet => {
          // Update planet position
          planet.angle += planet.speed;
          const orbitRadius = 20;
          const orbitX = Math.cos(planet.angle) * orbitRadius;
          const orbitY = Math.sin(planet.angle) * orbitRadius;
          
          // Draw planet
          const gradient = ctx.createRadialGradient(
            planet.x + orbitX, planet.y + orbitY, 0,
            planet.x + orbitX, planet.y + orbitY, planet.radius
          );
          
          gradient.addColorStop(0, planet.color);
          gradient.addColorStop(1, planet.shadow);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(planet.x + orbitX, planet.y + orbitY, planet.radius, 0, Math.PI * 2);
          ctx.fill();
          
          // Draw rings if planet has them
          if (planet.rings) {
            ctx.strokeStyle = `${planet.color}88`;
            ctx.lineWidth = 4;
            ctx.beginPath();
            ctx.ellipse(
              planet.x + orbitX, 
              planet.y + orbitY, 
              planet.radius * 1.5, 
              planet.radius * 0.5, 
              planet.angle, 
              0, 
              Math.PI * 2
            );
            ctx.stroke();
          }
          
          // Draw moons
          for (let i = 0; i < planet.moons; i++) {
            const moonAngle = planet.angle * 3 + (i * Math.PI / planet.moons * 2);
            const moonDistance = planet.radius * 2;
            const moonX = planet.x + orbitX + Math.cos(moonAngle) * moonDistance;
            const moonY = planet.y + orbitY + Math.sin(moonAngle) * moonDistance;
            
            ctx.fillStyle = '#aaaaaa';
            ctx.beginPath();
            ctx.arc(moonX, moonY, planet.radius * 0.2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        
        // Draw and update comets
        comets.forEach(comet => {
          if (comet.active) {
            // Draw comet
            const headX = comet.x;
            const headY = comet.y;
            
            // Draw comet tail
            const gradient = ctx.createLinearGradient(
              headX, headY,
              headX - Math.cos(comet.angle) * comet.length,
              headY - Math.sin(comet.angle) * comet.length
            );
            
            gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = comet.size;
            ctx.beginPath();
            ctx.moveTo(headX, headY);
            ctx.lineTo(
              headX - Math.cos(comet.angle) * comet.length,
              headY - Math.sin(comet.angle) * comet.length
            );
            ctx.stroke();
            
            // Draw comet head
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(headX, headY, comet.size * 2, 0, Math.PI * 2);
            ctx.fill();
            
            // Move comet
            comet.x += Math.cos(comet.angle) * comet.speed;
            comet.y += Math.sin(comet.angle) * comet.speed;
            
            // Check if comet is out of bounds
            if (
              comet.x < -comet.length || 
              comet.x > canvas.width + comet.length || 
              comet.y < -comet.length || 
              comet.y > canvas.height + comet.length
            ) {
              comet.active = false;
              comet.countdown = Math.floor(Math.random() * 500) + 100;
            }
          } else {
            // Countdown to spawn new comet
            comet.countdown--;
            
            if (comet.countdown <= 0) {
              // Reset comet at a random edge of the screen
              const side = Math.floor(Math.random() * 4);
              
              switch (side) {
                case 0: // Top
                  comet.x = Math.random() * canvas.width;
                  comet.y = -10;
                  comet.angle = Math.random() * Math.PI + Math.PI / 2;
                  break;
                case 1: // Right
                  comet.x = canvas.width + 10;
                  comet.y = Math.random() * canvas.height;
                  comet.angle = Math.random() * Math.PI + Math.PI;
                  break;
                case 2: // Bottom
                  comet.x = Math.random() * canvas.width;
                  comet.y = canvas.height + 10;
                  comet.angle = Math.random() * Math.PI + Math.PI * 1.5;
                  break;
                case 3: // Left
                  comet.x = -10;
                  comet.y = Math.random() * canvas.height;
                  comet.angle = Math.random() * Math.PI;
                  break;
              }
              
              comet.active = true;
            }
          }
        });
        
        // Request next frame only if visible
        animationFrameId = requestAnimationFrame(animate);
      }
    }
    
    function pauseAnimations() {
      isVisible = false;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
    }
    
    function resumeAnimations() {
      if (!isVisible) {
        isVisible = true;
        animate(); // Restart animation loop
      }
    }
    
    // Setup visibility detection for Android
    if (isAndroid) {
      // Use IntersectionObserver to detect visibility
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              resumeAnimations();
            } else {
              pauseAnimations();
            }
          });
        },
        { threshold: 0.1 } // 10% visibility threshold
      );
      
      // Start observing the canvas element
      if (canvasRef.current) {
        observer.observe(canvasRef.current);
      }
      
      // Also listen for page visibility changes
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          pauseAnimations();
        } else {
          resumeAnimations();
        }
      });
      
      return () => {
        if (canvasRef.current) {
          observer.unobserve(canvasRef.current);
        }
        document.removeEventListener('visibilitychange', () => {});
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    }
    
    // Non-Android devices just run animation normally
    animate();
    
    return () => {
      // Cleanup animation
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="space-background"
      onClick={(e) => {
        // Add sparkle effect on click
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const x = e.clientX;
        const y = e.clientY;
        
        // Create explosion effect
        for (let i = 0; i < 20; i++) {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 50 + 10;
          const speed = Math.random() * 2 + 1;
          
          setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = `${x}px`;
            sparkle.style.top = `${y}px`;
            sparkle.style.setProperty('--angle', `${angle}rad`);
            sparkle.style.setProperty('--distance', `${distance}px`);
            sparkle.style.setProperty('--speed', `${speed}s`);
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
              sparkle.remove();
            }, speed * 1000);
          }, i * 50);
        }
      }}
    />
  );
};

export default SpaceBackground; 