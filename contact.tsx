import React from 'react';
import { createRoot } from 'react-dom/client';
import ContactUnhinged from './src/components/ui/contact-unhinged';
import FooterUnhinged from './src/components/ui/footer-unhinged';

// Vanilla JS logic for the contact page
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

  // Intersection Observer for scroll animations
  const revealElements = document.querySelectorAll('.reveal');
  const revealCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
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

// React Mounting
const contactRoot = document.getElementById('react-contact-root');
if (contactRoot) {
  createRoot(contactRoot).render(<ContactUnhinged />);
}

const footerRoot = document.getElementById('react-footer-unhinged');
if (footerRoot) {
  createRoot(footerRoot).render(<FooterUnhinged />);
}
