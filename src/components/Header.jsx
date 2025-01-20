import React, { useState } from "react";
import { Link } from "react-router";

// img
import logo from "../assets/image/logo.svg";
import discord from "../assets/image/icons/discord.svg";
import bird from "../assets/image/icons/bird.svg";
import m from "../assets/image/icons/m.svg";
import wave from "../assets/image/icons/wave.svg";
import bars from "../assets/image/icons/bars.svg";
import PHWallet from "./wallet";
export const Header = ({ active }) => {
  const [activeNav, setactiveNav] = useState(false);
  return (
    <section className="px-[40px] xl:px-[25px] md:!px-[15px] border-b-[1px] border-b-[#363636] relative z-[30]">
      <div className="max-w-[1478px] w-full h-[122px] md:h-[70px] flex items-center mx-auto xl:justify-between">
        <Link to="/">
          <img src={logo} alt="" className="md:w-[88px]" />
        </Link>

        <nav
          className={`gap-[22px] flex xl:justify-start justify-center items-center ml-[42px] flex-1 xl:fixed xl:flex-col xl:h-[100vh] xl:w-[200px] xl:-left-[100%] duration-500 xl:top-0 xl:bg-[#000] xl:ml-0 xl:pt-[50px] ${
            activeNav === true && "xl:!left-0"
          }`}
        >
          <Link
            to="/"
            className={`text-[16px] text-[#fff] mont-light ${
              active === 1 && "mont-bold"
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-[16px] text-[#fff] mont-light ${
              active === 2 && "mont-bold"
            }`}
          >
            About
          </Link>
          <Link
            to="/tokenomics"
            className={`text-[16px] text-[#fff] mont-light ${
              active === 3 && "mont-bold"
            }`}
          >
            Tokenomics
          </Link>
          <Link
            to="/presale"
            className={`text-[16px] text-[#fff] mont-light ${
              active === 4 && "mont-bold"
            }`}
          >
            Presale
          </Link>
          <Link
            to="/road-map"
            className={`text-[16px] text-[#fff] mont-light ${
              active === 5 && "mont-bold"
            }`}
          >
            Roadmap
          </Link>
          <Link
            to="/fwb"
            className={`text-[16px] text-[#fff] mont-light ${
              active === 6 && "mont-bold"
            }`}
          >
            FWB
          </Link>
          <Link
            to="/white-paper"
            className={`text-[16px] text-[#fff] mont-light ${
              active === 7 && "mont-bold"
            }`}
          >
            Whitepaper
          </Link>
          <Link
            to="/howtobuy"
            className={`text-[16px] text-[#fff] mont-light ${
              active === 8 && "mont-bold"
            }`}
          >
            How to buy
          </Link>
          <Link
            to="/faq"
            className={`text-[16px] text-[#fff] mont-light ${
              active === 9 && "mont-bold"
            }`}
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-[12px] md:gap-[5px]">
          <a
            href="/"
            className="w-[35px] h-[35px] flex items-center justify-center border-[1px] border-[#454545] rounded-full duration-300 translate-all url-header-hover md:w-[22px] md:h-[22px]"
          >
            <img src={discord} alt="" className="w-[21px] md:w-[13px]" />
          </a>
          <a
            href="/"
            className="w-[35px] h-[35px] flex items-center justify-center border-[1px] border-[#454545] rounded-full duration-300 translate-all url-header-hover md:w-[22px] md:h-[22px]"
          >
            <img src={bird} alt="" className="w-[21px] md:w-[13px]" />
          </a>
          <a
            href="/"
            className="w-[35px] h-[35px] flex items-center justify-center border-[1px] border-[#454545] rounded-full duration-300 translate-all url-header-hover md:w-[22px] md:h-[22px]"
          >
            <img src={m} alt="" className="w-[21px] md:w-[13px]" />
          </a>
          <a
            href="/"
            className="w-[35px] h-[35px] flex items-center justify-center border-[1px] border-[#454545] rounded-full duration-300 translate-all url-header-hover md:w-[22px] md:h-[22px]"
          >
            <img src={wave} alt="" className="w-[21px] md:w-[13px]" />
          </a>
          <PHWallet />
          {/* <button className="px-[25px] py-[15px] bg-[#fff] text-[#000] mont-bold rounded-full hover:bg-[transparent] hover:text-[#fff] border-[1px] border-[#fff]  transition-all duration-300 md:text-[10px] md:w-[112px] md:h-[32px] md:py-0 md:px-0">
            Connect Wallet
          </button> */}
          <img
            src={bars}
            alt=""
            onClick={() => setactiveNav(!activeNav)}
            className="hidden xl:block"
          />
        </div>
      </div>
    </section>
  );
};