"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { navigationData } from "../utils/data/navigation";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDBoMjBMMCAxMHptMjAgMGwxMCAxMEwyMCAwem0xMCAwbDEwIDEwTDMwIDB6bTEwIDBsMTAgMTBMNDAgMHptMTAgMGwxMCAxMEw1MCAwem0xMCAwbDEwIDEwTDYwIDB6bTEwIDBsMTAgMTBMNzAgMHptMTAgMGwxMCAxMEw4MCAwem0xMCAwbDEwIDEwTDkwIDB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+')]"></div>
      <div className="absolute top-0 right-0 w-125 h-125 bg-linear-to-br from-[#0D72B6]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-linear-to-tr from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#0D72B6]/30 to-transparent"></div>

      <div className="relative p-[80px_80px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px]">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-slate-800/50">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-7 max-lg:col-span-12">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-px bg-linear-to-r from-[#0D72B6]/50 to-transparent"></div>
                <span className="text-[#0D72B6] text-sm font-semibold tracking-widest uppercase">Newsletter</span>
              </div>
              <h3 className="text-3xl max-lg:text-2xl font-serif text-white mb-3 tracking-wide">
                Stay Updated with Al-Qasas
              </h3>
              <p className="text-slate-300 text-[15px] leading-relaxed">
                Subscribe to receive the latest updates, industry insights, and exclusive offers
              </p>
            </div>
            <div className="col-span-5 max-lg:col-span-12">
              <form onSubmit={handleSubscribe} className="relative group">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-[#0D72B6]/50 transition-all duration-300"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2.5 bg-linear-to-r from-[#0D72B6] to-cyan-500 rounded-md text-white text-sm font-semibold hover:shadow-lg hover:shadow-[#0D72B6]/30 transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-12 gap-12 max-lg:gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-4 max-lg:col-span-12">
            <div className="mb-6">
              <Logo color="white" />
            </div>
            <p className="text-slate-300 text-[15px] leading-[1.8] mb-6 font-light">
              Excellence in movable partitions, project support, transportation,
              corporate services, and IT solutions driving quality and
              innovation across the Gulf region
            </p>
            
            {/* Social Media */}
            <div>
              <h4 className="text-white text-[15px] font-semibold mb-4 tracking-wide">Connect With Us</h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-[#0D72B6]/50 hover:bg-[#0D72B6]/10 flex items-center justify-center transition-all duration-300"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-[#0D72B6] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-[#0D72B6]/50 hover:bg-[#0D72B6]/10 flex items-center justify-center transition-all duration-300"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-[#0D72B6] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-[#0D72B6]/50 hover:bg-[#0D72B6]/10 flex items-center justify-center transition-all duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-[#0D72B6] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 hover:border-[#0D72B6]/50 hover:bg-[#0D72B6]/10 flex items-center justify-center transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 text-slate-400 group-hover:text-[#0D72B6] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-2 max-lg:col-span-6 max-md:col-span-12">
            <h3 className="text-white text-[15px] font-semibold mb-6 tracking-wide flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#0D72B6]"></div>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navigationData.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group text-slate-300 hover:text-[#0D72B6] transition-colors text-[14px] font-light flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-[#0D72B6] group-hover:w-4 transition-all duration-300"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-3 max-lg:col-span-6 max-md:col-span-12">
            <h3 className="text-white text-[15px] font-semibold mb-6 tracking-wide flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#0D72B6]"></div>
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="group text-slate-300 hover:text-[#0D72B6] transition-colors text-[14px] font-light flex items-center gap-2">
                  <span className="w-0 h-px bg-[#0D72B6] group-hover:w-4 transition-all duration-300"></span>
                  Movable Partitions
                </Link>
              </li>
              <li>
                <Link href="#" className="group text-slate-300 hover:text-[#0D72B6] transition-colors text-[14px] font-light flex items-center gap-2">
                  <span className="w-0 h-px bg-[#0D72B6] group-hover:w-4 transition-all duration-300"></span>
                  Project Support
                </Link>
              </li>
              <li>
                <Link href="#" className="group text-slate-300 hover:text-[#0D72B6] transition-colors text-[14px] font-light flex items-center gap-2">
                  <span className="w-0 h-px bg-[#0D72B6] group-hover:w-4 transition-all duration-300"></span>
                  Transportation
                </Link>
              </li>
              <li>
                <Link href="#" className="group text-slate-300 hover:text-[#0D72B6] transition-colors text-[14px] font-light flex items-center gap-2">
                  <span className="w-0 h-px bg-[#0D72B6] group-hover:w-4 transition-all duration-300"></span>
                  Corporate Services
                </Link>
              </li>
              <li>
                <Link href="#" className="group text-slate-300 hover:text-[#0D72B6] transition-colors text-[14px] font-light flex items-center gap-2">
                  <span className="w-0 h-px bg-[#0D72B6] group-hover:w-4 transition-all duration-300"></span>
                  IT Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-3 max-lg:col-span-12">
            <h3 className="text-white text-[15px] font-semibold mb-6 tracking-wide flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#0D72B6]"></div>
              Get In Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center shrink-0 group-hover:border-[#0D72B6]/50 transition-colors">
                  <svg className="w-5 h-5 text-[#0D72B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">Email</p>
                  <a href="mailto:info@alqasas.com" className="text-slate-300 hover:text-[#0D72B6] transition-colors text-[14px] font-light">
                    info@alqasas.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-slate-800/50 border border-slate-700/50 flex items-center justify-center shrink-0 group-hover:border-[#0D72B6]/50 transition-colors">
                  <svg className="w-5 h-5 text-[#0D72B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-400 text-xs mb-1">Locations</p>
                  <p className="text-slate-300 text-[14px] font-light">Qatar & Saudi Arabia</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/50">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-1 h-1 rounded-full bg-[#0D72B6]/40"></div>
              <p className="text-slate-400 text-[13px] font-light">
                © {new Date().getFullYear()} Al-Qasas Trading & Contracting. All rights reserved
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-slate-400 hover:text-[#0D72B6] transition-colors text-[13px] font-light">
                Terms & Conditions
              </Link>
              <div className="w-px h-4 bg-slate-800"></div>
              <Link href="#" className="text-slate-400 hover:text-[#0D72B6] transition-colors text-[13px] font-light">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
