import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { motion } from "framer-motion";
// images

import landing from "../assets/image/about/landing.png";
import arrow from "../assets/image/white-paper/arrow.svg";
import rocket1 from "../assets/image/about/rocket1.svg";
import rocket2 from "../assets/image/about/rocket2.svg";
import coinMission from "../assets/image/about/coin-mission.png";
import visionCoin from "../assets/image/about/vision-coin.png";
import aboutGrid from "../assets/image/about/about-grid.png";

// component
import { Footer } from "../components/Footer";
import { SwapForm } from "../components/home/SwapForm";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [inView, setInView] = useState(false);

  // Intersection Observer callback function
  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setInView(true); // Set state to true when element is in view
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    const element = document.querySelector("#animated-section");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const [sec2inView, setSec2InView] = useState(false);

  // Intersection Observer callback function
  const handleIntersection2 = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setSec2InView(true); // Set state to true when element is in view
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection2, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    const element = document.querySelector("#animated-section2");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const [in3View, setIn3View] = useState(false);

  // Intersection Observer callback function
  const handleIntersection3 = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIn3View(true); // Set state to true when element is in view
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection3, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    const element = document.querySelector("#animated-section3");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const [scrollY, setScrollY] = useState(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-[100vh] bg-[#070707] overflow-hidden relative">
      {/* meta data */}
      <Helmet>
        <title>$KYN | About </title>
        <meta
          name="description"
          content="Learn about KYN Token's mission to foster economic empowerment and innovation. Explore how we’re creating opportunities to strengthen the Black community through blockchain technology."
        />
      </Helmet>

      <Header active={2} />
      <motion.div
        id="animated-section"
        className="h-[394px] flex flex-col items-center justify-center bg-mob"
        style={{ background: `url(${landing})`, backgroundSize: "cover" }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="text-[14px] mont-bold text-[#363636] h-[38px] w-[146px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[16px] pt-[4px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          About KYN
        </motion.span>

        <motion.h1
          className="text-[72px] md:text-[42px] text-[#000000] text-center mont-bold leading-[90px] md:leading-[40px] md:w-[239px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Empower Our Future: <br className="md:hidden" /> Invest in Change
        </motion.h1>

        <motion.button
          className="mt-[16px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img src={arrow} alt="arrow" />
        </motion.button>
      </motion.div>
      <motion.div
        id="animated-section2"
        className="w-[1061px] mx-auto py-[120px] grid grid-cols-[1fr_463px] items-center gap-[60px] lg:w-full lg:grid-cols-1 lg:py-[60px] lg:px-4 md:gap-[30px]"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: sec2inView ? 1 : 0, y: sec2inView ? 0 : 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="relative xl:px-10 sm:!px-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: sec2inView ? 1 : 0, scale: sec2inView ? 1 : 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SwapForm />
        </motion.div>

        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: sec2inView ? 1 : 0, y: sec2inView ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-[54px] md:text-[28px] md:text-center md:leading-[35px] text-[#fff] mont-bold leading-[52px] mb-[30px]">
            Your Investment, Your Impact: KYN and the BP2025 Vision
          </h1>
          <p className="text-[16px] text-[#fff] mont-light md:text-[14px] md:text-center">
            KYN is more than just a token—it's a powerful catalyst for change.
            As the cornerstone of BP2025, KYN aims to channel the collective
            financial power of the Black community toward sustainable growth,
            business support, and wealth creation. Our mission is to foster
            self-sufficiency and economic unity, creating systems that serve
            Black-owned businesses and provide the tools needed for financial
            independence.
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        id="animated-section3"
        className="relative"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="w-[250px] h-[150px] top-[200px] -right-[100px] blur-[80px] bg-[#202020] absolute rounded-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: in3View ? 1 : 0, x: in3View ? 0 : 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.span>

        <motion.span
          className="w-[250px] h-[150px] top-[500px] -left-[100px] blur-[80px] bg-[#202020] absolute rounded-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: in3View ? 1 : 0, x: in3View ? 0 : -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        ></motion.span>

        <motion.img
          src={aboutGrid}
          alt=""
          className="right-0 absolute top-[100px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: in3View ? 1 : 0, x: in3View ? 0 : 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.div
          className="w-[863px] relative z-10 mx-auto text-center pb-[90px] lg:w-full lg:px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: in3View ? 1 : 0, y: in3View ? 0 : 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="text-[14px] mont-bold text-[#363636] h-[38px] w-[157px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: in3View ? 1 : 0, scale: in3View ? 1 : 0.8 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            KYN coin
          </motion.span>

          <motion.h1
            className="text-[54px] text-[#fff] mont-bold md:text-[28px] md:leading-[35px] leading-[52px] mb-[45px] mt-[15px] md:mb-[15px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: in3View ? 1 : 0, y: in3View ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            The Phases of Growth: A Roadmap to Empowerment
          </motion.h1>

          <motion.p
            className="text-[#fff] text-[16px] mont-light md:text-[14px]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: in3View ? 1 : 0, y: in3View ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            KYN is part of a well-defined growth strategy, designed to create
            long-term impact across four transformative phases. Each phase plays
            a vital role in building a stronger, more unified Black community.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="relative mb-[74px]">
        <motion.img
          src={rocket1}
          alt=""
          className="absolute top-14 left-0 brightness-[40%] md:w-[130px] md:-left-[30px]"
          initial={{ opacity: 0, x: "-100%" }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />
        <motion.img
          src={rocket2}
          alt=""
          className="absolute -bottom-[150px] right-0"
          initial={{ opacity: 0, x: "100%" }}
          viewport={{ once: true, amount: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        />
        <span className="h-[100%] bg-[#333333] w-[1px] absolute left-1/2 -translate-x-1/2 bottom-0"></span>
        <div className="w-[972px] mx-auto lg:w-full">
          <div className="flex flex-col">
            <motion.div
              className="w-[481px] lg:w-[50%] lg:pr-4 pl-[60px] lg:pl-[20px] ml-auto relative"
              initial={{ opacity: 0, x: "100%" }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-[32px] mont-light text-[#fff] leading-[40px] md:text-[22px] md:leading-[25px]">
                <span className="mont-bold">Phase 1:</span> Community
                Development
              </h1>
              <p className="text-[16px] text-[#fff] mont-light md:text-[14px] mt-[18px]">
                The foundation for KYN’s success begins with a vibrant, engaged
                community. In this phase, we focus on building educational
                spaces, fostering connections, and providing early access to new
                initiatives. Our goal is to create an inclusive ecosystem where
                individuals are informed, inspired, and actively involved in
                BP2025’s growth.
              </p>
              <div className="flex items-center absolute top-[30px] -translate-y-1/2 -left-[55px] lg:-left-[50px]">
                <span className="w-[40px] opacity-0 h-[1px] bg-[#333333]"></span>
                <span className="w-[18px] h-[18px] rounded-full border-[1px] border-[#333333] bg-[#212121]"></span>
              </div>
            </motion.div>

            <motion.div
              className="w-[481px] lg:w-[50%] lg:pl-5 pr-[60px] lg:pr-[20px] relative"
              initial={{ opacity: 0, x: "-100%" }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-[32px] md:text-[22px] md:leading-[25px] mont-light text-[#fff] leading-[40px] text-right">
                <span className="mont-bold">Phase 2:</span> Attracting
                Investment & Partnerships
              </h1>
              <p className="text-[16px] text-[#fff] mont-light md:text-[14px] ml-auto mt-[18px] text-right">
                With a solid community in place, Phase 2 will leverage the KYN
                token to attract investment and form key partnerships with
                businesses that align with our mission. These partnerships will
                help reduce operational costs, expand our reach, and drive
                further growth. Through strategic collaborations, we create a
                network that supports both financial and social impact.To create
                self-sustaining systems that benefit our community.
              </p>
              <div className="flex items-center absolute top-[30px] -translate-y-1/2 -right-[14px] lg:-right-[8px]">
                <span className="w-[40px] opacity-0 h-[1px] bg-[#333333]"></span>
                <span className="w-[18px] h-[18px] rounded-full border-[1px] border-[#333333] bg-[#212121]"></span>
              </div>
            </motion.div>

            <motion.div
              className="w-[481px] lg:w-[50%] lg:pr-4 pl-[60px] lg:pl-[20px] ml-auto relative"
              initial={{ opacity: 0, x: "100%" }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-[32px] md:text-[22px] md:leading-[25px] mont-light text-[#fff] leading-[40px]">
                <span className="mont-bold">Phase 3:</span> Long-Term Team
                Development
              </h1>
              <p className="text-[16px] text-[#fff] mont-light md:text-[14px] mt-[18px]">
                Phase 3 is about scaling our efforts. With funding secured and
                partnerships in place, we’ll build a full-time, dedicated team
                to execute BP2025’s vision. This talented team will drive the
                development of products and services that promote economic
                independence and community strength, ensuring KYN’s growth is
                sustainable and impactful.
              </p>
              <div className="flex items-center absolute top-[30px] -translate-y-1/2 -left-[55px] lg:-left-[50px]">
                <span className="w-[40px] opacity-0 h-[1px] bg-[#333333]"></span>
                <span className="w-[18px] h-[18px] rounded-full border-[1px] border-[#333333] bg-[#212121]"></span>
              </div>
            </motion.div>

            <motion.div
              className="w-[481px] lg:w-[50%] lg:pl-5 pr-[60px] lg:pr-[20px] relative"
              initial={{ opacity: 0, x: "-100%" }}
              viewport={{ once: true, amount: 0.5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-[32px] md:text-[22px] md:leading-[25px] mont-light text-[#fff] leading-[40px] text-right">
                <span className="mont-bold">Phase 4:</span> Product Development
                to Fuel Growth
              </h1>
              <p className="text-[16px] text-[#fff] mont-light md:text-[14px] ml-auto mt-[18px] text-right">
                In the final phase, we’ll introduce groundbreaking products,
                including the BP Card and a Black-Owned Business App. These
                tools will empower consumers to support Black businesses and
                earn rewards, integrating KYN as the foundation for a thriving
                economic ecosystem. Our products will create lasting value for
                both businesses and the community, ensuring long-term growth and
                success.
              </p>
              <div className="flex items-center absolute top-[30px] -translate-y-1/2 -right-[14px] lg:-right-[8px]">
                <span className="w-[40px] opacity-0 h-[1px] bg-[#333333]"></span>
                <span className="w-[18px] h-[18px] rounded-full border-[1px] border-[#333333] bg-[#212121]"></span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="w-[849px] mx-auto pb-[120px] lg:w-full lg:px-4">
        <p className="text-[16px] mont-light text-[#FFFFFF] text-center md:text-[14px]">
          Together, these four phases will drive economic empowerment and create
          a future of self-sufficiency for the Black community. With your
          investment and participation, we can achieve this vision and empower a
          new generation of Black entrepreneurs and business owners.
        </p>
      </div>

      <div className="w-[1064px] mx-auto pb-[160px] lg:w-full lg:px-4 lg:pb-[0px]">
        <motion.div
          className="border-[1px] h-[386px] border-[#B0B0B0] bg-gradient-to-tr from-[#0D0D0D] to-[#151515] rounded-[30px] mb-[120px] grid grid-cols-2 items-center relative lg:grid-cols-1 lg:h-[unset] lg:p-[50px] lg:mb-[40px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="lg:order-2">
            <img
              src={coinMission}
              alt=""
              className="absolute -top-[40px] left-[50px] lg:static lg:translate-y-5"
            />
          </div>
          <div className="lg:order-1">
            <h1 className="text-[54px] md:text-[28px] md:leading-[35px] text-[#FFFFFF] mont-bold leading-[52px] mb-[29px] md:mb-[15px]">
              Mission
            </h1>
            <p className="text-[16px] text-[#fff] md:text-[14px] mont-light w-[419px] lg:w-full">
              At BP2025, we are on a mission to drive economic unification, fuel
              development, and create a legacy through innovation and shared
              success. Our purpose is rooted in driving economic unification,
              fostering development, and creating a legacy that empowers and
              uplifts communities. By harnessing the collective strength of our
              resources and expertise, we build innovative systems and services
              tailored to the unique needs of our community. Together, we are
              shaping a future of shared success and lasting impact.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="border-[1px] h-[386px] border-[#B0B0B0] bg-gradient-to-tr from-[#0D0D0D] to-[#151515] rounded-[30px] mb-[120px] grid grid-cols-2 items-center relative lg:grid-cols-1 lg:h-[unset] lg:p-[50px] lg:mb-[40px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="pl-[50px] lg:pl-0">
            <h1 className="text-[54px] md:text-[28px] md:leading-[35px] text-[#FFFFFF] mont-bold leading-[52px] mb-[29px] md:mb-[15px] lg:text-right">
              Vision
            </h1>
            <p className="text-[16px] md:text-[14px] lg:text-right text-[#fff] mont-light w-[419px] lg:w-full">
              Economic Unification. But Make It Innovative.
            </p>
          </div>
          <div>
            <img
              src={visionCoin}
              alt=""
              className="absolute -top-[40px] right-[50px] lg:static lg:translate-y-5"
            />
          </div>
        </motion.div>
      </div>

      <Footer active={2} />
    </div>
  );
};