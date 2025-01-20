import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { motion } from "framer-motion";

// images
import landing from "../assets/image/white-paper/landing.png";
import arrow from "../assets/image/white-paper/arrow.svg";
import main from "../assets/image/fwb/main.png";
// component
import { Footer } from "../components/Footer";
export const FWB = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[100vh] bg-[#070707]">
      {/* meta data */}
      <Helmet>
        <title>$KYN | FWB</title>
        <meta
          name="description"
          content="Join the KYN Friends with Benefits (FWB) initiative to support our mission. Developers and contributors, help us create innovative tools for economic empowerment."
        />
      </Helmet>

      {/* header components */}
      <Header active={6} />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[394px]  bg-mob flex flex-col items-center justify-center mb-[138px] md:mb-[60px]"
        style={{ background: `url(${landing})`, backgroundSize: "cover" }}
      >
        <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[89px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[16px] pt-[4px]">
          FWB
        </span>
        <h1 className="text-[72px] md:text-[42px] text-[#000000] text-center mont-bold leading-[90px] md:leading-[40px] ">
          FWB
        </h1>
        <button className="mt-[16px]">
          <img src={arrow} alt="" />
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-[1065px] mx-auto flex flex-col lg:w-full lg:px-4"
      >
        <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[165px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[20px] mx-auto">
          FWB (KYN FWB)
        </span>
        <h1 className="text-[54px] md:text-[28px] md:leading-[35px] text-center text-[#FFFFFF] leading-[60px] mont-bold">
          Become a Friend With Benefits:
          <br className="md:hidden" /> Exclusive Access to KYN
        </h1>
        <p className="text-[#fff] md:text-[14px] text-[16px] w-[817px] mx-auto text-center mont-light mt-[25px] mb-[115px] lg:w-full  lg:mb-[60px]">
          KYN FWB invites you to join a revolutionary initiative: the
          development of the BP Blockchain. By contributing your expertise,
          you’ll not only help shape a blockchain designed to empower
          underserved communities but also earn KYN in return for your efforts.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-[45px] pb-0 bg-[#fff]"
      >
        <div className="max-w-[1278px] xl:px-4 w-full mx-auto grid grid-cols-[.7fr_1fr] items-center gap-[40px] md:grid-cols-1 ">
          <div className="pb-5">
            <span className="text-[14px] mont-bold text-[#363636] w-[146px] h-[36px] border-[1px] border-[#363636] flex items-center justify-center rounded-full mb-[20px]">
              Application
            </span>
            <h1 className="text-[54px] md:text-[42px] md:leading-[40px] text-[#000] mont-bold leading-[52px]">
              Benefits for <br /> FWB Members
            </h1>
            {/* <ul className="my-[30px] flex flex-col gap-2 list-disc pl-4">
              <li className="text-[16px] mont-light text-[#000]">
                <span className="mont-bold">Early Access</span> to presale and
                token distributions
              </li>

              <li className="text-[16px] mont-light text-[#000]">
                <span className="mont-bold">Early Access</span> to presale and
                token distributions
              </li>

              <li className="text-[16px] mont-light text-[#000]">
                <span className="mont-bold">Early Access</span> to presale and
                token distributions
              </li>
              <li className="text-[16px] mont-light text-[#000]">
                <span className="mont-bold">Exclusive Updates</span> on KYN’s
                development and milestones
              </li>
              <li className="text-[16px] mont-light text-[#000]">
                <span className="mont-bold">Invitations to Special Events</span>{" "}
                and community gatherings
              </li>
              <li className="text-[16px] mont-light text-[#000]">
                <span className="mont-bold">Discounts</span> on KYN products and
                services
              </li>
            </ul> */}

            <a
              rel="noreferrer"
              target="_blank"
              href="https://bp2025.typeform.com/to/AwqfhxH6?utm_source=xxxxx"
              className="w-[236px] h-[50px] flex items-center justify-center rounded-full bg-[#000] text-[#FFFFFF] text-[16px] mont-bold"
            >
              Become an FWB Today
            </a>
          </div>
          <div>
            <img src={main} alt="" />
          </div>
        </div>
      </motion.div>

      <Footer active={6} />
    </div>
  );
};
