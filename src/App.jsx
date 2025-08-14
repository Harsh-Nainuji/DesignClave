import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import WhyUs from './pages/WhyUs';
import SpecialOffers from './pages/SpecialOffers';
import Contact from './pages/Contact';
import GlobalMouseEffect from './components/GlobalMouseEffect';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Intersection Observer for smooth section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-[Montserrat] relative overflow-x-hidden">
      {/* Global Mouse Effect */}
      <GlobalMouseEffect 
        enabled={!isMobile}
        spotlightRadius={300}
        glowColor="132, 204, 22"
        disableAnimations={false}
      />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Page Content */}
      <main className="relative z-10 pt-16 sm:pt-20 lg:pt-24">
        {/* Home Section - with Aurora background */}
        <Home />
        
        {/* Other sections - plain black background */}
        <div className="bg-black">
          {/* About Section */}
          <About />
          
          {/* Projects Section */}
          <Projects />
          
          {/* Services Section */}
          <Services />
          
          {/* Why Us Section */}
          <WhyUs />
          
          {/* Special Offers Section */}
          <SpecialOffers />
          
          {/* Contact Section */}
          <Contact />
        </div>
      </main>

      {/* Mobile-specific optimizations */}
      {isMobile && (
        <style>{`
          /* Ensure smooth scrolling on mobile */
          html {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Optimize touch interactions */
          button, a {
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
          }
          
          /* Reduce motion for better mobile performance */
          @media (prefers-reduced-motion: reduce) {
            * {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
              transition-duration: 0.01ms !important;
            }
          }
        `}</style>
      )}
    </div>
  );
}

export default App;