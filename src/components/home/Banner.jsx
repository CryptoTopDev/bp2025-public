import React from "react";
// img
import arrow from "../../assets/image/home/arrow.svg";
import rocketmain from "../../assets/image/home/rocket-main.png";
import { Link } from "react-router";
export const Banner = () => {
  return (
    <div className="max-w-[1280px] mx-auto w-[95%] grid grid-cols-[1fr_.65fr] h-[690px] bg-[#070707]  rounded-[50px] items-center px-[105px] overflow-hidden lg:px-[33px] lg:grid-cols-1 lg:h-[unset] lg:pt-[65px] md:rounded-[35px]">
      <div className="lg:flex-col lg:flex lg:items-center">
        <h1 className="mb-[50px] lg:mb-[34px] lg:text-center mont-bold text-[90px] leading-[75px] text-[#fff] md:text-[62px] md:leading-[60px]">
          Welcome <br /> to{" "}
          <span className="bg-[#fff] text-[#000]    inline-block pt-[13px]">
            BP2025
          </span>
        </h1>
        <p className="mb-[126px] lg:text-center lg:mb-[34px] leading-[36px] text-[24px] text-[#FFFFFF] mont-light md:text-[18px] md:leading-[26px]">
          Where Economic Unification <br /> Meets Innovation.
        </p>
        <Link
          to="/community"
          className="flex items-center gap-6 text-[#fff] mont-bold"
        >
          <img src={arrow} alt="" />
          Join the Community
        </Link>
      </div>

      <div className="relative">
        <div
          className="bg-[#676767] w-[400px] h-[400px] absolute top-1/2
       -translate-y-1/2 -right-[20px] blur-3xl rounded-full"
        ></div>
        <img
          src={rocketmain}
          alt=""
          className="w-full translate-y-6 relative z-10 lg:w-[80%] lg:mx-auto"
        />
      </div>
    </div>
  );
};
