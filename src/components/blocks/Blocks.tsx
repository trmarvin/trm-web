import ReactMarkdown from "react-markdown";

type Block = {
  __component: string;
  id: number;
  [key: string]: any;
};

function FootnoteBlock({ block }: { block: Block }) {
  const text = block.footnote || "";

  return (
    <aside className="rounded-md border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
      <span className="font-medium">Note.</span>{" "}
      <ReactMarkdown
        components={{ p: ({ children }) => <span>{children}</span> }}
      >
        {text}
      </ReactMarkdown>
    </aside>
  );
}

function ParagraphBlock({ block }: { block: Block }) {
  const text = block.text_md || "";

  if (!text) return null;

  return (
    <div className="prose max-w-none">
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  if (!blocks?.length) return null;

  return (
    <div className="space-y-8">
      {blocks.map((block) => {
        switch (block.__component) {
          case "blocks.paragraph":
            return <ParagraphBlock key={block.id} block={block} />;

          case "blocks.footnote":
            return <FootnoteBlock key={block.id} block={block} />;

          default:
            return (
              <pre
                key={block.id}
                className="overflow-x-auto rounded bg-neutral-100 p-4 text-xs"
              >
                {JSON.stringify(block, null, 2)}
              </pre>
            );
        }
      })}
    </div>
  );
}
