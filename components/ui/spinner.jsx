import { cn } from "@/lib/utils";

export function Spinner({ className, ...props }) {
  return (
    <div
      className={cn("animate-spin size-5 m-1.5 rounded-full border-4",
        "border-l-gray-700 border-r-gray-300 border-b-gray-300 border-t-gray-300",
        className)}
      {...props}
    />
  );
}
