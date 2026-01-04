"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import gsap from "gsap";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background with slight zoom
      gsap.fromTo(
        bgRef.current,
        { scale: 1.05, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" },
      );

      // Animate title with fade-in and slide-up
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 },
      );

      // Animate subtitle with fade-in and slide-up
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.4 },
      );

      // Animate description with fade-in and slide-up
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 },
      );

      // Animate buttons with fade-in and slide-up
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 },
      );

      // Animate images grid with stagger effect
      if (imagesRef.current) {
        gsap.fromTo(
          imagesRef.current.querySelectorAll("div"),
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out",
            delay: 1,
            stagger: 0.1,
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="relative bg-[#0A0A0A] overflow-hidden">
      {/* Grid pattern background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
          linear-gradient(to right, #1a1a1a 1px, transparent 1px),
          linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
        `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-1/4 w-150 h-150 bg-[#0D72B6]/20 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-0 right-1/4 w-125 h-125 bg-linear-to-r from-[#0D72B6]/20 to-blue-500/20 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      {/* Main Container */}
      <div className="relative min-h-dvh z-20 max-w-300 mx-auto p-[160px_0px_60px] max-xl:p-[140px_40px_60px] max-lg:p-[120px_20px_60px] w-full">
        {/* Top section with text */}
        <div className="mb-12 max-lg:mb-8">
          {/* Pill badge */}
          <div
            ref={subtitleRef}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0D72B6]/10 border border-[#0D72B6]/30 rounded-full mb-8 max-lg:mb-6"
          >
            <div className="w-2 h-2 bg-[#0D72B6] rounded-full animate-pulse" />
            <span className="text-[#0D72B6] text-sm font-medium tracking-wide">
              QATAR & SAUDI ARABIA
            </span>
          </div>

          <h1
            ref={titleRef}
            className={`text-white font-black text-[90px] max-xl:text-[70px] max-lg:text-[42px] max-md:text-[32px] leading-[0.95] mb-6 max-lg:mb-4 max-w-5xl ${robotoMono.className}`}
          >
            <span className="text-white">Integrated</span>{" "}
            <span className="bg-linear-to-r from-[#0D72B6] via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Trading & Contracting
            </span>{" "}
            <span className="text-white">Solutions</span>
          </h1>

          <p
            ref={descRef}
            className="text-gray-400 text-[20px] max-xl:text-[18px] max-lg:text-[16px] leading-relaxed max-w-3xl mb-8"
          >
            Excellence in movable partitions, project support, transportation,
            corporate services, and IT solutions—driving quality and innovation
            across the Gulf region.
          </p>

          {/* CTA Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-wrap gap-4 mb-16 max-lg:mb-10"
          >
            <button className="cursor-pointer group relative px-8 py-4 bg-linear-to-r from-[#0D72B6] to-blue-500 text-white text-[15px] font-bold rounded-full overflow-hidden hover:shadow-2xl hover:shadow-[#0D72B6]/40 transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Get Started
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

            <button className="cursor-pointer group px-8 py-4 bg-white/5 border border-white/10 text-white text-[15px] font-bold rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300">
              <span className="flex items-center gap-2">
                View Services
                <svg
                  className="w-5 h-5 group-hover:rotate-45 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div ref={imagesRef} className="grid grid-cols-12 gap-4 max-lg:gap-3">
          {/* Large hero card - spans 8 columns */}
          <div className="col-span-8 max-lg:col-span-12 relative group cursor-pointer">
            <div className="relative h-125 max-xl:h-105 max-lg:h-75 rounded-3xl overflow-hidden bg-linear-to-br from-[#0D72B6]/10 to-blue-500/10 border border-white/10">
              <Image
                src="/assets/images/movableitems.webp"
                alt="Movable Partition Systems"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 max-lg:p-6">
                <div className="inline-block px-4 py-1.5 bg-[#0D72B6]/20 border border-[#0D72B6]/40 rounded-full text-[#0D72B6] text-xs font-bold mb-3">
                  FEATURED
                </div>
                <h3 className="text-white text-3xl max-lg:text-2xl font-bold mb-2">
                  Movable Partition Systems
                </h3>
                <p className="text-gray-300 text-sm max-w-xl">
                  Industry-leading partition solutions for modern spaces
                </p>
              </div>
            </div>
          </div>

          {/* Stats cards - spans 4 columns */}
          <div className="col-span-4 max-lg:col-span-12 flex flex-col gap-4 max-lg:gap-3">
            <div className="relative h-60.5 max-xl:h-50.5 max-lg:h-45 rounded-3xl overflow-hidden bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 p-8 max-lg:p-6 flex flex-col justify-between">
              <div>
                <div className="text-6xl max-lg:text-5xl font-black text-white mb-2">
                  500+
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  Completed Projects
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full" />
                <div className="w-8 h-1 bg-white/20 rounded-full" />
                <div className="w-4 h-1 bg-white/20 rounded-full" />
              </div>
            </div>

            <div className="relative h-60.5 max-xl:h-50.5 max-lg:h-45 rounded-3xl overflow-hidden bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-white/10 p-8 max-lg:p-6 flex flex-col justify-between">
              <div>
                <div className="text-6xl max-lg:text-5xl font-black text-white mb-2">
                  15+
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  Years of Excellence
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-12 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full" />
                <div className="w-8 h-1 bg-white/20 rounded-full" />
                <div className="w-4 h-1 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>

          {/* Service cards - bottom row */}
          <div className="col-span-3 max-lg:col-span-6 max-md:col-span-12 relative group cursor-pointer">
            <div className="relative h-70 max-lg:h-55 rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/assets/images/it-solution.webp"
                alt="IT Solutions"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 max-lg:p-4">
                <h4 className="text-white text-xl max-lg:text-lg font-bold mb-1">
                  IT Solutions
                </h4>
                <p className="text-gray-400 text-xs">
                  Technology infrastructure
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 max-lg:col-span-6 max-md:col-span-12 relative group cursor-pointer">
            <div className="relative h-70 max-lg:h-55 rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/assets/images/corporate.webp"
                alt="Corporate Services"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 max-lg:p-4">
                <h4 className="text-white text-xl max-lg:text-lg font-bold mb-1">
                  Corporate Services
                </h4>
                <p className="text-gray-400 text-xs">
                  Business support solutions
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-3 max-lg:col-span-6 max-md:col-span-12 relative group cursor-pointer">
            <div className="relative h-70 max-lg:h-55 rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/assets/images/mov.webp"
                alt="Project Support"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 max-lg:p-4">
                <h4 className="text-white text-xl max-lg:text-lg font-bold mb-1">
                  Project Support
                </h4>
                <p className="text-gray-400 text-xs">End-to-end assistance</p>
              </div>
            </div>
          </div>

          <div className="col-span-3 max-lg:col-span-6 max-md:col-span-12 relative group cursor-pointer">
            <div className="relative h-70 max-lg:h-55 rounded-3xl overflow-hidden border border-white/10">
              <Image
                src="/assets/images/transportation.webp"
                alt="Transportation"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 max-lg:p-4">
                <h4 className="text-white text-xl max-lg:text-lg font-bold mb-1">
                  Transportation
                </h4>
                <p className="text-gray-400 text-xs">
                  Logistics & fleet management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
