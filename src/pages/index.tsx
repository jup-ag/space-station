import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import GradientText from '../components/GradientText';
import SolanaDiagram from '../components/SolanaDiagram';
import { useLocation } from '@docusaurus/router';
import clsx from 'clsx';

const navLinks = [
  {
    label: 'Stats',
    url: 'https://jup.ag/stats',
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
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34.6877 7.96872C34.4463 5.5734 32.4307 3.75 30.0237 3.75C27.6167 3.75 25.601 5.57346 25.3596 7.96872C17.2902 9.60234 10.6692 15.3517 7.92005 23.1115C5.17085 30.8719 6.69425 39.5083 11.9349 45.8575C11.4872 46.5864 11.2505 47.4255 11.2505 48.281C11.2529 50.1466 12.3615 51.8341 14.0747 52.5747C15.788 53.3177 17.7755 52.9731 19.1396 51.6982C25.1534 54.8482 32.2388 55.2349 38.5622 52.7575C44.8832 50.2802 49.8194 45.1825 52.0952 38.7865C54.3686 32.3905 53.7569 25.3195 50.4194 19.4083C47.0795 13.4974 41.3417 9.32292 34.6877 7.96872ZM30.0002 5.625C31.1369 5.625 32.1635 6.30936 32.5994 7.3617C33.033 8.4117 32.794 9.62106 31.9901 10.4273C31.1838 11.2312 29.9744 11.4703 28.9244 11.0367C27.8721 10.6008 27.1877 9.5742 27.1877 8.4375C27.1877 6.88362 28.4464 5.625 30.0002 5.625ZM15.9374 51.0936C14.8007 51.0936 13.7741 50.4092 13.3382 49.3569C12.9046 48.3069 13.1437 47.0975 13.9476 46.2913C14.7539 45.4874 15.9632 45.2483 17.0132 45.6819C18.0656 46.1178 18.7499 47.1444 18.7499 48.2811C18.7499 49.835 17.4913 51.0936 15.9374 51.0936ZM30.0002 52.4999C26.6041 52.4975 23.2598 51.6936 20.2316 50.1562C20.4918 49.5655 20.6254 48.9257 20.6254 48.2812C20.6254 47.039 20.1308 45.846 19.2519 44.9671C18.373 44.0882 17.1801 43.5937 15.9379 43.5937C14.9629 43.5937 14.0113 43.9007 13.2192 44.4702C8.51528 38.6342 7.17716 30.7758 9.68948 23.7138C12.1996 16.6518 18.1975 11.4 25.5283 9.8436C26.1423 11.7959 27.9517 13.1249 30.0001 13.1249C32.0485 13.1249 33.858 11.796 34.472 9.8436C41.4866 11.3296 47.3018 16.2066 49.9898 22.854C52.6781 29.4984 51.8859 37.0476 47.8781 42.9912C43.8703 48.9373 37.1696 52.4999 30.0002 52.4999ZM30.0005 25.7813C28.1044 25.7813 26.3958 26.9227 25.6692 28.6758C24.945 30.4266 25.3458 32.4422 26.6864 33.7829C28.027 35.1235 30.0427 35.5242 31.7934 34.8C33.5465 34.0735 34.6879 32.3649 34.6879 30.4688C34.6879 29.2266 34.1934 28.0336 33.3145 27.1547C32.4356 26.2758 31.2427 25.7813 30.0005 25.7813ZM30.0005 33.2813C28.8638 33.2813 27.8372 32.597 27.4013 31.5446C26.9677 30.4946 27.2067 29.2852 28.0106 28.479C28.8169 27.6751 30.0263 27.436 31.0763 27.8696C32.1286 28.3055 32.813 29.3321 32.813 30.4688C32.813 32.0227 31.5544 33.2813 30.0005 33.2813ZM43.5944 30.4691C43.5944 31.3526 43.5054 32.2363 43.3319 33.1034C45.4085 34.5026 46.0178 37.2871 44.717 39.427C43.4162 41.5645 40.6647 42.3051 38.4662 41.1051C35.2292 43.6809 30.9967 44.6442 26.9654 43.7207C22.9344 42.7967 19.543 40.0876 17.75 36.3587C15.957 32.6321 15.9594 28.2917 17.757 24.5651C19.5522 20.8386 22.9458 18.1339 26.9796 17.2151C31.0134 16.2964 35.2437 17.262 38.478 19.8425C41.7124 22.4207 43.5944 26.3324 43.5944 30.4691ZM22.0647 21.8393C19.6506 24.0587 18.2796 27.1902 18.2819 30.4691L18.283 30.4684C18.283 33.3843 19.3705 36.1967 21.3322 38.353C23.296 40.5116 25.9913 41.8593 28.8952 42.1358C31.7964 42.41 34.7004 41.5945 37.0324 39.8437C35.8863 38.3108 35.7878 36.2343 36.7839 34.6007C37.78 32.9648 39.6691 32.0999 41.5558 32.414C42.1019 29.1799 41.2699 25.8658 39.2589 23.276C37.2477 20.6861 34.2455 19.0549 30.9759 18.783C27.7085 18.5088 24.4764 19.6174 22.0647 21.8393ZM38.1827 38.1074C38.6186 39.1597 39.6452 39.8441 40.7819 39.8441C42.3358 39.8441 43.5944 38.5855 43.5944 37.0316C43.5944 35.8949 42.9101 34.8683 41.8577 34.4324C40.8077 33.9988 39.5984 34.2379 38.7921 35.0417C37.9882 35.848 37.7491 37.0574 38.1827 38.1074Z"
          fill="url(#paint0_radial_11612_144803)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_11612_144803"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(30.9035 30.2083) rotate(90) scale(33.9168 42.1924)"
          >
            <stop stopColor="#C7F284" />
            <stop offset="1" stopColor="#71E6EC" />
          </radialGradient>
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
          fill="url(#paint0_linear_12157_140114)"
          d="M55.31 32.812A2.812 2.812 0 1052.497 30c.003.166.02.331.05.494l-8.531 4.885a2.7 2.7 0 00-2.51-.598l-3.496-5.239 6.014-7.23a2.771 2.771 0 003.614-1.687h5.032a2.812 2.812 0 100-1.875h-5.032a2.803 2.803 0 10-5.052 2.362l-5.665 6.804-1.868-2.8a2.782 2.782 0 00.57-1.679 2.813 2.813 0 00-5.625 0c.003.452.116.895.329 1.293l-4.594 4.955-8.238-8.72a2.77 2.77 0 00.316-1.278 2.806 2.806 0 00-5.453-.938h-4.86V6.014l2.378 2.376L11.2 7.063l-4.64-4.64-4.641 4.64L3.245 8.39l2.378-2.376v46.486h-3.75v1.875h3.75v3.75h1.875v-3.75h46.487l-2.377 2.377 1.325 1.326 4.64-4.64-4.64-4.64-1.325 1.326 2.377 2.377H7.498V20.624h4.86a2.788 2.788 0 003.776 1.63l8.318 8.812-2.71 2.917a2.812 2.812 0 00-3.436 4.172l-4.39 6.04h.001a2.742 2.742 0 00-.794-.134 2.812 2.812 0 102.317 1.219l4.389-6.04c.257.084.524.128.794.133a2.812 2.812 0 002.813-2.812 2.777 2.777 0 00-.33-1.293l2.636-2.84 2.7 2.86c-.207.392-.316.83-.319 1.273a2.813 2.813 0 005.625 0 2.788 2.788 0 00-.401-1.425l3.409-4.093 3.187 4.781a2.813 2.813 0 105.055 1.674 2.852 2.852 0 00-.05-.494l8.531-4.885c.507.445 1.157.69 1.831.692zm0-14.062a.938.938 0 110 1.875.938.938 0 010-1.875zm-10.313 0a.937.937 0 110 1.874.937.937 0 010-1.874zm-30.937.937a.938.938 0 111.875 0 .938.938 0 01-1.875 0zm-.938 28.125a.938.938 0 110-1.875.938.938 0 010 1.875zm7.5-10.313a.938.938 0 110-1.875.938.938 0 010 1.875zm12.188-15a.937.937 0 110 1.875.937.937 0 010-1.874zm-1.875 15a.938.938 0 110-1.875.938.938 0 010 1.875zm.974-3.562a2.718 2.718 0 00-2.11.06l-2.78-2.942 4.673-5.036a2.685 2.685 0 001.801.14l2.176 3.262-3.76 4.516zm23.4-4.875a.938.938 0 110 1.875.938.938 0 010-1.875zm-13.124 9.375a.938.938 0 110-1.875.938.938 0 010 1.875z"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_12157_140114"
            x1="52.394"
            x2="-5.432"
            y1="15.083"
            y2="39.347"
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
          fill="url(#paint0_radial_11612_144813)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_11612_144813"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(47.7001 64.1253) rotate(-127.377) scale(86.3584 85.9632)"
          >
            <stop stopColor="#C7F284" />
            <stop offset="1" stopColor="#71E6EC" />
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
          fill="url(#paint0_linear_12157_140142)"
          fillRule="evenodd"
          d="M53.478 60H6.52A6.523 6.523 0 010 53.478V6.522A6.523 6.523 0 016.522 0h36.521a6.522 6.522 0 016.412 5.327 6.526 6.526 0 015.218 5.217 6.522 6.522 0 015.326 6.413v36.52A6.522 6.522 0 0153.478 60zM46.956 6.52v46.957a6.49 6.49 0 001.305 3.913H6.52a3.913 3.913 0 01-3.912-3.913V6.52a3.913 3.913 0 013.913-3.913h36.521a3.913 3.913 0 013.913 3.913zm2.609 46.957V8.05a3.914 3.914 0 012.608 3.69v41.738a1.304 1.304 0 002.609 0V13.266a3.914 3.914 0 012.609 3.69v36.522a3.913 3.913 0 11-7.826 0zM19.562 7.825h10.435a1.305 1.305 0 000-2.608H19.562a1.305 1.305 0 000 2.608zm24.786 6.522A3.908 3.908 0 0043.2 11.58a3.909 3.909 0 00-2.767-1.146H9.13a3.909 3.909 0 00-2.767 1.146 3.908 3.908 0 00-1.146 2.767v5.217c0 1.038.412 2.034 1.146 2.767a3.909 3.909 0 002.767 1.146h31.304a3.909 3.909 0 002.767-1.146 3.908 3.908 0 001.147-2.767v-5.217zm-2.609 0v5.217a1.301 1.301 0 01-1.305 1.304H9.13a1.301 1.301 0 01-1.304-1.304v-5.217a1.302 1.302 0 011.304-1.305h31.304a1.301 1.301 0 011.305 1.305zm1.303 14.348H16.955a1.305 1.305 0 010-2.61h26.087a1.305 1.305 0 010 2.61zM6.522 33.91h36.52a1.305 1.305 0 000-2.608H6.522a1.305 1.305 0 000 2.608zM22.173 44.35H6.52a1.305 1.305 0 010-2.609h15.652a1.305 1.305 0 010 2.609zM6.52 39.129h15.652a1.305 1.305 0 000-2.61H6.522a1.305 1.305 0 000 2.61zm37.825 1.307v10.435a3.913 3.913 0 01-3.913 3.913H30a3.913 3.913 0 01-3.913-3.913V40.436a3.913 3.913 0 013.913-3.913h10.434a3.913 3.913 0 013.913 3.913zm-2.608 10.435V40.436c0-.72-.585-1.304-1.305-1.304H30c-.72 0-1.304.584-1.304 1.304v10.435c0 .72.584 1.304 1.304 1.304h10.434c.72 0 1.305-.584 1.305-1.304zM6.52 49.566h15.652a1.305 1.305 0 000-2.609H6.522a1.305 1.305 0 000 2.609zm15.652 5.216H6.522a1.305 1.305 0 010-2.608h15.652a1.305 1.305 0 010 2.608zM6.522 28.695h5.218a1.305 1.305 0 000-2.61H6.52a1.305 1.305 0 000 2.61z"
          clipRule="evenodd"
        ></path>
        <defs>
          <linearGradient
            id="paint0_linear_12157_140142"
            x1="53.877"
            x2="-7.974"
            y1="13.636"
            y2="39.331"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C7F284"></stop>
            <stop offset="1" stopColor="#00BEF0"></stop>
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];
const jupSection = [
  {
    title: 'Jup Promise',
    description: `The JUP Promise to anchor us to the value we want to deliver -
    Best price, Best token selection, and Best UX for users and developers.
    Sticking to this promise, along with the relentless feedback and debugging help provided by our community of users and developers,
    has been crucial in helping us improve the platform and make significant progress on key objectives.`,
    items: [
      {
        label: 'Best Price',
        icon: (
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9193 12.2583L12.2417 2.58066C11.9187 2.19355 11.4034 2 10.8869 2H4.43552C3.33831 2 2.5 2.83831 2.5 3.93552V10.3869C2.5 10.9034 2.69355 11.4187 3.08066 11.7417L12.7583 21.4193C13.1454 21.8064 13.6619 22 14.1131 22C14.5644 22 15.0809 21.8064 15.468 21.4193L21.9193 14.968C22.6936 14.2579 22.6936 12.9684 21.9193 12.2583ZM7.01581 7.80657C6.3057 7.80657 5.72505 7.22591 5.72505 6.51581C5.72505 5.8057 6.3057 5.22505 7.01581 5.22505C7.72591 5.22505 8.30657 5.8057 8.30657 6.51581C8.30657 7.22591 7.72591 7.80657 7.01581 7.80657Z"
              fill="#C7F284"
            />
          </svg>
        ),
      },
      {
        label: 'Best UX',
        icon: (
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_11612_145372)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.3148 12.4951L23.2187 19.3951L19.8971 22.7129L12.9971 15.8129L8.55323 24L0.501953 0L24.4981 8.04744L16.3148 12.4951Z"
                fill="#008CB1"
              />
            </g>
            <defs>
              <clipPath id="clip0_11612_145372">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        ),
      },
      {
        label: 'Best Selection',
        icon: (
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.70039 4.80039C7.70039 6.12601 6.62601 7.20039 5.30039 7.20039C3.97477 7.20039 2.90039 6.12601 2.90039 4.80039C2.90039 3.47477 3.97477 2.40039 5.30039 2.40039C6.62601 2.40039 7.70039 3.47477 7.70039 4.80039Z"
              fill="#19C5E4"
            />
            <path
              d="M7.70039 12.0006C7.70039 13.3262 6.62601 14.4006 5.30039 14.4006C3.97477 14.4006 2.90039 13.3262 2.90039 12.0006C2.90039 10.675 3.97477 9.60059 5.30039 9.60059C6.62601 9.60059 7.70039 10.675 7.70039 12.0006Z"
              fill="#19C5E4"
            />
            <path
              d="M7.70039 19.2008C7.70039 20.5264 6.62601 21.6008 5.30039 21.6008C3.97477 21.6008 2.90039 20.5264 2.90039 19.2008C2.90039 17.8752 3.97477 16.8008 5.30039 16.8008C6.62601 16.8008 7.70039 17.8752 7.70039 19.2008Z"
              fill="#19C5E4"
            />
            <path
              d="M10.0996 17.4004H23.2996V21.0004H10.0996V17.4004Z"
              fill="#19C5E4"
            />
            <path
              d="M10.0996 10.2002H23.2996V13.8002H10.0996V10.2002Z"
              fill="#19C5E4"
            />
            <path d="M10.0996 3H23.2996V6.6H10.0996V3Z" fill="#19C5E4" />
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Jup Spirit',
    description: `The JUP Spirit of Most Vocal, Most Critical and Most Long-Term is a rallying cry to create one of the most active and helpful communities around!
    The JUP Spirit may be simple but it covers so much of what we care about. It captures the essence of being there for Jupiter in the most helpful and genuine way.`,

    items: [
      {
        label: (
          <span>
            Most <br /> Vocal
          </span>
        ),
        icon: (
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9193 12.2583L12.2417 2.58066C11.9187 2.19355 11.4034 2 10.8869 2H4.43552C3.33831 2 2.5 2.83831 2.5 3.93552V10.3869C2.5 10.9034 2.69355 11.4187 3.08066 11.7417L12.7583 21.4193C13.1454 21.8064 13.6619 22 14.1131 22C14.5644 22 15.0809 21.8064 15.468 21.4193L21.9193 14.968C22.6936 14.2579 22.6936 12.9684 21.9193 12.2583ZM7.01581 7.80657C6.3057 7.80657 5.72505 7.22591 5.72505 6.51581C5.72505 5.8057 6.3057 5.22505 7.01581 5.22505C7.72591 5.22505 8.30657 5.8057 8.30657 6.51581C8.30657 7.22591 7.72591 7.80657 7.01581 7.80657Z"
              fill="#C7F284"
            />
          </svg>
        ),
      },
      {
        label: (
          <span>
            Most <br /> Critical
          </span>
        ),
        icon: (
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_11612_145372)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.3148 12.4951L23.2187 19.3951L19.8971 22.7129L12.9971 15.8129L8.55323 24L0.501953 0L24.4981 8.04744L16.3148 12.4951Z"
                fill="#008CB1"
              />
            </g>
            <defs>
              <clipPath id="clip0_11612_145372">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        ),
      },
      {
        label: (
          <span>
            Most <br /> Long-Term
          </span>
        ),
        icon: (
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.70039 4.80039C7.70039 6.12601 6.62601 7.20039 5.30039 7.20039C3.97477 7.20039 2.90039 6.12601 2.90039 4.80039C2.90039 3.47477 3.97477 2.40039 5.30039 2.40039C6.62601 2.40039 7.70039 3.47477 7.70039 4.80039Z"
              fill="#19C5E4"
            />
            <path
              d="M7.70039 12.0006C7.70039 13.3262 6.62601 14.4006 5.30039 14.4006C3.97477 14.4006 2.90039 13.3262 2.90039 12.0006C2.90039 10.675 3.97477 9.60059 5.30039 9.60059C6.62601 9.60059 7.70039 10.675 7.70039 12.0006Z"
              fill="#19C5E4"
            />
            <path
              d="M7.70039 19.2008C7.70039 20.5264 6.62601 21.6008 5.30039 21.6008C3.97477 21.6008 2.90039 20.5264 2.90039 19.2008C2.90039 17.8752 3.97477 16.8008 5.30039 16.8008C6.62601 16.8008 7.70039 17.8752 7.70039 19.2008Z"
              fill="#19C5E4"
            />
            <path
              d="M10.0996 17.4004H23.2996V21.0004H10.0996V17.4004Z"
              fill="#19C5E4"
            />
            <path
              d="M10.0996 10.2002H23.2996V13.8002H10.0996V10.2002Z"
              fill="#19C5E4"
            />
            <path d="M10.0996 3H23.2996V6.6H10.0996V3Z" fill="#19C5E4" />
          </svg>
        ),
      },
    ],
  },
];

export default function Home(): JSX.Element {
  const location = useLocation();

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div
      style={{
        background:
          'radial-gradient(71.05% 73.55% at 50% 98.13%, rgba(0, 140, 177, 0.6) 0%, rgba(39, 75, 108, 0.54) 51.81%, rgba(14, 36, 51, 0.6) 100%, rgba(22, 33, 60, 0.48) 100%), #111726',
      }}
      className="min-h-screen overflow-hidden relative isolate text-white/75 pb-[112px] md:pb-[163px] px-6 home"
    >
      {/* <img
        src="/img/home/header-bg.png"
        alt=""
        className="hidden md:block z-[-1] absolute w-[70%] top-0 right-0"
      />

      <img
        src="/img/home/header-bg-mobile.png"
        alt=""
        className="md:hidden z-[-1] absolute w-[100%] top-0 right-0"
      /> */}

      <header className="flex items-center py-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setOpenSidebar(true)}
            className="bg-transparent border-none cursor-pointer"
          >
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden"
            >
              <path
                d="M2 3.5H18V5.27778H2V3.5ZM2 9.72222H18V11.5H2V9.72222ZM2 15.9444H18V17.7222H2V15.9444Z"
                fill="white"
                fillOpacity="0.75"
              />
            </svg>
          </button>

          <img src="/img/jupiter-logo.svg" width={39} height={32} />
          <span className="hidden md:block font-bold text-[18px] text-white">
            Jupiter | Hub
          </span>
        </div>
        <nav
          className={clsx(
            'fixed z-10 top-0 left-0 h-full w-full flex transition duration-300  md:hidden',
            !openSidebar && 'opacity-0 pointer-events-none'
          )}
        >
          <button
            className={clsx(
              'absolute inset-0 z-[-1] bg-black/50 border-none transition duration-300',
              !openSidebar && 'opacity-0'
            )}
            onClick={() => setOpenSidebar(false)}
          ></button>
          <div
            className={clsx(
              'min-w-[300px] px-6 py-4 bg-[rgb(17,23,38)] h-full transition duration-300',
              !openSidebar && '-translate-x-full'
            )}
          >
            <div className="flex items-center space-x-2">
              <img src="/img/jupiter-logo.svg" width={39} height={32} />
              <span className="font-bold text-[18px] text-white">
                Jupiter | Hub
              </span>
              <button
                className="!ml-auto bg-transparent border-none cursor-pointer flex"
                onClick={() => setOpenSidebar(false)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col mt-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  to={link.url}
                  className={clsx(
                    'text-white hover:no-underline hover:bg-gray-700 px-4 py-1 rounded-md',
                    location.pathname === link.url && 'bg-gray-700'
                  )}
                  onClick={() => setOpenSidebar(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <nav className="hidden md:flex items-center ml-11 space-x-10 text-sm font-semibold text-white/[0.35]">
          {navLinks.map((link) => (
            <Link
              to={link.url}
              className={clsx(
                'text-inherit hover:text-white hover:no-underline',
                location.pathname === link.url && '!text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          to="https://jup.ag/"
          style={{
            background:
              ' linear-gradient(0deg, #121D28, #121D28), linear-gradient(96.8deg, rgba(252, 192, 10, 0.05) 4.71%, rgba(78, 186, 233, 0.05) 87.84%), rgba(0, 0, 0, 0.4)',
          }}
          className="text-inherit hover:text-white hover:no-underline font-semibold px-5 py-3 rounded-xl border border-white/10 border-solid ml-auto"
        >
          <GradientText>Launch App</GradientText>
        </Link>
      </header>
      <div className="mt-[247px] md:mt-[170px] max-w-content mx-auto">
        <section className="max-w-[800px] mr-auto text-center md:text-left">
          <h1 className="font-bold text-[40px] md:text-[70px] leading-[1.1125] text-white">
            The Liquidity Infrastructure for Solana
          </h1>
          <p className="text-white/75 mt-8 font-medium">
            Jupiter brings together all the liquidity sources across Solana into
            a single endpoint, providing crucial swap aggregation, pricing data
            and payment features for all users and developers alike.
          </p>
        </section>

        <section className="mt-[84px] md:mt-[100px] grid grid-cols-2 md:grid-cols-4 gap-3">
          {linkSections.map((item, idx) => (
            <Link
              to={item.url}
              key={idx}
              className="hover:no-underline bg-white/5 p-4 border border-solid border-white/10 backdrop-blur-[37.5px] flex items-center flex-col rounded-lg"
            >
              <i>{item.icon}</i>
              <p className="text-sm mt-3 font-semibold text-white ">
                {item.label}
              </p>
            </Link>
          ))}
        </section>
        {/* <section className="text-center mt-20 md:mt-[128px] grid grid-cols-1 md:grid-cols-2 gap-[76px]">
          {jupSection?.map((section) => (
            <div key={section.title} className="flex flex-col items-center">
              <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              <p className="mt-6 mb-auto font-medium max-w-[394px] mx-auto text-center">
                {section.description}
              </p>
              <div className="w-full grid grid-cols-3 gap-5 mt-7">
                {section.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="md:min-h-[127px] rounded-xl bg-white/10 px-2.5 py-5 md:p-[22px] flex flex-col items-center"
                  >
                    <i>{item.icon}</i>
                    <p className="font-semibold mt-3 text-sm text-white">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section> */}
        {/* <section className="mt-20 lg:mt-[156px] grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-[64px] justify-items-center items-center">
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
            <p className="text-lg text-white/50 mt-2 lg:mt-10 ">
            Jupiter simplifies the exponentially growing number of tokens and liquidity sources on Solana into a single endpoint, allowing users and projects to fully access the value within Solana, seamlessly.
            </p>
          </div>
        </section> */}
      </div>
    </div>
  );
}
