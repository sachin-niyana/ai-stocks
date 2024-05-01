import React from "react";

const Navbar = () => {
  return (
    <div className="bg-dark-blue">
      <div className="container max-w-[1164px] mx-auto px-3 py-2">
        <div className="flex justify-between items-center">
          <h2 className="text-white font-Inter font-bold sm:text-xl text-lg cursor-pointer">
            AI STOCKS
          </h2>
          <button className="bg-btn-gradient hover:scale-95 duration-300 py-[8.5px] px-6 font-Inter font-semibold text-sm rounded-[58px] text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
