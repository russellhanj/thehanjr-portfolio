"use client";

import { useState } from "react";
import { PageShell } from "../components/layout/page-shell";
import { Container } from "../components/ui/container";

type InquiryType =
  | "Weddings & Engagements"
  | "Portraits & Graduation"
  | "Brand / Personal project"
  | "Other";

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("Weddings & Engagements");
  const [idealDate, setIdealDate] = useState("");
  const [dateError, setDateError] = useState<string | null>(null);
  const [idealTimingText, setIdealTimingText] = useState("");

  const isDateBased =
    inquiryType === "Weddings & Engagements" ||
    inquiryType === "Portraits & Graduation";

  function handleInquiryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value as InquiryType;
    setInquiryType(value);

    // Reset date / timing fields when changing type
    setIdealDate("");
    setDateError(null);
    setIdealTimingText("");
  }

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setIdealDate(value);
    setDateError(null);

    if (!value) return;

    const selected = new Date(value + "T00:00:00"); // avoid timezone weirdness
    const day = selected.getUTCDay(); // 0 = Sunday, 6 = Saturday

    if (day !== 0 && day !== 6) {
      setDateError("For this session type, only Saturdays and Sundays are available.");
    }
  }

  return (
    <PageShell>
      <section className="pt-10 md:pt-16">
        <Container className="space-y-10 max-w-3xl">
          {/* Intro */}
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-text-secondary">
              Book a session
            </p>
            <h1 className="font-heading text-display-md leading-tight">
              Tell me what you&apos;re dreaming of.
            </h1>
            <p className="text-body text-text-secondary max-w-xl">
              Share a bit about your plans—whether it&apos;s a wedding,
              engagement, graduation, portraits, or something more personal.
              I&apos;ll get back to you with next steps, timing, and a direction
              that fits what you&apos;re looking for.
            </p>
          </div>

          {/* Session types */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2 rounded-2xl bg-surface px-4 py-4 shadow-subtle/30">
              <h2 className="text-sm font-semibold text-text-primary">
                Weddings &amp; Engagements
              </h2>
              <p className="text-xs text-text-secondary">
                For days that matter deeply: quiet, cinematic coverage focused
                on feeling rather than posing.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl bg-surface px-4 py-4 shadow-subtle/30">
              <h2 className="text-sm font-semibold text-text-primary">
                Portraits &amp; Graduation
              </h2>
              <p className="text-xs text-text-secondary">
                Solo, friends, or family sessions with room to breathe, walk,
                and be yourself in front of the camera.
              </p>
            </div>
            <div className="space-y-2 rounded-2xl bg-surface px-4 py-4 shadow-subtle/30">
              <h2 className="text-sm font-semibold text-text-primary">
                Travel &amp; Personal
              </h2>
              <p className="text-xs text-text-secondary">
                For something less traditional—creative sessions, brand stories,
                or images that sit closer to art.
              </p>
            </div>
          </div>

          {/* Form (non-functional mockup for now) */}
          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-100 bg-surface px-3 py-2 text-sm outline-none focus:border-gray-300 focus:ring-0"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl border border-gray-100 bg-surface px-3 py-2 text-sm outline-none focus:border-gray-300 focus:ring-0"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {/* Inquiry type */}
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                  What are you inquiring about?
                </label>
                <select
                  className="w-full rounded-xl border border-gray-100 bg-surface px-3 py-2 text-sm outline-none focus:border-gray-300 focus:ring-0"
                  value={inquiryType}
                  onChange={handleInquiryChange}
                >
                  <option>Weddings &amp; Engagements</option>
                  <option>Portraits &amp; Graduation</option>
                  <option>Brand / Personal project</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Ideal date / timing */}
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                  Ideal date / timing
                </label>

                {isDateBased ? (
                  <>
                    <input
                      type="date"
                      className={`w-full rounded-xl border bg-surface px-3 py-2 text-sm outline-none focus:ring-0 ${
                        dateError
                          ? "border-red-400 focus:border-red-400"
                          : "border-gray-100 focus:border-gray-300"
                      }`}
                      value={idealDate}
                      onChange={handleDateChange}
                    />
                    <p className="text-[11px] text-text-secondary">
                      For weddings, engagements, portraits, and graduations,
                      sessions are available on <span className="font-medium">Saturdays and Sundays only</span>.
                    </p>
                    {dateError && (
                      <p className="text-[11px] text-red-500">{dateError}</p>
                    )}
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      className="w-full rounded-xl border border-gray-100 bg-surface px-3 py-2 text-sm outline-none focus:border-gray-300 focus:ring-0"
                      placeholder="Share rough dates, months, or preferred days"
                      value={idealTimingText}
                      onChange={(e) => setIdealTimingText(e.target.value)}
                    />
                    <p className="text-[11px] text-text-secondary">
                      Feel free to mention a month, weekday preferences, or
                      general availability.
                    </p>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                Share a bit about your plans
              </label>
              <textarea
                rows={5}
                className="w-full rounded-xl border border-gray-100 bg-surface px-3 py-2 text-sm outline-none focus:border-gray-300 focus:ring-0"
                placeholder="Tell me about the day, the people, and the feeling you want your photos to hold."
              />
            </div>

            <div className="space-y-2">
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white shadow-subtle hover:bg-accent-dark transition-colors"
              >
                Send inquiry
              </button>
              <p className="text-xs text-text-secondary">
                I usually reply within 1–2 business days with next steps and a
                rough direction for your session.
              </p>
            </div>
          </form>
        </Container>
      </section>
    </PageShell>
  );
}
