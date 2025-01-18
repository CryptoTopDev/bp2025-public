import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
// images
import landing from "../assets/image/white-paper/landing.png";
import arrow from "../assets/image/white-paper/arrow.svg";
import faqCoin from "../assets/image/faq/faq-coin.png";
import hand from "../assets/image/presale/hand.png";
import presalegrid from "../assets/image/presale/presale-grid.png";

// component
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { FaqBox } from "../components/faq/FaqBox";
import { SwapForm } from "../components/home/SwapForm";

export const Presale = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[100vh] bg-[#070707]">
      {/* meta data */}
      <Helmet>
        <title>$KYN | Presale</title>
        <meta
          name="description"
          content="Be part of the KYN Token presale starting January 20, 2025. Secure your place in the future of economic empowerment and blockchain innovation.

"
        />
      </Helmet>

      <Header active={4} />
      <div
        className="h-[394px] bg-mob flex flex-col items-center justify-center  lg:mb-[0px]"
        style={{ background: `url(${landing})`, backgroundSize: "cover" }}
      >
        <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[131px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[16px] pt-[4px]">
          Presale
        </span>
        <h1 className="text-[72px] md:text-[42px] text-[#000000] text-center mont-bold leading-[90px] md:leading-[40px] md:w-[232px]">
          Secure Your Spot in <br className="md:hidden" /> the Movement
        </h1>
        <button className="mt-[16px]">
          <img src={arrow} alt="" />
        </button>
      </div>

      <div className="w-[1061px] relative z-10 mx-auto py-[120px] grid grid-cols-2 gap-[72px] items-center lg:w-full lg:grid-cols-1 lg:py-[60px] lg:px-4 md:gap-[30px]">
        <div className="relative  xl:px-10 sm:!px-0">
          <SwapForm />
        </div>
        <div className="md:flex md:flex-col md:items-center lg:px-10">
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
              transaction and secure your Kyncoin.
            </li>
          </ul>

          <Link
            to="/"
            className="w-[236px] h-[50px] flex items-center justify-center rounded-full bg-[#fff] text-[#000000] text-[16px] mont-bold"
          >
            Join the Presale Now
          </Link>
        </div>
      </div>
      <div className="relative">
        <img
          src={presalegrid}
          alt=""
          className="absolute right-0 top-[600px]"
        />
        <div className="w-[1064px] mx-auto  relative z-10 lg:w-full lg:px-4">
          <div className="w-[844px] mx-auto pb-[120px] lg:w-full md:pb-[80px]">
            <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[150px] flex items-center justify-center border-[1px] border-[#363636] rounded-full md:mx-auto">
              KYN
            </span>
            <h1 className="text-[54px] text-[#fff] mont-bold leading-[52px] mb-[45px] mt-[15px] md:text-center md:text-[28px] md:leading-[40px] md:mb-[15px]">
              Your Opportunity to Be Part of Something Bigger: Join the KYN
              Presale
            </h1>
            <p className="text-[22px] text-[#fff] mont-light md:text-center md:text-[14px] ">
              The KYN presale will run from{" "}
              <span className="mont-bold">January 20, 2025</span>, to{" "}
              <span className="mont-bold">June 19, 2025</span>, with tokens
              available for purchase at{" "}
              <span className="mont-bold">$0.059 per token</span>. The presale
              aims to raise $6.67 million by selling 60
              <span className="poppins font-extralight">%</span> of the total
              supply (111,900,000 KYN). Unsold tokens will not be burned,
              ensuring their availability for future strategic initiatives. The
              KYN presale kicks off on{" "}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-[13px] pb-[120px] lg:grid-cols-2 lg:px-0">
            <div className="border-[1px] h-[196px] border-[#B0B0B0] bg-gradient-to-tr from-[#0D0D0D] to-[#151515] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
              <h1 className="text-[38px] text-[#fff] mont-bold md:text-[24px] sm:!text-[20px] sm:leading-[25px]">
                Jan 20, 2025
              </h1>
              <p className="text-[22px] mont-light text-[#FFFFFF] md:text-[15.3px]">
                Presale Start Date
              </p>
            </div>
            <div className="border-[1px] h-[196px] border-[#B0B0B0] bg-gradient-to-tr from-[#0D0D0D] to-[#151515] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
              <h1 className="text-[38px] text-[#fff] mont-bold md:text-[24px] sm:!text-[20px] sm:leading-[25px]">
                June 19, 2025
              </h1>
              <p className="text-[22px] mont-light text-[#FFFFFF] md:text-[15.3px]">
                Presale End Date
              </p>
            </div>
            <div className="border-[1px] h-[196px] border-[#B0B0B0] bg-gradient-to-tr from-[#0D0D0D] to-[#151515] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
              <h1 className="text-[38px] text-[#fff] mont-bold md:text-[24px] sm:!text-[20px] sm:leading-[25px]">
                $0.059 per token
              </h1>
              <p className="text-[22px] mont-light text-[#FFFFFF] md:text-[15.3px]">
                Presale Price
              </p>
            </div>
            <div className="border-[1px] h-[196px] border-[#B0B0B0] bg-gradient-to-tr from-[#0D0D0D] to-[#151515] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
              <h1 className="text-[38px] leading-[36px] text-center text-[#fff] mont-bold md:text-[24px] sm:!text-[20px] sm:leading-[25px]">
                111,900,000 <br /> KYN
              </h1>
              <p className="text-[22px] mont-light text-[#FFFFFF] md:text-[15.3px]">
                Tokens Available
              </p>
            </div>
            <div className="border-[1px] h-[196px] border-[#B0B0B0] bg-gradient-to-tr from-[#0D0D0D] to-[#151515] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
              <h1 className="text-[38px]  leading-[36px] text-[#fff] mont-bold text-center md:text-[24px]">
                213 SOL <br /> ($50K)
              </h1>
              <p className="text-[22px] mont-light text-[#FFFFFF] md:text-[15.3px]">
                Min Liq
              </p>
            </div>
            <div className="border-[1px] h-[196px] border-[#B0B0B0] bg-gradient-to-tr from-[#0D0D0D] to-[#151515] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
              <h1 className="text-[38px]  leading-[36px] text-center text-[#fff] mont-bold md:text-[24px] sm:!text-[20px] sm:leading-[25px]">
                $6.67 million <br /> (2M SOL)
              </h1>
              <p className="text-[22px] mont-light text-[#FFFFFF] md:text-[15.3px]">
                Max Liq
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative lg:px-4">
        <img
          src={hand}
          alt=""
          className="absolute left-0 top-[90px] lg:w-[500px] lg:top-[300px] sm:!w-[320px] sm:!top-[350px]"
        />
        <div className="border-[1px] w-[1061px] mx-auto  h-[601px] border-[#B0B0B0] bg-gradient-to-tr from-[#0D0D0D] to-[#151515] rounded-[30px] mb-[120px] grid grid-cols-2 items-center lg:h-[586px] lg:grid-cols-1 lg:px-[42px] lg:py-[44px] lg:w-full lg:items-start">
          <div className="lg:hidden"></div>
          <div>
            <h1 className="text-[54px] text-[#FFFFFF] lg:text-[28px] lg:leading-[40px] mont-bold leading-[52px] mb-[29px] lg:mb-[15px]">
              How to Buy <br /> KYN Coin
            </h1>
            <ul className="flex flex-col gap-5 lg:gap-[5px]">
              <li className="text-[16px] mont-light lg:text-[12px] text-[#FFFFFF] flex items-start gap-5">
                <span className="mont-bold">1</span> Connect your wallet.
              </li>
              <li className="text-[16px] mont-light lg:text-[12px] text-[#FFFFFF] flex items-start gap-5">
                <span className="mont-bold">2</span>Choose your investment
                amount.
              </li>
              <li className="text-[16px] mont-light lg:text-[12px] text-[#FFFFFF] flex items-start gap-5">
                <span className="mont-bold">3</span>
                Confirm your transaction and secure <br /> your BP2025 tokens.
              </li>
            </ul>

            <Link
              to="/"
              className="w-[222px] h-[50px] rounded-full flex items-center justify-center bg-[#FFFFFF] text-[#000] mont-bold mt-[35px] lg:mt-[15px] lg:text-[10px] lg:w-[138px] lg:h-[32px]"
            >
              Join the Presale Now
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-[120px] pb-[120px] max-w-[1061px] w-[100%]  mx-auto  md:w-full md:px-4 md:pb-[40px] md:mt-0">
        <h1 className="text-[40px] text-[#fff] mont-bold leading-[50px] md:text-[28px] md:leading-[35px] text-center mb-16 md:mb-10 ">
          Frequently Asked Questions
        </h1>

        <div className="w-full  gap-[24px] md:w-full grid grid-cols-2 lg:grid-cols-1">
          <FaqBox
            heading="What is cryptocurrency?"
            paragraph="Cryptocurrency is a type of digital money that exists only on the internet. Unlike regular money, like dollars or coins, you can’t hold it in your hand. 
                  It’s completely online, and it’s used just like regular money to buy things or send to others. People use special computers and technology to keep track of this money instead of using banks."
          />
          <FaqBox
            heading="What is a token?"
            paragraph="
      A token is a type of digital money that exists within a specific project or community. Think of it like a gift card to a store: it has a specific use, and you can spend it in ways that help that community or project. 
      For example, the KYN token is money that helps support the Black Project 2025 (BP2025) mission, which is a big plan to help the Black community grow and be more powerful economically."
          />
          <FaqBox
            heading="What is the blockchain?"
            paragraph="A blockchain is like a digital notebook that keeps track of who owns what in the world of cryptocurrency. Imagine you and your friends are trading cards. Every time you trade a card, you write it down in your notebook so everyone knows who has which card. This notebook is special because no one person controls it, and everyone can see it. It’s safe, clear, and helps everyone trust that the trades are real."
          />
          <FaqBox
            heading="What is KYN?"
            paragraph="KYN is a digital token (kind of like digital money) created specifically for the Black Project 2025 (BP2025). It’s part of a plan to help the Black community grow and become stronger by supporting businesses, education, and other community projects. When you have KYN tokens, you’re part of helping make that happen."
          />
          <FaqBox
            heading="How do I buy KYN tokens?"
            paragraph="To buy KYN tokens, you first need to set up something called a wallet. Think of it like an online account where you can store your digital money. To buy KYN, you’ll need to have a kind of digital money called Solana (SOL). Once you have that, you can use it to purchase KYN tokens during the presale (which is like a special sale before KYN is available to everyone).YOU MUST BE IN THE DISCORD COMMUNITY TO BE WHITELISTED TO BUY KYN."
          />
        </div>
      </div>

      <div className="bg-[#fff] pt-[20px] xl:pt-[60px] xl:pb-0">
        <div className="max-w-[1278px] w-[100%] mx-auto grid grid-cols-[1fr_1fr] gap-16 items-center xl:px-[33px] md:grid-cols-1 xl:gap-10">
          <div className="md:order-2">
            <img src={faqCoin} alt="" className="w-full" />
          </div>
          <div className="md:order-1">
            <h1 className="text-[#000000] text-[50px] md:text-[42px] md:leading-[40px] mont-bold leading-[55px]">
              Invest in Us. <br />
              Grow with You.
            </h1>
            <div className="flex items-center gap-2 mt-5">
              <Link
                to="/road-map"
                className="w-[120px] h-[50px] flex items-center justify-center rounded-full bg-[#000] text-[#FFFFFF] text-[16px] mont-bold border-[1px] border-[#000000]"
              >
                Roadmap
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
      </div>

      <Footer active={4} />
    </div>
  );
};
