import { getColorTexts, getContrastStyle, textToColor } from "@/lib/colorUtil";
import React, { Suspense } from "react";
import { SuggestedColors, SuggestedColorsSkeleton } from "@/components/widgets/suggestedColors";
import { CurrentColorVariants } from "@/components/widgets/currentColorVariants";

export default async function ColorSpotList({ targetTextColor, algorithm, spotCount }) {
  // todo: validate is color correct
  const targetColor = textToColor(targetTextColor).to("srgb");
  const textColors = await getColorTexts(targetColor);

  return (
    <div
      className="min-w-full mt-2 lg:mt-8 transition-all duration-300
      rounded-lg sm:p-2 md:p-4 lg:p-10 shadow-lg"
      // todo: add fallback here, if color is incorrect
      style={getContrastStyle(textColors.at(0))}>
      <div className="mx-auto max-w-xl min-w-min col-span-full">
        <CurrentColorVariants {...{ textColors }} />
      </div>

      <Suspense
        key={JSON.stringify({ targetColor, algorithm, spotCount })}
        fallback={<SuggestedColorsSkeleton {...{ spotCount }} />}>
        <SuggestedColors {...{ targetColor, algorithm, spotCount }} />
      </Suspense>
    </div>
  );
}
