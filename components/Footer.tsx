import Image from "next/image";
import Link from "next/link";
import SocialIcons from "./SocialIcons";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-foreground py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="Your company logo"
              width={50}
              height={50}
              className="w-16 h-12 rounded-md"
            />
            <p className="text-muted-foreground max-w-xs">
              Empowering businesses through innovative technology solutions and
              expert web development.
            </p>
            <SocialIcons />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold">Contact Info</h3>
            <p className="text-muted-foreground">
              60, Maragoli, Mbale Gisambayi Road
            </p>
            <p className="text-muted-foreground">Phone: +254707317185</p>
            <p className="text-muted-foreground">
              Email: mayodisaac3@gmail.com
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} Isaac Mayodi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
