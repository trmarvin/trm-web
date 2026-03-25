import { ContentIndexPage } from "@/components/pages/ContentIndexPage";
import { getHubs } from "@/lib/strapi";
import type { Hub } from "@/types/content";

export default async function HubsPage() {
  const hubs = await getHubs();

  return (
    <ContentIndexPage<Hub>
      title="Hubs"
      items={hubs}
      getHref={(hub) => `/hubs/${hub.slug}`}
      getTitle={(hub) => hub.title}
      getExcerpt={(hub) => hub.description}
    />
  );
}
