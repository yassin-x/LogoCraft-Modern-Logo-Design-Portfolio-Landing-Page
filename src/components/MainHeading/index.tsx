import type { LucideProps } from "lucide-react";

export default function MainHeading({
  title,
  subTitle,
  icon: Icon,
  postion = "left",
}: {
  title: string;
  subTitle: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  postion?: "left" | "right";
}) {
  return (
    <div className="mb-6 flex items-center justify-center gap-4">
      {Icon && postion === "left" && (
        <div className="rounded-xl bg-primary/10 p-3 text-primary dark:bg-primary/20">
          <Icon className="h-6 w-6" />
        </div>
      )}

      <div>
        <h1 className="text-xl font-bold heading-color sm:text-2xl">{title}</h1>
        <p className="text-sm text-muted-foreground">{subTitle}</p>
      </div>

      {Icon && postion === "right" && (
        <div className="rounded-xl bg-primary/10 p-3 text-primary dark:bg-primary/20">
          <Icon className="h-6 w-6" />
        </div>
      )}
    </div>
  );
}
