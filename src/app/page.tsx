'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import MarketUpdates from '@/components/MarketUpdates';

export default function Home() {
  // Mobile menu toggle functionality
  useEffect(() => {
    const handleMobileMenu = () => {
      const mobileMenuButton = document.querySelector('.mobile-menu-button');
      const mobileMenu = document.querySelector('.mobile-menu');
      
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }
    };
    
    handleMobileMenu();
    
    return () => {
      const mobileMenuButton = document.querySelector('.mobile-menu-button');
      if (mobileMenuButton) {
        mobileMenuButton.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js" 
        strategy="afterInteractive" 
      />

      <div className="font-sans text-gray-800">
        {/* Navigation */}
        <nav className="bg-white shadow-md fixed w-full z-10">
          {/* Navigation content here */}
        </nav>

        {/* Hero Section */}
        <header className="relative flex items-center justify-center text-white text-center" style={{ height: "80vh" }}>
          {/* Hero content here */}
        </header>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          {/* About content here */}
        </section>

        {/* Properties Section */}
        <section id="properties" className="py-20 bg-gray-50">
          {/* Properties content here */}
        </section>
        
        {/* Market Updates Section - Now using the component */}
        <MarketUpdates />
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-indigo-800 text-white">
          {/* Contact content here */}
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-10">
          {/* Footer content here */}
        </footer>
      </div>
    </>
  );
}
