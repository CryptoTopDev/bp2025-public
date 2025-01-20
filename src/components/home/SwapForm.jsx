import React, { useEffect, useState } from "react";
import sol from "../../assets/image/swap/sol.svg";
import kyn from "../../assets/image/swap/kyn.svg";

import swap from "../../assets/image/swap/swap.svg";
import kynCoin from "../../assets/image/swap/kyn-coin.svg";
import robot from "../../assets/image/swap/robot.svg";
import filter from "../../assets/image/swap/filter.svg";
import swapform from "../../assets/image/swap/swap-form.png";
import usePresale from "../../contract/usePresale";
import { useWallet } from "@solana/wallet-adapter-react";
// import dotenv from 'dotenv';
// dotenv.config();

const hardCap = process.env.REACT_APP_PRESALE_HARDCAP;



export const SwapForm = () => {
  const {
    endTime,
    depositToken,
    claimableAmount,
    buyToken,
    claimToken,
    getSolPrice,
    createPresale,
    withdrawSol,
    PRESALE_AUTHORITY,
    solAmount,
    defaultPrice,
  } = usePresale();
  const { publicKey} = useWallet();

  const [solInputAmount, setSolAmount] = useState();
  const [tokenAmount, setTokenAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const [wallets, setwallet] = useState([
    {
      heading: "SOL",
      img: sol,
    },
    {
      heading: "KYN",
      img: kyn,
    },
  ]);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime * 1000 - now;

      if (distance <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleChangeSolAmount = async (e) => {
    setSolAmount(e.target.value);
    const solPrice = await getSolPrice();
    setTokenAmount((e.target.value * Number(solPrice)) / defaultPrice);
    setTotalPrice((e.target.value * Number(solPrice)));
  };

  return (
    <>
      <style>
        {`
          /* For Chrome, Safari, Edge, and Opera */
          .no-spinner::-webkit-outer-spin-button,
          .no-spinner::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          /* For Firefox */
          .no-spinner[type="number"] {
            -moz-appearance: textfield;
          }
        `}
      </style>
      <div
        className="bg-[#131313] rounded-[30px] relative border-[0.5px] border-[#B0B0B0] bg-cover bg-right  bg-no-repeat box-shadow-swap"
        style={{ background: `url(${swapform})`, backgroundSize: "cover" }}
      >
        <img
          src={robot}
          className="absolute sm:hidden -right-7 -top-8"
          alt=""
        />
        <img
          src={kynCoin}
          className="absolute  sm:hidden -left-14 top-[400px]"
          alt=""
        />
        <div className="px-[42px] pt-[31px] pb-[25px] sm:px-[20px]">
          <h1 className="text-[#FFFFFF] text-[25px] sm:text-[18px] text-center mont-bold">
            Backing Us Means Backing You
          </h1>
          <div className="grid grid-cols-4 gap-[15px] my-[15px] sm:gap-[5px]">
            <div className="bg-[#E9E9E9] flex flex-col items-center justify-center gap-[2px] h-[95px] rounded-[15px]">
              <h1 className="mont-bold text-[29px] text-[#000000]">
                {timeLeft.days}
              </h1>
              <p className="text-[#000000] text-[14px] mont-light">Days</p>
            </div>
            <div className="bg-[#E9E9E9] flex flex-col items-center justify-center gap-[2px] h-[95px] rounded-[15px]">
              <h1 className="mont-bold text-[29px] text-[#000000]">
                {timeLeft.hours}
              </h1>
              <p className="text-[#000000] text-[14px] mont-light">Hours</p>
            </div>
            <div className="bg-[#E9E9E9] flex flex-col items-center justify-center gap-[2px] h-[95px] rounded-[15px]">
              <h1 className="mont-bold text-[29px] text-[#000000]">
                {timeLeft.minutes}
              </h1>
              <p className="text-[#000000] text-[14px] mont-light">Minutes</p>
            </div>
            <div className="bg-[#E9E9E9] flex flex-col items-center justify-center gap-[2px] h-[95px] rounded-[15px]">
              <h1 className="mont-bold text-[29px] text-[#000000]">
                {timeLeft.seconds}
              </h1>
              <p className="text-[#000000] text-[14px] mont-light">Seconds</p>
            </div>
          </div>

          <div className="border-[1px] border-[#EAEAEA] rounded-[20px]">
            <span className="bg-[#EAEAEA] w-full h-[25px]  rounded-full px-[5px] flex items-center">
              <span
                className={`h-[19px] rounded-full bg-gradient-to-tr from-[#171717] to-[#3B3B3B] `}
                style={{
                  width: `${(
                    (Number(solAmount) * 100) /
                    Number(hardCap)
                  ).toFixed(0)}%`,
                }}
              ></span>
            </span>
            <h1 className="text-[17px] mont-bold sm:text-[14px] mt-[7px] mb-[6px] text-[#fff] text-center">
              SOL Raised : {Number(solAmount)} SOL{" "}
              <span className="poppins text-[14px]">/</span> 28637 SOL
            </h1>
          </div>
        </div>

        <div className="bg-[#fff] rounded-[30px] px-[40px] py-[30px] sm:px-[20px]">
          <div className="grid grid-cols-2 gap-[15px]  sm:gap-[5px]">
            <div className="w-full h-[80px] flex items-center justify-center  flex-col rounded-[15px] border-[1px] border-[#000000] gap-[6px] sm:px-[10px]">
              <h1 className="text-[#000000] sm:text-center sm:text-[12px] text-[14px] mont-bold">
                Your Purchased $KYN
              </h1>
              <p className="text-[#000000] text-[25px] leading-[27.9px] mont-bold">
                {Number(claimableAmount)}
              </p>
            </div>
            <div className="w-full h-[80px] flex items-center justify-center  flex-col rounded-[15px] border-[1px] border-[#000000] gap-[6px]  sm:px-[10px]">
              <h1 className="text-[#000000] sm:text-center sm:text-[12px]  text-[14px] mont-bold">
                Your Stakeable $KYN
              </h1>
              <p className="text-[#000000]  text-[25px] leading-[27.9px] mont-bold">
                {Number(claimableAmount)}
              </p>
            </div>
          </div>

          <div className="my-[20px] flex items-center gap-3">
            <span className="flex-1 h-[1px] w-full bg-[#000] block"></span>
            <h1 className="text-[18px] text-[#000000] mont-bold">
              1 KYN = {defaultPrice} USD
            </h1>
            <span className="flex-1 h-[1px] w-full bg-[#000] block"></span>
          </div>

          <div className="flex relative flex-col gap-[5px] mb-[20px]">
            <div className="p-[15px] border-[1px] border-[#000000]  rounded-[15px] bg-gradient-to-tr from-[#98989881] to-[#15151577] flex items-center justify-between">
              <div className="flex items-center justify-center gap-[6px] h-[55px] w-[128px] bg-[#3b3b3b81] border-[1px] border-[#000] rounded-[10px] sm:w-[110px] sm:h-[50px]">
                <img src={sol} alt="" className="sm:w-[25px] w-[35px]" />
                <p className="text-[#FFFFFF] sm:text-[20px] text-[22px] mont-bold">
                  SOL
                </p>
              </div>
              <div className="flex flex-col items-end">
                <input
                  className="text-[#FFFFFF] text-[25px] mont-bold w-[200px] sm:w-[120px] bg-transparent outline-none text-right no-spinner"
                  type="number"
                  value={solInputAmount}
                  onChange={handleChangeSolAmount}
                />
              <p className="text-[#F1F1F1] sm:text-[14px] text-[16px] mont-light">
                ${Number(totalPrice).toFixed(2)}
              </p>
              </div>
            </div>
            <div className="p-[15px] border-[1px] border-[#000000]  rounded-[15px] bg-gradient-to-tr from-[#98989881] to-[#15151577] flex items-center justify-between">
              <div className="flex items-center justify-center gap-[6px] h-[55px] w-[128px] bg-[#3b3b3b81] border-[1px] border-[#000] rounded-[10px] sm:w-[110px] sm:h-[50px]">
                <img src={kyn} alt="" className="sm:w-[25px] w-[35px]" />
                <p className="text-[#FFFFFF] sm:text-[20px] text-[22px] mont-bold">
                  KYN
                </p>
              </div>
              <div className="flex flex-col items-end">
                <h1 className="text-[#FFFFFF]  text-[25px] mont-bold">
                  {tokenAmount.toFixed(2)}
                </h1>
                <p className="text-[#F1F1F1] sm:text-[14px] text-[16px] mont-light">
                ${Number(totalPrice).toFixed(2)}
              </p>
              </div>
            </div>
          </div>

          {publicKey && PRESALE_AUTHORITY.toBase58() === publicKey.toBase58() ? (
            <>
              <button
                className="text-[16px] text-[#FFFFFF] w-full h-[49px] rounded-[10px] bg-gradient-to-tr from-[#171717] to-[#3B3B3B] mont-bold hover:from-[#fff] hover:border-[1px] hover:border-[#000] hover:text-[#000] duration-200"
                onClick={async () => {
                  await createPresale();
                }}
              >
                Create Presale
              </button>
              <button
                className="text-[16px] text-[#000] w-full h-[49px] rounded-[10px] bg-gradient-to-tr from-[#fff] to-[#fff] mont-bold border-[1px] border-[#000] mt-[10px] mb-[25px] hover:from-[#171717] hover:to-[#3B3B3B] hover:text-[#fff] duration-200"
                onClick={async () => {
                  await withdrawSol();
                }}
              >
                Withdraw
              </button>
              <button
                className="text-[16px] text-[#000] w-full h-[49px] rounded-[10px] bg-gradient-to-tr from-[#fff] to-[#fff] mont-bold border-[1px] border-[#000] mt-[10px] mb-[25px] hover:from-[#171717] hover:to-[#3B3B3B] hover:text-[#fff] duration-200"
                onClick={async () => {
                  await depositToken();
                }}
              >
                Desposit Token
              </button>
            </>
          ) : (
            <>
              <button
                className="text-[16px] text-[#FFFFFF] w-full h-[49px] rounded-[10px] bg-gradient-to-tr from-[#171717] to-[#3B3B3B] mont-bold hover:from-[#fff] hover:border-[1px] hover:border-[#000] hover:text-[#000] duration-200"
                onClick={async () => {
                  await buyToken(
                    solInputAmount,
                    Number(tokenAmount.toFixed(2))
                  );
                }}
              >
                Buy Token
              </button>
              <button
                className="text-[16px] text-[#000] w-full h-[49px] rounded-[10px] bg-gradient-to-tr from-[#fff] to-[#fff] mont-bold border-[1px] border-[#000] mt-[10px] mb-[25px] hover:from-[#171717] hover:to-[#3B3B3B] hover:text-[#fff] duration-200"
                onClick={async () => {
                  await claimToken();
                }}
              >
                Claim
              </button>
            </>
          )}

          <div className="flex items-center justify-between">
            <a
              href="https://phantom.com/"
              target="_blank"
              className="text-[16px] sm:text-[12px] mont-bold text-[#000000] cursor-pointer"
            >
              Don’t have a wallet?
            </a>
            <div className="flex items-center gap-2">
              <p className="text-[14px] sm:text-[12px] mont-light text-[#000000]">
                Connect Wallet to Swap
              </p>
              <img src={filter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
