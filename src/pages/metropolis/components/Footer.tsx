import React from 'react';

const PRODUCTS = [
    {
        label: 'APIs',
        link: '/readme',
    },
    {
        label: 'Jup Terminal',
        link: 'https://terminal.jup.ag/',
    },
];

const RESOURCES = [
    {
        label: 'Docs',
        link: '/readme',
    },
    {
        label: 'Blogs',
        link: 'https://www.jupresear.ch/c/developers/40',
    },
];

const Socials = () => {
    return (
        <ul className='list-none p-0 mt-9 md:mt-14 flex gap-4 items-center justify-center'>
            <li>
                <a href="https://discord.gg/jup" target="_blank" rel="noopener noreferrer" className="py-1 text-sm font-semibold text-white hover:text-[#c7f284] hover:no-underline transition-colors ease-in duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-discord opacity-80 hover:opacity-100" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                        <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                        <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3" />
                        <path d="M7 16.5c3.5 1 6.5 1 10 0" />
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://t.me/jup_dev" target="_blank" rel="noopener noreferrer" className="py-1 text-sm font-semibold text-white hover:text-[#c7f284] hover:no-underline transition-colors ease-in duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-telegram opacity-80 hover:opacity-100" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                    </svg>
                </a>
            </li>
            <li>
                <a href="https://twitter.com/JupiterExchange" target="_blank" rel="noopener noreferrer" className="py-1 text-sm font-semibold text-white hover:text-[#c7f284] hover:no-underline transition-colors ease-in duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-x opacity-80 hover:opacity-100" width="18" height="18" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                </a>
            </li>
        </ul>
    )
}

const Footer = () => {
    return (
        <footer className="max-w-screen-xl mx-auto px-5 pt-1 bg-[#131C25] md:flex md:items-center md:flex-wrap">
            <div className="w-full md:w-auto md:pl-12 md:pb-8 flex items-center justify-center md:justify-start">
                <a href="/" rel="noopener noreferrer" className='hover:no-underline'>
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
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="py-1 text-sm font-semibold text-white hover:text-[#c7f284] hover:no-underline transition-colors ease-in duration-200">
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
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="py-1 text-sm font-semibold text-white hover:text-[#c7f284] hover:no-underline transition-colors ease-in duration-200">
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
