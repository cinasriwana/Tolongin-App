import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    n: "1",
    imgSrc: "img/Buat Quest.png",
    title: "Buat Quest",
    desc: "Ceritakan kebutuhanmu, tentukan lokasi, dan pasang reward.",
  },
  {
    n: "2",
    imgSrc: "img/Temukan Penolong.png",
    title: "Temukan Penolong",
    desc: "Pilih Penolong terdekat dari komunitas mahasiswa terverifikasi.",
  },
  {
    n: "3",
    imgSrc: "img/Tugas Diselesaikan.png",
    title: "Tugas Diselesaikan",
    desc: "Penolong mengerjakan questmu dengan cepat dan bertanggung jawab.",
  },
  {
    n: "4",
    imgSrc: "img/Bayar & Beri Rating.png",
    title: "Bayar & Beri Rating",
    desc: "Bayar aman di aplikasi dan berikan rating untuk menjaga kualitas.",
  },
];

export function HowItWorks() {
  return (
    <section id="cara-kerja" className="relative pt-6 pb-16 lg:pt-8 lg:pb-24 bg-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#F2F7F4] blur-3xl opacity-50" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display font-extrabold text-[#0D3D20] text-3xl sm:text-4xl tracking-tight">
            Cara Kerja Tolongin
          </h2>
          <p className="mt-3 text-[#1B6B3A]/80 text-sm sm:text-base max-w-xl mx-auto">
            Hanya butuh 4 langkah sederhana untuk meminta bantuan atau mulai menghasilkan uang.
          </p>
        </div>

        {/* Timeline Grid Section */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          
          {/* Garis Penghubung Putus-putus Horizontal (Desktop) */}
          <div className="pointer-events-none absolute top-[64px] left-[12.5%] right-[12.5%] h-px hidden lg:block">
            <div className="h-full w-full bg-[repeating-linear-gradient(90deg,#1B6B3A_0_6px,transparent_6px_12px)] opacity-30" />
          </div>

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col items-center text-center group"
            >
              {/* CONTAINER UTAMA: Ukuran lingkaran dikunci dan dibuat overflow-hidden agar kaki karakter terpotong rapi */}
              <div className="relative w-36 h-36 rounded-3xl bg-[#F2F7F4] shadow-sm flex items-end justify-center mb-5 transition-all duration-300 group-hover:scale-105 overflow-hidden border border-[#1B6B3A]/10">
                
                {/* Gambar ilustrasi dibuat absolute mengisi penuh area bawah lingkaran agar tampak besar dan padat */}
                <img 
                  src={s.imgSrc} 
                  alt={s.title} 
                  className="w-[90%] h-[90%] object-contain object-bottom select-none z-10" 
                  loading="lazy"
                />

                {/* BADGE NOMOR: Diposisikan di kiri atas luar area gambar agar bersih seperti image_497f9e.png */}
                <span className="absolute top-2 left-2 w-6 h-6 rounded-full bg-[#1B6B3A] text-white text-xs font-extrabold flex items-center justify-center shadow-sm z-20">
                  {s.n}
                </span>
              </div>

              {/* Konten Teks Keterangan Alur */}
              <div className="max-w-[240px]">
                <h3 className="font-display font-bold text-[#0D3D20] text-lg tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#0D3D20]/60 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Garis Alur Putus-putus Vertikal di Mobile/Tablet */}
              {i < steps.length - 1 && (
                <div className="lg:hidden h-10 w-px border-l-2 border-dashed border-[#1B6B3A]/20 my-4" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
