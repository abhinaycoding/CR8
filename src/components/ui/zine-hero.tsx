import React from 'react';
import { motion } from 'framer-motion';

export default function ZineHero() {
    return (
        <div 
            className="relative w-full h-[100svh] overflow-hidden bg-[#0B0D0A] flex flex-col justify-center items-center"
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
            <div className="relative z-30 flex flex-col items-center justify-center w-full text-center mt-12 md:mt-0">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                >
                    <h1 className="text-[16vw] md:text-[12vw] font-black text-[#FAFAF7] uppercase tracking-[-0.02em] leading-[0.8]" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                        WE MAKE
                    </h1>
                </motion.div>
                
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative"
                >
                    <h1 
                        className="text-[18vw] md:text-[14vw] font-black text-transparent uppercase tracking-[-0.02em] leading-[0.85]" 
                        style={{ 
                            fontFamily: 'var(--font-display, Archivo Black)',
                            WebkitTextStroke: '3px #D7FF3E',
                        }}
                    >
                        NOISE.
                    </h1>

                    {/* Button attached directly under the text */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="absolute -bottom-6 md:-bottom-10 left-1/2 -translate-x-1/2 z-50 whitespace-nowrap"
                    >
                        <a href="#contact" className="inline-block bg-[#0044FF] text-[#FAFAF7] border-4 border-[#FAFAF7] px-6 py-3 md:px-8 md:py-4 font-black text-lg md:text-xl uppercase tracking-wider shadow-[8px_8px_0px_#FAFAF7] hover:bg-[#FAFAF7] hover:text-[#0044FF] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_#0044FF] transition-all" style={{ fontFamily: 'var(--font-display, Archivo Black)' }} draggable="false">
                            START PROJECT ↘
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Assets Placed Cleanly in the Corners (Desktop Only) */}
            <div className="hidden md:block absolute inset-0 pointer-events-none z-20">
                
                {/* Top Left: Sticker */}
                <motion.div
                    initial={{ scale: 0.5, rotate: -30, opacity: 0 }}
                    animate={{ scale: 1, rotate: -12, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                    className="absolute top-[20%] left-[12%] lg:left-[15%] bg-[#D7FF3E] text-[#0B0D0A] border-4 border-[#0B0D0A] px-4 py-2 font-black text-xl shadow-[6px_6px_0px_#0B0D0A]"
                    style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                >
                    100% RAW
                </motion.div>

                {/* Top Right: Stamp */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="absolute top-[20%] right-[12%] lg:right-[15%] rounded-full bg-[#FAFAF7] border-4 border-[#0B0D0A] shadow-[8px_8px_0px_#0B0D0A] p-2 flex items-center justify-center w-[120px] h-[120px] lg:w-[140px] lg:h-[140px]"
                >
                    <motion.svg 
                        viewBox="0 0 100 100" 
                        className="w-full h-full text-[#0B0D0A]"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                        <path id="circlePathHero" d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                        <text className="font-bold text-[10px] tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }} fill="currentColor">
                            <textPath href="#circlePathHero" startOffset="0">
                                CR8 STUDIO &middot; CR8 STUDIO &middot; CR8 STUDIO &middot; 
                            </textPath>
                        </text>
                    </motion.svg>
                    <div className="absolute font-black text-3xl text-[#0B0D0A] mt-1">✷</div>
                </motion.div>

                {/* Bottom Left: Image Card */}
                <motion.div
                    initial={{ x: -50, y: 50, rotate: -10, opacity: 0 }}
                    animate={{ x: 0, y: 0, rotate: -6, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
                    className="absolute bottom-[12%] left-[10%] lg:left-[15%] w-[20vw] max-w-[220px] aspect-[3/4] border-8 border-[#0B0D0A] shadow-[12px_12px_0px_#FAFAF7] overflow-hidden bg-[#FAFAF7] pointer-events-auto"
                >
                    <img src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=600&auto=format&fit=crop" alt="Street" className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300" draggable="false" />
                </motion.div>

                {/* Bottom Right: Mini Showreel (Reel Layout) */}
                <motion.div
                    initial={{ x: 50, y: 50, rotate: 10, opacity: 0 }}
                    animate={{ x: 0, y: 0, rotate: 6, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                    className="absolute bottom-[8%] right-[6%] lg:right-[10%] w-[18vw] max-w-[180px] aspect-[9/16] rounded-2xl overflow-hidden pointer-events-auto hover:-translate-y-2 hover:rotate-2 transition-all duration-300 group border-[3px] border-[#0B0D0A]"
                >
                    <video 
                        autoPlay 
                        loop 
                        muted 
                        playsInline 
                        className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-500"
                    >
                        <source src="/showreel.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Overlay UI */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
                    
                    <div className="absolute top-2 left-2 bg-[#FAFAF7] text-[#0B0D0A] font-black text-[8px] px-1.5 py-0.5 uppercase tracking-widest rounded-full flex items-center shadow-lg" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF0000] mr-1 animate-pulse"></span>
                        REC
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
