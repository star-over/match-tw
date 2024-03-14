'use client';

import { RadicalIcon } from "lucide-react";
import { algorithmVariants } from "@/lib/colorUtil";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useSearchParamsState } from "@/lib/searchParamsState";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function Algorithm() {
  const [value, setValue] = useSearchParamsState("algorithm");

  return (
    <div
      className="inline-flex p-0.5 items-center rounded-md shadow-sm border border-gray-300 bg-gray-100"
    >

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <RadicalIcon className="size-5 text-gray-400 m-1.5" aria-hidden="true" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Choose an algorithm to calculate the delta E</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>


      <ToggleGroup
        type="single"
        value={value}
        onValueChange={setValue}
      >
        {algorithmVariants.map((variant) => (
          <ToggleGroupItem key={variant} value={variant} aria-label={variant}>
            {variant}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
