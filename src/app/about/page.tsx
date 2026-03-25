import { notFound } from "next/navigation";
import SingleContentPage from "@/components/pages/SingleContentPage";
import Prose from "@/components/content/Prose";

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

async function getAboutPage() {
  const res = await fetch(
    `${STRAPI_URL}/api/pages?filters[slug][$eq]=about&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${STRAPI_TOKEN}`,
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch About page: ${res.status}`);
  }

  const json = await res.json();
  return json.data?.[0] ?? null;
}

export default async function AboutPage() {
  const page = await getAboutPage();

  if (!page) notFound();

  return (
    <SingleContentPage
      eyebrow="About"
      title={page.title}
      body={
        <Prose>
          <p>About page body goes here.</p>
        </Prose>
      }
    />
  );
}
