import { ContentIndexPage } from "@/components/pages/ContentIndexPage";
import { getConcepts } from "@/lib/strapi";
import type { Concept } from "@/types/content";

export default async function ConceptsPage() {
  const concepts = await getConcepts();

  return (
    <ContentIndexPage<Concept>
      title="Concepts"
      items={concepts}
      getHref={(concept) => `/concepts/${concept.slug}`}
      getTitle={(concept) => concept.title}
      getExcerpt={(concept) => concept.definition}
    />
  );
}
