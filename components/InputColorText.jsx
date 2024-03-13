'use client';

import clsx from "clsx";
import { useState } from "react";
import { useSearchParamsState } from "../lib/searchParamsState";
import { validateColor } from "../lib/colorUtil";
import { Button } from "./ui/button";
import { KbdEnter } from "./ui/kbd";
import { Input } from "./ui/input";
import { InputIcon } from "./ui/input-icon";
import { Separator } from "@radix-ui/react-separator";

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

  return (
    <div className="flex flex-col">
      <div className="mt-2 flex items-center rounded-lg border-2 bg-slate-100 border-slate-200 focus-within:border-slate-500">
        <InputIcon {...{ isValid }}/>
        <Separator orientation="vertical"/>
        <Input
          className=""
          id="colorText"
          name="colorText"
          type="text"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          enterKeyHint="go"
          spellCheck="false"
          aria-label="Search"
          placeholder="CSS4 color..."
          value={inputValue}
          onKeyUp={(e) => (e.code === "Enter") && matchColorAction(inputValue)}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button size="sm" className="m-0.5"
          type="submit"
          onClick={() => matchColorAction(inputValue)}
        >
          Go! <KbdEnter />
        </Button>
      </div>
      <p
        className={clsx("m-2 text-sm transition duration-500 text-balance", {
          "text-gray-600": isValid,
          "text-red-600": !isValid,
        })}>
        Enter the colour you wish to match in the tailwind palette. The colour can be specified as a word such as <strong>teal</strong>, or in hex <strong>#008080</strong> format, or&nbsp;in&nbsp;<strong>rgb(0,&nbsp;128,&nbsp;128)</strong> format, in any form that can be used in CSS.</p>
    </div>
  );
};
