import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/navigation/types";

type GuideSectionPageProps = {
  data: any;
  breadcrumbs: BreadcrumbItem[];
};

export function GuideSectionPage({ data, breadcrumbs }: GuideSectionPageProps) {
  return (
    <section>
      <Breadcrumbs items={breadcrumbs} />
      <h1>{data.title}</h1>
    </section>
  );
}
