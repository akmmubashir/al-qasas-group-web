"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const NotFound = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const accentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade and slide in content
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" },
      );

      // Float background accents
      const dots = accentsRef.current?.querySelectorAll(".accent-dot");
      if (dots?.length) {
        dots.forEach((dot, index) => {
          gsap.to(dot, {
            y: 12,
            x: index % 2 === 0 ? 8 : -8,
            repeat: -1,
            yoyo: true,
            duration: 2.2 + index * 0.2,
            ease: "sine.inOut",
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative min-h-dvh bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden flex items-center justify-center p-6">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute -left-10 top-10 w-80 h-80 bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/10 blur-3xl" />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 max-w-3xl text-center space-y-6"
      >
        <div className="flex items-center justify-center gap-3 text-sm uppercase tracking-[0.2em] text-cyan-200">
          <span className="h-px w-10 bg-cyan-400/60" />
          <span>Page Not Found</span>
          <span className="h-px w-10 bg-cyan-400/60" />
        </div>

        <h1 className="text-6xl max-md:text-4xl font-bold leading-tight">
          This page drifted off the map
        </h1>
        <p className="text-slate-300 text-lg max-md:text-base max-w-2xl mx-auto leading-relaxed">
          We could not find the page you are looking for. It may have been moved
          or no longer exists. Let us guide you back to a safe place.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-cyan-500 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full border border-cyan-400 text-cyan-200 font-semibold hover:bg-cyan-400/10 transition-colors"
          >
            Contact Support
          </Link>
        </div>

        {/* Accent dots for subtle motion */}
        <div
          ref={accentsRef}
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <span className="accent-dot absolute left-12 top-10 w-3 h-3 rounded-full bg-cyan-400/60" />
          <span className="accent-dot absolute right-16 top-20 w-2 h-2 rounded-full bg-blue-300/60" />
          <span className="accent-dot absolute left-1/3 bottom-16 w-2.5 h-2.5 rounded-full bg-cyan-300/60" />
          <span className="accent-dot absolute right-1/4 bottom-10 w-3 h-3 rounded-full bg-blue-400/60" />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
