import { CopyButton } from "@/components/widgets/copyButton";
import { getContrastStyle } from "@/lib/colorUtil";
import { cn } from "@/lib/utils";

export function ColorSpot({ colorName, colorHex, dE }) {
  const isNeedBorder = (dE < 2.5);
  const deFixed = dE.toFixed(2);

  return (
    <li
      className={cn(
        "text-md text-center rounded-xl h-32",
        "flex flex-col justify-center items-center transition-all",
        "delay-100 duration-300 outline-1 -outline-offset-8",
        { "outline": isNeedBorder },
      )}
      style={getContrastStyle(colorHex)}
    >

      <CopyButton text={colorName} />
      <CopyButton text={colorHex} />
      <div>
        <span className="text-xs">dE:&nbsp;</span>
        <span className="text-sm">{deFixed}</span>
      </div>

    </li>
  );
}
