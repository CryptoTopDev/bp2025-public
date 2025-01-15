import React, { useEffect } from "react";

import { Header } from "../components/Header";

// img

import { Footer } from "../components/Footer";
import rocketmainone from "../assets/image/common/rocket-main-one.png";
import rocketmaintwo from "../assets/image/common/rocket-main-two.png";
import block from "../assets/image/partnership/block.png";
import hands from "../assets/image/partnership/hands.png";
import { Link } from "react-router";
import { Helmet } from "react-helmet";
export const Partnership = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>Kyn - About</title>
        <meta name="description" content="Demi description" />
      </Helmet>
      {/* header */}
      <Header active={5} />

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
            Partnerships
          </h1>
        </div>

        <div className="relative overflow-hidden">
          <img
            src={block}
            alt=""
            className="absolute right-0 top-0 lg:hidden"
          />
          <div className="w-[95%] lg:grid-cols-1 max-w-[1080px] mx-auto grid grid-cols-[1fr_.6fr] h-[601px] items-center lg:h-[unset] lg:gap-2">
            <div>
              <h1 className="text-[42px] md:text-[24px] md:leading-[32px] md:text-center leading-[52px] text-[#000] mont-bold">
                BP2025 Partnerships: Empowering Businesses, Strengthening
                Communities
              </h1>
              <p className="text-[22px] mont-light md:text-[17px] md:leading-[24px] md:text-center text-[#232323] w-[524px] lg:w-full mt-[15px]">
                At BP2025, we are on a mission to drive economic unification and
                empower communities through innovation and collaboration. As we
                work toward creating lasting change, we’re looking for
                passionate individuals who share our vision and values. If
                you’re ready to make a difference and contribute to something
                bigger, we invite you to explore career opportunities with us.
              </p>
            </div>
            <div>
              <img
                src={block}
                alt=""
                className="w-full lg:block hidden lg:translate-y-10"
              />
            </div>
          </div>
        </div>

        <div className="p-[88px] mb-[150px] bg-[#000000] rounded-[40px] mx-auto w-[95%] max-w-[1280px] lg:p-[40px] lg:px-[20px]">
          <h1 className="text-[42px] md:text-[28px] md:leading-[32px] text-[#FFFFFF] mont-bold">
            How Your Business Can Get Involved with BP2025
          </h1>
          <p className="text-[22px] md:text-[17px] md:leading-[20px] mont-light text-[#FFFFFF] mt-[15px] mb-[60px] lg:mb-[40px]">
            There are multiple ways businesses can contribute to and benefit
            from our growing community:
          </p>
          <ul className="flex flex-col gap-[25px]">
            <li className="px-[20px] py-[40px] bg-[#161616] border-[1px] border-[#2C2C2C] flex items-center rounded-[20px] lg:flex-col lg:px-[10px]">
              <h1 className="w-[189px] min-w-[189px] mr-[25px]  text-[20px] text-[#FFFFFF] mont-bold lg:w-full lg:mr-0 lg:text-center">
                1. Business Directory Listing
              </h1>
              <div className="pl-[25px] lg:p-[5px] border-l-[1px] border-l-[#2C2C2C] py-3 lg:border-l-0 lg:border-t-[1px] lg:broder-t-[#2C2C2C] lg:mt-2 lg:pt-2">
                <p className="text-[#fff] text-[18px] md:text-[17px] mont-light">
                  If your business is Black-owned and committed to quality, we
                  invite you to be featured in our upcoming Black-Owned Business
                  Directory within the BP2025 application. This directory will
                  help community members discover trusted businesses to support,
                  fostering economic growth and strengthening our network.
                </p>
                <ul className="mt-1">
                  <li className="text-[#fff] text-[18px] md:text-[17px] mont-light">
                    <span className="mont-bold">Eligibility:</span> Businesses
                    must be Black-owned and meet our vetting standards for
                    reputation and quality.
                  </li>
                  <li className="text-[#fff] text-[18px] md:text-[17px] mont-light mt-1">
                    <span className="mont-bold">Benefit:</span> Gain visibility
                    among a dedicated community of individuals actively seeking
                    to support Black-owned businesses.
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-[20px] py-[40px] bg-[#161616] border-[1px] border-[#2C2C2C] flex items-center rounded-[20px] lg:flex-col lg:px-[10px]">
              <h1 className="w-[189px] min-w-[189px] mr-[25px]  text-[20px] text-[#FFFFFF] mont-bold lg:w-full lg:mr-0 lg:text-center">
                2. Exclusive Discounts and Offers
              </h1>
              <div className="pl-[25px] lg:p-[5px] border-l-[1px] border-l-[#2C2C2C] py-3 lg:border-l-0 lg:border-t-[1px] lg:broder-t-[#2C2C2C] lg:mt-2 lg:pt-2">
                <p className="text-[#fff] text-[18px] md:text-[17px] mont-light">
                  BP2025 values its community members and offers businesses the
                  chance to give back by offering exclusive discounts and
                  promotions to BP2025 team members and community members. This
                  is a fantastic way to build brand loyalty and attract new
                  customers who want to support businesses that align with the
                  mission of BP2025.
                </p>
                <ul className="mt-1">
                  <li className="text-[#fff] text-[18px] md:text-[17px] mont-light">
                    <span className="mont-bold">Eligibility:</span> Any business
                    interested in providing exclusive offers to the BP2025
                    community.
                  </li>
                  <li className="text-[#fff] text-[18px] md:text-[17px] mont-light mt-1">
                    <span className="mont-bold">Benefit:</span> Increase
                    customer engagement and attract new business by offering
                    special deals to a dedicated group of supporters.
                  </li>
                </ul>
              </div>
            </li>
            <li className="px-[20px] py-[40px] bg-[#161616] border-[1px] border-[#2C2C2C] flex items-center rounded-[20px] lg:flex-col lg:px-[10px]">
              <h1 className="w-[189px] min-w-[189px] mr-[25px]  text-[20px] text-[#FFFFFF] mont-bold lg:w-full lg:mr-0 lg:text-center">
                3. Paid Promotions within Our Community
              </h1>
              <div className="pl-[25px] lg:p-[5px] border-l-[1px] border-l-[#2C2C2C] py-3 lg:border-l-0 lg:border-t-[1px] lg:broder-t-[#2C2C2C] lg:mt-2 lg:pt-2">
                <p className="text-[#fff] text-[18px] md:text-[17px]  mont-light">
                  Businesses that want to amplify their reach within the BP2025
                  community can apply for{" "}
                  <span className="mont-bold">
                    paid promotional opportunities.
                  </span>{" "}
                  As part of our effort to create a thriving ecosystem, we offer
                  businesses the chance to promote their products and services
                  to a highly engaged audience.
                </p>
                <ul className="mt-1">
                  <li className="text-[#fff] text-[18px] md:text-[17px]  mont-light">
                    <span className="mont-bold">Eligibility:</span> Businesses
                    interested in paid promotion must align with the values and
                    goals of BP2025.
                  </li>
                  <li className="text-[#fff] text-[18px] md:text-[17px]  mont-light mt-1">
                    <span className="mont-bold">Benefit:</span> Increase your
                    brand’s visibility and reach by connecting with the BP2025
                    community through targeted promotional campaigns.
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <div className="relative mb-[88px]">
          <img src={hands} alt="" className="absolute left-0 top-0 lg:hidden" />
          <div className="w-full lg:h-[unset] max-w-[1280px] mx-auto grid grid-cols-2 h-[461px] items-center lg:grid-cols-1">
            <div className="lg:order-2">
              <img
                src={hands}
                alt=""
                className="hidden lg:block w-full lg:mt-10"
              />
            </div>
            <div className="w-[559px] lg:w-[95%] lg:mx-auto lg:order-1">
              <h1 className="text-[42px] md:text-[28px] md:leading-[32px] md:text-center text-[#000] mont-bold">
                Why Partner with BP2025?
              </h1>
              <p className="text-[22px] md:text-[17px] md:leading-[20px] md:text-center mt-3 mont-light text-[#232323]">
                By partnering with BP2025, your business will be part of a
                larger mission to empower the Black community, support economic
                unification, and foster a network of trusted, successful
                Black-owned businesses. With opportunities to list your
                business, offer exclusive deals, or run paid promotions, you can
                help us build a stronger, more unified community while growing
                your own business.
              </p>

              <Link
                target="_blank"
                to="https://bp2025.typeform.com/to/wV1IFX85"
                className="flex items-center gap-6 text-[#fff] bg-[#000] h-[50px] mont-bold justify-center rounded-full w-[200px] mt-5  md:text-[16px] md:mx-auto"
              >
                Partner with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer active={5} />
    </div>
  );
};
