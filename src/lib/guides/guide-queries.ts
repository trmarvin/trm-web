// src/lib/guides/guide-queries.ts

const STRAPI_URL = process.env.STRAPI_URL!;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN!;

async function strapiFetch(path: string) {
  const res = await fetch(`${STRAPI_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`Strapi fetch failed: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function getGuidesIndex() {
  // Replace with your real guides landing query
  return {
    title: "Guides",
  };
}

export async function getStandaloneGuideBySlug(slug: string) {
  const json = await strapiFetch(
    `/api/guides?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
  );

  const item = json?.data?.[0];
  if (!item) return null;

  // Only return standalone guides
  if (item.series || item.section) return null;

  return item;
}

export async function getGuideSeriesBySlug(seriesSlug: string) {
  const json = await strapiFetch(
    `/api/guide-series?filters[slug][$eq]=${encodeURIComponent(seriesSlug)}&populate[sections][populate]=*`,
  );

  return json?.data?.[0] ?? null;
}

export async function getGuideSectionByPath(
  seriesSlug: string,
  sectionSlug: string,
) {
  const json = await strapiFetch(
    `/api/guide-sections?filters[slug][$eq]=${encodeURIComponent(sectionSlug)}&filters[series][slug][$eq]=${encodeURIComponent(seriesSlug)}&populate[guides][populate]=*`,
  );

  return json?.data?.[0] ?? null;
}

export async function getGuideByPath(
  seriesSlug: string,
  sectionSlug: string,
  guideSlug: string,
) {
  const json = await strapiFetch(
    `/api/guides?filters[slug][$eq]=${encodeURIComponent(guideSlug)}&filters[section][slug][$eq]=${encodeURIComponent(sectionSlug)}&filters[series][slug][$eq]=${encodeURIComponent(seriesSlug)}&populate=*`,
  );

  return json?.data?.[0] ?? null;
}
