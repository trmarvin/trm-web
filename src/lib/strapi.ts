const RAW = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";

// handles accidental quotes, whitespace, trailing slash
const STRAPI_URL = RAW.trim().replace(/^"|"$/g, "").replace(/\/$/, "");

export async function strapiFetch(path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  const url = `${STRAPI_URL}/api${p}`;

  console.log("[strapiFetch]", url);

  const res = await fetch(url, { next: { revalidate: 60 } });

  if (!res.ok) throw new Error(`Strapi error ${res.status}`);
  return res.json();
}
