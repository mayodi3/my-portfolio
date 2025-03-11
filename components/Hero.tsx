import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-background py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Take Charge of the Digital World
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
              I build easy-to-use websites and smart tools with automation and
              AI to help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/services">
                <Button size="lg">Explore Services</Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline">
                  View Projects <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full max-w-md mx-auto md:max-w-none">
            <Image
              src="/Mayodi Background 1.png"
              alt="Modern workspace with cutting-edge technology, featuring a sleek desk setup with multiple monitors and innovative gadgets"
              width={600}
              height={400}
              priority
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
