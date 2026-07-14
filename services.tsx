import React from 'react';
import { createRoot } from 'react-dom/client';
import ServicesPage from './src/components/ui/services-page';
import FooterUnhinged from './src/components/ui/footer-unhinged';

// Vanilla JS logic for the services page
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
});

// React Mounting
const servicesRoot = document.getElementById('react-services-root');
if (servicesRoot) {
  createRoot(servicesRoot).render(<ServicesPage />);
}

const footerRoot = document.getElementById('react-footer-unhinged');
if (footerRoot) {
  createRoot(footerRoot).render(<FooterUnhinged />);
}

import Chatbot from './src/components/ui/chatbot';
const chatbotRoot = document.getElementById('react-chatbot');
if (chatbotRoot) {
  createRoot(chatbotRoot).render(<Chatbot />);
}
