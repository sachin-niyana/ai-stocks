import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import { marquee } from "./common/Helper";
import { BlurLeft, BlurRight } from "./common/Icons";

const Authors = () => {
  return (
    <div className="flex xl:pb-[146px] md:pt-9 md:py-20 sm:py-16 py-12 relative">
      <div className="absolute md:top-[10%] top-[19.5%] sm:block hidden left-0 z-10">
        <BlurLeft />
      </div>
      <div className="absolute md:top-[10%] top-[19.5%] sm:block hidden right-0 z-10">
        <BlurRight />
      </div>
      <Marquee>
        <div className="flex gap-8 me-8">
          {marquee.map((value, index) => (
            <div
              key={index}
              className="flex justify-between pt-[15px] rounded-[15px] pb-3.5 pe-[13px] ps-[15px] border-[1px] border-black border-opacity-10"
            >
              <div className="flex flex-col w-[208px]">
                <div className="flex gap-2.5 items-center">
                  <Image width={50} height={50} src={value.image} alt="author" />
                  <p className="font-Open_Sans font-bold text-md text-black">
                    {value.name}
                  </p>
                </div>
                <p className="font-Open_Sans font-normal text-gray text-sm mt-2.5">
                  Profit:{" "}
                  <span className="text-black font-bold">{value.profit}</span>
                </p>
                <p className="font-Open_Sans font-normal text-gray text-sm">
                  Current Balance:{" "}
                  <span className="text-black font-bold">{value.balance}</span>
                </p>
              </div>
              <Image width={119} height={83} src={value.graph} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Authors;
