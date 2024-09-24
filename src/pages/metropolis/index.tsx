import React, { useRef } from "react";
import Header from "@site/src/components/Metropolis/components/Header";
import Footer from "@site/src/components/Metropolis/components/Footer";
import { cn } from "@site/src/utils";

import Head from '@docusaurus/Head';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SwapApiIcon from "@site/src/components/Metropolis/components/icons/SwapApiIcon";
import TokenApiIcon from "@site/src/components/Metropolis/components/icons/TokenApiIcon";
import PriceApiIcon from "@site/src/components/Metropolis/components/icons/PriceApiIcon";
import PerpApiIcon from "@site/src/components/Metropolis/components/icons/PerpApiIcon";
import LeftArrowIcon from "@site/src/components/Metropolis/components/icons/LeftArrowIcon";
import RightArrowIcon from "@site/src/components/Metropolis/components/icons/RightArrowIcon";
import { DOCS_URL } from "@site/src/components/Metropolis/constants";
import Layout from "@theme/Layout";

const SELECTED_PARTNERS = [
  {
    label: "Birdeye",
    link: "https://birdeye.so/",
    imgSrc: "/birdeye.png",
  },
  {
    label: "Phantom",
    link: "https://phantom.app/",
    imgSrc: "/phantom.png",
    category: "Wallets",
  },
  {
    label: "Solflare",
    link: "https://solflare.com/",
    imgSrc: "/solflare.png",
  },
  {
    label: "Backpack",
    link: "https://backpack.app/",
    imgSrc: "/backpack.png",
  },
  {
    label: "DEX Screener",
    link: "https://dexscreener.com/",
    imgSrc: "/dexscreener.png",
  },
  {
    label: "BONKBot",
    link: "https://bonkbot.io/",
    imgSrc: "/bonkbot.jpg",
  },
];

const Metropolis = () => {
  const partnerSliderSettings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3.8,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2.8,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2.5,
        },
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.64,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1.68,
        },
      },
      {
        breakpoint: 335,
        settings: {
          slidesToShow: 0.86,
        },
      },
    ],
  };

  const slider = useRef<Slider>(null);

  return (
    <>
      <Head>
        <title>Jupiter Metropolis API</title>
        <meta property="og:title" content="Jupiter Metropolis API" />
        <meta property="og:description" content="Jupiter Metropolis API is the hub for the most powerful set of liquidity APIs in crypto. Unlock seamless access to liquidity and data with Metropolis and find all the API endpoints needed to build a winning business, ranging from Swap API, Token API, Price API, and more." />
        <meta property="og:image" content="https://jupiter-space-station-git-fork-jiawendh-metropolis-api-wowcats.vercel.app/img/metropolis-api/api-jup_2.jpg" />
      </Head>
      <div className={"text-black dark:text-white"}>
        <main className={"bg-[#131C25] relative min-h-screen"}>
          <div className="px-3 py-4 md:py-12 overflow-hidden bg-[#131C25]/80 relative">
            <div
              className="bg-top bg-no-repeat bg-cover absolute top-0 bottom-0 right-0 left-0 z-30 h-full w-full"
              style={{
                backgroundImage: `url(/img/metropolis-api/masthead.png)`,
              }}
            ></div>
            <div className="bg-gradient-to-br from-[#223345] to-[#131C25] absolute top-0 right-0 left-0 bottom-0 z-40 h-full w-full opacity-90"></div>
            <div className="max-w-[900px] mx-auto relative z-50">
              {/* Masthead */}
              <div className="text-center relative flex place-items-center min-h-[30rem] md:min-h-[36rem]">
                <div className="w-full flex flex-col gap-3 md:gap-5 items-center relative z-40">
                  <h1 className="md:max-w-2xl lg:max-w-full text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold m-0">
                    <span className="inline-block">Jupiter</span>{" "}
                    <span className="inline-block">
                      <span className="text-[#c7f284] relative font-bold">
                        Metropolis
                      </span>{" "}
                      API
                    </span>
                  </h1>
                  <p className="mx-auto text-base px-5 md:px-0 sm:text-lg md:text-xl text-white/70">
                    The most powerful set of Liquidity APIs in all of{" "}
                    <span className="font-semibold text-[#c7f284]">crypto</span>.
                  </p>
                  <a
                    href={DOCS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "mt-3 px-5 py-2.5 bg-[#4A5C41]/90 text-[#c7f284] text-center",
                      "rounded-full border border-solid border-transparent",
                      "hover:no-underline hover:text-[#c7f284] hover:border-[#c7f284] transition-all"
                    )}
                  >
                    <span className="text-base md:text-lg font-semibold">
                      Start Building
                    </span>
                  </a>
                </div>
                <Header />
              </div>
            </div>
          </div>

          <div className="px-3">
            <div className="max-w-6xl mx-auto mt-[60px] pt-2 pb-5 md:pb-4">
              <h4 className="text-center text-[#c7f284] text-4xl md:text-6xl md:pt-2.5 pb-3 font-semibold mb-5 sm:mb-8 md:mb-12">
                Our Liquidity APIs
              </h4>

              {/* Products */}
              <div
                className={cn(
                  "w-full mx-auto text-center",
                  "grid gap-y-2",
                  "sm:max-w-md sm:grid-cols-2",
                  "md:max-w-5xl md:grid-cols-4"
                )}
              >
                <div className="flex flex-col items-center group rounded-lg border border-solid border-transparent px-3 py-4 transition-colors">
                  <SwapApiIcon height={64} width={64} color={"#c7f284"} />
                  <h2 className="mt-3 mb-1.5 md:mb-3 text-lg md:text-2xl font-bold">
                    <span className="text-[#c7f284]">Swap API</span>
                  </h2>
                  <p className="text-white m-0 max-w-[30ch] text-sm opacity-50 font-medium">
                    Access all of Solana's liquidity with a single API.
                  </p>
                </div>
                <div className="flex flex-col items-center group rounded-lg border border-solid border-transparent px-3 py-4 transition-colors">
                  <TokenApiIcon height={64} width={64} color={"#c7f284"} />
                  <h2 className="mt-3 mb-1.5 md:mb-3 text-lg md:text-2xl font-bold">
                    <span className="text-[#c7f284]">Token API</span>
                  </h2>
                  <p className="text-white m-0 max-w-[30ch] text-sm font-medium">
                    <span className="opacity-50">
                      Access Jupiter's comprehensive token list, curated by
                      community and partners. More info{" "}
                    </span>
                    <a
                      target="_blank"
                      href="https://www.jupresear.ch/t/ecosystem-master-token-list/19786"
                      className="underline-offset-4 hover:underline hover:text-[#c7f284] text-[#c7f284]"
                    >
                      here
                    </a>
                    <span className="opacity-50">.</span>
                  </p>
                </div>
                <div className="flex flex-col items-center group rounded-lg border border-solid border-transparent px-3 py-4 transition-colors">
                  <PriceApiIcon height={64} width={64} color={"#c7f284"} />
                  <h2 className="mt-3 mb-1.5 md:mb-3 text-lg md:text-2xl font-bold">
                    <span className="text-[#c7f284]">Price API</span>
                  </h2>
                  <p className="text-white m-0 max-w-[30ch] text-sm opacity-50 font-medium">
                    Retrieve real-time aggregate prices of any tradable token on
                    Solana.
                  </p>
                </div>
                <div className="flex flex-col items-center group rounded-lg border border-solid border-transparent px-3 py-4 transition-colors relative">
                  <PerpApiIcon height={64} width={64} color={"#c7f284"} />
                  <span className="absolute top-[38px] left-0 right-0 text-sm font-semibold text-[#c7f284] bg-[#131C25] inline-block p-1">
                    Coming Soon!
                  </span>
                  <h2 className="mt-3 mb-1.5 md:mb-3 text-lg md:text-2xl font-bold">
                    <span className="text-[#c7f284]">Perp API</span>
                  </h2>
                  <p className="text-white m-0 max-w-[30ch] text-sm opacity-50 font-medium">
                    Coming soon!
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div
                className={cn(
                  "flex justify-center items-center flex-col space-y-6 mt-10 px-20",
                  "sm:flex-row sm:space-y-0 sm:space-x-6 sm:px-28",
                  "md:mx-auto md:px-36",
                  "lg:px-40"
                )}
              >
                <a
                  href={DOCS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "min-w-40 md:min-w-[180px] py-3 bg-[#4A5C41]/90",
                    "text-[#c7f284] font-semibold text-center",
                    "rounded-2xl border border-solid border-transparent",
                    "hover:no-underline hover:text-[#c7f284] hover:border-[#c7f284] transition-all"
                  )}
                >
                  <span className="lg:text-lg mr-2">Get Started</span>
                  <span className="self-end text-lg lg:text-xl font-normal -mt-0.5 inline-block">
                    -&gt;
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="px-8 relative overflow-hidden mt-[60px] min-h-[28rem] flex place-items-center">
            <div
              className="bg-bottom bg-no-repeat bg-cover absolute top-0 bottom-0 right-0 left-0 z-30 h-[105%] md:h-[108%] lg:h-[112%] xl:h-[120%] 2xl:h-[122%] w-full"
              style={{
                backgroundImage: `url(/img/metropolis-api/api-img.png)`,
              }}
            ></div>
            <div className="bg-gradient-to-br from-[#223345] to-[#131C25] absolute top-0 right-0 left-0 bottom-0 z-40 h-full w-full opacity-90"></div>
            <div className="w-full max-w-5xl mx-auto text-center py-[60px] mt-3.5 relative z-40">
              <h4 className="max-w-md mx-auto text-white text-3xl md:text-4xl font-semibold mb-7 md:mb-12">
                Built by Jupiter
                <span className="block text-[#c7f284] text-4xl md:text-6xl pt-0.5 md:pt-2.5 pb-3">
                  For All Builders
                </span>
              </h4>
              {/* USP */}
              <div className="max-w-md mx-auto grid text-left gap-y-3 pb-1.5">
                <div className="flex gap-4 items-center mx-auto">
                  <img
                    alt="dp"
                    loading="lazy"
                    width="25"
                    height="25"
                    decoding="async"
                    data-nimg="1"
                    src="img/metropolis-api/solana.png"
                  />
                  <h2 className="text-lg md:text-2xl font-semibold m-0 text-[#c7f284]">
                    Ecosystem-First
                  </h2>
                </div>

                <p className="p-0 m-0 opacity-60 text-white text-base text-center">
                  Empowering builders to build sustainable businesses.
                </p>
              </div>
            </div>
          </div>

          <div className="px-3">
            <div className="max-w-6xl mx-auto mt-[60px]">
              {/* Partners */}
              <p className="text-white text-center text-3xl md:text-4xl font-semibold flex-1 mb-8 pt-3.5">
                Our Partners
                <p className="p-0 pt-2 m-0 opacity-60 text-white text-base">
                  Generating over $100M in Revenue
                </p>
              </p>

              <div className="w-full overflow-hidden relative">
                <div className="shadow-2xl blur-md absolute -top-20 -bottom-20 -left-20 w-1/5 bg-[#131C25] z-30"></div>
                <div className="shadow-2xl blur-md absolute -top-20 -bottom-20 -right-20 w-1/5 bg-[#131C25] z-30"></div>
                <button
                  className="text-white/80 font-semibold bg-transparent border-0 cursor-pointer absolute top-[50%] left-0 lg:left-12 -translate-y-1/2 z-40"
                  onClick={() => slider?.current?.slickPrev()}
                >
                  <LeftArrowIcon width={20} height={20} color={"#c7f284"} />
                </button>
                {/* Social Proof */}
                <Slider ref={slider} {...partnerSliderSettings}>
                  {SELECTED_PARTNERS.map((partner, index) => {
                    return (
                      <a
                        key={index}
                        href={partner.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex flex-col items-center p-4 pb-5 hover:scale-110 hover:no-underline transition-all"
                      >
                        <div className="w-44 lg:w-60 py-3 bg-slate-100/5 rounded-xl">
                          <div className="h-20 flex items-center justify-center">
                            <img
                              alt="dp"
                              loading="lazy"
                              width="80"
                              height="80"
                              decoding="async"
                              data-nimg="1"
                              src={`img/metropolis-api/${partner.imgSrc}`}
                              style={{ color: "transparent" }}
                              className="max-h-16 max-w-full h-auto w-auto rounded-lg"
                            />
                          </div>
                          <p className="text-center text-[#c7f284]/70 font-semibold text-sm pt-1 leading-none">
                            {partner.label}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </Slider>
                <button
                  className="text-white/80 font-semibold text-sm bg-transparent border-0 cursor-pointer absolute top-[50%] right-0 lg:right-12 -translate-y-1/2 z-40"
                  onClick={() => slider?.current?.slickNext()}
                >
                  <RightArrowIcon width={20} height={20} color={"#c7f284"} />
                </button>
              </div>
            </div>
          </div>

          <div className="px-3 pb-20">
            <div className="max-w-7xl mx-auto mt-[60px]">
              {/* Testimonials */}
              <div className="mt-16 pt-1">
                <h4 className="text-white text-center text-3xl md:text-4xl font-semibold mb-7 md:mb-12">
                  Used by Jupiter:
                  <span className="block text-[#c7f284] text-4xl md:text-6xl md:pt-2.5 pb-3">
                    Solana's Liquidity Layer
                  </span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-3 mx-5">
                  <a
                    href="https://twitter.com/jerallaire/status/1724718929447371174"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:col-span-2 lg:col-span-1 flex flex-col space-y-5 bg-slate-400/10 rounded-xl p-7 hover:no-underline hover:bg-slate-300/10"
                  >
                    <div className="flex space-x-3 items-center">
                      <img
                        alt="dp"
                        loading="lazy"
                        width="36"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        src="/img/metropolis-api/credit-avatar-1.png"
                        style={{ color: "transparent" }}
                      />
                      <div className="flex flex-col">
                        <h6 className="text-base text-[#c7f284] font-semibold m-0">
                          Jeremy Allaire (@jerallaire)
                        </h6>
                        <p className="text-xs text-white/30 font-extralight m-0 pt-1">
                          5:20 PM · Nov 15, 2023
                        </p>
                      </div>
                    </div>
                    <p className="text-white/60 text-base">
                      I am super impressed with @JupiterExchangeon@solana. Truly
                      excellent UX and features. An example of maturation in a
                      range of infrastructure -- wallets, usdc on solana liquidity
                      and availability, and product execution.
                    </p>
                  </a>
                  <a
                    href="https://twitter.com/TopoGigio_sol/status/1737844551317147964"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:col-span-2 lg:col-span-1 flex flex-col space-y-5 bg-slate-400/10 rounded-xl p-7 hover:no-underline hover:bg-slate-300/10"
                  >
                    <div className="flex space-x-3 items-center">
                      <img
                        alt="dp"
                        loading="lazy"
                        width="36"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        src="/img/metropolis-api//credit-avatar-2.png"
                        style={{ color: "transparent" }}
                      />
                      <div className="flex flex-col">
                        <h6 className="text-base text-[#c7f284] font-semibold m-0">
                          Topo Gigio (@TopoGigio_sol)
                        </h6>
                        <p className="text-xs text-white/30 font-extralight m-0 pt-1">
                          10:36 PM · Dec 21, 2023
                        </p>
                      </div>
                    </div>
                    <p className="text-white/60 text-base">
                      <span className="pb-2 block">
                        Did you know?: @JupiterExchange has a bridge feature?
                        Where it will compare rates and find you the most
                        efficient path to $SOL Jupiter, for me, is the single most
                        important app on $SOL
                      </span>
                      <span className="py-2 block">
                        It is our Grand Central Station.
                      </span>
                      <span className="py-2 block">ILove at first swap</span>
                      <span className="pt-2 block">IGM</span>
                    </p>
                  </a>
                  <a
                    href="https://twitter.com/Abbasshaikh42/status/1735940030865277244"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto flex flex-col space-y-5 bg-slate-400/10 rounded-xl p-7 hover:no-underline hover:bg-slate-300/10"
                  >
                    <div className="flex space-x-3 items-center">
                      <img
                        alt="dp"
                        loading="lazy"
                        width="36"
                        height="36"
                        decoding="async"
                        data-nimg="1"
                        src="/img/metropolis-api//credit-avatar-3.png"
                        style={{ color: "transparent" }}
                      />
                      <div className="flex flex-col">
                        <h6 className="text-base text-[#c7f284] font-semibold m-0">
                          Abbas (@abbassshaikh42)
                        </h6>
                        <p className="text-xs text-white/30 font-extralight m-0 pt-1">
                          4:28 PM · Dec 16, 2023
                        </p>
                      </div>
                    </div>
                    <p className="text-white/60 text-base">
                      <span className="pb-2 block">
                        Tell me this isn't a gorgeous fucking product by
                        @JupiterExchange
                      </span>
                      <span className="py-2 block">
                        This would previously require me to use a slow, redacted
                        CEX that requires KYC and requires me to handover custody
                        of my assets.
                      </span>
                      <span className="pt-2 block">
                        The performant chain thesis is simple: When your base
                        layer does not require weeks and months of development
                        efforts purely directed towards gas/fee optimizations, you
                        allow your builders to innovate and focus purely on the
                        product & they make the magic happen
                      </span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 bg-[#131C25]">
            <Footer />
          </div>
        </main>
      </div>
    </>
  );
};

export default Metropolis;
