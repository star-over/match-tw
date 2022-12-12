import { getContrastColorHex } from "../utils/utils";
import { ColorSpot } from "./ColorSpot";

export const ColorSpotList = (props) => {
  const { colors, targetColorHex } = props;
  const divStyle = {
    backgroundColor: targetColorHex,
    color: getContrastColorHex(targetColorHex),
  };

  const colorSpots = colors
    .map(({ colorHex, colorName }) => (
      <ColorSpot
        key={ colorHex }
        colorName={ colorName }
        colorHex={ colorHex }
      />))

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-3 gap-12 p-12 rounded-xl shadow-lg sm:m-2 md:m-4 lg:m-8 xl: 2xl:m-12"
      style={ divStyle }
    >
      { colorSpots }
    </div>
  )
};
