import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { motion } from "framer-motion";
// img
import hand from "../assets/image/presale/hand.png";
import main from "../assets/image/home/main.png";
import rocket2 from "../assets/image/home/rocket2.svg";
import grid from "../assets/image/home/Grid.png";
import gridone from "../assets/image/home/grid-main-one.png";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { SwapForm } from "../components/home/SwapForm";
export const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const targetDate = new Date("June 19, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
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
      threshold: 0.3, // Trigger when 50% of the element is visible
    });

    const element = document.querySelector("#animated-section1");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const [timeInView, setTimeInView] = useState(false);

  // Intersection Observer callback function
  const handleIntersection2 = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setTimeInView(true); // Set state to true when element is in view
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection2, {
      threshold: 0.5, // Trigger when 50% of the element is visible
    });

    const element = document.querySelector("#countdown-section2");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const [momentInView, setMomentInView] = useState(false);

  // Intersection Observer callback function
  const handleIntersection3 = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setMomentInView(true); // Set state to true when element is in view
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection3, {
      threshold: 0.2, // Trigger when 50% of the element is visible
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

  return (
    <div className="min-h-[100vh] bg-[#070707] overflow-hidden relative">
      {/* meta data */}
      <Helmet>
        <title>$KYN | Home</title>
        <meta
          name="description"
          content="KYN Token is designed to empower the Black community by fostering economic growth, innovation, and unity. Join us in leveraging blockchain technology to build a stronger, more independent future together."
        />
      </Helmet>

      <Header active={1} />

      <span className="w-[500px] h-[500px] bg-[#202020] blur-[160px] absolute rounded-full -right-[260px] -top-[260px] "></span>

      <div className="relative py-[62px] h-[660px] flex items-center lg:h-[unset] lg:flex-col md:pb-0">
      <motion.img
        src={rocket2}
        className="absolute -left-[80px] top-0 md:w-[100px] md:-left-[20px] md:top-4"
        alt=""
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.img
        src={gridone}
        className="absolute left-1/2 -translate-x-1/2 top-[50px]"
        alt=""
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      <motion.img
        src={main}
        className="absolute -right-[150px] top-1/2 -translate-y-1/2 brightness-75  lg:static lg:order-2 lg:top-0 lg:translate-y-0 lg:w-full  lg:pl-5"
        alt=""
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <div className="w-[1061px] mx-auto z-10 lg:w-full lg:px-4 lg:order-1 sm:!w-[330px] sm:mx-auto">
        <motion.span
          className="text-[14px] mont-bold text-[#363636] h-[38px] w-[280px] flex items-center justify-center border-[1px] md:mx-auto border-[#363636] rounded-full mb-[16px] sm:text-[10px] sm:w-[189px]"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          Invest in Us. Empower Yourself.
        </motion.span>
        <motion.h1
          className="text-[#fff] md:text-[42px] md:text-center md:leading-[40px] w-[743px] leading-[78px] text-[72px] mont-bold lg:w-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.7 }}
        >
          Empowering the Black Community Through KYN
        </motion.h1>
      </div>
    </div>
    <motion.div
      id="animated-section1"
      className="w-[1061px] mx-auto py-[120px] grid grid-cols-[1fr_463px] gap-[60px] items-center z-10 relative lg:w-full lg:px-4 lg:grid-cols-1 md:py-[60px]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative xl:px-10 sm:!px-0">
        <SwapForm />
      </div>
      <div>
        <h1 className="text-[54px] md:text-[28px] md:leading-[40px] md:text-center text-[#fff] mont-bold leading-[52px] mb-[30px]">
          Backing Us, Means Backing You
        </h1>
        <p className="text-[16px] text-[#fff] mont-light md:text-center md:text-[14px]">
          Welcome to KYN – the token that’s designed to fuel a movement of
          economic empowerment, growth, and unity for the Black community. KYN
          isn’t just another cryptocurrency; it’s a tool for change. Through
          KYN, we’re building the future of Black-owned businesses, community
          infrastructure, and financial independence.
          <br />
          <br />
          As an investor, your involvement in KYN is more than financial; it’s
          an investment in a brighter, stronger future. By backing KYN, you’re
          backing a mission that creates tangible impact, fosters
          collaboration, and supports lasting growth for the Black community.
        </p>
      </div>
    </motion.div>

    <motion.div
      id="countdown-section2"
      className="w-[817px] mx-auto grid grid-cols-4 pb-[120px] lg:w-full lg:pb-[60px] lg:pt-0"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: timeInView ? 1 : 0, y: timeInView ? 0 : 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center justify-center border-l-[1px] border-l-[#333333] border-r-[1px] border-r-[#333333] h-[156px] md:h-[100px]">
        <h1 className="text-[#fff] mont-bold text-center text-[48px] md:text-[31px]">
          {timeLeft.days}
        </h1>
        <p className="text-[16px] text-[#FFFFFF] mont-light md:text-[11px]">
          Days
        </p>
      </div>
      <div className="flex flex-col items-center justify-center border-l-[1px] border-l-[#333333] border-r-[1px] border-r-[#333333]  h-[156px] md:h-[100px]">
        <h1 className="text-[#fff] mont-bold text-center text-[48px]  md:text-[31px]">
          {timeLeft.hours}
        </h1>
        <p className="text-[16px] text-[#FFFFFF] mont-light md:text-[11px]">
          Hours
        </p>
      </div>
      <div className="flex flex-col items-center justify-center border-l-[1px] border-l-[#333333] border-r-[1px] border-r-[#333333]  h-[156px] md:h-[100px]">
        <h1 className="text-[#fff] mont-bold text-center text-[48px]  md:text-[31px]">
          {timeLeft.minutes}
        </h1>
        <p className="text-[16px] text-[#FFFFFF] mont-light md:text-[11px]">
          Minutes
        </p>
      </div>
      <div className="flex flex-col items-center justify-center border-l-[1px] border-l-[#333333] border-r-[1px] border-r-[#333333]  h-[156px] md:h-[100px]">
        <h1 className="text-[#fff] mont-bold text-center text-[48px]  md:text-[31px]">
          {timeLeft.seconds}
        </h1>
        <p className="text-[16px] text-[#FFFFFF] mont-light md:text-[11px]">
          Seconds
        </p>
      </div>
    </motion.div>

    <motion.div
      id="animated-section3"
      className="relative pb-[120px] lg:px-4 lg:pb-[60px]"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: momentInView ? 1 : 0, y: momentInView ? 0 : 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img
        src={hand}
        alt=""
        className="absolute w-[50%] left-0 top-[70px] lg:w-[500px] lg:top-[300px] sm:!w-[320px] sm:!top-[350px] z-10 home-hand"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: momentInView ? 0 : -200, opacity: momentInView ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <img src={grid} alt="" className="absolute right-0 top-[100px]" />
      <span className="w-[250px] h-[150px] top-0 -right-[100px] blur-[100px] bg-[#202020] absolute rounded-full "></span>
      <span className="w-[250px] h-[150px] top-[700px] -left-[100px] blur-[100px] bg-[#202020] absolute rounded-full "></span>

      <motion.div
        className="border-[1px] relative z-1 w-[1061px] mx-auto  h-[601px] border-[#B0B0B0] bg-gradient-to-tr from-[#0D0D0D] to-[#151515] rounded-[30px] mb-[120px] grid grid-cols-2 items-center lg:h-[586px] lg:grid-cols-1 lg:px-[42px] sm:!px-[20px] lg:py-[44px] lg:w-full lg:items-start lg:mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: momentInView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="lg:hidden"></div>
        <div className="w-[420px]">
          <h1 className="text-[54px] text-[#FFFFFF] lg:text-[28px] lg:leading-[40px] mont-bold leading-[52px] mb-[29px] lg:mb-[15px]">
            Join the Movement
          </h1>
          <ul className="my-[29px] flex flex-col gap-[16px] lg:gap-[5px] lg:my-[15px] lg:mb-[5px] sm:!gap-[10px]">
            <li className="text-[16px] mont-light text-[#fff] sm:flex sm:gap-4">
              <span className="mont-bold">Presale Start Date:</span> January 20, 2025
            </li>
            <li className="text-[16px] mont-light text-[#fff]  sm:flex sm:gap-4">
              <span className="mont-bold">Presale End Date:</span> June 19, 2025
            </li>
            <li className="text-[16px] mont-light text-[#fff]  sm:flex sm:gap-4">
              <span className="mont-bold">Whitelisted Price:</span> $0.059 per KYN token
            </li>
             <li className="text-[16px] mont-light text-[#fff]  sm:flex sm:gap-4">
              <span className="mont-bold"> Normal Presale Price:</span> $0.065 per KYN token
            </li>
            <li className="text-[16px] mont-light text-[#fff]  sm:flex sm:gap-4">
              <span className="mont-bold">Hard Cap:</span> $6.67 million
            </li>
            <li className="text-[16px] mont-light text-[#fff]  ">
              <span className="mont-bold">Liquidity Pool Allocation:</span> 65
              <span className="poppins font-extralight">%</span>
            </li>
          </ul>

          <div className="flex items-center gap-5">
            <Link
              to="/white-paper"
              className="w-[222px] h-[50px] rounded-full flex items-center justify-center bg-[#FFFFFF] text-[#000] mont-bold mt-[35px] lg:mt-[15px] lg:text-[10px] lg:w-[158px] lg:h-[32px] sm:!mt-[4px]"
            >
              Read Our Whitepaper
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>

      {/*       <div className="w-[1067px] mx-auto  pb-[120px]  flex flex-col items-center lg:w-full relative z-10">
        <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[239px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[20px] md:mb-0 md:text-[10px] md:w-[188px]">
          Keep Up With The Latest.
        </span>
        <h1 className="text-[54px] md:text-[28px] text-[#fff] mont-bold leading-[52px] mt-[15px] mb-[112px] md:mb-[15px]">
          Connect With Us.
        </h1>
        <div className="grid grid-cols-3 gap-[13px] w-full lg:px-4 md:grid-cols-2">
          <a
            href="/"
            target="_blank"
            className="bg-[#0B0B0B] border-[1px] border-[#B0B0B0] flex flex-col items-center justify-center rounded-[30px] p-[35px] h-[208px] relative gap-4"
          >
            <img src={discord} alt="" />
            <h1 className="text-[16px] mont-bold text-[#FFFFFF]">Discord</h1>
          </a>
          <a
            href="/"
            target="_blank"
            className="bg-[#0B0B0B] border-[1px] border-[#B0B0B0] flex flex-col items-center justify-center rounded-[30px] p-[35px] h-[208px] relative gap-4"
          >
            <img src={insta} alt="" />
            <h1 className="text-[16px] mont-bold text-[#FFFFFF]">Instagram</h1>
          </a>
          <a
            href="/"
            target="_blank"
            className="bg-[#0B0B0B] border-[1px] border-[#B0B0B0] flex flex-col items-center justify-center rounded-[30px] p-[35px] h-[208px] relative gap-4"
          >
            <img src={x} alt="" />
            <h1 className="text-[16px] mont-bold text-[#FFFFFF]">Twitter</h1>
          </a>
          <a
            href="/"
            target="_blank"
            className="bg-[#0B0B0B] border-[1px] border-[#B0B0B0] flex flex-col items-center justify-center rounded-[30px] p-[35px] h-[208px] relative gap-4"
          >
            <img src={tiktok} alt="" />
            <h1 className="text-[16px] mont-bold text-[#FFFFFF]">TikTok</h1>
          </a>
          <a
            href="/"
            target="_blank"
            className="bg-[#0B0B0B] border-[1px] border-[#B0B0B0] flex flex-col items-center justify-center rounded-[30px] p-[35px] h-[208px] relative gap-4"
          >
            <img src={youtube} alt="" />
            <h1 className="text-[16px] mont-bold text-[#FFFFFF]">YouTube</h1>
          </a>
          <a
            href="/"
            target="_blank"
            className="bg-[#0B0B0B] border-[1px] border-[#B0B0B0] flex flex-col items-center justify-center rounded-[30px] p-[35px] h-[208px] relative gap-4"
          >
            <img src={facebook} alt="" />
            <h1 className="text-[16px] mont-bold text-[#FFFFFF]">Facebook</h1>
          </a>
        </div>
      </div>
 */}
      <Footer active={1} />
    </div>
  );
};