import React from 'react';
import { motion } from 'framer-motion';

export default function WorkMarquee() {
    const imagesRow1 = [
        "https://images.unsplash.com/photo-1540039155732-6761b33604f3?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574360741512-1f4803964147?q=80&w=800&auto=format&fit=crop"
    ];

    const imagesRow2 = [
        "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop"
    ];

    return (
        <section id="work" className="relative w-full bg-[#0B0D0A] py-32 overflow-hidden border-t-[8px] border-b-[8px] border-[#0B0D0A]">
            
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiLz48L3N2Zz4=')] opacity-[0.05] pointer-events-none z-0 invert"></div>

            <div className="container mx-auto px-4 relative z-10 mb-16 md:mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
                <h2 className="text-[12vw] md:text-[8vw] leading-[0.8] font-black text-[#FAFAF7] uppercase tracking-tighter whitespace-nowrap" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                    THE <span className="text-[#D7FF3E] relative inline-block">VIBE<span className="absolute top-0 -right-8 md:-right-16 text-2xl md:text-3xl text-[#FAFAF7] rotate-12 hidden md:block">✷</span></span>
                </h2>
                <a href="work.html" className="inline-block w-full md:w-auto text-center bg-[#0B0D0A] text-[#D7FF3E] font-black text-lg md:text-2xl py-4 px-4 md:px-8 border-[3px] md:border-[4px] border-[#D7FF3E] shadow-[4px_4px_0px_#D7FF3E] md:shadow-[8px_8px_0px_#D7FF3E] hover:bg-[#D7FF3E] hover:text-[#0B0D0A] hover:translate-x-1 hover:-translate-y-1 transition-all uppercase tracking-widest" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                    VIEW FULL PORTFOLIO ↘
                </a>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full flex flex-col gap-8 md:gap-16 py-12 group perspective-[1000px] overflow-hidden">
                
                {/* Top Row - Moves Left */}
                <div className="relative w-full h-[300px] md:h-[450px] flex items-center">
                    <motion.div 
                        className="flex gap-8 absolute left-0"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ ease: "linear", duration: 40, repeat: Infinity }}
                    >
                        {[...imagesRow1, ...imagesRow1, ...imagesRow1].map((src, i) => (
                            <motion.div 
                                key={i} 
                                whileHover={{ scale: 1.05, rotate: 2, y: -10, zIndex: 40 }}
                                className="relative flex-shrink-0 w-[250px] md:w-[400px] h-[300px] md:h-[450px] border-[4px] border-[#FAFAF7] shadow-[12px_12px_0px_#D7FF3E] overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 cursor-grab active:cursor-grabbing"
                            >
                                <img loading="lazy" decoding="async" src={src} alt="Gallery item" className="w-full h-full object-cover transform scale-110" draggable="false" />
                                {i % 3 === 0 && (
                                    <div className="absolute top-4 left-4 bg-[#0044FF] text-[#FAFAF7] font-black px-4 py-1 border-2 border-[#FAFAF7] text-xl transform -rotate-12 shadow-[4px_4px_0px_#FAFAF7]" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                                        RAW.
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom Row - Moves Right */}
                <div className="relative w-full h-[300px] md:h-[450px] flex items-center">
                    <motion.div 
                        className="flex gap-8 absolute right-0 flex-row-reverse"
                        animate={{ x: ["0%", "50%"] }}
                        transition={{ ease: "linear", duration: 45, repeat: Infinity }}
                    >
                        {[...imagesRow2, ...imagesRow2, ...imagesRow2].map((src, i) => (
                            <motion.div 
                                key={i} 
                                whileHover={{ scale: 1.05, rotate: -2, y: -10, zIndex: 40 }}
                                className="relative flex-shrink-0 w-[250px] md:w-[400px] h-[300px] md:h-[450px] border-[4px] border-[#FAFAF7] shadow-[12px_12px_0px_#0044FF] overflow-hidden grayscale hover:grayscale-0 transition-all duration-300 cursor-grab active:cursor-grabbing"
                            >
                                <img loading="lazy" decoding="async" src={src} alt="Gallery item" className="w-full h-full object-cover transform scale-110" draggable="false" />
                                {i % 2 === 0 && (
                                    <div className="absolute bottom-4 right-4 bg-[#D7FF3E] text-[#0B0D0A] font-black px-4 py-1 border-2 border-[#0B0D0A] text-xl transform rotate-6 shadow-[4px_4px_0px_#0B0D0A]" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                                        FILM.
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
            
        </section>
    );
}
