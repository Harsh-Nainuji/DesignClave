import React, { useState, useEffect } from 'react';

const WhyUs = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleCardExpansion = (index) => {
    if (isMobile) {
      setExpandedCards(prev => ({
        ...prev,
        [index]: !prev[index]
      }));
    }
  };

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setExpandedCards(prev => ({
        ...prev,
        [index]: true
      }));
    }
  };

  const handleMouseLeave = (index) => {
    if (!isMobile) {
      setExpandedCards(prev => ({
        ...prev,
        [index]: false
      }));
    }
  };

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
      <style>
        {`
          .why-us-title {
            cursor: pointer;
            transition: all 0.3s ease;
            user-select: none;
          }

          .why-us-title:hover {
            color: #a3e635;
            transform: translateX(8px);
          }

          .why-us-description {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
          }

          .why-us-description.expanded {
            max-height: 200px;
            opacity: 1;
            transform: translateX(0);
          }

          .why-us-description.collapsed {
            max-height: 0;
            opacity: 0;
            transform: translateX(-10px);
          }

          /* Desktop hover effects */
          @media (min-width: 769px) {
            .why-us-title:hover {
              transform: translateX(8px);
            }
            
            .why-us-title {
              cursor: default;
            }
          }

          /* Mobile click effects */
          @media (max-width: 768px) {
            .why-us-title:hover {
              transform: translateX(4px);
            }
            
            .why-us-title {
              cursor: pointer;
            }
          }
        `}
      </style>

      <section id="why-us" className="max-w-6xl px-4 mx-auto mt-16 sm:mt-24 lg:mt-32 sm:px-8 lg:px-12">
        <h2 className="mb-4 text-2xl font-bold text-white sm:mb-6 sm:text-3xl md:text-4xl">Why Choose Us?</h2>
        <p className="max-w-2xl mb-8 text-sm text-gray-300 sm:mb-10 sm:text-base">We don't just build websites we create digital experiences that drive results and help your business grow.</p>
        
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row">
          {/* Column 1 */}
          <div className="flex flex-col flex-1 gap-6 sm:gap-8">
            {reasons.slice(0, 3).map((reason, index) => (
              <div 
                key={index} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {/* Title - Clickable on mobile, hover on desktop */}
                <div 
                  className="text-lg font-bold why-us-title sm:text-xl text-lime-400"
                  onClick={() => toggleCardExpansion(index)}
                >
                  {reason.title}
                </div>
                
                {/* Description - Shows on hover (desktop) or click (mobile) */}
                <div 
                  className={`why-us-description mt-2 sm:mt-3 pl-2 sm:pl-4 text-xs sm:text-sm leading-relaxed text-gray-300 border-l-2 border-lime-400/30 ${
                    expandedCards[index] ? 'expanded' : 'collapsed'
                  }`}
                >
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col flex-1 gap-6 sm:gap-8">
            {reasons.slice(3, 6).map((reason, index) => (
              <div 
                key={index + 3} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(index + 3)}
                onMouseLeave={() => handleMouseLeave(index + 3)}
              >
                {/* Title - Clickable on mobile, hover on desktop */}
                <div 
                  className="text-lg font-bold why-us-title sm:text-xl text-lime-400"
                  onClick={() => toggleCardExpansion(index + 3)}
                >
                  {reason.title}
                </div>
                
                {/* Description - Shows on hover (desktop) or click (mobile) */}
                <div 
                  className={`why-us-description mt-2 sm:mt-3 pl-2 sm:pl-4 text-xs sm:text-sm leading-relaxed text-gray-300 border-l-2 border-lime-400/30 ${
                    expandedCards[index + 3] ? 'expanded' : 'collapsed'
                  }`}
                >
                  <p>{reason.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col flex-1 gap-6 sm:gap-8">
            {reasons.slice(6, 9).map((reason, index) => (
              <div 
                key={index + 6} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(index + 6)}
                onMouseLeave={() => handleMouseLeave(index + 6)}
              >
                {/* Title - Clickable on mobile, hover on desktop */}
                <div 
                  className="text-lg font-bold why-us-title sm:text-xl text-lime-400"
                  onClick={() => toggleCardExpansion(index + 6)}
                >
                  {reason.title}
                </div>
                
                {/* Description - Shows on hover (desktop) or click (mobile) */}
                <div 
                  className={`why-us-description mt-2 sm:mt-3 pl-2 sm:pl-4 text-xs sm:text-sm leading-relaxed text-gray-300 border-l-2 border-lime-400/30 ${
                    expandedCards[index + 6] ? 'expanded' : 'collapsed'
                  }`}
                >
                  <p>{reason.description}</p>
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