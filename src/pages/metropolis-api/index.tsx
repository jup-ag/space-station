// import { Inter } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import React from "react";

// const inter = Inter({ subsets: ["latin"] });

const SELECTED_PARTNERS = [
  {
    label: "Crypto.com",
    link: "https://crypto.com/defi-wallet/",
    imgSrc: "/crypto.png",
  },
  {
    label: "Phantom",
    link: "https://phantom.app/",
    imgSrc: "/phantom.svg",
    category: "Wallets",
  },
  {
    label: "Backpack",
    link: "https://backpack.app/",
    imgSrc: "/backpack.svg",
  },
  {
    label: "Birdeye",
    link: "https://birdeye.so/",
    imgSrc: "/birdeye.png",
  },
  {
    label: "Orca",
    link: "https://www.orca.so/",
    imgSrc: "/orca.png",
  },
  {
    label: "Meteora",
    link: "https://meteora.ag/",
    imgSrc: "/meteora.png",
  },
  {
    label: "Wormhole",
    link: "https://wormhole.com/",
    imgSrc: "/wormhole.svg",
  },
];

const Home = () => {
  const [translateCount, setTranslateCount] = useState(0);
  const [translateCountCopy, setTranslateCountCopy] = useState(0);
  const [transition, setTransition] = useState("transition-transform ease-linear");
  const [transitionCopy, setTransitionCopy] = useState("transition-transform ease-linear");
  const [partnersWidth, setPartnersWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const offset = 10;

  useEffect(() => {
    setPartnersWidth(document.getElementById('partners')?.offsetWidth ?? 0);
    setScreenWidth(window.innerWidth ?? 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateCount((oldCount) => oldCount - offset);
      setTranslateCountCopy((oldCount) => oldCount - offset);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [partnersWidth, screenWidth]);
  
  useEffect(() => {
    if(translateCount <= (-partnersWidth)+offset) {
      setTransition("transition-none");
    }
    else if(translateCount >= partnersWidth-offset) {
      setTransition("transition-transform ease-linear");
    }
  }, [translateCount]);
  
  useEffect(() => {
    if(translateCountCopy <= (-partnersWidth)+offset) {
      setTransitionCopy("transition-none");
    }
    else if(translateCountCopy >= partnersWidth-offset) {
      setTransitionCopy("transition-transform ease-linear");
    }
  }, [translateCountCopy]);

  useEffect(() => {
    if(translateCount <= (-partnersWidth)+offset) {
      setTranslateCount(partnersWidth);
    } else if (translateCount == 0) {
      setTranslateCount(screenWidth);
    }
  }, [transition]);

  useEffect(() => {
    if(translateCountCopy <= (-partnersWidth)+offset) {
      setTranslateCountCopy(partnersWidth);
    } else if (translateCountCopy == 0) {
      setTranslateCountCopy((partnersWidth+screenWidth));
    }
  }, [transitionCopy]);

  return (
    <div className={"text-black dark:text-white"}>
      <main className={"bg-[#131C25] relative min-h-screen"}>
        <div className="px-3 py-4 md:py-12 overflow-hidden bg-[#131C25]/80 relative">
          <div className="bg-gradient-to-br from-cyan-950 via-40% via-cyan-700 to-cyan-500 absolute top-0 right-0 left-0 bottom-0 z-50 h-full w-full"></div>          
          <div className="max-w-[900px] mx-auto relative z-50">
            {/* Masthead */}
            <div className="text-center relative flex place-items-center min-h-[36rem]">
              <div className="w-full flex flex-col gap-5 items-center">
                <h1 className="text-[30px] md:text-7xl font-bold m-0">
                  <span className="relative">
                    Jupi
                    <span className="absolute -top-9 right-0 text-[#c7f284]">
                      .
                    </span>
                  </span>
                  <span className="relative">ter </span>
                  <span
                    className="text-transparent bg-clip-text relative font-bold"
                    style={{
                      backgroundImage:
                        "linear-gradient(89deg, rgb(28, 197, 225) 0.21%, rgb(199, 242, 132) 115.96%)",
                    }}
                  >
                    Metropolis
                  </span>
                  <span className="relative">
                    {" "}
                    APi
                    <span className="absolute -top-9 right-0 text-[#c7f284]">
                      .
                    </span>
                  </span>
                </h1>
                <p className="max-w-[547px] mx-auto text-xl text-white/70">
                  The most{" "}
                  <span className="font-semibold text-white/85">powerful</span>{" "}
                  set of liquidity API in{" "}
                  <span className="font-semibold text-teal-300">Solana</span>.
                </p>
                <a
                  href="/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 hover:no-underline hover:text-[#c7f284] hover:scale-105 bg-[#c7f284]/20 text-[#c7f284] min-w-60 py-3 md:py-4 text-center rounded-2xl border border-solid border-transparent hover:border-[#c7f284] transition-all"
                >
                  <span className="text-base md:text-xl mr-2">Get Started</span>
                  <span
                    className="self-end text-lg md:text-2xl font-semibold -mt-0.5 inline-block"
                    // className={`${inter.className} self-end text-lg md:text-2xl font-semibold -mt-0.5 inline-block`}
                  >
                    -&gt;
                  </span>
                </a>
              </div>
              <Header></Header>
            </div>
          </div>
        </div>

        <div className="px-8 bg-gradient-to-br from-[#131C25] to-[#223345] relative">
          <div className="max-w-[900px] mx-auto text-center mb-8 md:mb-12 md:text-left py-16 md:py-24">
            <h4 className="text-white/75 text-center md:text-left text-4xl md:text-6xl font-semibold mb-14 md:mb-12">
              Most Trusted
              <br />
              <span className="text-white">
                Crypto{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(89deg, rgb(28, 197, 225) 0.21%, rgb(199, 242, 132) 115.96%)",
                  }}
                >
                  API
                </span>{" "}
                Solution
              </span>
            </h4>
            {/* USP */}
            <div className="grid text-left mx-auto max-w-sm md:max-w-5xl md:w-full gap-y-5">
              <div className="flex gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 icon icon-tabler icon-tabler-topology-star-ring-3 opacity-50 rounded-2xl border-2 border-solid border-cyan-400 bg-cyan-400/15 px-2 py-1 mt-1"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="#22d3ee"
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
                <div className="mb-3 flex flex-col gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold m-0">
                    {" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{
                        backgroundImage:
                          "linear-gradient(89deg, rgb(28, 197, 225) 0.21%, rgb(199, 242, 132) 115.96%)",
                      }}
                    >
                      Best Defi Experience
                    </span>
                  </h2>
                  <p className="m-0 text-base opacity-50">
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
                  stroke="#22d3ee"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 lucide lucide-blocks opacity-50 rounded-2xl border-2 border-solid border-cyan-400 bg-cyan-400/15 px-2 py-1 mt-1"
                >
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                </svg>
                <div className="mb-3 flex flex-col gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold m-0">
                    {" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{
                        backgroundImage:
                          "linear-gradient(89deg, rgb(28, 197, 225) 0.21%, rgb(199, 242, 132) 115.96%)",
                      }}
                    >
                      Built your Application
                    </span>
                  </h2>
                  <p className="m-0 text-base opacity-50">
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
                  stroke="#22d3ee"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 lucide lucide-bug opacity-50 rounded-2xl border-2 border-solid border-cyan-400 bg-cyan-400/15 px-2 py-1 mt-1"
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
                <div className="mb-3 flex flex-col gap-2">
                  <h2 className="text-lg md:text-2xl font-semibold m-0">
                    {" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{
                        backgroundImage:
                          "linear-gradient(89deg, rgb(28, 197, 225) 0.21%, rgb(199, 242, 132) 115.96%)",
                      }}
                    >
                      Developer Focused
                    </span>
                  </h2>
                  <p className="m-0 text-base opacity-50">
                    Join our{" "}
                    <a
                      href="https://discord.gg/jup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c7f284] text-[#c7f284] underline-offset-4 hover:underline"
                    >
                      discord
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://t.me/jup_dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#c7f284] text-[#c7f284] underline-offset-4 hover:underline"
                    >
                      telegram
                    </a>{" "}
                    for your queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3">
          <div className="max-w-[900px] mx-auto mt-[60px]">
            <h4 className="text-white/75 text-center text-4xl md:text-6xl font-semibold mb-12">
              Comprehensive
              <br />
              <span className="text-white">
                Crypto
                <span
                  className="text-transparent bg-clip-text px-3"
                  style={{
                    backgroundImage:
                      "linear-gradient(89deg, rgb(28, 197, 225) 0.21%, rgb(199, 242, 132) 115.96%)",
                  }}
                >
                  API
                </span>
                Suite
              </span>
            </h4>
            {/* Products */}
            <div className="grid text-center mx-auto max-w-xs md:max-w-5xl md:w-full md:grid-cols-3 gap-y-5">
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
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m59.09375 24.78125 0 -11.4375 -11.4375 0"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M28.59375 20.96875 1.90625 47.65625"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m1.90625 36.21875 0 11.4375 11.4375 0"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                </svg>
                <h2 className="my-3 text-lg md:text-2xl font-semibold">
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(89deg, rgb(28, 197, 225) 0.21%, rgb(199, 242, 132) 115.96%)",
                    }}
                  >
                    Quote/Swap API
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
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
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M22.875 36.21875h26.6875s1.90625 0 1.90625 1.90625v7.625s0 1.90625 -1.90625 1.90625H22.875s-1.90625 0 -1.90625 -1.90625v-7.625s0 -1.90625 1.90625 -1.90625"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M11.4375 24.78125H38.125s1.90625 0 1.90625 1.90625v7.625s0 1.90625 -1.90625 1.90625H11.4375s-1.90625 0 -1.90625 -1.90625v-7.625s0 -1.90625 1.90625 -1.90625"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M15.25 13.34375h26.6875s1.90625 0 1.90625 1.90625v7.625s0 1.90625 -1.90625 1.90625H15.25s-1.90625 0 -1.90625 -1.90625V15.25s0 -1.90625 1.90625 -1.90625"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m55.28125 19.0625 0 7.625"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m51.46875 22.875 7.625 0"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m5.71875 1.90625 0 7.625"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m1.90625 5.71875 7.625 0"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                </svg>
                <h2 className="my-3 text-lg md:text-2xl font-semibold">
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(89deg, rgb(28, 197, 225) 0.21%, rgb(199, 242, 132) 115.96%)",
                    }}
                  >
                    Tokens API
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Find any tokens on-chain
                </p>
              </div>
              <div className="flex flex-col items-center group rounded-lg border border-solid border-transparent px-5 py-4 transition-colors">
                <svg
                  viewBox="-1.5 -1.5 75 75"
                  xmlns="http://www.w3.org/2000/svg"
                  id="File-Code-Cash-1--Streamline-Ultimate"
                  height="75"
                  width="75"
                >
                  <desc>
                    File Code Cash 1 Streamline Icon: https://streamlinehq.com
                  </desc>
                  <path
                    d="M56.214 42.762H50.099999999999994a4.026 4.026 0 0 0 -1.5 7.761000000000001l6.189 2.4749999999999996a4.026 4.026 0 0 1 -1.5 7.764h-6.074999999999999"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m51.714 42.762 0 -2.25"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m51.714 63.012 0 -2.25"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M33.714 51.762a18 18 0 1 0 36 0 18 18 0 1 0 -36 0Z"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="M24.714 60.762h-18a4.5 4.5 0 0 1 -4.5 -4.5v-49.5a4.5 4.5 0 0 1 4.5 -4.5h31.884a4.5 4.5 0 0 1 3.183 1.317L50.400000000000006 12.192a4.5 4.5 0 0 1 1.32 3.183v9.387"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m26.964 18.012 6.75 6.75 -6.75 6.75"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                  <path
                    d="m17.964000000000002 18.012 -6.75 6.75 6.75 6.75"
                    fill="none"
                    stroke="#ffffff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                  ></path>
                </svg>
                <h2 className="my-3 text-lg md:text-2xl font-semibold">
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(89deg, rgb(28, 197, 225) 0.21%, rgb(199, 242, 132) 115.96%)",
                    }}
                  >
                    Price API
                  </span>
                </h2>
                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                  Get precise & real time pricing of tokens
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-around flex-col space-y-6 mt-14 md:mt-10 sm:flex-row sm:space-y-0 px-20 sm:px-28 md:px-36 lg:px-40">
              <a
                href="/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-32 md:min-w-40 py-2 md:py-3 text-center bg-white/5 rounded-2xl border border-solid border-transparent text-white/80 hover:no-underline hover:text-[#c7f284] hover:border-[#c7f284]/40 transition-colors"
              >
                <span className="text-base md:text-lg">Docs</span>
              </a>
              <a
                href="/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 bg-[#c7f284]/20 text-[#c7f284] min-w-60 py-3 md:py-4 text-center rounded-2xl border border-solid border-transparent hover:no-underline hover:text-[#c7f284] hover:border-[#c7f284] transition-all"
              >
                <span className="text-base md:text-xl mr-2">Get Started</span>
                <span
                  className="self-end text-lg md:text-2xl font-semibold -mt-0.5 inline-block"
                >
                  -&gt;
                </span>
              </a>
            </div>
            
            {/* Partners */}
            <div className="mt-16 md:mt-32">
              <p className="text-white/40 text-xl text-center md:text-3xl font-semibold flex-1 mb-7">
                Our Partners
              </p>
            </div>
          </div>

          <div className="max-w-[950px] mx-auto">
            <div className="w-full overflow-hidden relative">
              <div className="shadow-2xl blur-xl absolute -top-20 -bottom-20 -left-20 w-1/5 bg-[#131C25] z-50"></div>
              <div className="shadow-2xl blur-xl absolute -top-20 -bottom-20 -right-20 w-1/5 bg-[#131C25] z-50"></div>
              {/* Social Proof */}
              <div className="relative w-[300%]">
                <div id="partners" className={`${transition} w-1/2 flex justify-between`} style={{ transform: `translateX(${translateCount}px)` }}>
                  {SELECTED_PARTNERS.map((partner, index) => {
                    return (
                      <a
                        key={index}
                        href={partner.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex flex-col items-center p-4 pb-5 opacity-50 hover:opacity-100 hover:scale-110 hover:no-underline transition-all"
                      >
                        <div className="w-full h-20 flex items-center justify-center">
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
                      </a>
                    )
                  })}
                </div>
                <div id="partners_copy" className={`${transitionCopy} w-1/2 flex justify-between absolute top-0 left-0`} style={{ transform: `translateX(${translateCountCopy}px)` }}>
                  {SELECTED_PARTNERS.map((partner, index) => {
                    return (
                      <a
                        key={index}
                        href={partner.link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="flex flex-col items-center p-4 pb-5 opacity-50 hover:opacity-100 hover:scale-110 hover:no-underline transition-all"
                      >
                        <div className="w-full h-20 flex items-center justify-center">
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
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 pb-20">
          <div className="max-w-7xl mx-auto mt-[60px]">
            {/* Testimonials */}
            <div className="mt-16 md:mt-24">
              <h4 className="text-white/75 text-center text-4xl md:text-6xl font-semibold mb-12">
                The Best
                <br />
                <span
                  className="text-transparent bg-clip-text px-3"
                  style={{
                    backgroundImage:
                      "linear-gradient(89deg, rgb(28, 197, 225) 0.21%, rgb(199, 242, 132) 115.96%)",
                  }}
                >
                  On-Chain
                </span>
                <span className="text-white">
                  Exchange
                </span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-5">
                <a
                  href="https://twitter.com/jerallaire/status/1724718929447371174"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col space-y-5 bg-slate-400/10 rounded-xl p-7 hover:no-underline hover:bg-slate-500/10"
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
                      <h6 className="text-[#c7f284] font-semibold m-0">
                        Jeremy Allaire (@jerallaire)
                      </h6>
                      <p className="text-xs text-[#c7f284] font-extralight m-0 pt-1">
                        5:20 PM · Nov 15, 2023
                      </p>
                    </div>
                  </div>
                  <p className="text-white/60">
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
                  className="flex flex-col space-y-5 bg-slate-400/10 rounded-xl p-7 hover:no-underline hover:bg-slate-500/10"
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
                      <h6 className="text-[#c7f284] font-semibold m-0">
                        Topo Gigio (@TopoGigio_sol)
                      </h6>
                      <p className="text-xs text-[#c7f284] font-extralight m-0 pt-1">
                        10:36 PM · Dec 21, 2023
                      </p>
                    </div>
                  </div>
                  <p className="text-white/60">
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
                  className="flex flex-col space-y-5 bg-slate-400/10 rounded-xl p-7 hover:no-underline hover:bg-slate-500/10"
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
                      <h6 className="text-[#c7f284] font-semibold m-0">
                        Abbas (@abbassshaikh42)
                      </h6>
                      <p className="text-xs text-[#c7f284] font-extralight m-0 pt-1">
                        4:28 PM · Dec 16, 2023
                      </p>
                    </div>
                  </div>
                  <p className="text-white/60">
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
}

export default Home;
