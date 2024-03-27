// @ts-check
// @ts-ignore
import Color from "colorjs.io";
import { twColors } from "./colorThemeDefault";

export const algorithmVariants = ["2000", "76", "Jz", "CMC", "ITP", "OK"];
export const spotCountsVariants = ["12", "9", "6", "3"];
export const defaultColor = "slategray";

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

export async function getColorTexts(targetColor) {
  return new Promise((resolve, reject) => {
    try {
      // @ts-ignore
      const result = [...new Set([
        // .replaceAll("none", "0") - fix "none" in hsl problem: https://github.com/color-js/color.js/issues/475
        targetColor.toString({ format: "color", precision: 3, inGamut: false }).replaceAll("none", "0"),
        targetColor.toString({ format: "color", precision: 3 }).replaceAll("none", "0"),
        targetColor.toString({ format: "rgb", precision: 3, inGamut: false }).replaceAll("none", "0"),
        targetColor.toString({ format: "rgb", precision: 3 }).replaceAll("none", "0"),
        targetColor.to("lch").toString({ format: "lch", precision: 3 }).replaceAll("none", "0"),
        targetColor.to("hsv").toString({ format: "hsv", precision: 3 }).replaceAll("none", "0"),
        targetColor.to("p3").toString({ format: "p3", precision: 3 }).replaceAll("none", "0"),
        targetColor.toString({ format: "hex", precision: 3 }).replaceAll("none", "0"),
      ])];

      resolve(result);

    } catch (error) {
      reject(error);
    }
  });

}

export async function getMatchColors(targetColor, algorithm, spotCount) {
  return new Promise((resolve, reject) => {
    if (targetColor === false) resolve([]);

    try {
      const result = twColors.map((currColor) => ({
        ...currColor,
        // @ts-ignore
        dE: targetColor.deltaE(currColor.color, algorithm)
      }))
        .sort(({ dE: a }, { dE: b }) => a - b)
        .slice(0, Number(spotCount));
      // (() => new Promise((res) => setTimeout(res, 3000)))().then(() => resolve(result))
      resolve(result);

    } catch (error) {
      reject(error);
    }
  });

}

function getContrast(targerColor, targetContrast) {
  const colors = ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a"];
  return colors
    ?.map((color) => [Math.abs(Color.contrast(color, targerColor, "WCAG21") - targetContrast), color]) // [ [1.176298336596253, "#0f172a"] ]
    ?.sort(([a], [b]) => Number(a) - Number(b)) // lowrest - first
    ?.at(0) // [1.176298336596253, "#0f172a"]
    ?.at(1); // "#0f172a"
}

function getContrastColor(targerColor) {
  const targetContrast = 4;
  return getContrast(targerColor, targetContrast)
}

export function getContrastStyle(color) {
  return {
    backgroundColor: color,
    color: getContrastColor(color),
    "outlineColor": getContrast(color, 2),
  };
}
