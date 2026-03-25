import { ReactNode } from "react";
import clsx from "clsx";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <div
      className={clsx(
        "text-xs font-medium uppercase tracking-[0.14em] text-neutral-500",
        className,
      )}
    >
      {children}
    </div>
  );
}
