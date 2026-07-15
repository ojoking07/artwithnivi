import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout";
import { Check, ArrowRight } from "lucide-react";
import paintNight from "@/assets/paint-night.jpg";
import corporate from "@/assets/corporate.jpg";
import hero from "@/assets/hero-paint-pour.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nivi Arts" },
      { name: "description", content: "Private parties, corporate workshops, and sip-and-paint wine nights at the Nivi Arts studio in central NJ. Artist-led, intimate experiences." },
      { property: "og:title", content: "Services — Nivi Arts" },
      { property: "og:description", content: "Private parties, corporate workshops, and sip-and-paint wine nights across central NJ." },
    ],
  }),
  component: Services,
});

const tiers = [
  { img: hero, name: "Private Parties", desc: "Birthdays, bridal showers, bachelorettes, and girls' nights — hosted in the Nivi Arts studio.", features: ["Private studio space", "Choose your project + colors", "Custom invite design (optional)", "Setup, cleanup & all supplies"] },
  { img: corporate, name: "Corporate Workshops", desc: "Team-building, DEI, and wellness sessions for teams of all sizes. Branded canvas option available.", features: ["Custom theme tied to your team", "Studio setup + cleanup", "Branded canvas / co-paint option", "Invoicing & W-9 available"] },
  { img: paintNight, name: "Sip and Paint (Wine)", desc: "Relaxed, guided painting nights paired with wine in the Nivi Arts studio.", features: ["Canvas, paints & supplies", "2 hours of guided instruction", "Reference imagery + custom theme", "Wine-friendly, easygoing vibe"] },
];

function Services() {
  return (
    <Layout>
      <section className="container-page pt-16 pb-12">
        <p className="text-sm font-medium tracking-wider uppercase text-primary">Services</p>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl text-balance max-w-3xl">
          One artist. Three ways to gather.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Whether it's a quiet party or a 30-person company workshop, every
          experience is led personally by Nivi in the West Windsor studio — no franchises, no scripts.
        </p>
      </section>

      <section className="container-page pb-20 space-y-6">
        {tiers.map((t, i) => (
          <article key={t.name} className="grid lg:grid-cols-5 gap-0 rounded-3xl border border-border bg-card overflow-hidden">
            <div className={`lg:col-span-2 ${i % 2 ? "lg:order-2" : ""}`}>
              <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover aspect-[4/3] lg:aspect-auto min-h-[280px]" />
            </div>
            <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col">
              <h2 className="font-display text-3xl sm:text-4xl">{t.name}</h2>
              <p className="mt-4 text-muted-foreground">{t.desc}</p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
                  Book this <ArrowRight size={14}/>
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition">
                  Ask a question
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
