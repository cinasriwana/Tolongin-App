import { motion } from "framer-motion";
import { Check } from "lucide-react";

const problems = [
  {
    img: "/img/problem 1.png", // Akan otomatis membaca problem 1 karena letaknya di path ini
    title: "Harus pindahan kos sendirian",
    desc: "Bawa kardus, tas, dan perlengkapan naik turun tangga sendiri. Capek banget.",
    tag: "Pindahan",
  },
  {
    img: "/img/problem 2.png", // Mempertahankan aset paket asli
    title: "Tidak sempat mengambil paket",
    desc: "Lagi kelas atau di luar kota, padahal paket sudah datang di lobi kos.",
    tag: "Paket",
  },
  {
    img: "/img/problem 3.png", // Akan otomatis membaca problem 3
    title: "Sedang sakit dan butuh makanan",
    desc: "Demam, nggak kuat keluar kos, tapi perut lapar dan obat habis.",
    tag: "Kesehatan",
  },
  {
    img: "/img/problem 4.png", // Akan otomatis membaca problem 4
    title: "Ingin penghasilan tambahan",
    desc: "Uang saku habis awal bulan, butuh cuan fleksibel tanpa ngotorin jadwal kuliah.",
    tag: "Cuan",
  },
];

export function ProblemSection() {
  return (
    <section id="fitur" className="relative py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="mt-4 font-display font-extrabold text-[#0D3D20] text-3xl sm:text-4xl tracking-tight text-balance">
            Pernah Mengalami Situasi Seperti Ini?
          </h2>
          <p className="mt-3 text-[#1B6B3A]/80 text-base sm:text-lg text-balance">
            Jadi mahasiswa itu nggak gampang. Untungnya, sekarang ada teman satu kampus yang siap nolongin.
          </p>
        </div>

        {/* Handcrafted Grid Layout */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col items-center text-center"
            >
              {/* Frame Lingkaran Karakter dengan Background #F2F7F4 */}
              <div className="relative w-48 h-48 rounded-full bg-[#F2F7F4] flex items-center justify-center mb-6 ring-4 ring-[#F2F7F4]/60 shadow-inner overflow-visible">
                
                {/* Image Ilustrasi Karakter */}
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-36 h-36 object-contain rounded-full transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Badge Tag Kategori (Mengambang Halus di Bawah Lingkaran) */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-white border border-[#1B6B3A]/10 px-3 py-1 text-[11px] font-extrabold text-[#1B6B3A] shadow-md tracking-wide">
                  {p.tag}
                </span>

                {/* Badge Centang Hijau Tua (#1B6B3A) di Sisi Kanan Atas */}
                <div className="absolute top-2 right-4 w-7 h-7 rounded-full bg-[#1B6B3A] text-white flex items-center justify-center shadow-md border-2 border-white transition-transform group-hover:scale-110 duration-300">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
              </div>

              {/* Teks Informasi Masalah */}
              <div className="mt-2 max-w-[240px]">
                <h3 className="font-display font-bold text-[#0D3D20] text-base leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-[#0D3D20]/60 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Kalimat Penutup Alur Kampus */}
        <p className="text-center text-sm text-[#1B6B3A]/70 font-semibold mt-16 max-w-2xl mx-auto border-t border-[#1B6B3A]/10 pt-6">
          Tolongin hadir untuk menghubungkan mahasiswa yang membutuhkan bantuan dengan mahasiswa yang siap membantu.
        </p>

      </div>
    </section>
  );
}