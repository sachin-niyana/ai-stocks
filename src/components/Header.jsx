import React from "react";
import Navbar from "./Navbar";
import { Nvidie } from "./common/Icons";

const Header = () => {
  return (
    <div className="bg-header-bg bg-cover header-bg">
      <Navbar />
      <div className="container max-w-[1164px] mx-auto px-3 lg:pt-[83px] lg:pb-[101px] md:py-20 sm:py-16 py-12">
        <div className="flex md:flex-row flex-col md:justify-between justify-center">
          <div className="flex flex-col md:pe-5 md:mx-0 mx-auto">
            <div className="mx-auto md:mx-0">
              <Nvidie />
            </div>
            <h1 className="font-Inter font-bold lg:text-3xl md:text-start text-center md:mx-0 mx-auto md:text-2xl text-xl text-white md:max-w-[500px] max-w-[330px] md:mt-[21px] mt-4 leading-[120%]">
              It’s the right time to buy Nvidia Stock
            </h1>
            <p className="max-w-[440px] font-Inter md:text-start text-center md:mx-0 mx-auto font-normal text-sm text-white opacity-90 leading-[150%] md:mt-4 mt-2">
              Its unbelievable market outperformance started at the beginning of
              2023 and continues well into 2024, with the stock up more than
              480%.
            </p>
            <div className="flex justify-start gap-[15px] md:mt-[35px] mt-6 md:mx-0 mx-auto">
              <button className="border-[1px] border-white hover:scale-95 duration-300 py-[11px] px-[30px] leading-[150%] text-blue text-sm font-Inter font-semibold rounded-[58px] bg-white">
                Invest Now
              </button>
              <button className="border-[1px] hover:scale-95 duration-300 border-white py-[11px] px-[30px] leading-[150%] text-white text-sm font-Inter font-semibold rounded-[58px] ">
                Know why?
              </button>
            </div>
          </div>
          <div className="md:mt-[23px] mt-14 bg-white border-[1px] border-navy-blue rounded-[32px] lg:p-8 p-6 lg:max-w-[493px] md:max-w-[400px] max-w-[460px] md:mx-0 mx-auto shadow-contectCard w-full">
            <h4 className="font-Inter font-bold md:text-start text-center text-black text-lg leading-[122%]">
              Start Trading today!
            </h4>
            <form className="mt-5">
              <input
                type="text"
                name="name"
                placeholder="First Name"
                className="border-[1px] border-navy-blue w-full py-3 sm:px-6 px-4 rounded-[30px] outline-none bg-light-blue font-Inter font-normal text-sm placeholder-black placeholder-opacity-70 text-black"
              />
              <input
                type="text"
                name="name"
                placeholder="Last Name"
                className="border-[1px] border-navy-blue w-full py-3 sm:px-6 px-4 mt-3.5 rounded-[30px] outline-none bg-light-blue font-Inter font-normal text-sm placeholder-black placeholder-opacity-70 text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="border-[1px] border-navy-blue w-full py-3 sm:px-6 px-4 mt-3.5 rounded-[30px] outline-none bg-light-blue font-Inter font-normal text-sm placeholder-black placeholder-opacity-70 text-black"
              />
              <input
                type="number"
                name="number"
                placeholder="First Name"
                className="border-[1px] border-navy-blue w-full py-3 sm:px-6 px-4 mt-3.5 rounded-[30px] outline-none bg-light-blue font-Inter font-normal text-sm placeholder-black placeholder-opacity-70 text-black"
              />
              <textarea
                placeholder="Write a message..."
                className="resize-none border-[1px] border-navy-blue w-full min-h-[100px] py-3 sm:px-6 px-4 mt-3.5 rounded-[24px] outline-none bg-light-blue font-Inter font-normal text-sm placeholder-black placeholder-opacity-70 text-black"
              ></textarea>
            </form>
            <button className="w-full bg-btn-gradient hover:scale-95 duration-300 py-4 rounded-[32px] mt-3 text-white font-Inter font-semibold text-sm leading-[121%]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
