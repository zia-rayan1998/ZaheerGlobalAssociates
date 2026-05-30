import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-royal-600 text-white shadow-lg shadow-royal-600/25 hover:bg-royal-700 hover:shadow-xl hover:shadow-royal-600/30 hover:-translate-y-0.5",
        emerald:
          "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-600 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5",
        outline:
          "border-2 border-royal-600/30 bg-white/80 text-royal-700 backdrop-blur-sm hover:bg-royal-50 hover:border-royal-600/50 hover:-translate-y-0.5",
        ghost: "text-royal-700 hover:bg-royal-50",
        glass:
          "bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 hover:-translate-y-0.5",
        whatsapp:
          "bg-[#25D366] text-white shadow-lg shadow-[#25D366]/25 hover:bg-[#20bd5a] hover:shadow-xl hover:-translate-y-0.5",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4 text-xs",
        lg: "h-13 px-8 text-base rounded-2xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
