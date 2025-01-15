import React from "react";
import { Link } from "react-router";
import arrow from "../../assets/image/home/arrow-footer.png";
import joinmbl from "../../assets/image/home/join-mbl.png";

export const Join = () => {
  return (
    <div className="relative pb-[150px] lg:pb-[50px]">
      <div className="max-w-[1280px] mx-auto w-[95%]  relative z-10">
        <h1 className="w-[695px] mx-auto text-[#000000] text-[72px] mont-bold leading-[71px] text-center mb-[30px] md:text-[42px] md:leading-[45px] md:w-full">
          Join us as we unite for a brighter tomorrow.
        </h1>
        <Link
          to="/community"
          className="w-[216px] h-[50px] mont-bold text-[16px] text-[#000] flex items-center justify-center border-[#000] border-[1px] rounded-full mx-auto"
        >
          Join the Community
        </Link>
      </div>

      <img
        src={arrow}
        alt=""
        className="absolute bottom-0 left-0 w-full lg:hidden"
      />
      <img src={joinmbl} alt="" className="mt-4 w-[90%] hidden lg:block" />
    </div>
  );
};
