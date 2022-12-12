import { getContrastColorHex } from "../utils/utils";

export const ColorSpot = (props) => {
  const { colorName, colorHex } = props;
  const divStyle = {
    backgroundColor: colorHex,
    color: getContrastColorHex(colorHex),
  };

  return (
    <div
      className="w-full text-md text-center flex-grow"
      style={ divStyle }
    >
      { colorName }
    </div>
  )
};
