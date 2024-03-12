import { cn } from "@/lib/utils";
import { CircleAlertIcon, SwatchBookIcon } from "lucide-react";

export function InputIcon({ isValid = true, className, ...props }) {

  return (
    <div
      className={cn("m-1 pointer-events-none size-6 flex items-center justify-center", className)}
      {...props}
    >
      {isValid
        ? <SwatchBookIcon className="text-slate-400" aria-hidden="true" />
        : <CircleAlertIcon className="text-red-400" aria-hidden="true" />}
    </div>
  );
}
