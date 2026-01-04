"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: 1,
    name: "Real Estate & Construction",
    gradient: "from-[#515151] to-blue-500",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
  },
  {
    id: 2,
    name: "Corporate Offices",
    gradient: "from-blue-500 to-cyan-500",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    name: "Hospitality",
    gradient: "from-cyan-500 to-teal-500",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Retail & Commercial",
    gradient: "from-teal-500 to-green-500",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    name: "Healthcare",
    gradient: "from-green-500 to-emerald-500",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    name: "Education",
    gradient: "from-purple-500 to-pink-500",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    id: 7,
    name: "Manufacturing",
    gradient: "from-orange-500 to-red-500",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    id: 8,
    name: "Government & Public Sector",
    gradient: "from-indigo-500 to-purple-500",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
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
      className="relative bg-linear-to-b from-blue-100 to-blue-50 overflow-hidden"
    >
      {/* Grid pattern background */}
      {/* <div
        className="absolute inset-0 z-0 opacity-[0.15]"
        style={{
          backgroundImage: `
          linear-gradient(to right, #1a1a1a 1px, transparent 1px),
          linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      /> */}

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-[#515151]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-lg:mb-12">
          <div ref={titleRef}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D72B6]/10 border border-[#0D72B6]/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#0D72B6] rounded-full animate-pulse" />
              <h6 className="text-[#0D72B6] text-sm font-bold tracking-wider uppercase">
                Industries We Serve
              </h6>
            </div>
            <h2 className="text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl font-black text-[#2a2a2a] mb-4 leading-tight">
              Industries We{" "}
              <span className="bg-linear-to-r from-[#0D72B6] via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Support
              </span>
            </h2>
          </div>
          <p
            ref={subtitleRef}
            className="text-[#2a2a2a] text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Serving diverse sectors with tailored solutions and industry
            expertise across Qatar and Saudi Arabia
          </p>
        </div>

        {/* Industries Grid */}
        <div
          ref={itemsRef}
          className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4 max-lg:gap-3"
        >
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="industry-card group cursor-pointer"
            >
              <div className="relative bg-white backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-lg:p-5 hover:bg-white/10 hover:border-[#515151]/50 transition-all duration-500 h-full min-h-45 max-lg:min-h-40 flex flex-col items-center justify-center overflow-hidden group-hover:scale-105">
                {/* Background gradient effect */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon container */}
                <div
                  className={`relative w-16 h-16 max-lg:w-14 max-lg:h-14 bg-linear-to-br ${industry.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                >
                  <div className="text-white">{industry.icon}</div>
                </div>

                {/* Text */}
                <h3 className="text-center text-[#2a2a2a] text-[15px] max-lg:text-[14px] font-bold group-hover:text-[#515151] transition-colors duration-300 relative z-10">
                  {industry.name}
                </h3>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute top-0 right-0 w-full h-full bg-linear-to-bl ${industry.gradient} opacity-10 rounded-bl-[100px]`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
