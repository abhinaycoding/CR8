import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: '01',
    client: 'VOID STREETWEAR',
    title: 'The Anti-Launch',
    category: 'BRANDING',
    img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800&auto=format&fit=crop',
    year: '2024',
  },
  {
    id: '02',
    client: 'BASS DROP FEST',
    title: 'Underground Noise',
    category: 'EVENT',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
    year: '2024',
  },
  {
    id: '03',
    client: 'NEURAL.AI',
    title: 'Not Another Tech Co',
    category: 'WEB',
    img: 'https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=800&auto=format&fit=crop',
    year: '2023',
  },
  {
    id: '04',
    client: 'KULTÜR RECORDS',
    title: 'Sound System',
    category: 'CAMPAIGN',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop',
    year: '2023',
  },
  {
    id: '05',
    client: 'FORMA STUDIO',
    title: 'Less is More',
    category: 'BRANDING',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop',
    year: '2023',
  },
  {
    id: '06',
    client: 'SURGE ENERGY',
    title: 'Fuel the Riot',
    category: 'PRODUCTION',
    img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop',
    year: '2024',
  },
  {
    id: '07',
    client: 'BLOC MAGAZINE',
    title: 'Print is Not Dead',
    category: 'CAMPAIGN',
    img: 'https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?q=80&w=800&auto=format&fit=crop',
    year: '2022',
  },
  {
    id: '08',
    client: 'SHIFT MOTORS',
    title: 'Drive Different',
    category: 'PRODUCTION',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
    year: '2022',
  },
  {
    id: '09',
    client: 'FLORA BEAUTY',
    title: 'Raw Skin',
    category: 'BRANDING',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800&auto=format&fit=crop',
    year: '2024',
  },
];

export default function WorkPage() {

  return (
    <div className="w-full bg-[#0B0D0A] text-[#FAFAF7] min-h-screen">

      {/* ── PAGE HEADER ── */}
      <section className="w-full pb-10 px-6 lg:px-16 border-b border-[#1E1E1E]" style={{ paddingTop: '120px' }}>
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-none tracking-tight text-[#FAFAF7]"
              style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
            >
              Our Work
            </h1>
          </div>

        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className="w-full px-6 lg:px-16 py-12">
        <div className="max-w-screen-xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {projects.map((project, idx) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  className="group relative bg-[#111111] overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.img}
                      alt={`${project.client} — ${project.title}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#0B0D0A]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                      <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-xs font-black uppercase tracking-widest text-[#D7FF3E] block mb-1">
                          {project.category}
                        </span>
                        <span className="text-base font-black uppercase text-[#FAFAF7]" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>
                          View Project ↗
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Info below image — always visible */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <p className="text-xs font-bold tracking-widest text-[#555555] uppercase">{project.client}</p>
                      <span className="text-xs font-mono text-[#444444] flex-shrink-0">{project.year}</span>
                    </div>
                    <h2
                      className="text-lg font-black uppercase leading-tight text-[#FAFAF7]"
                      style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                    >
                      {project.title}
                    </h2>
                    <span className="inline-block mt-2 text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-[#1E1E1E] text-[#666666]">
                      {project.category}
                    </span>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {projects.length === 0 && (
            <div className="text-center py-32">
              <p className="text-[#333333] font-black text-2xl uppercase tracking-widest">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full py-24 px-6 lg:px-16 border-t border-[#1E1E1E]">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p className="text-xs font-black tracking-[0.25em] text-[#D7FF3E] uppercase mb-5">
              Ready to build something?
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight text-[#FAFAF7]"
              style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
            >
              Let's make your next<br />project impossible to ignore.
            </h2>
          </div>
          <div className="flex-shrink-0">
            <a
              href="/contact.html"
              className="inline-block bg-[#D7FF3E] text-[#0B0D0A] font-black text-base py-4 px-10 uppercase tracking-widest hover:bg-[#FAFAF7] transition-colors duration-300 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
            >
              Start a Project ↘
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
