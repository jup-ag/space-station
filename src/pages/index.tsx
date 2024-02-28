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
  {
    author: {
      name: "Abbas",
      username: "Abbasshaikh42",
      image:
        "https://pbs.twimg.com/profile_images/1726165383982489600/pEafd7Kv_400x400.jpg",
    },
    tweet: `Tell me this isn't a gorgeous fucking product by @JupiterExchange
    
    This would previously require me to use a slow, redacted CEX that requires KYC and requires me to handover custody of my assets.
    
    The performant chain thesis is simple:
    When your base layer does not require weeks and months of development efforts purely directed towards gas/fee optimizations, you allow your builders to innovate and focus purely on the product & they make the magic happen`,
    time: new Date(2023, 11, 16, 16, 28),
    permalink: "https://twitter.com/Abbasshaikh42/status/1735940030865277244",
  }
];

const tweetsFeatures: TweetCardProps[] = [
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
];

const tweetsCommunity: TweetCardProps[] = [
  {
    author: {
      name: "Kash Dhanda",
      username: "kashdhanda",
      image:
        "https://pbs.twimg.com/profile_images/1712057099046338560/S2B7ouDm_normal.jpg",
    },
    tweet: `Jupiter is a world-class product built by a group of killers.  

    The JUP DAO will be a world-class community launching killer products via the LFG Launchpad. 
    
    I'm just lucky to be a (small) part of this going forward 🥳`,
    time: new Date(2024, 2, 14, 20, 2),
    permalink: "https://x.com/kashdhanda/status/1757737079264477358?s=20",
  },
  {
    author: {
      name: "Durden ∞",
      username: "@durdenwannabe",
      image:
        "	https://pbs.twimg.com/profile_images/1501827205957320708/nSrI5I6S_normal.jpg",
    },
    tweet: `Jupiter already has a vibrant community 🪐

    I'm excited to help turn that community into a well-functioning DAO that will move not just Jupiter but the whole Solana ecosystem forward 🫡
    
    LFJ!`,
    time: new Date(2024, 2, 13, 0, 23),
    permalink: "https://twitter.com/durdenwannabe/status/1757080612865970214",
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
                  We deliver the finest onchain experience, marrying Solana's low transaction fees with
                  Jupiter's advanced routing and commitment to product excellence.
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
                    With <GradientText>Features That People Love</GradientText> ❤️
                  </h2>
                  <p className="mt-6 text-lg">
                   Jupiter's products covers swaps, DCA, limit orders, perpetuals, and a launchpad, with different options for users and developers. We're also constantly adding new features to serve you even better.
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
                  Put Together By An <GradientText>Awesome Community</GradientText> 🙌
                </h2>
                <p className="mt-6 text-lg">
                   With catdets, working groups, and the DAO growing everyday, we have a strong decentralized community of users and builders working together to bring you the very best.
                  </p>
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
