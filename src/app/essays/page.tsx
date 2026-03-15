import { getEssays } from "@/lib/strapi";
import { ContentCard } from "@/components/lists/ContentCard";

export default async function EssaysPage() {
  const essays = await getEssays();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Essays</h1>

      <div className="mt-10 space-y-10">
        {essays.map((essay: any) => (
          <ContentCard
            key={essay.id}
            href={`/essays/${essay.slug}`}
            title={essay.title}
            excerpt={essay.excerpt}
          />
        ))}
      </div>
    </main>
  );
}
