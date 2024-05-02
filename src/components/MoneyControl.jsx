import Image from "next/image";
import { RightCircle } from "./common/Icons";

const MoneyControl = () => {
  return (
    <div className="bg-white relative">
      <div className="absolute top-4 right-0">
        <RightCircle />
      </div>
      <div className="container relative max-w-[1164px] mx-auto px-3 xl:pt-[132px] md:pb-0 md:py-20 sm:py-16 py-12">
        <div className="flex justify-center">
          <Image
            width={252}
            height={98}
            src="/assets/image/png/money-control.png"
            alt="money-control"
          />
        </div>
        <p className="font-Inter font-medium md:text-xl sm:text-lg text-md text-black italic max-w-[850px] mx-auto text-center pt-[22px]">
          Analysts continue to remain positive on{" "}
          <span className="font-bold">Nvidia stock.</span> Prior to the
          earnings, five large brokerages raised their target price on the
          company's shares.
        </p>
        <div className="flex justify-center mt-[46px]">
          <button className="bg-btn-gradient hover:scale-95 duration-300 py-3 px-[30px] font-Inter font-bold text-sm rounded-[58px] text-white">
            Invest Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoneyControl;
