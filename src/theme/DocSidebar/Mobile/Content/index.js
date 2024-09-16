import React from 'react';
import MobileDocSidebar from '@theme-original/DocSidebar/Mobile';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';

function CustomBackButton() {
  return (
    <Link
      to="/guides/jupiter-swap/swap"
      className="button button--secondary"
      style={{
        display: 'block',
        width: 'calc(100% - 2rem)',
        margin: '1rem auto',
        textAlign: 'center',
        padding: '0.5rem 1rem',
      }}>
      Back to Guides
    </Link>
  );
}

export default function MobileDocSidebarWrapper(props) {
  const location = useLocation();
  
  if (location.pathname.startsWith('/features')) {
    return (
      <>
        <CustomBackButton />
        <MobileDocSidebar {...props} />
      </>
    );
  }
  
  return <MobileDocSidebar {...props} />;
}