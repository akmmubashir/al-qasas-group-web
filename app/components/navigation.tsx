"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "../utils/data/navigation";

type Props = {
  type?: string;
  onItemClick?: () => void;
};

const Navigation = (props: Props) => {
  const pathname = usePathname();

  if (props.type === "mobile") {
    return (
      <nav className="flex flex-col gap-6">
        {navigationData.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={props.onItemClick}
            className={`relative text-[18px] font-semibold uppercase text-[#160A0A] hover:text-[#0D72B6] transition-colors ${pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "text-[#0D72B6] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-12 after:bg-[#0D72B6]" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <div className="flex gap-5 uppercase max-xl:hidden">
      {navigationData.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`relative pb-1 text-[16px] ${props.type === "transparent" ? "text-white" : "text-[#160A0A]"} hover:text-[#0D72B6] ${props.type === "scroll" ? "font-medium" : "font-medium"} ${pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:bg-[#0D72B6]" : "after:hidden"}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
