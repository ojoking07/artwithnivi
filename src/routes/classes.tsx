import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/layout";
import { ArrowRight, Clock, Users } from "lucide-react";
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
      { name: "description", content: "Beginner-friendly Saturday & Sunday workshops: paint pours, dried flower art, macramé, acrylic landscapes and more in central NJ." },
      { property: "og:title", content: "Weekend Art Classes — Nivi Arts" },
      { property: "og:description", content: "Small-group weekend workshops in paint pours, macramé, dried flowers and more." },
    ],
  }),
  component: Classes,
});

const classes = [
  { img: pour, title: "Acrylic Paint Pours", level: "Beginner", duration: "2.5 hrs", size: "Up to 10", price: 65, desc: "Learn the dirty pour, swipe, and ring pour techniques. Walk away with a glossy, frame-ready 10x10 canvas." },
  { img: dried, title: "Dried Flower Art", level: "Beginner", duration: "2 hrs", size: "Up to 8", price: 55, desc: "Compose and mount botanicals into a delicate, archival piece using pressed petals and acrylic medium." },
  { img: macrame, title: "Macramé Wall Hanging", level: "Beginner", duration: "3 hrs", size: "Up to 8", price: 70, desc: "Master four core knots while making a small wall hanging on a natural wood dowel." },
  { img: canvas, title: "Acrylic Landscapes", level: "All levels", duration: "2.5 hrs", size: "Up to 10", price: 60, desc: "Guided step-by-step instruction to paint a sunset, mountain, or seascape on 11x14 canvas." },
  { img: hero, title: "Mixed Media Studio", level: "Intermediate", duration: "3 hrs", size: "Up to 8", price: 75, desc: "Combine acrylic, ink, collage and texture mediums for a layered, gallery-style piece." },
  { img: kids, title: "Kids' Art Club", level: "Ages 6–12", duration: "1.5 hrs", size: "Up to 10", price: 35, desc: "A rotating menu of crafts and paintings designed for young artists. Supplies and snack included." },
];

function Classes() {
  return (
    <Layout>
      <section className="container-page pt-16 pb-10">
        <p className="text-sm font-medium tracking-wider uppercase text-primary">Weekend workshops</p>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl text-balance max-w-3xl">
          A new project every Saturday and Sunday.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Small classes, real instruction, no experience needed. Everyone goes home
          with a finished piece they're proud of.
        </p>
      </section>

      <section className="container-page pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((c) => (
            <article key={c.title} className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-secondary px-3 py-1 text-muted-foreground">{c.level}</span>
                  <span className="font-display text-2xl text-primary">${c.price}</span>
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
    </Layout>
  );
}
