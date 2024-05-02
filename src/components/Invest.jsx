import Image from "next/image";
import React from "react";

const Invest = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1164px] mx-auto px-3 md:py-0 sm:py-16 py-12">
        <h2 className="text-black font-Inter font-bold lg:text-2xl md:text-xl text-lg text-center">
          Why Invest in Nvidia Stock
        </h2>
        <div className="flex flex-wrap lg:grid lg:grid-cols-3 gap-6 justify-center items-center">
          <div className=" max-w-[364px] w-full rounded-[12px] cursor-pointer hover:border-blue duration-300 hover:shadow-investCard bg-sky-blue md:mt-[60px] mt-16 border-[1px] border-blue border-opacity-[26%] min-h-[356px] flex flex-col justify-between pt-6 ps-4 pe-[21px] pb-[25px]">
            <p className="font-Inter font-normal text-lihgt-lback sm:text-md text-xmd italic leading-[150%]">
              <span className="font-bold">Nvidia stock</span> shows exceptional
              technical strength and boasts a best-possible score of 99 on both
              its Composite Rating and EPS Rating. Its Relative Strength
              Rating of 98 also shows that its outperforming.
            </p>
            <Image
              width={272}
              height={20}
              src="/assets/image/png/business.png"
            />
          </div>
          <div className=" max-w-[364px] w-full rounded-[12px] cursor-pointer hover:border-blue duration-300 hover:shadow-investCard bg-sky-blue md:mt-[60px] border-[1px] border-blue border-opacity-[26%] min-h-[356px] flex flex-col justify-between pt-6 ps-4 pe-[21px] pb-[25px]">
            <p className="font-Inter font-normal text-lihgt-lback sm:text-md text-xmd italic leading-[150%]">
              Patient Capital Management, a value investing firm, released its
              “Patient Capital Opportunity Equity Strategy” first quarter 2024
              investor letter. It featured stocks like{" "}
              <span className="font-bold">NVIDIA</span> Corporation
              (NASDAQ:NVDA) in its Q1 2024 investor letter.
            </p>
            <Image
              width={272}
              height={20}
              src="/assets/image/png/finance.png"
            />
          </div>
          <div className=" max-w-[364px] w-full rounded-[12px] cursor-pointer hover:border-blue duration-300 hover:shadow-investCard bg-sky-blue lg:mt-[60px] border-[1px] border-blue border-opacity-[26%] min-h-[356px] flex flex-col justify-between pt-6 ps-4 pe-[21px] pb-[25px]">
            <p className="font-Inter font-normal text-lihgt-lback lg:text-lg text-mdack italic leading-[150%]">
              SoftBank will reportedly invest nearly $1 billion in AI push,
              tapping <span className="font-bold">Nvidia’s chips</span>
            </p>
            <Image width={272} height={20} src="/assets/image/png/cnbc.png" />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-center items-center gap-[22px] md:mt-[60px] sm:mt-10 mt-8">
          <p className="font-Inter font-normal text-md text-rich-black">
            and a 100s of reasons
          </p>
          <button className="bg-btn-gradient hover:scale-95 duration-300 py-3 px-[30px] font-Inter font-bold text-sm rounded-[58px] text-white">
            Invest Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invest;
