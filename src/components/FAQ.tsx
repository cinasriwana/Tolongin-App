import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    q: "Apakah Tolongin gratis digunakan?",
    a: "Ya! Mengunduh aplikasi, membuat akun, serta membuat dan mengambil quest sepenuhnya gratis. Tolongin hanya mengambil biaya layanan kecil dari setiap transaksi yang berhasil untuk menjaga platform tetap berjalan. Ada juga opsi Premium untuk fitur eksklusif.",
  },
  {
    q: "Bagaimana cara menjadi Penolong?",
    a: "Cukup daftar dengan email kampus dan verifikasi Kartu Tanda Mahasiswa (KTM). Setelah terverifikasi, kamu bisa langsung melihat quest tersedia di sekitarmu, mengambil yang sesuai, mengerjakannya, dan menerima pembayaran ke dompet Tolongin yang bisa ditarik ke rekening.",
  },
  {
    q: "Apakah pembayaran aman?",
    a: "Aman. Pembayaran ditahan di sistem escrow Tolongin dan baru dilepas ke penolong setelah quest selesai dan kamu konfirmasi. Semua transaksi terenkripsi dan dilindungi. Tidak ada transaksi tunai yang ribet — semua lewat dompet digital.",
  },
  {
    q: "Siapa saja yang bisa menggunakan Tolongin?",
    a: "Tolongin untuk mahasiswa aktif dari perguruan tinggi mana saja di Indonesia. Baik kamu yang butuh bantuan maupun yang ingin membantu sambil mendapat penghasilan tambahan, selama bisa memverifikasi status mahasiswa, kamu bisa bergabung.",
  },
  {
    q: "Bagaimana sistem rating bekerja?",
    a: "Setelah quest selesai, kedua belah pihak saling memberi rating 1–5 bintang dan ulasan. Rating ini memengaruhi tingkat kepercayaan dan visibilitas di platform. Penolong dengan rating tinggi mendapat lebih banyak quest, dan customer dengan rating baik lebih mudah menemukan penolong.",
  },
];

function Item({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`rounded-2xl ring-1 transition-colors ${isOpen ? "ring-brand/30 bg-white shadow-soft" : "ring-line bg-white/60"}`}>
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className={`font-display font-bold text-[15px] sm:text-base ${isOpen ? "text-brand" : "text-ink"}`}>{q}</span>
        <span className={`grid place-items-center w-8 h-8 rounded-full shrink-0 transition-all ${isOpen ? "bg-brand text-white rotate-45" : "bg-brand-soft text-brand"}`}>
          <Plus className="w-4 h-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm sm:text-[15px] text-ink-soft leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="mt-4 font-display font-extrabold text-ink text-3xl sm:text-4xl tracking-tight text-balance">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-3 text-ink-soft text-base sm:text-lg text-balance">
            Masih ada yang bikin penasaran? Mungkin jawabannya ada di sini.
          </p>
        </div>

        <div className="mt-9 space-y-3">
          {faqs.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-8 text-center rounded-2xl bg-brand-soft p-5">
          <p className="text-sm text-ink-soft">Masih bingung? Tim kami siap bantu.</p>
          <a href="#" className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-brand hover:underline">
            Hubungi customer support →
          </a>
        </div>
      </div>
    </section>
  );
}
