// app/featured/page.tsx
import Link from "next/link";
import clsx from "clsx";

import { PageShell } from "../components/layout/page-shell";
import { Container } from "../components/ui/container";

type FeaturedShape = "landscape" | "square" | "portrait";

type FeaturedItem = {
  slug: string;
  href: string;
  title: string;
  location?: string;
  shape: FeaturedShape;
};

const featuredItems: FeaturedItem[] = [
  {
    slug: "portraits-in-the-city",
    href: "/portfolio/portraits-in-the-city",
    title: "Portraits in the City",
    location: "Vancouver, BC",
    shape: "landscape",
  },
  {
    slug: "quiet-couples-at-sunset",
    href: "/portfolio/quiet-couples-at-sunset",
    title: "Quiet Couples at Sunset",
    location: "Stanley Park",
    shape: "portrait",
  },
  {
    slug: "travel-notes-from-the-road",
    href: "/portfolio/travel-notes-from-the-road",
    title: "Travel Notes from the Road",
    location: "Various places",
    shape: "square",
  },
  // Add more mock items as you go…
];

const shapeClasses: Record<FeaturedShape, string> = {
  landscape: "aspect-[16/9]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

export default function FeaturedPage() {
  return (
    <PageShell variant="dark">
      <section className="pt-10 md:pt-12 pb-16">
        <Container className="space-y-10">
          {/* Header */}
          <div className="space-y-4 max-w-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-artText-secondary">
              Featured
            </p>
            <h1 className="font-heading text-display-md">
              Selected work I&apos;m most proud of.
            </h1>
            <p className="text-body text-artText-secondary">
              A rotating selection of projects and personal favorites — portraits,
              couples, and quiet scenes that feel the most like me.
            </p>
          </div>

          {/* Masonry-style mock grid using blocks */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {featuredItems.map((item, index) => (
              <Link
                key={item.slug}
                href={item.href}
                className="mb-4 block break-inside-avoid"
              >
                <div className="overflow-hidden rounded-2xl bg-artSurface shadow-subtle/40 hover:shadow-subtle transition-shadow duration-300">
                  {/* Mock image block */}
                  <div
                    className={clsx(
                      "relative w-full overflow-hidden",
                      shapeClasses[item.shape]
                    )}
                  >
                    <div
                      className={clsx(
                        "absolute inset-0",
                        // Slight variation per item so the blocks don’t all look identical
                        index % 3 === 0
                          ? "bg-gradient-to-br from-artSurfaceMuted to-artBg"
                          : index % 3 === 1
                          ? "bg-gradient-to-br from-artBg to-artSurfaceMuted"
                          : "bg-gradient-to-br from-artSurface to-artBg"
                      )}
                    />
                    {/* Optional small label in the corner so you can visually map things */}
                    <div className="absolute left-3 top-3 rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.16em] text-artText-primary">
                      Mock
                    </div>
                  </div>

                  {/* Text meta */}
                  <div className="px-3.5 py-3 space-y-1">
                    <h2 className="text-xs font-medium tracking-[0.18em] uppercase text-artText-secondary">
                      {item.title}
                    </h2>
                    {item.location && (
                      <p className="text-[11px] text-artText-secondary/80">
                        {item.location}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
