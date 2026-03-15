// src/components/guides/GuideBody.tsx

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type GuideBlock = {
  __component: string;
  id?: number | string;
  text_md?: string;
  [key: string]: unknown;
};

type GuideBodyProps = {
  blocks: GuideBlock[];
};

export function GuideBody({ blocks }: GuideBodyProps) {
  if (!blocks?.length) {
    return <p>No content yet.</p>;
  }

  return (
    <div className="space-y-6">
      {blocks.map((block, index) => {
        const key = block.id ?? `${block.__component}-${index}`;

        switch (block.__component) {
          case "blocks.paragraph":
            return (
              <div
                key={key}
                className="prose prose-zinc max-w-none dark:prose-invert"
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {block.text_md ?? ""}
                </ReactMarkdown>
              </div>
            );

          default:
            return (
              <div
                key={key}
                className="rounded border border-zinc-200 p-4 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400"
              >
                Unsupported guide block: {block.__component}
              </div>
            );
        }
      })}
    </div>
  );
}
