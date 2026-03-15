// src/lib/guides/guide-queries.ts

import {
  normalizeGuide,
  normalizeGuideSection,
  normalizeGuideSeries,
} from "./guide-normalizers";

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

if (!STRAPI_URL) {
  throw new Error("Missing STRAPI_URL environment variable");
}

if (!STRAPI_TOKEN) {
  throw new Error("Missing STRAPI_TOKEN environment variable");
}

async function strapiFetch(path: string) {
  const url = `${STRAPI_URL}${path}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
      "Content-Type": "application/json",
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(
      `Strapi fetch failed: ${res.status} ${res.statusText}\nURL: ${url}\nBody: ${body}`,
    );
  }

  return res.json();
}

export async function getGuidesIndex() {
  return {
    title: "Guides",
    slug: "guides",
  };
}

export async function getStandaloneGuideBySlug(slug: string) {
  const json = await strapiFetch(
    `/api/guides?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
  );

  const item = json?.data?.[0];
  if (!item) return null;

  const normalized = normalizeGuide(item);

  if (normalized.guide_series || normalized.guide_section) {
    return null;
  }

  return normalized;
}

export async function getGuideSeriesBySlug(seriesSlug: string) {
  const json = await strapiFetch(
    `/api/guide-series?filters[slug][$eq]=${encodeURIComponent(seriesSlug)}&populate=*`,
  );

  const item = json?.data?.[0];
  return item ? normalizeGuideSeries(item) : null;
}

export async function getGuideSectionByPath(
  seriesSlug: string,
  sectionSlug: string,
) {
  const json = await strapiFetch(
    `/api/guide-sections?filters[slug][$eq]=${encodeURIComponent(sectionSlug)}&filters[guide_series][slug][$eq]=${encodeURIComponent(seriesSlug)}&populate=*`,
  );

  const item = json?.data?.[0];
  return item ? normalizeGuideSection(item) : null;
}

export async function getGuideByPath(
  seriesSlug: string,
  sectionSlug: string,
  guideSlug: string,
) {
  const json = await strapiFetch(
    `/api/guides` +
      `?filters[slug][$eq]=${encodeURIComponent(guideSlug)}` +
      `&filters[guide_section][slug][$eq]=${encodeURIComponent(sectionSlug)}` +
      `&filters[guide_series][slug][$eq]=${encodeURIComponent(seriesSlug)}` +
      `&populate[guide_series]=true` +
      `&populate[guide_section]=true` +
      `&populate[body][on][blocks.paragraph]=true`,
  );

  const item = json?.data?.[0];
  return item ? normalizeGuide(item) : null;
}
