import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
  outline:
    "border border-wire bg-panel text-ink hover:bg-surface focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
  ghost:
    "text-ink-soft hover:text-ink hover:bg-surface focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-9 px-4 text-sm",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        "inline-flex items-center justify-center gap-1.5 rounded-md font-medium transition-colors outline-none disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
