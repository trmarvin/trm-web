// src/lib/guides/build-guide-breadcrumbs.ts

export type BreadcrumbItem = {
  label: string;
  href: string;
};

export type ResolvedGuideRoute =
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
      if (resolved.data?.title && resolved.data?.slug) {
        crumbs.push({
          label: resolved.data.title,
          href: `/guides/${resolved.data.slug}`,
        });
      }
      return crumbs;

    case "guide-series":
      if (resolved.data?.title && resolved.data?.slug) {
        crumbs.push({
          label: resolved.data.title,
          href: `/guides/${resolved.data.slug}`,
        });
      }
      return crumbs;

    case "guide-section":
      if (
        resolved.data?.guide_series?.title &&
        resolved.data?.guide_series?.slug
      ) {
        crumbs.push({
          label: resolved.data.guide_series.title,
          href: `/guides/${resolved.data.guide_series.slug}`,
        });
      }

      if (resolved.data?.title && resolved.data?.slug) {
        crumbs.push({
          label: resolved.data.title,
          href: resolved.data?.guide_series?.slug
            ? `/guides/${resolved.data.guide_series.slug}/${resolved.data.slug}`
            : "#",
        });
      }

      return crumbs;

    case "guide":
      if (
        resolved.data?.guide_series?.title &&
        resolved.data?.guide_series?.slug
      ) {
        crumbs.push({
          label: resolved.data.guide_series.title,
          href: `/guides/${resolved.data.guide_series.slug}`,
        });
      }

      if (
        resolved.data?.guide_series?.slug &&
        resolved.data?.guide_section?.title &&
        resolved.data?.guide_section?.slug
      ) {
        crumbs.push({
          label: resolved.data.guide_section.title,
          href: `/guides/${resolved.data.guide_series.slug}/${resolved.data.guide_section.slug}`,
        });
      }

      if (resolved.data?.title && resolved.data?.slug) {
        crumbs.push({
          label: resolved.data.title,
          href:
            resolved.data?.guide_series?.slug &&
            resolved.data?.guide_section?.slug
              ? `/guides/${resolved.data.guide_series.slug}/${resolved.data.guide_section.slug}/${resolved.data.slug}`
              : `/guides/${resolved.data.slug}`,
        });
      }

      return crumbs;
  }
}
