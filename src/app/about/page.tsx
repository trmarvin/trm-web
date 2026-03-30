import Link from "next/link";
import { notFound } from "next/navigation";
import SingleContentPage from "@/components/pages/SingleContentPage";
import BlocksRenderer from "@/components/content/BlocksRenderer";
import MarginRail from "@/components/site/MarginRail";

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
      title="About"
      rail={
        <MarginRail>
          <div className="space-y-2">
            <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
              In Brief
            </h2>
            <p>Writer, scholar, educator</p>
            <p>Digital Jewish learning environments</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
              This Site
            </h2>
            <p>
              A digital beit midrash for Jewish texts, ideas, people, and
              history.
            </p>
            <p>Here you’ll find:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-400">
              <li>
                <Link
                  href="/guides"
                  className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-700"
                >
                  Guides
                </Link>{" "}
                to core Jewish texts
              </li>
              <li>
                <Link
                  href="/essays"
                  className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-700"
                >
                  Essays
                </Link>{" "}
                exploring ideas, history, and interpretation
              </li>
              <li>
                <Link
                  href="/notes"
                  className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-700"
                >
                  Notes
                </Link>{" "}
                that develop arguments in smaller, sharper forms
              </li>
              <li>
                <Link
                  href="/people"
                  className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-700"
                >
                  People
                </Link>{" "}
                and{" "}
                <Link
                  href="/ideas"
                  className="underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-700"
                >
                  concepts
                </Link>{" "}
                that serve as entry points into larger conversation
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
              Elsewhere
            </h2>
            <Link
              href="/cv"
              className="block underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-700"
            >
              Academic CV
            </Link>
            <a
              href="https://trmarvin.substack.com"
              className="block underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-700"
            >
              Newsletter
            </a>
            <a
              href="https://dev.trmarvin.org"
              className="block underline underline-offset-4 decoration-neutral-400 hover:decoration-neutral-700"
            >
              Dev Portfolio
            </a>
          </div>
        </MarginRail>
      }
      body={
        <div className="space-y-10">
          <BlocksRenderer blocks={page.body} />
        </div>
      }
    />
  );
}
