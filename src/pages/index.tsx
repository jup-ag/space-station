import React from "react";
import Layout from "@theme/Layout";
import { cn } from "../utils";
import SearchBar from '@theme/SearchBar';
import { API_CARDS, TOOL_KIT_CARDS } from '../constant';

const JupiterSearch = () => {
  return (
    <div className="mt-10 mb-16 md:mb-0 xl:mt-12 max-w-3xl mx-auto w-full px-4">
      <div className={`relative w-full homeSearchContainer`}>
        <SearchBar />
      </div>
    </div>
  );
};

const JupiterExplore = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-[#17212C] p-8 rounded-2xl flex flex-col h-full">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-white mb-4">Get Started</h2>
            <p className="text-gray-400 text-base py-2">
              Integrate with Jupiter APIs to bring Solana DeFi to you and your users.
            </p>
          </div>
          <div className="mt-8 flex gap-4">
            <a 
              href="https://station.jup.ag/docs/" 
              className="flex-1 bg-[#22CCEE] !text-black font-semibold py-3 px-1 rounded-lg text-center hover:bg-[#4DD6F1] transition-colors !no-underline"
            >
              Setup
            </a>
            <a 
              href="https://station.jup.ag/docs/ultra-api/" 
              className="flex-1 bg-[#22CCEE] !text-black font-semibold py-3 px-1 rounded-lg text-center hover:bg-[#4DD6F1] transition-colors !no-underline"
            >
              Integrate API
            </a>
          </div>
        </div>
        <div className="bg-[#17212C] p-8 rounded-2xl flex flex-col h-full">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-white mb-4">Get Routed</h2>
            <p className="text-gray-400 text-base py-2">
              Integrate your DEX in our routing engine to take part in our aggregation.
            </p>
          </div>
          <a 
            href="https://station.jup.ag/docs/dex-integration"
            className="mt-8 bg-[#22CCEE] !text-black font-semibold py-3 px-4 rounded-lg text-center hover:bg-[#4DD6F1] transition-colors !no-underline"
          >
            DEX Integration
          </a>
        </div>
        <div className="bg-[#17212C] p-8 rounded-2xl flex flex-col h-full">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-white mb-4">Tool Kits</h2>
            <p className="text-gray-400 text-base py-2">
              Find more tools and resources to help build faster and better.
            </p>
          </div>
          <a 
            href="https://station.jup.ag/docs/tool-kits/swap-terminal" 
            className="mt-8 bg-[#22CCEE] !text-black font-semibold py-3 px-4 rounded-lg text-center hover:bg-[#4DD6F1] transition-colors !no-underline"
          >
            Explore Tool Kits
          </a>
        </div>
      </div>
    </div>
  );
};

const JupiterAPI = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-16 md:pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {API_CARDS.map((card, index) => (
          <div key={index} className="bg-[#17212C] rounded-xl p-6 flex flex-col">
            <h3 className="text-2xl font-semibold text-white mb-2">{card.title}</h3>
            <div className="flex gap-3 text-gray-400">
              {card.links.map((link, linkIndex) => (
                <a 
                  key={linkIndex}
                  href={link.href}
                  {...(!link.href.startsWith('/') ? {
                    target: "_blank",
                    rel: "noopener noreferrer"
                  } : {})}
                  className="pr-2 !text-gray-400 hover:!text-[#22CCEE] transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const JupiterToolKit = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-16 md:pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TOOL_KIT_CARDS.map((card, index) => (
          <div key={index} className="bg-[#17212C] rounded-xl p-6 flex flex-col">
            <h3 className="text-2xl font-semibold text-white mb-2">{card.title}</h3>
            <div className="flex gap-3 text-gray-400">
              {card.links.map((link, linkIndex) => (
                <a 
                  key={linkIndex}
                  href={link.href}
                  {...(!link.href.startsWith('/') ? {
                    target: "_blank",
                    rel: "noopener noreferrer"
                  } : {})}
                  className="pr-2 !text-gray-400 hover:!text-[#22CCEE] transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const JupiterCommunity = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-16 md:pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a href="https://discord.gg/jup" target="_blank" rel="noopener noreferrer" className="bg-[#17212C] rounded-xl p-6 flex items-center gap-4 hover:bg-[#17212C]/80 transition-colors">
          <div className="bg-[#131C25] p-3 rounded-xl w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#5865F2]">
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
            </svg>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">Get Support</h3>
            <p className="text-gray-400">Join our Discord Community</p>
          </div>
        </a>

        <a href="https://github.com/jup-ag/space-station/issues" target="_blank" rel="noopener noreferrer" className="bg-[#17212C] rounded-xl p-6 flex items-center gap-4 hover:bg-[#17212C]/80 transition-colors">
          <div className="bg-[#131C25] p-3 rounded-xl w-12 h-12 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white text-xl font-semibold">Feedback & Contribute</h3>
            <p className="text-gray-400">Share your suggestions on GitHub</p>
          </div>
        </a>
      </div>
    </div>
  );
};

const JupiterFooter = () => {
  return (
    <footer className="w-full bg-[#131C25] py-8 border-t border-[#17212C]">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        <div className="flex flex-col space-y-4 mb-6 md:mb-0">
          <a href="https://discord.gg/jup" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
            </svg>
            Discord
          </a>
          <a href="https://github.com/jup-ag/space-station" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </a>
          <a href="https://t.me/jup_dev" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Notifications
          </a>
          <a href="https://x.com/JupiterExchange" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            X
          </a>
          <a href="https://jupiverse.zendesk.com/hc/en-us" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-white transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
            User Guides
          </a>
        </div>
        
        {/* Mobile divider */}
        <div className="w-full h-[1px] bg-[#17212C] my-6 md:hidden"></div>
        
        <div className="flex flex-col space-y-4">
          <a href="/docs/sdk-api-license-agreement" className="text-gray-400 hover:text-white transition-colors">
            SDK & API License Agreement
          </a>
          <a href="/docs/terms-of-use" className="text-gray-400 hover:text-white transition-colors">
            Terms of Use
          </a>
          <a href="/docs/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-[#17212C]/50">
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Jupiter. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Content = () => {
  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center bg-[#13181D]">
      <div className="bg-v2-lily/5 w-full h-[1px]" />

      <div className="w-full max-xl:px-2 flex flex-col">
        <div className="bg-[#131C25] flex flex-col justify-center self-center px-20 text-center max-md:px-5 w-full md:py-24 pt-0">
          <div
            className={cn(
              "font-bold max-md:max-w-full text-6xl xl:text-7xl leading-[1] py-2 mt-12 md:mt-0",
              "bg-gradient-to-r from-[rgba(0,190,240,1)] to-[rgba(199,242,132,1)] text-transparent bg-clip-text",
            )}
          >
            Jupiter Developer Docs
          </div>
          <div className="self-center text-sm xl:text-[20px] text-v2-lily/50 w-full text-wrap px-4 mt-4 xl:mt-8">
            Build world class apps with Jupiter
          </div>
          <JupiterSearch />
        </div>
        <JupiterExplore />
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-white mb-8">Browse by API</h2>
        </div>
        <JupiterAPI />
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-white mb-8">Browse by tool kits</h2>
        </div>
        <JupiterToolKit />
        <div className="w-full max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-white mb-8">We'd love to hear from you!</h2>
        </div>
        <JupiterCommunity />
      </div>
      <JupiterFooter />
    </div>
  );
};

export default function Home(): JSX.Element {
  return (
    <div className="home overflow-hidden">
      <Layout>
        <Content />
      </Layout>
    </div>
  );
}
