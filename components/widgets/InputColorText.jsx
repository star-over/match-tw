'use client';

import { useState } from "react";
import { useSearchParamsState } from "@/lib/searchParamsState";
import { validateColor } from "@/lib/colorUtil";
import { Button } from "@/components/ui/button";
import { KbdEnter } from "@/components/ui/kbd";
import { Input } from "@/components/ui/input";
import { InputIcon } from "@/components/widgets/inputIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Spinner } from "../ui/spinner";

export function InputColorText() {
  const [targetTextColor, setTargetTextColor] = useSearchParamsState("targetTextColor");
  const [inputValue, setInputValue] = useState(targetTextColor);
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // todo: make it with save state: algo and spot count
  const makeColorLink = (targetColor) => (
    <strong>
      <Link
        className="underline"
        href={
          {
            pathname: "/",
            query: { c: targetColor }
          }}
        scroll={false}>
        {targetColor}
      </Link>
    </strong>
  );

  const sample1 = makeColorLink("tan");
  const sample2 = makeColorLink("#748af9");
  const sample3 = makeColorLink("rgb(173, 250, 77)");
  const sample4 = makeColorLink("color(display-p3 1 0 0.4)");


  function matchColorAction(value) {
    const validStatus = Boolean(validateColor(value));
    setIsValid(validStatus);
    if (validStatus) {
      setTargetTextColor(String(value).toLowerCase().replaceAll("none", "0"));
      setIsLoading(true);
    }
  }

  return (
    <div className="flex flex-col">
      <div className="mt-2 flex items-center rounded-lg border-2 bg-slate-100 border-slate-200 focus-within:border-slate-500">
        {isLoading
          ? <Spinner />
          : <InputIcon {...{ isValid }} />}

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
        {sample3} or in new format {sample4}
      </p>
    </div>
  );
}
