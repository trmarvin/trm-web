// src/components/guides/GuidePage.tsx

import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/navigation/types";

type GuidePageProps = {
  data: any;
  breadcrumbs: BreadcrumbItem[];
};

export function GuidePage({ data, breadcrumbs }: GuidePageProps) {
  return (
    <article>
      <Breadcrumbs items={breadcrumbs} />
      <h1>{data.title}</h1>
    </article>
  );
}
