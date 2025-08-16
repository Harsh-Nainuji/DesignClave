import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ChromaGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
  onCardClick,
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  // Your actual project data with your own photos
  const demo = [
    {
      id: 1,
      title: "Modern Web Design",
      category: "Web Design",
      image: "/1.jpeg",
      description: "Clean and modern web design with focus on user experience."
    },
    {
      id: 2,
      title: "Morden Dashboard",
      category: "Dashboard",
      image: "/2.jpeg",
      description: "Modern dashboard with modern UI/UX."
    },
    {
      id: 3,
      title: "Jewelry Store Design",
      category: "E-commerce",
      image: "/3.jpeg",
      description: "Morden jewelry store design"
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "Branding",
      image: "/4.jpeg",
      description: "Complete brand identity design and visual guidelines."
    },
    {
      id: 5,
      title: "Homepage Design",
      category: "Homepage",
      image: "/5.jpeg",
      description: "User-friendly Homepage with Minimalist visualization."
    },
    {
      id: 6,
      title: "Real Estate Site",
      category: "E-commerce",
      image: "/6.jpeg",
      description: "High-converting Real Estate Site design."
    },
    {
      id: 7,
      title: "Interior Design Website",
      category: "E-commerce",
      image: "/7.jpeg",
      description: "Creative Interior Design Website showcasing work."
    },
    {
      id: 8,
      title: "Clothing Store",
      category: "Corporate",
      image: "/8.jpeg",
      description: "Professional Clothing Store website design."
    }
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);

    // Add staggered entrance animation for cards
    const cards = el.querySelectorAll('article');
    gsap.set(cards, { opacity: 0, y: 30 });
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      delay: 0.2
    });
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  const handleCardClick = (item, event) => {
    if (onCardClick) {
      onCardClick(item, event);
    }
  };

  const handleCardMove = (e) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    c.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={rootRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`relative w-full h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 ${className}`}
      style={
        {
          "--r": `${radius}px`,
          "--x": "50%",
          "--y": "50%",
        }
      }
    >
      {data.map((c, i) => (
        <article
          key={i}
          onMouseMove={handleCardMove}
          onClick={(event) => handleCardClick(c, event)}
          className="group relative flex flex-col w-full rounded-xl overflow-hidden bg-gray-900 transition-all duration-700 cursor-pointer hover:scale-[1.03] hover:shadow-2xl border border-transparent hover:border-lime-400/10 hover:shadow-lime-400/5 hover:bg-gray-800/30 chroma-card"
          style={
            {
              "--spotlight-color": "rgba(132, 204, 22, 0.075)",
            }
          }
        >
          {/* Enhanced glow effect on hover */}
          <div className="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100 rounded-xl bg-gradient-to-r from-lime-400/2.5 via-transparent to-lime-400/2.5 blur-xl group-hover:blur-2xl" />
          
          {/* Enhanced spotlight effect */}
          <div
            className="absolute inset-0 z-20 transition-opacity duration-700 opacity-0 pointer-events-none group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 80%)",
            }}
          />
          <div className="relative z-10 flex-1 p-3 sm:p-4">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg relative group-hover:shadow-lg group-hover:shadow-lime-400/5 transition-all duration-700">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.target.src = `https://picsum.photos/seed/${i + 1}/500/312`;
                }}
              />
              {/* Enhanced hover overlay with gradient */}
              <div className="absolute inset-0 transition-all duration-700 opacity-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-100" />
              
              {/* Floating category badge */}
              <div className="absolute transition-all duration-700 transform translate-y-2 opacity-0 top-3 left-3 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="px-2 py-1 text-xs font-medium text-white border rounded-full bg-lime-500/35 backdrop-blur-sm border-lime-400/10 category-badge">
                  {c.category}
                </span>
              </div>
            </div>
          </div>
          <footer className="relative z-10 p-3 text-white sm:p-4">
            <h3 className="mb-1 text-base font-semibold transition-colors duration-300 sm:text-lg group-hover:text-lime-300">{c.title}</h3>
            <p className="text-xs font-medium transition-colors duration-300 sm:text-sm text-lime-400 group-hover:text-lime-300">{c.category}</p>
            
            {/* Enhanced hover effect for description */}
            <div className="mt-2 overflow-hidden">
              <p className="text-xs text-gray-400 transition-all duration-500 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                {c.description}
              </p>
            </div>
          </footer>
        </article>
      ))}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          backdropFilter: "grayscale(1) brightness(0.8)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.8)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),transparent 0%,transparent 15%,rgba(0,0,0,0.10) 30%,rgba(0,0,0,0.22)45%,rgba(0,0,0,0.35)60%,rgba(0,0,0,0.50)75%,rgba(0,0,0,0.68)88%,white 100%)",
        }}
      />
      <div
        ref={fadeRef}
        className="absolute inset-0 pointer-events-none transition-opacity duration-[250ms] z-40"
        style={{
          backdropFilter: "grayscale(1) brightness(0.8)",
          WebkitBackdropFilter: "grayscale(1) brightness(0.8)",
          background: "rgba(0,0,0,0.001)",
          maskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle var(--r) at var(--x) var(--y),white 0%,white 15%,rgba(255,255,255,0.90)30%,rgba(255,255,255,0.78)45%,rgba(255,255,255,0.65)60%,rgba(255,255,255,0.50)75%,rgba(255,255,255,0.32)88%,transparent 100%)",
          opacity: 1,
        }}
      />
    </div>
  );
};

export default ChromaGrid; 