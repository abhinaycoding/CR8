import React from 'react';
import { createRoot } from 'react-dom/client';
import IntroAnimation from './src/components/ui/scroll-morph-hero';

// Vanilla JS logic
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Close menu on link click
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // Hero Spotlight Effect
  const heroSection = document.querySelector('.hero') as HTMLElement;
  if (heroSection) {
    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      heroSection.style.setProperty('--mouse-x', `${x}px`);
      heroSection.style.setProperty('--mouse-y', `${y}px`);
    });
  }

  // Intersection Observer for scroll animations
  const revealElements = document.querySelectorAll('.reveal');

  const revealCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: Stop observing once revealed
        observer.unobserve(entry.target);
      }
    });
  };

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

  revealElements.forEach(el => revealObserver.observe(el));
});

import ZineHero from './src/components/ui/zine-hero';

// React Mounting
const rootElement = document.getElementById('react-hero-root');
if (rootElement) {
  createRoot(rootElement).render(<IntroAnimation />);
}

const zineRootElement = document.getElementById('react-zine-hero');
if (zineRootElement) {
  createRoot(zineRootElement).render(<ZineHero />);
}

import StopMotionScroll from './src/components/ui/stop-motion-scroll';
const stopMotionRoot = document.getElementById('react-stop-motion');
if (stopMotionRoot) {
  createRoot(stopMotionRoot).render(<StopMotionScroll />);
}

import { ClientsSection } from './src/components/ui/clients-section';
const clientsSectionRoot = document.getElementById('react-clients-section');
if (clientsSectionRoot) {
  createRoot(clientsSectionRoot).render(<ClientsSection />);
}

import ChaoticServices from './src/components/ui/chaotic-services';
const servicesRoot = document.getElementById('react-chaotic-services');
if (servicesRoot) {
  createRoot(servicesRoot).render(<ChaoticServices />);
}

import WorkMarquee from './src/components/ui/work-marquee';
const workRoot = document.getElementById('react-work-marquee');
if (workRoot) {
  createRoot(workRoot).render(<WorkMarquee />);
}

import ProcessUnhinged from './src/components/ui/process-unhinged';
const processRoot = document.getElementById('react-process-unhinged');
if (processRoot) {
  createRoot(processRoot).render(<ProcessUnhinged />);
}

import FooterUnhinged from './src/components/ui/footer-unhinged';
const footerRoot = document.getElementById('react-footer-unhinged');
if (footerRoot) {
  createRoot(footerRoot).render(<FooterUnhinged />);
}
