import React, { useState } from 'react';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);
  
  const socialItems = [
    {
      icon: (
        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      label: "Instagram",
      onClick: () => window.open("https://www.instagram.com/designclave?igsh=MWdvaG85dmx1bDhtYw==", "_blank"),
    },
    {
      icon: (
        <svg className="w-5 h-5 text-white sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: "LinkedIn",
      onClick: () => window.open("https://www.linkedin.com/in/trunalgangera?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank"),
    },
    {
      icon: (
        <svg className="text-white scale-110 w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.1,11.1l4.3-4.7h-1l-3.8,4.1l-3-4.1H6l4.6,6.2l-4.7,5h1.1l4.1-4.4l3.3,4.4H18L13.1,11.1z M7.6,7.2h1.6l7.2,9.7h-1.6L7.6,7.2z"/>
        </svg>
      ),
      label: "X",
      onClick: () => window.open("https://x.com/designClave", "_blank"),
    },
  ];

  return (
    <>
      <style>
        {`
          /* Clean, minimal animations for the new vertical card */
          .email-card-hover {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }
        `}
      </style>
      
      <section id="contact" className="max-w-6xl px-4 mx-auto mt-16 mb-16 sm:mt-24 lg:mt-32 sm:px-8 lg:px-12 sm:mb-24 lg:mb-32">
        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2 sm:gap-12">
          {/* Contact content on the left */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="mb-4 text-3xl font-bold text-transparent sm:text-4xl md:text-5xl sm:mb-6 bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text">
              Let's Connect
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Ready to bring your ideas to life? I'm here to help you create something amazing.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 sm:gap-6">
              {socialItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.onClick}
                  className="relative flex items-center justify-center w-12 h-12 transition-all duration-300 border-2 rounded-full group sm:w-16 sm:h-16 bg-black/50 backdrop-blur-md border-lime-400/30 hover:scale-110 hover:border-lime-400"
                  title={item.label}
                >
                  <div className="text-white transition-colors duration-300 group-hover:text-lime-400">
                    {item.icon}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Beautiful Vertical Email Card on the right */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-48 group w-72 sm:w-80 sm:h-56">
              {/* Main Card Container */}
              <div className="relative w-full h-full transition-all duration-500 ease-out transform group-hover:scale-105 group-hover:-translate-y-2">
                {/* Background Glow */}
                <div className="absolute inset-0 transition-opacity duration-700 opacity-0 bg-gradient-to-br from-lime-400/20 via-lime-300/10 to-transparent rounded-2xl blur-2xl group-hover:opacity-100" />
                
                {/* Main Card */}
                <div className="relative w-full h-full overflow-hidden border shadow-2xl bg-gradient-to-br from-white/10 via-white/5 to-black/20 backdrop-blur-xl border-white/20 rounded-2xl">
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-lime-400/30 via-lime-300/30 to-lime-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-full h-full bg-black rounded-2xl" />
                  </div>
                  
                  {/* Content Container */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center sm:p-8">
                    {/* Email Icon */}
                    <div className="relative mb-4">
                      <div className="flex items-center justify-center w-12 h-12 transition-all duration-500 border rounded-full sm:w-14 sm:h-14 bg-gradient-to-br from-lime-400/20 to-lime-300/20 border-lime-400/30 group-hover:border-lime-400/50">
                        <svg className="w-6 h-6 transition-colors duration-500 sm:w-7 sm:h-7 text-lime-400 group-hover:text-lime-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      {/* Subtle glow effect */}
                      <div className="absolute inset-0 w-12 h-12 transition-opacity duration-700 rounded-full opacity-0 sm:w-14 sm:h-14 bg-lime-400/10 blur-md group-hover:opacity-100" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 font-['Poppins'] group-hover:text-lime-100 transition-colors duration-500">
                      Get in Touch
                    </h3>
                    
                    {/* Email Address */}
                    <div className="relative group/email">
                      <p className="text-lime-400 text-base sm:text-lg font-semibold font-['Poppins'] group-hover/email:text-lime-300 transition-colors duration-500 cursor-pointer select-all">
                        dsgnclave@gmail.com
                      </p>
                      {/* Elegant underline */}
                      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-lime-400 to-lime-300 group-hover/email:w-full group-hover/email:left-0 transition-all duration-500 ease-out" />
                    </div>
                    
                    {/* Copy hint */}
                    <p className="mt-3 text-xs text-gray-400 transition-all duration-500 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                      Click to copy email address
                    </p>
                  </div>
                  
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 transition-opacity duration-700 opacity-0 bg-gradient-to-t from-lime-400/5 via-transparent to-transparent group-hover:opacity-100" />
                </div>
              </div>
              
              {/* Click to copy functionality */}
              <div 
                className="absolute inset-0 z-20 cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText('dsgnclave@gmail.com');
                  setShowToast(true);
                  setTimeout(() => setShowToast(false), 2000);
                }}
                title="Click to copy email"
              />
            </div>
          </div>
        </div>
        
        {/* Toast Notification */}
        {showToast && (
          <div className="fixed z-50 px-4 py-2 text-black transition-all duration-300 ease-out transform rounded-lg shadow-lg bottom-4 right-4 bg-lime-400 animate-bounce">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-semibold">Email copied!</span>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Contact;