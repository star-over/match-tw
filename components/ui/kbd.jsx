import { cn } from "@/lib/utils";
import { CornerDownLeftIcon } from "lucide-react";

function KbdEnter({
  className,
  ...props
}) {
  return (
    (<kbd
      className={cn("ml-2 border border-slate-500 bg-slate-700 text-slate-300 inline-flex items-center gap-1 h-5 pointer-events-none select-none rounded", className)}
      {...props}
    >
      <CornerDownLeftIcon />
    </kbd>)
  );
}

export { KbdEnter };
