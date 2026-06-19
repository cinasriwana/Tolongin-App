import { Star, Package, Users, Wallet, ShieldCheck, MapPin, Clock, Bell, Home, Search, User } from "lucide-react";

/** Phone 1 — User Dashboard screen. */
export function DashboardScreen() {
  return (
    <div className="h-full flex flex-col bg-bg">
      {/* header */}
      <div className="px-4 pb-3 pt-1 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-ink-soft">Selamat datang,</p>
          <p className="text-sm font-bold text-ink">Rani 👋</p>
        </div>
        <span className="relative grid place-items-center w-8 h-8 rounded-full bg-brand-soft">
          <Bell className="w-4 h-4 text-brand" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-gold" />
        </span>
      </div>

      {/* balance card */}
      <div className="mx-4 rounded-2xl bg-brand p-3.5 text-white shadow-glow">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-white/70">Penghasilan bulan ini</span>
          <Wallet className="w-4 h-4 text-gold" />
        </div>
        <p className="mt-1 text-xl font-extrabold">Rp 1.240.000</p>
        <div className="mt-2 flex gap-2">
          <span className="rounded-full bg-white/15 px-2 py-0.5 text-[9px]">+12 quest</span>
          <span className="rounded-full bg-gold px-2 py-0.5 text-[9px] font-semibold text-brand-deep">Tarik</span>
        </div>
      </div>

      {/* stats row */}
      <div className="mx-4 mt-3 grid grid-cols-3 gap-2">
        {[
          { icon: Star, v: "4.9", c: "text-gold" },
          { icon: Package, v: "37", c: "text-brand" },
          { icon: Users, v: "28", c: "text-brand" },
        ].map((s) => (
          <div key={s.v} className="rounded-xl bg-white shadow-soft p-2 flex flex-col items-center gap-0.5">
            <s.icon className={`w-3.5 h-3.5 ${s.c}`} />
            <span className="text-xs font-bold text-ink">{s.v}</span>
          </div>
        ))}
      </div>

      {/* active quest */}
      <p className="mx-4 mt-3 mb-1.5 text-[11px] font-bold text-ink">Quest Aktif</p>
      <div className="mx-4 rounded-2xl bg-white shadow-soft p-3">
        <div className="flex items-start gap-2.5">
          <span className="grid place-items-center w-8 h-8 rounded-xl bg-brand-soft shrink-0">
            <Package className="w-4 h-4 text-brand" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold text-ink truncate">Ambil paket di lobi kos</p>
            <p className="text-[10px] text-ink-soft flex items-center gap-1 mt-0.5">
              <MapPin className="w-2.5 h-2.5" /> Kos Melati · 1.2 km
            </p>
            <div className="mt-1.5 flex items-center justify-between">
              <span className="text-[10px] font-bold text-brand">Rp 15.000</span>
              <span className="flex items-center gap-1 text-[9px] text-gold-dark font-semibold">
                <Clock className="w-2.5 h-2.5" /> 4m
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-line overflow-hidden">
          <div className="h-full w-2/3 rounded-full bg-brand" />
        </div>
      </div>

      {/* verified badge */}
      <div className="mx-4 mt-3 mb-2 rounded-xl bg-brand-soft p-2.5 flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-brand shrink-0" />
        <p className="text-[10px] font-semibold text-brand">Akun mahasiswa terverifikasi</p>
      </div>

      {/* bottom nav */}
      <div className="mt-auto mx-3 mb-2 rounded-2xl bg-white shadow-soft px-3 py-2 flex items-center justify-around">
        {[Home, Search, User].map((I, i) => (
          <span key={i} className={`grid place-items-center w-8 h-8 rounded-xl ${i === 0 ? "bg-brand-soft" : ""}`}>
            <I className={`w-4 h-4 ${i === 0 ? "text-brand" : "text-ink-soft"}`} />
          </span>
        ))}
        <span className="grid place-items-center w-9 h-9 rounded-xl bg-gold -mt-3 shadow-glow">
          <span className="text-lg font-bold text-brand-deep leading-none">+</span>
        </span>
      </div>
    </div>
  );
}

/** Phone 2 — Available Quest List screen. */
export function QuestListScreen() {
  const quests = [
    { t: "Antar makan ke asrama", d: "Kos Indah · 0.8 km", p: "10.000", t2: "2m", tag: "Makanan", c: "bg-gold/20 text-gold-dark" },
    { t: "Bantu pindahan kamar", d: "Gedung C · 2.1 km", p: "40.000", t2: "15m", tag: "Darat", c: "bg-brand-soft text-brand" },
    { t: "Beli obat di apotek", d: "Apotek Sehat · 1.0 km", p: "12.000", t2: "5m", tag: "Kesehatan", c: "bg-rose-50 text-rose-600" },
    { t: "Cuci sepatu putih", d: "Ambil di lobi · 0.5 km", p: "20.000", t2: "30m", tag: "Jasa", c: "bg-sky-50 text-sky-600" },
  ];
  return (
    <div className="h-full flex flex-col bg-bg">
      <div className="px-4 pb-2 pt-1 flex items-center justify-between">
        <div>
          <p className="text-sm font-extrabold text-ink">Quest Tersedia</p>
          <p className="text-[10px] text-ink-soft">12 quest di sekitarmu</p>
        </div>
        <span className="grid place-items-center w-8 h-8 rounded-full bg-brand-soft">
          <Search className="w-4 h-4 text-brand" />
        </span>
      </div>

      {/* filter chips */}
      <div className="px-4 flex gap-1.5 overflow-hidden">
        {["Semua", "Dekat", "Makanan", "Darat"].map((c, i) => (
          <span key={c} className={`whitespace-nowrap rounded-full px-2.5 py-1 text-[9px] font-semibold ${i === 0 ? "bg-brand text-white" : "bg-white text-ink-soft shadow-soft"}`}>
            {c}
          </span>
        ))}
      </div>

      <div className="mx-3 mt-2 flex-1 overflow-hidden space-y-2">
        {quests.map((q, i) => (
          <div key={i} className="rounded-2xl bg-white shadow-soft p-2.5 flex items-center gap-2.5">
            <span className={`grid place-items-center w-9 h-9 rounded-xl shrink-0 ${q.c}`}>
              <Package className="w-4 h-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-ink truncate">{q.t}</p>
              <p className="text-[9px] text-ink-soft flex items-center gap-1 mt-0.5">
                <MapPin className="w-2.5 h-2.5" /> {q.d}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs font-extrabold text-brand">Rp {q.p}</p>
              <p className="text-[8px] text-gold-dark font-semibold flex items-center justify-end gap-0.5">
                <Clock className="w-2 h-2" /> {q.t2}
              </p>
            </div>
          </div>
        ))}
        <div className="rounded-2xl border border-dashed border-brand/30 p-2.5 text-center">
          <p className="text-[10px] text-ink-soft">Muat 8 quest lagi…</p>
        </div>
      </div>

      <div className="mt-auto mx-3 mb-2 rounded-2xl bg-white shadow-soft px-3 py-2 flex items-center justify-around">
        {[Home, Search, User].map((I, i) => (
          <span key={i} className={`grid place-items-center w-8 h-8 rounded-xl ${i === 1 ? "bg-brand-soft" : ""}`}>
            <I className={`w-4 h-4 ${i === 1 ? "text-brand" : "text-ink-soft"}`} />
          </span>
        ))}
        <span className="grid place-items-center w-9 h-9 rounded-xl bg-gold -mt-3 shadow-glow">
          <span className="text-lg font-bold text-brand-deep leading-none">+</span>
        </span>
      </div>
    </div>
  );
}
