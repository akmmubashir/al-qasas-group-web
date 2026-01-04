"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years of Experience", value: "10+", icon: "📅" },
  { label: "Satisfied Clients", value: "500+", icon: "😊" },
  { label: "Projects Completed", value: "1000+", icon: "✅" },
  { label: "Countries Serving", value: "2", icon: "🌍" },
];

const highlights = [
  {
    id: 1,
    title: "Industry Leader",
    description:
      "Recognized as one of the leading contracting and trading companies in Qatar and the UAE.",
  },
  {
    id: 2,
    title: "Diverse Portfolio",
    description:
      "Successfully delivered projects across oil & gas, construction, and industrial sectors.",
  },
  {
    id: 3,
    title: "Quality Standards",
    description:
      "Certified to international quality and safety standards including ISO 9001 and OHSAS 18001.",
  },
  {
    id: 4,
    title: "Innovation Driven",
    description:
      "Continuously investing in cutting-edge technology and modern equipment for superior results.",
  },
];

const CompanyOverviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const highlightsRef = useRef<HTMLDivElement>(null);
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

      // Content animation
      gsap.fromTo(
        contentRef.current,
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

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          delay: 0.3,
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

      // Highlights animation
      const highlightCards =
        highlightsRef.current?.querySelectorAll(".highlight-card");
      if (highlightCards) {
        gsap.fromTo(
          highlightCards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: highlightsRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div ref={titleRef}>
            <h6 className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-600 text-sm font-semibold mb-6">
              About Al-Qasas Group
            </h6>
            <h2 className="text-5xl max-lg:text-3xl font-bold text-slate-900 mb-6 leading-tight">
              Building Excellence Since{" "}
              <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                2014
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A premier contracting and trading company delivering innovative
              solutions across the Middle East
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-12 max-lg:gap-8 mb-16">
          {/* Left Content */}
          <div ref={contentRef} className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 leading-relaxed">
                Al-Qasas Group for Contracting and Trading W.L.L. has
                established itself as a trusted partner in delivering
                comprehensive engineering, construction, and trading solutions
                across Qatar and the UAE.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Founded in 2014, we have built our reputation on a foundation of
                technical excellence, unwavering commitment to quality, and
                dedication to customer satisfaction. Our diverse portfolio spans
                multiple sectors including oil & gas, industrial construction,
                and infrastructure development.
              </p>
              <p className="text-slate-700 leading-relaxed">
                With a team of highly skilled professionals and state-of-the-art
                equipment, we tackle projects of varying complexity with
                precision and efficiency, ensuring timely delivery and
                exceptional results every time.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/assets/images/corporate.webp"
                alt="Al-Qasas Group Overview"
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl -z-10 max-md:hidden"></div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group relative overflow-hidden"
            >
              <div className="relative bg-linear-to-br from-slate-50 to-slate-100 p-8 rounded-2xl border border-slate-200 group-hover:border-cyan-300 transition-all duration-300 hover:shadow-xl text-center">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl max-lg:text-3xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div
          ref={highlightsRef}
          className="grid grid-cols-2 max-md:grid-cols-1 gap-6"
        >
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="highlight-card group relative overflow-hidden"
            >
              <div className="relative bg-linear-to-br from-slate-50 to-white p-6 rounded-xl border border-slate-200 group-hover:border-cyan-300 transition-all duration-300 hover:shadow-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {highlight.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
