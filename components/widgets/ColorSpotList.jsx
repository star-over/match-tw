import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ColorSpot } from "@/components/widgets/ColorSpot";
import { InputColorText } from "@/components/widgets/InputColorText";
import { AlgorithmWidget } from "@/components/widgets/algorithmWidget";
import { SpotCountWidget } from "@/components/widgets/spotCountWidget";
import { getColorTexts, getContrastStyle, getMatchColors, textToColor } from "@/lib/colorUtil";
import React from "react";
import Link from "next/link";

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

  const currentColorVariants = textColors.map((textColor, i) => (
    <React.Fragment key={i}>
      <Badge
        style={getContrastStyle(textColor)}>
        {textColor}
      </Badge>
    </React.Fragment>
  ));


  // todo: make it with save state: algo and spot count
  const makeColorLink = (targetColor) => (
    <Link
      className="underline"
      href={
        {
          pathname: "/",
          query: { c: targetColor }
        }}
      scroll={false}>
      {targetColor}
    </Link>
  );

  const sample1 = makeColorLink("tan");
  const sample2 = makeColorLink("#748af9");
  const sample3 = makeColorLink("rgb(173, 250, 77)");
  const sample4 = makeColorLink("color(display-p3 1 0 0.4)");

  return (
    <div
      className="min-w-full mt-2 lg:mt-8 transition-all duration-300
      rounded-lg sm:p-2 md:p-4 lg:p-10 shadow-lg"

      // todo: add fallback here, if color is incorrect
      style={getContrastStyle(textColors.at(0))}
    >
      <div className="mx-auto max-w-xl min-w-min col-span-full">
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl mb-2 text-gray-600">Find closest color</h3>
          <p className="m-2 text-gray-600 text-sm text-balance" >
            The color can be specified as a word such as&nbsp;
            {sample1}, or in hex&nbsp;
            {sample2}&#160;format, or in CSS format&#160;
            {sample3} or in new format {sample4}
          </p>

          {/* --- Toolbar --- */}
          <div className="flex gap-1.5">
            <AlgorithmWidget />
            <SpotCountWidget />
          </div>
          <InputColorText />
        </div>

        <div className="text-center mt-2 px-4 sm:text-sm">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Current color variants</AccordionTrigger>
              <AccordionContent>
                {currentColorVariants}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

      </div>
      <span className="grid grid-cols-1 max-w-sm mt-4 px-4 pb-24 sm:max-w-3xl mx-auto gap-8
        sm:grid-cols-3 sm:gap-x-4 md:gap-x-8 transition-all duration-300">
        {colorSpots}
      </span>
    </div>
  );
}
