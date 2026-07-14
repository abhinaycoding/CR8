import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

export default function ProcessUnhinged() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    // Mouse tracking for floating image
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

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
        <section 
            id="process" 
            className="relative w-full bg-[#FAFAF7] py-32 overflow-hidden border-t-8 border-b-8 border-[#0B0D0A]"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <h2 className="text-center text-[11vw] leading-[0.8] font-black text-[#0B0D0A] mb-24 relative z-20" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                HOW WE ROLL
            </h2>

            <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pb-16">
                <div className="border-t-2 border-[#0B0D0A]">
                    {steps.map((step, i) => (
                        <div 
                            key={i} 
                            className="border-b-2 border-[#0B0D0A] group cursor-pointer relative"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onClick={() => setHoveredIndex(hoveredIndex === i ? null : i)}
                        >
                            {/* Title Row */}
                            <div className="flex justify-between items-center py-8 md:py-12 relative z-10">
                                <div className="flex items-center gap-8 md:gap-16">
                                    <span className={`text-xl md:text-3xl font-bold transition-colors duration-300 ${hoveredIndex === i ? 'text-[#0044FF]' : 'text-[#0B0D0A]/40'}`} style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        {step.num}
                                    </span>
                                    <h3 className={`text-5xl md:text-8xl font-black uppercase tracking-tighter transition-all duration-300 ${hoveredIndex === i ? 'text-[#0044FF] translate-x-4 md:translate-x-8' : 'text-[#0B0D0A]'}`} style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                                        {step.title}
                                    </h3>
                                </div>
                                <div className="hidden md:block overflow-hidden">
                                    <span className={`text-6xl font-black block transition-transform duration-500 ${hoveredIndex === i ? 'rotate-90 text-[#0044FF] scale-125' : 'text-[#0B0D0A]/20'}`}>↘</span>
                                </div>
                            </div>

                            {/* Expandable Text (Mobile & Desktop) */}
                            <AnimatePresence>
                                {hoveredIndex === i && (
                                    <motion.div 
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pb-12 md:pb-16 flex flex-col md:flex-row gap-8 md:gap-16 relative z-10 pl-0 md:pl-[120px]">
                                            <p className="text-2xl md:text-4xl text-[#0B0D0A] max-w-3xl font-bold leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                {step.text}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Cursor Image (Desktop Only) */}
            {!isMobile && (
                <AnimatePresence>
                    {hoveredIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                x: smoothX,
                                y: smoothY,
                                translateX: "-50%",
                                translateY: "-50%"
                            }}
                            className="fixed top-0 left-0 w-[450px] h-[320px] pointer-events-none z-[100] overflow-hidden border-4 border-[#0B0D0A] shadow-[16px_16px_0px_#0044FF]"
                        >
                            <img 
                                src={steps[hoveredIndex].img} 
                                alt="Process Visual" 
                                className="w-full h-full object-cover scale-110" 
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
        </section>
    );
}
