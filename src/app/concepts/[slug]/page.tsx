import { notFound } from "next/navigation";
import { getConceptBySlug } from "@/lib/strapi";
import { Blocks } from "@/components/blocks/Blocks";

export default async function ConceptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concept = await getConceptBySlug(slug);

  if (!concept) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold">{concept.title}</h1>

      {concept.definition && (
        <p className="mb-10 text-lg opacity-80">{concept.definition}</p>
      )}

      <article className="prose max-w-none">
        <Blocks blocks={concept.body ?? []} />
      </article>
    </main>
  );
}
