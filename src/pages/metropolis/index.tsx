import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    imgSrc: "/backpack.svg",
  },
  {
    label: "Step Finance",
    link: "https://www.step.finance/",
    imgSrc: "/stepfinance.png",
  },
];

const Home = () => {
  const partnerSettings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1.5,
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2.5,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  return (
    <div className={"text-black dark:text-white"}>
      <main className={"bg-[#131C25] relative min-h-screen"}>
        <div className="px-3 py-4 md:py-12 overflow-hidden bg-[#131C25]/80 relative">
          <div className="bg-gradient-to-br from-[#223345] to-[#131C25] absolute top-0 right-0 left-0 bottom-0 z-50 h-full w-full"></div>
          <div className="max-w-[900px] mx-auto relative z-50">
            {/* Masthead */}
            <div className="text-center relative flex place-items-center min-h-[30rem] md:min-h-[36rem]">
              <div className="w-full flex flex-col gap-3 md:gap-5 items-center">
                <h1 className="md:max-w-2xl lg:max-w-full text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold m-0">
                  <span className="inline-block">Jupiter</span>
                  {" "}
                  <span className="inline-block">
                    <span className="text-[#c7f284] relative font-bold">
                      Metropolis
                    </span>
                    {" "}API
                  </span>
                </h1>
                <p className="mx-auto text-base px-5 md:px-0 sm:text-lg md:text-xl text-white/70">
                  The most powerful set of liquidity APIs{" "}
                  <span className="font-semibold text-[#c7f284]">anywhere</span>.
                </p>
                <a
                  href="/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 hover:no-underline hover:text-[#c7f284] bg-[#c7f284]/30 text-[#c7f284] min-w-40 md:min-w-52 lg:min-w-60 py-3 md:py-4 text-center rounded-2xl border border-solid border-transparent hover:border-[#c7f284] transition-all"
                >
                  <span className="text-base md:text-xl font-semibold">Get Started</span>
                </a>
              </div>
              <Header></Header>
            </div>
          </div>
        </div>

        <div className="px-3">
          <div className="max-w-6xl mx-auto mt-[60px]">
            <h4 className="text-white text-center text-3xl md:text-4xl font-semibold mb-5 sm:mb-8 md:mb-12">
              The Most Comprehensive
              <span className="block text-[#c7f284] text-4xl md:text-6xl md:pt-2.5 pb-3">
                Crypto API Suite
              </span>
            </h4>

            {/* Products */}
            <div className="grid text-center mx-auto max-w-xs sm:max-w-md md:max-w-5xl w-full sm:grid-cols-2 md:grid-cols-4 gap-y-2">
              <div className="flex flex-col items-center group rounded-lg border border-solid border-transparent px-5 py-4 transition-colors">
                <svg
                  viewBox="-1.5 -1.5 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Data-Transfer-Diagonal--Streamline-Ultimate"
                  height="64"
                  width="64"
                >
                  <desc>
                    Data Transfer Diagonal Streamline Icon:
                    https://streamlinehq.com
                  </desc>
                  <path
                    d="m32.40625 40.03125 26.6875 -26.6875"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m59.09375 24.78125 0 -11.4375 -11.4375 0"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M28.59375 20.96875 1.90625 47.65625"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m1.90625 36.21875 0 11.4375 11.4375 0"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                </svg>
                <h2 className="mt-3 mb-1.5 md:mb-3 text-lg md:text-2xl font-bold">
                  <span
                    className="text-[#c7f284]">
                    Swap API
                  </span>
                </h2>
                <p className="text-white m-0 max-w-[30ch] text-sm opacity-50 font-medium">
                  Get the best price quote, always
                </p>
              </div>
              <div className="flex flex-col items-center group rounded-lg border border-solid border-transparent px-5 py-4 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-1.5 -1.5 64 64"
                  id="Accounting-Coins-Stack-1--Streamline-Ultimate"
                  height="64"
                  width="64"
                >
                  <desc>
                    Accounting Coins Stack 1 Streamline Icon:
                    https://streamlinehq.com
                  </desc>
                  <defs></defs>
                  <title>accounting-coins-stack-1</title>
                  <path
                    d="M19.0625 47.65625H45.75s1.90625 0 1.90625 1.90625v7.625s0 1.90625 -1.90625 1.90625H19.0625s-1.90625 0 -1.90625 -1.90625v-7.625s0 -1.90625 1.90625 -1.90625"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M22.875 36.21875h26.6875s1.90625 0 1.90625 1.90625v7.625s0 1.90625 -1.90625 1.90625H22.875s-1.90625 0 -1.90625 -1.90625v-7.625s0 -1.90625 1.90625 -1.90625"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M11.4375 24.78125H38.125s1.90625 0 1.90625 1.90625v7.625s0 1.90625 -1.90625 1.90625H11.4375s-1.90625 0 -1.90625 -1.90625v-7.625s0 -1.90625 1.90625 -1.90625"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M15.25 13.34375h26.6875s1.90625 0 1.90625 1.90625v7.625s0 1.90625 -1.90625 1.90625H15.25s-1.90625 0 -1.90625 -1.90625V15.25s0 -1.90625 1.90625 -1.90625"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m55.28125 19.0625 0 7.625"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m51.46875 22.875 7.625 0"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m5.71875 1.90625 0 7.625"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m1.90625 5.71875 7.625 0"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                </svg>
                <h2 className="mt-3 mb-1.5 md:mb-3 text-lg md:text-2xl font-bold">
                  <span className="text-[#c7f284]">
                    Token API
                  </span>
                </h2>
                <p className="text-white m-0 max-w-[30ch] text-sm opacity-50 font-medium">
                  Find any tokens on-chain
                </p>
              </div>
              <div className="flex flex-col items-center group rounded-lg border border-solid border-transparent px-5 py-4 transition-colors">
                <svg
                  viewBox="-1.5 -1.5 75 75"
                  xmlns="http://www.w3.org/2000/svg"
                  id="File-Code-Cash-1--Streamline-Ultimate"
                  height="64"
                  width="64"
                >
                  <desc>
                    File Code Cash 1 Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    d="M56.214 42.762H50.099999999999994a4.026 4.026 0 0 0 -1.5 7.761000000000001l6.189 2.4749999999999996a4.026 4.026 0 0 1 -1.5 7.764h-6.074999999999999"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m51.714 42.762 0 -2.25"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m51.714 63.012 0 -2.25"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M33.714 51.762a18 18 0 1 0 36 0 18 18 0 1 0 -36 0Z"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M24.714 60.762h-18a4.5 4.5 0 0 1 -4.5 -4.5v-49.5a4.5 4.5 0 0 1 4.5 -4.5h31.884a4.5 4.5 0 0 1 3.183 1.317L50.400000000000006 12.192a4.5 4.5 0 0 1 1.32 3.183v9.387"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m26.964 18.012 6.75 6.75 -6.75 6.75"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m17.964000000000002 18.012 -6.75 6.75 6.75 6.75"
                    fill="none"
                    stroke="#c7f284"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                </svg>
                <h2 className="mt-3 mb-1.5 md:mb-3 text-lg md:text-2xl font-bold">
                  <span className="text-[#c7f284]">
                    Price API
                  </span>
                </h2>
                <p className="text-white m-0 max-w-[30ch] text-sm opacity-50 font-medium">
                  Get precise & real time pricing of tokens
                </p>
              </div>
              <div className="flex flex-col items-center group rounded-lg border border-solid border-transparent px-5 py-4 transition-colors relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-scale blur-[2px]"
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#c7f284"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 20l10 0" />
                  <path d="M6 6l6 -1l6 1" />
                  <path d="M12 3l0 17" />
                  <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
                  <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
                </svg>
                <span className="absolute top-[38px] left-0 right-0 text-sm font-semibold text-[#c7f284] bg-[#131C25] inline-block p-1">Coming Soon!</span>
                <h2 className="mt-3 mb-1.5 md:mb-3 text-lg md:text-2xl font-bold">
                  <span className="text-[#c7f284]">
                    Perp API
                  </span>
                </h2>
                <p className="text-white m-0 max-w-[30ch] text-sm opacity-50 font-medium">
                  Coming soon!
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="md:max-w-4xl lg:max-w-5xl md:mx-auto flex items-center justify-around flex-col space-y-6 mt-10 sm:flex-row sm:space-y-0 px-20 sm:px-28 md:px-36 lg:px-40">
              <a
                href="/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 text-white/80 min-w-40 md:min-w-52 lg:min-w-60 py-3 md:py-4 text-center rounded-2xl border border-solid border-transparent hover:no-underline hover:text-[#c7f284] hover:border-[#c7f284]/40 transition-all"
              >
                <span className="text-base lg:text-lg">Docs</span>
              </a>
              <a
                href="/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c7f284]/30 text-[#c7f284] font-bold min-w-40 md:min-w-52 lg:min-w-60 py-3 md:py-4 text-center rounded-2xl border border-solid border-transparent hover:no-underline hover:text-[#c7f284] hover:border-[#c7f284] transition-all"
              >
                <span className="text-base lg:text-xl mr-2">Get Started</span>
                <span className="self-end text-lg lg:text-2xl font-semibold -mt-0.5 inline-block">
                  -&gt;
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="px-8 bg-gradient-to-br from-[#131C25] to-[#223345] relative overflow-hidden mt-[60px]">
          <img
            src="/img/metropolis-api/api-img.jpg"
            alt="api-img"
            className="absolute top-0 bottom-0 right-[-10%] h-full max-w-none"
          />
          <div className="shadow-2xl blur-xl absolute -top-20 -bottom-20 -left-20 w-[120%] bg-gradient-to-r from-[#131C25] from-45% to-90% to-[#223345]/80 z-30"></div>
          <div className="w-full max-w-5xl mx-auto text-center mb-7 md:mb-12 md:text-left py-16 md:py-24 relative z-40">
            <h4 className="max-w-md mx-auto md:mx-0 md:max-w-xl lg:max-w-[60%] text-white text-center md:text-left text-3xl md:text-4xl font-semibold mb-7 md:mb-12">
              The Most Trusted
              <span className="block text-[#c7f284] text-4xl md:text-6xl md:pt-2.5 pb-3">
                Crypto API Solution
              </span>
            </h4>
            {/* USP */}
            <div className="max-w-md mx-auto md:mx-0 md:max-w-xl lg:max-w-[60%] grid text-left gap-y-5">
              <div className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 icon icon-tabler icon-tabler-topology-star-ring-3 opacity-50 rounded-2xl border-2 border-solid border-[#c7f284] bg-[#c7f284]/15 px-2 py-1 mt-1"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#c7f284"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                  <path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                  <path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                  <path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                  <path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                  <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                  <path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
                  <path d="M6 12h4" />
                  <path d="M14 12h4" />
                  <path d="M15 7l-2 3" />
                  <path d="M9 7l2 3" />
                  <path d="M11 14l-2 3" />
                  <path d="M13 14l2 3" />
                  <path d="M10 5h4" />
                  <path d="M10 19h4" />
                  <path d="M17 17l2 -3" />
                  <path d="M19 10l-2 -3" />
                  <path d="M7 7l-2 3" />
                  <path d="M5 14l2 3" />
                </svg>
                <div className="mb-3 flex flex-col md:gap-1 lg:gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold m-0">
                    <span className="text-[#c7f284]">
                      Best Defi Experience
                    </span>
                  </h2>
                  <p className="text-white m-0 text-base opacity-60">
                    Providing a full suite of world class trading product &
                    tools.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c7f284"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 lucide lucide-blocks opacity-50 rounded-2xl border-2 border-solid border-[#c7f284] bg-[#c7f284]/15 px-2 py-1 mt-1"
                >
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                </svg>
                <div className="mb-3 flex flex-col md:gap-1 lg:gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold m-0">
                    <span className="text-[#c7f284]">
                      Build your Application
                    </span>
                  </h2>
                  <p className="text-white m-0 text-base opacity-60">
                    Actionable defi date data at your finger tips.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c7f284"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 lucide lucide-bug opacity-50 rounded-2xl border-2 border-solid border-[#c7f284] bg-[#c7f284]/15 px-2 py-1 mt-1"
                >
                  <path d="m8 2 1.88 1.88" />
                  <path d="M14.12 3.88 16 2" />
                  <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
                  <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
                  <path d="M12 20v-9" />
                  <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
                  <path d="M6 13H2" />
                  <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
                  <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
                  <path d="M22 13h-4" />
                  <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
                </svg>
                <div className="mb-3 flex flex-col md:gap-1 lg:gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold m-0">
                    <span className="text-[#c7f284]">
                      Developer Focused
                    </span>
                  </h2>
                  <p className="text-white m-0 text-base">
                    <span className="opacity-60">Join our{" "}</span>
                    <a
                      href="https://discord.gg/jup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c7f284] text-[#c7f284] underline-offset-4 hover:underline"
                    >
                      discord
                    </a>{" "}
                    <span className="opacity-60">and{" "}</span>
                    <a
                      href="https://t.me/jup_dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c7f284] text-[#c7f284] underline-offset-4 hover:underline"
                    >
                      telegram
                    </a>{" "}
                    <span className="opacity-60">for your queries.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3">
          <div className="max-w-6xl mx-auto mt-[60px]">
            {/* Partners */}
            <p className="text-white text-center text-3xl md:text-4xl font-semibold flex-1 mb-8">
              Our Partners
            </p>
            
            <div className="w-full overflow-hidden relative">
              <div className="shadow-2xl blur-xl absolute -top-20 -bottom-20 -left-20 w-1/5 bg-[#131C25] z-40"></div>
              <div className="shadow-2xl blur-xl absolute -top-20 -bottom-20 -right-20 w-1/5 bg-[#131C25] z-40"></div>
              {/* Social Proof */}
              <Slider {...partnerSettings}>
                {SELECTED_PARTNERS.map((partner, index) => {
                  return (
                    <a
                      key={index}
                      href={partner.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="flex flex-col items-center p-4 pb-5 opacity-50 hover:opacity-100 hover:scale-110 hover:no-underline transition-all"
                    >
                      <div className="w-44 lg:w-60 py-3 border border-[#c7f284] bg-slate-100/15 rounded-xl">
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
            </div>
          </div>
        </div>

        <div className="px-3 pb-20">
          <div className="max-w-7xl mx-auto mt-[60px]">
            {/* Testimonials */}
            <div className="mt-16 md:mt-24">
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

export default Home;
