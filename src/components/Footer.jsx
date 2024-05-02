import React from "react";
import { Facebook, Instagram, Linkdin } from "./common/Icons";
import Link from "next/link";

const Footer = () => {
  function getCurrentYear() {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }
  const currentYear = getCurrentYear();
  return (
    <div className="bg-dark-blue relative">
      <div className="absolute right-8 top-10 bg-footer-gradient w-[191px] h-[191px] blur-[120px]"></div>
      <div className="container max-w-[1164px] mx-auto px-3 sm:pb-[65px] sm:pt-[72px] py-12 relative">
        <div className="flex sm:flex-row flex-col justify-between items-center">
          <div className="flex flex-col">
            <h2 className="text-white sm:text-start text-center font-Inter font-bold sm:text-xxl text-lg cursor-pointer">
              AI STOCKS
            </h2>
            <p className="font-Inter sm:text-start text-center font-normal text-sm text-white text-opacity-80 max-w-[260px] pt-[15px]">
              Empowering Your Financial Future with Intelligent Investments
            </p>
          </div>
          <div className="flex flex-col sm:mt-0 mt-10">
            <p className="font-Inter sm:text-start text-center font-semibold text-md text-white">
              Follow Us on
            </p>
            <div className="flex justify-start gap-[15px] mt-2.5">
              <Link
                href="https://in.linkedin.com/"
                className="hover:translate-y-[-5px] duration-300"
              >
                <Linkdin />
              </Link>
              <Link
                href="https://www.instagram.com/"
                className="hover:translate-y-[-5px] duration-300"
              >
                <Instagram />
              </Link>
              <Link
                href="https://www.facebook.com/"
                className="hover:translate-y-[-5px] duration-300"
              >
                <Facebook />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-light-sky-blue"></div>
      <div className="container max-w-[1164px] mx-auto px-3 sm:py-[27px] py-5 relative">
        <div className="flex sm:flex-row flex-col justify-between items-center">
          <p className="font-Inter font-normal text-sm text-white text-opacity-80">
            Privacy Policy | Conditions
          </p>
          <p className="font-Inter font-normal text-sm text-white text-opacity-80 sm:pt-0 pt-3">
            Report Abuse/ Spam | Copyright@{currentYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
