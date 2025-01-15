import React, { useEffect } from "react";

import { Header } from "../components/Header";

// img

import { Footer } from "../components/Footer";
import rocketmainone from "../assets/image/common/rocket-main-one.png";
import rocketmaintwo from "../assets/image/common/rocket-main-two.png";
import { Join } from "../components/home/Join";
import { FaqAbout } from "../components/about/FaqAbout";
import { Helmet } from "react-helmet";
export const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>BP2025 | FAQ</title>
        <meta
          name="description"
          content="BP2025’s mission is to create tailored systems for the Black community, including financial services, housing developments, and more. Discover how we are uniting for a self-sustained future."
        />
      </Helmet>

      {/* header */}
      <Header active={8} />

      <section>
        <div className="w-[95%] max-w-[1280px] mx-auto bg-[#070707] h-[360px] rounded-[50px] flex flex-col items-center justify-center relative mb-[60px] lg:overflow-hidden md:mb-[30px] md:h-[300px]">
          <img
            src={rocketmainone}
            alt=""
            className="absolute left-[150px] lg:-left-10 lg:w-[150px] lg:-top-14"
          />
          <img
            src={rocketmaintwo}
            alt=""
            className="absolute right-[120px] bottom-0 lg:-right-5 lg:w-[120px]"
          />
          <h2 className="text-[14px] text-[#fff] mont-light px-[20px] py-[10px] border-[1px] border-[#757575] inline-block rounded-full z-10">
            FAQ
          </h2>
          <h1 className="text-[60px] leading-[70px] text-center text-[#fff] mont-bold z-10 md:text-[35px] md:leading-[40px]">
            Frequently <br /> Asked Question
          </h1>
        </div>

        <div className="w-[95%] max-w-[1250px] mx-auto mb-[50px]">
          <div className="grid grid-cols-2 gap-[50px]  lg:w-full mx-auto lg:grid-cols-1 lg:gap-[0px]">
            <div>
              <FaqAbout />
              <FaqAbout />
              <FaqAbout />
              <FaqAbout />
              <FaqAbout />
              <FaqAbout />
            </div>
            <div>
              <FaqAbout />
              <FaqAbout />
              <FaqAbout />
              <FaqAbout />
              <FaqAbout />
              <FaqAbout />
            </div>
          </div>
        </div>

        {/* join */}
        <Join />
      </section>

      {/* footer */}
      <Footer active={8} />
    </div>
  );
};
