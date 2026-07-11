import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProcessUnhinged() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

    const steps = [
        { 
            num: '01', 
            title: 'DISCOVERY', 
            text: 'We audit your brand, strip away the excess, and find the actual problem.',
            img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop'
        },
        { 
            num: '02', 
            title: 'STRATEGY', 
            text: 'Data meets culture. We map out a blueprint that commands attention.',
            img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop'
        },
        { 
            num: '03', 
            title: 'PRODUCTION', 
            text: 'Design, film, build. We execute flawlessly across all mediums.',
            img: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800&auto=format&fit=crop'
        },
        { 
            num: '04', 
            title: 'ROLLOUT', 
            text: 'We put the work in front of the people who actually matter.',
            img: 'https://images.unsplash.com/photo-1542451313056-b7c8e626645f?q=80&w=800&auto=format&fit=crop'
        }
    ];

    return (
        <section className="relative w-full bg-[#0B0D0A] py-32 overflow-hidden border-b-[1px] border-[#FAFAF7]/20">
            <h2 className="text-center text-[10vw] leading-none font-black text-[#FAFAF7] mb-20 relative z-20" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                HOW WE ROLL
            </h2>

            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pb-32">
                <div className="border-t-[1px] border-[#FAFAF7]/30">
                    {steps.map((step, i) => (
                        <div 
                            key={i} 
                            className="border-b-[1px] border-[#FAFAF7]/30 group cursor-pointer relative overflow-hidden"
                            onMouseEnter={() => setHoveredIndex(i)}
                        >
                            {/* Title Row */}
                            <div className="flex justify-between items-center py-8 md:py-12 relative z-10">
                                <div className="flex items-center gap-8 md:gap-16">
                                    <span className={`text-xl md:text-2xl font-bold transition-colors duration-500 ${hoveredIndex === i ? 'text-[#D7FF3E]' : 'text-[#FAFAF7]/40'}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        {step.num}
                                    </span>
                                    <h3 className={`text-4xl md:text-7xl font-black uppercase tracking-tighter transition-all duration-500 ${hoveredIndex === i ? 'text-[#FAFAF7] translate-x-4' : 'text-[#FAFAF7]/80'}`} style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                                        {step.title}
                                    </h3>
                                </div>
                                <div className="hidden md:block">
                                    <span className={`text-4xl transition-transform duration-500 ${hoveredIndex === i ? 'rotate-90 text-[#D7FF3E]' : 'text-[#FAFAF7]/40'}`}>+</span>
                                </div>
                            </div>

                            {/* Expandable Content */}
                            <AnimatePresence>
                                {hoveredIndex === i && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-12 md:pb-16 flex flex-col md:flex-row gap-8 md:gap-16 relative z-10 pl-0 md:pl-[100px]">
                                            <p className="text-xl md:text-3xl text-[#FAFAF7]/80 max-w-xl font-medium leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                {step.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            
                            {/* Background Image Reveal */}
                            <div 
                                className={`absolute inset-0 z-0 transition-opacity duration-700 pointer-events-none ${hoveredIndex === i ? 'opacity-30' : 'opacity-0'}`}
                            >
                                <img src={step.img} alt={step.title} className="w-full h-full object-cover grayscale opacity-50 object-center" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0A] via-[#0B0D0A]/80 to-transparent"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0A] via-[#0B0D0A]/80 to-transparent"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
