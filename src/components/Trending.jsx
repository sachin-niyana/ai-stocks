"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { trending } from "./common/Helper";

const Trending = () => {
  const sliderRef = useRef(null);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-white">
      <div className="container max-w-[1384px] mx-auto px-3 py-10">
        <div className="bg-btn-gradient rounded-[34px] shadow-trendingCard md:pt-[79px] md:pb-[138px] py-14 px-5 relative">
          <h2 className="font-Inter leading-[130%] text-center font-bold text-white lg:text-2xl md:text-xl text-lg">
            Trending about NVIDIA
          </h2>
          <Slider ref={sliderRef} {...settings}>
            {trending.map((value, index) => (
              <div key={index} className="slide">
                <div className="flex lg:flex-row max-w-[1164px] flex-col items-center justify-between sm:gap-14 gap-8 lg:mt-[73px] px-3 mx-auto mt-10">
                  <div className="flex flex-col">
                    <h3 className="font-Inter font-bold text-white lg:text-xl lg:text-start text-center sm:text-lg text-md max-w-[500px]">
                      {value.title}
                    </h3>
                    <p className="font-Inter font-normal text-white text-sm lg:text-start text-center max-w-[510px] pt-4">
                      {value.discripstion}
                    </p>
                  </div>
                  <div>
                    <Image
                      className="shadow-house rounded-2xl"
                      width={558}
                      height={332}
                      src={value.image}
                      alt="house"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Trending;
