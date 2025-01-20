import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { motion } from "framer-motion";

// images
import faqCoin from "../assets/image/faq/faq-coin.png";
import step2img1 from "../assets/image/howtobuy/step2(1).svg";
import step2img2 from "../assets/image/howtobuy/step2(2).svg";
import step2img3 from "../assets/image/howtobuy/step2(3).svg";
import step2img4 from "../assets/image/howtobuy/step2(4).svg";
import step2img5 from "../assets/image/howtobuy/step2(5).svg";
import step2img6 from "../assets/image/howtobuy/step2(6).svg";
import step3img1 from "../assets/image/howtobuy/step3(1).svg";
import step3img2 from "../assets/image/howtobuy/step3(2).svg";
import step3img3 from "../assets/image/howtobuy/step3(3).svg";
import step3img4 from "../assets/image/howtobuy/step3(4).svg";
import step4img1 from "../assets/image/howtobuy/step4(1).svg";
import step4img2 from "../assets/image/howtobuy/step4(2).svg";
import step4img3 from "../assets/image/howtobuy/step4(3).svg";
import step5img1 from "../assets/image/howtobuy/step5(1).svg";
import step5img2 from "../assets/image/howtobuy/step5(2).svg";
import step5img3 from "../assets/image/howtobuy/step5(3).svg";
import step5img4 from "../assets/image/howtobuy/step5(4).svg";
import step5img5 from "../assets/image/howtobuy/step5(5).svg";
import support from "../assets/image/howtobuy/support.svg";
import arrow from "../assets/image/white-paper/arrow.svg";
import landing from "../assets/image/white-paper/landing.png";

import coin1 from "../assets/image/howtobuy/coin1.svg";
import coin2 from "../assets/image/howtobuy/coin2.svg";
import coin3 from "../assets/image/howtobuy/coin3.svg";
import coin4 from "../assets/image/howtobuy/coin4.svg";
import coin5 from "../assets/image/howtobuy/coin5.svg";
import coin6 from "../assets/image/howtobuy/coin6.svg";

import { Helmet } from "react-helmet";
import { Link } from "react-router";
// import { useToast } from "../utils/Toast/ToastProvider";
// import SuccessModal from "../utils/Modals/SuccessModal";

const HowToBuy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // const showToast = useToast();
  // const handleSuccess = () => {
  //   showToast({ title: "Token claim was successful.", type: "success" });
  // };
  // const handleError = () => {
  //   showToast({ title: "You dont enough so!", type: "error" });
  // };

  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    console.log("onClose");
    setIsOpen(false);
  };
  let title = "Token purchase was successful.";

  return (
    <div className="bg-[#070707] !-z-50 min-h-[100vh]">
      {/* meta data */}
      <Helmet>
        <title>$KYN | How to buy</title>
        <meta
          name="description"
          content="Read the KYN Token whitepaper to understand our vision, tokenomics, and roadmap. See how blockchain technology supports our mission of economic growth."
        />
      </Helmet>
      {/* header components */}
      <Header active={8} />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="h-[394px] bg-mob flex flex-col items-center justify-center mb-[138px] md:mb-[60px]"
        style={{ background: `url(${landing})`, backgroundSize: "cover" }}
      >
        <span
          // onClick={() => setIsOpen(true)}
          className="text-[14px] mont-bold text-[#363636] h-[38px] w-[89px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[16px] pt-[4px]"
        >
          Buy KYN
        </span>

        {/* Text Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[72px] md:text-[42px] text-[#000000] text-center mont-bold leading-[90px] md:leading-[40px] md:w-[234px]"
        >
          How to Buy <br />
          KYN Coin
        </motion.h1>

        {/* Button Animation */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="mt-[16px]"
        >
          <img src={arrow} alt="" />
        </motion.button>
      </motion.div>

      <div className="w-[1065px] mx-auto flex flex-col lg:w-full lg:px-4">
        <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[215px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[20px] mx-auto">
          HOW TO BUY KYNCOIN
        </span>
        <h1 className="text-[54px] md:text-[28px] md:leading-[35px] text-center text-[#FFFFFF] leading-[60px] mont-bold">
          How to Create a Phantom Wallet
          <br className="md:hidden" /> and Purchase KYN Coin
        </h1>
        <p className="text-[#fff] md:text-[14px] text-[16px] w-[837px] mx-auto text-center mont-light mt-[25px] mb-[115px] lg:w-full  lg:mb-[60px]">
          Welcome to the KYN Coin family! This guide will walk you through how
          to create a Phantom Wallet—a secure and easy-to-use wallet for
          managing your KYN Coins—and how to purchase KYN Coin once your wallet
          is set up.
        </p>
      </div>

      <div className="relative overflow-hidden md:pt-10">
        <div className="w-[848px] mx-auto flex flex-col sm:gap-12  lg:w-full lg:px-4 !z-50">
          <img
            src={coin1}
            className="absolute left-0 -top-[0px] md:w-[148px] md:-left-[200px] md:-top-[30px]"
            alt=""
          />
          <img
            src={coin2}
            className="absolute right-0 top-[1300px] md:w-[148px] md:-right-[200px] md:-top-[30px]"
            alt=""
          />
          <img
            src={coin3}
            className="absolute left-0 top-[2800px] md:w-[148px] md:-left-[200px] md:-top-[30px]"
            alt=""
          />
          <img
            src={coin4}
            className="absolute right-[-100px] top-[3900px] z-[0] md:w-[148px] md:-right-[200px] md:-top-[30px]"
            alt=""
          />
          <img
            src={coin5}
            className="absolute sm:hidden lg:flex left-[0] top-[5700px] z-[0] md:w-[148px] md:-left-[200px] md:-top-[30px]"
            alt=""
          />
          <img
            src={coin6}
            className="absolute -right-[80px] top-[7000px] md:w-[148px] md:-right-[200px] md:-top-[30px]"
            style={{ zIndex: 10 }}
            alt=""
          />
          {/* Step1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-row sm:flex-col justify-between items-center sm:px-[30px] sm:py-10 px-[72px] py-20 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
          >
            <div className="sm:w-full w-[40%] sm:items-start flex flex-col">
              <h2 className="text-[32px]  md:text-[28px] text-[#fff] mont-bold">
                Step 1
              </h2>
              <p className="sm:w-[250px] mont-light text-[#fff] text-[32px] md:text-[28px]">
                What is a Phantom Wallet?
              </p>
            </div>
            <p className="w-[372px] sm:w-full text-[#FFFFFF] text-[16px] mont-light md:text-[14px]">
              Phantom Wallet is a trusted cryptocurrency wallet built for the
              Solana blockchain. It’s like a digital vault where you can store,
              send, and receive Solana-based tokens like KYN Coin.
            </p>
          </motion.div>
          <div className="flex sm:hidden justify-center">
            <div className="w-[1px] h-[48px] bg-[#B0B0B0]"></div>
          </div>
          {/* Step2 */}
          <div className="flex justify-between items-center sm:py-10  py-12 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]">
            <div className="w-full flex flex-col">
              <h2 className="text-[32px] sm:px-[50px] px-[72px]  md:text-[28px] text-[#fff] mont-bold">
                Step 2
              </h2>
              <p className="mont-light sm:px-[50px] px-[72px] text-[#fff] text-[32px] md:text-[28px]">
                Setting Up Your Phantom Wallet
              </p>
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex sm:flex-col flex-row justify-between sm:gap-2  mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      1. Download Phantom Wallet:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Visit the official Phantom website:
                          <span className="font-bold"> www.phantom.app</span>
                        </span>
                      </li>
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span className="w-[280px]">
                          Click on
                          <span className="font-bold">"Download"</span>
                          and choose the browser extension for Chrome, Firefox,
                          Edge, or Brave.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%] sm:w-full">
                    <img src={step2img1} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex sm:flex-col flex-row justify-between sm:gap-2  mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      2. Install the Extension:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          After downloading, follow the <br />
                          prompts to{" "}
                          <span className="font-bold">
                            add the Phantom Wallet extension to your browser.
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%] sm:w-full">
                    <img src={step2img2} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex sm:flex-col flex-row justify-between sm:gap-2   mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      3. Create a New Wallet:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Open the Phantom extension by
                          <br />
                          <span className="font-bold">
                            {" "}
                            clicking its icon in your browser toolbar.
                          </span>
                        </span>
                      </li>
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Select
                          <span className="font-bold">
                            {" "}
                            "Create a New Wallet."
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%] sm:w-full">
                    <img src={step2img3} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between sm:gap-2   mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      4. Backup Your Recovery Phrase
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Phantom will provide a 12-word <br /> recovery phrase.
                          Write this phrase
                          <br /> down and keep it in a safe place.
                          <br />
                          <span className="font-bold">
                            {" "}
                            Do not share it with anyone.
                          </span>
                          It’s <br />
                          the only way to recover your
                          <br /> wallet if you lose access.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%] sm:w-full">
                    <img src={step2img4} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between sm:gap-2   mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      5. Set a Password:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Create a strong password for
                          <br /> your wallet and confirm it.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%] sm:w-full">
                    <img src={step2img5} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between sm:gap-2   mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      6. Access Your Wallet:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Once setup is complete, your wallet will open, showing
                          your account address and balance (which will initially
                          be zero).
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%] sm:w-full">
                    <img src={step2img6} className="w-full h-full" alt="" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden justify-center">
            <div className="w-[1px] h-[48px] bg-[#B0B0B0]"></div>
          </div>
          {/* Step3 */}
          <div className="flex justify-between items-center  py-12 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]">
            <div className="w-full flex flex-col">
              <h2 className="text-[32px] sm:px-[48px] px-[72px]  md:text-[28px] text-[#fff] mont-bold">
                Step 3 <br />{" "}
                <span className="mont-light">
                  Downloading the Phantom Mobile App
                </span>
              </h2>
              <p className="mont-light sm:px-[48px] px-[72px] text-[#fff] text-[16px] md:text-[22px] sm:!text-[18px]">
                Stay connected to your KYN Coins on the go by downloading the
                Phantom Wallet mobile app for iOS or Android.
              </p>
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between sm:gap-2  mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      1. Download the App:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          <span className="font-bold">For iOS: </span>
                          Open the App Store and
                          <br /> search for
                          <span className="font-bold">"Phantom Wallet."</span>
                        </span>
                      </li>
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span className="">
                          <span className="font-bold">For Android: </span>
                          Open the Google Play Store and search for
                          <span className="font-bold"> "Phantom Wallet."</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%] sm:w-[94%] sm:mx-auto">
                    <img src={step3img1} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between  sm:gap-2  mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      2. Install the App:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Tap
                          <span className="font-bold"> "Get" </span>
                          and wait for the app to download.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%] sm:w-[94%] sm:mx-auto">
                    <img src={step3img2} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between  sm:gap-2  mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      3. Log In to Your Wallet:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Open the app and select
                          <span className="font-bold"> "Import Wallet."</span>
                        </span>
                      </li>
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Enter your 12-word recovery phrase to access your
                          existing wallet.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%] sm:w-[94%] sm:mx-auto">
                    <img src={step3img3} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between sm:gap-2   mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      4. Start Managing Your Tokens:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Once logged in, you can view your balance, send and
                          receive tokens, and manage your KYN Coins from
                          anywhere.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%]  sm:w-[94%] sm:mx-auto">
                    <img src={step3img4} className="w-full h-full" alt="" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden justify-center">
            <div className="w-[1px] h-[48px] bg-[#B0B0B0]"></div>
          </div>
          {/* Step4 */}
          <div className="flex justify-between items-center  py-12 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]">
            <div className="w-full flex flex-col">
              <h2 className="text-[32px] sm:px-[48px] px-[72px]  md:text-[28px] text-[#fff] mont-bold">
                Step 4
                <br />
                <span className="mont-light">Adding Funds to Your Wallet</span>
              </h2>
              <p className="mont-light sm:px-[48px] px-[72px] text-[#fff] text-[16px] md:text-[22px] sm:!text-[18px]">
                Before purchasing KYN Coin, you’ll need Solana (SOL) in your
                Phantom Wallet to cover transaction fees and buy the tokens.
              </p>
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between sm:gap-2  mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      1. Find Your Wallet Address:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Open the Phantom Wallet and click on your wallet
                          address at the top. This will automatically copy it.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%]  sm:w-[94%] sm:mx-auto">
                    <img src={step4img1} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between  sm:gap-2  mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      2. Buy SOL:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span className="sm:w-[270px] w-full">
                          You can purchase SOL from exchanges like or
                          <span className="font-bold">
                            {" "}
                            Coinbase, Binance,{" "}
                          </span>{" "}
                          or <span className="font-bold">Kraken.</span>(
                          <span className="underline">
                            www.coinbase.com/how-to-buy/solana
                          </span>
                          )
                        </span>
                      </li>
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span className="mont-light sm:w-[290px] w-[348px]">
                          Send the SOL to your Phantom Wallet by pasting your
                          wallet address.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%]  sm:w-[94%] sm:mx-auto">
                    <img src={step4img2} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between sm:gap-2   mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      3. Verify the Funds:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Once the transaction is complete, check your Phantom
                          Wallet to ensure the SOL has arrived.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%] sm:w-full">
                    <img src={step4img3} className="w-full h-full" alt="" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden justify-center">
            <div className="w-[1px] h-[48px] bg-[#B0B0B0]"></div>
          </div>
          {/* Step5 */}
          <div className="flex justify-between items-center  py-12 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]">
            <div className="w-full flex flex-col">
              <h2 className="text-[32px] sm:px-[48px] px-[72px]  md:text-[28px] text-[#fff] mont-bold">
                Step 5
                <br />
                <span className="mont-light">Purchasing KYN Coin</span>
              </h2>
              <p className="mont-light sm:px-[48px] px-[72px] text-[#fff] text-[16px] md:text-[22px] sm:!text-[14px]">
                Now that your wallet is set up and funded, here’s how to buy KYN
                Coin:
              </p>
              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between sm:gap-2 mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      1. Visit the KYN Coin Presale Page:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Go to the official KYN Coin website and navigate to
                          the <span className="font-bold">Presale</span> page.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[46%] sm:w-full lg:pr-4">
                    <img src={step5img1} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between sm:gap-2  mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      2. Connect Your Wallet:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Tap
                          <span className="font-bold"> "Get" </span>
                          and wait for the app to download.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[47%] sm:w-[94%] sm:mx-auto lg:pr-4">
                    <img src={step5img2} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between  sm:gap-2  mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      3. Select the Amount of KYN Coin to Purchase:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Enter the amount of KYN Coin
                          <br /> you want to buy.
                        </span>
                      </li>
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Make sure you have enough SOL for the purchase and
                          transaction fees.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%] sm:w-full">
                    <img src={step5img3} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between sm:gap-2  mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      4. Confirm the Purchase:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>Review the transaction details.</span>
                      </li>
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Approve the transaction in your Phantom Wallet when
                          prompted.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%] sm:w-full">
                    <img src={step5img4} className="w-full h-full" alt="" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="flex flex-row sm:flex-col justify-between sm:gap-2  mt-4 sm:mx-[22px] mx-[36px] px-6 py-8 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
                >
                  <div className="w-[45%] sm:w-full flex flex-col gap-4">
                    <h2 className="text-[18px] font-extrabold text-white">
                      5. Receive Your KYN Coins:
                    </h2>
                    <ul className="text-white space-y-4 pl-4">
                      <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                        <span className="list-disc text-[12px] pt-1">•</span>
                        <span>
                          Once the transaction is confirmed, your KYN Coins will
                          appear in your Phantom Wallet.
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="w-[49%] sm:w-full">
                    <img src={step5img5} className="w-full h-full" alt="" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex sm:hidden justify-center">
            <div className="w-[1px] h-[48px] bg-[#B0B0B0]"></div>
          </div>
          {/* Step6 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-between items-center sm:px-[50px] px-[72px] py-12 bg-[#0f0f0f] border border-[#B0B0B0] rounded-[30px]"
          >
            <div className="flex flex-col">
              <h2 className="text-[32px]  md:text-[28px] text-[#fff] mont-bold">
                Step 6
              </h2>
              <p className="mont-light text-[#fff] text-[32px] md:text-[28px]">
                Staying safe and Informed
              </p>
              <ul className="text-white">
                <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                  <span className="list-disc text-[12px] pt-1">•</span>
                  <span>
                    <span className="font-bold">
                      Never share your recovery phrase.{" "}
                    </span>
                    KYN Coin or any legitimate crypto project will
                    <br /> never ask for it.
                  </span>
                </li>
                <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                  <span className="list-disc text-[12px] pt-1">•</span>
                  <span>
                    Only use official links and websites for transactions.
                  </span>
                </li>
                <li className="font-light grid grid-cols-[auto,1fr] gap-2">
                  <span className="list-disc text-[12px] pt-1">•</span>
                  <span>
                    Bookmark the KYN Coin website for quick and secure access.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=" flex flex-row justify-between sm:flex-col py-[68px] lg:pb-[30px]"
          >
            <div className="w-[50%] sm:w-full lg:flex-col lg:flex lg:items-center">
              <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[134px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[25px]">
                Contact Us
              </span>
              <h1 className="text-[54px] md:text-[28px] md:leading-[40px] text-[#fff] mont-bold leading-[55px]  lg:text-center">
                Support
              </h1>
              <p className="text-[16px] md:text-[14px] text-[#FFFFFF] mont-light mt-[30px] mb-[30px] lg:text-center">
                If you have any questions or run into any issues, our team is
                here to help! Visit our Support Page or join our Discord
                Community.
              </p>
              <p className="text-[16px] md:text-[14px] text-[#FFFFFF] mont-light mt-[30px] mb-[30px] lg:text-center">
                Welcome to the KYN Coin journey! Together, we’re building a
                brighter future for everyone.
              </p>
            </div>
            <div>
              <div className="w-full sm:w-[80%] sm:mx-auto">
                <img
                  src={support}
                  alt=""
                  className="w-full sm:[400px] lg:w-[600px] lg:mx-auto md:!w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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

      <Footer active={8} />
      {/* <SuccessModal isOpen={isOpen} onClose={onClose} title={title} /> */}
      {/* <ErrorModal isOpen={isOpen} onClose={onClose} title={title} /> */}
    </div>
  );
};

export default HowToBuy;
