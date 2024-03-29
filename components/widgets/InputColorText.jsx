'use client';

import { useState } from "react";
import { useSearchParamsState } from "@/lib/searchParamsState";
import { validateColor } from "@/lib/colorUtil";
import { Button } from "@/components/ui/button";
import { KbdEnter } from "@/components/ui/kbd";
import { Input } from "@/components/ui/input";
import { InputIcon } from "@/components/widgets/inputIcon";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";

export function InputColorText() {
  const [targetTextColor, setTargetTextColor] = useSearchParamsState("targetTextColor");
  const [inputValue, setInputValue] = useState(targetTextColor);
  const [isValid, setIsValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


  function matchColorAction() {
    const validStatus = Boolean(validateColor(inputValue));
    setIsValid(() => validStatus);
    if (validStatus) {
      setTargetTextColor(String(inputValue).toLowerCase().replaceAll("none", "0"));
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
          onKeyUp={(e) => (e.code === "Enter") && matchColorAction(e)}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button size="sm" className="m-0.5"
          type="submit"
          onClick={() => matchColorAction(e)}
        >
          Go! <KbdEnter />
        </Button>
      </div>
      <p className={cn("m-2 text-sm text-balance text-red-500", { "invisible": isValid, "visible": !isValid, })}>
        Can't parse color. Please use CSS compatible color.
      </p>
    </div>
  );
}
