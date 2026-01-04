"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: 1,
    name: "Real Estate & Construction",
    icon: "🏢",
  },
  {
    id: 2,
    name: "Corporate Offices",
    icon: "🏛️",
  },
  {
    id: 3,
    name: "Hospitality",
    icon: "🏨",
  },
  {
    id: 4,
    name: "Retail & Commercial",
    icon: "🏪",
  },
  {
    id: 5,
    name: "Healthcare",
    icon: "🏥",
  },
  {
    id: 6,
    name: "Education",
    icon: "🎓",
  },
  {
    id: 7,
    name: "Manufacturing",
    icon: "🏭",
  },
  {
    id: 8,
    name: "Government & Public Sector",
    icon: "🏗️",
  },
];

const IndustriesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

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

      // Industry cards animation
      const cards = itemsRef.current?.querySelectorAll(".industry-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, rotationX: 90 },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            duration: 0.7,
            ease: "back.out(1.5)",
            stagger: 0.08,
            scrollTrigger: {
              trigger: itemsRef.current,
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
      className="relative bg-linear-to-br from-white via-slate-50 to-blue-50 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-20">
          <div ref={titleRef}>
            <h6 className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-700 text-sm font-semibold mb-6">
              Industries We Serve
            </h6>
            <h2 className="text-5xl max-lg:text-3xl font-bold text-slate-900 mb-6 leading-tight">
              Industries We{" "}
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Support
              </span>
            </h2>
          </div>
          <p
            ref={subtitleRef}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Serving diverse sectors with tailored solutions and industry
            expertise
          </p>
        </div>

        <div
          ref={itemsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry) => (
            <div key={industry.id} className="industry-card group relative">
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

              {/* Card content */}
              <div className="relative bg-linear-to-br from-white to-blue-50/50 backdrop-blur-xl p-8 rounded-2xl border border-blue-200/50 group-hover:border-cyan-500/50 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col items-center justify-center min-h-50">
                <div className="text-5xl mb-4 group-hover:scale-125 group-hover:-rotate-12 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-900 text-center group-hover:text-cyan-600 transition-colors duration-300">
                  {industry.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
