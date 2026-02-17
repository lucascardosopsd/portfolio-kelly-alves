import { cn } from "@/lib/utils";

interface SectionBandProps {
  tone: "white" | "brand";
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

const toneStyles: Record<SectionBandProps["tone"], string> = {
  white: "bg-surface-white",
  brand: "bg-surface-brand",
};

const glowStyles: Record<SectionBandProps["tone"], string> = {
  white: "from-transparent",
  brand: "from-primary/15",
};

export default function SectionBand({
  tone,
  id,
  className,
  containerClassName,
  children,
}: SectionBandProps) {
  return (
    <section id={id} className={cn("relative w-full overflow-hidden", toneStyles[tone], className)}>
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div
          className={cn(
            "absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-radial to-transparent",
            glowStyles[tone]
          )}
        />
      </div>
      <div className={cn("relative z-10 max-width", containerClassName)}>{children}</div>
    </section>
  );
}
