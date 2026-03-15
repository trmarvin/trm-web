// src/lib/guides/resolve-guide-route.ts

import {
  getGuidesIndex,
  getStandaloneGuideBySlug,
  getGuideSeriesBySlug,
  getGuideSectionByPath,
  getGuideByPath,
} from "./guide-queries";

export type ResolvedGuideRoute =
  | { type: "guides-index"; data: any }
  | { type: "standalone-guide"; data: any }
  | { type: "guide-series"; data: any }
  | { type: "guide-section"; data: any }
  | { type: "guide"; data: any };

export async function resolveGuideRoute(
  segments: string[],
): Promise<ResolvedGuideRoute | null> {
  // /guides
  if (segments.length === 0) {
    const data = await getGuidesIndex();
    return { type: "guides-index", data };
  }

  // /guides/moreh-nevukhim
  if (segments.length === 1) {
    const [slug] = segments;

    // Check standalone guide first
    const standalone = await getStandaloneGuideBySlug(slug);
    if (standalone) {
      return { type: "standalone-guide", data: standalone };
    }

    // Then check guide series landing
    const series = await getGuideSeriesBySlug(slug);
    if (series) {
      return { type: "guide-series", data: series };
    }

    return null;
  }

  // /guides/parsha/bereshit
  if (segments.length === 2) {
    const [seriesSlug, sectionSlug] = segments;

    const section = await getGuideSectionByPath(seriesSlug, sectionSlug);
    if (section) {
      return { type: "guide-section", data: section };
    }

    return null;
  }

  // /guides/parsha/bereshit/lekh-lekha
  if (segments.length === 3) {
    const [seriesSlug, sectionSlug, guideSlug] = segments;

    const guide = await getGuideByPath(seriesSlug, sectionSlug, guideSlug);
    if (guide) {
      return { type: "guide", data: guide };
    }

    return null;
  }

  return null;
}
