import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";

// images
import landing from "../assets/image/white-paper/landing.png";
import arrow from "../assets/image/white-paper/arrow.svg";
import coin1 from "../assets/image/roadmap/coin1.svg";
import coin2 from "../assets/image/roadmap/coin2.svg";
import bg from "../assets/image/tokenomics/bg.png";
import faqCoin from "../assets/image/faq/faq-coin.png";
import { Link } from "react-router";
import { Footer } from "../components/Footer";
import { FaqBox } from "../components/faq/FaqBox";
import { SwapForm } from "../components/home/SwapForm";
export const Tokenomics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[100vh] bg-[#070707]  overflow-hidden relative">
      {/* meta data */}
      <Helmet>
        <title>$KYN | Tokenomics</title>
        <meta
          name="description"
          content=" Dive into the KYN Tokenomics—65% allocated to liquidity, no burn mechanism, and a strategic approach to growth. See how we’re ensuring transparency and long-term success."
        />
      </Helmet>

      <Header active={3} />
      <div
        className="h-[394px] bg-mob flex flex-col items-center justify-center  lg:mb-[0px]"
        style={{ background: `url(${landing})`, backgroundSize: "cover" }}
      >
        <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[131px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[16px] pt-[4px]">
          Tokenomics
        </span>
        <h1 className="text-[72px] md:text-[42px] text-[#000000] text-center mont-bold leading-[90px] md:leading-[40px] md:w-[258px]">
          Our Tokenomics Just <br className="md:hidden" /> Make Sense.
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
            How to Buy <br /> KynCoin
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
      <div className="relative overflow-hidden ">
        <img
          src={coin1}
          alt=""
          className="absolute -left-[200px] top-[200px] md:hidden"
        />
        <img
          src={coin2}
          alt=""
          className="absolute -right-[150px] bottom-[300px] md:hidden"
        />
        <div className="w-[848px] z-10 relative mx-auto pb-[120px] grid grid-cols-6 gap-[12px] lg:w-full lg:grid-cols-2 sm:!grid-cols-1 lg:px-4">
          <div className="h-[195px] col-span-2 lg:col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              Kyncoin
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              Name
            </p>
          </div>
          <div className="h-[195px] col-span-2 lg:col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              KYN
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              Symbol
            </p>
          </div>
          <div className="h-[195px] col-span-2 lg:col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              9
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              Decimals
            </p>
          </div>
          <div className="h-[195px] col-span-2 lg:col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              186,500,000 <br /> KYN
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              Total Supply
            </p>
          </div>
          <div className="h-[195px] col-span-2 lg:col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              213 SOL ($50K)
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              SoftCap
            </p>
          </div>
          <div className="h-[195px] col-span-2 lg:col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              $6.67 million <br /> (28,637 SOL)
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              HardCap
            </p>
          </div>
          <div className="h-[195px] col-span-2 lg:col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              111,900,000 <br />
              (60<span className="poppins font-bold">%</span>)
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              Presale Allocation
            </p>
          </div>
          <div className="h-[195px] col-span-2 lg:col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              Jan 20, 2025 <br />
              <span className="text-[22px] leading-[20px] inline-block">
                (MLK Day)
              </span>
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              Presale Start Date
            </p>
          </div>
          <div className="h-[195px] col-span-2 lg:col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px] ">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              June 19, 2025
              <br />
              <span className="text-[22px] leading-[20px] inline-block">
                (Juneteenth)
              </span>
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              Presale End Date
            </p>
          </div>
          <div className="h-[195px] col-span-2 lg:col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px] ">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              June 19, 2025
              <br />
              <span className="text-[22px] leading-[20px] inline-block">
                (Juneteenth)
              </span>
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              Presale End Date
            </p>
          </div>
          <div className="h-[195px] col-span-2 lg:col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px] ">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              Non Whitelisted Members 
              <br />
              <span className="text-[22px] leading-[20px] inline-block">
                0.065
              </span>
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              Per KYN
            </p>
          </div>
          <div className="h-[195px] col-span-2 lg:col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px] ">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              Whitelisted Members
              <br />
              <span className="text-[22px] leading-[20px] inline-block">
                0.059 
              </span>
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              Per KYN
            </p>
          </div>

          <div className="h-[195px] col-span-3 lg:col-span-2 sm:!col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px] ">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              65<span className="poppins font-bold">%</span> of funds raised
              during presale
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              Liquidity Pool Allocation
            </p>
          </div>
          <div className="h-[195px] col-span-3 lg:col-span-2 sm:!col-span-1 w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px] ">
            <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
              Discord Community Members
            </h1>
            <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
              Whitelisted Wallets
            </p>
          </div>
        </div>

        <div className="w-[844px] relative z-10 mx-auto pb-[120px] lg:w-full lg:pb-[80px] lg:px-4">
          <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[150px] flex items-center justify-center border-[1px] border-[#363636] rounded-full md:mx-auto">
            KYN
          </span>
          <h1 className="text-[54px] text-[#fff] mont-bold leading-[52px] mb-[45px] mt-[15px] md:text-[28px] md:leading-[40px] md:text-center md:mb-[10px]">
            A Token Built for Growth
          </h1>
          <p className="text-[22px] text-[#fff] mont-light  md:text-[14px] md:text-center">
            The liquidity pool will ensure that KYN’s value remains strong
            throughout its lifecycle. 65
            <span className="poppins font-extralight">%</span> of the funds
            raised will be directed to the liquidity pool, guaranteeing a
            sustainable and healthy market for KYN. The remaining funds will go
            toward further development of BP2025, including business
            infrastructure, product development, and community-driven projects.
          </p>
        </div>

        <div className="w-[844px] mx-auto pb-[120px] lg:w-full lg:px-4 lg:pb-4 relative z-10">
          <h1 className="text-[54px] text-[#fff] mont-bold leading-[52px] mb-[15px] md:text-[28px] md:leading-[40px]">
            Investor Protection and <br />
            Equitable Distribution
          </h1>
          <p className="text-[22px] text-[#fff] mont-light mb-[45px] md:text-[14px] ">
            To ensure fairness and stability, KYN will include the following:
          </p>
          <div className="grid grid-cols-[200px_1fr] mb-5 md:grid-cols-[92px_1fr] md:gap-[40px] gap-[86px]">
            <h1 className="text-[32px] mont-bold leading-[35px] text-[#FFFFFF] md:text-[16px] md:leading-[22px]">
              Whale Protection
            </h1>
            <p className="text-[16px] mont-light text-[#fff] md:text-[14px]">
              Presale purchase limits to prevent any single investor from
              dominating the supply.
            </p>
          </div>
          <div className="grid grid-cols-[200px_1fr]  mb-5 md:grid-cols-[92px_1fr] md:gap-[40px] gap-[86px]">
            <h1 className="text-[32px] mont-bold leading-[35px] text-[#FFFFFF] md:text-[16px] md:leading-[22px]">
              No Burn Mechanism
            </h1>
            <p className="text-[16px] mont-light text-[#fff] md:text-[14px]">
              Any unsold tokens will not be burned, for longterm growth and
              longevity.
            </p>
          </div>
          <div className="grid grid-cols-[200px_1fr]   md:grid-cols-[92px_1fr] md:gap-[40px] gap-[86px]">
            <h1 className="text-[32px] mont-bold leading-[35px] text-[#FFFFFF] md:text-[16px] md:leading-[22px]">
              Staggered Token Release
            </h1>
            <p className="text-[16px] mont-light text-[#fff] md:text-[14px]">
              Presale tokens will be released gradually to prevent market
              manipulation, with 10
              <span className="poppins font-extralight">%</span> of tokens
              distributed every 60 days starting June 19, 2025.
            </p>
          </div>
        </div>
      </div>

      <div
        className="py-[115px] flex flex-col items-center justify-center border-t-[0.5px] border-t-[#B0B0B0] lg:py-[60px]"
        style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      >
        <div className="w-[851px] mx-auto text-center lg:w-full lg:px-4">
          <h1 className="text-[54px] text-[#fff] mont-bold leading-[50px] mb-[15px] md:text-[28px] md:leading-[35px]">
            Post-Presale Price Strategy: Your Impact, Your Return
          </h1>
          <p className="text-[16px] text-[#fff] mont-light  md:text-[14px]">
            Following the presale, the price of KYN will increase by 30
            <span className="poppins font-extralight">%</span>, ensuring that
            early investors see a return on their investment as the token enters
            the open market.
          </p>
          <div className="mt-[47px] grid grid-cols-2 gap-[14px] md:grid-cols-1">
            <div className="h-[195px] w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center md:h-[136px]">
              <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
                $0.059 per KYN
              </h1>
              <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
                Whitelisted Presale Price
              </p>
            </div>
            <div className="h-[195px] w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center  md:h-[136px]">
              <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
                $0.065
              </h1>
              <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
                Non Whitelisted Price
              </p>
            </div>
             <div className="h-[195px] w-full bg-gradient-to-tr from-[#FFFFFF] to-[#EDEDED] border-[1px] border-[#B0B0B0] rounded-[30px] flex flex-col items-center justify-center  md:h-[136px]">
              <h1 className="text-[#000000] text-[32px] leading-[34px] mont-bold text-center  md:text-[22.25px]">
                $0.077 per KYN
              </h1>
              <p className="text-[22px] text-[#000000] mont-light md:text-[15.3px]">
                Post-Presale Price
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[120px] pb-[120px] max-w-[1061px] w-[100%]  mx-auto  md:w-full md:px-4 md:pb-[40px] md:mt-10">
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
      </div>
      <Footer active={3} />
    </div>
  );
};
