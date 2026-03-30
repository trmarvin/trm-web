import Link from "next/link";
import Image from "next/image";
import Container from "@/components/site/Container";
import PrimaryNav from "@/components/site/PrimaryNav";

export default function SiteHeader() {
  return (
    <header className="border-b border-neutral-200 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" aria-label="Tamar Marvin home" className="shrink-0">
          <Image
            src="/logo-wordmark.png"
            alt="Tamar Marvin"
            width={260}
            height={90}
            priority
            className="h-auto w-auto max-h-18"
          />
        </Link>

        <PrimaryNav />
      </Container>
    </header>
  );
}
