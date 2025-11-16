import Link from "next/link";
import clsx from "clsx";

type SiteSidebarProps = {
  variant?: "light" | "dark";
};

export function SiteSidebar({ variant = "light" }: SiteSidebarProps) {
  const isDark = variant === "dark";

  return (
    <aside
      className={clsx(
        // Desktop only, vertical, sticky
        "hidden md:flex md:flex-col md:sticky md:top-10 md:self-start",
        isDark ? "text-artText-secondary" : "text-text-secondary"
      )}
    >
      <div className="space-y-8 pr-6">
        <Link
          href="/"
          className={clsx(
            "text-xs font-semibold tracking-[0.35em] uppercase",
            isDark ? "text-artText-primary" : "text-text-primary"
          )}
        >
          thehanjr
        </Link>

        <nav className="space-y-3 text-sm">
          <Link
            href="/portfolio"
            className={clsx(
              "block transition-colors",
              isDark
                ? "hover:text-artText-primary"
                : "hover:text-text-primary"
            )}
          >
            Work
          </Link>

          <Link
            href="/about"
            className={clsx(
              "block transition-colors",
              isDark
                ? "hover:text-artText-primary"
                : "hover:text-text-primary"
            )}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={clsx(
              "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium transition-colors",
              isDark
                ? "bg-artSurface text-artText-primary hover:bg-artSurfaceMuted"
                : "bg-surface text-text-primary hover:bg-surfaceMuted"
            )}
          >
            Book a session
          </Link>
        </nav>
      </div>
    </aside>
  );
}
