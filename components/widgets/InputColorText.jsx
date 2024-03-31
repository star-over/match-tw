'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KbdEnter } from "@/components/ui/kbd";
import { InputIcon } from "@/components/widgets/inputIcon";
import { validateColor } from "@/lib/colorUtil";
import { useSearchParamsState } from "@/lib/searchParamsState";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function InputColorText() {
  const [targetTextColor, setTargetTextColor] = useSearchParamsState("targetTextColor");
  const [isValid, setIsValid] = useState(true);

  function matchColorAction(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const targetTextColor = formData.get("colorText");
    const validStatus = validateColor(targetTextColor);

    // here is something like a bug, setIsValid did not set value properly
    setIsValid(validStatus);

    if (validStatus) {
      setTargetTextColor(String(targetTextColor)
        .toLowerCase()
        // for fix the hsl gray color problem
        .replaceAll("none", "0"));
    }
  }

  return (
    <form
      className="flex flex-col"
      onSubmit={matchColorAction}>
      <div className={cn(
        "mt-2 flex items-center rounded-lg",
        " border-2 bg-slate-100 border-slate-200 focus-within:border-slate-500",
        { "focus-within:border-red-500": !isValid }
      )}>

        {<InputIcon {...{ isValid }} />}
        <Input
          required
          id="colorText"
          name="colorText"
          defaultValue={targetTextColor}
          type="text"
          size="5"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          enterKeyHint="go"
          spellCheck="false"
          aria-label="Search"
          placeholder="CSS4 color..."
        />
        <Button className="m-0.5" size="sm" type="submit">
          Go! <KbdEnter />
        </Button>
      </div>
      <p className={cn("m-2 text-sm text-balance text-red-500", { "hidden": isValid })}>
        Can't parse color. Please use CSS compatible color.
      </p>
    </form>
  );
}
