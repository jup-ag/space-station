import React from "react";

const RightArrowIcon = ({ width = 18, height = 18 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#c7f284"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle-arrow-right opacity-80 hover:opacity-100 text-center"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="m12 16 4-4-4-4" />
    </svg>
  );
};

export default RightArrowIcon;
