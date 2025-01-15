import React, { useEffect } from "react";

import { Header } from "../components/Header";

// img

import { Footer } from "../components/Footer";
import rocketmainone from "../assets/image/common/rocket-main-one.png";
import rocketmaintwo from "../assets/image/common/rocket-main-two.png";
import { Helmet } from "react-helmet";
export const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>BP2025 | Privacy Policy</title>
        <meta
          name="description"
          content="Learn how we collect, use, and protect your personal information. Review our Privacy Policy to understand your rights and how we safeguard your data."
        />
      </Helmet>
      {/* header */}
      <Header active={8} />

      <section>
        <div className="w-[95%] max-w-[1280px] mx-auto bg-[#070707] h-[360px] rounded-[50px] flex flex-col items-center justify-center relative mb-[90px] lg:overflow-hidden  md:h-[300px] md:mb-[24px]">
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

          <h1 className="text-[90px] z-10 text-[#fff]  mont-bold text-center leading-[90px] md:text-[62px] md:leading-[60px]">
            Privacy Policy
          </h1>
        </div>

        <div className="mt-[120px] pb-[120px] w-[844px] mx-auto flex flex-col gap-[45px] lg:w-full lg:px-4 lg:mt-[60px] md:gap-[30px] lg:pb-[60px]">
          <div>
            <h1 className="text-[42px] md:text-[22px] text-[#000] mont-bold">
              Important Legal Notice
            </h1>
            <p className="text-[#000] mont-light text-[20px] md:text-[17px] mt-[15px]">

 Privacy Policy   
 Effective Date:  January 14, 2025  

BP2025 ("we," "our," or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or interact with our services.  

  1.  Information We Collect   
We may collect the following types of information:  
-  Personal Information : Name, email address, phone number, mailing address, or other details you voluntarily provide.  
-  Non-Personal Information : Browser type, device information, IP address, and website usage data collected through cookies and other tracking technologies.  

  2.  How We Use Your Information   
We use the information we collect for the following purposes:  
- To provide and improve our website and services.  
- To communicate with you about updates, events, and initiatives.  
- To process donations, purchases, or other transactions.  
- To comply with legal obligations or protect our rights.  

  3.  How We Share Your Information   
We do not sell or rent your personal information. We may share your data with:  
- Service providers who help us operate our website or provide services.  
- Authorities if required by law or in response to legal processes.  
- Partners or affiliates as part of our mission, ensuring your information is used responsibly.  

  4.  Cookies and Tracking Technologies   
We use cookies and similar technologies to enhance your experience on our website. You can manage your cookie preferences in your browser settings.  

5.  Your Privacy Choices   
You have the right to:  
- Access, correct, or delete your personal information.  
- Opt out of receiving promotional communications.  
- Disable cookies in your browser settings.  

  6.  Data Security   
We implement industry-standard security measures to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.  

  7.  Third-Party Links   
Our website may contain links to third-party websites. We are not responsible for the privacy practices of these websites and encourage you to review their privacy policies.  

  8.  Children's Privacy   
Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children.  

  9.  Changes to This Privacy Policy   
We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.  

  10.  Contact Us   
If you have any questions or concerns about this Privacy Policy, please contact us at:  

 BP2025   
Email: hello@officialblackproject2025.com
Address: 9255 SUNSET BLVD, STE. 1100
WEST HOLLYWOOD, CA 90069 
            </p>
          </div>
{/*           <div>
            <h1 className="text-[42px] md:text-[22px] text-[#000] mont-bold">
              No Offer or Solicitation
            </h1>
            <p className="text-[#000] mont-light text-[20px] md:text-[17px] mt-[15px]">
              This website does not constitute an offer or solicitation to
              invest in KYN tokens, nor is it a recommendation to purchase or
              sell KYN tokens in any jurisdiction. Participation in the KYN
              presale or any future sales is strictly voluntary and is subject
              to the terms and conditions provided on this website.
            </p>
          </div>
          <div>
            <h1 className="text-[42px] md:text-[22px] text-[#000] mont-bold">
              Risk Warning
            </h1>
            <p className="text-[#000] mont-light text-[20px] md:text-[17px] mt-[15px]">
              Investing in cryptocurrencies and tokens involves substantial
              risk. The value of KYN tokens and other digital assets can
              fluctuate significantly, and you should be prepared for the
              possibility of losing part or all of your investment. By
              participating in the presale or purchasing KYN tokens, you
              acknowledge and accept that you are investing at your own risk.
              <br /> <br />
              KYN and BP2025 do not make any guarantees regarding the future
              performance of the token or any expected returns on investment.
              You should carefully evaluate your financial situation and seek
              independent advice before making any investment decisions.
            </p>
          </div>
          <div>
            <h1 className="text-[42px] md:text-[22px] text-[#000] mont-bold">
              No Financial or Investment Advice
            </h1>
            <p className="text-[#000] mont-light text-[20px] md:text-[17px] mt-[15px]">
              The content on this website, including the KYN tokenomics, presale
              information, and roadmap, is provided for informational purposes
              only and does not constitute financial or investment advice. KYN
              and BP2025 do not provide investment advice and do not recommend
              any particular course of action for individuals regarding
              cryptocurrencies or other financial products.
            </p>
          </div>
          <div>
            <h1 className="text-[42px] md:text-[22px] text-[#000] mont-bold">
              Compliance with Local Laws
            </h1>
            <p className="text-[#000] mont-light text-[20px] md:text-[17px] mt-[15px]">
              The KYN token presale is only available to individuals who are
              legally permitted to participate in token sales in their
              respective jurisdictions. By participating in the presale or
              purchasing KYN tokens, you confirm that you are in full compliance
              with all local laws, regulations, and any other legal requirements
              regarding the purchase, sale, or use of digital assets in your
              jurisdiction.
              <br />
              <br />
              KYN and BP2025 are not responsible for any legal consequences that
              may arise from your participation in the presale if you are in
              breach of local laws or regulations.
            </p>
          </div>
          <div>
            <h1 className="text-[42px] md:text-[22px] text-[#000] mont-bold">
              No Warranties or Representations
            </h1>
            <p className="text-[#000] mont-light text-[20px] md:text-[17px] mt-[15px]">
              KYN and BP2025 make no representations or warranties regarding the
              accuracy, completeness, or reliability of the information provided
              on this website. While we strive to ensure that all information is
              correct and up-to-date, there may be errors or omissions that we
              are not liable for. KYN and BP2025 disclaim all liability for any
              loss or damage that may arise from your reliance on any of the
              information provided on this website, including any errors or
              omissions.
            </p>
          </div>
          <div>
            <h1 className="text-[42px] md:text-[22px] text-[#000] mont-bold">
              Forward-Looking Statements
            </h1>
            <p className="text-[#000] mont-light text-[20px] md:text-[17px] mt-[15px]">
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
            <h1 className="text-[42px] md:text-[22px] text-[#000] mont-bold">
              Limitation of Liability
            </h1>
            <p className="text-[#000] mont-light text-[20px] md:text-[17px] mt-[15px]">
              By participating in the KYN presale or purchasing KYN tokens, you
              agree to hold KYN, BP2025, and their respective affiliates,
              officers, directors, and employees harmless from any and all
              claims, liabilities, or damages arising from your use of this
              website or participation in the presale or any future sales.
              <br />
              <br />
              KYN and BP2025 are not responsible for any technical issues,
              software malfunctions, or other unexpected events that may
              interfere with your ability to participate in the presale or
              access information on this website.
            </p>
          </div>
          <div>
            <h1 className="text-[42px] md:text-[22px] text-[#000] mont-bold">
              Changes to This Disclaimer
            </h1>
            <p className="text-[#000] mont-light text-[20px] md:text-[17px] mt-[15px]">
              KYN and BP2025 reserve the right to update or modify this
              disclaimer at any time. Any changes will be posted on this page,
              and it is your responsibility to review this disclaimer regularly.
              Continued use of this website after any changes signifies your
              acceptance of the updated terms.
            </p>
          </div> */}
        </div>
      </section>

      {/* footer */}
      <Footer active={8} />
    </div>
  );
};
