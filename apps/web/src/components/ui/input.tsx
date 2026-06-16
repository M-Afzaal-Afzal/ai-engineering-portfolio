import { type InputHTMLAttributes, type ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
}

export function Input({ label, icon, className = "", id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-medium text-ink-soft uppercase tracking-wide"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <span className="pointer-events-none absolute left-3 text-ink-soft">
            {icon}
          </span>
        )}
        <input
          id={id}
          className={[
            "h-9 w-full rounded-md border border-wire bg-panel px-3 text-sm text-ink placeholder:text-ink-soft",
            "focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-0 focus:border-accent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            icon ? "pl-9" : "",
            className,
          ].join(" ")}
          {...props}
        />
      </div>
    </div>
  );
}
