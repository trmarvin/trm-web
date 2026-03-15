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

export async function getNotes() {
  const json = await strapiFetch(`/notes?sort[0]=publishedAt:desc`);
  return json.data ?? [];
}

export async function getNoteBySlug(slug: string) {
  const json = await strapiFetch(
    `/notes?filters[slug][$eq]=${encodeURIComponent(slug)}`,
  );
  return json.data?.[0] ?? null;
}

export async function getBooks() {
  const json = await strapiFetch(`/books?sort[0]=publishedAt:desc`);
  return json.data ?? [];
}

export async function getBookBySlug(slug: string) {
  const json = await strapiFetch(
    `/books?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
  );
  return json.data?.[0] ?? null;
}

export async function getConcepts() {
  const json = await strapiFetch(`/concepts?sort[0]=publishedAt:desc`);
  return json.data ?? [];
}

export async function getConceptBySlug(slug: string) {
  const json = await strapiFetch(
    `/concepts?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
  );
  return json.data?.[0] ?? null;
}

export async function getHubs() {
  const json = await strapiFetch(`/hubs?sort[0]=publishedAt:desc`);
  return json.data ?? [];
}

export async function getHubBySlug(slug: string) {
  const json = await strapiFetch(
    `/hubs?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
  );
  return json.data?.[0] ?? null;
}

export async function getThinkers() {
  const json = await strapiFetch(`/thinkers?sort[0]=publishedAt:desc`);
  return json.data ?? [];
}

export async function getThinkerBySlug(slug: string) {
  const json = await strapiFetch(
    `/thinkers?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
  );
  return json.data?.[0] ?? null;
}
