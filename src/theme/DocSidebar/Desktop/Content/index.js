import React from 'react';
import Content from '@theme-original/DocSidebar/Desktop/Content';
import {useLocation} from '@docusaurus/router';
import Link from '@docusaurus/Link';

export default function ContentWrapper(props) {
  const location = useLocation();
  
  return (
    <>
      {location.pathname.startsWith('/features') && (
        <Link
          to="/guides/jupiter-swap/swap"
          className="button button--secondary">
          Back to Guides
        </Link>
      )}
      <Content {...props} />
    </>
  );
}
