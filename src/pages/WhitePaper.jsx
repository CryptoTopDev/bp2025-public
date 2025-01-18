import React, { useEffect } from "react";

// components
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// images
import landing from "../assets/image/white-paper/landing.png";
import arrow from "../assets/image/white-paper/arrow.svg";
import coin from "../assets/image/about/vision-coin.png";
export const WhitePaper = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#070707] min-h-[100vh]">
      {/* meta data */}
      <Helmet>
        <title>$KYN | Whitepaper</title>
        <meta name="description" content="Read the KYN Token whitepaper to understand our vision, tokenomics, and roadmap. See how blockchain technology supports our mission of economic growth." />
      </Helmet>

      {/* header components */}
      <Header active={7} />

      <div
        className="h-[394px] bg-mob flex flex-col items-center justify-center mb-[138px] md:mb-[60px]"
        style={{ background: `url(${landing})`, backgroundSize: "cover" }}
      >
        <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[172px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[16px] pt-[4px]">
          KYN whitepaper
        </span>
        <h1 className="text-[72px] md:text-[42px] text-[#000000] text-center mont-bold leading-[90px] md:leading-[40px] ">
          Our <br /> Whitepaper
        </h1>
        <button className="mt-[16px]">
          <img src={arrow} alt="" />
        </button>
      </div>

      <div className="w-[1097px] xl:w-full xl:px-4 lg:grid-cols-1 mx-auto grid grid-cols-[577px_1fr] gap-10 pb-[148px] lg:pb-[60px]">
        <div className="lg:flex-col lg:flex lg:items-center">
          <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[134px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[25px]">
            Download
          </span>
          <h1 className="text-[54px] md:text-[28px] md:leading-[40px] text-[#fff] mont-bold leading-[55px]  lg:text-center">
            Your Roadmap to Understanding KYN: Download the Full Whitepaper
          </h1>
          <p className="text-[16px] md:text-[14px] text-[#FFFFFF] mont-light mt-[30px] mb-[30px] lg:text-center">
            The whitepaper provides a comprehensive breakdown of KYN’s
            tokenomics, vision, and how we plan to use your investment to build
            the future. Learn about our presale details, liquidity pool
            mechanics, and the broader BP2025 mission.
          </p>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/154Fu_D6xI8W4W64HUdJ1j1PU_Yf2WuOT/view?usp=drive_link"
            className="px-[25px] py-[15px] bg-[#fff] text-[#000] mont-bold rounded-full hover:bg-[transparent] hover:text-[#fff] border-[1px] border-[#fff]  transition-all duration-300 "
          >
            Download Whitepaper
          </a>
        </div>
        <div>
          <div className="w-full">
            <img
              src={coin}
              alt=""
              className="w-full lg:w-[600px] lg:mx-auto md:!w-full"
            />
          </div>
        </div>
      </div>

      <Footer active={7} />
    </div>
  );
};
