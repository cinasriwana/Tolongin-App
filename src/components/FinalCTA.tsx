import { motion } from "framer-motion";
import { ClipboardCheck, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          // WARNA TETAP SAMA: Gradien Hijau Hutan ke Hijau Gelap dengan teks warna putih
          className="relative overflow-hidden rounded-[2rem] lg:rounded-[2.5rem] bg-gradient-to-br from-[#1B6B3A] to-[#0D3D20] text-white shadow-xl max-w-5xl mx-auto"
        >
          {/* decorations */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-[#F5B800]/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-[#1B6B3A]/30 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.06] bg-grid" />
            <Sparkles className="absolute top-8 right-12 w-6 h-6 text-[#F5B800]/40" />
            <span className="absolute top-1/3 left-8 w-2 h-2 rounded-full bg-[#F5B800]/50 animate-float" />
            <span className="absolute bottom-10 right-1/4 w-2.5 h-2.5 rounded-full bg-white/20 animate-float-slow" />
          </div>

          <div className="relative px-6 py-12 sm:px-10 sm:py-14 text-center max-w-2xl mx-auto z-10">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-balance leading-tight">
              Siap Membantu dan Dibantu?
            </h2>
            <p className="mt-3 text-white/80 text-sm sm:text-base">
              Bantu kami memvalidasi ide ini agar sesuai dengan kebutuhan harianmu di kampus. Dapatkan benefit prioritas dan akses awal saat aplikasi resmi rilis!
            </p>

            {/* ====== TOMBOL BARU: Warna Latar Hijau Soft (#F2F7F4) & Teks Hijau Gelap ====== */}
            <div className="mt-7 flex justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScXitYQnE9FgFIxrXpYxEXPCNkC8MqXJXAmAFZq2nilOBDXfA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#F2F7F4] px-6 py-3.5 text-sm font-bold text-[#0D3D20] shadow-md hover:bg-white transition-colors duration-300"
              >
                <ClipboardCheck className="w-4.5 h-4.5 text-[#1B6B3A] stroke-[2.5]" />
                Isi Form Minat & Ambil Akses Awal
              </a>
            </div>

            <p className="mt-3.5 text-[11px] text-white/50">
              Estimasi waktu pengisian kurang dari 1 menit · Data riset dijamin aman
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}