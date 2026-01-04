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
    icon: "🏗️",
    slug: "movable-partitions",
  },
  {
    id: 2,
    title: "Project Support",
    description:
      "Comprehensive project management and support services to ensure timely delivery and optimal resource utilization.",
    icon: "📋",
    slug: "project-support",
  },
  {
    id: 3,
    title: "Transportation",
    description:
      "Reliable and efficient transportation solutions for goods and logistics management across the region.",
    icon: "🚚",
    slug: "transportation",
  },
  {
    id: 4,
    title: "Corporate Services",
    description:
      "Professional corporate solutions including administrative support, consulting, and strategic business services.",
    icon: "🏢",
    slug: "corporate-services",
  },
  {
    id: 5,
    title: "IT Solutions",
    description:
      "Cutting-edge information technology solutions to streamline operations and enhance digital transformation.",
    icon: "💻",
    slug: "it-solutions",
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
      className="relative bg-linear-to-br from-slate-950 via-blue-950 to-[#0D72B6] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-20">
          <div ref={titleRef}>
            <h6 className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6">
              Our Solutions
            </h6>
            <h2 className="text-5xl max-lg:text-3xl font-bold text-white mb-6 leading-tight">
              Explore Our{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
          </div>
          <p
            ref={subtitleRef}
            className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Discover the full range of comprehensive services we offer to
            support your business success
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-12 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-span-4 max-xl:col-span-6 max-lg:col-span-12 service-card group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

              {/* Card content */}
              <div className="relative bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm mb-6">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-cyan-400 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
