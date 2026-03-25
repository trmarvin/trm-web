import Link from "next/dist/client/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-500">
        <Link href="/colophon">Website Colophon</Link> |{" "}
        <Link href="/permissions">Permissions</Link> |{" "}
        <Link href="/privacy">Privacy Policy</Link>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-neutral-500">
        © 2026 T. R. Marvin |{" "}
        <a
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
          className="hover:underline"
        >
          CC BY-NC-ND 4.0
        </a>
      </div>
    </footer>
  );
}
