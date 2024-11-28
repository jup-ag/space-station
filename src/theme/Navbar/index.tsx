import React from 'react';
import Logo from '@theme/Logo';
import NavbarLayout from '@theme/Navbar/Layout';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';

const navbarConfigs = {
  '/docs': [
    { to: '/docs/', label: 'Swap API', position: 'left' },
    { to: '/docs/perp-api/perp-api', label: 'Perp API', position: 'left' },
    { to: '/docs/tool-kits/swap-terminal', label: 'Tool Kits', position: 'left' },
    { to: '/docs/other-tools/price-api', label: 'Others', position: 'left' },
  ],
  '/guides': [
    { to: '/guides/', label: 'Guides', position: 'left' },
    { to: '/docs/', label: 'Docs', position: 'left' },
  ],
  '/': [
    { to: '/guides/', label: 'Guides', position: 'left' },
    { to: '/docs/', label: 'Docs', position: 'left' },
  ]
};

function CustomNavbarContent() {
  const location = useLocation();

  // Determine which navbar config to use based on the current path
  const navbarItems = Object.keys(navbarConfigs).reduce((acc, path) => {
    if (path === '/' && location.pathname === '/') {
      return navbarConfigs[path];
    } else if (location.pathname.startsWith(path) && path !== '/') {
      return navbarConfigs[path];
    }
    return acc;
  }, []);

  return (
    <div className="navbar__items">
      {navbarItems.map((item) => (
        <a
          key={item.to}
          className={clsx(
            'navbar__item',
            'navbar__link',
            location.pathname === item.to && 'navbar__link--active' // Add active class
          )}
          href={item.to}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default function Navbar(): JSX.Element {
  return (
    <NavbarLayout>
      <div className="navbar__brand">
        <a className="navbar__logo" href="/">
          <img src="/img/jupiter-logo.svg" alt="Jupiter Logo" className="themedImage..." height="28" width="28" />
        </a>
        <a href="/" className="navbar__title">
          <span>Jupiter Station</span>
        </a>
      </div>
      <CustomNavbarContent />
    </NavbarLayout>
  );
};
