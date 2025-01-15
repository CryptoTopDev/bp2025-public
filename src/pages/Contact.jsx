import React, { useEffect } from "react";

import { Header } from "../components/Header";

// img

import { Footer } from "../components/Footer";
import rocketmainone from "../assets/image/common/rocket-main-one.png";
import rocketmaintwo from "../assets/image/common/rocket-main-two.png";
import email from "../assets/image/contact/email.svg";
import { Helmet } from "react-helmet";
export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>BP2025 | Contact Us</title>
        <meta
          name="description"
          content="Reach out to BP2025 with your questions, ideas, or interest in collaboration. Join us in empowering the Black community and creating sustainable change."
        />
      </Helmet>
      {/* header */}
      <Header active={7} />

      <section>
        <div className="w-[95%] max-w-[1280px] mx-auto bg-[#070707] h-[360px] rounded-[50px] flex flex-col items-center justify-center relative mb-[90px] lg:overflow-hidden  md:h-[300px] md:mb-[24px]">
          <img
            src={rocketmainone}
            alt=""
            className="absolute left-[150px] lg:-left-10 lg:w-[134px] lg:-top-14"
          />
          <img
            src={rocketmaintwo}
            alt=""
            className="absolute right-[120px] bottom-0 lg:-right-5 lg:w-[98px]"
          />

          <h1 className="text-[90px] text-[#fff] mont-bold z-10 md:text-[52px]">
            Contact Us
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-[19px] mx-auto max-w-[1064px] w-[95%] lg:grid-cols-1 mb-[150px] md:gap-[10px]">
          <div className="px-[50px] py-[40px] bg-[#000] rounded-[30px] flex flex-col items-start gap-[18px] sm:gap-[13px] sm:px-[30px]">
            <img src={email} alt="" />
            <h1 className="text-[18px] mont-bold text-[#FFFFFF]">
              BP2025 Partnerships{" "}
            </h1>
            <p className="text-[18px] sm:text-[14px] mont-light text-[#fff]">
              partnerships@officialblackproject2025.com <br />
            </p>
          </div>
          <div className="px-[50px] py-[40px] bg-[#000] rounded-[30px] flex flex-col items-start gap-[18px] sm:gap-[13px] sm:px-[30px]">
            <img src={email} alt="" />
            <h1 className="text-[18px] mont-bold text-[#FFFFFF]">
              BP2025 Recruiting{" "}
            </h1>
            <p className="text-[18px]  sm:text-[14px]  mont-light text-[#fff]">
              recruiting@officialblackproject2025.com <br />
            </p>
          </div>
          <div className="px-[50px] py-[40px] bg-[#000] rounded-[30px] flex flex-col items-start gap-[18px] sm:gap-[13px] sm:px-[30px]">
            <img src={email} alt="" />
            <h1 className="text-[18px] mont-bold text-[#FFFFFF]">
              BP2025 Support
            </h1>
            <p className="text-[18px]  sm:text-[14px]  mont-light text-[#fff]">
              hello@officialblackproject2025.com <br />
            </p>
          </div>
          <div className="px-[50px] py-[40px] bg-[#000] rounded-[30px] flex flex-col items-start gap-[18px] sm:gap-[13px] sm:px-[30px]">
            <img src={email} alt="" />
            <h1 className="text-[18px] mont-bold text-[#FFFFFF]">
              BP2025 Legal
            </h1>
            <p className="text-[18px]  sm:text-[14px]  mont-light text-[#fff]">
              legal@officialblackproject2025.com <br />
            </p>
          </div>
          <div className="px-[50px] py-[40px] bg-[#000] rounded-[30px] flex flex-col items-start gap-[18px] sm:gap-[13px] sm:px-[30px]">
            <img src={email} alt="" />
            <h1 className="text-[18px] mont-bold text-[#FFFFFF]">
              BP2025 Press
            </h1>
            <p className="text-[18px]  sm:text-[14px]  mont-light text-[#fff]">
              press@officialblackproject2025.com <br />
            </p>
          </div>
          <div className="px-[50px] py-[40px] bg-[#000] rounded-[30px] flex flex-col items-start gap-[18px] sm:gap-[13px] sm:px-[30px]">
            <img src={email} alt="" />
            <h1 className="text-[18px] mont-bold text-[#FFFFFF]">
              BP2025 Feedback
            </h1>
            <p className="text-[18px]  sm:text-[14px]  mont-light text-[#fff]">
              feedback@officialblackproject2025.com <br />
            </p>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer active={7} />
    </div>
  );
};
