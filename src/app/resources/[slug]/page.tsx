import { notFound } from "next/navigation";
import { SingleContentPage } from "@/components/pages/SingleContentPage";
import { getResourceBySlug } from "@/lib/strapi";

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = await getResourceBySlug(slug);

  if (!resource) notFound();

  return (
    <SingleContentPage
      title={resource.title}
      summary={resource.excerpt}
      blocks={resource.body ?? []}
    />
  );
}
