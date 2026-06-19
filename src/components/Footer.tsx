import { Instagram, Twitter, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

// MODIFIKASI: Array cols disederhanakan hanya untuk link navigasi fungsional
const cols = [
  {
    title: "Navigasi",
    links: [
      { label: "Beranda", href: "#beranda" },
      { label: "Fitur", href: "#fitur" },
      { label: "Cara Kerja", href: "#cara-kerja" },
      { label: "Tentang", href: "#tentang" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { label: "Pusat Bantuan", href: "#" },
      { label: "Panduan Penolong", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Syarat & Ketentuan", href: "#" },
    ],
  },
];

function StoreBadge({ store }: { store: "google" | "apple" }) {
  return (
    <a href="#" className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1.5 hover:bg-white/10 transition-colors">
      {store === "google" ? (
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
          <path fill="#EA4335" d="M3.6 2.3 13.3 12 3.6 21.7a1.5 1.5 0 0 1-.6-1.2V3.5a1.5 1.5 0 0 1 .6-1.2z" />
          <path fill="#4285F4" d="M13.3 12 16.5 8.8l4.6 2.6a1 1 0 0 1 0 1.8l-4.6 2.6z" />
          <path fill="#34A853" d="M3.6 21.7c.2.2.5.3.8.3.3 0 .6-.1.8-.3L16.5 15.2 13.3 12 3.6 21.7z" />
          <path fill="#FBBC05" d="M3.6 2.3c.2-.2.5-.3.8-.3.3 0 .6.1.8.3L16.5 8.8 13.3 12 3.6 2.3z" />
        </svg>
      ) : (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#fff" aria-hidden>
          <path d="M16.4 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.7 1.1 8.9.8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1 2.8-2.1c.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.3-.9-2.4-3.4zM14.2 5.6c.6-.8 1-1.9.9-3-.8 0-1.8.5-2.4 1.3-.6.7-1 1.7-.9 2.7.9.1 1.8-.4 2.4-1z" />
        </svg>
      )}
      <span className="text-left leading-none">
        <span className="block text-[7px] text-white/40">{store === "google" ? "GET IT ON" : "Download on the"}</span>
        <span className="block text-[10px] font-semibold text-white mt-0.5">{store === "google" ? "Google Play" : "App Store"}</span>
      </span>
    </a>
  );
}

export function Footer() {
  return (
    // MODIFIKASI: Memotong padding vertikal dari pt-16 pb-8 menjadi pt-10 pb-6
    <footer className="relative bg-[#05190E] text-white pt-10 pb-6 overflow-hidden border-t border-white/5">
      <div className="pointer-events-none absolute inset-0 opacity-[0.02] bg-grid" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Mengubah layout grid kolom menjadi perbandingan 5:4:3 yang padat */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12 items-start">
          
          {/* KOLOM BRAND & SOSMED */}
          <div className="lg:col-span-5 flex flex-col space-y-3.5">
            <div className="scale-90 origin-left">
              <Logo variant="light" />
            </div>
            <p className="text-xs text-white/50 leading-relaxed max-w-sm">
              Platform digital terpercaya yang menghubungkan antar mahasiswa untuk saling membantu kebutuhan harian dan membuka peluang penghasilan tambahan yang fleksibel.
            </p>
            {/* Minimalist Rounded Icon Row */}
            <div className="flex items-center gap-1.5 pt-1">
              {[Instagram, Twitter, Facebook, Linkedin].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center w-7 h-7 rounded-lg bg-white/5 hover:bg-[#F5B800] hover:text-[#0D3D20] transition-colors text-white/60"
                  aria-label="social"
                >
                  <I className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* KOLOM TAUTAN (NAVIGASI & BANTUAN) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display font-bold text-xs text-white tracking-wider uppercase opacity-80">{c.title}</h4>
                {/* Jarak link dipadatkan menggunakan space-y-2 */}
                <ul className="mt-2.5 space-y-2">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="text-xs text-white/40 hover:text-[#F5B800] transition-colors block">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* KOLOM KONTAK & UNDUHAN UTAMA */}
          <div className="lg:col-span-3 flex flex-col space-y-3">
            <h4 className="font-display font-bold text-xs text-white tracking-wider uppercase opacity-80">Hubungi Kami</h4>
            <div className="space-y-2 text-xs text-white/50">
              <a href="mailto: nexovia@tolongin.id" className="flex items-center gap-2 hover:text-[#F5B800] transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#1B6B3A]" />
                nexovia@tolongin.id
              </a>
              <a href="tel:+622112345678" className="flex items-center gap-2 hover:text-[#F5B800] transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#1B6B3A]" />
                (021) 1234-5678
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#1B6B3A]" />
                Jakarta Barat, Indonesia
              </div>
            </div>

            {/* Download Badge yang Dibuat Lebih Kecil & Menyatu */}
            <div className="pt-2">
              <div className="flex items-center gap-1.5">
                <StoreBadge store="google" />
                <StoreBadge store="apple" />
              </div>
            </div>
          </div>

        </div>

        {/* GARIS BAWAH HAK CIPTA — Padding dikurangi untuk mematangkan visual */}
        <div className="mt-10 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/30">
          <p>© 2026 Tolongin. Semua hak cipta dilindungi.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white/60 transition-colors">Syarat & Ketentuan</a>
            <span className="flex items-center gap-1">Dibuat di Indonesia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}