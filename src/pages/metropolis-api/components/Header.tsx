import React, { useEffect, useState } from 'react';

const LINKS = [
    {
        label: ['Docs'],
        path: '/docs',
        style: 'link',
    },
    {
        label: ['Resources'],
        path: '/resources',
        style: 'link',
    },
    {
        label: ['Changelog'],
        path: '/changelog',
        style: 'link',
    },
    {
        label: ['FAQs'],
        path: '/faqs',
        style: 'link',
    },
    {
        label: ['Start', 'Building'],
        path: '/docs',
        style: 'button',
    },
];

const Header = () => {
    const [scrollDir, setScrollDir] = useState(0);
    const threshold = 50;

    useEffect(() => {
        setScrollDir(scrollY > threshold ? 1 : 0);
    }, []);

    useEffect(() => {
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.pageYOffset;

            setScrollDir(scrollY > threshold ? 1 : 0);
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateScrollDir);
                ticking = true;
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [scrollDir]);

    return (
        <header className={(scrollDir ? "bg-[#131C25]" : "bg-transparent") + " flex justify-center px-5 py-3 fixed z-50 top-0 left-0 right-0 transition-all duration-500"}>
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
                                <a href={link.path} key={link.label[0]} rel="noopener noreferrer" className={(scrollDir ? "bg-[#192531]/35" : "bg-[#192531]/5") + " border border-solid border-transparent rounded-full text-center flex flex-wrap items-center justify-center space-y-0 max-w-32 py-3 px-10 m-0 hover:bg-[#c7f284]/10 hover:border-[#c7f284] hover:no-underline transition-colors ease-out duration-200"}>
                                    {link.label.map((word, index) => {
                                        return (
                                            <span
                                                key={index}
                                                className="-m-1 text-sm font-semibold text-transparent bg-clip-text"
                                                style={{
                                                backgroundImage:
                                                    "linear-gradient(89deg, rgb(28, 197, 225) 0.21%, rgb(199, 242, 132) 115.96%)",
                                                }}
                                            >
                                                {word}
                                            </span>
                                        )
                                    })}
                                </a>
                            );
                        }
                        else {
                            return (
                                <a href={link.path} key={link.label[0]} rel="noopener noreferrer" className='hover:no-underline'>
                                    <span className="px-3 py-1 text-sm font-semibold text-white hover:text-[#c7f284] transition-colors ease-in duration-200">{link.label[0]}</span>
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
