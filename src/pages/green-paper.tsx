import React, { useEffect, useState } from 'react';
import Link from '@docusaurus/Link';
import GradientText from '../components/GradientText';
import Layout from '@theme/Layout';
import { TweetCardProps } from 'react-tweet-card';
import BrowserOnly from '@docusaurus/BrowserOnly';
const tweetsJupPromise: TweetCardProps[] = [
  {
    author: {
      name: 'lightspeed mert | helius.xyz',
      username: '0xMert_',
      image:
        'https://pbs.twimg.com/profile_images/1642692955684352000/z-TxRMgD_400x400.jpg',
    },
    tweet: `Tbh, @JupiterExchange is the best aggregator in all of crypto`,
    time: new Date(2023, 3, 30, 2, 27),
    permalink: 'https://twitter.com/0xMert_/status/1652379023635365889?s=20',
  },
  {
    author: {
      name: 'Rehan',
      username: '@Mabrehan',
      image:
        'https://pbs.twimg.com/profile_images/1648968873289613319/G3AURQQr_400x400.jpg',
    },
    tweet: `Undeniably the best protocol in DeFi. Simple idea yet executed to perfection`,
    time: new Date(2023, 3, 15, 16, 1),
    permalink: 'https://twitter.com/Mabrehan/status/1647148241505632259?s=20',
  },
  {
    author: {
      name: 'LP Finance',
      username: 'LPFinance_',
      image:
        'https://pbs.twimg.com/profile_images/1633656696320008193/aN_It9YT_400x400.jpg',
    },
    tweet: `No Solana DeFi without Jupiter. Change my mind.`,
    time: new Date(2023, 3, 15, 10, 22),
    permalink:
      'https://twitter.com/LPFinance_/status/1647077905380278280?ref_src=twsrc%5Etfw',
  },
];
const tweetsCexReplacement: TweetCardProps[] = [
  {
    author: {
      name: 'ilmoi | Tensor 🎒⚡️',
      username: '_ilmoi',
      image:
        'https://pbs.twimg.com/profile_images/1636159954145910786/xecsPFkY_400x400.jpg',
    },
    tweet: `every time I use @JupiterExchange I have to pinch myself

this cannot possibly be onchain, this has got to be a CEX... the UX is INSANE`,
    time: new Date(2023, 3, 15, 10, 20),
    permalink: 'https://twitter.com/_ilmoi/status/1647077304638529536',
  },
  {
    author: {
      name: 'Noah 🔥💃 🎈',
      username: 'redacted_noah',
      image:
        'https://pbs.twimg.com/profile_images/1658481984820375554/eezCUMQ2_400x400.png',
    },
    tweet: `Fr. I prefer Jupiter to trading on CEX. And not even because of ideology it’s literally a better UX`,
    time: new Date(2023, 3, 15, 11, 16),
    permalink:
      'https://twitter.com/redacted_noah/status/1647091614026723328?ref_src=twsrc%5Etfw',
  },
  {
    author: {
      name: '◎☀️🎒',
      username: 'SolCS95',
      image:
        'https://pbs.twimg.com/profile_images/1649660167083167746/dLrwvu6Q_200x200.jpg',
    },
    tweet: `@aeyakovenko @JupiterExchange is incredible. Miles above anything else`,
    time: new Date(2023, 3, 17, 6, 50),
    permalink: 'https://twitter.com/SolCS95/status/1647734143525228544?s=20',
  },
  {
    author: {
      name: 'Netrunner - Portfolio Tools',
      username: 'NetrunnerNFT',
      image:
        'https://pbs.twimg.com/profile_images/1616532703108796416/9zuxs0RG_400x400.jpg',
    },
    tweet:
      "@JupiterExchange is the reason our 'swap' feature can exist. \n\nbuilding together on the ecosystem, what more could we ask for?",
    time: new Date(2023, 5, 20, 18, 25),
    permalink: 'https://twitter.com/netrunnernft/status/1671101933023821824',
  },
  {
    author: {
      name: '7Layer | Overclock Validator',
      username: '7LayerMagik',
      image:
        'https://pbs.twimg.com/profile_images/1677479168303325184/WiiRG23S_400x400.jpg',
    },
    tweet:
      "Try @JupiterExchange it's the best dex aggregator and possibly best UX in crypto",
    time: new Date(2023, 7, 3, 17, 11),
    permalink: 'https://twitter.com/7LayerMagik/status/1675610438057222144',
  },
  {
    author: {
      name: 'T.Yen🎈🎒🔥💃',
      username: 'Teck_jy',
      image:
        'https://pbs.twimg.com/profile_images/1611537765958823937/-wXWyQPP_400x400.jpg',
    },
    tweet: `That's awesome. I've been slowly migrating from various CEX to @JupiterExchange recently and it works quite well for me.

    Plenty of limit orders filled and more open orders awaiting!`,
    time: new Date(2023, 6, 17, 17, 21),
    permalink: 'https://twitter.com/Teck_jy/status/1669998720136675328',
  },
];
export default function Home(): JSX.Element {
  return (
    <div
      style={{
        background:
          'radial-gradient(50.42% 35.64% at 102.74% 101.94%, rgba(25, 197, 228, 0.38) 0%, rgba(25, 197, 228, 0) 100%), radial-gradient(131.41% 57.41% at 52.36% 23.89%, #060B09 0%, #050B08 51.81%, #0E2433 100%), #111726',
      }}
      className="home relative isolate  overflow-hidden pb-[390px] sm:pb-[250px]"
    >
      <div className="absolute hidden sm:flex z-[-1] w-full top-0 right-0">
        <img src="/img/home/header-bg.png" alt="" className="w-full" />
        <div className="absolute w-[16.6%] top-[12%] left-[69%]">
          <img src="/img/home/cat.png" alt="" className="cat" />
        </div>
      </div>

      <div className="absolute flex z-[-1] w-full overflow-hidden bottom-0 right-0">
        <img
          src="/img/home/footer-bg.png"
          alt=""
          className="h-[301px] w-full object-cover object-right"
        />
      </div>

      <Layout>
        <img src="/img/paper-banner.jpg" alt="" className="w-full" />

        <div className="relative isolate min-h-screen text-[#E8F9FF]/60 px-[44px]">
          <div className="mt-[-80px] max-w-content ml-auto mr-auto">
            <div className="border-2 border-black border-solid bg-white text-black p-10">
              <h1 className="text-center text-5xl font-medium">
                Jupiter Green Paper:
                <br />
                Growing The Pie
              </h1>
              <div className="mt-10 space-y-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  saepe voluptatum similique aut beatae molestiae magni veniam
                  repellendus rerum tempora facere pariatur natus architecto,
                  in, dolores debitis eligendi et numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  saepe voluptatum similique aut beatae molestiae magni veniam
                  repellendus rerum tempora facere pariatur natus architecto,
                  in, dolores debitis eligendi et numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  saepe voluptatum similique aut beatae molestiae magni veniam
                  repellendus rerum tempora facere pariatur natus architecto,
                  in, dolores debitis eligendi et numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  saepe voluptatum similique aut beatae molestiae magni veniam
                  repellendus rerum tempora facere pariatur natus architecto,
                  in, dolores debitis eligendi et numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  saepe voluptatum similique aut beatae molestiae magni veniam
                  repellendus rerum tempora facere pariatur natus architecto,
                  in, dolores debitis eligendi et numquam.
                </p>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  saepe voluptatum similique aut beatae molestiae magni veniam
                  repellendus rerum tempora facere pariatur natus architecto,
                  in, dolores debitis eligendi et numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  saepe voluptatum similique aut beatae molestiae magni veniam
                  repellendus rerum tempora facere pariatur natus architecto,
                  in, dolores debitis eligendi et numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  saepe voluptatum similique aut beatae molestiae magni veniam
                  repellendus rerum tempora facere pariatur natus architecto,
                  in, dolores debitis eligendi et numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  saepe voluptatum similique aut beatae molestiae magni veniam
                  repellendus rerum tempora facere pariatur natus architecto,
                  in, dolores debitis eligendi et numquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  saepe voluptatum similique aut beatae molestiae magni veniam
                  repellendus rerum tempora facere pariatur natus architecto,
                  in, dolores debitis eligendi et numquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
