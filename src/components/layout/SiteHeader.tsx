import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-neutral-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">
          Tamar Marvin
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/texts">Texts</Link>
          <Link href="/ideas">Ideas</Link>
          <Link href="/thinkers">Thinkers</Link>
          <Link href="/history">History</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
