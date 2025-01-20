import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { motion, useAnimation } from "framer-motion";

// images
import landing from "../assets/image/white-paper/landing.png";
import arrow from "../assets/image/white-paper/arrow.svg";
import faqCoin from "../assets/image/faq/faq-coin.png";
import coin1 from "../assets/image/roadmap/coin1.svg";
import coin2 from "../assets/image/roadmap/coin2.svg";
import grid from "../assets/image/roadmap/roadmap-grid.png";
// component
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { FaqBox } from "../components/faq/FaqBox";
import { SwapForm } from "../components/home/SwapForm";

export const RoadMap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      threshold: 0.2, // Trigger when 50% of the element is visible
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

  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      console.log(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollRange = Math.max(0, Math.min(scrollY - 1600, 2000));
  console.log(scrollRange); // Maps the scroll between 1800 and 2600
  const height = (scrollRange / 90) * 7;

  return (
    <div className="min-h-[100vh] bg-[#070707]">
      {/* meta data */}
      <Helmet>
        <title>$KYN | Roadmap</title>
        <meta
          name="description"
          content="Explore KYN Token’s roadmap, from fostering community growth to building groundbreaking blockchain products. See how we’re shaping the future of decentralized innovation."
        />
      </Helmet>

      <Header active={5} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[394px] bg-mob flex flex-col items-center justify-center  lg:mb-[0px]"
        style={{ background: `url(${landing})`, backgroundSize: "cover" }}
      >
        <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[131px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[16px] pt-[4px]">
          Roadmap
        </span>
        <h1 className="text-[72px] md:text-[42px] text-[#000000] text-center mont-bold leading-[90px] md:leading-[40px] md:w-[312px]">
          Our <br className="hidden md:block" /> Path to <br />
          Empowerment
        </h1>
        <button className="mt-[16px]">
          <img src={arrow} alt="" />
        </button>
      </motion.div>

      <div className="relative">
        <img
          src={grid}
          alt=""
          className="absolute left-1/2 -translate-x-1/2 top-[140px]"
        />

        <motion.div
          id="animated-section2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: sec2inView ? 1 : 0, y: sec2inView ? 0 : 100 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[1061px] relative z-10 mx-auto py-[120px] grid grid-cols-2 gap-[72px] items-center lg:w-full lg:grid-cols-1 lg:py-[60px] lg:px-4 md:gap-[30px]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: sec2inView ? 1 : 0,
              scale: sec2inView ? 1 : 0.8,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative  xl:px-10 sm:!px-0"
          >
            <SwapForm />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: sec2inView ? 1 : 0, y: sec2inView ? 0 : 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:flex md:flex-col md:items-center lg:px-10"
          >
            <h1 className="text-[54px] md:text-[28px] md:text-center md:leading-[40px] text-[#fff] mont-bold leading-[52px] mb-[29px] md:mb-[15px]">
              How to Buy <br /> KYN Coin
            </h1>
            <ul className="flex flex-col gap-[35px] mb-[35px] w-[419px] md:w-[266px] md:mx-auto md:gap-[15px]">
              <li className="text-[16px] text-[#fff] md:text-[14px] mont-light flex items-center gap-[25px] md:gap-[16px]">
                <span className="mont-bold text-[20px]">1</span> Connect your
                wallet.
              </li>
              <li className="text-[16px] text-[#fff] md:text-[14px] mont-light flex items-center gap-[25px] md:gap-[16px]">
                <span className="mont-bold text-[20px]">2</span> Choose your
                investment amount.
              </li>
              <li className="text-[16px] text-[#fff] md:text-[14px] mont-light flex items-center gap-[25px] md:gap-[16px]">
                <span className="mont-bold text-[20px]">3</span> Confirm your
                transaction and secure your KYN.
              </li>
            </ul>

            <Link
              to="/"
              className="w-[236px] h-[50px] flex items-center justify-center rounded-full bg-[#fff] text-[#000000] text-[16px] mont-bold"
            >
              Join the Presale Now
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative overflow-hidden md:pt-10">
        <motion.img
          src={coin1}
          className="absolute -left-[200px] top-[200px] md:w-[148px] md:-left-[60px] md:top-[370px]"
          alt=""
          initial={{ x: "-100%" }}
          animate={{ x: scrollY > 1600 ? 0 : "-100%" }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={coin2}
          className="absolute -right-[200px]  top-[700px]  md:w-[148px] md:-right-[70px] md:-top-[30px]"
          alt=""
          initial={{ x: "100%" }}
          animate={{ x: scrollY > 2000 ? 0 : "100%" }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[1065px] mx-auto flex flex-col lg:w-full relative z-10 lg:px-4"
        >
          <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[200px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[20px] mx-auto">
            KYN ROADMAP
          </span>
          <h1 className="text-[54px] w-[594px] mx-auto text-center text-[#FFFFFF] leading-[60px] mont-bold md:text-[28px] md:w-full md:leading-[40px]">
            Backing Our Vision, Backing Our Future: The BP2025 Roadmap
          </h1>
          <p className="text-[#fff] tet-[16px] w-[844px] mx-auto text-center mont-light mt-[25px] mb-[115px] lg:w-full md:text-[14px] md:mb-[50px]">
            The KYN token plays a critical role in the roadmap of BP2025, and
            each phase unlocks more opportunities for growth, both financially
            and in terms of community impact. From early community-building
            efforts to long-term product development, every phase adds value to
            KYN and its investors.
          </p>
        </motion.div>

        <div className="py-[172px] relative md:py-[50px]">
          <span className="h-[100%] bg-[#333333] w-[1px] absolute left-1/2 -translate-x-1/2 top-0"></span>
          <motion.span
            className="bg-[#fff] w-[1px] absolute left-1/2 -translate-x-1/2 top-0"
            style={{ height: `${height}%` }}
            animate={controls}
          />
          <div className="w-[722px] mx-auto lg:w-full">
            <div className="flex justify-between items-start">
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-[278px] relative lg:w-[50%] lg:pr-12 lg:pl-4"
              >
                <h1 className="text-[32px]  md:text-[22px] sm:!text-[18px] text-[#fff] mont-bold text-right">
                  Phase 1:
                </h1>
                <p className="text-right mont-light text-[#fff] text-[32px] md:text-[22px] sm:!text-[18px]">
                  Community <br />
                  Development
                </p>

                <div className="flex items-center absolute top-1/2 -translate-y-1/2 -right-[92px] lg:-right-2 ">
                  <span className="w-[40px] h-[1px] bg-[#fff] lg:w-[30px]"></span>
                  <span className="w-[18px] h-[18px] rounded-full border-[1px] border-[#fff] bg-[#838383]"></span>
                </div>
              </motion.div>
              <motion.ul
                initial={{ opacity: 0, x: "100%" }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-[308px] flex flex-col gap-3 lg:w-[50%] lg:pl-10 lg:pr-5"
              >
                <li className="text-[#FFFFFF] text-[16px] mont-light md:text-[14px]">
                  The first phase focuses on creating a vibrant, engaged, and
                  informed community. KYN will be instrumental in funding
                  educational resources, outreach initiatives, and community
                  hubs that encourage growth and collaboration.
                </li>
              </motion.ul>
            </div>

            <div className="flex justify-between items-start mt-[122px]">
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-[278px] relative lg:w-[50%] lg:pr-12 lg:pl-4"
              >
                <h1 className="text-[32px] md:text-[22px] sm:!text-[18px] text-[#fff] mont-bold text-right">
                  Phase 2:
                </h1>
                <p className="text-right mont-light text-[#fff] text-[32px] md:text-[22px] sm:!text-[18px]">
                  Investment & Partnerships
                </p>
                <div className="flex items-center absolute top-1/2 -translate-y-1/2 -right-[92px] lg:-right-2 ">
                  <span className="w-[40px] h-[1px] bg-[#fff] lg:w-[30px]"></span>
                  <span className="w-[18px] h-[18px] rounded-full border-[1px] border-[#fff] bg-[#838383]"></span>
                </div>
              </motion.div>
              <motion.ul
                initial={{ opacity: 0, x: "100%" }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-[308px] flex flex-col gap-3 lg:w-[50%] lg:pl-10 lg:pr-5"
              >
                <li className="text-[#FFFFFF] text-[16px] mont-light md:text-[14px]">
                  We will use KYN to attract strategic investments and
                  partnerships that will help us reduce operational costs and
                  enhance our economic footprint.
                </li>
              </motion.ul>
            </div>

            <div className="flex justify-between items-start mt-[122px]">
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-[278px] relative lg:w-[50%] lg:pr-12 lg:pl-4"
              >
                <h1 className="text-[32px]  md:text-[22px] sm:!text-[18px] text-[#fff] mont-bold text-right">
                  Phase 3:
                </h1>
                <p className="text-right mont-light text-[#fff] text-[32px] md:text-[22px] sm:!text-[18px]">
                  Team <br />
                  Development
                </p>
                <div className="flex items-center absolute top-1/2 -translate-y-1/2 -right-[92px] lg:-right-2 ">
                  <span className="w-[40px] h-[1px] bg-[#fff] lg:w-[30px]"></span>
                  <span className="w-[18px] h-[18px] rounded-full border-[1px] border-[#fff] bg-[#838383]"></span>
                </div>
              </motion.div>
              <motion.ul
                initial={{ opacity: 0, x: "100%" }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-[308px] flex flex-col gap-3 lg:w-[50%] lg:pl-10 lg:pr-5"
              >
                <li className="text-[#FFFFFF] text-[16px] mont-light md:text-[14px]">
                  With funding secured, we’ll build a dedicated, full-time team
                  to focus on product development, expanding our reach, and
                  strengthening the KYN ecosystem.
                </li>
              </motion.ul>
            </div>

            <div className="flex justify-between items-start mt-[122px]">
              <motion.div
                initial={{ opacity: 0, x: "-100%" }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-[278px] relative lg:w-[50%] lg:pr-12 lg:pl-4"
              >
                <h1 className="text-[32px] md:text-[22px] sm:!text-[18px] text-[#fff] mont-bold text-right">
                  Phase 4:
                </h1>
                <p className="text-right mont-light text-[#fff] text-[32px] md:text-[22px] sm:!text-[18px]">
                  Product Launch <br />& Integration
                </p>
                <div className="flex items-center absolute top-1/2 -translate-y-1/2 -right-[92px] lg:-right-2 ">
                  <span className="w-[40px] h-[1px] bg-[#fff] lg:w-[30px]"></span>
                  <span className="w-[18px] h-[18px] rounded-full border-[1px] border-[#fff] bg-[#838383]"></span>
                </div>
              </motion.div>
              <motion.ul
                initial={{ opacity: 0, x: "100%" }}
                viewport={{ once: true, amount: 0.5 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-[308px] flex flex-col gap-3 lg:w-[50%] lg:pl-10 lg:pr-5"
              >
                <li className="text-[#FFFFFF] text-[16px] mont-light md:text-[14px]">
                  From a Black-owned business app to the BP Card and more, phase
                  4 will bring KYN into practical use, integrating it into
                  products that benefit the Black community and its financial
                  growth.
                </li>
              </motion.ul>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mt-[120px] pb-[120px] w-[1061px] mx-auto  md:w-full md:px-4 md:pb-[60px] md:mt-10 "
      >
        <h1 className="text-[40px] text-[#fff] mont-bold leading-[50px] md:text-[28px] md:leading-[35px] text-center mb-16 md:mb-10 ">
          Frequently Asked Questions
        </h1>
        <div className="w-full  gap-[24px] md:w-full grid grid-cols-2 lg:grid-cols-1">
          <FaqBox
            heading="How do I sell KYN tokens?"
            paragraph="After the presale ends, KYN tokens will be available to trade on special websites called exchanges. To sell your tokens, you’ll need to connect your wallet to the exchange and sell your tokens for other types of digital money or even regular money (like dollars)."
          />
          <FaqBox
            heading="Why should I invest in KYN?"
            paragraph="Investing in KYN means you’re supporting a project that helps the Black community grow and become more independent. It’s also a chance to buy tokens at a lower price during the presale, with the hope that their value will go up over time."
          />
          <FaqBox
            heading="What happens after the presale ends?"
            paragraph="After the presale ends, you’ll get your tokens according to the staggered release schedule. The liquidity pool will be unlocked, and KYN tokens will be available for trading on exchanges. The BP2025 team will continue working on their mission to create products and services that support the community."
          />
          <FaqBox
            heading="Can I participate in the presale if I don’t know anything about crypto?"
            paragraph="Yes! You can still participate. You’ll just need to create a cryptocurrency wallet and learn how to fund it with Solana (SOL), which is the digital currency used to buy KYN. There are many online tutorials and guides to help you through the process."
          />
          <FaqBox
            heading="How does KYN contribute to the Black community?"
            paragraph="KYN will fund initiatives that create business infrastructure, financial services, and community-building projects that empower the Black community to thrive economically."
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#fff] pt-[20px] xl:pt-[60px] xl:pb-0"
      >
        <div className="max-w-[1278px] w-[100%] mx-auto grid grid-cols-[1fr_1fr] gap-16 items-center xl:px-[33px] md:grid-cols-1 xl:gap-10">
          <div className="md:order-2">
            <img src={faqCoin} alt="" className="w-full" />
          </div>
          <div className="md:order-1">
            <h1 className="text-[#000000] text-[50px] md:text-[42px] md:leading-[40px] mont-bold leading-[55px]">
              Join us on this <br />
              transformative <br />
              journey.
            </h1>
            <div className="flex items-center gap-2 mt-5">
              <Link
                to="/presale"
                className="w-[120px] h-[50px] flex items-center justify-center rounded-full bg-[#000] text-[#FFFFFF] text-[16px] mont-bold border-[1px] border-[#000000]"
              >
                Presale
              </Link>
              <Link
                to="/white-paper"
                className="w-[144px] h-[50px] flex items-center justify-center rounded-full text-[#000000] text-[16px] mont-bold border-[1px] border-[#000000]"
              >
                Whitepaper
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      <Footer active={5} />
    </div>
  );
};