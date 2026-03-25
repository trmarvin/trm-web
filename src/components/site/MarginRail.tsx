// src/components/layout/margin-rail.tsx
import { ReactNode } from "react";

type MarginRailProps = {
  children: ReactNode;
};

export function MarginRail({ children }: MarginRailProps) {
  return <div className="space-y-6 text-sm text-neutral-600">{children}</div>;
}
