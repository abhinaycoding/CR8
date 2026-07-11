"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion, useTransform, useSpring, useScroll } from "framer-motion";

export type AnimationPhase = "scatter" | "line" | "circle";

interface FlipCardProps {
    src: string;
    index: number;
    total: number;
    phase: AnimationPhase;
    target: { x: number; y: number; rotation: number; scale: number; opacity: number };
}

const IMG_WIDTH = 70;
const IMG_HEIGHT = 100;

function FlipCard({ src, index, phase, target }: FlipCardProps) {
    return (
        <motion.div
            animate={{
                x: target.x,
                y: target.y,
                rotate: target.rotation,
                scale: target.scale,
                opacity: target.opacity,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            style={{
                position: "absolute",
                width: IMG_WIDTH,
                height: IMG_HEIGHT,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className="cursor-pointer group"
        >
            <motion.div
                className="relative h-full w-full"
                style={{ transformStyle: "preserve-3d" }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                whileHover={{ rotateY: 180, scale: 1.1, zIndex: 100 }}
            >
                {/* Front Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden shadow-[4px_4px_0px_#0B0D0A] bg-gray-200 border-2 border-[#0B0D0A]"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <img
                        src={src}
                        alt={`hero-${index}`}
                        className="h-full w-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-[#D7FF3E]/10 mix-blend-multiply transition-colors group-hover:bg-transparent" />
                </div>

                {/* Back Face */}
                <div
                    className="absolute inset-0 h-full w-full overflow-hidden shadow-[4px_4px_0px_#D7FF3E] bg-[#0B0D0A] flex flex-col items-center justify-center p-4 border-2 border-[#D7FF3E]"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                    <div className="text-center">
                        <p className="text-[10px] font-black text-[#D7FF3E] uppercase tracking-widest mb-1">View</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

const TOTAL_IMAGES = 20;
const IMAGES = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=300&q=80",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&q=80",
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&q=80",
    "https://images.unsplash.com/photo-1506765515384-028b60a970df?w=300&q=80",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=300&q=80",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=300&q=80",
    "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?w=300&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&q=80",
    "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=300&q=80",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=300&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=300&q=80",
    "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=300&q=80",
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=300&q=80",
    "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=300&q=80",
    "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=300&q=80",
    "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=300&q=80",
];

const lerp = (start: number, end: number, t: number) => start * (1 - t) + end * t;

export default function IntroAnimation() {
    const [introPhase, setIntroPhase] = useState<AnimationPhase>("scatter");
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                setContainerSize({ width: entry.contentRect.width, height: entry.contentRect.height });
            }
        });
        observer.observe(containerRef.current);
        setContainerSize({ width: containerRef.current.offsetWidth, height: containerRef.current.offsetHeight });
        return () => observer.disconnect();
    }, []);

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start start", "end end"]
    });

    const morphProgress = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    const smoothMorph = useSpring(morphProgress, { stiffness: 40, damping: 20 });
    
    const scrollRotate = useTransform(scrollYProgress, [0.2, 1], [0, 300]);
    const smoothScrollRotate = useSpring(scrollRotate, { stiffness: 40, damping: 20 });

    useEffect(() => {
        const timer1 = setTimeout(() => setIntroPhase("line"), 500);
        const timer2 = setTimeout(() => setIntroPhase("circle"), 2500);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    const scatterPositions = useMemo(() => {
        return IMAGES.map(() => ({
            x: (Math.random() - 0.5) * 1500,
            y: (Math.random() - 0.5) * 1000,
            rotation: (Math.random() - 0.5) * 180,
            scale: 0.6,
            opacity: 0,
        }));
    }, []);

    const [morphValue, setMorphValue] = useState(0);
    const [rotateValue, setRotateValue] = useState(0);

    useEffect(() => {
        const unsubscribeMorph = smoothMorph.on("change", setMorphValue);
        const unsubscribeRotate = smoothScrollRotate.on("change", setRotateValue);
        return () => {
            unsubscribeMorph();
            unsubscribeRotate();
        };
    }, [smoothMorph, smoothScrollRotate]);

    const contentOpacity = useTransform(smoothMorph, [0.8, 1], [0, 1]);
    const contentY = useTransform(smoothMorph, [0.8, 1], [20, 0]);

    return (
        <div ref={wrapperRef} className="relative w-full h-[300vh] bg-[#0B0D0A]">
            <div ref={containerRef} className="sticky top-0 w-full h-[100vh] min-h-[600px] bg-[#D7FF3E] border-t-8 border-b-8 border-[#0B0D0A] overflow-hidden">

                <div className="flex h-full w-full flex-col items-center justify-center perspective-1000 relative z-10">
                    <div className="absolute z-0 flex flex-col items-center justify-center text-center pointer-events-none top-1/2 -translate-y-1/2">
                        <motion.h1
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.8 }}
                            animate={introPhase === "circle" && morphValue < 0.5 ? { opacity: 1 - morphValue * 2, y: 0, filter: "blur(0px)", scale: 1 } : { opacity: 0, filter: "blur(10px)", scale: 0.8 }}
                            transition={{ duration: 1 }}
                            className="text-4xl md:text-6xl font-black tracking-tighter text-[#0B0D0A] uppercase"
                            style={{ fontFamily: 'Archivo Black, sans-serif', lineHeight: 0.9 }}
                        >
                            NOISE<br/>THAT<br/>SELLS
                        </motion.h1>
                    </div>

                    <motion.div
                        style={{ opacity: contentOpacity, y: contentY }}
                        className="absolute top-[15%] z-10 flex flex-col items-center justify-center text-center pointer-events-none px-4"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-[#0B0D0A] tracking-tighter uppercase" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                            THE ARCHIVE
                        </h2>
                        <p className="mt-2 text-lg md:text-xl font-bold text-[#0B0D0A] max-w-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            SCROLL THROUGH THE CHAOS
                        </p>
                    </motion.div>

                    <div className="relative flex items-center justify-center w-full h-full">
                        {IMAGES.slice(0, TOTAL_IMAGES).map((src, i) => {
                            let target = { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 };

                            if (introPhase === "scatter") {
                                target = scatterPositions[i];
                            } else if (introPhase === "line") {
                                const lineSpacing = 80;
                                const lineTotalWidth = TOTAL_IMAGES * lineSpacing;
                                const lineX = i * lineSpacing - lineTotalWidth / 2;
                                target = { x: lineX, y: 0, rotation: 0, scale: 1, opacity: 1 };
                            } else {
                                const isMobile = containerSize.width < 768;
                                const minDimension = Math.min(containerSize.width, containerSize.height);

                                const circleRadius = Math.min(minDimension * 0.3, 250);
                                const circleAngle = (i / TOTAL_IMAGES) * 360;
                                const circleRad = (circleAngle * Math.PI) / 180;
                                const circlePos = {
                                    x: Math.cos(circleRad) * circleRadius,
                                    y: Math.sin(circleRad) * circleRadius,
                                    rotation: circleAngle + 90,
                                };

                                const baseRadius = Math.min(containerSize.width, containerSize.height * 1.2);
                                const arcRadius = baseRadius * (isMobile ? 1.4 : 1.1);
                                const arcApexY = containerSize.height * (isMobile ? 0.35 : 0.25);
                                const arcCenterY = arcApexY + arcRadius;

                                const spreadAngle = isMobile ? 100 : 130;
                                const startAngle = -90 - (spreadAngle / 2);
                                const step = spreadAngle / (TOTAL_IMAGES - 1);

                                const scrollProgress = Math.min(Math.max(rotateValue / 360, 0), 1);
                                const maxRotation = spreadAngle * 0.6;
                                const boundedRotation = -scrollProgress * maxRotation;

                                const currentArcAngle = startAngle + (i * step) + boundedRotation;
                                const arcRad = (currentArcAngle * Math.PI) / 180;

                                const arcPos = {
                                    x: Math.cos(arcRad) * arcRadius,
                                    y: Math.sin(arcRad) * arcRadius + arcCenterY,
                                    rotation: currentArcAngle + 90,
                                    scale: isMobile ? 1.2 : 1.5,
                                };

                                target = {
                                    x: lerp(circlePos.x, arcPos.x, morphValue),
                                    y: lerp(circlePos.y, arcPos.y, morphValue),
                                    rotation: lerp(circlePos.rotation, arcPos.rotation, morphValue),
                                    scale: lerp(1, arcPos.scale, morphValue),
                                    opacity: 1,
                                };
                            }

                            return (
                                <FlipCard key={i} src={src} index={i} total={TOTAL_IMAGES} phase={introPhase} target={target} />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
