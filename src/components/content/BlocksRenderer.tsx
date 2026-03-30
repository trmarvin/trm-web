import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Prose from "@/components/content/Prose";

type ParagraphBlock = {
  __component: "blocks.paragraph";
  id: number;
  text_md: string;
};

type Block = ParagraphBlock;

type BlocksRendererProps = {
  blocks: Block[];
};

export default function BlocksRenderer({ blocks }: BlocksRendererProps) {
  return (
    <div className="space-y-8">
      {blocks.map((block) => {
        switch (block.__component) {
          case "blocks.paragraph":
            return (
              <Prose key={block.id}>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {block.text_md}
                </ReactMarkdown>
              </Prose>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
