"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import SubHeading from "@/app/components/subHeading";
import Heading from "@/app/components/heading";

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
          <SubHeading title="Send a message" />
          <Heading title1="Tell us about your" title2="project" />
          <p className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Our team will get back to you within one business day
          </p>
        </div>

        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 items-start">
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
                rows={3}
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
            className="rounded-2xl shadow-2xl overflow-hidden"
          >
            <Image
              src={"/assets/common/contact.webp"}
              alt="Contact"
              width={1000}
              height={800}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
