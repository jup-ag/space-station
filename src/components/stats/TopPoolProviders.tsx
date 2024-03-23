import React from "react";
import { Mode } from "./types";
import useTradingInfo from "./useTradingInfo";
import { RowSkeleton } from "./Skeleton";
import StaticNumberFormat from "./StaticNumberFormat";

const OrcaSVG = "/svg/orca.svg";
const RaydiumSVG = "/svg/raydium.svg";
const SerumSVG = "/svg/serum.svg";
const SaberSVG = "/svg/saber.svg";
const StepSvg = "/svg/step.svg";
const PngFiSVG = "/svg/pngfi.svg";
const AldrinSVG = "/svg/aldrin.svg";
const CropperSVG = "/svg/cropper.svg";
const CremaSVG = "/svg/crema.svg";
const SarosSVG = "/svg/saros.svg";
const LifinitySVG = "/svg/lifinity.svg";
const SenchaPNG = "/img/sencha.png";
const CykuraSVG = "/svg/cykura.svg";
const MarinadeSVG = "/svg/marinade.svg";
const StepnSVG = "/svg/stepn.svg";
const InvariantSVG = "/svg/invariant.svg";
const MeteoraSVG = "/svg/meteora.svg";
const GooseFXSVG = "/svg/goosefx.svg";
const BalansolSVG = "/svg/balansol.svg";
const DradexSVG = "/svg/dradex.svg";
const OpenbookSVG = "/svg/openbook.svg";
const OasisSVG = "/svg/oasis.svg";
const BonkSwapPNG = "/svg/bonkswap.png";
const SymmetrySVG = "/svg/symmetry.svg";
const PhoenixSVG = "/svg/phoenix.svg";
const FluxBeamPNG = "/svg/fluxbeam.png";
const HeliumSVG = "/svg/helium.svg";
const SanctumSVG = "/svg/sanctum.svg";
const DexlabSVG = "/svg/dexlab.svg";


const PoolProviderLogoMap: Record<string, any> = {
  Orca: OrcaSVG,
  Raydium: RaydiumSVG,
  Serum: SerumSVG,
  Saber: SaberSVG,
  Step: StepSvg,
  Aldrin: AldrinSVG,
  Penguin: PngFiSVG,
  Cropper: CropperSVG,
  Sencha: SenchaPNG,
  Crema: CremaSVG,
  Lifinity: LifinitySVG,
  Saros: SarosSVG,
  Cykura: CykuraSVG,
  Marinade: MarinadeSVG,
  Stepn: StepnSVG,
  Invariant: InvariantSVG,
  Meteora: MeteoraSVG,
  GooseFX: GooseFXSVG,
  Balansol: BalansolSVG,
  Dradex: DradexSVG,
  Openbook: OpenbookSVG,
  "Openbook v2": OpenbookSVG,
  Oasis: OasisSVG,
  BonkSwap: BonkSwapPNG,
  Symmetry: SymmetrySVG,
  Phoenix: PhoenixSVG,
  FluxBeam: FluxBeamPNG,
  "Helium Network": HeliumSVG,
  Sanctum: SanctumSVG,
  Dexlab: DexlabSVG,
};

// Use this to hide the AMMs that are not ready to be shown
const HIDE_AMMS: string[] = ["Perps"];

const getFrequencyText = (mode: Mode) =>
  mode === "day" ? `24H` : mode === "week" ? `Weekly` : `Monthly`;

const TopPoolProviders = ({ mode }: { mode: Mode }) => {
  const { data, isLoading } = useTradingInfo(mode);
  const frequencyText = getFrequencyText(mode);

  const ammsWithVolume = (
    data?.lastXVolumeByAMMs.map((item) => item.amm) || []
  ).filter((amm) => !HIDE_AMMS.includes(amm));
  const ammsWithoutVolume = Object.keys(PoolProviderLogoMap).filter(
    (name) => !ammsWithVolume.includes(name) && !HIDE_AMMS.includes(name)
  );
  const getAmount = (ammName: string) => {
    return (
      data?.lastXVolumeByAMMs.find(({ amm }) => amm === ammName)?.amount || 0
    );
  };

  return (
    <div>
      <h3 className="dark:text-white text-[20px] leading-none font-semibold">
        Top Pool Providers
      </h3>
      <div className="grid gap-2 text-[12px] leading-[14px] dark:text-[rgba(255,255,255,0.35)] text-[rgba(0,0,0,0.35)] mt-[18px]">
        <div className="bg-white grid grid-cols-[20px,1fr,auto] gap-1 px-6 py-3 rounded-lg dark:bg-[#32323A] items-center shadow-row dark:shadow-row-dark">
          <p>#</p>
          <p>Pool Provider</p>
          <p className="justify-self-end ">{`${frequencyText} Volume`}</p>
        </div>
        {isLoading
          ? Array(10)
              .fill(null)
              .map((_, idx) => <RowSkeleton key={idx} />)
          : ammsWithVolume.map((name, idx) => {
              return (
                <div
                  key={name}
                  className="bg-white grid grid-cols-[20px,1fr,auto] gap-1 px-6 py-3 rounded-lg dark:bg-[#32323A] items-center shadow-row dark:shadow-row-dark"
                >
                  <p>{idx + 1}</p>
                  <p
                    className="text-[14px] leading-[20px] dark:text-white font-medium flex items-center"
                    translate="no"
                  >
                    {PoolProviderLogoMap[name] && (
                      <img
                        alt={name}
                        src={PoolProviderLogoMap[name] || ""}
                        height={28}
                        width={28}
                      />
                    )}
                    <span className="ml-3 text-[rgba(0,0,0,0.75)] dark:text-white">
                      {name}
                    </span>
                  </p>
                  <p className="justify-self-end text-[rgba(0,0,0,0.5)] dark:text-inherit">
                    <StaticNumberFormat
                      value={Number(getAmount(name))}
                      decimalScale={0}
                    />
                  </p>
                </div>
              );
            })}
        {ammsWithoutVolume.map((name, idx) => {
          return (
            <div
              key={name}
              className="bg-white grid grid-cols-[20px,1fr,auto] gap-1 px-6 py-3 rounded-lg dark:bg-[#32323A] items-center shadow-row dark:shadow-row-dark"
            >
              <p>{ammsWithVolume.length + idx + 1}</p>
              <p
                className="text-[14px] leading-[20px] dark:text-white font-medium flex items-center"
                translate="no"
              >
                {PoolProviderLogoMap[name] && (
                  <img
                    alt={name}
                    src={PoolProviderLogoMap[name] || ""}
                    height={28}
                    width={28}
                  />
                )}
                <span className="ml-3 text-[rgba(0,0,0,0.75)] dark:text-white">
                  {name}
                </span>
              </p>
              <p className="justify-self-end text-[rgba(0,0,0,0.5)] dark:text-inherit">
                -
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopPoolProviders;
