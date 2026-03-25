import { notFound } from "next/navigation";
import { SingleContentPage } from "@/components/pages/SingleContentPage";
import { getHubBySlug } from "@/lib/strapi";

export default async function HubPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hub = await getHubBySlug(slug);

  if (!hub) notFound();

  return (
    <SingleContentPage
      title={hub.title}
      summary={hub.description}
      blocks={hub.body ?? []}
    />
  );
}
