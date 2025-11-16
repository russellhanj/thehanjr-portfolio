import Link from "next/link";
import { Container } from "../ui/container";

export function SiteHeader() {
  return (
    <header className="border-b border-gray-100 bg-bg/80 backdrop-blur-sm">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.3em] uppercase">
          thehanjr
        </Link>

        <nav className="flex items-center gap-6 text-sm text-text-secondary">
          <Link href="/portfolio" className="hover:text-text-primary transition-colors">
            Portfolio
          </Link>
          <Link href="/about" className="hover:text-text-primary transition-colors">
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-white shadow-subtle hover:bg-accent-dark transition-colors"
          >
            Book a session
          </Link>
        </nav>
      </Container>
    </header>
  );
}
