import { type HTMLAttributes } from "react";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={["rounded-xl border border-wire bg-panel shadow-sm", className].join(
        " "
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={["flex flex-col gap-1 px-6 pt-6 pb-4", className].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ className = "", children, ...props }: CardProps) {
  return (
    <h3
      className={["text-sm font-semibold text-ink leading-none", className].join(
        " "
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardContent({ className = "", children, ...props }: CardProps) {
  return (
    <div className={["px-6 pb-6", className].join(" ")} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className = "", children, ...props }: CardProps) {
  return (
    <div
      className={[
        "flex items-center px-6 pb-6 pt-0",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}
