import React from "react";

const PerpApiIcon = ({ width = 64, height = 64, color="#c7f284" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-scale blur-[2px]"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 20l10 0" />
      <path d="M6 6l6 -1l6 1" />
      <path d="M12 3l0 17" />
      <path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
      <path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" />
    </svg>
  );
};

export default PerpApiIcon;
