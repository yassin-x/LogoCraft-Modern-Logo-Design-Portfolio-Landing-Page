import { Quote } from "lucide-react";
import MainHeading from "../MainHeading";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager at NovaTech",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote:
        "Working with Weblix was an absolute pleasure! They delivered our landing page ahead of schedule with exceptional quality and performance.",
    },
    {
      name: "Mohamed ElSayed",
      role: "CEO of DevRoots",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote:
        "ياسين فاهم جداً في شغله، قدر يحول فكرتنا لمنتج فعلي في وقت قصير جدًا، والنتيجة كانت احترافية ومتوافقة مع الـ SEO 100٪.",
    },
    {
      name: "Emily Carter",
      role: "Product Designer at Flowify",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      quote:
        "Great communication and attention to detail. The UI/UX was sleek and modern—exactly what we needed for our product launch.",
    },
  ];

  return (
    <section className="section-gap bg-secondary p-4">
      <MainHeading
        title="Trusted by creators and businesses"
        subTitle="Honest feedback from real clients."
        icon={Quote}
        postion="right"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-5 container">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="p-4 rounded-md bg-card flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-full w-24 h-24 select-none border-4 border-card -mt-12 bg-background"
            />
            <div className="mt-4">
              <span className="heading-color font-bold block">
                {testimonial.name}
              </span>
              <span className="text-muted-foreground text-sm block">
                {testimonial.role}
              </span>
            </div>
            <p className="text-muted-foreground text-sm mt-4">
              "{testimonial.quote}"
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
