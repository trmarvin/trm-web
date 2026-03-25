import { notFound } from "next/navigation";
import { SingleContentPage } from "@/components/pages/SingleContentPage";
import { getConceptBySlug } from "@/lib/strapi";

export default async function ConceptPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const concept = await getConceptBySlug(slug);

  if (!concept) notFound();

  return (
    <SingleContentPage
      title={concept.title}
      summary={concept.definition}
      blocks={concept.body ?? []}
    />
  );
}
