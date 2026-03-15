// src/app/guides/[[...segments]]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { resolveGuideRoute } from "@/lib/guides/resolve-guide-route";
import { buildGuideBreadcrumbs } from "@/lib/guides/build-guide-breadcrumbs";

import { GuidesLandingPage } from "@/components/guides/GuidesLandingPage";
import { StandaloneGuidePage } from "@/components/guides/StandaloneGuidePage";
import { GuideSeriesPage } from "@/components/guides/GuideSeriesPage";
import { GuideSectionPage } from "@/components/guides/GuideSectionPage";
import { GuidePage } from "@/components/guides/GuidePage";

type PageProps = {
  params: Promise<{
    segments?: string[];
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { segments = [] } = await params;
  const resolved = await resolveGuideRoute(segments);

  if (!resolved) {
    return {
      title: "Not Found",
    };
  }

  const title = resolved.data?.seoTitle || resolved.data?.title || "Guides";

  const description =
    resolved.data?.seoDescription || resolved.data?.description || undefined;

  return {
    title,
    description,
  };
}

export default async function GuidesRoutePage({ params }: PageProps) {
  const { segments = [] } = await params;
  const resolved = await resolveGuideRoute(segments);

  if (!resolved) {
    notFound();
  }

  const breadcrumbs = buildGuideBreadcrumbs(resolved);

  switch (resolved.type) {
    case "guides-index":
      return (
        <GuidesLandingPage data={resolved.data} breadcrumbs={breadcrumbs} />
      );

    case "standalone-guide":
      return (
        <StandaloneGuidePage data={resolved.data} breadcrumbs={breadcrumbs} />
      );

    case "guide-series":
      return <GuideSeriesPage data={resolved.data} breadcrumbs={breadcrumbs} />;

    case "guide-section":
      return (
        <GuideSectionPage data={resolved.data} breadcrumbs={breadcrumbs} />
      );

    case "guide":
      return <GuidePage data={resolved.data} breadcrumbs={breadcrumbs} />;

    default:
      notFound();
  }
}
