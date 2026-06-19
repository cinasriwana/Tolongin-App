import { motion } from "framer-motion";
import { Zap, ShieldCheck, Clock, CheckCircle } from "lucide-react";
import { PhoneFrame } from "./PhoneFrame";

const features = [
  { icon: Zap, label: "Cepat" },
  { icon: ShieldCheck, label: "Aman" },
  { icon: Clock, label: "Fleksibel" },
  { icon: CheckCircle, label: "Terpercaya" },
];

export function CustomerHelper() {
  return (
    <section id="tentang" className="relative py-12 lg:py-16 bg-white overflow-hidden">
      {/* Background soft blur decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] rounded-full bg-[#F2F7F4]/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header Section — Dikurangi mb-16 menjadi mb-8 agar lebih dekat ke karakter */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="mt-3 font-display font-extrabold text-[#0D3D20] text-3xl sm:text-4xl tracking-tight text-balance">
            Satu Platform untuk Membantu dan Dibantu
          </h2>
          <p className="mt-2 text-[#1B6B3A]/70 text-base sm:text-lg text-balance">
            Mau minta bantuan? Atau mau jadi penolong dan cuan? Tinggal pilih peranmu.
          </p>
        </div>

        {/* SUSUNAN 3 KOLOM UTAMA */}
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-6 items-center max-w-6xl mx-auto">
          
          {/* SISI KIRI — Customer (Karakter Diperbesar ke w-64 h-64) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:items-end lg:text-right"
          >
            <div className="relative max-w-sm flex flex-col items-center lg:items-end">
              {/* Badge Peran */}
              <span className="inline-block rounded-full bg-[#1B6B3A] px-3 py-1 text-xs font-bold text-white shadow-sm mb-3">
                Sebagai Customer
              </span>
              
              {/* Gambar Karakter Wanita Diperbesar sesuai image_4b7361.jpg */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 mb-2 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <img src="img/customer.png" alt="Customer" className="w-full h-full object-contain" loading="lazy" />
              </div>

              <h3 className="font-display font-bold text-[#0D3D20] text-xl">Butuh Bantuan?</h3>
              <p className="mt-1 text-sm text-[#0D3D20]/70 leading-relaxed max-w-[280px]">
                Buat quest, pilih penolong terverified, selesaiin kebutuhanmu. Bayar aman lewat dompet.
              </p>
            </div>
          </motion.div>

          {/* SISI TENGAH — HP Frame (Dikecilkan Menggunakan Elemen Transform Scale) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center w-full"
          >
            {/* Ditambahkan kelas transform scale-90 lg:scale-85 untuk memperkecil frame HP secara proporsional */}
            <div className="relative rotate-[-3deg] transform scale-90 lg:scale-85 origin-center z-20">
              <PhoneFrame>
                <div className="w-full h-full bg-[#F2F7F4] flex flex-col items-center justify-center p-5 text-center min-h-[380px]">
                  <img 
                    src="img/logo_wbg.png" 
                    alt="Logo Tolongin" 
                    className="w-full h-full object-contain max-w-[190px]" 
                    loading="lazy"
                  />
                </div>
              </PhoneFrame>
            </div>
          </motion.div>

          {/* SISI KANAN — Penolong (Karakter Diperbesar ke w-64 h-64) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="relative max-w-sm flex flex-col items-center lg:items-start">
              {/* Badge Peran */}
              <span className="inline-block rounded-full bg-[#F5B800] px-3 py-1 text-xs font-bold text-[#0D3D20] shadow-sm mb-3">
                Sebagai Helper
              </span>
              
              {/* Gambar Karakter Pria Diperbesar sesuai image_4b7361.jpg */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 mb-2 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                <img src="img/penolong.png" alt="Helper" className="w-full h-full object-contain" loading="lazy" />
              </div>

              <h3 className="font-display font-bold text-[#0D3D20] text-xl">Mau Dapat Cuan?</h3>
              <p className="mt-1 text-sm text-[#0D3D20]/70 leading-relaxed max-w-[280px]">
                Ambil quest yang cocok jadwalmu, kerjain, dan tarik penghasilan tambahan tiap minggu.
              </p>
            </div>
          </motion.div>

        </div>

        {/* BARIS PILAR FITUR BAWAH — Dikurangi dari mt-16 menjadi mt-8 agar merapat ke atas */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 max-w-4xl mx-auto">
          {features.map((feat, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2.5 bg-white border border-[#1B6B3A]/10 px-5 py-2 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-full bg-[#F2F7F4] flex items-center justify-center text-[#1B6B3A]">
                <feat.icon className="w-4 h-4 stroke-[2.5]" />
              </div>
              <span className="text-sm font-bold text-[#0D3D20]">{feat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
