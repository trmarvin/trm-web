// src/lib/guides/build-guide-breadcrumbs.ts

export type BreadcrumbItem = {
  label: string;
  href: string;
};

type ResolvedGuideRoute =
  | { type: "guides-index"; data: any }
  | { type: "standalone-guide"; data: any }
  | { type: "guide-series"; data: any }
  | { type: "guide-section"; data: any }
  | { type: "guide"; data: any };

export function buildGuideBreadcrumbs(
  resolved: ResolvedGuideRoute,
): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ label: "Guides", href: "/guides" }];

  switch (resolved.type) {
    case "guides-index":
      return crumbs;

    case "standalone-guide":
      crumbs.push({
        label: resolved.data.title,
        href: `/guides/${resolved.data.slug}`,
      });
      return crumbs;

    case "guide-series":
      crumbs.push({
        label: resolved.data.title,
        href: `/guides/${resolved.data.slug}`,
      });
      return crumbs;

    case "guide-section":
      crumbs.push({
        label: resolved.data.series.title,
        href: `/guides/${resolved.data.series.slug}`,
      });
      crumbs.push({
        label: resolved.data.title,
        href: `/guides/${resolved.data.series.slug}/${resolved.data.slug}`,
      });
      return crumbs;

    case "guide":
      if (resolved.data.series) {
        crumbs.push({
          label: resolved.data.series.title,
          href: `/guides/${resolved.data.series.slug}`,
        });
      }

      if (resolved.data.series && resolved.data.section) {
        crumbs.push({
          label: resolved.data.section.title,
          href: `/guides/${resolved.data.series.slug}/${resolved.data.section.slug}`,
        });
      }

      crumbs.push({
        label: resolved.data.title,
        href:
          resolved.data.series && resolved.data.section
            ? `/guides/${resolved.data.series.slug}/${resolved.data.section.slug}/${resolved.data.slug}`
            : `/guides/${resolved.data.slug}`,
      });

      return crumbs;
  }
}
