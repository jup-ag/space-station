const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind's reset
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"], // my markdown stuff is in ../docs, not /src
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    extend: {
      maxWidth: {
        content: 1111,
        xxs: "18rem",
        desktop: "62.25rem",
      },
      screens: {
        xs: "390px",
      },
      colors: {
        // v2 colors
        "v2-primary": "rgba(199, 242, 132, 1)",
        "v2-background": "#304256",
        "v2-background-dark": "#19232D",
        "v2-lily": "#E8F9FF",
        "v2-background-page": "#1C2936",
        "v2-header-background": "#192531",
        "v2-perps-modal": "#1B2229",
        "v2-perps-input": "#13181D",

        black: "#000",
        "black-5": "rgba(0, 0, 0, 0.05)",
        "black-10": "rgba(0, 0, 0, 0.1)",
        "black-25": "rgba(0, 0, 0, 0.25)",
        "black-35": "rgba(0, 0, 0, 0.35)",
        "black-50": "rgba(0, 0, 0, 0.5)",
        "black-75": "rgba(0, 0, 0, 0.75)",

        white: "#FFF",
        "white-10": "rgba(255, 255, 255, 0.1)",
        "white-25": "rgba(255, 255, 255, 0.25)",
        "white-35": "rgba(255, 255, 255, 0.35)",
        "white-50": "rgba(255, 255, 255, 0.5)",
        "white-75": "rgba(255, 255, 255, 0.75)",

        // Jupiter colors
        "jupiter-dark": "#292A33",
        "jupiter-light": "#F3F5F6",
        "jupiter-bg-grey": "#F8FAFD",

        "jupiter-primary": "#FBA43A",
        "jupiter-secondary": "#A250E8",
        "jupiter-blue": "#4CD1F9",
        "jupiter-input-light": "#EBEFF1",
        "jupiter-input-dark": "#212128",
        "jupiter-yellow": "#F0C221",
        "jupiter-red": "#F04A44",
        "jupiter-navy": "#191C32",
        "jupiter-green": "#23C1AA",
        rock: "#513732",
        trout: "#4A4B58",
        porcelain: "#E5E9EB",
        tuna: "#3A3B43",
        shark: "#282830",
        "jupiter-jungle-green": "#24AE8F",
        "dark-55": "#51515A",
        "light-75": "#C8C8CA",

        "drawer-dark-bg": "#38383F",
        "drawer-dark-bg-inactive": "#2D2D36",
        "setting-toggle-light": "#FCFDFD",
        "setting-toggle-dark": "#3A3B47",

        info: "#5762F1",
        "dark-active-state": "#71E5EC",
        "light-active-state": "#42CCD4",
        warning: "#FAA63C",
        "limit-bg": "#2E2E37",
        "limit-bg-2": "#1D1D24",
      },
      boxShadow: {
        "row-dark": "0px 20px 40px rgba(0, 0, 0, 0.1)",
        row: "0px 20px 30px rgba(0,0,0,0.025)",
        "overview-tooltip":
          "0px 2px 4px rgba(0, 0, 0, 0.1), inset 0px 0px 1px #FFFFFF",
        "header-settings": "0px 8px 16px rgba(0, 0, 0, 0.1)",
        "setting-toggle": "0px 2px 4px rgba(0, 0, 0, 0.05)",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "200-auto": "200% auto",
      },
      backgroundImage: {
        "jupiter-gradient":
          "linear-gradient(91.26deg, #FCC00A 15.73%, #4EBAE9 83.27%)",
        "jupiter-swap-gradient":
          "linear-gradient(96.8deg, rgba(250, 164, 58, 1) 4.71%, rgba(113, 229, 237, 1) 87.84%)",
        "jupiter-swap-gradient-light":
          "linear-gradient(91.26deg, rgba(250, 166, 61, 0.05) 15.73%, rgba(133, 243, 252, 0.05) 83.27%)",
        "jupiter-gradient-alternative":
          "linear-gradient(96.8deg, #D9AF32 4.71%, #A5E866 21.59%, #4EBBE9 40.65%, #4EBBE9 52.34%, #A5E866 71.82%, #D9AF32 87.84%)",
        "trending-item-dark":
          "linear-gradient(135.3deg, rgba(253, 253, 253, 0.06) 3.19%, rgba(243, 243, 243, 0.04) 101.94%)",
        "trending-item-dark-hover":
          "linear-gradient(135.3deg, rgba(253, 253, 253, 0.15) 3.19%, rgba(243, 243, 243, 0.13))",
        "trending-item-btn-img-dark":
          "linear-gradient(#1E1E22, #1E1E22), linear-gradient(to right, #FCC00A, #4EBAE9)",
        "trending-item-btn-img":
          "linear-gradient(96.8deg, white, white), linear-gradient(to right, #FCC00A, #4EBAE9)",
        skeleton:
          "linear-gradient(90deg, var(--color1, #ebeff1), var(--color2, #c6ced2) 50%, var(--color1, #ebeff1))",
        "skeleton-dark":
          "linear-gradient(90deg, var(--color1, #303035), var(--color2, #26262A) 50%, var(--color1, #303035))",
        "gradient-text":
          "linear-gradient(96.8deg, #FCC00A 4.71%, #4EBAE9 87.84%)",
        "limit-order-radial": "radial-gradient(var(--tw-gradient-stops))",
        "limit-title-gradient":
          "linear-gradient(to left, #FAC43A 20%, #71E5EC 80%)",

        "v2-gradient":
          "linear-gradient(96.8deg, rgba(250, 196, 58, 0.1) 4.71%, rgba(34, 218, 229, 0.1) 87.84%)",
      },
      keyframes: {
        shine: {
          "100%": {
            "background-position": "200% center",
          },
        },
        "shine-reverse": {
          "100%": {
            "background-position": "-200% center",
          },
        },
        "shine-reverse-2": {
          "0%": {
            "background-position": "100% 100%",
          },
          "100%": {
            "background-position": "0% 0%",
          },
        },
        hue: {
          "0%": {
            "-webkit-filter": "hue-rotate(0deg)",
          },
          "100%": {
            "-webkit-filter": "hue-rotate(-360deg)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0.2",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "infra-circle-item": {
          "0%": {
            transform:
              "rotate(var(--deg)) translate(var(--radius)) rotate(calc(-1 * var(--deg))) ",
          },
          "100%": {
            transform:
              "rotate(calc(359.9deg + var(--deg))) translate(var(--radius)) rotate(calc(-1 * (359.9deg + var(--deg))))  ",
          },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-out": "fade-out 0.5s ease-out",
        shine: "shine 3.5s linear infinite",
        "shine-reverse": "shine-reverse 2s infinite linear",
        "shine-reverse-2": "shine-reverse-2 2s infinite linear",
        hue: "hue 10s infinite linear",
        "infra-circle-item":
          "infra-circle-item var(--duration, 9s) linear infinite",
      },
      textColor: {
        inherit: "inherit",
      },
      fontSize: {
        xxs: ["0.625rem", "1rem"],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, addComponents }) {
      addVariant(
        "popover-open",
        '&[aria-haspopup="dialog"][aria-expanded="true"]'
      );
      addComponents({
        '#tooltip[data-popper-placement^="top"] > #arrow, #tooltip[data-popper-placement^="bottom"] > #arrow':
          {
            left: "50%",
            transform: "translateX(-50%)",
          },
        '#tooltip[data-popper-placement^="left"] > #arrow, #tooltip[data-popper-placement^="right"] > #arrow':
          {
            top: "50%",
            transform: "translateY(-50%)",
          },
        '#tooltip[data-popper-placement^="top"] > #arrow': {
          bottom: "-4px",
        },
        '#tooltip[data-popper-placement^="bottom"] > #arrow': {
          top: "-4px",
        },
        '#tooltip[data-popper-placement^="left"] > #arrow': {
          right: "-4px",
        },
        '#tooltip[data-popper-placement^="right"] > #arrow': {
          left: "-4px",
        },
      });
    }),
  ],
};
