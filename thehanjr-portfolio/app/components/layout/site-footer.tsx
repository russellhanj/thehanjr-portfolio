import { Container } from "../ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-100 bg-surface mt-16">
      <Container className="flex flex-col gap-3 py-6 text-xs text-text-secondary md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} thehanjr — Russell Han Josef</p>
        <p className="text-[11px]">
          Cinematic, calm photography · Vancouver, Canada
        </p>
      </Container>
    </footer>
  );
}
