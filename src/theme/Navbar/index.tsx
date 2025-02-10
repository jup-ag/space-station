import React from 'react';
import Logo from '@theme/Logo';
import NavbarLayout from '@theme/Navbar/Layout';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import MobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import SearchBar from '@theme/SearchBar';
import { navbarConfigs } from '../../constant';

function CustomNavbarContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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
    <>
      <div className="navbar__items">
        {navbarItems.length > 0 ? (
          navbarItems.map((item) => {
            if (item.items) {
              // Render a dropdown
              return (
                <div key={item.label} className="navbar__item dropdown dropdown--hoverable">
                  <div className="navbar__link-wrapper">
                    <a 
                      href={item.to}
                      className={clsx(
                        'navbar__link',
                        (location.pathname.startsWith(item.to) || 
                         item.items?.some(subItem => location.pathname.startsWith(subItem.to))) && 
                        'navbar__link--active'
                      )}
                    >
                      {item.label}
                    </a>
                    <span className="dropdown__trigger" aria-haspopup="true" aria-expanded="false" role="button" />
                  </div>
                  <ul className="dropdown__menu">
                    {item.items.map((subItem) => (
                      <li key={subItem.to}>
                        <a
                          className={clsx(
                            'dropdown__link',
                            location.pathname.startsWith(subItem.to) && 'dropdown__link--active'
                          )}
                          href={subItem.to}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }

            // Render a standard link
            return (
            <a
              key={item.to}
              className={clsx(
                'navbar__item',
                'navbar__link',
                location.pathname.startsWith(item.to) && 'navbar__link--active'
              )}
              href={item.to}
            >
              {item.label}
            </a>
            );
          })
        ) : (
          <span>No items to display</span> // Fallback message
        )}
      </div>
      <div className="navbar__items navbar__items--right">
        {!isHomePage && (
          <div className="navbarSearchContainer">
            <SearchBar />
          </div>
        )}
      </div>
    </>
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
