import React from 'react';
import { motion } from 'framer-motion';

export default function FooterUnhinged() {
    return (
        <footer id="contact" className="relative w-full h-[100vh] min-h-[600px] bg-[#0044FF] flex flex-col justify-center items-center overflow-hidden cursor-crosshair">
            {/* Spinning background element */}
            <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#0B0D0A] opacity-20 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="text-[120vw] leading-none font-black" style={{ fontFamily: 'Archivo Black, sans-serif' }}>✷</div>
            </motion.div>

            {/* Massive Hyperlink */}
            <a 
                href="mailto:hello@cr8studio.com" 
                className="relative z-10 text-center group"
            >
                <h2 className="text-[10vw] leading-none font-black text-[#FAFAF7] hover:text-[#D7FF3E] transition-colors glitch-text" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                    HELLO@<br/>CR8STUDIO.COM
                </h2>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-4 bg-[#0B0D0A] group-hover:w-full transition-all duration-500 z-[-1]"></div>
            </a>

            {/* Static Stickers */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-[20%] left-[15%] z-20 bg-[#D7FF3E] border-4 border-[#0B0D0A] p-4 shadow-[8px_8px_0px_#0B0D0A] transform -rotate-12 text-3xl font-black text-[#0B0D0A]"
                style={{ fontFamily: 'Archivo Black, sans-serif' }}
            >
                LET'S TALK
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-[20%] right-[15%] z-20 bg-[#0B0D0A] border-4 border-[#FAFAF7] p-4 shadow-[8px_8px_0px_#FAFAF7] transform rotate-12 text-3xl font-black text-[#FAFAF7]"
                style={{ fontFamily: 'Archivo Black, sans-serif' }}
            >
                DON'T BE SHY
            </motion.div>

            {/* Actual Footer Info */}
            <div className="absolute bottom-8 left-0 w-full flex justify-between px-12 text-[#FAFAF7] font-bold tracking-widest text-sm z-10" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <p>&copy; 2026 CR8 STUDIO.</p>
                <p>ALL RULES BROKEN.</p>
            </div>
        </footer>
    );
}
