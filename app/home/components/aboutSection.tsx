"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { label: "Years of Experience", value: "10+" },
  { label: "Satisfied Clients", value: "500+" },
  { label: "Projects Completed", value: "1000+" },
  { label: "Countries Serving", value: "2" },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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
    <div
      ref={sectionRef}
      className="relative bg-linear-to-br from-white via-slate-50 to-blue-50 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 left-0 w-96 h-96 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="mb-8">
          <div ref={titleRef}>
            <h6 className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-700 text-sm font-semibold mb-4">
              Who We Are
            </h6>
            <h2 className="text-5xl max-lg:text-3xl font-bold text-slate-900 mb-4 leading-tight">
              About{" "}
              <span className="bg-linear-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Al-Qasas
              </span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10 max-lg:gap-[30px_0] items-center">
          <div
            ref={textRef}
            className="col-span-7 max-xl:col-span-6 max-lg:col-span-full space-y-6"
          >
            <p className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-slate-700 leading-relaxed">
              Al-Qasas – Trading & Contracting is a trusted diversified
              solutions provider dedicated to delivering excellence in
              integrated trading, contracting, and business services across
              Qatar and Saudi Arabia.
            </p>
            <p className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-slate-700 leading-relaxed">
              With years of experience in the region, we specialize in movable
              partition systems, project support, transportation, corporate
              services, and IT solutions—all built on the foundations of
              quality, compliance, and operational excellence.
            </p>
            <p className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-slate-700 leading-relaxed">
              Our team is committed to understanding your unique needs and
              delivering customized solutions that drive business growth and
              operational efficiency.
            </p>
          </div>

          <div
            ref={statsRef}
            className="col-span-5 max-xl:col-span-6 max-lg:col-span-full grid grid-cols-2 gap-6 max-md:gap-4"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="stat-card group relative">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                <div className="relative bg-linear-to-br from-white to-blue-50/50 backdrop-blur-xl p-8 max-md:p-4 rounded-2xl border border-blue-200/50 group-hover:border-cyan-500/50 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-cyan-500/10">
                  <h3 className="text-[40px] max-xl:text-[32px] max-lg:text-[26px] font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2 group-hover:from-cyan-500 group-hover:to-blue-500">
                    {stat.value}
                  </h3>
                  <p className="text-[16px] max-xl:text-[14px] max-lg:text-[14px] text-slate-600 group-hover:text-slate-900 transition-colors">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-full relative">
            <div className="relative h-100 max-lg:h-auto overflow-hidden rounded-2xl">
              <Image
                src={"/assets/images/corporate.webp"}
                alt="Corporate Image"
                width={1200}
                height={600}
                className="w-full h-auto relative z-20"
              />
            </div>
            <div className="absolute z-10 -bottom-5 -max-lg:bottom-5 -right-25 max-lg:-right-3.75 w-40 max-lg:w-16 aspect-square bg-linear-to-br from-slate-950 via-blue-950 to-[#0D72B6] rounded-full" />
            {/* <div className="absolute z-10 top-0 max-lg:top-10 rotate-12 -left-20 max-lg:-left-3.75 w-30 max-lg:w-14 aspect-square bg-linear-to-br from-slate-950 via-blue-950 to-[#0D72B6]" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
