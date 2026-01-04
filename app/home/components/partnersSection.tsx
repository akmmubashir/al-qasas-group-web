"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const partners = [
  {
    id: 1,
    name: "Al-Futtaim Engineering & Technologies",
    icon: "🏢",
    logo: "/assets/companies/al-futtaim.png",
  },
  {
    id: 2,
    name: "Al-Jaber Engineering",
    icon: "🏗️",
    logo: "/assets/companies/al-jaber.png",
  },
  { id: 3, name: "Barwa", icon: "🏛️", logo: "/assets/companies/barwa.png" },
  {
    id: 4,
    name: "CHIYODA Corporation",
    icon: "🏭",
    logo: "/assets/companies/chiyoda.png",
  },
  {
    id: 5,
    name: "HBK Contracting",
    icon: "🏨",
    logo: "/assets/companies/hbk.png",
  },
  { id: 6, name: "Ooredoo", icon: "🏥", logo: "/assets/companies/ooredoo.png" },
  { id: 7, name: "QDVC", icon: "🎓", logo: "/assets/companies/qdvc.png" },
  {
    id: 8,
    name: "Samsung Engineering",
    icon: "🏪",
    logo: "/assets/companies/samsung.png",
  },
  { id: 9, name: "Siemens", icon: "🏪", logo: "/assets/companies/siemens.png" },
  {
    id: 10,
    name: "UCC - UrbaCon Trading & Contracting",
    icon: "🏪",
    logo: "/assets/companies/ucc.png",
  },
];

const PartnersSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

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

      // Infinite slider animation
      if (sliderRef.current) {
        const slider = sliderRef.current;
        const slideWidth = slider.scrollWidth / 2;

        gsap.to(slider, {
          x: -slideWidth,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-12">
          <div ref={titleRef}>
            <h6 className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6">
              Top Partners
            </h6>
            <h2 className="text-5xl max-lg:text-3xl font-bold text-white mb-6 leading-tight">
              Trusted{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                By Leading Organizations
              </span>
            </h2>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Partnering with industry leaders across the region{" "}
          </p>
        </div>

        {/* Infinite slider */}
        <div className="relative overflow-hidden">
          <div ref={sliderRef} className="flex gap-6">
            {/* First set of logos */}
            {partners.map((partner) => (
              <div
                key={`first-${partner.id}`}
                className="shrink-0 w-48 group"
              >
                <div className="relative bg-linear-to-br bg-white backdrop-blur-xl p-6 rounded-xl border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center min-h-32 aspect-square">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for infinite loop */}
            {partners.map((partner) => (
              <div
                key={`second-${partner.id}`}
                className="shrink-0 w-48 group"
              >
                <div className="relative bg-linear-to-br bg-white backdrop-blur-xl p-6 rounded-xl border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 flex items-center justify-center min-h-32 aspect-square">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={200}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
