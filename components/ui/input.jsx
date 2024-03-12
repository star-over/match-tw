import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex grow h-10 mx-1 w-full text-slate-600",
        "border-none bg-slate-100",
        "text-2xl placeholder:text-slate-300 focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
