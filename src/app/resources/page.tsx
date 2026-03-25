import { ContentIndexPage } from "@/components/pages/ContentIndexPage";
import { getResources } from "@/lib/strapi";
import type { Resource } from "@/types/content";

export default async function ResourcesPage() {
  const resources = await getResources();

  return (
    <ContentIndexPage<Resource>
      title="Resources"
      items={resources}
      getHref={(resource) => `/resources/${resource.slug}`}
      getTitle={(resource) => resource.title}
      getExcerpt={(resource) => resource.excerpt}
    />
  );
}
