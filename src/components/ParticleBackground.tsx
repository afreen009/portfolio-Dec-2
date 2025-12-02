import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface CodeSnippet {
  x: number;
  y: number;
  text: string;
  color: string;
  speed: number;
  opacity: number;
  fontSize: number;
  targetX: number;
  targetY: number;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const isDark = theme === 'dark';

    // Theme-based colors
    const darkColors = ['#00d4aa', '#a78bfa', '#ffd93d', '#ff6b6b', '#4ade80', '#60a5fa'];
    const lightColors = ['#0891b2', '#7c3aed', '#d97706', '#dc2626', '#16a34a', '#2563eb'];
    const colors = isDark ? darkColors : lightColors;

    const bgColor = isDark ? 'rgba(10, 10, 15, 0.15)' : 'rgba(248, 250, 252, 0.15)';
    const binaryColor = isDark ? 'rgba(0, 212, 170, ' : 'rgba(8, 145, 178, ';
    const symbolColor = isDark ? 'rgba(167, 139, 250, 0.15)' : 'rgba(124, 58, 237, 0.1)';
    const lineColor = isDark ? 'rgba(0, 212, 170, 0.03)' : 'rgba(8, 145, 178, 0.05)';
    const glowColor1 = isDark ? 'rgba(0, 212, 170, 0.1)' : 'rgba(8, 145, 178, 0.08)';
    const glowColor2 = isDark ? 'rgba(167, 139, 250, 0.05)' : 'rgba(124, 58, 237, 0.04)';

    // Code snippets to display
    const codeTexts = [
      'const App = () => {',
      'return <Component />',
      'useState()',
      'useEffect(() => {})',
      'export default',
      'import React from',
      'className="flex"',
      'onClick={handle}',
      '<div>',
      '</div>',
      'async function',
      'await fetch()',
      'map((item) =>',
      'filter(x => x)',
      'props.children',
      'useMemo(() => {})',
      'useCallback(fn)',
      'interface Props {',
      'type State = {',
      '.then(res =>',
      '.catch(err =>',
      'try { } catch',
      'if (condition)',
      'for (let i = 0)',
      'return null;',
      '// TODO:',
      'npm install',
      'git commit -m',
      'yarn build',
      'next dev',
      '{ ...spread }',
      '[...array]',
      '?.optional',
      '?? nullish',
      'Promise.all()',
      'Object.keys()',
      'console.log()',
      'setState(prev)',
      'React.memo()',
      '<Fragment>',
      'key={id}',
      'style={{ }}',
      '@keyframes spin',
      'flex-direction',
      'justify-content',
      'position: fixed',
      'z-index: 9999',
      'border-radius',
      'linear-gradient',
      'var(--primary)',
      '@media (min-width)',
      ':hover { }',
    ];

    const snippets: CodeSnippet[] = [];
    const numSnippets = 50;

    // Initialize code snippets
    for (let i = 0; i < numSnippets; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      snippets.push({
        x,
        y,
        text: codeTexts[Math.floor(Math.random() * codeTexts.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 0.2 + Math.random() * 0.4,
        opacity: isDark ? (0.1 + Math.random() * 0.25) : (0.15 + Math.random() * 0.3),
        fontSize: 10 + Math.random() * 5,
        targetX: x,
        targetY: y,
      });
    }

    // Binary/Matrix rain effect
    const binaryColumns: { x: number; y: number; speed: number; chars: string[] }[] = [];
    const numColumns = Math.floor(canvas.width / 35);
    
    for (let i = 0; i < numColumns; i++) {
      binaryColumns.push({
        x: i * 35 + Math.random() * 10,
        y: Math.random() * canvas.height,
        speed: 0.8 + Math.random() * 1.5,
        chars: Array(8).fill(0).map(() => Math.random() > 0.5 ? '1' : '0'),
      });
    }

    // Floating brackets and symbols
    const symbols: { x: number; y: number; char: string; rotation: number; rotationSpeed: number; floatOffset: number }[] = [];
    const symbolChars = ['{ }', '< />', '( )', '[ ]', '=>', '&&', '||', '==='];
    
    for (let i = 0; i < 12; i++) {
      symbols.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        char: symbolChars[Math.floor(Math.random() * symbolChars.length)],
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.015,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }

    let time = 0;
    let animationId: number;

    const animate = () => {
      time += 0.016;
      
      // Clear with fade effect
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw binary rain
      ctx.font = '11px "Fira Code", monospace';
      binaryColumns.forEach(col => {
        col.y += col.speed;
        if (col.y > canvas.height + 100) {
          col.y = -100;
          col.chars = Array(8).fill(0).map(() => Math.random() > 0.5 ? '1' : '0');
        }

        col.chars.forEach((char, i) => {
          const y = col.y + i * 14;
          const alpha = Math.max(0, 1 - i * 0.12) * (isDark ? 0.12 : 0.08);
          ctx.fillStyle = binaryColor + alpha + ')';
          ctx.fillText(char, col.x, y);
        });
      });

      // Draw floating symbols
      symbols.forEach(sym => {
        sym.rotation += sym.rotationSpeed;
        const floatY = Math.sin(time * 1.5 + sym.floatOffset) * 15;
        
        ctx.save();
        ctx.translate(sym.x, sym.y + floatY);
        ctx.rotate(sym.rotation);
        ctx.font = 'bold 22px "Fira Code", monospace';
        ctx.fillStyle = symbolColor;
        ctx.textAlign = 'center';
        ctx.fillText(sym.char, 0, 0);
        ctx.restore();
      });

      // Draw code snippets with mouse interaction
      const mouse = mouseRef.current;
      
      snippets.forEach(snippet => {
        // Calculate distance from mouse
        const dx = mouse.x - snippet.x;
        const dy = mouse.y - snippet.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 180;

        // Move away from mouse
        if (distance < maxDistance && distance > 0) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          snippet.targetX = snippet.x - Math.cos(angle) * force * 80;
          snippet.targetY = snippet.y - Math.sin(angle) * force * 80;
        } else {
          // Drift slowly
          snippet.targetY += snippet.speed;
          if (snippet.targetY > canvas.height + 50) {
            snippet.targetY = -50;
            snippet.targetX = Math.random() * canvas.width;
            snippet.text = codeTexts[Math.floor(Math.random() * codeTexts.length)];
            snippet.color = colors[Math.floor(Math.random() * colors.length)];
          }
        }

        // Smooth movement towards target
        snippet.x += (snippet.targetX - snippet.x) * 0.04;
        snippet.y += (snippet.targetY - snippet.y) * 0.04;

        // Keep within bounds
        snippet.x = Math.max(0, Math.min(canvas.width, snippet.x));

        // Draw the code snippet
        ctx.font = `${snippet.fontSize}px "Fira Code", monospace`;
        
        // Hex to rgba conversion
        const hexToRgba = (hex: string, alpha: number) => {
          const r = parseInt(hex.slice(1, 3), 16);
          const g = parseInt(hex.slice(3, 5), 16);
          const b = parseInt(hex.slice(5, 7), 16);
          return `rgba(${r}, ${g}, ${b}, ${alpha})`;
        };
        
        const finalOpacity = distance < maxDistance 
          ? snippet.opacity + (1 - distance / maxDistance) * 0.35
          : snippet.opacity;
        
        // Glow effect when near mouse
        if (distance < maxDistance) {
          ctx.shadowColor = snippet.color;
          ctx.shadowBlur = 15 * (1 - distance / maxDistance);
        }
        
        ctx.fillStyle = hexToRgba(snippet.color, finalOpacity);
        ctx.fillText(snippet.text, snippet.x, snippet.y);
        ctx.shadowBlur = 0;
      });

      // Draw connecting lines between nearby snippets
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;
      for (let i = 0; i < snippets.length; i++) {
        for (let j = i + 1; j < snippets.length; j++) {
          const dx = snippets[i].x - snippets[j].x;
          const dy = snippets[i].y - snippets[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 80) {
            ctx.globalAlpha = (1 - distance / 80) * 0.08;
            ctx.beginPath();
            ctx.moveTo(snippets[i].x, snippets[i].y);
            ctx.lineTo(snippets[j].x, snippets[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      // Draw cursor glow effect
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 120);
        gradient.addColorStop(0, glowColor1);
        gradient.addColorStop(0.5, glowColor2);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(mouse.x - 120, mouse.y - 120, 240, 240);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [theme]);

  const isDark = theme === 'dark';

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: isDark 
          ? 'linear-gradient(135deg, #0a0a0f 0%, #0d0d14 50%, #0a0a0f 100%)'
          : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f8fafc 100%)',
        transition: 'background 0.5s ease',
      }}
    />
  );
};

export default ParticleBackground;
