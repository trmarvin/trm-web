// src/components/guides/GuidePage.tsx

import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/types";
import { GuideBody } from "@/components/guides/GuideBody";

type GuidePageProps = {
  data: {
    title: string;
    slug: string;
    dek?: string | null;
    description?: string | null;
    body?: Array<{
      __component: string;
      id?: number | string;
      [key: string]: unknown;
    }>;
    guide_series?: {
      title: string;
      slug: string;
    } | null;
    guide_section?: {
      title: string;
      slug: string;
    } | null;
  };
  breadcrumbs: BreadcrumbItem[];
};

export function GuidePage({ data, breadcrumbs }: GuidePageProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <Breadcrumbs items={breadcrumbs} />

      <article className="mt-6">
        <header className="space-y-4 border-b border-zinc-200 pb-8 dark:border-zinc-800">
          <p className="text-sm uppercase tracking-wide text-zinc-500">Guide</p>

          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            {data.title}
          </h1>

          {data.guide_series || data.guide_section ? (
            <div className="text-sm text-zinc-500 dark:text-zinc-400">
              {data.guide_series ? (
                <span>{data.guide_series.title}</span>
              ) : null}
              {data.guide_series && data.guide_section ? (
                <span> · </span>
              ) : null}
              {data.guide_section ? (
                <span>{data.guide_section.title}</span>
              ) : null}
            </div>
          ) : null}

          {data.dek ? (
            <p className="max-w-3xl text-xl leading-8 text-zinc-600 dark:text-zinc-400">
              {data.dek}
            </p>
          ) : null}
        </header>

        <div className="mt-10">
          <GuideBody blocks={data.body ?? []} />
        </div>
      </article>
    </main>
  );
}
