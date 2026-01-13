"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import Heading from "@/app/components/heading";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Movable Partitions & Ironmongeries",
    description:
      "High-quality movable partition systems and ironmongery solutions for flexible workspace design and modern office environments.",
    icon: "🏗️",
    slug: "movable-partitions",
    img: "/assets/images/movablePartition.webp",
  },
  {
    id: 2,
    title: "Project Support",
    description:
      "Comprehensive project management and support services to ensure timely delivery and optimal resource utilization.",
    icon: "📋",
    slug: "project-support",
    img: "/assets/images/project.webp",
  },
  {
    id: 3,
    title: "Transportation",
    description:
      "Reliable and efficient transportation solutions for goods and logistics management across the region.",
    icon: "🚚",
    slug: "transportation",
    img: "/assets/images/transportation.webp",
  },
  {
    id: 4,
    title: "Corporate Services",
    description:
      "Professional corporate solutions including administrative support, consulting, and strategic business services.",
    icon: "🏢",
    slug: "corporate-services",
    img: "/assets/images/corporate.webp",
  },
  {
    id: 5,
    title: "IT Solutions",
    description:
      "Cutting-edge information technology solutions to streamline operations and enhance digital transformation.",
    icon: "💻",
    slug: "it-solutions",
    img: "/assets/images/it-solution.webp",
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
          duration: 1.3,
          ease: "expo.out",
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
          duration: 1.2,
          delay: 0.2,
          ease: "expo.out",
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
          { opacity: 0, y: 60, rotateX: 20 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            stagger: 0.15,
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
    <div ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-radial from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-radial from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="p-[80px_80px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-20">
          <div ref={titleRef}>
            <Heading title1="Explore Our" title2="Services" />
          </div>
          <p
            ref={subtitleRef}
            className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Discover the full range of comprehensive services we offer to
            support your business success
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-12 gap-10 max-lg:gap-[40px_0]">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-span-4 max-xl:col-span-6 max-lg:col-span-12 service-card group relative overflow-hidden"
            >
              {/* Card wrapper */}
              <div className="relative bg-white overflow-hidden border border-slate-200/50 group-hover:border-cyan-400/50 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col">
                {/* Image section */}
                <div className="relative h-80 max-lg:h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-white/40"></div>
                </div>

                {/* Content section */}
                <div className="relative flex-1 p-8 flex flex-col justify-between">
                  <div>
                    {/* <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div> */}
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm mb-6">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-cyan-600 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 w-fit"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
