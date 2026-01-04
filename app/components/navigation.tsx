import React from "react";
import Link from "next/link";
import { navigationData } from "../utils/data/navigation";

type Props = {
  type?: string;
};

const Navigation = (props: Props) => {
  return (
    <div className="flex gap-5 uppercase max-xl:hidden">
      {navigationData.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={`text-[16px] ${props.type === "transparent" ? "text-white hover:text-[#0D72B6]" : "text-[#160A0A] hover:text-[#0D72B6]"} ${props.type === "scroll" ? "font-medium" : "font-medium"}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
