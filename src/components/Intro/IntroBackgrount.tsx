import { cn } from "@/lib/utils";
import { GridPattern } from "../ui/grid-pattern";

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden z-[-50] ">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </div>
  );
}
