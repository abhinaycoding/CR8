import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GradientHeading } from './gradient-heading';

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ['0%', '100%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  const caseStudies = [
    {
      id: "01",
      client: "VOID STREETWEAR",
      title: "THE ANTI-LAUNCH",
      category: "BRAND OVERHAUL & PRODUCTION",
      desc: "We deleted their entire social history and launched a guerilla campaign using only disposable cameras and cryptic billboards. It sold out in 4 minutes.",
      img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1200&auto=format&fit=crop",
      color: "#D7FF3E"
    },
    {
      id: "02",
      client: "BASS DROP FEST",
      title: "UNDERGROUND NOISE",
      category: "EVENT PRODUCTION & ADS",
      desc: "An illegal-warehouse aesthetic brought to a massive stadium scale. We handled all video production, stage design, and a viral ticketing rollout.",
      img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop",
      color: "#0044FF"
    },
    {
      id: "03",
      client: "NEURAL.AI",
      title: "NOT ANOTHER TECH CO",
      category: "BRANDING & WEB",
      desc: "Tech branding is boring. We gave this AI startup a brutalist, dystopian edge that made Silicon Valley uncomfortable in the best way possible.",
      img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1200&auto=format&fit=crop",
      color: "#FAFAF7"
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#0B0D0A] text-[#FAFAF7] relative">
      
      {/* Cinematic Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center pointer-events-none z-0"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0B0D0A]/70 z-10 mix-blend-multiply"></div>
          <img 
            src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=2000&auto=format&fit=crop" 
            alt="Work Background" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 1.2, opacity: 0, filter: 'blur(20px)' }}
            animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display text-[20vw] leading-[0.75] uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#FAFAF7] to-[#333333]" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
              WORK
            </h1>
          </motion.div>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-8 text-2xl md:text-5xl max-w-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            We don't make case studies. <br/><span className="text-[#D7FF3E] italic">We make history.</span>
          </motion.p>
        </div>
      </motion.section>

      {/* Spacer to push content below fixed hero */}
      <div className="h-screen w-full"></div>

      {/* Case Studies */}
      <section className="relative z-20 w-full bg-[#0B0D0A] pb-32">
        {caseStudies.map((study, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} className="w-full min-h-screen flex items-center relative py-20 lg:py-0 overflow-hidden group">
              
              {/* Massive Background Index Number */}
              <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? '-left-20' : '-right-20'} z-0 opacity-5 pointer-events-none transition-transform duration-1000 group-hover:scale-110`}>
                <span className="text-[40vw] font-black leading-none" style={{ fontFamily: 'var(--font-display, Archivo Black)', WebkitTextStroke: `4px ${study.color}`, color: 'transparent' }}>
                  {study.id}
                </span>
              </div>

              <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                  
                  {/* Image with Sexy Parallax & Glow */}
                  <div className={`w-full lg:w-[55%] relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <motion.div 
                      initial={{ opacity: 0, y: 100, scale: 0.9 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                      className="relative overflow-hidden aspect-[4/5] lg:aspect-square group cursor-pointer"
                    >
                      <img 
                        src={study.img} 
                        alt={study.title} 
                        className="w-full h-full object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:scale-110"
                      />
                      
                      {/* Sexy Glass Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 flex items-end p-8">
                        <span className="text-3xl font-black uppercase tracking-widest text-[#FAFAF7] translate-y-8 group-hover:translate-y-0 transition-transform duration-500" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                          EXPLORE ↗
                        </span>
                      </div>

                      {/* Neon Border Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" style={{ boxShadow: `inset 0 0 0 2px ${study.color}, 0 0 60px ${study.color}40` }}></div>
                    </motion.div>
                  </div>

                  {/* Content with Sexy Staggered Reveal */}
                  <div className={`w-full lg:w-[45%] flex flex-col relative z-20 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                      <div className="inline-block px-4 py-2 mb-6 border border-[#333333] bg-[#FAFAF7]/5 backdrop-blur-md rounded-full">
                        <span className="text-sm md:text-md font-bold tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif', color: study.color }}>
                          {study.category}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-5xl font-black mb-2 uppercase text-[#888888]" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                        {study.client}
                      </h3>
                      
                      <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] uppercase tracking-tighter mb-8" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                        {study.title}
                      </h2>
                      
                      <p className="text-xl md:text-2xl text-[#FAFAF7] mb-12 leading-relaxed font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {study.desc}
                      </p>
                      
                      <button className="brutal-btn w-fit text-lg md:text-xl py-5 px-10 border-2 transition-all duration-300 hover:bg-transparent uppercase relative overflow-hidden group/btn" style={{ backgroundColor: study.color, borderColor: study.color, color: '#0B0D0A' }}>
                        <span className="relative z-10 font-bold group-hover/btn:text-[#FAFAF7] transition-colors duration-300">Read Case Study ↘</span>
                        <div className="absolute inset-0 bg-[#0B0D0A] scale-y-0 origin-bottom group-hover/btn:scale-y-100 transition-transform duration-500 ease-out z-0"></div>
                      </button>
                    </motion.div>
                  </div>

                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Sexy CTA Section */}
      <section className="w-full py-40 bg-gradient-to-b from-[#0B0D0A] to-[#111111] text-[#FAFAF7] text-center px-4 relative overflow-hidden flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <h2 className="text-[12vw] font-black leading-[0.8] uppercase tracking-tighter mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#D7FF3E] to-[#0044FF]" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
            YOUR TURN.
          </h2>
          <a href="/contact.html" className="brutal-btn text-2xl md:text-4xl py-6 px-16 border-4 border-[#FAFAF7] hover:bg-[#FAFAF7] hover:text-[#0B0D0A] transition-all duration-300 rounded-full">
            START A RIOT ↘
          </a>
        </motion.div>
        
        {/* Animated background noise for CTA */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAwIDIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZUZpbHRlciI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZUZpbHRlcikiLz48L3N2Zz4=')]"></div>
        </div>
      </section>
    </div>
  );
}
