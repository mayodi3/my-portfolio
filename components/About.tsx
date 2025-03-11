import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full max-w-md mx-auto md:w-1/2 md:max-w-none">
            <Image
              src="/Mayodi.jpg"
              alt="Portrait of the developer"
              width={500}
              height={500}
              className="rounded-full shadow-lg w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] object-cover"
            />
          </div>
          <Card className="md:w-1/2 space-y-4 md:space-y-6">
            <CardContent className="pt-6">
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-white">
                About Me
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                I’m passionate about turning big ideas into clear, useful
                digital solutions. I build websites and smart apps that take
                complicated tasks and make them easy. My goal is to help you
                overcome challenges and see real growth with straightforward,
                reliable technology.
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" /> Expert
                  Full-stack Development
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" />
                  Clear Process Automation
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" /> USSD App
                  Solutions
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-primary" /> AI and Machine
                  Learning Made Simple
                </li>
              </ul>
              <Button>
                <Link href="/resume.pdf">Download Resume</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
