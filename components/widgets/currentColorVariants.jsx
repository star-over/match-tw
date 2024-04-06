import React from "react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { getContrastStyle } from "@/lib/colorUtil";

export async function CurrentColorVariants({ textColors }) {
  const currentColorVariants = textColors.map((textColor, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <React.Fragment key={i}>
      <Badge
        style={getContrastStyle(textColor)}
      >
        {textColor}
      </Badge>
    </React.Fragment>
  ));

  return (
    <div className="mt-2 px-4 text-center sm:text-sm">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="justify-center gap-2">
            Current color variants
          </AccordionTrigger>
          <AccordionContent>
            {currentColorVariants}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
