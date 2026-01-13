"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/app/components/heading";

gsap.registerPlugin(ScrollTrigger);

interface ServiceContextSectionProps {
  title: string;
  subtitle?: string;
  content: {
    heading: string;
    description: string;
    icon?: string;
  }[];
}

const ServiceContextSection: React.FC<ServiceContextSectionProps> = ({
  title,
  subtitle,
  content,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

      // Content items animation with stagger
      const items = contentRef.current?.querySelectorAll(".context-item");
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: contentRef.current,
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
      className="relative bg-linear-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-blue-500/5 to-cyan-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-purple-500/5 to-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16 max-lg:mb-12">
          <Heading title1={title} dark />
          {subtitle && (
            <p className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Content Grid */}
        <div ref={contentRef} className="grid grid-cols-12 gap-6 max-lg:gap-4">
          {content.map((item, index) => (
            <div
              key={index}
              className="col-span-4 max-lg:col-span-6 max-md:col-span-12 context-item group"
            >
              <div className="relative bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500 h-full hover:shadow-lg hover:shadow-cyan-500/10">
                {/* Icon */}
                {item.icon && (
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                )}

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {item.heading}
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceContextSection;
