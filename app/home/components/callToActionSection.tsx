"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CallToActionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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

      // Description animation
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
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

      // Buttons animation
      const buttons = buttonsRef.current?.querySelectorAll(".cta-button");
      if (buttons) {
        gsap.fromTo(
          buttons,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "back.out(1.5)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: buttonsRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }

      // Contact info animation
      const contactItems =
        contactRef.current?.querySelectorAll(".contact-item");
      if (contactItems) {
        gsap.fromTo(
          contactItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: {
              trigger: contactRef.current,
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
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-12">
          <div ref={titleRef}>
            <h2 className="text-5xl max-lg:text-3xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your{" "}
              <span className="bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Business?
              </span>
            </h2>
          </div>
          <p
            ref={descriptionRef}
            className="text-lg max-lg:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Partner with Al-Qasas – Trading & Contracting for innovative
            solutions that drive growth, efficiency, and success. Let&apos;s
            discuss how we can support your business objectives.
          </p>
        </div>

        <div
          ref={buttonsRef}
          className="flex flex-wrap gap-4 justify-center items-center mb-16"
        >
          <button className="cursor-pointer cta-button group relative px-8 py-4 max-md:px-4 max-md:py-3 font-semibold text-lg max-md:text-[16px] overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-400 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative text-white flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
              Request a Consultation
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>

          <button className="cursor-pointer cta-button group relative px-8 py-4 max-md:px-4 max-md:py-3 font-semibold text-lg max-md:text-[16px] overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative text-black flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
              Contact Our Team
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>

          {/* <button className="cursor-pointer  cta-button group relative px-8 py-4 max-md:px-4 max-md:py-3 font-semibold text-lg max-md:text-[16px] overflow-hidden">
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative text-white group-hover:text-blue-950 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
              Contact Our Team
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button> */}

          <button className="cursor-pointer cta-button group relative px-8 py-4 max-md:px-4 max-md:py-3 font-semibold text-lg max-md:text-[16px] overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:border-transparent transition-all duration-300"></div>
            <span className="relative text-cyan-300 group-hover:text-white transition-colors duration-300 flex items-center gap-2 group-hover:gap-3">
              Get a Quote
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-center text-slate-400 mb-8">
            We&apos;re available for inquiries 24/7
          </p>
          <div
            ref={contactRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="contact-item group text-center">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 group-hover:scale-110 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-400 mb-2">Email</p>
              <a
                href="mailto:info@alqasas.com"
                className="text-lg font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                info@alqasas.com
              </a>
            </div>
            <div className="contact-item group text-center">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 group-hover:scale-110 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-400 mb-2">Phone</p>
              <a
                href="tel:+97444123456"
                className="text-lg font-semibold text-cyan-300 hover:text-cyan-200 transition-colors"
              >
                +974 4412 3456
              </a>
            </div>
            <div className="contact-item group text-center">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mx-auto mb-3 group-hover:from-cyan-500/40 group-hover:to-blue-500/40 group-hover:scale-110 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-cyan-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-400 mb-2">Address</p>
              <p className="text-lg font-semibold text-white">
                Doha, Qatar & Riyadh, Saudi Arabia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
