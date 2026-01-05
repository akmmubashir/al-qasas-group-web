"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SubHeading from "@/app/components/subHeading";
import Heading from "@/app/components/heading";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

      // Text animation
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
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

      // Stats animation
      const statCards = statsRef.current?.querySelectorAll(".stat-card");
      if (statCards) {
        gsap.fromTo(
          statCards,
          { opacity: 0, y: 40, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 70%",
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
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0D72B6 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-0 -right-40 w-125 h-125 bg-[#0D72B6]/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-125 h-125 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 max-lg:mb-12" ref={titleRef}>
          <SubHeading title="Who We Are" />
          <Heading title1="About" title2="Al-Qasas" />
          <p className="text-gray-600 text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-w-2xl mx-auto">
            Your trusted partner for integrated trading, contracting, and
            business solutions across the Gulf region
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-8 max-lg:gap-6 mb-16 max-lg:mb-12">
          {/* Left Content */}
          <div
            ref={textRef}
            className="col-span-7 max-lg:col-span-12 space-y-6"
          >
            <div className="bg-linear-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 max-lg:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex max-lg:flex-col items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-[#0D72B6] to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
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
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">
                    Our Foundation
                  </h3>
                  <p className="text-gray-700 text-[16px] max-xl:text-[16px] max-lg:text-[14px] leading-relaxed">
                    Al-Qasas – Trading & Contracting is a trusted diversified
                    solutions provider dedicated to delivering excellence in
                    integrated trading, contracting, and business services
                    across Qatar and Saudi Arabia.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 max-lg:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex max-lg:flex-col items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">
                    Our Expertise
                  </h3>
                  <p className="text-gray-700 text-[16px] max-xl:text-[16px] max-lg:text-[14px] leading-relaxed">
                    With years of experience in the region, we specialize in
                    movable partition systems, project support, transportation,
                    corporate services, and IT solutions—all built on the
                    foundations of quality, compliance, and operational
                    excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-gray-50 to-blue-50/30 rounded-3xl p-8 max-lg:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex max-lg:flex-col items-start gap-4">
                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">
                    Our Commitment
                  </h3>
                  <p className="text-gray-700 text-[16px] max-xl:text-[16px] max-lg:text-[14px] leading-relaxed">
                    Our team is committed to understanding your unique needs and
                    delivering customized solutions that drive business growth
                    and operational efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Section */}
          <div
            ref={imageRef}
            className="col-span-5 max-lg:col-span-12 relative"
          >
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-150 max-lg:min-h-100 group">
              <Image
                src="/assets/images/corporate.webp"
                alt="Al-Qasas Group Overview"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-[#0D72B6] to-blue-500 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#0A0A0A]">
                      15+
                    </div>
                    <div className="text-xs font-semibold text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-5 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-black text-[#0D72B6]">
                        500+
                      </div>
                      <div className="text-xs font-semibold text-gray-600 mt-1">
                        Projects Completed
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-[#0D72B6]">
                        98%
                      </div>
                      <div className="text-xs font-semibold text-gray-600 mt-1">
                        Client Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-linear-to-br from-[#0D72B6] to-blue-500 rounded-3xl -z-10 max-lg:hidden" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-linear-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 blur-2xl -z-10 max-lg:hidden" />
          </div>
        </div>

        {/* Bottom Stats/Features Bar */}
        <div
          ref={statsRef}
          className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6"
        >
          <div className="stat-card group bg-linear-to-br from-[#0D72B6]/5 to-blue-500/5 border border-[#0D72B6]/10 rounded-2xl p-6 hover:shadow-lg hover:border-[#0D72B6]/30 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-linear-to-br from-[#0D72B6] to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-white"
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
            </div>
            <h4 className="text-lg font-bold text-[#0A0A0A] mb-2">
              Quality Assured
            </h4>
            <p className="text-sm text-gray-600">
              ISO certified processes and standards
            </p>
          </div>

          <div className="stat-card group bg-linear-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/10 rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/30 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-[#0A0A0A] mb-2">
              Fast Delivery
            </h4>
            <p className="text-sm text-gray-600">
              On-time project completion guaranteed
            </p>
          </div>

          <div className="stat-card group bg-linear-to-br from-cyan-500/5 to-teal-500/5 border border-cyan-500/10 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-500/30 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-[#0A0A0A] mb-2">
              24/7 Support
            </h4>
            <p className="text-sm text-gray-600">
              Round-the-clock customer assistance
            </p>
          </div>

          <div className="stat-card group bg-linear-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10 rounded-2xl p-6 hover:shadow-lg hover:border-purple-500/30 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-[#0A0A0A] mb-2">
              Regional Coverage
            </h4>
            <p className="text-sm text-gray-600">
              Serving Qatar & Saudi Arabia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
