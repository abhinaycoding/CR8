import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['ALL', 'BRANDING', 'PRODUCTION', 'WEB', 'EVENT', 'CAMPAIGN'];

const projects = [
  {
    id: '01',
    client: 'VOID STREETWEAR',
    title: 'The Anti-Launch',
    category: 'BRANDING',
    tags: ['Brand Overhaul', 'Production', 'Strategy'],
    desc: 'We deleted their entire social history and launched a guerilla campaign using only disposable cameras and cryptic billboards. It sold out in 4 minutes.',
    img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop',
    stats: [{ label: 'Sell-Out Time', value: '4 min' }, { label: 'Revenue', value: '+340%' }, { label: 'Press Hits', value: '80+' }],
    year: '2024',
    color: '#D7FF3E',
  },
  {
    id: '02',
    client: 'BASS DROP FEST',
    title: 'Underground Noise',
    category: 'EVENT',
    tags: ['Event Production', 'Ads', 'Video'],
    desc: 'An illegal-warehouse aesthetic brought to stadium scale. We handled video production, stage design, and a viral ticketing rollout.',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
    stats: [{ label: 'Tickets Sold', value: '22k' }, { label: 'Views', value: '4.1M' }, { label: 'Artists', value: '36' }],
    year: '2024',
    color: '#0044FF',
  },
  {
    id: '03',
    client: 'NEURAL.AI',
    title: 'Not Another Tech Co',
    category: 'WEB',
    tags: ['Branding', 'Web Design', 'Dev'],
    desc: 'Tech branding is boring. We gave this AI startup a brutalist, dystopian edge that made Silicon Valley uncomfortable — in the best way.',
    img: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800&auto=format&fit=crop',
    stats: [{ label: 'Traffic Lift', value: '+520%' }, { label: 'Media Coverage', value: '12 outlets' }, { label: 'VC Raised', value: '$8M' }],
    year: '2023',
    color: '#FAFAF7',
  },
  {
    id: '04',
    client: 'KULTÜR RECORDS',
    title: 'Sound System',
    category: 'CAMPAIGN',
    tags: ['Campaign', 'Social', 'Photography'],
    desc: 'A 3-month social blitz for a genre-defining record label that took an indie act from 2k to 200k streams per week.',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    stats: [{ label: 'Stream Growth', value: '100x' }, { label: 'New Followers', value: '+180k' }, { label: 'Duration', value: '12 wks' }],
    year: '2023',
    color: '#D7FF3E',
  },
  {
    id: '05',
    client: 'FORMA STUDIO',
    title: 'Less is More',
    category: 'BRANDING',
    tags: ['Identity', 'Print', 'Packaging'],
    desc: 'A luxury furniture brand that needed an identity as considered as its designs. We stripped everything back until only the essential remained.',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    stats: [{ label: 'Revenue Lift', value: '+210%' }, { label: 'New Partners', value: '14' }, { label: 'Awards', value: '3' }],
    year: '2023',
    color: '#0044FF',
  },
  {
    id: '06',
    client: 'SURGE ENERGY',
    title: 'Fuel the Riot',
    category: 'PRODUCTION',
    tags: ['Production', 'TVC', 'Influencer'],
    desc: 'A high-octane TVC and influencer campaign that repositioned a challenger energy drink from convenience store to culture store.',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    stats: [{ label: 'Campaign Views', value: '22M' }, { label: 'Market Share', value: '+8%' }, { label: 'Markets', value: '6' }],
    year: '2024',
    color: '#FAFAF7',
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="w-full bg-[#0B0D0A] text-[#FAFAF7] min-h-screen">

      {/* ── PAGE HEADER ── */}
      <section className="w-full pt-36 pb-16 px-6 lg:px-16 border-b border-[#1E1E1E]">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-xs font-black tracking-[0.25em] text-[#D7FF3E] uppercase mb-5">
            Selected Work — 2021 to 2024
          </p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none tracking-tight mb-8 text-[#FAFAF7]"
            style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
          >
            Our Work
          </h1>
          <p
            className="text-lg md:text-xl text-[#888888] max-w-xl leading-relaxed"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Projects built to disrupt, designed to last. Every entry here is a proof of concept — for the brand and for us.
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className="w-full px-6 lg:px-16 py-6 border-b border-[#1E1E1E] sticky top-0 bg-[#0B0D0A] z-20">
        <div className="max-w-screen-xl mx-auto flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
              className={`text-xs font-black uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
                activeFilter === cat
                  ? 'bg-[#D7FF3E] text-[#0B0D0A] border-[#D7FF3E]'
                  : 'bg-transparent text-[#666666] border-[#333333] hover:border-[#FAFAF7] hover:text-[#FAFAF7]'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-xs font-mono text-[#444444] self-center hidden md:block">
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* ── PROJECT LIST ── */}
      <section className="w-full px-6 lg:px-16 py-8 max-w-screen-xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, idx) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="border-b border-[#1E1E1E] last:border-b-0"
            >
              {/* Row — always visible */}
              <button
                className="w-full text-left py-8 group flex flex-col md:flex-row md:items-center gap-6 md:gap-10 cursor-pointer"
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                aria-expanded={expandedId === project.id}
                aria-controls={`project-detail-${project.id}`}
              >
                {/* Index */}
                <span className="text-xs font-mono text-[#444444] flex-shrink-0 w-8">{project.id}</span>

                {/* Thumbnail */}
                <div className="flex-shrink-0 w-full md:w-[120px] h-[80px] overflow-hidden">
                  <img
                    src={project.img}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Main info */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold tracking-widest text-[#555555] uppercase mb-1">{project.client}</p>
                  <h2
                    className="text-xl md:text-2xl font-black uppercase leading-tight text-[#FAFAF7] group-hover:text-[#D7FF3E] transition-colors"
                    style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                  >
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-[#555555]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category + Year */}
                <div className="flex-shrink-0 flex md:flex-col items-center md:items-end gap-4 md:gap-1">
                  <span
                    className="text-[10px] font-black uppercase tracking-wider px-3 py-1"
                    style={{ backgroundColor: project.color + '20', color: project.color }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-[#444444]">{project.year}</span>
                </div>

                {/* Expand toggle */}
                <div className="flex-shrink-0 w-8 h-8 border border-[#333333] flex items-center justify-center text-[#555555] group-hover:border-[#D7FF3E] group-hover:text-[#D7FF3E] transition-colors ml-auto md:ml-0">
                  <span className="text-sm font-black leading-none">{expandedId === project.id ? '−' : '+'}</span>
                </div>
              </button>

              {/* Expanded Detail Panel */}
              <AnimatePresence>
                {expandedId === project.id && (
                  <motion.div
                    id={`project-detail-${project.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[#1E1E1E] pt-8">

                      {/* Image */}
                      <div className="md:col-span-4">
                        <img
                          src={project.img}
                          alt={`${project.client} — ${project.title}`}
                          loading="lazy"
                          className="w-full aspect-[4/3] object-cover"
                        />
                      </div>

                      {/* Description + Stats */}
                      <div className="md:col-span-5">
                        <h3
                          className="text-sm font-black uppercase tracking-widest text-[#D7FF3E] mb-4"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          About This Project
                        </h3>
                        <p
                          className="text-[#AAAAAA] text-base leading-relaxed mb-8"
                          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                        >
                          {project.desc}
                        </p>

                        <div className="grid grid-cols-3 gap-4">
                          {project.stats.map(s => (
                            <div key={s.label} className="border-l-2 pl-3" style={{ borderColor: project.color }}>
                              <p className="text-xl font-black text-[#FAFAF7]">{s.value}</p>
                              <p className="text-[10px] uppercase tracking-widest text-[#555555] font-bold mt-0.5">{s.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="md:col-span-3 flex flex-col justify-between gap-6">
                        <div>
                          <h3 className="text-sm font-black uppercase tracking-widest text-[#555555] mb-3">Services</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                              <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border border-[#2A2A2A] text-[#888888]">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a
                          href="#"
                          className="inline-flex items-center justify-center gap-2 py-4 px-6 font-black uppercase tracking-widest text-sm text-[#0B0D0A] hover:opacity-90 transition-opacity"
                          style={{ backgroundColor: project.color }}
                          aria-label={`Read full case study for ${project.title}`}
                        >
                          Case Study ↗
                        </a>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-32">
            <p className="text-[#333333] font-black text-2xl uppercase tracking-widest">No projects in this category yet.</p>
          </div>
        )}
      </section>

      {/* ── CTA ── */}
      <section className="w-full py-28 px-6 border-t border-[#1E1E1E] text-center bg-[#0D0F0C]">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-black tracking-[0.25em] text-[#D7FF3E] uppercase mb-6">Ready to build something?</p>
          <h2
            className="text-4xl md:text-6xl font-black uppercase leading-tight tracking-tight text-[#FAFAF7] mb-10"
            style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
          >
            Let's make your next project impossible to ignore.
          </h2>
          <a
            href="/contact.html"
            className="inline-block bg-[#D7FF3E] text-[#0B0D0A] font-black text-base md:text-lg py-4 px-10 uppercase tracking-widest hover:bg-[#FAFAF7] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
          >
            Start a Project ↘
          </a>
        </div>
      </section>

    </div>
  );
}
