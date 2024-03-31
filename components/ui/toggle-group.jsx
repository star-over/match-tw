"use client";

import * as React from "react";
import * as ToggleGroupPrimitive from "@radix-ui/react-toggle-group";

import { cn } from "@/lib/utils";
import { toggleVariants } from "@/components/ui/toggle";

const ToggleGroupContext = React.createContext({
  size: "default",
  variant: "default",
});

const ToggleGroup = React.forwardRef(({
  className, variant, size, children, ...props
}, ref) => (
  <ToggleGroupPrimitive.Root
    ref={ref}
    className={cn(
      "flex items-center justify-center gap-0.5",
      "text-sm font-medium bg-gray-50",
      "",
      className,
    )}
    {...props}
  >
    <ToggleGroupContext.Provider value={{ variant, size }}>
      {children}
    </ToggleGroupContext.Provider>
  </ToggleGroupPrimitive.Root>
));

ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName;

const ToggleGroupItem = React.forwardRef(({
  className, children, variant, size, ...props
}, ref) => {
  const context = React.useContext(ToggleGroupContext);

  return (
    (
      <ToggleGroupPrimitive.Item
        ref={ref}
        className={cn(
          toggleVariants({
            variant: context.variant || variant,
            size: context.size || size,
          }),
          "text-slate-600 hover:bg-slate-200 border border-slate-400 active:bg-slate-300",
          "h-8 rounded-sm first:rounded-l-md last:rounded-r-md",
          "data-[state=on]:ring-slate-500 data-[state=on]:ring-1 data-[state=on]:bg-slate-200 data-[state=on]:pointer-events-none",
          className,
        )}
        {...props}
      >
        {children}
      </ToggleGroupPrimitive.Item>
    )
  );
});

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
