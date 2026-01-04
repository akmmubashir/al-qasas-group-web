"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Movable Partitions & Ironmongeries",
    description:
      "High-quality movable partition systems and ironmongery solutions for flexible workspace design and modern office environments.",
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
    gradient: "from-[#0D72B6] to-blue-500",
  },
  {
    id: 2,
    title: "Project Support",
    description:
      "Comprehensive project management and support services to ensure timely delivery and optimal resource utilization.",
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
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        />
      </svg>
    ),
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Transportation",
    description:
      "Reliable and efficient transportation solutions for goods and logistics management across the region.",
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
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        />
      </svg>
    ),
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: 4,
    title: "Corporate Services",
    description:
      "Professional corporate solutions including administrative support, consulting, and strategic business services.",
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
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    title: "IT Solutions",
    description:
      "Cutting-edge information technology solutions to streamline operations and enhance digital transformation.",
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
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    gradient: "from-indigo-500 to-blue-500",
  },
];

const ServicesSection = () => {
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

      // Cards animation with stagger
      const cards = cardsRef.current?.querySelectorAll(".service-card");
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
    <div
      ref={sectionRef}
      className="relative bg-linear-to-b from-gray-100 to-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0D72B6 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0D72B6]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-lg:mb-12">
          <div ref={titleRef}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D72B6]/10 border border-[#0D72B6]/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#0D72B6] rounded-full animate-pulse" />
              <span className="text-[#0D72B6] text-sm font-bold tracking-wider uppercase">
                What We Offer
              </span>
            </div>
            <h2 className="text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl font-black text-[#0A0A0A] mb-4 leading-tight">
              Our{" "}
              <span className="bg-linear-to-r from-[#0D72B6] via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </div>
          <p
            ref={subtitleRef}
            className="text-gray-600 text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive solutions tailored to meet the diverse needs of
            businesses across Qatar and Saudi Arabia
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsRef} className="grid grid-cols-12 gap-6 max-lg:gap-4">
          {services.map((service, index) => (
            <Link
              href={`/services/${service.title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
              key={service.id}
              className={`service-card group cursor-pointer ${
                index < 3
                  ? "col-span-4 max-lg:col-span-6 max-md:col-span-12"
                  : "col-span-6 max-lg:col-span-6 max-md:col-span-12"
              }`}
            >
              <div className="relative h-full bg-white rounded-3xl p-8 max-lg:p-6 border-2 border-gray-100 hover:border-[#0D72B6]/30 shadow-sm hover:shadow-2xl hover:shadow-[#0D72B6]/10 transition-all duration-500 overflow-hidden group-hover:-translate-y-2">
                {/* Gradient Background Effect */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-opacity duration-500`}
                />

                {/* Icon Container */}
                <div
                  className={`relative w-16 h-16 bg-linear-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <div className="text-white">{service.icon}</div>
                </div>

                {/* Content */}
                <h3 className="text-2xl max-lg:text-xl font-bold text-[#0A0A0A] mb-3 group-hover:text-[#0D72B6] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA Link */}
                <div className="inline-flex items-center gap-2 text-[#0D72B6] font-bold text-sm group-hover:gap-3 transition-all duration-300">
                  <span>Explore Service</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className={`absolute bottom-0 right-0 w-full h-full bg-linear-to-tl ${service.gradient} opacity-5 rounded-tl-[100px]`}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 max-lg:mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-linear-to-r from-[#0D72B6]/5 via-blue-500/5 to-cyan-500/5 border-2 border-[#0D72B6]/20 rounded-2xl p-8 max-lg:p-6">
            <div className="flex-1 text-left max-sm:text-center">
              <h3 className="text-2xl max-lg:text-xl font-bold text-[#0A0A0A] mb-2">
                Need a Custom Solution?
              </h3>
              <p className="text-gray-600 text-sm">
                Let&apos;s discuss how we can help your business grow
              </p>
            </div>
            <button className="cursor-pointer group relative px-8 py-4 bg-linear-to-r from-[#0D72B6] to-blue-500 text-white text-[15px] font-bold rounded-full overflow-hidden hover:shadow-2xl hover:shadow-[#0D72B6]/40 transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Contact Us Today
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
