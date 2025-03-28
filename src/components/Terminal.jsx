import React, { useState, useEffect, useRef } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [terminalLines, setTerminalLines] = useState([]);
  const terminalRef = useRef(null);
  
  useEffect(() => {
    // Commands and responses
    const script = [
      { 
        type: 'command', 
        content: 'cat education.txt',
        delay: 1000 
      },
      { 
        type: 'response', 
        content: [
          '=== EDUCATION ===',
          '',
          'UNIVERSITY',
          'B.Tech CSE - Lovely Professional University (2022-2026)',
          '• Currently pursuing Bachelor of Technology in Computer Science',
          '• Focusing on AI/ML and Web Development',
          '• Current CGPA: 8.9/10',
          '',
          'SCHOOLING',
          'Your School Name (20XX-20XX)',
          '• Completed 12th with XX% in Science/PCM',
          '• Achievements: [Add your achievements here]',
          '',
          'Your School Name (20XX-20XX)',
          '• Completed 10th with XX% marks',
          '• Achievements: [Add your achievements here]'
        ],
        delay: 100
      },
      { type: 'blank', delay: 500 },
      { 
        type: 'command', 
        content: 'cat about_me.txt',
        delay: 1000 
      },
      { 
        type: 'response', 
        content: [
          'Hello! I am Madhavendra Singh, a B.Tech CSE student at Lovely',
          'Professional University. I am passionate about coding, problem-',
          'solving, and creating interactive web experiences.'
        ],
        delay: 100
      },
      { type: 'blank', delay: 500 },
      { 
        type: 'command', 
        content: 'ls -la projects/',
        delay: 1000 
      },
      { 
        type: 'response', 
        content: [
          'total 5',
          'drwxr-xr-x  2 madhav users 4096 Oct 15 09:23 .',
          'drwxr-xr-x 15 madhav users 4096 Oct 15 09:10 ..',
          '-rw-r--r--  1 madhav users 8192 Oct 10 11:32 web_project.js',
          '-rw-r--r--  1 madhav users 4096 Sep 25 15:45 game_dev.cpp',
          '-rw-r--r--  1 madhav users 6144 Aug 15 13:21 data_visualization.py'
        ],
        delay: 100
      },
      { type: 'prompt', content: '', delay: 500 }
    ];
    
    // Function to add a line to the terminal
    const addLine = (line, index = 0) => {
      if (index >= script.length) return;
      
      const item = script[index];
      
      setTimeout(() => {
        if (item.type === 'command') {
          setTerminalLines(prev => [...prev, {
            id: `line-${Date.now()}`,
            type: 'command',
            content: item.content
          }]);
          
          addLine(null, index + 1);
          
        } else if (item.type === 'response') {
          // Add each line of response with a delay
          let responseIndex = 0;
          
          const addResponseLine = () => {
            if (responseIndex < item.content.length) {
              setTerminalLines(prev => [...prev, {
                id: `line-${Date.now()}-${responseIndex}`,
                type: 'response',
                content: item.content[responseIndex]
              }]);
              
              responseIndex++;
              setTimeout(addResponseLine, item.delay);
            } else {
              // Move to the next item when all response lines are added
              addLine(null, index + 1);
            }
          };
          
          addResponseLine();
          
        } else if (item.type === 'blank') {
          setTerminalLines(prev => [...prev, {
            id: `line-${Date.now()}`,
            type: 'blank',
            content: ''
          }]);
          
          addLine(null, index + 1);
          
        } else if (item.type === 'prompt') {
          setTerminalLines(prev => [...prev, {
            id: `line-${Date.now()}`,
            type: 'prompt',
            content: item.content
          }]);
        }
      }, item.delay);
    };
    
    // Start terminal sequence after a delay
    const timer = setTimeout(() => {
      addLine(null, 0);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Scroll to bottom when terminal content changes
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLines]);

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        <span className="terminal-indicator"></span>
        <span>terminal@madhavendra:~$</span>
      </div>
      <div ref={terminalRef} className="terminal-content">
        {terminalLines.map(line => (
          <div key={line.id} className={`terminal-line ${line.type}`} data-type={line.type}>
            {line.type === 'command' && (
              <>
                <span className="terminal-prompt">madhav@portfolio:~$ </span>
                <span className="terminal-cmd">{line.content}</span>
              </>
            )}
            {line.type === 'response' && (
              <span className="terminal-response">{line.content}</span>
            )}
            {line.type === 'blank' && (
              <span>&nbsp;</span>
            )}
            {line.type === 'prompt' && (
              <>
                <span className="terminal-prompt">madhav@portfolio:~$ </span>
                <span className="terminal-cursor"></span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal; 