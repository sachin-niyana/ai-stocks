import Image from "next/image";
import React from "react";

const Invest = () => {
  return (
    <div className="bg-white">
      <div className="container max-w-[1164px] mx-auto px-3">
        <h2 className="text-black font-Inter font-bold text-2xl text-center">
          Why Invest in Nvidia Stock
        </h2>
        <div className="flex justify-center gap-6">
          <div className="col-span-4 max-w-[364px] w-full rounded-[12px] bg-sky-blue mt-[60px] border-[1px] border-blue border-opacity-[26%] min-h-[356px] flex flex-col justify-between pt-6 ps-4 pe-[21px] pb-[25px]">
            <p className="font-Inter font-normal text-lihgt-lback text-md italic leading-[150%]">
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
          <div className="col-span-4 max-w-[364px] w-full rounded-[12px] bg-sky-blue mt-[60px] border-[1px] border-blue border-opacity-[26%] min-h-[356px] flex flex-col justify-between pt-6 ps-4 pe-[21px] pb-[25px]">
            <p className="font-Inter font-normal text-lihgt-lback text-md italic leading-[150%]">
              Patient Capital Management, a value investing firm, released its
              “Patient Capital Opportunity Equity Strategy” first quarter 2024
              investor letter. It featured stocks like{" "}
              <span className="font-bold">NVIDIA</span> Corporation
              (NASDAQ:NVDA) in its Q1 2024 investor letter.
            </p>
            <Image
              width={211}
              height={32}
              src="/assets/image/png/finance.png"
            />
          </div>
          <div className="col-span-4 max-w-[364px] w-full rounded-[12px] bg-sky-blue mt-[60px] border-[1px] border-blue border-opacity-[26%] min-h-[356px] flex flex-col justify-between pt-6 ps-4 pe-[21px] pb-[25px]">
            <p className="font-Inter font-normal text-lihgt-lback text-lg italic leading-[150%]">
              SoftBank will reportedly invest nearly $1 billion in AI push,
              tapping <span className="font-bold">Nvidia’s chips</span>
            </p>
            <Image width={219} height={49} src="/assets/image/png/cnbc.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;
