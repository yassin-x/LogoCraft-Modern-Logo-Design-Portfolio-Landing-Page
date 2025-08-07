import { Button } from "../ui/button";
import Nav from "./Nav";
import { MessageCircleIcon } from "lucide-react";
export default function Header() {
  return (
    <header className="py-2 bg-background/50 backdrop-blur-2xl">
      <div className="container flex items-center justify-between w-full">
        <a
          href="/"
          aria-label="Go to homepage"
          className="text-2xl font-bold select-none heading-color"
        >
          LogoCraft
        </a>
        <div className="flex items-center gap-4">
          <Nav />
          <Button>
            <MessageCircleIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}
