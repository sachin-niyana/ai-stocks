import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nasdaq = () => {
  return (
    <div className="bg-white relative">
      <Image
        className="absolute start-0 lg:top-[10%]"
        width={338}
        height={619}
        src="/assets/image/png/nasdaq-shadow.png"
      />
      <div className="container max-w-[1164px] mx-auto px-3 xl:pt-[153px] xl:pb-[163px] md:py-20 sm:py-16 py-12 ">
        <div className="flex items-start lg:flex-row flex-col lg:justify-between justify-start">
          <div className="relative lg:mx-0 mx-auto lg:mt-0 mt-10">
            <Image
              className="absolute xl:block hidden bottom-[-12%] right-[-21%]"
              width={219}
              height={94}
              src="/assets/image/png/fool.png"
            />
            <Image
              className="shadow-nasdaqCard xl:ms-[49px]"
              width={425}
              height={414}
              src="/assets/image/png/nasdaq.png"
            />
            <div className="flex justify-center">
              <Image
                className=" xl:hidden block lg:mt-10 mt-5"
                width={219}
                height={94}
                src="/assets/image/png/fool.png"
              />
            </div>
          </div>
          <div className="relative lg:mx-0 mx-auto lg:mt-[88px] mt-16">
            <div className="flex flex-col">
              <h2 className="font-Inter leading-[130%] lg:text-start text-center font-bold text-rich-black lg:text-2xl md:text-xl text-lg max-w-[521px]">
                3 Reasons to Buy Nvidia Stock with AI
              </h2>
              <p className="lg:pt-[67px] pt-4 font-Inter leading-[160%] lg:text-start text-center font-normal text-sm text max-w-[490px]">
                The GPU maker has become synonymous with AI and is taking that
                technology to the next level.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <div className=" lg:mt-10 mt-5 bg-btn-gradient hover:scale-95 duration-300 py-3.5 px-[30px] rounded-[58px] max-w-[182px]">
                <Link
                  target="_blank"
                  href="https://www.fool.com/investing/2024/03/23/3-reasons-to-buy-nvidia-stock-like-theres-no-tomor/"
                  className=" underline underline-offset-[3px] font-Inter font-bold text-sm text-white"
                >
                  Read full article
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nasdaq;
