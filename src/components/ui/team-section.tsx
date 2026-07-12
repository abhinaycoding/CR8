import React from 'react';
import { motion } from 'framer-motion';

export default function TeamSection() {
    const team = [
        {
            name: "SHARAN.",
            role: "CREATIVE DIRECTOR",
            desc: "With a background in high-end commercial directing, Sharan specializes in crafting visually stunning video campaigns. His approach centers on dynamic cinematography and raw storytelling, ensuring every frame we shoot not only looks cinematic but perfectly captures the brand's core identity.",
            expertise: ["Commercial Directing", "Art Direction", "Cinematography", "Storyboarding"],
            img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=800&auto=format&fit=crop",
            color: "#D7FF3E"
        },
        {
            name: "SHRUTISH.",
            role: "HEAD OF PRODUCTION",
            desc: "Shrutish is the driving force behind our largest marketing shoots. Having produced massive video campaigns for global lifestyle brands, he oversees everything from set logistics to final edit pacing, guaranteeing our video marketing cuts through the noise and drives real audience engagement.",
            expertise: ["Shoot Coordination", "Video Strategy", "Post-Production", "Campaign Rollout"],
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
            color: "#0044FF"
        }
    ];

    return (
        <section className="w-full bg-[#0B0D0A] pt-32 px-4 relative z-10 border-t border-[#333]" style={{ paddingBottom: '80px' }}>
            
            <div className="container mx-auto max-w-7xl relative z-10">
                
                {/* Section Header */}
                <div className="mb-20 flex flex-col md:flex-row justify-between items-end border-b border-[#333] pb-8">
                    <h2 className="text-5xl md:text-7xl font-black text-[#FAFAF7] uppercase tracking-tighter leading-none" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                        Leadership
                    </h2>
                    <p className="text-[#888888] font-mono tracking-widest text-sm uppercase mt-4 md:mt-0">
                        The Architects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    {team.map((member, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: idx * 0.2, ease: "easeOut" }}
                            className="flex flex-col group cursor-pointer"
                        >
                            {/* Premium Image Container */}
                            <div className="relative aspect-[4/5] overflow-hidden bg-[#111] mb-8">
                                <img 
                                    src={member.img} 
                                    alt={member.name}
                                    className="w-full h-full object-cover filter grayscale contrast-110 transition-transform duration-[2s] ease-out group-hover:scale-105"
                                />
                                {/* Subtle overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0A] via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Minimalist Text Content */}
                            <div className="flex flex-col items-start">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-8 h-[2px]" style={{ backgroundColor: member.color }}></div>
                                    <div className="font-mono text-xs text-[#FAFAF7] uppercase tracking-widest">
                                        {member.role}
                                    </div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-bold text-[#FAFAF7] uppercase tracking-tighter mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    {member.name}
                                </h3>
                                <p className="text-lg text-[#888888] font-light leading-relaxed max-w-md mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                                    {member.desc}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 max-w-md">
                                    {member.expertise.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-mono tracking-widest uppercase border border-[#333] text-[#666]">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
