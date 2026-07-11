import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            quote: "CR8 didn't just redesign our platform; they fundamentally shifted how the market perceives our brand. The ROI was immediate and undeniable.",
            author: "Alex Chen",
            role: "Chief Executive Officer",
            company: "OBLIVION",
            metric: "+210%",
            metricText: "Increase in Conversion Rate"
        },
        {
            quote: "Their strategic approach to digital experience is unmatched. They delivered a product that looks beautiful and performs flawlessly under scale.",
            author: "Sarah Jenkins",
            role: "VP of Global Marketing",
            company: "NEXUS CORP",
            metric: "4.5x",
            metricText: "Growth in User Engagement"
        },
        {
            quote: "A rare breed of agency that truly understands the intersection of high-end aesthetics and aggressive business growth.",
            author: "Marcus Thorne",
            role: "Managing Director",
            company: "VELOCITY PARTNERS",
            metric: "$12M",
            metricText: "New Revenue Generated"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full bg-[#0B0D0A] py-20 md:py-28 my-12 overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
                    
                    {/* Left Column: Heading & Controls */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full">
                        <div>
                        <div className="mb-8">
                            <span className="text-[#D7FF3E] text-xs font-bold uppercase tracking-[0.3em]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Proven Impact</span>
                        </div>
                            <h2 className="text-4xl md:text-5xl font-light text-white leading-[1.1] tracking-tight mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                We build digital experiences that drive <span className="font-bold italic opacity-90">real business value.</span>
                            </h2>
                        </div>
                        
                        {/* Navigation Dots */}
                        <div className="flex gap-4 mt-8 lg:mt-24">
                            {testimonials.map((_, idx) => (
                                <button 
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-1 transition-all duration-500 rounded-full ${currentIndex === idx ? 'w-12 bg-[#D7FF3E]' : 'w-4 bg-white/20 hover:bg-white/40'}`}
                                    aria-label={`Go to testimonial ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Column: The Testimonial & Metric */}
                    <div className="lg:col-span-7 lg:col-start-6 relative min-h-[400px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="flex flex-col h-full"
                            >
                                {/* Massive Quote */}
                                <div className="mb-12 relative">
                                    <span className="absolute -top-12 -left-8 text-8xl text-white/5 font-serif pointer-events-none">"</span>
                                    <p className="text-2xl md:text-4xl text-gray-200 font-light leading-snug md:leading-relaxed relative z-10" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        {testimonials[currentIndex].quote}
                                    </p>
                                </div>

                                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mt-auto border-t border-white/10 pt-8">
                                    {/* Author Info */}
                                    <div>
                                        <p className="text-white font-medium text-xl mb-1 tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{testimonials[currentIndex].author}</p>
                                        <p className="text-gray-400 text-sm mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{testimonials[currentIndex].role}</p>
                                        <p className="text-[#D7FF3E] text-xs font-bold tracking-[0.2em] uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{testimonials[currentIndex].company}</p>
                                    </div>
                                    
                                    {/* Metric Highlight */}
                                    <div className="text-left md:text-right">
                                        <p className="text-5xl md:text-7xl font-light text-white tracking-tighter mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                            {testimonials[currentIndex].metric}
                                        </p>
                                        <p className="text-gray-500 text-xs tracking-widest uppercase font-bold max-w-[150px] md:ml-auto" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                            {testimonials[currentIndex].metricText}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
            
            {/* Minimalist Background Element */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-white/[0.03] to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        </section>
    );
}
