import React, { ReactNode, useEffect, useState } from "react";
import Link from "@docusaurus/Link";
import GradientText from "../components/GradientText";
import Layout from "@theme/Layout";
import { TweetCardProps } from "react-tweet-card";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { cn } from "../utils";

const JupiterTopics = () => {
  return (
    <div className="mt-10 xl:mt-24">
      <div className="text-2xl font-semibold tracking-tighter  text-center max-md:max-w-full">
        Quick Start
      </div>

      <div className="mt-4 w-full grid grid-cols-2 md:grid-cols-3 justify-center gap-2 text-sm xl:text-base font-bold whitespace-nowrap flex-wrap px-2 lg:px-0">
        {/* <a href="" className="p-3 lg:px-5 lg:py-4 rounded-2xl bg-lime-200/[.03] hover:bg-lime-200/10 max-md:text-center !text-lime-200 hover:!no-underline">
          Welcome to Solana
        </a> */}
        <a
          href="#section-lfg-launchpad"
          className="p-3 lg:px-5 lg:py-4 rounded-2xl bg-lime-200/[.03] hover:bg-lime-200/10 max-md:text-center !text-lime-200 hover:!no-underline"
        >
          LFG Launchpad
        </a>

        <a
          href="https://www.jupresear.ch"
          target="_blank"
          className="p-3 lg:px-5 lg:py-4 rounded-2xl bg-lime-200/[.03] hover:bg-lime-200/10 max-md:text-center !text-lime-200 hover:!no-underline"
        >
          Jup Research
        </a>
        <a
          href="https://vote.jup.ag"
          target="_blank"
          className="p-3 lg:px-5 lg:py-4 rounded-2xl bg-lime-200/[.03] hover:bg-lime-200/10 max-md:text-center !text-lime-200 hover:!no-underline"
        >
          Governance
        </a>
        {/* <a href="" className="p-3 lg:px-5 lg:py-4 rounded-2xl bg-lime-200/[.03] hover:bg-lime-200/10 max-md:text-center !text-lime-200 hover:!no-underline">
          J.U.P Governance
        </a> */}
        {/* <a href="" className="p-3 lg:px-5 lg:py-4 rounded-2xl bg-lime-200/[.03] hover:bg-lime-200/10 max-md:text-center !text-lime-200 hover:!no-underline">
          Ecosystem Token List
        </a> */}
      </div>
    </div>
  );
};

const JupiterProducts = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 xl:mt-[100px] max-w-screen-xl max-md:mt-10 max-md:max-w-full">
      <div className="text-2xl font-semibold  text-center max-md:max-w-full">
        Jupiter Products
      </div>
      <div className="mt-4 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 gap-y-2 lg:gap-5 lg:gap-y-14">
          <div className="flex flex-col flex-1">
            <div className="relative flex-1 flex flex-col justify-center p-4 lg:p-6 mx-auto w-full rounded-2xl bg-[#71E5EC]/[0.05] bg-opacity-10 max-md:px-1 max-md:pb-2">
              <div className="text-lg font-bold text-center">Swap</div>
              <a
                href="https://jup.ag/swap"
                target="_blank"
                className={cn(
                  "flex gap-3 px-3.5 py-2.5 mt-3 lg:mt-4 text-sm font-semibold hover:no-underline !text-[#00BCF0] rounded-lg bg-[#00BCF0] bg-opacity-10 outline outline-1 outline-[rgba(0,190,240,0.5)] hover:bg-opacity-20 cursor-pointer"
                )}
              >
                <img src="img/home/icon-launch.svg" />
                <div className="text-xs lg:text-sm">Launch Swap</div>
              </a>
              <a
                href="https://station.jup.ag/guides/jupiter-swap/swap"
                target="_blank"
                className={cn(
                  "flex gap-3 px-3.5 py-2.5 mt-2 text-sm font-semibold hover:no-underline !text-[#00BCF0] rounded-lg bg-[#00BCF0] bg-opacity-10 outline outline-1 outline-[rgba(0,190,240,0.5)] hover:bg-opacity-20 cursor-pointer"
                )}
              >
                <img src="img/home/icon-guide.svg" />
                <div className="text-xs lg:text-sm">User Guide</div>
              </a>
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <div className="relative flex-1 flex flex-col justify-center p-4 lg:p-6 mx-auto w-full rounded-2xl bg-[#71E5EC]/[0.05] bg-opacity-10 max-md:px-1 max-md:pb-2">
              <div className="text-lg font-bold  text-center whitespace-nowrap">
                Limit Order
              </div>
              <a
                href="https://jup.ag/limit"
                target="_blank"
                className={cn(
                  "flex gap-3 px-3.5 py-2.5 mt-3 lg:mt-4 text-sm font-semibold hover:no-underline !text-[#00BCF0] rounded-lg bg-[#00BCF0] bg-opacity-10 outline outline-1 outline-[rgba(0,190,240,0.5)] hover:bg-opacity-20 cursor-pointer"
                )}
              >
                <img src="img/home/icon-launch.svg" />
                <div className="text-xs lg:text-sm">Launch Limit Order</div>
              </a>
              <a
                href="https://station.jup.ag/guides/limit-order/limit-order"
                target="_blank"
                className={cn(
                  "flex gap-3 px-3.5 py-2.5 mt-2 text-sm font-semibold hover:no-underline !text-[#00BCF0] rounded-lg bg-[#00BCF0] bg-opacity-10 outline outline-1 outline-[rgba(0,190,240,0.5)] hover:bg-opacity-20 cursor-pointer"
                )}
              >
                <img src="img/home/icon-guide.svg" />
                <div className="text-xs lg:text-sm">User Guide</div>
              </a>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="relative flex-1 flex flex-col justify-center p-4 lg:p-6 mx-auto w-full rounded-2xl bg-[#71E5EC]/[0.05] bg-opacity-10 max-md:px-1 max-md:pb-2">
              <div className="text-lg font-bold  text-center">DCA</div>
              <a
                href="https://jup.ag/dca"
                target="_blank"
                className={cn(
                  "flex gap-3 px-3.5 py-2.5 mt-3 lg:mt-4 text-sm font-semibold hover:no-underline !text-[#00BCF0] rounded-lg bg-[#00BCF0] bg-opacity-10 outline outline-1 outline-[rgba(0,190,240,0.5)] hover:bg-opacity-20 cursor-pointer"
                )}
              >
                <img src="img/home/icon-launch.svg" />
                <div className="text-xs lg:text-sm">Launch DCA</div>
              </a>
              <a
                href="https://station.jup.ag/guides/dca/how-to-dca"
                target="_blank"
                className={cn(
                  "flex gap-3 px-3.5 py-2.5 mt-2 text-sm font-semibold hover:no-underline !text-[#00BCF0] rounded-lg bg-[#00BCF0] bg-opacity-10 outline outline-1 outline-[rgba(0,190,240,0.5)] hover:bg-opacity-20 cursor-pointer"
                )}
              >
                <img src="img/home/icon-guide.svg" />
                <div className="text-xs lg:text-sm">User Guide</div>
              </a>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="relative flex-1 flex flex-col justify-center p-4 lg:p-6 mx-auto w-full rounded-2xl bg-[#71E5EC]/[0.05] bg-opacity-10 max-md:px-1 max-md:pb-2">
              <div className="text-lg font-bold  text-center">Perps</div>
              <a
                href="https://jup.ag/perps"
                target="_blank"
                className={cn(
                  "flex gap-3 px-3.5 py-2.5 mt-3 lg:mt-4 text-sm font-semibold hover:no-underline !text-[#00BCF0] rounded-lg bg-[#00BCF0] bg-opacity-10 outline outline-1 outline-[rgba(0,190,240,0.5)] hover:bg-opacity-20 cursor-pointer"
                )}
              >
                <img src="img/home/icon-launch.svg" />
                <div className="text-xs lg:text-sm">Launch Perps</div>
              </a>
              <a
                href="https://station.jup.ag/labs/perpetual-exchange/overview"
                target="_blank"
                className={cn(
                  "flex gap-3 px-3.5 py-2.5 mt-2 text-sm font-semibold hover:no-underline !text-[#00BCF0] rounded-lg bg-[#00BCF0] bg-opacity-10 outline outline-1 outline-[rgba(0,190,240,0.5)] hover:bg-opacity-20 cursor-pointer"
                )}
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7111a82941aa614d6513ab0b6fd9fe5fafe5d1a46c07d49684acb29ccdb98c52?"
                  className="my-auto w-4 aspect-square"
                />
                <div className="text-xs lg:text-sm">User Guide</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ChevronRight = ({ width = 14, height = 14 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.1665 7.00033H12.8332M12.8332 7.00033L6.99984 1.16699M12.8332 7.00033L6.99984 12.8337"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const JupiterProjects = () => {
  return (
    <div className="w-full">
      <div className="text-3xl xl:text-4xl text-center lg:text-start font-semibold !text-[#00BEF0]">
        Projects
      </div>

      <div className="mt-5 grid grid-cols-1 xl:grid-cols-1 sm:grid-cols-2 gap-2">
        <a
          href="https://station.jup.ag/docs/get-your-token-onto-jup"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>Get Listed on Jupiter</span>
          <ChevronRight />
        </a>
        <a
          href="https://www.jupresear.ch/t/lfg-launchpad-introducing-your-project-to-the-community/5234/2"
          target="_blank"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>Apply to LFG</span>
          <ChevronRight />
        </a>
      </div>
    </div>
  );
};

const JupiterDevelopers = () => {
  return (
    <div className="w-full">
      <div className="text-3xl xl:text-4xl text-center lg:text-start font-bold !text-[#00BEF0]">
        Developers
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
        <a
          href="https://station.jup.ag/docs/apis/swap-api"
          target="_blank"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>v6 Swap API</span>
          <ChevronRight />
        </a>
        <a
          href="https://station.jup.ag/docs/apis/payments-api"
          target="_blank"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>Payments API</span>
          <ChevronRight />
        </a>
        <a
          href="https://station.jup.ag/docs/limit-order/limit-order-api"
          target="_blank"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>Limit Orders API</span>
          <ChevronRight />
        </a>
        <a
          href="https://terminal.jup.ag"
          target="_blank"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>Jupiter Terminal</span>
          <ChevronRight />
        </a>
        <a
          href="https://station.jup.ag/docs/dca/dca-sdk"
          target="_blank"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>DCA with SDK</span>
          <ChevronRight />
        </a>
        <a
          href="https://station.jup.ag/docs/additional-topics/referral-program"
          target="_blank"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>Referral Program</span>
          <ChevronRight />
        </a>
      </div>
    </div>
  );
};

const JupiterLFGLaunchpad = () => {
  return (
    <div className="w-full text-v2-lily/[.03]">
      <div className="text-3xl xl:text-4xl text-center lg:text-start font-semibold !text-[#00BEF0]">
        LFG Launchpad
      </div>

      <div className="mt-5 flex flex-col gap-2">
        <a
          href="https://twitter.com/weremeow/status/1749577177333645770"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>What is LFG</span>
          <ChevronRight />
        </a>
        <a
          href="https://www.jupresear.ch/t/jupiter-lfg-launchpad-beta/31"
          target="_blank"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>Project Introductions</span>
          <ChevronRight />
        </a>
        <a
          href="https://www.youtube.com/@jup-ecosystem/featured"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>Youtube AMAs/Resources</span>
          <ChevronRight />
        </a>
        {/* <a
          href=""
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>Vote</span>
          <ChevronRight />
        </a> */}
      </div>
    </div>
  );
};

const JupiterJupAcronym = () => {
  return (
    <div className="w-full text-v2-lily/[.03]">
      <div className="text-3xl xl:text-4xl text-center lg:text-start font-semibold !text-[#00BEF0]">
        {"J.U.P"}
      </div>
      <div className="mt-5 flex flex-col gap-2">
        <a
          href="https://twitter.com/weremeow/status/1764304344545894904"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>What is J.U.P</span>
          <ChevronRight />
        </a>
        <a
          href="https://twitter.com/JupiterExchange/status/1763214551900729797"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>What is J.U.P. (video)</span>
          <ChevronRight />
        </a>
        <a
          href="https://twitter.com/JupiterExchange/status/1757079166212505989"
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>Working Groups</span>
          <ChevronRight />
        </a>
        {/* <a
          href=""
          className={cn(
            "py-3 px-6 font-semibold !text-[#00BEF0] rounded-xl items-center flex gap-2 bg-[#00BEF0]/[.03] hover:bg-[#00BEF0]/[.1] !no-underline",
            `transition-all hover:gap-3`
          )}
        >
          <span>Uplink Working Group</span>
          <ChevronRight />
        </a> */}
      </div>
    </div>
  );
};

const JupiterCredits = () => {
  return (
    <div className="w-full">
      <div className="text-center text-lime-200 text-2xl font-semibold">
        The Best On-Chain Exchange
      </div>

      <div className="flex flex-col md:flex-row gap-2 lg:gap-8 mt-6">
        <div className="justify-center items-start gap-8 w-full">
          <a
            href="https://twitter.com/jerallaire/status/1724718929447371174"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 lg:p-8 bg-[#20292F] rounded-2xl justify-center items-start flex flex-col w-full hover:bg-[#20292F]/[.9] hover:no-underline"
          >
            <div className="flex gap-3">
              <img
                className="w-9 h-9 rounded-full border border-lime-200 border-opacity-20"
                src="/img/home/credit-avatar-1.png"
              />
              <div className="items-start">
                <div className="text-lime-200 font-semibold">
                  Jeremy Allaire (@jerallaire)
                </div>
                <div className="text-lime-200 text-opacity-50 text-xs leading-none">
                  5:20 PM · Nov 15, 2023
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6 leading-6 text-xs md:text-sm lg:text-base">
              <div className="mt-5 text-v2-lily/[.65] inline">
                <span className="">I am super impressed with</span>
                <br />
                <a
                  className="text-decoration-none underline text-v2-lily/[.65] pr-1"
                  href="https://twitter.com/JupiterExchange"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @JupiterExchange
                </a>
                <span className="">on</span>
                <a
                  className="text-decoration-none underline text-v2-lily/[.65]  pl-1"
                  href="https://twitter.com/solana"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @solana
                </a>
                <span className="">
                  . Truly excellent UX and features. An example of maturation in
                  a range of infrastructure -- wallets, usdc on solana liquidity
                  and availability, and product execution.
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="justify-center items-start gap-8 w-full">
          <a
            href="https://twitter.com/TopoGigio_sol/status/1737844551317147964"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 lg:p-8 bg-[#20292F] rounded-2xl justify-center items-start flex flex-col w-full hover:bg-[#20292F]/[.9] hover:no-underline"
          >
            <div className="flex gap-3">
              <img
                className="w-9 h-9 rounded-full border border-lime-200 border-opacity-20"
                src="/img/home/credit-avatar-2.png"
              />
              <div className="items-start">
                <div className="text-lime-200 font-semibold">
                  Topo Gigio (@TopoGigio_sol)
                </div>
                <div className="text-lime-200 text-opacity-50 text-xs leading-none">
                  10:36 PM · Dec 21, 2023
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6 leading-6 text-xs md:text-sm lg:text-base">
              <div className="mt-5 text-v2-lily/[.65]">
                <span className="">Did you know?: </span>
                <a
                  className="text-decoration-none underline text-v2-lily/[.65] px-1"
                  href="https://twitter.com/JupiterExchange"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @JupiterExchange
                </a>

                <div className="">
                  {" "}
                  has a bridge feature? Where it will compare rates and find you
                  the most efficient path to $SOL Jupiter, for me, is the single
                  most important app on $SOL
                  <div className="mt-3" />
                  It is our Grand Central Station.
                  <div className="mt-3" />
                  Love at first swap
                  <div className="mt-3" />
                  GM
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="justify-center items-start gap-8 w-full">
          <a
            href="https://twitter.com/Abbasshaikh42/status/1735940030865277244"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 lg:p-8 bg-[#20292F] rounded-2xl justify-center items-start flex flex-col w-full hover:bg-[#20292F]/[.9] hover:no-underline"
          >
            <div className="flex gap-3">
              <img
                className="w-9 h-9 rounded-full border border-lime-200 border-opacity-20"
                src="/img/home/credit-avatar-3.png"
              />
              <div className="items-start">
                <div className="text-lime-200 text-base font-semibold">
                  Abbas (@abbassshaikh42)
                </div>
                <div className="text-lime-200 text-opacity-50 text-xs leading-none">
                  4:28 PM · Dec 16, 2023
                </div>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="mt-5 text-v2-lily/[.65] leading-6 text-xs md:text-sm lg:text-base">
                <span className="">
                  Tell me this isn't a gorgeous fucking product by{" "}
                </span>
                <a
                  className="text-decoration-none underline text-v2-lily/[.65] px-1"
                  href="https://twitter.com/JupiterExchange"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @JupiterExchange
                </a>
                <p className="mt-4">
                  This would previously require me to use a slow, redacted CEX
                  that requires KYC and requires me to handover custody of my
                  assets.
                </p>
                <p className="mt-4">
                  The performant chain thesis is simple: When your base layer
                  does not require weeks and months of development efforts
                  purely directed towards gas/fee optimizations, you allow your
                  builders to innovate and focus purely on the product & they
                  make the magic happen
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

const Content = () => {
  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center">
      <div className="bg-v2-lily/5 w-full h-[1px]" />

      <div className="w-full max-xl:px-2 xl:max-w-7xl flex flex-col mb-[80px]">
        <div className="flex flex-col justify-center self-center px-20 mt-12 text-center max-md:px-5 max-md:mt-10 w-full">
          <div
            className={cn(
              "font-bold max-md:max-w-full text-3xl xl:text-7xl",
              "bg-gradient-to-r from-[rgba(0,190,240,1)] to-[rgba(199,242,132,1)] text-transparent bg-clip-text"
            )}
          >
            Jupiter Space Station
          </div>
          <div className="self-center text-xs xl:text-[20px] text-v2-lily/50 w-full text-wrap px-4 mt-4">
            Welcome to the space station — home for catdets curious about
            Jupiter
          </div>
        </div>

        <JupiterTopics />
        <JupiterProducts />
      </div>

      <div className="w-full bg-[#13181D] flex flex-col items-center">
        <div className="text-v2-lily/[.03] max-xl:px-4 xl:max-w-7xl w-full flex flex-col xl:flex-row justify-center gap-10 py-[60px]">
          <div className="w-full xl:w-1/3">
            <JupiterProjects />
          </div>
          <div className="w-full xl:w-2/3">
            <JupiterDevelopers />
          </div>
        </div>

        <div className="bg-v2-lily/5 w-full h-[1px]" />

        <div
          id="section-lfg-launchpad"
          className="text-v2-lily/[.03] max-xl:px-4 xl:max-w-7xl w-full flex flex-col md:flex-row justify-center gap-10 py-[60px]"
        >
          <JupiterLFGLaunchpad />
          <JupiterJupAcronym />
        </div>
      </div>

      <div className="bg-[#0D1114] w-full py-[60px] flex justify-center">
        <div className="max-xl:px-4 xl:max-w-7xl w-full">
          <JupiterCredits />
        </div>
      </div>
    </div>
  );
};

export default function Home(): JSX.Element {
  return (
    <div className="home overflow-hidden">
      <Layout>
        <Content />
        {/* <div className="relative isolate min-h-screen overflow-hidden text-[#E8F9FF]/60 px-[44px]">
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
                <h1 className="font-bold text-[40px] sm:text-[80px] 1.1125]">
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
                    className="!text-[#19232D] hover:text-black hover:bg-white transition duration-250 ease-linear !no-underline group items-center bg-[#C7F284] rounded-lg font-semibold text-base px-8 py-4 space-x-2 mt-4 uppercase"
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
                    className="text-white border-white hover:text-black hover:bg-white transition duration-250 ease-linear !no-underline group items-center bg-transparent rounded-lg font-semibold text-base px-[14px] py-[15px] space-x-2 mt-4 uppercase border-[1px] border-solid"
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
                  <h2 className="text-white text-[28px] sm:text-[36px] 1.22]">
                    The <GradientText>Best Onchain Exchange</GradientText> 🚀
                  </h2>
                  <p className="mt-6 text-lg">
                    We deliver the finest onchain experience, marrying Solana's
                    low transaction fees with Jupiter's advanced routing and
                    commitment to product excellence.
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
                  <h2 className="text-white text-[28px] sm:text-[36px] 1.22]">
                    With <GradientText>Features That People Love</GradientText>{" "}
                    ❤️
                  </h2>
                  <p className="mt-6 text-lg">
                    Jupiter's products covers swaps, DCA, limit orders,
                    perpetuals, and a launchpad, with different options for
                    users and developers. We're also constantly adding new
                    features to serve you even better.
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
                  <h2 className="text-white text-[28px] sm:text-[36px] 1.22]">
                    Put Together By An{" "}
                    <GradientText>Awesome Community</GradientText> 🙌
                  </h2>
                  <p className="mt-6 text-lg">
                    With catdets, working groups, and the DAO growing everyday,
                    we have a strong decentralized community of users and
                    builders working together to bring you the very best.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[14px] mt-9">
                    {tweetsCommunity.map((tweet, index) => (
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
            </div>
          </div>
        </div> */}
      </Layout>
    </div>
  );
}
