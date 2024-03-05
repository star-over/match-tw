'use client';

import { ExclamationCircleIcon, SwatchIcon } from '@heroicons/react/24/solid';
import clsx from "clsx";
import { useState } from "react";
import { useSearchParamsState } from "../lib/searchParamsState";

export const InputColorText = () => {
  const [targetColor, setTargetColor] = useSearchParamsState("targetColor");
  const [inputValue, setInputValue] = useState(targetColor);

  const matchColorAction = (color) => {
    setTargetColor(color);
  }

  const pClassName = clsx("m-2 text-sm transition duration-500", {
    "text-gray-600": true,
    "text-red-600": false,
  });

  const inputClassName = clsx("block pl-12 w-full text-4xl rounded-md pr-10 focus:outline-none bg-gray-100/50", {
    "border-gray-300 text-gray-600 placeholder-gray-300 focus:border-gray-500/80 focus:ring-gray-500/80": true,
    "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500": false,
  });

  return (
    <div>
      <label htmlFor="colorText" className="sr-only">Input color</label>
      <div className="relative mt-1 rounded-md shadow-sm">
        {true
          ? <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SwatchIcon className="h-8 w-8 text-gray-400/80" aria-hidden="true" />
          </div>
          : <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <ExclamationCircleIcon className="h-8 w-8 text-red-500/80" aria-hidden="true" />
          </div>}
        <input
          className={inputClassName}
          type="text"
          name="colorText"
          id="colorText"
          placeholder="#123456 or gray or rgb(10, 20, 30)"
          value={inputValue}
          onKeyUp={(e) => (e.code === "Enter") && matchColorAction(e.target.value)}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <button
        className="w-24 bg-slate-400 rounded"
        onClick={() => setTargetColor(inputValue)}
      >
        Match!
      </button>
      <p
        className={pClassName}>
        Enter the colour you wish to match in the tailwind palette. The colour can be specified as a word such as <strong>teal</strong>, or in hex <strong>#008080</strong> format, or&nbsp;in&nbsp;<strong>rgb(0,&nbsp;128,&nbsp;128)</strong> format, in any form that can be used in CSS.</p>
    </div>
  );
};
