import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import wallet from '/static/img/wallet.png';
import defi from '/static/img/defi.png';
import dex_amm from '/static/img/dex_amm.png';
import bridge from '/static/img/bridge.png';
import payment from '/static/img/payment.png';
import nft from '/static/img/nft.png';
import game from '/static/img/game.png';

import phantom from '/static/img/wallet/phantom.png';
import solflare from '/static/img/wallet/solflare.png';
import ultimate from '/static/img/wallet/ultimate.png';
import brave from '/static/img/wallet/brave.png';
import coinbase from '/static/img/wallet/coinbase.png';
import glow from '/static/img/wallet/glow.png';
import heywallet from '/static/img/wallet/heywallet.png';
import backpack from '/static/img/wallet/backpack.png';
import frontier from '/static/img/wallet/frontier.png';
import ottr from '/static/img/wallet/ottr.png';
import nightly from '/static/img/wallet/nightly.png';

import birdeye from '/static/img/defi/birdeye.png';
import bonfida from '/static/img/defi/bonfida.png';
import francium from '/static/img/defi/francium.png';
import sonar from '/static/img/defi/sonar.png';
import hellomoon from '/static/img/defi/hellomoon.png';
import kamino from '/static/img/defi/kamino.png';
import meandao from '/static/img/defi/meandao.png';
import portfinance from '/static/img/defi/portfinance.png';
import tulip from '/static/img/defi/tulip.png';

import aldrin from '/static/img/dex_amm/aldrin.png';
import balansol from '/static/img/dex_amm/balansol.png';
import crema from '/static/img/dex_amm/crema.png';
import raydium from '/static/img/dex_amm/raydium.png';
import cropper from '/static/img/dex_amm/cropper.png';
import cykura from '/static/img/dex_amm/cykura.png';
import dradex from '/static/img/dex_amm/dradex.png';
import goosefx from '/static/img/dex_amm/goosefx.png';
import dexlab from '/static/img/dex_amm/dexlab.png';
import ellipsis from '/static/img/dex_amm/ellipsis.png';
import invariant from '/static/img/dex_amm/invariant.png';
import lifinity from '/static/img/dex_amm/lifinity.png';
import mango from '/static/img/dex_amm/mango.png';
import marcopolo from '/static/img/dex_amm/marcopolo.png';
import marinade from '/static/img/dex_amm/marinade.png';
import meteora from '/static/img/dex_amm/meteora.png';
import openbook from '/static/img/dex_amm/openbook.png';
import orca from '/static/img/dex_amm/orca.png';
import penguin from '/static/img/dex_amm/penguin.png';
import saber from '/static/img/dex_amm/saber.png';
import saros from '/static/img/dex_amm/saros.png';
import stepfinance from '/static/img/dex_amm/stepfinance.png';
import stepn from '/static/img/dex_amm/stepn.png';

import rango from '/static/img/bridge/rango.png';
import allbridge from '/static/img/bridge/allbridge.png';
import atlasdex from '/static/img/bridge/atlasdex.png';
import wormhole from '/static/img/bridge/wormhole.png';
import mayan from '/static/img/bridge/mayan.png';

import aurory from '/static/img/game/aurory.png';
import defiland from '/static/img/game/defiland.png';
import genopets from '/static/img/game/genopets.png';
import staratlas from '/static/img/game/staratlas.png';

import candypay from '/static/img/payment/candypay.png';
import helio from '/static/img/payment/helio.png';

import famousfoxfederation from '/static/img/nft/fff.png';
import hadeswap from '/static/img/nft/hadeswap.png';
import hyperspace from '/static/img/nft/hyperspace.png';
import liquifynft from '/static/img/nft/liquifynft.png';
import solsea from '/static/img/nft/solsea.png';

const sections = [
  {
    id: 1,
    logo: wallet,
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
      },
      {
        id: 3,
        title: 'Glow Wallet',
        logo: glow,
      },
      {
        id: 4,
        title: 'Coinbase Wallet',
        logo: coinbase,
      },
      {
        id: 5,
        title: 'Brave Wallet',
        logo: brave,
      },
      {
        id: 6,
        title: 'Hey Wallet',
        logo: heywallet,
      },
      {
        id: 7,
        title: 'Backpack',
        logo: backpack,
      },
      {
        id: 8,
        title: 'Frontier Wallet',
        logo: frontier,
      },
      {
        id: 9,
        title: 'Nightly',
        logo: nightly,
      },
      {
        id: 10,
        title: 'Ultimate Wallet',
        logo: ultimate,
      },
      {
        id: 11,
        title: 'Ottr Finance',
        logo: ottr,
      },
    ],
  },
  {
    id: 2,
    logo: defi,
    description: `DeFi, or Decentralized Finance, is a financial system built on blockchain technology that uses cryptocurrencies and smart contracts for activities like lending, borrowing, and trading in a transparent and secure way. DeFi aims to provide more financial inclusion, transparency, and accessibility while reducing costs and eliminating central points of failure. It's an ever-changing space with new developments and applications being created constantly.`,
    cards: [
      {
        id: 1,
        title: 'Tulip',
        logo: tulip,
      },
      {
        id: 2,
        title: 'Sonar Watch',
        logo: sonar,
      },
      {
        id: 3,
        title: 'Port Finance',
        logo: portfinance,
      },
      {
        id: 4,
        title: 'Francium',
        logo: francium,
      },
      {
        id: 5,
        title: 'Birdeye',
        logo: birdeye,
      },
      {
        id: 6,
        title: 'HelloMoon',
        logo: hellomoon,
      },
      {
        id: 7,
        title: 'Mean Finance',
        logo: meandao,
      },
      {
        id: 10,
        title: 'Bonfida',
        logo: bonfida,
      },
      {
        id: 11,
        title: 'Kamino',
        logo: kamino,
      },
    ],
  },
  {
    id: 3,
    logo: dex_amm,
    description: `A decentralized exchange (DEX) is a cryptocurrency exchange where users trade directly with each other using smart contracts and blockchain technology, without intermediaries. DEXs provide users with greater control over their funds.
    Automated market makers (AMMs) are decentralized exchanges (DEXs) that use mathematical algorithms to automatically set prices and execute trades. Unlike traditional order-book exchanges, which rely on central limit order matching, AMMs use liquidity pools where users can deposit funds to facilitate trades. The algorithm automatically adjusts the price based on the supply and demand of assets in the pool.DEXs & AMMs description`,
    cards: [
      {
        id: 1,
        title: 'Orca',
        logo: orca,
      },
      {
        id: 2,
        title: 'Raydium',
        logo: raydium,
      },
      {
        id: 3,
        title: 'GooseFX',
        logo: goosefx,
      },
      {
        id: 4,
        title: 'Aldrin',
        logo: aldrin,
      },
      {
        id: 5,
        title: 'Openbook',
        logo: openbook,
      },
      {
        id: 6,
        title: 'Meteora',
        logo: meteora,
      },
      {
        id: 7,
        title: 'Crema',
        logo: crema,
      },
      {
        id: 8,
        title: 'Marinade',
        logo: marinade,
      },
      {
        id: 9,
        title: 'Saber',
        logo: saber,
      },
      {
        id: 10,
        title: 'Cykura',
        logo: cykura,
      },
      {
        id: 11,
        title: 'Dradex',
        logo: dradex,
      },
      {
        id: 12,
        title: 'Lifinity',
        logo: lifinity,
      },
      {
        id: 13,
        title: 'Dexlab',
        logo: dexlab,
      },
      {
        id: 14,
        title: 'Saros',
        logo: saros,
      },
      {
        id: 15,
        title: 'Sentre - Balansol',
        logo: balansol,
      },
      {
        id: 16,
        title: 'Invariant',
        logo: invariant,
      },
      {
        id: 17,
        title: 'Penguin Finance',
        logo: penguin,
      },
      {
        id: 18,
        title: 'Marco Polo',
        logo: marcopolo,
      },
      {
        id: 19,
        title: 'Cropper',
        logo: cropper,
      },
      {
        id: 20,
        title: 'StepN DOOAR',
        logo: stepn,
      },
      {
        id: 21,
        title: 'Phoenix by Ellipsis',
        logo: ellipsis,
      },
    ],
  },
  {
    id: 4,
    logo: bridge,
    description: `Crypto bridges are platforms that allow users to exchange different cryptocurrencies across different blockchain networks. They enable seamless transfer of tokens or assets between ecosystems like Solana and Ethereum. Additionally, they promote liquidity and cross-chain communication between blockchains, creating an interconnected and efficient crypto ecosystem.`,
    cards: [
      {
        id: 1,
        title: 'Wormhole',
        logo: wormhole,
      },
      {
        id: 2,
        title: 'Allbridge',
        logo: allbridge,
      },
      {
        id: 3,
        title: 'AtlasDEX',
        logo: atlasdex,
      },
      {
        id: 4,
        title: 'Rango Exchange',
        logo: rango,
      },
      {
        id: 5,
        title: 'Mayan Finance',
        logo: mayan,
      },
    ],
  },
  {
    id: 5,
    logo: game,
    description: `Web3 games is the use of cryptocurrencies or blockchain technology in online gaming. This allows for transparent, secure gameplay and ownership of in-game assets. Players can trade or sell these assets on decentralized marketplaces, and some platforms even offer opportunities to earn cryptocurrency while playing.`,
    cards: [
      {
        id: 1,
        title: 'Star Atlas',
        logo: staratlas,
      },
      {
        id: 2,
        title: 'Genopets',
        logo: genopets,
      },
      {
        id: 3,
        title: 'Aurory',
        logo: aurory,
      },
      {
        id: 4,
        title: 'Defi Land',
        logo: defiland,
      },
    ],
  },
  {
    id: 6,
    logo: payment,
    description: `Crypto payments involve using cryptocurrencies, like stablecoins (e.g., USDC, USDT) or established tokens like Bitcoin and Ethereum, to pay for goods or services. Solana's fast, secure, and low-cost infrastructure has contributed to the rise in popularity of crypto payments on the platform. Jupiter is being integrated into crypto payments protocols to allow for the instant conversion of SPL tokens to fiat stablecoins, which can then be used to pay merchants directly.`,
    cards: [
      {
        id: 1,
        title: 'Helio',
        logo: helio,
      },
      {
        id: 2,
        title: 'CandyPay',
        logo: candypay,
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
    description: `NFTs (Non-Fungible Tokens) marketplaces refer to online platforms where individuals can buy, sell, and trade unique digital assets represented as NFTs. NFTs are digital assets that are verified on a blockchain network and are used to represent unique digital items such as artwork, music, videos, and more.`,
    cards: [
      {
        id: 1,
        title: 'Hyperspace',
        logo: hyperspace,
      },
      {
        id: 2,
        title: 'Hadeswap',
        logo: hadeswap,
      },
      {
        id: 3,
        title: 'Solsea',
        logo: solsea,
      },
      {
        id: 4,
        title: 'LiquifyNFT',
        logo: liquifynft,
      },
      {
        id: 5,
        title: 'Famous Fox Federation',
        logo: famousfoxfederation,
      },
    ],
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Show case`}
      description="Description will go into a meta tag in <head />"
    >
      <div className="my-10 container space-y-10">
        {sections.map((section) => (
          <div
            key={section.id}
            className="rounded-lg border border-solid border-gray-200 dark:border-gray-700 p-9"
          >
            <img src={section.logo} width={140} />
            <p className="mt-4">{section.description}</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {section.cards.map((card) => (
                <a
                  target='_blank'
                  href={card.link}
                  key={card.id}
                  className="!no-underline rounded-lg border border-solid border-gray-200 dark:border-gray-700 p-6 flex items-center flex-col"
                  rel="noreferrer"
                >
                  <div className="flex rounded-lg overflow-hidden shadow-lg  hover:scale-105 transition duration-300">
                    <img
                      src={card.logo}
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-center mt-4 mb-0 text-lg opacity-80">
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
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
