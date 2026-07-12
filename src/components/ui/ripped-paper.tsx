import React from 'react';

interface RippedPaperProps {
  color?: string;
  position?: 'top' | 'bottom';
  className?: string;
}

export default function RippedPaper({ color = '#0B0D0A', position = 'bottom', className = '' }: RippedPaperProps) {
  const transform = position === 'top' ? 'rotate(180deg)' : 'none';
  
  return (
    <div 
      className={`absolute left-0 w-full overflow-hidden leading-none z-10 pointer-events-none ${position === 'top' ? 'top-[-1px]' : 'bottom-[-1px]'} ${className}`}
      style={{ transform }}
    >
      <svg 
        className="relative block w-[200%] h-[40px] md:h-[60px]" 
        style={{ width: 'calc(100% + 1.3px)', height: '40px' }}
        data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
      >
        <path 
          d="M1200,120H0V0c32.8,33.5,65.6,33.5,98.4,0,32.8-33.5,65.6-33.5,98.4,0,32.8,33.5,65.6,33.5,98.4,0,32.8-33.5,65.6-33.5,98.4,0,32.8,33.5,65.6,33.5,98.4,0,32.8-33.5,65.6-33.5,98.4,0,32.8,33.5,65.6,33.5,98.4,0,32.8-33.5,65.6-33.5,98.4,0,32.8,33.5,65.6,33.5,98.4,0,32.8-33.5,65.6-33.5,98.4,0,32.8,33.5,65.6,33.5,98.4,0,32.8-33.5,65.6-33.5,98.4,0" 
          fill={color}
        />
        {/* A more jagged brutalist rip */}
        <path d="M0,0 L30,40 L60,10 L120,60 L180,20 L240,70 L300,30 L360,80 L420,15 L480,55 L540,5 L600,65 L660,25 L720,75 L780,35 L840,85 L900,20 L960,60 L1020,10 L1080,70 L1140,25 L1200,80 L1200,120 L0,120 Z" fill={color} />
      </svg>
    </div>
  );
}
