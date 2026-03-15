// src/lib/guides/guide-normalizers.ts

function getAttrs(entry: any) {
  return entry?.attributes ?? entry;
}

function getRelation(entry: any) {
  return entry?.data ?? entry ?? null;
}

export function normalizeGuideSeries(entry: any) {
  const attrs = getAttrs(entry);

  return {
    id: entry?.id ?? null,
    title: attrs?.title ?? "",
    slug: attrs?.slug ?? "",
    description: attrs?.description ?? null,
  };
}

export function normalizeGuideSection(entry: any) {
  const attrs = getAttrs(entry);
  const rawSeries = getRelation(attrs?.guide_series);

  return {
    id: entry?.id ?? null,
    title: attrs?.title ?? "",
    slug: attrs?.slug ?? "",
    description: attrs?.description ?? null,
    guide_series: rawSeries ? normalizeGuideSeries(rawSeries) : null,
  };
}

export function normalizeGuide(entry: any) {
  const attrs = getAttrs(entry);

  const rawSeries = getRelation(attrs?.guide_series);
  const rawSection = getRelation(attrs?.guide_section);

  return {
    id: entry?.id ?? null,
    title: attrs?.title ?? "",
    slug: attrs?.slug ?? "",
    dek: attrs?.dek ?? null,
    description: attrs?.description ?? null,
    body: Array.isArray(attrs?.body) ? attrs.body : [],
    guide_series: rawSeries ? normalizeGuideSeries(rawSeries) : null,
    guide_section: rawSection ? normalizeGuideSection(rawSection) : null,
  };
}
