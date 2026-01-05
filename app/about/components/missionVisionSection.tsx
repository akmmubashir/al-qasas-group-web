"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubHeading from "@/app/components/subHeading";
import Heading from "@/app/components/heading";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "To deliver exceptional engineering solutions that exceed expectations, fostering long-term partnerships built on trust, innovation, and excellence. We are committed to providing sustainable and cost-effective solutions that drive success for our clients across the Middle East.",
    icon: "🎯",
    gradient: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    hoverShadow: "hover:shadow-cyan-500/20",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "To be the leading provider of integrated engineering and contracting services in the region, recognized for our commitment to quality, safety, and innovation. We envision a future where our solutions contribute to building sustainable infrastructure and advancing industrial progress.",
    icon: "👁️",
    gradient: "from-blue-500/20 to-purple-500/20",
    borderColor: "border-blue-500/30",
    hoverShadow: "hover:shadow-blue-500/20",
  },
  {
    id: 3,
    title: "Our Values",
    description:
      "Integrity, Excellence, Safety, Innovation, and Customer Satisfaction form the cornerstone of everything we do. We believe in ethical business practices, continuous improvement, and creating value for all stakeholders while maintaining the highest standards of quality and professionalism.",
    icon: "⭐",
    gradient: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    hoverShadow: "hover:shadow-purple-500/20",
  },
];

const MissionVisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
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

      // Items animation
      const cards = itemsRef.current?.querySelectorAll(".mission-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: itemsRef.current,
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
      className="relative bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-16">
          <div ref={titleRef}>
            <SubHeading title="Who We Are" dark />
            <Heading title1="Our" title2="Mission, Vision & Values" dark />
            <p className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Guided by our core principles and driven by a commitment to
              excellence
            </p>
          </div>
        </div>

        <div
          ref={itemsRef}
          className="grid grid-cols-1 gap-8 max-w-5xl mx-auto"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="mission-card group relative overflow-hidden"
            >
              <div
                className={`relative bg-slate-800/50 backdrop-blur-xl p-8 max-md:p-6 rounded-2xl border ${item.borderColor} transition-all duration-500 hover:border-opacity-100 hover:shadow-2xl ${item.hoverShadow}`}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-start gap-6 max-md:flex-col">
                    {/* Icon */}
                    <div className="shrink-0">
                      <div className="w-20 h-20 max-md:w-16 max-md:h-16 rounded-xl bg-linear-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center text-4xl max-md:text-3xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-3xl max-md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-slate-300 text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
