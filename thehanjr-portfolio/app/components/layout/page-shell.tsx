import type { ReactNode } from "react";
import clsx from "clsx";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { SiteSidebar } from "./site-sidebar";

type PageShellProps = {
  children: ReactNode;
  variant?: "light" | "dark";
};

export function PageShell({ children, variant = "light" }: PageShellProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={clsx(
        "min-h-screen",
        isDark
          ? "theme-dark bg-artBg text-artText-primary"
          : "theme-light bg-bg text-text-primary"
      )}
    >
      {/* Outer container: almost full-width with comfy padding */}
      <div className="mx-auto max-w-6xl lg:max-w-7xl px-4 md:px-8 py-6 md:py-10">
        {/* Desktop: grid with left nav + right content */}
        <div className="md:grid md:grid-cols-[220px,minmax(0,1fr)] md:gap-10 md:items-start">
          {/* Left: sticky sidebar */}
          <SiteSidebar variant={variant} />

          {/* Right: normal flow – header (mobile), content, footer */}
          <div className="flex flex-col gap-8">
            {/* Mobile header only */}
            <SiteHeader variant={variant} />

            {/* Page content */}
            <main>{children}</main>

            {/* Footer comes after content, not sticky */}
            <SiteFooter variant={variant} />
          </div>
        </div>
      </div>
    </div>
  );
}
