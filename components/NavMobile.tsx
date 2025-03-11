"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>
            Access quick links to navigate through my portfolio.
          </SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-4">
          <Link
            href="/"
            className="text-foreground hover:text-primary transition-colors"
            onClick={closeSheet}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary transition-colors"
            onClick={closeSheet}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-foreground hover:text-primary transition-colors"
            onClick={closeSheet}
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="text-foreground hover:text-primary transition-colors"
            onClick={closeSheet}
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary transition-colors"
            onClick={closeSheet}
          >
            Contact
          </Link>
        </nav>
        <div className="mt-8">
          <Button className="w-full" onClick={closeSheet} asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
