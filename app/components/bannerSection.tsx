import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

const BannerSection = (props: Props) => {
  return (
    <div className="relative bg-white">
      <div
        className="min-h-125 max-md:min-h-80 flex justify-center items-center bg-no-repeat bg-cover bg-center z-10"
        style={{
          backgroundImage: "url(/assets/common/hero-image.webp)",
          // filter: 'brightness(90%)',
        }}
      >
        <div className="max-w-300 mx-auto p-[80px_0px] max-xl:p-[60px_40px] max-lg:p-[60px_20px] max-md:p-[40px_20px]">
          <h1 className="text-[60px] max-xl:text-[40px] max-lg:text-[30px] max-md:text-[24px] font-semibold text-white uppercase mt-6">
            {props.title}
          </h1>
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/90 via-black/0 to-transparent pointer-events-none" />
    </div>
  );
};

export default BannerSection;
