import React from 'react';

interface MaskingTapeProps {
  className?: string;
  rotation?: number;
}

export default function MaskingTape({ className = "", rotation = -3 }: MaskingTapeProps) {
  return (
    <div 
      className={`absolute w-32 h-8 bg-[#EADDC2] opacity-80 mix-blend-screen shadow-sm pointer-events-none z-50 ${className}`}
      style={{ 
        transform: `rotate(${rotation}deg)`,
        clipPath: 'polygon(0% 5%, 98% 0%, 100% 95%, 2% 100%)',
        filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.1))'
      }}
    >
      {/* Subtle texture inside the tape */}
      <div className="w-full h-full opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiLz48L3N2Zz4=")' }}></div>
    </div>
  );
}
