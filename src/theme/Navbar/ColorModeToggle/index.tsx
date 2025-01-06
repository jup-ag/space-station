import React, { useEffect } from 'react';
import { useColorMode, useThemeConfig } from '@docusaurus/theme-common';
import ColorModeToggle from '@theme/ColorModeToggle';
import type { Props } from '@theme/Navbar/ColorModeToggle';
import styles from './styles.module.css';

export default function NavbarColorModeToggle({
  className,
}: Props): JSX.Element | null {
  const navbarStyle = useThemeConfig().navbar.style;
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode, setColorMode } = useColorMode();

  // Forcefully apply light theme if disabled
  useEffect(() => {
    if (disabled && colorMode !== 'light') {
      setColorMode('light');
    }
  }, [disabled, colorMode, setColorMode]);

  if (disabled) {
    return null;
  }

  return (
    <ColorModeToggle
      className={className}
      buttonClassName={
        navbarStyle === 'dark' ? styles.darkNavbarColorModeToggle : undefined
      }
      value={colorMode}
      onChange={setColorMode}
    />
  );
}
