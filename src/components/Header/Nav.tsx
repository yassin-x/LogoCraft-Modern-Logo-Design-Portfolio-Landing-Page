import { useState } from "react";
import { Button } from "../ui/button";
import { Home, LayoutGrid, Menu, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    {
      title: "Home",
      icon: Home,
      href: "/",
    },
    {
      title: "Portfolio",
      icon: LayoutGrid,
      href: "#portfolio",
    },
  ];

  return (
    <nav>
      <ul className="hidden md:flex items-center flex-row gap-4">
        {links.map((link) => (
          <li key={link.title}>
            <a
              href={link.href}
              className="text-muted-foreground hover:text-blue-500 transition-colors duration-300 hover:underline underline-offset-4 flex items-center gap-1"
            >
              <link.icon className="w-4 h-4" />
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <Button
        variant={"ghost"}
        className="md:hidden block"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? (
          <XIcon className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </Button>

      <div
        className={cn(
          "bg-background w-full overflow-hidden fixed top-13 rounded-b-md shadow-md left-0 z-50 p-6 flex-col md:-translate-y-full md:hidden transition-transform duration-300 ease-in-out",
          openMenu ? "translate-y-0 flex" : "-translate-y-full top-0"
        )}
      >
        <ul className="flex flex-col items-start gap-4 mt-4">
          {links.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className={cn(
                  "hover:text-green-500 text-muted-foreground hover:underline underline-offset-4 transition-all duration-200 ease-in-out flex items-center gap-2",
                  location.pathname === link.href && "text-green-500"
                )}
              >
                <link.icon className="w-4 h-4" />
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
