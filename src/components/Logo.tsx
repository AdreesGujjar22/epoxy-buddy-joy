import { Link } from "@tanstack/react-router";
import { ChevronsRight } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`inline-flex shrink-0 items-center gap-2 ${className}`}
      aria-label="Pacific Floors and Coatings home"
    >
      <ChevronsRight className="size-7 text-primary" strokeWidth={3} aria-hidden="true" />
      <span className="leading-none">
        <span className="block text-lg font-extrabold uppercase tracking-tight text-foreground sm:text-xl">
          Pacific
        </span>
        <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[10px]">
          Floors and Coatings
        </span>
      </span>
    </Link>
  );
}
