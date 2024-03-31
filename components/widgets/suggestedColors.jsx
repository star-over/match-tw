import { ColorSpot } from "@/components/widgets/ColorSpot";
import { getMatchColors } from "@/lib/colorUtil";

export async function SuggestedColors({ targetColor, algorithm, spotCount }) {
  // -------- delay ------------
  // await new Promise((resolve) => setTimeout(resolve, 3000))
  const matchColors = await getMatchColors(targetColor, algorithm, spotCount);
  const colorSpots = matchColors.map(({ colorHex, colorName, dE }) => (
    <ColorSpot
      key={colorHex}
      dE={dE}
      colorName={colorName}
      colorHex={colorHex}
    />));

  return (
    <ul className="grid grid-cols-1 max-w-sm mt-4 px-4 pb-24
        sm:max-w-3xl mx-auto gap-8 sm:grid-cols-3 sm:gap-x-4 md:gap-x-8
        transition-all duration-300">
      {colorSpots}
    </ul>
  );
}
