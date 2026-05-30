import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => (
  <textarea
    className={cn(
      "flex min-h-[120px] w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm shadow-sm backdrop-blur-sm transition-all duration-300 placeholder:text-slate-400 focus-visible:border-royal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500/20 hover:border-royal-300 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
