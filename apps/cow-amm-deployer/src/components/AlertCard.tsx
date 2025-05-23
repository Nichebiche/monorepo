import { capitalize } from "@bleu/utils";
import cn from "clsx";

export function AlertCard({
  title,
  style,
  children,
}: {
  style: "error" | "warning";
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full justify-center rounded-lg" role="alert">
      <div
        className={cn(
          "font-bold text-white px-4 py-2 rounded-t-lg",
          style === "error" ? "bg-destructive" : "bg-accent",
        )}
      >
        {capitalize(style)}: {title}
      </div>
      <div
        className={cn(
          "px-4 py-3 max-w-prose text-base border rounded-b-lg",
          style === "error" ? "border-destructive" : "border-accent",
        )}
      >
        {children}
      </div>
    </div>
  );
}
