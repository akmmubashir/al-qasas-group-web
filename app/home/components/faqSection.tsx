"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/app/components/heading";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    id: 1,
    question: "What services does Al-Qasas Trading & Contracting provide?",
    answer:
      "We offer comprehensive solutions including movable partition systems, ironmongeries, project support, transportation and logistics, corporate services, and IT solutions. Our services are tailored to meet the unique needs of businesses across Qatar and Saudi Arabia.",
  },
  {
    id: 2,
    question: "In which regions do you operate?",
    answer:
      "We primarily operate in Qatar and Saudi Arabia, serving major cities including Doha, Riyadh, Jeddah, and Dammam. Our extensive network allows us to deliver services efficiently across both countries.",
  },
  {
    id: 3,
    question: "How long does a typical project take to complete?",
    answer:
      "Project timelines vary depending on scope and complexity. Small-scale installations may take 2-4 weeks, while larger projects can extend to several months. We provide detailed project timelines during our consultation phase.",
  },
  {
    id: 4,
    question: "Do you provide maintenance and after-sales support?",
    answer:
      "Yes, we offer comprehensive maintenance packages and after-sales support for all our installations. Our team is available 24/7 to address any concerns and ensure optimal performance of our solutions.",
  },
  {
    id: 5,
    question:
      "Are your products and services compliant with local regulations?",
    answer:
      "Absolutely. All our products and services meet international standards and comply with local regulations in both Qatar and Saudi Arabia. We prioritize safety, quality, and regulatory compliance in every project.",
  },
  {
    id: 6,
    question: "How can I request a consultation or quote?",
    answer:
      "You can contact us through our website, email us at info@alqasas.com, or call us at +974 4412 3456. Our team will respond within 24 hours to schedule a consultation and provide a detailed quote.",
  },
];

const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const faqsRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<number | null>(1);

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

      // FAQs animation
      const faqItems = faqsRef.current?.querySelectorAll(".faq-item");
      if (faqItems) {
        gsap.fromTo(
          faqItems,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: faqsRef.current,
              start: "top 65%",
              toggleActions: "play none none none",
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-linear-to-br from-white via-slate-50 to-blue-50 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-16">
          <div ref={titleRef}>
            <Heading title1="Frequently Asked" title2="Questions" />
          </div>
          <p
            ref={subtitleRef}
            className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Find answers to common questions about our services and process
          </p>
        </div>

        <div ref={faqsRef} className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item group">
              <div
                className={`bg-linear-to-br from-white to-blue-50/50 backdrop-blur-xl border transition-all duration-300 overflow-hidden ${openId === faq.id
                    ? "border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                    : "border-blue-200/50 hover:border-cyan-500/30"
                  }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="cursor-pointer w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-cyan-500/5 transition-colors duration-300"
                >
                  <span className="font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-cyan-500 shrink-0 transition-transform duration-300 ${openId === faq.id ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out ${openId === faq.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-cyan-500/10">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        {/* <div className="mt-12 text-center p-8 bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-slate-600 mb-6">
            Our team is here to help. Contact us for personalized assistance.
          </p>
          <button className="cursor-pointer group relative px-8 py-4 bg-linear-to-r from-[#0D72B6] to-blue-500 text-white text-[15px] font-bold overflow-hidden hover:shadow-2xl hover:shadow-[#0D72B6]/40 transition-all duration-300 hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Contact Support
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FAQSection;
