import React from 'react';
import Layout from '@theme-original/Layout';
import { useLocation } from '@docusaurus/router';
import '../../../src/css/apepro.css';

export default function LayoutWrapper(props) {
  const location = useLocation();
  const isApePro = location.pathname.includes('/apepro');
  
  return (
    <div data-section-id={isApePro ? 'apepro' : ''}>
      <Layout {...props} />
    </div>
  );
}