'use client';

import { RadicalIcon } from "lucide-react";
import { algorithmVariants } from "../lib/colorUtil";
import { useSearchParamsState } from "../lib/searchParamsState";
import { RadioBottons } from "./RadioBottons";

export function RadioAlgorithms() {
  const [algorithm, setAlgorithm] = useSearchParamsState("algorithm");

  return (
    <div className="isolate h-10 flex-grow flex rounded-md shadow-sm bg-gray-100 border border-gray-300"
      title="Choose an algorithm to calculate the delta E"
    >
      <label
        className="inset-y-0 right-0 flex items-center pr-1 pl-2"
        htmlFor="message-type"
        title="Choose an algorithm to calculate the delta E"
      >
        <RadicalIcon className="size-5 text-gray-400" aria-hidden="true"
        />
      </label>
      <RadioBottons
        variants={algorithmVariants}
        currentValue={algorithm}
        setValue={setAlgorithm}
      />
    </div>
  );
}
