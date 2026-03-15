import { notFound } from "next/navigation";
import { getHubBySlug } from "@/lib/strapi";
import { Blocks } from "@/components/blocks/Blocks";

export default async function HubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hub = await getHubBySlug(slug);

  if (!hub) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-semibold">{hub.title}</h1>

      {hub.description && (
        <p className="mb-10 text-lg opacity-80">{hub.description}</p>
      )}

      <article className="prose max-w-none">
        <Blocks blocks={hub.body ?? []} />
      </article>
    </main>
  );
}
