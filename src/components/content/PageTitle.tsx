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
        "text-4xl font-semibold tracking-tight sm:text-5xl",
        className,
      )}
    >
      {children}
    </h1>
  );
}
