import React from 'react';
import { motion } from 'framer-motion';

export default function WorkMarquee() {
    const images = [
        "https://images.unsplash.com/photo-1540039155732-6761b33604f3?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574360741512-1f4803964147?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <section className="relative w-full bg-[#FAFAF7] py-32 overflow-hidden border-t-8 border-b-8 border-[#0B0D0A]">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiLz48L3N2Zz4=')] opacity-10 pointer-events-none z-0"></div>

            <h2 className="text-center text-[12vw] leading-none font-black text-[#0B0D0A] mb-20 relative z-10" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                THE <span className="text-[#D7FF3E]" style={{ WebkitTextStroke: '3px #0B0D0A' }}>VIBE</span>
            </h2>

            <div className="relative w-full h-[600px] flex items-center group">
                <motion.div 
                    className="flex gap-8 absolute left-0"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                >
                    {[...images, ...images, ...images].map((src, i) => (
                        <div key={i} className="relative flex-shrink-0 w-[500px] h-[600px] border-8 border-[#0B0D0A] shadow-[16px_16px_0px_#0B0D0A] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 cursor-grab active:cursor-grabbing">
                            <img src={src} alt="Gallery item" className="w-full h-full object-cover" draggable="false" />
                            {i % 2 === 0 && (
                                <div className="absolute top-4 left-4 bg-[#D7FF3E] text-[#0B0D0A] font-black px-4 py-2 border-4 border-[#0B0D0A] text-2xl transform -rotate-12" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                                    RAW.
                                </div>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
            
        </section>
    );
}
