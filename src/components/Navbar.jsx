import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/60 backdrop-blur-md border-b border-gray-800/30' 
            : 'bg-black/40 backdrop-blur-sm'
        }`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo/Brand */}
            <button 
              onClick={scrollToTop} 
              className="text-lg font-bold tracking-tight text-white transition-all duration-300 logo-button sm:text-xl hover:text-lime-400 hover:scale-105 hover:shadow-lg"
            >
              DESIGNCLAVE
            </button>

            {/* Desktop Navigation Menu */}
            <nav className="items-center justify-center flex-1 hidden space-x-2 lg:flex navbar-nav">
              {[
                { label: 'Projects', action: () => scrollToSection('projects') },
                { label: 'Services', action: () => scrollToSection('services') },
                { label: 'Why Us', action: () => scrollToSection('why-us') },
                { label: 'Offers', action: () => scrollToSection('special-offers') }
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="px-2 py-1.5 text-xs font-medium text-white bg-transparent border-none shadow-none focus:outline-none focus:ring-0 sm:px-3 sm:text-sm hover:text-lime-400 hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Contact - CTA Button */}
            <div className="relative z-10 hidden lg:block">
              <button 
                onClick={() => scrollToSection('contact')}
                className="contact-cta-button flex items-center gap-2 px-4 py-3 text-sm font-semibold text-black transition-all duration-300 transform rounded-full sm:px-3 sm:py-2 bg-lime-400 hover:bg-lime-300 hover:scale-105 hover:shadow-lg sm:text-base font-[Poppins]"
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="p-2 text-gray-300 transition-colors duration-300 lg:hidden focus:outline-none focus:ring-0 hover:text-lime-400"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          }`}>
            <nav className="py-4 space-y-2 border-t border-gray-800/30">
              {[
                { label: 'Projects', action: () => scrollToSection('projects') },
                { label: 'Services', action: () => scrollToSection('services') },
                { label: 'Why Us', action: () => scrollToSection('why-us') },
                { label: 'Offers', action: () => scrollToSection('special-offers') }
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="block w-full px-3 py-2 text-sm font-medium text-left text-white transition-all duration-300 bg-transparent border-none rounded-lg shadow-none focus:outline-none focus:ring-2 focus:ring-lime-400/50 hover:text-lime-400 hover:scale-105 hover:shadow-lg"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Contact CTA Button for Mobile */}
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="contact-cta-button w-full px-4 py-3 text-sm font-semibold text-black transition-all duration-300 transform rounded-full sm:px-3 sm:py-2 bg-lime-400 hover:bg-lime-300 hover:scale-105 hover:shadow-lg sm:text-base font-[Poppins]"
                >
                  Contact
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Scroll to top button */}
      {isScrolled && (
        <button
          onClick={scrollToTop}
          className="fixed z-40 flex items-center justify-center p-2 text-black transition-all duration-300 rounded-full shadow-lg sm:p-3 bottom-4 right-4 sm:bottom-8 sm:right-8 scroll-top-button bg-lime-400 hover:bg-lime-300 hover:scale-110 hover:shadow-xl"
          aria-label="Scroll to top"
        >
          <svg width="14" height="14" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      )}
    </>
  );
};

export default Navbar;