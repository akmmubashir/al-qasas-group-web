"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/app/components/heading";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    id: 1,
    title: "Proven Track Record",
    description:
      "Over a decade of successful projects and satisfied clients across the Middle East region.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    number: "I",
  },
  {
    id: 2,
    title: "Expert Team",
    description:
      "Highly skilled professionals with deep industry expertise and commitment to excellence.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    number: "II",
  },
  {
    id: 3,
    title: "Quality Assurance",
    description:
      "Stringent quality control processes ensure every project meets international standards.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    number: "III",
  },
  {
    id: 4,
    title: "Compliance & Safety",
    description:
      "Full adherence to local and international regulations with safety as top priority.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    number: "IV",
  },
  {
    id: 5,
    title: "Customer-Centric",
    description:
      "Personalized solutions tailored to your specific business needs and objectives.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    number: "V",
  },
  {
    id: 6,
    title: "Competitive Pricing",
    description:
      "Best value for money without compromising on quality or service delivery.",
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    number: "VI",
  },
];

const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - elegant fade in
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        },
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        },
      );

      // Cards animation with refined stagger
      const items = itemsRef.current?.querySelectorAll(".reason-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            stagger: {
              amount: 0.8,
              from: "start",
            },
            scrollTrigger: {
              trigger: itemsRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );

        // Icon and number animation
        items.forEach((item) => {
          const icon = item.querySelector(".reason-icon");
          const number = item.querySelector(".reason-number");

          if (icon) {
            gsap.fromTo(
              icon,
              { scale: 0.8, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: item,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              },
            );
          }

          if (number) {
            gsap.fromTo(
              number,
              { opacity: 0, x: -10 },
              {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: item,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              },
            );
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMjBMMCAxMHptMjAgMGwxMCAxMEwyMCAwem0xMCAwbDEwIDEwTDMwIDB6bTEwIDBsMTAgMTBMNDAgMHptMTAgMGwxMCAxMEw1MCAwem0xMCAwbDEwIDEwTDYwIDB6bTEwIDBsMTAgMTBMNzAgMHptMTAgMGwxMCAxMEw4MCAwem0xMCAwbDEwIDEwTDkwIDB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')]"></div>

      {/* Brand color gradient overlays */}
      <div className="absolute top-0 left-1/4 w-150 h-150 bg-linear-to-br from-[#0D72B6]/10 via-cyan-500/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-150 h-150 bg-linear-to-tl from-blue-500/10 via-sky-500/5 to-transparent rounded-full blur-3xl"></div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#0D72B6]/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="p-[80px_80px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-14">
          <div ref={titleRef}>
            <Heading title1="Why Choose" title2="Al-Qasas?" dark />
          </div>

          <p
            ref={subtitleRef}
            className="text-[18px] max-xl:text-[17px] max-lg:text-[15px] max-md:text-[14px] text-slate-300 max-w-3xl mx-auto leading-[1.8] font-light tracking-wide mt-6"
          >
            Your trusted partner for reliable, innovative, and cost-effective
            solutions that drive growth and success
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={itemsRef} className="grid grid-cols-12 gap-8 max-lg:gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="col-span-4 max-xl:col-span-6 max-md:col-span-12 reason-item group"
            >
              <div className="relative h-full">
                {/* Blue shine effect on hover */}
                <div className="absolute -inset-1 bg-linear-to-r from-[#0D72B6]/0 via-cyan-500/20 to-[#0D72B6]/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>

                {/* Card */}
                <div className="relative bg-linear-to-br from-slate-900/90 to-slate-950/90 backdrop-blur-sm border border-slate-700/40 group-hover:border-[#0D72B6]/50 rounded-lg overflow-hidden h-full transition-all duration-700 shadow-2xl group-hover:shadow-[#0D72B6]/20">
                  {/* Inner border */}
                  <div className="absolute inset-0 border border-cyan-500/5 rounded-lg"></div>

                  {/* Subtle texture overlay */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#0D72B6]/2 to-transparent"></div>

                  <div className="relative p-10 max-lg:p-8 flex flex-col h-full">
                    {/* Roman numeral */}
                    <div className="reason-number absolute top-8 right-8 text-6xl max-lg:text-5xl font-serif text-slate-800/30 group-hover:text-slate-700/40 transition-colors duration-700">
                      {reason.number}
                    </div>

                    {/* Icon container */}
                    <div className="reason-icon mb-8 relative">
                      <div className="w-20 h-20 max-lg:w-16 max-lg:h-16 rounded-full bg-linear-to-br from-[#0D72B6]/20 to-cyan-500/20 border border-[#0D72B6]/30 flex items-center justify-center text-[#0D72B6] group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-all duration-700 group-hover:shadow-lg group-hover:shadow-[#0D72B6]/30">
                        {reason.icon}
                      </div>
                      {/* Glow effect */}
                      <div className="absolute inset-0 rounded-full bg-[#0D72B6]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl max-lg:text-xl font-serif text-white mb-4 group-hover:text-cyan-100 transition-colors duration-500 tracking-wide">
                      {reason.title}
                    </h3>

                    {/* Blue divider */}
                    <div className="w-16 h-px bg-linear-to-r from-[#0D72B6]/50 to-transparent mb-5 group-hover:w-24 transition-all duration-700"></div>

                    {/* Description */}
                    <p className="text-slate-300 leading-[1.8] text-[15px] max-lg:text-sm flex-1 font-light tracking-wide">
                      {reason.description}
                    </p>

                    {/* Bottom accent */}
                    <div className="mt-8 pt-6 border-t border-slate-800/50 group-hover:border-[#0D72B6]/30 transition-colors duration-700">
                      <div className="flex items-center gap-2 text-[#0D72B6]/70 group-hover:text-cyan-400 transition-colors duration-500">
                        <div className="w-6 h-px bg-[#0D72B6]/40 group-hover:w-8 transition-all duration-500"></div>
                        <div className="w-1 h-1 rounded-full bg-cyan-500/60"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
