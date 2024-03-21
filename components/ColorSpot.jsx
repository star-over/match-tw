import { getContrastStyle } from "@/lib/colorUtil";
import { CopyButton } from "./copyButton";

export function ColorSpot({ colorName, colorHex, dE }) {

  return (
    <div
      className="text-md text-center rounded-xl h-32
      flex flex-col justify-center items-center transition-all
      delay-100 duration-300
      outline outline-1 -outline-offset-8"
      style={getContrastStyle(colorHex)}
    >

      <CopyButton text={colorName}></CopyButton>
      <CopyButton text={colorHex}></CopyButton>
      <div>
        <span className="text-xs">dE:&nbsp;</span>
        <span className="text-sm">{dE.toFixed(2)}</span>
      </div>

    </div>
  );
}
