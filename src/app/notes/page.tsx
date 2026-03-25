import { ContentCard } from "@/components/content/ContentCard";

type ContentIndexPageProps<T extends { id: number }> = {
  title: string;
  items: T[];
  getHref: (item: T) => string;
  getTitle: (item: T) => string;
  getExcerpt?: (item: T) => string | null | undefined;
};

export function ContentIndexPage<T extends { id: number }>({
  title,
  items,
  getHref,
  getTitle,
  getExcerpt,
}: ContentIndexPageProps<T>) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-semibold">{title}</h1>

      <div className="mt-10 space-y-10">
        {items.map((item) => (
          <ContentCard
            key={item.id}
            href={getHref(item)}
            title={getTitle(item)}
            excerpt={getExcerpt ? (getExcerpt(item) ?? "") : ""}
          />
        ))}
      </div>
    </main>
  );
}
