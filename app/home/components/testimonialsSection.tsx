"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { QuoteIcon } from "@/app/components/icons";
import Heading from "@/app/components/heading";
import SubHeading from "@/app/components/subHeading";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Mansoori",
    position: "CEO, Al-Mansoori Construction",
    company: "Qatar",
    content:
      "Al-Qasas has been instrumental in delivering our partition systems on time and within budget. Their attention to detail and commitment to quality is unmatched in the region.",
    rating: 5,
    image: "👨‍💼",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Operations Director",
    company: "Doha Hospitality Group",
    content:
      "Working with Al-Qasas transformed our project timeline. Their expertise in corporate services and project support made a significant difference to our success.",
    rating: 5,
    image: "👩‍💼",
  },
  {
    id: 3,
    name: "Mohammed Al-Rashid",
    position: "Project Manager",
    company: "Saudi Development Corp",
    content:
      "The IT solutions provided by Al-Qasas have streamlined our operations significantly. Their team is professional, responsive, and delivers exceptional results.",
    rating: 5,
    image: "👨‍💻",
  },
  {
    id: 4,
    name: "Fatima Al-Khalifa",
    position: "Facilities Manager",
    company: "Qatar Medical Center",
    content:
      "Al-Qasas understanding of healthcare industry needs and compliance requirements is outstanding. They delivered beyond our expectations.",
    rating: 5,
    image: "👩‍⚕️",
  },
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
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

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll(".testimonial-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 65%",
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
      className="relative bg-linear-to-br from-white via-slate-50 to-blue-50 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-16">
          <div ref={titleRef}>
            <SubHeading title="Client Success Stories" />
            <Heading title1="What Our" title2="Clients Say" />
          </div>
          <p
            ref={subtitleRef}
            className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Trusted by leading organizations across Qatar and Saudi Arabia
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card group relative"
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>

              {/* Card content */}
              <div className="relative bg-linear-to-br from-white to-blue-50/50 backdrop-blur-xl p-6 rounded-2xl border border-blue-200/50 group-hover:border-cyan-500/50 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  {/* Rating stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote icon */}
                  <div className="text-4xl text-cyan-500/20 mb-3 group-hover:text-cyan-500/40 transition-colors">
                    <QuoteIcon size="w-6 h-6" color="fill-[#244952]" />
                  </div>
                </div>
                {/* Content */}
                <p className="text-slate-700 leading-relaxed text-sm mb-6 flex-1">
                  {testimonial.content}
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200/50">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {/* {testimonial.image} */}
                    <span className="text-[#2a2a2a] text-[18px] font-medium">
                      {testimonial.name.charAt(0) +
                        testimonial.name.split(" ")[1].charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {testimonial.position}
                    </p>
                    <p className="text-xs text-cyan-600">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
