import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import Background from "./IntroBackgrount";

export default function Intro() {
  return (
    <section className="container section-gap">
      <Background />
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex flex-col mx-auto gap-4 max-w-md">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl heading-color text-center lg:text-start">
            LogoCraft — Landing Page for Logo Design Service
          </h1>
          <p className="max-w-md text-muted-foreground text-center lg:text-start">
            LogoCraft is a landing page for a logo design service. It features a
            hero section, about section, contact section, and a footer.
          </p>

          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <Button>
              <MessageCircle className="w-6 h-6" /> Contact us
            </Button>
            <Button variant={"outline"}>
              More...
            </Button>
          </div>
        </div>
        <div className="hidden lg:block mx-auto">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=512&q=80"
            alt="intro"
            className="max-w-md rounded-full"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
