import { getContrastColorHex } from "../utils/utils";

export const ColorSpot = (props) => {
  const { colorName, colorHex } = props;
  const divStyle = {
    backgroundColor: colorHex,
    color: getContrastColorHex(colorHex),
  };

  return (
    <div
      className="text-md text-center rounded-xl h-20 flex justify-center items-center"
      style={ divStyle }
    >
      <div>{ colorName }</div>
    </div>
  )
};
