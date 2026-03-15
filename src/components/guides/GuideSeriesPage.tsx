import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/navigation/types";

type GuideSeriesPageProps = {
  data: any;
  breadcrumbs: BreadcrumbItem[];
};

export function GuideSeriesPage({ data, breadcrumbs }: GuideSeriesPageProps) {
  return (
    <section>
      <Breadcrumbs items={breadcrumbs} />
      <h1>{data.title}</h1>
    </section>
  );
}
