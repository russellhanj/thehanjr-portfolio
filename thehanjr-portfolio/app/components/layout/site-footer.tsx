import clsx from "clsx";
import { Container } from "../ui/container";

export function SiteFooter({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const isDark = variant === "dark";

  return (
    <footer
      className={clsx(
        "mt-16 py-6",
        isDark
          ? "bg-artBg text-artText-secondary"
          : "bg-bg text-text-secondary" // <-- changed from bg-surface
      )}
    >
      <Container className="flex flex-col gap-3 text-xs md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} thehanjr — Russell Han Josef</p>
        <p className="text-[11px]">
          Cinematic, calm photography · Vancouver, Canada
        </p>
      </Container>
    </footer>
  );
}
