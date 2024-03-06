import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const userLocale =
  typeof window !== "undefined"
    ? navigator.languages && navigator.languages.length
      ? navigator.languages[0]
      : navigator.language
    : "en-US";

export const numberFormatter = new Intl.NumberFormat(userLocale, {
  style: "decimal",
  minimumFractionDigits: 0,
  maximumFractionDigits: 12,
});

export const formatNumber = {
  format: (val?: number, precision?: number) => {
    if (!val && val !== 0) {
      return "--";
    }

    return numberFormatter.format(
      precision !== undefined ? +val.toFixed(precision) : val
    );
  },
};

export const detectedSeparator = formatNumber.format(1.1).substring(1, 2);

var SI_SYMBOL = ["", "k", "M", "B", "G", "T", "P", "E"];

const abbreviateNumber = (number: number, precision: number) => {
  let tier = (Math.log10(number) / 3) | 0;
  let scaled = number;
  let suffix = SI_SYMBOL[tier];
  if (tier !== 0) {
    let scale = Math.pow(10, tier * 3);
    scaled = number / scale;
  }

  return scaled.toFixed(precision) + suffix;
};

export const formatAmount = (
  val: number,
  precision: number = 6,
  abbr: boolean = true
) => (abbr ? abbreviateNumber(val, precision) : val.toFixed(precision));

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
