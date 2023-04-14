import { TokenInfo } from '@solana/spl-token-registry';
import { useTokenMap } from './useTokenMap';

const useTokenMapByMint = () => {
  const { tokenMap } = useTokenMap();

  let tokenMapByMint: Record<string, TokenInfo> = {};

  tokenMap.forEach((value) => {
    tokenMapByMint[value.address] = value;
  });
  return tokenMapByMint;
};

export default useTokenMapByMint;
