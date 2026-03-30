import { ReactNode } from "react";
import PageFrame from "@/components/site/PageFrame";
import { Breadcrumbs } from "@/components/content/Breadcrumbs";
import Eyebrow from "@/components/content/Eyebrow";
import PageTitle from "@/components/content/PageTitle";
import type { BreadcrumbItem } from "@/components/types/ui";

type SingleContentPageProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  breadcrumbs?: BreadcrumbItem[];
  meta?: ReactNode;
  body: ReactNode;
  rail?: ReactNode;
};

export default function SingleContentPage({
  title,
  eyebrow,
  description,
  breadcrumbs,
  meta,
  body,
  rail,
}: SingleContentPageProps) {
  return (
    <PageFrame rail={rail}>
      <div className="space-y-10">
        {breadcrumbs && breadcrumbs.length > 0 ? (
          <Breadcrumbs items={breadcrumbs} />
        ) : null}

        <header className="space-y-4">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <PageTitle>{title}</PageTitle>

          {description ? (
            <p className="max-w-2xl text-lg leading-8 text-neutral-700">
              {description}
            </p>
          ) : null}

          {meta ? meta : null}
        </header>

        <div>{body}</div>
      </div>
    </PageFrame>
  );
}
