"use client";
import React, { useEffect, useState } from "react";
import Logo from "./logo";
import Navigation from "./navigation";
import { ToggleIcon } from "./icons";
import Image from "next/image";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      setScrolled(currentScrollY > 10);
      
      // Show header when scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Hide header when scrolling down past 100px
        setVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <div
        className={`fixed w-full left-0 top-0 z-40 transition-transform duration-300 ${visible ? "translate-y-0" : "-translate-y-full"} ${scrolled ? "bg-white shadow-2xl items-end" : "bg-transparent"}`}
      >
        <div
          className={`p-[20px_80px] max-xl:p-[20px_40px] max-md:p-[16px_20px] flex items-center justify-between`}
        >
          <Logo color={scrolled ? "black" : "white"} />
          <Navigation type={scrolled ? "scroll" : "transparent"} />
          <button className="cursor-pointer group relative px-8 py-4 bg-linear-to-r from-[#0D72B6] to-blue-500 text-white text-[15px] font-bold overflow-hidden hover:shadow-2xl hover:shadow-[#0D72B6]/40 transition-all duration-300 hover:scale-105 max-xl:hidden">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer group relative px-2 py-2 bg-linear-to-r from-[#0D72B6] to-blue-500 text-white text-[15px] font-bold rounded-full overflow-hidden hover:shadow-2xl hover:shadow-[#0D72B6]/40 transition-all duration-300 hover:scale-105 xl:hidden"
          >
            <ToggleIcon size="w-6 h-6" color="stroke-white" stroke="2" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-dvh w-full bg-white z-50 xl:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-8">
          <Image
            src="/assets/common/logo-og.png"
            alt="Logo"
            width={80}
            height={100}
            className="mb-10"
          />
          <Navigation
            type="mobile"
            onItemClick={() => setMobileMenuOpen(false)}
          />
          <div className="mt-auto">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="cursor-pointer w-full group relative px-8 py-4 bg-linear-to-r from-[#515151] to-[#353535] text-white text-[16px] font-medium uppercase rounded-full overflow-hidden hover:shadow-2xl hover:shadow-[#0D72B6]/40 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Close Menu
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
