import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="bg-primary text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          Time to Boost Your Online Impact!
        </h2>
        <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto">
          I create user-friendly web solutions and clever automations that drive
          real results for your business. Let’s build something that stands out
          online.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Launch Your Project Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
