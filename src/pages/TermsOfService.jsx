import React, { useEffect } from "react";

import { Header } from "../components/Header";

// img

import { Footer } from "../components/Footer";
import rocketmainone from "../assets/image/common/rocket-main-one.png";
import rocketmaintwo from "../assets/image/common/rocket-main-two.png";
import { Helmet } from "react-helmet";
export const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>BP2025 | Terms Of Service </title>
        <meta
          name="description"
          content="Explore the terms and conditions governing your use of our website and services. Review our policies to understand your rights and responsibilities."
        />
      </Helmet>
      {/* header */}
      <Header active={9} />

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
            Terms of
            <br />
            Service
          </h1>
        </div>

        <div className="mt-[120px] pb-[120px] w-[844px] mx-auto flex flex-col gap-[45px] lg:w-full lg:px-4 lg:mt-[60px] md:gap-[30px] lg:pb-[60px]">
          <div>
            <h1 className="text-[42px] md:text-[22px] text-[#000] mont-bold">
              Important Legal Notice
            </h1>
            <p className="text-[#000] mont-light text-[20px] md:text-[17px] mt-[15px]">
             Effective Date: 01 - 06 - 2025

Welcome to OfficialBlackProject2025.com (the “Site”). By accessing or using this Site, you agree to comply with and be bound by these Terms of Use (“Terms”). Please read these Terms carefully. If you do not agree to these Terms, you must not use this Site.
1. Use of the Site
Eligibility:
	•	You must be at least 18 years old to use this Site. By using this Site, you confirm that you meet this eligibility requirement.
Permitted Use:
	•	The Site may only be used for lawful purposes. Any unauthorized use, including but not limited to scraping, data mining, or any other automated methods of accessing the Site, is strictly prohibited.
Prohibited Activities:
When using the Site, you agree not to:
	•	Violate any applicable local, state, national, or international laws or regulations.
	•	Use the Site in a manner that could harm, disable, overburden, or impair the Site, or interfere with another party’s use of the Site.
	•	Upload or transmit viruses, malware, or other malicious code.
	•	Provide false or misleading information during any interaction with the Site.
2. Collection and Use of Information
Information We Collect:
We may collect the following information directly from users who voluntarily provide it via forms or other methods:
	•	Name, email address, and phone number for newsletters, communications, or inquiries.
Tracking Technologies:
	•	We may use cookies, pixels, or similar technologies to analyze user behavior and improve the Site’s functionality.
Age Restrictions:
	•	We do not knowingly collect or process information from users under the age of 18. If you believe that information from someone under 18 has been submitted, please contact us immediately.
3. Intellectual Property
All content on this Site, including but not limited to text, graphics, logos, images, and software, is the property of OfficialBlackProject2025.com or its licensors and is protected by copyright, trademark, and other intellectual property laws. Unauthorized use or reproduction of any content is prohibited.
4. User Content
Submissions:
By submitting any content to the Site (e.g., comments, feedback, or other materials), you grant OfficialBlackProject2025.com a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, reproduce, and distribute your content in any form.
Prohibited Content:
You agree not to submit any content that:
	•	Is unlawful, defamatory, obscene, or invasive of another’s privacy.
	•	Infringes on the intellectual property rights of others.
5. Disclaimers
The Site and its content are provided “as is” and “as available” without any warranties, express or implied. OfficialBlackProject2025.com disclaims all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.
	•	We do not guarantee that the Site will be secure, error-free, or available at all times.
6. Limitation of Liability
To the fullest extent permitted by law, OfficialBlackProject2025.com and its affiliates shall not be liable for any indirect, incidental, consequential, or punitive damages arising from your use of the Site, even if advised of the possibility of such damages.
7. Indemnification
You agree to indemnify, defend, and hold harmless OfficialBlackProject2025.com, its affiliates, and employees from and against any claims, liabilities, damages, losses, and expenses, including attorney’s fees, arising out of your use of the Site or your violation of these Terms.
8. Governing Law and Dispute Resolution
These Terms are governed by the laws of the State of California, without regard to its conflict of laws principles.
	•	Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts located in California.
9. Changes to the Terms
We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on the Site. Your continued use of the Site after changes are posted constitutes your acceptance of the revised Terms.
10. Contact Information
For questions or concerns about these Terms, please contact:
Email: Legal@officialblackproject2025.com

Additional Notes on Data Protection
	•	Data Security: We implement reasonable administrative, technical, and physical safeguards to protect user information.
	•	Data Retention: We retain collected information for a maximum of one year, after which it will be securely deleted.
	•	Data Breaches: In the event of a data breach, we will notify affected users promptly and follow applicable laws and regulations.
Let me know if you need further refinements!

            </p>
          </div>
{/*           <div>
            <h1 className="text-[42px] md:text-[22px] text-[#000] mont-bold">
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
      <Footer active={9} />
    </div>
  );
};
