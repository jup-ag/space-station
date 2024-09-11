import React, { useEffect, useState } from 'react';

const LINKS = [
    {
        label: 'Docs',
        path: '/docs',
        style: 'link',
    },
    {
        label: 'Resources',
        path: '/resources',
        style: 'link',
    },
    {
        label: 'Changelog',
        path: '/changelog',
        style: 'link',
    },
    {
        label: 'FAQs',
        path: '/faqs',
        style: 'link',
    },
    {
        label: 'Start Building',
        path: '/docs',
        style: 'button',
    },
];

const Header = () => {
    const [scrolled, setScrolled] = useState(0);
    const threshold = 50;

    useEffect(() => {
        setScrolled(scrollY > threshold ? 1 : 0);
    }, []);

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
        <header className={(scrolled ? "bg-[#131C25]" : "bg-transparent") + " flex justify-center px-5 py-5 fixed z-50 top-0 left-0 right-0 transition-all duration-500"}>
            <div className="xl:max-w-6xl w-full flex items-center justify-between">
                <a href="/" rel="noopener noreferrer" className='hover:no-underline'>
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
                <div className="flex items-center space-x-4 ml-8 overflow-auto">
                    {LINKS.map((link) => {
                        if (link.style === 'button') {
                            return (
                                <a href={link.path} key={link.label} rel="noopener noreferrer" className="bg-[#c7f284]/30 border border-solid border-transparent rounded-2xl text-center py-1.5 px-6 m-0 hover:border-[#c7f284] hover:no-underline transition-colors ease-out duration-200">
                                    <span className="-m-1 text-sm font-semibold inline-block text-[#c7f284]">
                                        {link.label}
                                    </span>
                                </a>
                            );
                        }
                        else {
                            return (
                                <a href={link.path} key={link.label} rel="noopener noreferrer" className='hover:no-underline'>
                                    <span className="px-3 py-1 text-sm font-semibold text-white hover:text-[#c7f284] transition-colors ease-in duration-200">{link.label}</span>
                                </a>
                            );
                        }
                    })}
                </div>
            </div>
        </header>
    );
};

export default Header;
