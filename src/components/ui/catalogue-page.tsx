import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ThreeDCard from './three-d-card';

// Mock database for capabilities (What We Do)
const catalogues: Record<string, { title: string, color: string, description: string }> = {
  'photo-shoot': {
    title: 'PHOTO SHOOT',
    color: '#D7FF3E',
    description: 'We capture your brand\'s unfiltered story through high-fashion, narrative-driven photography and studio-perfect lighting. Whether it\'s raw, grainy event coverage from the pit or meticulously crafted e-commerce product shots that sell, our approach is unapologetic. We don\'t just take pictures; we build visual worlds that demand attention, ensuring every frame we deliver sets the pace for your entire industry and leaves your competition scrambling to catch up.'
  },
  'video-shoot': {
    title: 'VIDEO SHOOT',
    color: '#0044FF',
    description: 'Our video production is designed to disrupt traditional feeds with high-budget, cinematic ad campaigns and raw, aggressive music videos. We specialize in unapologetic visual treatments utilizing heavy practical effects and zero corporate jargon. From 60-second adrenaline shots engineered for TikTok dominance to full-scale narrative commercials that break the internet, we handle the crew, the gear, and the chaos to deliver final edits that punch people in the face visually.'
  },
  'product-shoot': {
    title: 'PRODUCT SHOOT',
    color: '#FF00FF',
    description: 'We make your physical products look dangerously good. By combining surgical lighting techniques with chaotic set design, we turn ordinary objects into culturally relevant artifacts. This isn\'t standard e-commerce photography against a boring white backdrop; this is high-end visual engineering designed to maximize perceived value and force the consumer\'s hand at checkout.'
  },
  'editing': {
    title: 'POST-PRODUCTION',
    color: '#FF66B2',
    description: 'We believe edits should be ruthless. Our post-production pipeline strips away the fluff to leave only adrenaline and impact. We specialize in aggressive color grading, seizure-inducing kinetic cuts, and visceral sound design that makes your audience physically react. If your current video feels safe or boring, hand us the raw files and watch us reconstruct it into a culturally dominant piece of media.'
  },
  'thumbnail-design': {
    title: 'THUMBNAIL ART',
    color: '#FFB6A0',
    description: 'Thumbnails are the digital billboard of the modern era, and we design them to break algorithms. We use high-contrast compositing, hyper-legible typography, and psychological color theory to hijack attention spans before a user even realizes what they are clicking. We don\'t aim for a standard click-through rate; we engineer unavoidable visual hooks that mathematically guarantee traffic.'
  },
  'brand-ads': {
    title: 'BRAND ADS',
    color: '#FFFF66',
    description: 'Paid social shouldn\'t feel like an interruption; it should feel like an event. We architect full-funnel ad campaigns that stop the scroll through sheer visual force. By abandoning corporate safety and leaning heavily into cultural relevance, we produce ad creatives that users actually want to watch, share, and buy from. Stop wasting ad spend on invisible content and start driving revenue with sheer audacity.'
  },
  'social-media-mgmt': {
    title: 'SOCIAL MGMT',
    color: '#D7FF3E',
    description: 'We run your social accounts with the aggression and speed of a modern newsroom. Forget the boring, scheduled corporate calendar. We react in real-time, hijack trending audio, and instigate conversations that position your brand as the loudest voice in the room. You focus on building your actual business while we turn your timeline into an absolute powerhouse of engagement.'
  },
  'marketing': {
    title: 'GROWTH MARKETING',
    color: '#0044FF',
    description: 'We deploy full-stack growth strategies without the bloated corporate jargon. Our marketing philosophy is simple: find where attention is underpriced, strike hard, and convert aggressively. We blend dark social tactics, influencer leverage, and high-velocity content loops to build sustainable revenue engines that scale. We don\'t do "brand awareness"—we do hostile market takeovers.'
  },
  'sponsorship': {
    title: 'SPONSORSHIPS',
    color: '#FF00FF',
    description: 'We don\'t do standard influencer marketing; we broker authentic cultural partnerships. We connect your brand directly with the creators, artists, and disruptors who actually move the needle for your demographic. By integrating your product organically into their ecosystem rather than forcing a stiff script, we generate high-trust conversions that traditional media buys simply cannot achieve.'
  },
  'podcast-booking': {
    title: 'PODCAST STUDIO',
    color: '#FF66B2',
    description: 'Our premium studio spaces are engineered specifically for top-tier audio and video recording. Outfitted with industry-standard mics, cinematic multi-cam setups, and sound-treated walls, this isn\'t your typical garage setup. Whether you are launching a flagship show or recording a solo drop, you walk in, hit record, and leave with broadcast-ready assets that immediately position you as an authority.'
  },
  'venue-rental': {
    title: 'VENUE RENTAL',
    color: '#FFB6A0',
    description: 'We offer industrial, highly aesthetic physical spaces tailored for your next big activation. With exposed concrete, modular lighting rigs, and raw architectural elements, our venues provide the perfect blank canvas for product drops, art installations, or exclusive VIP parties. Don\'t host your next event in a sterile hotel ballroom; bring it underground and give your audience something to talk about.'
  },
  'catering': {
    title: 'CATERING',
    color: '#FFFF66',
    description: 'Food and drink curation designed specifically for high-end creative events. We partner with local culinary disruptors and mixologists to provide a menu that matches the exact vibe of your production. Forget the soggy sandwiches and stale coffee; we supply aggressive, aesthetically pleasing fuel that keeps your crew running at maximum efficiency and impresses your most critical VIP guests.'
  },
  'event-tickets': {
    title: 'EVENT TICKETS',
    color: '#D7FF3E',
    description: 'Gain exclusive access to CR8\'s curated underground events, launch parties, and industry mixers. These aren\'t networking seminars; they are high-energy cultural collisions where deals are actually made. When you secure a ticket, you aren\'t just attending a party—you are stepping into a heavily curated room full of the city\'s most dangerous creatives and influential decision-makers.'
  },
  'workshop': {
    title: 'WORKSHOPS',
    color: '#0044FF',
    description: 'Learn the rules so you can break them. Our in-person training sessions are stripped-down, brutally honest masterclasses taught by working professionals who actually do the job. Whether we are dissecting advanced lighting theory or breaking down viral algorithm mechanics, you will leave with actionable, zero-BS tactics that you can immediately apply to scale your own creative operations.'
  },
  'memberships': {
    title: 'MEMBERSHIPS',
    color: '#FF00FF',
    description: 'Join the inner circle. A CR8 membership is your golden ticket to a private network of creators, directors, and cultural disruptors. Perks include deeply discounted studio time, free access to exclusive workshops, and direct lines to our internal talent roster. This is more than a subscription; it is your initiation into a community built entirely on breaking the rules and pushing the industry forward.'
  }
};

export default function CataloguePage() {
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);
  const [catalogueData, setCatalogueData] = useState<any>(null);

  useEffect(() => {
    // Read the query parameter
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const service = urlParams.get('service');
      setServiceSlug(service);

      // Fetch mock data or fallback
      if (service && catalogues[service]) {
        setCatalogueData(catalogues[service]);
      } else {
        // Fallback generic data
        setCatalogueData({
          title: 'WHAT WE DO',
          color: '#FAFAF7',
          description: 'We don\'t just execute your brief; we tear it down and rebuild it into something that actually matters. Our core capabilities span from initial conceptualization to full-scale logistical production and ruthless post-processing. We handle everything from the crew and the locations to the final color grade and sound design, ensuring that every project we touch breaks the rules, shatters expectations, and sets a new benchmark for what\'s possible.'
        });
      }
    }
  }, []);

  if (!catalogueData) return null;

  return (
    <div className="w-full min-h-screen bg-[#0B0D0A] text-[#FAFAF7] flex flex-col pb-12" style={{ paddingTop: '140px' }}>
      {/* Header and Paragraph */}
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-none mb-8" 
          style={{ fontFamily: 'var(--font-display, Archivo Black)', color: catalogueData.color }}
        >
          {catalogueData.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full border-t-2 border-[#333333] pt-6"
        >
          <p 
            className="text-xl md:text-2xl lg:text-3xl text-[#FAFAF7] font-medium leading-relaxed max-w-5xl" 
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {catalogueData.description}
          </p>
        </motion.div>
      </div>
      {/* Back Button */}
      <div className="container mx-auto px-4 mt-12 text-center">
        <a href="services.html" className="inline-block border-2 border-[#333333] hover:border-[#FAFAF7] text-[#888888] hover:text-[#FAFAF7] px-8 py-3 font-bold uppercase transition-all duration-300 tracking-widest" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          ← Back to Services
        </a>
      </div>
    </div>
  );
}
