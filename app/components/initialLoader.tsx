"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const InitialLoader = () => {
  const [visible, setVisible] = useState(true);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counter = { value: 0 };

      gsap.to(counter, {
        value: 100,
        duration: 1.2,
        ease: "power1.inOut",
        onUpdate: () => {
          if (percentRef.current) {
            percentRef.current.textContent = `${Math.round(counter.value)}%`;
          }
        },
        onComplete: () => setVisible(false),
      });

      gsap.to(progressRef.current, {
        width: "100%",
        duration: 1.2,
        ease: "power1.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-white text-slate-900">
      <div className="relative w-100 max-md:w-full max-lg:px-7.5 flex flex-col gap-4">
        <div className="flex items-center justify-between text-[20px] max-md:text-[16px] uppercase tracking-[0.25em] text-slate-600">
          <span>Loading</span>
          <span ref={percentRef}>0%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 backdrop-blur">
          <div
            ref={progressRef}
            className="h-full w-0 rounded-full bg-linear-to-r from-sky-500 via-blue-500 to-cyan-500 shadow-lg shadow-sky-500/20"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default InitialLoader;
