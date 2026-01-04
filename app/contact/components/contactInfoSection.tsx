"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const infoItems = [
  {
    title: "Call Us",
    value: "+974 4420 5500",
    note: "Sunday - Thursday, 8:00 AM - 6:00 PM",
    icon: "☎️",
  },
  {
    title: "Email",
    value: "info@alqasasgroup.com",
    note: "We reply within one business day",
    icon: "✉️",
  },
  {
    title: "Head Office",
    value: "Doha, Qatar",
    note: "Building 12, Industrial Area, Street 34",
    icon: "📍",
  },
  {
    title: "Business Hours",
    value: "Sun - Thu",
    note: "8:00 AM - 6:00 PM (GMT+3)",
    icon: "⏰",
  },
];

const ContactInfoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      const cards = cardsRef.current?.querySelectorAll(".contact-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "back.out(1.4)",
            stagger: 0.12,
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
      className="relative bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-14" ref={titleRef}>
          <h6 className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6">
            Contact Us
          </h6>
          <h2 className="text-5xl max-lg:text-3xl font-bold text-white mb-4 leading-tight">
            We are here to help
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reach out through any channel and our team will respond promptly
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6"
        >
          {infoItems.map((item) => (
            <div
              key={item.title}
              className="contact-card group relative overflow-hidden bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-cyan-200 font-medium">{item.value}</p>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
