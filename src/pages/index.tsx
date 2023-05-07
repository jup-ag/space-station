import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import GradientText from "../components/GradientText";
import Layout from "@theme/Layout";
import { TweetCardProps } from "react-tweet-card";
import BrowserOnly from "@docusaurus/BrowserOnly";
const tweetsJupPromise: TweetCardProps[] = [
  {
    author: {
      name: "lightspeed mert | helius.xyz",
      username: "0xMert_",
      image:
        "https://pbs.twimg.com/profile_images/1642692955684352000/z-TxRMgD_400x400.jpg",
    },
    tweet: `Tbh, @JupiterExchange is the best aggregator in all of crypto`,
    time: new Date(2023, 3, 30, 2, 27),
    permalink: "https://twitter.com/0xMert_/status/1652379023635365889?s=20",
  },
  {
    author: {
      name: "Rehan",
      username: "@Mabrehan",
      image:
        "https://pbs.twimg.com/profile_images/1648968873289613319/G3AURQQr_400x400.jpg",
    },
    tweet: `Undeniably the best protocol in DeFi. Simple idea yet executed to perfection`,
    time: new Date(2023, 3, 15, 16, 1),
    permalink:
      "https://twitter.com/Mabrehan/status/1647148241505632259?s=20",
  },
  {
    author: {
      name: "LP Finance",
      username: "LPFinance_",
      image:
        "https://pbs.twimg.com/profile_images/1633656696320008193/aN_It9YT_400x400.jpg",
    },
    tweet: `No Solana DeFi without Jupiter. Change my mind.`,
    time: new Date(2023, 3, 15, 10, 22),
    permalink:
      "https://twitter.com/LPFinance_/status/1647077905380278280?ref_src=twsrc%5Etfw",
  },
];
const tweetsCexReplacement: TweetCardProps[] = [
  {
    author: {
      name: "ilmoi | Tensor 🎒⚡️",
      username: "_ilmoi",
      image:
        "https://pbs.twimg.com/profile_images/1636159954145910786/xecsPFkY_400x400.jpg",
    },
    tweet: `every time I use @JupiterExchange I have to pinch myself

this cannot possibly be onchain, this has got to be a CEX... the UX is INSANE`,
    time: new Date(2023, 3, 15, 10, 20),
    permalink: "https://twitter.com/_ilmoi/status/1647077304638529536",
  },
  {
    author: {
      name: "Noah 🔥💃 🎈",
      username: "redacted_noah",
      image:
        "https://pbs.twimg.com/profile_images/1649750976964722695/umjPqOpi_400x400.jpg",
    },
    tweet: `Fr. I prefer Jupiter to trading on CEX. And not even because of ideology it’s literally a better UX`,
    time: new Date(2023, 3, 15, 11, 16),
    permalink:
      "https://twitter.com/redacted_noah/status/1647091614026723328?ref_src=twsrc%5Etfw",
  },
  {
    author: {
      name: "◎☀️🎒",
      username: "SolCS95",
      image:
        "https://pbs.twimg.com/profile_images/1649660167083167746/dLrwvu6Q_200x200.jpg",
    },
    tweet: `@aeyakovenko @JupiterExchange is incredible. Miles above anything else`,
    time: new Date(2023, 3, 17, 6, 50),
    permalink:
      "https://twitter.com/SolCS95/status/1647734143525228544?s=20",
  },
];
export default function Home(): JSX.Element {
  return (
    <div
      style={{
        background:
          "radial-gradient(50.42% 35.64% at 102.74% 101.94%, rgba(25, 197, 228, 0.38) 0%, rgba(25, 197, 228, 0) 100%), radial-gradient(131.41% 57.41% at 52.36% 23.89%, #060B09 0%, #050B08 51.81%, #0E2433 100%), #111726",
      }}
      className="home relative isolate  overflow-hidden pb-[390px] sm:pb-[250px]"
    >
      <div className="absolute hidden sm:flex z-[-1] w-full top-0 right-0">
        <img src="/img/home/header-bg.png" alt="" className="w-full" />
        <div className="absolute w-[16.6%] top-[12%] left-[69%]">
          <img src="/img/home/cat.png" alt="" className="cat" />
        </div>
      </div>

      <div className="absolute flex z-[-1] w-full overflow-hidden bottom-0 right-0">
        <img
          src="/img/home/footer-bg.png"
          alt=""
          className="h-[301px] w-full object-cover object-right"
        />
      </div>

      <Layout>
        <div className="relative isolate min-h-screen overflow-hidden text-[#E8F9FF]/60 px-[44px]">
          <div className="absolute flex sm:hidden z-[-1] w-full top-0 right-0">
            <img
              src="/img/home/header-bg-mobile.png"
              alt=""
              className="w-full"
            />
            <div className=" absolute w-[40%] bottom-[60%] right-1/2 translate-x-1/2 translate-y-1/2">
              <img src="/img/home/cat.png" alt="" className="cat" />
            </div>
          </div>
          <div className="mt-[276px] sm:mt-[226px] max-w-content ml-auto mr-auto">
            <section className="mr-auto text-center sm:text-left text-white">
              <span className="max-w-[574px]">
                <h1 className="font-bold text-[40px] sm:text-[80px] leading-[1.1125]">
                  Jupiter <br /> Space Station
                </h1>
                <p className="mt-5 opacity-75 text-lg font-medium">
                  Welcome to the space station — home for cats curious about Jupiter.
                </p>
              </span>
              <p className="mt-5 opacity-75 text-lg font-medium">

              </p>
            </section>
            <section className="mt-[84px] sm:mt-[120px] text-center sm:text-left flex flex-col md:flex-row items-center gap-[50px]">
                <div className="w-full">
                  <h2 className="text-white text-[28px] sm:text-[36px] leading-[1.22]">
                    <GradientText>All about </GradientText> Jupiter 🛸
                  </h2>
                  <p className="mt-4 text-lg font-medium">
                    You can find user guides, developer docs and learn more about our community on this site. 
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px]">

                  <Link
                    href="/guides"
                    style={{
                      boxShadow: `0px 1px 2px rgba(16, 24, 40, 0.05)`,
                    }}
                    className="!text-[#19232D] !no-underline group inline-flex items-center bg-[#C7F284] rounded-lg font-semibold text-sm px-[14px] py-2 space-x-2 mt-4"
                  >
                    <span>User Guides</span>
                    <svg
                      width="20"
                      height="41"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 duration-300"
                    >
                      <path
                        d="M4.16602 10.5911H15.8327M15.8327 10.5911L9.99935 4.75781M15.8327 10.5911L9.99935 16.4245"
                        stroke="#19232D"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/docs/overview"
                    style={{
                      boxShadow: `0px 1px 2px rgba(16, 24, 40, 0.05)`,
                    }}
                    className="!text-[#19232D] !no-underline group inline-flex items-center bg-[#C7F284] rounded-lg font-semibold text-sm px-[14px] py-2 space-x-2 mt-4"
                  >
                    <span>Developer Docs</span>
                    <svg
                      width="20"
                      height="41"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 duration-300"
                    >
                      <path
                        d="M4.16602 10.5911H15.8327M15.8327 10.5911L9.99935 4.75781M15.8327 10.5911L9.99935 16.4245"
                        stroke="#19232D"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/guides"
                    style={{
                      boxShadow: `0px 1px 2px rgba(16, 24, 40, 0.05)`,
                    }}
                    className="!text-[#19232D] !no-underline group inline-flex items-center bg-[#C7F284] rounded-lg font-semibold text-sm px-[14px] py-2 space-x-2 mt-4"
                  >
                    <span>Community</span>
                    <svg
                      width="20"
                      height="41"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 duration-300"
                    >
                      <path
                        d="M4.16602 10.5911H15.8327M15.8327 10.5911L9.99935 4.75781M15.8327 10.5911L9.99935 16.4245"
                        stroke="#19232D"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
                </div>
                <img
                  src="/img/home/ufo.png"
                  className="flex-shrink-0 w-[200px] sm:w-[288px]"
                />
              </section>
              <div className="sm:bg-[url('/img/home/stars.png')] bg-cover">
            <div className="max-w-content mx-auto">
              <section className="mt-[108px] sm:mt-[145px] text-center sm:text-left">
                <h2 className="text-white text-[28px] sm:text-[36px] leading-[1.22]">
                  The JUP Promise: Best Price, Best UX, Best Tokens
                </h2>
                <p className="mt-6 text-lg">
                  The JUP Promise is about relentlessly executing
                  and delivering on the basics. But don't take our word for it.
                  Hear it from the community:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mt-9">
                  {tweetsJupPromise.map((tweet, index) => (
                    <div key={index}>
                      <BrowserOnly>
                        {() => {
                          const TweetCard = require("react-tweet-card").default;
                          return <TweetCard {...tweet} theme="dim" />;
                        }}
                      </BrowserOnly>
                    </div>
                  ))}
                </div>
              </section>
            </div>
            <section className="mt-[108px] sm:mt-[145px] text-center sm:text-left">
              <h2 className="text-white text-[28px] sm:text-[36px] leading-[1.22]">
                Building the{" "}
                <GradientText>Ultimate CEX Replacement</GradientText> 🚀
              </h2>
              <p className="mt-6 text-lg">
                  We're building the ultimate CEX replacement, and we believe Solana is the perfect home for it. Marrying low transaction fees with Jupiter's relentless focus on product, you'll never have to go back to CEXes again.
                </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mt-9">
                  {tweetsCexReplacement.map((tweet, index) => (
                    <div key={index}>
                      <BrowserOnly>
                        {() => {
                          const TweetCard = require("react-tweet-card").default;
                          return <TweetCard {...tweet} theme="dim" />;
                        }}
                      </BrowserOnly>
                    </div>
                  ))}
                </div>
            </section>
          </div>
     
          </div>
        </div>
      </Layout>
    </div>
  );
}
