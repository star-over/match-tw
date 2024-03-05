'use client';

import { algorithmVariants } from "../lib/colorUtil";
import { useSearchParamsState } from "../lib/searchParamsState";
import { RadioBottons } from "./RadioBottons";
import { CodeBracketSquareIcon } from '@heroicons/react/20/solid';

export function RadioAlgorithms() {
  const [algorithm, setAlgorithm] = useSearchParamsState("algorithm");

  return (
    <div className="isolate h-10 flex-grow flex rounded-md shadow-sm bg-gray-100/50 border border-gray-300/80"
      title="Choose an algorithm to calculate the delta E"
    >
      <label
        className="inset-y-0 right-0 flex items-center pr-1 pl-2"
        htmlFor="message-type"
        title="Choose an algorithm to calculate the delta E"
      >
        <CodeBracketSquareIcon
          className="h-5 w-5 text-gray-400/80"
          aria-hidden="true"
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
