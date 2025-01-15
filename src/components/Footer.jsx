import React from "react";
import { Link } from "react-router";
// images
import foooterLogo from "../assets/image/logo-footer.svg";
import facebook from "../assets/image/icons/facebook.svg";
import instagram from "../assets/image/icons/instagram.svg";
import linkeding from "../assets/image/icons/linkedin.svg";
import arrow from "../assets/image/arrow.svg";

export const Footer = ({ active }) => {
  return (
    <div>
      <div className="border-t-[1px] border-t-[#CACACA] ">
        <div className="w-[1142px] xl:w-full mx-auto py-[58px] flex items-center justify-between xl:flex-col xl:px-[25px] lg:py-[15px] sm:!px-[10px]">
          <Link to="/">
            <img
              src={foooterLogo}
              alt=""
              className="xl:w-[200px] w-[200px] lg:!w-[84px] "
            />
          </Link>
          <div className="flex flex-col items-start xl:items-center xl:mt-[40px] lg:!mt-[20px] xl:w-full">
            <h1 className="text-[20px] mont-bold text-[#000000] md:text-[8px]">
              Navigation
            </h1>
            <nav className="gap-[30px] md:gap-[12px] flex items-center mt-8 xl:w-full xl:justify-between xl:mt-2 sm:!gap-[4px]">
              <Link
                to="/"
                className={`text-[#000] lg:text-[8px] mont-light text-[16px] ${
                  active === 1 && "mont-bold"
                }`}
              >
                Home
              </Link>
              <div className="relative h-[52px] xl:h-[unset]   flex items-center dropdown-header">
                <Link
                  to="/about-us"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className={`text-[#000]  mont-light lg:text-[8px]  flex items-center gap-[10px] text-[16px] ${
                    active === 2 && "mont-bold"
                  }`}
                >
                  About Us
                  <img src={arrow} alt="" className="lg:w-[6px]" />
                </Link>
                <ul className="absolute hidden w-[270px] h-[230px] -left-2 bg-[#161616] top-[40px]  rounded-[20px] z-30  flex-col items-center justify-center xl:-left-10 xl:w-[250px] xl:h-[240px]">
                  <li className="w-[210px] mx-auto text-[24px] mont-bold text-[#FFFFFF] mb-5">
                    About Us
                  </li>
                  <li className="w-[210px] mx-auto">
                    <Link
                      to="/about-us"
                      className={`text-[#fff] mont-light text-[18px]  pb-[10px] border-b-[1px] border-b-[#2C2C2C] block`}
                    >
                      Mission
                    </Link>
                  </li>
{/*                 <li className="w-[210px] mx-auto">
                    <Link
                      to="/roadmap"
                      className={`text-[#fff] mont-light text-[18px]  py-[10px] block border-b-[1px] border-b-[#2C2C2C]`}
                    // > */}
{/*                       Roadmap */}
{/*                     </Link> */}
{/*                   </li> */} */}
                  <li className="w-[210px] mx-auto">
                    <Link
                      to="/funding-roadmap"
                      className={`text-[#fff] mont-light text-[18px]  py-[10px] block border-b-[1px] border-b-[#2C2C2C]`}
                    >
                      Funding Roadmap
                    </Link>
                  </li>
                </ul>
              </div>
{/*               <div className="relative h-[52px] xl:h-[unset]  flex items-center dropdown-header">
                <Link
                  to="/donate"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className={`text-[#000] mont-light lg:text-[8px]   flex items-center gap-[10px] text-[16px] ${
                    active === 3 && "mont-bold"
                  }`}
                >
                  Get Involved
                  <img src={arrow} alt="" className="lg:w-[6px]" />
                </Link>
                <ul className="absolute hidden w-[270px] h-[130px] -left-2 bg-[#161616] top-[40px] z-30  rounded-[20px]  flex-col items-center justify-center  xl:-left-5 xl:w-[250px] xl:h-[150px]">
                  <li className="w-[210px] mx-auto text-[24px] mont-bold text-[#FFFFFF] mb-5">
                    Get Involved
                  </li>
                  <li className="w-[210px] mx-auto">
                    <Link
                      to="/donate"
                      className={`text-[#fff] mont-light text-[18px]  pb-[10px] border-b-[1px] border-b-[#2C2C2C] block`}
                    >
                      Donate
                    </Link>
                  </li>
                </ul>
              </div> */}

              <Link
                to="/careers"
                className={`text-[#000]  lg:text-[8px] mont-light text-[16px] ${
                  active === 4 && "mont-bold"
                }`}
              >
                Careers
              </Link>

              <Link
                to="/partnership"
                className={`text-[#000]  lg:text-[8px] mont-light text-[16px] ${
                  active === 5 && "mont-bold"
                }`}
              >
                Partnerships
              </Link>
{/*               <Link
                to="/"
                className={`text-[#000]  lg:text-[8px] mont-light text-[16px] ${
                  active === 6 && "mont-bold"
                }`}
              >
                Kyncoin
              </Link> */}
{/*               <Link
                to="/contact"
                className={`text-[#000]  lg:text-[8px] mont-light text-[16px] ${
                  active === 8 && "mont-bold"
                }`}
              >
                FAQ
              </Link> */}
              <Link
                to="/contact"
                className={`text-[#000]  lg:text-[8px] mont-light text-[16px] ${
                  active === 7 && "mont-bold"
                }`}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] border-t-[#CACACA] border-b-[1px] border-b-[#CACACA] flex justify-center items-center py-10 lg:py-[10px]">
        <a
          href="/"
          className="text-[20px]  lg:text-[8px]  mont-bold text-[#000]"
        >
          Back to Top
        </a>
      </div>
      <div className="w-[1142px] xl:w-full mx-auto py-[32px] flex items-center justify-between xl:px-[25px] md:flex-col lg:py-[10px]">
        <p className="text-[#000] mont-light text-[18px] lg:text-[8px]">
          Copyright 2025 @ BP2025 Group, Inc. All rights reserved.
        </p>

        <nav className="flex items-center gap-4 md:mt-2 md:gap-2">
          <Link
            to="/privacy-policy"
            className={`text-[#000] lg:text-[8px] mont-light text-[14px] ${
              active === 8 && "mont-bold"
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className={`text-[#000] lg:text-[8px] mont-light text-[14px] ${
              active === 9 && "mont-bold"
            }`}
          >
            Terms of service
          </Link>
          <a
            href="https://www.facebook.com/profile.php?id=61568240350734"
            className="w-[35px] h-[35px] flex items-center justify-center rounded-full duration-300  md:h-[22px] md:w-[22px]"
          >
            <img src={facebook} alt="" className="md:w-[50%]" />
          </a>
          <a
            href="https://www.instagram.com/officialblackproject2025/"
            className="w-[35px] h-[35px] flex items-center justify-center rounded-full] duration-300  md:h-[22px] md:w-[22px]"
          >
            <img src={instagram} alt="" className="md:w-[50%]" />
          </a>
      
          <a
            href="https://www.linkedin.com/company/official-black-project-2025"
            className="w-[35px] h-[35px] flex items-center justify-center rounded-full] md:h-[22px] md:w-[22px]"
          >
            <img src={linkeding} alt="" className="md:w-[50%]" />
          </a>
        </nav>
      </div>
    </div>
  );
};
