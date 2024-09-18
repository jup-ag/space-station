import React from "react";

const SolanaIcon = ({ width = 40, height = 40, color = "#c7f284" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-currency-solana"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 18h12l4 -4h-12z" />
      <path d="M8 14l-4 -4h12l4 4" />
      <path d="M16 10l4 -4h-12l-4 4" />
    </svg>
  );
};

export default SolanaIcon;
