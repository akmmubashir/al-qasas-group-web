"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Doha Tower Office Complex",
    category: "Commercial",
    description:
      "Complete movable partition system installation for 50-floor office complex",
    location: "Doha, Qatar",
    year: "2024",
    image: "🏢",
  },
  {
    id: 2,
    title: "Royal Healthcare Facility",
    category: "Healthcare",
    description:
      "State-of-the-art partition systems with medical-grade materials",
    location: "Riyadh, Saudi Arabia",
    year: "2023",
    image: "🏥",
  },
  {
    id: 3,
    title: "Grand Luxury Hotel",
    category: "Hospitality",
    description: "Custom ironmongery and partition solutions for 5-star resort",
    location: "Doha, Qatar",
    year: "2024",
    image: "🏨",
  },
  {
    id: 4,
    title: "Education City Campus",
    category: "Education",
    description: "Flexible workspace solutions for university facilities",
    location: "Qatar Foundation",
    year: "2023",
    image: "🎓",
  },
  {
    id: 5,
    title: "Industrial Park Development",
    category: "Industrial",
    description: "Comprehensive logistics and transportation management",
    location: "Dammam, Saudi Arabia",
    year: "2024",
    image: "🏭",
  },
  {
    id: 6,
    title: "Smart City IT Infrastructure",
    category: "Technology",
    description: "End-to-end IT solutions for smart city development",
    location: "Lusail, Qatar",
    year: "2024",
    image: "💻",
  },
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll(".project-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.12,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 max-lg:px-4 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div ref={titleRef}>
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6">
              Our Portfolio
            </span>
            <h2 className="text-5xl max-lg:text-3xl font-bold text-white mb-6 leading-tight">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
          </div>
          <p
            ref={subtitleRef}
            className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Showcasing our excellence across diverse industries and sectors
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <div key={project.id} className="project-card group relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

              {/* Card content */}
              <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col">
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                  {project.image}
                </div>

                {/* Category badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4 w-fit">
                  {project.category}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm mb-4 flex-1">
                  {project.description}
                </p>

                {/* Meta info */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 text-sm">
                  <div className="flex items-center gap-2 text-slate-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{project.location}</span>
                  </div>
                  <span className="text-cyan-400 font-semibold">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
