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
      {rail ? (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <main className="min-w-0 max-w-3xl">{children}</main>
          <aside className="hidden lg:block">{rail}</aside>
        </div>
      ) : (
        <main className="min-w-0 max-w-3xl">{children}</main>
      )}
    </Container>
  );
}
