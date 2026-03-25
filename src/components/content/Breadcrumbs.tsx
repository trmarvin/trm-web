// src/components/navigation/Breadcrumbs.tsx

import Link from "next/link";
import type { BreadcrumbItem } from "@/components/types/ui";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && <span>/</span>}
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
