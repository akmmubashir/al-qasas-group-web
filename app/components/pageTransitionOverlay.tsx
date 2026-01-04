"use client";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

const PageTransitionOverlay = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!pathname) return;

    // reset state on new navigation
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(true);
    if (progressRef.current) progressRef.current.style.width = "0%";
    if (percentRef.current) percentRef.current.textContent = "0%";

    const counter = { value: 0 };
    const tl = gsap.to(counter, {
      value: 100,
      duration: 1.1,
      ease: "power1.out",
      onUpdate: () => {
        if (percentRef.current) {
          percentRef.current.textContent = `${Math.round(counter.value)}%`;
        }
        if (progressRef.current) {
          progressRef.current.style.width = `${counter.value}%`;
        }
      },
      onComplete: () => {
        setVisible(false);
      },
    });

    tlRef.current = tl;

    return () => {
      tl.kill();
    };
  }, [pathname]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-55 flex items-center justify-center bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
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

export default PageTransitionOverlay;
