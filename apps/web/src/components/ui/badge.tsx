type BadgeVariant = "blue" | "amber" | "green" | "red" | "slate";

const variantClasses: Record<BadgeVariant, string> = {
  blue: "bg-blue-500/15 text-blue-800",
  amber: "bg-amber-500/15 text-amber-800",
  green: "bg-green-500/15 text-green-800",
  red: "bg-red-500/15 text-red-800",
  slate: "bg-slate-500/15 text-slate-600",
};

export function Badge({ label, variant }: { label: string; variant: BadgeVariant }) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium whitespace-nowrap",
        variantClasses[variant],
      ].join(" ")}
    >
      {label}
    </span>
  );
}
