import { motion } from "framer-motion";
import { Crown, Check, Sparkles } from "lucide-react";

const features = [
  "Quest diprioritaskan di urutan teratas",
  "Voucher eksklusif tiap bulan",
  "Bebas waiting list, langsung match",
  "Badge premium di profil",
  "Prioritas customer support 24/7",
];

export function PremiumMembership() {
  return (
    <section className="relative py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          // PERBAIKAN: Ditambahkan max-w-5xl mx-auto agar spanduk tidak kegedean di desktop.
          // Mengubah bg-brand-deep menjadi kode warna hex asli Tolongin #0D3D20.
          className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] bg-[#0D3D20] text-white shadow-xl max-w-5xl mx-auto"
        >
          {/* decorative */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-[#F5B800]/15 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-[#1B6B3A]/40 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.05] bg-grid" />
            <span className="absolute top-10 right-12 text-[#F5B800]/30">
              <Sparkles className="w-6 h-6" />
            </span>
            <span className="absolute bottom-12 left-10 text-[#F5B800]/20">
              <Crown className="w-8 h-8" />
            </span>
          </div>

          <div className="relative grid lg:grid-cols-2 gap-8 p-7 sm:p-10 lg:p-12 items-center">
            {/* left content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#F5B800]/15 px-3.5 py-1.5 text-xs font-bold text-[#F5B800] ring-1 ring-[#F5B800]/30">
                <Crown className="w-3.5 h-3.5" /> Premium
              </span>
              <h2 className="mt-4 font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-balance">
                <span className="text-white">Tolongin Premium</span>
              </h2>
              <p className="mt-2.5 text-white/70 text-sm sm:text-base max-w-md">
                Buka akses penuh, dapetin quest lebih cepat, dan nikmati keuntungan eksklusif untuk mahasiswa yang aktif.
              </p>

              <ul className="mt-5 space-y-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 grid place-items-center w-5 h-5 rounded-full bg-[#F5B800] shrink-0">
                      <Check className="w-3 h-3 text-[#0D3D20]" strokeWidth={3} />
                    </span>
                    <span className="text-xs sm:text-sm text-white/90">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* right pricing */}
            <div className="lg:pl-6 flex flex-col justify-center">
              <div className="rounded-3xl bg-white/[0.06] backdrop-blur ring-1 ring-white/15 p-6 sm:p-8 max-w-sm mx-auto lg:mx-0 w-full">
                <div className="flex items-end gap-2">
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-white">Rp29.000</span>
                  <span className="text-white/60 mb-1 text-xs">/bulan</span>
                </div>
                <p className="mt-1 text-xs text-white/60">atau hemat 28% dengan bayar tahunan</p>

                <div className="mt-4 rounded-2xl bg-[#F5B800]/10 ring-1 ring-[#F5B800]/30 p-4 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-[#F5B800] uppercase tracking-wide">Tahunan</p>
                    <p className="font-display font-extrabold text-xl text-white">Rp249.000<span className="text-xs font-medium text-white/60">/tahun</span></p>
                  </div>
                  <span className="rounded-full bg-[#F5B800] px-2.5 py-1 text-[10px] font-extrabold text-[#0D3D20]">Hemat 28%</span>
                </div>

                <a
                  href="#beranda"
                  className="mt-5 group flex items-center justify-center gap-2 rounded-full bg-[#F5B800] px-5 py-3 text-sm font-bold text-[#0D3D20] shadow-md hover:bg-[#e0a800] transition-colors"
                >
                  <Crown className="w-4 h-4" />
                  Coba Premium 7 Hari Gratis
                </a>
                <p className="mt-2.5 text-center text-[11px] text-white/50">Tanpa biaya tersembunyi · Bisa batalkan kapan saja</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}