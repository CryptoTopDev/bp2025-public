import React, { useEffect } from "react";

import { Header } from "../components/Header";

// img

import { Footer } from "../components/Footer";
import rocketmainone from "../assets/image/common/rocket-main-one.png";
import rocketmaintwo from "../assets/image/common/rocket-main-two.png";
import missionRocket from "../assets/image/about/mission-rocket.png";
import handMobile from "../assets/image/about/hand-mobie.png";
import hands from "../assets/image/about/hands.png";
import team from "../assets/image/about/team.png";
import { Join } from "../components/home/Join";
// import { FaqAbout } from "../components/about/FaqAbout";
import { Link } from "react-router";
import { Helmet } from "react-helmet";
export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>BP2025 | Mission</title>
        <meta
          name="description"
          content="BP2025’s mission is to create tailored systems for the Black community, including financial services, housing developments, and more. Discover how we are uniting for a self-sustained future."
        />
      </Helmet>

      {/* header */}
      <Header active={2} />

      <section>
        <div className="w-[95%] max-w-[1280px] mx-auto bg-[#070707] h-[360px] rounded-[50px] flex flex-col items-center justify-center relative mb-[90px] lg:overflow-hidden md:mb-[80px] md:h-[300px]">
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
            About Us
          </h2>
          <h1 className="text-[90px] text-[#fff] mont-bold z-10 md:text-[62px]">
            Mission
          </h1>
        </div>

        <div className="relative mb-[88px]">
          <img
            src={missionRocket}
            alt=""
            className="absolute left-0 top-0 lg:hidden"
          />
          <div className="w-full max-w-[1280px] mx-auto grid grid-cols-2 h-[461px] items-center lg:grid-cols-1 lg:h-[unset] lg:gap-10">
            <div className="lg:order-2">
              <img
                src={missionRocket}
                alt=""
                className=" hidden lg:block lg:w-full"
              />
            </div>
            <div className="lg:order-1 lg:w-[95%] lg:mx-auto">
              <h1 className="text-[42px] text-[#000] mont-bold md:text-[28px]">
                Our Mission
              </h1>
              <p className="text-[22px] mont-light text-[#232323] md:text-[17px]">
              At BP2025, we are on a mission to drive economic unification, fuel development, and create a legacy through innovation and shared success. Our purpose is rooted in driving economic unification, fostering development, and creating a legacy that empowers and uplifts communities. By harnessing the collective strength of our resources and expertise, we build innovative systems and services tailored to the unique needs of our community. 
              Together, we are shaping a future of shared success and lasting impact.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[95%] max-w-[1280px] mx-auto h-[562px] bg-[#000000] rounded-[40px] px-[108px] items-center grid grid-cols-2 relative overflow-hidden mb-[150px] lg:grid-cols-1 lg:h-[unset] lg:px-0">
          <h1 className="text-[72px] md:text-[42px] md:leading-[42px] mont-bold text-[#fff] leading-[71px] lg:px-[70px] lg:pt-[44px] md:!px-[40px]">
            BP2025 <br className="md:hidden" />
            Where Economical <br className="md:hidden" />
            Unification, <br className="md:hidden" />
            Meets <br className="md:hidden" />
            Innovation
          </h1>
          <img
            src={hands}
            alt=""
            className="absolute right-0 lg:static lg:hidden"
          />
          <img
            src={handMobile}
            alt=""
            className="absolute right-0 lg:static hidden lg:block lg:w-full"
          />
        </div>

{/*         <div className="w-[95%] max-w-[1280px] mx-auto mb-[150px]">
          <h1 className="text-[42px] mont-bold text-[#141414] text-center mb-[30px] md:text-[28px]">
            Frequently Asked Questions
          </h1>
          <div className="grid grid-cols-2 gap-[50px] w-[1098px] lg:w-full mx-auto lg:grid-cols-1 lg:gap-[0px]">
            <div>
              <FaqAbout />
              <FaqAbout />
              <FaqAbout />
            </div>
            <div>
              <FaqAbout />
              <FaqAbout />
              <FaqAbout />
            </div>
          </div>
        </div> */}

        <div className="w-[95%] max-w-[1280px] mx-auto h-[562px] bg-[#000000] rounded-[40px] px-[108px] items-center grid grid-cols-2 relative overflow-hidden mb-[150px] lg:grid-cols-1 lg:h-[unset] lg:px-[0px]">
          <img
            src={team}
            alt=""
            className="absolute left-0 lg:static lg:order-2 md:mt-10"
          />

          <div className="lg:hidden"></div>
          <div className="lg:order-1 lg:px-[30px] lg:pt-[60px]">
            <h1 className="text-[42px] md:text-[28px] md:text-center md:leading-[42px] mont-bold text-[#fff] leading-[71px]">
              Join Our Team
            </h1>

            <p className="text-[18px] md:text-[17px] md:leading-[26px] md:text-center md:mt-3 mont-light text-[#FFFFFF] mb-[35px]">
             At BP2025, we are on a mission to drive economic unification and empower communities through innovation and collaboration. As we work toward creating lasting change, we’re looking for passionate individuals who share our vision and values. If you’re ready to make a difference and contribute to something bigger, we invite you to explore career opportunities with us.
              <br />
              <br />
            </p>
            <Link
              to="/careers"
              className="flex items-center gap-6 text-[#000] bg-[#fff] w-[165px] h-[50px] mont-bold justify-center rounded-full md:mx-auto md:text-[16px]"
            >
              Join the Team
            </Link>
          </div>
        </div>

        {/* join */}
        <Join />
      </section>

      {/* footer */}
      <Footer active={2} />
    </div>
  );
};
