"use client";

import { useState } from "react";
import { PageShell } from "../components/layout/page-shell";
import { Container } from "../components/ui/container";

type InquiryType =
  | "weddings"
  | "portraits"
  | "brand"
  | "other";

type CalendarPickerProps = {
  label: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  weekendOnly?: boolean;
};

function CalendarPicker({ label, value, onChange, weekendOnly }: CalendarPickerProps) {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(() => {
    const start = new Date();
    start.setDate(1);
    return start;
  });

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth(); // 0-11
  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const monthLabel = currentMonth.toLocaleString("en-CA", {
    month: "long",
    year: "numeric",
  });

  const isSameDate = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const goToPrevMonth = () => {
    const next = new Date(currentMonth);
    next.setMonth(next.getMonth() - 1);
    setCurrentMonth(next);
  };

  const goToNextMonth = () => {
    const next = new Date(currentMonth);
    next.setMonth(next.getMonth() + 1);
    setCurrentMonth(next);
  };

  const handleSelectDay = (day: number) => {
    const picked = new Date(year, month, day);

    if (weekendOnly) {
      const dow = picked.getDay(); // 0=Sun, 6=Sat
      if (dow !== 0 && dow !== 6) return;
    }

    onChange(picked);
  };

  const days: (number | null)[] = [
    ...Array.from({ length: firstDayOfWeek }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  return (
    <div className="space-y-2">
      <label className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
        {label}
      </label>

      <div className="rounded-2xl border border-gray-100 bg-surface px-4 py-3 shadow-subtle/20">
        {/* Header: month switcher */}
        <div className="mb-3 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={goToPrevMonth}
            className="rounded-full px-2 py-1 text-xs text-text-secondary hover:bg-surfaceMuted"
          >
            ←
          </button>
          <p className="text-xs font-medium tracking-[0.16em] uppercase text-text-primary">
            {monthLabel}
          </p>
          <button
            type="button"
            onClick={goToNextMonth}
            className="rounded-full px-2 py-1 text-xs text-text-secondary hover:bg-surfaceMuted"
          >
            →
          </button>
        </div>

        {/* Weekday labels */}
        <div className="mb-1 grid grid-cols-7 gap-1 text-center text-[10px] text-text-secondary/80 uppercase tracking-[0.16em]">
          <span>Sun</span>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
        </div>

        {/* Days grid */}
        <div className="grid grid-cols-7 gap-1 text-xs">
          {days.map((day, index) => {
            if (day === null) {
              return <div key={index} className="h-8" />;
            }

            const thisDate = new Date(year, month, day);
            const isWeekend = [0, 6].includes(thisDate.getDay());
            const isSelected = value && isSameDate(thisDate, value);
            const isPast =
              thisDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
            const isDisabled = isPast || (weekendOnly && !isWeekend);

            return (
              <button
                key={index}
                type="button"
                onClick={() => handleSelectDay(day)}
                disabled={isDisabled}
                className={[
                  "h-8 w-8 rounded-full flex items-center justify-center transition-colors",
                  isSelected
                    ? "bg-accent text-white"
                    : isDisabled
                    ? "text-text-secondary/30 cursor-not-allowed"
                    : isWeekend && weekendOnly
                    ? "text-accent hover:bg-surfaceMuted"
                    : "text-text-primary hover:bg-surfaceMuted",
                ].join(" ")}
              >
                {day}
              </button>
            );
          })}
        </div>

        {weekendOnly && (
          <p className="mt-3 text-[11px] text-text-secondary">
            Weekend bookings only for weddings and portraits (Saturday or Sunday).
          </p>
        )}

        {value && (
          <p className="mt-1 text-[11px] text-text-secondary">
            Selected:{" "}
            {value.toLocaleDateString("en-CA", {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("weddings");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [timingText, setTimingText] = useState("");

  const isWeekendOnly =
    inquiryType === "weddings" || inquiryType === "portraits";

  const handleInquiryChange = (value: string) => {
    const casted = value as InquiryType;
    setInquiryType(casted);

    // Reset depending on type
    if (casted === "weddings" || casted === "portraits") {
      setTimingText("");
    } else {
      setSelectedDate(null);
    }
  };

  return (
    <PageShell>
      <section className="pt-10 md:pt-16 pb-16">
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

          {/* Form (mockup) */}
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
              <div className="space-y-2">
                <label className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                  What are you inquiring about?
                </label>
                <select
                  className="w-full rounded-xl border border-gray-100 bg-surface px-3 py-2 text-sm outline-none focus:border-gray-300 focus:ring-0"
                  value={inquiryType}
                  onChange={(e) => handleInquiryChange(e.target.value)}
                >
                  <option value="weddings">Weddings &amp; Engagements</option>
                  <option value="portraits">Portraits &amp; Graduation</option>
                  <option value="brand">Brand / Personal project</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Conditional timing field */}
              {isWeekendOnly ? (
                <CalendarPicker
                  label="Ideal date"
                  value={selectedDate}
                  onChange={setSelectedDate}
                  weekendOnly
                />
              ) : (
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                    Ideal timing
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl border border-gray-100 bg-surface px-3 py-2 text-sm outline-none focus:border-gray-300 focus:ring-0"
                    placeholder="Exact date, month, or general timeframe"
                    value={timingText}
                    onChange={(e) => setTimingText(e.target.value)}
                  />
                  <p className="text-[11px] text-text-secondary">
                    For brand / personal projects, rough timing is totally okay
                    (season, month, or after a specific event).
                  </p>
                </div>
              )}
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
