import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout";
import { ArrowRight } from "lucide-react";
import portrait from "@/assets/artist-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Nivi — Nivi Arts" },
      { name: "description", content: "Meet Nivi — a working artist bringing personal, mobile art experiences to central New Jersey." },
      { property: "og:title", content: "About Nivi — Nivi Arts" },
      { property: "og:description", content: "The story behind Nivi Arts and the artist who leads every session." },
    ],
  }),
  component: About,
});

const values = [
  { t: "Personal", d: "Every guest leaves with a finished piece they're proud of — guided by a real artist, not a script." },
  { t: "Welcoming", d: "No prior art experience needed. Beginners are not just welcome; they're the point." },
  { t: "Local", d: "Built on relationships with central New Jersey venues, families, and repeat customers." },
];

function About() {
  return (
    <Layout>
      <section className="container-page pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-sm font-medium tracking-wider uppercase text-primary">About</p>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl text-balance">
              I'm Nivi — the artist behind every session.
            </h1>
            <div className="mt-6 space-y-5 text-lg text-muted-foreground">
              <p>
                Nivi Arts started in my home studio in West Windsor with one simple
                idea: creative experiences are better when they're personal. Not a
                franchise. Not a script. Just a real artist, real instruction, and a
                small group of people making something together.
              </p>
              <p>
                Today I bring guided art experiences to homes, offices, wineries, and
                community spaces across Mercer, Middlesex, and Somerset counties — from
                weekend workshops to corporate offsites and kids' birthday parties.
              </p>
              <p>
                I'm currently working toward being a registered artist with the West
                Windsor Arts Council, and growing a small weekend class program for
                neighbors who want a regular creative night.
              </p>
            </div>
            <Link to="/book" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
              Book a session with me <ArrowRight size={16}/>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-blush/60 to-sage/40 blur-2xl" />
            <img src={portrait} alt="Nivi in her art studio" className="rounded-2xl shadow-[var(--shadow-soft)] object-cover w-full h-[600px]" />
          </div>
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="container-page py-20 grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.t}>
              <h3 className="font-display text-3xl text-primary">{v.t}</h3>
              <p className="mt-3 text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page py-20 max-w-3xl">
        <p className="text-sm font-medium tracking-wider uppercase text-primary">Our story so far</p>
        <h2 className="mt-3 font-display text-4xl">Where Nivi Arts is headed.</h2>
        <ol className="mt-8 space-y-6 border-l border-border pl-6">
          {[
            ["2022", "Nivi Arts launches with private parties and venue paint nights across Princeton and Lawrenceville."],
            ["2024", "Expansion into corporate workshops and seasonal kids' programming."],
            ["2026", "New weekend class series launches; pursuing West Windsor Arts Council registration."],
            ["Next", "Recurring monthly venue partnerships, gift cards, and take-home paint kits."],
          ].map(([year, text]) => (
            <li key={year} className="relative">
              <span className="absolute -left-[34px] grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">•</span>
              <p className="font-display text-xl">{year}</p>
              <p className="mt-1 text-muted-foreground">{text}</p>
            </li>
          ))}
        </ol>
      </section>
    </Layout>
  );
}
