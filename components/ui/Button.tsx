"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2",
          variant === "primary" &&
            "bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white focus:ring-[var(--color-accent)] shadow-lg hover:shadow-xl hover:-translate-y-0.5",
          variant === "secondary" &&
            "bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white focus:ring-[var(--color-primary)] shadow-lg hover:shadow-xl hover:-translate-y-0.5",
          variant === "outline" &&
            "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white focus:ring-[var(--color-primary)]",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
