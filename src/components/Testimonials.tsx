import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rani Pratiwi",
    role: "Teknik Informatika",
    uni: "Universitas Indonesia",
    img: "img/testi 1.png",
    rating: 5,
    review:
      "Asli ini penyelamat anak kosan banget. Kemarin paket bulanan dari rumah udah sampai di pos satpam tapi mager banget ngambil karena kosan gapake lift. Iseng bikin quest di Tolongin, bayar ceban, eh langsung diambilin sama kating tingkat akhir yang kebetulan lagi lewat. Praktis parah!",
    tag: "Customer",
  },
  {
    name: "Angela Saharja",
    role: "Manajemen",
    uni: "Universitas Gadjah Mada",
    img: "img/testi 2.png",
    rating: 5,
    review:
      "Pas awal semester harus pindah kosan dan gak ada teman yang bisa dimintain tolong karena pada balik kampung. Nyoba pakai Tolongin buat nyari bala bantuan angkat-angkat kasur sama lemari. Dapet penolong yang sat-set dan ramah, harganya juga ramah di kantong mahasiswa.",
    tag: "Customer",
  },
  {
    name: "Muhammad Sumbul",
    role: "Ilmu Komunikasi",
    uni: "Universitas Airlangga",
    img: "img/testi 3.png",
    rating: 5,
    review:
      "Lumayan banget buat nambah uang jajan daripada gabut nungguin jam kuliah berikutnya di kantin. Biasanya gua ambil quest yang ringan-ringan aja kayak beliin makan siang atau nitip fotokopi modul. Sejam-dua jam kelar, cuan langsung masuk dompet aplikasi.",
    tag: "Penolong",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-4 font-display font-extrabold text-ink text-3xl sm:text-4xl tracking-tight text-balance">
            Apa Kata Mereka?
          </h2>
          <p className="mt-3 text-ink-soft text-base sm:text-lg text-balance">
            Ribuan mahasiswa sudah merasakan manfaat Tolongin. Ini sebagian cerita mereka.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl bg-white ring-1 ring-line shadow-soft p-6 hover:shadow-float transition-shadow flex flex-col"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-brand-soft" />
              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 text-ink leading-relaxed text-[15px] flex-1">
                "{t.review}"
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 pt-4 border-t border-line">
                <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover ring-2 ring-brand-soft" loading="lazy" />
                <div className="min-w-0">
                  <p className="font-bold text-ink text-sm flex items-center gap-2">
                    {t.name}
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${t.tag === "Penolong" ? "bg-gold/15 text-gold-dark" : "bg-brand-soft text-brand"}`}>
                      {t.tag}
                    </span>
                  </p>
                  <p className="text-xs text-ink-soft truncate">{t.role} · {t.uni}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
