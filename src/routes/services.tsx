import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout";
import { Check, ArrowRight } from "lucide-react";
import paintNight from "@/assets/paint-night.jpg";
import corporate from "@/assets/corporate.jpg";
import kids from "@/assets/kids.jpg";
import hero from "@/assets/hero-paint-pour.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Nivi Arts" },
      { name: "description", content: "Public paint nights, private parties, corporate workshops, and kids' programming. Transparent pricing for groups of 8–30." },
      { property: "og:title", content: "Services & Pricing — Nivi Arts" },
      { property: "og:description", content: "Public, private, corporate and kids' art experiences across central NJ." },
    ],
  }),
  component: Services,
});

const tiers = [
  { img: paintNight, name: "Public Paint Nights", price: "$50", per: "/seat", min: "8 guest minimum", desc: "Open-to-the-public sessions held at our partner venues — wineries, restaurants, and community spaces.", features: ["Canvas, paints & supplies", "2 hours of guided instruction", "Reference imagery + custom theme", "Take-home finished piece"] },
  { img: hero, name: "Private Parties", price: "$65", per: "/seat", min: "10 guest minimum", desc: "Birthdays, bridal showers, bachelorettes, and girls' nights — hosted at your home or chosen venue.", features: ["Travel within 20 miles included", "Choose your project + colors", "Custom invite design (optional)", "Setup, cleanup & all supplies"] },
  { img: corporate, name: "Corporate Workshops", price: "$75+", per: "/seat", min: "12 guest minimum", desc: "Team-building, DEI, and wellness sessions for hybrid and in-office teams. Branded canvas option available.", features: ["Custom theme tied to your team", "Onsite delivery + cleanup", "Branded canvas / co-paint option", "Invoicing & W-9 available"] },
  { img: kids, name: "Kids & Camp", price: "$45", per: "/child / day", min: "6 kid minimum", desc: "Birthday parties, after-school clubs, and seasonal camps. Always age-appropriate and supervised.", features: ["Supplies + snack included", "Age-banded project menus", "Take-home craft", "Optional themed decor"] },
];

function Services() {
  return (
    <Layout>
      <section className="container-page pt-16 pb-12">
        <p className="text-sm font-medium tracking-wider uppercase text-primary">Services & pricing</p>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl text-balance max-w-3xl">
          One artist. Four ways to gather.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Whether it's a quiet weekend class or a 30-person company offsite, every
          experience is led personally by Nivi — no franchises, no scripts.
        </p>
      </section>

      <section className="container-page pb-20 space-y-6">
        {tiers.map((t, i) => (
          <article key={t.name} className="grid lg:grid-cols-5 gap-0 rounded-3xl border border-border bg-card overflow-hidden">
            <div className={`lg:col-span-2 ${i % 2 ? "lg:order-2" : ""}`}>
              <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover aspect-[4/3] lg:aspect-auto min-h-[280px]" />
            </div>
            <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="font-display text-3xl sm:text-4xl">{t.name}</h2>
                <div className="text-right">
                  <span className="font-display text-4xl text-primary">{t.price}</span>
                  <span className="text-sm text-muted-foreground">{t.per}</span>
                  <p className="text-xs text-muted-foreground mt-1">{t.min}</p>
                </div>
              </div>
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
                <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
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
