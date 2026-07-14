import React from 'react';
import { motion } from 'framer-motion';

export default function AboutHero() {
    return (
        <div className="relative w-full min-h-[100svh] bg-[#0B0D0A] flex flex-col justify-center items-center pb-20 overflow-hidden" style={{ paddingTop: '160px' }}>
            
            {/* Minimalist Grid Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(250, 250, 247, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(250, 250, 247, 0.05) 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>

            <div className="container mx-auto px-4 lg:px-12 relative z-10 w-full flex flex-col lg:flex-row items-stretch min-h-[60vh] gap-12 lg:gap-0">
                
                {/* Left Side - Massive Branding */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center border-l-2 border-[#D7FF3E] pl-8 lg:pl-16 relative">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-[15vw] lg:text-[10vw] font-black text-[#FAFAF7] uppercase tracking-tighter leading-[0.8]" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                            WE ARE<br/>
                            <span className="text-[#D7FF3E]">CR8.</span>
                        </h1>

                    </motion.div>
                </div>

                {/* Right Side - Sleek Typography */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center lg:border-l border-[#333] lg:pl-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <p className="text-3xl lg:text-5xl font-light text-[#FAFAF7] leading-tight mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Born from the streets. <span className="font-bold text-[#D7FF3E]">Built for the bold.</span> We don't just follow trends, we engineer them.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#333] pt-8">
                            <div>
                                <h3 className="text-[#FAFAF7] font-bold text-xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Our Ethos</h3>
                                <p className="text-[#888888] text-lg leading-relaxed font-light" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    We are a collective of visionaries making noise that actually sells. No fluff. Pure creative strategy engineered for maximum impact.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[#FAFAF7] font-bold text-xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Our Promise</h3>
                                <p className="text-[#888888] text-lg leading-relaxed font-light" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    If a design doesn't evoke a visceral reaction, it's not finished. We deliver premium execution with relentless precision.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}
