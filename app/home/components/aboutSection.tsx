"use client";
import React, { useState } from "react";
import Image from "next/image";
import Heading from "@/app/components/heading";

const AboutSection = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const datalist = [
    {
      id: 1,
      title: "About",
      content: `Al-Qasas Trading & Contracting operates across Qatar and Saudi Arabia, offering integrated services in movable partitions, project manpower, transportation, corporate setup, and IT solutions. We support companies by simplifying operations and delivering reliable, scalable, and compliant services tailored to their needs.
<br/><br/>
Our focus is on quality, professionalism, and efficient execution. Whether installing partition systems, providing trained workforce, managing transportation, or supporting business formation and digital infrastructure, we ensure each service meets industry standards and delivers long-term value to our clients.`,
    },
    {
      id: 2,
      title: "Our Foundation",
      content: `Al-Qasas was established to provide dependable, multi-sector support under one platform—combining engineering assistance, manpower services, transportation, and corporate solutions. Our foundation is built on operational reliability, strong values, and a commitment to delivering services that simplify business processes.
<br/><br/>
With deep regional experience and a clear understanding of regulatory requirements in Qatar and Saudi Arabia, our foundation enables us to offer organized, compliant, and transparent services that clients can rely on. This strong base guides every decision and keeps our operations aligned with industry expectations.`,
    },
    {
      id: 3,
      title: "Our Expertise",
      content: `Our expertise spans movable partition systems, skilled manpower support, and transportation services designed for commercial, industrial, and project-based environments. We ensure professional installation, reliable workforce deployment, and safe mobility solutions for teams, sites, and daily operations.
<br/><br/>
We also specialize in corporate setup and IT infrastructure, helping businesses establish, license, and manage operations with compliance and clarity. Our IT solutions, including cloud and secure system services, enable organizations to scale efficiently and operate with confidence in a digital landscape.`,
    },
    {
      id: 4,
      title: "Our Commitment",
      content: `Al-Qasas is committed to delivering dependable, efficient, and high-quality services across every division. We focus on understanding client needs and providing practical solutions that enhance workflow and operational success.
<br/><br/>
Our commitment extends to safety, transparency, and continuous improvement. By maintaining compliance, upgrading processes, and using trained professionals, we ensure our clients receive consistent support and long-term value in every project.`,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-blue-50">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(13,114,182,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_38%),radial-gradient(circle_at_50%_80%,rgba(14,165,233,0.14),transparent_36%)]" />
      <div className="absolute inset-0 bg-[url('/assets/common/aboutbg.webp')] bg-cover bg-center mix-blend-multiply opacity-10" />

      <div className="relative z-10 p-[80px_80px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px]">
        <div className="flex flex-col gap-4 sm:gap-3 mb-12 sm:mb-14">
          <Heading title1="Who We" title2="Are" />
          <p className="max-w-3xl text-[18px] max-xl:text-[16px] max-md:text-[14px] sm:text-lg text-slate-600">
            Integrated trading, contracting, and business solutions tailored for
            Qatar and Saudi Arabia, built on reliability and thoughtful
            partnerships.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="col-span-3 max-2xl:col-span-6 max-md:col-span-12 flex flex-col gap-3 lg:gap-4">
            <div className="flex lg:block gap-3 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1 snap-x snap-mandatory">
              {datalist.map((item, index) => {
                const isActive = selectedItem === index;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(index)}
                    aria-pressed={isActive}
                    className={`group relative snap-start cursor-pointer mb-5 min-w-55 lg:min-w-0 w-full text-left border transition-all duration-200 px-4 sm:px-5 py-4 shadow-sm ${
                      isActive
                        ? "border-sky-500/60 bg-white text-sky-700 shadow-md"
                        : "border-transparent bg-white/70 text-slate-700 hover:border-sky-200 hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[18px] max-xl:text-[16px] max-md:text-[14px] font-semibold uppercase tracking-wide text-slate-500">
                        {item.title}
                      </span>
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                          isActive
                            ? "border-sky-500 bg-sky-50 text-sky-700"
                            : "border-slate-200 bg-white text-slate-500 group-hover:border-sky-200"
                        }`}
                      >
                        <svg
                          className={`h-4 w-4 transition-transform ${
                            isActive
                              ? "rotate-45"
                              : "group-hover:translate-x-0.5"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </div>
                    {/* <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {item.content}
                    </p> */}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="col-span-5 max-2xl:col-span-6 max-md:col-span-12 order-last lg:order-0">
            <div className="relative overflow-hidden shadow-2xl h-full min-h-80 sm:min-h-95 lg:min-h-115 group bg-slate-900">
              <Image
                src="/assets/images/corporate.webp"
                alt="Al-Qasas Group overview"
                fill
                className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-tr from-slate-900/70 via-slate-900/30 to-transparent" />

              <div className="absolute top-5 right-5 flex flex-col gap-3">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-3 shadow-lg">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Experience
                  </div>
                  <div className="text-3xl font-bold text-slate-900">15+</div>
                  <div className="text-sm text-slate-600">
                    Years delivering across the Gulf
                  </div>
                </div>
                {/* <div className="rounded-2xl bg-sky-600 text-white px-4 py-3 shadow-lg">
                  <div className="text-xs font-semibold uppercase tracking-wide text-sky-100">
                    Promise
                  </div>
                  <div className="text-lg font-semibold">Quality • Compliance • Care</div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="col-span-4 max-2xl:col-span-12 max-md:col-span-12 order-2 lg:order-0 space-y-6">
            {/* <div className="rounded-3xl bg-white/80 backdrop-blur-sm border border-slate-100 shadow-sm p-6"> */}
            <p
              className="text-[18px] max-xl:text-[16px] max-md:text-[14px] text-slate-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: datalist[selectedItem].content,
              }}
            />
            {/* </div> */}
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="bg-white border border-slate-100 p-4 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Industries
                </div>
                <div className="mt-2 text-2xl font-bold text-slate-900">
                  10+
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  Construction, tech, services, logistics
                </p>
              </div>
              <div className="bg-sky-50 border border-sky-100 p-4 shadow-sm">
                <div className="text-xs font-semibold uppercase tracking-wide text-sky-600">
                  Satisfaction
                </div>
                <div className="mt-2 text-2xl font-bold text-slate-900">
                  4.9/5
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  Partner-rated support and delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
