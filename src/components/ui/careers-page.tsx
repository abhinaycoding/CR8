import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CareersPage() {
    const jobs = [
        {
            title: "CINEMATOGRAPHY INTERN",
            type: "INTERNSHIP",
            location: "NAGPUR",
            desc: "You don't just hold a camera; you understand lighting, framing, and pure visual chaos. Come learn how to shoot narrative-driven content that breaks algorithms. Bring a reel that proves you have an eye."
        }
    ];

    const [activeJob, setActiveJob] = useState<number | null>(null);

    return (
        <div className="w-full bg-[#0B0D0A] text-[#FAFAF7] min-h-screen pb-24 flex flex-col relative overflow-hidden" style={{ paddingTop: '120px' }}>
            {/* Noise Background */}
            <div className="absolute inset-[-50%] w-[200%] h-[200%] opacity-5 pointer-events-none z-0 mix-blend-screen" 
                 style={{ backgroundImage: 'url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiLz48L3N2Zz4=")' }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col gap-8 mb-12 relative w-full items-start border-b-2 border-[#333333] pb-12">
                    <motion.div
                        className="w-full flex flex-col"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h1 
                            className="text-6xl md:text-8xl lg:text-9xl leading-[0.9] font-black uppercase tracking-[-0.02em] text-[#FAFAF7]" 
                            style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                        >
                            JOIN THE <span className="text-[#D7FF3E]">CHAOS.</span>
                        </h1>
                    </motion.div>
                    
                    <motion.div
                        className="w-full max-w-3xl flex flex-col"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="border-l-4 border-[#0044FF] pl-6 md:pl-8 relative">
                            <p className="text-xl md:text-2xl font-medium leading-relaxed text-[#FAFAF7]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                No corporate speak. No "ping pong tables" as perks. We just make <span className="text-[#D7FF3E] font-bold">insane work</span> with people who actually care. If you want to make noise, you're in the right place.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Open Positions List */}
                <div className="flex flex-col border-t-8 border-[#D7FF3E] pt-12">
                    {jobs.map((job, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="border-b-8 border-[#333333] group relative overflow-hidden"
                        >
                            <button 
                                onClick={() => setActiveJob(activeJob === idx ? null : idx)}
                                className="w-full py-8 md:py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 cursor-pointer text-left hover:px-8 transition-all duration-500 relative z-10"
                            >
                                <div className="flex flex-col gap-2 relative z-10">
                                    <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#FAFAF7] group-hover:text-[#0B0D0A] transition-colors duration-300" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                                        {job.title}
                                    </h3>
                                    <div className="flex gap-4 font-bold text-[#888888] group-hover:text-[#0B0D0A] transition-colors duration-300" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                        <span>{job.type}</span>
                                        <span>&mdash;</span>
                                        <span>{job.location}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="opacity-0 translate-x-[-20px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-4xl font-black text-[#0B0D0A] hidden md:block">
                                        APPLY ↘
                                    </div>
                                    <div className={`text-4xl font-black text-[#D7FF3E] group-hover:text-[#0B0D0A] transition-all duration-500 ${activeJob === idx ? 'rotate-45 scale-125' : ''}`}>
                                        +
                                    </div>
                                </div>
                            </button>

                            {/* Neon hover background fill */}
                            <div className="absolute inset-0 bg-[#D7FF3E] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></div>

                            <AnimatePresence>
                                {activeJob === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-[#D7FF3E] relative z-10"
                                    >
                                        <div className="pb-12 md:pb-16 max-w-3xl pl-0 md:pl-8 px-4 md:px-0">
                                            <p className="text-xl md:text-2xl font-medium leading-relaxed text-[#0B0D0A] mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                                {job.desc}
                                            </p>
                                            <a href="mailto:jobs@cr8studios.com" className="inline-block bg-[#0044FF] text-[#FAFAF7] border-4 border-[#FAFAF7] px-8 py-4 font-black text-xl uppercase tracking-wider shadow-[6px_6px_0px_#0B0D0A] hover:bg-[#FAFAF7] hover:text-[#0044FF] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_#0B0D0A] transition-all" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                                                SEND PORTFOLIO ↘
                                            </a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}
