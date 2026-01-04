"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offices = [
  {
    city: "Doha",
    country: "Qatar",
    address: "Building 12, Industrial Area, Street 34",
    phone: "+974 4420 5500",
    email: "doha@alqasasgroup.com",
    hours: "Sun - Thu, 8:00 AM - 6:00 PM",
  },
  {
    city: "Dubai",
    country: "UAE",
    address: "Level 14, Sheikh Zayed Road",
    phone: "+971 4 305 5000",
    email: "dubai@alqasasgroup.com",
    hours: "Sun - Thu, 9:00 AM - 6:00 PM",
  },
  {
    city: "Lusail",
    country: "Qatar",
    address: "Marina District, Tower 5",
    phone: "+974 4420 5510",
    email: "lusail@alqasasgroup.com",
    hours: "Sun - Thu, 8:00 AM - 6:00 PM",
  },
];

const OfficesSection = () => {
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

      const cards = cardsRef.current?.querySelectorAll(".office-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.4)",
            stagger: 0.15,
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-14" ref={titleRef}>
          <h6 className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6">
            Our Offices
          </h6>
          <h2 className="text-5xl max-lg:text-3xl font-bold text-white mb-4 leading-tight">
            Visit our locations
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Meet with our consultants in Qatar and the UAE
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-6"
        >
          {offices.map((office) => (
            <div
              key={office.city}
              className="office-card group relative overflow-hidden bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">
                      {office.country}
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      {office.city}
                    </h3>
                  </div>
                  <span className="text-xl">📍</span>
                </div>

                <p className="text-slate-200 leading-relaxed">
                  {office.address}
                </p>

                <div className="space-y-2 text-sm text-slate-200">
                  <p>
                    <span className="text-cyan-200">Phone:</span> {office.phone}
                  </p>
                  <p>
                    <span className="text-cyan-200">Email:</span> {office.email}
                  </p>
                  <p>
                    <span className="text-cyan-200">Hours:</span> {office.hours}
                  </p>
                </div>

                <div className="pt-2 flex gap-3">
                  <a
                    href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                    className="px-4 py-2 rounded-full bg-white text-slate-900 font-semibold shadow hover:-translate-y-0.5 transition"
                  >
                    Call
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="px-4 py-2 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
                  >
                    Email
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
