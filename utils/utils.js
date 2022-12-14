import Color from "colorjs.io";

export const toHex = (color) => Color.defaults.display_space.formats.hex.serialize(color.coords);

export const parseTextColor = (text) => {
  try {
    return Color.get(text);
  } catch (err) {
    return false;
  }
};

export const getContrastColorHex = (targerColor) => {
  const targerContrast = 4;
  const colors = ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1", "#94a3b8", "#64748b", "#475569", "#334155", "#1e293b", "#0f172a"];
  return colors
    .map((color) => [Math.abs(Color.contrast(color, targerColor, "WCAG21") - targerContrast), color]) // [ [1.176298336596253, "#0f172a"] ]
    .sort(([a], [b]) => a - b) // lowrest - first
    .at(0) // [1.176298336596253, "#0f172a"]
    .at(1); // "#0f172a"
};

export const contrastStyle = (colorHex) => ({
  backgroundColor: colorHex,
  color: getContrastColorHex(colorHex),
})
