import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout";
import { Calendar, Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Class — Nivi Arts" },
      { name: "description", content: "Pick a weekend workshop or private session straight from the Nivi Arts live booking calendar." },
      { property: "og:title", content: "Book a Class — Nivi Arts" },
      { property: "og:description", content: "Live Google Calendar booking for weekend art classes and private sessions." },
    ],
  }),
  component: Book,
});

// TODO: Replace with the Google Calendar Appointment Schedule URL
// from the business Gmail account (e.g. nivi.arts@gmail.com).
// In Google Calendar → Create → Appointment schedule → Share → "Open booking page".
// Use the embed link that ends with "/appointments/schedules/..."
const GOOGLE_CALENDAR_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0_PLACEHOLDER?gv=true";

function Book() {
  return (
    <Layout>
      <section className="container-page pt-16 pb-10">
        <p className="text-sm font-medium tracking-wider uppercase text-primary">Booking</p>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl text-balance max-w-3xl">
          Pick a day. Pick a time. We'll handle the rest.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          All weekend classes are bookable through our live calendar. For private
          parties or corporate workshops, use the request form below and we'll get
          back to you within 12 hours.
        </p>
      </section>

      <section className="container-page pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl">What to expect</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {([
                  ["Instant confirmation", Calendar],
                  ["Class is 2–3 hours", Clock],
                  ["West Windsor studio or your venue", MapPin],
                  ["All supplies included", CheckCircle2],
                ] as const).map(([t, Icon]) => (
                  <li key={t} className="flex items-start gap-3 text-muted-foreground">
                    <Icon size={16} className="text-primary mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-secondary p-6">
              <h3 className="font-display text-xl">Need something custom?</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Private parties of 10+ or corporate workshops — request a date and
                we'll build the session around your group.
              </p>
              <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
                Request a private booking <ArrowRight size={14}/>
              </Link>
            </div>
          </aside>

          <div className="lg:col-span-2 rounded-2xl border border-border bg-card overflow-hidden">
            <div className="px-6 py-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-primary" />
                <h2 className="font-display text-xl">Live Booking Calendar</h2>
              </div>
              <span className="text-xs text-muted-foreground hidden sm:inline">Powered by Google Calendar</span>
            </div>
            <iframe
              src={GOOGLE_CALENDAR_EMBED_URL}
              title="Nivi Arts booking calendar"
              className="w-full h-[780px] bg-background"
              style={{ border: 0 }}
              loading="lazy"
            />
            <div className="px-6 py-4 border-t border-border text-xs text-muted-foreground">
              Trouble loading?{" "}
              <a href={GOOGLE_CALENDAR_EMBED_URL} target="_blank" rel="noreferrer" className="text-primary underline">
                Open the booking page in a new tab
              </a>
              .
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
