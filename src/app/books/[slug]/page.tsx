import { notFound } from "next/navigation";
import { SingleContentPage } from "@/components/pages/SingleContentPage";
import { getBookBySlug } from "@/lib/strapi";

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) notFound();

  return (
    <SingleContentPage
      title={book.title}
      summary={book.excerpt}
      blocks={book.body ?? []}
    />
  );
}
