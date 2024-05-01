import Image from "next/image";
import React from "react";

const Marquee = () => {
  return (
    <div className="flex pb-[146px]">
      <div className="flex justify-between pt-[15px] rounded-[15px] pb-3.5 pe-[13px] ps-[15px] border-[1px] border-black border-opacity-10">
        <div className="flex flex-col w-[208px]">
          <div className="flex gap-2.5 items-center">
            <Image width={50} height={50} src="/assets/image/png/author.png" />
            <p className="font-Open_Sans font-bold text-md text-black">
              Murray
            </p>
          </div>
          <p className="font-Open_Sans font-normal text-gray text-sm mt-2.5">
            Profit: <span className="text-black font-bold">$35,499</span>
          </p>
          <p className="font-Open_Sans font-normal text-gray text-sm">
            Current Balance:{" "}
            <span className="text-black font-bold">$68,187</span>
          </p>
        </div>
        <Image
          width={119}
          height={83}
          src="/assets/image/png/author-graph.png"
        />
      </div>
    </div>
  );
};

export default Marquee;
