import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/types";

type StandaloneGuidePageProps = {
  data: any;
  breadcrumbs: BreadcrumbItem[];
};

export function StandaloneGuidePage({
  data,
  breadcrumbs,
}: StandaloneGuidePageProps) {
  return (
    <article>
      <Breadcrumbs items={breadcrumbs} />
      <h1>{data.title}</h1>
    </article>
  );
}
