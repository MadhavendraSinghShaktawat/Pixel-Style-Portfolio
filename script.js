document.addEventListener("DOMContentLoaded", function() {
    // Generate stars background
    createStars();
    
    // Setup typewriter effect
    typewriterEffect();
    
    // Add skill tags with animation
    addSkillTags();
    
    // Terminal simulation
    simulateTerminal();
    
    // Create pixel art avatar
    createPixelAvatar();
    
    // Add interactive elements
    addInteractivity();
});

function createStars() {
    const starsContainer = document.querySelector('.stars-container');
    const starCount = 100;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random animation duration
        const duration = Math.random() * 3 + 2;
        
        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        
        starsContainer.appendChild(star);
    }
}

function typewriterEffect() {
    const typewriterElement = document.getElementById('typewriter');
    const text = "Hi, I'm Madhavendra Singh\nB.Tech CSE Student\nAspiring Developer";
    const lines = text.split('\n');
    let lineIndex = 0;
    let charIndex = 0;
    
    typewriterElement.innerHTML = ''; // Clear any placeholder text
    
    function type() {
        if (lineIndex < lines.length) {
            // Create a new line if starting a new line
            if (charIndex === 0) {
                const lineElement = document.createElement('div');
                lineElement.classList.add('typewriter-line');
                typewriterElement.appendChild(lineElement);
            }
            
            const currentLine = typewriterElement.lastChild;
            const currentLineText = lines[lineIndex];
            
            if (charIndex < currentLineText.length) {
                currentLine.textContent += currentLineText.charAt(charIndex);
                charIndex++;
                setTimeout(type, 70); // Type speed
            } else {
                // Move to next line
                lineIndex++;
                charIndex = 0;
                setTimeout(type, 500); // Pause between lines
            }
        } else {
            // Typing finished, show cursor
            const cursor = document.createElement('span');
            cursor.classList.add('cursor');
            cursor.textContent = '|';
            typewriterElement.appendChild(cursor);
            
            // Add cursor blink animation with CSS
            cursor.style.animation = 'blink 1s infinite';
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 1000);
}

function addSkillTags() {
    const skillTagsContainer = document.getElementById('skillTags');
    const skills = [
        'HTML/CSS', 'JavaScript', 'C++', 'Problem Solving', 
        'Web Development', 'React', 'Data Structures'
    ];
    
    skills.forEach((skill, index) => {
        const tagElement = document.createElement('span');
        tagElement.classList.add('skill-tag');
        tagElement.textContent = skill;
        
        // Delay appearance based on index
        tagElement.style.animationDelay = `${index * 200 + 3000}ms`;
        
        skillTagsContainer.appendChild(tagElement);
    });
}

function simulateTerminal() {
    const terminal = document.getElementById('terminal');
    const commands = [
        'ls -la projects/',
        'cat about_me.txt',
        'node start_portfolio.js',
        'git commit -m "Updated portfolio with new projects"',
        'npm run build'
    ];
    
    const responses = [
        'total 5\ndrwxr-xr-x  2 madhav users 4096 Oct 15 09:23 .\ndrwxr-xr-x 15 madhav users 4096 Oct 15 09:10 ..\n-rw-r--r--  1 madhav users 8192 Oct 10 11:32 web_project.js\n-rw-r--r--  1 madhav users 4096 Sep 25 15:45 game_dev.cpp\n-rw-r--r--  1 madhav users 6144 Aug 15 13:21 data_visualization.py',
        'Hello! I am Madhavendra Singh, a B.Tech CSE student at Lovely Professional University. I am passionate about coding, problem-solving, and creating interactive web experiences.',
        'Server started at http://localhost:3000\nCompiling...\nCompilation successful!\nOpening browser...',
        '[master f8d9a3c] Updated portfolio with new projects\n 5 files changed, 120 insertions(+), 25 deletions(-)',
        '> portfolio@1.0.0 build\n> webpack --mode production\n\nAsset      Size       Chunks  Chunk Names\nmain.js    825 KiB    0       [emitted]  main\nBuild completed in 3.2s'
    ];
    
    let currentLine = 0;
    let currentResponseLine = 0;
    let isTypingResponse = false;
    let currentResponse = [];
    
    function typeTerminal() {
        if (currentLine < commands.length) {
            if (!isTypingResponse) {
                // Type command
                const cmdLine = document.createElement('div');
                cmdLine.classList.add('terminal-line');
                cmdLine.innerHTML = `<span style="color: cyan;">madhav@portfolio</span>:<span style="color: #9370db;">~</span>$ ${commands[currentLine]}`;
                terminal.appendChild(cmdLine);
                
                // Wait and then show response
                setTimeout(() => {
                    isTypingResponse = true;
                    currentResponse = responses[currentLine].split('\n');
                    currentResponseLine = 0;
                    typeTerminal();
                }, 500);
            } else {
                // Type response line by line
                if (currentResponseLine < currentResponse.length) {
                    const responseLine = document.createElement('div');
                    responseLine.classList.add('terminal-line');
                    responseLine.textContent = currentResponse[currentResponseLine];
                    terminal.appendChild(responseLine);
                    
                    currentResponseLine++;
                    
                    // Scroll terminal to bottom
                    terminal.scrollTop = terminal.scrollHeight;
                    
                    setTimeout(typeTerminal, 100);
                } else {
                    // Response finished, move to next command
                    isTypingResponse = false;
                    currentLine++;
                    
                    // Add an empty line for spacing
                    const spacer = document.createElement('div');
                    spacer.classList.add('terminal-line');
                    spacer.innerHTML = '&nbsp;';
                    terminal.appendChild(spacer);
                    
                    setTimeout(typeTerminal, 1000);
                }
            }
        } else {
            // All commands finished
            const promptLine = document.createElement('div');
            promptLine.classList.add('terminal-line');
            promptLine.innerHTML = `<span style="color: cyan;">madhav@portfolio</span>:<span style="color: #9370db;">~</span>$ <span class="blink">█</span>`;
            terminal.appendChild(promptLine);
        }
    }
    
    // Start terminal simulation after a delay
    setTimeout(typeTerminal, 4000);
}

function createPixelAvatar() {
    const avatar = document.getElementById('pixelAvatar');
    
    // You would need to create actual pixel art here
    // For now, let's create a simple placeholder
    avatar.style.backgroundImage = 'url("./public/madhav-pixel-art.webp")';
    avatar.style.backgroundSize = 'cover';
    avatar.style.backgroundPosition = 'center';
    
    // Add a glitch effect
    setInterval(() => {
        const shouldGlitch = Math.random() < 0.1; // 10% chance of glitching
        
        if (shouldGlitch) {
            avatar.style.filter = `hue-rotate(${Math.random() * 360}deg) brightness(1.2)`;
            setTimeout(() => {
                avatar.style.filter = 'none';
            }, 150);
        }
    }, 2000);
}

function addInteractivity() {
    // Window controls
    document.querySelectorAll('.close').forEach(button => {
        button.addEventListener('click', function() {
            const window = this.closest('.pixel-window');
            window.style.animation = 'windowClose 0.3s forwards';
            
            setTimeout(() => {
                window.style.display = 'none';
            }, 300);
        });
    });
    
    document.querySelectorAll('.minimize').forEach(button => {
        button.addEventListener('click', function() {
            const window = this.closest('.pixel-window');
            const content = window.querySelector('.hero-content, .info-content');
            
            if (content.style.display === 'none') {
                content.style.display = '';
                window.style.animation = 'windowExpand 0.3s forwards';
            } else {
                window.style.animation = 'windowMinimize 0.3s forwards';
                setTimeout(() => {
                    content.style.display = 'none';
                }, 300);
            }
        });
    });
    
    // Easter egg on avatar click
    const pixelAvatar = document.getElementById('pixelAvatar');
    let clickCount = 0;
    
    pixelAvatar.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 5) {
            // Easter egg after 5 clicks
            this.style.animation = 'spin 1s ease-in-out';
            
            setTimeout(() => {
                pixelAvatar.style.backgroundImage = 'url("https://avatars.dicebear.com/api/pixel-art-neutral/easteregg.svg")';
                
                const easterEggText = document.createElement('div');
                easterEggText.textContent = "Easter Egg Found! +100 XP";
                easterEggText.style.position = 'absolute';
                easterEggText.style.top = '-40px';
                easterEggText.style.left = '50%';
                easterEggText.style.transform = 'translateX(-50%)';
                easterEggText.style.color = '#ffcc00';
                easterEggText.style.fontFamily = "'Press Start 2P', cursive";
                easterEggText.style.fontSize = '0.8rem';
                easterEggText.style.animation = 'floatUp 2s forwards';
                
                pixelAvatar.parentNode.appendChild(easterEggText);
                
                setTimeout(() => {
                    easterEggText.remove();
                    pixelAvatar.style.backgroundImage = 'url("https://avatars.dicebear.com/api/pixel-art/madhavendra.svg")';
                }, 3000);
            }, 1000);
            
            clickCount = 0;
        }
    });
    
    pixelAvatar.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.boxShadow = '0 0 30px rgba(255, 105, 180, 0.8)';
        this.style.transition = 'all 0.3s ease';
    });
    
    pixelAvatar.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 0 20px rgba(255, 105, 180, 0.6)';
    });
}

// Add some CSS animations
const style = document.createElement('style');
style.textContent = `
@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

@keyframes windowClose {
    to { transform: scale(0.9); opacity: 0; }
}

@keyframes windowMinimize {
    to { height: 40px; }
}

@keyframes windowExpand {
    from { height: 40px; }
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes floatUp {
    0% { top: -40px; opacity: 1; }
    100% { top: -80px; opacity: 0; }
}

.blink {
    animation: blink 1s infinite;
}
`;
document.head.appendChild(style); 