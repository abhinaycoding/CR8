import React from 'react';
import { createRoot } from 'react-dom/client';
import WorkPage from './src/components/ui/work-page';
import FooterUnhinged from './src/components/ui/footer-unhinged';

// Vanilla JS logic for the work page
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
const workRoot = document.getElementById('react-work-root');
if (workRoot) {
  createRoot(workRoot).render(<WorkPage />);
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
