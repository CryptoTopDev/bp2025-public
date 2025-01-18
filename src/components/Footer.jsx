import React from "react";
import { Link } from "react-router";
// images
import foooterLogo from "../assets/image/icons/footer-logo.svg";
import facebook from "../assets/image/icons/facebook.svg";
import instagram from "../assets/image/icons/instagram.svg";
import x from "../assets/image/icons/x.svg";
import linkeding from "../assets/image/icons/linkedin.svg";

export const Footer = ({ active }) => {
  return (
    <div>
      <div className="border-t-[1px] border-t-[#363636] border-b-[1px] border-b-[#363636]">
        <div className="w-[1142px] xl:w-full mx-auto py-[58px] flex items-center justify-between xl:flex-col xl:px-[25px] md:py-[15px]">
          <Link to="/">
            <img
              src={foooterLogo}
              alt=""
              className="xl:w-[200px] md:!w-[84px] "
            />
          </Link>
          <div className="flex flex-col items-start xl:items-center xl:mt-[40px] md:!mt-[20px] xl:w-full">
            <h1 className="text-[20px] mont-bold text-[#FFFFFF] md:text-[8px]">
              Navigation
            </h1>
            <nav className="gap-[40px] md:gap-[12px] flex items-center mt-8 xl:w-full xl:justify-between xl:mt-2">
              <Link
                to="/"
                className={`text-[16px] md:text-[8px] text-[#fff] mont-light ${
                  active === 1 && "mont-bold"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-[16px] md:text-[8px] text-[#fff] mont-light ${
                  active === 2 && "mont-bold"
                }`}
              >
                About
              </Link>
              <Link
                to="/tokenomics"
                className={`text-[16px] md:text-[8px] text-[#fff] mont-light ${
                  active === 3 && "mont-bold"
                }`}
              >
                Tokenomics
              </Link>
              <Link
                to="/presale"
                className={`text-[16px] md:text-[8px] text-[#fff] mont-light ${
                  active === 4 && "mont-bold"
                }`}
              >
                Presale
              </Link>
              <Link
                to="/road-map"
                className={`text-[16px] md:text-[8px] text-[#fff] mont-light ${
                  active === 5 && "mont-bold"
                }`}
              >
                Roadmap
              </Link>
              <Link
                to="/fwb"
                className={`text-[16px] md:text-[8px] text-[#fff] mont-light ${
                  active === 6 && "mont-bold"
                }`}
              >
                FWB
              </Link>
              <Link
                to="/white-paper"
                className={`text-[16px] md:text-[8px] text-[#fff] mont-light ${
                  active === 7 && "mont-bold"
                }`}
              >
                Whitepaper
              </Link>
              <Link
                to="/faq"
                className={`text-[16px] md:text-[8px] text-[#fff] mont-light ${
                  active === 8 && "mont-bold"
                }`}
              >
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] border-t-[#363636] border-b-[1px] border-b-[#363636] flex justify-center items-center py-10 md:py-[10px]">
        <a
          href="/"
          className="text-[20px] md:text-[8px]  mont-bold text-[#fff]"
        >
          Back to Top
        </a>
      </div>
      <div className="w-[1142px] xl:w-full mx-auto py-[32px] flex items-center justify-between xl:px-[25px] md:flex-col md:py-[10px]">
        <p className="text-[#fff] mont-light text-[18px] md:text-[8px]">
          Copyright @ BP2025 Group, Inc.
        </p>

        <nav className="flex items-center nav-hover-footer gap-4 md:mt-2 md:gap-2">
          <Link
            to="/privacy"
            className={`text-[16px] text-[#fff] md:text-[8px] mont-light ${
              active === 9 && "mont-bold"
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/tos"
            className={`text-[16px] text-[#fff] md:text-[8px] mont-light ${
              active === 10 && "mont-bold"
            }`}
          >
            Terms of Service
          </Link>
          <Link
            to="/disclaimer"
            className={`text-[16px] text-[#fff] md:text-[8px] mont-light ${
              active === 11 && "mont-bold"
            }`}
          >
            Disclaimer
          </Link>
          <a
            href="/"
            className="w-[35px] h-[35px] flex items-center justify-center rounded-full border-[1px] border-[#fff] duration-300 hover:bg-[#fff] md:h-[22px] md:w-[22px]"
          >
            <img src={facebook} alt="" className="md:w-[50%]" />
          </a>
          <a
            href="/"
            className="w-[35px] h-[35px] flex items-center justify-center rounded-full border-[1px] border-[#fff] duration-300 hover:bg-[#fff] md:h-[22px] md:w-[22px]"
          >
            <img src={instagram} alt="" className="md:w-[50%]" />
          </a>
          <a
            href="/"
            className="w-[35px] h-[35px] flex items-center justify-center rounded-full border-[1px] border-[#fff] duration-300 hover:bg-[#fff] md:h-[22px] md:w-[22px]"
          >
            <img src={x} alt="" className="md:w-[50%]" />
          </a>
          <a
            href="/"
            className="w-[35px] h-[35px] flex items-center justify-center rounded-full border-[1px] border-[#fff] duration-300 hover:bg-[#fff] md:h-[22px] md:w-[22px]"
          >
            <img src={linkeding} alt="" className="md:w-[50%]" />
          </a>
        </nav>
      </div>
    </div>
  );
};
