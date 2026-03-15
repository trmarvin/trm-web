import { notFound } from "next/navigation";
import { getBookBySlug } from "@/lib/strapi";
import { Blocks } from "@/components/blocks/Blocks";

export default async function BookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-3 text-3xl font-semibold">{book.title}</h1>

      {book.excerpt && (
        <p className="mb-10 text-lg opacity-80">{book.excerpt}</p>
      )}

      <article className="prose max-w-none">
        <Blocks blocks={book.body ?? []} />
      </article>
    </main>
  );
}
