'use client';

import { RadicalIcon } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { algorithmVariants } from "@/lib/colorUtil";
import { useSearchParamsState } from "@/lib/searchParamsState";

export function Algorithm() {
  const [algorithm, setAlgorithm] = useSearchParamsState("algorithm");

  return (
    <div
      className="inline-flex p-0.5 items-center rounded-md shadow-sm border border-gray-300 bg-gray-100"
      title="Choose an algorithm to calculate the delta E"
    >
      <RadicalIcon className="size-5 text-gray-400 m-1.5" aria-hidden="true" />
      <ToggleGroup
        type="single"
        size="sm"
        value={algorithm}
        onValueChange={setAlgorithm}
      >
        {algorithmVariants.map((variant) => (
          <ToggleGroupItem value={variant} aria-label={variant}>
            {variant}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
}
