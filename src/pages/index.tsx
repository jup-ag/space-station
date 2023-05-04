import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import GradientText from '../components/GradientText';
import SolanaDiagram from '../components/SolanaDiagram';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import ComposabilityDiagram from '../components/ComposabilityDiagram';
import Logo from '../components/Logo';
import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    document.getElementsByClassName('twitter-tweet')[0].appendChild(script);
  }, []);

  return (
    <div
      style={{
        background:
          'radial-gradient(50.42% 35.64% at 102.74% 101.94%, rgba(25, 197, 228, 0.38) 0%, rgba(25, 197, 228, 0) 100%), radial-gradient(131.41% 57.41% at 52.36% 23.89%, #060B09 0%, #050B08 51.81%, #0E2433 100%), #111726',
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
          className="h-[301px] object-cover object-right"
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
            <section className="max-w-[574px] mr-auto text-center sm:text-left text-white">
              <h1 className="font-bold text-[40px] sm:text-[80px] leading-[1.1125]">
                Jupiter <br /> Space Station
              </h1>
              <p className="mt-5 opacity-75 text-lg font-medium">
                Welcome. Join our space cats to explore all of Jupiter and
                beyond.
              </p>
            </section>

            <section className="mt-[138px] sm:mt-[175px] text-center sm:text-left">
              <h2 className="text-white text-[28px] sm:text-[36px] leading-[1.22]">
                Take-Off with a{' '}
                <GradientText>Single Liquidity Endpoint</GradientText> 🚀
              </h2>
              <p className="mt-6 text-lg">
                Jupiter simplifies the exponentially growing number of tokens
                and liquidity sources on Solana into a single endpoint, allowing
                users and projects to fully access the value in Solana
                seamlessly.
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
                  Jupiter simplifies the exponentially growing number of tokens
                  and liquidity sources on Solana into a single endpoint,
                  allowing users and projects to fully access the value in
                  Solana seamlessly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[14px] mt-9">
                  <div>
                    <blockquote
                      className="twitter-tweet"
                      data-lang="en"
                      data-theme="dark"
                    >
                      <p lang="en" dir="ltr">
                        every time I use
                        <a href="https://twitter.com/JupiterExchange?ref_src=twsrc%5Etfw">
                          @JupiterExchange
                        </a>
                        I have to pinch myself. this cannot possibly be onchain,
                        this has got to be a CEX... the UX is INSANE
                      </p>
                      &mdash; ilmoi | Tensor 🎒⚡️ (@_ilmoi)
                      <a href="https://twitter.com/_ilmoi/status/1647077304638529536?ref_src=twsrc%5Etfw">
                        April 15, 2023
                      </a>
                    </blockquote>
                  </div>
                  <div>
                    <blockquote
                      className="twitter-tweet"
                      data-conversation="none"
                      data-theme="dark"
                    >
                      <p lang="en" dir="ltr">
                        Fr. I prefer Jupiter to trading on CEX. And not even
                        because of ideology it’s literally a better UX
                      </p>
                      &mdash; Noah 🔥💃 🎈 (@redacted_noah)
                      <a href="https://twitter.com/redacted_noah/status/1647091614026723328?ref_src=twsrc%5Etfw">
                        April 15, 2023
                      </a>
                    </blockquote>
                  </div>
                  <div>
                    <blockquote
                      className="twitter-tweet"
                      data-conversation="none"
                      data-lang="en"
                      data-theme="dark"
                    >
                      <p lang="en" dir="ltr">
                        No Solana DeFi without Jupiter. Change my mind.
                      </p>
                      &mdash; LP Finance (@LPFinance_)
                      <a href="https://twitter.com/LPFinance_/status/1647077905380278280?ref_src=twsrc%5Etfw">
                        April 15, 2023
                      </a>
                    </blockquote>
                  </div>
                </div>
              </section>
              <section className="mt-[144px] sm:mt-[180px] text-center sm:text-left flex flex-col md:flex-row items-center gap-[50px]">
                <div className="w-full">
                  <h2 className="text-white text-[28px] sm:text-[36px] leading-[1.22]">
                    <GradientText>Build Your Ride</GradientText> Fully
                    Composable 🛸
                  </h2>
                  <p className="mt-4 text-lg font-medium">
                    We help you get to space with our range of products : Swaps,
                    Limit Orders and APIs like the Price API and Token List API.
                    There are also a myriad of ways to build your ride with
                    integrations for web, mobile, bots and smart contracts.
                  </p>
                  <Link
                    href="/docs/overview"
                    style={{
                      boxShadow: `0px 1px 2px rgba(16, 24, 40, 0.05)`,
                    }}
                    className="!text-[#19232D] !no-underline inline-flex items-center bg-[#C7F284] rounded-lg font-semibold text-sm px-[14px] py-2 space-x-2 mt-4"
                  >
                    <span>Take a look</span>
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
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
