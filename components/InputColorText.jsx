'use client';

import { useState } from "react";
import { useSearchParamsState } from "../lib/searchParamsState";
import { validateColor } from "../lib/colorUtil";
import { Button } from "./ui/button";
import { KbdEnter } from "./ui/kbd";
import { Input } from "./ui/input";
import { InputIcon } from "./widgets/input-icon";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function InputColorText() {
  const [targetTextColor, setTargetTextColor] = useSearchParamsState("targetTextColor");
  const [inputValue, setInputValue] = useState(targetTextColor);
  const [isValid, setIsValid] = useState(true);

  const sample1 = <strong><Link className="underline" href={{ pathname: "/", query: { c: "skyblue" } }} scroll={false}>skyblue</Link></strong>;
  const sample2 = <strong><Link className="underline" href={{ pathname: "/", query: { c: "#748af9" } }} scroll={false}>#748af9</Link></strong>;
  const sample3 = <strong><Link className="underline" href={{ pathname: "/", query: { c: "rgb(173, 250, 77)" } }} scroll={false}>rgb(173,&nbsp;250,&nbsp;77)</Link></strong>;


  function matchColorAction(value) {
    const validStatus = Boolean(validateColor(value));
    setIsValid(validStatus);
    if (validStatus) {
      setTargetTextColor(String(value).toLowerCase().replaceAll("none", "0"));
    }
  }

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
      {/* todo: make it with save state: algo and spot count */}
      <p
        className={cn(
          "m-2 text-sm text-balance",
          {
            "text-gray-600": isValid,
            "text-red-600": !isValid,
          })
        }
      >
        The color can be specified as a word such as&nbsp;
        {sample1}, or in hex&nbsp;
        {sample2}&#160;format, or in CSS format&#160;
        {sample3}
      </p>
    </div>
  );
}
