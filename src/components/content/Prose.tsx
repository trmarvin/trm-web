import { ReactNode } from "react";
import clsx from "clsx";

type ProseProps = {
  children: ReactNode;
  className?: string;
};

export default function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={clsx(
        "prose prose-neutral max-w-none",
        "prose-p:text-[1.125rem] prose-p:leading-8",
        "prose-headings:font-semibold prose-headings:text-neutral-950",
        "prose-a:underline prose-a:underline-offset-4",
        "prose-a:decoration-neutral-400 hover:prose-a:decoration-neutral-700",
        "prose-blockquote:border-l-neutral-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
