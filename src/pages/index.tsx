import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import GradientText from "../components/GradientText";
import Layout from "@theme/Layout";
import { TweetCardProps } from "react-tweet-card";
import BrowserOnly from "@docusaurus/BrowserOnly";
const tweetsJupPromise: TweetCardProps[] = [
  {
    author: {
      name: "Jupiter 🪐",
      username: "JupiterExchange",
      image:
        "https://pbs.twimg.com/profile_images/1661738815890022410/F8y4vBky_400x400.jpg",
    },
    tweet: `It’s our time
    We are ready
    Users want it
    Pie is baking 
    
    So let us unite as one big happy community and ecosystem to bring the masses over to the decentralized meta.
    
    Together, we can reach goals and bake pies that seemed impossible just a year ago.
    
    And if not us, who?`,
    time: new Date(2023, 11, 17, 6, 2),
    permalink: "https://twitter.com/JupiterExchange/status/1736144803279339602",
  },
  {
    author: {
      name: "meow 🥧",
      username: "weremeow",
      image:
        "https://pbs.twimg.com/profile_images/1714205175815307264/-Uq7WveP_400x400.jpg",
    },
    tweet: `My thesis for Jupiter is actually really really simple - if you have great product, chill vibes and healthy ecosystem - it’s really hard to fail.

    The first is super hard but needs persistence and endless forging (fire)
    The second is all about trying your best and letting the community and market bring you along (water)
    The third one is about recognizing the deeply symbiotic and spiritual relationship between you and the ecosystem (air)
    
    You are the ecosystem and the ecosystem is you. `,
    time: new Date(2023, 11, 23, 7, 2),
    permalink: "https://twitter.com/weremeow/status/1738334323114492122",
  },
  {
    author: {
      name: "meow 🥧",
      username: "weremeow",
      image:
        "https://pbs.twimg.com/profile_images/1714205175815307264/-Uq7WveP_400x400.jpg",
    },
    tweet: `Operating ethos of Jupiter 
    - we fuck up we own up
    - not scale more than we can afford to 
    - always engage, never pacify 
    - always fast, never rushed 
    - all fees made will be onchain or announced 
    - black swan resilient 
    - pragmatically idealistic 
    - correctness is hard, but we always listen
    - ends will never justify the means
    - we ship aggressively but incrementally
    - jup is an incredibly valuable resource 
    - open to collab w all, but necessarily careful
    - vibe is not a byproduct, vibe is the product
    - ecosystem & industry health above any gain
    - advance the meta `,
    time: new Date(2023, 11, 21, 10, 48),
    permalink:
      "https://twitter.com/weremeow/status/1737847520750166074",
  },
];
const tweetsCexReplacement: TweetCardProps[] = [
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
      name: "KEMOSABE",
      username: "KEMOS4BE",
      image:
        "https://pbs.twimg.com/profile_images/1734717290346668032/ZzuUh064_400x400.jpg",
    },
    tweet:
      "Jupiter is an objectively better dApp than uniswap, or any other app on the Ethereum network.",
    time: new Date(2023, 11, 23, 8, 51),
    permalink: "https://twitter.com/KEMOS4BE/status/1738361680978153537",
  },
  {
    author: {
      name: "foobar",
      username: "0xfoobar",
      image:
        "https://pbs.twimg.com/profile_images/1745824328594214912/-P4ZBCue_400x400.jpg",
    },
    tweet: `jupiter dca feature is the first 0-to-1 UX improvement i've seen in a long while. both feasible cost-wise and simple enough interface to find and use`,
    time: new Date(2023, 11, 16, 10, 47),
    permalink: "https://twitter.com/0xfoobar/status/1735854106722336883",
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
                    The <GradientText>Ultimate CEX Replacement</GradientText> 🚀
                    on Solana
                  </h2>
                  <p className="mt-6 text-lg">
                    We're building the ultimate CEX replacement, and we believe
                    Solana is the perfect home for it. Marrying low transaction
                    fees with Jupiter's commitment to product excellence, you'll
                    never have to go back to CEXes again.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mt-9">
                    {tweetsCexReplacement.map((tweet, index) => (
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
              <section className="mt-[108px] sm:mt-[145px] text-center sm:text-left">
                <h2 className="text-white text-[28px] sm:text-[36px] leading-[1.22]">
                  <GradientText>The JUP Summary:</GradientText> Strategy, Thesis, and Ethos
                </h2>
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
          </div>
        </div>
      </Layout>
    </div>
  );
}
