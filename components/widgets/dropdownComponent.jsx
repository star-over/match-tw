'use client';

import { Button } from "@/components/ui/button";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuRadioGroup,
  DropdownMenuRadioItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import { Spinner } from "../ui/spinner";

export function DropdownComponent({ children, className, variants, value, setValue }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSetValue = (value) => {
    setIsLoading(true);
    setValue(value);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={cn("min-w-28 pl-0 pr-1 justify-between	text-gray-500", className)} variant="outline">
          <div className="flex items-center justify-start">
            {isLoading ? <Spinner /> : children}
          </div>
          <div className="flex items-center justify-end">
            <Separator className="h-6" orientation="vertical" />
            <ChevronDownIcon className="size-5" />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={value} onValueChange={handleSetValue}>

          {variants.map((variant) => (
            <DropdownMenuRadioItem key={variant} value={variant}>
              {variant}
            </DropdownMenuRadioItem>
          ))}

        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
