"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Heading from "@/app/components/heading";

gsap.registerPlugin(ScrollTrigger);

// const stats = [
//   { label: "Years of Experience", value: "10+", icon: "📅" },
//   { label: "Satisfied Clients", value: "500+", icon: "😊" },
//   { label: "Projects Completed", value: "1000+", icon: "✅" },
//   { label: "Countries Serving", value: "2", icon: "🌍" },
// ];

const stats = [
  { label: "Projects delivered", value: "160+" },
  { label: "On-time performance", value: "95%" },
  { label: "Repeat clients", value: "82%" },
  { label: "Countries active", value: "Qatar • KSA" },
];

const pillars = [
  {
    id: 1,
    title: "Engineering-first delivery",
    description:
      "Method statements, constructability reviews, and field supervision sit under one roof for faster, safer builds.",
  },
  {
    id: 2,
    title: "HSE and quality discipline",
    description:
      "ISO 9001 and OHSAS 18001 frameworks guide every site; zero-compromise safety culture with live audits.",
  },
  {
    id: 3,
    title: "Supply chain certainty",
    description:
      "A Gulf-wide partner network keeps critical materials moving so schedules stay intact.",
  },
  {
    id: 4,
    title: "Innovation in the field",
    description:
      "Data-led progress tracking, modern equipment, and rapid-deploy crews to shorten critical paths.",
  },
];

const deliveryRhythm = [
  {
    id: "discover",
    title: "Discover",
    detail:
      "Site reconnaissance, risk mapping, and clear scope handshake with stakeholders.",
  },
  {
    id: "engineer",
    title: "Engineer",
    detail:
      "Sequencing, constructability checks, and procurement lock-ins to derisk execution.",
  },
  {
    id: "deliver",
    title: "Deliver",
    detail:
      "On-site orchestration with QA/QC gates, transparent reporting, and closeout readiness.",
  },
];

const CompanyOverviewSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const rhythmRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - smooth fade and rise
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        },
      );

      // Content animation - smooth slide from left
      gsap.fromTo(
        introRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.3,
          delay: 0.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        },
      );

      // Image animation - smooth fade and scale
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 60, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.3,
          delay: 0.35,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
            toggleActions: "play none none none",
          },
        },
      );

      // Stats animation - smooth stagger with bounce
      const statCards = statsRef.current?.querySelectorAll(".stat-card");
      if (statCards) {
        gsap.fromTo(
          statCards,
          { opacity: 0, y: 40, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            stagger: 0.12,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Pillars animation - smooth cascade effect
      const pillarCards = pillarsRef.current?.querySelectorAll(".pillar-card");
      if (pillarCards) {
        gsap.fromTo(
          pillarCards,
          { opacity: 0, y: 50, rotateX: -10 },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.9,
            ease: "expo.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Delivery rhythm animation - smooth sequential appear
      const rhythmCards = rhythmRef.current?.querySelectorAll(".rhythm-card");
      if (rhythmCards) {
        gsap.fromTo(
          rhythmCards,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: rhythmRef.current,
              start: "top 80%",
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
      className="relative overflow-hidden bg-white text-slate-900"
    >
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.05),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_30%)]"></div>
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl"></div>
      <div className="absolute -left-24 -bottom-32 h-96 w-96 rounded-full bg-blue-100/30 blur-3xl"></div>

      <div className="relative z-10 p-20 max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_18px]">
        <div className="flex flex-col gap-6 text-center mb-12" ref={titleRef}>
          <Heading title1="Building Excellence Since" title2="2014" />
          <p className="mx-auto max-w-4xl text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-slate-600 leading-relaxed">
            An engineering-led contracting and trading partner delivering
            high-stakes projects across Qatar and Saudi Arabia with rigor,
            speed, and uncompromised safety.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-10 max-xl:gap-8 max-lg:grid-cols-1 mb-16">
          <div
            className="col-span-7 max-lg:col-span-12 space-y-6"
            ref={introRef}
          >
            <div className="rounded-2xl bg-linear-to-br from-slate-50 to-white border border-slate-200/60 p-8 shadow-lg hover:shadow-xl transition-all duration-500 backdrop-blur-sm">
              <div className="space-y-4">
                <p className="text-[16px] max-lg:text-[14px] text-slate-700 leading-relaxed font-medium">
                  Al-Qasas Group for Contracting and Trading W.L.L. is a
                  multi-discipline partner spanning engineering, construction,
                  and supply. We combine field-seasoned crews, heavy equipment,
                  and disciplined project controls to keep complex builds on
                  track.
                </p>
                <p className="text-[16px] max-lg:text-[14px] text-slate-600 leading-relaxed">
                  From oil and gas facilities to industrial infrastructure, we
                  operate with a single playbook: plan precisely, build safely,
                  communicate transparently, and hand over ready on day one.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 max-sm:grid-cols-1 gap-4 text-left">
                <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-cyan-50/50">
                  <div className="h-3 w-3 rounded-full bg-linear-to-br from-cyan-500 to-cyan-600 mt-2 shadow-md"></div>
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    Integrated teams across Qatar and KSA for fast mobilization.
                  </p>
                </div>
                <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-blue-50/50">
                  <div className="h-3 w-3 rounded-full bg-linear-to-br from-blue-500 to-blue-600 mt-2 shadow-md"></div>
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    Digital progress tracking and QA/QC checkpoints each phase.
                  </p>
                </div>
                <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-cyan-50/50">
                  <div className="h-3 w-3 rounded-full bg-linear-to-br from-cyan-500 to-cyan-600 mt-2 shadow-md"></div>
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    Heavy equipment fleet with in-house maintenance for uptime.
                  </p>
                </div>
                <div className="group flex items-start gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-blue-50/50">
                  <div className="h-3 w-3 rounded-full bg-linear-to-br from-blue-500 to-blue-600 mt-2 shadow-md"></div>
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    Procurement muscle backed by long-term supplier alliances.
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={pillarsRef}
              className="grid grid-cols-2 max-md:grid-cols-1 gap-5"
            >
              {pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="pillar-card group relative overflow-hidden rounded-xl border border-slate-200/60 bg-linear-to-br from-white via-slate-50 to-slate-100 p-6 transition-all duration-500 hover:border-cyan-400/80 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-50 to-blue-50 transition-all duration-500"></div>
                  <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-cyan-100 to-transparent opacity-0 group-hover:opacity-50 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150"></div>
                  <div className="relative">
                    <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors duration-300">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-5 max-lg:col-span-12" ref={imageRef}>
            <div className="relative h-full rounded-2xl overflow-hidden border border-slate-200/60 bg-white shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <Image
                src="/assets/images/corporate.webp"
                alt="Al-Qasas Group field operations"
                width={640}
                height={800}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-900/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 grid grid-cols-2 gap-3 text-left">
                <div className="rounded-lg border border-white/20 bg-white/90 backdrop-blur-md p-4 shadow-lg transform group-hover:-translate-y-1 transition-all duration-500">
                  <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-2">
                    Founded
                  </p>
                  <p className="text-4xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    2014
                  </p>
                  <p className="text-xs text-slate-600 mt-1">Doha, Qatar</p>
                </div>
                <div className="rounded-lg border border-white/20 bg-white/90 backdrop-blur-md p-4 shadow-lg transform group-hover:-translate-y-1 transition-all duration-500 delay-75">
                  <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-2">
                    Field footprint
                  </p>
                  <p className="text-sm font-bold text-cyan-600 leading-tight">
                    Qatar
                    <br />
                    &amp; KSA
                  </p>
                  <p className="text-xs text-slate-600 mt-1">Multi-sector</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          ref={statsRef}
          className="grid grid-cols-4 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-5 mb-16"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card group relative overflow-hidden rounded-xl border border-slate-200/60 bg-linear-to-br from-slate-50 via-white to-slate-50 p-7 transition-all duration-500 hover:border-cyan-400/80 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-50/50 to-blue-50/50 transition-all duration-500"></div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-cyan-200 to-transparent opacity-0 group-hover:opacity-20 rounded-full blur-3xl transition-all duration-500"></div>
              <div className="relative">
                <p className="text-xs uppercase tracking-widest font-bold text-slate-500 group-hover:text-cyan-600 transition-colors duration-300 mb-3">
                  {stat.label}
                </p>
                <p className="text-4xl font-bold bg-linear-to-r from-slate-900 to-slate-700 group-hover:from-cyan-600 group-hover:to-blue-600 bg-clip-text text-transparent transition-all duration-300">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          ref={rhythmRef}
          className="rounded-2xl border border-slate-200/60 bg-linear-to-br from-slate-50 via-white to-slate-50 p-10 shadow-lg hover:shadow-xl transition-all duration-500"
        >
          <div className="flex flex-col gap-4 max-w-3xl mb-8">
            <div className="inline-flex items-center gap-3 w-fit">
              <div className="w-1 h-6 bg-linear-to-b from-cyan-500 to-blue-600 rounded-full"></div>
              <p className="text-xs uppercase tracking-widest font-bold text-cyan-600">
                Delivery Process
              </p>
            </div>
            <h3 className="text-3xl font-bold text-slate-900">
              A seamless delivery rhythm designed to stay ahead of risk
            </h3>
            <p className="text-base text-slate-600 leading-relaxed">
              From the first briefing to closeout, every phase is sequenced with
              QA/QC gates and transparent reporting so owners always know where
              time and cost stand.
            </p>
          </div>
          <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-6">
            {deliveryRhythm.map((item, index) => (
              <div
                key={item.id}
                className="rhythm-card group relative overflow-hidden rounded-xl border border-slate-200/60 bg-white p-6 transition-all duration-500 hover:border-cyan-400/80 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-cyan-50 to-blue-50 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-cyan-100 to-transparent opacity-0 group-hover:opacity-30 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150"></div>
                <div className="relative flex items-start gap-4">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-sm font-bold text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-widest font-bold text-slate-500 group-hover:text-cyan-600 transition-colors">
                      {item.id}
                    </p>
                    <h4 className="text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;
