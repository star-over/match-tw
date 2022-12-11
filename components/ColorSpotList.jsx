import { ColorSpot } from "./ColorSpot";

export const ColorSpotList = (props) => {
  const { colors } = props;

  const colorSpots = colors
    .map(({ colorHex, colorName }) => (
      <ColorSpot
        key={ colorHex }
        colorName={ colorName }
        colorHex={ colorHex }
      />))

  return (
    <div
      className="flex flex-col w-full"
    >
      { colorSpots }
    </div>
  )
};
