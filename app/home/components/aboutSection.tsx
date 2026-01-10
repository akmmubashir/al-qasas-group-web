"use client";
import React, { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Heading from "@/app/components/heading";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const datalist = [
    {
      id: 1,
      title: "About",
      content:
        "Excellence in movable partitions, project support, transportation, corporate services, and IT solutions driving quality and innovation across the Gulf region.",
    },
    {
      id: 2,
      title: "Our Foundation",
      content:
        "Al-Qasas – Trading & Contracting is a trusted diversified solutions provider dedicated to delivering excellence in integrated trading, contracting, and business services across Qatar and Saudi Arabia.",
    },
    {
      id: 3,
      title: "Our Expertise",
      content:
        "With years of experience in the region, we specialize in movable partition systems, project support, transportation, corporate services, and IT solutions—all built on the foundations of quality, compliance, and operational excellence.",
    },
    {
      id: 4,
      title: "Our Commitment",
      content:
        "Our team is committed to understanding your unique needs and delivering customized solutions that drive business growth and operational efficiency.",
    },
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0D72B6 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-0 -right-40 w-125 h-125 bg-[#0D72B6]/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-125 h-125 bg-blue-500/5 rounded-full blur-[100px]" />

      <div className="p-[80px_80px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px] relative z-10">
        {/* Section Header */}
        <div className="text-start mb-16 max-lg:mb-12">
          {/* <SubHeading title="Who We Are" /> */}
          <Heading title1="About" title2="Al-Qasas" />
          {/* <p className="text-gray-600 text-[18px] max-xl:text-[16px] max-lg:text-[14px]">
            Your trusted partner for integrated trading, contracting, and
            business solutions across the Gulf region
          </p> */}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-20 max-lg:gap-6">
          {/* Left Content */}
          <div className="col-span-3 max-lg:col-span-12 flex flex-col gap-4 items-start">
            {datalist.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(index)}
                className={`group cursor-pointer flex justify-between w-full text-[18px] max-2xl:text-[16px] max-lg:text-[14px] font-medium hover:text-[#0D72B6] transition-colors duration-300 py-4 ${selectedItem === index ? "text-[#0D72B6] border-t-2 border-[#0D72B6]" : "text-gray-600 border-t-2 border-gray-600 hover:border-[#0D72B6]"
                  }`}
              >
                <span>{item.title}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${selectedItem === index ? "rotate-45" : "group-hover:rotate-45"
                    }`}
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
              </button>
            ))}
          </div>

          {/* Center Visual Section */}
          <div className="col-span-6 max-lg:col-span-12 relative">
            {/* Main Image */}
            <div className="relative overflow-hidden shadow-2xl h-full min-h-150 max-lg:min-h-100 group">
              <Image
                src="/assets/images/corporate.webp"
                alt="Al-Qasas Group Overview"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-linear-to-br from-[#0D72B6] to-blue-500 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#0A0A0A]">
                      15+
                    </div>
                    <div className="text-xs font-semibold text-gray-600">
                      Years Experience
                    </div>
                  </div>
                </div>
              </div>
              {/* Bottom Stats */}
              {/* <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm p-5 shadow-xl">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-black text-[#0D72B6]">
                        500+
                      </div>
                      <div className="text-xs font-semibold text-gray-600 mt-1">
                        Projects Completed
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-[#0D72B6]">
                        98%
                      </div>
                      <div className="text-xs font-semibold text-gray-600 mt-1">
                        Client Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-3 max-lg:col-span-12 space-y-6 flex flex-col items-start">
            <p className="text-[18px] max-xl:text-[16px] max-lg:text-[14px] text-[#2a2a2a] leading-relaxed">
              {datalist[selectedItem].content}
            </p>
          </div>
        </div>

        {/* Bottom Stats/Features Bar */}
        {/* <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
          <div className="stat-card group bg-linear-to-br from-[#0D72B6]/5 to-blue-500/5 border border-[#0D72B6]/10 p-6 hover:shadow-lg hover:border-[#0D72B6]/30 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-linear-to-br from-[#0D72B6] to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-[#0A0A0A] mb-2">
              Quality Assured
            </h4>
            <p className="text-sm text-gray-600">
              ISO certified processes and standards
            </p>
          </div>

          <div className="stat-card group bg-linear-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/10 rounded-2xl p-6 hover:shadow-lg hover:border-blue-500/30 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-[#0A0A0A] mb-2">
              Fast Delivery
            </h4>
            <p className="text-sm text-gray-600">
              On-time project completion guaranteed
            </p>
          </div>

          <div className="stat-card group bg-linear-to-br from-cyan-500/5 to-teal-500/5 border border-cyan-500/10 rounded-2xl p-6 hover:shadow-lg hover:border-cyan-500/30 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-linear-to-br from-cyan-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-[#0A0A0A] mb-2">
              24/7 Support
            </h4>
            <p className="text-sm text-gray-600">
              Round-the-clock customer assistance
            </p>
          </div>

          <div className="stat-card group bg-linear-to-br from-purple-500/5 to-pink-500/5 border border-purple-500/10 rounded-2xl p-6 hover:shadow-lg hover:border-purple-500/30 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-lg font-bold text-[#0A0A0A] mb-2">
              Regional Coverage
            </h4>
            <p className="text-sm text-gray-600">
              Serving Qatar & Saudi Arabia
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;
