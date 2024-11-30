import React from 'react';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import { navbarConfigs } from '../../../../constant';

function getNavbarItems(locationPath: string) {
  const defaultItems = navbarConfigs['/']; // Default items for the root
  return Object.keys(navbarConfigs).reduce((acc, path) => {
    if (path === '/' && locationPath === '/') {
      return navbarConfigs[path];
    } else if (locationPath.startsWith(path) && path !== '/') {
      return navbarConfigs[path];
    }
    return acc;
  }, defaultItems);
}

export default function NavbarMobilePrimaryMenu(): JSX.Element {
  const location = useLocation();
  const navbarItems = getNavbarItems(location.pathname);

  return (
    <ul className="menu__list">
      {navbarItems.map((item, i) => (
        <li key={i} className={clsx('menu__list-item')}>
          <a href={item.to} className={clsx('menu__link')}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
