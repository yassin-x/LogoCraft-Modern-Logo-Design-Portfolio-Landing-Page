import { HelpingHandIcon } from "lucide-react";
import MainHeading from "../MainHeading";

export default function Brands() {
  const brands = [
    {
      name: "Mondo Coffee",
      image: "/images/brand.jpg",
    },
    {
      name: "Hexa Digital",
      image: "/images/brand.jpg",
    },
    {
      name: "Breezy Travel",
      image: "/images/brand.jpg",
    },
    {
      name: "GreenTech Solutions",
      image: "/images/brand.jpg",
    },
  ];

  return (
    <section className="container">
      <MainHeading
        title="Partner with LogoCraft"
        subTitle="Promote your brand"
        icon={HelpingHandIcon}
        postion="left"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="text-center flex flex-col items-center space-y-2"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="w-24 h-24 rounded-full object-cover shadow-md"
            />
            <p className="text-sm font-medium text-muted-foreground text-center">
              {brand.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
