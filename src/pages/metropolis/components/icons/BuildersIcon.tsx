import React from "react";

const BuildersIcon = ({ width = 50, height = 50, color= "#c7f284" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 lucide lucide-blocks opacity-50 rounded-2xl border-2 border-solid border-[#c7f284] bg-[#c7f284]/15 px-2 py-1 mt-1"
    >
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
    </svg>
  );
};

export default BuildersIcon;
