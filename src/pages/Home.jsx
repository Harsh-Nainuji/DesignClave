import React, { useState, useEffect } from 'react';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] pt-4 sm:pt-8 relative animate-fade-in overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black">
            {/* Animated Grid Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 animate-grid-fade" style={{
                backgroundImage: `
                  linear-gradient(rgba(82, 39, 255, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(82, 39, 255, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px'
              }}></div>
            </div>
            
            {/* Floating Particles - All dim green */}
            <div className="absolute inset-0">
              {/* Particle 1 */}
              <div className="absolute w-1 h-1 rounded-full bg-green-500/30 animate-float-1"
                   style={{ left: '20%', top: '30%' }}></div>
              
              {/* Particle 2 */}
              <div className="absolute w-1 h-1 rounded-full bg-green-600/25 animate-float-2"
                   style={{ left: '80%', top: '20%' }}></div>
              
              {/* Particle 3 */}
              <div className="absolute w-1 h-1 rounded-full bg-green-500/20 animate-float-3"
                   style={{ left: '60%', top: '70%' }}></div>
              
              {/* Particle 4 */}
              <div className="absolute w-1 h-1 rounded-full bg-green-600/15 animate-float-4"
                   style={{ left: '10%', top: '80%' }}></div>
              
              {/* Particle 5 */}
              <div className="absolute w-1 h-1 rounded-full bg-green-500/25 animate-float-5"
                   style={{ left: '90%', top: '60%' }}></div>
            </div>
            
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/10 via-transparent to-green-800/10"></div>
          </div>
        </div>
        
        {/* Blend Transition to About Section */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-6xl px-4 sm:px-8 lg:px-12">
          <h1 className="mb-4 text-3xl font-light leading-tight tracking-wide sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block text-center sm:text-left sm:ml-10 md:ml-18 lg:ml-22 xl:ml-24 text-[1.15em]">THE WEB</span>
            <span className="block text-center text-[1.15em]">PRODUCTION</span>
            <span className="block text-center sm:text-right sm:mr-16 md:mr-24 lg:mr-32 xl:mr-40 text-[1.15em] sm:ml-[20%] md:ml-[28%] lg:ml-[36%] xl:ml-[44%]">AGENCY</span>
          </h1>
          
          {/* Subtext and Button */}
          <div className="flex flex-col items-center gap-3 mb-6 sm:gap-2 sm:mb-4 sm:items-end">
            <p className="max-w-lg px-4 text-sm font-light leading-relaxed text-center text-gray-300 sm:text-left sm:text-base sm:px-0">
              Crafting high-converting web designs that don't just look good they perform. Trusted by startups, business owners, and creative teams worldwide.
            </p>
          </div>
          
          {/* Centered Button - Mobile optimized */}
          <div className="flex justify-center w-full mb-6 sm:mb-4 sm:ml-[6.5%]">
            <button 
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-black transition-all duration-300 transform rounded-full sm:px-3 sm:py-2 bg-lime-400 hover:bg-lime-300 hover:scale-105 hover:shadow-lg sm:text-base"
            >
              Explore
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="transition-transform duration-300 transform rotate-90 group-hover:translate-x-1 group-hover:-translate-y-1 sm:w-3.5 sm:h-3.5 font-bold mt-0.5"
              >
                <path 
                  d="M7 17L17 7M17 7H7M17 7V17" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home; 