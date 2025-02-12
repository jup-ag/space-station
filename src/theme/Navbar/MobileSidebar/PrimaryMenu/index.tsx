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
      {navbarItems.map((item) => {
        if (item.items) {
          const isActive = location.pathname.startsWith(item.to) || 
                          item.items.some(subItem => location.pathname.startsWith(subItem.to));

          return (
            <li key={item.label} className={clsx('menu__list-item')}>
              <a
                href={item.to}
                className={clsx(
                  'menu__link',
                  isActive && 'menu__link--active'
                )}
              >
                {item.label}
              </a>
              <ul className="menu__list menu__list--nested">
                {item.items.map((subItem) => (
                  <li key={subItem.to} className="menu__list-item">
                    <a
                      href={subItem.to}
                      className={clsx(
                        'menu__link',
                        location.pathname.startsWith(subItem.to) && 'menu__link--active'
                      )}
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
              href={item.to}
              className={clsx(
                'menu__link',
                location.pathname.startsWith(item.to) && 'menu__link--active'
              )}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}