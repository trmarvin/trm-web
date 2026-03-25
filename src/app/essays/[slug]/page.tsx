import { notFound } from "next/navigation";
import { SingleContentPage } from "@/components/pages/SingleContentPage";
import { getEssayBySlug } from "@/lib/strapi";

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const essay = await getEssayBySlug(slug);

  if (!essay) notFound();

  return (
    <SingleContentPage
      title={essay.title}
      summary={essay.excerpt}
      blocks={essay.body ?? []}
    />
  );
}
