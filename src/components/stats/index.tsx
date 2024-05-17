import React from "react";
import useTradingInfo, { TradingData } from "./useTradingInfo";
import TokenIcon from "./TokenIcon";
import useTokenMapByMint from "./useTokenMapByMint";
import { RowSkeleton, Skeleton } from "./Skeleton";
import StaticNumberFormat from "./StaticNumberFormat";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { Mode } from "./types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { add, format, getWeek } from "date-fns";
import { formatAmount, formatNumber } from "@site/src/utils";
import ENTimeLocale from "date-fns/locale/en-GB";
import AccountBalance from "./AccountBalance";
import SwapIcon from "./SwapIcon";
import TopPoolProviders from "./TopPoolProviders";
import { useColorMode } from "@docusaurus/theme-common";

export const validSlugs: Array<{ mode: Mode; text: string }> = [
  { mode: "day", text: `D` },
  { mode: "week", text: `W` },
  { mode: "month", text: `M` },
];

const getFrequencyText = (mode: Mode) =>
  mode === "day" ? `24H` : mode === "week" ? `Weekly` : `Monthly`;

const StatsContent: React.FC<{ mode: Mode }> = ({ mode }) => {
  const { data } = useTradingInfo(mode);
  const lastXTopBuy = data?.lastXTopBuy.slice(0, 10) ?? [];
  const lastXTopSell = data?.lastXTopSell.slice(0, 10) ?? [];
  const lastXTopTokens = data?.lastXTopTokens.slice(0, 10) ?? [];

  const frequencyText = getFrequencyText(mode);

  return (
    <div className="stats dark">
      <div className="w-full px-2 lg:px-4 mt-16 lg:p-0 margin-vert--lg mb-[133px] max-w-desktop !mx-auto">
        <JupOverview mode={mode} />
        <div className="mt-8 md:mt-10" />
        <TopTradingPair mode={mode} />
        <div className="mt-8 md:mt-10" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5 gap-y-8">
          <TopTokens
            title={`Top Tokens`}
            data={lastXTopTokens}
            frequencyText={frequencyText}
          />
          <TopTokens
            title={`Top Buys`}
            data={lastXTopBuy}
            frequencyText={frequencyText}
          />
          <TopTokens
            title={`Top Sells`}
            data={lastXTopSell}
            frequencyText={frequencyText}
          />
        </div>
        <div className="mt-8 md:mt-10" />
        <TopPoolProviders mode={mode} />
      </div>
    </div>
  );
};

const CustomTooltip = ({
  active,
  payload,
  mode,
}: {
  [k: string]: any;
  mode: "day" | "week" | "month";
}) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    if (!data) {
      return null;
    }

    const date = new Date(data.groupTimestamp);
    const dateLabel = format(date, "dd MMM", { locale: ENTimeLocale });
    const next7Day = Math.min(+add(date, { days: 7 }), +new Date());

    const label = (() => {
      if (mode === "day") return dateLabel;
      if (mode === "week")
        return `${dateLabel} - ${format(next7Day, "dd MMM", {
          locale: ENTimeLocale,
        })}`;
      if (mode === "month")
        return format(date, "MMM yyyy", { locale: ENTimeLocale });
      return "";
    })();

    return (
      <div className="p-2 shadow-overview-tooltip bg-[#FCFCFC] rounded-lg">
        <p className="text-[#272B30] text-[12px]">{label}</p>
        <div className="flex items-center mt-2">
          <div className="bg-jupiter-jungle-green h-3 w-3 rounded"></div>
          <p className="ml-1 text-[12px] text-[#1A1D1F] font-bold">
            {formatAmount(data.amount, 4)}
          </p>
        </div>
      </div>
    );
  }

  return null;
};

const JupOverview = ({ mode }: { mode: Mode }) => {
  const { data, isLoading } = useTradingInfo(mode);
  const { colorMode } = useColorMode();

  let volumeInUSD: TradingData["volumeInUSD"] = [];

  if (data?.volumeInUSD) {
    volumeInUSD = [...data.volumeInUSD];
    volumeInUSD.reverse();
  }

  const tradingXVolume = formatNumber
    .format(Number(data?.lastXVolumeInUSD ?? 0), 2)
    .toString();

  return (
    <div>
      <h3 className="text-[24px] leading-6 dark:text-white text-black font-semibold">
        Jupiter Overview
      </h3>
      <div className="bg-white dark:bg-[#32323A] rounded-xl mt-5 py-6 dark:text-[rgba(255,255,255,0.5)] shadow-row dark:shadow-none">
        <div className="flex items-center justify-between px-6">
          <p className=" text-[14px] leading-[16px] font-semibold">
            Trading Volume{" "}
            {mode === "day" ? "24H" : mode === "week" ? "Week" : "Month"}
          </p>
          <div
            className="grid items-center grid-flow-col gap-1 ml-4"
            translate="no"
          >
            {validSlugs.map((item) => (
              <Link
                to={`/stats/${item.mode}`}
                key={item.mode}
                className={clsx(
                  "border border-solid border-transparent bg-[#F2F2F2] text-[rgba(0,0,0,0.15)] px-2 py-[2px] rounded-full text-[11px] leading-[16px] dark:bg-[#282830] dark:text-[rgba(255,255,255,0.25)]",
                  {
                    "!bg-white !text-[rgba(0,0,0,0.5)] dark:!text-[rgba(255,255,255,0.5)] dark:!bg-[rgba(255,255,255,0.08)] !border-[#EBEBEB] dark:!border-transparent":
                      mode === item.mode,
                  }
                )}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        <div className="px-6">
          {isLoading ? (
            <>
              <Skeleton className="!h-9 !w-[220px] mt-4" />
              <Skeleton className="!h-5 !w-[180px] mt-4" />
            </>
          ) : (
            <>
              <h2 className="mt-4 dark:text-white text-3xl xs:text-4xl font-semibold leading-none whitespace-nowrap overflow-hidden text-ellipsis">
                ${tradingXVolume}
              </h2>
              <p className="mt-4 text-[14px] text-[rgba(0,0,0,0.5)] dark:text-inherit">
                {`$${data?.totalVolumeInUSD} Total Volume`}
              </p>
            </>
          )}
        </div>

        <div className="w-full h-[360px] mt-12 pl-2 md:pl-6 [--cursor-color:red]">
          {volumeInUSD.length ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
                data={volumeInUSD.map((item) => ({
                  ...item,
                  amount: Number(item.amount),
                }))}
              >
                <XAxis
                  height={52}
                  dataKey="groupTimestamp"
                  tickLine={false}
                  axisLine={false}
                  stroke={
                    colorMode === "light"
                      ? "rgba(0, 0, 0, 0.35)"
                      : "rgba(255, 255, 255, 0.35)"
                  }
                  dy={9}
                  fontSize={11}
                  interval={mode === "month" ? 0 : 1} // Make sure all X label are shown
                  tickFormatter={(label: string) => {
                    if (mode === "day")
                      return format(new Date(label), "dd", {
                        locale: ENTimeLocale,
                      });
                    if (mode === "week")
                      return (
                        `Week` +
                        " " +
                        getWeek(new Date(label), {
                          locale: ENTimeLocale,
                        }).toString()
                      );
                    if (mode === "month")
                      return format(new Date(label), "MMM", {
                        locale: ENTimeLocale,
                      });
                    return "";
                  }}
                  angle={-45}
                  textAnchor="end"
                />
                <YAxis
                  tickFormatter={(label) => formatAmount(label, 1)}
                  axisLine={false}
                  tickLine={false}
                  stroke={
                    colorMode === "light"
                      ? "rgba(0, 0, 0, 0.35)"
                      : "rgba(255, 255, 255, 0.35)"
                  }
                  fontSize={11}
                  dx={-10}
                  width={12}
                  textAnchor="end"
                />
                <Tooltip
                  content={(props) => <CustomTooltip {...props} mode={mode} />}
                  cursor={{
                    fill:
                      colorMode === "light"
                        ? "rgba(241, 241, 241, 1)"
                        : "rgba(60, 60, 70, 1)",
                  }}
                />
                <CartesianGrid
                  horizontal
                  vertical={false}
                  stroke={
                    colorMode === "light"
                      ? "rgba(0, 0, 0, 0.05)"
                      : "rgba(255, 255, 255, 0.05)"
                  }
                />
                <Bar
                  dataKey="amount"
                  fill="#24AE8F"
                  radius={4}
                  maxBarSize={60}
                />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="pr-6 h-full">
              <Skeleton className="!h-full" />
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 mt-4 md:gap-4 md:grid-cols-2 dark:text-[rgba(255,255,255,0.5)]">
        <div className="bg-white shadow-row dark:shadow-none px-4 py-5 md:p-6 rounded-xl dark:bg-[#32323A] grid items-center justify-start grid-flow-col gap-4 md:grid-flow-row md:gap-5">
          <div className="w-[48px] h-[48px] rounded-full dark:bg-[#282830] bg-[#F2F3F7] flex items-center justify-center dark:text-[rgba(255,255,255,0.25)] text-[rgba(0,0,0,0.25)]">
            <SwapIcon width="20" height="20" />
          </div>
          <div>
            <p className="text-[14px] leading-none text-[rgba(0,0,0,0.5)] dark:text-inherit">
              Total Transactions
            </p>
            {isLoading ? (
              <Skeleton className="!h-8 !w-[120px] mt-1" />
            ) : (
              <p className="mt-1 md:mt-2 dark:text-white text-[20px] md:text-[32px] leading-[24px] md:leading-none font-semibold">
                <StaticNumberFormat
                  value={data?.lastXTransactionsCount ?? 0}
                  currency={false}
                />
              </p>
            )}
          </div>
        </div>
        <div className="bg-white shadow-row dark:shadow-none px-4 py-5 md:p-6 rounded-xl dark:bg-[#32323A] grid items-center justify-start grid-flow-col gap-4 md:grid-flow-row md:gap-5">
          <div className="w-[48px] h-[48px] rounded-full dark:bg-[#282830] bg-[#F2F3F7] flex items-center justify-center dark:text-[rgba(255,255,255,0.25)] text-[rgba(0,0,0,0.25)]">
            <AccountBalance />
          </div>
          <div>
            <p className="text-[14px] leading-none text-[rgba(0,0,0,0.5)] dark:text-inherit">
              Unique Wallets
            </p>
            {isLoading ? (
              <Skeleton className="!h-8 !w-[120px] mt-1" />
            ) : (
              <p className="mt-1 md:mt-2 dark:text-white text-[20px] md:text-[32px] leading-[24px] md:leading-none font-semibold">
                <StaticNumberFormat
                  value={data?.lastXAddressesCount ?? 0}
                  currency={false}
                />
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const TopTradingPair = ({ mode }: { mode: Mode }) => {
  const { data, isLoading } = useTradingInfo(mode);
  const tokenMapByMint = useTokenMapByMint();

  const topPairs = Object.keys(data?.lastXVolumeByAddresses ?? {})
    .map((key) => ({
      pair: key,
      volume: data!.lastXVolumeByAddresses[key],
    }))
    .slice(0, 10);
  const frequencyText = getFrequencyText(mode);

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="dark:text-white text-[20px] leading-none font-semibold">
          Top Trading Pairs
        </h3>
        <div
          className="grid items-center grid-flow-col gap-1 ml-4 dark:text-[rgba(255,255,255,0.25)]"
          translate="no"
        >
          {validSlugs.map((item) => (
            <Link
              to={`/stats/${item.mode}`}
              key={item.mode}
              className={clsx(
                "bg-[#EFEFEF] text-[#B6B6B9] border border-solid border-transparent px-2 py-[2px] rounded-full text-[11px] leading-[16px] dark:bg-[#212128] dark:text-[rgba(255,255,255,0.25)]",
                {
                  "!border-[#EBEBEB] !bg-white !text-[rgba(0,0,0,0.5)] dark:!border-transparent dark:!text-[rgba(255,255,255,0.5)] dark:!bg-[rgba(255,255,255,0.08)]":
                    mode === item.mode,
                }
              )}
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="overflow-auto">
        <div className="min-w-[500px] grid gap-2 text-[12px] leading-[14px] dark:text-[rgba(255,255,255,0.35)] text-[rgba(0,0,0,0.35)] mt-5">
          <div className="bg-white grid grid-cols-[24px,1fr,100px,70px] px-6 py-3 rounded-lg dark:bg-[#32323A] justify-items-end gap-2 items-center shadow-row dark:shadow-row-dark">
            <p className="justify-self-start">#</p>
            <p className="justify-self-start">Name</p>
            <p>{frequencyText} Volume</p>
          </div>
          {isLoading
            ? Array(10)
              .fill(null)
              .map((_, idx) => <RowSkeleton key={idx} />)
            : topPairs.map((item, idx) => {
              const tokens = item.pair.split("/");
              const tokenA = tokenMapByMint[tokens[0]];
              const tokenB = tokenMapByMint[tokens[1]];

              if (tokenA && tokenB) {
                return (
                  <div
                    key={item.pair}
                    className="bg-white grid grid-cols-[24px,1fr,100px,70px] px-6 py-3 rounded-lg dark:bg-[#32323A] justify-items-end gap-2 items-center group dark:hover:bg-trending-item-dark-hover hover:bg-jupiter-bg-grey shadow-row dark:shadow-row-dark"
                  >
                    <p className="justify-self-start">{idx + 1}</p>

                    <Link
                      to={`https://jup.ag/swap/${tokenA.symbol}-${tokenB.symbol}`}
                      className="justify-self-start items-center text-[14px] leading-[20px] dark:text-white text-[rgba(0,0,0,0.75)] flex font-medium"
                      translate="no"
                    >
                      <span>
                        <TokenIcon width={24} height={24} info={tokenA} />
                      </span>
                      <span className="ml-1">
                        <TokenIcon width={24} height={24} info={tokenB} />
                      </span>
                      <span className="ml-4">
                        {tokenA.symbol}/{tokenB.symbol}
                      </span>
                    </Link>

                    <p className="text-[rgba(0,0,0,0.5)] dark:text-inherit">
                      <StaticNumberFormat
                        value={Number(item.volume)}
                        decimalScale={0}
                        prefix="$"
                      />
                    </p>
                    <Link
                      to={`https://jup.ag/swap/${tokenA.symbol}-${tokenB.symbol}`}
                      style={{
                        backgroundClip: "padding-box, border-box",
                      }}
                      className="dark:group-hover:text-white dark:group-hover:bg-trending-item-btn-img-dark group-hover:bg-trending-item-btn-img bg-origin-border border-solid border border-solid dark:border-transparent hover:border-transparent text-[11px] py-1 leading-[16px] px-2 bg-white border-[rgba(0,0,0,0.2)] dark:bg-[rgba(0,0,0,0.15)] dark:text-[rgba(255,255,255,0.5)] rounded text-[rgba(0,0,0,0.6)] group-hover:text-black font-medium"
                    >
                      Trade
                    </Link>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

const TopTokens = (props: {
  title?: string;
  data: TradingData["lastXTopBuy"];
  frequencyText: string;
}) => {
  const tokenMapByMint = useTokenMapByMint();

  return (
    <div>
      <h3 className="dark:text-white text-[20px] leading-none font-semibold">
        {props.title}
      </h3>
      <div className="grid gap-2 text-[12px] leading-[14px] dark:text-[rgba(255,255,255,0.35)] text-[rgba(0,0,0,0.35)] mt-[18px]">
        <div className="bg-white grid grid-cols-[20px,1fr,auto] gap-1 px-6 py-3 rounded-lg dark:bg-[#32323A] items-center shadow-row dark:shadow-row-dark">
          <p>#</p>
          <p>Token</p>
          <p className="justify-self-end">{props.frequencyText} Volume</p>
        </div>
        {!props.data.length
          ? Array(10)
            .fill(null)
            .map((_, idx) => <RowSkeleton key={idx} />)
          : props.data.map((item, idx) => (
            <div
              key={item.mint}
              className="bg-white grid grid-cols-[20px,1fr,auto] gap-1 px-6 py-3 rounded-lg dark:bg-[#32323A] items-center shadow-row dark:shadow-row-dark"
              translate="no"
            >
              <p>{idx + 1}</p>
              <p className="text-[14px] leading-[20px] dark:text-white text-[rgba(0,0,0,0.75)] flex items-center font-medium">
                <TokenIcon
                  info={tokenMapByMint[item.mint]}
                  width={24}
                  height={24}
                />
                <span className="ml-3">{item.symbol}</span>
              </p>
              <p className="justify-self-end text-[rgba(0,0,0,0.5)] dark:text-inherit">
                <StaticNumberFormat
                  value={Number(item.amount)}
                  decimalScale={0}
                />
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StatsContent;
