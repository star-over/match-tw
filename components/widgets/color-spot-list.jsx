import { Suspense } from "react";
import { getColorTexts, getContrastStyle, textToColor } from "@/lib/color-util";
import { SuggestedColors, SuggestedColorsSkeleton } from "@/components/widgets/suggested-colors";
import { CurrentColorVariants } from "@/components/widgets/current-color-variants";

export default async function ColorSpotList({ targetTextColor, algorithm, spotCount }) {
  // todo: validate is color correct
  const targetColor = textToColor(targetTextColor).to("srgb");
  const textColors = await getColorTexts(targetColor);

  return (
    <div
      className="mt-2 min-w-full rounded-lg shadow-lg transition-all duration-300 sm:p-2 md:p-4 lg:mt-8 lg:p-10"
      // todo: add fallback here, if color is incorrect
      style={getContrastStyle(textColors.at(0))}
    >
      <div className="col-span-full mx-auto min-w-min max-w-xl">
        <CurrentColorVariants {...{ textColors }} />
      </div>

      <Suspense
        key={JSON.stringify({ targetColor, algorithm, spotCount })}
        fallback={<SuggestedColorsSkeleton {...{ spotCount }} />}
      >
        <SuggestedColors {...{ targetColor, algorithm, spotCount }} />
      </Suspense>
    </div>
  );
}
