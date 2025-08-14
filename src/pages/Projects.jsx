import React from 'react';
import ChromaGrid from '../components/ChromaGrid';



const Projects = () => {

  return (
    <>
      <style>{`
        /* Mobile horizontal scroll optimizations */
        @media (max-width: 767px) {
          #projects .chroma-grid {
            overflow-x: auto !important;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            -ms-overflow-style: none;
            padding: 0.5rem 0;
          }
          
          #projects .chroma-grid::-webkit-scrollbar {
            display: none;
          }
          
          #projects .chroma-grid > div {
            display: flex !important;
            flex-direction: row !important;
            grid-template-columns: none !important;
            gap: 1rem;
            width: max-content !important;
          }
          
          #projects .chroma-grid > div > article {
            flex: 0 0 280px !important;
            min-width: 280px !important;
            max-width: 280px !important;
            scroll-snap-align: start;
            grid-column: unset !important;
          }
          
          /* Small screen specific (6-inch devices) */
          @media (max-width: 480px) {
            #projects .chroma-grid > div > article {
              flex: 0 0 260px !important;
              min-width: 260px !important;
              max-width: 260px !important;
            }
          }
        }
        

      `}</style>
      
      <section id="projects" className="max-w-6xl px-4 mx-auto mt-16 sm:mt-24 lg:mt-32 sm:px-8 lg:px-12">
        <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl">Our Projects</h2>
        <p className="max-w-2xl mb-8 text-sm text-gray-300 sm:mb-10 sm:text-base">
          Explore our portfolio of successful projects that showcase our expertise in web design, development, and digital strategy.
        </p>
        
        {/* ChromaGrid Gallery */}
        <div className="min-h-[300px] sm:min-h-[500px] lg:min-h-[600px]">
          <div className="chroma-grid">
            <ChromaGrid 
              radius={400}
              damping={0.35}
              fadeOut={0.8}
            />
          </div>
        </div>
        

        

      </section>
    </>
  );
};

export default Projects;