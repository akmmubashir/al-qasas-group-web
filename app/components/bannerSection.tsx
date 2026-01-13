import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

const BannerSection = (props: Props) => {
  return (
    <div className="relative bg-white">
      <div
        className="min-h-110 max-md:min-h-80 flex justify-center items-center bg-no-repeat bg-cover bg-center z-10"
        style={{
          backgroundImage: "url(/assets/common/heroimg.webp)",
          // filter: 'brightness(90%)',
        }}
      >
        <div className="p-[100px_80px_80px] max-xl:p-[80px_40px_60px] max-lg:p-[60px_20px_40px] max-md:p-[60px_20px_40px]">
          <h1 className="text-center text-[50px] max-xl:text-[46px] max-lg:text-[36px] max-md:text-[24px] font-semibold text-white uppercase mt-6">
            {props.title}
          </h1>
        </div>
      </div>
      <div className="absolute inset-0 z-10 bg-linear-to-b from-black/90 via-black/0 to-transparent pointer-events-none" />
    </div>
  );
};

export default BannerSection;
