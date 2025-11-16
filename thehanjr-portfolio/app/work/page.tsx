import Link from "next/link";
import { PageShell } from "../components/layout/page-shell";
import { Container } from "../components/ui/container";

type WorkCategoryGroup = "people" | "places";

type WorkCategory = {
  id: string;
  label: string;
  subtitle: string;
  description: string;
  href: string;
  group: WorkCategoryGroup;
};

const workCategories: WorkCategory[] = [
  {
    id: "weddings-engagements",
    label: "Weddings & Engagements",
    subtitle: "For people",
    description: "Quiet, cinematic coverage of the day as it actually felt.",
    href: "/work/weddings",
    group: "people",
  },
  {
    id: "portraits-graduation",
    label: "Portraits & Graduation",
    subtitle: "For people",
    description: "Simple, calm portraits for milestones and everyday moments.",
    href: "/work/portraits",
    group: "people",
  },
  {
    id: "travel-stories",
    label: "Travel Stories",
    subtitle: "For places",
    description: "Small scenes and details from trips that linger in memory.",
    href: "/work/travel",
    group: "places",
  },
  {
    id: "landscapes-night-skies",
    label: "Landscapes & Night Skies",
    subtitle: "For places",
    description: "Slow, quiet studies of light, weather, and the night sky.",
    href: "/work/landscapes",
    group: "places",
  },
];

export default function WorkPage() {
  const peopleCategories = workCategories.filter(
    (cat) => cat.group === "people"
  );
  const placeCategories = workCategories.filter(
    (cat) => cat.group === "places"
  );

  return (
    <PageShell>
      <section className="pt-8 md:pt-12">
        <Container className="space-y-10">
          {/* Intro */}
          <div className="space-y-4 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
              Work
            </p>
            <h1 className="font-heading text-display-md">
              For people and for places.
            </h1>
            <p className="text-body-lg text-text-secondary">
              I photograph quiet, cinematic moments — whether that is a wedding
              day, a graduation milestone, or a still frame from a trip. This
              page is a simple starting point to explore the different ways we
              can work together.
            </p>
          </div>

          {/* For people */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="font-heading text-display-sm">For people</h2>
              <p className="text-sm text-text-secondary max-w-xl">
                Sessions that centre you, your people, and the way the day
                actually feels — not just how it looks.
              </p>
            </div>

            {/* Mobile: horizontal scroll */}
            <div className="md:hidden -mx-4">
              <div className="flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory">
                {peopleCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={category.href}
                    className="min-w-[260px] snap-start rounded-2xl bg-surface shadow-subtle/40 px-5 py-4 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-text-secondary">
                        {category.subtitle}
                      </p>
                      <h3 className="text-sm font-semibold">
                        {category.label}
                      </h3>
                      <p className="text-xs text-text-secondary">
                        {category.description}
                      </p>
                    </div>
                    <span className="mt-3 text-xs font-medium text-accent underline-offset-4">
                      View work
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop: grid */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-6">
              {peopleCategories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="rounded-2xl bg-surface shadow-subtle/40 px-6 py-5 flex flex-col justify-between transition-transform hover:-translate-y-0.5"
                >
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-text-secondary">
                      {category.subtitle}
                    </p>
                    <h3 className="text-sm font-semibold">{category.label}</h3>
                    <p className="text-xs text-text-secondary">
                      {category.description}
                    </p>
                  </div>
                  <span className="mt-3 text-xs font-medium text-accent underline-offset-4">
                    View work
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* For places */}
          <div className="space-y-4">
            <div className="space-y-1">
              <h2 className="font-heading text-display-sm">For places</h2>
              <p className="text-sm text-text-secondary max-w-xl">
                Personal work that lives a little closer to my own curiosity —
                travel notes, landscapes, and night skies.
              </p>
            </div>

            {/* Mobile: horizontal scroll */}
            <div className="md:hidden -mx-4">
              <div className="flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory">
                {placeCategories.map((category) => (
                  <Link
                    key={category.id}
                    href={category.href}
                    className="min-w-[260px] snap-start rounded-2xl bg-surface shadow-subtle/40 px-5 py-4 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-text-secondary">
                        {category.subtitle}
                      </p>
                      <h3 className="text-sm font-semibold">
                        {category.label}
                      </h3>
                      <p className="text-xs text-text-secondary">
                        {category.description}
                      </p>
                    </div>
                    <span className="mt-3 text-xs font-medium text-accent underline-offset-4">
                      View work
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop: grid */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-6">
              {placeCategories.map((category) => (
                <Link
                  key={category.id}
                  href={category.href}
                  className="rounded-2xl bg-surface shadow-subtle/40 px-6 py-5 flex flex-col justify-between transition-transform hover:-translate-y-0.5"
                >
                  <div className="space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-text-secondary">
                      {category.subtitle}
                    </p>
                    <h3 className="text-sm font-semibold">{category.label}</h3>
                    <p className="text-xs text-text-secondary">
                      {category.description}
                    </p>
                  </div>
                  <span className="mt-3 text-xs font-medium text-accent underline-offset-4">
                    View work
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
