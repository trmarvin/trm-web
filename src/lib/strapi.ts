// src/lib/strapi.ts
const RAW = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_URL = RAW.trim().replace(/^"|"$/g, "").replace(/\/$/, "");

export async function strapiFetch(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  const url = `${STRAPI_URL}/api${p}`;

  const res = await fetch(url, {
    next: { revalidate: 60 },
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`Strapi error ${res.status}: ${url}`);
  }

  return res.json();
}

export async function getEssays() {
  const json = await strapiFetch(`/essays?sort[0]=publishedAt:desc&populate=*`);
  return json.data ?? [];
}

export async function getEssayBySlug(slug: string) {
  const json = await strapiFetch(
    `/essays?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
  );
  return json.data?.[0] ?? null;
}
