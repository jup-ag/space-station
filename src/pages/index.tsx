import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import GradientText from "../components/GradientText";
import Layout from "@theme/Layout";
import { TweetCardProps } from "react-tweet-card";
import BrowserOnly from "@docusaurus/BrowserOnly";
const tweetsBestExchange: TweetCardProps[] = [
  {
    author: {
      name: "Jeremy Allaire",
      username: "jerallaire",
      image:
        "https://pbs.twimg.com/profile_images/1501707897641779208/cpB2Dk9__400x400.jpg",
    },
    tweet: `I am super impressed with @JupiterExchange on @solana.
    Truly excellent UX and features.  An example of maturation in a range of infrastructure -- wallets, usdc on solana liquidity and availability, and product execution.`,
    time: new Date(2023, 10, 15, 17, 20),
    permalink: "https://twitter.com/jerallaire/status/1724718929447371174",
  },
  {
    author: {
      name: "Joe Kreate",
      username: "joekreate",
      image:
        "https://pbs.twimg.com/profile_images/1648119841189150722/-j2p8UeW_400x400.jpg",
    },
    tweet:
      `Think we take how amazing @JupiterExchange is for granted. Can't tell you how nice it is to have on-chain limit orders and DCA. 
      Don't even think I realized that's what kept me from doing more on-chain trading until it existed.`,
    time: new Date(2023, 11, 16, 10, 27),
    permalink: "https://twitter.com/joekreate/status/1735848992679076161",
  },
  {
    author: {
      name: "R89",
      username: "R89Capital",
      image:
        "https://pbs.twimg.com/profile_images/1754565037325529091/TFhU1IkV_400x400.jpg",
    },
    tweet: `Swap aggregator, limit orders, DCA feature, bridge, perpetual futures, launchpad, LST stablecoin, and DAO.

    The best overall product in crypto and I will continue to support it hard.
    
    Some of you can simply go fuck yourselves.`,
    time: new Date(2024, 1, 2, 16, 20),
    permalink: "https://twitter.com/R89Capital/status/1753151336097661000",
  },
  {
    author: {
      name: "KEMOSABE",
      username: "KEMOS4BE",
      image:
        "https://pbs.twimg.com/profile_images/1761276351506489344/WdxOCFwA_400x400.jpg",
    },
    tweet:
      "Jupiter is an objectively better dApp than uniswap, or any other app on the Ethereum network.",
    time: new Date(2023, 11, 23, 8, 51),
    permalink: "https://twitter.com/KEMOS4BE/status/1738361680978153537",
  },
  {
    author: {
      name: "Shoal Research",
      username: "Shoalresearch",
      image:
        "https://pbs.twimg.com/profile_images/1750343257060425728/V1rctkOC_400x400.jpg",
    },
    tweet: `@jupiterexchange, Solana's premier DEX aggregator, has its hand in over 60% of all trades on Solana.
    
    Today, users can swap, place limit orders, DCA, and trade perps. With the launch of $JUP approaching, we unpack our long-term investment thesis for Jupiter.`,
    time: new Date(2023, 12, 19, 12, 52),
    permalink: "https://twitter.com/Shoalresearch/status/1748025686240199125",
  },
  {
    author: {
      name: "Topo Gigio",
      username: "TopoGigio_sol",
      image:
        "https://pbs.twimg.com/profile_images/1743441039522775040/zsyVpoqT_400x400.jpg",
    },
    tweet: `Did you know?: @JupiterExchange has a bridge feature? Where it will compare rates and find you the most efficient path to $SOL

    Jupiter, for me, is the single most important app on $SOL
    
    It is our Grand Central Station. 
    
    Love at first swap 
    GM`,
    time: new Date(2023, 11, 21, 22, 36),
    permalink:
      "https://twitter.com/TopoGigio_sol/status/1737844551317147964",
  },
];

const tweetsFeatures: TweetCardProps[] = [
  {
    author: {
      name: "0xt1mfv",
      username: "pt1mfv_",
      image:
        "https://pbs.twimg.com/profile_images/1695546024083808256/D5CKF28x_400x400.jpg",
    },
    tweet: `2023 was an active year for @JupiterExchange

    - Metis – new routing algorithm 
    - Instant staked SOL > SOL swaps
    - DCA feature, Limit Orders, Perps
    - Lots of new developer tooling including Jupiter Terminal + 2 new API upgrades 
    - Bridge comparator (allows users to compare and select the most efficient bridge for bridging to Solana)
    
    that's the kind of success you follow up with a token launch. ggwp @weremeow`,
    time: new Date(2023, 12, 9, 16, 14),
    permalink:
      "https://twitter.com/pt1mfv_/status/1744452630770774396",
  },
  {
    author: {
      name: "Ron 🧊",
      username: "Ronmaris_",
      image:
        "https://pbs.twimg.com/profile_images/1599642352381050880/JcRSlsMN_400x400.jpg",
    },
    tweet: `I know there are so many other tokenless protocols out there, but why wouldn't I just use Jupiter? 🤷‍♂️

    Seamless performance, has got some of the best features like DCA & limit buys etc 
    
    Farming other DEXs should be top priority, but I just find myself always using @JupiterExchange`,
    time: new Date(2023, 11, 9, 9, 57),
    permalink: "https://twitter.com/Ronmaris_/status/1733304911041794337",
  },
  {
    author: {
      name: "Quirky Qwerty",
      username: "QuirkyQwerty_",
      image:
        "https://pbs.twimg.com/profile_images/1514622423387226118/NreOjFMM_400x400.jpg",
    },
    tweet: `Jupiter's DCA function changes the shitcoining game.

    Makes sol shitters charts look vastly different from every other chain. No spooky wicks down, no TP-enticing wicks up. 
    
    Slow and smooth.
    
    One direction only.`,
    time: new Date(2023, 11, 22, 13, 24),
    permalink: "https://twitter.com/QuirkyQwerty_/status/1738067850366275968",
  },
];

const tweetsCommunity: TweetCardProps[] = [
  {
    author: {
      name: "Kulture ⚡",
      username: "KultureElectric",
      image:
        "https://pbs.twimg.com/profile_images/1682323094365511680/dhpZVpna_400x400.jpg",
    },
    tweet: `I have so much admiration for @weremeow and the @JupiterExchange team 🙏
    
    Truly Solana aligned and leading the way in transparent and honest communication.
    
    Not to mention that LFG Launchpad actually worked super well and will kick-start a new era of fair token launches`,
    time: new Date(2024, 1, 1, 14, 5),
    permalink: "https://twitter.com/KultureElectric/status/1752936182785130819",
  },
  {
    author: {
      name: "Jakey",
      username: "SolJakey",
      image:
        "https://pbs.twimg.com/profile_images/1754751934999973888/zGiiFqtH_400x400.jpg",
    },
    tweet: `Thank you @JupiterExchange for setting the bar to a new standard.
    
    The build up, the stress testing, the COMMUNICATION, and the execution was top tier.
    
    Notes will now be taken from other protocols, platforms and products wanting to do a token.
    
    SOLANA is grateful for you!`,
    time: new Date(2024, 1, 1, 9, 24),
    permalink: "https://twitter.com/SolJakey/status/1752865440098099278",
  },
  {
    author: {
      name: "Noc 😐",
      username: "xNocsu",
      image:
        "https://pbs.twimg.com/profile_images/1761473057489559552/Nf5Of8___400x400.jpg",
    },
    tweet: `After having spent a year following and responding to all the JM love from the community this evening, I just wanted to say thank you to @JupiterExchange
     team as a whole for all the love today. Appreciate each and every one of you. ♥️`,
    time: new Date(2024, 1, 22, 14, 44),
    permalink: "https://twitter.com/xNocsu/status/1760374899992899687",
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
                  Welcome to the space station — home for cats curious about
                  Jupiter.
                </p>
                <div className="md:space-x-4">
                  <Link
                    href="/guides"
                    style={{
                      boxShadow: `0px 1px 2px rgba(16, 24, 40, 0.05)`,
                    }}
                    className="!text-[#19232D] hover:text-black hover:bg-white transition duration-250 ease-linear !no-underline group inline-flex items-center bg-[#C7F284] rounded-lg font-semibold text-base px-8 py-4 space-x-2 mt-4 uppercase"
                  >
                    <span>User Guides</span>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 duration-300 h-[20px]"
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
                    href="/docs"
                    style={{
                      boxShadow: `0px 1px 2px rgba(16, 24, 40, 0.05)`,
                    }}
                    className="text-white border-white hover:text-black hover:bg-white transition duration-250 ease-linear !no-underline group inline-flex items-center bg-transparent rounded-lg font-semibold text-base px-[14px] py-[15px] space-x-2 mt-4 uppercase border-[1px] border-solid"
                  >
                    <span>Developer Docs</span>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:translate-x-1 duration-300 stroke-white group-hover:stroke-black"
                    >
                      <path
                        d="M4.16602 10.5911H15.8327M15.8327 10.5911L9.99935 4.75781M15.8327 10.5911L9.99935 16.4245"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </span>
            </section>
            <div className="sm:bg-[url('/img/home/stars.png')] bg-cover">
              <div className="max-w-content mx-auto">
                <section className="mt-[108px] sm:mt-[145px] text-center sm:text-left">
                  <h2 className="text-white text-[28px] sm:text-[36px] leading-[1.22]">
                    The <GradientText>Best Onchain Exchange</GradientText> 🚀
                  </h2>
                  <p className="mt-6 text-lg">
                    We are crafting the ultimate on-chain exchange experience, 
                    and we find Solana to be the ideal platform for it. 
                    Leveraging Solana's low transaction fees, 
                    combined with Jupiter's advanced routing and unwavering commitment to product excellence, 
                    we aim to deliver the finest on-chain crypto experience.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mt-9">
                    {tweetsBestExchange.map((tweet, index) => (
                      <div key={index}>
                        <BrowserOnly>
                          {() => {
                            const TweetCard =
                              require("react-tweet-card").default;
                            return <TweetCard {...tweet} theme="dim" />;
                          }}
                        </BrowserOnly>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="max-w-content mx-auto">
                <section className="mt-[108px] sm:mt-[145px] text-center sm:text-left">
                  <h2 className="text-white text-[28px] sm:text-[36px] leading-[1.22]">
                    With <GradientText>Features that people love</GradientText> ❤️
                  </h2>
                  <p className="mt-6 text-lg">
                    In our endeavor to provide the best on-chain exchange experience, 
                    we've crafted a platform with features that users truly appreciate. 
                    These elements collectively prioritize user satisfaction and aim to continually improve the overall trading experience. 
                    Join us in embracing a platform tailored to the preferences and satisfaction of our users.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mt-9">
                    {tweetsFeatures.map((tweet, index) => (
                      <div key={index}>
                        <BrowserOnly>
                          {() => {
                            const TweetCard =
                              require("react-tweet-card").default;
                            return <TweetCard {...tweet} theme="dim" />;
                          }}
                        </BrowserOnly>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <div className="max-w-content mx-auto">
              <section className="mt-[108px] sm:mt-[145px] text-center sm:text-left">
                <h2 className="text-white text-[28px] sm:text-[36px] leading-[1.22]">
                  <GradientText>Awesome Community</GradientText> in the building 🙌
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mt-9">
                  {tweetsCommunity.map((tweet, index) => (
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
        </div>
      </Layout>
    </div>
  );
}
