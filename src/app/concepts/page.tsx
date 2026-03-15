import { getConcepts } from "@/lib/strapi";
import { ContentCard } from "@/components/lists/ContentCard";

export default async function ConceptsPage() {
  const concepts = await getConcepts();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Concepts</h1>

      <div className="mt-10 space-y-10">
        {concepts.map((concept: any) => (
          <ContentCard
            key={concept.id}
            href={`/concepts/${concept.slug}`}
            title={concept.title}
            excerpt={concept.definition}
          />
        ))}
      </div>
    </main>
  );
}
