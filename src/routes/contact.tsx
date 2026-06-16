import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/layout";
import { Mail, MapPin, Instagram, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nivi Arts" },
      { name: "description", content: "Get in touch with Nivi Arts for private parties, corporate workshops, or venue partnerships in central New Jersey." },
      { property: "og:title", content: "Contact — Nivi Arts" },
      { property: "og:description", content: "Reach out for private parties, corporate workshops, or venue partnerships." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Layout>
      <section className="container-page pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-medium tracking-wider uppercase text-primary">Contact</p>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl text-balance">
              Let's make something together.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Have a venue, a team, or a date in mind? Send a quick note and we'll
              reply within 12 hours.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary"><Mail size={18}/></span>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Email</p>
                  <a href="mailto:hello@niviarts.com" className="font-display text-xl hover:text-primary">hello@niviarts.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary"><MapPin size={18}/></span>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Service area</p>
                  <p className="font-display text-xl">Mercer, Middlesex & Somerset Counties</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary text-primary"><Instagram size={18}/></span>
                <div>
                  <p className="text-sm uppercase tracking-wider text-muted-foreground">Instagram</p>
                  <a href="https://instagram.com/niviarts" className="font-display text-xl hover:text-primary">@niviarts</a>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-8 space-y-5"
          >
            <h2 className="font-display text-2xl">Send a message</h2>
            <Field label="Your name" name="name" required />
            <Field label="Email" type="email" name="email" required />
            <Field label="Event type" name="event" placeholder="e.g. bridal shower, corporate offsite" />
            <Field label="Approx. date / group size" name="details" />
            <div>
              <label className="text-sm font-medium" htmlFor="msg">Message</label>
              <textarea id="msg" name="message" required rows={5} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring/40" />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition disabled:opacity-60"
            >
              {sent ? "Thanks — we'll be in touch!" : <>Send message <Send size={14}/></>}
            </button>
            <p className="text-xs text-muted-foreground text-center">
              We typically reply within 12 hours.
            </p>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring/40"
      />
    </div>
  );
}
