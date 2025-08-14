import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(window.innerWidth <= 768);
  const [counts, setCounts] = useState({ projects: 0, satisfaction: 0, experience: 0 });

  // Intersection Observer for triggering animations
  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    // Fallback: if intersection observer doesn't work, show content after 1 second
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        setIsVisible(true);
      }
    }, 1000);

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
      clearTimeout(fallbackTimer);
    };
  }, [isVisible]);

  // Counter animation effect
  useEffect(() => {
    if (isVisible) {
      // Animate projects counter
      gsap.to({}, {
        duration: 2,
        onUpdate: function() {
          const progress = this.progress();
          const currentCount = Math.floor(50 * progress);
          setCounts(prev => ({ ...prev, projects: currentCount }));
        }
      });

      // Animate satisfaction counter
      gsap.to({}, {
        duration: 1.5,
        delay: 0.5,
        onUpdate: function() {
          const progress = this.progress();
          const currentCount = Math.floor(100 * progress);
          setCounts(prev => ({ ...prev, satisfaction: currentCount }));
        }
      });

      // Animate experience counter
      gsap.to({}, {
        duration: 1,
        delay: 1,
        onUpdate: function() {
          const progress = this.progress();
          const currentCount = Math.floor(2 * progress);
          setCounts(prev => ({ ...prev, experience: currentCount }));
        }
      });
    }
  }, [isVisible]);

  // Simple fade-in animation
  useEffect(() => {
    if (isVisible && titleRef.current && textRef.current) {
      // Reset initial states
      gsap.set([titleRef.current, textRef.current], { 
        opacity: 0
      });

      // Simple fade-in for title
      gsap.to(titleRef.current, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      });

      // Simple fade-in for text with delay
      gsap.to(textRef.current, {
        opacity: 1,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out"
      });
    }
  }, [isVisible]);

  // Force visibility on mobile after a short delay
  useEffect(() => {
    const mobileTimer = setTimeout(() => {
      if (window.innerWidth <= 768) {
        setIsVisible(true);
      }
    }, 500);

    return () => clearTimeout(mobileTimer);
  }, []);

  return (
    <>
      <section id="about" ref={sectionRef} className="max-w-5xl px-4 mx-auto mt-12 sm:mt-16 md:mt-24 lg:mt-32 sm:px-8 lg:px-12">
        <h2 ref={titleRef} className={`mb-4 sm:mb-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center sm:text-left ${!isVisible ? 'opacity-0' : ''}`}>
          About Me
        </h2>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 md:flex-row md:items-start">
          <p ref={textRef} className={`text-gray-300 md:w-1/2 text-center sm:text-left text-sm sm:text-base leading-relaxed ${!isVisible ? 'opacity-0' : ''}`}>
            I'm a digital design specialist who transforms ideas into high-converting websites with a focus on user experience and results. I create designs that elevate brands and build trust, whether you're a startup or an established business.
          </p>
          <div ref={statsRef} className="flex flex-row justify-center gap-4 sm:gap-6 text-center md:gap-12 md:justify-end md:w-1/2 md:ml-auto">
            <div className="stat-card">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white transition-all duration-300">
                {counts.projects}+
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Projects</div>
            </div>
            <div className="stat-card">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white transition-all duration-300">
                {counts.satisfaction}%
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div className="stat-card">
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white transition-all duration-300 whitespace-nowrap">
                {counts.experience} Years
              </div>
              <div className="text-xs sm:text-sm text-gray-400">Experience</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;