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
        "prose-headings:font-semibold",
        "prose-a:underline prose-a:underline-offset-4",
        "prose-blockquote:border-l-neutral-300",
        className,
      )}
    >
      {children}
    </div>
  );
}
