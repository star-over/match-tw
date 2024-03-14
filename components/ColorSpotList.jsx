import { getContrastStyle, getColorTexts, getMatchColors, textToColor } from "../lib/colorUtil";
import { ColorSpot } from "./ColorSpot";
import { Toolbar } from "./Toolbar";
import React from "react";

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

  return (
    <div
      className="grid grid-cols-1 min-w-max gap-6 px-8 py-8 mt-6
      transition-all delay-75 duration-700
      sm:grid-cols-2 sm:rounded-lg sm:gap-x-6 sm:py-8 shadow-lg
      lg:p-10 lg:grid-cols-3
      xl:p-16
      2xl:mx-12 2xl:rounded-3xl"

      // todo: add fallback here, if color is incorrect
      style={getContrastStyle(textColors.at(0))}
    >

      <div className="mx-auto max-w-xl min-w-min col-span-full">
        <div className="bg-gray-200 px-4 pt-6 pb-2 rounded-lg shadow-lg">
          <Toolbar />
        </div>
        <div className="pt-4 font-mono text-xs sm:text-sm">
          <p className="text-center">
            <span >current color variants: </span><br />

            {/* // todo: make it as chip (tag) with copy featute */}
            {textColors.map((textColor, i) => (
              <React.Fragment key={i}>
                <span
                  className="mx-4 px-4 py-1"
                  style={getContrastStyle(textColor)}
                >
                  {textColor}
                </span>
                <br />
              </React.Fragment>
            ))}

          </p>
        </div>
      </div>

      {colorSpots}

    </div>
  );
}
