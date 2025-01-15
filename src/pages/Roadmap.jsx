import React, { useEffect } from "react";

import { Header } from "../components/Header";

// img

import { Footer } from "../components/Footer";
import rocketmainone from "../assets/image/common/rocket-main-one.png";
import rocketmaintwo from "../assets/image/common/rocket-main-two.png";
import { Join } from "../components/home/Join";
import { BigFaq } from "../components/faq/BigFaq";
import { Helmet } from "react-helmet";
export const Roadmap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>BP2025 | Roadmap</title>
        <meta
          name="description"
          content="Explore BP2025’s roadmap, from community building to product development. Learn how we’re creating opportunities for growth, unity, and success within the Black community.

"
        />
      </Helmet>
      {/* header */}
      <Header active={2} />

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
            About Us
          </h2>
          <h1 className="text-[90px] text-[#fff] mont-bold z-10 md:text-[62px]">
            Roadmap
          </h1>
        </div>

        <div className="mx-auto max-w-[1064px] w-[95%] mb-[150px]">
          <h1 className="text-[54px] mont-bold text-[#000000] md:text-[28px]">
            Roadmap
          </h1>
          <p className="text-[22px] mont-light text-[#000000] mb-[60px] md:text-[17px]">
            Our journey toward economic empowerment is mapped out in clear,
            actionable phases designed to ensure measurable progress and
            sustainable impact. Here’s how we plan to achieve our mission:
          </p>
          <BigFaq
            heading="Phase 1: Community Development"
            goal="Cultivate a vibrant and welcoming community where individuals can come together to fellowship, learn, grow, and stay connected with BP2025’s initiatives."
          />

          <BigFaq
            heading="Phase 2: Attracting Investment & Forging Partnerships"
            goal="Leverage KYN to gain funding while establishing strategic
                business partnerships that back BP2025’s mission and
                initiatives."
          />

          <BigFaq
            heading="Phase 3: Long-Term Internal Team Development"
            goal="Build a passionate, full-time team that will propel BP2025’s
                mission and initiatives forward. Our focus will be on creating
                innovative products that foster economic unification and
                community empowerment."
          />
          <BigFaq
            heading="Phase 4: Product Development to Fuel Growth"
            goal="Develop groundbreaking products that advance economic
                unification and empower the community, delivering seamless
                experiences for consumers and businesses, all while integrating
                KYN into the ecosystem."
          />
        </div>

        {/* join */}
        <Join />
      </section>

      {/* footer */}
      <Footer active={2} />
    </div>
  );
};
