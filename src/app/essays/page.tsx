import Link from "next/link";
import { strapiFetch } from "@/lib/strapi";

type Essay = {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt?: string | null;
};

export default async function EssaysPage() {
  const json = await strapiFetch("/essays?populate=*");
  const essays: Essay[] = json.data;

  return (
    <main className="mx-auto max-w-3xl py-16">
      <h1 className="mb-8 text-3xl font-semibold">Essays</h1>

      <ul className="space-y-6">
        {essays.map((e) => (
          <li key={e.id}>
            <h2 className="text-xl font-medium">
              <Link href={`/essays/${e.slug}`} className="underline">
                {e.title}
              </Link>
            </h2>
            {e.excerpt ? <p className="mt-1 text-sm">{e.excerpt}</p> : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
