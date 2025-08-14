import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const GlobalMouseEffect = ({
  enabled = true,
  spotlightRadius = 300,
  glowColor = "132, 204, 22",
  disableAnimations = false,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const spotlightRef = useRef(null);

  useEffect(() => {
    if (disableAnimations || !enabled || isMobile) return;

    // Create the spotlight element
    const spotlight = document.createElement("div");
    spotlight.className = "global-mouse-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 600px;
      height: 600px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 9999;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
      transition: opacity 0.3s ease;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    // Handle mouse movement
    const handleMouseMove = (e) => {
      if (!spotlightRef.current) return;

      // Update spotlight position
      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      // Show spotlight
      gsap.to(spotlightRef.current, {
        opacity: 0.8,
        duration: 0.2,
        ease: "power2.out",
      });

      // Add glow effect to interactive elements (excluding navbar buttons)
      const elements = document.querySelectorAll('a:not(.navbar-button), button:not(.navbar-button), .interactive, .card, .service-card, input, textarea, select, [role="button"]:not(.navbar-button), [tabindex]:not(.navbar-button)');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distance = Math.hypot(e.clientX - centerX, e.clientY - centerY);
        const maxDistance = Math.max(rect.width, rect.height) + spotlightRadius;

        if (distance <= maxDistance) {
          const intensity = Math.max(0, 1 - (distance / maxDistance));
          element.style.setProperty('--glow-intensity', intensity.toString());
          element.style.setProperty('--glow-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
          element.style.setProperty('--glow-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
        } else {
          element.style.setProperty('--glow-intensity', '0');
        }
      });
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      // Remove glow from all elements (excluding navbar buttons)
      const elements = document.querySelectorAll('a:not(.navbar-button), button:not(.navbar-button), .interactive, .card, .service-card, input, textarea, select, [role="button"]:not(.navbar-button), [tabindex]:not(.navbar-button)');
      elements.forEach((element) => {
        element.style.setProperty('--glow-intensity', '0');
      });
    };

    // Add global CSS for glow effects (excluding navbar buttons)
    const style = document.createElement('style');
    style.textContent = `
      a:not(.navbar-button), button:not(.navbar-button), .interactive, .card, .service-card, input, textarea, select, [role="button"]:not(.navbar-button), [tabindex]:not(.navbar-button) {
        --glow-intensity: 0;
        --glow-x: 50%;
        --glow-y: 50%;
        position: relative;
        transition: all 0.3s ease;
      }

      a:not(.navbar-button)::after, button:not(.navbar-button)::after, .interactive::after, .card::after, .service-card::after, input::after, textarea::after, select::after, [role="button"]:not(.navbar-button)::after, [tabindex]:not(.navbar-button)::after {
        content: '';
        position: absolute;
        inset: 0;
        padding: 2px;
        background: radial-gradient(200px circle at var(--glow-x) var(--glow-y),
            rgba(132, 204, 22, calc(var(--glow-intensity) * 0.6)) 0%,
            rgba(132, 204, 22, calc(var(--glow-intensity) * 0.3)) 30%,
            transparent 60%);
        border-radius: inherit;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: subtract;
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        pointer-events: none;
        transition: opacity 0.3s ease;
        z-index: 1;
      }

      a:not(.navbar-button):hover, button:not(.navbar-button):hover, .interactive:hover, .card:hover, .service-card:hover, input:hover, textarea:hover, select:hover, [role="button"]:not(.navbar-button):hover, [tabindex]:not(.navbar-button):hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(132, 204, 22, calc(var(--glow-intensity) * 0.3));
      }

      /* Mobile optimizations */
      @media (max-width: 768px) {
        a:not(.navbar-button)::after, button:not(.navbar-button)::after, .interactive::after, .card::after, .service-card::after, input::after, textarea::after, select::after, [role="button"]:not(.navbar-button)::after, [tabindex]:not(.navbar-button)::after {
          padding: 1px;
          background: radial-gradient(150px circle at var(--glow-x) var(--glow-y),
              rgba(132, 204, 22, calc(var(--glow-intensity) * 0.4)) 0%,
              rgba(132, 204, 22, calc(var(--glow-intensity) * 0.2)) 30%,
              transparent 60%);
        }
        
        a:not(.navbar-button):hover, button:not(.navbar-button):hover, .interactive:hover, .card:hover, .service-card:hover, input:hover, textarea:hover, select:hover, [role="button"]:not(.navbar-button):hover, [tabindex]:not(.navbar-button):hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(132, 204, 22, calc(var(--glow-intensity) * 0.2));
        }
      }
    `;
    document.head.appendChild(style);

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
      style.parentNode?.removeChild(style);
    };
  }, [enabled, spotlightRadius, glowColor, disableAnimations, isMobile]);

  return null;
};

export default GlobalMouseEffect; 