import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MaskingTape from './masking-tape';
import RippedPaper from './ripped-paper';

export default function ZineHero() {
    const words = ['CULTURE', 'VIBE', 'BRANDS', 'NOISE', 'HYPE', 'MODELS', 'CREATORS'];
    const [wordIndex, setWordIndex] = useState(0);

    // List of showcase videos to cycle through automatically
    const showcaseVideos = ['/showreel.mp4', '/hero-vid.mp4'];
    const [videoIndex, setVideoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % words.length);
        }, 2500); // Change word every 2.5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div 
            className="relative w-full h-[100svh] bg-[#0B0D0A] flex flex-col justify-center items-center overflow-hidden"
        >
            {/* Background Video & Noise */}
            <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen pointer-events-none"
            >
                <source src="/hero-vid.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-[-50%] w-[200%] h-[200%] opacity-5 pointer-events-none z-0" 
                 style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiLz48L3N2Zz4=")' }}
            />

            {/* Main Centered Typography */}
            <div className="relative z-30 flex flex-col items-center justify-center w-full text-center mt-[-10vh] md:mt-0 px-4">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <h1 className="font-black text-[#D7FF3E] uppercase tracking-[-0.02em] leading-[0.8]" style={{ fontFamily: 'var(--font-display, Archivo Black)', fontSize: 'clamp(3rem, 18vw, 150px)' }}>
                        WE BUILD
                    </h1>
                </motion.div>
                
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative flex flex-col items-center mt-2 w-full"
                >
                    <div className="flex items-center justify-center w-full relative overflow-visible" style={{ height: 'clamp(3.5rem, 20vw, 180px)' }}>
                        <AnimatePresence mode="popLayout">
                            <motion.h1 
                                key={wordIndex}
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -40, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="absolute font-black text-transparent uppercase tracking-[-0.02em] leading-[0.85] w-full" 
                                style={{ 
                                    fontFamily: 'var(--font-display, Archivo Black)',
                                    WebkitTextStroke: 'min(3px, 0.5vw) #D7FF3E',
                                    fontSize: 'clamp(4rem, 22vw, 200px)'
                                }}
                            >
                                {words[wordIndex]}
                            </motion.h1>
                        </AnimatePresence>
                    </div>


                </motion.div>
            </div>

            {/* Assets Placed Cleanly in the Corners */}
            <div className="absolute inset-0 pointer-events-none z-20">
                

                {/* Bottom Right: Clean Video Showcase */}
                <motion.div
                    initial={{ x: 50, y: 50, rotate: 0, opacity: 0 }}
                    animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                    className="absolute bottom-[8%] right-[6%] lg:right-[10%] w-[35vw] md:w-[22vw] lg:w-[18vw] max-w-[220px] aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#333333] shadow-2xl pointer-events-auto hover:-translate-y-2 transition-all duration-300 z-10"
                >
                    <video 
                        key={showcaseVideos[videoIndex]} // Force React to reload the video when src changes
                        autoPlay 
                        muted 
                        playsInline 
                        onEnded={() => setVideoIndex((prev) => (prev + 1) % showcaseVideos.length)}
                        className="absolute inset-0 w-full h-full object-cover scale-[1.3] hover:scale-[1.4] transition-transform duration-700 bg-[#0B0D0A]"
                    >
                        <source src={showcaseVideos[videoIndex]} type="video/mp4" />
                    </video>
                </motion.div>
            </div>
            
            <RippedPaper color="#0B0D0A" position="bottom" className="translate-y-full" />
        </div>
    );
}
