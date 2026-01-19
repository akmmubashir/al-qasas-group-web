"use client";
import React, { useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocationStore } from "@/app/store/locationStore";
import locationConfig from "@/app/utils/data/locationConfig.json";

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const { selectedLocation } = useLocationStore();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  // Get location-specific services from JSON
  const services = useMemo(() => {
    const countryConfig =
      locationConfig[selectedLocation.code as keyof typeof locationConfig];
    if (!countryConfig) return [];

    return Object.entries(countryConfig.services).map(
      ([slug, service], index) => ({
        id: index + 1,
        title: service.title,
        description: service.subtitle,
        img: service.image,
        slug: slug,
      }),
    );
  }, [selectedLocation.code]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate service cards
      const serviceCards = cardsRef.current?.querySelectorAll(".service-card");

      if (serviceCards) {
        serviceCards.forEach((card, index) => {
          const image = card.querySelector(".service-image");
          const content = card.querySelector(".service-content");
          const title = card.querySelector(".service-title");
          const description = card.querySelector(".service-description");
          const cta = card.querySelector(".service-cta");

          // Card entrance animation
          gsap.fromTo(
            card,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            },
          );

          // Image animation - slide and scale
          if (image) {
            gsap.fromTo(
              image,
              {
                opacity: 0,
                x: index % 2 === 0 ? -60 : 60,
                scale: 1.1,
              },
              {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 75%",
                  toggleActions: "play none none none",
                },
              },
            );
          }

          // Content animation - slide from opposite direction
          if (content) {
            gsap.fromTo(
              content,
              {
                opacity: 0,
                x: index % 2 === 0 ? 60 : -60,
              },
              {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 75%",
                  toggleActions: "play none none none",
                },
              },
            );
          }

          // Title animation
          if (title) {
            gsap.fromTo(
              title,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.4,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 75%",
                  toggleActions: "play none none none",
                },
              },
            );
          }

          // Description animation
          if (description) {
            gsap.fromTo(
              description,
              { opacity: 0, y: 20 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: card,
                  start: "top 75%",
                  toggleActions: "play none none none",
                },
              },
            );
          }

          // CTA animation
          if (cta) {
            gsap.fromTo(
              cta,
              { opacity: 0, x: -20 },
              {
                opacity: 1,
                x: 0,
                duration: 0.6,
                delay: 0.6,
                ease: "back.out(1.5)",
                scrollTrigger: {
                  trigger: card,
                  start: "top 75%",
                  toggleActions: "play none none none",
                },
              },
            );
          }
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0D72B6 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0D72B6]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />

      <div className="p-20 max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div
          ref={cardsRef}
          className="grid grid-cols-12 gap-25 max-xl:gap-20 max-lg:gap-12 max-md:gap-[40px_0]"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card col-span-full group grid grid-cols-12 items-center`}
            >
              <div
                className={`col-span-5 max-md:col-span-full ${index % 2 === 1 ? "order-2 max-md:order-1" : "order-1"}`}
              >
                <div className="service-image h-100 max-lg:h-80 max-md:h-60 relative overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.title + "service-image"}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    width={1000}
                    height={600}
                  />
                </div>
              </div>
              <div
                className={`service-content col-span-7 max-md:col-span-full bg-white p-30 max-xl:p-20 max-lg:p-10 max-md:p-[20px_0] flex flex-col justify-center h-full ${index % 2 === 1 ? "order-1 max-md:order-2" : "order-2"}`}
              >
                {/* Content */}
                <h3 className="service-title text-[36px] max-xl:text-[30px] max-lg:text-[26px] max-md:text-[22px] font-semibold text-[#0A0A0A] mb-3 group-hover:text-[#0D72B6] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="service-description text-gray-600 text-[18px] max-xl:text-[16px] max-md:text-[14px] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA Link */}
                <Link
                  href={`/${selectedLocation.code.toLowerCase()}/services/${service.slug}`}
                >
                  <div className="service-cta inline-flex items-center gap-2 text-[#0D72B6] font-semibold text-[18px] max-xl:text-[16px] max-md:text-[14px] hover:gap-3 transition-all duration-300">
                    <span>Explore Service</span>
                    <svg
                      className="w-5 h-5 hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
