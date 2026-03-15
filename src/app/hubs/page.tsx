import { getHubs } from "@/lib/strapi";
import { ContentCard } from "@/components/lists/ContentCard";

export default async function HubsPage() {
  const hubs = await getHubs();

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-semibold">Hubs</h1>

      <div className="mt-10 space-y-10">
        {hubs.map((hub: any) => (
          <ContentCard
            key={hub.id}
            href={`/hubs/${hub.slug}`}
            title={hub.title}
            excerpt={hub.description}
          />
        ))}
      </div>
    </main>
  );
}
