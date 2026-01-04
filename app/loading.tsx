"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loading = () => {
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate numeric counter 0 → 100
      const counter = { value: 0 };
      gsap.to(counter, {
        value: 100,
        duration: 1.6,
        ease: "power1.inOut",
        onUpdate: () => {
          if (percentRef.current) {
            percentRef.current.textContent = `${Math.round(counter.value)}%`;
          }
        },
        repeat: -1,
        repeatDelay: 0.1,
        onRepeat: () => {
          counter.value = 0;
        },
      });

      // Animate bar fill
      gsap.to(progressRef.current, {
        width: "100%",
        duration: 1.6,
        ease: "power1.inOut",
        repeat: -1,
        repeatDelay: 0.1,
        onRepeat: () => {
          if (progressRef.current) {
            progressRef.current.style.width = "0%";
          }
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <div className="relative w-100 max-md:w-full max-lg:px-7.5 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[20px] max-md:text-[16px] uppercase tracking-[0.25em] text-cyan-100">
          <span>Loading</span>
          <span ref={percentRef}>0%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-white/10 backdrop-blur">
          <div
            ref={progressRef}
            className="h-full w-0 rounded-full bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 shadow-lg shadow-cyan-500/20"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
