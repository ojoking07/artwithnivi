import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wine, Users, Sparkles, Calendar, Heart, MapPin } from "lucide-react";
import { Layout } from "@/components/layout";
import hero from "@/assets/hero-paint-pour.jpg";
import paintNight from "@/assets/paint-night.jpg";
import dried from "@/assets/dried-flowers.jpg";
import macrame from "@/assets/macrame.jpg";
import pour from "@/assets/art-pour-1.jpg";
import canvas from "@/assets/art-canvas.jpg";
import corporate from "@/assets/corporate.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nivi Arts — Mobile Art Experiences in Central NJ" },
      { name: "description", content: "Artist-led sip-and-paint nights, private parties, corporate workshops, and weekend art classes in Princeton, West Windsor & beyond." },
      { property: "og:title", content: "Nivi Arts — Mobile Art Experiences" },
      { property: "og:description", content: "Real art experiences, led by a real artist — anywhere you want to gather." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-16 lg:pt-24 pb-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles size={14} className="text-primary" /> Now booking weekend workshops
            </span>
            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-balance">
              Real art, <em className="text-primary not-italic">made together.</em>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground text-balance">
              Mobile, artist-led experiences across central New Jersey — sip-and-paint
              nights, private parties, corporate workshops, and weekend classes you'll
              actually want to hang on the wall.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition">
                Book a class <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-muted transition">
                See what we offer
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["8–30", "Group size"],
                ["20 mi", "Mobile radius"],
                ["4.9", "Avg. rating"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-3xl text-primary">{k}</dt>
                  <dd className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-blush via-transparent to-sage/30 blur-2xl" />
            <img
              src={hero}
              alt="Artist creating a fluid paint pour in warm terracotta and sage tones"
              width={1600}
              height={1200}
              className="rounded-2xl shadow-[var(--shadow-soft)] object-cover w-full h-[520px] lg:h-[620px]"
            />
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-[var(--shadow-card)]">
              <Heart className="text-primary" size={20} />
              <div>
                <p className="text-sm font-medium">"The best night out we've had in months."</p>
                <p className="text-xs text-muted-foreground">— Dishant, Lawrence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes teaser */}
      <section className="container-page py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
            <img src={pour} alt="Acrylic paint pour" loading="lazy" className="rounded-xl aspect-[3/4] object-cover" />
            <img src={dried} alt="Dried flower art" loading="lazy" className="rounded-xl aspect-[3/4] object-cover mt-10" />
            <img src={macrame} alt="Macramé wall hanging" loading="lazy" className="rounded-xl aspect-[3/4] object-cover" />
            <img src={canvas} alt="Acrylic landscape" loading="lazy" className="rounded-xl aspect-[3/4] object-cover mt-10" />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium tracking-wider uppercase text-primary">Weekend classes</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl text-balance">
              Learn a new craft every Saturday & Sunday.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg max-w-lg">
              Small-group, beginner-friendly workshops in everything from paint pours to
              dried flower art, macramé, and acrylic landscapes. Everyone leaves with a
              finished piece.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
              {["Acrylic paint pours", "Dried flower art", "Macramé basics", "Canvas landscapes", "Mixed media", "Seasonal projects"].map((c) => (
                <li key={c} className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {c}
                </li>
              ))}
            </ul>
            <Link to="/classes" className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-muted transition">
              Explore all classes <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-card border-y border-border">
        <div className="container-page py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-medium tracking-wider uppercase text-primary">What we offer</p>
              <h2 className="mt-2 font-display text-4xl sm:text-5xl text-balance">
                Three ways to make something together.
              </h2>
            </div>
            <Link to="/services" className="text-sm font-medium text-primary inline-flex items-center gap-1 hover:gap-2 transition-all">
              View all services <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: hero, title: "Private Parties", icon: Users, desc: "Birthdays, showers, girls' nights — at home or your favorite venue." },
              { img: corporate, title: "Corporate Workshops", icon: Sparkles, desc: "Team-building, DEI, and wellness sessions tailored to your team." },
              { img: paintNight, title: "Sip and Paint (Wine)", icon: Wine, desc: "Relaxed painting nights with wine at your home or a venue." },
            ].map(({ img, title, icon: Icon, desc }) => (
              <article key={title} className="group rounded-2xl border border-border bg-background overflow-hidden hover:shadow-[var(--shadow-card)] transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={img} alt={title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-primary">
                    <Icon size={16} />
                    <span className="text-xs uppercase tracking-wider">Learn more</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-ink text-cream p-10 sm:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative max-w-2xl">
            <Calendar size={28} className="text-primary" />
            <h2 className="mt-4 font-display text-4xl sm:text-5xl text-balance">
              Find a date that works.
            </h2>
            <p className="mt-4 text-cream/80 text-lg">
              Pick a class or workshop straight from our live calendar — booking
              takes about a minute.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium hover:opacity-90 transition">
                Open the calendar <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm font-medium hover:bg-cream/10 transition">
                <MapPin size={16} /> Host us at your venue
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
