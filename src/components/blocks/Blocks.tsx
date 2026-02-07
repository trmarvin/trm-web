type Block =
  | { __component: string; id?: number; text?: string } // generic
  | Record<string, any>;

export function Blocks({ blocks }: { blocks: Block[] }) {
  if (!blocks?.length) return null;

  return (
    <>
      {blocks.map((b, idx) => {
        // Most common first block: paragraph
        if (b.__component?.includes("paragraph")) {
          return <p key={b.id ?? idx}>{b.text ?? ""}</p>;
        }

        // Fallback so you can see what's coming through
        return (
          <pre key={b.id ?? idx} className="text-xs opacity-70 overflow-x-auto">
            {JSON.stringify(b, null, 2)}
          </pre>
        );
      })}
    </>
  );
}
