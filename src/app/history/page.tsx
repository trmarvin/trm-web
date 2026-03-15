// app/about/page.tsx

import { notFound } from "next/navigation";

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

async function getHistoryPage() {
  const res = await fetch(
    `${STRAPI_URL}/api/pages?filters[slug][$eq]=history&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch History page: ${res.status}`);
  }

  const json = await res.json();
  return json.data?.[0] ?? null;
}

export default async function HistoryPage() {
  const page = await getHistoryPage();

  if (!page) notFound();

  return (
    <main>
      <h1>{page.title}</h1>
    </main>
  );
}
