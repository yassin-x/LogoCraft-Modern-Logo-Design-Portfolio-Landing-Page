import { cn } from "@/lib/utils";

export default function Footer() {
  const socialLinks = [
    {
      name: "facebook",
      href: "https://www.facebook.com/yassen.ibrahim.hamed",
      icon: "/svg/facebook.svg",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/yassen.ibrahim.hamed/",
      icon: "/svg/instagram.svg",
    },
    {
      name: "whatsapp",
      href: "https://wa.me/01096492845",
      icon: "/svg/whatsapp.svg",
    },
  ];
  return (
    <footer>
      <div className="container py-6 md:py-10 lg:py-12">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold">About Us</h3>
            <p className="text-muted-foreground text-sm">
              We are a team of passionate designers and developers.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold">Follow Us</h3>
            <div className="flex items-center gap-8">
              {socialLinks.map((link, index) => (
                <div key={index}>
                  <a href={link.href} target="_blank">
                    <img
                      src={link.icon}
                      alt={link.name}
                      className={cn(
                        "w-8 h-8 border border-accent p-1.5 rounded-full",
                        link.name === "whatsapp" && "bg-green-500",
                        link.name === "facebook" && "bg-blue-500",
                        link.name === "instagram" && "bg-pink-500"
                      )}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-accent text-center">
        <p className="text-muted-foreground text-sm py-2">
          &copy; {new Date().getFullYear()} LogoCraft. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
