import React from 'react';
import Logo from '@theme/Logo';
import NavbarLayout from '@theme/Navbar/Layout';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import MobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import { navbarConfigs } from '../../constant';

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
      {navbarItems.length > 0 ? (
        navbarItems.map((item) => (
          <a
            key={item.to}
            className={clsx(
              'navbar__item',
              'navbar__link',
              location.pathname === item.to && 'navbar__link--active'
            )}
            href={item.to}
          >
            {item.label}
          </a>
        ))
      ) : (
        <span>No items to display</span> // Fallback message
      )}
    </div>
  );
}

export default function Navbar(): JSX.Element {
  return (
    <NavbarLayout>
      <div className="navbar__brand">
        <MobileSidebarToggle />
        <a className="navbar__logo" href="/">
          <img src="/img/jupiter-logo.svg" alt="Jupiter Logo" className="themedImage..." height="28" width="28" />
        </a>
        <a href="/" className="navbar__title mobile-hidden">
          <span>Jupiter Station</span>
        </a>
      </div>
      <CustomNavbarContent />
    </NavbarLayout>
  );
};
