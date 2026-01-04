"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ServiceDetailSectionProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  benefits?: string[];
}

const ServiceDetailSection: React.FC<ServiceDetailSectionProps> = ({
  title,
  description,
  icon,
  features = [],
  benefits = [],
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
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

      // Features animation with stagger
      const featureItems =
        featuresRef.current?.querySelectorAll(".feature-item");
      if (featureItems) {
        gsap.fromTo(
          featureItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: featuresRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Benefits animation with stagger
      const benefitItems =
        benefitsRef.current?.querySelectorAll(".benefit-item");
      if (benefitItems) {
        gsap.fromTo(
          benefitItems,
          { opacity: 0, x: 30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: benefitsRef.current,
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
    <div
      ref={sectionRef}
      className="relative bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        {/* Header */}
        <div ref={contentRef} className="text-center mb-20 max-lg:mb-12">
          <div className="text-6xl max-lg:text-5xl max-md:text-4xl mb-6">
            {icon}
          </div>
          <h1 className="text-5xl max-lg:text-4xl max-md:text-3xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features and Benefits Grid */}
        {(features.length > 0 || benefits.length > 0) && (
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-12 max-md:gap-8">
            {/* Features */}
            {features.length > 0 && (
              <div ref={featuresRef}>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center text-cyan-300">
                    ✓
                  </span>
                  Key Features
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="feature-item group flex gap-4 p-4 rounded-xl bg-slate-800/30 backdrop-blur border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      <div className="shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 border border-cyan-500 flex items-center justify-center text-cyan-300 text-sm font-bold mt-1">
                        •
                      </div>
                      <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Benefits */}
            {benefits.length > 0 && (
              <div ref={benefitsRef}>
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-300">
                    ★
                  </span>
                  Benefits
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="benefit-item group flex gap-4 p-4 rounded-xl bg-slate-800/30 backdrop-blur border border-slate-700/30 hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="shrink-0 w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500 flex items-center justify-center text-blue-300 text-sm font-bold mt-1">
                        •
                      </div>
                      <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetailSection;
