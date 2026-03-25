// src/components/content/meta-row.tsx
import { ReactNode } from "react";

type MetaRowProps = {
  items: ReactNode[];
};

export function MetaRow({ items }: MetaRowProps) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-neutral-600">
      {items.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
}
