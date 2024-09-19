import { cn } from '@site/src/utils';
import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import BurgerIcon from './icons/BurgerIcon';
import CrossIcon from './icons/CrossIcon';
import { DOCS_URL } from '../constants';

const LINKS = [
    {
        label: 'Docs',
        path: DOCS_URL,
    },
    {
        label: 'Blog',
        path: 'https://www.jupresear.ch/c/developers/40',
    },
    {
        label: 'Changelog',
        path: 'https://t.me/jup_dev',
    },
    {
        label: 'FAQs',
        path: 'https://discord.com/channels/897540204506775583/910250162402779146',
    }
];

const Header = () => {
    const [scrolled, setScrolled] = useState(0);
    const threshold = 50;

    useEffect(() => {
        let ticking = false;

        const updateScrolled = () => {
            const scrollY = window.pageYOffset;

            setScrolled(scrollY > threshold ? 1 : 0);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrolled);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrolled]);

    return (
        <div>
            <header className={cn(scrolled ? "bg-[#131C25]" : "bg-transparent", "flex justify-center px-5 py-5 fixed z-50 top-0 left-0 right-0 transition-all duration-500")}>
                <div className="xl:max-w-6xl w-full flex items-center justify-between">
                    <a href="/" className='hover:no-underline m-0'>
                        <span className="flex flex-row items-center space-x-2.5">
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
                            <div className="flex">
                                <div className="text-lg font-bold text-white">Jupiter</div>
                            </div>
                        </span>
                    </a>
                    <div className="items-center space-x-4 ml-8 overflow-auto hidden md:flex">
                        {LINKS.map((link) => {
                            return (
                                <a href={link.path} key={link.label} target="_blank" className="text-sm font-semibold px-3 text-white transition-colors duration-200 ease-in hover:no-underline hover:text-[#c7f284]">
                                    {link.label}
                                </a>
                            );
                        })}
                        <a href={DOCS_URL} target="_blank" className="text-sm font-semibold text-center text-[#c7f284] bg-[#4A5C41]/90 border border-solid border-transparent rounded-full py-[0.6rem] px-[0.93rem] transition-colors duration-200 ease-out hover:no-underline hover:text-[#c7f284] hover:border-[#c7f284]">
                            Start Building
                        </a>
                    </div>
                </div>
            </header>
            <div className="fixed top-[1.3rem] right-7 z-50 block md:hidden">
                <Menu
                    overlayClassName={ "top-0 left-0 right-0 bottom-0" }
                    customBurgerIcon={<BurgerIcon width={30} height={30} color={"#ffffff"} />}
                    customCrossIcon={<CrossIcon width={24} height={24} color={"#ffffff"} />}
                    width={ "65%" }
                    right
                >
                    <div className='w-full'>
                        <div className="w-full h-screen flex flex-col overflow-auto gap-2 items-center pt-6 bg-gradient-to-b from-[#223345] to-[#131C25] md:bg-transparent md:from-transparent md:to-transparent">
                            <a href="/" className='hover:no-underline mx-auto mb-4 mt-4'>
                                <span className="flex flex-row items-center space-x-2.5">
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
                                    <div className="flex">
                                        <div className="text-lg font-bold text-white">Jupiter</div>
                                    </div>
                                </span>
                            </a>
                            
                            {LINKS.map((link) => {
                                return (
                                    <a href={link.path} key={link.label} target="_blank" className="text-sm font-semibold py-[0.22rem] text-white transition-colors duration-200 ease-in hover:no-underline hover:text-[#c7f284]">
                                        {link.label}
                                    </a>
                                )
                            })}
                            <a href={DOCS_URL} target="_blank" className="text-sm font-semibold text-center text-[#c7f284] bg-[#4A5C41]/90 border border-solid border-transparent rounded-full py-[0.6rem] px-[0.93rem] mt-4 transition-colors duration-200 ease-out hover:no-underline hover:text-[#c7f284] hover:border-[#c7f284]">
                                Start Building
                            </a>
                        </div>
                    </div>
                </Menu>
            </div>
        </div>
    );
};

export default Header;
