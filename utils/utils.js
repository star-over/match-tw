import Color from "colorjs.io";

export const toHex = (color) => Color.defaults.display_space.formats.hex.serialize(color.coords);

export const parseTextColor = (text) => {
  try {
    return Color.get(text);
  } catch (err) {
    return false;
  }
}
