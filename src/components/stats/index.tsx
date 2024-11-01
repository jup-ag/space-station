import React from "react";
import useTradingInfo, { TradingData } from "./useTradingInfo";
import { Mode } from "./types";

export const validSlugs: Array<{ mode: Mode; text: string }> = [
  { mode: "day", text: `D` },
  { mode: "week", text: `W` },
  { mode: "month", text: `M` },
];

const StatsContent: React.FC<{ mode: Mode }> = ({ mode }) => {
  const { data } = useTradingInfo(mode);

  return (
    <div className="stats dark">
      <div className="w-full px-2 lg:px-4 mt-16 lg:p-0 margin-vert--lg mb-[133px] max-w-desktop !mx-auto">
        You can refer to the{" "}
        <a href="https://dune.com/ilemi/jupiter-aggregator-solana">
          Dune dashboard
        </a>
        .
      </div>
    </div>
  );
};

export default StatsContent;
