"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "../utils/data/navigation";

type Props = {
  type?: string;
};

const Navigation = (props: Props) => {
  const pathname = usePathname();

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
