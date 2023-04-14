import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Mode } from './types';
import { useQuery } from 'react-query';
import { formatNumber } from '@site/src/utils';

export type TradingData = {
  interval: string;
  x: string;
  volumeInUSD: {
    amount: string;
    groupTimestamp: string;
  }[];
  totalVolumeInUSD: string;
  lastXAddressesCount: number;
  lastXTransactionsCount: number;
  lastXRoutingsCount: number;
  lastXTopSell: {
    amount: string;
    symbol: string;
    mint: string;
  }[];
  lastXTopBuy: {
    amount: string;
    symbol: string;
    mint: string;
  }[];
  lastXTopTokens: {
    amount: string;
    symbol: string;
    mint: string;
  }[];
  lastXVolumeByAMMs: {
    amm: string;
    amount: string;
  }[];
  lastXVolumeByPairs: {
    [k: string]: string;
  };
  lastXVolumeByAddresses: {
    [k: string]: string;
  };
  lastXVolumeInUSD: string;
};

export default function useTradingInfo(mode: Mode) {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const data = useQuery<TradingData>(
    ['trading-info', mode],
    async () => {
      // Add a temporary revalidate, to make sure all browser refreshes
      const res = await fetch(`https://cache.jup.ag/stats/${mode}`);
      return await res.json();
    },
    {
      select: (data) => {
        return {
          ...data,
          volumeInUSD: (() => {
            if (mode === 'day') return data.volumeInUSD.slice(0, 21);
            if (mode === 'week') return data.volumeInUSD.slice(0, 14);
            return data.volumeInUSD;
          })(),
          totalVolumeInUSD: (() => {
            const total = data.totalVolumeInUSD;
            return formatNumber.format(Number(total), 0);
          })(),
        };
      },
    }
  );

  return data;
}
