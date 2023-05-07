import React, { useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import GradientText from "../components/GradientText";
import Layout from "@theme/Layout";
import { TweetCardProps } from "react-tweet-card";
import BrowserOnly from "@docusaurus/BrowserOnly";
const tweets: TweetCardProps[] = [
  {
    author: {
      name: "ilmoi | Tensor 🎒⚡️",
      username: "_ilmoi",
      image:
        "https://pbs.twimg.com/profile_images/1636159954145910786/xecsPFkY_400x400.jpg",
    },
    tweet: `every time I use @JupiterExchange I have to pinch myself

this cannot possibly be onchain, this has got to be a CEX... the UX is INSANE`,
    source: "Twitter Web App",
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
    source: "Twitter Web App",
    time: new Date(2023, 3, 15, 11, 16),
    permalink:
      "https://twitter.com/redacted_noah/status/1647091614026723328?ref_src=twsrc%5Etfw",
  },
  {
    author: {
      name: "LP Finance",
      username: "LPFinance_",
      image:
        "https://pbs.twimg.com/profile_images/1633656696320008193/aN_It9YT_400x400.jpg",
    },
    tweet: `No Solana DeFi without Jupiter. Change my mind.`,
    source: "Twitter Web App",
    time: new Date(2023, 3, 15, 10, 22),
    permalink:
      "https://twitter.com/LPFinance_/status/1647077905380278280?ref_src=twsrc%5Etfw",
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
                  Welcome to the space station — home of curious cats.
                </p>
              </span>
              <p className="mt-5 opacity-75 text-lg font-medium">
                This is where you find crucial information about our products to
                prepare for your next mission, or curl up in a cozy spot to
                learn about our community. Just don't get up to too much
                mischief!
              </p>
            </section>

            <section className="mt-[108px] sm:mt-[145px] text-center sm:text-left">
              <h2 className="text-white text-[28px] sm:text-[36px] leading-[1.22]">
                Take-Off with a{" "}
                <GradientText>Single Liquidity Endpoint</GradientText> 🚀
              </h2>
              <p className="mt-6 text-lg">
                Want the best prices without shopping multiple sites? Our
                flagship product on <a href="https://jup.ag">Jupiter</a> powers
                effective swap experiences by aggregating all tokens and
                liquidity sources on Solana into a single endpoint, allowing
                users and projects to access the value in Solana seamlessly. On
                top of that, we provide a growing number of services to
                supercharge your trades, such as limit orders and price APIs.
              </p>
            </section>
          </div>
          <div className="sm:bg-[url('/img/home/stars.png')] bg-cover">
            <div className="max-w-content mx-auto">
              <section className="mt-[144px] sm:mt-[180px] text-center sm:text-left">
                <h2 className="text-white text-[28px] sm:text-[36px] leading-[1.22]">
                  Best Price, Best UX, Best Tokens
                </h2>
                <p className="mt-6 text-lg">
                  That's what the JUP Promise is about — relentlessly executing
                  and delivering on the basics. But don't take our word for it.
                  Hear it from the community:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mt-9">
                  {tweets.map((tweet, index) => (
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
              <section className="mt-[144px] sm:mt-[180px] text-center sm:text-left flex flex-col md:flex-row items-center gap-[50px]">
                <div className="w-full">
                  <h2 className="text-white text-[28px] sm:text-[36px] leading-[1.22]">
                    <GradientText>Build Your Ride: </GradientText> Fully
                    Composable 🛸
                  </h2>
                  <p className="mt-4 text-lg font-medium">
                    We help you get to space with our range of products.{" "}
                    <a href="https://jup.ag">Our main site</a> has swaps and
                    limit orders ready for you. If you're a developer, check out
                    our APIs and React Hooks, which can help you compose
                    experiences with swap and pricing data, in various
                    integration formats.
                  </p>
                  <Link
                    href="/docs/overview"
                    style={{
                      boxShadow: `0px 1px 2px rgba(16, 24, 40, 0.05)`,
                    }}
                    className="!text-[#19232D] !no-underline group inline-flex items-center bg-[#C7F284] rounded-lg font-semibold text-sm px-[14px] py-2 space-x-2 mt-4"
                  >
                    <span>Go to Docs</span>
                    <svg
                      width="20"
                      height="21"
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
                <img
                  src="/img/home/ufo.png"
                  className="flex-shrink-0 w-[220px] sm:w-[308px]"
                />
              </section>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
