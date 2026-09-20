import { Link } from "@tanstack/react-router";
import type { ComponentType, ReactNode } from "react";
import { SITE_URL } from "@/lib/site";

const CrumbLink = Link as unknown as ComponentType<{
  to: string;
  className?: string;
  children?: ReactNode;
}>;


export type Crumb = { label: string; href?: string };

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((c, i) => (
          <li key={c.label} className="flex items-center gap-1.5">
            {c.href && i < crumbs.length - 1 ? (
              <CrumbLink to={c.href} className="transition hover:text-primary">
                {c.label}
              </CrumbLink>
            ) : (
              <span aria-current="page" className="text-foreground">
                {c.label}
              </span>
            )}
            {i < crumbs.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
