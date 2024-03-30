'use client';

import { useState } from "react";
import { useSearchParamsState } from "@/lib/searchParamsState";
import { validateColor } from "@/lib/colorUtil";
import { Button } from "@/components/ui/button";
import { KbdEnter } from "@/components/ui/kbd";
import { Input } from "@/components/ui/input";
import { InputIcon } from "@/components/widgets/inputIcon";
import { cn } from "@/lib/utils";

export function InputColorText() {
  const [targetTextColor, setTargetTextColor] = useSearchParamsState("targetTextColor");
  console.log("🚀 > InputColorText > targetTextColor:", targetTextColor);
  const [inputValue, setInputValue] = useState(targetTextColor);
  const [isValid, setIsValid] = useState(true);

  // here is something like a bug, setIsValid did not set value properly
  function matchColorAction(e) {
    console.log("🚀 > matchColorAction > e:", e);
    const validStatus = validateColor(inputValue);
    setIsValid(() => validStatus);
    if (validStatus) {
      setTargetTextColor(String(inputValue)
        .toLowerCase()
        // for the hsl gray color problem
        .replaceAll("none", "0"));
    }
  }

  return (
    <div className="flex flex-col">
      <div className={cn(
        "mt-2 flex items-center rounded-lg",
        " border-2 bg-slate-100 border-slate-200 focus-within:border-slate-500",
        { "focus-within:border-red-500": !isValid }
      )}>

        {<InputIcon {...{ isValid }} />}
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
          onKeyUp={(e) => (e.code === "Enter") && matchColorAction(e)}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button size="sm" className="m-0.5"
          type="submit"
          onClick={(e) => matchColorAction(e)}
        >
          Go! <KbdEnter />
        </Button>
      </div>
      <p className={cn("m-2 text-sm text-balance text-red-500", { "hidden": isValid })}>
        Can't parse color. Please use CSS compatible color.
      </p>
    </div>
  );
}
