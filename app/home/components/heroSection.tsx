"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-[#0F1A26] text-white h-dvh"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1f2e3f_0,#0f1a26_35%),radial-gradient(circle_at_80%_0%,#164a78_0,#0f1a26_40%)]"
        aria-hidden
      />
      <div className="relative max-w-300 mx-auto p-[160px_0px_80px] max-xl:p-[140px_40px_70px] max-lg:p-[120px_20px_60px] flex flex-col gap-12"></div>
    </section>
  );
};

export default HeroSection;
