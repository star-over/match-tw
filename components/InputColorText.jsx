'use client';

import { ExclamationCircleIcon, SwatchIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import clsx from "clsx";
import { useState } from "react";
import { useSearchParamsState } from "../lib/searchParamsState";
import { validateColor } from "../lib/colorUtil";

export const InputColorText = () => {
  const [targetTextColor, setTargetTextColor] = useSearchParamsState("targetTextColor");
  const [inputValue, setInputValue] = useState(targetTextColor);
  const [isValid, setIsValid] = useState(true);

  const matchColorAction = (color) => {
    const validStatus = Boolean(validateColor(color));
    setIsValid(validStatus);
    if (validStatus) {
      setTargetTextColor(color);
    }
  };

  const pClassName = clsx("m-2 text-sm transition duration-500", {
    "text-gray-600": isValid,
    "text-red-600": !isValid,
  });

  const inputClassName = clsx("block pl-12 w-full text-4xl rounded-md pr-10 focus:outline-none bg-gray-100/50", {
    "border-gray-300 text-gray-600 placeholder-gray-300 focus:border-gray-500/80 focus:ring-gray-500/80": isValid,
    "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500": !isValid,
  });

  return (
    <div>
      <label htmlFor="colorText" className="sr-only">Input color</label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute
            inset-y-0 left-0 flex items-center pl-3">
          {isValid
            ? <SwatchIcon className="h-8 w-8 text-gray-400/80" aria-hidden="true" />
            : <ExclamationCircleIcon className="h-8 w-8 text-red-500/80" aria-hidden="true" />}
        </div>

        <input
          className={inputClassName}
          type="text"
          name="colorText"
          id="colorText"
          placeholder="#123456 or gray or rgb(10, 20, 30)"
          value={inputValue}
          onKeyUp={(e) => (e.code === "Enter") && matchColorAction(inputValue)}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center pr-3"
          onClick={() => matchColorAction(inputValue)}
        >
          <kbd
            className="right-[0.3rem] top-[0.3rem] h-8 select-none group items-center gap-1 rounded border bg-slate-200 hover:bg-slate-300 px-4 font-mono font-medium opacity-100 flex"
          >Enter
            <ArrowRightCircleIcon className="size-6 text-gray-400 group-hover:text-black" />
          </kbd>
        </button>

      </div>
      <p
        className={pClassName}>
        Enter the colour you wish to match in the tailwind palette. The colour can be specified as a word such as <strong>teal</strong>, or in hex <strong>#008080</strong> format, or&nbsp;in&nbsp;<strong>rgb(0,&nbsp;128,&nbsp;128)</strong> format, in any form that can be used in CSS.</p>
    </div>
  );
};
