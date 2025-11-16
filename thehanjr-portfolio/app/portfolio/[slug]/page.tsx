import { notFound } from "next/navigation";
import Image from "next/image";
import clsx from "clsx";

import { galleries } from "../../../lib/galleries";
import { PageShell } from "../../components/layout/page-shell";
import { Container } from "../../components/ui/container";

export async function generateStaticParams() {
  return galleries.map((g) => ({ slug: g.slug }));
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // ✅ unwrap Promise from Next 16
  const gallery = galleries.find((g) => g.slug === slug);

  if (!gallery) {
    return notFound();
  }

  const isArt =
    gallery.category === "travel" ||
    gallery.category === "landscape" ||
    gallery.category === "night-sky";

  return (
    <PageShell>
      <section
        className={clsx(
          "pt-10 md:pt-16 pb-16 transition-colors",
          isArt ? "bg-artBg text-artText-primary" : "bg-bg text-text-primary"
        )}
      >
        <Container className="space-y-8">
          {/* Header */}
          <div className="space-y-3">
            <p
              className={clsx(
                "text-xs uppercase tracking-[0.3em]",
                isArt ? "text-artText-secondary" : "text-text-secondary"
              )}
            >
              {gallery.category}
            </p>

            <h1 className="font-heading text-display-md">
              {gallery.title}
            </h1>

            {gallery.location && (
              <p
                className={clsx(
                  "text-xs",
                  isArt ? "text-artText-secondary" : "text-text-secondary"
                )}
              >
                {gallery.location}
              </p>
            )}

            <p
              className={clsx(
                "max-w-xl text-body",
                isArt ? "text-artText-secondary" : "text-text-secondary"
              )}
            >
              {gallery.description}
            </p>
          </div>

          {/* Images (still placeholders for now) */}
          <div className="grid gap-4 md:grid-cols-3">
            {gallery.images.map((image) => (
              <div
                key={image.src}
                className={clsx(
                  "relative h-48 md:h-56 overflow-hidden rounded-2xl",
                  isArt ? "bg-artSurface" : "bg-gray-200"
                )}
              >
                {/* Later: swap this div for <Image ... /> */}
                {/* <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                /> */}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
