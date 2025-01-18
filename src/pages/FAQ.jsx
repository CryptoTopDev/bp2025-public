import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// images
import landing from "../assets/image/white-paper/landing.png";
import arrow from "../assets/image/white-paper/arrow.svg";
import faqCoin from "../assets/image/faq/faq-coin.png";
// components
import { Link } from "react-router";
import { FaqBox } from "../components/faq/FaqBox";

export const Faq = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-[100vh] bg-[#070707]">
      {/* meta data */}
      <Helmet>
        <title>$KYN | FAQ</title>
        <meta name="description" content="Get answers to all your questions about KYN Token. From presale details to tokenomics, discover everything you need to know in one place." />
      </Helmet>

      {/* header components */}
      <Header active={8} />

      <div
        className="h-[394px] bg-mob flex flex-col items-center justify-center mb-[138px] md:mb-[60px]"
        style={{ background: `url(${landing})`, backgroundSize: "cover" }}
      >
        <span className="text-[14px] mont-bold text-[#363636] h-[38px] w-[89px] flex items-center justify-center border-[1px] border-[#363636] rounded-full mb-[16px] pt-[4px]">
          FAQ
        </span>
        <h1 className="text-[72px] md:text-[42px] text-[#000000] text-center mont-bold leading-[90px] md:leading-[40px] md:w-[234px]">
          Frequently Asked <br />
          Questions
        </h1>
        <button className="mt-[16px]">
          <img src={arrow} alt="" />
        </button>
      </div>

      <div className="mt-[120px] pb-[120px] w-[1064px] mx-auto flex justify-between md:w-full md:px-4 md:pb-[60px] md:mt-0">
        <div className="gap-[24px] md:w-full grid grid-cols-2 lg:grid-cols-1">
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
          <FaqBox
            heading="What is a presale?"
            paragraph="A presale is like a special event where people can buy something before it’s available to the public. For KYN, the presale happens between January 20, 2025, and June 19, 2025. People who buy during the presale get a better deal (lower price) than those who buy later. It’s a way to support the project early on."
          />
          <FaqBox
            heading="What is the soft cap and hard cap?"
            paragraph="Soft Cap: This is the minimum amount of money needed to make the project happen. If we don’t reach this amount, we’ll give everyone their money back. For KYN, the soft cap is $50,000.
Hard Cap: This is the maximum amount of money we’re aiming to raise. Once we reach this amount, the presale will stop, and no more tokens will be sold. For KYN, the hard cap is $6.67 million."
          />
          <FaqBox
            heading="What is a liquidity pool?"
            paragraph="A liquidity pool is a special place where money is kept to make sure people can easily buy and sell KYN tokens. Imagine it like a piggy bank where people put in their money to make sure there’s enough available for everyone when they want to buy or sell tokens. Without it, it would be hard to get the tokens you want."
          />
          <FaqBox
            heading="How does a liquidity pool work?"
            paragraph="The liquidity pool works like a big reserve of money. People put their money into it, and when someone wants to buy KYN tokens, they take money from this reserve. It helps keep things moving smoothly, so you can always buy or sell your tokens without waiting too long.
"
          />
          <FaqBox
            heading="Why is KYN safe from scams?"
            paragraph="There are a few reasons why KYN is safe:
Limited Tokens: There’s only a certain number of KYN tokens that can ever exist, so no one can make more and cheat the system.
Locked Liquidity: The money in the liquidity pool is locked away for a period of time, so no one can take it out and hurt the project.
Refund Guarantee: If the presale doesn’t meet the minimum amount we need (soft cap), everyone will get their money back, so you won’t lose anything."
          />
          <FaqBox
            heading="What is a staggered token release?"
            paragraph="A staggered token release means that the tokens people buy during the presale won’t all be given out at once. Instead, they’ll be given to investors in small pieces over time. For example:
If you buy 100,000 KYN tokens, you’ll get 10,000 KYN tokens on June 19, 2025.
After that, you’ll get another 10,000 tokens every 60 days until you have all your tokens.
This helps make sure that no one can sell all their tokens too quickly and hurt the price of KYN."
          />
          <FaqBox
            heading="How do I store KYN tokens?"
            paragraph="You can store your KYN tokens in a cryptocurrency wallet. This is like a secure online account where your KYN tokens are kept safe. You can use wallets like MetaMask or Phantom to store and manage your tokens."
          />
          <FaqBox
            heading="What can I do with my KYN tokens?"
            paragraph="Once you have KYN tokens, you can:
Hold them and hope their value goes up over time, which means you could make a profit in the future.
Use them in the BP2025 community to support projects that help the Black community grow.
Sell them on exchanges once KYN is available for trading."
          />
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
              Together, <br /> we’ll redefine <br /> community empowerment.
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

      <Footer />
    </div>
  );
};
