import Link from "next/link";
import clsx from "clsx";
import { Container } from "../ui/container";

export function SiteHeader({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <header
      className={clsx(
        "md:hidden border-b",
        isDark
          ? "bg-artBg border-artSurface text-artText-primary"
          : "bg-bg/80 border-gray-100 text-text-primary"
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <Link
          href="/"
          className={clsx(
            "text-sm font-semibold tracking-[0.3em] uppercase",
            isDark ? "text-artText-primary" : "text-text-primary"
          )}
        >
          thehanjr
        </Link>

        <nav className="flex items-center gap-4 text-sm">
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
        </nav>
      </Container>
    </header>
  );
}
