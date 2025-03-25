import React from 'react';
import {
  useLockBodyScroll,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarLayout from '@theme/Navbar/MobileSidebar/Layout';
import NavbarMobileSidebarHeader from '@theme/Navbar/MobileSidebar/Header';
import NavbarMobileSidebarPrimaryMenu from '@theme/Navbar/MobileSidebar/PrimaryMenu';
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import { navbarConfigs } from '../../../constant';

export const isPathActive = (itemPath: string, location: { pathname: string }, navbarItems: any[]) => {
  const stripToTwoSegments = (path: string) => {
    const segments = path.split('/').filter(Boolean);
    if (segments.length <= 2) return path;
    return '/' + segments.slice(0, 2).join('/');
  };

  if (itemPath === '/docs/api') {
    if (location.pathname === '/docs/api') return true;
    if (location.pathname.startsWith('/docs/api/')) return true;
    if (location.pathname.startsWith('/docs/api-')) return false;
  }

  if (itemPath === '/docs/' || itemPath === '/docs') {
    if (location.pathname === '/docs/' || location.pathname === '/docs') {
      return true;
    }
    
    if (location.pathname.startsWith('/docs/api-')) {
      return true;
    }
    
    const hasSpecificNavItem = navbarItems.some(item => {
      if (item.to !== '/docs/' && item.to !== '/docs' && 
          location.pathname.startsWith(stripToTwoSegments(item.to))) {
        return true;
      }
      if (item.items) {
        return item.items.some(subItem => 
          location.pathname.startsWith(stripToTwoSegments(subItem.to))
        );
      }
      return false;
    });
    
    if (hasSpecificNavItem) {
      return false;
    }
    
    const segments = location.pathname.split('/').filter(Boolean);
    if (segments[0] === 'docs' && segments.length === 2) {
      return true;
    }
    return false;
  }

  return location.pathname.startsWith(stripToTwoSegments(itemPath));
};

function MobileSidebarContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navbarItems = Object.keys(navbarConfigs).reduce((acc, path) => {
    if (path === '/' && location.pathname === '/') {
      return navbarConfigs[path];
    } else if (location.pathname.startsWith(path) && path !== '/') {
      return navbarConfigs[path];
    }
    return acc;
  }, []);

  return (
    <div className="navbar-sidebar__items">
      <div className="navbar-sidebar__item menu">
        <ul className="menu__list">
          {navbarItems.length > 0 ? (
            navbarItems.map((item) => {
              if (item.items) {
                return (
                  <li key={item.label} className="menu__list-item">
                    <a
                      href={item.to}
                      className={clsx(
                        'menu__link',
                        (isPathActive(item.to, location, navbarItems) || 
                         item.items?.some(subItem => isPathActive(subItem.to, location, navbarItems))) && 
                        'menu__link--active'
                      )}
                    >
                      {item.label}
                    </a>
                    <ul className="menu__list">
                      {item.items.map((subItem) => (
                        <li key={subItem.to} className="menu__list-item">
                          <a
                            className={clsx(
                              'menu__link',
                              isPathActive(subItem.to, location, navbarItems) && 'menu__link--active'
                            )}
                            href={subItem.to}
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={item.to} className="menu__list-item">
                  <a
                    className={clsx(
                      'menu__link',
                      isPathActive(item.to, location, navbarItems) && 'menu__link--active'
                    )}
                    href={item.to}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })
          ) : (
            <li className="menu__list-item">No items to display</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default function NavbarMobileSidebar(): JSX.Element | null {
  const mobileSidebar = useNavbarMobileSidebar();
  useLockBodyScroll(mobileSidebar.shown);

  if (!mobileSidebar.shouldRender) {
    return null;
  }

  return (
    <NavbarMobileSidebarLayout
      header={<NavbarMobileSidebarHeader />}
      primaryMenu={<NavbarMobileSidebarPrimaryMenu />}
      secondaryMenu={<NavbarMobileSidebarSecondaryMenu />}
    />
  );
}
