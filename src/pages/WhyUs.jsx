import React, { useState } from 'react';

const WhyUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const reasons = [
    {
      title: "Results-Driven Approach",
      description: "Every design decision is made with your business goals in mind. We focus on creating websites that convert visitors into customers."
    },
    {
      title: "Fast & Reliable",
      description: "We deliver projects on time, every time. Our streamlined process ensures quick turnaround without compromising quality."
    },
    {
      title: "Creative Excellence",
      description: "Our designs stand out from the crowd. We combine creativity with functionality to create memorable digital experiences."
    },
    {
      title: "Personal Partnership",
      description: "We work closely with you throughout the entire process, ensuring your vision is perfectly executed and your needs are met."
    },
    {
      title: "Ongoing Support",
      description: "Our relationship doesn't end when the project is complete. We provide ongoing support and maintenance to keep your site running smoothly."
    },
    {
      title: "Proven Track Record",
      description: "With 100+ successful projects and 50+ satisfied clients, we have the experience and expertise to deliver exceptional results."
    },
    {
      title: "100% Satisfaction Guarantee",
      description: "Your success = our success. If you're not satisfied, we revise until you are — no extra charges (T&C apply)."
    },
    {
      title: "Lightning-Fast Communication",
      description: "No ghosting. We respond within 3 hours or less during work hours — guaranteed."
    },
    {
      title: "Post-Project Support Included",
      description: "We don't disappear after delivery. Get 7 days of free post-launch support for small fixes, tweaks, or guidance."
    }
  ];

  return (
    <>
      <section id="why-us" className="max-w-6xl px-4 mx-auto mt-16 sm:mt-24 lg:mt-32 sm:px-8 lg:px-12">
      <h2 className="mb-4 sm:mb-6 text-2xl font-bold sm:text-3xl md:text-4xl">Why Choose Us?</h2>
      <p className="max-w-2xl mb-8 sm:mb-10 text-sm sm:text-base text-gray-300">We don't just build websites—we create digital experiences that drive results and help your business grow.</p>
      
      <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row">
        {/* Column 1 */}
        <div className="flex flex-col flex-1 gap-6 sm:gap-8">
          {reasons.slice(0, 3).map((reason, index) => (
            <div
              key={index}
              className="relative cursor-pointer group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Title - No Box, Just Text */}
              <div className="transition-all duration-700 ease-in-out group-hover:translate-x-2 sm:group-hover:translate-x-3">
                <h3 className="text-lg sm:text-xl font-bold transition-all duration-700 ease-in-out text-lime-400 group-hover:text-lime-300">
                  {reason.title}
                </h3>
              </div>
              
              {/* Description - Shows on Hover */}
              <div 
                className={`mt-2 sm:mt-3 transition-all duration-1000 ease-in-out ${
                  hoveredCard === index 
                    ? 'opacity-100 max-h-20 sm:max-h-24' 
                    : 'opacity-0 max-h-0 overflow-hidden'
                }`}
                style={{
                  transitionDelay: hoveredCard === index ? '150ms' : '0ms',
                  transitionProperty: 'opacity, max-height',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <p className="pl-2 sm:pl-4 text-xs sm:text-sm leading-relaxed text-gray-300 border-l-2 border-lime-400/30">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col flex-1 gap-6 sm:gap-8">
          {reasons.slice(3, 6).map((reason, index) => (
            <div
              key={index + 3}
              className="relative cursor-pointer group"
              onMouseEnter={() => setHoveredCard(index + 3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Title - No Box, Just Text */}
              <div className="transition-all duration-700 ease-in-out group-hover:translate-x-2 sm:group-hover:translate-x-3">
                <h3 className="text-lg sm:text-xl font-bold transition-all duration-700 ease-in-out text-lime-400 group-hover:text-lime-300">
                  {reason.title}
                </h3>
              </div>
              
              {/* Description - Shows on Hover */}
              <div 
                className={`mt-2 sm:mt-3 transition-all duration-1000 ease-in-out ${
                  hoveredCard === index + 3
                    ? 'opacity-100 max-h-20 sm:max-h-24' 
                    : 'opacity-0 max-h-0 overflow-hidden'
                }`}
                style={{
                  transitionDelay: hoveredCard === index + 3 ? '150ms' : '0ms',
                  transitionProperty: 'opacity, max-height',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <p className="pl-2 sm:pl-4 text-xs sm:text-sm leading-relaxed text-gray-300 border-l-2 border-lime-400/30">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col flex-1 gap-6 sm:gap-8">
          {reasons.slice(6, 9).map((reason, index) => (
            <div
              key={index + 6}
              className="relative cursor-pointer group"
              onMouseEnter={() => setHoveredCard(index + 6)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Title - No Box, Just Text */}
              <div className="transition-all duration-700 ease-in-out group-hover:translate-x-2 sm:group-hover:translate-x-3">
                <h3 className="text-lg sm:text-xl font-bold transition-all duration-700 ease-in-out text-lime-400 group-hover:text-lime-300">
                  {reason.title}
                </h3>
              </div>
              
              {/* Description - Shows on Hover */}
              <div 
                className={`mt-2 sm:mt-3 transition-all duration-1000 ease-in-out ${
                  hoveredCard === index + 6
                    ? 'opacity-100 max-h-20 sm:max-h-24' 
                    : 'opacity-0 max-h-0 overflow-hidden'
                }`}
                style={{
                  transitionDelay: hoveredCard === index + 6 ? '150ms' : '0ms',
                  transitionProperty: 'opacity, max-height',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <p className="pl-2 sm:pl-4 text-xs sm:text-sm leading-relaxed text-gray-300 border-l-2 border-lime-400/30">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
              </div>
      </section>
    </>
  );
};

export default WhyUs