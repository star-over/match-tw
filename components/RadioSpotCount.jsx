'use client'

import { RadioBottons } from "./RadioBottons";
import { spotCountsVariants } from "../lib/colorUtil";
import { useSearchParamsState } from "../lib/searchParamsState";
import { LayersIcon } from "lucide-react";

export const RadioSpotCount = () => {
  const [spotCounts, setSpotCounts] = useSearchParamsState("spotCount");

  return (
    <div className="isolate h-10 flex-grow flex rounded-md shadow-sm bg-gray-100 border border-gray-300"
      title="Select the number of colours suggested"
    >
      <label
        className="inset-y-0 right-0 flex items-center pr-1 pl-2"
        htmlFor="message-type"
      >
        <LayersIcon className="size-5 text-gray-400" aria-hidden="true" />
      </label>
      <RadioBottons
        variants={ spotCountsVariants }
        currentValue={ spotCounts }
        setValue={ setSpotCounts }
      />
    </div>
  )
};
