import React from 'react';
import TwitterIcon from './icons/TwitterIcon';
import TelegramIcon from './icons/TelegramIcon';
import DiscordIcon from './icons/DiscordIcon';
import { DOCS_URL } from '../constants';

const PRODUCTS = [
    {
        label: 'APIs',
        link: DOCS_URL,
    },
    {
        label: 'Jup Terminal',
        link: 'https://terminal.jup.ag/',
    },
];

const RESOURCES = [
    {
        label: 'Docs',
        link: DOCS_URL,
    },
    {
        label: 'Blog',
        link: 'https://www.jupresear.ch/c/developers/40',
    },
];

const Socials = () => {
    return (
        <ul className='list-none p-0 mb-0 pb-9 mt-9 md:mt-14 flex gap-4 items-center justify-center'>
            <li>
                <a href="https://discord.gg/jup" target="_blank" rel="noopener noreferrer" className="py-1 text-sm font-semibold text-white hover:text-[#c7f284] hover:no-underline transition-colors ease-in duration-200">
                    <DiscordIcon height={18} width={18} color={"#ffffff"} />
                </a>
            </li>
            <li>
                <a href="https://t.me/jup_dev" target="_blank" rel="noopener noreferrer" className="py-1 text-sm font-semibold text-white hover:text-[#c7f284] hover:no-underline transition-colors ease-in duration-200">
                    <TelegramIcon height={18} width={18} color={"#ffffff"} />
                </a>
            </li>
            <li>
                <a href="https://twitter.com/JupiterExchange" target="_blank" rel="noopener noreferrer" className="py-1 text-sm font-semibold text-white hover:text-[#c7f284] hover:no-underline transition-colors ease-in duration-200">
                    <TwitterIcon height={18} width={18} color={"#ffffff"} />
                </a>
            </li>
        </ul>
    )
}

const Footer = () => {
    return (
        <footer className="max-w-screen-xl mx-auto px-5 pt-1 bg-[#131C25] md:flex md:items-center md:flex-wrap">
            <div className="w-full md:w-auto md:pl-12 md:pb-8 flex items-center justify-center md:justify-start">
                <a href="/metropolis" className='hover:no-underline'>
                    <div className="flex flex-row items-center space-x-2.5">
                        <img
                            alt="logo"
                            loading="lazy"
                            width="32"
                            height="32"
                            decoding="async"
                            data-nimg="1"
                            src="/img/jupiter-logo.svg"
                            style={{ color: 'transparent' }}
                        />
                        <span className="text-lg font-bold text-white">Jupiter</span>
                    </div>
                </a>
            </div>

            <div className="mx-auto md:mr-0 md:ml-auto mt-12 md:mt-0 sm:max-w-lg w-full flex flex-row min-[450px]:flex-row gap-2 min-[450px]:gap-5 justify-around text-center min-[450px]:text-left">
                <div className="mx-4">
                    <h6 className='font-semibold text-white/70 text-xs mb-2'>Products</h6>
                    <ul className='list-none p-0'>
                        {PRODUCTS.map((item) => {
                            return (
                                <li key={item.label}>
                                    <a href={item.link} target="_blank" className="py-1 text-sm font-semibold text-white hover:text-[#c7f284] hover:no-underline transition-colors ease-in duration-200">
                                        {item.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="mx-4">
                    <h6 className='font-semibold text-white/70 text-xs mb-2'>Resources</h6>
                    <ul className='list-none p-0'>
                        {RESOURCES.map((item) => {
                            return (
                                <li key={item.label}>
                                    <a href={item.link} target="_blank" className="py-1 text-sm font-semibold text-white hover:text-[#c7f284] hover:no-underline transition-colors ease-in duration-200">
                                        {item.label}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="mx-auto w-full">
                <Socials />
            </div>
        </footer>
    );
};

export default Footer;
