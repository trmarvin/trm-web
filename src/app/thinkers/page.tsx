import { ContentIndexPage } from "@/components/pages/ContentIndexPage";
import { getThinkers } from "@/lib/strapi";
import type { Thinker } from "@/types/content";

export default async function ThinkersPage() {
  const thinkers = await getThinkers();

  return (
    <ContentIndexPage<Thinker>
      title="People"
      items={thinkers}
      getHref={(thinker) => `/thinkers/${thinker.slug}`}
      getTitle={(thinker) => thinker.name}
      getExcerpt={(thinker) => thinker.short_bio}
    />
  );
}
