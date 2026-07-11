import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoaderCss = `
  .custom-loader {
    width: 84px;
    aspect-ratio: 1;
    background:
      linear-gradient(#ff4500 0 0) left/50% 100% no-repeat,
      conic-gradient(
        from -90deg at 32px 9.47px,
        #fff8dc 135deg,
        #8b0000 0 270deg,
        #ffa500 0
      );
    background-blend-mode: multiply;
    -webkit-mask: linear-gradient(
        to bottom right,
        #0000 8px,
        #000 0 52px,
        #0000 0
      ),
      conic-gradient(from -90deg at right 6px bottom 6px, #000 90deg, #0000 0);
    mask: linear-gradient(to bottom right, #0000 8px, #000 0 52px, #0000 0),
      conic-gradient(from -90deg at right 6px bottom 6px, #000 90deg, #0000 0);
    background-size: 50% 50%;
    -webkit-mask-size: 50% 50%;
    mask-size: 50% 50%;
    -webkit-mask-composite: source-in;
    mask-composite: intersect;
    animation: l9 1.8s infinite cubic-bezier(0.5, 0.2, 0.5, 1);
    box-shadow: 0 0 15px rgba(255, 69, 0, 0.6);
    transform: perspective(1000px) rotateY(15deg);
  }

  @keyframes l9 {
    0% {
      background-position:
        0% 0%,
        0 0;
      transform: perspective(1000px) rotateY(15deg) scale(1);
      box-shadow: 0 0 15px rgba(255, 69, 0, 0.6);
    }
    25% {
      background-position:
        100% 0%,
        0 0;
    }
    50% {
      background-position:
        100% 100%,
        0 0;
      transform: perspective(1000px) rotateY(15deg) scale(1.08);
      box-shadow: 0 0 25px rgba(255, 69, 0, 0.8);
    }
    75% {
      background-position:
        0% 100%,
        0 0;
    }
    100% {
      background-position:
        0% 0%,
        0 0;
      transform: perspective(1000px) rotateY(15deg) scale(1);
      box-shadow: 0 0 15px rgba(255, 69, 0, 0.6);
    }
  }
`;

export default function InitialLoader() {
    const [isLoading, setIsLoading] = useState(true);
    const [hasSeen, setHasSeen] = useState(true); // Default true so it doesn't flash if already seen

    useEffect(() => {
        const seen = sessionStorage.getItem('cr8_initial_loader');
        
        if (!seen) {
            setHasSeen(false);
            // Simulate 4 seconds of loading time for the animation
            const timer = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem('cr8_initial_loader', 'true');
            }, 4000);
            return () => clearTimeout(timer);
        } else {
            setIsLoading(false);
        }
    }, []);

    // If they have seen it and it's no longer loading, render nothing at all
    if (hasSeen && !isLoading) return null;

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div 
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[999999] bg-[#0B0D0A] flex flex-col items-center justify-center"
                >
                    <style>{LoaderCss}</style>
                    <div className="custom-loader mb-12"></div>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-[#FAFAF7] tracking-widest text-4xl md:text-5xl font-black uppercase"
                        style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                    >
                        CR8
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
