"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/app/components/heading";

gsap.registerPlugin(ScrollTrigger);

interface ServiceDetailSectionProps {
  title: string;
  description: string;
  icon: string;
  subtitle?: string;
  image?: string;
  features?: string[];
  benefits?: string[];
}

const ServiceDetailSection: React.FC<ServiceDetailSectionProps> = ({
  title,
  description,
  image,
  subtitle = "",
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
          duration: 1.3,
          ease: "expo.out",
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
            duration: 0.8,
            ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            stagger: 0.12,
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
            duration: 0.8,
            ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            stagger: 0.12,
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
    <div ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-radial from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-radial from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="p-20 max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        {/* Header with Image */}
        <div ref={contentRef} className="mb-20 max-lg:mb-12">
          <div className="grid grid-cols-12 gap-12 max-lg:gap-8 items-center mb-12">
            {/* Image Section */}
            {image && (
              <div className="col-span-6 max-lg:col-span-12">
                <div className="relative h-96 max-md:h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 group">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent"></div>
                </div>
              </div>
            )}

            {/* Content Section */}
            <div
              className={`${image ? "col-span-6 max-lg:col-span-12" : "col-span-12"}`}
            >
              <Heading title1={subtitle} title2="" />
              <p className="text-lg text-slate-600 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Features and Benefits Grid */}
        {(features.length > 0 || benefits.length > 0) && (
          <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-12 max-md:gap-8">
            {/* Features */}
            {features.length > 0 && (
              <div ref={featuresRef}>
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-cyan-100 border border-cyan-400 flex items-center justify-center text-cyan-600 font-bold">
                    ✓
                  </span>
                  Key Features
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="feature-item group flex gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300"
                    >
                      <div className="shrink-0 w-6 h-6 rounded-full bg-cyan-100 border border-cyan-400 flex items-center justify-center text-cyan-600 text-sm font-bold mt-1">
                        •
                      </div>
                      <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
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
                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-blue-100 border border-blue-400 flex items-center justify-center text-blue-600">
                    ★
                  </span>
                  Benefits
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="benefit-item group flex gap-4 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
                    >
                      <div className="shrink-0 w-6 h-6 rounded-full bg-blue-100 border border-blue-400 flex items-center justify-center text-blue-600 text-sm font-bold mt-1">
                        •
                      </div>
                      <p className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors duration-300">
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
