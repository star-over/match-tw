'use client';

import clsx from "clsx";
import { useState } from "react";
import { useSearchParamsState } from "../lib/searchParamsState";
import { validateColor } from "../lib/colorUtil";
import { CircleAlertIcon, CornerDownLeftIcon, SwatchBookIcon } from "lucide-react";

export const InputColorText = () => {
  const [targetTextColor, setTargetTextColor] = useSearchParamsState("targetTextColor");
  const [inputValue, setInputValue] = useState(targetTextColor);
  const [isValid, setIsValid] = useState(true);

  const matchColorAction = (value) => {
    const validStatus = Boolean(validateColor(value));
    setIsValid(validStatus);
    if (validStatus) {
      setTargetTextColor(String(value).toLowerCase());
    }
  };

  const pClassName = clsx("m-2 text-sm transition duration-500 text-balance", {
    "text-gray-600": isValid,
    "text-red-600": !isValid,
  });

  const inputClassName = clsx("block pl-12 w-full text-4xl text-gray-600 placeholder-gray-300 rounded-md pr-10 focus:outline-none bg-gray-100", {
    "border-gray-300 focus:border-gray-500 focus:ring-gray-500": isValid,
    "border-red-300 focus:border-red-500 focus:ring-red-500": !isValid,
  });

  return (
    <div>
      <label htmlFor="colorText" className="sr-only">Input color</label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {isValid
            ? <SwatchBookIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
            : <CircleAlertIcon className="h-8 w-8 text-red-400" aria-hidden="true" />}
        </div>

        <input
          className={inputClassName}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          enterKeyHint="search"
          spellCheck="false"
          maxLength="100"
          aria-label="Search"
          type="search"
          name="colorText"
          id="colorText"
          placeholder="CSS4 color..."
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
            className="right-[0.3rem] top-[0.3rem] h-8 select-none items-center gap-1
            rounded-lg border bg-slate-700 text-slate-200 hover:bg-slate-800 px-4 font-mono font-medium flex"
          >Enter
            <CornerDownLeftIcon className="size-5 text-slate-200" />
          </kbd>
        </button>

      </div>
      <p
        className={pClassName}>
        Enter the colour you wish to match in the tailwind palette. The colour can be specified as a word such as <strong>teal</strong>, or in hex <strong>#008080</strong> format, or&nbsp;in&nbsp;<strong>rgb(0,&nbsp;128,&nbsp;128)</strong> format, in any form that can be used in CSS.</p>
    </div>
  );
};
