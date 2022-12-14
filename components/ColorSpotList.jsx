import { contrastStyle } from "../utils/utils";
import { ColorSpot } from "./ColorSpot";

export const ColorSpotList = (props) => {
  const { colors, targetColorHex } = props;


  const colorSpots = colors
    .map(({ colorHex, colorName }) => (
      <ColorSpot
        key={ colorHex }
        colorName={ colorName }
        colorHex={ colorHex }
      />))

  return (
    <div
      className="grid grid-cols-1 gap-12 p-12 rounded mt-6
      sm:mx-2 sm:grid-cols-2 sm:rounded-lg sm:gap-x-6
      md:mx-4 md:gap-x-12
      lg:mx-8 lg:grid-cols-3 lg:rounded-xl
      xl:mx-10 xl:rounded-xl
      2xl:mx-12 2xl:rounded-3xl"
      style={ contrastStyle(targetColorHex) }
    >
      { colorSpots }
    </div>
  )
};
