'use client';

import { algorithmVariants } from "@/lib/colorUtil";
import { useSearchParamsState } from "@/lib/searchParamsState";
import { cn } from "@/lib/utils";
import { RadicalIcon } from "lucide-react";
import { DropdownComponent } from "./dropdownComponent";
import { ToggleComponent } from "./toggleComponent";

export function AlgorithmWidget({ className }) {
  const [value, setValue] = useSearchParamsState("algorithm");
  const icon = <RadicalIcon className="size-5 text-gray-400 m-1.5" aria-hidden="true" />

  return (
    <>
      <DropdownComponent
        className={cn("md:hidden", className)}
        variants={algorithmVariants}
        value={value}
        setValue={setValue}
      >
        {icon}
        {value}
      </DropdownComponent>

      <ToggleComponent
        className={cn("max-md:hidden", className)}
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
