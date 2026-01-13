"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "../utils/data/navigation";
import { ArrowDownIcon } from "./icons";

type Props = {
  type?: string;
  onItemClick?: () => void;
  scrolled?: boolean;
};

const Navigation = (props: Props) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  if (props.type === "mobile") {
    return (
      <nav className="flex flex-col gap-6">
        {navigationData.map((item) => (
          <div key={item.name} className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                onClick={props.onItemClick}
                className={`relative text-[18px] font-semibold uppercase text-[#160A0A] hover:text-[#0D72B6] transition-colors ${pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "text-[#0D72B6] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-12 after:bg-[#0D72B6]" : ""}`}
              >
                {item.name}
              </Link>
              {item.dropMenu && item.dropMenu.length > 0 && (
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="text-[#0D72B6] hover:text-[#0D72B6] transition-transform"
                >
                  <ArrowDownIcon
                    color={`stroke-blue-600`}
                    stroke="2"
                    size={`w-6 h-6 ${item.dropMenu && openDropdown === item.name ? "rotate-180" : ""}`}
                  />
                </button>
              )}
            </div>
            {item.dropMenu && openDropdown === item.name && (
              <div className="flex flex-col my-2 gap-3 pl-4 border-l-2 border-[#0D72B6]">
                {item.dropMenu.map((subitem) => (
                  <Link
                    key={subitem.name}
                    href={subitem.href}
                    onClick={props.onItemClick}
                    className="text-[16px] text-[#160A0A] hover:text-[#0D72B6] transition-colors"
                  >
                    {subitem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    );
  }

  return (
    <div className="flex gap-5 uppercase max-xl:hidden">
      {navigationData.map((item) => (
        <div key={item.name} className="relative group">
          <Link
            href={item.href}
            className={`relative pb-1 text-[16px] flex items-center gap-2 group ${props.type === "transparent" ? "text-white hover:text-[#f0f0f0]" : "text-[#160A0A] hover:text-[#0D72B6]"} ${props.scrolled ? "" : "hover:scale-105"} ${props.type === "scroll" ? "font-medium" : "font-medium"} ${pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#0087e2]" : "after:hidden"}`}
          >
            {item.name}
            {item.dropMenu && item.dropMenu.length > 0 && (
              <ArrowDownIcon
                color={`${props.scrolled ? "stroke-[#0D72B6]" : "stroke-white"}`}
                stroke="2"
                size={`w-5 h-5 group-hover:rotate-180 mb-1`}
              />
            )}
          </Link>

          {/* Dropdown Menu */}
          {item.dropMenu && item.dropMenu.length > 0 && (
            <div
              className={`absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-slate-200 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 ${props.type === "transparent" ? "shadow-xl" : ""}`}
            >
              {item.dropMenu.map((subitem, index) => (
                <Link
                  key={subitem.name}
                  href={subitem.href}
                  className={`block px-6 py-3 text-[14px] font-medium text-slate-700 hover:bg-cyan-50 hover:text-[#0D72B6] transition-colors ${index !== item.dropMenu!.length - 1 ? "border-b border-slate-100" : ""}`}
                >
                  {subitem.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
