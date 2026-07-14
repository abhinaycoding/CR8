import React from 'react';
import { motion } from 'framer-motion';

export default function CtaUnhinged() {
    return (
        <section className="relative w-full py-24 md:py-32 bg-[#0B0D0A] overflow-hidden">
            
            <div className="container mx-auto px-6 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 items-center">
                    
                    {/* Left Side: Info */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-center">
                        {/* Removed Global Headquarters Text */}
                        
                        <h2 className="text-4xl md:text-5xl font-light text-white leading-tight mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                            Visit our <br/><span className="font-medium">creative studio.</span>
                        </h2>
                        
                        <div className="flex flex-col gap-10 mb-12">
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                                className="flex flex-col"
                            >
                                <p className="text-white text-xl font-medium mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>New York</p>
                                <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    123 Street Culture Blvd<br/>
                                    New York, NY 10012<br/>
                                    United States
                                </p>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                                className="flex flex-col"
                            >
                                <p className="text-white text-xl font-medium mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Get in touch</p>
                                <a href="mailto:hello@cr8studio.com" className="text-gray-400 text-sm hover:text-white transition-colors mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    hello@cr8studio.com
                                </a>
                                <a href="tel:+12125550198" className="text-gray-400 text-sm hover:text-white transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    +1 (212) 555-0198
                                </a>
                            </motion.div>
                        </div>

                        <motion.a 
                            href="https://maps.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group flex items-center gap-4 self-start text-[#D7FF3E] font-medium text-sm tracking-widest uppercase transition-all"
                            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                            <span className="border-b border-[#D7FF3E]/30 pb-1 group-hover:border-[#D7FF3E] transition-colors">Get Directions</span>
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </motion.a>
                    </div>

                    {/* Right Side: Map Embed */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
                        className="w-full lg:w-2/3 h-[400px] md:h-[600px] relative overflow-hidden bg-[#111]"
                    >
                        {/* Dark Mode Map via CSS Filters (Invert + Grayscale) */}
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617359556778!2d-73.99846332344795!3d40.74844443538435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ba8800647b%3A0xc34eb8da9142f9b8!2sChelsea%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                            width="100%" 
                            height="100%" 
                            style={{ 
                                border: 0, 
                                filter: 'invert(100%) hue-rotate(180deg) brightness(95%) contrast(100%) grayscale(80%)' 
                            }} 
                            allowFullScreen={false} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="relative z-10 w-full h-full"
                            title="CR8 Studios Location"
                        ></iframe>
                        
                        {/* Subtle inner overlay shadow to blend map edges */}
                        <div className="absolute inset-0 z-20 pointer-events-none ring-1 ring-inset ring-white/10"></div>
                    </motion.div>

                </div>
            </div>
            
        </section>
    );
}
