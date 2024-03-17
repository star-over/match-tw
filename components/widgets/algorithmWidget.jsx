'use client';

import { RadicalIcon } from "lucide-react";
import { algorithmVariants } from "@/lib/colorUtil";
import { useSearchParamsState } from "@/lib/searchParamsState";
import { ToggleComponent } from "./toggleComponent";
import { DropdownComponent } from "./dropdownComponent";
import { cn } from "@/lib/utils";

export function AlgorithmWidget({ className }) {
  const [value, setValue] = useSearchParamsState("algorithm");
  const icon = <RadicalIcon className="size-5 text-gray-400 m-1.5" aria-hidden="true" />

  return (
    <>
      <DropdownComponent
        className={cn("sm:hidden", className)}
        variants={algorithmVariants}
        value={value}
        setValue={setValue}
      >
        {icon}
        {value}
      </DropdownComponent>

      <ToggleComponent
        className={cn("max-sm:hidden", className)}
        variants={algorithmVariants}
        value={value}
        setValue={setValue}
        tootip={"Choose an algorithm to calculate the delta E"}
      >
        {icon}
      </ToggleComponent>
    </>
  );
}
