import { PageShell } from "../components/layout/page-shell";
import { Container } from "../components/ui/container";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="pt-10 md:pt-16">
        <Container className="space-y-12">
          {/* Intro */}
          <div className="max-w-2xl space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
              About
            </p>
            <h1 className="font-heading text-display-md leading-tight">
              A calm, cinematic way of seeing.
            </h1>
            <p className="text-body-lg text-text-secondary">
              I&apos;m Russell, a Vancouver-based photographer drawn to soft
              light, quiet moments, and images that feel like stills from a film
              you want to revisit.
            </p>
          </div>

          {/* Two-column story */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-start">
            <div className="space-y-6 text-body text-text-secondary">
              <p>
                Whether it&apos;s a wedding day, a graduation, or a simple walk
                through the city, I care about how the moment actually{" "}
                <span className="text-text-primary">
                  feels while you&apos;re in it
                </span>
                —not just how it looks in the photo.
              </p>
              <p>
                My approach is calm, present, and observant. I&apos;ll guide
                when you need direction, then step back when the real, unscripted
                things start to happen: a glance, a laugh, a hand squeeze.
              </p>
              <p>
                Outside of client work, I spend a lot of time photographing
                night skies, quiet streets, and landscapes. That slower, more
                introspective work shapes how I see people too—grounded, honest,
                and unhurried.
              </p>
            </div>

            {/* Simple placeholder block for portrait / studio shot */}
            <div className="h-64 rounded-2xl bg-surfaceMuted md:h-80" />
          </div>

          {/* Values / approach */}
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-text-primary">
                Calm energy
              </h2>
              <p className="text-sm text-text-secondary">
                I aim to make sessions feel like a slow walk with a friend—not a
                performance. Most of the time, you&apos;re just being yourself.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-text-primary">
                Honest storytelling
              </h2>
              <p className="text-sm text-text-secondary">
                I&apos;m drawn to in-between moments: the breath before you
                speak, the way light hits your shoulder, the quiet after the
                big laugh.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-text-primary">
                Art + memory
              </h2>
              <p className="text-sm text-text-secondary">
                My work sits between personal keepsake and cinematic frame.
                It should feel like you—but also like a story you&apos;re proud
                to look back on.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
