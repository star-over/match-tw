'use client';

import { Spinner } from "@/components/ui/spinner";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function ToggleComponent({ children, className, variants, value, setValue, tootip }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSetValue = (value) => {
    setIsLoading(true);
    setValue(value);
  }

  return (
    <div
      className={cn(
        "inline-flex p-0.5 items-center rounded-md shadow-sm border border-gray-300 bg-gray-100",
        className)}
    >

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {isLoading ? <Spinner /> : children}
          </TooltipTrigger>
          <TooltipContent>
            <p>{tootip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>


      <ToggleGroup
        type="single"
        value={value}
        onValueChange={handleSetValue}
      >
        {variants.map((variant) => (
          <ToggleGroupItem key={variant} value={variant} aria-label={variant}>
            {variant}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
