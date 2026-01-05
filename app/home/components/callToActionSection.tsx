"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/app/components/heading";

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
      className="relative bg-linear-to-b from-blue-100 to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-12">
          <div ref={titleRef}>
            <Heading title1="Ready to Transform Your" title2="Business?" />
          </div>
          <p
            ref={descriptionRef}
            className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] max-lg:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Partner with Al-Qasas – Trading & Contracting for innovative
            solutions that drive growth, efficiency, and success. Let&apos;s
            discuss how we can support your business objectives.
          </p>
        </div>

        <div
          ref={buttonsRef}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <button className="cursor-pointer cta-button group relative px-8 py-4 max-md:px-4 max-md:py-3 font-semibold text-lg max-md:text-[16px] overflow-hidden rounded-full">
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

          <button className="cursor-pointer cta-button group relative px-8 py-4 max-md:px-4 max-md:py-3 font-semibold text-lg max-md:text-[16px] overflow-hidden rounded-full shadow-lg">
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
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
