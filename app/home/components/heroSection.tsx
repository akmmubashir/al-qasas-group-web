/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
import { useLocationStore } from "@/app/store/locationStore";
import locationConfig from "@/app/utils/data/locationConfig.json";

gsap.registerPlugin();

const allSlides = [
  {
    video: "/assets/video/hero-1.mp4",
    heading: "AL QASAS Group of Companies: Qatar & Saudi Arabia",
    body: "Comprehensive manpower supply, architectural partition systems, and workforce transportation services designed to meet the evolving demands of businesses operating across Saudi Arabia, Qatar, and the UAE.",
    ctaLabel: "View Services",
    ctaPath: "/services",
    serviceSlug: null,
    locations: ["Qatar", "Saudi Arabia", "UAE"],
  },
  {
    video: "/assets/video/hero-2.mp4",
    heading:
      "Manpower & Project Support Services, Your Trusted Manpower Partner",
    body: "Oil & Gas ( Onshore & Project Support) | Construction & Infrastructure | Interior Fit-Out & Specialized Works",
    ctaLabel: "Know More",
    ctaPath: "/services/project-support",
    serviceSlug: "project-support",
    locations: ["Qatar", "Saudi Arabia", "UAE"],
  },
  {
    video: "/assets/video/hero-3.mp4",
    heading: "Trusted Across the Gulf Region for Project Excellence",
    body: "Serving Qatar and Saudi Arabia with reliable partnerships, certified teams, and resilient supply chain expertise.",
    ctaLabel: "Explore More",
    ctaPath: "/services/corporate-services",
    serviceSlug: "corporate-services",
    locations: ["Qatar", "Saudi Arabia"],
  },
  {
    video: "/assets/video/hero-4.mp4",
    heading: "Transportation services tailored for Qatar & Saudi Arabia",
    body: "Transportation services tailored for Qatar & Saudi Arabia's ensuring efficient and reliable delivery solutions.",
    ctaLabel: "Know More",
    ctaPath: "/services/transportation",
    serviceSlug: "transportation",
    locations: ["Qatar", "Saudi Arabia"],
  },
  {
    video: "/assets/video/hero-5.mp4",
    heading:
      "Al Qasas Systems: Pioneering IT Solutions in Qatar & Saudi Arabia",
    body: "Delivering cutting-edge technology solutions tailored to empower businesses across Qatar and Saudi Arabia.",
    ctaLabel: "Explore More",
    ctaPath: "/services/it-solutions",
    serviceSlug: "it-solutions",
    locations: ["Qatar", "Saudi Arabia"],
  },
  // {
  //   video: "/assets/video/hero-3.mp4",
  //   heading: "Trusted Across the Gulf Region for Project Excellence",
  //   body: "Serving Qatar and Saudi Arabia with reliable partnerships, certified teams, and resilient supply chain expertise.",
  //   ctaLabel: "Contact Us",
  //   ctaHref: "/contact",
  // },
];

const SLIDE_DURATION_MS = 8000;

const HeroSection = () => {
  const { selectedLocation } = useLocationStore();
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaTopRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaBottomRef = useRef<HTMLDivElement>(null);
  const indicatorsRef = useRef<HTMLDivElement>(null);

  // Filter slides based on selected country's available services
  const slides = useMemo(() => {
    const countryConfig =
      locationConfig[selectedLocation.code as keyof typeof locationConfig];
    if (!countryConfig) return allSlides;

    return allSlides.filter((slide) => {
      // Always show the general services slide
      if (!slide.serviceSlug) return true;
      // Check if service is available in selected country
      return countryConfig.services.hasOwnProperty(slide.serviceSlug);
    });
  }, [selectedLocation.code]);

  // Build location-aware CTA href
  const getCtaHref = (ctaPath: string) => {
    return `/${selectedLocation.code.toLowerCase()}${ctaPath}`;
  };

  // Compute available locations for each slide dynamically
  const getAvailableLocations = (serviceSlug: string | null) => {
    if (!serviceSlug) {
      // General services slide - show all locations
      return ["Saudi Arabia", "Qatar", "UAE"];
    }

    const availableIn: string[] = [];
    const locationMap: Record<string, string> = {
      SA: "Saudi Arabia",
      QA: "Qatar",
      AE: "UAE",
    };

    Object.entries(locationConfig).forEach(([code, config]) => {
      if (config.services.hasOwnProperty(serviceSlug)) {
        availableIn.push(locationMap[code] || code);
      }
    });

    return availableIn;
  };

  // Reset current index when slides change to prevent out of bounds
  useEffect(() => {
    if (current >= slides.length && slides.length > 0) {
      setCurrent(0);
    }
  }, [slides.length, current]);

  const slide = slides[current];

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (slides.length === 0) return; // Prevent division by zero
    timerRef.current = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION_MS);
  };

  useEffect(() => {
    if (slides.length > 0) {
      resetTimer();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length]); // Update timer when slides change

  // Initial load animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      // Badge animation
      timeline.fromTo(
        badgeRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      );

      // Heading animation
      timeline.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.4",
      );

      // Top CTA animation
      timeline.fromTo(
        ctaTopRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "back.out(1.5)" },
        "-=0.5",
      );

      // Description animation
      timeline.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4",
      );

      // Bottom CTA animation
      timeline.fromTo(
        ctaBottomRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.8, ease: "back.out(1.5)" },
        "-=0.6",
      );

      // Indicators animation
      timeline.fromTo(
        indicatorsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4",
      );
    });

    return () => ctx.revert();
  }, []);

  // Re-animate content on slide change
  useEffect(() => {
    if (current === 0) return; // Skip for initial slide

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      // Animate heading
      timeline.fromTo(
        headingRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
      );

      // Animate top CTA
      timeline.fromTo(
        ctaTopRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
        "-=0.4",
      );

      // Animate description
      timeline.fromTo(
        descriptionRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.6",
      );

      // Animate bottom CTA
      timeline.fromTo(
        ctaBottomRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.5)" },
        "-=0.6",
      );
    });

    return () => ctx.revert();
  }, [current]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) {
        try {
          v.currentTime = 0;
          const p = v.play();
          if (p && typeof p.then === "function") p.catch(() => {});
        } catch {}
      } else {
        try {
          v.pause();
        } catch {}
      }
    });
  }, [current]);

  // Return early if no slide available (after all hooks)
  if (!slide) {
    return null;
  }

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      {/* Background Videos */}
      <div className="absolute inset-0">
        {slides.map(({ heading, video }, i) => (
          <video
            key={heading}
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${i === current ? "opacity-100" : "opacity-0"}`}
            muted
            playsInline
            loop
            preload="auto"
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-[120px_80px_60px] max-xl:p-[120px_40px_60px] max-lg:p-[120px_20px_50px]">
        <div className="w-full flex flex-col gap-4 max-lg:mt-auto max-lg:mb-2n lg:my-auto">
          <div
            ref={badgeRef}
            className="w-fit inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 border border-white/30 rounded-full"
          >
            <div className="w-2 h-2 bg-[#0D72B6] rounded-full animate-pulse" />
            <span className="text-white text-sm font-medium tracking-wide uppercase">
              {(() => {
                const availableLocations = getAvailableLocations(
                  slide.serviceSlug,
                );
                return availableLocations.length > 2
                  ? `${availableLocations.slice(0, -1).join(", ")} & ${availableLocations[availableLocations.length - 1]}`
                  : availableLocations.join(" & ");
              })()}
            </span>
          </div>
          <h1
            ref={headingRef}
            className="text-white font-medium w-3/5 max-2xl:w-4/5 max-lg:w-full text-[60px] max-xl:text-[50px] max-lg:text-[36px] max-md:text-[26px]"
          >
            {slide.heading}
          </h1>

          {/* CTA Buttons */}
          <div
            ref={ctaTopRef}
            className="flex flex-wrap gap-4 max-md:gap-3 max-lg:hidden"
          >
            <Link
              href={getCtaHref(slide.ctaPath)}
              className="cursor-pointer group px-8 py-4 max-md:px-5 max-md:py-3 bg-white border border-white/90 text-black text-[15px] font-bold hover:bg-white/80 hover:border-white/20 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                {slide.ctaLabel}
                <svg
                  className="w-5 h-5 group-hover:rotate-45 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full grid grid-cols-12 justify-end items-end">
          <div className="col-span-8 max-lg:col-span-full">
            <p
              ref={descriptionRef}
              className="text-gray-200 w-2/4 max-lg:w-full text-[20px] max-xl:text-[18px] max-lg:text-[16px] leading-relaxed mb-4"
            >
              {slide.body}
            </p>
          </div>
          <div className="col-span-4 max-lg:col-span-full">
            <div
              ref={ctaBottomRef}
              className="flex flex-wrap gap-4 max-md:gap-3 lg:hidden"
            >
              <Link
                href={getCtaHref(slide.ctaPath)}
                className="cursor-pointer group px-8 py-4 max-md:px-5 max-md:py-3 bg-white border border-white/90 text-black text-[15px] font-bold hover:bg-white/80 hover:border-white/20 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  {slide.ctaLabel}
                  <svg
                    className="w-5 h-5 group-hover:rotate-45 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            <div
              ref={indicatorsRef}
              className="flex justify-center gap-2 mt-6 max-md:mt-10"
            >
              {slides.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => {
                    setCurrent(i);
                    resetTimer();
                  }}
                  className={`cursor-pointer h-1 rounded-full transition-all duration-300 ${i === current ? "w-full bg-white" : "w-30 bg-white/60"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
