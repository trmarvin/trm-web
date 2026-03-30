"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { href: "/texts", label: "Texts" },
  { href: "/ideas", label: "Ideas" },
  { href: "/people", label: "People" },
  { href: "/history", label: "History" },
  { href: "/about", label: "About" },
];

export default function PrimaryNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6 text-base font-medium translate-y-0.5">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href || pathname.startsWith(item.href + "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "transition-colors duration-200 underline-offset-4",
              isActive
                ? "text-neutral-900 underline"
                : "text-neutral-500 hover:text-neutral-900 hover:underline",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
