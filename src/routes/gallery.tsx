import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/layout";
import hero from "@/assets/hero-paint-pour.jpg";
import paintNight from "@/assets/paint-night.jpg";
import dried from "@/assets/dried-flowers.jpg";
import macrame from "@/assets/macrame.jpg";
import pour from "@/assets/art-pour-1.jpg";
import canvas from "@/assets/art-canvas.jpg";
import corporate from "@/assets/corporate.jpg";
import kids from "@/assets/kids.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Nivi Arts" },
      { name: "description", content: "A look at recent paintings, workshops, parties, and finished pieces from Nivi Arts." },
      { property: "og:title", content: "Gallery — Nivi Arts" },
      { property: "og:description", content: "Recent work and event photography from Nivi Arts." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: pour, alt: "Teal and gold paint pour", span: "row-span-2" },
  { src: paintNight, alt: "Friends at a paint night" },
  { src: canvas, alt: "Sunset landscape painting" },
  { src: dried, alt: "Dried flower composition", span: "row-span-2" },
  { src: macrame, alt: "Macramé wall hanging" },
  { src: hero, alt: "Paint pour in progress" },
  { src: corporate, alt: "Corporate workshop" },
  { src: kids, alt: "Kids' art party" },
];

function Gallery() {
  return (
    <Layout>
      <section className="container-page pt-16 pb-10">
        <p className="text-sm font-medium tracking-wider uppercase text-primary">Gallery</p>
        <h1 className="mt-3 font-display text-5xl sm:text-6xl text-balance max-w-3xl">
          The work, and the people who made it.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          A growing collection of finished pieces, candid moments from workshops, and
          original artwork from Nivi's studio.
        </p>
      </section>

      <section className="container-page pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((img, i) => (
            <div key={i} className={`overflow-hidden rounded-xl bg-muted ${img.span ?? ""}`}>
              <img src={img.src} alt={img.alt} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
