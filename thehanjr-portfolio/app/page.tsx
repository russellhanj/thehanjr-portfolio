import Image from "next/image";
import { PageShell } from "./components/layout/page-shell";
import { Container } from "./components/ui/container";

export default function HomePage() {
  return (
    <PageShell variant="dark">
      {/* Hero */}
      <section className="pt-10 md:pt-16">
        <Container className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
          {/* Text side */}
          <div className="space-y-6">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-artText-secondary">
              Vancouver Photographer
            </p>

            <h1 className="font-heading text-display-lg leading-tight text-balance">
              Cinematic, calm photography
              <span className="block text-accent">
                for real moments and real people.
              </span>
            </h1>

            <p className="text-body-lg text-artText-secondary max-w-prose">
              I am Russell, a Vancouver-based photographer who loves soft light,
              honest emotions, and images that feel like still frames from your
              favorite film.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-subtle hover:bg-accent-dark transition-colors">
                Book a session
              </button>
              <button className="text-sm text-artText-secondary underline-offset-4 hover:underline">
                View portfolio
              </button>
            </div>
          </div>

          {/* Image mock */}
          <div className="relative h-64 md:h-80 lg:h-96">
            <div className="absolute inset-0 rounded-2xl bg-artSurfaceMuted" />
            <div className="absolute inset-4 rounded-2xl bg-artSurface" />
          </div>
        </Container>
      </section>

      {/* Featured galleries */}
      <section className="mt-16 md:mt-20">
        <Container className="space-y-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-artText-secondary">
                Selected Work
              </p>
              <h2 className="font-heading text-display-sm">
                Galleries
              </h2>
            </div>
            <p className="max-w-md text-sm text-artText-secondary">
              A mix of portraits, couples, and travel stories — all photographed
              with a focus on warmth, intimacy, and quiet cinematic details.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Portraits", description: "Soft, honest, everyday moments." },
              { title: "Couples", description: "Stories of connection and presence." },
              { title: "Travel", description: "Places that linger in your memory." },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-artSurface shadow-subtle/40"
              >
                <div className="h-40 bg-artSurfaceMuted group-hover:bg-artSurface transition-colors" />
                <div className="space-y-1 px-4 py-4">
                  <h3 className="text-sm font-semibold text-artText-primary">
                    {item.title}
                  </h3>
                  <p className="text-xs text-artText-secondary">
                    {item.description}
                  </p>
                  <button className="mt-2 text-xs font-medium text-accent underline-offset-4 group-hover:underline">
                    View gallery
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* About teaser */}
      <section className="mt-16 md:mt-24">
        <Container className="grid gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-artText-secondary">
              About
            </p>
            <h2 className="font-heading text-display-sm">
              A calm approach to storytelling
            </h2>
            <p className="text-body text-artText-secondary max-w-prose">
              I enjoy making people feel at ease in front of the camera. My work
              is less about perfect poses and more about the quiet, in-between
              frames that show who you really are.
            </p>
            <p className="text-body text-artText-secondary max-w-prose">
              Whether we’re walking through the city at sunset or exploring a
              quieter corner of Vancouver, my goal is to create images that feel
              like you — honest, soft, and timeless.
            </p>
            <button className="text-sm text-accent underline-offset-4 hover:underline">
              Read more about me
            </button>
          </div>

          <div className="h-56 rounded-2xl bg-artSurfaceMuted md:h-72" />
        </Container>
      </section>

      {/* Call to action */}
      <section className="mt-16 md:mt-24 mb-16">
        <Container className="rounded-2xl bg-artSurface px-6 py-10 md:px-10 md:py-12 shadow-subtle">
          <div className="space-y-4 md:max-w-2xl">
            <h2 className="font-heading text-display-sm">
              Ready to make something together?
            </h2>
            <p className="text-body text-artText-secondary">
              Tell me a bit about what you&apos;re dreaming of — a portrait
              session, a quiet couple shoot, or images for your personal brand.
            </p>
            <button className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-subtle hover:bg-accent-dark transition-colors">
              Start a booking
            </button>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
