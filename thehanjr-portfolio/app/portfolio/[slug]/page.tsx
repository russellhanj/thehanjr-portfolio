import { notFound } from "next/navigation";
import { galleries } from "../../../lib/galleries";
import { PageShell } from "../../components/layout/page-shell";
import { Container } from "../../components/ui/container";

type GalleryPageProps = {
  params: { slug: string };
};

// Pre-generate static params (optional but good)
export function generateStaticParams() {
  return galleries.map((g) => ({ slug: g.slug }));
}

export default function GalleryPage({ params }: GalleryPageProps) {
  const gallery = galleries.find((g) => g.slug === params.slug);

  if (!gallery) {
    return notFound();
  }

  return (
    <PageShell>
      <section className="pt-10 md:pt-16">
        <Container className="space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
              {gallery.category}
            </p>
            <h1 className="font-heading text-display-md">{gallery.title}</h1>
            {gallery.location && (
              <p className="text-xs text-text-secondary">
                {gallery.location}
              </p>
            )}
            <p className="max-w-xl text-body text-text-secondary">
              {gallery.description}
            </p>
          </div>

          {/* Placeholder image grid for now */}
          <div className="grid gap-4 md:grid-cols-3">
            {gallery.images.map((image) => (
              <div
                key={image.src}
                className="h-48 rounded-2xl bg-gray-200 md:h-56"
              />
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}