import { ColorSpot } from "@/components/widgets/ColorSpot";
import { getMatchColors } from "@/lib/colorUtil";
import { Skeleton } from "@/components/ui/skeleton";

const commonStyle = "grid grid-cols-1 max-w-sm mt-4 px-4 pb-24 sm:max-w-3xl mx-auto gap-8 sm:grid-cols-3 sm:gap-x-4 md:gap-x-8 transition-all duration-300";

export async function SuggestedColors({ targetColor, algorithm, spotCount }) {
  // -------- delay ------------
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const matchColors = await getMatchColors(targetColor, algorithm, spotCount);
  const colorSpots = matchColors.map(({ colorHex, colorName, dE }) => (
    <ColorSpot
      key={colorHex}
      dE={dE}
      colorName={colorName}
      colorHex={colorHex}
    />
  ));

  return (
    <ul className={commonStyle}>
      {colorSpots}
    </ul>
  );
}

export function SuggestedColorsSkeleton({ spotCount }) {
  const skeletons = Array.from({ length: spotCount }, (_, i) => i);

  return (
    <div className={commonStyle}>
      {skeletons.map((value) => (
        <Skeleton
          key={value}
          className="rounded-xl h-32 min-w-32 flex items-center justify-center"
        >
          <div className="space-y-4">
            <Skeleton className="h-3 w-20 bg-gray-400" />
            <Skeleton className="h-3 w-20 bg-gray-400" />
            <Skeleton className="h-3 w-20 bg-gray-400" />
          </div>
        </Skeleton>
      ))}
    </div>
  );
}
