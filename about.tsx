import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AboutHero from './src/components/ui/about-hero';
import TeamSection from './src/components/ui/team-section';
import FooterUnhinged from './src/components/ui/footer-unhinged';
import './style.css';

const aboutRoot = document.getElementById('react-about-root');
if (aboutRoot) {
  createRoot(aboutRoot).render(
    <StrictMode>
      <AboutHero />
      <TeamSection />
    </StrictMode>
  );
}

const footerRoot = document.getElementById('react-footer-unhinged');
if (footerRoot) {
  createRoot(footerRoot).render(
    <StrictMode>
      <FooterUnhinged />
    </StrictMode>
  );
}

// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Dropdown functionality for mobile
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                // Only prevent default on the a tag itself, not the menu items
                if ((e.target as HTMLElement).tagName.toLowerCase() === 'a' && 
                    (e.target as HTMLElement).nextElementSibling?.classList.contains('dropdown-menu')) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            }
        });
    });
});

import Chatbot from './src/components/ui/chatbot';
const chatbotRoot = document.getElementById('react-chatbot');
if (chatbotRoot) {
  createRoot(chatbotRoot).render(
    <StrictMode>
      <Chatbot />
    </StrictMode>
  );
}
