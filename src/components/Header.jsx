import React, { useState } from "react";
import logo from "../assets/image/logo.svg";
import arrow from "../assets/image/arrow.svg";
import bar from "../assets/image/bar.svg";
import { Link } from "react-router";
export const Header = ({ active }) => {
  const [activeNav, setactiveNav] = useState(false);
  return (
    <header className="bg-[#fff]">
      <div className="w-[95%] max-w-[1280px] mx-auto flex items-center h-[122px] md:h-[83px]">
        <Link to="/">
          <img src={logo} alt="" className="md:w-[88px]" />
        </Link>

        <div className="xl:block xl:flex-1  hidden"></div>
        <nav
          className={`flex items-center ml-[94px]  gap-[25px] 1xl:gap-[15px] flex-1 1xl:ml-[40px]  xl:fixed xl:flex-col xl:h-[100vh] xl:w-[200px] xl:-left-[100%] duration-500 xl:top-0 xl:bg-[#000] xl:!ml-0 xl:pt-[30px] xl:z-50 ${
            activeNav === true && "xl:!left-0"
          }`}
        >
          <Link
            to="/"
            className={`text-[#000] xl:text-[#fff] mont-light text-[16px] ${
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
              className={`text-[#000] xl:text-[#fff]  mont-light leadin flex items-center gap-[10px] text-[16px] ${
                active === 2 && "mont-bold"
              }`}
            >
              About Us
              <img src={arrow} alt="" className="xl:invert xl:brightness-0" />
            </Link>
            <ul className="absolute hidden w-[308px] h-[260px] -left-2 bg-[#161616] top-[40px]  rounded-[20px] z-30  flex-col items-center justify-center xl:-left-10 xl:w-[250px] xl:h-[240px]">
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
{/*               <li className="w-[210px] mx-auto">
                <Link
                  to="/roadmap"
                  className={`text-[#fff] mont-light text-[18px]  py-[10px] block border-b-[1px] border-b-[#2C2C2C]`}
                >
                  Roadmap
                </Link>
              </li> */}
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

{/*           <div className="relative h-[52px] xl:h-[unset]  flex items-center dropdown-header">
            <Link
              to="/donate"
              onClick={(e) => {
                e.preventDefault();
              }}
              className={`text-[#000] mont-light xl:text-[#fff]  leadin flex items-center gap-[10px] text-[16px] ${
                active === 3 && "mont-bold"
              }`}
            >
              Get Involved
              <img src={arrow} alt="" className="xl:invert xl:brightness-0" />
            </Link>
            <ul className="absolute hidden w-[308px] h-[150px] -left-2 bg-[#161616] top-[40px] z-30  rounded-[20px]  flex-col items-center justify-center  xl:-left-5 xl:w-[250px] xl:h-[150px]">
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
            className={`text-[#000] xl:text-[#fff]  mont-light text-[16px] ${
              active === 4 && "mont-bold"
            }`}
          >
            Careers
          </Link>

          <Link
            to="/partnership"
            className={`text-[#000] xl:text-[#fff]  mont-light text-[16px] ${
              active === 5 && "mont-bold"
            }`}
          >
            Partnerships
          </Link>
          <Link
            to="/"
            className={`text-[#000] hidden xl:text-[#fff]  mont-light text-[16px] ${
              active === 6 && "mont-bold"
            }`}
          >
            Kyncoin
          </Link>
{/*           <Link
            to="/faq"
            className={`text-[#000] xl:text-[#fff]  mont-light text-[16px] ${
              active === 8 && "mont-bold"
            }`}
          >
            FAQ
          </Link> */}
          <Link
            to="/contact"
            className={`text-[#000] xl:text-[#fff]  mont-light text-[16px] ${
              active === 7 && "mont-bold"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <div className="flex items-center gap-10 md:gap-7">
          <Link
            to="/community"
            className="w-[216px] h-[50px] mont-bold text-[16px] text-[#fff] flex items-center justify-center bg-[#000] rounded-full md:w-[197px] md:h-[38px]"
          >
            Join the Community
          </Link>
          <img
            src={bar}
            alt=""
            onClick={() => setactiveNav(!activeNav)}
            className="hidden xl:block"
          />
        </div>
      </div>
    </header>
  );
};
