import { GalleryHorizontal } from "lucide-react";
import MainHeading from "../MainHeading";
import { Button } from "../ui/button";
import { useState } from "react";
import Works from "./Works";

export default function Portfolio() {
  const categoris = [
    {
      index: 1,
      name: "All",
    },
    {
      index: 2,
      name: "Minimal Logos",
    },
    {
      index: 3,
      name: "Coffee Shops",
    },
    {
      index: 4,
      name: "Tech & Startups",
    },
  ];
  const [categoryNum, setCategory] = useState(1);
  return (
    <section className="section-gap container space-y-6" id={"portfolio"}>
      <MainHeading
        title="Logo Portfolio"
        subTitle="Browse hand-crafted logos across."
        icon={GalleryHorizontal}
        postion="left"
      />
      <div className="flex items-center justify-center gap-3 flex-wrap">
        {categoris.map((category) => (
          <Button
            variant={category.index === categoryNum ? "default" : "outline"}
            key={category.index}
            className="rounded-full"
            onClick={() => setCategory(category.index)}
            size="sm"
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div>
        <Works category={categoryNum} />
      </div>
    </section>
  );
}
