import Link from "next/link";
import clsx from "clsx";
import { Container } from "../ui/container";

export function SiteHeader({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <header
      className={clsx(
        "py-4",
        isDark
          ? "bg-artBg text-artText-primary"
          : "bg-bg/80 border-b border-gray-100 text-text-primary"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link
          href="/"
          className={clsx(
            "text-sm font-semibold tracking-[0.3em] uppercase",
            isDark ? "text-artText-primary" : "text-text-primary"
          )}
        >
          thehanjr
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/portfolio"
            className={clsx(
              "transition-colors",
              isDark
                ? "text-artText-secondary hover:text-artText-primary"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={clsx(
              "transition-colors",
              isDark
                ? "text-artText-secondary hover:text-artText-primary"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
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
