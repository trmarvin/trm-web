import Link from "next/link";
import Container from "@/components/site/Container";
import { linkStyles } from "@/lib/linkStyles";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-neutral-200 bg-neutral-50/40">
      <Container className="py-10 text-sm text-neutral-500">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
              Site
            </h2>
            <div className="flex flex-col gap-2">
              <Link href="/colophon" className={linkStyles.meta}>
                Website Colophon
              </Link>
              <Link href="/permissions" className={linkStyles.meta}>
                Permissions
              </Link>
              <Link href="/privacy" className={linkStyles.meta}>
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
              Elsewhere
            </h2>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.instagram.com/tamar.marvin/"
                className={linkStyles.meta}
              >
                Instagram
              </a>
              <a
                href="https://www.threads.com/@tamar.marvin"
                className={linkStyles.meta}
              >
                Threads
              </a>
              <a
                href="https://bsky.app/profile/trmarvin.bsky.social"
                className={linkStyles.meta}
              >
                Bluesky
              </a>
              <a
                href="https://www.linkedin.com/in/trmarvin/"
                className={linkStyles.meta}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-400">
              Contact
            </h2>
            <div className="space-y-2">
              <p className="max-w-xs leading-6">
                For teaching, speaking, and project inquiries.
              </p>
              <Link href="/contact" className={linkStyles.meta}>
                Contact
              </Link>
              {/* Dev block */}
              <div className="pt-2">
                <a
                  href="https://dev.trmarvin.org"
                  className="underline underline-offset-4"
                >
                  Dev Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6">
          <p>
            © {year} T. R. Marvin |{" "}
            <a
              href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
              className={linkStyles.meta}
            >
              CC BY-NC-ND 4.0
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
