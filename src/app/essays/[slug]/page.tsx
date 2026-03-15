import { notFound } from "next/navigation";
import { strapiFetch } from "@/lib/strapi";
import { Blocks } from "@/components/blocks/Blocks";

type Essay = {
  id: number;
  title: string;
  slug: string;
  excerpt?: any;
  body?: any[];
};

function blocksToPlainText(blocks: any): string {
  if (!Array.isArray(blocks)) return "";

  return blocks
    .map((block) =>
      Array.isArray(block.children)
        ? block.children.map((child: any) => child.text || "").join("")
        : "",
    )
    .join(" ")
    .trim();
}

export default async function EssayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const json = await strapiFetch(
    `/essays?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`,
  );

  const essay: Essay | undefined = json.data?.[0];

  if (!essay) {
    notFound();
  }

  const excerptText =
    typeof essay.excerpt === "string"
      ? essay.excerpt
      : blocksToPlainText(essay.excerpt);

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-3 text-3xl font-semibold">{essay.title}</h1>

      {excerptText ? (
        <p className="mb-10 text-lg opacity-80">{excerptText}</p>
      ) : null}

      <article className="prose max-w-none">
        <Blocks blocks={essay.body ?? []} />
      </article>
    </main>
  );
}
