"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Roboto_Mono } from "next/font/google";
import gsap from "gsap";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const HeroSection = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate background with slight zoom
      gsap.fromTo(
        bgRef.current,
        { scale: 1.05, opacity: 0.8 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" },
      );

      // Animate title with fade-in and slide-up
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 },
      );

      // Animate subtitle with fade-in and slide-up
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.4 },
      );

      // Animate description with fade-in and slide-up
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.6 },
      );

      // Animate buttons with fade-in and slide-up
      gsap.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.8 },
      );

      // Animate images grid with stagger effect
      if (imagesRef.current) {
        gsap.fromTo(
          imagesRef.current.querySelectorAll("div"),
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out",
            delay: 1,
            stagger: 0.1,
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="relative bg-white">
      {/* Background layer with grayscale filter */}
      <div
        ref={bgRef}
        aria-hidden
        className="absolute inset-0 bg-no-repeat bg-cover bg-center z-10"
        style={{
          backgroundImage: "url(/assets/common/hero-image.webp)",
          filter: "brightness(90%)",
        }}
      />
      {/* Gradient overlay below content */}
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/90 via-black/0 to-transparent pointer-events-none" />
      <div className="relative min-h-dvh z-20 max-w-300 mx-auto p-[160px_0px_80px] max-xl:p-[140px_40px_70px] max-lg:p-[120px_20px_60px] w-full flex flex-col gap-10 max-lg:gap-6">
        <h1
          ref={titleRef}
          className={`text-white text-center max-lg:text-left font-bold text-[80px] max-xl:text-[62px] max-lg:text-[40px] max-md:text-[32px] leading-tight ${robotoMono.className}`}
        >
          Integrated Trading, Contracting & Business Solutions
        </h1>
        <div className="flex flex-col gap-6 max-lg:gap-4">
          <h2
            ref={subtitleRef}
            className="text-[32px] max-xl:text-[28px] max-lg:text-[20px] text-white font-medium"
          >
            Delivering reliable engineering, operational, corporate, and
            technology services across Qatar and Saudi Arabia.
          </h2>
          <p
            ref={descRef}
            className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-white"
          >
            Al-Qasas – Trading & Contracting is a diversified solutions provider
            offering movable partition systems, project support, transportation,
            corporate services, and IT solutions—built on quality, compliance,
            and operational excellence.
          </p>
          <div
            ref={buttonsRef}
            className="flex justify-center max-lg:justify-start w-full"
          >
            <div className="flex flex-wrap gap-4">
              <button className="bg-white/20 text-white hover:bg-white hover:text-[#2a2a2a] text-[18px] max-xl:text-[16px] max-lg:text-[14px] font-medium cursor-pointer p-4 max-lg:p-3">
                Request a Consultation
              </button>
              <button className="bg-white text-[#0D72B6] hover:bg-[#0D72B6]/80 hover:text-white text-[18px] max-xl:text-[16px] max-lg:text-[14px] font-medium cursor-pointer p-4 max-lg:p-3">
                Explore Our Services
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-full rounded-[40px] max-lg:rounded-2xl overflow-hidden mt-5 grid grid-cols-12 "
          ref={imagesRef}
        >
          <div className="col-span-6 overflow-hidden">
            <Image
              src="/assets/images/movableitems.webp"
              alt="Hero Image"
              width={800}
              height={400}
              className="w-full h-full hover:scale-103 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-span-6 overflow-hidden">
            <Image
              src="/assets/images/it-solution.webp"
              alt="Hero Image"
              width={800}
              height={400}
              className="w-full h-full hover:scale-103 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-span-4 overflow-hidden">
            <Image
              src="/assets/images/corporate.webp"
              alt="Hero Image"
              width={800}
              height={400}
              className="w-full h-full hover:scale-103 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-span-4 overflow-hidden">
            <Image
              src="/assets/images/mov.webp"
              alt="Hero Image"
              width={800}
              height={400}
              className="w-full h-full hover:scale-103 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="col-span-4 overflow-hidden">
            <Image
              src="/assets/images/transportation.webp"
              alt="Hero Image"
              width={800}
              height={400}
              className="w-full h-full hover:scale-103 transition-transform duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
