import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useRef } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrowIcon from "./components/LeftArrowIcon";
import RightArrowIcon from "./components/RightArrowIcon";
import SwapApiIcon from "./components/SwapApiIcon";
import PerpApiIcon from "./components/PerpApiIcon";
import PriceApiIcon from "./components/PriceApiIcon";
import TokenApiIcon from "./components/TokenApiIcon";
import ExperiencedIcon from "./components/ExperiencedIcon";
import BuildersIcon from "./components/BuildersIcon";
import PPPIcon from "./components/PPPIcon";
import DeveloperIcon from "./components/DeveloperIcon";

const SELECTED_PARTNERS = [
  {
    label: "Birdeye",
    link: "https://birdeye.so/",
    imgSrc: "/birdeye.png",
  },
  {
    label: "Phantom",
    link: "https://phantom.app/",
    imgSrc: "/phantom.svg",
    category: "Wallets",
  },
  {
    label: "Solflare",
    link: "https://solflare.com/",
    imgSrc: "/solflare.svg",
  },
  {
    label: "Backpack",
    link: "https://backpack.app/",
    imgSrc: "/backpack.png",
  },
  {
    label: "Step Finance",
    link: "https://www.step.finance/",
    imgSrc: "/stepfinance.png",
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
                  The most powerful, robust and comprehensive set of API in{" "}
                  <span className="font-semibold text-[#c7f284]">crypto</span>.
                </p>
                <a
                  href="/readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 hover:no-underline hover:text-[#c7f284] bg-[#4A5C41]/90 text-[#c7f284] px-5 py-2.5 text-center rounded-full border border-solid border-transparent hover:border-[#c7f284] transition-all"
                >
                  <span className="text-base md:text-lg font-semibold">
                    Start Building
                  </span>
                </a>
              </div>
              <Header></Header>
            </div>
          </div>
        </div>

        <div className="px-3">
          <div className="max-w-6xl mx-auto mt-[60px] pt-4 pb-5 md:pb-4">
            <h4 className="text-white text-center text-3xl md:text-4xl font-semibold mb-5 sm:mb-8 md:mb-12">
              The Most Comprehensive
              <span className="block text-[#c7f284] text-4xl md:text-6xl md:pt-2.5 pb-3">
                Crypto API Suite
              </span>
            </h4>

            {/* Products */}
            <div className="grid text-center mx-auto max-w-xs sm:max-w-md md:max-w-5xl w-full sm:grid-cols-2 md:grid-cols-4 gap-y-2">
              <div className="flex flex-col items-center group rounded-lg border border-solid border-transparent px-5 py-4 transition-colors">
                <SwapApiIcon height={64} width={64} />
                <h2 className="mt-3 mb-1.5 md:mb-3 text-lg md:text-2xl font-bold">
                  <span className="text-[#c7f284]">Swap API</span>
                </h2>
                <p className="text-white m-0 max-w-[30ch] text-sm opacity-50 font-medium">
                  Seamlessly integrate token swaps into your application
                </p>
              </div>
              <div className="flex flex-col items-center group rounded-lg border border-solid border-transparent px-5 py-4 transition-colors">
                <TokenApiIcon height={64} width={64} />
                <h2 className="mt-3 mb-1.5 md:mb-3 text-lg md:text-2xl font-bold">
                  <span className="text-[#c7f284]">Token API</span>
                </h2>
                <p className="text-white m-0 max-w-[30ch] text-sm opacity-50 font-medium">
                  Comprehensive range of token information and metadata
                </p>
              </div>
              <div className="flex flex-col items-center group rounded-lg border border-solid border-transparent px-5 py-4 transition-colors">
                <PriceApiIcon height={64} width={64} />
                <h2 className="mt-3 mb-1.5 md:mb-3 text-lg md:text-2xl font-bold">
                  <span className="text-[#c7f284]">Price API</span>
                </h2>
                <p className="text-white m-0 max-w-[30ch] text-sm opacity-50 font-medium">
                  Get real time price data for all token in DeFi
                </p>
              </div>
              <div className="flex flex-col items-center group rounded-lg border border-solid border-transparent px-5 py-4 transition-colors relative">
                <PerpApiIcon height={64} width={64} />
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
            <div className="md:mx-auto flex justify-center items-center flex-col space-y-6 mt-10 sm:flex-row sm:space-y-0 sm:space-x-6 px-20 sm:px-28 md:px-36 lg:px-40">
              <a
                href="/readme"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 text-white/80 font-semibold min-w-40 md:min-w-[180px] py-3 text-center rounded-2xl border border-solid border-transparent hover:no-underline hover:text-[#c7f284] hover:border-[#c7f284]/40 transition-all"
              >
                <span className="text-base lg:text-lg">Docs</span>
              </a>
              <a
                href="/readme"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4A5C41]/90 text-[#c7f284] font-semibold min-w-40 md:min-w-[180px] py-3 text-center rounded-2xl border border-solid border-transparent hover:no-underline hover:text-[#c7f284] hover:border-[#c7f284] transition-all"
              >
                <span className="lg:text-lg mr-2">Get Started</span>
                <span className="self-end text-lg lg:text-xl font-normal -mt-0.5 inline-block">
                  -&gt;
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="px-8 bg-gradient-to-br from-[#131C25] to-[#223345] relative overflow-hidden mt-[60px]">
          <img
            src="/img/metropolis-api/api-img.png"
            alt="api-img"
            className="absolute top-0 bottom-0 right-0 h-full max-w-none"
          />
          <div className="shadow-2xl blur-xl absolute -top-20 -bottom-20 -left-20 w-[120%] bg-gradient-to-r from-[#131C25] from-45% to-90% to-[#223345]/80 z-30"></div>
          <div className="w-full max-w-5xl mx-auto text-center md:text-left py-[60px] mt-3.5 relative z-40">
            <h4 className="max-w-md mx-auto md:mx-0 md:max-w-xl lg:max-w-[60%] text-white text-center md:text-left text-3xl md:text-4xl font-semibold mb-7 md:mb-12">
              The Most Trusted
              <span className="block text-[#c7f284] text-4xl md:text-6xl md:pt-2.5 pb-3">
                Crypto API Solution
              </span>
            </h4>
            {/* USP */}
            <div className="max-w-md mx-auto md:mx-0 md:max-w-xl lg:max-w-[60%] grid text-left gap-y-5 pb-1.5">
              <div className="flex gap-5">
                <ExperiencedIcon height={50} width={50} />
                <div className="mb-3 flex flex-col md:gap-1 lg:gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold m-0">
                    <span className="text-[#c7f284]">Experienced Focused</span>
                  </h2>
                  <p className="text-white m-0 text-base opacity-60">
                    We provide a full suite of the best trading product & tools.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <BuildersIcon height={50} width={50} />
                <div className="mb-3 flex flex-col md:gap-1 lg:gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold m-0">
                    <span className="text-[#c7f284]">Builders Focused</span>
                  </h2>
                  <p className="text-white m-0 text-base opacity-60">
                    Empowering our partners to build anything they want.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <PPPIcon height={50} width={50} />
                <div className="mb-3 flex flex-col md:gap-1 lg:gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold m-0">
                    <span className="text-[#c7f284]">PPP Focused</span>
                  </h2>
                  <p className="text-white m-0 text-base opacity-60">
                    We want our partners to win, so we do the work for you.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <DeveloperIcon height={50} width={50} />
                <div className="mb-3 flex flex-col md:gap-1 lg:gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold m-0">
                    <span className="text-[#c7f284]">Developer Focused</span>
                  </h2>
                  <p className="text-white m-0 text-base">
                    <span className="opacity-60">Join our </span>
                    <a
                      href="https://discord.gg/jup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c7f284] text-[#c7f284] underline-offset-4 hover:underline"
                    >
                      Discord
                    </a>{" "}
                    <span className="opacity-60">and </span>
                    <a
                      href="https://t.me/jup_dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c7f284] text-[#c7f284] underline-offset-4 hover:underline"
                    >
                      Telegram
                    </a>{" "}
                    <span className="opacity-60">for your queries.</span>
                  </p>
                </div>
              </div>

              <p className="p-0 m-0 opacity-60 text-white text-base">Start building with Metropolis like no other.</p>
            </div>
          </div>
        </div>

        <div className="px-3">
          <div className="max-w-6xl mx-auto mt-[60px]">
            {/* Partners */}
            <p className="text-white text-center text-3xl md:text-4xl font-semibold flex-1 mb-8 pt-3.5">
              Our Partners
            </p>

            <div className="w-full overflow-hidden relative">
              <div className="shadow-2xl blur-md absolute -top-20 -bottom-20 -left-20 w-1/5 bg-[#131C25] z-30"></div>
              <div className="shadow-2xl blur-md absolute -top-20 -bottom-20 -right-20 w-1/5 bg-[#131C25] z-30"></div>
              <button
                className="text-white/80 font-semibold bg-transparent border-0 cursor-pointer absolute top-[50%] left-0 lg:left-12 -translate-y-1/2 z-40"
                onClick={() => slider?.current?.slickPrev()}
              >
                <LeftArrowIcon width={20} height={20}/>
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
                            className="max-h-16 max-w-full h-auto w-auto"
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
                <RightArrowIcon width={20} height={20}/>
              </button>
            </div>
          </div>
        </div>

        <div className="px-3 pb-20">
          <div className="max-w-7xl mx-auto mt-[60px]">
            {/* Testimonials */}
            <div className="mt-16 pt-1">
              <h4 className="text-white text-center text-3xl md:text-4xl font-semibold mb-7 md:mb-12">
                The Best
                <span className="block text-[#c7f284] text-4xl md:text-6xl md:pt-2.5 pb-3">
                  On-Chain Exchange
                </span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-5">
                <a
                  href="https://twitter.com/jerallaire/status/1724718929447371174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col space-y-5 bg-slate-400/10 rounded-xl p-7 hover:no-underline hover:bg-slate-300/10"
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
                  className="flex flex-col space-y-5 bg-slate-400/10 rounded-xl p-7 hover:no-underline hover:bg-slate-300/10"
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
                  className="flex flex-col space-y-5 bg-slate-400/10 rounded-xl p-7 hover:no-underline hover:bg-slate-300/10"
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
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
};

export default Metropolis;
