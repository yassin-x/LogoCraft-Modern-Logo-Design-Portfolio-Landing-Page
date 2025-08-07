import { cn } from "@/lib/utils";

interface GlassCardProps {
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function GlassCard({
  className,
  children,
  style,
}: GlassCardProps) {
  return (
    <div
      style={style}
      className={cn(
        "relative z-10 overflow-hidden rounded-2xl shadow-md transition-all p-4 sm:p-6",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 -z-10 pointer-events-none",
          "bg-background/10",
          "backdrop-blur-2xl"
        )}
      />
      {children}
    </div>
  );
}
