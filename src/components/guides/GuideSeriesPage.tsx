// src/components/guides/GuideSeriesPage.tsx

import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/types";

type GuideSeriesPageProps = {
  data: {
    title: string;
    slug: string;
    description?: string | null;
  };
  breadcrumbs: BreadcrumbItem[];
};

export function GuideSeriesPage({ data, breadcrumbs }: GuideSeriesPageProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <Breadcrumbs items={breadcrumbs} />

      <header className="mt-6 space-y-4">
        <p className="text-sm uppercase tracking-wide text-zinc-500">
          Guide Series
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {data.title}
        </h1>

        {data.description ? (
          <p className="max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {data.description}
          </p>
        ) : null}
      </header>
    </main>
  );
}
