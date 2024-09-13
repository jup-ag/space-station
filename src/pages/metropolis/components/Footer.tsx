import React from 'react';

const PRODUCTS = [
    {
        label: 'APIs',
        link: '/docs',
    },
    {
        label: 'Jup Terminal',
        link: 'https://terminal.jup.ag/',
    },
];

const RESOURCES = [
    {
        label: 'Docs',
        link: '/docs',
    },
    {
        label: 'Blogs',
        link: '/resources',
    },
];

const CONTACT = [
    {
        label: 'Discord',
        link: 'https://discord.gg/jup',
    },
    {
        label: 'Telegram',
        link: 'https://t.me/jup_dev',
    },
    {
        label: 'X/Twitter',
        link: 'https://twitter.com/JupiterExchange',
    },
];

const Footer = () => {
    return (
        <footer className="max-w-screen-xl mx-auto px-5 pt-1 pb-14 min-[450px]:pb-20 bg-[#131C25] lg:flex lg:items-center">
            <div className="w-full lg:pl-12 lg:pb-8 flex items-center justify-center lg:justify-start">
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

            <div className="mx-auto lg:mr-0 lg:ml-auto mt-12 lg:mt-0 sm:max-w-2xl w-full flex flex-row min-[450px]:flex-row gap-2 min-[450px]:gap-5 md:gap-10 justify-around text-center min-[450px]:text-left">
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
                <div className="mx-4">
                    <h6 className='font-semibold text-white/70 text-xs mb-2'>Contact</h6>
                    <ul className='list-none p-0'>
                        {CONTACT.map((item) => {
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
        </footer>
    );
};

export default Footer;
