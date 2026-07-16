import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function StopMotionScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const preloadedRef = useRef<HTMLImageElement[]>([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const images = [
        "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1533227260814-ce5a1891ce5c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1589254066007-898d52d910d3?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1540039155732-6761b33604f3?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512413914695-1f92e4ba9c32?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1200&auto=format&fit=crop"
    ];

    // Preload all images via JS Image objects (off-DOM, no render cost)
    useEffect(() => {
        let loadedCount = 0;
        const total = images.length;
        const imgs: HTMLImageElement[] = [];

        images.forEach((src, i) => {
            const img = new Image();
            img.onload = () => {
                loadedCount++;
                if (loadedCount === total) setLoaded(true);
            };
            img.onerror = () => { loadedCount++; if (loadedCount === total) setLoaded(true); };
            img.src = src;
            imgs[i] = img;
        });
        preloadedRef.current = imgs;
    }, []);

    const imageIndex = useTransform(scrollYProgress, [0, 1], [0, images.length - 1]);
    useMotionValueEvent(imageIndex, "change", (latest) => {
        setCurrentIndex(Math.round(latest));
    });

    const scale1 = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.2]);
    const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="relative h-[400vh] w-full bg-[#0B0D0A]">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center border-y-8 border-[#FAFAF7]">
                
                <div className="absolute inset-0 opacity-10 pointer-events-none z-20 mix-blend-overlay" 
                     style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiLz48L3N2Zz4=")' }}
                />

                <motion.div 
                    style={{ scale: scale1, opacity: opacity1 }}
                    className="absolute z-0 w-full text-center flex flex-col justify-center items-center pointer-events-none"
                >
                    <h2 className="text-[25vw] font-black uppercase leading-[0.8] text-[#FAFAF7] opacity-10" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                        UNFILTERED
                    </h2>
                    <h2 className="text-[25vw] font-black uppercase leading-[0.8] text-transparent" style={{ fontFamily: 'var(--font-display, Archivo Black)', WebkitTextStroke: '4px #D7FF3E', opacity: 0.3 }}>
                        VISION
                    </h2>
                </motion.div>

                <div className="relative z-10 w-[90vw] md:w-[60vw] h-[60vh] max-w-5xl border-[16px] border-[#0B0D0A] shadow-[24px_24px_0px_#D7FF3E] bg-[#FAFAF7] overflow-hidden">
                    {loaded ? (
                        <img loading="lazy" decoding="async"                             src={images[currentIndex]}
                            alt="Stop motion frame"
                            className="w-full h-full object-cover grayscale contrast-150 mix-blend-multiply"
                            style={{ willChange: 'contents' }}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-[#333333] font-mono text-sm tracking-widest">LOADING FRAMES...</span>
                        </div>
                    )}

                    <div className="absolute top-4 right-4 bg-[#0B0D0A] text-[#D7FF3E] px-3 py-1 font-bold text-xl border-2 border-[#D7FF3E] z-10" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        REC • {String(currentIndex + 1).padStart(2, '0')}/20
                    </div>
                </div>
            </div>
        </section>
    );
}

