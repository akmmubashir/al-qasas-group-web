"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Heading from "@/app/components/heading";

gsap.registerPlugin(ScrollTrigger);

interface ServiceContactFormProps {
  serviceName?: string;
}

const ServiceContactForm: React.FC<ServiceContactFormProps> = ({
  serviceName = "",
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.3,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Set submitted state
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      e.currentTarget.reset();
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-linear-to-b from-blue-100 to-white overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-12" ref={titleRef}>
          <Heading title1="Ready to Get" title2="Started?" />
          <p className="text-[18px] max-xl:text-[16px] max-md:text-[14px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {serviceName
              ? `Let's discuss how our ${serviceName} can meet your needs`
              : "Our team will get back to you within one business day"}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-xl p-8 max-md:p-6 space-y-6 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
          >
            {isSubmitted && (
              <div className="absolute inset-0 rounded-2xl bg-green-50 border border-green-300 flex items-center justify-center z-20">
                <div className="text-center">
                  <div className="text-5xl mb-3">✓</div>
                  <p className="text-green-700 font-semibold text-lg">
                    Message sent successfully!
                  </p>
                  <p className="text-green-600 text-sm mt-1">
                    We&apos;ll get back to you soon
                  </p>
                </div>
              </div>
            )}

            {serviceName && (
              <div className="flex flex-col space-y-2 pb-4 border-b border-slate-200">
                <label className="text-sm font-semibold text-slate-700">
                  Service of Interest
                </label>
                <input
                  type="text"
                  value={serviceName}
                  disabled
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-600 bg-slate-50 cursor-not-allowed font-medium"
                />
              </div>
            )}

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 bg-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 bg-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+974 44 205 500"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 bg-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 bg-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Message *
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your requirements and project timeline"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 bg-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="cursor-pointer w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitted ? "Sending..." : "Send Inquiry"}
            </button>

            <p className="text-sm text-slate-600 text-center">
              We respect your privacy. Your information will not be shared.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceContactForm;
