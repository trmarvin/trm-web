import { strapiFetch } from "@/lib/strapi";
import { Blocks } from "@/components/blocks/Blocks";

type Essay = {
  id: number;
  title: string;
  slug: string;
  excerpt?: string | null;
  body?: any[]; // dynamic zone blocks
};

export default async function EssayPage({
  params,
}: {
  params: { slug: string };
}) {
  const json = await strapiFetch(
    `/api/essays?filters[slug][$eq]=test-essay&populate=*`,
  );

  const essay: Essay | undefined = json.data?.[0];

  if (!essay) return <main className="mx-auto max-w-3xl py-16">Not found</main>;

  return (
    <main className="mx-auto max-w-3xl py-16">
      <h1 className="mb-3 text-3xl font-semibold">{essay.title}</h1>
      {essay.excerpt ? (
        <p className="mb-10 text-lg opacity-80">{essay.excerpt}</p>
      ) : null}

      <article className="prose">
        <Blocks blocks={essay.body ?? []} />
      </article>
    </main>
  );
}
