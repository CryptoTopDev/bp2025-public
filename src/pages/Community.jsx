import React, { useEffect } from "react";

import { Header } from "../components/Header";

// img

import { Footer } from "../components/Footer";
import rocketmainone from "../assets/image/common/rocket-main-one.png";
import rocketmaintwo from "../assets/image/common/rocket-main-two.png";
import tick from "../assets/image/community/tick.svg";

import discord from "../assets/image/community/discord.png";
import { Link } from "react-router";
import { Helmet } from "react-helmet";
export const Community = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>BP2025 | Community</title>
        <meta
          name="description"
          content="Connect with the vibrant BP2025 community. Engage in forums, events, and initiatives that empower the Black community and support economic independence."
        />
      </Helmet>
      {/* header */}
      <Header active={10} />

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

          <h1 className="text-[90px] text-[#fff] mont-bold z-10 md:text-[52px]">
            Community{" "}
          </h1>
        </div>

        <div className="my-[150px] mb-[85px] md:my-[50px] md:mb-[60px] mx-auto max-w-[1084px] w-full">
          <h1 className="text-[42px] md:text-[28px] md:leading-[32px] mont-bold text-[#141414] leading-[52px] text-center">
            BP2025 Community: <br />A Place for Fellowship, Growth, and
            Empowerment
          </h1>

          <p className="text-[#232323] md:text-[17px] mont-light text-center text-[22px] mt-[15px]">
            Welcome to the <span className="mont-bold">BP2025 Community,</span>{" "}
            where individuals passionate about strengthening the community come
            together to learn, grow, and stay connected with BP2025’s
            initiatives. This space is vital in helping us achieve our goal of
            economic unification and empowerment. As part of Phase 1, our
            community will be at the core of BP2025, engaged, informed, and
            empowered to contribute to our mission.
          </p>
        </div>

        <div className="bg-[#000000] max-w-[1280px] mx-auto w-[95%] p-[80px] mb-32  rounded-[40px] lg:py-[50px] lg:px-[30px] lg:mb-20 md:!mb-16">
          <h1 className="text-[42px] md:text-[28px] md:leading-[32px] mont-bold text-[#FFFFFF] text-center">
            Join the BP2025 Community
          </h1>
          <p className="text-[16px] mont-light text-center w-[848px] mx-auto text-[#fff] mt-[15px] mb-[30px] lg:w-full md:text-[17px]"></p>

          <Link
            target="_blank"
            to="https://discord.com/invite/bp2025"
            className="flex items-center gap-6 text-[#000] bg-[#fff] h-[50px] mont-bold justify-center rounded-full w-[200px] mx-auto md:text-[16px] "
          >
            Join the community
          </Link>

          <div className="hidden grid-cols-3 gap-[32px] lg:grid-cols-1 lg:gap-[10px] ">
            <div className="bg-[#DADADA] rounded-[15px] p-[20px] flex flex-col items-center justify-center">
              <h1 className="text-[36px] font-semibold poppins">
                $100 <span className="text-[24px]">/month</span>
              </h1>
              <h2 className="text-[24px] mont-light">Basic Plan</h2>
              <p className="text-[#555555] mont-light text-[16px] text-center">
                Access to basic features without any subscription fee.
              </p>
              <ul className="mt-[20px] mb-[30px]">
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
              </ul>

              <Link
                to="/"
                className="flex items-center gap-6 text-[#fff] bg-[#000] h-[50px] mont-bold justify-center rounded-full w-full"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-[#DADADA] rounded-[15px] p-[20px] flex flex-col items-center justify-center">
              <h1 className="text-[36px] font-semibold poppins">
                $0 <span className="text-[24px]">/month</span>
              </h1>
              <h2 className="text-[24px] mont-light">Free Plan</h2>
              <p className="text-[#555555] mont-light text-[16px] text-center">
                Access to basic features without any subscription fee.
              </p>
              <ul className="mt-[20px] mb-[30px]">
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
              </ul>

              <Link
                to="/"
                className="flex items-center gap-6 text-[#fff] bg-[#000] h-[50px] mont-bold justify-center rounded-full w-full"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-[#DADADA] rounded-[15px] p-[20px] flex flex-col items-center justify-center">
              <h1 className="text-[36px] font-semibold poppins">
                $200 <span className="text-[24px]">/month</span>
              </h1>
              <h2 className="text-[24px] mont-light">Premium Plan</h2>
              <p className="text-[#555555] mont-light text-[16px] text-center">
                Access to basic features without any subscription fee.
              </p>
              <ul className="mt-[20px] mb-[30px]">
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
              </ul>

              <Link
                to="/"
                className="flex items-center gap-6 text-[#fff] bg-[#000] h-[50px] mont-bold justify-center rounded-full w-full"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#000000] max-w-[1064px] mx-auto w-[95%] py-[94px] mb-[33px] rounded-[40px]  lg:py-[40px] lg:px-[30px]">
          <div className="w-[848px] mx-auto lg:w-full">
            <h1 className="text-[42px] md:text-[28px] text-[#FFFFFF] mb-[60px] mont-bold md:mb-[15px]">
              What Our Community Provides
            </h1>
            <ul className="flex flex-col gap-10">
              <li className="flex items-start">
                <p className="text-[20px] mont-bold text-[#fff] w-[216px] min-w-[216px] md:text-[17px] lg:min-w-[120px] lg:w-[120px]">
                  Informative
                </p>
                <p className="text-[20px] md:text-[17px] mont-light text-[#FFFFFF]">
                  Stay up-to-date on BP2025’s initiatives, events, and the
                  latest progress with KYN. Valuable
                </p>
              </li>
              <li className="flex items-start">
                <p className="text-[20px] mont-bold text-[#fff] w-[216px] min-w-[216px] md:text-[17px] lg:min-w-[120px] lg:w-[120px]">
                  Valuable
                </p>
                <p className="text-[20px] md:text-[17px] mont-light text-[#FFFFFF]">
                  Access exclusive resources and tools for personal and
                  collective growth, including workshops and financial tools.
                </p>
              </li>
              <li className="flex items-start">
                <p className="text-[20px] mont-bold text-[#fff] w-[216px] min-w-[216px] md:text-[17px] lg:min-w-[120px] lg:w-[120px]">
                  Engaging
                </p>
                <p className="text-[20px] md:text-[17px] mont-light text-[#FFFFFF]">
                  Participate in meaningful discussions, Q&A sessions, and
                  virtual events that foster connection and collaboration.
                </p>
              </li>
              <li className="flex items-start">
                <p className="text-[20px] mont-bold text-[#fff] w-[216px] min-w-[216px] md:text-[17px] lg:min-w-[120px] lg:w-[120px]">
                  Supportive
                </p>
                <p className="text-[20px] md:text-[17px] mont-light text-[#FFFFFF]">
                  Offer advice, share guidance, and receive mentorship from
                  fellow members in a supportive environment.
                </p>
              </li>
              <li className="flex items-start">
                <p className="text-[20px] mont-bold text-[#fff] w-[216px] min-w-[216px] md:text-[17px] lg:min-w-[120px] lg:w-[120px]">
                  Empowering
                </p>
                <p className="text-[20px] md:text-[17px] mont-light text-[#FFFFFF]">
                  Gain the knowledge and tools to actively contribute to
                  BP2025’s mission and make a lasting impact.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative mb-[80px] mt-[50px] md:mb-[40px]">
          <div className="w-full max-w-[1000px] mx-auto  grid grid-cols-2 h-[682px] items-center lg:grid-cols-1 lg:h-[unset]">
            <div className="lg:w-[95%] lg:mx-auto lg:mb-5">
              <h1 className="text-[54px] md:text-center md:text-[28px] md:leading-[32px] text-[#000] leading-[52px] mont-bold">
                Join the BP2025 Community Today!
              </h1>
              <p className="text-[20px] md:text-center md:text-[17px] mont-light text-[#232323] mt-[30px]">
                Our community is where collaboration, growth, and empowerment
                happen. Whether you’re here to learn, connect, or contribute,
                BP2025’s Discord offers you the opportunity to be part of
                something much larger than yourself.
              </p>
              <p className="text-[20px] md:text-center mont-bold text-[#232323] mt-[30px]">
                Join us today and start making an impact in shaping the future
                of economic empowerment and unity for the Black community
              </p>
            </div>
            <div>
              <img
                src={discord}
                alt=""
                className="hidden lg:block lg:ml-auto md:w-full"
              />
            </div>
          </div>

          <img
            src={discord}
            alt=""
            className="absolute right-0 top-0 lg:hidden"
          />
        </div>

        <div className="bg-[#000000] max-w-[1280px] mx-auto w-[95%] p-[80px] mb-32  rounded-[40px] lg:py-[50px] lg:px-[30px] lg:mb-20">
          <h1 className="text-[42px] md:text-[28px] md:leading-[32px] mont-bold text-[#FFFFFF] text-center">
            Join the BP2025 Community
          </h1>
          <p className="text-[16px] mont-light text-center w-[848px] mx-auto text-[#fff] mt-[15px] mb-[30px] lg:w-full md:text-[17px]"></p>

          <Link
            target="_blank"
            to="https://discord.com/invite/bp2025"
            className="flex items-center gap-6 text-[#000] bg-[#fff] h-[50px] mont-bold justify-center rounded-full w-[200px] mx-auto md:text-[16px] "
          >
            Join the community
          </Link>

          <div className="hidden grid-cols-3 gap-[32px] lg:grid-cols-1 lg:gap-[10px] ">
            <div className="bg-[#DADADA] rounded-[15px] p-[20px] flex flex-col items-center justify-center">
              <h1 className="text-[36px] font-semibold poppins">
                $100 <span className="text-[24px]">/month</span>
              </h1>
              <h2 className="text-[24px] mont-light">Basic Plan</h2>
              <p className="text-[#555555] mont-light text-[16px] text-center">
                Access to basic features without any subscription fee.
              </p>
              <ul className="mt-[20px] mb-[30px]">
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
              </ul>

              <Link
                to="/"
                className="flex items-center gap-6 text-[#fff] bg-[#000] h-[50px] mont-bold justify-center rounded-full w-full"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-[#DADADA] rounded-[15px] p-[20px] flex flex-col items-center justify-center">
              <h1 className="text-[36px] font-semibold poppins">
                $0 <span className="text-[24px]">/month</span>
              </h1>
              <h2 className="text-[24px] mont-light">Free Plan</h2>
              <p className="text-[#555555] mont-light text-[16px] text-center">
                Access to basic features without any subscription fee.
              </p>
              <ul className="mt-[20px] mb-[30px]">
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
              </ul>

              <Link
                to="/"
                className="flex items-center gap-6 text-[#fff] bg-[#000] h-[50px] mont-bold justify-center rounded-full w-full"
              >
                Get Started
              </Link>
            </div>
            <div className="bg-[#DADADA] rounded-[15px] p-[20px] flex flex-col items-center justify-center">
              <h1 className="text-[36px] font-semibold poppins">
                $200 <span className="text-[24px]">/month</span>
              </h1>
              <h2 className="text-[24px] mont-light">Premium Plan</h2>
              <p className="text-[#555555] mont-light text-[16px] text-center">
                Access to basic features without any subscription fee.
              </p>
              <ul className="mt-[20px] mb-[30px]">
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#000000]">
                  <img src={tick} alt="" />
                  Text Placeholder
                </li>
              </ul>

              <Link
                to="/"
                className="flex items-center gap-6 text-[#fff] bg-[#000] h-[50px] mont-bold justify-center rounded-full w-full"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer active={10} />
    </div>
  );
};
