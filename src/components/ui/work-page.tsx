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
    img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1200&auto=format&fit=crop',
    color: '#D7FF3E',
    stats: [{ label: 'Sell-Out Time', value: '4 min' }, { label: 'Revenue', value: '+340%' }, { label: 'Press Hits', value: '80+' }],
    year: '2024',
    featured: true,
  },
  {
    id: '02',
    client: 'BASS DROP FEST',
    title: 'Underground Noise',
    category: 'EVENT',
    tags: ['Event Production', 'Ads', 'Video'],
    desc: 'An illegal-warehouse aesthetic brought to a massive stadium scale. We handled all video production, stage design, and a viral ticketing rollout.',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200&auto=format&fit=crop',
    color: '#0044FF',
    stats: [{ label: 'Tickets Sold', value: '22k' }, { label: 'Views', value: '4.1M' }, { label: 'Artists', value: '36' }],
    year: '2024',
    featured: true,
  },
  {
    id: '03',
    client: 'NEURAL.AI',
    title: 'Not Another Tech Co',
    category: 'WEB',
    tags: ['Branding', 'Web Design', 'Dev'],
    desc: 'Tech branding is boring. We gave this AI startup a brutalist, dystopian edge that made Silicon Valley uncomfortable — in the best way.',
    img: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1200&auto=format&fit=crop',
    color: '#FAFAF7',
    stats: [{ label: 'Traffic Lift', value: '+520%' }, { label: 'Launch Media', value: '12 outlets' }, { label: 'VC Raises', value: '$8M' }],
    year: '2023',
    featured: false,
  },
  {
    id: '04',
    client: 'KULTÜR RECORDS',
    title: 'Sound System',
    category: 'CAMPAIGN',
    tags: ['Campaign', 'Social', 'Photography'],
    desc: 'A 3-month social blitz for a genre-defining record label that took an indie act from 2k to 200k streams per week.',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    color: '#D7FF3E',
    stats: [{ label: 'Stream Growth', value: '100x' }, { label: 'Followers', value: '+180k' }, { label: 'Weeks', value: '12' }],
    year: '2023',
    featured: false,
  },
  {
    id: '05',
    client: 'FORMA STUDIO',
    title: 'Less is More',
    category: 'BRANDING',
    tags: ['Identity', 'Print', 'Packaging'],
    desc: 'A luxury furniture brand that needed an identity as considered as its designs. We stripped everything back until only the essential remained.',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    color: '#0044FF',
    stats: [{ label: 'SKU Revenue', value: '+210%' }, { label: 'Retail Partners', value: '14 new' }, { label: 'Awards', value: '3' }],
    year: '2023',
    featured: false,
  },
  {
    id: '06',
    client: 'SURGE ENERGY',
    title: 'Fuel the Riot',
    category: 'PRODUCTION',
    tags: ['Production', 'TVC', 'Influencer'],
    desc: 'A high-octane TVC and influencer campaign that repositioned a challenger energy drink from convenience store to culture store.',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
    color: '#FAFAF7',
    stats: [{ label: 'Campaign Views', value: '22M' }, { label: 'Market Share', value: '+8%' }, { label: 'Markets', value: '6' }],
    year: '2024',
    featured: false,
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const featured = projects.filter(p => p.featured);

  return (
    <div className="w-full bg-[#0B0D0A] text-[#FAFAF7] min-h-screen">

      {/* ── HERO ── */}
      <section className="relative w-full min-h-[60vh] flex flex-col justify-end pb-16 pt-40 px-4 lg:px-12 overflow-hidden border-b border-[#1E1E1E]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?q=80&w=2000&auto=format&fit=crop"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0A] via-[#0B0D0A]/80 to-transparent" />
        </div>

        <div className="container mx-auto max-w-screen-xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-xs font-black tracking-[0.3em] text-[#D7FF3E] uppercase mb-6">
              Selected Work — 2021–2024
            </p>
            <h1
              className="text-[15vw] md:text-[10vw] lg:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter mb-6"
              style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
            >
              OUR<br /><span className="text-transparent" style={{ WebkitTextStroke: '2px #FAFAF7' }}>WORK.</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-[#888888] max-w-2xl font-medium leading-relaxed"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Projects built to disrupt, designed to last.
              Every entry here is a proof of concept — for the brand and for us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section aria-labelledby="featured-heading" className="w-full px-4 lg:px-12 py-24 border-b border-[#1E1E1E]">
        <div className="container mx-auto max-w-screen-xl">
          <div className="flex items-center gap-4 mb-14">
            <span className="w-6 h-[2px] bg-[#D7FF3E]" />
            <h2
              id="featured-heading"
              className="text-xs font-black tracking-[0.3em] text-[#FAFAF7] uppercase"
            >
              Featured Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featured.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative overflow-hidden border border-[#1E1E1E] hover:border-[#333333] transition-colors duration-500 cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.img}
                    alt={`${project.client} — ${project.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0A] via-transparent to-transparent opacity-70" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1"
                      style={{ backgroundColor: project.color, color: '#0B0D0A' }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-mono text-[#888888] bg-[#0B0D0A]/80 px-2 py-1">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                  <p className="text-xs font-bold tracking-widest text-[#666666] uppercase mb-1">{project.client}</p>
                  <h3
                    className="text-2xl md:text-3xl font-black uppercase mb-4 leading-tight"
                    style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[#888888] text-sm leading-relaxed mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {project.desc}
                  </p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-4 border-t border-[#1E1E1E] pt-6 mb-6">
                    {project.stats.map(s => (
                      <div key={s.label}>
                        <p className="text-xl md:text-2xl font-black" style={{ color: project.color }}>{s.value}</p>
                        <p className="text-[10px] uppercase tracking-widest text-[#555555] font-bold">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 border border-[#333333] text-[#666666]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#"
                    className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#FAFAF7] hover:text-[#D7FF3E] transition-colors group/link"
                    aria-label={`Read case study for ${project.title}`}
                  >
                    Read Case Study
                    <span className="w-6 h-[1px] bg-current group-hover/link:w-10 transition-all duration-300" />
                    ↗
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL PROJECTS GRID ── */}
      <section aria-labelledby="all-work-heading" className="w-full px-4 lg:px-12 py-24">
        <div className="container mx-auto max-w-screen-xl">

          {/* Section title + filter bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
            <div className="flex items-center gap-4">
              <span className="w-6 h-[2px] bg-[#D7FF3E]" />
              <h2
                id="all-work-heading"
                className="text-xs font-black tracking-[0.3em] text-[#FAFAF7] uppercase"
              >
                All Projects ({filtered.length})
              </h2>
            </div>

            {/* Filter tabs */}
            <nav aria-label="Filter projects by category" className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  aria-pressed={activeFilter === cat}
                  className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 border transition-all duration-200 ${
                    activeFilter === cat
                      ? 'bg-[#D7FF3E] text-[#0B0D0A] border-[#D7FF3E]'
                      : 'bg-transparent text-[#666666] border-[#333333] hover:border-[#666666] hover:text-[#FAFAF7]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[#1A1A1A]"
          >
            <AnimatePresence>
              {filtered.map((project, idx) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-[#0B0D0A] group relative overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={project.img}
                      alt={`${project.client} — ${project.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-[#0B0D0A]/40 group-hover:bg-[#0B0D0A]/10 transition-colors duration-500" />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span
                        className="text-xs font-black uppercase tracking-widest px-4 py-2"
                        style={{ backgroundColor: project.color, color: '#0B0D0A' }}
                      >
                        View Project ↗
                      </span>
                    </div>
                  </div>

                  {/* Info bar */}
                  <div className="p-5 border-t border-[#1A1A1A] flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-[#555555] uppercase mb-1">{project.client}</p>
                      <h3
                        className="text-base font-black uppercase leading-tight"
                        style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                      >
                        {project.title}
                      </h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span
                        className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5"
                        style={{ backgroundColor: project.color + '22', color: project.color }}
                      >
                        {project.category}
                      </span>
                      <p className="text-[10px] font-mono text-[#444444] mt-1">{project.year}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-32">
              <p className="text-[#333333] font-black text-3xl uppercase tracking-widest">No projects yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full py-32 px-4 border-t border-[#1E1E1E] text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-3xl"
        >
          <p className="text-xs font-black tracking-[0.3em] text-[#D7FF3E] uppercase mb-6">Ready to build something?</p>
          <h2
            className="text-[12vw] md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter mb-12"
            style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
          >
            YOUR<br />TURN.
          </h2>
          <a
            href="/contact.html"
            className="inline-block bg-[#D7FF3E] text-[#0B0D0A] font-black text-lg md:text-xl py-5 px-12 uppercase tracking-widest hover:bg-[#FAFAF7] transition-colors duration-300"
            style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
          >
            Start a Project ↘
          </a>
        </motion.div>
      </section>

    </div>
  );
}
