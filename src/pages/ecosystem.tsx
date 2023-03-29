import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const sections = [
  {
    id: 1,
    logo: 'https://reactnative.dev/img/meta_positive_primary.svg',
    description: `React Native is shaping mobile, web, and desktop experiences within
    Meta’s product ecosystem, from Facebook Marketplace, Messenger
    Desktop, Ads Manager to the Oculus companion app and many more.`,
    cards: [
      {
        id: 1,
        title: 'Facebook',
        logo: 'https://d33wubrfki0l68.cloudfront.net/c9c752551d261695e8ef55e921ea7f2227872a41/cb3b3/img/showcase/facebook.webp',
        links: [
          {
            label: 'Android',
            url: '#',
          },
          {
            label: 'iOS',
            url: '#',
          },
        ],
      },
      {
        id: 2,
        title: 'Facebook Ads Manager',
        logo: 'https://d33wubrfki0l68.cloudfront.net/97f13157ef999d6608cc46116d73cbf4ec2e16f1/ec418/img/showcase/adsmanager.png',
        links: [
          {
            label: 'Android',
            url: '#',
          },
          {
            label: 'iOS',
            url: '#',
          },
        ],
      },
      {
        id: 3,
        title: 'Oculus',
        logo: 'https://d33wubrfki0l68.cloudfront.net/0cbb34b472a04fd1fff9a6f071d0a0bc928940ce/456cd/img/showcase/oculus.png',
        links: [
          {
            label: 'Android',
            url: '#',
          },
          {
            label: 'iOS',
            url: '#',
          },
        ],
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
                  <div className="mt-4 space-x-2 flex items-center">
                    {card.links.map((link) => (
                      <a className="underline" href={link.url}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
