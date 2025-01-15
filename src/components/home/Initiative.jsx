import React from "react";
import hand from "../../assets/image/home/hand.png";
import handmobile from "../../assets/image/home/hand-mobile.png";

export const Initiative = () => {
  return (
    <div className="max-w-[1280px] mx-auto grid grid-cols-2 pt-[73px] pr-[73px] bg-[#070707] w-[95%] rounded-[40px] items-center overflow-hidden gap-20 mb-[140px] lg:h-[unset] lg:grid-cols-1 lg:pl-[20px] lg:pr-0 lg:pt-[37px] md:mb-[80px]">
      <div className="relative lg:order-2">
        <div
          className="bg-[#676767] w-[400px] h-[400px] absolute top-1/2
             -translate-y-1/2 left-1/2 -translate-x-1/2 blur-[100px] rounded-full"
        ></div>
        <img src={hand} alt="" className="w-full relative z-10 lg:hidden" />
        <img
          src={handmobile}
          alt=""
          className="w-full relative z-10 hidden lg:block"
        />
      </div>
      <div className="lg:order-1 lg:pr-[20px]">
        <h1 className="text-[#FFFFFF] mont-bold text-[54px] md:text-[42px] md:leading-[42px] leading-[52px] mb-[30px]">
          Our <br /> initiatives <br /> include:
        </h1>
        <ul className="flex flex-col gap-[15px]">
          <li className="text-[16px] mont-bold text-[#FFFFFF] bg-[#161616] border-[1px] border-[#2C2C2C]  h-[52px] md:h-[65px] flex items-center pl-[21px] rounded-[15px] before:w-[10px] before:h-full relative before:left-[0px] md:pr-[15px] before:top-0 before:bg-[#fff] before:absolute before:rounded-tl-[15px] before:rounded-bl-[15px] md:text-[16px]">
            Developing platforms that celebrate and amplify excellence.
          </li>
          <li className="text-[16px] mont-bold text-[#FFFFFF] bg-[#161616] border-[1px] border-[#2C2C2C]  h-[52px] flex md:h-[65px] md:pr-[15px] items-center pl-[21px] rounded-[15px] before:w-[10px] before:h-full relative before:left-[0px] before:top-0 before:bg-[#fff] before:absolute before:rounded-tl-[15px] before:rounded-bl-[15px] md:text-[16px]">
            Building financial ecosystems that prioritize shared wealth.
          </li>
          <li className="text-[16px] mont-bold text-[#FFFFFF] bg-[#161616] border-[1px] border-[#2C2C2C]  h-[52px] flex md:h-[65px] md:pr-[15px] items-center pl-[21px] rounded-[15px] before:w-[10px] before:h-full relative before:left-[0px] before:top-0 before:bg-[#fff] before:absolute before:rounded-tl-[15px] before:rounded-bl-[15px] md:text-[16px]">
            Partnering with innovators to empower sustainable growth.
          </li>
        </ul>
      </div>
    </div>
  );
};
