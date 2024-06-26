import { CopyButton } from "@/components/widgets/copy-button";
import { getContrastStyle } from "@/lib/color-util";
import { cn } from "@/lib/utils";

export function ColorSpot({ colorName, colorHex, dE }) {
  const isNeedBorder = (dE < 2.5);
  const deFixed = dE.toFixed(2);

  return (
    <li
      className={cn(
        "flex h-32 flex-col items-center justify-center rounded-xl text-center outline-1 -outline-offset-8 transition-all delay-100 duration-300",
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
