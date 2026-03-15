import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/navigation/types";

type GuidesLandingPageProps = {
  data: any;
  breadcrumbs: BreadcrumbItem[];
};

export function GuidesLandingPage({
  data,
  breadcrumbs,
}: GuidesLandingPageProps) {
  return (
    <section>
      <Breadcrumbs items={breadcrumbs} />
      <h1>{data.title ?? "Guides"}</h1>
    </section>
  );
}
