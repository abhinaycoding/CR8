import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import MosaicPortrait from './mosaic-portrait';

export default function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[100svh] bg-[#0B0D0A] overflow-hidden flex flex-col justify-center"
      style={{ paddingTop: '80px' }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(250,250,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(250,250,247,0.06) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Horizontal rule at top */}
      <div className="absolute top-[80px] left-0 w-full h-px bg-[#222222] z-10" />

      <div className="container mx-auto px-4 lg:px-12 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-stretch gap-0 min-h-[calc(100svh-80px)]">

          {/* ── LEFT: Mosaic Portrait ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-[45%] flex items-center justify-center lg:justify-start py-12 lg:py-20 border-b lg:border-b-0 lg:border-r border-[#222222] lg:pr-12"
          >
            <div className="relative group">
              {/* Corner labels */}
              <span className="absolute -top-5 left-0 text-[10px] font-mono text-[#444444] tracking-widest z-10">
                FILE: FOUNDER_PORTRAIT.WEBP
              </span>
              <span className="absolute -bottom-5 right-0 text-[10px] font-mono text-[#444444] tracking-widest z-10">
                MODE: MOSAIC / WAVE / 16PX
              </span>

              {/* The actual mosaic canvas */}
              <MosaicPortrait
                src="/portrait.jpg"
                width={400}
                height={520}
                cellSize={16}
                animStyle="wave"
                animSpeed={100}
                animIntensity={60}
                brightness={12}
                contrast={115}
                saturation={100}
                vignette={true}
                vignetteIntensity={38}
                bloom={true}
                bloomIntensity={25}
                className="block w-full max-w-[400px] h-auto"
              />

              {/* Accent border overlay */}
              <div className="absolute inset-0 border border-[#D7FF3E]/20 pointer-events-none" />
            </div>
          </motion.div>

          {/* ── RIGHT: Editorial Copy ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="w-full lg:w-[55%] flex flex-col justify-center py-12 lg:py-20 lg:pl-12 xl:pl-20"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-[2px] bg-[#D7FF3E]" />
              <span className="text-[11px] font-black tracking-[0.3em] text-[#D7FF3E] uppercase">
                About CR8
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-[14vw] sm:text-[10vw] lg:text-[7vw] xl:text-[6rem] font-black uppercase leading-[0.82] tracking-tighter text-[#FAFAF7] mb-10"
              style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
            >
              WE ARE<br />
              <span className="text-[#D7FF3E]">CR8.</span>
            </h1>

            {/* Manifesto */}
            <p
              className="text-xl lg:text-2xl text-[#888888] font-medium leading-relaxed max-w-lg mb-12"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Born from the streets.{' '}
              <span className="text-[#FAFAF7] font-bold">Built for the bold.</span> We don't
              follow trends — we engineer them. No templates. No safe choices. Only work
              that hits.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 border-t border-[#222222] pt-8 mb-12">
              {[
                { num: '6+', label: 'Years Disrupting' },
                { num: '120+', label: 'Projects Shipped' },
                { num: '3', label: 'Continents Reached' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p
                    className="text-3xl lg:text-4xl font-black text-[#FAFAF7] leading-none mb-1"
                    style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                  >
                    {num}
                  </p>
                  <p
                    className="text-xs font-bold uppercase tracking-widest text-[#555555]"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>

            {/* Two pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-l-2 border-[#333333] pl-5">
                <h3
                  className="text-[#FAFAF7] font-bold text-base mb-2 uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Our Ethos
                </h3>
                <p
                  className="text-[#666666] text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  A collective of visionaries making noise that actually sells. No fluff.
                  Pure creative strategy engineered for maximum impact.
                </p>
              </div>
              <div className="border-l-2 border-[#333333] pl-5">
                <h3
                  className="text-[#FAFAF7] font-bold text-base mb-2 uppercase tracking-wider"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Our Promise
                </h3>
                <p
                  className="text-[#666666] text-sm leading-relaxed"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  If a design doesn't evoke a visceral reaction, it's not finished. We
                  deliver premium execution with relentless precision.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
