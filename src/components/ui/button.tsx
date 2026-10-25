import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-zinc-100 text-zinc-950 hover:bg-zinc-200 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 shadow-sm rounded-md":
              variant === "default",
            "bg-zinc-900 text-zinc-100 hover:bg-zinc-800/80 border border-zinc-800/80 shadow-sm rounded-md dark:bg-zinc-900 dark:border-zinc-800/80 dark:hover:bg-zinc-800":
              variant === "secondary",
            "border border-zinc-800/80 bg-transparent text-zinc-300 hover:bg-zinc-900/60 hover:text-zinc-100 dark:border-zinc-800/80 dark:hover:bg-zinc-800/60 rounded-md":
              variant === "outline",
            "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-md":
              variant === "ghost",
            "text-zinc-400 underline-offset-4 hover:underline hover:text-zinc-100":
              variant === "link",
            "h-8 px-3 py-1.5": size === "default",
            "h-7 px-2.5 text-[11px]": size === "sm",
            "h-9 px-4 text-xs": size === "lg",
            "h-7 w-7 p-0": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
