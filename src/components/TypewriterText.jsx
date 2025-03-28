import React, { useState, useEffect } from 'react';
import './TypewriterText.css';

const TypewriterText = () => {
  const [displayText, setDisplayText] = useState([]);
  const [typingFinished, setTypingFinished] = useState(false);
  
  useEffect(() => {
    const text = "Hi, I'm Madhavendra Singh\nB.Tech CSE Student\nAspiring Developer";
    const lines = text.split('\n');
    let lineIndex = 0;
    let charIndex = 0;
    let timer = null;
    
    const type = () => {
      if (lineIndex < lines.length) {
        const currentLine = lines[lineIndex];
        
        if (charIndex === 0) {
          // Starting a new line
          setDisplayText(prev => [...prev, '']);
        }
        
        if (charIndex < currentLine.length) {
          // Add next character
          setDisplayText(prev => {
            const updatedLines = [...prev];
            updatedLines[lineIndex] += currentLine.charAt(charIndex);
            return updatedLines;
          });
          
          charIndex++;
          timer = setTimeout(type, 70); // Type speed
        } else {
          // Line completed, move to next
          lineIndex++;
          charIndex = 0;
          timer = setTimeout(type, 500); // Pause between lines
        }
      } else {
        // All lines completed
        setTypingFinished(true);
      }
    };
    
    // Start typing after a delay
    timer = setTimeout(type, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className="typewriter">
      {displayText.map((line, index) => (
        <div key={index} className="typewriter-line">{line}</div>
      ))}
      {typingFinished && <span className="cursor blink">|</span>}
    </h1>
  );
};

export default TypewriterText; 