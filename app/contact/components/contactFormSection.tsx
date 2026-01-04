"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactFormSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const asideRef = useRef<HTMLDivElement>(null);

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
        },
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        asideRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
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
  };

  return (
    <section ref={sectionRef} className="relative bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        <div className="text-center mb-12" ref={titleRef}>
          <h6 className="inline-block px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-600 text-sm font-semibold mb-6">
            Send a message
          </h6>
          <h2 className="text-5xl max-lg:text-3xl font-bold text-slate-900 mb-4 leading-tight">
            Tell us about your project
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our team will get back to you within one business day
          </p>
        </div>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl border border-slate-200 shadow-xl p-8 max-md:p-6 space-y-4"
          >
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-100 transition"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-100 transition"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+974 44 205 500"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-100 transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-100 transition"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Share project details, timeline, and goals"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-800 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-100 transition resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer w-full rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:-translate-y-0.5 transition"
            >
              Send Message
            </button>
          </form>

          <div
            ref={asideRef}
            className="bg-linear-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-2xl border border-slate-700/50 shadow-2xl p-8 max-md:p-6 space-y-6"
          >
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-200">
                Prefer to talk?
              </p>
              <h3 className="text-3xl font-bold">Book a call</h3>
              <p className="text-slate-200 leading-relaxed">
                Schedule a quick discovery call with our consultants and get a
                tailored roadmap for your project.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-cyan-200">Phone</p>
                <p className="text-lg font-semibold">+974 4420 5500</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-cyan-200">Email</p>
                <p className="text-lg font-semibold">info@alqasasgroup.com</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm text-cyan-200">Office Hours</p>
                <p className="text-lg font-semibold">
                  Sun - Thu, 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="tel:+97444205500"
                className="px-4 py-2 rounded-full bg-white text-slate-900 font-semibold shadow hover:-translate-y-0.5 transition"
              >
                Call Now
              </a>
              <a
                href="mailto:info@alqasasgroup.com"
                className="px-4 py-2 rounded-full border border-white/40 text-white font-semibold hover:bg-white/10 transition"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
