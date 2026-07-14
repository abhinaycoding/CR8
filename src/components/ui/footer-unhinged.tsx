import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FooterUnhinged() {
    const [showCookies, setShowCookies] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cr8_cookie_consent');
        if (!consent) {
            // Slight delay before popping up so it feels deliberate
            const timer = setTimeout(() => setShowCookies(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cr8_cookie_consent', 'accepted');
        setShowCookies(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cr8_cookie_consent', 'declined');
        setShowCookies(false);
    };

    return (
        <footer id="contact" className="relative w-full bg-[#0B0D0A] text-[#FAFAF7] pb-8 overflow-hidden border-t border-[#333333]" style={{ paddingTop: '80px' }}>
            <div className="container mx-auto px-4 md:px-8 max-w-[1400px]">
                
                {/* Top Section - Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
                    
                    {/* Brand & Location */}
                    <div className="lg:col-span-4 flex flex-col">
                        <h3 className="text-3xl font-black mb-6 uppercase tracking-tighter" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                            CR8 STUDIO.
                        </h3>
                        <p className="text-[#888888] font-medium max-w-sm mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            We are a creative agency making noise that sells. Bold, youthful, unapologetic content for brands wanting street-culture relevance.
                        </p>
                        <div className="mt-auto">
                            <p className="text-sm font-bold uppercase tracking-widest text-[#D7FF3E] mb-2">HEADQUARTERS</p>
                            <p className="font-medium text-[#FAFAF7]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                123 Street Culture Blvd<br />
                                New York, NY 10012
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="lg:col-span-3 flex flex-col">
                        <p className="text-sm font-bold uppercase tracking-widest text-[#888888] mb-6">NAVIGATION</p>
                        <ul className="flex flex-col space-y-3 font-medium text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            <li><a href="work.html" className="hover:text-[#D7FF3E] transition-colors">Our Work</a></li>
                            <li><a href="services.html" className="hover:text-[#D7FF3E] transition-colors">Services</a></li>
                            <li><a href="careers.html" className="hover:text-[#D7FF3E] transition-colors">Careers</a></li>
                            <li><a href="contact.html" className="hover:text-[#D7FF3E] transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="lg:col-span-2 flex flex-col">
                        <p className="text-sm font-bold uppercase tracking-widest text-[#888888] mb-6">SOCIAL</p>
                        <ul className="flex flex-col space-y-3 font-medium text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            <li><a href="#" className="hover:text-[#0044FF] transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-[#0044FF] transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-[#0044FF] transition-colors">Twitter (X)</a></li>
                            <li><a href="#" className="hover:text-[#0044FF] transition-colors">Behance</a></li>
                        </ul>
                    </div>

                    {/* New Business */}
                    <div className="lg:col-span-3 flex flex-col">
                        <p className="text-sm font-bold uppercase tracking-widest text-[#888888] mb-6">NEW BUSINESS</p>
                        <a href="mailto:hello@cr8studio.example" className="text-xl font-bold hover:text-[#D7FF3E] transition-colors mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            hello@cr8studio.example
                        </a>
                        <p className="text-[#888888] font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            +1 (555) 123-4567
                        </p>
                    </div>
                    
                </div>

                {/* Massive Marquee Text */}
                <div className="w-full flex items-center justify-center border-t border-b border-[#333333] py-8 mb-8 overflow-hidden">
                    <h2 className="text-[8.5vw] md:text-[6vw] lg:text-[5.5vw] leading-none font-black text-[#FAFAF7] tracking-tighter whitespace-nowrap" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                        CR8 STUDIO &copy; 2026
                    </h2>
                </div>

                {/* Legal & Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm font-medium text-[#888888] gap-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    <p>&copy; 2026 CR8 Studio. All rights reserved.</p>
                    <div className="flex flex-wrap gap-4 md:space-x-6">
                        <a href="#" className="hover:text-[#FAFAF7] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#FAFAF7] transition-colors">Terms & Conditions</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); setShowCookies(true); }} className="hover:text-[#FAFAF7] transition-colors cursor-pointer">Cookie Settings</a>
                    </div>
                </div>

            </div>

            {/* Professional Cookie Banner */}
            <AnimatePresence>
                {showCookies && (
                    <motion.div 
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed bottom-6 left-6 md:bottom-8 md:left-8 z-[99999] w-[calc(100%-48px)] max-w-[420px] bg-[#0B0D0A]/95 backdrop-blur-xl border border-[#333333] p-6 shadow-2xl rounded-sm"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#888888]">
                                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                                <path d="M8.5 8.5v.01"></path>
                                <path d="M16 12.5v.01"></path>
                                <path d="M12 16v.01"></path>
                                <path d="M11 12.5v.01"></path>
                            </svg>
                            <h4 className="text-base font-bold text-[#FAFAF7] tracking-wide" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Cookie Preferences
                            </h4>
                        </div>
                        <p className="text-[#888888] font-medium text-sm mb-6 leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            We use cookies and similar technologies to enhance your browsing experience, analyze our traffic, and serve personalized content. By clicking "Accept All", you consent to our use of cookies.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button onClick={handleAccept} className="w-full sm:w-auto flex-1 bg-[#FAFAF7] text-[#0B0D0A] font-bold text-xs py-3 px-4 border border-[#FAFAF7] hover:bg-transparent hover:text-[#FAFAF7] transition-all tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Accept All
                            </button>
                            <button onClick={handleDecline} className="w-full sm:w-auto flex-1 bg-transparent text-[#FAFAF7] font-bold text-xs py-3 px-4 border border-[#333333] hover:border-[#FAFAF7] transition-all tracking-wider" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                Reject All
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
}
