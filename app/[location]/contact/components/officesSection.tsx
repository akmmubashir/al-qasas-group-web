"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SubHeading from "@/app/components/subHeading";
import Heading from "@/app/components/heading";
import { useLocationStore } from "@/app/store/locationStore";
import locationConfig from "@/app/utils/data/locationConfig.json";

gsap.registerPlugin(ScrollTrigger);

const OfficesSection = () => {
  const { selectedLocation } = useLocationStore();
  const locationData = locationConfig[selectedLocation.code as keyof typeof locationConfig];
  const offices = locationData?.offices || [];
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        },
      );

      // Cards animation with smooth cascade
      const cards = cardsRef.current?.querySelectorAll(".office-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 80, rotateX: -20, scale: 0.85 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 1,
            ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            stagger: 0.25,
            scrollTrigger: {
              trigger: cardsRef.current,
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
    <section
      ref={sectionRef}
      className="relative bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden py-24"
    >
      <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_25%_30%,rgba(34,211,238,0.1),transparent_40%),radial-gradient(circle_at_75%_70%,rgba(59,130,246,0.08),transparent_45%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-20" ref={titleRef}>
          {/* <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-xs uppercase tracking-widest font-bold border border-cyan-500/30">
              Get in Touch
            </span>
          </div> */}
          <Heading title1="Visit our" title2="locations" dark />
          <p className="text-[17px] max-lg:text-[15px] text-slate-300 max-w-2xl mx-auto leading-relaxed mt-6 font-light">
            We&apos;re here to serve you. Visit our modern offices across the
            Middle East and discover how we can transform your project vision
            into reality.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 lg:gap-12"
        >
          {offices.map((office) => (
            <div key={office.city} className="office-card group relative">
              {/* Card background with border */}
              <div className="absolute inset-0 bg-linear-to-br from-slate-800/60 via-slate-700/50 to-slate-800/60 border border-slate-700/60 shadow-xl group-hover:shadow-2xl group-hover:border-cyan-500/50 transition-all duration-500 backdrop-blur-sm"></div>

              {/* Animated gradient overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-500/10 via-transparent to-blue-500/10 transition-all duration-500 pointer-events-none"></div>

              {/* Animated accent line */}
              <div className="absolute top-0 left-0 h-1 w-0 group-hover:w-24 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500"></div>

              {/* Content */}
              <div className="relative p-10 max-md:p-6 space-y-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between gap-6">
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 rounded-full bg-slate-700/50 group-hover:bg-cyan-500/20 transition-colors duration-300 border border-slate-600/50 group-hover:border-cyan-500/50">
                      <p className="text-xs uppercase tracking-widest font-bold text-slate-400 group-hover:text-cyan-300 transition-colors">
                        {office.country}
                      </p>
                    </div>
                    <h3 className="text-[30px] max-lg:text-[24px] font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {office.city}
                    </h3>
                  </div>
                  <div className="shrink-0 w-16 h-16 bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    📍
                  </div>
                </div>

                {/* Info section */}
                <div className="space-y-5 grow">
                  {/* Address */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-lg mt-1">🏢</span>
                      <div>
                        <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">
                          Address
                        </p>
                        <p className="text-sm text-slate-200 leading-relaxed font-medium">
                          {office.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <span className="text-lg mt-1">🕐</span>
                      <div>
                        <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-1">
                          Business Hours
                        </p>
                        <p className="text-sm text-slate-200 leading-relaxed font-medium">
                          {office.hours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="space-y-3 pt-6 border-t border-slate-700/50 group-hover:border-cyan-500/30 transition-colors duration-300">
                  {/* <a
                    href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                    className="flex items-center justify-between w-full p-4 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 group/btn hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📞</span>
                      <div className="flex flex-col items-start">
                        <span className="text-xs opacity-90">Call Now</span>
                        <span className="text-sm font-bold">{office.phone}</span>
                      </div>
                    </div>
                    <span className="text-xl group-hover/btn:translate-x-1 transition-transform">→</span>
                  </a> */}

                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center justify-between w-full p-4 border-2 border-slate-600 hover:border-cyan-500 bg-slate-700/30 hover:bg-cyan-500/10 text-slate-100 font-semibold transition-all duration-300 group/email hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan-500/20"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">✉️</span>
                      <div className="flex flex-col items-start">
                        <span className="text-xs text-slate-400 group-hover/email:text-cyan-300 transition-colors">
                          Send Email
                        </span>
                        <span className="text-sm font-bold">
                          {office.email}
                        </span>
                      </div>
                    </div>
                    <span className="text-xl text-slate-500 group-hover/email:text-cyan-400 group-hover/email:translate-x-1 transition-all">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficesSection;
