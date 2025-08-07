import GlassCard from "../ui/glass-card";

export default function Works({ category }: { category: number }) {
  const works = [
    {
      title: "ZenCraft",
      category: "Minimal",
      image: "/works/1.jpg",
      description:
        "Clean and simple logo with geometric lines and neutral tones.",
    },
    {
      title: "MonoType",
      category: "Minimal",
      image: "/works/2.jpg",
      description: "Modern black & white monogram logo for a tech brand.",
    },
    {
      title: "Focus Studio",
      category: "Minimal",
      image: "/works/3.jpg",
      description: "Elegant minimal wordmark for a creative agency.",
    },
    {
      title: "Brew Bros",
      category: "Coffee Shops",
      image: "/works/4.jpg",
      description:
        "Rustic logo design with a coffee bean and vintage badge style.",
    },
    {
      title: "Cafe Luna",
      category: "Coffee Shops",
      image: "/works/5.jpg",
      description: "Chic café logo with moon symbolism and elegant typography.",
    },
    {
      title: "Daily Grind",
      category: "Coffee Shops",
      image: "/works/6.jpg",
      description: "Bold and modern logo for a fast-paced urban coffee shop.",
    },
    {
      title: "Nexabyte",
      category: "Tech & Startups",
      image: "/works/7.jpg",
      description: "Futuristic logo with sharp lines for a software startup.",
    },
    {
      title: "CloudShift",
      category: "Tech & Startups",
      image: "/works/8.jpg",
      description: "Clean cloud-shaped logo for a SaaS company.",
    },
    {
      title: "VoltEdge",
      category: "Tech & Startups",
      image: "/works/9.jpg",
      description: "Energetic and powerful logo for a hardware tech brand.",
    },
  ];

  const MinimalLogos = works.slice(0, 3);
  const CoffeeShops = works.slice(3, 6);
  const Tech = works.slice(6);

  const all = [works, MinimalLogos, CoffeeShops, Tech];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3">
      {all[category - 1].slice(0, 6).map((work) => (
        <GlassCard className="h-full flex flex-col items-center gap-2">
          <div className="max-w-lg">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-48 rounded-2xl"
            />
          </div>
          <h2 className="text-lg font-bold heading-color">{work.title}</h2>
          <p className="text-muted-foreground text-center">
            {work.description}
          </p>
        </GlassCard>
      ))}
    </div>
  );
}
