import { ReactNode } from "react";
import clsx from "clsx";
import Container from "./Container";

type PageFrameProps = {
  children: ReactNode;
  rail?: ReactNode;
  className?: string;
};

export default function PageFrame({
  children,
  rail,
  className,
}: PageFrameProps) {
  return (
    <Container className={clsx("py-10 lg:py-14", className)}>
      <div
        className={clsx(
          "grid grid-cols-1 gap-10",
          rail && "lg:grid-cols-[minmax(0,1fr)_280px]",
        )}
      >
        <main className="min-w-0">{children}</main>

        {rail ? <aside className="hidden lg:block">{rail}</aside> : null}
      </div>
    </Container>
  );
}
