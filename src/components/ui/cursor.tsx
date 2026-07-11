import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over clickable elements or specific classes
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('brutal-card') ||
                target.classList.contains('collage-item') ||
                target.classList.contains('sticker-decal') ||
                target.classList.contains('stroke-text')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#D7FF3E] pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? '#D7FF3E' : 'transparent',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.5,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[#D7FF3E] rounded-full pointer-events-none z-[10000]"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    opacity: isHovering ? 0 : 1
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.1,
                }}
            />
        </>
    );
}
