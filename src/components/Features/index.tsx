import { Clock, Gem, PenTool, Sparkles } from "lucide-react";
import MainHeading from "../MainHeading";
import GlassCard from "../ui/glass-card";

export default function Features() {
  const featuresList = [
    {
      title: "Custom Logo Design",
      description:
        "Each logo is uniquely crafted to reflect your brand’s identity.",
      icon: PenTool,
    },
    {
      title: "Premium Quality",
      description:
        "High-resolution, vector-based logos ready for print and web.",
      icon: Gem,
    },
    {
      title: "Creative Concepts",
      description:
        "Multiple initial concepts to explore different styles and ideas.",
      icon: Sparkles,
    },
    {
      title: "Fast Turnaround",
      description: "Get your logo delivered in as little as 48 hours.",
      icon: Clock,
    },
  ];
  return (
    <section className="section-gap container space-y-8!">
      <MainHeading
        title="Features and Benefits"
        subTitle="Unlock the power of LogoCraft"
        icon={Sparkles}
        postion="right"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-center">
        {featuresList.map((feature, index) => {
          return (
            <GlassCard key={index} className="flex flex-col items-center gap-2 group h-full">
              <span className="border rounded-full p-2 group-hover:bg-accent transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-muted-foreground" />
              </span>
              <div>
                <h2 className="heading-color text-xl font-semibold text-center">
                  {feature.title}
                </h2>
                <p className="max-w-md text-muted-foreground text-center">
                  {feature.description}
                </p>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
