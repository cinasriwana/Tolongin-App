import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "../lib/cn";

const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Fitur", href: "#fitur" },
  { label: "Cara Kerja", href: "#cara-kerja" },
  { label: "Tentang", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className={cn(
        "mx-auto max-w-7xl px-4 sm:px-6 transition-all duration-300",
        scrolled ? "pt-2.5" : "pt-4",
      )}>
        <nav className={cn(
          "flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all duration-300",
          scrolled ? "glass shadow-soft" : "bg-white/60 backdrop-blur-md border border-white/50",
        )}>
          <Logo />

          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft hover:text-brand hover:bg-brand-soft/60 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href="#"
              className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-brand hover:text-brand transition-colors"
            >
              Masuk
            </a>
            <a
              href="#beranda"
              className="group rounded-full bg-gold px-4 py-2 text-sm font-bold text-brand-deep shadow-glow hover:bg-gold-dark transition-colors"
            >
              Mulai Sekarang
              <span className="ml-1 inline-block transition-transform group-hover:translate-x-0.5">→</span>
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-xl bg-white shadow-soft text-ink"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* mobile menu */}
        <div className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-[420px] mt-2.5 opacity-100" : "max-h-0 opacity-0",
        )}>
          <div className="glass rounded-2xl shadow-soft p-3 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-ink hover:bg-brand-soft"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-1.5 grid grid-cols-2 gap-2">
              <a href="#" className="rounded-xl border border-line px-4 py-2.5 text-center text-sm font-semibold text-ink">Masuk</a>
              <a href="#beranda" className="rounded-xl bg-gold px-4 py-2.5 text-center text-sm font-bold text-brand-deep">Mulai</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
