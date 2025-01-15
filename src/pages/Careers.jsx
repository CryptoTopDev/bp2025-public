import React, { useEffect } from "react";

import { Header } from "../components/Header";

// img

import { Footer } from "../components/Footer";
import rocketmainone from "../assets/image/common/rocket-main-one.png";
import rocketmaintwo from "../assets/image/common/rocket-main-two.png";
import { Link } from "react-router";
import { Join } from "../components/home/Join";
import { Helmet } from "react-helmet";
export const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>BP2025 | Careers</title>
        <meta
          name="description"
          content="Be part of the BP2025 team and contribute to a groundbreaking movement. Explore career opportunities and help us create systems that empower the Black community."
        />
      </Helmet>
      {/* header */}
      <Header active={4} />

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
            Careers
          </h1>
        </div>

        <div className="mt-[150px] md:mt-[70px] md:mb-[70px] mb-[182px] mx-auto max-w-[1063px] w-[95%]">
          <h1 className="text-[42px] w-[828px] mx-auto mont-bold text-[#141414] leading-[52px] text-center lg:w-full md:text-[28px] md:leading-[32px]">
            Join the BP2025 Team: <br />
            Empowering Change, Creating Impact
          </h1>

          <p className="text-[#232323] mont-light md:text-[17px] md:leading-[24px] text-center text-[22px] mt-[15px]">
            At BP2025, we are on a mission to drive economic unification and
            empower communities through innovation and collaboration. As we work
            toward creating lasting change, we’re looking for passionate
            individuals who share our vision and values. If you’re ready to make
            a difference and contribute to something bigger, we invite you to
            explore career opportunities with us.
          </p>
        </div>

        <div className="bg-[#000000] max-w-[1280px] mx-auto w-[95%] py-[94px]  rounded-[40px] mb-[150px] lg:py-[40px] lg:px-[30px]">
          <div className="w-[848px] mx-auto lg:w-full">
            <h1 className="text-[42px] text-[#FFFFFF] md:text-[28px] md:leading-[32px] mb-[15px] mont-bold">
              ETHIICS: Our Guiding Principles
            </h1>
            <p className="text-[20px] text-[#fff] md:text-[17px] mont-light mb-[60px]">
              At BP2025, our core values shape the way we operate, collaborate,
              and grow. These principles guide our decisions and actions,
              ensuring we stay true to our mission of economic empowerment and
              community development.
            </p>
            <ul className="flex flex-col gap-10">
              <li className="flex items-start">
                <p
                  className="text-[20px]  mont-bold text-[#fff] w-[216px] min-w-[216px]
                 md:text-[17px] lg:min-w-[180px] lg:w-[180px] sm:!min-w-[150px] sm:!w-[150px]"
                >
                  Empathy
                </p>
                <p className="text-[20px] md:text-[17px] mont-light text-[#FFFFFF]">
                  We listen actively, understand deeply, and value the
                  perspectives and experiences of everyone. Compassion guides
                  our interactions, and we strive to create an environment where
                  everyone feels seen, heard, and supported.
                </p>
              </li>
              <li className="flex items-start">
                <p className="text-[20px] mont-bold text-[#fff] w-[216px] min-w-[216px] md:text-[17px] lg:min-w-[180px] lg:w-[180px] sm:!min-w-[150px] sm:!w-[150px]">
                  Transparency
                </p>
                <p className="text-[20px] md:text-[17px] mont-light text-[#FFFFFF]">
                  We foster trust and accountability through open, honest
                  communication. By sharing our intentions, decisions, and
                  progress clearly, we build a culture of transparency that
                  strengthens our community.
                </p>
              </li>
              <li className="flex items-start">
                <p className="text-[20px] mont-bold text-[#fff] w-[216px] min-w-[216px] md:text-[17px] lg:min-w-[180px] lg:w-[180px] sm:!min-w-[150px] sm:!w-[150px]">
                  Humility
                </p>
                <p className="text-[20px] mont-light md:text-[17px] text-[#FFFFFF]">
                  We approach every challenge with an open mind and a focus on
                  continuous learning. We celebrate the contributions of others
                  and remain grounded in our commitment to growth and
                  improvement.
                </p>
              </li>
              <li className="flex items-start">
                <p className="text-[20px] mont-bold text-[#fff] w-[216px] min-w-[216px] md:text-[17px] lg:min-w-[180px] lg:w-[180px] sm:!min-w-[150px] sm:!w-[150px]">
                  Innovation
                </p>
                <p className="text-[20px] md:text-[17px] mont-light text-[#FFFFFF]">
                  We are driven by creative thinking and forward-looking
                  solutions. By embracing innovation and challenging the status
                  quo, we continuously find new ways to achieve our mission of
                  economic unification and community empowerment.
                </p>
              </li>
              <li className="flex items-start">
                <p className="text-[20px] mont-bold text-[#fff] w-[216px] min-w-[216px] md:text-[17px] lg:min-w-[180px] lg:w-[180px] sm:!min-w-[150px] sm:!w-[150px]">
                  Integrity
                </p>
                <p className="text-[20px] md:text-[17px] mont-light text-[#FFFFFF]">
                  We lead with honesty and fairness, honoring our word and
                  taking responsibility for our actions. Our commitment to our
                  principles is unwavering, and we always strive to act with
                  integrity in everything we do.
                </p>
              </li>
              <li className="flex items-start">
                <p className="text-[20px] mont-bold text-[#fff] w-[216px] min-w-[216px] md:text-[17px] lg:min-w-[180px] lg:w-[180px] sm:!min-w-[150px] sm:!w-[150px]">
                  Collaboration
                </p>
                <p className="text-[20px] md:text-[17px] mont-light text-[#FFFFFF]">
                  We believe in the power of working together to create stronger
                  solutions. By fostering inclusivity and leveraging diverse
                  perspectives, we achieve greater impact and shared success.
                </p>
              </li>
              <li className="flex items-start">
                <p className="text-[20px] mont-bold text-[#fff] w-[216px] min-w-[216px] md:text-[17px] lg:min-w-[180px] lg:w-[180px] sm:!min-w-[150px] sm:!w-[150px]">
                  Stewardship
                </p>
                <p className="text-[20px] md:text-[17px] mont-light text-[#FFFFFF]">
                  We manage resources responsibly and make thoughtful decisions
                  that ensure sustainability. We are dedicated to safeguarding
                  the trust placed in us, ensuring long-term benefits for our
                  community.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-[1280px] mx-auto w-[95%] mb-[70px] lg:mb-[40px]">
          <h1 className="text-[42px] md:text-[28px] md:leading-[32px] mont-bold text-[#141414] text-center">
            Why Work at BP2025?
          </h1>
          <div className="my-[65px] grid grid-cols-4 lg:grid-cols-1">
            <div
              className="px-[35px]  py-20 border-l-[1px] border-l-[#CACACA] 
            lg:border-l-0 lg:border-t-[1px] lg:border-t-[#CACACA] lg:py-10"
            >
              <h1 className="text-[24px] mont-bold text-[#000]">Impact</h1>
              <p className="text-[20px] md:text-[17px] mont-light text-[#000000] mt-[15px]">
                Be part of a mission-driven organization that is making real,
                positive change.
              </p>
            </div>
            <div className="px-[35px] py-20 border-l-[1px] border-l-[#CACACA] lg:border-l-0 lg:border-t-[1px] lg:border-t-[#CACACA] lg:py-10">
              <h1 className="text-[24px] mont-bold text-[#000]">Innovation</h1>
              <p className="text-[20px] md:text-[17px] mont-light text-[#000000] mt-[15px]">
                Work alongside forward-thinking, creative individuals who are
                shaping the future of economic empowerment.
              </p>
            </div>
            <div className="px-[35px] py-20 border-l-[1px] border-l-[#CACACA] lg:border-l-0 lg:border-t-[1px] lg:border-t-[#CACACA] lg:py-10">
              <h1 className="text-[24px] mont-bold text-[#000]">Growth </h1>
              <p className="text-[20px] md:text-[17px] mont-light text-[#000000] mt-[15px]">
                We are committed to your professional development and providing
                opportunities for advancement within the organization.
              </p>
            </div>
            <div className="px-[35px] border-l-[1px] border-l-[#CACACA] border-r-[1px] border-r-[#CACACA] py-20 lg:border-l-0 lg:border-r-0 lg:border-t-[1px] lg:border-t-[#CACACA] lg:py-10">
              <h1 className="text-[24px] mont-bold text-[#000]">
                Collaboration
              </h1>
              <p className="text-[20px] md:text-[17px] mont-light text-[#000000] mt-[15px]">
                Join a team that values diversity, inclusivity, and teamwork to
                achieve shared success.
              </p>
            </div>
          </div>

          {/*           <p className="text-center text-[16px] md:text-[17px] mont-light  text-[#000]">
            If you’re ready to bring your skills and passion to an organization
            driving change, we encourage you to explore our current job openings
            and apply to join the BP2025 team.
          </p>
          <h2 className="text-[16px] md:text-[17px] mont-bold text-[#000] text-center mt-7">
            These values drive our mission to lead change and deliver results
            that matter
          </h2>
       */}
        </div>
        <div className="bg-[#000000] hidden max-w-[1280px] mx-auto w-[95%] py-[80px] px-[70px]  rounded-[40px] mb-[150px] lg:px-[30px] lg:py-[40px]">
          <h1 className="text-[#fff] md:text-[28px] md:leading-[32px] text-[42px] mont-bold mb-[40px]">
            Opportunities to Drive Change:
          </h1>
          <div className="flex items-center gap-2 mb-[30px] lg:grid-cols-2 lg:grid lg:gap-2">
            <button className="text-[#000] text-[16px] px-[20px]  mont-bold border-[1px] border-[#fff] bg-[#fff] rounded-full h-[50px]">
              View All
            </button>
            <button className="text-[#FFFFFF] text-[16px] px-[20px]  h-[50px] mont-bold border-[1px] border-[#fff] rounded-full">
              Development
            </button>
            <button className="text-[#FFFFFF] text-[16px] px-[20px]  h-[50px] mont-bold border-[1px] border-[#fff] rounded-full">
              Design
            </button>
            <button className="text-[#FFFFFF] text-[16px] px-[20px]  h-[50px] mont-bold border-[1px] border-[#fff] rounded-full">
              Marketing
            </button>
            <button className="text-[#FFFFFF] text-[16px] px-[20px]  h-[50px] mont-bold border-[1px] border-[#fff] rounded-full">
              Operations
            </button>
            <button className="text-[#FFFFFF] text-[16px] px-[20px]  h-[50px] mont-bold border-[1px] border-[#fff] rounded-full">
              Finance
            </button>
            <button className="text-[#FFFFFF] text-[16px] px-[20px]  h-[50px] mont-bold border-[1px] border-[#fff] rounded-full lg:col-span-2">
              Management
            </button>
          </div>

          <ul className="flex flex-col gap-[15px]">
            <li
              className="bg-[#FFFFFF] px-[87px] py-[40px] rounded-[20px] grid grid-cols-[1fr_.5fr]
            
            md:grid-cols-1 md:px-[50px]
            "
            >
              <div>
                <h1 className="text-[32px] md:text-[24px] md:leading-[32px] text-[#000] mont-bold leading-[30px] mb-[16px]">
                  Marketing <br />
                  Director
                </h1>
                <p className="text-[#000000] md:text-[17px] text-[16px] mont-light mb-[30px]">
                  This is just placeholder text. Don’t be alarmed, this is just
                  here to fill up space since your finalized copy isn’t ready
                  yet.
                </p>
                <div className="flex items-center gap-2">
                  <button className="text-[#000] text-[16px] px-[20px]  h-[34px] mont-light border-[1px] border-[#999999] rounded-full md:text-[17px] md:px-0 md:w-[101px]">
                    Full-Time
                  </button>
                  <button className="text-[#000] text-[16px] px-[20px]  h-[34px] mont-light border-[1px] border-[#999999] rounded-full md:text-[17px] md:px-0 md:w-[140px]">
                    Remote Setup
                  </button>
                </div>
              </div>

              <div>
                <Link
                  to="/"
                  className="flex items-center gap-6 text-[#fff] bg-[#000] h-[50px] mont-bold justify-center rounded-full w-[156px] ml-auto md:mt-5 md:ml-0"
                >
                  View & Apply
                </Link>
              </div>
            </li>
            <li className="bg-[#FFFFFF] px-[87px] py-[40px] rounded-[20px] grid grid-cols-[1fr_.5fr]md:grid-cols-1 md:px-[50px]">
              <div>
                <h1 className="text-[32px] md:text-[24px] md:leading-[32px] text-[#000] mont-bold leading-[30px] mb-[16px]">
                  Public Relations <br />
                  Manager
                </h1>
                <p className="text-[#000000] text-[16px] md:text-[17px] mont-light mb-[30px]">
                  This is just placeholder text. Don’t be alarmed, this is just
                  here to fill up space since your finalized copy isn’t ready
                  yet.
                </p>
                <div className="flex items-center gap-2">
                  <button className="text-[#000] text-[16px] px-[20px]  h-[34px] mont-light border-[1px] border-[#999999] rounded-full md:text-[17px] md:px-0 md:w-[101px]">
                    Full-Time
                  </button>
                  <button className="text-[#000] text-[16px] px-[20px]  h-[34px] mont-light border-[1px] border-[#999999] rounded-full md:text-[17px] md:px-0 md:w-[140px]">
                    Remote Setup
                  </button>
                </div>
              </div>

              <div>
                <Link
                  to="/"
                  className="flex items-center gap-6 text-[#fff] bg-[#000] h-[50px] mont-bold justify-center rounded-full w-[156px] ml-auto md:mt-5 md:ml-0"
                >
                  View & Apply
                </Link>
              </div>
            </li>
            <li className="bg-[#FFFFFF] px-[87px] py-[40px] rounded-[20px] grid grid-cols-[1fr_.5fr]md:grid-cols-1 md:px-[50px]">
              <div>
                <h1 className="text-[32px] md:text-[24px] md:leading-[32px] text-[#000] mont-bold leading-[30px] mb-[16px]">
                  Podcast <br />
                  Facilitator
                </h1>
                <p className="text-[#000000] text-[16px] md:text-[17px] mont-light mb-[30px]">
                  This is just placeholder text. Don’t be alarmed, this is just
                  here to fill up space since your finalized copy isn’t ready
                  yet.
                </p>
                <div className="flex items-center gap-2">
                  <button className="text-[#000] text-[16px] px-[20px]  h-[34px] mont-light border-[1px] border-[#999999] rounded-full md:text-[17px] md:px-0 md:w-[101px]">
                    Full-Time
                  </button>
                  <button className="text-[#000] text-[16px] px-[20px]  h-[34px] mont-light border-[1px] border-[#999999] rounded-full md:text-[17px] md:px-0 md:w-[140px]">
                    Remote Setup
                  </button>
                </div>
              </div>

              <div>
                <Link
                  to="/"
                  className="flex items-center gap-6 text-[#fff] bg-[#000] h-[50px] mont-bold justify-center rounded-full w-[156px] ml-auto md:mt-5 md:ml-0"
                >
                  View & Apply
                </Link>
              </div>
            </li>
            <li className="bg-[#FFFFFF] px-[87px] py-[40px] rounded-[20px] grid grid-cols-[1fr_.5fr]md:grid-cols-1 md:px-[50px]">
              <div>
                <h1 className="text-[32px] md:text-[24px] md:leading-[32px] text-[#000] mont-bold leading-[30px] mb-[16px]">
                  Creative <br />
                  Director
                </h1>
                <p className="text-[#000000] text-[16px] md:text-[17px] mont-light mb-[30px]">
                  This is just placeholder text. Don’t be alarmed, this is just
                  here to fill up space since your finalized copy isn’t ready
                  yet.
                </p>
                <div className="flex items-center gap-2">
                  <button className="text-[#000] text-[16px] px-[20px]  h-[34px] mont-light border-[1px] border-[#999999] rounded-full md:text-[17px] md:px-0 md:w-[101px]">
                    Full-Time
                  </button>
                  <button className="text-[#000] text-[16px] px-[20px]  h-[34px] mont-light border-[1px] border-[#999999] rounded-full md:text-[17px] md:px-0 md:w-[140px]">
                    Remote Setup
                  </button>
                </div>
              </div>

              <div>
                <Link
                  to="/"
                  className="flex items-center gap-6 text-[#fff] bg-[#000] h-[50px] mont-bold justify-center rounded-full w-[156px] ml-auto md:mt-5 md:ml-0"
                >
                  View & Apply
                </Link>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center mt-10">
                <Link
                  to="/"
                  className="flex items-center gap-6 text-[#fff]  h-[50px] mont-bold justify-center rounded-full w-[156px] border-[1px] border-[#fff]"
                >
                  Show More
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div className="w-[95%] max-w-[1280px] mx-auto bg-[#070707] h-[360px] rounded-[50px] flex flex-col items-center justify-center relative mb-[90px] lg:overflow-hidden md:mb-[50px] md:h-[300px] px-5">
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

          <h1 className="text-[50px] md:text-[35px] md:text-center md:leading-[40px] text-[#fff] mont-bold z-10 ">
            View Our Open Roles
          </h1>
          <Link
            target="_blank"
            to="https://app.dover.com/jobs/officialblackproject2025"
            className="flex items-center gap-6 text-[#000] bg-[#fff] h-[50px] mont-bold justify-center rounded-full w-[156px] mt-5 md:text-[16px] md:w-[130px]"
          >
            View Roles
          </Link>
        </div>

        {/* join */}
        <Join />
      </section>

      {/* footer */}
      <Footer active={4} />
    </div>
  );
};
