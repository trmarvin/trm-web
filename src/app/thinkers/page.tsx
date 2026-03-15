import { getThinkers } from "@/lib/strapi";
import { ContentCard } from "@/components/lists/ContentCard";

export default async function ThinkersPage() {
  const thinkers = await getThinkers();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-semibold">People</h1>

      <div className="mt-10 space-y-10">
        {thinkers.map((thinker: any) => (
          <ContentCard
            key={thinker.id}
            href={`/thinkers/${thinker.slug}`}
            title={thinker.name}
            excerpt={thinker.short_bio}
          />
        ))}
      </div>
    </main>
  );
}
