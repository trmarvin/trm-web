import { notFound } from "next/navigation";
import { SingleContentPage } from "@/components/pages/SingleContentPage";
import { getNoteBySlug } from "@/lib/strapi";

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = await getNoteBySlug(slug);

  if (!note) notFound();

  return (
    <SingleContentPage
      title={note.title}
      summary={note.excerpt}
      blocks={note.body ?? []}
    />
  );
}
