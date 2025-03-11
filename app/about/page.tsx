import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const AboutPage = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Django",
    "SQL",
    "NoSQL",
    "RESTful APIs",
    "GraphQL",
    "Docker",
    "AWS",
    "Azure",
    "CI/CD",
    "Agile Methodologies",
    "UI/UX Design",
    "Responsive Web Design",
  ];

  return (
    <div className="bg-background min-h-screen">
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <Image
                src="/Mayodi Transparent.png"
                alt="Isaac Mayodi working on a project"
                width={600}
                height={600}
                className="rounded-lg shadow-xl object-cover w-auto h-300px"
              />
            </div>
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground">
                Hi, I&apos;m <span className="font-bold">Mayodi Isaac</span>. I
                love turning ideas into simple, real work. I work hard and
                listen closely to your needs so we can make something great
                together. Let&apos;s create a project that makes you proud!
              </p>
              <Button size="lg">
                <Link href="/resume.pdf">Download Resume</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">My Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Early Beginnings
                </h3>
                <p className="text-muted-foreground">
                  My fascination with technology began as a teenager. I built my
                  first website at 18 and never looked back. Driven by passion,
                  I pursued a degree in Computer Science and proudly
                  graduated—laying the foundation for my digital career.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Professional Growth
                </h3>
                <p className="text-muted-foreground">
                  After graduating, I worked with several startups, honing my
                  skills in full-stack development. I&apos;ve since led teams on
                  projects ranging from e-commerce platforms to AI-integrated
                  systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            Skills & Expertise
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-8">My Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  User-Centric Design
                </h3>
                <p className="text-muted-foreground">
                  I believe in creating solutions that not only solve problems
                  but also provide an exceptional user experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Continuous Learning
                </h3>
                <p className="text-muted-foreground">
                  The tech world evolves rapidly, and I&apos;m committed to
                  staying at the forefront of new technologies and
                  methodologies.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">
                  Collaborative Spirit
                </h3>
                <p className="text-muted-foreground">
                  I thrive in team environments and believe the best solutions
                  come from diverse perspectives working together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
