import { ENV as ChainID } from '@solana/spl-token-registry';
import { TokenInfo, TokenListContainer } from '@solana/spl-token-registry';
import { useEffect, useState } from 'react';

declare module '@solana/spl-token-registry' {
  interface TokenExtensions {
    isBanned?: boolean;
  }
}

const isBannedToken = (tokenInfo: TokenInfo) => {
  return Boolean(tokenInfo.extensions?.isBanned);
};

const fetchAllMints = async (CUSTOM_COINS = []) => {
  const tokens = await fetch(
    // Jupiter is gonna use cache.jup.ag/all-tokens which is a list that include all tokens include unverified and banned
    new URL('all-tokens', 'https://cache.jup.ag').href
  ).then((res) => res.json());
  const res = new TokenListContainer(tokens);
  // @ts-ignore
  res.tokenList.push(...CUSTOM_COINS);
  const list = res.filterByChainId(ChainID.MainnetBeta).getList();
  // Process tokens list into tokenMap and knownSymbolTokenInfosMap
  const { knownMints } = list.reduce(
    (obj, item) => {
      const isBanned = isBannedToken(item);
      if (!isBanned) {
        // tokenMap
        obj.knownMints.set(item.address, item);
      }
      return obj;
    },
    {
      knownMints: new Map<string, TokenInfo>(),
    }
  );
  return {
    knownMints,
  };
};

export const useTokenMap = () => {
  const [tokenMap, setTokenMap] = useState(new Map<string, TokenInfo>());

  useEffect(() => {
    fetchAllMints().then((res) => {
      if (res.knownMints) {
        setTokenMap(res.knownMints);
      }
    });
  }, []);
  return { tokenMap };
};
