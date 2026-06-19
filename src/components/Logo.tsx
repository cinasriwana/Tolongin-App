import { cn } from "../lib/cn";
import logo from "../assets/logo.png";

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  const dark = variant === "light";

  return (
    <div className={cn("flex items-center gap-3 select-none", className)}>
      <img
        src={logo}
        alt="Tolongin Logo"
        className="h-10 w-auto object-contain"
      />

      <span
        className={cn(
          "font-display font-extrabold text-xl tracking-tight",
          dark ? "text-white" : "text-ink"
        )}
      >
        Tolongin
      </span>
    </div>
  );
}