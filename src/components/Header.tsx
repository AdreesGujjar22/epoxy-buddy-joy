import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const nav = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-topbar py-1.5 text-center text-[10px] font-semibold text-topbar-foreground">
        GIVE US A CALL{" "}
        <a href={site.phoneHref} className="underline-offset-2 hover:underline">
          {site.phone}
        </a>
      </div>
      <div className="border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1170px] items-center justify-between gap-4 px-5 py-4">
          <Logo />
           <nav className="hidden items-center gap-8 text-[12px] font-medium lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-muted-foreground transition hover:text-foreground"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/contact"
              className="hidden rounded-full bg-primary px-6 py-3 text-[12px] font-bold text-primary-foreground transition hover:brightness-110 sm:inline-flex"
            >
              Let's Get Started
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-md border border-border lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border bg-surface px-4 py-3 lg:hidden">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted-foreground"
                activeProps={{ className: "block py-2 text-sm text-primary" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
