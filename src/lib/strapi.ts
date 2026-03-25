// src/lib/strapi.ts

import { Essay, Note, BookPost, Thinker, Concept, Hub } from "@/types/content";

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

export async function getCollection(collection: string) {
  const json = await strapiFetch(`/${collection}?sort[0]=publishedAt:desc`);
  return json.data ?? [];
}

export async function getCollectionItemBySlug(
  collection: string,
  slug: string,
) {
  const json = await strapiFetch(
    `/${collection}?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
  );
  return json.data?.[0] ?? null;
}

export const getEssays = () => getCollection("essays");
export const getEssayBySlug = (slug: string) =>
  getCollectionItemBySlug("essays", slug);

export const getNotes = () => getCollection("notes");
export const getNoteBySlug = (slug: string) =>
  getCollectionItemBySlug("notes", slug);

export const getBooks = () => getCollection("books");
export const getBookBySlug = (slug: string) =>
  getCollectionItemBySlug("books", slug);

export const getResources = () => getCollection("resources");
export const getResourceBySlug = (slug: string) =>
  getCollectionItemBySlug("resources", slug);

export const getHubs = () => getCollection("hubs");
export const getHubBySlug = (slug: string) =>
  getCollectionItemBySlug("hubs", slug);

export const getThinkers = () => getCollection("thinkers");
export const getThinkerBySlug = (slug: string) =>
  getCollectionItemBySlug("thinkers", slug);

export const getConcepts = () => getCollection("concepts");
export const getConceptBySlug = (slug: string) =>
  getCollectionItemBySlug("concepts", slug);
