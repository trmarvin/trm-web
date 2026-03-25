import { ContentIndexPage } from "@/components/pages/ContentIndexPage";
import { getEssays } from "@/lib/strapi";
import type { Essay } from "@/types/content";

export default async function EssaysPage() {
  const essays = await getEssays();

  return (
    <ContentIndexPage<Essay>
      title="Essays"
      items={essays}
      getHref={(essay) => `/essays/${essay.slug}`}
      getTitle={(essay) => essay.title}
      getExcerpt={(essay) => essay.excerpt}
    />
  );
}
