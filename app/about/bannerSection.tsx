import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

const BannerSection = (props: Props) => {
  return (
    <div className="relative bg-white">
      <div
        className="h-125 flex justify-center items-center bg-no-repeat bg-cover bg-center z-10"
        style={{
          backgroundImage: "url(/assets/common/hero-image.webp)",
          // filter: 'brightness(90%)',
        }}
      >
        <h1 className="text-[60px] font-semibold text-white uppercase mt-6">
          {props.title}
        </h1>
      </div>
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/90 via-black/0 to-transparent pointer-events-none" />
    </div>
  );
};

export default BannerSection;
