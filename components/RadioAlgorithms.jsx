'use client';

import { algorithmVariants, queryParams } from "../lib/colorUtil";
import { RadioBottons } from "./RadioBottons";
import { CodeBracketSquareIcon } from '@heroicons/react/20/solid';
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function RadioAlgorithms() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const { alias, defaultValue } = queryParams["algorithm"];

  const algorithm = searchParams.has(alias)
    ? searchParams.get(alias)
    : defaultValue;

  function setQueryParam(value) {
    const params = new URLSearchParams(searchParams);

    if (value === defaultValue) {
      params.delete(alias);
    } else {
      params.set(alias, value);
    }

    router.push(`${pathname}?${params}`);
  }

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
        setValue={setQueryParam}
      />
    </div>
  );
}
