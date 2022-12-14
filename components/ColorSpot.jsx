import { contrastStyle } from "../utils/utils";

export const ColorSpot = (props) => {
  const { colorName, colorHex } = props;

  return (
    <div
      className="text-md text-center rounded-xl h-32 flex flex-col justify-center items-center"
      style={ contrastStyle(colorHex) }
    >
      <div>{ colorName }</div>
      <div>{ colorHex }</div>

    </div>
  )
};
