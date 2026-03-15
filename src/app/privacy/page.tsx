// app/about/page.tsx

import { notFound } from "next/navigation";

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

async function getPrivacyPage() {
  const res = await fetch(
    `${STRAPI_URL}/api/pages?filters[slug][$eq]=privacy&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch Privacy page: ${res.status}`);
  }

  const json = await res.json();
  return json.data?.[0] ?? null;
}

export default async function PrivacyPage() {
  const page = await getPrivacyPage();

  if (!page) notFound();

  return (
    <main>
      <h1>{page.title}</h1>
    </main>
  );
}
