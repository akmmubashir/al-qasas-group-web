"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/app/components/heading";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    id: 1,
    name: "Real Estate & Construction",
    image: "/assets/projects/construction.webp",
    description: "Build with confidence",
  },
  {
    id: 2,
    name: "Corporate Offices",
    image: "/assets/projects/corporate.webp",
    description: "Modern workspace solutions",
  },
  {
    id: 3,
    name: "Hospitality",
    image: "/assets/projects/hospitality.webp",
    description: "Premium guest experiences",
  },
  {
    id: 4,
    name: "Retail & Commercial",
    image: "/assets/projects/retail.webp",
    description: "Dynamic retail environments",
  },
  {
    id: 5,
    name: "Healthcare",
    image: "/assets/projects/healthcare.webp",
    description: "Caring for wellness",
  },
  {
    id: 6,
    name: "Education",
    image: "/assets/projects/education.webp",
    description: "Learning spaces for all",
  },
  {
    id: 7,
    name: "Manufacturing",
    image: "/assets/projects/manufacturing.webp",
    description: "Industrial excellence",
  },
  {
    id: 8,
    name: "Government & Public Sector",
    image: "/assets/projects/government.webp",
    description: "Public service solutions",
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
      className="relative bg-linear-to-b from-blue-100/20 to-blue-50/20 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="p-[80px_80px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        {/* Section Header */}
        <div className="mb-10 lg:mb-12">
          <div ref={titleRef}>
            <Heading title1="Industries We " title2="Serve" />
          </div>
          <p
            ref={subtitleRef}
            className="text-slate-600 text-[18px] max-xl:text-[16px] max-md:text-[14px]  max-w-2xl leading-relaxed mt-4"
          >
            From construction to healthcare, we deliver tailored solutions
            across every sector with proven excellence
          </p>
        </div>

        {/* Industries Grid */}
        <div
          ref={itemsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry) => (
            <div key={industry.id} className="industry-card group">
              <div className="relative bg-white overflow-hidden border border-slate-100 hover:border-sky-200 shadow-sm hover:shadow-lg transition-all duration-500 flex flex-col h-60">
                {/* Image - Full height background */}
                <div className="absolute inset-0">
                  <Image
                    src={industry.image}
                    alt={industry.name + " image"}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/50 to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-sky-600/0 group-hover:bg-sky-600/10 transition-colors duration-500" />
                </div>

                {/* Content Overlay */}
                <div className="relative h-full flex flex-col justify-end p-6">
                  {/* Bottom content */}
                  <div className="space-y-3">
                    <div>
                      <p className="text-[14px] max-md:text-[12px] text-sky-200 uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-2">
                        {industry.description}
                      </p>
                      <h3 className="text-[24px] max-xl:text-[20px] font-semibold text-white leading-tight group-hover:text-sky-100 transition-colors duration-300">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
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
