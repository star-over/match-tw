import { contrastStyle } from "../utils/utils";

export const ColorSpot = (props) => {
  const { colorName, colorHex, dE} = props;

  return (
    <div
      className="text-md font-mono text-center rounded-xl h-32
      flex flex-col justify-center items-center transition-all
      delay-100 duration-300 hover:scale-110"
      style={ contrastStyle(colorHex) }
    >
      <div>{ dE.toFixed(2) }</div>
      <div>{ colorName }</div>
      <div>{ colorHex }</div>
    </div>
  )
};
