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
      title: "E-commerce Platform",
      category: "E-commerce",
      image: "/2.jpeg",
      description: "Full-featured e-commerce platform with modern UI/UX."
    },
    {
      id: 3,
      title: "Mobile App Design",
      category: "Mobile",
      image: "/3.jpeg",
      description: "Intuitive mobile app design for better user engagement."
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
      title: "Dashboard Design",
      category: "Dashboard",
      image: "/5.jpeg",
      description: "User-friendly dashboard with data visualization."
    },
    {
      id: 6,
      title: "Landing Page",
      category: "Landing Page",
      image: "/6.jpeg",
      description: "High-converting landing page design."
    },
    {
      id: 7,
      title: "Portfolio Website",
      category: "Portfolio",
      image: "/7.jpeg",
      description: "Creative portfolio website showcasing work."
    },
    {
      id: 8,
      title: "Corporate Website",
      category: "Corporate",
      image: "/8.jpeg",
      description: "Professional corporate website design."
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
          className="group relative flex flex-col w-full rounded-xl overflow-hidden bg-gray-900 transition-all duration-500 cursor-pointer hover:scale-[1.02] hover:shadow-2xl border border-transparent hover:border-lime-400/30 hover:shadow-lime-400/20"
          style={
            {
              "--spotlight-color": "rgba(132, 204, 22, 0.15)",
            }
          }
        >
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)",
            }}
          />
          <div className="relative z-10 flex-1 p-3 sm:p-4">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  e.target.src = `https://picsum.photos/seed/${i + 1}/500/312`;
                }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
          <footer className="relative z-10 p-3 sm:p-4 text-white">
            <h3 className="text-base sm:text-lg font-semibold mb-1 group-hover:text-lime-300 transition-colors duration-300">{c.title}</h3>
            <p className="text-xs sm:text-sm text-lime-400 font-medium group-hover:text-lime-300 transition-colors duration-300">{c.subtitle}</p>
            <p className="text-xs text-gray-400 mt-2 overflow-hidden text-ellipsis opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
              {c.handle}
            </p>
          </footer>
        </article>
      ))}
      <div
        className="absolute inset-0 pointer-events-none z-30"
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