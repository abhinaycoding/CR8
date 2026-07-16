import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section 
            className="min-h-screen relative w-full bg-[#0B0D0A] flex flex-col items-center justify-center overflow-hidden pt-24 pb-20"
            style={{
                '--mouse-x': `${mousePos.x}px`,
                '--mouse-y': `${mousePos.y}px`
            } as any}
        >
            {/* Spotlight Effect */}
            <div 
                className="absolute inset-0 pointer-events-none z-10 mix-blend-screen opacity-60"
                style={{
                    background: 'radial-gradient(circle 400px at var(--mouse-x) var(--mouse-y), rgba(215, 255, 62, 0.15), transparent 80%)'
                }}
            />

            {/* Chaotic Background Numbers */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none flex flex-col justify-center gap-4 opacity-[0.03]">
                {[...Array(5)].map((_, i) => (
                    <motion.div 
                        key={i}
                        className="text-[30vw] leading-[0.75] font-black text-[#FAFAF7] whitespace-nowrap"
                        style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                        animate={{ x: i % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                        transition={{ ease: "linear", duration: 20 + i * 5, repeat: Infinity }}
                    >
                        404 404 404 404 404 404 404
                    </motion.div>
                ))}
            </div>

            <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl">
                <motion.h1 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[25vw] md:text-[15vw] leading-[0.8] font-black text-transparent uppercase tracking-tighter"
                    style={{ 
                        fontFamily: 'var(--font-display, Archivo Black)',
                        WebkitTextStroke: '2px #D7FF3E'
                    }}
                >
                    404
                </motion.h1>
                
                <motion.h2 
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-7xl font-black text-[#FAFAF7] uppercase mt-4 mb-8"
                    style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                >
                    DEAD END.
                </motion.h2>

                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-2xl text-[#FAFAF7] opacity-70 mb-12 max-w-2xl"
                >
                    The page you are looking for has been destroyed, relocated, or never existed in the first place. You took a wrong turn into the void.
                </motion.p>

                <motion.a
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5, type: 'spring', stiffness: 200 }}
                    href="index.html"
                    className="inline-block bg-[#0B0D0A] text-[#D7FF3E] font-black text-xl md:text-3xl py-4 px-12 border-[4px] border-[#D7FF3E] shadow-[8px_8px_0px_#D7FF3E] hover:bg-[#D7FF3E] hover:text-[#0B0D0A] hover:translate-x-1 hover:-translate-y-1 transition-all uppercase tracking-widest relative overflow-hidden group"
                    style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                >
                    <span className="relative z-10">TAKE ME BACK ↗</span>
                </motion.a>
            </div>
            
            {/* Warning Tape Banner */}
            <div className="absolute bottom-10 left-0 w-full overflow-hidden bg-[#D7FF3E] text-[#0B0D0A] py-2 rotate-[-2deg] z-30 shadow-2xl">
                <motion.div 
                    className="flex whitespace-nowrap font-black uppercase text-xl md:text-2xl tracking-widest"
                    style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 15, repeat: Infinity }}
                >
                    {[...Array(15)].map((_, i) => (
                        <span key={i} className="px-4">CAUTION: WRONG TURN ✷</span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
