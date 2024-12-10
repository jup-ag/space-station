import React from 'react';
import { useNavbarSecondaryMenu } from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';
import Translate from '@docusaurus/Translate';
import { navbarConfigs } from '../../../../constant';

function hasPrimaryMenuItems(locationPath: string) {
  const items = Object.keys(navbarConfigs).reduce((acc, path) => {
    if (path === '/' && locationPath === '/') {
      return navbarConfigs[path];
    } else if (locationPath.startsWith(path) && path !== '/') {
      return navbarConfigs[path];
    }
    return acc;
  }, []);
  return items.length > 0;
}

function SecondaryMenuBackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className="clean-btn navbar-sidebar__back"
      onClick={onClick}
    >
      <Translate
        id="theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel"
        description="The label of the back button to return to main menu"
      >
        ← Back to main menu
      </Translate>
    </button>
  );
}

export default function NavbarMobileSidebarSecondaryMenu(): JSX.Element | null {
  const location = useLocation();
  const secondaryMenu = useNavbarSecondaryMenu();
  const primaryMenuExists = hasPrimaryMenuItems(location.pathname);

  return (
    <>
      {primaryMenuExists && (
        <SecondaryMenuBackButton onClick={() => secondaryMenu.hide()} />
      )}
      {secondaryMenu.content}
    </>
  );
}
