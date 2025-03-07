import React from 'react';
import { useLocation } from '@docusaurus/router';
import { useThemeConfig } from '@docusaurus/theme-common';
import { navbarConfigs } from '../../../../constant';
import clsx from 'clsx';

// Import the isPathActive function from the parent component
import { isPathActive } from '../index';

export default function NavbarMobileSidebarPrimaryMenu(): JSX.Element {
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
    <div className="menu">
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
  );
}