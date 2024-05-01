import Image from "next/image";
import React from "react";

const YCharts = () => {
  return (
    <div className="bg-white relative">
      <Image
        className="absolute end-0"
        width={439}
        height={696}
        src="/assets/image/png/ycharts-shadow.png"
      />
      <div className="container max-w-[1164px] mx-auto px-3 xl:pt-[191px] xl:pb-[180px] md:py-20 sm:py-16 py-12 ">
        <div className="flex lg:flex-row flex-col justify-center">
          <div className="flex flex-col relative lg:mx-0 mx-auto">
            <h2 className="font-Inter lg:text-start text-center font-bold text-rich-black lg:text-2xl md:text-xl text-lg max-w-[490px]">
              Nvidia - AI GPU <br />1 year 228% Growth 
            </h2>
            <p className="pt-6 font-Inter lg:text-start text-center font-normal text-sm text max-w-[490px]">
              NVIDIA Corporation, a powerhouse in GPU technology and AI
              innovation, offers investors compelling opportunities. With
              dominance in gaming and data center markets, NVIDIA stands poised
              for growth. Diversification efforts into AI, autonomous vehicles,
              and strategic acquisitions further bolster its potential. As a
              leader in technology and with a strong financial track record,
              NVIDIA remains a top choice for savvy investors.
            </p>
          </div>
          <div className="relative lg:mx-0 mx-auto lg:mt-0 mt-10">
            <Image
              width={631}
              height={344}
              src="/assets/image/png/ycharts.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YCharts;
