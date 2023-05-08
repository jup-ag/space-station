import Layout from '@theme/Layout';
import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

const ReactQueryClientProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default function StatsLayout({ children }) {
  return (
    <ReactQueryClientProvider>
      <div className="bg-jupiter-light dark:bg-inherit">
        <Layout title={`Stats`}>{children}</Layout>
      </div>
    </ReactQueryClientProvider>
  );
}
