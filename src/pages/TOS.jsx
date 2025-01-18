import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// images
import landing from "../assets/image/white-paper/landing.png";
import arrow from "../assets/image/white-paper/arrow.svg";

export const TOS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[100vh] bg-[#070707]">
      {/* meta data */}
      <Helmet>
        <title>BP2025 - Privacy</title>
        <meta name="description" content="Demi description" />
      </Helmet>
      {/* header components */}
      <Header active={9} />

      <div
        className="h-[394px]  bg-mob flex flex-col items-center justify-center mb-[138px] lg:mb-[60px]"
        style={{ background: `url(${landing})`, backgroundSize: "cover" }}
      >
        <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[100px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[16px] md:text-[10px] md:w-[150px] md:h-[29px] pt-[4px]">
          TOS
        </span>
        <h1 className="text-[72px] md:text-[42px] text-[#000000] text-center mont-bold leading-[90px] md:leading-[40px] md:w-[232px]">
          Terms of Service
        </h1>
        <button className="mt-[16px]">
          <img src={arrow} alt="" />
        </button>
      </div>

      <div className="mt-[120px] pb-[120px] w-[844px] mx-auto flex flex-col gap-[45px] lg:w-full lg:px-4 lg:mt-[60px] md:gap-[30px] lg:pb-[60px]">
        <div>
          <h1 className="text-[42px] md:text-[22px] text-[#fff] mont-bold">
            Important Legal Notice
          </h1>
          <p className="text-[#fff] mont-light text-[16px] md:text-[14px] mt-[15px]">
            The information presented on this website, including all related
            materials and communications, is intended for informational purposes
            only. KYN and its associated entities, including Black Project 2025
            (BP2025), are not offering or selling financial products or
            securities in any jurisdiction. The content here does not constitute
            financial, legal, tax, or investment advice, and you should not
            treat any of the information on this website as such.
          </p>
        </div>
        <div>
          <h1 className="text-[42px] md:text-[22px] text-[#fff] mont-bold">
            No Offer or Solicitation
          </h1>
          <p className="text-[#fff] mont-light text-[16px] md:text-[14px] mt-[15px]">
            This website does not constitute an offer or solicitation to invest
            in KYN tokens, nor is it a recommendation to purchase or sell KYN
            tokens in any jurisdiction. Participation in the KYN presale or any
            future sales is strictly voluntary and is subject to the terms and
            conditions provided on this website.
          </p>
        </div>
        <div>
          <h1 className="text-[42px] md:text-[22px] text-[#fff] mont-bold">
            Risk Warning
          </h1>
          <p className="text-[#fff] mont-light text-[16px] md:text-[14px] mt-[15px]">
            Investing in cryptocurrencies and tokens involves substantial risk.
            The value of KYN tokens and other digital assets can fluctuate
            significantly, and you should be prepared for the possibility of
            losing part or all of your investment. By participating in the
            presale or purchasing KYN tokens, you acknowledge and accept that
            you are investing at your own risk.
            <br /> <br />
            KYN and BP2025 do not make any guarantees regarding the future
            performance of the token or any expected returns on investment. You
            should carefully evaluate your financial situation and seek
            independent advice before making any investment decisions.
          </p>
        </div>
        <div>
          <h1 className="text-[42px] md:text-[22px] text-[#fff] mont-bold">
            No Financial or Investment Advice
          </h1>
          <p className="text-[#fff] mont-light text-[16px] md:text-[14px] mt-[15px]">
            The content on this website, including the KYN tokenomics, presale
            information, and roadmap, is provided for informational purposes
            only and does not constitute financial or investment advice. KYN and
            BP2025 do not provide investment advice and do not recommend any
            particular course of action for individuals regarding
            cryptocurrencies or other financial products.
          </p>
        </div>
        <div>
          <h1 className="text-[42px] md:text-[22px] text-[#fff] mont-bold">
            Compliance with Local Laws
          </h1>
          <p className="text-[#fff] mont-light text-[16px] md:text-[14px] mt-[15px]">
            The KYN token presale is only available to individuals who are
            legally permitted to participate in token sales in their respective
            jurisdictions. By participating in the presale or purchasing KYN
            tokens, you confirm that you are in full compliance with all local
            laws, regulations, and any other legal requirements regarding the
            purchase, sale, or use of digital assets in your jurisdiction.
            <br />
            <br />
            KYN and BP2025 are not responsible for any legal consequences that
            may arise from your participation in the presale if you are in
            breach of local laws or regulations.
          </p>
        </div>
        <div>
          <h1 className="text-[42px] md:text-[22px] text-[#fff] mont-bold">
            No Warranties or Representations
          </h1>
          <p className="text-[#fff] mont-light text-[16px] md:text-[14px] mt-[15px]">
            KYN and BP2025 make no representations or warranties regarding the
            accuracy, completeness, or reliability of the information provided
            on this website. While we strive to ensure that all information is
            correct and up-to-date, there may be errors or omissions that we are
            not liable for. KYN and BP2025 disclaim all liability for any loss
            or damage that may arise from your reliance on any of the
            information provided on this website, including any errors or
            omissions.
          </p>
        </div>
        <div>
          <h1 className="text-[42px] md:text-[22px] text-[#fff] mont-bold">
            Forward-Looking Statements
          </h1>
          <p className="text-[#fff] mont-light text-[16px] md:text-[14px] mt-[15px]">
            This website may contain forward-looking statements related to the
            KYN token, BP2025's goals, and the potential benefits of investing
            in KYN. These statements are based on current beliefs and
            expectations, but they are subject to change and may not reflect
            actual performance or results. You should not rely on
            forward-looking statements when making investment decisions.
            <br />
            <br />
            KYN and BP2025 do not guarantee the success of the project or the
            future performance of the token. Any projections or estimates
            contained on this website are speculative and should be viewed as
            such.
          </p>
        </div>
        <div>
          <h1 className="text-[42px] md:text-[22px] text-[#fff] mont-bold">
            Limitation of Liability
          </h1>
          <p className="text-[#fff] mont-light text-[16px] md:text-[14px] mt-[15px]">
            By participating in the KYN presale or purchasing KYN tokens, you
            agree to hold KYN, BP2025, and their respective affiliates,
            officers, directors, and employees harmless from any and all claims,
            liabilities, or damages arising from your use of this website or
            participation in the presale or any future sales.
            <br />
            <br />
            KYN and BP2025 are not responsible for any technical issues,
            software malfunctions, or other unexpected events that may interfere
            with your ability to participate in the presale or access
            information on this website.
          </p>
        </div>
        <div>
          <h1 className="text-[42px] md:text-[22px] text-[#fff] mont-bold">
            Changes to This Disclaimer
          </h1>
          <p className="text-[#fff] mont-light text-[16px] md:text-[14px] mt-[15px]">
            KYN and BP2025 reserve the right to update or modify this disclaimer
            at any time. Any changes will be posted on this page, and it is your
            responsibility to review this disclaimer regularly. Continued use of
            this website after any changes signifies your acceptance of the
            updated terms.
          </p>
        </div>
      </div>

      <div className="bg-[#fff]">
        <div className="mt-[120px] py-[71px] w-[844px] mx-auto lg:w-full lg:px-4 lg:py-[67px] md:mt-0">
          <h1 className="text-[#000] text-[54px] md:text-[28px] mont-bold text-center">
            Contact Information
          </h1>
          <p className="text-[#000] md:text-[14px] text-[16px] mont-light text-center mb-[30px]">
            If you have any questions or concerns regarding this disclaimer,
            please contact us at:
          </p>
          <form className="flex flex-col gap-[15px]">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-[50px] rounded-[7px] border-[1px] border-[#B0B0B0] bg-[#939393] text-[#2E2E2E]  mont-bold text-[16px] md:text-[14px] px-[25px] font-bold placeholder:text-[#2E2E2E] outline-none md:h-[36px] md:px-[10px]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-[50px] rounded-[7px] border-[1px] border-[#B0B0B0] bg-[#939393] text-[#2E2E2E]  mont-bold text-[16px] md:text-[14px] px-[25px] font-bold placeholder:text-[#2E2E2E] outline-none md:h-[36px] md:px-[10px]"
            />
            <textarea
              className="w-full h-[152px] rounded-[7px] border-[1px] border-[#B0B0B0] bg-[#939393] text-[#2E2E2E] text-[16px] md:text-[14px] py-[14px] px-[25px] font-bold placeholder:text-[#2E2E2E] outline-none mont-bold md:px-[10px]"
              placeholder="Message"
            ></textarea>
            <button className="w-full h-[50px] md:text-[14px] md:h-[36px]  rounded-full bg-[#000000] text-[#fff] mont-bold ">
              Send a Message
            </button>
          </form>
        </div>
      </div>

      <Footer active={10} />
    </div>
  );
};
