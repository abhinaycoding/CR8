import React, { useState } from 'react';
// Triggering Vite HMR
import { motion } from 'framer-motion';
import { GradientHeading } from './gradient-heading';

export default function ContactUnhinged() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="relative w-full h-screen bg-[#FAFAF7] overflow-hidden text-[#0B0D0A] flex items-center pt-24 lg:pt-32">
      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Header & Info (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <GradientHeading
              variant="default"
              weight="black"
              className="font-display text-6xl md:text-8xl lg:text-[7rem] leading-[0.85] uppercase tracking-[-0.02em] mb-6"
              style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
            >
              LET'S TALK.
            </GradientHeading>
            <p className="text-xl text-[#666666] font-medium mb-12 max-w-md" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              We collaborate with visionary brands. Drop us a line and tell us about your next big project.
            </p>

            <div className="flex flex-col space-y-10 mt-12 lg:mt-0 border-l border-[#DDDDDD] pl-8">
              <div>
                <h4 className="text-xs font-bold tracking-widest text-[#888888] mb-3 uppercase">Headquarters</h4>
                <p className="text-xl font-medium leading-relaxed text-[#0B0D0A]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  123 Street Culture Blvd<br />
                  New York, NY 10012
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-[#888888] mb-3 uppercase">Direct Line</h4>
                <a href="mailto:hello@cr8studio.example" className="text-xl font-medium hover:text-[#0044FF] transition-colors text-[#0B0D0A]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  HELLO@CR8STUDIO.EXAMPLE
                </a>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest text-[#888888] mb-3 uppercase">WhatsApp</h4>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-xl font-medium hover:text-[#25D366] transition-colors text-[#0B0D0A]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>

          {/* The Form (Right) */}
          <div className="lg:col-span-7 w-full max-w-2xl mx-auto">
            {!isSubmitted ? (
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 md:gap-10 bg-white p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] border border-[#EEEEEE] rounded-sm"
              >

                <div className="flex flex-col group">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-2 transition-colors duration-300 group-focus-within:text-[#0B0D0A]">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[#DDDDDD] text-xl py-3 font-medium text-[#0B0D0A] focus:outline-none focus:border-[#0B0D0A] transition-colors placeholder-[#BBBBBB]"
                    placeholder="Jane Doe"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  />
                </div>

                <div className="flex flex-col group">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-2 transition-colors duration-300 group-focus-within:text-[#0B0D0A]">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[#DDDDDD] text-xl py-3 font-medium text-[#0B0D0A] focus:outline-none focus:border-[#0B0D0A] transition-colors placeholder-[#BBBBBB]"
                    placeholder="jane@example.com"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  />
                </div>

                <div className="flex flex-col group">
                  <label className="text-xs font-bold uppercase tracking-widest text-[#888888] mb-2 transition-colors duration-300 group-focus-within:text-[#0B0D0A]">The Vision</label>
                  <textarea
                    required
                    rows={2}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-[#DDDDDD] text-xl py-3 font-medium text-[#0B0D0A] focus:outline-none focus:border-[#0B0D0A] transition-colors placeholder-[#BBBBBB] resize-none"
                    placeholder="Tell us everything..."
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`mt-6 w-full text-lg md:text-xl py-5 transition-all flex items-center justify-center gap-3 ${isSubmitting ? 'bg-[#EEEEEE] text-[#AAAAAA] cursor-not-allowed' : 'bg-[#0B0D0A] text-[#FAFAF7] hover:bg-[#0044FF]'}`}
                  style={{ fontFamily: 'var(--font-display, Archivo Black)' }}
                >
                  {isSubmitting ? 'SENDING...' : 'SUBMIT ↘'}
                </button>

              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full min-h-[450px] border border-[#EEEEEE] p-12 bg-white text-center shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] rounded-sm"
              >
                <h3 className="text-4xl md:text-5xl font-black text-[#0B0D0A] mb-4 uppercase" style={{ fontFamily: 'var(--font-display, Archivo Black)' }}>Request Received.</h3>
                <p className="text-lg font-medium text-[#666666] max-w-sm mb-12" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>We will review your project details and get back to you shortly.</p>
                <button onClick={() => setIsSubmitted(false)} className="text-[#888888] text-sm uppercase tracking-widest font-bold underline underline-offset-4 hover:text-[#0B0D0A] transition-colors">Submit another?</button>
              </motion.div>
            )}
          </div>

        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute -bottom-20 right-0 text-[15vw] font-black text-transparent opacity-10 pointer-events-none" style={{ fontFamily: 'var(--font-display, Archivo Black)', WebkitTextStroke: '2px #DDDDDD' }}>
        CR8
      </div>
    </section>
  );
}
