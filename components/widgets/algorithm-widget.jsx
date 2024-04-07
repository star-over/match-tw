/* eslint-disable jsx-a11y/label-has-associated-control */

"use client";

import { RadicalIcon } from "lucide-react";
import { algorithmVariants } from "@/lib/color-util";
import { useSearchParamsState } from "@/lib/search-params-state";
import { cn } from "@/lib/utils";
import { DropdownComponent } from "./dropdown-component";
import { ToggleComponent } from "./toggle-component";

export function AlgorithmWidget({ className }) {
  const [value, setValue] = useSearchParamsState("algorithm");
  const icon = <RadicalIcon className="m-1.5 size-5 text-gray-400" aria-hidden="true" />;

  return (
    <>
      <label
        className="sr-only"
        htmlFor="algorithm"
      >
        Choose an algorithm to calculate the delta E
      </label>
      <DropdownComponent
        id="algorithm"
        className={cn("md:hidden", className)}
        variants={algorithmVariants}
        value={value}
        setValue={setValue}
      >
        {icon}
        {value}
      </DropdownComponent>
      <ToggleComponent
        id="algorithm"
        className={cn("max-md:hidden", className)}
        variants={algorithmVariants}
        value={value}
        setValue={setValue}
        tootip="Choose an algorithm to calculate the delta E"
      >
        {icon}
      </ToggleComponent>
    </>
  );
}
