/* eslint-disable jsx-a11y/label-has-associated-control */
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KbdEnter } from "@/components/ui/kbd";
import { InputIcon } from "@/components/widgets/inputIcon";
import { validateColor } from "@/lib/colorUtil";
import { useSearchParamsState } from "@/lib/searchParamsState";
import { cn } from "@/lib/utils";

export function InputColorText() {
  const [targetTextColor, setTargetTextColor] = useSearchParamsState("targetTextColor");
  const [value, setValue] = useState(targetTextColor);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    setValue(targetTextColor);
  }, [targetTextColor]);

  useEffect(() => {
    setIsValid(validateColor(value));
  }, [value]);

  function submitHandle(e) {
    e.preventDefault();
    if (isValid) {
      setTargetTextColor(String(value)
        .toLowerCase()
        .trim()
        // for fix the hsl gray color problem
        .replaceAll("none", "0"));
    }
  }

  return (
    <form
      className="flex flex-col"
      onSubmit={submitHandle}
    >
      <label className="text-xl mt-2 text-gray-600" htmlFor="textColor">
        Find closest color for:
      </label>
      <div className={cn(
        "flex items-center rounded-lg",
        " border-2 bg-slate-100 border-slate-200 focus-within:border-slate-500",
        { "focus-within:border-red-500": !isValid },
      )}
      >
        <InputIcon {...{ isValid }} />
        <Input
          required
          id="textColor"
          name="textColor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={(e) => e.target.select()}
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
        <Button
          className="m-0.5"
          type="submit"
          disabled={!isValid}
          size="sm"
        >
          Go!
          {" "}
          <KbdEnter />
        </Button>
      </div>
      <p className={cn("m-2 text-sm text-balance text-red-500", { "hidden": isValid })}>
        Can&apos;t parse color. Please use CSS compatible color.
      </p>
    </form>
  );
}
