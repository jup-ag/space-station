import React, { useState } from 'react';
import Layout from '@theme/Layout';

const wallet = '/img/wallet.png';
const defi = '/img/defi.png';
const dex_amm = '/img/dex_amm.png';
const bridge = '/img/bridge.png';
const payment = '/img/payment.png';
const nft = '/img/nft.png';
const game = '/img/game.png';

const phantom = '/img/wallet/phantom.png';
const solflare = '/img/wallet/solflare.svg';
const ultimate = '/img/wallet/ultimate.png';
const brave = '/img/wallet/brave.png';
const coinbase = '/img/wallet/coinbase.png';
const glow = '/img/wallet/glow.png';
const heywallet = '/img/wallet/heywallet.png';
const backpack = '/img/wallet/backpack.svg';
const frontier = '/img/wallet/frontier.svg';
const ottr = '/img/wallet/ottr.png';
const nightly = '/img/wallet/nightly.svg';
const keyapp = '/img/wallet/key.svg';

const birdeye = '/img/defi/birdeye.png';
const bonfida = '/img/defi/bonfida.png';
const francium = '/img/defi/francium.png';
const sonar = '/img/defi/sonar.png';
const hellomoon = '/img/defi/hellomoon.svg';
const kamino = '/img/defi/kamino.png';
const mean = '/img/defi/mean.svg';
const portfinance = '/img/defi/portfinance.svg';
const tulip = '/img/defi/tulip.png';

const aldrin = '/img/dex_amm/aldrin.png';
const balansol = '/img/dex_amm/balansol.svg';
const crema = '/img/dex_amm/crema.png';
const raydium = '/img/dex_amm/raydium.png';
const cropper = '/img/dex_amm/cropper.png';
const cykura = '/img/dex_amm/cykura.png';
const dradex = '/img/dex_amm/dradex.png';
const goosefx = '/img/dex_amm/goosefx.svg';
const dexlab = '/img/dex_amm/dexlab.png';
const ellipsis = '/img/dex_amm/ellipsislab.svg';
const invariant = '/img/dex_amm/invariant.svg';
const lifinity = '/img/dex_amm/lifinity.png';
const mango = '/img/dex_amm/mango.png';
const oasis = '/img/dex_amm/oasis.svg';
const marinade = '/img/dex_amm/marinade.png';
const meteora = '/img/dex_amm/meteora.png';
const openbook = '/img/dex_amm/openbook.png';
const orca = '/img/dex_amm/orca.png';
const penguin = '/img/dex_amm/penguin.png';
const saber = '/img/dex_amm/saber.png';
const saros = '/img/dex_amm/saros.png';
const stepfinance = '/img/dex_amm/stepfinance.png';
const stepn = '/img/dex_amm/stepn.svg';
const bonkswap = '/img/dex_amm/bonkswap.png';
const symmetry = '/img/dex_amm/symmetry.svg';

const rango = '/img/bridge/rango.png';
const allbridge = '/img/bridge/allbridge.svg';
const atlasdex = '/img/bridge/atlasdex.svg';
const wormhole = '/img/bridge/wormhole.svg';
const mayan = '/img/bridge/mayan.svg';

const aurory = '/img/game/aurory.jpg';
const defiland = '/img/game/defiland.png';
const genopets = '/img/game/genopets.png';
const staratlas = '/img/game/staratlas.svg';

const candypay = '/img/payment/candypay.svg';
const helio = '/img/payment/helio.svg';

const famousfoxfederation = '/img/nft/fff.png';
const hadeswap = '/img/nft/hadeswap.png';
const hyperspace = '/img/nft/hyperspace.svg';
const liquifynft = '/img/nft/liquifynft.svg';
const solsea = '/img/nft/solsea.svg';

const sections = [
  {
    id: 1,
    logo: wallet,
    title: 'Wallets',
    header: (
      <div className="relative mb-4">
        <img src={wallet} height={37} />
        <h2 className="absolute top-[4px] left-[40px]">Wallets</h2>
      </div>
    ),
    description: `DeFi wallets are a crucial tool for interacting with DeFi protocols in the Web3 ecosystem. They store and manage cryptocurrency assets and allow access to decentralized exchanges, lending platforms, and liquidity pools. Wallet partners have an in-wallet swap feature, like Jupiter, available on iOS, Android, and Web Widget platforms. This allow users to easily exchange cryptocurrencies within their wallet for the optimum price with seamless experience.`,
    cards: [
      {
        id: 1,
        title: 'Phantom',
        logo: phantom,
        link: 'https://phantom.app',
      },
      {
        id: 2,
        title: 'Solflare',
        logo: solflare,
        link: 'https://solflare.com/',
      },
      {
        id: 3,
        title: 'Glow Wallet',
        logo: glow,
        link: 'https://glow.app/',
      },
      {
        id: 4,
        title: 'Coinbase Wallet',
        logo: coinbase,
        link: 'https://www.coinbase.com/wallet',
      },
      {
        id: 5,
        title: 'Brave Wallet',
        logo: brave,
        link: 'https://brave.com/wallet/',
      },
      {
        id: 6,
        title: 'Hey Wallet',
        logo: heywallet,
        link: 'https://heywallet.com/',
      },
      {
        id: 7,
        title: 'Backpack',
        logo: backpack,
        link: 'https://www.backpack.app/',
      },
      {
        id: 8,
        title: 'Frontier Wallet',
        logo: frontier,
        link: 'https://www.frontier.xyz/',
      },
      {
        id: 9,
        title: 'Nightly',
        logo: nightly,
        link: 'https://wallet.nightly.app/',
      },
      {
        id: 10,
        title: 'Ultimate Wallet',
        logo: ultimate,
        link: 'https://ultimate.app/',
      },
      {
        id: 11,
        title: 'Ottr Finance',
        logo: ottr,
        link: 'https://ottr.finance/',
      },
      {
        id: 12,
        title: 'Key App',
        logo: keyapp,
        link: 'https://key.app/',
      },
    ],
  },
  {
    id: 2,
    logo: defi,
    title: 'DeFi',
    header: (
      <div className="relative mb-4">
        <img src={defi} height={37} />
        <h2 className="absolute top-[4px] left-[40px]">DeFi</h2>
      </div>
    ),
    description: `DeFi, or Decentralized Finance, is a financial system built on blockchain technology that uses cryptocurrencies and smart contracts for activities like lending, borrowing, and trading in a transparent and secure way. DeFi aims to provide more financial inclusion, transparency, and accessibility while reducing costs and eliminating central points of failure. It's an ever-changing space with new developments and applications being created constantly.`,
    cards: [
      {
        id: 1,
        title: 'Tulip',
        logo: tulip,
        link: 'https://tulip.garden/',
      },
      {
        id: 2,
        title: 'Sonar Watch',
        logo: sonar,
        link: 'https://sonar.watch/',
      },
      {
        id: 3,
        title: 'Port Finance',
        logo: portfinance,
        link: 'https://www.port.finance/',
      },
      {
        id: 4,
        title: 'Francium',
        logo: francium,
        link: 'https://francium.io/',
      },
      {
        id: 5,
        title: 'Birdeye',
        logo: birdeye,
        link: 'https://birdeye.so/',
      },
      {
        id: 6,
        title: 'HelloMoon',
        logo: hellomoon,
        link: 'https://www.hellomoon.io/',
      },
      {
        id: 7,
        title: 'Mean Finance',
        logo: mean,
        link: 'https://meanfi.com/',
      },
      {
        id: 10,
        title: 'Bonfida',
        logo: bonfida,
        link: 'https://bonfida.org/',
      },
      {
        id: 11,
        title: 'Kamino',
        logo: kamino,
        link: 'https://kamino.finance/',
      },
      {
        id: 12,
        title: 'Marinade Finance',
        logo: marinade,
        link: 'https://marinade.finance/',
      },
      {
        id: 13,
        title: 'Margin Fi',
        logo: kamino,
        link: 'https://www.marginfi.com/',
      },
      {
        id: 14,
        title: 'Step Finance',
        logo: stepfinance,
        link: 'https://www.step.finance/',
      },
    ],
  },
  {
    id: 3,
    logo: dex_amm,
    title: 'DEXes',
    header: (
      <div className="relative mb-4">
        <img src={dex_amm} height={37} />
        <h2 className="absolute top-[4px] left-[40px]">DEXes</h2>
      </div>
    ),
    description: `A decentralized exchange (DEX) is a cryptocurrency exchange where users trade directly with each other using smart contracts and blockchain technology, without intermediaries. DEXs provide users with greater control over their funds.
    Automated market makers (AMMs) are decentralized exchanges (DEXs) that use mathematical algorithms to automatically set prices and execute trades. Unlike traditional order-book exchanges, which rely on central limit order matching, AMMs use liquidity pools where users can deposit funds to facilitate trades. The algorithm automatically adjusts the price based on the supply and demand of assets in the pool.DEXs & AMMs description`,
    cards: [
      {
        id: 1,
        title: 'Orca',
        logo: orca,
        link: 'https://www.orca.so/',
      },
      {
        id: 2,
        title: 'Raydium',
        logo: raydium,
        link: 'https://raydium.io/',
      },
      {
        id: 3,
        title: 'GooseFX',
        logo: goosefx,
        link: 'https://goosefx.io/',
      },
      {
        id: 4,
        title: 'Aldrin',
        logo: aldrin,
        link: 'https://aldrin.com/',
      },
      {
        id: 5,
        title: 'Openbook',
        logo: openbook,
        link: 'https://www.openbook-solana.com/',
      },
      {
        id: 6,
        title: 'Meteora',
        logo: meteora,
        link: 'https://meteora.ag/',
      },
      {
        id: 7,
        title: 'Crema',
        logo: crema,
        link: 'https://www.crema.finance/',
      },
      {
        id: 8,
        title: 'Marinade',
        logo: marinade,
        link: 'https://marinade.finance/',
      },
      {
        id: 9,
        title: 'Saber',
        logo: saber,
        link: 'https://app.saber.so/',
      },
      {
        id: 10,
        title: 'Cykura',
        logo: cykura,
        link: 'https://cykura.io/',
      },
      {
        id: 11,
        title: 'Dradex',
        logo: dradex,
        link: 'https://www.dradex.io/',
      },
      {
        id: 12,
        title: 'Lifinity',
        logo: lifinity,
        link: 'https://lifinity.io/',
      },
      {
        id: 13,
        title: 'Dexlab',
        logo: dexlab,
        link: 'https://www.dexlab.space/',
      },
      {
        id: 14,
        title: 'Saros',
        logo: saros,
        link: 'https://saros.finance/',
      },
      {
        id: 15,
        title: 'Sentre - Balansol',
        logo: balansol,
        link: 'https://sentre.io/',
      },
      {
        id: 16,
        title: 'Invariant',
        logo: invariant,
        link: 'https://invariant.app/',
      },
      {
        id: 17,
        title: 'Penguin Finance',
        logo: penguin,
        link: 'https://png.fi/',
      },
      {
        id: 18,
        title: 'Oasis',
        logo: oasis,
        link: 'https://oasis.gobi.so/',
      },
      {
        id: 19,
        title: 'Cropper',
        logo: cropper,
        link: 'https://cropper.finance/',
      },
      {
        id: 20,
        title: 'StepN DOOAR',
        logo: stepn,
        link: 'https://stepn.com/',
      },
      {
        id: 21,
        title: 'Phoenix by Ellipsis',
        logo: ellipsis,
        link: 'https://ellipsislabs.xyz/',
      },
      {
        id: 22,
        title: 'Symmetry',
        logo: symmetry,
        link: 'https://www.symmetry.fi/',
      },
      {
        id: 23,
        title: 'Bonkswap',
        logo: bonkswap,
        link: 'https://www.bonkswap.io/',
      },
      {
        id: 23,
        title: 'Step Finance',
        logo: stepfinance,
        link: 'https://www.step.finance/',
      },
    ],
  },
  {
    id: 4,
    logo: bridge,
    title: 'Bridges',
    header: (
      <div className="relative mb-4">
        <img src={bridge} height={37} />
        <h2 className="absolute top-[4px] left-[40px]">Bridges</h2>
      </div>
    ),
    description: `Crypto bridges are platforms that allow users to exchange different cryptocurrencies across different blockchain networks. They enable seamless transfer of tokens or assets between ecosystems like Solana and Ethereum. Additionally, they promote liquidity and cross-chain communication between blockchains, creating an interconnected and efficient crypto ecosystem.`,
    cards: [
      {
        id: 1,
        title: 'Wormhole',
        logo: wormhole,
        link: 'https://wormhole.com/',
      },
      {
        id: 2,
        title: 'Allbridge',
        logo: allbridge,
        link: 'https://allbridge.io/',
      },
      {
        id: 3,
        title: 'AtlasDEX',
        logo: atlasdex,
        link: 'https://atlasdex.finance/',
      },
      {
        id: 4,
        title: 'Rango Exchange',
        logo: rango,
        link: 'https://rango.exchange/',
      },
      {
        id: 5,
        title: 'Mayan Finance',
        logo: mayan,
        link: 'https://mayan.finance/',
      },
    ],
  },
  {
    id: 5,
    logo: game,
    title: 'Games',
    header: (
      <div className="relative mb-4">
        <img src={game} height={37} />
        <h2 className="absolute top-[4px] left-[40px]">Games</h2>
      </div>
    ),
    description: `Web3 games is the use of cryptocurrencies or blockchain technology in online gaming. This allows for transparent, secure gameplay and ownership of in-game assets. Players can trade or sell these assets on decentralized marketplaces, and some platforms even offer opportunities to earn cryptocurrency while playing.`,
    cards: [
      {
        id: 1,
        title: 'Star Atlas',
        logo: staratlas,
        link: 'https://staratlas.com/',
      },
      {
        id: 2,
        title: 'Genopets',
        logo: genopets,
        link: 'https://www.genopets.me/',
      },
      {
        id: 3,
        title: 'Aurory',
        logo: aurory,
        link: 'https://aurory.io/',
      },
      {
        id: 4,
        title: 'Defi Land',
        logo: defiland,
        link: 'https://defiland.app/',
      },
    ],
  },
  {
    id: 6,
    logo: payment,
    title: 'Payment',
    header: (
      <div className="relative mb-4">
        <img src={payment} height={37} />
        <h2 className="absolute top-[4px] left-[40px]">Payment</h2>
      </div>
    ),
    description: `Crypto payments involve using cryptocurrencies, like stablecoins (e.g., USDC, USDT) or established tokens like Bitcoin and Ethereum, to pay for goods or services. Solana's fast, secure, and low-cost infrastructure has contributed to the rise in popularity of crypto payments on the platform. Jupiter is being integrated into crypto payments protocols to allow for the instant conversion of SPL tokens to fiat stablecoins, which can then be used to pay merchants directly.`,
    cards: [
      {
        id: 1,
        title: 'Helio',
        logo: helio,
        link: 'https://helio.co/',
      },
      {
        id: 2,
        title: 'CandyPay',
        logo: candypay,
        link: 'https://candypay.fun/',
      },
      // {
      //   id: 3,
      //   title: 'Sphere?',
      //   logo: 'https://d33wubrfki0l68.cloudfront.net/0cbb34b472a04fd1fff9a6f071d0a0bc928940ce/456cd/img/showcase/oculus.png',
      // },
    ],
  },
  {
    id: 7,
    logo: nft,
    title: 'NFTs',
    header: (
      <div className="relative mb-4">
        <img src={nft} height={37} />
        <h2 className="absolute top-[4px] left-[40px]">NFTs</h2>
      </div>
    ),
    description: `NFTs (Non-Fungible Tokens) marketplaces refer to online platforms where individuals can buy, sell, and trade unique digital assets represented as NFTs. NFTs are digital assets that are verified on a blockchain network and are used to represent unique digital items such as artwork, music, videos, and more.`,
    cards: [
      {
        id: 1,
        title: 'Hyperspace',
        logo: hyperspace,
        link: 'https://hyperspace.xyz/',
      },
      {
        id: 2,
        title: 'Hadeswap',
        logo: hadeswap,
        link: 'https://www.hadeswap.com/',
      },
      {
        id: 3,
        title: 'Solsea',
        logo: solsea,
        link: 'https://solsea.io/',
      },
      {
        id: 4,
        title: 'LiquifyNFT',
        logo: liquifynft,
        link: 'https://liquifynft.com/',
      },
      {
        id: 5,
        title: 'Famous Fox Federation',
        logo: famousfoxfederation,
        link: 'https://famousfoxes.com/',
      },
    ],
  },
];

const ButtonFilter = ({ children, active }) => (
  <button
    className={`
  flex
  cursor-pointer
  rounded-[30px]
  text-black/50
  font-light
  text-sm text-black px-4 py-2 border-solid
  border-gray-200 ml-2 ${active ? 'bg-black/5!' : 'bg-transparent'}`}
  >
    {children}
  </button>
);

export default function Home(): JSX.Element {
  const [selectedCat, setSelectedCat] = useState('all');
  const onSelectCat = (id: string) => {
    setSelectedCat(id);
  };

  return (
    <Layout
      title={`Show case`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="my-10 container mt-32 mb-28">
        <div className="mb-24">
          <div>
            <h1 className="font-extrabold text-6xl text-center">
              Jupiter Ecosystem
            </h1>
          </div>
          <div className="font-light text-base max-w-[570px] m-auto">
            <div className="text-center">
              Browse and search projects built on the Jupiter protocol. Are you
              building something cool?{' '}
              <a
                href="/docs/overview"
                className="underline text-black font-bold"
              >
                Getting Started
              </a>
            </div>
          </div>
        </div>
        <div className="container pl-0 mb-14">
          <h2 className="text-2xl font-bold text-black">Explore projects</h2>
          <div>
            <div role="list" className="powered-categoryes-wrap w-dyn-items">
              <div
                role="listitem"
                className="inline-block"
                onClick={() => onSelectCat('all')}
              >
                <ButtonFilter active={selectedCat === 'all'}>All</ButtonFilter>
              </div>
              {sections.map((section) => (
                <div
                  role="listitem"
                  className="inline-block"
                  onClick={() => onSelectCat(section.title)}
                >
                  <ButtonFilter active={selectedCat === section.title}>
                    {section.title}
                  </ButtonFilter>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-lg border min-h-[400px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {sections
                .filter((f) => selectedCat == 'all' || f.title === selectedCat)
                .map((section) =>
                  section.cards.flatMap((card) => (
                    <a
                      target="_blank"
                      id={`${card.id}`}
                      href={card.link}
                      key={card.id}
                      className="relative !no-underline rounded-lg border border-solid border-gray-200 dark:border-gray-700 flex items-center flex-col text-black"
                      rel="noreferrer"
                    >
                      <div
                        style={{
                          background:
                            'linear-gradient(rgba(0,0,0,.015),transparent)',
                          width: '100%',
                          padding: '20px 20px 8px',
                        }}
                        className="flex justify-center rounded-lg overflow-hidden transition duration-300"
                      >
                        <img
                          src={card.logo}
                          className="absolute scale-[1.38] opacity-[0.16] blur-[28px] rounded-[20px] h-[80px]"
                        />
                        <img
                          src={card.logo}
                          style={{
                            // boxShadow: '0 8px 16px hsla(0,0%,8%,.07)',
                            transition: 'transform .2s ease-in-out',
                            zIndex: 1,
                          }}
                          className="relative h-[80px] rounded-[20px] img-scale"
                        />
                      </div>
                      <h3 className="text-center mt-2 mb-4 text-lg font-bold opacity-80">
                        {card.title}
                      </h3>
                      {/* <div className="mt-4 space-x-2 flex items-center">
                    {card.links.map((link) => (
                      <a className="underline" href={link.url}>
                        {link.label}
                      </a>
                    ))}
                  </div> */}
                    </a>
                  ))
                )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
