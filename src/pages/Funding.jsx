import React, { useEffect } from "react";

import { Header } from "../components/Header";

// img

import { Footer } from "../components/Footer";
import rocketmainone from "../assets/image/common/rocket-main-one.png";
import rocketmaintwo from "../assets/image/common/rocket-main-two.png";
import hand from "../assets/image/home/hand.png";
import handmobile from "../assets/image/home/hand-mobile.png";
import { Join } from "../components/home/Join";
import { Helmet } from "react-helmet";
export const Funding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>BP2025 | Funding Roadmap</title>
        <meta
          name="description"
          content="See how BP2025 allocates funds to create real change, from launching innovative products to developing Black-owned businesses. Every dollar supports our shared vision."
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
          <h2 className="text-[14px] text-[#fff] mont-light px-[20px] py-[10px] border-[1px] border-[#757575] inline-block rounded-full mb-6 md:hidden">
            Get Involved
          </h2>

          <h1 className="text-[90px] z-10 text-[#fff] mont-bold text-center leading-[75px] md:text-[62px] md:leading-[60px]">
            Funding <br />
            Roadmap
          </h1>
        </div>

        <div className="mt-[150px] md:mt-[40px] md:mb-[40px] mb-[182px] mx-auto max-w-[1063px] w-[95%]">
          <h1 className="text-[42px] w-[766px] mx-auto mont-bold text-[#141414] leading-[52px] text-center lg:w-full md:text-[28px] md:leading-[32px]">
            BP2025 Funding Roadmap: Empowering Economic Unification and
            Community Growth
          </h1>

          <p className="text-[#232323] md:text-[17px] mont-light text-center text-[22px] mt-[15px]">
            We are committed to creating lasting change by strengthening the
            infrastructure of the Black community. Your support is essential to
            helping us achieve this mission. Below is a clear roadmap of how
            your contributions will drive meaningful progress and help us reach
            key milestones toward economic empowerment and community growth..
          </p>
        </div>

        <div className="w-[980px] lg:w-[95%] mx-auto py-[49px] mb-[150px] after:h-full after:w-[0.5px] after:absolute after:left-1/2 after:-translate-x-1/2 after:bg-[#000] after:top-0 relative">
          <div className="grid grid-cols-2 gap-[80px] mb-[70px] md:gap-[40px]">
            <div>
              <h1 className="text-[32px] md:text-[22px] text-right text-[#000] mont-light leading-[32px]">
                <span className="mont-bold">$5 Million:</span> Laying the
                Foundation for Community Development
              </h1>
            </div>
            <div>
              <h2 className="text-[16px] hidden md:text-[17px] mont-light text-[#000]">
                With $5 million in funding, BP2025 will be able to focus on:
              </h2>
              <h1 className="text-[24px] md:leading-[20px] md:text-[18px] mont-bold text-[#000] after:w-[21px] after:h-[21px] after:bg-[#808080] after:-left-[51px] after:top-[10px] after:border-[1px] after:border-[#000] after:absolute relative after:rounded-full after:z-10 md:after:-left-[30px]">
                Phase 1: Community Development & KYN Launch
              </h1>
              <ul className="mt-[15px] flex flex-col gap-2 pl-4 md:pl-0">
                <li className="text-[18px] md:text-[17px] mont-light text-[#000]">
                 Provide early access to initiatives and resources through platforms like Discord,
                   fostering a sense of connection and collaboration among members. 
                </li>
              
                <li className="text-[18px]  md:text-[17px] mont-light text-[#000]">
                 Develop online and in-person spaces to enhance engagement, 
                  including community forums, workshops, and events.
                </li>
                <li className="text-[18px]  md:text-[17px] mont-light text-[#000]">
                Launch KYN, enabling the community to participate in the financial growth alongside BP2025.
                </li>
                <li className="text-[18px]  md:text-[17px] mont-light text-[#000]">
                Begin welcoming community members who are ready to actively contribute to BP2025’s mission.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[80px] mb-[70px] md:gap-[40px]">
            <div>
              <h1 className="text-[32px] md:text-[22px]  text-right text-[#000] mont-light leading-[32px]">
                <span className="mont-bold">$15 Million: </span>
                  Attracting Investment & Forging Partnerships
              </h1>
            </div>
            <div>
              <h2 className="text-[16px] hidden md:text-[17px] mont-light text-[#000]">
                 At $15 million, BP2025 will further its progress by:
              </h2>
              <h1 className="text-[24px] md:text-[18px] mont-bold text-[#000] after:w-[21px] after:h-[21px] after:bg-[#808080] after:-left-[51px] after:top-[10px] after:border-[1px] after:border-[#000] after:absolute relative after:rounded-full after:z-10  md:after:-left-[30px]">
                Phase 2: Attracting Investment & Forging Partnerships
              </h1>
              <ul className="mt-[15px] flex flex-col gap-2 pl-4 md:pl-0">
                <li className="text-[18px] md:text-[17px] mont-light text-[#000]">
                  Establishing partnerships with businesses that share our
                  values helps to reduce operational costs and increase
                  community-driven opportunities.
                </li>
                <li className="text-[18px] md:text-[17px]  mont-light text-[#000]">
                  Expanding the role of KYN offers new ways for the community to
                  participate in financial growth.
                </li>
                <li className="text-[18px] md:text-[17px]  mont-light text-[#000]">
                  Beginning to lay the infrastructure needed to support the
                  BP2025 ecosystem, preparing for long-term growth.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[80px] mb-[70px] md:gap-[40px]">
            <div>
              <h1 className="text-[32px] md:text-[22px] text-right text-[#000] mont-light leading-[32px]">
                <span className="mont-bold">$25 Million: </span>
               Building a Full-Time Team and Internal Operations
              </h1>
            </div>
            <div>
              <h2 className="text-[18px] hidden md:text-[17px] mont-light text-[#000]">
                With $25 million, BP2025 will build the infrastructure needed to
                scale our initiatives:
              </h2>
              <h1 className="text-[24px] md:text-[18px] mont-bold text-[#000] after:w-[21px] after:h-[21px] after:bg-[#808080] after:-left-[51px] after:top-[10px] after:border-[1px] after:border-[#000] after:absolute relative after:rounded-full after:z-10  md:after:-left-[30px]">
                Phase 3: Long-Term Internal Team Development
              </h1>
              <ul className="mt-[15px] flex flex-col gap-2 pl-4 md:pl-0">
                <li className="text-[18px] md:text-[17px] mont-light text-[#000]">
                  Build a dedicated, full-time team focused on executing
                  BP2025’s mission and goals.
                </li>
                <li className="text-[18px] md:text-[17px] mont-light text-[#000]">
                  Provide leadership opportunities for current volunteers,
                  allowing them to continue contributing to the mission.
                </li>
                <li className="text-[18px] md:text-[17px] mont-light text-[#000]">
                  Develop key products and services, such as a business
                  directory and BP card, to support economic unification and
                  community growth.
                </li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[80px] mb-[70px] md:gap-[40px]">
            <div>
              <h1 className="text-[32px] md:text-[22px] text-right text-[#000] mont-light leading-[32px]">
                <span className="mont-bold">$30 Million:</span> Product
                Development to Fuel Growth
              </h1>
            </div>
            <div>
              <h2 className="text-[16px] hidden md:text-[17px] mont-light text-[#000]">
                At $30 million, BP2025 will begin developing impactful products
                to further our mission:
              </h2>
              <h1 className="text-[24px] md:text-[18px] mont-bold text-[#000] after:w-[21px] after:h-[21px] after:bg-[#808080] after:-left-[51px] after:top-[10px] after:border-[1px] after:border-[#000] after:absolute relative after:rounded-full after:z-10  md:after:-left-[30px]">
                Phase 4: Product Development to Fuel Growth
              </h1>
              <ul className="mt-[15px] flex flex-col gap-2 pl-4 md:pl-0">
                <li className="text-[18px] md:text-[17px] mont-light text-[#000]">
                  Develop the Black-Owned Business App, a user-friendly platform
                  that helps users discover and shop with vetted Black-owned
                  businesses.
                </li>
                <li className="text-[18px] md:text-[17px] mont-light text-[#000]">
                  Launch the BP Card, which will strengthen partnerships with
                  Black-owned businesses by offering rewards, cashback, and
                  other benefits.
                </li>
                <li className="text-[18px] md:text-[17px] mont-light text-[#000]">
                  Integrate KYN into both the app and BP card, enhancing the
                  user experience and supporting financial growth within the
                  community.
                </li>
              </ul>
            </div>
          </div>
{/*           <div className="grid grid-cols-2 gap-[80px] mb-[70px] md:gap-[40px]">
            <div>
              <h1 className="text-[32px] md:text-[22px] text-right text-[#000] mont-light leading-[32px]">
                <span className="mont-bold">$30 Million+: </span>
                Long-Term Sustainability and Expansion
              </h1>
            </div>
            <div>
              <h2 className="text-[16px] md:text-[17px] mont-light text-[#000] after:w-[21px] after:h-[21px] after:bg-[#808080] after:-left-[51px] after:top-[20px] after:border-[1px] after:border-[#000] after:absolute relative after:rounded-full after:z-10  md:after:-left-[30px]">
                Beyond $30 million, BP2025 will continue to grow and refine its
                impact:
              </h2>

              <ul className="mt-[15px] flex flex-col gap-2 pl-4 md:pl-0">
                <li className="text-[18px] md:text-[17px] mont-light text-[#000]">
                  Expand product offerings and community-driven initiatives,
                  ensuring BP2025’s sustainability over time.
                </li>
                <li className="text-[18px] md:text-[17px] mont-light text-[#000]">
                  Strengthen and grow partnerships that extend BP2025’s reach
                  and impact within the Black community.
                </li>
                <li className="text-[18px] md:text-[17px] mont-light text-[#000]">
                  Ensure BP2025 remains a sustainable and empowering force for
                  economic growth, long-term prosperity, and unification.
                </li>
              </ul>
            </div>
          </div> */}
        </div>

        <div className="max-w-[1280px] mx-auto grid grid-cols-2 pt-[73px] pr-[73px] bg-[#070707] w-[95%] rounded-[40px] items-center overflow-hidden gap-20 mb-[140px] lg:grid-cols-1 lg:pt-0 lg:px-0 md:mb-[80px]">
          <div className="relative lg:order-2">
            <div
              className="bg-[#676767] w-[400px] h-[400px] absolute top-1/2
             -translate-y-1/2 left-1/2 -translate-x-1/2 blur-[100px] rounded-full"
            ></div>
            <img src={hand} alt="" className="w-full relative z-10 lg:hidden" />
            <img
              src={handmobile}
              alt=""
              className="w-full relative z-10 lg:block hidden"
            />
          </div>
          <div className="lg:order-1 lg:pt-[44px] lg:px-[24px]">
            <h1 className="text-[#FFFFFF] mont-bold md:text-center text-[54px] leading-[52px] mb-[30px] md:text-[28px] md:leading-[32px]">
              Together, <br /> We Build a <br /> Stronger Future
            </h1>
            <p className="text-[18px] md:text-[17px] mont-light md:text-center text-[#FFFFFF]">
              Each contribution helps BP2025 take the next step toward achieving
              our goals. As we reach each funding milestone, we will continue to
              focus on creating opportunities for the community, providing
              access to resources, and fostering financial empowerment for
              generations to come. Thank you for being a part of this journey.
            </p>
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
