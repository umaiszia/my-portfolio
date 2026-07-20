import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-semibold tracking-tight text-text">
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-text transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block text-sm font-medium px-4 py-2 rounded-full border border-border hover:border-accent hover:text-accent transition-colors"
        >
          Let's talk
        </a>

        <button
          className="md:hidden text-text"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-bg border-b border-border px-6 pb-6 flex flex-col gap-4">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-text text-sm"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="text-accent text-sm font-medium">
            Let's talk →
          </a>
        </div>
      )}
    </header>
  );
}
