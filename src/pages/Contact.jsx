import React from 'react';

const Contact = () => {
  const socialItems = [
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      label: "Instagram",
      onClick: () => window.open("https://www.instagram.com/designclave?igsh=MWdvaG85dmx1bDhtYw==", "_blank"),
    },
    {
      icon: (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      onClick: () => window.open("https://www.linkedin.com/in/trunalgangera?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank"),
    },
  ];

  return (
    <>
      <section id="contact" className="max-w-6xl mx-auto mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-8 lg:px-12 mb-16 sm:mb-24 lg:mb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
        {/* Contact content on the left */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
            Ready to bring your ideas to life? I'm here to help you create something amazing.
          </p>
          
          {/* Social Media Icons */}
          <div className="flex items-center gap-4 sm:gap-6">
            {socialItems.map((item, index) => (
              <button
                key={index}
                onClick={item.onClick}
                className="group relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-black/50 backdrop-blur-md border-2 border-lime-400/30 flex items-center justify-center hover:scale-110 hover:border-lime-400 transition-all duration-300"
                title={item.label}
              >
                <div className="text-white group-hover:text-lime-400 transition-colors duration-300">
                  {item.icon}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Glass card on the right */}
        <div className="flex justify-center lg:justify-end">
          <div className="group relative w-64 sm:w-80 h-40 sm:h-48">
            <div className="relative w-full h-full transition-all duration-500 ease-out transform group-hover:rotate-y-12">
              <div className="absolute inset-0 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl">
                <div className="flex flex-col items-center justify-center h-full p-6 sm:p-8 text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-['Poppins'] drop-shadow-lg">
                    Contact me at
                  </h3>
                  <p className="text-lime-400 text-lg sm:text-xl font-bold font-['Poppins'] drop-shadow-lg">
                    dsgnclave@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
              </div>
      </section>
    </>
  );
};

export default Contact; 