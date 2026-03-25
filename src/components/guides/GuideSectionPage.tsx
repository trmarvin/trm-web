// src/components/guides/GuideSectionPage.tsx

import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/types/ui";

type GuideSectionPageProps = {
  data: {
    title: string;
    slug: string;
    description?: string | null;
    guide_series?: {
      title: string;
      slug: string;
    } | null;
  };
  breadcrumbs: BreadcrumbItem[];
};

export function GuideSectionPage({ data, breadcrumbs }: GuideSectionPageProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <Breadcrumbs items={breadcrumbs} />

      <header className="mt-6 space-y-4">
        <p className="text-sm uppercase tracking-wide text-zinc-500">
          Guide Section
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {data.title}
        </h1>

        {data.guide_series ? (
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            In {data.guide_series.title}
          </p>
        ) : null}

        {data.description ? (
          <p className="max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {data.description}
          </p>
        ) : null}
      </header>
    </main>
  );
}
