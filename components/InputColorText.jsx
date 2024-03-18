'use client';

import clsx from "clsx";
import { useState } from "react";
import { useSearchParamsState } from "../lib/searchParamsState";
import { validateColor } from "../lib/colorUtil";
import { Button } from "./ui/button";
import { KbdEnter } from "./ui/kbd";
import { Input } from "./ui/input";
import { InputIcon } from "./ui/input-icon";
import Link from "next/link";

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
        <InputIcon {...{ isValid }} />
        <Input
          className=""
          id="colorText"
          name="colorText"
          type="text"
          size="5"
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

        The color can be specified as a word such as&nbsp;
        <strong><Link className="hover:underline" href={{ pathname: "/", query: { c: "skyblue" } }} scroll={false}>skyblue</Link></strong>
        , or in hex&nbsp;
        <strong><Link className="hover:underline" href={{ pathname: "/", query: { c: "#748af9" } }} scroll={false}>#748af9</Link></strong>
        &#160;format, or&nbsp;in&nbsp;CSS format&#160;
        <strong><Link className="hover:underline" href={{ pathname: "/", query: { c: "rgb(173, 250, 77)" } }} scroll={false}>rgb(173,&nbsp;250,&nbsp;77)</Link></strong>
      </p>
    </div>
  );
};
