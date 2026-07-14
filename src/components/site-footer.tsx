import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";
import logo from "@/assets/nivi-arts-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="container-page py-14 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <img src={logo.url} alt="Nivi Arts" className="h-12 w-auto" />
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Mobile, artist-led art experiences across Mercer, Middlesex, and Somerset
            counties. Real art, real instruction, anywhere you gather.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/classes" className="hover:text-foreground">Classes</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-foreground">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About Nivi</Link></li>
            <li><Link to="/book" className="hover:text-foreground">Book a class</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase">Connect</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><MapPin size={14}/> West Windsor, NJ</li>
            <li className="flex items-center gap-2"><Mail size={14}/> hello@niviarts.com</li>
            <li className="flex items-center gap-2"><Instagram size={14}/> @niviarts</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase">My Art Portfolio</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="https://niviarts.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">niviarts.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Nivi Arts. All rights reserved.</p>
          <p>Handcrafted in central New Jersey.</p>
        </div>
      </div>
    </footer>
  );
}
