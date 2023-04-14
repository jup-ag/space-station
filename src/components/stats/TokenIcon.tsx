import * as React from 'react';
import { TokenInfo } from '@solana/spl-token-registry';
import WarningIcon from './WarningIcon';

const whitelistedImageUrls = [
  'raw.githubusercontent.com',
  'assets.coingecko.com',
];

const isUnknownToken = (tokenInfo: TokenInfo) => {
  return !tokenInfo.tags?.length;
};

interface ITokenIconProps {
  info: TokenInfo | undefined;
  width?: number;
  height?: number;
}

const TokenIcon: React.FunctionComponent<ITokenIconProps> = ({
  info,
  width = 32,
  height = 32,
}) => {
  const [hasError, setHasError] = React.useState(false);
  const imageUrl = React.useMemo(() => {
    try {
      return info?.logoURI ? new URL(info.logoURI) : undefined;
    } catch (error) {
      return undefined;
    }
  }, [info?.logoURI]);

  const isUnknown = React.useMemo(() => {
    if (info) {
      return isUnknownToken(info);
    }
  }, [info]);

  let ImageNode = React.useMemo(() => {
    if (!imageUrl || !info || hasError) {
      return (
        <img
          alt="unknown"
          src="/coins/unknown.svg"
          width={width}
          height={height}
        />
      );
    }

    if (whitelistedImageUrls.includes(imageUrl.host)) {
      return (
        <img
          className="rounded-full"
          alt={info.symbol}
          src={imageUrl.href}
          width={width}
          height={height}
          onError={() => {
            setHasError(true);
          }}
        />
      );
    }
    return (
      <img
        width={width}
        height={height}
        className="rounded-full"
        src={info.logoURI || ''}
        alt={info.symbol}
        onError={() => {
          setHasError(true);
        }}
      />
    );
  }, [info, hasError, imageUrl, width, height]);

  // not in the whitelisted domains, so we just use img tag
  return (
    <span className="relative">
      {ImageNode}
      {isUnknown && (
        <WarningIcon
          width={Math.max(width * 0.6, 16)}
          height={Math.max(height * 0.6, 16)}
          className="absolute -p-1 text-warning -bottom-[2px] -right-[5px]"
        />
      )}
    </span>
  );
};

export default TokenIcon;
