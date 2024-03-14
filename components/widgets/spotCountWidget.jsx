'use client';

import { LayersIcon } from "lucide-react";
import { spotCountsVariants } from "@/lib/colorUtil";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useSearchParamsState } from "@/lib/searchParamsState";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function SpotCount() {
  const [value, setValue] = useSearchParamsState("spotCount");

  return (
    <div
      className="inline-flex p-0.5 items-center rounded-md shadow-sm border border-gray-300 bg-gray-100"
    >

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <LayersIcon className="size-5 text-gray-400 m-1.5" aria-hidden="true" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Select number of suggested colors</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>


      <ToggleGroup
        type="single"
        value={value}
        onValueChange={setValue}
      >
        {spotCountsVariants.map((variant) => (
          <ToggleGroupItem key={variant} value={variant} aria-label={variant}>
            {variant}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
