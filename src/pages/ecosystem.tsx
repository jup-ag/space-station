import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import phantom from '/static/img/wallet/phantom.png';
import solflare from '/static/img/wallet/solflare.svg';
import ultimate from '/static/img/wallet/ultimate.png';
import brave from '/static/img/wallet/brave.png';
import coinbase from '/static/img/wallet/coinbase.png';
import glow from '/static/img/wallet/glow.svg';
import heywallet from '/static/img/wallet/heywallet.png';
import backpack from '/static/img/wallet/backpack.svg';
import frontier from '/static/img/wallet/frontier.svg';
import ottr from '/static/img/wallet/ottr.png';
import nightly from '/static/img/wallet/nightly.svg';

import birdeye from '/static/img/defi/birdeye.png';
import bonfida from '/static/img/defi/bonfida.svg';
import francium from '/static/img/defi/francium.png';
import sonar from '/static/img/defi/sonar.svg';
import hellomoon from '/static/img/defi/hellomoon.svg';
import kamino from '/static/img/defi/kamino.png';
import meandao from '/static/img/defi/meandao.png';
import portfinance from '/static/img/defi/portfinance.svg';
import tulip from '/static/img/defi/tulip.png';

import aldrin from '/static/img/dex_amm/aldrin.png';
import balansol from '/static/img/dex_amm/balansol.svg';
import crema from '/static/img/dex_amm/crema.svg';
import raydium from '/static/img/dex_amm/raydium.svg';
import cropper from '/static/img/dex_amm/cropper.svg';
import cykura from '/static/img/dex_amm/cykura.svg';
import dradex from '/static/img/dex_amm/dradex.png';
import goosefx from '/static/img/dex_amm/goosefx.png';
import dexlab from '/static/img/dex_amm/dexlab.svg';
import ellipsis from '/static/img/dex_amm/ellipsis.svg';
import invariant from '/static/img/dex_amm/invariant.svg';
import lifinity from '/static/img/dex_amm/lifinity.svg';
import mango from '/static/img/dex_amm/mango.svg';
import marcopolo from '/static/img/dex_amm/marcopolo.svg';
import marinade from '/static/img/dex_amm/marinade.png';
import meteora from '/static/img/dex_amm/meteora.png';
import openbook from '/static/img/dex_amm/openbook.png';
import orca from '/static/img/dex_amm/orca.svg';
import penguin from '/static/img/dex_amm/penguin.svg';
import saber from '/static/img/dex_amm/saber.svg';
import saros from '/static/img/dex_amm/saros.svg';
import stepfinance from '/static/img/dex_amm/stepfinance.svg';
import stepn from '/static/img/dex_amm/stepn.svg';


import rango from '/static/img/bridge/rango.png';
import allbridge from '/static/img/bridge/allbridge.svg';
import atlasdex from '/static/img/bridge/atlasdex.svg';
import wormhole from '/static/img/bridge/wormhole.png';
import mayan from '/static/img/bridge/mayan.png';

import aurory from '/static/img/game/aurory.jpg';
import defiland from '/static/img/game/defiland.svg';
import genopets from '/static/img/game/genopets.svg';
import staratlas from '/static/img/game/staratlas.png';

import candypay from '/static/img/payment/candypay.svg';
import helio from '/static/img/payment/helio.svg';

import famousfoxfederation from '/static/img/nft/famousfoxfederation.svg';
import hadeswap from '/static/img/nft/hadeswap.svg';
import hyperspace from '/static/img/nft/hyperspace.svg';
import liquifynft from '/static/img/nft/liquifynft.png';
import solsea from '/static/img/nft/solsea.svg';


const sections = [
  {
    id: 1,
    logo: 'https://reactnative.dev/img/meta_positive_primary.svg',
    description: `Wallets description`,
    cards: [
      {
        id: 1,
        title: 'Phantom',
        logo: phantom,
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
    logo: 'https://reactnative.dev/img/meta_positive_primary.svg',
    description: `DeFi description`,
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
    ],
  },
  {
    id: 3,
    logo: 'https://reactnative.dev/img/meta_positive_primary.svg',
    description: `DEXs & AMMs description`,
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
    logo: 'https://reactnative.dev/img/meta_positive_primary.svg',
    description: `Bridges description`,
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
    logo: 'https://reactnative.dev/img/meta_positive_primary.svg',
    description: `Games description`,
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
    logo: 'https://reactnative.dev/img/meta_positive_primary.svg',
    description: `Payments description`,
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
    logo: 'https://reactnative.dev/img/meta_positive_primary.svg',
    description: `NFTs description`,
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
                <div
                  key={card.id}
                  className="rounded-lg border border-solid border-gray-200 dark:border-gray-700 p-6 flex items-center flex-col"
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
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
