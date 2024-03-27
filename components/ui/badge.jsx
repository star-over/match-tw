import { cn } from "@/lib/utils";

export function Badge({
  className,
  ...props
}) {
  return (<div className={cn(
    "inline-flex items-center rounded-full px-2.5 py-0.5",
    className
  )} {...props} />);
}
