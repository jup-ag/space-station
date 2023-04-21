import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import GradientText from '../components/GradientText';
import SolanaDiagram from '../components/SolanaDiagram';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';
import ComposabilityDiagram from '../components/ComposabilityDiagram';
import Logo from '../components/Logo';
import Layout from '@theme/Layout';

const navLinks = [
  {
    label: 'Stats',
    url: '/stats',
  },
  {
    label: 'Ecosystem',
    url: '/ecosystem',
  },
  {
    label: 'Documentation',
    url: '/docs/overview',
  },
  {
    label: 'Blog',
    url: '/blog',
  },
];
const linkSections = [
  {
    label: 'Statistic',
    url: 'https://jup.ag/stats',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        fill="none"
        viewBox="0 0 60 60"
      >
        <path
          fill="url(#paint0_linear_12548_144748)"
          d="M55.31 32.812A2.812 2.812 0 1052.497 30c.003.166.02.331.05.494l-8.531 4.885a2.7 2.7 0 00-2.51-.598l-3.496-5.239 6.014-7.23a2.771 2.771 0 003.614-1.687h5.032a2.812 2.812 0 100-1.875h-5.032a2.803 2.803 0 10-5.052 2.362l-5.665 6.804-1.868-2.8a2.782 2.782 0 00.57-1.679 2.813 2.813 0 00-5.625 0c.003.452.116.895.329 1.293l-4.594 4.955-8.238-8.72a2.77 2.77 0 00.316-1.278 2.806 2.806 0 00-5.453-.938h-4.86V6.014l2.378 2.376L11.2 7.063l-4.64-4.64-4.641 4.64L3.245 8.39l2.378-2.376v46.486h-3.75v1.875h3.75v3.75h1.875v-3.75h46.487l-2.377 2.377 1.325 1.326 4.64-4.64-4.64-4.64-1.325 1.326 2.377 2.377H7.498V20.624h4.86a2.788 2.788 0 003.776 1.63l8.318 8.812-2.71 2.917a2.812 2.812 0 00-3.436 4.172l-4.39 6.04h.001a2.742 2.742 0 00-.794-.134 2.812 2.812 0 102.317 1.219l4.389-6.04c.257.084.524.128.794.133a2.812 2.812 0 002.813-2.812 2.777 2.777 0 00-.33-1.293l2.636-2.84 2.7 2.86c-.207.392-.316.83-.319 1.273a2.813 2.813 0 005.625 0 2.788 2.788 0 00-.401-1.425l3.409-4.093 3.187 4.781a2.813 2.813 0 105.055 1.674 2.852 2.852 0 00-.05-.494l8.531-4.885c.507.445 1.157.69 1.831.692zm0-14.062a.938.938 0 110 1.875.938.938 0 010-1.875zm-10.313 0a.937.937 0 110 1.874.937.937 0 010-1.874zm-30.937.937a.938.938 0 111.875 0 .938.938 0 01-1.875 0zm-.938 28.125a.938.938 0 110-1.875.938.938 0 010 1.875zm7.5-10.313a.938.938 0 110-1.875.938.938 0 010 1.875zm12.188-15a.937.937 0 110 1.875.937.937 0 010-1.874zm-1.875 15a.938.938 0 110-1.875.938.938 0 010 1.875zm.974-3.562a2.718 2.718 0 00-2.11.06l-2.78-2.942 4.673-5.036a2.685 2.685 0 001.801.14l2.176 3.262-3.76 4.516zm23.4-4.875a.938.938 0 110 1.875.938.938 0 010-1.875zm-13.124 9.375a.938.938 0 110-1.875.938.938 0 010 1.875z"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_12548_144748"
            x1="90.5"
            x2="6.844"
            y1="44.5"
            y2="30.96"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#80C515"></stop>
            <stop offset="1" stopColor="#04B3BC"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: 'Ecosystem',
    url: '/ecosystem',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        fill="none"
        viewBox="0 0 60 60"
      >
        <path
          fill="url(#paint0_radial_12548_144752)"
          fillRule="evenodd"
          d="M34.688 7.969a4.688 4.688 0 00-9.328 0 23.436 23.436 0 00-13.425 37.889 4.63 4.63 0 00-.684 2.423 4.684 4.684 0 002.824 4.294c1.713.743 3.7.398 5.065-.877a23.435 23.435 0 0032.955-12.912A23.44 23.44 0 0034.688 7.968zM30 5.625a2.813 2.813 0 110 5.627 2.813 2.813 0 010-5.627zM15.937 51.094a2.813 2.813 0 110-5.627 2.813 2.813 0 010 5.627zM30 52.5a21.607 21.607 0 01-9.768-2.344 4.69 4.69 0 00-4.294-6.563 4.66 4.66 0 00-2.719.877A21.563 21.563 0 0125.53 9.843a4.687 4.687 0 008.943 0 21.56 21.56 0 0113.406 33.148A21.558 21.558 0 0130 52.5zm0-26.719a4.688 4.688 0 100 9.375 4.688 4.688 0 000-9.375zm0 7.5a2.813 2.813 0 110-5.626 2.813 2.813 0 010 5.626zm13.594-2.812c0 .883-.09 1.767-.263 2.634a4.688 4.688 0 01-4.866 8.002 13.596 13.596 0 01-11.5 2.616 13.596 13.596 0 01-9.209-19.156 13.592 13.592 0 0125.837 5.904zm-21.53-8.63a11.711 11.711 0 00-3.783 8.63h.001a11.719 11.719 0 0018.75 9.374 4.686 4.686 0 014.523-7.43A11.717 11.717 0 0022.064 21.84zm16.118 16.268a2.813 2.813 0 105.198-2.153 2.813 2.813 0 00-5.198 2.153z"
          clipRule="evenodd"
        ></path>
        <defs>
          <radialGradient
            id="paint0_radial_12548_144752"
            cx="0"
            cy="0"
            r="1"
            gradientTransform="matrix(-20.40362 22.29163 -27.73072 -25.38205 30.904 30.208)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#88CE1B"></stop>
            <stop offset="1" stopColor="#04B3BC"></stop>
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: 'Documentations',
    url: '/docs/overview',
    icon: (
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52.4251 58.6527H7.57268C5.89688 58.6527 4.37114 57.966 3.2672 56.8644C2.16332 55.7605 1.47656 54.237 1.47656 52.5589V2.54766C1.47656 1.88436 2.01328 1.34766 2.67656 1.34766H47.529C48.1923 1.34766 48.729 1.88437 48.729 2.54766V46.4647H52.4251C54.0657 46.4647 55.5634 47.1233 56.6602 48.1897L56.7305 48.2553C57.8344 49.3592 58.5212 50.8826 58.5212 52.5608C58.5212 54.2366 57.8345 55.7623 56.7305 56.8663C55.6219 57.9701 54.0985 58.6546 52.4251 58.6546L52.4251 58.6527ZM7.57268 48.8655C6.90938 48.8655 6.37268 48.3287 6.37268 47.6655C6.37268 47.0022 6.9094 46.4655 7.57268 46.4655H46.3291V3.75084H3.87908V52.5621C3.87908 53.5769 4.29627 54.5027 4.96424 55.1707C5.63222 55.8387 6.55796 56.2558 7.57286 56.2558H7.61974C8.5924 56.2441 9.47836 55.8504 10.1346 55.2222L10.1838 55.1707C10.8518 54.5027 11.269 53.5769 11.269 52.562C11.269 51.5472 10.8518 50.6214 10.1838 49.9534C9.51581 49.2831 8.59241 48.8683 7.57283 48.8683L7.57268 48.8655ZM10.6172 39.8841C9.9539 39.8841 9.4172 39.3473 9.4172 38.6841C9.4172 38.0208 9.95392 37.4841 10.6172 37.4841H39.5882C40.2515 37.4841 40.7882 38.0208 40.7882 38.6841C40.7882 39.3474 40.2515 39.8841 39.5882 39.8841H10.6172ZM10.6172 22.9808C9.9539 22.9808 9.4172 22.4441 9.4172 21.7808C9.4172 21.1176 9.95392 20.5808 10.6172 20.5808H39.5882C40.2515 20.5808 40.7882 21.1176 40.7882 21.7808C40.7882 22.4441 40.2515 22.9808 39.5882 22.9808H10.6172ZM10.6172 31.4324C9.9539 31.4324 9.4172 30.8957 9.4172 30.2324C9.4172 29.5692 9.95392 29.0324 10.6172 29.0324H39.5882C40.2515 29.0324 40.7882 29.5692 40.7882 30.2324C40.7882 30.8957 40.2515 31.4324 39.5882 31.4324H10.6172ZM10.6172 14.5292C9.9539 14.5292 9.4172 13.9925 9.4172 13.3292C9.4172 12.6659 9.95392 12.1292 10.6172 12.1292H39.5882C40.2515 12.1292 40.7882 12.666 40.7882 13.3292C40.7882 13.9925 40.2515 14.5292 39.5882 14.5292H10.6172ZM12.4149 56.2527H52.4253C53.4424 56.2527 54.3659 55.8378 55.0362 55.1698C55.7042 54.4995 56.119 53.5737 56.119 52.5589C56.119 51.544 55.7018 50.6182 55.0339 49.9503L54.9847 49.8987C54.319 49.2612 53.4167 48.8651 52.4253 48.8651H12.4149C13.2001 49.8916 13.6688 51.1737 13.6688 52.5588C13.6688 53.9439 13.2 55.2261 12.4149 56.2527Z"
          fill="url(#paint0_radial_12548_144760)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_12548_144760"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(53 101.5) rotate(-113.591) scale(86.2047 85.8102)"
          >
            <stop stop-color="#94D233" />
            <stop offset="1" stop-color="#04B3BC" />
          </radialGradient>
        </defs>
      </svg>
    ),
  },
  {
    label: 'Blog',
    url: '/blog',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        fill="none"
        viewBox="0 0 60 60"
      >
        <path
          fill="url(#paint0_linear_12548_144764)"
          fillRule="evenodd"
          d="M53.478 60H6.52A6.523 6.523 0 010 53.478V6.522A6.523 6.523 0 016.522 0h36.521a6.522 6.522 0 016.412 5.327 6.526 6.526 0 015.218 5.217 6.522 6.522 0 015.326 6.413v36.52A6.522 6.522 0 0153.478 60zM46.956 6.52v46.957a6.49 6.49 0 001.305 3.913H6.52a3.913 3.913 0 01-3.912-3.913V6.52a3.913 3.913 0 013.913-3.913h36.521a3.913 3.913 0 013.913 3.913zm2.609 46.957V8.05a3.914 3.914 0 012.608 3.69v41.738a1.304 1.304 0 002.609 0V13.266a3.914 3.914 0 012.609 3.69v36.522a3.913 3.913 0 11-7.826 0zM19.562 7.825h10.435a1.305 1.305 0 000-2.608H19.562a1.305 1.305 0 000 2.608zm24.786 6.522A3.908 3.908 0 0043.2 11.58a3.909 3.909 0 00-2.767-1.146H9.13a3.909 3.909 0 00-2.767 1.146 3.908 3.908 0 00-1.146 2.767v5.217c0 1.038.412 2.034 1.146 2.767a3.909 3.909 0 002.767 1.146h31.304a3.909 3.909 0 002.767-1.146 3.908 3.908 0 001.147-2.767v-5.217zm-2.609 0v5.217a1.301 1.301 0 01-1.305 1.304H9.13a1.301 1.301 0 01-1.304-1.304v-5.217a1.302 1.302 0 011.304-1.305h31.304a1.301 1.301 0 011.305 1.305zm1.303 14.348H16.955a1.305 1.305 0 010-2.61h26.087a1.305 1.305 0 010 2.61zM6.522 33.91h36.52a1.305 1.305 0 000-2.608H6.522a1.305 1.305 0 000 2.608zM22.173 44.35H6.52a1.305 1.305 0 010-2.609h15.652a1.305 1.305 0 010 2.609zM6.52 39.129h15.652a1.305 1.305 0 000-2.61H6.522a1.305 1.305 0 000 2.61zm37.825 1.307v10.435a3.913 3.913 0 01-3.913 3.913H30a3.913 3.913 0 01-3.913-3.913V40.436a3.913 3.913 0 013.913-3.913h10.434a3.913 3.913 0 013.913 3.913zm-2.608 10.435V40.436c0-.72-.585-1.304-1.305-1.304H30c-.72 0-1.304.584-1.304 1.304v10.435c0 .72.584 1.304 1.304 1.304h10.434c.72 0 1.305-.584 1.305-1.304zM6.52 49.566h15.652a1.305 1.305 0 000-2.609H6.522a1.305 1.305 0 000 2.609zm15.652 5.216H6.522a1.305 1.305 0 010-2.608h15.652a1.305 1.305 0 010 2.608zM6.522 28.695h5.218a1.305 1.305 0 000-2.61H6.52a1.305 1.305 0 000 2.61z"
          clipRule="evenodd"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_12548_144764"
            x1="84"
            x2="-11.903"
            y1="-9.5"
            y2="27.952"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#95DA29"></stop>
            <stop offset="1" stopColor="#04B3BC"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];
const jupSection = [
  {
    title: 'Jup Promise',
    description: `Anchor us to the value we want to deliver - Best Price, Best Token Selection, and Best UX for users and developers.
    Sticking to this promise, along with the relentless feedback and debugging help provided by our community of users and developers, has been crucial in helping us improve the platform and make significant progress on key objectives.`,
    items: [
      {
        label: 'Best Price',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 140 140"
          >
            <rect
              width="119.978"
              height="36.853"
              x="9.282"
              y="93.864"
              fill="url(#paint0_linear_12548_145303)"
              fillOpacity="0.15"
              rx="8.218"
            ></rect>
            <rect
              width="119.978"
              height="36.853"
              x="9.282"
              y="93.864"
              stroke="url(#paint1_linear_12548_145303)"
              strokeWidth="1.064"
              rx="8.218"
            ></rect>
            <rect
              width="119.978"
              height="36.853"
              x="9.282"
              y="93.864"
              stroke="url(#paint2_linear_12548_145303)"
              strokeOpacity="0.2"
              strokeWidth="1.064"
              rx="8.218"
            ></rect>
            <rect
              width="119.978"
              height="36.853"
              x="9.282"
              y="6.364"
              fill="url(#paint3_linear_12548_145303)"
              fillOpacity="0.15"
              rx="8.218"
            ></rect>
            <rect
              width="119.978"
              height="36.853"
              x="9.282"
              y="6.364"
              stroke="url(#paint4_linear_12548_145303)"
              strokeWidth="1.064"
              rx="8.218"
            ></rect>
            <rect
              width="119.978"
              height="36.853"
              x="9.282"
              y="6.364"
              stroke="url(#paint5_linear_12548_145303)"
              strokeOpacity="0.2"
              strokeWidth="1.064"
              rx="8.218"
            ></rect>
            <rect
              width="118.914"
              height="35.789"
              x="9.814"
              y="50.646"
              fill="url(#paint6_linear_12548_145303)"
              stroke="url(#paint7_linear_12548_145303)"
              strokeWidth="2.127"
              rx="7.686"
            ></rect>
            <rect
              width="33.542"
              height="2.917"
              x="86.041"
              y="67.082"
              fill="#000"
              fillOpacity="0.25"
              rx="1.458"
            ></rect>
            <rect
              width="33.542"
              height="2.917"
              x="86.041"
              y="23.332"
              fill="#000"
              fillOpacity="0.25"
              rx="1.458"
            ></rect>
            <rect
              width="33.542"
              height="2.917"
              x="86.041"
              y="110.832"
              fill="#000"
              fillOpacity="0.25"
              rx="1.458"
            ></rect>
            <g clipPath="url(#clip0_12548_145303)">
              <circle cx="27.605" cy="68.437" r="10.105" fill="#000"></circle>
              <g clipPath="url(#clip1_12548_145303)">
                <path
                  fill="url(#paint8_linear_12548_145303)"
                  d="M22.597 71.482a.486.486 0 01.344-.142h11.854c.216 0 .325.261.172.414l-2.342 2.342a.486.486 0 01-.344.142H20.427a.243.243 0 01-.172-.415l2.342-2.341z"
                ></path>
                <path
                  fill="url(#paint9_linear_12548_145303)"
                  d="M22.597 62.738a.5.5 0 01.344-.142h11.854c.216 0 .325.261.172.414l-2.342 2.342a.486.486 0 01-.344.142H20.427a.243.243 0 01-.172-.415l2.342-2.341z"
                ></path>
                <path
                  fill="url(#paint10_linear_12548_145303)"
                  d="M32.625 67.081a.486.486 0 00-.344-.142H20.427a.243.243 0 00-.172.415l2.342 2.342c.09.09.213.142.344.142h11.854a.243.243 0 00.172-.415l-2.342-2.342z"
                ></path>
              </g>
            </g>
            <circle
              cx="28.438"
              cy="24.063"
              r="9.479"
              fill="#000"
              fillOpacity="0.1"
            ></circle>
            <circle
              cx="28.438"
              cy="111.563"
              r="9.479"
              fill="#000"
              fillOpacity="0.1"
            ></circle>
            <defs>
              <linearGradient
                id="paint0_linear_12548_145303"
                x1="117.44"
                x2="64.406"
                y1="101.949"
                y2="172.284"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C7F284"></stop>
                <stop offset="1" stopColor="#00BEF0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_12548_145303"
                x1="78.349"
                x2="68.697"
                y1="49.096"
                y2="126.38"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E7C026"></stop>
                <stop offset="1" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_12548_145303"
                x1="100.288"
                x2="57.623"
                y1="85.207"
                y2="232.309"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#85BCA2"></stop>
                <stop offset="1" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_12548_145303"
                x1="117.44"
                x2="64.406"
                y1="14.45"
                y2="84.784"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C7F284"></stop>
                <stop offset="1" stopColor="#00BEF0"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_12548_145303"
                x1="69.271"
                x2="49.988"
                y1="119.582"
                y2="-19.563"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#E7C026"></stop>
                <stop offset="1" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_12548_145303"
                x1="122.983"
                x2="69"
                y1="47.36"
                y2="7.23"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#85BCA2"></stop>
                <stop offset="1" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint6_linear_12548_145303"
                x1="117.44"
                x2="64.406"
                y1="58.2"
                y2="128.534"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C7F284"></stop>
                <stop offset="1" stopColor="#00BEF0"></stop>
              </linearGradient>
              <linearGradient
                id="paint7_linear_12548_145303"
                x1="117.44"
                x2="64.406"
                y1="58.2"
                y2="128.534"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C7F284"></stop>
                <stop offset="1" stopColor="#00BEF0"></stop>
              </linearGradient>
              <linearGradient
                id="paint8_linear_12548_145303"
                x1="33.663"
                x2="25.458"
                y1="61.198"
                y2="76.912"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3"></stop>
                <stop offset="1" stopColor="#DC1FFF"></stop>
              </linearGradient>
              <linearGradient
                id="paint9_linear_12548_145303"
                x1="30.075"
                x2="21.871"
                y1="59.324"
                y2="75.038"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3"></stop>
                <stop offset="1" stopColor="#DC1FFF"></stop>
              </linearGradient>
              <linearGradient
                id="paint10_linear_12548_145303"
                x1="31.857"
                x2="23.653"
                y1="60.255"
                y2="75.969"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00FFA3"></stop>
                <stop offset="1" stopColor="#DC1FFF"></stop>
              </linearGradient>
              <clipPath id="clip0_12548_145303">
                <path
                  fill="#fff"
                  d="M0 0H20.211V20.211H0z"
                  transform="translate(17.5 58.332)"
                ></path>
              </clipPath>
              <clipPath id="clip1_12548_145303">
                <path
                  fill="#fff"
                  d="M0 0H14.853V11.641H0z"
                  transform="translate(20.184 62.596)"
                ></path>
              </clipPath>
            </defs>
          </svg>
        ),
      },
      {
        label: 'Best UX',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 141 140"
          >
            <g clipPath="url(#clip0_12548_145306)">
              <rect
                width="128.333"
                height="128.333"
                x="6.334"
                y="5.834"
                fill="#fff"
                fillOpacity="0.1"
                rx="11.667"
              ></rect>
              <g filter="url(#filter0_bd_12548_145306)">
                <rect
                  width="100.625"
                  height="27.708"
                  x="19.459"
                  y="100.627"
                  fill="#000"
                  rx="5.833"
                ></rect>
              </g>
              <rect
                width="33.542"
                height="2.917"
                x="53.73"
                y="113.752"
                fill="#fff"
                fillOpacity="0.35"
                rx="1.458"
              ></rect>
              <rect
                width="115.208"
                height="75.833"
                x="12.897"
                y="12.397"
                fill="#fff"
                fillOpacity="0.1"
                stroke="url(#paint0_linear_12548_145306)"
                strokeWidth="1.458"
                rx="10.938"
              ></rect>
              <rect
                width="99.167"
                height="26.25"
                x="20.188"
                y="22.606"
                fill="#fff"
                fillOpacity="0.1"
                stroke="url(#paint1_linear_12548_145306)"
                strokeWidth="1.458"
                rx="5.104"
              ></rect>
              <rect
                width="100.625"
                height="27.708"
                x="19.459"
                y="53.959"
                fill="#000"
                fillOpacity="0.25"
                rx="5.833"
              ></rect>
              <g filter="url(#filter1_f_12548_145306)" opacity="0.43">
                <ellipse
                  cx="69.043"
                  cy="115.209"
                  fill="url(#paint2_linear_12548_145306)"
                  rx="50.313"
                  ry="13.125"
                ></ellipse>
              </g>
              <rect
                width="23.333"
                height="2.917"
                x="26.752"
                y="35.002"
                fill="#fff"
                fillOpacity="0.25"
                rx="1.458"
              ></rect>
              <rect
                width="33.542"
                height="2.917"
                x="80.709"
                y="35.002"
                fill="#fff"
                fillOpacity="0.35"
                rx="1.458"
              ></rect>
              <path
                stroke="#000"
                strokeOpacity="0.2"
                strokeWidth="1.458"
                d="M133.938 0L133.938 140"
              ></path>
              <path
                stroke="#000"
                strokeOpacity="0.2"
                strokeWidth="1.458"
                d="M119.354 0L119.354 140"
              ></path>
              <path
                stroke="#000"
                strokeOpacity="0.2"
                strokeWidth="1.458"
                d="M7.063 0L7.063 140"
              ></path>
              <path
                stroke="#000"
                strokeOpacity="0.2"
                strokeWidth="1.458"
                d="M20.188 0L20.188 140"
              ></path>
              <path
                stroke="#000"
                strokeOpacity="0.2"
                strokeWidth="1.458"
                d="M140.5 99.895L0.5 99.895"
              ></path>
              <path
                stroke="#000"
                strokeOpacity="0.2"
                strokeWidth="1.458"
                d="M140.5 88.229L0.5 88.229"
              ></path>
              <path
                stroke="#000"
                strokeOpacity="0.2"
                strokeWidth="1.458"
                d="M140.5 129.063L0.5 129.063"
              ></path>
              <path
                stroke="#000"
                strokeOpacity="0.2"
                strokeWidth="1.458"
                d="M140.5 12.395L0.5 12.395"
              ></path>
              <path
                stroke="#000"
                strokeOpacity="0.2"
                strokeWidth="1.458"
                d="M140.5 133.438L-0.958 133.438"
              ></path>
            </g>
            <defs>
              <filter
                id="filter0_bd_12548_145306"
                width="217.292"
                height="144.376"
                x="-38.874"
                y="71.46"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="14.583"
                ></feGaussianBlur>
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_12548_145306"
                ></feComposite>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="29.167"></feOffset>
                <feGaussianBlur stdDeviation="29.167"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                <feBlend
                  in2="effect1_backgroundBlur_12548_145306"
                  result="effect2_dropShadow_12548_145306"
                ></feBlend>
                <feBlend
                  in="SourceGraphic"
                  in2="effect2_dropShadow_12548_145306"
                  result="shape"
                ></feBlend>
              </filter>
              <filter
                id="filter1_f_12548_145306"
                width="150.208"
                height="75.833"
                x="-6.061"
                y="77.292"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_12548_145306"
                  stdDeviation="12.396"
                ></feGaussianBlur>
              </filter>
              <linearGradient
                id="paint0_linear_12548_145306"
                x1="60.293"
                x2="-12.963"
                y1="264.689"
                y2="-23.841"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_12548_145306"
                x1="109.816"
                x2="72.689"
                y1="28.174"
                y2="84.187"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C7F284"></stop>
                <stop offset="1" stopColor="#00BEF0"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_12548_145306"
                x1="109.088"
                x2="74.69"
                y1="108.05"
                y2="162.829"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C7F284"></stop>
                <stop offset="1" stopColor="#00BEF0"></stop>
              </linearGradient>
              <clipPath id="clip0_12548_145306">
                <path
                  fill="#fff"
                  d="M0 0H140V140H0z"
                  transform="translate(.5)"
                ></path>
              </clipPath>
            </defs>
          </svg>
        ),
      },
      {
        label: 'Best Selection',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 140 140"
          >
            <g clipPath="url(#clip0_12548_145309)">
              <g
                filter="url(#filter0_b_12548_145309)"
                transform="rotate(13.056 74.52 56.875)"
              >
                <rect
                  width="42.292"
                  height="39.375"
                  x="74.519"
                  y="56.875"
                  fill="#000"
                  fillOpacity="0.1"
                  rx="8.75"
                ></rect>
                <rect
                  width="42.292"
                  height="39.375"
                  x="74.519"
                  y="56.875"
                  fill="url(#paint0_linear_12548_145309)"
                  fillOpacity="0.2"
                  rx="8.75"
                ></rect>
              </g>
              <g
                filter="url(#filter1_b_12548_145309)"
                transform="rotate(-10.58 18.959 51.514)"
              >
                <rect
                  width="42.292"
                  height="39.375"
                  x="18.959"
                  y="51.514"
                  fill="#000"
                  fillOpacity="0.1"
                  rx="8.75"
                ></rect>
                <rect
                  width="42.292"
                  height="39.375"
                  x="18.959"
                  y="51.514"
                  fill="url(#paint1_linear_12548_145309)"
                  fillOpacity="0.2"
                  rx="8.75"
                ></rect>
              </g>
              <g filter="url(#filter2_b_12548_145309)">
                <rect
                  width="42.292"
                  height="39.375"
                  x="83.125"
                  y="94.094"
                  fill="#000"
                  fillOpacity="0.1"
                  rx="8.75"
                  transform="rotate(-10.976 83.125 94.094)"
                ></rect>
              </g>
              <g filter="url(#filter3_b_12548_145309)">
                <rect
                  width="42.292"
                  height="39.375"
                  x="8.105"
                  y="93.334"
                  fill="#000"
                  fillOpacity="0.1"
                  rx="8.75"
                  transform="rotate(1.187 8.105 93.334)"
                ></rect>
              </g>
              <g filter="url(#filter4_f_12548_145309)">
                <path
                  fill="url(#paint2_linear_12548_145309)"
                  d="M94.791 129.062L94.083 17.5 46.666 33.389v95.673h48.125z"
                ></path>
              </g>
              <g
                filter="url(#filter5_bd_12548_145309)"
                shapeRendering="crispEdges"
              >
                <rect
                  width="43.75"
                  height="40.833"
                  x="54.047"
                  fill="url(#paint3_linear_12548_145309)"
                  fillOpacity="0.1"
                  rx="8.75"
                  transform="rotate(14.605 54.047 0)"
                ></rect>
                <rect
                  width="42.292"
                  height="39.375"
                  x="54.569"
                  y="0.889"
                  stroke="url(#paint4_linear_12548_145309)"
                  strokeWidth="1.458"
                  rx="8.021"
                  transform="rotate(14.605 54.569 .89)"
                ></rect>
              </g>
              <g
                style={{ mixBlendMode: 'screen' }}
                filter="url(#filter6_f_12548_145309)"
              >
                <ellipse
                  cx="91.147"
                  cy="39.376"
                  fill="#FBA43A"
                  fillOpacity="0.7"
                  rx="6.563"
                  ry="29.167"
                ></ellipse>
              </g>
              <g
                style={{ mixBlendMode: 'screen' }}
                filter="url(#filter7_f_12548_145309)"
              >
                <ellipse
                  cx="49.584"
                  cy="67.812"
                  fill="#6FE0E2"
                  fillOpacity="0.5"
                  rx="4.375"
                  ry="38.646"
                ></ellipse>
              </g>
              <g
                style={{ mixBlendMode: 'screen' }}
                filter="url(#filter8_f_12548_145309)"
              >
                <path
                  stroke="url(#paint5_linear_12548_145309)"
                  strokeWidth="1.458"
                  d="M94.063 18.959L94.063 123.959"
                ></path>
              </g>
              <g
                style={{ mixBlendMode: 'screen' }}
                filter="url(#filter9_f_12548_145309)"
              >
                <path
                  stroke="url(#paint6_linear_12548_145309)"
                  strokeWidth="1.458"
                  d="M78.02 48.125L78.02 123.958"
                ></path>
              </g>
              <g
                style={{ mixBlendMode: 'screen' }}
                filter="url(#filter10_f_12548_145309)"
              >
                <path
                  stroke="url(#paint7_linear_12548_145309)"
                  strokeWidth="1.458"
                  d="M59.063 42.291L59.063 122.499"
                ></path>
              </g>
              <g fill="#C7F284" filter="url(#filter11_f_12548_145309)">
                <circle cx="114.477" cy="41.563" r="0.729"></circle>
                <circle cx="57.602" cy="91.145" r="0.729"></circle>
                <circle cx="107.186" cy="86.77" r="0.729"></circle>
                <circle cx="40.102" cy="66.354" r="0.729"></circle>
                <circle cx="15.311" cy="95.52" r="0.729"></circle>
                <circle cx="99.165" cy="52.499" r="1.458"></circle>
                <circle cx="36.456" cy="23.333" r="1.458"></circle>
              </g>
            </g>
            <defs>
              <filter
                id="filter0_b_12548_145309"
                width="61.179"
                height="58.997"
                x="60.081"
                y="51.331"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="3.646"
                ></feGaussianBlur>
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_12548_145309"
                ></feComposite>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_12548_145309"
                  result="shape"
                ></feBlend>
              </filter>
              <filter
                id="filter1_b_12548_145309"
                width="60.472"
                height="58.142"
                x="13.124"
                y="37.913"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="3.646"
                ></feGaussianBlur>
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_12548_145309"
                ></feComposite>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_12548_145309"
                  result="shape"
                ></feBlend>
              </filter>
              <filter
                id="filter2_b_12548_145309"
                width="60.589"
                height="58.281"
                x="77.337"
                y="80.255"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="3.646"
                ></feGaussianBlur>
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_12548_145309"
                ></feComposite>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_12548_145309"
                  result="shape"
                ></feBlend>
              </filter>
              <filter
                id="filter3_b_12548_145309"
                width="57.324"
                height="54.466"
                x="0.177"
                y="86.222"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="3.646"
                ></feGaussianBlur>
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_12548_145309"
                ></feComposite>
                <feBlend
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_12548_145309"
                  result="shape"
                ></feBlend>
              </filter>
              <filter
                id="filter4_f_12548_145309"
                width="51.042"
                height="114.479"
                x="45.208"
                y="16.042"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_12548_145309"
                  stdDeviation="0.729"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter5_bd_12548_145309"
                width="128.789"
                height="126.703"
                x="5.672"
                y="-18.078"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="10"
                ></feGaussianBlur>
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_12548_145309"
                ></feComposite>
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset dy="20"></feOffset>
                <feGaussianBlur stdDeviation="20"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
                <feBlend
                  in2="effect1_backgroundBlur_12548_145309"
                  result="effect2_dropShadow_12548_145309"
                ></feBlend>
                <feBlend
                  in="SourceGraphic"
                  in2="effect2_dropShadow_12548_145309"
                  result="shape"
                ></feBlend>
              </filter>
              <filter
                id="filter6_f_12548_145309"
                width="48.125"
                height="93.334"
                x="67.084"
                y="-7.291"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_12548_145309"
                  stdDeviation="8.75"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter7_f_12548_145309"
                width="43.75"
                height="112.291"
                x="27.709"
                y="11.666"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_12548_145309"
                  stdDeviation="8.75"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter8_f_12548_145309"
                width="13.126"
                height="116.667"
                x="87.501"
                y="13.126"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_12548_145309"
                  stdDeviation="2.917"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter9_f_12548_145309"
                width="13.126"
                height="87.501"
                x="71.458"
                y="42.292"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_12548_145309"
                  stdDeviation="2.917"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter10_f_12548_145309"
                width="13.126"
                height="91.876"
                x="52.501"
                y="36.458"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_12548_145309"
                  stdDeviation="2.917"
                ></feGaussianBlur>
              </filter>
              <filter
                id="filter11_f_12548_145309"
                width="106.458"
                height="80.208"
                x="11.665"
                y="18.958"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feBlend
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                ></feBlend>
                <feGaussianBlur
                  result="effect1_foregroundBlur_12548_145309"
                  stdDeviation="1.458"
                ></feGaussianBlur>
              </filter>
              <linearGradient
                id="paint0_linear_12548_145309"
                x1="79.351"
                x2="97.315"
                y1="55.755"
                y2="91.26"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_12548_145309"
                x1="51.883"
                x2="42.944"
                y1="57.924"
                y2="85.925"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset="1" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_12548_145309"
                x1="72.852"
                x2="72.852"
                y1="-12.833"
                y2="102.083"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#19C5E4"></stop>
                <stop offset="1" stopColor="#C7F284" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_12548_145309"
                x1="57.655"
                x2="97.71"
                y1="-10.208"
                y2="-5.092"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FAA43A"></stop>
                <stop offset="1" stopColor="#71E5ED"></stop>
              </linearGradient>
              <linearGradient
                id="paint4_linear_12548_145309"
                x1="93.333"
                x2="49.194"
                y1="9.28"
                y2="28.927"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C7F284"></stop>
                <stop offset="1" stopColor="#00BEF0"></stop>
              </linearGradient>
              <linearGradient
                id="paint5_linear_12548_145309"
                x1="92.334"
                x2="92.334"
                y1="24.063"
                y2="112.292"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFDADA"></stop>
                <stop offset="1" stopColor="#FFDADA" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint6_linear_12548_145309"
                x1="76.291"
                x2="76.291"
                y1="51.811"
                y2="115.532"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#75C5DA"></stop>
                <stop offset="1" stopColor="#74C2D2" stopOpacity="0"></stop>
              </linearGradient>
              <linearGradient
                id="paint7_linear_12548_145309"
                x1="57.334"
                x2="57.334"
                y1="46.19"
                y2="113.587"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B3C47C"></stop>
                <stop offset="1" stopColor="#74C2D2" stopOpacity="0"></stop>
              </linearGradient>
              <clipPath id="clip0_12548_145309">
                <path fill="#fff" d="M0 0H140V140H0z"></path>
              </clipPath>
            </defs>
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Jup Spirit',
    description: `The guiding force behind our community as we work together to bring decentralized liquidity to everyone. It captures the essence of being there for Jupiter in the most helpful and genuine way.
    the JUP Spirit of Most Vocal, Most Critical and Most Long-Term is a rallying cry to create one of the most active and helpful communities around!`,

    items: [
      {
        label: 'Most Vocal',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 140 140"
          >
            <rect width="140" height="140" fill="#F9FDFF" rx="24"></rect>
            <rect
              width="140"
              height="140"
              fill="url(#paint0_linear_12551_145800)"
              rx="24"
            ></rect>
            <g clipPath="url(#clip0_12551_145800)">
              <path
                fill="url(#paint1_linear_12551_145800)"
                d="M36.202 67.538l11.563-3.652c.83-.317 15.236-6.007 25.55-22.205a4.875 4.875 0 018.761 1.144l14.682 46.487a4.875 4.875 0 01-6.514 5.971c-13.881-5.739-26.112-4.777-31.2-3.982l2.91 9.216a4.878 4.878 0 01-.845 4.527l-2.524 3.139a4.882 4.882 0 01-4.092 1.814 4.872 4.872 0 01-3.847-2.288L43.156 95.9a14.625 14.625 0 01-6.954-28.362zm18.57 37.555l.01.031 2.524-3.139-2.998-9.492-6.276 1.983 6.74 10.617zm-11.23-14.312l9.298-2.936-5.873-18.595-9.297 2.936a9.75 9.75 0 105.872 18.595z"
              ></path>
            </g>
            <path
              stroke="#008CB1"
              strokeLinecap="round"
              strokeWidth="7"
              d="M102 60.5l21-7.5M93 40.5l13-9.5M106 83.5l14-.5"
            ></path>
            <rect
              width="139"
              height="139"
              x="0.5"
              y="0.5"
              stroke="#19232D"
              strokeOpacity="0.1"
              rx="23.5"
            ></rect>
            <defs>
              <linearGradient
                id="paint0_linear_12551_145800"
                x1="70"
                x2="70"
                y1="-28.5"
                y2="233.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9FDFF"></stop>
                <stop offset="1" stopColor="#C7E2F0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_12551_145800"
                x1="-72.5"
                x2="81.742"
                y1="127.5"
                y2="61.294"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C7F284"></stop>
                <stop offset="1" stopColor="#00BEF0"></stop>
              </linearGradient>
              <clipPath id="clip0_12551_145800">
                <path
                  fill="#fff"
                  d="M0 0H78V78H0z"
                  transform="scale(-1 1) rotate(17.527 -136.75 -262.421)"
                ></path>
              </clipPath>
            </defs>
          </svg>
        ),
      },
      {
        label: 'Most Critical',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 140 140"
          >
            <rect width="140" height="140" fill="#F9FDFF" rx="24"></rect>
            <rect
              width="140"
              height="140"
              fill="url(#paint0_linear_12551_145804)"
              rx="24"
            ></rect>
            <path
              fill="url(#paint1_linear_12551_145804)"
              d="M101.524 69.066L60.399 113.13a2.935 2.935 0 01-3.481.607 2.937 2.937 0 01-1.546-3.177l5.383-26.926-21.161-7.946a2.937 2.937 0 01-1.102-4.774l41.125-44.062a2.938 2.938 0 015.027 2.57l-5.398 26.955 21.161 7.935a2.93 2.93 0 011.82 2.084 2.934 2.934 0 01-.718 2.671h.015z"
            ></path>
            <rect
              width="139"
              height="139"
              x="0.5"
              y="0.5"
              stroke="#19232D"
              strokeOpacity="0.1"
              rx="23.5"
            ></rect>
            <defs>
              <linearGradient
                id="paint0_linear_12551_145804"
                x1="70"
                x2="70"
                y1="-28.5"
                y2="233.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9FDFF"></stop>
                <stop offset="1" stopColor="#C7E2F0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_12551_145804"
                x1="102"
                x2="38.345"
                y1="4"
                y2="114.058"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C7F284"></stop>
                <stop offset="1" stopColor="#00BEF0"></stop>
              </linearGradient>
            </defs>
          </svg>
        ),
      },
      {
        label: 'Most Long-Term',
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 141 140"
          >
            <rect
              width="140"
              height="140"
              x="0.5"
              fill="url(#paint0_linear_12555_145869)"
              rx="24"
            ></rect>
            <path
              fill="url(#paint1_linear_12555_145869)"
              d="M98.332 38.512h-7.969v-.887a2.655 2.655 0 10-5.312 0v.887H72.656v-.887a2.655 2.655 0 10-5.312 0v.887H54.949v-.887a2.655 2.655 0 10-5.313 0v.887h-7.968a9.728 9.728 0 00-9.742 9.738v46.043a9.737 9.737 0 009.742 9.738h29.856a5.608 5.608 0 01-.638-2.656 6.227 6.227 0 016.196-6.199h16.751l-.67-.99a6.133 6.133 0 01-.92-4.641 6.309 6.309 0 012.656-3.965 6.234 6.234 0 018.606 1.734l4.569 6.873V48.25a9.73 9.73 0 00-9.742-9.739zm-46.04 46.925a3.543 3.543 0 01-2.506-6.046 3.542 3.542 0 112.507 6.046zm0-12.394a3.541 3.541 0 11-.002-7.083 3.541 3.541 0 01.003 7.083zM70 85.437a3.542 3.542 0 01-2.504-6.046 3.54 3.54 0 013.859-.767A3.54 3.54 0 0170 85.438zm0-12.394a3.54 3.54 0 01-3.27-2.188 3.535 3.535 0 01.766-3.859 3.535 3.535 0 013.859-.766A3.54 3.54 0 0170 73.043zm17.707 12.394a3.542 3.542 0 11.003-7.084 3.542 3.542 0 01-.003 7.085zm0-12.394a3.54 3.54 0 01-3.27-2.188 3.54 3.54 0 115.777 1.149 3.55 3.55 0 01-2.507 1.039zm15.051-18.594h-65.52V48.25a4.43 4.43 0 014.43-4.426h7.968v4.426a2.655 2.655 0 105.313 0v-4.426h12.395v4.426a2.655 2.655 0 105.312 0v-4.426h12.395v4.426a2.656 2.656 0 105.313 0v-4.426h7.968a4.43 4.43 0 014.429 4.426l-.003 6.2z"
            ></path>
            <path
              fill="#008CB1"
              d="M100.543 89.277a2.659 2.659 0 00-3.699-.76 2.66 2.66 0 00-1.135 1.703 2.65 2.65 0 00.415 2.005l4.33 6.495H77.082a2.658 2.658 0 00-2.656 2.656 2.658 2.658 0 002.656 2.656h28.336a2.655 2.655 0 002.208-4.13l-7.083-10.625z"
            ></path>
            <rect
              width="138.542"
              height="138.542"
              x="1.229"
              y="0.729"
              stroke="#19232D"
              strokeOpacity="0.1"
              strokeWidth="1.458"
              rx="23.271"
            ></rect>
            <defs>
              <linearGradient
                id="paint0_linear_12555_145869"
                x1="70.5"
                x2="70.5"
                y1="-28.5"
                y2="233.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9FDFF"></stop>
                <stop offset="1" stopColor="#C7E2F0"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_12555_145869"
                x1="100.304"
                x2="24.221"
                y1="50.665"
                y2="85.515"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#C7F284"></stop>
                <stop offset="1" stopColor="#00BEF0"></stop>
              </linearGradient>
            </defs>
          </svg>
        ),
      },
    ],
  },
];

export default function Home(): JSX.Element {
  return (
    <div className="home bg-[#F0F6F9]relative isolate overflow-hidden">
      <img
        src="/img/home/header-bg.png"
        alt=""
        className="hidden md:block z-[-1] absolute w-full max-w-[900px] top-0 right-0"
      />
      <div className="md:hidden z-[-1] absolute w-[100%] top-0 right-0 overflow-hidden">
        <img
          src="/img/home/header-bg-mobile.png"
          alt=""
          className="scale-[2] translate-y-10"
        />
      </div>
      <Layout>
        <div className="min-h-screen overflow-hidden text-[#19232D] pb-[112px] md:pb-[163px] px-6">
          <div
            className="mt-[200px] md:mt-[120px] max-w-content ml-auto mr-auto"
            style={{ marginRight: 'auto' }}
          >
            <section className="max-w-[562px] mr-auto text-center md:text-left">
              <h1 className="font-bold text-[40px] md:text-[70px] leading-[1.1125]">
                The Liquidity Infrastructure for Solana
              </h1>
              <p className="opacity-75 mt-8 text-base font-medium">
                Jupiter brings together all the liquidity sources across Solana
                into a single endpoint, providing crucial swap aggregation,
                pricing data and payment features for all users and developers
                alike.
              </p>
            </section>

            <section className="mt-[84px] md:mt-[92px] grid grid-cols-2 md:grid-cols-4 gap-3">
              {linkSections.map((item, idx) => (
                <Link
                  to={item.url}
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(251, 252, 253, 0.7)',
                    border: '1px solid #008CB1',
                    backdropFilter: 'blur(37.5px)',
                  }}
                  className="hover:no-underline p-4 border border-solid border-white/10 backdrop-blur-[37.5px] flex items-center flex-col rounded-lg"
                >
                  <i>{item.icon}</i>
                  <p className="text-sm mt-3 font-semibold text-black ">
                    {item.label}
                  </p>
                </Link>
              ))}
            </section>
            <section className="text-center mt-20 md:mt-[128px] grid grid-cols-1 md:grid-cols-2 gap-[88px]">
              {jupSection?.map((section) => (
                <div key={section.title} className="flex flex-col items-center">
                  <h2 className="text-2xl font-bold text-black">
                    {section.title}
                  </h2>
                  <p className="mt-6 mb-auto font-medium mx-auto text-center opacity-75 leading-relaxed">
                    {section.description}
                  </p>
                  <div className="w-full grid grid-cols-3 gap-3 md:gap-14 mt-7 md:mt-20">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <i className="w-full max-w-[140px]">{item.icon}</i>
                        <p className="font-semibold mt-3 text-sm md:text-lg text-[#292A33]">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
            <section className="mt-20 lg:mt-[156px] grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-[64px] justify-items-center items-center">
              <div className="text-center lg:text-left">
                <h2
                  className="text-[28px] lg:text-4xl font-semibold"
                  style={{
                    letterSpacing: '-0.02em',
                  }}
                >
                  Composability
                </h2>
                <p className="text-base font-medium opacity-75 mt-2 lg:mt-10 ">
                  Composability is the fact that a dApp or a protocol can build
                  on top of another protocol. We sometimes use the analogy of
                  Lego building blocks.
                  <br />
                  <br />
                  Jupiter is in constant evolution (new DEX integration, added
                  functionality, optimized routing engine). By integrating
                  Jupiter, you benefit from all this work, with no effort, by
                  focusing on your own products.
                </p>
              </div>
              <div className="max-w-full w-[551px]">
                <ComposabilityDiagram />
              </div>
            </section>
            <section className="mt-20 lg:mt-[156px] grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-[64px] justify-items-center items-center">
              <div className="max-w-full w-[551px]">
                <SolanaDiagram />
              </div>
              <div className="text-center lg:text-left">
                <h2
                  className="text-[28px] lg:text-4xl font-semibold"
                  style={{
                    letterSpacing: '-0.02em',
                  }}
                >
                  Single Liquidity Endpoint For Solana
                </h2>
                <p className="opacity-75 mt-2 lg:mt-10 text-base font-medium">
                  Jupiter simplifies the exponentially growing number of tokens
                  and liquidity sources on Solana into a single endpoint,
                  allowing users and projects to fully access the value within
                  Solana, seamlessly.
                </p>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </div>
  );
}
