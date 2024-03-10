'use client';

import clsx from "clsx";
import { useState } from "react";
import { useSearchParamsState } from "../lib/searchParamsState";
import { validateColor } from "../lib/colorUtil";
import { CircleAlertIcon, SwatchBookIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Kbd, KbdEnter } from "./ui/kbd";
import { Input } from "./ui/input";

export const InputColorText = () => {
  const [targetTextColor, setTargetTextColor] = useSearchParamsState("targetTextColor");
  const [inputValue, setInputValue] = useState(targetTextColor);
  const [isValid, setIsValid] = useState(true);

  const matchColorAction = (value) => {
    const validStatus = Boolean(validateColor(value));
    setIsValid(validStatus);
    if (validStatus) {
      setTargetTextColor(String(value).toLowerCase().replaceAll("none", "0"));
    }
  };

  const pClassName = clsx("m-2 text-sm transition duration-500 text-balance", {
    "text-gray-600": isValid,
    "text-red-600": !isValid,
  });

  const inputClassName = clsx("pl-2 text-4xl w-full text-gray-600 placeholder-gray-300 rounded-md focus:outline-none bg-gray-100", {
    "border-gray-300 focus:border-gray-500 focus:ring-gray-500": isValid,
    "border-red-300 focus:border-red-500 focus:ring-red-500": !isValid,
  });

  return (
    <div className="flex flex-col">
      <div className="flex justify-between gap-2">
        <div className="pointer-events-none pl-3 pt-1">
          {isValid
            ? <SwatchBookIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
            : <CircleAlertIcon className="h-8 w-8 text-red-400" aria-hidden="true" />}
        </div>

            {/* <Input> */}
        <input
          className={inputClassName}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          enterKeyHint="search"
          spellCheck="false"
          aria-label="Search"
          type="search"
          name="colorText"
          id="colorText"
          placeholder="CSS4 color..."
          value={inputValue}
          onKeyUp={(e) => (e.code === "Enter") && matchColorAction(inputValue)}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          type="submit"
          onClick={() => matchColorAction(inputValue)}
        >
          Search <KbdEnter />
        </Button>
      </div>
      <p
        className={pClassName}>
        Enter the colour you wish to match in the tailwind palette. The colour can be specified as a word such as <strong>teal</strong>, or in hex <strong>#008080</strong> format, or&nbsp;in&nbsp;<strong>rgb(0,&nbsp;128,&nbsp;128)</strong> format, in any form that can be used in CSS.</p>
    </div>
  );
};
