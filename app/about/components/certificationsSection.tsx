"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SubHeading from "@/app/components/subHeading";
import Heading from "@/app/components/heading";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    id: 1,
    title: "ISO 9001:2015",
    description: "Quality Management System",
    icon: "🏆",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 2,
    title: "ISO 14001:2015",
    description: "Environmental Management",
    icon: "🌱",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "OHSAS 18001",
    description: "Occupational Health & Safety",
    icon: "🛡️",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "ISO 45001:2018",
    description: "Health & Safety Management",
    icon: "✅",
    color: "from-purple-500 to-pink-500",
  },
];

const accreditations = [
  {
    id: 1,
    title: "Qatar Chamber of Commerce",
    description: "Registered Member",
  },
  {
    id: 2,
    title: "Dubai Chamber",
    description: "Certified Contractor",
  },
  {
    id: 3,
    title: "Ministry of Commerce",
    description: "Licensed Operator",
  },
  {
    id: 4,
    title: "Industry Safety Council",
    description: "Safety Excellence Award",
  },
];

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  const accredRef = useRef<HTMLDivElement>(null);

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

      // Certifications animation
      const certCards = certsRef.current?.querySelectorAll(".cert-card");
      if (certCards) {
        gsap.fromTo(
          certCards,
          { opacity: 0, scale: 0.8, rotateY: 90 },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            ease: "back.out(1.5)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: certsRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Accreditations animation
      const accredItems = accredRef.current?.querySelectorAll(".accred-item");
      if (accredItems) {
        gsap.fromTo(
          accredItems,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: accredRef.current,
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
    <section
      ref={sectionRef}
      className="relative bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-16">
          <div ref={titleRef}>
            <SubHeading title="Quality Assurance" dark />
            <Heading title1="Certifications &" title2="Accreditations" dark />
            <p className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Committed to maintaining the highest international standards of
              quality, safety, and environmental responsibility
            </p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div
          ref={certsRef}
          className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6 mb-16"
        >
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card group">
              <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 max-md:p-6 rounded-2xl border border-slate-700/50 group-hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 text-center h-full">
                {/* Icon with gradient background */}
                <div className="mb-6">
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-linear-to-br ${cert.color} flex items-center justify-center text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    {cert.icon}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-[16px] max-xl:text-[16px] max-lg:text-[14px]">
                  {cert.description}
                </p>

                {/* Decorative element */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditations List */}
        <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 max-md:p-6">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Professional Accreditations
          </h3>
          <div
            ref={accredRef}
            className="grid grid-cols-2 max-md:grid-cols-1 gap-6"
          >
            {accreditations.map((accred) => (
              <div
                key={accred.id}
                className="accred-item flex items-start gap-4 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {accred.title}
                  </h4>
                  <p className="text-slate-400 text-[16px] max-xl:text-[16px] max-lg:text-[14px]">
                    {accred.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
