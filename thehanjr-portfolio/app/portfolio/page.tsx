import Link from "next/link";
import { galleries } from "../../lib/galleries";
import { PageShell } from "../components/layout/page-shell";
import { Container } from "../components/ui/container";

export default function PortfolioPage() {
  return (
    <PageShell>
      <section className="pt-10 md:pt-16">
        <Container className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
              Portfolio
            </p>
            <h1 className="font-heading text-display-md">Selected galleries</h1>
            <p className="max-w-xl text-body-lg text-text-secondary">
              A curated mix of portraits, couples, and travel images — all
              photographed with a focus on warmth, intimacy, and quiet cinematic
              details.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {galleries.map((gallery) => (
              <Link
                key={gallery.slug}
                href={`/portfolio/${gallery.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-surface shadow-subtle/40"
              >
                <div className="h-40 bg-gray-200 group-hover:bg-gray-300 transition-colors" />
                <div className="space-y-1 px-4 py-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-text-secondary">
                    {gallery.category}
                  </p>
                  <h2 className="text-sm font-semibold">{gallery.title}</h2>
                  {gallery.location && (
                    <p className="text-[11px] text-text-secondary">
                      {gallery.location}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-text-secondary">
                    {gallery.description}
                  </p>
                  <span className="mt-2 inline-block text-xs font-medium text-accent underline-offset-4 group-hover:underline">
                    View gallery
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
