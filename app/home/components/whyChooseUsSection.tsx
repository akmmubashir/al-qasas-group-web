"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    id: 1,
    title: "Proven Track Record",
    description:
      "Over a decade of successful projects and satisfied clients across the Middle East region.",
    icon: "📊",
  },
  {
    id: 2,
    title: "Expert Team",
    description:
      "Highly skilled professionals with deep industry expertise and commitment to excellence.",
    icon: "👥",
  },
  {
    id: 3,
    title: "Quality Assurance",
    description:
      "Stringent quality control processes ensure every project meets international standards.",
    icon: "✨",
  },
  {
    id: 4,
    title: "Compliance & Safety",
    description:
      "Full adherence to local and international regulations with safety as top priority.",
    icon: "🛡️",
  },
  {
    id: 5,
    title: "Customer-Centric",
    description:
      "Personalized solutions tailored to your specific business needs and objectives.",
    icon: "🎯",
  },
  {
    id: 6,
    title: "Competitive Pricing",
    description:
      "Best value for money without compromising on quality or service delivery.",
    icon: "💰",
  },
];

const WhyChooseUsSection = () => {
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

      // Cards animation with stagger
      const items = itemsRef.current?.querySelectorAll(".reason-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: {
              amount: 0.6,
              from: "start",
            },
            scrollTrigger: {
              trigger: itemsRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );

        // Icon animation
        items.forEach((item) => {
          const icon = item.querySelector(".reason-icon");
          if (icon) {
            gsap.fromTo(
              icon,
              { scale: 0, rotationZ: -180 },
              {
                scale: 1,
                rotationZ: 0,
                duration: 0.8,
                ease: "back.out(2)",
                scrollTrigger: {
                  trigger: item,
                  start: "top 80%",
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
      className="relative bg-linear-to-br from-slate-950 via-blue-950 to-[#0D72B6] overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-20">
          <div ref={titleRef}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D72B6]/10 border border-[#0D72B6]/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-cyan-300 rounded-full animate-pulse" />
              <h6 className="text-cyan-300 text-sm font-bold tracking-wider uppercase">
                Why We Stand Out
              </h6>
            </div>
            <h2 className="text-6xl max-xl:text-5xl max-lg:text-4xl max-md:text-3xl font-black text-white mb-4 leading-tight">
              Why Choose{" "}
              <span className="bg-linear-to-r from-cyan-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Al-Qasas?
              </span>
            </h2>
          </div>
          <p
            ref={subtitleRef}
            className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Your trusted partner for reliable, innovative, and cost-effective
            solutions that drive growth and success
          </p>
        </div>

        <div ref={itemsRef} className="grid grid-cols-12 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="col-span-4 max-xl:col-span-6 max-lg:col-span-12 reason-item group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-linear-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

              {/* Card content */}
              <div className="relative bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-2xl border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="reason-icon mb-6">
                    <div className="w-16 h-16 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-3xl group-hover:from-cyan-500/40 group-hover:to-blue-500/40 group-hover:border-cyan-500/60 transition-all duration-500 group-hover:scale-110">
                      {reason.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm flex-1">
                    {reason.description}
                  </p>

                  {/* Accent line */}
                  {/* <div className="mt-6 pt-4 border-t border-slate-700/50 group-hover:border-cyan-500/30 transition-colors duration-300">
                    <span className="text-cyan-400 text-sm font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Learn more
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div> */}
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
