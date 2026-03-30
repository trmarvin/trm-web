import { ReactNode } from "react";
import clsx from "clsx";

type PageTitleProps = {
  children: ReactNode;
  className?: string;
};

export default function PageTitle({ children, className }: PageTitleProps) {
  return (
    <h1
      className={clsx(
        "text-5xl font-semibold tracking-tight text-neutral-950",
        className,
      )}
    >
      {children}
    </h1>
  );
}
