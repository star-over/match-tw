import { getContrastStyle, getColorTexts, getMatchColors, textToColor } from "../lib/colorUtil";
import { ColorSpot } from "./ColorSpot";
import React from "react";
import { AlgorithmWidget } from "./widgets/algorithmWidget";
import { SpotCountWidget } from "./widgets/spotCountWidget";
import { InputColorText } from "./InputColorText";

export default async function ColorSpotList({ targetTextColor, algorithm, spotCount }) {
  // todo: validate is color correct
  const targetColor = textToColor(targetTextColor).to("srgb");
  const textColors = await getColorTexts(targetColor);
  const matchColors = await getMatchColors(targetColor, algorithm, spotCount);
  const colorSpots = matchColors.map(({ colorHex, colorName, dE }) => (
    <ColorSpot
      key={colorHex}
      dE={dE}
      colorName={colorName}
      colorHex={colorHex}
    />));

  // todo: make it as chip (tag) with copy featute
  const currentColorVariants = textColors.map((textColor, i) => (
    <React.Fragment key={i}>
      <span
        className="py-1"
        style={getContrastStyle(textColor)}
      >
        {textColor}
      </span>
      <br />
    </React.Fragment>
  ));

  return (
    <div
      className=" min-w-full  mt-2 lg:mt-8
      transition-all  duration-300
       rounded-lg sm:p-2 md:p-4 lg:p-10 shadow-lg"

      // todo: add fallback here, if color is incorrect
      style={getContrastStyle(textColors.at(0))}
    >
      <div className="mx-auto max-w-xl min-w-min col-span-full">
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          {/* --- Toolbar --- */}
          <div className="flex gap-1.5">
            <AlgorithmWidget />
            <SpotCountWidget />
          </div>
          <InputColorText />
        </div>

        <div className="pt-4 font-mono text-xs sm:text-sm">
          <p className="text-center">
            <span >current color variants: </span><br />
            {currentColorVariants}
          </p>
        </div>

      </div>
      <div className="grid grid-cols-1 max-w-sm mt-4 px-4 sm:max-w-3xl mx-auto gap-4
        sm:grid-cols-3 lg:gap-8
        transition-all duration-300">
        {colorSpots}
      </div>
    </div>
  );
}
