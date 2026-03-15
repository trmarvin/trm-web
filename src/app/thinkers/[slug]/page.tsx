import { notFound } from "next/navigation";
import { getThinkerBySlug } from "@/lib/strapi";
import { Blocks } from "@/components/blocks/Blocks";

export default async function ThinkerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const thinker = await getThinkerBySlug(slug);

  if (!thinker) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold">{thinker.name}</h1>

      {thinker.short_bio && (
        <p className="mb-10 text-lg opacity-80">{thinker.short_bio}</p>
      )}

      <article className="prose max-w-none">
        <Blocks blocks={thinker.body ?? []} />
      </article>
    </main>
  );
}
