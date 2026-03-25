import Link from "next/link";

type Props = {
  href: string;
  title: string;
  excerpt?: string | null;
};

export function ContentCard({ href, title, excerpt }: Props) {
  return (
    <article className="border-b border-neutral-200 pb-8">
      <h2 className="text-2xl font-medium">
        <Link href={href}>{title}</Link>
      </h2>
      {excerpt ? <p className="mt-2 text-neutral-600">{excerpt}</p> : null}
    </article>
  );
}
