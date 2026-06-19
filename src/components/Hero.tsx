import { motion } from "framer-motion";
import { Star, Package, Users, Wallet, ShieldCheck, Zap, ArrowRight, Check } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";
import { DashboardScreen, QuestListScreen } from "./PhoneScreens";

const stats = [
  { icon: Star, value: "4.9/5", label: "Rating", color: "text-gold" },
  { icon: Package, value: "1.000+", label: "Quest Selesai", color: "text-brand" },
  { icon: Users, value: "500+", label: "Mahasiswa Aktif", color: "text-brand" },
  { icon: Wallet, value: "Setiap Hari", label: "Penghasilan Tambahan", color: "text-brand" },
];

const floatCards = [
  { icon: Star, text: "Rating 4.9/5", sub: "dari 1.200+ ulasan", color: "bg-gold", pos: "left-0 top-16", delay: 0 },
  { icon: ShieldCheck, text: "100% Terverifikasi", sub: "KTM & email kampus", color: "bg-brand", pos: "right-2 top-6", delay: 0.6 },
  { icon: Zap, text: "Respon < 5 menit", sub: "penolong terdekat", color: "bg-gold", pos: "left-2 bottom-40", delay: 1.2 },
  { icon: Package, text: "1.000+ Quest", sub: "selesai minggu ini", color: "bg-brand", pos: "right-0 bottom-28", delay: 1.8 },
];

function StoreBadge({ store }: { store: "google" | "apple" }) {
  return (
    <a
      href="#"
      className="flex items-center gap-2.5 rounded-xl bg-ink px-3.5 py-2 shadow-soft hover:shadow-float transition-shadow"
    >
      {store === "google" ? (
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
          <path fill="#EA4335" d="M3.6 2.3 13.3 12 3.6 21.7a1.5 1.5 0 0 1-.6-1.2V3.5a1.5 1.5 0 0 1 .6-1.2z" />
          <path fill="#4285F4" d="M13.3 12 16.5 8.8l4.6 2.6a1 1 0 0 1 0 1.8l-4.6 2.6z" />
          <path fill="#FBBC05" d="M3.6 21.7 13.3 12l3.2 3.2-9.9 5.7a1.5 1.5 0 0 1-1-.2z" transform="rotate(180 12 12) scale(1)" opacity="0" />
          <path fill="#34A853" d="M3.6 21.7c.2.2.5.3.8.3.3 0 .6-.1.8-.3L16.5 15.2 13.3 12 3.6 21.7z" />
          <path fill="#FBBC05" d="M3.6 2.3c.2-.2.5-.3.8-.3.3 0 .6.1.8.3L16.5 8.8 13.3 12 3.6 2.3z" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white" aria-hidden>
          <path d="M16.4 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8s-1.8-.8-3-.8c-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.7 1.1 8.9.8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7 2-1 2.8-2.1c.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.3-.9-2.4-3.4zM14.2 5.6c.6-.8 1-1.9.9-3-.8 0-1.8.5-2.4 1.3-.6.7-1 1.7-.9 2.7.9.1 1.8-.4 2.4-1z" />
        </svg>
      )}
      <span className="text-left leading-tight">
        <span className="block text-[9px] text-white/60">{store === "google" ? "GET IT ON" : "Download on the"}</span>
        <span className="block text-xs font-semibold text-white">{store === "google" ? "Google Play" : "App Store"}</span>
      </span>
    </a>
  );
}

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden pt-28 pb-16 lg:pt-32">
      {/* background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-24 w-[28rem] h-[28rem] rounded-full bg-brand-soft blur-3xl animate-blob" />
        <div className="absolute top-10 right-0 w-[26rem] h-[26rem] rounded-full bg-gold/10 blur-3xl animate-blob [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-brand/5 blur-3xl animate-blob [animation-delay:8s]" />
        <div className="absolute inset-0 bg-grid opacity-60 mask-fade-b" />
        {/* floating circles */}
        <span className="absolute top-32 left-[6%] w-3 h-3 rounded-full bg-gold/60 animate-float" />
        <span className="absolute top-1/2 left-[12%] w-2 h-2 rounded-full bg-brand/40 animate-float-slow" />
        <span className="absolute top-24 right-[8%] w-2.5 h-2.5 rounded-full bg-brand/30 animate-float-slow" />
        <span className="absolute bottom-24 right-[14%] w-3 h-3 rounded-full bg-gold/50 animate-float" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-3.5 py-1.5 text-xs font-semibold text-brand ring-1 ring-brand/15">
              <span className="flex -space-x-1.5">
                {["#1B6B3A", "#F4C430", "#1B6B3A"].map((c, i) => (
                  <span key={i} className="w-4 h-4 rounded-full ring-2 ring-white" style={{ background: c }} />
                ))}
              </span>
              Komunitas mahasiswa #1 di Indonesia
            </span>

            <h1 className="mt-5 font-display font-extrabold tracking-tight text-ink text-balance text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05]">
              Butuh Bantuan?<br />
              Ada <span className="relative inline-block">
                <span className="relative z-10 text-brand">Tolongin</span>
                <svg className="absolute -bottom-1.5 left-0 w-full" height="10" viewBox="0 0 180 10" fill="none" preserveAspectRatio="none">
                  <path d="M2 7 Q 90 1 178 6" stroke="#F4C430" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span>
              .
            </h1>

            <p className="mt-5 text-base sm:text-lg text-ink-soft leading-relaxed text-balance">
              Platform yang menghubungkan mahasiswa untuk saling membantu dalam berbagai kebutuhan sehari-hari dan mendapatkan penghasilan tambahan.
            </p>

            {/* BARIS TOMBOL UTAMA (ROW 1) */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="MASUKKAN_LINK_GOOGLE_FORM_DI_SINI"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-base font-bold text-white shadow-glow hover:bg-brand-dark transition-colors"
              >
                Daftar Akses Awal
                <span className="grid place-items-center w-6 h-6 rounded-full bg-gold text-brand-deep transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </a>
              <a
                href="#cara-kerja"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-6 py-3.5 text-base font-semibold text-ink hover:border-brand hover:text-brand transition-colors shadow-soft"
              >
                <span className="grid place-items-center w-6 h-6 rounded-full bg-brand-soft">▶</span>
                Lihat Cara Kerja
              </a>
            </div>

            {/* ====== REVISI: TOMBOL PROTOTYPE KUNING BERUKURAN KOMPAK (ROW 2) ====== */}
            <div className="mt-4">
              <a
                href="https://carry-poodle-35203022.figma.site"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-gold px-4.5 py-2.5 text-sm font-bold text-brand-deep shadow-sm hover:bg-gold-dark transition-all duration-300"
              >
                Lihat Interaktif Prototype
                <span className="grid place-items-center w-5 h-5 rounded-full bg-brand text-white transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            </div>

            {/* store badges */}
            <div className="mt-5 flex items-center gap-3">
              <StoreBadge store="google" />
              <StoreBadge store="apple" />
              <span className="hidden sm:flex items-center gap-1.5 text-xs text-ink-soft">
                <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                <span className="font-bold text-ink">4.9</span> di Play Store
              </span>
            </div>

            {/* statistics */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/70 backdrop-blur p-3 ring-1 ring-line shadow-soft">
                  <s.icon className={`w-5 h-5 ${s.color}`} />
                  <p className="mt-1.5 font-display font-extrabold text-ink leading-none">{s.value}</p>
                  <p className="text-[11px] text-ink-soft mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — phones + floating cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="relative h-[640px] hidden md:block"
          >
            {/* center glow */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-72 h-72 rounded-full bg-brand-soft blur-3xl opacity-70" />
            </div>

            {/* Phone 1 — dashboard */}
            <div className="absolute left-1/2 -translate-x-[78%] top-1/2 -translate-y-1/2 rotate-[-4deg]">
              <PhoneFrame label="Dashboard Pengguna">
                <DashboardScreen />
              </PhoneFrame>
            </div>

            {/* Phone 2 — quest list */}
            <div className="absolute left-1/2 translate-x-[8%] top-1/2 -translate-y-1/2 rotate-[5deg] z-10">
              <PhoneFrame label="Quest Tersedia">
                <QuestListScreen />
              </PhoneFrame>
            </div>

            {/* floating glass cards */}
            {floatCards.map((c) => (
              <motion.div
                key={c.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + c.delay * 0.2, duration: 0.5 }}
                className={`absolute ${c.pos} w-44 z-20`}
              >
                <div className="glass rounded-2xl shadow-float p-3 flex items-center gap-2.5 animate-float [animation-delay:${c.delay}s]">
                  <span className={`grid place-items-center w-9 h-9 rounded-xl ${c.color} shrink-0`}>
                    <c.icon className={`w-4 h-4 ${c.color === "bg-gold" ? "text-brand-deep" : "text-white"}`} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-ink leading-tight">{c.text}</p>
                    <p className="text-[10px] text-ink-soft truncate">{c.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* small check pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="absolute bottom-12 left-4 z-20"
            >
              <div className="glass rounded-full shadow-soft px-3 py-2 flex items-center gap-2 animate-float-slow">
                <span className="grid place-items-center w-5 h-5 rounded-full bg-brand text-white">
                  <Check className="w-3 h-3" />
                </span>
                <span className="text-[11px] font-semibold text-ink">Transaksi aman & terverifikasi</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}