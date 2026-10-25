import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "success";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-md transition-colors",
        {
          "bg-zinc-800 text-zinc-300 border border-zinc-700/50": variant === "default",
          "bg-zinc-900/80 text-zinc-400 border border-zinc-800/80":
            variant === "secondary",
          "border border-zinc-800 text-zinc-400 bg-transparent":
            variant === "outline",
          "bg-emerald-950/40 text-emerald-400 border border-emerald-900/50":
            variant === "success",
        },
        className
      )}
      {...props}
    />
  );
}
