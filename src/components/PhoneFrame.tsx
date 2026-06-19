import type { ReactNode } from "react";
import { cn } from "../lib/cn";

/** A realistic smartphone frame wrapping an arbitrary screen UI. */
export function PhoneFrame({
  children,
  className,
  label,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      <div className="relative w-[270px] h-[560px] rounded-[2.6rem] bg-[#0F3D20] p-2.5 shadow-float ring-1 ring-black/10">
        {/* side buttons */}
        <span className="absolute -left-1 top-28 w-1.5 h-10 rounded-l bg-[#0F3D20]/70" />
        <span className="absolute -left-1 top-44 w-1.5 h-16 rounded-l bg-[#0F3D20]/70" />
        <span className="absolute -right-1 top-36 w-1.5 h-20 rounded-r bg-[#0F3D20]/70" />
        {/* screen */}
        <div className="relative w-full h-full rounded-[2.1rem] bg-white overflow-hidden">
          {/* status bar */}
          <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between px-6 pt-2.5 text-[10px] font-semibold text-ink">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="flex gap-0.5 items-end">
                <span className="w-0.5 h-1.5 rounded-sm bg-ink/80" />
                <span className="w-0.5 h-2 rounded-sm bg-ink/80" />
                <span className="w-0.5 h-2.5 rounded-sm bg-ink/80" />
                <span className="w-0.5 h-3 rounded-sm bg-ink" />
              </span>
              <span className="w-5 h-2.5 rounded-sm border border-ink/40 relative">
                <span className="absolute inset-0.5 rounded-[1px] bg-ink/80" />
                <span className="absolute -right-1.5 top-0.5 w-0.5 h-1.5 rounded-r bg-ink/40" />
              </span>
            </span>
          </div>
          {/* notch */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 w-20 h-5 rounded-full bg-[#0F3D20]" />
          <div className="absolute inset-0 pt-8">{children}</div>
        </div>
      </div>
      {label && (
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink/80 px-3 py-1 text-[11px] font-medium text-white backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}
