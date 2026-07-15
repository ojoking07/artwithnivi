import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout";
import { ArrowRight, Clock, Users, Calendar, LayoutGrid, MapPin } from "lucide-react";
import { useState } from "react";
import pour from "@/assets/art-pour-1.jpg";
import dried from "@/assets/dried-flowers.jpg";
import macrame from "@/assets/macrame.jpg";
import canvas from "@/assets/art-canvas.jpg";
import hero from "@/assets/hero-paint-pour.jpg";
import kids from "@/assets/kids.jpg";

export const Route = createFileRoute("/classes")({
  head: () => ({
    meta: [
      { title: "Weekend Art Classes — Nivi Arts" },
      { name: "description", content: "Browse weekend art classes by type or by month. Beginner-friendly Saturday & Sunday workshops in central NJ." },
      { property: "og:title", content: "Weekend Art Classes — Nivi Arts" },
      { property: "og:description", content: "Small-group weekend workshops in paint pours, macramé, dried flowers and more." },
    ],
  }),
  component: Classes,
});

const classes = [
  { img: pour, title: "Acrylic Paint Pours", level: "Beginner", duration: "2.5 hrs", size: "Up to 10", desc: "Learn the dirty pour, swipe, and ring pour techniques. Walk away with a glossy, frame-ready 10x10 canvas." },
  { img: dried, title: "Dried Flower Art", level: "Beginner", duration: "2 hrs", size: "Up to 8", desc: "Compose and mount botanicals into a delicate, archival piece using pressed petals and acrylic medium." },
  { img: macrame, title: "Macramé Wall Hanging", level: "Beginner", duration: "3 hrs", size: "Up to 8", desc: "Master four core knots while making a small wall hanging on a natural wood dowel." },
  { img: canvas, title: "Acrylic Landscapes", level: "All levels", duration: "2.5 hrs", size: "Up to 10", desc: "Guided step-by-step instruction to paint a sunset, mountain, or seascape on 11x14 canvas." },
  { img: hero, title: "Mixed Media Studio", level: "Intermediate", duration: "3 hrs", size: "Up to 8", desc: "Combine acrylic, ink, collage and texture mediums for a layered, gallery-style piece." },
  { img: kids, title: "Seasonal Projects", level: "All ages", duration: "1.5 hrs", size: "Up to 10", desc: "Create a festive, season-inspired piece using natural materials and themed colors. Each month brings a new project — wreaths, garlands, ornaments, or table decor — to celebrate the time of year." },
];

type Event = {
  day: string;
  weekday: string;
  time: string;
  title: string;
  level: string;
  img: string;
  location: string;
};

const months: { name: string; year: number; events: Event[] }[] = [
  {
    name: "July",
    year: 2026,
    events: [
      { day: "18", weekday: "Sat", time: "1:00 – 3:30 PM", title: "Acrylic Paint Pours", level: "Beginner", img: pour, location: "West Windsor Studio" },
      { day: "19", weekday: "Sun", time: "11:00 AM – 12:30 PM", title: "Seasonal Projects", level: "All ages", img: kids, location: "West Windsor Studio" },
      { day: "25", weekday: "Sat", time: "2:00 – 4:30 PM", title: "Acrylic Landscapes", level: "All levels", img: canvas, location: "West Windsor Studio" },
      { day: "26", weekday: "Sun", time: "1:00 – 3:00 PM", title: "Dried Flower Art", level: "Beginner", img: dried, location: "West Windsor Studio" },
    ],
  },
  {
    name: "August",
    year: 2026,
    events: [
      { day: "1", weekday: "Sat", time: "1:00 – 4:00 PM", title: "Macramé Wall Hanging", level: "Beginner", img: macrame, location: "West Windsor Studio" },
      { day: "2", weekday: "Sun", time: "2:00 – 4:30 PM", title: "Acrylic Paint Pours", level: "Beginner", img: pour, location: "West Windsor Studio" },
      { day: "8", weekday: "Sat", time: "1:00 – 4:00 PM", title: "Mixed Media Studio", level: "Intermediate", img: hero, location: "West Windsor Studio" },
      { day: "9", weekday: "Sun", time: "11:00 AM – 12:30 PM", title: "Seasonal Projects", level: "All ages", img: kids, location: "West Windsor Studio" },
      { day: "15", weekday: "Sat", time: "2:00 – 4:30 PM", title: "Acrylic Landscapes", level: "All levels", img: canvas, location: "West Windsor Studio" },
      { day: "16", weekday: "Sun", time: "1:00 – 3:00 PM", title: "Dried Flower Art", level: "Beginner", img: dried, location: "West Windsor Studio" },
      { day: "22", weekday: "Sat", time: "1:00 – 3:30 PM", title: "Acrylic Paint Pours", level: "Beginner", img: pour, location: "West Windsor Studio" },
      { day: "23", weekday: "Sun", time: "1:00 – 4:00 PM", title: "Macramé Wall Hanging", level: "Beginner", img: macrame, location: "West Windsor Studio" },
    ],
  },
  {
    name: "September",
    year: 2026,
    events: [
      { day: "5", weekday: "Sat", time: "2:00 – 4:30 PM", title: "Acrylic Landscapes", level: "All levels", img: canvas, location: "West Windsor Studio" },
      { day: "6", weekday: "Sun", time: "1:00 – 3:00 PM", title: "Dried Flower Art", level: "Beginner", img: dried, location: "West Windsor Studio" },
      { day: "12", weekday: "Sat", time: "1:00 – 4:00 PM", title: "Mixed Media Studio", level: "Intermediate", img: hero, location: "West Windsor Studio" },
      { day: "13", weekday: "Sun", time: "11:00 AM – 12:30 PM", title: "Seasonal Projects", level: "All ages", img: kids, location: "West Windsor Studio" },
      { day: "19", weekday: "Sat", time: "1:00 – 3:30 PM", title: "Acrylic Paint Pours", level: "Beginner", img: pour, location: "West Windsor Studio" },
      { day: "20", weekday: "Sun", time: "1:00 – 4:00 PM", title: "Macramé Wall Hanging", level: "Beginner", img: macrame, location: "West Windsor Studio" },
    ],
  },
];

function Classes() {
  const [view, setView] = useState<"types" | "calendar">("types");

  return (
    <Layout>
      <section className="container-page pt-16 pb-8">
        <p className="text-sm font-medium tracking-wider uppercase text-primary">Weekend workshops</p>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl text-balance max-w-3xl">
          A new project every Saturday and Sunday.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Browse by class type to see everything we teach, or scroll month-by-month
          to find the exact date that works for you.
        </p>

        {/* View toggle */}
        <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
          <button
            type="button"
            onClick={() => setView("types")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
              view === "types" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <LayoutGrid size={15} /> Class Types
          </button>
          <button
            type="button"
            onClick={() => setView("calendar")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
              view === "calendar" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Calendar size={15} /> Monthly Calendar
          </button>
        </div>
      </section>

      {view === "types" ? (
        <section className="container-page pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classes.map((c) => (
              <article key={c.title} className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center text-xs">
                    <span className="rounded-full bg-secondary px-3 py-1 text-muted-foreground">{c.level}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{c.desc}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
                    <span className="inline-flex items-center gap-1"><Clock size={13}/> {c.duration}</span>
                    <span className="inline-flex items-center gap-1"><Users size={13}/> {c.size}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-secondary p-10 sm:p-14 text-center">
            <h2 className="font-display text-3xl sm:text-4xl text-balance">Ready to pick a date?</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              All weekend classes are bookable through our live calendar — choose your
              project, day, and time in one place.
            </p>
            <Link to="/book" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
              Open booking calendar <ArrowRight size={16}/>
            </Link>
          </div>
        </section>
      ) : (
        <section className="container-page pb-20">
          <div className="space-y-16">
            {months.map((m) => (
              <div key={`${m.name}-${m.year}`}>
                <div className="flex items-end justify-between border-b border-border pb-4 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{m.year}</p>
                    <h2 className="font-display text-4xl sm:text-5xl mt-1">{m.name}</h2>
                  </div>
                  <Link
                    to="/book"
                    className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    Book on calendar <ArrowRight size={14} />
                  </Link>
                </div>

                <ul className="divide-y divide-border rounded-2xl border border-border bg-card overflow-hidden">
                  {m.events.map((e, i) => (
                    <li key={i}>
                      <Link
                        to="/book"
                        className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 hover:bg-muted/60 transition group"
                      >
                        <div className="flex flex-col items-center justify-center shrink-0 w-14 sm:w-16 rounded-xl bg-secondary py-2">
                          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">{e.weekday}</span>
                          <span className="font-display text-2xl sm:text-3xl leading-none mt-0.5">{e.day}</span>
                        </div>

                        <div className="hidden sm:block h-16 w-20 shrink-0 overflow-hidden rounded-lg">
                          <img src={e.img} alt="" className="h-full w-full object-cover" loading="lazy" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-display text-lg sm:text-xl truncate">{e.title}</h3>
                          <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1"><Clock size={12}/> {e.time}</span>
                            <span className="inline-flex items-center gap-1"><MapPin size={12}/> {e.location}</span>
                            <span className="rounded-full bg-secondary px-2 py-0.5">{e.level}</span>
                          </div>
                        </div>

                        <span className="shrink-0 inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground group-hover:opacity-90 transition">
                          Book <ArrowRight size={12} />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-secondary p-8 sm:p-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl text-balance">See every open date</h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              The full live calendar has real-time availability and instant confirmation.
            </p>
            <Link to="/book" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
              Open booking calendar <ArrowRight size={16}/>
            </Link>
          </div>
        </section>
      )}
    </Layout>
  );
}
