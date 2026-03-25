import { notFound } from "next/navigation";
import { SingleContentPage } from "@/components/pages/SingleContentPage";
import { getThinkerBySlug } from "@/lib/strapi";

export default async function ThinkerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const thinker = await getThinkerBySlug(slug);

  if (!thinker) notFound();

  return (
    <SingleContentPage
      title={thinker.name}
      summary={thinker.short_bio}
      blocks={thinker.biography ?? []}
    />
  );
}
