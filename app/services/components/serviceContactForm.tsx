"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
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
      className="relative bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-12" ref={titleRef}>
          <h6 className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-semibold mb-6">
            Get In Touch
          </h6>
          <h2 className="text-5xl max-lg:text-3xl font-bold text-white mb-4 leading-tight">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {serviceName
              ? `Let's discuss how our ${serviceName} can meet your needs`
              : "Our team will get back to you within one business day"}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="relative bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-xl p-8 max-md:p-6 space-y-4"
          >
            {isSubmitted && (
              <div className="absolute inset-0 rounded-2xl bg-green-500/20 border border-green-500/50 flex items-center justify-center z-20">
                <div className="text-center">
                  <div className="text-5xl mb-3">✓</div>
                  <p className="text-white font-semibold">
                    Message sent successfully!
                  </p>
                </div>
              </div>
            )}

            {serviceName && (
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Service of Interest
                </label>
                <input
                  type="text"
                  value={serviceName}
                  disabled
                  className="w-full rounded-xl border border-slate-600 px-4 py-3 text-slate-300 bg-slate-700/30 cursor-not-allowed"
                />
              </div>
            )}

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-600 px-4 py-3 text-white placeholder-slate-500 bg-slate-800/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full rounded-xl border border-slate-600 px-4 py-3 text-white placeholder-slate-500 bg-slate-800/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+974 44 205 500"
                  className="w-full rounded-xl border border-slate-600 px-4 py-3 text-white placeholder-slate-500 bg-slate-800/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300">
                  Company
                </label>
                <input
                  type="text"
                  placeholder="Your company name"
                  className="w-full rounded-xl border border-slate-600 px-4 py-3 text-white placeholder-slate-500 bg-slate-800/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300">
                Message *
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your requirements and project timeline"
                className="w-full rounded-xl border border-slate-600 px-4 py-3 text-white placeholder-slate-500 bg-slate-800/50 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 transition resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitted}
              className="cursor-pointer w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitted ? "Sending..." : "Send Inquiry"}
            </button>

            <p className="text-xs text-slate-400 text-center">
              We respect your privacy. Your information will not be shared.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceContactForm;
