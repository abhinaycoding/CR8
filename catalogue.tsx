import React from 'react';
import { createRoot } from 'react-dom/client';
import CataloguePage from './src/components/ui/catalogue-page';
import FooterUnhinged from './src/components/ui/footer-unhinged';
import Chatbot from './src/components/ui/chatbot';

// Vanilla JS logic for the navbar
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
const catalogueRoot = document.getElementById('react-catalogue-root');
if (catalogueRoot) {
  createRoot(catalogueRoot).render(<CataloguePage />);
}

const footerRoot = document.getElementById('react-footer-unhinged');
if (footerRoot) {
  createRoot(footerRoot).render(<FooterUnhinged />);
}

const chatbotRoot = document.getElementById('react-chatbot');
if (chatbotRoot) {
  createRoot(chatbotRoot).render(<Chatbot />);
}
