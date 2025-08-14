import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

// Modal Component
function ProjectModal({ project, isOpen, onClose }) {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      // No initial state setting to prevent flicker
      const tl = gsap.timeline({ ease: "power2.out" });
      
      tl.fromTo(backdropRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.2 }
      )
      .fromTo(contentRef.current, 
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.2 },
        "-=0.1"
      );
    }
  }, [isOpen]);

  const handleClose = () => {
    // Simple fade-out animation
    const tl = gsap.timeline({ ease: "power2.in" });
    
    tl.to(contentRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.15
    })
    .to(backdropRef.current, {
      opacity: 0,
      duration: 0.15
    }, "-=0.1")
    .call(() => onClose());
  };

  if (!isOpen || !project) return null;

  return (
    <div ref={modalRef} className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        ref={backdropRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div 
        ref={contentRef}
        className="relative bg-gray-900/95 border border-lime-400/50 rounded-2xl p-8 shadow-2xl backdrop-blur-sm"
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute z-10 p-2 text-gray-400 transition-all duration-200 transform rounded-full top-4 right-4 hover:text-white hover:scale-110 hover:bg-gray-800/50"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {/* Project Image */}
        <div className="mb-6 overflow-hidden rounded-xl aspect-video group">
          <img 
            src={`/src/assets/${project.id}.jpeg`}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-500 ease-out rounded-xl hover:scale-105"
          />
          <div className="absolute inset-0 transition-opacity duration-300 rounded-xl opacity-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:opacity-100" />
        </div>
        
        {/* Project Details */}
        <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>
        <p className="mb-6 text-sm text-lime-400">{project.subtitle}</p>
        
        <div className="space-y-6 text-gray-300">
          <p className="text-sm leading-relaxed">{project.handle}</p>
          
          <div>
            <h4 className="mb-3 font-semibold text-white">Technologies Used:</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Three.js', 'Tailwind CSS', 'WebGL'].map((tech, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-sm transition-all duration-200 transform rounded-full bg-lime-400/10 text-lime-400 hover:bg-lime-400/20 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="mb-3 font-semibold text-white">Project Features:</h4>
            <ul className="space-y-1 text-sm list-disc list-inside">
              <li className="transition-colors duration-200 hover:text-lime-300">Responsive design across all devices</li>
              <li className="transition-colors duration-200 hover:text-lime-300">Interactive 3D elements</li>
              <li className="transition-colors duration-200 hover:text-lime-300">Optimized performance</li>
              <li className="transition-colors duration-200 hover:text-lime-300">Modern UI/UX principles</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Project Card Component
function ProjectCard({ project, onClick, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="project-card group relative flex-shrink-0 w-80 h-96 rounded-2xl border border-lime-400 overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:border-lime-300"
      style={{
        transform: `perspective(1000px) rotateY(${isHovered ? 5 : 0}deg) rotateX(${isHovered ? -5 : 0}deg)`,
        boxShadow: isHovered 
          ? '0 25px 50px rgba(132, 204, 22, 0.3), 0 0 0 1px rgba(132, 204, 22, 0.1)' 
          : '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={`/src/assets/${project.id}.jpeg`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            <div className="text-lime-400 text-sm font-medium mb-1">View Project</div>
            <div className="text-white text-xs">Click to see details</div>
          </div>
        </div>
        
        {/* Floating Animation */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `linear-gradient(45deg, transparent 30%, rgba(132, 204, 22, 0.1) 50%, transparent 70%)`,
            animation: `float 3s ease-in-out infinite ${index * 0.2}s`
          }}
        />
      </div>
      
      {/* Project Info */}
      <div className="p-6 bg-gray-900">
        <h3 className="font-bold text-xl mb-2 text-white group-hover:text-lime-400 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-3">
          {project.category}
        </p>
        <p className="text-gray-500 text-xs line-clamp-2">
          {project.description}
        </p>
      </div>
      
      {/* Glow Effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(132, 204, 22, 0.1) 0%, transparent 50%)`
        }}
      />
    </div>
  );
}

// Main Gallery Component
const ProjectGallery3D = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    { 
      id: 1, 
      title: "Modern Web Application", 
      category: "Full-Stack Development",
      subtitle: "Full-Stack Development",
      description: "A comprehensive web application built with modern technologies, featuring responsive design and interactive elements.",
      handle: "A comprehensive web application built with modern technologies, featuring responsive design and interactive elements."
    },
    { 
      id: 2, 
      title: "E-commerce Platform", 
      category: "E-commerce",
      subtitle: "E-commerce",
      description: "A robust e-commerce solution with advanced features like real-time inventory management and secure payment processing.",
      handle: "A robust e-commerce solution with advanced features like real-time inventory management and secure payment processing."
    },
    { 
      id: 3, 
      title: "Mobile App Interface", 
      category: "Mobile Development",
      subtitle: "Mobile Development",
      description: "A sleek mobile interface design that provides an intuitive user experience across all devices.",
      handle: "A sleek mobile interface design that provides an intuitive user experience across all devices."
    },
    { 
      id: 4, 
      title: "Data Visualization Dashboard", 
      category: "Data Analytics",
      subtitle: "Data Analytics",
      description: "An interactive dashboard that transforms complex data into clear, actionable insights through beautiful visualizations.",
      handle: "An interactive dashboard that transforms complex data into clear, actionable insights through beautiful visualizations."
    },
    { 
      id: 5, 
      title: "Creative Portfolio Website", 
      category: "Web Design",
      subtitle: "Web Design",
      description: "A stunning portfolio website that showcases creative work with smooth animations and modern design principles.",
      handle: "A stunning portfolio website that showcases creative work with smooth animations and modern design principles."
    },
    { 
      id: 6, 
      title: "Corporate Branding Platform", 
      category: "Branding",
      subtitle: "Branding",
      description: "A comprehensive branding platform that helps businesses establish their identity and connect with their audience.",
      handle: "A comprehensive branding platform that helps businesses establish their identity and connect with their audience."
    },
    { 
      id: 7, 
      title: "Interactive Game Interface", 
      category: "Gaming",
      subtitle: "Gaming",
      description: "An engaging game interface with smooth animations and responsive controls for an immersive gaming experience.",
      handle: "An engaging game interface with smooth animations and responsive controls for an immersive gaming experience."
    },
    { 
      id: 8, 
      title: "Educational Learning Platform", 
      category: "Education",
      subtitle: "Education",
      description: "A modern learning platform that makes education accessible and engaging through interactive content and progress tracking.",
      handle: "A modern learning platform that makes education accessible and engaging through interactive content and progress tracking."
    }
  ];

  const handleProjectClick = (project, event) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame
    const totalWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const animate = () => {
      if (!isPaused && totalWidth > 0) {
        scrollPosition += scrollSpeed;
        
        // Reset to beginning when reaching the end
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.scrollLeft = scrollPosition;
      }
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  // Mouse tracking for glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.group');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <>
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
      
      <section id="projects" className="mt-32">
        {/* Header Section - Centered */}
        <div className="max-w-6xl mx-auto px-12 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Projects</h2>
          <p className="text-gray-300 max-w-2xl">
            Explore our portfolio of successful projects that showcase our expertise in web design, development, and digital strategy.
          </p>
        </div>
        
        {/* Full-Width Gallery */}
        <div 
          className="relative overflow-hidden w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide px-12"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={(event) => handleProjectClick(project, event)}
                index={index}
              />
            ))}
          </div>
          
          {/* Instructions */}
          <div className="absolute bottom-4 left-12 text-gray-400 text-sm">
            Hover to pause • Click on any project to view details
          </div>
        </div>
        
        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </section>
    </>
  );
};

export default ProjectGallery3D; 