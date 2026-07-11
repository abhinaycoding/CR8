import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ServicesPage() {
  const [hoveredService, setHoveredService] = useState<{name: string, img: string, desc: string, color: string} | null>(null);
  
  // Read tab parameter from URL, default to 0
  const initialTab = typeof window !== 'undefined' 
    ? parseInt(new URLSearchParams(window.location.search).get('tab') || '0', 10) 
    : 0;
  
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(isNaN(initialTab) ? 0 : initialTab);

  const categories = [
    {
      title: "PRODUCTION & CREATIVE",
      color: "#D7FF3E",
      services: [
        { name: "Photo Shoot", desc: "High-end photography for brands that don't do boring.", img: "https://images.unsplash.com/photo-1554046920-90dcac4101cc?q=80&w=800&auto=format&fit=crop" },
        { name: "Video Shoot", desc: "Cinematic, raw, and unapologetic video production.", img: "https://images.unsplash.com/photo-1589254066007-898d52d910d3?q=80&w=800&auto=format&fit=crop" },
        { name: "Product Shoot", desc: "Making your physical products look dangerously good.", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop" },
        { name: "Editing", desc: "Post-production that sets the pace and the vibe.", img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop" },
        { name: "Thumbnail Design", desc: "Click-worthy, algorithm-breaking thumbnail art.", img: "https://images.unsplash.com/photo-1626785776985-0217a86f2b2b?q=80&w=800&auto=format&fit=crop" }
      ]
    },
    {
      title: "MARKETING & GROWTH",
      color: "#0044FF",
      services: [
        { name: "Brand Ads", desc: "Paid social that stops the scroll and drives revenue.", img: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop" },
        { name: "Social Media Mgmt", desc: "We run your accounts so you can run your business.", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" },
        { name: "Marketing", desc: "Full-stack growth strategies without the corporate jargon.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" },
        { name: "Sponsorship", desc: "Connecting your brand with the creators who matter.", img: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=800&auto=format&fit=crop" }
      ]
    },
    {
      title: "SPACES & EVENTS",
      color: "#FAFAF7",
      services: [
        { name: "Podcast Booking", desc: "Premium studio space engineered for top-tier audio/video.", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop" },
        { name: "Venue Rental", desc: "Industrial, aesthetic spaces for your next big thing.", img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop" },
        { name: "Catering", desc: "Food and drink curation for high-end events.", img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop" },
        { name: "Event Tickets", desc: "Exclusive access to CR8 curated underground events.", img: "https://images.unsplash.com/photo-1540039155732-6761b33604f3?q=80&w=800&auto=format&fit=crop" },
        { name: "Workshop", desc: "Learn the rules so you can break them. In-person training.", img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800&auto=format&fit=crop" }
      ]
    },
    {
      title: "COMMUNITY",
      color: "#D7FF3E",
      services: [
        { name: "Memberships", desc: "Join the inner circle. Perks, access, and pure chaos.", img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800&auto=format&fit=crop" }
      ]
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#0B0D0A] overflow-hidden text-[#FAFAF7] flex flex-col" style={{ paddingTop: '120px' }}>
      
      {/* Dynamic Background Reveal */}
      <AnimatePresence>
        {hoveredService && (
          <motion.div
            key={hoveredService.name}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 z-0 pointer-events-none"
          >
            <img src={hoveredService.img} alt={hoveredService.name} className="w-full h-full object-cover grayscale mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0A] via-transparent to-[#0B0D0A]"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10 w-full h-full flex flex-col flex-grow pb-8">
        
        {/* Header */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tight" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
              OUR NOISE.
            </h1>
            <p className="text-lg md:text-xl text-[#888888] mt-2 max-w-xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Select a category below to explore our services.
            </p>
          </div>
          
          {/* Dynamic Description Box (Shows when hovering) */}
          <div className="hidden lg:block w-1/3 text-right h-[80px]">
            <AnimatePresence mode="wait">
              {hoveredService && (
                <motion.div
                  key={hoveredService.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-black uppercase tracking-tight" style={{ color: hoveredService.color, fontFamily: 'var(--font-display, Archivo Black)' }}>
                    {hoveredService.name}
                  </h3>
                  <p className="text-md text-[#FAFAF7] mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {hoveredService.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Category Tabs (Buttons) */}
        <div className="flex flex-wrap gap-4 mb-8 border-b-2 border-[#333333] pb-6">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIdx(idx)}
              className={`px-6 py-3 text-sm md:text-lg font-bold uppercase transition-all duration-300 border-2 ${
                activeCategoryIdx === idx 
                  ? 'bg-transparent text-[#0B0D0A] shadow-[4px_4px_0px_#FAFAF7]' 
                  : 'bg-transparent text-[#888888] border-[#333333] hover:border-[#FAFAF7] hover:text-[#FAFAF7]'
              }`}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                borderColor: activeCategoryIdx === idx ? category.color : undefined,
                backgroundColor: activeCategoryIdx === idx ? category.color : 'transparent',
                boxShadow: activeCategoryIdx === idx ? `4px 4px 0px #FAFAF7` : 'none'
              }}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="flex-grow w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategoryIdx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-4"
            >
              {categories[activeCategoryIdx].services.map((service, idx) => (
                <div
                  key={idx}
                  className="group relative cursor-pointer py-4 px-6 border border-[#333333] bg-[#0B0D0A]/80 backdrop-blur-sm transition-all duration-300 hover:border-transparent"
                  onMouseEnter={() => setHoveredService({ ...service, color: categories[activeCategoryIdx].color })}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-2xl md:text-4xl font-black uppercase tracking-tight transition-all duration-300 group-hover:translate-x-4" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                      {service.name}
                    </span>
                    <span className="text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-translate-x-4" style={{ color: categories[activeCategoryIdx].color }}>
                      ↗
                    </span>
                  </div>
                  {/* Active Highlight Background */}
                  <div 
                    className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 z-0 opacity-10"
                    style={{ backgroundColor: categories[activeCategoryIdx].color }}
                  />
                  {/* Left Border Highlight */}
                  <div 
                    className="absolute inset-y-0 left-0 w-0 group-hover:w-2 transition-all duration-300 z-10"
                    style={{ backgroundColor: categories[activeCategoryIdx].color }}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}
