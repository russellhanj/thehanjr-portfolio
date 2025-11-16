import type { ReactNode } from "react";
import clsx from "clsx";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

type PageShellProps = {
  children: ReactNode;
  variant?: "light" | "dark";
};

export function PageShell({ children, variant = "light" }: PageShellProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={clsx(
        "min-h-screen flex flex-col",
        isDark ? "bg-artBg text-artText-primary" : "bg-bg text-text-primary"
      )}
    >
      <SiteHeader variant={variant} />
      <main className="flex-1">{children}</main>
      <SiteFooter variant={variant} />
    </div>
  );
}
