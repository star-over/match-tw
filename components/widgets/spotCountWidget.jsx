/* eslint-disable jsx-a11y/label-has-associated-control */

"use client";

import { LayersIcon } from "lucide-react";
import { spotCountsVariants } from "@/lib/colorUtil";
import { useSearchParamsState } from "@/lib/searchParamsState";
import { ToggleComponent } from "@/components/widgets/toggleComponent";
import { DropdownComponent } from "@/components/widgets/dropdownComponent";
import { cn } from "@/lib/utils";

export function SpotCountWidget({ className }) {
  const [value, setValue] = useSearchParamsState("spotCount");
  const icon = <LayersIcon className="m-1.5 size-5 text-gray-400" aria-hidden="true" />;

  return (
    <>
      <label
        className="sr-only"
        htmlFor="colorSpots"
      >
        Select number of suggested colors
      </label>
      <DropdownComponent
        id="colorSpots"
        className={cn("sm:hidden", className)}
        variants={spotCountsVariants}
        value={value}
        setValue={setValue}
      >
        {icon}
        {value}
      </DropdownComponent>

      <ToggleComponent
        id="colorSpots"
        className={cn("max-sm:hidden", className)}
        variants={spotCountsVariants}
        value={value}
        setValue={setValue}
        tootip="Select number of suggested colors"
      >
        {icon}
      </ToggleComponent>
    </>
  );
}
