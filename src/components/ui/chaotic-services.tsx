import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { GradientHeading } from './gradient-heading';


export default function ChaoticServices() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    // Smooth spring physics for the floating image
    const springX = useSpring(0, { stiffness: 100, damping: 20 });
    const springY = useSpring(0, { stiffness: 100, damping: 20 });

    useEffect(() => {
        springX.set(mousePos.x);
        springY.set(mousePos.y);
        
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [mousePos, springX, springY]);

    const handleMouseMove = (e: React.MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    const services = [
        {
            num: '01',
            title: 'STRATEGY',
            desc: 'We find the angle that makes your audience care. Data meets pure creative chaos.',
            color: '#D7FF3E',
            bg: '#0B0D0A',
            img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
            link: '/services.html?tab=1'
        },
        {
            num: '02',
            title: 'CREATIVE',
            desc: 'Art direction that breaks the rules. If it looks like a template, we burn it.',
            color: '#0B0D0A',
            bg: '#D7FF3E',
            img: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800&auto=format&fit=crop',
            link: '/services.html?tab=0'
        },
        {
            num: '03',
            title: 'PRODUCTION',
            desc: 'High-end video and photo shoots. Raw, unfiltered, and strictly premium.',
            color: '#FAFAF7',
            bg: '#0044FF',
            img: 'https://images.unsplash.com/photo-1589254066007-898d52d910d3?q=80&w=800&auto=format&fit=crop',
            link: '/services.html?tab=0'
        },
        {
            num: '04',
            title: 'BRAND ADS',
            desc: 'Paid creative that stops the scroll and full-stack management without the jargon.',
            color: '#FAFAF7',
            bg: '#0B0D0A',
            img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop',
            link: '/services.html?tab=1'
        }
    ];

    return (
        <section 
            id="services"
            className="relative w-full bg-[#0B0D0A] py-32 overflow-hidden z-10 border-b-8 border-[#FAFAF7]"
            onMouseMove={handleMouseMove}
        >
            <div className="container mx-auto px-4 relative z-10 mb-12">
                <div className="flex justify-between items-end flex-wrap gap-8">
                    <GradientHeading 
                        variant="light" 
                        weight="black"
                        className="text-[8vw] leading-[0.8] uppercase tracking-[-0.01em]" 
                        style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                    >
                        SERVICES
                    </GradientHeading>
                </div>
            </div>

            <div className="w-full flex flex-col border-t-8 border-[#333333] relative">
                {services.map((service, i) => (
                    <motion.a 
                        href={service.link}
                        key={i}
                        onHoverStart={() => setHoveredIndex(i)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className="w-full border-b-8 border-[#333333] relative overflow-hidden group cursor-pointer transition-colors duration-500 block"
                        style={{ backgroundColor: hoveredIndex === i ? service.bg : 'transparent' }}
                    >
                        {/* Background Infinite Marquee on Hover */}
                        <AnimatePresence>
                            {hoveredIndex === i && (
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 flex items-center whitespace-nowrap z-0 pointer-events-none opacity-20"
                                >
                                    <motion.div 
                                        className="flex gap-8"
                                        animate={{ x: [0, -1000] }}
                                        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                                    >
                                        {[...Array(10)].map((_, j) => (
                                            <span 
                                                key={j} 
                                                className="text-[12vw] font-black uppercase tracking-tight text-transparent"
                                                style={{ 
                                                    fontFamily: 'var(--font-body, sans-serif)',
                                                    WebkitTextStroke: `1px ${service.color}`
                                                }}
                                            >
                                                {service.title} &mdash;
                                            </span>
                                        ))}
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-start md:items-center justify-between relative z-10 gap-8">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12">
                                <span 
                                    className="text-4xl font-black opacity-30 transition-all duration-500" 
                                    style={{ 
                                        color: (isMobile || hoveredIndex === i) ? service.color : '#FAFAF7',
                                        transform: hoveredIndex === i ? 'rotate(-10deg) scale(1.2)' : 'rotate(0deg) scale(1)'
                                    }}
                                >
                                    {service.num}
                                </span>
                                
                                <div>
                                    <h3 
                                        className="text-[12vw] md:text-[6vw] font-black leading-none uppercase tracking-tight transition-all duration-500" 
                                        style={{ 
                                            fontFamily: 'var(--font-body, sans-serif)', 
                                            color: (isMobile || hoveredIndex === i) ? service.color : 'transparent',
                                            WebkitTextStroke: (isMobile || hoveredIndex === i) ? 'none' : '1px #FAFAF7',
                                            transform: hoveredIndex === i ? 'translateX(20px)' : 'translateX(0px)'
                                        }}
                                    >
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                            
                            {/* Animated Arrow */}
                            <motion.div 
                                className="text-6xl md:text-8xl font-black transition-colors duration-500"
                                style={{ color: hoveredIndex === i ? service.color : '#FAFAF7' }}
                                animate={{ 
                                    rotate: hoveredIndex === i ? 45 : 0,
                                    scale: hoveredIndex === i ? 1.5 : 1
                                }}
                            >
                                ↗
                            </motion.div>
                        </div>

                        {/* Expandable Description */}
                        <AnimatePresence>
                            {hoveredIndex === i && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="container mx-auto px-4 pb-20 relative z-20"
                                >
                                    <div className="pl-[140px] max-w-4xl mt-4">
                                        <span className="text-5xl font-bold leading-tight text-[#FAFAF7]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                            {service.desc}
                                        </span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Glitch Overlay Effect on Hover */}
                        {hoveredIndex === i && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.15 }}
                                className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-overlay"
                                style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiLz48L3N2Zz4=')" }}
                            />
                        )}
                    </motion.a>
                ))}

                {/* Floating Image Cursor Follow */}
                <AnimatePresence>
                    {hoveredIndex !== null && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                            animate={{ opacity: 1, scale: 1, rotate: Math.random() * 12 - 6 }}
                            exit={{ opacity: 0, scale: 0.5, rotate: 20 }}
                            transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                            className="fixed pointer-events-none z-50 w-96 h-[450px] border-8 border-[#0B0D0A] shadow-[20px_20px_0px_rgba(11,13,10,0.8)] overflow-hidden hidden lg:block"
                            style={{ 
                                x: springX, 
                                y: springY,
                                translateX: '-50%',
                                translateY: '-50%'
                            }}
                        >
                            <img loading="lazy" decoding="async" 
                                src={services[hoveredIndex].img} 
                                alt="Service preview" 
                                className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
