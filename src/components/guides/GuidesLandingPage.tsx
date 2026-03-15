// src/components/guides/GuidesLandingPage.tsx

import { Breadcrumbs } from "@/components/navigation/Breadcrumbs";
import type { BreadcrumbItem } from "@/components/navigation/types";

type GuidesLandingPageProps = {
  data: {
    title?: string;
  };
  breadcrumbs: BreadcrumbItem[];
};

export function GuidesLandingPage({
  data,
  breadcrumbs,
}: GuidesLandingPageProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12">
      <Breadcrumbs items={breadcrumbs} />

      <header className="mt-6 space-y-4">
        <p className="text-sm uppercase tracking-wide text-zinc-500">Guides</p>

        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {data.title ?? "Guides"}
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Guided pathways into texts, ideas, and traditions.
        </p>
      </header>
    </main>
  );
}
