import React, { useEffect } from "react";

import { Header } from "../components/Header";

// img

import { Footer } from "../components/Footer";
import rocketmainone from "../assets/image/common/rocket-main-one.png";
import rocketmaintwo from "../assets/image/common/rocket-main-two.png";
import missionRocket from "../assets/image/donate/mission.png";
import whoweare from "../assets/image/donate/who-we-area.png";

import hands from "../assets/image/donate/hand.png";
import { Join } from "../components/home/Join";
import { Link } from "react-router";
import { Helmet } from "react-helmet";
export const Donate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>BP2025 | Donate</title>
        <meta
          name="description"
          content="Help us build a stronger, unified Black community. Your donation to BP2025 drives projects that foster financial independence, innovation, and empowerment."
        />
      </Helmet>
      {/* header */}
      <Header active={3} />
      <section>
        <div className="w-[95%] max-w-[1280px] mx-auto bg-[#070707] h-[360px] rounded-[50px] flex flex-col items-center justify-center relative mb-[90px] lg:overflow-hidden md:mb-[80px] md:h-[300px]">
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
          <h2 className="text-[14px] text-[#fff] mont-light px-[20px] py-[10px] border-[1px] border-[#757575] inline-block rounded-full z-10">
            Get Involved
          </h2>
          <h1 className="text-[90px] text-[#fff] mont-bold z-10 md:text-[62px]">
            Donate
          </h1>
        </div>

        <div className="relative ">
          <div className="max-w-[1000px] w-full relative mx-auto grid grid-cols-2 h-[461px] items-center lg:grid-cols-1 lg:h-[unset]">
            <div className="lg:w-[95%] lg:mx-auto lg:mb-3">
              <h1 className="text-[42px] text-[#000] mont-bold md:text-[28px] md:text-center">
                Who We are
              </h1>
              <p className="text-[22px] mont-light text-[#232323] md:text-[17px] md:text-center">
                This is just placeholder text. Don’t be alarmed, this is just
                here to fill up space since your finalized copy isn’t ready yet.
                Once we have your content finalized, we’ll replace this
                placeholder text with your real content.
              </p>
            </div>
            <div>
              <img
                src={whoweare}
                alt=""
                className=" absolute -right-[180px] top-0 lg:static md:w-full"
              />
            </div>
          </div>
        </div>

        <div className="w-[95%] max-w-[1280px] mx-auto h-[562px] bg-[#000000] rounded-[40px] px-[108px] items-center grid grid-cols-2 relative overflow-hidden mb-[90px] lg:grid-cols-1 lg:p-[0px] lg:h-[unset]">
          <img
            src={hands}
            alt=""
            className="absolute left-0 bottom-0 lg:static lg:order-2 lg:w-full"
          />
          <div className="lg:hidden"></div>
          <div className="w-[460px] lg:w-full lg:order-1  lg:p-[30px] lg:pt-[40px] ">
            <h1 className="text-[42px] md:text-[28px] md:leading-[32px] md:text-center mont-bold text-[#fff] leading-[71px] mb-[20px]">
              Make a Donation
            </h1>
            <p className="text-[20px] mont-light text-[#FFFFFF] mb-[30px] md:text-[17px] md:leading-[26px] md:text-center">
              This is just placeholder text. Don’t be alarmed, this is just here
              to fill up space since your finalized copy isn’t ready yet. Once
              we have your content finalized, we’ll replace this placeholder
              text with your real content.
            </p>
            <Link
              to="/"
              className="flex items-center gap-6 text-[#000] bg-[#fff] h-[50px] mont-bold justify-center rounded-full w-full md:w-[151px] md:mx-auto"
            >
              Donate Now
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="max-w-[1000px] w-full pb-[150px] mb-[150px] border-b-[1px] border-b-[#CACACA] mx-auto md:pb-[80px]">
            <div className="lg:grid-cols-1 max-w-[1000px]  grid grid-cols-2 h-[461px] items-center lg:h-[unset] ">
              <div className="w-[95%] md:mx-auto  ">
                <h1 className="text-[42px] text-[#000] mont-bold md:text-[28px]">
                  Our Mission
                </h1>
                <p className="text-[22px] mont-light text-[#232323] md:text-[17px]">
                  BP2025 is dedicated to channeling the $1.8 trillion annual
                  contribution of the Black community to the U.S. economy into
                  strengthening internal infrastructure. Our focus is on
                  creating sustainable systems and services—including social
                  media platforms, financial institutions, and housing
                  developments—that foster economic independence and collective
                  growth.
                </p>
              </div>
              <div>
                <img
                  src={missionRocket}
                  alt=""
                  className="hidden lg:block lg:w-full"
                />
              </div>
            </div>
          </div>
          <img
            src={missionRocket}
            alt=""
            className="absolute right-0 top-0 lg:hidden"
          />
        </div>

        {/* join */}
        <Join />
      </section>
      {/* footer */}
      <Footer active={3} />
    </div>
  );
};
