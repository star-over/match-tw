// @ts-check
import Color from "colorjs.io";
import { twColors } from "./colorThemeDefault";

export const algorithmVariants = ["2000", "76", "Jz", "CMC", "ITP", "OK"];
export const spotCountsVariants = ["12", "9", "6", "3"];
export const defaultColor = "#123456";

export function textToColor(text) {
  try {
    return Color.get(text);
  } catch (err) {
    return false;
  }
}

export function validateColor(text) {
  try {
    return Color.parse(text);
  } catch (err) {
    return false;
  }
}

export function getMatchColors(targetTextColor, algorithm, spotCount) {
  const color = textToColor(targetTextColor);
  if (color === false) return [];

  const result = twColors.map((currColor) => ({
    ...currColor,
    // @ts-ignore
    dE: color.deltaE(currColor.color, algorithm)
  }))
    .sort(({ dE: a }, { dE: b }) => a - b)
    .slice(0, Number(spotCount));

    return result;
}

function getContrastColor(targerColor) {
  const targetContrast = 4;
  const colors = ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a"];
  return colors
    ?.map((color) => [Math.abs(Color.contrast(color, targerColor, "WCAG21") - targetContrast), color]) // [ [1.176298336596253, "#0f172a"] ]
    ?.sort(([a], [b]) => Number(a) - Number(b)) // lowrest - first
    ?.at(0) // [1.176298336596253, "#0f172a"]
    ?.at(1); // "#0f172a"
}

export function contrastStyle(color) {
  return {
    backgroundColor: color,
    color: getContrastColor(color),
  };
}
