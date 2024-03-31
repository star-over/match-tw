"use client";

import { LayersIcon } from "lucide-react";
import { spotCountsVariants } from "@/lib/colorUtil";
import { useSearchParamsState } from "@/lib/searchParamsState";
import { ToggleComponent } from "@/components/widgets/toggleComponent";
import { DropdownComponent } from "@/components/widgets/dropdownComponent";
import { cn } from "@/lib/utils";

export function SpotCountWidget({ className }) {
  const [value, setValue] = useSearchParamsState("spotCount");
  const icon = <LayersIcon className="size-5 text-gray-400 m-1.5" aria-hidden="true" />;

  return (
    <>
      <DropdownComponent
        className={cn("sm:hidden", className)}
        variants={spotCountsVariants}
        value={value}
        setValue={setValue}
      >
        {icon}
        {value}
      </DropdownComponent>

      <ToggleComponent
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
